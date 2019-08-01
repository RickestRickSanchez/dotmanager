#!/usr/bin/env python3

# Copyright 2018 Erik Schulz
#
# This file is part of uberdot.
#
# Dotmanger is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Dotmanger is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Dotmanger.  If not, see <http://www.gnu.org/licenses/>.


import hashlib
import os
import sys
import time
from abc import abstractmethod
from shutil import get_terminal_size
from subprocess import PIPE
from subprocess import Popen


# Constants and helpers
###############################################################################

LINEWDTH = get_terminal_size().columns  # Width of a line
DIRNAME = os.path.dirname(os.path.abspath(sys.modules[__name__].__file__))
# Global used to store success of all tests
global_result = True


def dircheck(environ, dir_tree):
    """Checks if dir_tree matches the actual directory
    tree in the filesystem"""

    def check_owner(path, props, is_link=False):
        """For owner permissions we only look up if its a normal
        user or the root user because we can't create other
        users just for the sake of these tests"""
        stat = os.lstat if is_link else os.stat
        if "rootuser" not in props:
            props["rootuser"] = False
        if "rootgroup" not in props:
            props["rootgroup"] = False
        if bool(stat(path).st_uid) == props["rootuser"]:
            user = "root" if props["rootuser"] else "user"
            raise ValueError((False, path + " is a not owned by " + user))
        if bool(stat(path).st_gid) == props["rootgroup"]:
            group = "root" if props["rootgroup"] else "group"
            raise ValueError((False, path + " is a not owned by " + group))

    def check_permission(path, permission):
        perm_real = str(oct(os.stat(path).st_mode))[-3:]
        if perm_real != str(permission):
            raise ValueError((False, path + " has permission " + perm_real))

    for dir_name, dir_props in dir_tree.items():
        # Add environment to directory
        dir_name = os.path.normpath(os.path.join(environ, dir_name))
        # Directory existance
        if not os.path.isdir(dir_name):
            raise ValueError((False, dir_name + " is a not a directory"))
        # Directory permission
        if "permission" in dir_props:
            check_permission(dir_name, dir_props["permission"])
        # Directory owner
        check_owner(dir_name, dir_props)
        # Files

        if "files" in dir_props:
            for file_props in dir_props["files"]:
                file_path = os.path.join(dir_name, file_props["name"])
                # File existance
                if os.path.islink(file_path) or not os.path.isfile(file_path):
                    raise ValueError((False, file_path + " is a not a file"))
                # File permission
                if "permission" in file_props:
                    check_permission(file_path, file_props["permission"])
                # File owner
                check_owner(file_path, file_props)
                # File content
                md5 = hashlib.md5(open(file_path, "rb").read()).hexdigest()
                if "content" in file_props and md5 != file_props["content"]:
                    raise ValueError((False, file_path + " has wrong content"))
        # Links
        if "links" in dir_props:
            for link_props in dir_props["links"]:
                link_path = os.path.join(dir_name, link_props["name"])
                # Link existance
                if not os.path.islink(link_path):
                    raise ValueError((False, link_path + " is a not a link"))
                # Link permission
                if "permission" in link_props:
                    check_permission(link_path, link_props["permission"])
                # Link owner
                check_owner(link_path, link_props, True)
                # Link target
                target_path = os.path.normpath(
                    os.path.join(dir_name, os.readlink(link_path))
                )
                link_props["target"] = os.path.abspath(link_props["target"])
                if target_path != link_props["target"]:
                    msg = link_path + " should point to " + link_props['target']
                    msg += ", but points to " + target_path
                    raise ValueError((False, msg))
                # Link target content
                md5 = hashlib.md5(open(target_path, "rb").read()).hexdigest()
                if "content" in link_props and md5 != link_props["content"]:
                    raise ValueError((False, link_path + " has wrong content"))

# Test classes
###############################################################################

