"""Provides functionality that is needed in multiple modules.
Eg. Retrieving a environment variable or fixing file permisions"""

import datetime
import importlib.util
import os
import pwd
import re
import subprocess
from typing import Tuple
from bin import constants
from bin.types import Path
from bin.types import RelPath
from bin.errors import GenerationError
from bin.errors import PreconditionError


# Utils for permissions and user
###############################################################################

def get_uid() -> None:
    """Get real users id"""
    sudo_uid = os.environ.get('SUDO_UID')
    if sudo_uid:
        return int(sudo_uid)
    else:
        return os.getuid()


def get_gid() -> None:
    """Get real users group id"""
    sudo_gid = os.environ.get('SUDO_GID')
    if sudo_gid:
        return int(sudo_gid)
    else:
        return os.getgid()


def get_dir_owner(filename: Path) -> Tuple[int, int]:
    """Gets the owner of the directory of filename.
    Works even for directories that doesn't exist"""
    dirname = os.path.dirname(filename)
    while not os.path.isdir(dirname):
        dirname = os.path.dirname(dirname)
    return os.stat(dirname).st_uid, os.stat(dirname).st_gid


def has_root_priveleges() -> None:
    """Check if this programm wasxecuted as root"""
    return os.geteuid() == 0


def get_current_username() -> None:
    """Get real users username"""
    return pwd.getpwuid(get_uid()).pw_name


def get_user_env_var(varname: str) -> str:
    """Lookup an environment variable. If executed as root, the
    envirionment variable of the real user is return"""
    if has_root_priveleges():
        # Looks like we have to load the environment vars by ourself
        user_environ = {}
        # Login into other user and read env
        proc = subprocess.run(
            ["sudo", "-Hiu", get_current_username(), "env"],
            stdout=subprocess.PIPE
        )
        for line in proc.stdout.splitlines():
            key, val = line.decode().split("=", 1)
            user_environ[key] = val
        # User environ is loaded, so we can lookup
        try:
            return user_environ[varname]
        except KeyError:
            msg = "There is no environment varibable set for user '"
            msg += get_current_username() + "' with the name: '"
            msg += varname + "'"
            raise PreconditionError(msg)
    # A normal user can access its own variables
    try:
        return os.environ[varname]
    except KeyError:
        raise PreconditionError("There is no environment varibable set " +
                                "with the name: '" + varname + "'")


def expandvars(path: RelPath) -> RelPath:
    """Behaves like the os.path.expandvars() but uses
    get_user_env_var() to look up the substitution"""
    if '$' not in path:
        return path
    # Regex match for eg both $HOME and ${HOME}
    _varprog = re.compile(r'\$(\w+|\{[^}]*\})', re.ASCII)
    search = _varprog.search
    start = '{'
    end = '}'
    i = 0
    # Replace all matches
    while True:
        match = search(path, i)
        if not match:
            break
        i, j = match.span(0)
        name = match.group(1)
        if name.startswith(start) and name.endswith(end):
            name = name[1:-1]
        tail = path[j:]
        path = path[:i] + get_user_env_var(name)
        i = len(path)
        path += tail
    return path


def normpath(path: RelPath) -> Path:
    """Normalizes path, replaces ~ and environment vars,
    and converts it in an absolute path"""
    path = expandvars(path)
    path = os.path.expandvars(path)
    return os.path.abspath(path)


# Dynamic imports
###############################################################################

def import_profile_class(class_name: str) -> None:
    """This function imports a profile class only by it's name"""
    directory = os.path.expanduser(expandvars(constants.PROFILE_FILES))
    for root, _, files in os.walk(directory):
        for file in files:
            file = os.path.join(root, file)
            if file[-3:] == "pyc":
                break
            try:
                spec = importlib.util.spec_from_file_location("__name__", file)
                module = importlib.util.module_from_spec(spec)
                spec.loader.exec_module(module)
            except Exception as err:
                raise GenerationError(class_name, "The module '" + file +
                                      "' contains an error and therefor " +
                                      "can't be imported. The error was:" +
                                      "\n   " + str(err))
            if class_name in module.__dict__:
                return module.__dict__[class_name]
    raise PreconditionError("The profile '" + class_name +
                            "' could not be found in any module. Aborting.")


# Misc
###############################################################################


def get_date_time_now() -> None:
    """Returns a datetime string for the current moment"""
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def print_warning(message: str) -> None:
    """Prints text in warning color"""
    print(constants.WARNING + message + constants.ENDC)


def print_success(message: str) -> None:
    """Prints text in success color"""
    print(constants.OKGREEN + message + constants.ENDC)
