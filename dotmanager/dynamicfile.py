"""
This module contains all the different DynamicFiles and their base class.
DynamicFiles provide mechanisms to transform or manipulate dotfiles before
actually linking them. The DynamicFile will generate a new dotfile that will
be linked instead and makes sure that user-made changes are preserved.
"""

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
# Diese Datei ist Teil von Dotmanger.
#
# Dotmanger ist Freie Software: Sie können es unter den Bedingungen
# der GNU General Public License, wie von der Free Software Foundation,
# Version 3 der Lizenz oder (nach Ihrer Wahl) jeder neueren
# veröffentlichten Version, weiter verteilen und/oder modifizieren.
#
# Dotmanger wird in der Hoffnung, dass es nützlich sein wird, aber
# OHNE JEDE GEWÄHRLEISTUNG, bereitgestellt; sogar ohne die implizite
# Gewährleistung der MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK.
# Siehe die GNU General Public License für weitere Details.
#
# Sie sollten eine Kopie der GNU General Public License zusammen mit diesem
# Programm erhalten haben. Wenn nicht, siehe <https://www.gnu.org/licenses/>.
#
###############################################################################


import hashlib
import logging
import os
from abc import abstractmethod
from shutil import copyfile
from subprocess import PIPE
from subprocess import Popen
from dotmanager import constants
from dotmanager.utils import normpath


logger = logging.getLogger("root")


class DynamicFile:
    """This abstract class is the base for any dynamic generated
    file. It provides the write functionality and its path"""
    def __init__(self, name):
        self.name = name
        self.md5sum = None
        self.sources = []

    @property
    @abstractmethod
    def SUBDIR(self):
        """This constant needs to be implemented by subclasses"""
        raise NotImplementedError

    @abstractmethod
    def _generate_file(self):
        """This method is used to generate the contents of the
        dynamic file from sources by returning it as bytearray"""
        pass

    def add_source(self, target):
        """Adds a source path and normalizes it"""
        self.sources.append(normpath(target))

    def update(self):
        """Gets the newest version of the file and writes it
        if it is not in its subdir yet"""
        # Generate file and calc checksum
        file_bytes = self._generate_file()
        self.md5sum = hashlib.md5(file_bytes).hexdigest()
        # If this version of the file (with same checksum) doesn't exist,
        # write it to the correct location
        if not os.path.isfile(self.getpath()):
            file = open(self.getpath(), "wb")
            file.write(file_bytes)
            file.flush()
            # Also create a backup that can be used to restore the original
            copyfile(self.getpath(),
                     self.getpath() + "." + constants.BACKUP_EXTENSION)

    def getpath(self):
        """Returns the path of the generated file"""
        # Dynamicfiles are stored with its md5sum in the name to detect chages
        return os.path.join(self.getdir(), self.name + "#" + self.md5sum)

    def getdir(self):
        """Returns the path of the directory that hold the generated file"""
        return normpath(os.path.join(constants.DATA_DIR, self.SUBDIR))


class EncryptedFile(DynamicFile):
    """This is an implementation of a dynamic files that allows
    to decrypt encrypted files and link them on the fly"""
    SUBDIR = "decrypted"

    def _generate_file(self):
        # Get sources and temp file
        encryped_file = self.sources[0]
        tmp = os.path.join(self.getdir(), self.name)
        # Set arguments for OpenPGP
        args = ["gpg", "-q", "-d", "--yes"]
        if constants.DECRYPT_PWD:
            args += ["--batch", "--passphrase", constants.DECRYPT_PWD]
        else:
            logger.info("Tipp: You can set a password in the dotmanagers " +
                        "config that will be used for all encrypted files")
        args += ["-o", tmp, encryped_file]
        # Use OpenPGP to decrypt the file
        process = Popen(args, stdin=PIPE)
        process.communicate()
        # Remove the decrypted file. It will be written by the update function
        # of the super class to its correct location.
        result = open(tmp, "rb").read()
        os.remove(tmp)
        return result


class FilteredFile(DynamicFile):
    """This is an implementation of a dynamic files that allows
    to run a shell command on a dotfile before linking"""
    SUBDIR = "piped"

    def __init__(self, name, shell_command):
        super().__init__(name)
        self.shell_command = shell_command

    def _generate_file(self):
        command = "cat " + self.sources[0] + " | " + self.shell_command + ""
        process = Popen(command, stdout=PIPE, shell=True)
        result, _ = process.communicate()
        return result


class SplittedFile(DynamicFile):
    """This is an implementation of a dynamic files that allows
    to join multiple dotfiles together to one dotfile"""
    SUBDIR = "merged"

    def _generate_file(self):
        result = bytearray()
        for file in self.sources:
            result.extend(open(file, "rb").read())
        return result