class RegressionTest():
    """This is the abstract base class for all regression tests.
    It provides simple start and check functionality"""
    def __init__(self, name, cmd_args, save="default"):
        self.name = name
        self.cmd_args = ["python3", "../../udot.py",
                         "--config", "regressiontest.ini",
                         "--save", save] + cmd_args
        self.save = save
        self.environ = os.path.join(DIRNAME, "environment-" + self.save)

    def start(self):
        """Starts the test and runs all checks"""
        pre = self.pre_check()
        if not pre[0]:
            return {"success": False, "phase": "pre", "cause": pre[1]}
        run = self.run()
        if not run[0]:
            return {"success": False, "phase": "run", "cause": run[1], "msg": run[2]}
        post = self.post_check()
        if not post[0]:
            return {"success": False, "phase": "post", "cause": post[1]}
        return {"success": True}

    def run(self):
        """Runs the test. In this standart implementation a test is considered
        successful if uberdot terminates with exitcode 0."""
        process = Popen(self.cmd_args, stderr=PIPE)
        _, error_msg = process.communicate()
        exitcode = process.returncode
        return not exitcode, exitcode, error_msg

    def cleanup(self):
        """Resets test environment and installed files"""
        installed_file = os.path.join(DIRNAME, "data/installed")
        installed_file = os.path.join(installed_file, self.save + ".json")
        # Reset environment and installed dir with git
        process = Popen(["git", "checkout", "HEAD", "--", self.environ,
                         DIRNAME + "/data/installed"], stderr=PIPE)
        _, error_msg = process.communicate()
        if process.returncode:  # Exitcode is > 0, so git failed
            print(error_msg)
            raise ValueError("git-checkout failed")
        process = Popen(["git", "clean", "-fdq", "--", self.environ,
                         DIRNAME + "/installed"], stderr=PIPE)
        _, error_msg = process.communicate()
        if process.returncode:  # Exitcode is > 0, so git failed
            print(error_msg)
            raise ValueError("git-clean failed")

    @abstractmethod
    def pre_check(self):
        """The check executed before the test to make sure the test is
        run on the correct preconditions"""

    @abstractmethod
    def post_check(self):
        """The check executed after the test to make sure the test
        behave like expected"""

    def success(self):
        """Execute this test. Expect it to be successful"""
        global global_result
        self.cleanup()
        now = time.time()
        result = self.start()
        runtime = str(int((time.time()-now)*1000)) + "ms"
        print(LINEWDTH*"-")
        print("\033[1m" + self.name + ":", end="")
        if result["success"]:
            print('\033[92m' + " Ok" + '\033[0m', end="")
            print(runtime.rjust(LINEWDTH-len(self.name)-4))
        else:
            print('\033[91m\033[1m' + " FAILED" + '\033[0m'
                  + " in " + str(result["phase"]), end="")
            print(runtime.rjust(LINEWDTH-len(self.name)-15))
            print("\033[1mCause: \033[0m" + str(result["cause"]))
            if "msg" in result:
                print("\033[1mError Message:\033[0m")
                print(result["msg"].decode("utf-8"))
        global_result = global_result and result["success"]
        self.cleanup()
        return result["success"]

    def fail(self, phase, cause):
        """Execute this test. Expect a certain error"""
        global global_result
        self.cleanup()
        now = time.time()
        result = self.start()
        runtime = str(int((time.time()-now)*1000)) + "ms"
        print(LINEWDTH*"-")
        print("\033[1m" + self.name + ":", end="")
        if not result["success"]:
            if result["cause"] != cause:
                print('\033[91m\033[1m' + " FAILED" + '\033[0m', end="")
                print(runtime.rjust(LINEWDTH-len(self.name)-8))
                print("\033[1mExpected error: \033[0m" + str(cause))
                print("\033[1mActual error: \033[0m" + str(result["cause"]))
                if "msg" in result:
                    print("\033[1mError Message:\033[0m")
                    print(result["msg"].decode("utf-8"))
            else:
                print('\033[92m' + " Ok" + '\033[0m', end="")
                print(runtime.rjust(LINEWDTH-len(self.name)-4))
        else:
            print('\033[91m\033[1m' + " FAILED" + '\033[0m', end="")
            print(runtime.rjust(LINEWDTH-len(self.name)-8))
            print("\033[93m\033[1mExpected error in " + phase + " did not" +
                  " occur!\033[0m")
            print("\033[1mExpected error:\033[0m " + str(cause))
        global_result = global_result and not result["success"] and result["cause"] == cause
        self.cleanup()
        return not result["success"]


