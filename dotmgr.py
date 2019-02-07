#!/usr/bin/env python3
"""Main module. Implements DotManager and a short startup script.
Run this directly from the CLI or import DotManager for debugging"""

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

import argparse
import csv
import grp
import json
import logging
import os
import pwd
import shutil
import sys
import traceback
from typing import List
from dotmanager import constants
from dotmanager.customtypes import InstalledProfile
from dotmanager.interpreters import CheckDynamicFilesI
from dotmanager.interpreters import CheckLinkBlacklistI
from dotmanager.interpreters import CheckLinkDirsI
from dotmanager.interpreters import CheckLinkExistsI
from dotmanager.interpreters import CheckLinksI
from dotmanager.interpreters import CheckProfilesI
from dotmanager.interpreters import DUIStrategyI
from dotmanager.interpreters import ExecuteI
from dotmanager.interpreters import GainRootI
from dotmanager.interpreters import PlainPrintI
from dotmanager.interpreters import PrintI
from dotmanager.interpreters import RootNeededI
from dotmanager.errors import CustomError
from dotmanager.errors import FatalError
from dotmanager.errors import PreconditionError
from dotmanager.errors import UnkownError
from dotmanager.errors import UserError
from dotmanager.differencesolver import DiffSolver
from dotmanager.differencelog import DiffLog
from dotmanager.utils import has_root_priveleges
from dotmanager.utils import get_uid
from dotmanager.utils import get_gid
from dotmanager.utils import log_success
from dotmanager.utils import log_warning


