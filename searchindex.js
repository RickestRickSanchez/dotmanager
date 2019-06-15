Search.setIndex({docnames:["developers/contributing_link","developers/documentation","developers/index","developers/reference/constants","developers/reference/differencesolver","developers/reference/dynamicfile","developers/reference/errors","developers/reference/index","developers/reference/info","developers/reference/interpreters","developers/reference/profile","developers/reference/udot","developers/reference/utils","developers/tests","index","manpage/index","usage/commandline-interface","usage/commands","usage/config-file","usage/dotignore","usage/dynamicfiles","usage/encryption","usage/example-configuration","usage/getting-started","usage/index","usage/info-module","usage/installed-file","usage/python-syntax","usage/tips"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["developers/contributing_link.rst","developers/documentation.rst","developers/index.rst","developers/reference/constants.rst","developers/reference/differencesolver.rst","developers/reference/dynamicfile.rst","developers/reference/errors.rst","developers/reference/index.rst","developers/reference/info.rst","developers/reference/interpreters.rst","developers/reference/profile.rst","developers/reference/udot.rst","developers/reference/utils.rst","developers/tests.rst","index.rst","manpage/index.rst","usage/commandline-interface.rst","usage/commands.rst","usage/config-file.rst","usage/dotignore.rst","usage/dynamicfiles.rst","usage/encryption.rst","usage/example-configuration.rst","usage/getting-started.rst","usage/index.rst","usage/info-module.rst","usage/installed-file.rst","usage/python-syntax.rst","usage/tips.rst"],objects:{"":{constants:[3,0,0,"-"],differencesolver:[4,0,0,"-"],dynamicfile:[5,0,0,"-"],errors:[6,0,0,"-"],info:[8,0,0,"-"],interpreters:[9,0,0,"-"],profile:[10,0,0,"-"],udot:[11,0,0,"-"],utils:[12,0,0,"-"]},"differencesolver.DiffLog":{_DiffLog__append_data:[4,4,1,""],__init__:[4,4,1,""],add_info:[4,4,1,""],add_link:[4,4,1,""],add_profile:[4,4,1,""],data:[4,5,1,""],remove_link:[4,4,1,""],remove_profile:[4,4,1,""],run_interpreter:[4,4,1,""],update_link:[4,4,1,""],update_parent:[4,4,1,""],update_profile:[4,4,1,""]},"differencesolver.DiffSolver":{_DiffSolver__generate_links:[4,4,1,""],_DiffSolver__generate_profile_link:[4,4,1,""],_DiffSolver__generate_profile_unlink:[4,4,1,""],_DiffSolver__generate_unlinks:[4,4,1,""],__init__:[4,4,1,""],default_dir:[4,5,1,""],default_options:[4,5,1,""],difflog:[4,5,1,""],installed:[4,5,1,""],parent_arg:[4,5,1,""],profilenames:[4,5,1,""],solve:[4,4,1,""]},"dynamicfile.DynamicFile":{SUBDIR:[5,4,1,""],__init__:[5,4,1,""],_generate_file:[5,4,1,""],add_source:[5,4,1,""],getdir:[5,4,1,""],getpath:[5,4,1,""],md5sum:[5,5,1,""],name:[5,5,1,""],sources:[5,5,1,""],update:[5,4,1,""]},"dynamicfile.EncryptedFile":{SUBDIR:[5,5,1,""],_generate_file:[5,4,1,""]},"dynamicfile.FilteredFile":{SUBDIR:[5,5,1,""],__init__:[5,4,1,""],_generate_file:[5,4,1,""]},"dynamicfile.SplittedFile":{SUBDIR:[5,5,1,""],_generate_file:[5,4,1,""]},"errors.CustomError":{EXITCODE:[6,4,1,""],__init__:[6,4,1,""],_message:[6,5,1,""],message:[6,5,1,""]},"errors.FatalError":{EXITCODE:[6,5,1,""],__init__:[6,4,1,""]},"errors.GenerationError":{EXITCODE:[6,5,1,""],__init__:[6,4,1,""]},"errors.IntegrityError":{EXITCODE:[6,5,1,""]},"errors.PreconditionError":{EXITCODE:[6,5,1,""]},"errors.UnkownError":{EXITCODE:[6,5,1,""],__init__:[6,4,1,""]},"errors.UserAbortion":{EXITCODE:[6,5,1,""],__init__:[6,4,1,""]},"errors.UserError":{EXITCODE:[6,5,1,""],__init__:[6,4,1,""]},"interpreters.CheckDynamicFilesInterpreter":{__init__:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_update_l:[9,4,1,""],dryrun:[9,5,1,""],inspect_file:[9,4,1,""],user_interaction:[9,4,1,""]},"interpreters.CheckLinkBlacklistInterpreter":{__init__:[9,4,1,""],_op_add_l:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_update_l:[9,4,1,""],blacklist:[9,5,1,""],check_blacklist:[9,4,1,""],superforce:[9,5,1,""]},"interpreters.CheckLinkDirsInterpreter":{__init__:[9,4,1,""],_op_add_l:[9,4,1,""],_op_update_l:[9,4,1,""],check_dirname:[9,4,1,""],makedirs:[9,5,1,""]},"interpreters.CheckLinkExistsInterpreter":{__init__:[9,4,1,""],_op_add_l:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_update_l:[9,4,1,""],force:[9,5,1,""],removed_links:[9,5,1,""]},"interpreters.CheckLinksInterpreter":{__init__:[9,4,1,""],_op_add_l:[9,4,1,""],_op_remove_l:[9,4,1,""]},"interpreters.CheckProfilesInterpreter":{__init__:[9,4,1,""],_op_add_p:[9,4,1,""],_op_update_p:[9,4,1,""],get_known:[9,4,1,""],parent_arg:[9,5,1,""],profile_list:[9,5,1,""]},"interpreters.DUIStrategyInterpreter":{__init__:[9,4,1,""],_op_add_l:[9,4,1,""],_op_add_p:[9,4,1,""],_op_fin:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_remove_p:[9,4,1,""],_op_update_l:[9,4,1,""],_op_update_p:[9,4,1,""],link_adds:[9,5,1,""],link_deletes:[9,5,1,""],link_updates:[9,5,1,""],profile_adds:[9,5,1,""],profile_deletes:[9,5,1,""],profile_updates:[9,5,1,""]},"interpreters.DetectRootInterpreter":{_access:[9,4,1,""],_op_add_l:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_update_l:[9,4,1,""],_root_detected:[9,4,1,""]},"interpreters.ExecuteInterpreter":{_ExecuteInterpreter__create_symlink:[9,4,1,""],__init__:[9,4,1,""],_makedirs:[9,4,1,""],_op_add_l:[9,4,1,""],_op_add_p:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_remove_p:[9,4,1,""],_op_update_l:[9,4,1,""],_op_update_p:[9,4,1,""],force:[9,5,1,""],installed:[9,5,1,""]},"interpreters.GainRootInterpreter":{_op_fin:[9,4,1,""]},"interpreters.Interpreter":{__init__:[9,4,1,""],call_operation:[9,4,1,""],data:[9,5,1,""],set_difflog_data:[9,4,1,""]},"interpreters.PlainPrintInterpreter":{__init__:[9,4,1,""],_op_fin:[9,4,1,""],_op_start:[9,4,1,""]},"interpreters.PrintInterpreter":{_log_operation:[9,4,1,""],_op_add_l:[9,4,1,""],_op_add_p:[9,4,1,""],_op_info:[9,4,1,""],_op_remove_l:[9,4,1,""],_op_remove_p:[9,4,1,""],_op_start:[9,4,1,""],_op_update_l:[9,4,1,""],_op_update_p:[9,4,1,""]},"interpreters.RootNeededInterpreter":{__init__:[9,4,1,""],_root_detected:[9,4,1,""],content:[9,5,1,""]},"interpreters.SkipRootInterpreter":{__init__:[9,4,1,""],_op_fin:[9,4,1,""],_root_detected:[9,4,1,""],skipped:[9,5,1,""],skipped_reasons:[9,5,1,""]},"profile.Profile":{"default":[10,4,1,""],_Profile__create_link_descriptor:[10,4,1,""],_Profile__reset_builtins:[10,4,1,""],_Profile__set_builtins:[10,4,1,""],__init__:[10,4,1,""],__old_builtins:[10,5,1,""],_gen_err:[10,4,1,""],_make_read_opt:[10,4,1,""],cd:[10,4,1,""],decrypt:[10,4,1,""],directory:[10,5,1,""],executed:[10,5,1,""],extlink:[10,4,1,""],find:[10,4,1,""],generate:[10,4,1,""],generator:[10,4,1,""],has_tag:[10,4,1,""],link:[10,4,1,""],links:[10,4,1,""],merge:[10,4,1,""],name:[10,5,1,""],opt:[10,4,1,""],options:[10,5,1,""],parent:[10,5,1,""],pipe:[10,4,1,""],result:[10,5,1,""],rmtags:[10,4,1,""],subprof:[10,4,1,""],tags:[10,4,1,""]},"udot.StoreDictKeyPair":{__call__:[11,4,1,""]},"udot.UberDot":{__init__:[11,4,1,""],args:[11,5,1,""],dryrun:[11,4,1,""],execute_arguments:[11,4,1,""],installed:[11,5,1,""],load_installed:[11,4,1,""],owd:[11,5,1,""],parse_arguments:[11,4,1,""],print_debuginfo:[11,4,1,""],print_installed:[11,4,1,""],print_installed_profiles:[11,4,1,""],run:[11,4,1,""]},constants:{ASKROOT:[3,1,1,""],BACKUP_EXTENSION:[3,1,1,""],BOLD:[3,1,1,""],CFG_FILES:[3,1,1,""],COLOR:[3,1,1,""],CONFIG_SEARCH_PATHS:[3,1,1,""],DATA_DIR:[3,1,1,""],DECRYPT_PWD:[3,1,1,""],DEFAULTS:[3,1,1,""],DIR_DEFAULT:[3,1,1,""],DUISTRATEGY:[3,1,1,""],ENDC:[3,1,1,""],FAIL:[3,1,1,""],FORCE:[3,1,1,""],INSTALLED_FILE:[3,1,1,""],INSTALLED_FILE_BACKUP:[3,1,1,""],LOGFILE:[3,1,1,""],LOGGINGLEVEL:[3,1,1,""],MAKEDIRS:[3,1,1,""],NOBOLD:[3,1,1,""],OKGREEN:[3,1,1,""],PROFILE_FILES:[3,1,1,""],SKIPROOT:[3,1,1,""],SUPERFORCE:[3,1,1,""],TARGET_FILES:[3,1,1,""],UNDERLINE:[3,1,1,""],VERSION:[3,1,1,""],WARNING:[3,1,1,""],loadconfig:[3,2,1,""]},differencesolver:{DiffLog:[4,3,1,""],DiffSolver:[4,3,1,""]},dynamicfile:{DynamicFile:[5,3,1,""],EncryptedFile:[5,3,1,""],FilteredFile:[5,3,1,""],SplittedFile:[5,3,1,""]},errors:{CustomError:[6,6,1,""],FatalError:[6,6,1,""],GenerationError:[6,6,1,""],IntegrityError:[6,6,1,""],PreconditionError:[6,6,1,""],UnkownError:[6,6,1,""],UserAbortion:[6,6,1,""],UserError:[6,6,1,""]},info:{distribution:[8,2,1,""],hostname:[8,2,1,""],is_64bit:[8,2,1,""],kernel:[8,2,1,""],pkg_installed:[8,2,1,""],username:[8,2,1,""]},interpreters:{CheckDynamicFilesInterpreter:[9,3,1,""],CheckLinkBlacklistInterpreter:[9,3,1,""],CheckLinkDirsInterpreter:[9,3,1,""],CheckLinkExistsInterpreter:[9,3,1,""],CheckLinksInterpreter:[9,3,1,""],CheckProfilesInterpreter:[9,3,1,""],DUIStrategyInterpreter:[9,3,1,""],DetectRootInterpreter:[9,3,1,""],ExecuteInterpreter:[9,3,1,""],GainRootInterpreter:[9,3,1,""],Interpreter:[9,3,1,""],PlainPrintInterpreter:[9,3,1,""],PrintInterpreter:[9,3,1,""],RootNeededInterpreter:[9,3,1,""],SkipRootInterpreter:[9,3,1,""]},profile:{CUSTOM_BUILTINS:[10,1,1,""],Profile:[10,3,1,""]},udot:{StoreDictKeyPair:[11,3,1,""],UberDot:[11,3,1,""]},utils:{expanduser:[12,2,1,""],expandvars:[12,2,1,""],find_exact_target:[12,2,1,""],find_files:[12,2,1,""],find_target:[12,2,1,""],get_current_username:[12,2,1,""],get_date_time_now:[12,2,1,""],get_dir_owner:[12,2,1,""],get_gid:[12,2,1,""],get_uid:[12,2,1,""],get_user_env_var:[12,2,1,""],has_root_priveleges:[12,2,1,""],import_profile_class:[12,2,1,""],is_dynamic_file:[12,2,1,""],log_success:[12,2,1,""],log_warning:[12,2,1,""],normpath:[12,2,1,""],walk_dotfiles:[12,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:class","4":"py:method","5":"py:attribute","6":"py:exception"},terms:{"0_3":26,"1_3":[3,14],"22m":3,"64bit":8,"91m":3,"92m":3,"93m":3,"abstract":[5,6,9,10],"break":14,"case":[0,9,13,14,15,16,17,20,26],"catch":6,"class":[0,2,4,5,6,9,10,11,12,13,14,15,16,17,20,22,23,25,27,28],"const":11,"default":[3,4,10,11,13,16,23,26],"final":23,"function":[0,2,4,5,7,8,9,10,11,12,17,27],"import":[4,11,12,15,17,20,23,25,26,27],"int":[9,12],"long":[15,17,23],"new":[0,4,5,9,13,15,16,17,20,23],"return":[4,5,6,8,9,10,12,15,17,20,25],"short":[11,15,16],"static":[9,14,23],"super":[15,17,22,26,28],"switch":[10,15,17,23],"true":[3,4,8,9,10,12,13,15,17,18,22,25],"var":12,"while":[1,14],And:[1,13],But:[0,15,17,23,26],For:[13,14,18,23,26,28],NOT:10,One:[10,11,12,15,16],PRs:0,Such:[15,17],That:[9,15,17,20],Thats:23,The:[1,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,22,23,24,25,26,27],Then:[1,15,22,23,25],There:[13,15,17,20,23],These:22,Use:[14,15,16],Used:[4,6,9],Using:[12,15,17],Yes:4,__call__:11,__init__:[4,5,6,9,10,11],__old_builtin:10,_access:9,_difflog__append_data:4,_diffsolver__generate_link:4,_diffsolver__generate_profile_link:4,_diffsolver__generate_profile_unlink:4,_diffsolver__generate_unlink:4,_executeinterpreter__create_symlink:9,_gen_err:10,_generate_fil:5,_log_oper:9,_make_read_opt:10,_makedir:9,_messag:6,_op_:9,_op_add_l:9,_op_add_p:9,_op_fin:9,_op_info:9,_op_remove_l:9,_op_remove_p:9,_op_start:9,_op_update_l:9,_op_update_p:9,_profile__create_link_descriptor:10,_profile__reset_builtin:10,_profile__set_builtin:10,_root_detect:9,_templat:1,abil:3,abl:20,abort:[6,9,15,16,20],about:[0,12,15,16,19,25],abov:[15,17,22,23],absolut:[3,4,10,12,15,17,18,19,20,26],accept:[0,15,17],access:[9,12,22,28],accesss:9,accident:14,accord:[9,15,17],account:12,achiev:[14,22],action:[9,11],actual:[5,9,10,15,17,26,27],add:[0,4,5,6,9,10,15,16,17,20,22,23],add_info:4,add_link:4,add_profil:4,add_sourc:[5,20],added:[4,9,10],adding:[15,17],addit:[4,6,13,26],additional_cli_argu:13,advanc:[14,20,23],advantag:[15,17],advis:24,affect:9,affected_fil:9,after:[3,14,15,17,22,26,27],again:[9,20,23,26,27],against:[4,9,12,19],ahead:23,aim:14,aka:10,alia:28,alias:[15,25],all:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,20,22,23,24,26,28],all_profilenam:4,allow:[4,5,10,14,15,16,18],almost:[15,16],alreadi:[9,10,14,15,16,19,23],alsa:22,also:[9,12,13,14,15,16,17,20,23,28],alter:[9,20],altern:[15,16,17,23],although:[0,19],alwai:[0,15,16,17,27],ani:[5,6,9,10,12,13,14,15,16,17,18,22,23],anoth:[9,10,15,16,17,23],antergo:[15,22,25,26],anymor:[9,20],anywher:14,api:10,append:[4,15,17,20],appli:[15,17,20,23],approach:23,apt:[15,23,25],arch:[15,17,22,25,27],aren:[11,12,14],arg:[4,11],argpars:[4,11],argu:22,argument:[4,10,11],around:14,arrai:9,ask:[3,9,15,17,18],askroot:[3,18],associ:4,assum:9,asu:22,attribut:[4,11],aur:23,autodoc:1,autom:[14,22],automat:[0,1,20],autostart:22,avail:[1,15,17,18,23],avoid:23,awai:[13,14,15,17,22],b37b8487ac0b8f01e9e34949717b16d1:13,back:[10,14,15,17,20],backup:[3,10,11,18,20,26],backup_extens:3,backupextens:18,bad:6,bak:[3,18,20],base:[4,5,6,9,10,11,13,22],bash:[3,15,17,22,23,25,27,28],bash_:22,bash_profil:22,bashrc:[12,15,17,22,23,25],basic:5,basicrc:22,bb6a0d9da197de74db91745fb9b433e1:20,becaus:[0,6,9,12,13,14,15,16,17,20,22,23,26,28],befor:[0,3,5,10,15,16,17,20,23,26],begin:[15,17,23,27],behav:[12,13,14,15,17,23],behavior:9,behaviour:10,being:13,belong:[4,27],below:27,best:[0,24],better:[15,16,23],between:[4,9,13,15,16],big:[1,15,16,17],bigger:0,bin:27,binari:23,bit:[8,15,23,25,28],bla1:13,bla:13,blacklist:[3,9,15,16],bold:3,bool:[4,8,9,10,12],both:[13,15,23],bother:14,bottom:20,bracket:27,branch:1,browser:1,bug:[0,26],build:[1,3],built:1,builtin:10,bundl:11,bytearrai:5,calcul:20,call:[4,9,10,15,16,17,18,22,23,25,27,28],call_oper:9,callback:9,camera:[15,17],can:[0,1,2,4,5,6,9,10,11,12,13,14,15,16,17,18,20,21,23,25,26,27,28],caus:[9,13,15,16],certain:[4,15,16,23,26,27],cfg_file:3,chang:[0,1,4,5,9,10,11,14,15,16,17,20,26,28],charact:[15,17],check:[0,1,9,10,11,12,13,14,15,16,20],check_blacklist:9,check_dirnam:9,checkdynamicfilesinterpret:9,checklinkblacklistinterpret:9,checklinkdirsinterpret:9,checklinkexistsinterpret:9,checklinksinterpret:9,checkprofilesinterpret:9,checksum:5,choic:11,choos:[9,15,17],chosen:[15,16],circumv:[20,26],class_nam:12,clean:[1,14],clean_environ:13,clear:[15,16],cli:11,clone:23,code:[1,3],codefactor:0,collect:[2,9],colon:27,color:[3,6,12,18],com:23,comand:5,combin:[11,15,17,23],come:[14,23],comma:18,command:[3,5,10,14,18,20,21,23,24,27],commandlin:[4,11,14,18,24],commit:1,common:23,compabl:[3,14],compar:[4,26],comparison:3,compat:11,complet:[0,13,15,16],complex:[14,22],comprehens:[15,17],compton:22,concept:[15,17],concret:10,condit:13,conf:[15,17,22,23,26,27],config:[3,11,14,15,16,17,18,22,23,26,27,28],config_fil:3,config_search_path:3,configfil:[15,17],configur:[1,3,10,14,15,17,22,24],conflict:[9,15,16,23],conform:0,connect:[15,17,22],consid:[15,16,17],consist:1,constant:[0,2,5,7,10,12],constructor:[4,5,6,9,10,11],contain:[3,5,6,9,10,12,15,17,18,19,22,23,26,27],content:[5,9,10,11,13,15,17,20],context:6,contradict:23,contribut:[1,2,14],control:[15,17],convert:[1,6,11,12],copi:[18,23],correct:[9,12,13,15,17,27],correctli:[6,13,23],correspond:[4,9,20],could:[9,13,15,17,18,20,22,23,28],count:9,cours:[23,28],cover:[1,14,23,24],creat:[1,3,4,9,10,12,14,15,16,17,18,22,23,26,27],critic:[6,11,26],css:1,current:[3,8,9,10,12,15,16,17,20,22,26],custom:[1,6,9,10,11,22],custom_builtin:10,customerror:[6,11],customexcept:6,customrc:22,cwd:10,cycli:10,damn:14,danger:[15,16],data:[3,4,9,15,17,20,22,23,26],data_dir:3,date:[4,15,26],datetim:12,debian:[15,16,17,22],debug:[11,15,16],decid:[9,20],decrypt:[3,5,10,18,20],decrypt_pwd:3,decryptpwd:[15,17,18],deeper:2,deepest:9,def:[15,17,20,22,23,25,27],default_dir:4,default_opt:4,defin:[6,13,14,15,17,22,23,27],delet:[1,9],depend:[10,23],descend:23,describ:[4,13,15,17,23],descript:[9,18],desir:20,desktop:[18,28],dest:11,detail:2,detect:[9,15,16,23],detectrootinterpret:9,determin:[3,4,9],develop:[1,14],devic:[1,8,14,15,16,17,22,23,26,28],device1:[15,17],device2:[15,17],devid:[15,17],dict:[4,9,10,11],dictionari:[4,10,11,13,26],didn:6,diff:[9,20],differ:[4,5,6,9,13,14,15,16,17,19,20,23,27],differencesolv:[2,7],difflog:[4,9,11],diffsolv:4,dig:2,dir_default:[3,10],dircetori:[15,17],directli:[1,10,11,14,15,17,20,27],directori:[1,3,4,5,9,10,11,12,13,15,16,17,18,22,23,27,28],dirnam:9,disabl:[22,23],disadvantag:20,discard:20,disclaim:6,dispatch:22,displai:[15,16,20],distinguish:13,distribut:[8,14,15,17,22,25],divid:28,dls:28,doc:[0,1,18,22,23],document:[2,7,15,17,22,23,24,26,27],doe:[9,10,12,13,15,17,26,27],doesn:[6,9,12,14,15,17,22,23,26],doing:[15,16],don:[0,3,9,10,14,15,16,17,22],dop:9,dot:28,dotfil:[3,5,6,10,13,14,15,17,18,19,20,21,26,28],dotfile_repo:20,dotignor:[12,14,24],dotmang:[12,14,26],downsid:[15,16,17],drm:28,dry:[14,15,16,20],dryrun:[9,11],due:6,dui:[3,15,16,18],duistrategi:3,duistrategyinterpret:9,dunst:22,dunstrc:22,dup:28,duplic:9,dure:[6,26],dynam:[5,9,10,12,20],dynamicfil:[2,7,10,12,14,15,17,24],dynmaic:5,each:[4,14,15,17,19,20,22,26],earli:26,easi:[14,23,27],easier:5,easiest:[15,17],edg:14,edit:[15,17,20],effect:23,either:[9,10,13,14,20,21,23],els:[15,25],emb:23,empti:[3,4,15,17],enabl:23,encapsul:[9,22],encourag:0,encrypt:[5,10,14,15,17,18,20,22,23,24,28],encryptedfil:[5,10,20],end:[9,14,22,23],endc:3,enough:[14,23],entir:[9,11],entri:[4,9,10],environ:[12,13,15,17],equal:10,equival:18,error:[1,2,7,11,12,13,14,15,16,17,23,26],especi:14,essenti:14,etc:[3,8,9,14,15,16,17,18,22,23,26,27],evalu:4,evalut:4,even:[9,15,17,18,20,23],eventhough:10,ever:27,everi:[5,12,13,14,15,16,17,19,20,26,27,28],everyon:0,everyth:[9,14,15,16,27],everytim:[10,28],everywher:28,exact:12,exactli:9,exampl:[4,6,12,14,17,18,23,24,26,28],except:[0,1,6,9,11,15,17,22],exclus:14,execut:[4,8,9,10,11,12,13,15,16,17,27,28],execute_argu:11,executeinterpret:[4,9],exhaust:27,exist:[3,6,9,10,12,13,14,15,16,23,26],exit:[9,15,16],exitcod:[6,13],expand:12,expandus:12,expandvar:12,expect:[6,13,14],explain:[1,14,15,17,24,26],explan:27,express:[10,14,15,17,19],extend:13,extens:[3,18,24],extlink:10,extra:22,fail:[3,9,12,13],failur:13,fallback:12,fals:[3,4,10,11,13,18],familiar:19,far:13,fatalerror:6,favor:10,favorit:1,favourit:28,featur:[0,14,15,17,22,23],fed:9,feed:4,feh:27,few:[15,17,23,27],field:7,figur:12,file:[0,1,3,4,5,6,9,10,11,12,13,14,16,19,20,21,22,23,24,27,28],file_nam:9,filenam:[9,10,12,15,16,17,20,22,23],filename2:23,filename3:23,filesystem:[4,9,14,15,16,26],filteredfil:[5,10],fin:4,find:[0,1,2,5,9,10,12,14,15,17,20],find_exact_target:12,find_fil:12,find_target:12,fine:22,fing:22,finish:23,firefox:1,first:[1,3,5,8,10,12,15,16,17,20,22,26,27],fit:22,fix:[0,12,20,22,26],flag:[9,12,15,16,21,26],flexibl:14,fly:[15,17],follow:[0,9,15,16,17,18,20,22,23,26,27],forbidden:9,forc:[3,9,15,16,18],forget:[15,16],forgot:23,format:[3,6,9,11,12],found:[0,1,6,9,10,12,13,15,17],freeli:9,from:[0,1,3,4,5,9,10,11,12,13,14,15,16,17,18,20,22,23,25,27,28],full:[2,5,9,10,23],fullfeatur:22,fullfil:6,fur:15,further:4,furthermor:[2,4,9,10,11,14,15,17,23],futur:[0,10,13,23],gainrootinterpret:9,gener:[0,4,5,6,9,10,14,15,17,20,22,23,25,26,27],generationerror:[6,10,12],get:[5,9,12,14,15,16,17,24,25],get_current_usernam:12,get_date_time_now:12,get_dir_own:12,get_gid:12,get_known:9,get_uid:12,get_user_env_var:12,getdir:5,getpath:5,gid:[9,12,26],git:[1,19,20,22,23,26,27,28],gitconfig:[15,17,22,26],gitconfig_system:[22,26],gitgutt:22,github:[1,15,23],give:[9,14,15,17,20],given:[0,4,6,8,9,10,12],gnupg:[15,17,23],goal:0,god:14,goe:[1,9,12],going:[9,15,16,23],good:[15,17],googl:0,got:14,gpg:[5,15,17,21,22],green:3,grep:[15,17],group:[13,15,17],groupid:26,guid:[1,2,14],gvimrc:[15,17,23],had:14,half:22,handel:[15,17],handi:[15,17],handl:[9,11,14],handler:6,happen:[15,16,23,26],hard:14,hardwar:22,has:[6,12,13,15,16,17,22],has_root_priveleg:12,has_tag:10,hash:[13,20],have:[0,9,12,13,14,15,16,17,18,20,22,23,26,27,28],hdmi:22,hdmi_plugin:22,heard:27,help:[0,2,6,11,15,16,20,23],helper:[4,20],here:[0,9,22,23],hide:1,higher:3,highli:[0,15,17,23],highlight:1,hint:6,his:12,histori:14,hold:[10,13],home:[3,14,15,17,18,22,23,26],hook:14,host:[1,8,14,15,16,17,22],hostnam:[8,14,15,25],how:[2,6,9,14,15,17,23,24,26,27],howev:22,html:[1,23],http:[15,23],hud:23,i3config:22,id_rsa:[15,17],idea:[15,17,23],identifi:[10,15,16],ignor:[9,19,20],illumin:22,imf:[15,16],immedi:20,implement:[4,5,6,9,10,11,14],implemet:10,import_profile_class:12,improv:0,inaccess:9,includ:[4,9,11,18],inclus:[15,17],inconsist:23,increas:22,increment:[0,26],inde:6,indent:27,index:[1,3],indic:4,individu:22,info:[2,3,4,7,9,14,18,22,24],inform:[0,1,2,4,5,8,11,14,15,16,25,26],inherit:[12,15,16,22,28],ini:[15,17,18,23,28],initi:[4,9,11],inputrc:[15,17,22,23],insert:9,inspect:9,inspect_fil:9,instal:[0,1,3,4,6,8,9,11,14,15,16,17,20,22,24,25,28],installed_fil:3,installed_file_backup:3,installed_filenam:3,installed_symlink:4,instanc:10,instead:[5,9,11,12,15,16,17,20,23,25],instruct:14,insuffici:11,integ:18,integr:14,integrityerror:[6,9],intend:[14,27],interact:9,interest:23,interfac:[14,24],intern:[11,15,17],interpret:[2,4,7,11],intuit:[4,23],invalid:11,invari:6,is_64bit:[8,15,25],is_dynamic_fil:12,is_instal:9,isn:[9,15,16,23],issu:[0,9,15,16,26],iter:4,its:[4,5,9,10,12,15,16,17,20,26],itself:[4,13,15,16,17],join:5,json:[3,26],just:[2,9,10,11,13,15,16,17,18,23,27],justifi:0,keep:[9,14,15],kei:[4,10,13,15,16,17,23],kernel:[8,15,25],key1:[15,17],key2:[15,17],key3:[15,17],key4:[15,17],keybind:[15,17,22,23],keyfil:[15,17],keyword:27,kind:[11,23],know:[4,14,19,27,28],kwarg:[4,10],languag:27,laptop:[22,28],last:[13,15,16,22,26,27],later:[20,27],latter:3,launch:[15,17],layer:14,left:26,let:[10,15,17,20,23],level:[3,15,27,28],like:[4,9,10,11,12,13,14,15,16,17,18,20,22,23,25,27,28],limit:14,line:[8,15,17,19,27],link:[4,5,6,9,10,12,13,14,16,19,20,21,22,23,25,27],link_add:9,link_delet:9,link_remov:9,link_upd:9,linklist:9,linux:[15,17,22,25],list:[3,4,5,9,10,11,12,13,15,16,17,18,26,28],liter:28,littl:[14,19,23],load:[3,9,11,22,23],load_instal:11,loadconfig:3,local:[1,22],locat:[1,3,15,16,18,20],lock:22,log:[3,9,12,15,16,18,25],log_config:22,log_success:12,log_warn:12,logfil:[3,12,15,16,18],logginglevel:[3,18],logic:6,login:12,look:[0,9,10,12,13,15,23,26,27,28],lookup:[9,10,12],lose:20,lost:20,lot:[23,26],low:22,m2r:1,made:[5,20],main2:[15,16],main:[11,15,16,17,20,22,25,26,27,28],mainli:1,major:0,make:[0,1,5,15,16,17,18,20,23,26,27],makedir:[3,9,15,16,18],man:1,manag:[14,15],manipul:[5,13],manpag:1,manual:[0,1,2,14,26],map:[9,10],mark:27,markdown:1,master:[1,22,27],match:[9,10,12,15,17,19,26],matter:[14,23],maxim:14,mayb:23,md5:[13,20],md5sum:5,mean:[9,10,12,15,17],mechan:5,merg:[1,5,9,10,20,22],messag:[4,6,9,12,13,15,16],met:13,metavar:11,method:[5,9],might:[1,9,11],migrat:14,mileston:0,mine:22,mini:22,minim:[22,23],minmal:23,minut:[15,17],misc:27,miss:14,misus:10,mkinitcpio:[15,17,22],modif:[0,26],modifi:[0,1,9,23,26],modprob:22,modul:[4,5,6,7,8,9,10,11,12,14,24,28],moment:[4,10,12,13,26],monitor:22,more:[0,3,10,11,13,14,15,16,17,20,21,22,23,27,28],most:[0,1,9,14,15,16,17,18,22,23],mostli:[15,16],move:[9,15,16,23],msg:10,much:[15,17],multimonitor:22,multipl:[4,5,6,9,10,12,14,15,16,17,18,20,23,27],must:[10,13],mydoc:22,name1:13,name:[3,4,5,6,8,9,10,12,13,16,18,20,22,23,25,26,27],name_of_test:13,namespac:11,napoleon:1,narg:11,navig:1,need:[0,1,3,4,5,6,9,10,12,14,15,16,17,19,20,22,23,25,26,27],nest:5,network:22,networkmanag:22,never:[26,27,28],new_symlink:4,newest:5,newtest:13,next:20,nobold:3,non:[9,12,13,15,16],none:[3,4,9,10,11,12,14],normal:[3,5,12,13,15,16],normpath:12,note:[1,27],noth:[9,13,15,17,27],now:[4,13,15,16,17,20,22,23,27],number:[0,3,9,15,17,26],nut:14,object:[4,5,9,10,11,26],obviou:23,obvious:20,occur:[6,9,11,12,15,16,26],off:9,offic:22,often:9,okgreen:3,old:[4,9,10,11,14,20,26],omit:3,ommit:10,onc:[15,17],one:[3,5,9,10,15,16,17,20,23,27],ones:4,onli:[0,1,4,9,10,11,12,13,14,15,16,17,18,20,22,23,26,27],onlin:15,open:1,openpgp:21,oper:[3,4,9,14,15,16,17],opportun:[9,26],opt:[10,22],option:[3,4,9,10,11,13,18,20,22,27],option_str:11,order:[5,9,15,17,23],ore:[10,11],organ:14,origin:[6,9,12,20,23],original_error:6,other:[9,14,15,17,22,23,26],otherwis:[9,12,13,15,16,17,26,28],our:23,out:[4,9,11,12,15,16],output:[3,5,10,12,15,16,18,21,23],outsid:[10,13,20],over:[4,22,23],overrid:18,overridden:1,overwrit:[3,9,10,13,15,16,18,20],overwritten:[9,10],owd:11,own:[1,9,10,18,20,22,26],owncloud:[15,17],owner:[3,9,12,14,15,16,17,18,26],packag:[8,15,23,25],pacman:[15,17,22,25,26,27],page:1,pair:4,paramet:[3,4,5,6,8,9,10,11,12,13,15,17,27],parent:[4,6,9,10,15,16,17,23,26],parent_arg:[4,9],parent_nam:4,parentnam:4,pars:[4,11],parse_argu:11,parser:11,part:[1,3,14],pass:[15,17,23],passwd:[15,16],password:[3,15,17,18],patch:[0,9,20],patch_schema:0,path:[3,4,5,9,10,11,12,13,18,19,20,21,23,26],pattern:[9,10,19],peopl:[2,27],pep8:0,percent:[15,17,23],perfect:0,perform:[9,11,15,16],perman:[10,15,17],permis:12,permiss:[3,9,11,12,13,14,15,16,17,18,22,26],person:28,peter:[15,17],pick:23,pictur:[15,17],pip:[1,23],pipe:[5,10,20],pkg:22,pkg_instal:[8,15,25],pkg_name:[8,15,25],pkk:[15,17],place:[19,23],plai:23,plain:3,plainprintinterpret:9,platform:[8,13,22],pleas:26,plu:[15,17],plug:22,plugin:[1,15,17,22,23],png:22,point:[6,9,14,15,17,23],pokemon:6,polybar:[15,17,22,28],polybarconfig:[15,17,22],polybarlaunch:[15,17,22],portabl:[18,23],possibl:[0,21,26,27],post:13,potenti:[15,16],power:[14,22,23],practic:[15,17,24],preced:10,precis:[15,17],precondit:[6,13],preconditionerror:[6,9,11,12],prefer:[3,10,15,16,23,28],prefix:[3,9,15,16,17,18,22,23],prepend:[9,15,17,23],preserv:5,pretti:[9,15,16],prettyprint:4,prevent:14,previou:[15,16,23],prf:22,print:[4,9,11,12,15,16],print_debuginfo:11,print_instal:11,print_installed_profil:11,printinterpret:9,priorit:23,privat:22,priveleg:12,probabl:[19,23],problem:23,proce:20,process:[1,9,11,12,15,16,20,26],profil:[2,3,4,6,7,9,11,12,13,14,18,20,22,25,27],profile_add:9,profile_delet:9,profile_dict:4,profile_fil:[3,12],profile_list:9,profile_nam:[4,6],profile_remov:9,profile_upd:9,profilefil:[18,23],profilelist:4,profilenam:[4,10,15,17],program:[0,6,12,14,15,17,22,23,27,28],programm:12,project:[0,1],properli:14,properti:[2,5,6,15,17,23],propos:0,protect:9,provid:[3,4,5,8,9,10,12,14,15,17,23,24,25],pull:[0,1],purpos:[11,15,17],push:[1,14],put:[27,28],pylint:0,python3:23,python:[11,12,14,15,16,17,23,24],quickli:23,quiet:[15,16,18],quotat:27,radical:22,radicale_log:22,rais:[6,9,10,11,12,15,16,17],rasi:[15,17,22],raspberri:[22,23],raw:[5,9],read:[11,26],readabl:11,realli:[6,9,14,26,28],reason:23,receiv:[15,17],recommend:[0,15,17,23],recurs:[4,10,15,16],red:3,refer:[0,1,2,9,11,14],refus:26,regener:[15,17],regex:[15,17],regress:13,regressiontest:[13,23],regular:[10,14,15,17,19],reject:0,rel:[12,13,15,17,18],releas:[8,15,25],rememb:0,remov:[4,9,10,15,16,17,20,23,26,28],remove_link:4,remove_profil:4,removed_link:9,renam:[1,14],reorder:9,replac:[3,4,9,11,15,17,18,22,23],replace_pattern:[3,10,15,17,18,22],repo:[26,28],repositori:[12,14,15,17,18,19,20,23],repres:22,request:[0,1],requier:3,requir:[0,9,11,15,16,18,23],reserv:26,reset:[10,15,17],resolv:[4,11],restart:9,restor:[9,10],restruct:1,result:[4,10,12,15,17,20,23],retriev:[8,12],reus:[14,15,17],reusabl:[14,23],revert:26,review:9,rewrit:9,right:[14,15,17],rmtag:10,rofi:[15,17,22,28],root:[3,4,9,10,12,13,15,16,18,22],rootgroup:13,rootneededinterpret:9,rootus:13,rule:[0,22,27],run:[4,5,8,9,11,13,14,15,16,17,20,23,25],run_interpret:4,safe:6,safer:[15,17],sake:13,same:[1,4,9,10,12,13,15,16,17,23,27],sane:18,satisfi:14,save:[15,16,18,26],schema:[0,3,12,18,22,26],schuerik:[3,15,23],script:[11,15,17],search:[3,10,11,12,15,17,20],second:[1,3,23],section:[0,2,6,11,15,16,17,18,21,23],see:[0,14,20,21,23,26],self:[4,5,9,10,11,14,15,17,20,22,25,27],semant:22,semat:6,sens:[15,17],sensit:[15,16],sensitiverc:22,separ:[4,15,17,27,28],seper:[3,15,16,18,23],server:22,servic:22,set:[0,3,4,6,9,10,11,12,14,15,16,17,22,25,26],set_difflog_data:9,setup:[13,14,15,16,17,22,28],sever:[15,17],shall:[3,4,9,10,12,14,18,20,23],shell:[5,10,15,17,20,23,28],shell_command:[5,10],shit:23,shorten:23,should:[0,3,5,15,16,18,22,23,26,28],show:[6,9,15,16,22,23],shown:[15,16],sign:[15,17,23],silent:[15,16,18],similar:[15,17,23],similari:9,simpl:[0,8,23],simul:[14,15,16],singl:[0,4,9,11,14,15,16,17,28],skip:[4,9,15,16],skipped_reason:9,skiproot:[3,15,16,18],skiprootinterpret:9,small:[9,22],snippet:[22,23],solut:23,solv:[0,4,15,16,23],solver:4,some:[0,1,5,9,13,14,18,20,22,23],someothernam:23,sound:22,sourc:[1,5,10,15,17,20],space:[15,16],special:[13,26,27],specif:[3,12,13,18,22],specifi:[4,5,6,10,11,13,14,15,16,17,19,20,27],spell:22,spellfil:22,sphinx:1,spl:22,split:[11,14,15,17],splittedfil:[5,10],splittet:[15,17],ssh:[15,17,22],sshonconnect:22,stacktrac:[15,16],stage:5,stai:[4,20],standart:[4,12],start:[3,4,9,11,12,14,15,17,18,22,24,26,27],startegi:[15,16],startup:11,state:[10,26],station:23,still:[9,12,23,27],stop:3,store:[4,5,9,10,11,20,23,26],storedictkeypair:11,str:[3,4,5,6,8,9,10,11,12],strategi:[15,16],string:[0,4,12,15,17,18],strip:[15,17,22],structur:4,struggl:27,styleguid:0,sub:4,subclass:[5,6],subdir:5,subdirectori:[5,9,13,15,17,20,23],submit:0,subprof:[10,22,23,25,27],subprofil:[4,9,10,15,16,17,22,23,26],subset:[1,9],substitut:12,succesfulli:23,success:[12,13],sudo:[9,12,23],sudo_gid:12,sudo_uid:12,suffix:[3,15,17],suit:14,suitabl:[15,17],superclass:10,superforc:[3,9,15,16,18],support:[15,17],suppos:[15,17,20],sure:[5,15,16,18,23,26,27],surround:27,svn:23,symbol:[4,13,14,15],symlink:[4,9,13,14,15,17,20,23,26],symlink_nam:4,synchronis:22,syntax:[0,6,14,27],sys:11,system:[0,6,8,14,15,18,22,23,25],systemd:22,systemrc:22,tag:[10,12,16,18,22,23,27],take:[0,12,13,15,17,23,27],target:[5,6,9,10,12,13,15,17,26],target_dir:10,target_fil:[3,12],target_pattern:10,targetfil:[18,23],techniqu:23,tell:[5,8,23,27],templat:14,temporarili:[12,15,16],termit:[26,27],test1:23,test:[2,11,14,15,16,17,18,20,23],text:[1,3,12,15,17,20],than:[3,9,10,13,27],thei:[0,3,9,12,13,15,16,17,20,22,23,26],them:[1,4,5,9,10,12,15,17,18,22,23],theme:1,therefor:[19,23],thi:[0,1,2,3,4,5,6,8,9,10,11,12,13,15,16,17,18,19,20,22,23,25,26,27,28],thing:[9,11,23,27],think:[15,17],thinkpad:22,those:[4,13,15,16,17,18,20,22,25,26,27],though:[9,15,17],three:13,through:[12,15,16],ticket:26,time:[4,6,12,14,15,16,17,20,23],timestamp:[15,16],tip:[14,24],tmux:[15,17,26,27],togeth:[5,9],tool:14,top:[13,19,28],topic:[23,24],total:23,touch:9,track:[1,20],transform:5,travi:[1,3],treat:4,tree:[9,12,13,28],tri:22,trigger:[6,9],troubleshoot:23,tupl:[9,12],turn:9,twenti:[15,17],twice:[9,23],two:[1,13,15,17,23,26],txt:[15,17,20,22],type:[4,5,6,9,10,11,20,28],uberdot:[0,2,3,6,7,8,9,11,12,16,17,18,19,20,21,22,23,24,25,26,27],ubuntu:[15,25],udev:22,udot:[2,7,15,16,23,28],uid:[9,12,26],ultisnip:[22,23],under:23,underlin:3,underscor:[3,26],understand:[15,16,23,27],undo:[9,20],unexpect:[6,26],unform:6,unformat:[15,16],uninstal:[4,15,16,23,26],uniqu:[15,17,23],unison:22,unison_data:22,unix:[10,15,17],unkown:6,unkownerror:[6,9,11],unlik:[15,17],unlink:4,untag:23,until:[9,12,28],unus:9,updat:[0,4,5,9,10,15,16,17,20,23,28],update_link:4,update_par:4,update_profil:4,upward:9,usabl:22,usag:[1,3,14,20],use:[1,3,4,10,13,14,15,16,17,18,20,22,23,24,25,26,27,28],used:[1,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,22,26],useful:[9,15,16,17,23],user:[0,1,4,5,6,8,9,10,12,13,14,15,17,18,22,23,25,26],user_interact:9,userabort:[6,9],usererror:[6,11],userid:26,usernam:[8,12,15,18,25],uses:[10,12,15,17],using:[0,1,5,6,9,10,14,15,17,20,21,22],usual:[15,17],util:[2,7],val:[15,16],valid:9,valu:[3,4,9,10,11,12,18,23],valueerror:12,variabl:[12,15,17],variat:[15,17,22],varnam:12,verbos:[15,16,18],veri:[0,14,15,17,23,26,27],verifi:[0,1,13,23,26],version:[3,5,8,9,11,12,14,15,16,17,20],via:[10,11,18],view:5,vim:[15,17,22,23,25,27,28],vimrc:[15,17,22,23],violat:[0,6,9],wai:[0,9,15,16,17,20,23],walk:12,walk_dotfil:12,wallpap:22,want:[0,1,2,4,10,13,15,16,17,22,23,27],warn:[3,12,15,16,20],wasn:9,web:1,webserv:22,well:[9,10,14,15,17,22,23],were:[4,10,12,14,20,23,26],what:[8,9,15,16,17,19,20,22,23,26],whatev:11,when:[0,1,6,9,11,15,16,17,18,19,20,23,26],whenev:[0,20,23],where:[3,5,11,12,13,14,23],wherea:[15,17,23],which:[0,1,9,12,13,14,15,17,18,20,23,27],whithout:10,whole:[9,23],whose:[9,12],wide:18,wifi:[15,17,22],within:[10,14,15,16],without:[1,6,9,10,14,15,16],won:[0,9,14,15,16,17,19,20,23,26],wont:4,work:[2,9,10,11,13,14,15,16,17,19,22,23,26,28],workaround:14,workflow:[15,16],worri:14,would:[9,15,16,17,20,22,23,28],wrapper:10,write:[1,2,5,9,11,20,23,27],written:[6,9,14,20,26,27],x1b:3,year:22,yellow:3,yet:5,you:[0,1,2,8,10,11,13,14,15,16,17,18,19,20,22,23,25,26,27,28],your:[0,1,14,15,16,17,18,19,20,26,28],yourself:[15,16,20,23],yow:0,yyyi:12,zero:13,zprofil:[15,17,22,23],zsh:[22,23,27,28],zsh_:22,zsh_profil:[15,17,22,23],zshrc:[22,23]},titles:["Contributing Guide","How to document uberdot","For developers","Constants","Differencesolver","DynamicFile","Errors","Reference manual","Info","Interpreters","Profile","udot","Utils","Testing uberdot","uberdot","uberdot manual","Commandline Interface","Commands","Configuration",".dotignore","Dynamicfiles","Encryption","Examples","Getting started","Usage Manuals","Info module","Installed-files","Python explained","Tips"],titleterms:{"default":[15,17,18],"function":[15,25],For:2,Going:23,about:14,alias:28,argument:18,basic:[15,17],code:0,command:[15,17],commandlin:[15,16],configur:[18,23],constant:3,content:14,contribut:0,control:23,corrupt:26,creat:[13,20,28],decrypt:[15,17,21,28],deploi:1,descript:15,develop:2,differencesolv:4,dirregressiontest:13,document:[0,1,14],dotfil:23,dotfilenam:[15,17],dotignor:19,dynamicfil:[5,20],encrypt:21,error:6,exampl:[15,16,20,22,27],explain:[20,27],extlink:[15,17],file:[15,17,18,26],first:23,further:23,gener:1,get:23,guid:0,has_tag:[15,17],helper:[15,17],how:1,info:[8,15,25],instal:[18,23,26],instanc:20,interfac:[15,16],interpret:9,kei:26,link:[15,17,26],manipul:[15,17],manual:[7,15,20,21,23,24],merg:[15,17],mode:[15,16],modul:[15,25],name:[15,17],note:15,opt:[15,17],option:[15,16,17,23],optionnam:[15,17],organ:28,password:28,path:[15,17],pattern:[15,17],phase:13,pipe:[15,17],postcondit:13,pre:13,profil:[10,15,16,17,21,23,26,28],put:23,python:27,refer:7,rmtag:[15,17],set:[1,18,23,28],shell_command:[15,17],start:23,step:23,structur:[1,26],style:0,subprof:[15,17],synopsi:[15,16],tag:[15,17],test:13,testcas:13,thi:14,tip:28,uberdot:[1,13,14,15,28],udot:11,updat:26,usag:[15,24,25],used:21,util:12,version:[0,23,26],why:14,workflow:20,your:23}})