class DirRegressionTest(RegressionTest):
    """Regression check if uberdot makes the expected
    changes to the filesystem"""
    def __init__(self, name, cmd_args, before, after, save="default"):
        super().__init__(name, cmd_args, save)
        self.before = before
        self.after = after

    def pre_check(self):
        try:
            dircheck(self.environ, self.before)
        except ValueError as err:
            return err.args[0]
        return True, ""

    def post_check(self):
        try:
            dircheck(self.environ, self.after)
        except ValueError as err:
            return err.args[0]
        return True, ""


class OutputRegressionTest(RegressionTest):
    """Regression tests for output."""
    def __init__(self, name, cmd_args, before, save="default"):
        super().__init__(name, cmd_args, save)
        self.before = before
        # self.output = output

    def pre_check(self):
        try:
            dircheck(self.environ, self.before)
        except ValueError as err:
            return err.args[0]
        return True, ""

    def run(self):
        process = Popen(self.cmd_args, stdout=PIPE, stderr=PIPE)
        msg, error = process.communicate()
        exitcode = process.returncode
        if exitcode:
            return False, exitcode, error
        # if msg != self.output:
        #     error = "Output was:\n" + msg
        #     return False, "Output is not as expected", error
        return True, ""

    def post_check(self):
        return True, ""


# Test data
###############################################################################

before = {
    ".": {
        "files": [{"name": "untouched.file"}],
    }
}

after_nooptions = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "name2",
                "target": "files/name2",
            },
            {
                "name": "name3",
                "target": "files/name3",
            }
        ],
    }
}

after_diroptions = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "name5",
                "target": "files/name5",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "name2",
                "target": "files/name2",
            }
        ],
    },
    "subdir/subsubdir": {
        "links": [
            {
                "name": "name3",
                "target": "files/name3",
            },
            {
                "name": "name4",
                "target": "files/name4",
            }
        ],
    },
    "subdir2": {
        "links": [
            {
                "name": "name6",
                "target": "files/name6",
            },
            {
                "name": "name7",
                "target": "files/name7",
            }
        ],
    }
}

after_nameoptions = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name",
                "target": "files/name1",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "name",
                "target": "files/name2",
            },
            {
                "name": "name6",
                "target": "files/name5",
            }
        ],
    },
    "subdir/subsubdir": {
        "links": [
            {
                "name": "name",
                "target": "files/name3",
            }
        ],
    }
}

after_prefixsuffixoptions = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": ".name1",
                "target": "files/name1",
            },
            {
                "name": "name2bla",
                "target": "files/name2",
            },
            {
                "name": "name5.png",
                "target": "files/name5",
            },
            {
                "name": "name6",
                "target": "files/name6",
            },
            {
                "name": "name11.png",
                "target": "files/name11.file",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "name3",
                "target": "files/name3",
            }
        ],
    },
    "name4": {
        "links": [
            {
                "name": "test",
                "target": "files/name4",
            }
        ],
    }
}

after_links = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "name2",
                "target": "files/name2",
            },
            {
                "name": "name",
                "target": "files/name3",
            },
            {
                "name": "filename4",
                "target": "files/name4",
            },
            {
                "name": "filename5",
                "target": "files/name5",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "encrypt8",
                "target": "data/decrypted/name_encrypt8#d6eb32081c822ed572b70567826d9d9d",
                "content": "d6eb32081c822ed572b70567826d9d9d"
            },
            {
                "name": "encrypt9",
                "target": "data/decrypted/name_encrypt9#e59ab101cf09636fc06d10bf3d56a5cc",
                "content": "e59ab101cf09636fc06d10bf3d56a5cc"
            }
        ],
    }
}

after_decrypt = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name_encrypt8",
                "target": "data/decrypted/name_encrypt8#d6eb32081c822ed572b70567826d9d9d",
                "content": "d6eb32081c822ed572b70567826d9d9d"
            },
            {
                "name": "encrypt8",
                "target": "data/decrypted/name_encrypt8#d6eb32081c822ed572b70567826d9d9d",
                "content": "d6eb32081c822ed572b70567826d9d9d"
            },
            {
                "name": "encrypt9",
                "target": "data/decrypted/name_encrypt9#e59ab101cf09636fc06d10bf3d56a5cc",
                "content": "e59ab101cf09636fc06d10bf3d56a5cc"
            }
        ],
    }
}