class DotManager:
    """Main class. Parses arguments, generates DiffLog and calls DiffOperations
    on DiffLog according to the parsed arguments."""

    def __init__(self):
        # Fields
        self.installed = {"@version": constants.VERSION}
        self.args = None
        # Change current working directory to the directory of this module
        self.owd = os.getcwd()
        os.chdir(os.path.dirname(sys.modules[__name__].__file__))

    def load_installed(self) -> None:
        """Reads Installed-File and parses it's InstallationLog
        into self.installed"""
        try:
            self.installed = json.load(open(constants.INSTALLED_FILE))
        except FileNotFoundError:
            logger.debug("No installed profiles found.")
        # Check installed-file version
        if (int(self.installed["@version"].split("_")[1]) !=
                int(constants.VERSION.split("_")[1])):
            msg = "There was a change of the installed-file schema "
            msg += "with the last update. Please revert to version "
            msg += self.installed["@version"] + " and uninstall "
            msg += "all of your profiles before using this version."
            raise PreconditionError(msg)

    def parse_arguments(self, arguments: List[str] = None) -> None:
        """Creates an ArgumentParser and parses sys.args into self.args"""
        if arguments is None:
            arguments = sys.argv[1:]
        # Setup parser
        parser = argparse.ArgumentParser(add_help=False)
        # Options
        parser.add_argument("--config",
                            help="specify another config-file to use")
        parser.add_argument("--directory", help="set the default directory")
        parser.add_argument("-d", "--dryrun",
                            help="just simulate what would happen",
                            action="store_true")
        parser.add_argument("--dui",
                            help="use the DUI strategy for updating links",
                            action="store_true")
        parser.add_argument("-f", "--force",
                            help="overwrite existing files with links",
                            action="store_true")
        parser.add_argument("--log",
                            help="specify a file to log to")
        parser.add_argument("-m", "--makedirs",
                            help="create directories automatically if needed",
                            action="store_true")
        parser.add_argument("--option",
                            help="set options for profiles",
                            dest="opt_dict",
                            action=StoreDictKeyPair,
                            nargs="+",
                            metavar="KEY=VAL")
        parser.add_argument("--parent",
                            help="set the parent of the profiles you install")
        parser.add_argument("--plain",
                            help="print the internal DiffLog as plain json",
                            action="store_true")
        parser.add_argument("-p", "--print",
                            help="print what changes dotmanager will do",
                            action="store_true")
        parser.add_argument("-q", "--quiet",
                            help="print nothing but errors",
                            action="store_true")
        parser.add_argument("--save",
                            help="specify another install-file to use",
                            default="default")
        parser.add_argument("--silent",
                            help="print absolute nothing",
                            action="store_true")
        parser.add_argument("--superforce",
                            help="overwrite blacklisted/protected files",
                            action="store_true")
        parser.add_argument("-v", "--verbose",
                            help="print stacktrace in case of error",
                            action="store_true")
        # Modes
        modes = parser.add_mutually_exclusive_group(required=True)
        modes.add_argument("-h", "--help",
                           help="show this help message and exit",
                           action="help")
        modes.add_argument("-i", "--install",
                           help="install and update (sub)profiles",
                           action="store_true")
        modes.add_argument("--debuginfo",
                           help="displays internal values",
                           action="store_true")
        modes.add_argument("-u", "--uninstall",
                           help="uninstall (sub)profiles",
                           action="store_true")
        modes.add_argument("-s", "--show",
                           help="show infos about installed profiles",
                           action="store_true")
        modes.add_argument("--version",
                           help="print version number",
                           action="store_true")
        # Profile list
        parser.add_argument("profiles",
                            help="list of root profiles",
                            nargs="*")

        # Read arguments
        try:
            self.args = parser.parse_args(arguments)
        except argparse.ArgumentError as err:
            raise UserError(err.message)
        if self.args.opt_dict and "tags" in self.args.opt_dict:
            reader = csv.reader([self.args.opt_dict["tags"]])
            self.args.opt_dict["tags"] = next(reader)
        if self.args.directory:
            self.args.directory = os.path.join(self.owd, self.args.directory)

        # Configure logger
        if self.args.verbose:
            logger.setLevel(logging.DEBUG)
        if self.args.quiet:
            logger.setLevel(logging.WARNING)
        if self.args.silent:
            logger.setLevel(logging.CRITICAL)
        if self.args.log:
            ch = logging.FileHandler(os.path.join(self.owd, self.args.log))
            ch.setLevel(logging.DEBUG)
            formatter = logging.Formatter('[%(asctime)s] %(message)s')
            ch.setFormatter(formatter)
            logger.addHandler(ch)

        # Load constants for this installed-file
        constants.loadconfig(self.args.config, self.args.save)
        # Set defaults for args from config
        if not self.args.verbose:
            self.args.verbose = constants.VERBOSE
        if not self.args.dui:
            self.args.dui = constants.DUISTRATEGY
        if not self.args.force:
            self.args.force = constants.FORCE
        if not self.args.makedirs:
            self.args.makedirs = constants.MAKEDIRS

        # Check if arguments are bad
        if (not (self.args.show or self.args.version or self.args.debuginfo)
                and not self.args.profiles):
            raise UserError("No Profile specified!!")
        if ((self.args.dryrun or self.args.force or self.args.plain or
             self.args.dui) and not
                (self.args.install or self.args.uninstall)):
            raise UserError("-d/-f/-p/--dui needs to be used with -i or -u")
        if self.args.parent and not self.args.install:
            raise UserError("--parent needs to be used with -i")

    def execute_arguments(self) -> None:
        """Executes whatever was specified via commandline arguments"""
        if self.args.show:
            self.print_installed_profiles()
        elif self.args.version:
            print(constants.BOLD + "Version: " + constants.ENDC +
                  constants.VERSION)
        elif self.args.debuginfo:
            self.print_debuginfo()
        else:
            dfs = DiffSolver(self.installed, self.args)
            dfl = dfs.solve(self.args.install)
            if self.args.dui:
                dfl.run_interpreter(DUIStrategyI())
            if self.args.dryrun:
                self.dryrun(dfl)
            elif self.args.plain:
                dfl.run_interpreter(PlainPrintI())
            elif self.args.print:
                dfl.run_interpreter(PrintI())
            else:
                self.run(dfl)

    def print_debuginfo(self) -> None:
        """Print out all constants"""
        print(constants.BOLD + "Config search paths: " + constants.ENDC)
        for cfg in constants.CONFIG_SEARCH_PATHS:
            print("   " + cfg)
        print(constants.BOLD + "Loaded configs: " + constants.ENDC)
        for cfg in constants.CFG_FILES:
            print("   " + cfg)
        print(constants.BOLD + "Arguments: " + constants.ENDC)
        print("   DUISTRATEGY: " + str(constants.DUISTRATEGY))
        print("   FORCE: " + str(constants.FORCE))
        print("   VERBOSE: " + str(constants.VERBOSE))
        print("   MAKEDIRS: " + str(constants.MAKEDIRS))
        print(constants.BOLD + "Settings: " + constants.ENDC)
        print("   COLOR: " + str(constants.COLOR))
        print("   DECRYPT_PWD: " + str(constants.DECRYPT_PWD))
        print("   BACKUP_EXTENSION: " + constants.BACKUP_EXTENSION)
        print("   PROFILE_FILES: " + constants.PROFILE_FILES)
        print("   TARGET_FILES: " + constants.TARGET_FILES)
        print("   INSTALLED_FILE: " + constants.INSTALLED_FILE)
        print("   INSTALLED_FILE_BACKUP: " + constants.INSTALLED_FILE_BACKUP)
        print(constants.BOLD + "Defaults: " + constants.ENDC)
        print("   DIR_DEFAULT: " + constants.DIR_DEFAULT)
        print("   DEFAULTS['name']: " + str(constants.DEFAULTS["name"]))
        print("   DEFAULTS['optional']: " +
              str(constants.DEFAULTS["optional"]))
        print("   DEFAULTS['owner']: " + str(constants.DEFAULTS["owner"]))
        print("   DEFAULTS['permission']: " +
              str(constants.DEFAULTS["permission"]))
        print("   DEFAULTS['prefix']: " + str(constants.DEFAULTS["prefix"]))
        print("   DEFAULTS['replace']: " + str(constants.DEFAULTS["replace"]))
        print("   DEFAULTS['replace_pattern']: " +
              str(constants.DEFAULTS["replace_pattern"]))
        print("   DEFAULTS['suffix']: " + str(constants.DEFAULTS["suffix"]))

    def print_installed_profiles(self) -> None:
        """Shows only the profiles specified.
        If none are specified shows all."""
        if self.args.profiles:
            for profilename in self.args.profiles:
                if profilename in self.installed:
                    self.print_installed(self.installed[profilename])
                else:
                    log_warning("\nThe profile '" + profilename +
                                "' is not installed. Skipping...\n")
        else:
            for key in self.installed.keys():
                if key[0] != "@":
                    self.print_installed(self.installed[key])

    def run(self, difflog: DiffLog) -> None:
        """This runs Checks then executes DiffOperations while
        pretty printing the DiffLog"""
        # Run integration tests on difflog
        difflog.run_interpreter(
            CheckProfilesI(self.installed, self.args.parent)
        )
        tests = [
            CheckLinksI(self.installed),
            CheckLinkDirsI(self.args.makedirs),
            CheckLinkExistsI(self.args.force),
            CheckDynamicFilesI(False)
        ]
        difflog.run_interpreter(*tests)
        # Gain root if needed
        if not has_root_priveleges():
            difflog.run_interpreter(GainRootI())
        # Check blacklist not until now, because the user would need confirm it
        # twice if the programm is restarted with sudo
        difflog.run_interpreter(CheckLinkBlacklistI(self.args.superforce))
        # Now the critical part starts
        try:
            # Create Backup in case something wents wrong,
            # so the user can fix the mess we caused
            if os.path.isfile(constants.INSTALLED_FILE):
                shutil.copyfile(constants.INSTALLED_FILE,
                                constants.INSTALLED_FILE_BACKUP)
            # Execute all operations of the difflog and print them
            difflog.run_interpreter(ExecuteI(self.installed, self.args.force),
                                    PrintI())
            # Remove Backup
            if os.path.isfile(constants.INSTALLED_FILE_BACKUP):
                os.remove(constants.INSTALLED_FILE_BACKUP)
        except CustomError:
            raise
        except Exception as err:
            msg = "An unkown error occured during linking/unlinking. Some "
            msg += "links or your installed-file may be corrupted! Check the "
            msg += "backup of your installed-file to resolve all possible "
            msg += "issues before you proceed to use this tool!"
            raise UnkownError(err, msg) from err
        logger.debug("Finished succesfully.")

    def print_installed(self, profile: InstalledProfile) -> None:
        """Prints a currently InstalledProfile"""
        print(constants.BOLD + profile["name"] + ":" + constants.ENDC)
        print("  Installed: " + profile["installed"])
        print("  Updated: " + profile["updated"])
        if "parent" in profile:
            print("  Subprofile of: " + profile["parent"])
        if "profiles" in profile:
            print("  Has Subprofiles: " + ", ".join(
                [s["name"] for s in profile["profiles"]]
            ))
        if profile["links"]:
            print("  Links:")
        for symlink in profile["links"]:
            print("    " + symlink["name"] + "  →  " + symlink["target"])
            user = pwd.getpwuid(symlink["uid"])[0]
            group = grp.getgrgid(symlink["gid"])[0]
            print("       Owner: " + user + ":" + group +
                  "   Permission: " + str(symlink["permission"]) +
                  "   Updated: " + symlink["date"])

    def dryrun(self, difflog: DiffLog) -> None:
        """Runs Checks and pretty prints the DiffLog"""
        log_warning("This is just a dry-run! Nothing of this " +
                    "is actually happening.")
        difflog.run_interpreter(
            CheckProfilesI(self.installed, self.args.parent)
        )
        tests = [
            CheckLinksI(self.installed),
            CheckLinkBlacklistI(self.args.superforce),
            CheckLinkDirsI(self.args.makedirs),
            CheckLinkExistsI(self.args.force),
            CheckDynamicFilesI(True)
        ]
        difflog.run_interpreter(*tests)
        difflog.run_interpreter(RootNeededI())
        difflog.run_interpreter(PrintI())


