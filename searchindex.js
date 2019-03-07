Search.setIndex({docnames:["index","reference/constants","reference/differencesolver","reference/dotmgr","reference/dynamicfile","reference/errors","reference/index","reference/info","reference/interpreters","reference/profile","reference/utils","usage/commandline-interface","usage/commands","usage/dynamicfiles","usage/encryption","usage/example-configuration","usage/index","usage/info-module","usage/installed-file","usage/python-syntax","usage/tips"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["index.rst","reference/constants.rst","reference/differencesolver.rst","reference/dotmgr.rst","reference/dynamicfile.rst","reference/errors.rst","reference/index.rst","reference/info.rst","reference/interpreters.rst","reference/profile.rst","reference/utils.rst","usage/commandline-interface.rst","usage/commands.rst","usage/dynamicfiles.rst","usage/encryption.rst","usage/example-configuration.rst","usage/index.rst","usage/info-module.rst","usage/installed-file.rst","usage/python-syntax.rst","usage/tips.rst"],objects:{"":{constants:[1,0,0,"-"],differencesolver:[2,0,0,"-"],dotmgr:[3,0,0,"-"],dynamicfile:[4,0,0,"-"],errors:[5,0,0,"-"],info:[7,0,0,"-"],interpreters:[8,0,0,"-"],profile:[9,0,0,"-"],utils:[10,0,0,"-"]},"differencesolver.DiffLog":{_DiffLog__append_data:[2,4,1,""],__init__:[2,4,1,""],add_info:[2,4,1,""],add_link:[2,4,1,""],add_profile:[2,4,1,""],data:[2,5,1,""],remove_link:[2,4,1,""],remove_profile:[2,4,1,""],run_interpreter:[2,4,1,""],update_link:[2,4,1,""],update_parent:[2,4,1,""],update_profile:[2,4,1,""]},"differencesolver.DiffSolver":{_DiffSolver__generate_links:[2,4,1,""],_DiffSolver__generate_profile_link:[2,4,1,""],_DiffSolver__generate_profile_unlink:[2,4,1,""],_DiffSolver__generate_unlinks:[2,4,1,""],__init__:[2,4,1,""],solve:[2,4,1,""]},"dotmgr.DotManager":{__init__:[3,4,1,""],args:[3,5,1,""],dryrun:[3,4,1,""],execute_arguments:[3,4,1,""],installed:[3,5,1,""],load_installed:[3,4,1,""],owd:[3,5,1,""],parse_arguments:[3,4,1,""],print_debuginfo:[3,4,1,""],print_installed:[3,4,1,""],print_installed_profiles:[3,4,1,""],run:[3,4,1,""]},"dotmgr.StoreDictKeyPair":{__call__:[3,4,1,""]},"dynamicfile.DynamicFile":{SUBDIR:[4,5,1,""],__init__:[4,4,1,""],_generate_file:[4,4,1,""],add_source:[4,4,1,""],getdir:[4,4,1,""],getpath:[4,4,1,""],update:[4,4,1,""]},"dynamicfile.EncryptedFile":{_generate_file:[4,4,1,""]},"dynamicfile.FilteredFile":{__init__:[4,4,1,""],_generate_file:[4,4,1,""]},"dynamicfile.SplittedFile":{_generate_file:[4,4,1,""]},"errors.CustomError":{__init__:[5,4,1,""],getmessage:[5,4,1,""],message:[5,5,1,""]},"errors.FatalError":{__init__:[5,4,1,""]},"errors.GenerationError":{__init__:[5,4,1,""]},"errors.IntegrityError":{__init__:[5,4,1,""]},"errors.PreconditionError":{__init__:[5,4,1,""]},"errors.UnkownError":{__init__:[5,4,1,""]},"errors.UserAbortion":{__init__:[5,4,1,""]},"errors.UserError":{__init__:[5,4,1,""]},"interpreters.CheckDynamicFilesInterpreter":{__init__:[8,4,1,""],inspect_file:[8,4,1,""],user_interaction:[8,4,1,""]},"interpreters.CheckLinkBlacklistInterpreter":{__init__:[8,4,1,""],check_blacklist:[8,4,1,""]},"interpreters.CheckLinkDirsInterpreter":{__init__:[8,4,1,""],check_dirname:[8,4,1,""]},"interpreters.CheckLinkExistsInterpreter":{__init__:[8,4,1,""]},"interpreters.CheckLinksInterpreter":{__init__:[8,4,1,""]},"interpreters.CheckProfilesInterpreter":{__init__:[8,4,1,""],get_known:[8,4,1,""]},"interpreters.DUIStrategyInterpreter":{__init__:[8,4,1,""]},"interpreters.ExecuteInterpreter":{_ExecuteInterpreter__create_symlink:[8,4,1,""],__init__:[8,4,1,""],_makedirs:[8,7,1,""]},"interpreters.Interpreter":{__init__:[8,4,1,""],call_operation:[8,4,1,""],set_difflog_data:[8,4,1,""]},"interpreters.PlainPrintInterpreter":{__init__:[8,4,1,""]},"interpreters.RootNeededInterpreter":{__init__:[8,4,1,""],_access:[8,4,1,""]},"profile.Profile":{"default":[9,4,1,""],_Profile__create_link_descriptor:[9,4,1,""],_Profile__make_read_opt:[9,4,1,""],_Profile__raise_generation_error:[9,4,1,""],_Profile__reset_builtins:[9,4,1,""],_Profile__set_builtins:[9,4,1,""],__init__:[9,4,1,""],cd:[9,4,1,""],decrypt:[9,4,1,""],extlink:[9,4,1,""],find:[9,4,1,""],generate:[9,4,1,""],get:[9,4,1,""],has_tag:[9,4,1,""],link:[9,4,1,""],links:[9,4,1,""],merge:[9,4,1,""],opt:[9,4,1,""],pipe:[9,4,1,""],rmtags:[9,4,1,""],subprof:[9,4,1,""],tags:[9,4,1,""]},constants:{BACKUP_EXTENSION:[1,1,1,""],CFG_FILES:[1,1,1,""],COLOR:[1,1,1,""],CONFIG_SEARCH_PATHS:[1,1,1,""],DATA_DIR:[1,1,1,""],DECRYPT_PWD:[1,1,1,""],DEFAULTS:[1,1,1,""],DIR_DEFAULT:[1,1,1,""],DUISTRATEGY:[1,1,1,""],FALLBACK:[1,1,1,""],FORCE:[1,1,1,""],INSTALLED_FILE:[1,1,1,""],INSTALLED_FILE_BACKUP:[1,1,1,""],MAKEDIRS:[1,1,1,""],PROFILE_FILES:[1,1,1,""],TARGET_FILES:[1,1,1,""],VERBOSE:[1,1,1,""],VERSION:[1,1,1,""],loadconfig:[1,2,1,""]},differencesolver:{DiffLog:[2,3,1,""],DiffSolver:[2,3,1,""]},dotmgr:{DotManager:[3,3,1,""],StoreDictKeyPair:[3,3,1,""]},dynamicfile:{DynamicFile:[4,3,1,""],EncryptedFile:[4,3,1,""],FilteredFile:[4,3,1,""],SplittedFile:[4,3,1,""]},errors:{CustomError:[5,6,1,""],FatalError:[5,6,1,""],GenerationError:[5,6,1,""],IntegrityError:[5,6,1,""],PreconditionError:[5,6,1,""],UnkownError:[5,6,1,""],UserAbortion:[5,6,1,""],UserError:[5,6,1,""]},info:{distribution:[7,2,1,""],hostname:[7,2,1,""],is_64bit:[7,2,1,""],kernel:[7,2,1,""],pkg_installed:[7,2,1,""],username:[7,2,1,""]},interpreters:{CheckDynamicFilesInterpreter:[8,3,1,""],CheckLinkBlacklistInterpreter:[8,3,1,""],CheckLinkDirsInterpreter:[8,3,1,""],CheckLinkExistsInterpreter:[8,3,1,""],CheckLinksInterpreter:[8,3,1,""],CheckProfilesInterpreter:[8,3,1,""],DUIStrategyInterpreter:[8,3,1,""],ExecuteInterpreter:[8,3,1,""],GainRootInterpreter:[8,3,1,""],Interpreter:[8,3,1,""],PlainPrintInterpreter:[8,3,1,""],PrintInterpreter:[8,3,1,""],RootNeededInterpreter:[8,3,1,""]},profile:{Profile:[9,3,1,""]},utils:{expanduser:[10,2,1,""],expandvars:[10,2,1,""],find_exact_target:[10,2,1,""],find_files:[10,2,1,""],find_target:[10,2,1,""],get_current_username:[10,2,1,""],get_date_time_now:[10,2,1,""],get_dir_owner:[10,2,1,""],get_gid:[10,2,1,""],get_uid:[10,2,1,""],get_user_env_var:[10,2,1,""],has_root_priveleges:[10,2,1,""],import_profile_class:[10,2,1,""],is_dynamic_file:[10,2,1,""],log_success:[10,2,1,""],log_warning:[10,2,1,""],normpath:[10,2,1,""],walk_dotfiles:[10,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:class","4":"py:method","5":"py:attribute","6":"py:exception","7":"py:staticmethod"},terms:{"0_3":18,"2_3":[0,1],"64bit":7,"abstract":4,"case":[11,12,13,18],"class":[2,3,4,5,8,9,10,11,12,13,15,17,19,20],"const":3,"default":[1,3,9,11,18],"function":[2,3,4,6,7,8,9,10,12,17],"import":[3,10,12,13,17,18,19],"int":10,"long":12,"new":[2,4,11,12],"return":[4,7,8,9,10,12,13,17],"short":[3,11],"static":8,"super":[12,15,18,20],"switch":[9,12],"true":[1,9,10,12,15,17],"var":10,But:[11,12,18],For:[18,20],One:[3,10],Such:12,That:[12,13],The:[1,2,3,4,5,6,10,11,12,13,15,16,17,18,19],Then:[15,17],There:[11,12,13],These:15,Use:11,Used:[2,5,9],Using:[10,12],__call__:3,__init__:[2,3,4,5,8,9],_access:8,_difflog__append_data:2,_diffsolver__generate_link:2,_diffsolver__generate_profile_link:2,_diffsolver__generate_profile_unlink:2,_diffsolver__generate_unlink:2,_executeinterpreter__create_symlink:8,_generate_fil:4,_makedir:8,_name:17,_op_:8,_profile__create_link_descriptor:9,_profile__make_read_opt:9,_profile__raise_generation_error:9,_profile__reset_builtin:9,_profile__set_builtin:9,abil:[1,8],abl:13,abort:[5,11,13],about:[10,11,17],abov:[12,15],absolut:[2,9,10,12,13,18],accept:12,access:[8,10,15,20],accesss:8,accord:[8,12],account:10,accur:[2,4,5,8,9],achiev:15,action:[3,8],actual:[4,8,9,12,18,19],add:[2,4,8,9,11,12,13,15],add_info:2,add_link:2,add_profil:2,add_sourc:[4,13],added:2,adding:12,addit:[1,2,18],advanc:13,advantag:12,advis:16,after:[1,12,15,18,19],again:[13,18,19],against:[8,10],alia:20,alias:17,all:[1,2,3,4,5,6,8,9,10,11,12,13,15,16,18,20],all_profilenam:2,allow:[2,4,9],almost:11,alreadi:[8,11],alsa:15,also:[8,9,10,11,12,13,20],alter:[8,13],altern:[11,12],alwai:[11,12,19],ani:[4,5,8,9,10,11,12,15],anoth:[9,11,12],antergo:[15,17,18],anymor:[8,13],api:9,append:[2,12,13],appli:[12,13],apt:17,arch:[12,15,17,19],aren:[3,10],arg:[2,3],argpars:3,argu:15,argument:[3,5,11],ask:12,associ:2,asu:15,attribut:3,automat:13,avail:12,awai:12,back:[9,12,13],backup:[1,3,13,18],backup_extens:1,bak:[1,13],base:[4,5,8,15],bash:[12,15,17,19,20],bash_:15,bash_profil:15,bashrc:[10,12,15,17],basic:12,basicrc:15,bb6a0d9da197de74db91745fb9b433e1:13,becaus:[5,8,10,11,12,13,15,18,20],befor:[4,12,13,18],begin:[12,19],behav:[10,12],behavior:8,belong:[2,19],below:19,best:16,better:11,between:[2,8],big:12,bin:19,bit:[17,20],blacklist:[8,11],bool:10,bottom:13,bracket:19,bug:18,build:1,built:0,builtin:9,bundl:3,bytearrai:4,calcul:13,call:[5,8,9,12,15,17,19,20],call_oper:8,camera:12,can:[2,3,8,9,10,11,12,13,14,17,18,19,20],carefulli:11,caus:11,certain:[2,11,18,19],cfg_file:1,chang:[2,3,4,8,11,12,13,18,20],charact:12,check:[3,8,10,11,13],check_blacklist:8,check_dirnam:8,checkdynamicfilesinterpret:8,checklinkblacklistinterpret:8,checklinkdirsinterpret:8,checklinkexistsinterpret:8,checklinksinterpret:8,checkprofilesinterpret:8,choic:3,choos:11,circumv:[13,18],class_nam:10,clear:11,cli:3,colon:19,color:[1,5,10],combin:[3,12],command:[0,4,13,14,16,19],commandlin:[0,3,16],compabl:1,compar:[2,18],comparison:1,compat:3,complet:[11,19],complex:15,comprehens:12,compton:15,concept:12,concret:15,conf:[12,15,18,19],config:[1,3,11,12,15,18,19,20],config_fil:1,config_search_path:1,configfil:12,configur:[1,9,12,15,19],conflict:[8,11],connect:[12,15],consid:[11,12],constant:[0,4,6,10],constructor:[2,3],contain:[1,4,5,8,10,12,15,18,19],content:[0,3,4,12],contradict:8,control:12,convert:[3,10],correct:[10,12,19],correspond:13,could:[8,12,13,15,20],coupl:11,cours:20,cover:16,creat:[2,8,9,10,11,12,15,18,19],critic:[3,18],currend:2,current:[7,9,10,12,13,15,18],custom:[3,5,8],customerror:[3,5],customrc:15,danger:11,data:[1,2,8,12,13,15,18],data_dir:1,date:[2,18],datetim:10,debian:[12,15],debug:[3,11],decid:13,decrypt:[1,4,9,13],decrypt_pwd:1,decryptpwd:12,def:[12,13,15,17,19],defin:[5,12,15,19],delet:8,depend:9,describ:[2,12],descript:[11,17],desir:13,desktop:20,dest:3,detail:11,determin:[1,2],devic:[7,11,12,15,18,20],device1:12,device2:12,dict:[2,3],dictionari:[2,3,18],diff:13,differ:[2,4,5,8,11,12,13,15,19],differencesolv:[0,6],difflog:[2,3,8,11],difflogdata:8,diffoper:8,diffsolv:2,dir:9,dir_default:1,dircetori:12,directli:[3,12,13,19],directori:[1,3,4,8,9,10,11,12,15,19,20],dirnam:8,disabl:15,disadvantag:13,discard:13,dispatch:15,displai:13,distribut:[7,12,15,17],divid:20,dls:20,doc:15,document:[6,11,12,15,16,18,19],doe:[8,10,12,18],doesn:[5,10,12,15,18],doing:[5,11],don:[9,11,12],dop:8,dot:20,dotfil:[4,9,12,13,14,18,20],dotfile_repo:13,dotignor:10,dotmanag:[1,5,6,7,10,11,12,13,14,15,17,18,19],dotmang:[10,18],dotmgr:[3,11,20],downsid:[11,12],drm:20,dry:[11,13],dryrun:[3,8],due:5,dui:[1,11],duistrategi:1,duistrategyinterpret:8,dunst:15,dunstrc:15,dup:20,duplic:8,dure:[5,18],dynam:[4,8,10],dynamicfil:[0,6,10,12,16],each:[8,12,13,18],earli:18,easi:19,easiest:12,edit:[12,13],either:[13,14],els:17,empti:2,encapsul:15,encrypt:[0,4,9,12,13,15,16,20],encryptedfil:[4,9,13],end:15,entir:3,entri:[2,9],environ:[10,12],error:[0,3,6,10,11,12,18],etc:[1,8,11,12,15,18,19],evalu:2,evalut:2,even:[12,13],ever:19,everi:[5,9,10,11,12,13,18,19,20],everyth:[11,19],everytim:[9,20],everywher:20,exact:10,exactli:11,exampl:[0,2,5,10,12,16,18,20],except:[3,5,12,15],execut:[3,7,8,9,10,11,12,20],execute_argu:3,executeinterpret:[2,8],exist:[5,8,10,11,18],exit:11,exitcod:5,expand:10,expandus:10,expandvar:10,expect:5,explain:[0,11,12,16,18],explan:19,express:12,extens:[1,16],extlink:9,extra:15,fail:[5,10],fallback:[1,10],fals:[1,3,9],fatalerror:5,favourit:20,featur:[12,15],feed:2,feh:19,few:[12,19],field:6,figur:10,file:[0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,19,20],filenam:[8,10,11,12,13],filesystem:[2,8,11,18],fill:2,filteredfil:[4,9],fin:2,find:[8,9,10,12,13],find_exact_target:10,find_fil:10,find_target:10,fine:15,first:[1,10,11,12,13,15,18,19],fit:15,fix:[8,10,13,18],flag:[10,11,14,18],fly:[4,12],follow:[12,13,15,17,18,19],forc:[1,8,11],forget:11,format:[3,8,10],found:[10,12],from:[1,2,3,4,8,9,10,11,12,13,15,17,19,20],frustrat:12,fuck:11,full:8,fullfeatur:15,fullfil:5,funciton:2,furthermor:[2,3,12],gain:8,gainrootinterpret:8,gener:[2,4,5,9,11,12,13,15,17,18,19],generationerror:[5,9,10],get:[4,9,10,11,12,17],get_current_usernam:10,get_date_time_now:10,get_dir_own:10,get_gid:10,get_known:8,get_uid:10,get_user_env_var:10,getdir:4,getmessag:5,getpath:4,gid:[8,10,18],git:[13,15,18,19,20],gitconfig:[12,15,18],gitconfig_system:[15,18],gitgutt:15,give:[8,12,13],given:[2,5,7,8,9,10],gnupg:12,goe:[8,10],going:8,good:12,gpg:[12,14,15],grep:12,group:12,groupid:18,gvimrc:12,half:15,handi:12,handl:3,handler:5,happen:[11,18],hardwar:15,has:[5,8,10,11,12,15],has_root_priveleg:10,has_tag:9,hash:13,have:[8,10,11,12,13,15,18,19,20],hdmi_plugin:15,heard:19,help:[2,3,4,5,8,9,11,13],helper:[2,13],here:15,his:10,hold:4,home:[1,12,15,18],host:[7,11,12,15],hostnam:[7,17],how:[12,16,18,19],howev:15,i3config:15,id_rsa:12,idea:12,identifi:11,ignor:13,illumin:15,immedi:13,implement:[2,3,4,8,9,17],import_profile_class:10,includ:3,increas:15,increment:18,indent:19,index:0,indic:2,individu:15,info:[0,2,6,15,16],inform:[2,3,7,11,17,18],inherit:[10,11,15,20],ini:[12,20],initi:[2,3,4,5,8,9],inputrc:[12,15],insert:8,inspect_fil:8,instal:[0,1,2,3,5,7,8,11,12,13,15,16,17,20],installed_fil:1,installed_file_backup:1,installed_filenam:1,installed_symlink:2,installedlog:8,instanc:9,instead:[3,4,9,10,11,12,13,17],insuffici:3,integrityerror:5,intend:19,interact:8,interfac:[0,16],intern:3,interpret:[0,2,3,6],invalid:3,invari:5,is_64bit:[7,17],is_dynamic_fil:10,is_instal:8,isn:11,issu:[11,18],iter:2,its:[2,4,9,10,11,12,13,18],itself:[11,12],join:4,json:[1,18],just:[3,12,19],keep:8,kei:[11,12],kernel:[7,17],key1:12,key2:12,key3:12,key4:12,keybind:12,keyfil:12,keyword:19,kind:3,know:[19,20],known:8,kwarg:9,languag:19,laptop:[15,20],last:[11,15,18,19],later:13,latter:1,launch:12,left:18,let:[9,11,12,13],level:[19,20],like:[2,3,8,9,10,12,13,15,17,19,20],line:[12,19],link:[2,4,5,8,9,10,11,13,14,15,17,19],linux:[12,15,17],list:[1,2,3,9,10,11,12,18,20],liter:20,load:[1,3,15],load_instal:3,loadconfig:1,local:15,locat:[1,11,13],lock:15,log:[8,10,11,17],log_config:15,log_success:10,log_warn:10,logfil:[10,11],logic:5,login:10,look:[10,18,19,20],lookup:[9,10],lose:13,lost:13,lot:18,low:15,made:[4,13],main:[3,12,13,15,17,18,19,20],make:[4,11,12,13,18,19],makedir:[1,8,11],manipul:4,manual:[0,16,18],map:9,mark:19,master:[15,19],match:[8,9,10,12,18],mayb:12,md5:13,mean:[10,12],mechan:4,merg:[9,13],messag:[2,5,8,10,11],metavar:3,method:4,might:3,mine:15,mini:15,minim:15,minut:12,misc:19,mkinitcpio:[12,15],mode:11,modif:18,modifi:[8,18],modprob:15,modul:[0,2,3,4,5,6,7,8,9,10,16,20],moment:[2,10,17,18],monitor:15,more:[3,11,12,13,14,15,20],most:[11,12,15],mostli:11,move:11,msg:9,much:12,multipl:[2,4,5,8,10,11,12,13,19],name:[1,2,4,7,8,9,10,11,13,15,17,18,19],namespac:3,narg:3,nasti:5,need:[2,4,8,9,10,11,12,13,15,17,18,19],network:15,networkmanag:15,never:[18,19,20],new_symlink:2,newest:4,next:[9,13],non:10,none:[1,2,3,8,9,10],normal:[4,10,11],normpath:10,note:19,now:[2,11,12,13,15,19],number:[1,12,18],object:18,obvious:13,occur:[3,5,10,11,18],off:3,offic:15,old:[2,3,9,13,18],ommit:9,onc:12,one:[4,11,12,13,19],ones:2,onli:[1,2,3,9,10,11,12,13,15,18,19],openpgp:14,oper:[2,8,12],opportun:18,oppoutun:8,opt:[9,15],option:[1,3,9,11,13,15,19],option_str:3,order:[8,12],ore:3,origin:[10,13],originalerror:5,other:[8,11,12,15,18],otherwis:[10,11,12,18,20],out:[2,3,10,11],output:[1,10,11,14],outsid:[9,13],over:[2,15],overwrit:[1,8,11,13],owd:3,own:[13,15,18],owncloud:12,owner:[1,8,10,11,12,18],packag:[7,17],pacman:[12,15,17,18,19],page:0,paramet:[1,2,3,10,12,19],parent:[2,8,9,11,12,18],parent_arg:8,parent_nam:2,parentnam:2,pars:3,parse_argu:3,parser:3,part:1,pass:12,passwd:11,password:[1,12],patch:13,path:[1,2,3,4,8,9,10,13,14,18],pattern:[8,9],peopl:19,percent:12,perform:[3,8,11],perman:12,permis:10,permiss:[1,3,8,10,12,15,18],person:20,peter:12,pictur:12,pipe:9,pkg:[15,17],pkg_instal:[7,17],pkg_name:[7,17],pkk:12,plain:[1,11],plainprintinterpret:8,platform:15,pleas:18,plu:[1,12],plugin:[12,15],png:15,point:[5,8],pokemon:5,polybar:[12,15,20],polybarconfig:[12,15],polybarlaunch:[12,15],possibl:[14,18,19],power:15,practic:[12,16],precis:12,precondit:5,preconditionerror:[3,5,10],prefer:[11,20],prefix:[1,8,12,15],prepend:12,preserv:4,pretti:[8,11],prettyprint:2,prf:15,print:[2,3,8,10,11],print_debuginfo:3,print_instal:3,print_installed_profil:3,printinterpret:8,privat:15,priveleg:10,proce:13,process:[3,8,10,11,13,18],profil:[0,1,2,3,5,6,8,10,11,13,15,17,19],profile_dict:2,profile_fil:[1,10],profile_nam:2,profilelist:2,profilenam:[2,5,9,12],profileresult:2,progam:5,program:[10,12,15,19,20],programm:10,properti:12,protect:8,provid:[1,2,4,7,9,10,12,16,17],purpos:[3,11,12],put:[19,20],python:[0,3,10,11,12,16],quiet:11,quotat:19,radical:15,radicale_log:15,rais:[3,9,10,11,12],rasi:[12,15],raspberri:15,read:[3,18],readabl:3,readm:19,realli:[18,20],receiv:12,recommend:12,recurs:11,refer:[0,3],refus:18,regener:12,regex:12,regular:12,rel:[10,12],releas:[7,17],remov:[2,8,9,11,12,13,18,20],remove_link:2,remove_profil:2,reorder:8,replac:[1,2,3,12,15],replace_pattern:[1,9,12,15],repo:[18,20],repositori:[9,10,12,13],repres:15,requir:3,reserv:18,reset:9,resolv:[2,3],respons:9,restart:8,restor:9,result:[2,10,12,13],retriev:[7,10],reus:12,revert:18,rickestricksanchez:1,right:12,rmtag:9,rofi:[12,15,20],root:[2,8,10,15],rootneededinterpret:8,rule:[15,19],run:[2,3,4,7,9,11,12,13,17],run_interpret:2,safe:5,safer:12,same:[2,5,10,11,12,19],save:[11,18],schema:[1,10,18],script:[3,12],search:[0,1,3,10,12,13],second:1,section:[3,11,12,14],see:[2,4,5,8,9,13,14,18],self:[2,3,4,5,8,9,12,13,15,17,19],semant:15,semat:5,sens:12,sensit:11,sensitiverc:15,separ:[12,19,20],seper:[1,11],server:15,servic:15,set:[1,2,3,8,9,10,12,17,18],set_difflog_data:8,setup:[12,15,20],sever:12,shall:[10,13],shell:[4,12,20],shell_command:[4,9],should:[1,9,11,15,18,20],show:[11,15],shown:11,sign:12,signatur:[2,4,5,8,9],silent:11,similar:12,simpl:7,simul:11,singl:[2,3,12,20],skip:11,small:15,snippet:15,solv:[2,11],solver:2,some:[5,12,13,15],sourc:[4,12,13],space:11,special:18,specif:[1,9,10,15],specifi:[3,9,11,12,13,19],spell:15,spellfil:15,spl:15,split:[3,12],splittedfil:[4,9],splittet:12,ssh:12,sshonconnect:15,stacktrac:11,stai:13,standart:[2,10],start:[1,2,3,10,12,18,19],startegi:11,startup:3,state:18,still:[10,19],store:[2,3,13,18],storedictkeypair:3,str:[1,2,3,10],strategi:11,string:[2,10,12],strip:12,strongli:12,struct:2,struggl:19,stuff:5,subclass:4,subdir:4,subdirectori:[12,13],subprof:[9,15,17,19],subprofil:[2,9,11,12,15,18],subset:8,substitut:10,success:10,sudo:[8,10],sudo_gid:10,sudo_uid:10,suffix:[1,12],suitabl:12,superclass:9,superforc:[8,11],support:12,suppos:[12,13],sure:[4,18,19],surround:19,symbol:2,symlink:[2,8,12,13,18],symlink_nam:[2,8],synchronis:15,syntax:[5,11,19],sys:3,system:[5,7,15,17],systemd:15,systemrc:15,tag:[9,10,15,19],take:[2,10,12,19],target:[1,4,5,8,9,10,12,18],target_fil:[1,10],target_pattern:9,tell:19,temporarili:[9,10,11],termit:[18,19],test:[3,11,12,13],text:[1,10,12,13],thei:[8,10,11,12,13,15],them:[2,4,8,10,12],thi:[1,2,3,4,5,7,8,9,10,11,12,13,15,17,18,19,20],thing:[3,19],think:12,thinkpad:15,those:[2,11,12,13,15,17,18,19],though:12,through:[10,11],ticket:18,time:[2,5,10,11,12,13],timestamp:11,tip:[0,16],tmux:[12,18,19],togeth:[4,8],top:20,topic:16,track:13,transform:4,travi:1,treat:2,tree:[8,10,20],tri:15,tupl:10,twenti:12,two:[2,12,18],txt:[12,13,15],type:[2,3,4,5,8,9,12,13,20],ubuntu:17,udev:15,uid:[8,10,18],ultisnip:15,underscor:[1,18],understand:[11,19],undo:13,unexpect:18,unformat:11,uninstal:[2,11,18],uniqu:12,unison:15,unison_data:15,unix:[9,12],unkown:5,unkownerror:[3,5],unlik:12,unlink:2,until:[8,10,20],updat:[2,4,8,9,11,12,13,20],update_link:2,update_par:2,update_profil:2,upward:8,usabl:15,usag:[0,13],use:[9,11,12,13,15,16,17,18,19,20],used:[1,2,3,4,5,10,11,12,13,15,18],useful:[8,11,12],user:[2,4,5,7,8,10,12,15,17,18],user_interact:8,userabort:5,usererror:[3,5],userid:18,usernam:[7,10,17],uses:[10,12],using:[12,13,14,15],usual:12,util:[0,6],val:11,valu:[1,3,10],valueerror:10,variabl:[9,10,12],variat:[12,15],varnam:10,verbos:[1,11],veri:[12,18,19],verifi:18,version:[0,1,3,4,10,11,12,13],via:3,vim:[12,15,17,19,20],vimrc:[12,15],violat:5,wai:[11,12,13],walk:10,walk_dotfil:10,wallpap:15,want:[2,11,12,15,19],warn:[10,11,13],webserv:15,well:[12,15],were:[2,10,13,18],what:[8,11,12,13,15,18],whatev:3,when:[3,11,12,13,18],whenev:13,where:[3,5,9,10],wherea:12,which:[10,11,12,13],who:19,whose:10,wifi:[12,15],wise:8,within:9,without:[8,11],won:[8,11,12,13,18],work:[3,12,15,18,20],workflow:11,would:[11,12,13,15,20],write:[3,4,8,13,19],written:[5,13,18,19],wrong:5,year:15,yet:4,you:[3,9,11,12,13,15,17,18,19,20],your:[11,12,13,18,20],yourself:13,yyyi:10,zprofil:[12,15],zsh:[15,19,20],zsh_:15,zsh_profil:[12,15],zshrc:15},titles:["Welcome to Dotmanager\u2019s documentation!","Constants","Differencesolver","DotManager","Dynamicfile","Errors","Reference manual","Info","Interpreters","Profile","Utils","Commandline Interface","Commands","Dynamicfiles","Encryption","Examples","Dotmanager Usage","Info module","Installed files","Python explained","Tips"],titleterms:{"default":12,alias:20,command:12,commandlin:11,constant:1,corrupt:18,creat:[13,20],decrypt:[12,14,20],differencesolv:2,document:0,dotfilenam:12,dotmanag:[0,3,16,20],dynamicfil:[4,13],encrypt:14,error:5,exampl:[13,15,19],explain:[13,19],extlink:12,file:18,has_tag:12,indic:0,info:[7,17],instal:18,instanc:13,interfac:11,interpret:8,kei:18,link:[12,18],manual:[6,13,14],merg:12,modul:17,name:12,opt:12,option:12,optionnam:12,organ:20,password:20,path:12,pattern:12,pipe:12,profil:[9,12,14,18,20],python:19,refer:6,rmtag:12,set:20,shell_command:12,structur:18,subprof:12,tabl:0,tag:12,tip:20,updat:18,usag:16,used:14,util:10,version:18,welcom:0,workflow:13}})