after_merge = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "merge1",
                "target": "data/merged/merge1#6ddb4095eb719e2a9f0a3f95677d24e0",
                "content": "6ddb4095eb719e2a9f0a3f95677d24e0"
            },
            {
                "name": "merge3",
                "target": "data/merged/merge2#04b6c550264c39e8b533d7f7b977415e",
                "content": "04b6c550264c39e8b533d7f7b977415e"
            }
        ],
    }
}

after_pipe = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "file",
                "target": "data/piped/file#fdb6e0c029299e6aabca0963120f0fa0",
                "content": "fdb6e0c029299e6aabca0963120f0fa0"
            }
        ],
    }
}

after_nesteddynamic = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "merge1",
                "target": "data/merged/merge1#526f328977744debf953a2c76c2c6169",
                "content": "526f328977744debf953a2c76c2c6169"
            },
            {
                "name": "merge2",
                "target": "data/piped/merge2#0281651775d0a19e648acf333cabac2f",
                "content": "0281651775d0a19e648acf333cabac2f"
            }
        ],
    }
}

after_superprofile = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "name2",
                "target": "files/name2",
            },
            {
                "name": "name3",
                "target": "files/name3",
            },
            {
                "name": "name4",
                "target": "files/name4",
            },
            {
                "name": "name5",
                "target": "files/name5",
            },
            {
                "name": "name6",
                "target": "files/name6",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "prefix_name2",
                "target": "files/name2",
            },
            {
                "name": "prefix_name3",
                "target": "files/name3",
            },
            {
                "name": "prefix_name4",
                "target": "files/name4",
            },
            {
                "name": "prefix_name5",
                "target": "files/name5",
            },
            {
                "name": "prefix_name6",
                "target": "files/name6",
            }
        ],
    }
}

after_tags = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "name2",
                "target": "files/tag1%name2",
            },
            {
                "name": "name3",
                "target": "files/tag2%name3",
            },
            {
                "name": "name4",
                "target": "files/name4",
            },
            {
                "name": "name5",
                "target": "files/tag3%name5",
            },
            {
                "name": "name6",
                "target": "files/tag3%name6",
            }
        ],
    }
}

after_optional = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name2",
                "target": "files/tag1%name2",
            },
            {
                "name": "name3",
                "target": "files/tag2%name3",
            },
            {
                "name": "name4",
                "target": "files/name4",
            },
            {
                "name": "name10",
                "target": "files/tag%name10",
            }
        ],
    }
}

after_skiproot = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            }
        ],
    }
}

after_updatediroptions = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "name1",
                "target": "files/name1",
            },
            {
                "name": "file",
                "target": "files/name5",
            }
        ],
    },
    "subdir": {
        "links": [
            {
                "name": "name3",
                "target": "files/name3",
            },
            {
                "name": "name2",
                "target": "files/name2",
            }
        ],
    }
}

# This dirtree works only with environment-default
after_extlink = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "test1",
                "target": "environment-default/untouched.file"
            }
        ]
    },
    "test2": {
        "links": [
            {
                "name": "untouched.file",
                "target": "environment-default/untouched.file"
            }
        ]
    }
}


after_replace = {
    ".": {
        "files": [{"name": "untouched.file"}],
        "links": [
            {
                "name": "file2",
                "target": "files/name2"
            },
            {
                "name": "file3",
                "target": "files/name3"
            }
        ]
    },
    "subdir": {
        "links": [
            {
                "name": "file2",
                "target": "files/tag1%name2"
            },
            {
                "name": "file3",
                "target": "files/name3"
            }
        ]
    }
}

# Test execution
###############################################################################

owd = os.getcwd()
os.chdir(DIRNAME)

DirRegressionTest("Simple",
                  ["-i", "NoOptions"],
                  before, after_nooptions).success()
