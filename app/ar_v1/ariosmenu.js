/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/ariosmenu.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180312 1326 iys 200991 Mobile:Adaptive Dashboard:Doc with textbox and image click i
* 170717 1531 iys 185617 Mobile:AHTML report using FREEZE displays tiny panel in upp
* 170620 1550 iys 185617 Mobile:AHTML report using FREEZE displays tiny panel in upp
* 161208 1345 iys 186079 Chart Type not displayed correctly in MobleFaves on iPad
* 160913 1614 iys 184130 AHTML/MOB:Pivot drop down menu missing Orig/FS View option
* 160720 1220 iys 181803 AHTML:MOB:After applying chart full screen view option is m
* 160610 1256 hms 180534 Remove tab characters from source files
* 160302 1217 iys 175750 AHTML:MOB:Active reports list of dropdown fields are not co
* 160223 1120 iys 177451 AHTML:MOB:Date column filter not working
* 150831 1141 iys 170654 MOB:Cache Pivot table shows refresh icon when invoked from
* 150615 1422 iys 166187 AHTM drill menu items do not work on ipad or safari
* 141027 1214 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141021 1509 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 140805 1623 iys 146953 MOB:AHTML:ANDROID:All the dropdown menu options r nt visible
* 140723 1512 iys 146953 MOB:AHTML:ANDROID:All the dropdown menu options r nt visible
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["ariosmenu"]="$Revision: 20180312.1326 $";
//$Revision: 1.13 $
//$Log: ariosmenu.js,v $
//Revision 1.13  2013/11/13 03:31:02  William_Forde
//[p134795] fix issue on mobile menu and 508.
//
//Revision 1.12  2013/07/08 14:03:35  Israel_Schulman
//[p150956] Pass correct typed data to inarray function which now uses strict comparison
//
//Revision 1.11  2013/06/17 20:19:10  Israel_Schulman
//[p149898] Check if report has expired when menu is opened. Clear report from page if expired.
//
//Revision 1.10  2013/03/01 20:34:53  Brian_DCruz
//[p146862] return height and width of text
//
//Revision 1.9  2013/02/12 15:33:32  Israel_Schulman
//[p144219] Respect stylesheet hover-backcolor style by setting -webkit-tap-highlight-color style on iOS, which by default highlights touched elements which have click event listeners.
//
//Revision 1.8  2012/11/27 17:26:35  William_Forde
//[p143182] Fix scrolling for chart picker when selected from the advance chart icon.
//
//Revision 1.7  2012/11/19 18:13:02  William_Forde
//[p139495] We do have to set the display=none/block for the fullscreen div, since the original view may not take up the entire display.
//
//Revision 1.6  2012/11/19 18:04:35  William_Forde
//[p139495]  Use zindex to swap fullscreen and original mode because using display=none was causing charts to not get proper dimensions.
//
//Revision 1.5  2012/10/25 20:24:19  William_Forde
//[p143182]  fix parseInt.  Dont allow menus to scroll off screen when we are at the botton.
//
(function() {

    if (typeof window.ibi_iPadMenu !== 'undefined') {
        return;
    }

    window.ibi_iPadMenu = {
        showMenu:ibi_do_ios_menu,
        initListen:ibi_ios_listen,
        toggleCheck:ibi_ios_toggleCheck,
        isTouchApp:setAsApp,
        ShowPageMenu:iosShowPageMenu,
        ShowPivotMenu:iosShowPivotMenu,
        ShowFilterMenu:iosShowFilterMenu,
        ShowCalcMenu:iosShowCalcMenu,
        ShowChartMenu:iosShowChartMenu,
        ShowChartMenuType:iosShowChartMenuType,
        ShowChartPicker:iosShowChartPickerMenu,
        ShowChartPickerTool:iosShowChartPickerMenuTool,
        ShowRollMenu:iosShowRollMenu,
        hideMain:ibi_do_ios_menu_hide,
        hideMain2:ibi_do_ios_menu_hide2,
        hideSub:ibi_do_ios_menu_hide_right,
        hideSubSL:ibi_do_ios_menu_hide_right2,
        hideSubSL2:ibi_do_ios_menu_hide_right3,
        moveEvent:ibi_ios_add_move_event,
        fullScreen:ibi_ios_fullscreen,
        getfullscreen:ibi_ios_getfullscreen,
        doCreateChart:iosDoCreateChart,
        doCreateRoll:iosDoCreateRoll,
        doCreateFilter:iosDoCreateFilter,
        doCreatePivot:iosDoCreatePivot,
        ShowHideColumnsMenu:iosShowHideColumnsMenu,
        showMenu2:ibi_do_ios_menu2,
        resetMenuPosition: ResetMenuPosition,
        selectibiChart: selectibiChart,
        showMenu2Sub:ibi_do_ios_menu2_sub,
        showFilterMenu: ibi_do_ios_menu4,
        updateMenuItem: updateMenuItem,
        simulateClick:SimulateClick
    };
    var table_number;
    var column_number;
    var Mytable;
    var Menu;
    var isApp = false;
    
    function setAsApp()
    {
        isApp = true;
        document.addEventListener('touchmove',ibi_ios_stopmove,false);
    }
    
    function SimulateClick(e){
        var etype = "click";
        var el = e.srcElement;
        var menuSelect = false;
        if(!el) 
            el = e.target;
        var keyCode = (document.layers) ? e.which : e.keyCode;
        var keyString = String.fromCharCode(keyCode).toLowerCase();
        
        if(keyCode == 13) {
            if(el.parentNode) {
                if(el.parentNode.className.substr(0,6) == "iosDIV")
                    menuSelect = true;
            }
            if(menuSelect) {
                if (el.fireEvent) {
                    el.fireEvent('on' + etype);
                } else {
                    var evObj = document.createEvent('Events');
                    evObj.initEvent(etype, true, false);
                    el.dispatchEvent(evObj);
                }
            }
        }
    }

    if(document.addEventListener)
        document.addEventListener("keypress",ibi_iPadMenu.simulateClick);
    else
        document.attachEvent("onkeypress",ibi_iPadMenu.simulateClick);

    function ibi_ios_menuitem(option,func,chk,sub,backcolor,textcolor,id,subStr,trunc)
    {
        var menuStr = '';
        var sstr = '';
        var opt = '';
        //var txtMeasurement = measureText(option,'amMenuItem');
        var txtMeasurement = {'width':200};
        if(!trunc)
            txtMeasurement = measureText(option,'amMenuItem');
        var a = txtMeasurement.width;
        var wkHClr = '';
        
         if(subStr) { 
            opt = subStr;
        }
        if(textcolor) sstr += 'color:'+textcolor+';';
        var sstr2 = sstr;
         if(subStr) 
            sstr2 += 'width:'+a+'px;';
        
        if(Mytable.a_cntl.menuhoverbackcolor)
            wkHClr = 'style="-webkit-tap-highlight-color: ' + Mytable.a_cntl.menuhoverbackcolor + ';"';
        
        var ck='<span id="'+id+'"><\/span>';
        if(chk) ck='<span id="'+id+'">&nbsp;'+check_mark+'<\/span>';

        if(sub) {
            menuStr += '<li class="iosDIVULLI"><div tabindex=1 '+ wkHClr +' onclick="'+func+'"><table border=0 width="100%"><tr><td style="width:4px;"><\/td><td style="white-space:nowrap;width:'+a+'px;" >';
            menuStr += '<span class="amMenuItem" style="'+sstr2+'">'+option+'<\/span><\/td><td width="*" style="text-align:right;">';
            menuStr += '<span class="amMenuItemRight" style="width:100%;'+sstr+'"><span style="text-align:center;">'+opt+'<\/span><\/span><\/td>';
            menuStr += '<td  style="width:8px;"><span class="amMenuItem" style="'+sstr+'">&gt;<\/span><\/td>';
            menuStr += '<\/td><td style="width:4px;"><\/td><\/tr><\/table><\/div><\/li>';
        } else {
            menuStr += '<li class="iosDIVULLI"><div tabindex=1 '+ wkHClr +' onclick="'+func+'"><table border=0 width="100%"><tr>';
            menuStr += '<td style="width:4px;"><\/td>';
            menuStr += '<td width="*"><span class="amMenuItem" style="'+sstr+'">'+option+ck+'<\/span><\/td>';
            menuStr += '<\/tr><\/table><\/div><\/li>';
        }
        return menuStr;
    }

    function ibi_ios_toggleCheck(entry,sub,id)
    {
        var menu = Menu;
        if(sub!=-1) menu = Menu[sub];
        var obj = document.getElementById(id);
        if(obj) {
            if(obj.innerHTML=='') {
                menu[entry][0][1] = true;
                obj.innerHTML = '&nbsp;'+check_mark;
            } else {
                menu[entry][0][1] = false;
                obj.innerHTML = '';
            }
        }
    }

    function ibi_do_ios_menu_hide2()
    {
        var divNode1 = d.getElementById("iosmenu1f");
        var divNode2 = d.getElementById("iosmenu2f");

        if(divNode1) {
            divNode1.style.display = "none";
            divNode2.style.display = "none";
        }
    }

    function ibi_do_ios_menu_hide()
    {
        var divNode = d.getElementById("iosmenu1");
        if(mytable) {
            if((!mytable.fullScreenOn)&&(!mytable.fullScreenOnGraph)&&(!isApp))
                document.removeEventListener('touchmove',ibi_ios_stopmove,false);
        } else if(!isApp) document.removeEventListener('touchmove',ibi_ios_stopmove,false);
        if(divNode) {
            divNode.style.display = "none";
        }
        ibi_do_ios_menu_hide_right();
    }

    function ibi_do_ios_menu_hide_right(divNumber)
    {
        var dn = 1;
        if(typeof divNumber != "undefined")
            dn = divNumber-1;
        var divNode2 = d.getElementById("iosmenu"+(dn+1)+"o");
        var divNode1 = d.getElementById("iosmenu"+dn+"o");
        divNode1.style.display = "block";
        window.setTimeout(function() {
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),menuWidth,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu"+(dn+1)+"o").style.display = "none";
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),0,parseInt(divNode1.style.top,10),0.5,30,function(){
                d.getElementById("iosmenu"+dn+"o").focus();
            });
        },100);
    }

    function ibi_do_ios_menu_hide_right2()
    {
        var divNode2 = d.getElementById("iosmenu3o");
        var divNode1 = d.getElementById("iosmenu2o");
        divNode1.style.display = "block";
        window.setTimeout(function() {
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),menuWidth,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu3o").style.display = "none";
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),0,parseInt(divNode1.style.top,10),0.5,30,function(){
                d.getElementById("iosmenu2o").focus();
            });
        },100);
    }

    function ibi_do_ios_menu_hide_right3()
    {
        var divNode2 = d.getElementById("iosmenu4o");
        var divNode1 = d.getElementById("iosmenu3o");
        divNode1.style.display = "block";
        window.setTimeout(function() {
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),menuWidth,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu4o").style.display = "none";
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),0,parseInt(divNode1.style.top,10),0.5,30,function(){
                d.getElementById("iosmenu3o").focus();
            });
        },100);
    }

    function ibi_ios_menu2(val1,val2,backcolor,textcolor){
        var menuStr = '';
        var txtMeasurement = measureText(val1,'amMenuItem');
        var a = txtMeasurement.width;
        var sstr = 'width:'+a+'px;';
        if(textcolor) sstr += 'color:'+textcolor+';width:'+a+'px;';
        var sstr2 = '';
        if(textcolor) sstr2 += 'color:'+textcolor+';';
        menuStr += '<li class="iosDIVULLI"><table border=0 width="100%"><tr><td width="4"><\/td><td style="white-space:nowrap" width="'+a+'">';
        menuStr += '<span class="amMenuItem" style="'+sstr+'">'+val1+'<\/span><\/td><td align="left" width="*">';
        menuStr += '<span class="amMenuItemRight" style="text-align:right;'+sstr2+'"><div>'+val2;
        menuStr += '<div><\/span><\/td><td width="5"><\/td><\/tr><\/table><\/li>';
        return menuStr;

    }

    function ibi_ios_button(val,func) {
        var sstr = 'style="position:absolute;top:4px;left:4px;';
        if(Mytable.a_cntl.menubackcolor || Mytable.a_cntl.menucolor) {
            if(Mytable.a_cntl.menubackcolor) sstr += 'background-Color:'+Mytable.a_cntl.menubackcolor+';';
            if(Mytable.a_cntl.menucolor) sstr += 'color:'+Mytable.a_cntl.menucolor+';';
        }
        sstr += '"';
        var menuStr = '';
        var sval = '<table HEIGHT="100%"><tr><td VALIGN="MIDDLE" align="center" width="100%">'+val+'<\/td><\/tr><\/table>';
        menuStr += '<div tabindex=1 onclick="'+func+'" '+sstr+' class="amButton">'+sval+'<\/div>';
        return menuStr;
    }

    function ibi_ios_button_r(val,func) {
        var sstr = 'style="position:absolute;top:4px;left:240px;';
        if(Mytable.a_cntl.menubackcolor || Mytable.a_cntl.menucolor) {
            if(Mytable.a_cntl.menubackcolor) sstr += 'background-Color:'+Mytable.a_cntl.menubackcolor+';';
            if(Mytable.a_cntl.menucolor) sstr += 'color:'+Mytable.a_cntl.menucolor+';';
        }
        sstr += '"';
        var menuStr = '';
        var sval = '<table HEIGHT="100%"><tr><td VALIGN="MIDDLE" width="100%">'+val+'<\/td><\/tr><\/table>';
        menuStr += '<div tabindex=1 onclick="'+func+'" '+sstr+' class="amButton">'+sval+'<\/div>';
        return menuStr;
    }

    function ResetMenuPosition()
    {
        ibi_ios_update(null,true);
    }

    function iosShowSub(divNumber)
    {
        var dn = 1;
        if(typeof divNumber != "undefined")
            dn = divNumber-1;
        var divNode2 = d.getElementById("iosmenu"+(dn+1)+"o");
        var divNode1 = d.getElementById("iosmenu"+(dn)+"o");
        divNode2.style.display = "block";
        window.setTimeout(function(){
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),0,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu2o").focus();
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),-1*menuWidth,parseInt(divNode1.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu1o").style.display = "none";
            });
        },100);
    }

    function iosShowSubSL()
    {
        var divNode2 = d.getElementById("iosmenu3o");
        var divNode1 = d.getElementById("iosmenu2o");
        divNode2.style.display = "block";
        window.setTimeout(function(){
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),0,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu3o").focus();
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),-1*menuWidth,parseInt(divNode1.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu2o").style.display = "none";
            });
        },100);
    }

    function iosShowSubSL2()
    {
        var divNode2 = d.getElementById("iosmenu4o");
        var divNode1 = d.getElementById("iosmenu3o");
        divNode2.style.display = "block";
        window.setTimeout(function(){
            AnimateSlide(divNode2,parseInt(divNode2.style.left,10),parseInt(divNode2.style.top,10),0,parseInt(divNode2.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu4o").focus();
            });
            AnimateSlide(divNode1,parseInt(divNode1.style.left,10),parseInt(divNode1.style.top,10),-1*menuWidth,parseInt(divNode1.style.top,10),0.5,30,function() {
                d.getElementById("iosmenu3o").style.display = "none";
            });
        },100);
    }

    function iosShowFilterMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['flt']+'<\/h1><br><center>';
        var condStr = '';
        var ca = [];
        var display;
    
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
        menuStr += ibi_ios_button_r(ibiMsgStr["go"],'ibi_iPadMenu.doCreateFilter('+tn+','+col_num+');ibi_iPadMenu.hideMain()');
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        menuStr += '<form action="javascript:nop();" id="iosform"';

        menuStr += '<input type="HIDDEN" name="col" value="'+col_num+'">';

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="cond" style="width:100px;word-wrap:break-word;">';
        for(var j=0;j<a_filt_types.length;j++)
            condStr += '<option value="'+a_filt_types[j][1]+'">'+a_filt_types[j][0]+'<\/option>';
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['con'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        var values = mytable.getUniqValues(col,ca,null,true);
        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="val" style="width:100px;word-wrap:break-word;">';
        for(var j=0;j<values[0].length;j++) {
            if((typeof(values[1][j])!='string')||(values[1][j].charAt(0)!='<'))
                display =values[1][j];
            else
                display =values[0][j];
            condStr += '<option value="'+values[0][j]+'">'+display+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['val'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        menuStr += '<\/ul><br>';
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        menuStr += ibi_ios_menuitem(ibiMsgStr['cla'],'ibiFilter.clearFilter(-1,'+tn+',0);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        menuStr += '<\/form>';
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub();
    }

    
    function iosShowRollMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['crtroll']+'<\/h1><br><center>';
        var condStr = '';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

    
        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        menuStr += '<form action="javascript:nop();" id="iosform">';

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="btype" style="width:100px;word-wrap:break-word;">';
        if(mytable.a_capt[col].type == IBISTR) {
            for(var j in a_calc_typesSTR)
                condStr += '<option value="'+j+'">'+a_calc_typesSTR[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBIDATE) {
            for(var j in a_calc_typesDATE)
                condStr += '<option value="'+j+'">'+a_calc_typesDATE[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBINUM) {
            for(var j in a_calc_types)
                condStr += '<option value="'+j+'">'+a_calc_types[j]+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['agg'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        menuStr += '<\/form>';
        menuStr += '<\/ul><br>';
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';
/*
        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()">';
        for (var j = 0; j < mytable.n_cols; j++) 
            condStr += '<option value="'+j+'">'+mytable.a_cntl.a_cols[j].name+'<\/option>';
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['crtgby'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
*/
        for (var j = 0; j < mytable.n_cols; j++) {
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[j].noprint) continue;
            menuStr += ibi_ios_menuitem(mytable.a_cntl.a_cols[j].name,'ibi_iPadMenu.doCreateRoll('+tn+','+col+','+j+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub();
    }


    function iosShowChartPickerMenu(tn,col_num,category,isTool,subTable,win)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu4o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['chartSelection']+'<\/h1><br><center>';
        var condStr = '';
        var ca = [];
        var display;
    
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSubSL2()');
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        if(arGraphEngine == arGraphEngineJSCHART) {
            var catlist = tdginfo.category;
            var img,cname;
            var iwidth = tdginfo.chartIconsSize.width+'px';
            var iheight = tdginfo.chartIconsSize.height+'px';
            var chartList = null;
            var sec = 0;
            
            for(var i=0; i< catlist.length; i++)
                if(catlist[i].category == category) {
                    chartList = catlist[i].chartList;
                    sec = i;
                    break;
                }

            if(chartList) {
                for(var j=0; j < chartList.length;j++) {
                    if((!catlist[i].chartList[j].showInTool)||
                        (catlist[i].chartList[j].notForBucket && mytable.a_cntl.hasBuckets)) continue;
                    
                    if(chartList[j].sampleImg) img=chartList[j].sampleImg;
                    else {
                        img = '';
                        if(typeof(catlist[sec].chartList[j].showWhenLoad) == "undefined")
                            catlist[sec].chartList[j].showWhenLoad = [];
                        catlist[sec].chartList[j].showWhenLoad[catlist[sec].chartList[j].showWhenLoad.length]='cp_'+tn+'_'+i+'_'+j;
                        genChartIconsMiniAvailable = false;
                        chartIconsCreated = false;
                    }
                    cname = chartList[j].name;
                    menuStr += '<ul class="iosDIVUL" ';
                    if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
                    menuStr += 'id="menu1" title="Menu" selected="true">';
                    if(isTool)
                        menuStr += '<div id="chticonp_'+tn+'_'+cname+'" class="arToolChartIcon" onclick="ibi_iPadMenu.hideMain();ibiChart.makeChartTDGtype('+win+','+tn+','+subTable+',\''+cname+'\')">';
                    else
                        menuStr += '<div id="chticonp_'+tn+'_'+cname+'" class="arToolChartIcon" onclick="ibi_iPadMenu.selectibiChart('+tn+',\''+cname+'\')">';
                    menuStr += '<div style="position:relative;width:'+iwidth+';height:'+iheight+';">';
                    menuStr += '<div style="position:absolute;background-color:white;left:0px;top:0px;width:'+iwidth+';height:'+iheight+';opacity:0.03;filter:alpha(opacity=3);z-index:1"><\/div>';
                    menuStr += '<div style="position:absolute;left:0px;top:0px;width:'+iwidth+';height:'+iheight+';z-index:0;" id="cp_'+tn+'_'+i+'_'+j+'">'+img+'<\/div>';
                    menuStr += '<\/div><\/div>';
                    menuStr += '<\/ul><br>';
                }
                if(!genChartIconsMiniAvailable) genChartIcons(true,sec);
            }
        }

        divNode.innerHTML = menuStr;
        iosShowSubSL2();
    }

    function iosShowChartPickerMenuTool(win,tn,subTable)
    {
        var mytable = getMyTable(tn);

        ibi_do_ios_menu(mytable,-1,null,true);
        iosShowSub();
        ibi_iPadMenu.ShowChartMenuType(tn,-1,true,subTable,win);
    }

    function iosShowChartMenuType(tn,col_num,isTool,subTable,win)
    {
        var catlist = tdginfo.category;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu3o");

        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['chartSelection']+'<\/h1><br><center>';

        if(isTool)
            menuStr += ibi_ios_button(ibiMsgStr["cancel"],'ibi_iPadMenu.hideMain()');
        else
            menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSubSL()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

    
        for(var i=0; i< catlist.length; i++) {
            menuStr += ibi_ios_menuitem('<span>'+catlist[i].category +'<\/span> ',
                'ibi_iPadMenu.ShowChartPicker('+tn+','+col_num+',\''+catlist[i].category +'\','+isTool+','+subTable+','+win+');',0,true,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSubSL();
    }

    function iosShowChartMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var condStr;
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['crt']+'<\/h1><br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';


        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;
        menuStr += '<form action="javascript:nop();" id="iosform">';
        if(arGraphEngine == arGraphEngineJSCHART) {
            var n = ibiChart.getInfo(myibiChart);
            menuStr += ibi_ios_menuitem(ibiMsgStr['chartSelection'],'ibi_iPadMenu.ShowChartMenuType('+tn+','+col+',false,-1,-1);',
                0,true,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor,null,
                '<span id="mychartname_0">'+n.label+'<\/span>');
        } else {
            condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="ctype">';
            condStr += '<option value="0">'+ibiMsgStr['crtpie']+'<\/option>';
            condStr += '<option value="1">'+ibiMsgStr['crtline']+'<\/option>';
            condStr += '<option value="2">'+ibiMsgStr['crtbar']+'<\/option>';
            if(mytable.a_capt[col].type != IBISTR) 
            condStr += '<option value="3">'+ibiMsgStr['crtscat']+'<\/option>';
            condStr += '<\/select>';
            menuStr += ibi_ios_menu2(ibiMsgStr['crt'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="btype" style="width:100px;word-wrap:break-word;">';
        if(mytable.a_capt[col].type == IBISTR) {
            for(var j in a_calc_typesSTR)
                condStr += '<option value="'+j+'">'+a_calc_typesSTR[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBIDATE) {
            for(var j in a_calc_typesDATE)
                condStr += '<option value="'+j+'">'+a_calc_typesDATE[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBINUM) {
            for(var j in a_calc_types)
                condStr += '<option value="'+j+'">'+a_calc_types[j]+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['agg'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        menuStr += '<\/form>';
        menuStr += '<\/ul><br>';
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

/*
        condStr = '<select>';
        for (var j = 0; j < mytable.n_cols; j++) 
            condStr += '<option value="'+j+'">'+mytable.a_cntl.a_cols[j].name+'<\/option>';
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['crtgby'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
*/
        for (var j = 0; j < mytable.n_cols; j++) {
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[j].noprint) continue;
            menuStr += ibi_ios_menuitem(mytable.a_cntl.a_cols[j].name,'ibi_iPadMenu.doCreateChart('+tn+','+col+','+j+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }

        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub();
    }

    function iosDoCreateChart(tn,x,y)
    {
        var obj=document.getElementById("iosform");
        var btype = obj.btype.value;
        var ctype;
        if(arGraphEngine==arGraphEngineJSCHART) 
            ctype = chartIsTDG;
        else
            ctype = obj.ctype.value*1;
        ibiChart.makeChartItem(tn,ctype,x,y,btype,null,myibiChart);
        if(ibiCompound.ibiLayout.length && b_ios && arDisplayMode === DISPLAY_MODE_ADAPTIVE && (typeof ARMobileDashboards != 'undefined')) {
            var currentLayoutSlide = ARMobileDashboards[0].getCurrentLayoutSlide();
            currentLayoutSlide.slides[currentLayoutSlide.slideIndex][0].scrollLeft = 0;
        }
    } 
    
    var myibiChart = "bar";

    function selectibiChart(tn,chartName)
    {
        myibiChart = chartName;
        var obj = document.getElementById("mychartname_0");
        var n = ibiChart.getInfo(myibiChart);
        if(obj) obj.innerHTML = n.label;
        ibi_do_ios_menu_hide_right3();
        ibi_do_ios_menu_hide_right2();
    }


    function iosDoCreateRoll(tn,x,y)
    {
        var obj=document.getElementById("iosform");
        var btype = obj.btype.value;
        ibiChart.makeChartItem(tn,4,x,y,btype);
    } 

    function iosDoCreatePivot(tn,col)
    {
        var obj=document.getElementById("iosform");
        var btype = obj.btype.value;
        var x = obj.xval.value * 1;
        var y = obj.yval.value * 1;
        ibiChart.makeChartItem(tn,5,col,[x,y],btype);

    } 

    function iosDoCreateFilter(tn,col)
    {
        var obj=document.getElementById("iosform");
        var ftype = obj.cond.value;
        var values = obj.val.value;
        var index;
        var mytable = getMyTable(tn);

        MenuFilter(tn,col,ftype,0);
        if(mytable.a_capt[col].type != "IBISTR" && mytable.a_capt[col].type != "IBIDATE")
            values = values * 1;
        index = inarray(mytable.filterValues[col][0],values,true);
        var f_col;
        for(var i=0; i< mytable.a_col_filter.length;i++)
            if(mytable.a_col_filter[i][0] == col) f_col = i;
        ibiFilter.add_col_to_filter(col,ftype,tn,mytable.a_col_filter[f_col][2],false,0);
        ibiFilter.add_val_to_filter(f_col,ftype,tn,1,index,0);
        ibiFilter.executeFilt(tn,1,0);
    } 

    function iosShowPivotMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var condStr;
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['crtpivot']+'<\/h1><br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
        menuStr += ibi_ios_button_r(ibiMsgStr["go"],'ibi_iPadMenu.doCreatePivot('+tn+','+col_num+');ibi_iPadMenu.hideMain()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        menuStr += '<form action="javascript:nop();" id="iosform">';

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="btype" style="width:100px;word-wrap:break-word;">';
        if(mytable.a_capt[col].type == IBISTR) {
            for(var j in a_calc_typesSTR)
                condStr += '<option value="'+j+'">'+a_calc_typesSTR[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBIDATE) {
            for(var j in a_calc_typesDATE)
                condStr += '<option value="'+j+'">'+a_calc_typesDATE[j]+'<\/option>';
        } else 
        if(mytable.a_capt[col].type == IBINUM) {
            for(var j in a_calc_types)
                condStr += '<option value="'+j+'">'+a_calc_types[j]+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['agg'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="xval" style="width:100px;word-wrap:break-word;">';
        for (var j = 0; j < mytable.n_cols; j++) {
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[j].noprint) continue;
            condStr += '<option value="'+j+'">'+mytable.a_cntl.a_cols[j].name+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['crtpvt1'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        condStr = '<select onchange="ibi_iPadMenu.resetMenuPosition()" name="yval" style="width:100px;word-wrap:break-word;">';
        for (var j = 0; j < mytable.n_cols; j++) {
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[j].noprint) continue;
            condStr += '<option value="'+j+'">'+mytable.a_cntl.a_cols[j].name+'<\/option>';
        }
        condStr += '<\/select>';
        menuStr += ibi_ios_menu2(ibiMsgStr['crtpvt2'],condStr,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        menuStr += '<\/form>';
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub();
    }

    function iosShowPageMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['shr']+'<\/h1><br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        menuStr += ibi_ios_menuitem(ibiMsgStr['dft'],'doDefaultPaging('+tn+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        var pagenum = 5;
        var offset = 5;
        var bl = mytable.a_f_body.length;
        while((pagenum<=60)&&(pagenum<=bl)) {
            menuStr += ibi_ios_menuitem(pagenum+' '+ibiMsgStr['rect'],'dosetPage('+tn+','+pagenum+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            pagenum = pagenum+offset;
            if(pagenum>=40) offset=10;
        }
        menuStr += ibi_ios_menuitem(ibiMsgStr['sha'],'dosetPage('+tn+',0);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
    
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub(); 
    }

    function iosShowHideColumnsMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['uhc']+'<\/h1><br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        var hidearray = setupHide(mytable);
        var _j = 0;
        for (var j = 0; j < mytable.n_cols; j++) 
        {
            if(hidearray[_j])
            menuStr += ibi_ios_menuitem(mytable.a_cntl.a_cols[mytable.a_capt[_j].dataField].name,'MenuHide('+tn+','+mytable.a_capt[_j].dataField+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            
            //    MI_POP[i][0][item_count][spot++] = [[mytable.a_cntl.a_cols[mytable.a_capt[_j].dataField].name],null,{'ocv':'hide','oc' : 'MenuHide('+tn+','+mytable.a_capt[_j].dataField+')'}];
            _j++;
        }
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub(); 
    }

    function iosShowCalcMenu(tn,col_num)
    {
        var v;
        var mytable = getMyTable(tn);
        var divNode = d.getElementById("iosmenu2o");
        var menuStr = '<h1 class="iosH1">'+ibiMsgStr['cal']+'<\/h1><br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub()');
    
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        menuStr += ibi_ios_menuitem(ibiMsgStr['clr'],'clearCalc('+tn+','+col_num+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        menuStr += ibi_ios_menuitem(ibiMsgStr['cla'],'clearCalc('+tn+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        //[[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null]];
 
        if(mytable.a_capt[col].type == IBISTR)
            for(var j in a_calc_typesSTR){
                if(j=='NONE') continue;
                v = mytable.a_capt[col][j];
                if(v) 
                    menuStr += ibi_ios_menuitem(a_calc_typesSTR[j],'clearCalc('+tn+','+col+');ibi_iPadMenu.hideMain()',1,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
                else
                    menuStr += ibi_ios_menuitem(a_calc_typesSTR[j],'MenuCalc('+tn+','+col+',\''+j+'\');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

            } else
        if(mytable.a_capt[col].type == IBIDATE) 
            for(var j in a_calc_typesDATE){
                if(j=='NONE') continue;
                v = mytable.a_capt[col][j];
                if(v) 
                    menuStr += ibi_ios_menuitem(a_calc_typesDATE[j],'clearCalc('+tn+','+col+');ibi_iPadMenu.hideMain()',1,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
                else
                    menuStr += ibi_ios_menuitem(a_calc_typesDATE[j],'MenuCalc('+tn+','+col+',\''+j+'\');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            } else
        if(mytable.a_capt[col].type == IBINUM) {
            for(var j in a_calc_types){
                if(j=='NONE') continue;
                v = mytable.a_capt[col][j];
                if(v) 
                    menuStr += ibi_ios_menuitem(a_calc_types[j],'clearCalc('+tn+','+col+');ibi_iPadMenu.hideMain()',1,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
                else
                    menuStr += ibi_ios_menuitem(a_calc_types[j],'MenuCalc('+tn+','+col+',\''+j+'\');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            }
            var ck=0;
            if(mytable.a_capt[col].vispct) ck=1;
            menuStr += ibi_ios_menuitem(ibiMsgStr['pot'],'togglevispct('+tn+','+col+');ibi_iPadMenu.hideMain()',ck,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub();
 
    }

    function ibi_do_ios_menu2_sub(sub)
    {
        var i;
        var s = sub.split(":");
        var menu = Menu;
        for(i = 0; i < s.length; i++)
            menu = menu[s[i]*1];
        var divnumber = s.length+1;
        var divNode = d.getElementById("iosmenu"+divnumber+"o");
        var str;
        var cstr;
        var re;
        var mytable = Mytable;
        var chk;
        var id;
        var hs;

        var menuStr = '<h1 class="iosH1">'+menu[0][0]+'<\/h1>';
         menuStr += '<br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["back"],'ibi_iPadMenu.hideSub('+divnumber+')');
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';

        
        for(i=3;i<menu.length;i++) {
            str = menu[i][0][0];
            chk = menu[i][0][1];
            if(menu[i][1] == 'SKIP') {
                menuStr += '<\/ul><br>';
                menuStr += '<ul class="iosDIVUL" ';
                if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
                menuStr += 'id="menu1" title="Menu" selected="true">';
            } else 
            if(typeof menu[i][3] != "undefined")
                menuStr += ibi_ios_menuitem(str, 'ibi_iPadMenu.showMenu2Sub(\''+sub+':' + i + '\');', 0, 1, mytable.a_cntl.menubackcolor, mytable.a_cntl.menucolor);
            else {
                cstr = menu[i][2].oc;
                re = new RegExp('"',"g");
                cstr = cstr.replace(re,"'");
                hs = 'ibi_iPadMenu.hideMain();';
                id='ibi$imenu$sub$'+i;
                if(menu[i][2].ms) hs = 'ibi_iPadMenu.toggleCheck('+i+','+sub+',\''+id+'\');'; 
                menuStr += ibi_ios_menuitem(str,hs+cstr,chk,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor,id);
            }
        }

        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        iosShowSub(divnumber);
    }

    function ibi_do_ios_menu2(mytable,target_obj,menu,mstyle)
    {
        var divNode1 = d.getElementById("iosmenu1");
        var divNode2 = d.getElementById("iosmenu2");
        var hNode = d.getElementById("iosmenuhead1");
        var divNode = d.getElementById("iosmenu1o");
        var divNoder = d.getElementById("iosmenu2o");
        var divNoder2 = d.getElementById("iosmenu3o");
        var divNoder3 = d.getElementById("iosmenu4o");
        var divNodet;
        var str;
        var cstr;
        var re;
        var chk;
        var hs;
        var id;
        column_number = target_obj;
        Mytable = mytable;
        Menu = menu;

        setMenuWidth();
        if(!divNode) {
            var bodyRef = d.getElementsByTagName('body')[0];

            divNode1 = d.createElement('div');
            divNode1.setAttribute('id','iosmenu1');
            divNode1.setAttribute(ibiclassName,'iosDIV1i');
            bodyRef.appendChild(divNode1);

            divNode2 = d.createElement('div');
            divNode2.setAttribute('id','iosmenu2');
            divNode2.setAttribute(ibiclassName,'iosDIV2i');
            divNode1.appendChild(divNode2);

            divNode = d.createElement('div');
            divNode.setAttribute('id','iosmenu1o');
            divNode.setAttribute('tabindex','0');
            divNode.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNode);

            divNoder = d.createElement('div');
            divNoder.setAttribute('id','iosmenu2o');
            divNoder.setAttribute('tabindex','0');
            divNoder.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder);

            divNoder2 = d.createElement('div');
            divNoder2.setAttribute('id','iosmenu3o');
            divNoder2.setAttribute('tabindex','0');
            divNoder2.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder2);

            divNoder3 = d.createElement('div');
            divNoder3.setAttribute('id','iosmenu4o');
            divNoder3.setAttribute('tabindex','0');
            divNoder3.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder3);

            if('ontouchstart' in divNode2) 
                divNode2.addEventListener("touchstart",ibi_ios_menu2_start,false);
            else {
                if('addEventListener' in divNode2)
                    divNode2.addEventListener("mousedown",ibi_ios_menu2_start,false);
                else
                    divNode2.attachEvent("onmousedown",ibi_ios_menu2_start);
            }
        }
        if(mytable.a_cntl.menubordercolor) {
            divNoder.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNoder2.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNoder3.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNode.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNode2.style.backgroundColor = mytable.a_cntl.menubordercolor;
        }
        divNoder.innerHTML = '';
        divNoder2.innerHTML = '';
        if('ontouchstart' in document)
            document.addEventListener('touchmove',ibi_ios_stopmove,false);
        else 
        if('addEventListener' in document)
            document.addEventListener('mousemove',ibi_ios_stopmove,false);
        else
            document.attachEvent('onmousemove',ibi_ios_stopmove);

        var menuStr = '<h1 class="iosH1">menu<\/h1>';
        menuStr += '<br><center>';
        if(menu[0].showback)
            menuStr += ibi_ios_button(ibiMsgStr["go"],'ibi_iPadMenu.hideMain()');
        else
            menuStr += ibi_ios_button(ibiMsgStr["cancel"],'ibi_iPadMenu.hideMain()');
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';
        
        for(var i=3;i<menu.length;i++) {
            str = menu[i][0][0];
            if(menu[i][1] == 'SKIP') {
                menuStr += '<\/ul><br>';
                menuStr += '<ul class="iosDIVUL" ';
                if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
                menuStr += 'id="menu1" title="Menu" selected="true">';
            } else 
            if(typeof menu[i][3] != "undefined") {
                menuStr += ibi_ios_menuitem(str, 'ibi_iPadMenu.showMenu2Sub(\'' + i + '\');', 0, 1, mytable.a_cntl.menubackcolor, mytable.a_cntl.menucolor);
            } else {
                chk = menu[i][0][1];
                cstr = menu[i][2].oc;
                re = new RegExp('"',"g");
                cstr = cstr.replace(re,"'");
                hs = 'ibi_iPadMenu.hideMain();';
                id='ibiImenu_'+i;
                if(menu[i][2].ms) hs = 'ibi_iPadMenu.toggleCheck('+i+',-1,\''+id+'\');'; 
                menuStr += ibi_ios_menuitem(str,hs+cstr,chk,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor,id);
            }
        }

        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        divNode1.style.display = "block";
        divNode2.style.display = "block";
        divNode.style.webkitTransition="";
        divNoder.style.webkitTransition="";
        divNoder2.style.webkitTransition="";
        divNoder3.style.webkitTransition="";
        divNode.style.webkitTransform="translate3d(0,0,0)";
        divNoder.style.webkitTransform="translate3d(0,0,0)";
        divNoder2.style.webkitTransform="translate3d(0,0,0)";
        divNoder3.style.webkitTransform="translate3d(0,0,0)";
        divNode.style.top = '0px';
        divNoder.style.top = '0px';
        divNoder2.style.top = '0px';
        divNoder3.style.top = '0px';
        divNode.style.left = '0px';
        divNoder.style.left = menuWidth+'px';
        divNoder2.style.left = menuWidth+'px';
        divNoder3.style.left = menuWidth+'px';
        ibi_ios_update(null,true);
    
    }

    var scrollP = null;
    function scrollfunc(e) {
        var t = e.currentTarget;
        if(scrollP!=null)
            window.clearTimeout(scrollP);
        scrollP = window.setTimeout(function(){scrollfunc2(t);},150);
        if((t.scrollTop + t.offsetHeight + 100)>= t.scrollHeight) {
            var obj =  document.getElementById("ibiImenu_last");
            if(obj.innerHTML == "done")
                return;
            var start = obj.innerHTML*1;
            for(var j=start;j<start+100;j++) {
                if(typeof(infos.data[j])!="undefined") {
                    if (infos.data[j].addLater) {
                        obj.parentNode.insertBefore(infos.data[j].addLater, obj);
                    }
                } else {
                    obj.innetHTML = "done";
                    return;
                }
            }
            obj.innerHTML = (start+100)+'';
        }


    }

    function scrollfunc2(target) {
        var obj,dd;
        for (var i in infos.data) {
            if(infos.data[i].obj==null) {
               infos.data[i].obj = document.getElementById("s$id" + i);
            }
            obj = infos.data[i].obj;
            if (obj) {
                if ((target.scrollTop < obj.offsetTop) &&
                    (target.scrollTop + target.offsetHeight > obj.offsetTop)) {
                    dd = ibi_ios_menuitem(infos.data[i].str, infos.data[i].cstr, infos.data[i].checked, false, infos.data[i].bcolor, infos.data[i].mcolor, infos.data[i].id, null, true);
                    obj.innerHTML = dd;
                    delete infos.data[i];
                }
                if(obj.offsetTop > target.scrollTop + target.offsetHeight) {
                    return;
                }
            }
        }
    }

    // make copy of info.
    function updateMenuItem(index,checked) {
        var obj,dd;
        var target = d.getElementById("iosmenu2f");
        if(!target || !infos_for_update)
            return;
        infos_for_update[index].checked = checked;
        if(infos_for_update[index].obj==null) {
            infos_for_update[index].obj = document.getElementById("s$id" + index);
        }
        obj = infos_for_update[index].obj;
        if (obj) {
            dd = ibi_ios_menuitem(infos_for_update[index].str, infos_for_update[index].cstr,
                infos_for_update[index].checked, false, infos_for_update[index].bcolor,
                infos_for_update[index].mcolor, infos_for_update[index].id, null, true);
            obj.innerHTML = dd;
        }

    }

    var infos = {};
    var infos_for_update = null;

    function ibi_do_ios_menu4(mytable,filter,menu,mstyle)
    {
        var divNode1 = d.getElementById("iosmenu1f");
        var divNode2 = d.getElementById("iosmenu2f");
        var divNode = d.getElementById("iosmenu1of");
        var divNodet;
        var str;
        var cstr;
        var re;
        var chk;
        var hs;
        var id;

        column_number = filter;
        Mytable = mytable;
        //Menu = menu;

        setMenuWidth();
        if(!divNode) {
            var bodyRef = d.getElementsByTagName('body')[0];

            divNode1 = d.createElement('div');
            divNode1.setAttribute('id','iosmenu1f');
            divNode1.setAttribute(ibiclassName,'iosmDIV1i');
            bodyRef.appendChild(divNode1);

            divNode2 = d.createElement('div');
            divNode2.setAttribute('id','iosmenu2f');
            divNode2.setAttribute(ibiclassName,'iosmDIV2i');
            //divNode1.appendChild(divNode2);
            bodyRef.appendChild(divNode2);

            divNode = d.createElement('div');
            divNode.setAttribute('id','iosmenu1of');
            divNode.setAttribute('tabindex','0');
            divNode.setAttribute(ibiclassName,'iosmDIVl3');
            divNode2.appendChild(divNode);

        }
        if(mytable.a_cntl.menubordercolor) {
            divNode.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNode2.style.backgroundColor = mytable.a_cntl.menubordercolor;
        }
        divNode2.addEventListener('scroll',scrollfunc,false)

        var menuStr = '<h1 class="iosH1">'+menu.title+'<\/h1>';
        var liObj;
        menuStr += '<br><center>';
        menuStr += ibi_ios_button(ibiMsgStr["go"],'ibi_iPadMenu.hideMain2()');
        menuStr += '<ul class="iosmDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';
        var ss = [];

        infos = {'start':0,'end':menu.items.length,'data':{}};
        infos_for_update = [];
        var max = 100;
        for(var i=0;i<menu.items.length;i++) {
            str = menu.items[i].display;
            cstr = menu.items[i].func;
            re = new RegExp('"',"g");
            if(cstr)
                cstr = cstr.replace(re,"'");
            id='ibiImenu_'+i;
            infos.data[i] = {'checked':menu.items[i].checked,'obj':null,'str':str,'cstr':cstr,'bcolor':mytable.a_cntl.menubackcolor,'id':id,'mytable':mytable,'mcolor':mytable.a_cntl.menucolor,'addLater':null};
            infos_for_update[i] = {'checked':menu.items[i].checked,'obj':null,'str':str,'cstr':cstr,'bcolor':mytable.a_cntl.menubackcolor,'id':id,'mytable':mytable,'mcolor':mytable.a_cntl.menucolor,'addLater':null};
            // if(menu[i][2].ms) hs = 'ibi_iPadMenu.toggleCheck('+i+',-1,\''+id+'\');';
            if(i<max)
                ss[ss.length] = '<span id="s$id'+i+'"><li class="iosDIVULLI">&nbsp;.&nbsp;<\/li><\/span>'
            else {
                infos.data[i].addLater = document.createElement("span");
                infos.data[i].addLater.setAttribute("id",'s$id' + i);
                liObj = document.createElement("li");
                liObj.setAttribute("class","iosDIVULLI");
                liObj.innerHTML = "&nbsp;.&nbsp;";
                infos.data[i].addLater.appendChild(liObj);
            }
            //ss[ss.length] = ibi_ios_menuitem(str,cstr,false,false,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor,id,null,true);
        }
        ss[ss.length] = '<span id="ibiImenu_last" style="display:none">'+max+'<\/span>';
        menuStr += ss.join('');
        menuStr += '<\/ul><br><\/center>';
        divNode.innerHTML = menuStr;
        divNode1.style.display = "block";
        divNode2.style.display = "block";
        divNode.style.webkitTransition="";
        divNode.style.webkitTransform="translate3d(0,0,0)";
        divNode.style.top = '0px';
        divNode.style.left = '0px';
        divNode2.style.zIndex = 1003;
        if('ontouchstart' in divNode1) {
            divNode1.addEventListener("touchstart", disableTouch, false);
            divNode1.addEventListener("touchmove",disableTouch,false);
            divNode1.addEventListener("touchend",disableTouch,false);
        } else {
            if('addEventListener' in divNode1)
                divNode1.addEventListener("mousedown",disableTouch,false);
            else
                divNode1.attachEvent("onmousedown",disableTouch);
        }

        if('ontouchstart' in divNode2) {
            divNode2.addEventListener("touchstart", disableResize, false);
            divNode2.addEventListener("touchmove",disableResize,false);
            divNode2.addEventListener("touchend",disableResize,false);
        } else {
            if('addEventListener' in divNode1)
                divNode1.addEventListener("mousedown",disableTouch,false);
            else
                divNode1.attachEvent("onmousedown",disableTouch);
        }

        ibi_ios_updatef(null,true);
        scrollfunc2(divNode2);
    }

    function disableResize(e)
    {
        if(e.touches.length > 1) {
            e.preventDefault();
        }
    }

    function disableTouch(e)
    {
        e.preventDefault();
    }

    function ibi_ios_updatef(e,MenuOpen)
    {
        var divNode1 = d.getElementById("iosmenu1f");
        var divNode2 = d.getElementById("iosmenu2f");
        var iosmenu1o = d.getElementById('iosmenu1of');
        var iosmenu1oHeight = (iosmenu1o) ? iosmenu1o.clientHeight : 0;
        var ht;
        var landscape;
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;
        var sx,sy;
        if('scrollX' in window) sx = window.scrollX;
        else sx = document.body.scrollLeft;
        if('scrollY' in window) sy = window.scrollY;
        else sy = document.body.scrollTop;
        var ratio=1.0;
        var obj;
        var id;

        landscape = w > h;

        if(typeof(column_number)=='object') {
            obj = column_number;
        } else {
            id = 'TCOL_' + table_number + '_C_' + column_number;
            if(Mytable)
                if(Mytable.fullScreenOn) id += '_f';
            obj = document.getElementById(id);
        }
        var x;
        var y;
        var x2;
        var y2;
        if(obj) {
            x = findPosX(obj);
            y = findPosY(obj);
            x2 = x-sx;
            y2 = y-sy;
            x2 = parseInt(x2/ratio,10);
        }


        if(divNode1 !=null) {
            if(divNode1.style.display == "block"){
                if(landscape) {
                    divNode1.style.width = screen.height+'px';
                    divNode1.style.height = screen.width+'px';
                    ht = screen.width;
                } else {
                    divNode1.style.width = screen.width+'px';
                    divNode1.style.height = screen.height+'px';
                    ht = screen.height;
                }
                divNode1.style.webkitTransform='scale('+ratio+')';
                divNode1.style.left = sx+'px';
                divNode1.style.top = sy+'px';
                divNode2.style.top = '50px';
                divNode2.style.left = '10px';
                if(landscape)
                    divNode2.style.height = '500px';
                else
                    divNode2.style.height = '700px';

                if(iosmenu1oHeight > screen.height) {
                    divNode2.style.top = '0px';
                    divNode2.style.left = '0px';
                    if(!landscape) {
                        divNode2.style.height = (parseInt(h / ratio,10)-8)+'px';
                        divNode2.style.width = (menuWidth-8)+'px';
                    } else {
                        divNode2.style.height = (parseInt(h / ratio,10)-8)+'px';
                        divNode2.style.width = (menuWidth-8)+'px';
                    }
                } else
                if((x2>0)&&(x2<parseInt(divNode1.style.width,10))){
                    if(x2>300) {
                        divNode2.style.left = (x2-300)+'px';
                    }
                }
            }
        }
        ibi_ios_update2();
        if((Mytable!=null)&&(!MenuOpen)) {
            if(Mytable.fullScreenOn) ibi_ios_fullscreen(Mytable.a_cntl.table_number,false,true);
            if(Mytable.fullScreenOnGraph)ibi_ios_getfullscreen(true,current_window,current_subTable);
        }
    }

    function ibi_do_ios_menu(mytable,col_num,mstyle,showBlank)
    {
        var MyMenus = [];
        var menuops = mytable.a_cntl.menuops;
        var do_filter    = menuops.filter;
        var do_cal    = menuops.calc;
        var do_pag    = menuops.pagination;
        var do_freeze    = false;
        var do_hide    = menuops.hide;
        var do_export    = menuops.exporttable;
        var do_vis    = menuops.visualize;
        var do_chart    = menuops.chart;
        var do_sort    = menuops.sortcol;
        var do_email    = menuops.sendemail;
        if(mytable.a_cntl.cacheMode) do_email = false;
        var do_windows    = false;
        var do_notes     = false;
        var do_pivot    = menuops.pivot;
        var do_rollup    = menuops.rollup;
        var do_print    = menuops.print;
        var do_restore    = menuops.restore;
        var do_save    = menuops.savechange;
        var do_charttool = false;
        var do_gridtool = false;
        var do_pivottool = false;
        var do_accordion = menuops.accordion;
        var tn = mytable.a_cntl.table_number;
        var stn = mytable.a_cntl.org_t_number;
        var calc_count,pos;
        var jj,id,ck,v,btype,spot,spot2,hidearray,pagenum,offset;
        var norecords = true;
        var divNode1 = d.getElementById("iosmenu1");
        var divNode2 = d.getElementById("iosmenu2");
        var hNode = d.getElementById("iosmenuhead1");
        var divNode = d.getElementById("iosmenu1o");
        var divNoder = d.getElementById("iosmenu2o");
        var divNoder2 = d.getElementById("iosmenu3o");
        var divNoder3 = d.getElementById("iosmenu4o");
        var divNodet;
        column_number = col_num;
        table_number = tn;
        Mytable = mytable;
        
        if( ibiPrompt.isReportExpired(true) ) return;

        setMenuWidth();
        if(mytable.fullScreenOn) do_freeze = true;
        if(mytable.a_cont.length) norecords=false;

        if(mytable.isRollUp) {
            var ppmytable = getMyTable(mytable.parent_table);
            while(ppmytable.isRollUp) ppmytable = getMyTable(ppmytable.parent_table);
            stn = ppmytable.a_cntl.org_t_number;
        }

        if(!divNode) {
            var bodyRef = d.getElementsByTagName('body')[0];

            divNode1 = d.createElement('div');
            divNode1.setAttribute('id','iosmenu1');
            divNode1.setAttribute(ibiclassName,'iosDIV1i');
            bodyRef.appendChild(divNode1);

            divNode2 = d.createElement('div');
            divNode2.setAttribute('id','iosmenu2');
            divNode2.setAttribute(ibiclassName,'iosDIV2i');
            divNode1.appendChild(divNode2);

            divNode = d.createElement('div');
            divNode.setAttribute('id','iosmenu1o');
            divNode.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNode);

            divNoder = d.createElement('div');
            divNoder.setAttribute('id','iosmenu2o');
            divNoder.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder);

            divNoder2 = d.createElement('div');
            divNoder2.setAttribute('id','iosmenu3o');
            divNoder2.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder2);

            divNoder3 = d.createElement('div');
            divNoder3.setAttribute('id','iosmenu4o');
            divNoder3.setAttribute(ibiclassName,'iosDIVl3');
            divNode2.appendChild(divNoder3);

            if('ontouchstart' in divNode2) 
                divNode2.addEventListener("touchstart",ibi_ios_menu2_start,false);
            else {
                if('addEventListener' in divNode2)
                    divNode2.addEventListener("mousedown",ibi_ios_menu2_start,false);
                else
                    divNode2.attachEvent("onmousedown",ibi_ios_menu2_start);
            }
            //divNode2.addEventListener("touchmove",ibi_ios_menu2_move,false);
            //divNode2.addEventListener("touchend",ibi_ios_menu2_stop,false);

        }
        if(mytable.a_cntl.menubordercolor) {
            divNoder.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNoder2.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNoder3.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNode.style.backgroundColor = mytable.a_cntl.menubordercolor;
            divNode2.style.backgroundColor = mytable.a_cntl.menubordercolor;
        }
        divNoder.innerHTML = '';
        divNoder2.innerHTML = '';
        if('ontouchstart' in document)
            document.addEventListener('touchmove',ibi_ios_stopmove,false);
        if('addEventListener' in document)
            document.addEventListener('mousemove',ibi_ios_stopmove,false);
        else
            document.attachEvent('onmousemove',ibi_ios_stopmove);

        if(!showBlank) {
        var menuStr = '<h1 class="iosH1">'+mytable.a_cntl.a_cols[col_num].name+'<\/h1>';
        menuStr += ibi_ios_button(ibiMsgStr["cancel"],'ibi_iPadMenu.hideMain()');
        menuStr += '<br><center>';
        menuStr += '<ul class="iosDIVUL" ';
        if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
        menuStr += 'id="menu1" title="Menu" selected="true">';


        var col = col_num;
        if(mytable.org_capt!==null) col = mytable.org_capt[col_num].new_pos;

        i = col_num;
        var pmytable = mytable;
        if(mytable.isRollUp) {
            pmytable = getMyTable(mytable.parent_table);
        }
        if(arDisplayMode !== DISPLAY_MODE_ADAPTIVE) {
            if(pmytable.fullScreenOn)
                menuStr += ibi_ios_menuitem(ibiMsgStr['ogv'],'ibi_iPadMenu.hideMain();ibi_iPadMenu.fullScreen('+pmytable.id+',true,false);',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            else
                menuStr += ibi_ios_menuitem(ibiMsgStr['fsr'],'ibi_iPadMenu.hideMain();ibi_iPadMenu.fullScreen('+pmytable.id+',true,true);',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        if((do_sort)&&(!norecords)) {
            menuStr += ibi_ios_menuitem(ibiMsgStr['sas'],'doSort('+tn+',' + i + ',false);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            menuStr += ibi_ios_menuitem(ibiMsgStr['sds'],'doSort('+tn+',' + i + ',true);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            menuStr += '<\/ul><br>';
            menuStr += '<ul class="iosDIVUL" ';
            if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
            menuStr += 'id="menu1" title="Menu" selected="true">';
        }
        if((do_filter)&&(!norecords)) {
        //if(EnableGlobalFilter) menuStr += ibi_ios_menuitem(ibiMsgStr['gblf'],'MenuFilter('+tn+',-1,-1,1)');
            menuStr += ibi_ios_menuitem(ibiMsgStr['flt'],'ibi_iPadMenu.ShowFilterMenu('+tn+','+i+',0)',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        if((do_cal)&&(!norecords))
            menuStr += ibi_ios_menuitem(ibiMsgStr['cal'],'ibi_iPadMenu.ShowCalcMenu('+tn+','+i+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        var coln = mytable.n_cols;
        if((do_chart)&&(!norecords))
            menuStr += ibi_ios_menuitem(ibiMsgStr['crt'],'ibi_iPadMenu.ShowChartMenu('+tn+','+i+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        if((do_rollup)&&(!norecords))
            menuStr += ibi_ios_menuitem(ibiMsgStr['crtroll'],'ibi_iPadMenu.ShowRollMenu('+tn+','+i+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        if((do_pivot)&&(!norecords)) 
            menuStr += ibi_ios_menuitem(ibiMsgStr['crtpivot'],'ibi_iPadMenu.ShowPivotMenu('+tn+','+i+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        if((!norecords) && (do_vis) && (mytable.a_capt[col].type == IBINUM)){
            ck=0;
            if(mytable.a_capt[col].vis) ck=1;
            menuStr += ibi_ios_menuitem(ibiMsgStr['visual'],'ibi_iPadMenu.hideMain();togglevis('+tn+','+col+');',ck,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        if((do_hide)&&(mytable.n_cols>1)) {
            var haveHides = false;
            menuStr += '<\/ul><br>';
            menuStr += '<ul class="iosDIVUL" ';
            if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
            menuStr += 'id="menu1" title="Menu" selected="true">';
            menuStr += ibi_ios_menuitem(ibiMsgStr['hdc'],'MenuHide('+tn+','+i+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            hidearray = setupHide(mytable);
            for (var j = 0; j < mytable.n_cols; j++) 
                    if(hidearray[j]) haveHides=true;
            if(haveHides) {
                menuStr += ibi_ios_menuitem(ibiMsgStr['uhc'],'ibi_iPadMenu.ShowHideColumnsMenu('+tn+','+i+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
                menuStr += ibi_ios_menuitem(ibiMsgStr['uha'],'MenuHide('+tn+',-1);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            }
        }
        if((do_freeze)&&(mytable.n_cols>1)) {
            if((mytable.freezeAble)||(mytable.fullScreenOn)) {
                menuStr += ibi_ios_menuitem(ibiMsgStr['fzc'],'MenuFreeze('+tn+','+col_num+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
                menuStr += ibi_ios_menuitem(ibiMsgStr['ufa'],'MenuFreeze('+tn+',-1);ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            }
        }
        if(mytable.a_cntl.subhead || mytable.a_cntl.subfoot || mytable.a_cntl.skipline) {
            if(mytable.showsubHF) 
                menuStr += ibi_ios_menuitem(ibiMsgStr['shead'], 'toggleheadings('+tn+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
            else 
                menuStr += ibi_ios_menuitem(ibiMsgStr['hhead'], 'toggleheadings('+tn+');ibi_iPadMenu.hideMain()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }
        if(do_gridtool) menuStr += ibi_ios_menuitem(ibiMsgStr['gridtool'],'ibiEditTools.DoGridTool('+mytable.a_cntl.table_number+')',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        if(do_charttool) menuStr += ibi_ios_menuitem(ibiMsgStr['charttool'],'ibiEditTools.DoChartTool('+mytable.a_cntl.table_number+')',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        if(do_pivottool) menuStr += ibi_ios_menuitem(ibiMsgStr['pivottool'],'ibiEditTools.DoPivotTool('+mytable.a_cntl.table_number+')',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        if((do_pag)&&(!norecords)) {
            menuStr += '<\/ul><br>';
            menuStr += '<ul class="iosDIVUL" ';
            if(mytable.a_cntl.menubackcolor) menuStr += ' style="background-color:'+mytable.a_cntl.menubackcolor+';" ';
            menuStr += 'id="menu1" title="Menu" selected="true">';
            menuStr += ibi_ios_menuitem(ibiMsgStr['shr'],'ibi_iPadMenu.ShowPageMenu('+tn+','+col+')',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        } 
        if(do_notes) {
            menuStr += ibi_ios_menuitem(ibiMsgStr['comments'],'ibi_iPadMenu.ShowCommentMenu()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }

        if((do_accordion)&&((mytable.a_cntl.Accordion) || (mytable.a_cntl.hierarchy && mytable.a_cntl.hierarchy.Expand))){
            menuStr += ibi_ios_menuitem(ibiMsgStr['acd'],'ibi_iPadMenu.ShowAccordionMenu()',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }

        if(do_windows && !mytable.isRollUp && !norecords) {
            menuStr += ibi_ios_menuitem(ibiMsgStr['wt01'],'ibi_iPadMenu.ShowRollMenu()',0,1,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);
        }

        if(!norecords && do_restore)
            menuStr += ibi_ios_menuitem(ibiMsgStr['rso'],'ibi_iPadMenu.hideMain();resettable('+tn+');',0,0,mytable.a_cntl.menubackcolor,mytable.a_cntl.menucolor);

        menuStr += '<\/ul><br><\/center>';  
        divNode.innerHTML = menuStr;
        }

        divNode1.style.display = "block";
        divNode2.style.display = "block";
        divNode.style.webkitTransition="";
        divNoder.style.webkitTransition="";
        divNoder2.style.webkitTransition="";
        divNoder3.style.webkitTransition="";
        divNode.style.webkitTransform="translate3d(0,0,0)";
        divNoder.style.webkitTransform="translate3d(0,0,0)";
        divNoder2.style.webkitTransform="translate3d(0,0,0)";
        divNoder3.style.webkitTransform="translate3d(0,0,0)";
        divNode.style.top = '0px';
        divNoder.style.top = '0px';
        divNoder2.style.top = '0px';
        divNoder3.style.top = '0px';
        divNode.style.left = '0px';
        divNoder.style.left = menuWidth+'px';
        divNoder2.style.left = menuWidth+'px';
        divNoder3.style.left = menuWidth+'px';
        ibi_ios_update(null,true);

    }

    function ibi_ios_stopmove(e)
    {
        e.preventDefault();
    }

    var ibi_ios_pos1 = new Object();
    var ibi_ios_pos2 = new Object();

    var ibi_ios_container = new Object();
    function ibi_ios_menu2_start(e)
    {
        var obj1 = document.getElementById("iosmenu1o");
        var obj2 = document.getElementById("iosmenu2o");
        var obj3 = document.getElementById("iosmenu3o");
        var obj4 = document.getElementById("iosmenu4o");
        var obj = document.getElementById("iosmenu2");            

        if('ontouchstart' in obj) {
            obj.addEventListener("touchmove",ibi_ios_menu2_move,false);
            obj.addEventListener("touchend",ibi_ios_menu2_stop,false);
        } else {
            if('addEventListener' in obj) {
                obj.addEventListener("mousemove",ibi_ios_menu2_move,false);
                obj.addEventListener("mouseup",ibi_ios_menu2_stop,false);
            } else {
                obj.attachEvent("onmousemove",ibi_ios_menu2_move);
                obj.attachEvent("onmouseup",ibi_ios_menu2_stop);
            }
        }

        ibi_ios_container.divNode = obj;
        if(parseInt(obj1.style.left,10)==0)
            ibi_ios_pos2.divNode = obj1;
        else 
        if(parseInt(obj2.style.left,10)==0)
            ibi_ios_pos2.divNode = obj2;
        else 
        if(parseInt(obj3.style.left,10)==0)
            ibi_ios_pos2.divNode = obj3;
        else
            ibi_ios_pos2.divNode = obj4;

        if(e.touches) {
            ibi_ios_pos2.x = e.touches[0].clientX;
            ibi_ios_pos2.y = e.touches[0].clientY; 
        } else {
            ibi_ios_pos2.x = e.clientX;
            ibi_ios_pos2.y = e.clientY;
        }
        ibi_ios_pos2.divX = parseInt(ibi_ios_pos2.divNode.style.left,10);
        ibi_ios_pos2.divY = parseInt(ibi_ios_pos2.divNode.style.top,10);
    }

    function ibi_ios_menu2_move(e)
    {
        var y;
        var x1=0;
        var y1;

        if(e.touches) {
            y1 = e.touches[0].clientY;
            y = y1 - ibi_ios_pos2.y;
        } else {
            y1 = e.clientY;
            y = y1 - ibi_ios_pos2.y;
        }
        var m = ibi_ios_pos2.divY+y;
        if(m>0) {
            m = 0;
            ibi_ios_pos2.divX = x1;
            ibi_ios_pos2.divY = y1;
        }
        var maxPos = -30;
        maxPos = ibi_ios_container.divNode.clientHeight-ibi_ios_pos2.divNode.clientHeight;
        if(maxPos>0) maxPos = 0;
        if(m<maxPos) m = maxPos;
        ibi_ios_pos2.divNode.style.top = m+'px';
    }

    function ibi_ios_menu2_stop(e)
    {
        var obj = document.getElementById("iosmenu2");
        if('ontouchstart' in obj) {
            obj.removeEventListener("touchmove",ibi_ios_menu2_move,false);
            obj.removeEventListener("touchend",ibi_ios_menu2_stop,false);
        } else 
        if('removeEventListener' in obj) {
            obj.removeEventListener("mousemove",ibi_ios_menu2_move,false);
            obj.removeEventListener("mouseup",ibi_ios_menu2_stop,false);
        } else {
            obj.detachEvent("mousemove",ibi_ios_menu2_move);
            obj.detachEvent("mouseup",ibi_ios_menu2_stop);
        }
    }


    function ibi_ios_menu1_start(e)
    {
        clearTimeout(t);
        ibi_ios_pos1.divNode = document.getElementById("iosmenu1o");
        if(e.touches) {
            ibi_ios_pos1.x = e.touches[0].clientX;
            ibi_ios_pos1.y = e.touches[0].clientY; 
        } else {
            ibi_ios_pos1.x = e.clientX;
            ibi_ios_pos1.y = e.clientY;
        }
        ibi_ios_pos1.divX = parseInt(ibi_ios_pos1.divNode.style.left,10);
        ibi_ios_pos1.divY = parseInt(ibi_ios_pos1.divNode.style.top,10);
        ibi_ios_add_move_event();
    }

    function ibi_ios_add_move_event() {
        if('ontouchstart' in document)
            ibi_ios_pos1.divNode.addEventListener("touchmove",ibi_ios_menu1_move,false);
        else
        if('addEventListener' in document)
            ibi_ios_pos1.divNode.addEventListener('mousemove',ibi_ios_menu1_move,false);
        else
            ibi_ios_pos1.divNode.attachEvent('onmousemove',ibi_ios_menu1_move);
    }

    var t;
    function ibi_ios_menu1_move(e)
    {
        clearTimeout(t);
        ibi_ios_pos1.divNode.removeEventListener("touchmove",ibi_ios_menu1_move,false);
        ibi_ios_menu1_move_div(e);
        t = setTimeout("ibi_iPadMenu.moveEvent()",5);
    }

    function ibi_ios_menu1_stop(e)
    {
        ibi_ios_pos1.divNode.removeEventListener("touchmove",ibi_ios_menu1_move,false);
        clearTimeout(t);
        //ibi_ios_menu1_move_div(e);
    }

    function ibi_ios_menu1_move_div(e)
    {
        var y;

        if(e.touches) {
            y = e.touches[0].clientY - ibi_ios_pos1.y;
        } else {
            y = e.clientY - ibi_ios_pos1.y;
        }
        var maxPos = -30;
        maxPos = ibi_ios_container.divNode.clientHeight-ibi_ios_pos1.divNode.clientHeight;
        if(maxPos>0) maxPos = 0;
        if(y>0)  y = 0;
        if(y<maxPos) y = maxPos;
        ibi_ios_pos1.divNode.style.top = y+'px';
        
    }

    var mytable = null;

    function ibi_ios_fullscreen(tn,reset,show)
    {
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;

        var sx,sy;
        if('scrollX' in window) sx = window.scrollX;
        else sx = document.body.scrollLeft;
        if('scrollY' in window) sy = window.scrollY;
        else sy = document.body.scrollTop;

        mytable = getMyTable(tn);
        if(mytable.isRollUp) mytable = getMyTable(mytable.parent_table);
        Mytable = mytable;
        if(reset) {
            //mytable.currentCol = 0;
            mytable.tabCurrent = -1;
            mytable.currentCol=mytable.n_freeze_column;
        }
        
        var landscape = Math.abs(window.orientation)==90;
        var ratio=1.0;

        var fullDiv = document.getElementById("iosfullscreen");
        if(fullDiv==null) {
            var bodyRef = d.getElementsByTagName('body')[0];
            fullDiv = d.createElement('div');
            fullDiv.setAttribute('id','iosfullscreen');
            fullDiv.setAttribute(ibiclassName,'activeMobile');
            var sty = "overflow:visible;display: block;-webkit-touch-callout: none;-webkit-user-select: none;-webkit-transform-origin:0px 0px;-webkit-transform:scale(1.0);position:absolute;z-index:998;left: 0px;top: 0px;width: 100%;min-height: 418px; margin: 0px; padding: 0px;";
            if(b_ie) fullDiv.style.setAttribute('cssText', sty, 0);
            else fullDiv.setAttribute('style',sty);
            bodyRef.appendChild(fullDiv);
        }
        if(!show) {
            fullDiv.style.display = 'none';
            fullDiv.style.zIndex = 0;
            ibiMobileFullscreen=false;
            for(var i=0;i<ibiLayoutListName.length;i++)
                //document.getElementById(ibiLayoutListName[i].orgdiv).style.display='block';
                document.getElementById(ibiLayoutListName[i].orgdiv).style.zIndex=1;
            if(('removeEventListener' in document) && (!isApp))
                document.removeEventListener("touchmove",ibi_ios_stopmove,false);
            mytable.fullScreenOn = false;
            mytable.n_freeze_column=mytable.n_save_freeze_column;
            if(!mytable.hide)mytable.n_freeze_column_before_hide = 0;

            updateOriginalViewChartDrop(mytable);

            ibiGrid.show(false,mytable);
        } else {
            ibiMobileFullscreen = true;
            for(var i=0;i<ibiLayoutListName.length;i++)
                //document.getElementById(ibiLayoutListName[i].orgdiv).style.display='none';
                document.getElementById(ibiLayoutListName[i].orgdiv).style.zIndex=0;
            mytable.fullScreenOn = true;
            mytable.n_save_freeze_column = mytable.n_freeze_column;
            if(landscape) {
                //ratio =w/screen.height;
                //fullDiv.style.width = screen.height;
                //fullDiv.style.height = screen.width;
                fullDiv.style.width = parseInt(w / ratio,10)+'px';
                fullDiv.style.height = parseInt(h / ratio,10)+'px';
                mytable.maxColumns = 6;
            } else {
                //ratio = w/screen.width;
                //fullDiv.style.width = screen.width;
                //fullDiv.style.height = screen.height;
                fullDiv.style.width = parseInt(w / ratio,10)+'px';
                fullDiv.style.height = parseInt(h / ratio,10)+'px';
                mytable.maxColumns = 4;
            }
            mytable.currentCol=mytable.n_freeze_column;
            fullDiv.style.webkitTransform='scale('+ratio+')';
            fullDiv.style.left = sx+'px';
            fullDiv.style.top = sy+'px';
            fullDiv.style.webkitTransformOrigin = "0 0";
            fullDiv.style.display = 'block';
            fullDiv.style.zIndex = 1;
            if('ontouchstart' in document)
                document.addEventListener('touchmove',ibi_ios_stopmove,false);
            else
            if('addEventListener' in document)
                document.addEventListener('mousemove',ibi_ios_stopmove,false);
            else
                document.attachEvent('onmousemove',ibi_ios_stopmove,false);

            //ibiIosGrid.setMyTable(mytable);
            mytable.tabChildren = new Object();
            ibiIosGrid.show(mytable,fullDiv);
            for(var i=0; i < maxwindows;i++) {
                var ty = pwn[i].type;
                var pn = pwn[i].pn;
                if((pwn[i].table_number==mytable.id)&&(ty!=typetab)&&(ty!=typepmt)) {
                    if(ty==typefilt) ibiIosGrid.showFilterMenu(mytable,i);
                    else ibiIosGrid.showChart(pn,true);
                }
            }
            ibiIosGrid.selectTab(mytable.tabCurrent);
        }
    }

    function updateOriginalViewChartDrop(table) {
        var j;
        var pn;
        var pt;
        var sline;
        var win;

        for(j=0; j<maxwindows; j++) {
            if(pwn[j].appTab && 
               mytable.currTab &&
               pwn[j].table_number == mytable.id &&
               mytable.tabChildren[pwn[j].appTab] &&
               mytable.currTab == mytable.tabChildren[pwn[j].appTab].window) {

                pn = getPn(j);
                pt = pwn[j].type;

                break;
            }
        }

        if(pn && pn.parms) {
            win = pn.parms.win;

            if(win) {
                sline  = '<table><tr>';
                sline += '<td style="white-space:nowrap" width="60" valign="TOP" class="tabPagingText1"><div id="SUM'+ win +'" class="tabPagingText1" style="white-space:nowrap;cursor:pointer;"><\/div><\/td>';
                sline += '<\/tr><\/table>';

                if(pt == typechart)
                    ibiChart.buildChartdrop(mytable, 'cpop' + win, win, ibiSkin.cpopicon, sline, pn, pn.saveable.ctype, pn.parms.subTable);

                if(pt == typepivot) 
                    ibiPivot.buildChartdrop(mytable, 'cpop' + win, win, ibiSkin.cpopicon, sline, pn, pn.saveable.ctype, pn.parms.subTable);         
            }
        }
    }

    var current_window;
    var current_subTable;

    function ibi_ios_getfullscreen(show,win,subTable,tn)
    {
        
        var landscape = Math.abs(window.orientation)==90;
        var ratio=1.0;
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;
        var sx,sy;
        if('scrollX' in window) sx = window.scrollX;
        else sx = document.body.scrollLeft;
        if('scrollY' in window) sy = window.scrollY;
        else sy = document.body.scrollTop;
        if(typeof(tn)!='undefined') Mytable = MyTable[tn];
        
        var fullDiv = document.getElementById("iosfullscreen");
        if(fullDiv==null) {
            var bodyRef = d.getElementsByTagName('body')[0];
            fullDiv = d.createElement('div');
            fullDiv.setAttribute('id','iosfullscreen');
            fullDiv.setAttribute(ibiclassName,'activeMobile');
            var sty = "overflow:visible;display: block;-webkit-touch-callout: none;-webkit-user-select: none;-webkit-transform-origin:0px 0px;-webkit-transform:scale(1.0);position:absolute;z-index:998;left: 0px;top: 0px;width: 100%;min-height: 418px; margin: 0px; padding: 0px;";
            if(b_ie) fullDiv.style.setAttribute('cssText', sty, 0);
            else fullDiv.setAttribute('style',sty);
            bodyRef.appendChild(fullDiv);
        }

        if(!show) {
            Mytable.fullScreenOnGraph = false;
            fullDiv.style.display = 'none';
            if(!isApp)document.removeEventListener("touchmove",ibi_ios_stopmove,false);
        } else {
            Mytable.fullScreenOnGraph = true;
            if(landscape) {
                //ratio =w/screen.height;
                //fullDiv.style.width = screen.height;
                //fullDiv.style.height = screen.width;
                fullDiv.style.width = parseInt(w / ratio,10)+'px';
                fullDiv.style.height = parseInt(h/ ratio,10)+'px';
            
            } else {
                //ratio = w/screen.width;
                //fullDiv.style.width = screen.width;
                //fullDiv.style.height = screen.height;
                fullDiv.style.width = parseInt(w / ratio,10)+'px';
                fullDiv.style.height = parseInt(h/ ratio,10)+'px';

            }

            fullDiv.style.webkitTransform='scale('+ratio+')';
            fullDiv.style.left = sx+'px';
            fullDiv.style.top = sy+'px';
            fullDiv.style.webkitTransformOrigin = "0 0";
            if(('addEventListener' in document)&&(!isApp))
                document.addEventListener('touchmove',ibi_ios_stopmove,false);
            fullDiv.style.display='block';

            current_window = win;
            current_subTable = subTable;
            var pn = getPn(win,Mytable.id);
            if(subTable!=-1) pn = pn.children[subTable];
    
             ibiChart.makeChart(null,pn,win,fullDiv);
        }

        return(fullDiv);
    }

    function ibi_ios_listen()
    {
        if('addEventListener' in window) {
            window.addEventListener("scroll",ibi_ios_update2,false);
            window.addEventListener("resize",ibi_ios_update2,false);
            //window.addEventListener("onorientationchange",ibi_ios_update,false);
            window.onorientationchange = ibi_ios_update_timeout;
        }
    }

    function ibi_ios_update_timeout() {
        setTimeout(ibi_ios_update, 300);
    }

    function ibi_ios_update2()
    {
        var landscape = Math.abs(window.orientation)==90;
        var ratio=1.0;
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;
        var sx,sy;
        if('scrollX' in window) sx = window.scrollX;
        else sx = document.body.scrollLeft;
        if('scrollY' in window) sy = window.scrollY;
        else sy = document.body.scrollTop;

        if(landscape) ratio = w/screen.height;
        else ratio = w/screen.width;
/*
        var top = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV);
        if(top) {
            top.style.left = sx+'px';
            top.style.top = sy+'px';
            top.style.webkitTransform='scale('+ratio+')';
        }
*/
    }

    var menuWidth = 300;
    function setMenuWidth()
    {
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;
        var landscape = Math.abs(window.orientation)==90;
        if(landscape) ratio = w/screen.height;
        else ratio = w/screen.width;
        
        menuWidth = 300;
        if((screen.width<500)||(b_iPhone)) {
            if(landscape) {
                menuWidth = screen.width;
            } else {
                menuWidth = screen.width;
            }
        }
    }

    function getCurrentMobileMenuSlide() {
        var menuContainer = document.getElementById('iosmenu2');
        var menuSlides;
        
        if(menuContainer && (menuSlides = menuContainer.children)) {
            for(var i=0; i < menuSlides.length; i++) {
                if(menuSlides[i].style.left === '0px') {
                    return menuSlides[i];
                }
            }
        }

        return null;
    }

    function ibi_ios_update(e,MenuOpen)
    {
        var divNode1 = d.getElementById("iosmenu1");
        //var divNodel = d.getElementById("iosmenu1o");
        //var divNoder = d.getElementById("iosmenu2o");
        var divNode2 = d.getElementById("iosmenu2");
        var currentMenuSlide = getCurrentMobileMenuSlide();
        var currentMenuSlideHeight = (currentMenuSlide) ? currentMenuSlide.clientHeight : 0;
        var ht;
        var landscape;
        var w,h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.scrollWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.scrollHeight;
        var sx,sy;
        if('scrollX' in window) sx = window.scrollX;
        else sx = document.body.scrollLeft;
        if('scrollY' in window) sy = window.scrollY;
        else sy = document.body.scrollTop;
        var ratio=1.0;
        var obj;
        var id;

        landscape = w > h;

        if(typeof(column_number)=='object') {
            obj = column_number;
        } else {
            id = 'TCOL_' + table_number + '_C_' + column_number;
            if(Mytable) 
                if(Mytable.fullScreenOn) id += '_f';
            obj = document.getElementById(id);
        }
        var x;
        var y;
        var x2;
        var y2;
        if(obj) {
            x = findPosX(obj);
            y = findPosY(obj);
            x2 = x-sx;
            y2 = y-sy;
            x2 = parseInt(x2/ratio,10);
        }


        if(divNode1 !=null) {
            if(divNode1.style.display == "block"){
                if(landscape) {
                    divNode1.style.width = screen.height+'px';
                    divNode1.style.height = screen.width+'px';
                    ht = screen.width;
                } else {
                    divNode1.style.width = screen.width+'px';
                    divNode1.style.height = screen.height+'px';
                    ht = screen.height;
                } 
                divNode1.style.webkitTransform='scale('+ratio+')';
                divNode1.style.left = sx+'px';
                divNode1.style.top = sy+'px';
                divNode2.style.top = '50px';
                divNode2.style.left = '10px';
                if(landscape)
                    divNode2.style.height = '500px';
                else
                    divNode2.style.height = '700px';
                
                if(currentMenuSlideHeight > (window.innerHeight - 50)) {
                    divNode2.style.top = '0px';
                    divNode2.style.left = '0px';
                    if(!landscape) {
                        divNode2.style.height = (parseInt(h / ratio,10)-8)+'px';
                        divNode2.style.width = (menuWidth-8)+'px';
                    } else {
                        divNode2.style.height = (parseInt(h / ratio,10)-8)+'px';
                        divNode2.style.width = (menuWidth-8)+'px';
                    }
                } else
                if((x2>0)&&(x2<parseInt(divNode1.style.width,10))){
                    if(x2>300) {
                        divNode2.style.left = (x2-300)+'px';
                    }
                }
            }
        }
        ibi_ios_update2();
        if((Mytable!=null)&&(!MenuOpen)) {
            if(Mytable.fullScreenOn) ibi_ios_fullscreen(Mytable.a_cntl.table_number,false,true);
            if(Mytable.fullScreenOnGraph)ibi_ios_getfullscreen(true,current_window,current_subTable);
        }
    }

})();

