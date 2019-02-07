"""This module provides simple functions for users to
retrieve system information."""

###############################################################################
#
# Copyright 2018 Erik Schulz
#
# This file is part of Dotmanager.
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
#
###############################################################################


import os
import re
import shutil
import platform
from dotmanager.utils import get_current_username


def distribution() -> str:
    """Returns the current running distribution"""
    for entry in os.listdir("/etc"):
        # search for release file
        if re.search(r"^\w+(-|_)release$", entry):
            line = open("/etc/" + entry, "r").readline()
            return line.split('"')[1]
    return None


def hostname() -> str:
    """Returns the host name of the device"""
    return platform.node()


def is_64bit() -> bool:
    """Returns if the device is running a 64bit os"""
    return True if platform.architecture()[0] == "64bit" else False


def kernel() -> str:
    """Returns the current kernel release of the device"""
    return platform.release()


def pkg_installed(pkg_name: str) -> bool:
    """Returns if the given package is installed on the device"""
    return bool(shutil.which(pkg_name))


def username() -> str:
    """Returns the username that executed dotmanager"""
    return get_current_username()
