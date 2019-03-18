Search.setIndex({docnames:["developers/contributing","developers/documentation","developers/index","developers/reference/constants","developers/reference/differencesolver","developers/reference/dotmgr","developers/reference/dynamicfile","developers/reference/errors","developers/reference/index","developers/reference/info","developers/reference/interpreters","developers/reference/profile","developers/reference/utils","developers/tests","index","usage/commandline-interface","usage/commands","usage/dynamicfiles","usage/encryption","usage/example-configuration","usage/getting-started","usage/index","usage/info-module","usage/installed-file","usage/python-syntax","usage/tips"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["developers/contributing.rst","developers/documentation.rst","developers/index.rst","developers/reference/constants.rst","developers/reference/differencesolver.rst","developers/reference/dotmgr.rst","developers/reference/dynamicfile.rst","developers/reference/errors.rst","developers/reference/index.rst","developers/reference/info.rst","developers/reference/interpreters.rst","developers/reference/profile.rst","developers/reference/utils.rst","developers/tests.rst","index.rst","usage/commandline-interface.rst","usage/commands.rst","usage/dynamicfiles.rst","usage/encryption.rst","usage/example-configuration.rst","usage/getting-started.rst","usage/index.rst","usage/info-module.rst","usage/installed-file.rst","usage/python-syntax.rst","usage/tips.rst"],objects:{"":{constants:[3,0,0,"-"],differencesolver:[4,0,0,"-"],dotmgr:[5,0,0,"-"],dynamicfile:[6,0,0,"-"],errors:[7,0,0,"-"],info:[9,0,0,"-"],interpreters:[10,0,0,"-"],profile:[11,0,0,"-"],utils:[12,0,0,"-"]},"differencesolver.DiffLog":{_DiffLog__append_data:[4,4,1,""],__init__:[4,4,1,""],add_info:[4,4,1,""],add_link:[4,4,1,""],add_profile:[4,4,1,""],data:[4,5,1,""],remove_link:[4,4,1,""],remove_profile:[4,4,1,""],run_interpreter:[4,4,1,""],update_link:[4,4,1,""],update_parent:[4,4,1,""],update_profile:[4,4,1,""]},"differencesolver.DiffSolver":{_DiffSolver__generate_links:[4,4,1,""],_DiffSolver__generate_profile_link:[4,4,1,""],_DiffSolver__generate_profile_unlink:[4,4,1,""],_DiffSolver__generate_unlinks:[4,4,1,""],__init__:[4,4,1,""],default_dir:[4,5,1,""],default_options:[4,5,1,""],difflog:[4,5,1,""],installed:[4,5,1,""],parent_arg:[4,5,1,""],profilenames:[4,5,1,""],solve:[4,4,1,""]},"dotmgr.DotManager":{__init__:[5,4,1,""],args:[5,5,1,""],dryrun:[5,4,1,""],execute_arguments:[5,4,1,""],installed:[5,5,1,""],load_installed:[5,4,1,""],owd:[5,5,1,""],parse_arguments:[5,4,1,""],print_debuginfo:[5,4,1,""],print_installed:[5,4,1,""],print_installed_profiles:[5,4,1,""],run:[5,4,1,""]},"dotmgr.StoreDictKeyPair":{__call__:[5,4,1,""]},"dynamicfile.DynamicFile":{SUBDIR:[6,5,1,""],__init__:[6,4,1,""],_generate_file:[6,4,1,""],add_source:[6,4,1,""],getdir:[6,4,1,""],getpath:[6,4,1,""],md5sum:[6,5,1,""],name:[6,5,1,""],sources:[6,5,1,""],update:[6,4,1,""]},"dynamicfile.EncryptedFile":{SUBDIR:[6,5,1,""],_generate_file:[6,4,1,""]},"dynamicfile.FilteredFile":{SUBDIR:[6,5,1,""],__init__:[6,4,1,""],_generate_file:[6,4,1,""]},"dynamicfile.SplittedFile":{SUBDIR:[6,5,1,""],_generate_file:[6,4,1,""]},"errors.CustomError":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""],_message:[7,5,1,""],message:[7,5,1,""]},"errors.FatalError":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""]},"errors.GenerationError":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""]},"errors.IntegrityError":{EXITCODE:[7,5,1,""]},"errors.PreconditionError":{EXITCODE:[7,5,1,""]},"errors.UnkownError":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""]},"errors.UserAbortion":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""]},"errors.UserError":{EXITCODE:[7,5,1,""],__init__:[7,4,1,""]},"interpreters.CheckDynamicFilesInterpreter":{__init__:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_update_l:[10,4,1,""],dryrun:[10,5,1,""],inspect_file:[10,4,1,""],user_interaction:[10,4,1,""]},"interpreters.CheckLinkBlacklistInterpreter":{__init__:[10,4,1,""],_op_add_l:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_update_l:[10,4,1,""],blacklist:[10,5,1,""],check_blacklist:[10,4,1,""],superforce:[10,5,1,""]},"interpreters.CheckLinkDirsInterpreter":{__init__:[10,4,1,""],_op_add_l:[10,4,1,""],_op_update_l:[10,4,1,""],check_dirname:[10,4,1,""],makedirs:[10,5,1,""]},"interpreters.CheckLinkExistsInterpreter":{__init__:[10,4,1,""],_op_add_l:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_update_l:[10,4,1,""],force:[10,5,1,""],removed_links:[10,5,1,""]},"interpreters.CheckLinksInterpreter":{__init__:[10,4,1,""],_op_add_l:[10,4,1,""],_op_remove_l:[10,4,1,""]},"interpreters.CheckProfilesInterpreter":{__init__:[10,4,1,""],_op_add_p:[10,4,1,""],_op_update_p:[10,4,1,""],get_known:[10,4,1,""],parnent_arg:[10,5,1,""],profile_list:[10,5,1,""]},"interpreters.DUIStrategyInterpreter":{__init__:[10,4,1,""],_op_add_l:[10,4,1,""],_op_add_p:[10,4,1,""],_op_fin:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_remove_p:[10,4,1,""],_op_update_l:[10,4,1,""],_op_update_p:[10,4,1,""],link_adds:[10,5,1,""],link_deletes:[10,5,1,""],link_updates:[10,5,1,""],profile_adds:[10,5,1,""],profile_deletes:[10,5,1,""],profile_updates:[10,5,1,""]},"interpreters.ExecuteInterpreter":{_ExecuteInterpreter__create_symlink:[10,4,1,""],__init__:[10,4,1,""],_makedirs:[10,7,1,""],_op_add_l:[10,4,1,""],_op_add_p:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_remove_p:[10,4,1,""],_op_update_l:[10,4,1,""],_op_update_p:[10,4,1,""],force:[10,5,1,""],installed:[10,5,1,""]},"interpreters.GainRootInterpreter":{_op_fin:[10,4,1,""]},"interpreters.Interpreter":{__init__:[10,4,1,""],call_operation:[10,4,1,""],data:[10,5,1,""],set_difflog_data:[10,4,1,""]},"interpreters.PlainPrintInterpreter":{__init__:[10,4,1,""],_op_fin:[10,4,1,""],_op_start:[10,4,1,""]},"interpreters.PrintInterpreter":{_log_interpreter:[10,7,1,""],_op_add_l:[10,4,1,""],_op_add_p:[10,4,1,""],_op_info:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_remove_p:[10,4,1,""],_op_start:[10,4,1,""],_op_update_l:[10,4,1,""],_op_update_p:[10,4,1,""]},"interpreters.RootNeededInterpreter":{__init__:[10,4,1,""],_access:[10,4,1,""],_op_add_l:[10,4,1,""],_op_remove_l:[10,4,1,""],_op_update_l:[10,4,1,""],_root_needed:[10,4,1,""],logged:[10,5,1,""],root_needed:[10,5,1,""]},"profile.Profile":{"default":[11,4,1,""],_Profile__create_link_descriptor:[11,4,1,""],_Profile__reset_builtins:[11,4,1,""],_Profile__set_builtins:[11,4,1,""],__init__:[11,4,1,""],__old_builtins:[11,5,1,""],_gen_err:[11,4,1,""],_make_read_opt:[11,4,1,""],cd:[11,4,1,""],decrypt:[11,4,1,""],directory:[11,5,1,""],executed:[11,5,1,""],extlink:[11,4,1,""],find:[11,4,1,""],generate:[11,4,1,""],generator:[11,4,1,""],has_tag:[11,4,1,""],link:[11,4,1,""],links:[11,4,1,""],merge:[11,4,1,""],name:[11,5,1,""],opt:[11,4,1,""],options:[11,5,1,""],parent:[11,5,1,""],pipe:[11,4,1,""],result:[11,5,1,""],rmtags:[11,4,1,""],subprof:[11,4,1,""],tags:[11,4,1,""]},constants:{BACKUP_EXTENSION:[3,1,1,""],CFG_FILES:[3,1,1,""],COLOR:[3,1,1,""],CONFIG_SEARCH_PATHS:[3,1,1,""],DATA_DIR:[3,1,1,""],DECRYPT_PWD:[3,1,1,""],DEFAULTS:[3,1,1,""],DIR_DEFAULT:[3,1,1,""],DUISTRATEGY:[3,1,1,""],FALLBACK:[3,1,1,""],FORCE:[3,1,1,""],INSTALLED_FILE:[3,1,1,""],INSTALLED_FILE_BACKUP:[3,1,1,""],MAKEDIRS:[3,1,1,""],PROFILE_FILES:[3,1,1,""],TARGET_FILES:[3,1,1,""],VERBOSE:[3,1,1,""],VERSION:[3,1,1,""],loadconfig:[3,2,1,""]},differencesolver:{DiffLog:[4,3,1,""],DiffSolver:[4,3,1,""]},dotmgr:{DotManager:[5,3,1,""],StoreDictKeyPair:[5,3,1,""]},dynamicfile:{DynamicFile:[6,3,1,""],EncryptedFile:[6,3,1,""],FilteredFile:[6,3,1,""],SplittedFile:[6,3,1,""]},errors:{CustomError:[7,6,1,""],FatalError:[7,6,1,""],GenerationError:[7,6,1,""],IntegrityError:[7,6,1,""],PreconditionError:[7,6,1,""],UnkownError:[7,6,1,""],UserAbortion:[7,6,1,""],UserError:[7,6,1,""]},info:{distribution:[9,2,1,""],hostname:[9,2,1,""],is_64bit:[9,2,1,""],kernel:[9,2,1,""],pkg_installed:[9,2,1,""],username:[9,2,1,""]},interpreters:{CheckDynamicFilesInterpreter:[10,3,1,""],CheckLinkBlacklistInterpreter:[10,3,1,""],CheckLinkDirsInterpreter:[10,3,1,""],CheckLinkExistsInterpreter:[10,3,1,""],CheckLinksInterpreter:[10,3,1,""],CheckProfilesInterpreter:[10,3,1,""],DUIStrategyInterpreter:[10,3,1,""],ExecuteInterpreter:[10,3,1,""],GainRootInterpreter:[10,3,1,""],Interpreter:[10,3,1,""],PlainPrintInterpreter:[10,3,1,""],PrintInterpreter:[10,3,1,""],RootNeededInterpreter:[10,3,1,""]},profile:{CUSTOM_BUILTINS:[11,1,1,""],Profile:[11,3,1,""]},utils:{expanduser:[12,2,1,""],expandvars:[12,2,1,""],find_exact_target:[12,2,1,""],find_files:[12,2,1,""],find_target:[12,2,1,""],get_current_username:[12,2,1,""],get_date_time_now:[12,2,1,""],get_dir_owner:[12,2,1,""],get_gid:[12,2,1,""],get_uid:[12,2,1,""],get_user_env_var:[12,2,1,""],has_root_priveleges:[12,2,1,""],import_profile_class:[12,2,1,""],is_dynamic_file:[12,2,1,""],log_success:[12,2,1,""],log_warning:[12,2,1,""],normpath:[12,2,1,""],walk_dotfiles:[12,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:class","4":"py:method","5":"py:attribute","6":"py:exception","7":"py:staticmethod"},terms:{"0_3":23,"2_3":[3,14],"64bit":9,"abstract":6,"case":[10,15,16,17,23],"catch":7,"class":[2,4,5,6,7,10,11,12,15,16,17,19,20,22,24,25],"const":5,"default":[3,4,5,11,15,20,23],"function":[2,4,5,6,8,9,10,11,12,16,22],"import":[4,5,12,16,17,20,22,23,24],"int":[10,12],"long":[16,20],"new":[4,6,10,15,16,20],"return":[4,6,7,9,10,11,12,16,17,22],"short":[5,15],"static":10,"super":[16,19,23,25],"switch":[11,16],"true":[3,4,9,10,11,12,16,19,22],"var":12,But:[15,16,20,23],For:[14,20,23,25],NOT:11,One:[5,11,12],Such:16,That:[10,16,17],The:[3,4,5,6,7,8,9,10,11,12,15,16,17,19,20,21,22,23,24],Then:[19,20,22],There:[15,16,17,20],These:19,Use:15,Used:[4,7,10],Using:[12,16],Yes:4,__call__:5,__init__:[4,5,6,7,10,11],__old_builtin:11,_access:10,_difflog__append_data:4,_diffsolver__generate_link:4,_diffsolver__generate_profile_link:4,_diffsolver__generate_profile_unlink:4,_diffsolver__generate_unlink:4,_executeinterpreter__create_symlink:10,_gen_err:11,_generate_fil:6,_log_interpret:10,_make_read_opt:11,_makedir:10,_messag:7,_name:22,_op_:10,_op_add_l:10,_op_add_p:10,_op_fin:10,_op_info:10,_op_remove_l:10,_op_remove_p:10,_op_start:10,_op_update_l:10,_op_update_p:10,_profile__create_link_descriptor:11,_profile__reset_builtin:11,_profile__set_builtin:11,_root_need:10,abil:3,abl:17,abort:[7,10,15,17],about:[12,15,22],abov:[16,19],absolut:[4,11,12,16,17,23],accept:16,access:[10,12,19,25],accesss:10,accord:[10,16],account:12,achiev:19,action:[5,10],actual:[6,10,11,16,23,24],add:[4,6,7,10,11,15,16,17,19],add_info:4,add_link:4,add_profil:4,add_sourc:[6,17],added:[4,10,11],adding:16,addit:[3,4,7,23],advanc:17,advantag:16,advis:21,after:[3,16,19,23,24],again:[10,17,23,24],against:[4,10,12],ahead:20,aka:11,alia:25,alias:22,all:[2,3,4,5,6,7,8,10,11,12,15,16,17,19,20,21,23,25],all_profilenam:4,allow:[4,6,11],almost:15,alreadi:[10,11,15],alsa:19,also:[10,12,15,16,17,25],alter:[10,17],altern:[15,16],alwai:[15,16,24],ani:[6,7,10,11,12,15,16,19],anoth:[10,11,15,16],antergo:[19,22,23],anymor:[10,17],api:11,append:[4,16,17],appli:[16,17],apt:[20,22],arch:[16,19,22,24],aren:[5,12],arg:[4,5,10],argpars:[4,5],argu:19,argument:[4,5,11,15],arrai:10,ask:[10,16],associ:4,assum:10,asu:19,attribut:[4,5],aur:20,automat:17,avail:[16,20],awai:16,back:[11,16,17],backup:[3,5,11,17,23],backup_extens:3,bad:7,bak:[3,17],base:[4,5,6,7,10,11,19],bash:[16,19,22,24,25],bash_:19,bash_profil:19,bashrc:[12,16,19,22],basic:[6,16],basicrc:19,bb6a0d9da197de74db91745fb9b433e1:17,becaus:[7,10,12,15,16,17,19,23,25],befor:[6,11,16,17,23],begin:[16,20,24],behav:[12,16],behavior:10,behaviour:11,belong:[4,24],below:24,best:21,better:15,between:[4,10],big:16,bin:24,binari:20,bit:[9,22,25],blacklist:[10,15],bool:[4,9,10,11,12],bottom:17,bracket:24,bug:23,build:3,built:14,builtin:11,bundl:5,bytearrai:6,calcul:17,call:[4,7,10,11,16,19,20,22,24,25],call_oper:10,camera:16,can:[2,4,5,6,10,11,12,15,16,17,18,20,22,23,24,25],cannot:7,carefulli:15,caus:[10,15],certain:[4,15,23,24],cfg_file:3,chang:[4,5,6,10,11,15,16,17,23,25],charact:16,check:[5,10,11,12,15,17],check_blacklist:10,check_dirnam:10,checkdynamicfilesinterpret:10,checklinkblacklistinterpret:10,checklinkdirsinterpret:10,checklinkexistsinterpret:10,checklinksinterpret:10,checkprofilesinterpret:10,checksum:6,choic:5,choos:[10,15],circumv:[17,23],class_nam:12,clear:15,cli:5,clone:20,collect:[2,10],colon:24,color:[3,7,12],com:20,comand:6,combin:[5,16],command:[6,11,14,17,18,21,24],commandlin:[4,5,14,21],compabl:3,compar:[4,23],comparison:3,compat:5,complet:[15,24],complex:19,comprehens:16,compton:19,concept:16,concret:[11,19],conf:[16,19,23,24],config:[3,5,15,16,19,20,23,24,25],config_fil:3,config_search_path:3,configfil:16,configur:[3,11,16,19,24],configurationfil:20,conflict:[10,15],connect:[16,19],consid:[15,16],constant:[2,6,8,12],constructor:[4,5,6,7,10,11],contain:[3,6,7,10,11,12,16,19,20,23,24],content:[2,5,6,11,14,16],context:7,contradict:10,contribut:[2,14],control:16,convert:[5,12],copi:20,correct:[10,12,16,24],correctli:[7,20],correspond:[10,17],could:[10,16,17,19,25],coupl:15,cours:25,cover:21,creat:[4,10,11,12,15,16,19,20,23,24],critic:[5,23],current:[9,10,11,12,16,17,19,23],custom:[5,7,10,11],custom_builtin:11,customerror:[5,7],customrc:19,cwd:11,cycli:11,danger:15,data:[3,4,10,16,17,19,20,23],data_dir:3,date:[4,23],datetim:12,debian:[16,19],debug:[5,15],decid:[10,17],decrypt:[3,6,11,17],decrypt_pwd:3,decryptpwd:16,deeper:2,deepest:10,def:[16,17,19,20,22,24],default_dir:4,default_opt:4,defin:[7,16,19,24],delet:10,depend:[11,20],describ:[4,16],descript:[15,22],desir:17,desktop:25,dest:5,detail:[2,15],determin:[3,4],develop:14,devic:[9,15,16,19,23,25],device1:16,device2:16,dict:[4,5,10,11],dictionari:[4,5,11,23],didn:7,diff:[10,17],differ:[4,6,7,10,15,16,17,19,24],differencesolv:[2,8],difflog:[4,5,10,15],difflogdata:10,diffsolv:4,dig:2,dir_default:3,dircetori:16,directli:[5,11,16,17,24],directori:[3,4,5,6,10,11,12,15,16,19,20,24,25],dirnam:10,disabl:19,disadvantag:17,discard:17,disclaim:7,dispatch:19,displai:17,distribut:[9,16,19,22],divid:25,dls:25,doc:[19,20],document:[2,8,15,16,19,21,23,24],doe:[10,11,12,16,23],doesn:[7,10,12,16,19,20,23],doing:15,don:[10,11,15,16],done:10,dop:10,dot:25,dotfil:[6,11,16,17,18,23,25],dotfile_repo:17,dotignor:12,dotmanag:[2,3,7,8,9,10,12,15,16,17,18,19,20,22,23,24],dotmang:[12,23],dotmgr:[5,15,20,25],downsid:[15,16],drm:25,dry:[15,17],dryrun:[5,10],due:7,dui:[3,15],duistrategi:3,duistrategyinterpret:10,dunst:19,dunstrc:19,dup:25,duplic:10,dure:[7,23],dynam:[6,10,11,12],dynamicfil:[2,8,11,12,14,16,21],dynmaic:6,dynmic:6,each:[4,10,16,17,23],earli:23,easi:[20,24],easier:6,easiest:16,edit:[16,17],either:[10,11,17,18,20],els:22,empti:4,encapsul:[10,19],encrypt:[6,11,14,16,17,19,20,21,25],encryptedfil:[6,11,17],end:[10,19,20],enough:20,entir:5,entri:[4,10,11],environ:[12,16],error:[2,5,8,12,15,16,23],etc:[3,9,10,15,16,19,20,23,24],evalu:4,evalut:4,even:[10,16,17],eventhough:11,ever:24,everi:[6,12,15,16,17,23,24,25],everyth:[10,15,24],everytim:[11,25],everywher:25,exact:12,exactli:15,exampl:[4,7,10,12,14,16,20,21,23,25],except:[5,7,16,19],execut:[4,5,9,10,11,12,15,16,25],execute_argu:5,executeinterpret:[4,10],exist:[7,10,11,12,15,20,23],exit:[10,15],exitcod:7,expand:12,expandus:12,expandvar:12,expect:7,explain:[2,14,15,16,21,23],explan:24,express:[11,16],extens:[3,21],extlink:11,extra:19,fail:[10,12],fallback:[3,12],fals:[3,4,5,11],fatalerror:7,favor:11,favourit:25,featur:[16,19,20],feed:4,feh:24,few:[16,24],field:8,figur:12,file:[3,4,5,6,7,10,11,12,14,15,16,17,18,19,20,21,24,25],file_nam:10,filenam:[10,11,12,15,16,17,20],filesystem:[4,10,15,23],filteredfil:[6,11],fin:4,find:[2,6,10,11,12,16,17],find_exact_target:12,find_fil:12,find_target:12,fine:19,first:[3,6,9,11,12,15,16,17,19,23,24],fit:19,fix:[12,17,23],flag:[10,12,15,18,23],fly:16,follow:[10,16,17,19,20,22,23,24],forbidden:10,forc:[3,10,15],forget:15,format:[5,7,10,12],found:[10,11,12,16],freeli:10,from:[3,4,5,6,10,11,12,15,16,17,19,20,22,24,25],frustrat:16,fuck:[7,15],full:[2,6,10,11],fullfeatur:19,fullfil:7,funciton:4,furthermor:[2,4,5,10,11,16],futur:[11,20],gain:10,gainrootinterpret:10,gener:[4,6,7,10,11,15,16,17,19,20,22,23,24],generationerror:[7,11,12],get:[6,12,14,15,16,21,22],get_current_usernam:12,get_date_time_now:12,get_dir_own:12,get_gid:12,get_known:10,get_uid:12,get_user_env_var:12,getdir:6,getpath:6,gid:[10,12,23],git:[17,19,20,23,24,25],gitconfig:[16,19,23],gitconfig_system:[19,23],gitgutt:19,github:20,give:[10,16,17],given:[4,7,9,10,11,12],gnupg:[16,20],goe:[10,12],going:[10,20],good:16,gpg:[6,16,18,19],grep:16,group:16,groupid:23,guid:[2,14],gvimrc:16,half:19,handi:16,handl:[5,10],handler:7,happen:[15,23],hardwar:19,has:[7,12,15,16,19],has_root_priveleg:12,has_tag:11,hash:17,have:[10,12,15,16,17,19,20,23,24,25],hdmi_plugin:19,heard:24,help:[2,5,7,15,17],helper:[4,17],here:[10,19],highli:20,hint:7,his:12,hold:11,home:[3,16,19,23],host:[9,15,16,19],hostnam:[9,22],how:[2,7,14,16,21,23,24],howev:19,http:20,i3config:19,id_rsa:16,idea:16,identifi:[11,15],ignor:[10,17],illumin:19,immedi:17,implement:[4,5,6,7,10,11,22],implemet:11,import_profile_class:12,inaccess:10,includ:[4,5,10],increas:19,increment:23,inde:7,indent:24,index:14,indic:4,individu:19,info:[2,4,8,10,14,19,21],inform:[2,4,5,6,9,15,22,23],inherit:[12,15,19,25],ini:[16,20,25],initi:[4,5,10],inputrc:[16,19],insert:10,inspect:10,inspect_fil:10,instal:[3,4,5,7,9,10,14,15,16,17,19,21,22,25],installed_fil:3,installed_file_backup:3,installed_filenam:3,installed_symlink:4,instanc:11,instead:[5,6,10,12,15,16,17,22],insuffici:5,integrityerror:[7,10],intend:24,interact:10,interest:20,interfac:[14,21],intern:5,interpret:[2,4,5,8],intuit:4,invalid:5,invari:7,is_64bit:[9,22],is_dynamic_fil:12,is_instal:10,isn:[10,15],issu:[15,23],iter:4,its:[4,6,10,11,12,15,16,17,23],itself:[4,15,16],join:6,json:[3,23],just:[2,5,11,16,20,24],keep:10,kei:[11,15,16],kernel:[9,22],key1:16,key2:16,key3:16,key4:16,keybind:16,keyfil:16,keyword:24,kind:5,know:[4,24,25],kwarg:11,languag:24,laptop:[19,25],last:[15,19,23,24],later:17,latter:3,launch:16,left:23,let:[11,15,16,17],level:[24,25],like:[4,5,10,11,12,16,17,19,20,22,24,25],line:[9,16,24],link:[4,6,7,10,11,12,15,17,18,19,20,22,24],link_add:10,link_delet:10,link_remov:10,link_upd:10,linklist:10,linux:[16,19,22],list:[3,4,5,6,10,11,12,15,16,23,25],liter:25,load:[3,5,10,19],load_instal:5,loadconfig:3,local:19,locat:[3,15,17],lock:19,log:[10,12,15,22],log_config:19,log_success:12,log_warn:12,logfil:[12,15],logic:7,login:12,look:[10,11,12,20,23,24,25],lookup:[10,11,12],lose:17,lost:17,lot:[20,23],low:19,made:[6,17],main:[5,16,17,19,22,23,24,25],make:[6,15,16,17,20,23,24],makedir:[3,10,15],manipul:6,manual:[2,14,21,23],map:[10,11],mark:24,master:[19,24],match:[10,11,12,16,23],matter:20,mayb:16,md5:17,md5sum:6,mean:[10,11,12,16],mechan:6,merg:[6,10,11,17],messag:[4,7,10,12,15],metavar:5,method:6,might:[5,10],mine:19,mini:19,minim:19,minut:16,misc:24,misus:11,mkinitcpio:[16,19],mode:15,modif:23,modifi:[10,23],modprob:19,modul:[4,5,6,7,8,9,10,11,12,14,21,25],moment:[4,11,12,22,23],monitor:19,more:[5,11,15,16,17,18,19,25],most:[15,16,19,20],mostli:15,move:[10,15],msg:11,much:16,multipl:[4,6,7,10,11,12,15,16,17,24],must:11,name:[3,4,6,7,9,10,11,12,15,17,19,20,22,23,24],namespac:5,narg:5,need:[4,6,7,10,11,12,15,16,17,19,22,23,24],nest:6,network:19,networkmanag:19,never:[23,24,25],new_symlink:4,newest:6,next:17,non:[10,12],none:[3,4,5,10,11,12],normal:[6,12,15],normpath:12,note:24,noth:10,now:[4,15,16,17,19,20,24],number:[3,10,16,23],object:[4,5,6,10,11,23],obviou:20,obvious:17,occur:[5,7,10,12,15,23],off:[5,10],offic:19,old:[4,5,10,11,17,23],ommit:11,onc:16,one:[6,10,11,15,16,17,20,24],ones:4,onli:[3,4,5,10,11,12,15,16,17,19,20,23,24],openpgp:18,oper:[4,10,16],opportun:23,oppoutun:10,opt:[11,19],option:[3,4,5,10,11,15,17,19,24],option_str:5,order:[6,10,16],ore:[5,11],origin:[7,10,12,17],original_error:7,other:[10,15,16,19,23],otherwis:[10,12,15,16,23,25],out:[4,5,10,12,15],output:[3,6,11,12,15,18],outsid:[11,17],over:[4,19],overwrit:[3,10,11,15,17],overwritten:[10,11],owd:5,own:[10,11,17,19,23],owncloud:16,owner:[3,10,12,15,16,23],packag:[9,20,22],pacman:[16,19,22,23,24],page:14,paramet:[3,4,5,6,7,9,10,11,12,16,24],parent:[4,10,11,15,16,23],parent_arg:[4,10],parent_nam:4,parentnam:4,parnent_arg:10,pars:[4,5],parse_argu:5,parser:5,part:3,pass:16,passwd:15,password:[3,16],patch:[10,17],path:[3,4,5,6,10,11,12,17,18,20,23],pattern:[10,11],peopl:[2,24],percent:16,perform:[5,10,15],perman:[11,16],permis:12,permiss:[3,5,10,12,16,19,23],person:25,peter:16,pictur:16,pip:20,pipe:[6,11],pkg:[19,22],pkg_instal:[9,22],pkg_name:[9,22],pkk:16,place:20,plain:[3,15],plainprintinterpret:10,platform:[9,19],pleas:23,plu:[3,16],plugin:[16,19],png:19,point:[7,10],pokemon:7,polybar:[16,19,25],polybarconfig:[16,19],polybarlaunch:[16,19],portabl:20,possibl:[18,23,24],power:19,practic:[16,21],preced:11,precis:16,precondit:7,preconditionerror:[5,7,10,12],prefer:[11,15,25],prefix:[3,10,16,19],prepend:[10,16],preserv:6,pretti:[10,15],prettyprint:4,prf:19,print:[4,5,10,12,15],print_debuginfo:5,print_instal:5,print_installed_profil:5,printinterpret:10,privat:19,priveleg:12,proce:17,process:[5,10,12,15,17,23],profil:[2,3,4,5,7,8,10,12,15,17,19,22,24],profile_add:10,profile_delet:10,profile_dict:4,profile_fil:[3,12],profile_list:10,profile_nam:[4,7],profile_remov:10,profile_upd:10,profilefil:20,profilelist:4,profilenam:[4,11,16],program:[7,12,16,19,24,25],programm:12,proifl:11,properti:[2,16],protect:10,provid:[3,4,6,9,10,11,12,16,21,22],purpos:[5,15,16],put:[24,25],python3:20,python:[5,12,14,15,16,21],quiet:15,quotat:24,radical:19,radicale_log:19,rais:[5,7,10,11,12,15,16],rasi:[16,19],raspberri:19,raw:6,read:[5,23],readabl:5,readm:24,realli:[7,10,23,25],reason:20,receiv:16,recommend:[16,20],recurs:[4,11,15],refer:[2,5,14],refus:23,regener:16,regex:16,regressiontest:20,regular:[11,16],rel:[12,16],releas:[9,22],remov:[4,10,11,15,16,17,23,25],remove_link:4,remove_profil:4,removed_link:10,reorder:10,replac:[3,4,5,10,16,19,20],replace_pattern:[3,11,16,19],repo:[23,25],repositori:[12,16,17,20],repres:19,requir:[5,20],reserv:23,reset:11,resolv:[4,5],restart:10,restor:[10,11],result:[4,11,12,16,17],retriev:[9,12],reus:16,revert:23,rickestricksanchez:[3,20],right:16,rmtag:11,rofi:[16,19,25],root:[4,10,11,12,19],root_need:10,root_permiss:10,rootneededinterpret:10,rule:[19,24],run:[4,5,6,9,10,15,16,17,20,22],run_interpret:4,safe:7,safer:16,same:[4,7,10,11,12,15,16,24],save:[15,23],schema:[3,12,23],script:[5,16],search:[3,5,11,12,14,16,17],second:3,section:[2,5,15,16,18,20],see:[17,18,23],self:[4,5,6,10,11,16,17,19,22,24],semant:19,semat:7,sens:16,sensit:15,sensitiverc:19,separ:[4,16,24,25],seper:[3,15],server:19,servic:19,set:[3,4,5,7,10,11,12,16,22,23],set_difflog_data:10,setup:[16,19,25],sever:16,shall:[4,10,11,12,17],shell:[6,11,16,25],shell_command:[6,11],should:[3,6,15,19,23,25],show:[7,10,15,19],shown:15,sign:16,silent:15,similar:16,similari:10,simpl:[9,20],simul:15,singl:[4,5,16,25],skip:[4,15],small:[10,19],snippet:19,solv:[4,15],solver:4,some:[6,10,16,17,19],sourc:[6,11,16,17],space:15,special:23,specif:[3,12,19],specifi:[4,5,6,11,15,16,17,24],spell:19,spellfil:19,spl:19,split:[5,16],splittedfil:[6,11],splittet:16,ssh:16,sshonconnect:19,stacktrac:15,stage:6,stai:[4,17],standart:[4,12],start:[3,4,5,10,12,14,16,21,23,24],startegi:15,startup:5,state:[11,23],still:[10,12,24],store:[4,5,6,10,11,17,20,23],storedictkeypair:5,str:[3,4,5,6,7,9,10,11,12],strategi:15,string:[4,12,16],strip:16,strongli:16,struct:4,struggl:24,sub:4,subclass:[6,7],subdir:6,subdirectori:[6,10,16,17,20],subprof:[11,19,22,24],subprofil:[4,10,11,15,16,19,23],subset:10,substitut:12,success:12,sudo:[10,12,20],sudo_gid:12,sudo_uid:12,suffix:[3,16],suit:[2,14],suitabl:16,superclass:11,superforc:[10,15],support:16,suppos:[16,17],sure:[6,20,23,24],surround:24,svn:20,symbol:4,symlink:[4,10,16,17,23],symlink_nam:4,synchronis:19,syntax:[7,15,24],sys:5,system:[7,9,19,20,22],systemd:19,systemrc:19,tag:[11,12,19,24],take:[12,16,20,24],target:[3,6,7,10,11,12,16,23],target_dir:11,target_fil:[3,12],target_pattern:11,targetfil:20,tell:[6,9,24],temporarili:[12,15],termit:[23,24],test1:20,test:[2,5,14,15,16,17,20],text:[3,12,16,17],than:[10,11],thei:[10,12,15,16,17,19],them:[4,6,10,11,12,16,20],thi:[2,3,4,5,6,7,9,10,11,12,15,16,17,19,20,22,23,24,25],thing:[5,10,20,24],think:16,thinkpad:19,those:[4,15,16,17,19,22,23,24],though:[10,16],through:[12,15],ticket:23,time:[4,7,12,15,16,17],timestamp:15,tip:[14,21],tmux:[16,23,24],togeth:[6,7,10],top:25,topic:21,touch:10,track:17,transform:6,travi:3,treat:4,tree:[10,12,25],tri:19,trigger:[7,10],tupl:[10,12],turn:10,twenti:16,twice:10,two:[16,23],txt:[16,17,19],type:[4,5,6,7,10,11,16,17,25],ubuntu:22,udev:19,uid:[10,12,23],ultisnip:19,underscor:[3,23],understand:[15,24],undo:[10,17],unexpect:23,unform:7,unformat:15,uninstal:[4,15,23],uniqu:[16,20],unison:19,unison_data:19,unix:[11,16],unkown:7,unkownerror:[5,7,10],unlik:16,unlink:4,until:[10,12,25],unus:10,updat:[4,6,10,11,15,16,17,25],update_link:4,update_par:4,update_profil:4,upward:10,usabl:19,usag:[14,17],use:[4,11,15,16,17,19,20,21,22,23,24,25],used:[3,4,5,6,7,9,10,11,12,15,16,17,19,23],useful:[10,15,16],user:[4,6,7,9,10,11,12,16,19,22,23],user_interact:10,userabort:[7,10],usererror:[5,7],userid:23,usernam:[9,12,22],uses:[11,12,16],using:[6,10,11,16,17,18,19],usual:16,util:[2,8],val:15,valid:10,valu:[3,5,10,11,12,20],valueerror:12,variabl:[12,16],variat:[16,19],varnam:12,verbos:[3,15],veri:[16,23,24],verifi:[20,23],version:[3,5,6,9,10,12,14,15,16,17],via:[5,11],view:6,vim:[16,19,22,24,25],vimrc:[16,19],violat:[7,10],wai:[10,15,16,17],walk:12,walk_dotfil:12,wallpap:19,want:[2,4,11,15,16,19,20,24],warn:[12,15,17],wasn:10,webserv:19,well:[2,10,11,16,19,20],were:[4,11,12,17,23],what:[9,10,15,16,17,19,20,23],whatev:5,when:[5,7,15,16,17,23],whenev:17,where:[5,6,7,12],wherea:16,which:[12,15,16,17],whitout:11,who:24,whole:10,whose:[10,12],wifi:[16,19],within:11,without:[10,11,15],won:[10,15,16,17,23],wont:4,work:[2,5,16,19,23,25],workflow:15,would:[10,15,16,17,19,25],wrapper:11,write:[2,5,6,10,17,20,24],written:[7,10,17,23,24],year:19,yet:6,you:[2,5,9,11,15,16,17,19,20,22,23,24,25],your:[15,16,17,23,25],yourself:[17,20],yyyi:12,zprofil:[16,19],zsh:[19,24,25],zsh_:19,zsh_profil:[16,19],zshrc:19},titles:["Contributing Guide","How to document Dotmanager","For developers","Constants","Differencesolver","DotManager","Dynamicfile","Errors","Reference manual","Info","Interpreters","Profile","Utils","Testing suite of Dotmanager","Welcome to Dotmanager\u2019s documentation!","Commandline Interface","Commands","Dynamicfiles","Encryption","Examples","Getting started","Dotmanager Usage","Info module","Installed files","Python explained","Tips"],titleterms:{"default":16,For:2,Going:20,alias:25,command:16,commandlin:15,configur:20,constant:3,contribut:0,control:20,corrupt:23,creat:[17,25],decrypt:[16,18,25],develop:2,differencesolv:4,document:[1,14],dotfil:20,dotfilenam:16,dotmanag:[1,5,13,14,21,25],dynamicfil:[6,17],encrypt:18,error:7,exampl:[17,19,24],explain:[17,24],extlink:16,file:23,first:20,further:20,get:20,guid:0,has_tag:16,how:1,indic:14,info:[9,22],instal:[20,23],instanc:17,interfac:15,interpret:10,kei:23,link:[16,23],manual:[8,17,18,20],merg:16,modul:22,name:16,opt:16,option:[16,20],optionnam:16,organ:25,password:25,path:16,pattern:16,pipe:16,profil:[11,16,18,20,23,25],put:20,python:24,refer:8,rmtag:16,set:[20,25],shell_command:16,start:20,step:20,structur:23,subprof:16,suit:13,tabl:14,tag:16,test:13,tip:25,updat:23,usag:21,used:18,util:12,version:[20,23],welcom:14,workflow:17,your:20}})