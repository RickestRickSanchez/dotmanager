"""This module collects all profiles that are used to test commands"""
from uberdot.profile import Profile

class Links(Profile):
    def generate(self):
        links("name1")
        links("\w{4}2")
        links("\w{2}(.{2})3", replace=r"na\1")
        links("\w{4}([45])", replace=r"filenam\1", replace_pattern=".*(.\d)")
        cd("subdir")
        links("name_(encrypt[89])", replace=r"\1", encrypted=True)

class Decrypt(Profile):
    def generate(self):
        link(decrypt("name_encrypt8"))
        link(decrypt("name_encrypt8"), replace_pattern="name_(encrypt8)", replace=r"\1")
        link(decrypt("name_encrypt9"), name="encrypt9")

class Merge(Profile):
    def generate(self):
        link(merge("merge1", ["name1", "name2"]))
        link(merge("merge2", ["name3", "name4", "name5"]), name="merge3")

class Pipe(Profile):
    def generate(self):
        link(pipe("file", "grep line"))

class Default(Profile):
    def generate(self):
        opt(prefix=".", suffix="test")
        tags("tag1")
        link("name1")
        default("prefix")
        link("name2")
        default()
        link("name6")

class IgnoreFiles(Profile):
    def generate(self):
        link("ignored.file", ".dotignore", optional=True)
        link("name1")

class NestedDynamicFile(Profile):
    def generate(self):
        link(merge("merge1", [decrypt("name_encrypt8"), "name2"]))
        link(pipe(merge("merge2", ["file", "name2"]), "grep 2"))

class SuperProfile(Profile):
    def generate(self):
        link("name1")
        subprof("Subprofile1", "Subprofile2")
        opt(prefix="prefix_")
        cd("subdir")
        subprof("Subprofile3", "Subprofile4")

class SuperProfileTags(Profile):
    def generate(self):
        tags("tag1", "tag2")
        link("name1")
        subprof("Subprofile1")
        tags("tag3")
        rmtags("tag1")
        subprof("Subprofile2")

class Subprofile1(Profile):
    def generate(self):
        links("name[2-4]")

class Subprofile3(Profile):
    def generate(self):
        links("name[2-4]")

class Subprofile2(Profile):
    def generate(self):
        links("name[56]")

class Subprofile4(Profile):
    def generate(self):
        links("name[56]")

class SuperProfileEvent(Profile):
    prepare_script = """
        alias s='echo "Hello" >> '
        function t(){
            echo "$2" >> $1
        }
    """
    beforeInstall = """
        t test.file "I come first"
    """
    def generate(self):
        link("name1")
        subprof("SubprofileEvent")

class FailProfileEvent(Profile):
    foo = "syntax error"
    beforeInstall = "exit 1"
    def afterInstall(self):
        return self.foo
    def generate(self):
        link("name1")

class ConflictProfileEvent(Profile):
    beforeInstall = "touch name1"
    def generate(self):
        link("name1")

class TimeoutProfileEvent(Profile):
    beforeInstall = "sleep 2"
    def generate(self):
        link("name1")

class SubprofileEvent(Profile):
    beforeInstall = """
        # Just a comment
        s test.file
    """
    beforeUpdate = "t test.file update"
    beforeUninstall = "rm test.file"
    afterInstall = "cp name2 name4"
    afterUpdate = "t test.file $(cat name4)"
    afterUninstall = """
        if [[ -e name2 ]]; then
            exit 1;
        else
            rm name4;
        fi
    """
    def generate(self):
        links("name[23]")

class ExteranalLink(Profile):
    def generate(self):
        extlink("untouched.file", name="test1")
        extlink("untouched.file", directory="test2")