class StoreDictKeyPair(argparse.Action):
    """Used to parse an option dict from commandline"""
    def __init__(self, option_strings, dest, nargs=None, **kwargs):
        self._nargs = nargs
        super(StoreDictKeyPair, self).__init__(
            option_strings, dest, nargs=nargs, **kwargs
        )

    def __call__(self, parser, namespace, values, option_string=None):
        opt_dict = {}
        for keyval in values:
            try:
                key, val = keyval.split("=")
            except ValueError:
                raise UserError("Expected KEY and VAL for --option," +
                                " but only found one.")
            opt_dict[key] = val
        setattr(namespace, self.dest, opt_dict)


if __name__ == "__main__":
    # Setup the logger
    logger = logging.getLogger("root")
    logger.setLevel(logging.INFO)
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(message)s')
    ch.setFormatter(formatter)
    logger.addHandler(ch)

    # Create DotManager and parse arguments
    dotm = DotManager()
    try:
        dotm.parse_arguments()
    except CustomError as err:
        logger.error(err.message)
        sys.exit(err.exitcode)
    # Add the profiles to the python path
    sys.path.append(constants.PROFILE_FILES)
    # Start everything in an exception handler
    try:
        if os.path.isfile(constants.INSTALLED_FILE_BACKUP):
            raise PreconditionError("I found a backup of your installed-" +
                                    "file. It's most likely that the last " +
                                    "execution of this tool failed. If you " +
                                    "are certain that your installed-file " +
                                    "is correct you can remove the backup " +
                                    "and start this tool again.")
        else:
            dotm.load_installed()
            dotm.execute_arguments()
    except CustomError as err:
        # An error occured that we (more or less) expected.
        # Print error, a stacktrace and exit
        logger.debug(traceback.format_exc())
        if isinstance(err, FatalError):
            logger.critical(err.message)
        else:
            logger.error(err.message)
        sys.exit(err.exitcode)
    except Exception:
        # This works because all critical parts will catch also all
        # exceptions and convert them into a CustomError
        logger.info(traceback.format_exc())
        log_warning("The error above was unexpected. But it's fine," +
                    " I haven't done anything yet :)")
        sys.exit(100)
    finally:
        # Write installed back to json file
        try:
            with open(constants.INSTALLED_FILE, "w") as file:
                file.write(json.dumps(dotm.installed, indent=4))
                file.flush()
            os.chown(constants.INSTALLED_FILE, get_uid(), get_gid())
        except Exception as err:
            unkw = UnkownError(err, "An unkown error occured when trying to " +
                               "write all changes back to the installed-file")
            logger.error(unkw.message)