DirRegressionTest("Arguments: Incompatible modes",
                  ["-ui", "NoOptions"],
                  before, after_nooptions).fail("run", 2)
DirRegressionTest("Arguments: No mode",
                  ["NoOptions"],
                  before, {}).fail("run", 2)
DirRegressionTest("Arguments: Wrong mode",
                  ["--parent", "NameOption", "-u", "NoOptions"],
                  before, None).fail("run", 101)
DirRegressionTest("Arguments: No profiles",
                  ["-i"],
                  before, None).fail("run", 101)
DirRegressionTest("Arguments: No sudo",
                  ["-i", "NeedsRootConflict"],
                  before, None).fail("run", 101)
DirRegressionTest("Arguments: --skiproot",
                  ["-i", "--skiproot", "NeedsRootConflict"],
                  before, after_skiproot).success()
DirRegressionTest("Option: name",
                  ["-i", "NameOption"],
                  before, after_nameoptions).success()
DirRegressionTest("Option: directory",
                  ["-i", "DirOption"],
                  before, after_diroptions).success()
DirRegressionTest("Option: prefix suffix extension",
                  ["-i", "PrefixSuffixExtensionOption"],
                  before, after_prefixsuffixoptions).success()
DirRegressionTest("Option: optional",
                  ["-i", "OptionalOption"],
                  before, after_optional).success()
DirRegressionTest("Option: replace",
                  ["-i", "ReplaceOption"],
                  before, after_replace).success()
DirRegressionTest("Command: links()",
                  ["-i", "Links"],
                  before, after_links).success()
DirRegressionTest("Command: decrypt()",
                  ["-i", "Decrypt"],
                  before, after_decrypt).success()
DirRegressionTest("Command: merge()",
                  ["-i", "Merge"],
                  before, after_merge).success()
DirRegressionTest("Command: pipe()",
                  ["-i", "Pipe"],
                  before, after_pipe).success()
DirRegressionTest("Command: Nested dynamicfiles",
                  ["-i", "NestedDynamicFile"],
                  before, after_nesteddynamic).success()
DirRegressionTest("Command: subprof()",
                  ["-i", "SuperProfile"],
                  before, after_superprofile).success()
DirRegressionTest("Command: tags()",
                  ["-i", "SuperProfileTags"],
                  before, after_tags).success()
DirRegressionTest("Command: extlink()",
                  ["-i", "ExteranalLink"],
                  before, after_extlink).success()
DirRegressionTest("Conflict: Same profile linked twice",
                  ["-i", "SameProfileConflict"],
                  before, {}).fail("run", 102)
DirRegressionTest("Conflict: Same profile linked twice in subprofile",
                  ["-i", "SameProfileConflict2"],
                  before, {}).fail("run", 102)
DirRegressionTest("Conflict: Same link created twice",
                  ["-i", "SameLinkConflict"],
                  before, {}).fail("run", 102)
DirRegressionTest("Conflict: Link has multiple targets",
                  ["-i", "MultipleTargetsConflict"],
                  before, {}).fail("run", 102)
DirRegressionTest("Update: Simple",
                  ["-i", "DirOption"],
                  after_diroptions, after_updatediroptions, "update").success()
DirRegressionTest("Update: Uninstall",
                  ["-u", "DirOption"],
                  after_diroptions, before, "update").success()
OutputRegressionTest("Output: --plain",
                     ["-i", "--plain", "NoOptions"],
                     before).success()
OutputRegressionTest("Output: --dryrun",
                     ["-id", "NoOptions"],
                     before).success()
OutputRegressionTest("Output: --debuginfo", ["--debuginfo"], before).success()
# This test needs ticket #42 to be resolved
# OutputRegressionTest("Output: --show", ["-s"], after_diroptions, "update").success()

# Overall result
print(LINEWDTH*"=")
print("\033[1mTests " + ("\033[92msuccessful" if global_result else "\033[91mFAILED") + '\033[0m')


# Exit
os.chdir(owd)
sys.exit(not global_result)



###############################################################################
# TODO: Write tests for
## option owner
## option replace and replace_pattern
## option permission
## extlink()
## env var substitution
## various conflicts
## blacklist
## .dotignore
