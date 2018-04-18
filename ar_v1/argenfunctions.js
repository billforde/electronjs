/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/argenfunctions.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 180207 0849 bjd 200086 AHTML: PopUp Menu Title Bar disappears when switching to Tab
* 180125 1507 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 171205 1120 wjf 198518 Visualization: Chart output is truncated after resizing the
* 171108 0927 bjd 173921 Active report with freeze-column wont resize
* 171101 1322 bjd 193639 AutoDrill On modified Decomposed Dates not working in repor
* 171026 1521 txk 197071 Active:Autodrill: Drilldown a report with special character
* 170614 0934 wjf 191515 Create unified filter component to replace old style filter
* 170530 1907 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1235 bjd 182437 AHTML:Cache:NFR:Make NOPRINT fields available for DRILLDOWN
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170525 1020 wjf 191511 Add Gridbar for non column related options.
* 170515 1315 wjf 188552 HTML Esri Map linked with report fails to display, gives js
* 170331 1139 wjf 187417 Auto Drill Breadcrumbs for date fields should reflect its f
* 170328 1157 iys 188512 AHTML Rollup reverts sorting when window resized
* 170323 1519 bjd 188512 AHTML Rollup reverts sorting when window resized
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170309 1058 bjd 189264 AHTML: Active drop down controls become inoperative after m
* 170307 1854 wjf 189187 Reopening Chart/Rollup tool causes window to go behind wind
* 170303 1312 bjd 189125 AHTML: display sorted js source names in rv$
* 170112 1147 bjd 187342 AHTML: Cache GE/GT/LE/LT filter sometimes returns incorrect
* 161221 1029 wjf 187389 FF: Retail Samples: Slider range does not reset back to def
* 161005 0836 wjf 184905 DRILLMENUITEM javascript does not work as documented, or no
* 161003 1743 wjf 184905 DRILLMENUITEM javascript does not work as documented, or no
* 160922 1554 bjd 184857 Tab to cascade reports appears behind the intial report ins
* 160915 1305 bjd 177776 AHTML:VAL:Cache:Comma missing in values when called from Pi
* 160914 1552 iys 180538 AHTML:Toggle calculation type is not visible in active repo
* 160909 1554 wjf 184481 8201MR2:Active controls on report in Active Dash/Doc Canvas
* 160830 1413 wjf 179652 Vis:Runtime: Restore and Remove filter doesn't preserve the
* 160802 1549 iys 180062 Create Active Report "Plug-in" for browers
* 160621 1217 wjf 181362 Map: Enable drill up/drill down in Visualization
* 160610 1256 hms 180534 Remove tab characters from source files
* 160504 1355 iys 180062 Create Active Report "Plug-in" for browers
* 160502 1609 iys 180210 AHTML:MOB:After applying Filter/Rollup/Pivot values are not
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160404 1457 bjd 178622 AHTML:Cache:Performing Visualization or Calculation in Roll
* 160328 1456 wjf 178613 Auto Drill for Active charts showing an extra Drill Down li
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160211 0007 wjf 176898 AHTML: Cache performance enhancement
* 160210 0812 wjf 176898 AHTML: Cache performance enhancement
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160115 1043 bjd 172735 AHTML: Cache: Restore Original is not working good once rep
* 160105 1531 bjd 147319 AHTML DRILLMENUITEM wrong or missing &variables with NOPRINT
* 160105 1427 bjd 147319 AHTML DRILLMENUITEM wrong or missing &variables with NOPRINT
* 151223 1229 bjd 147319 AHTML DRILLMENUITEM wrong or missing &variables with NOPRINT
* 151204 1011 bjd 97992  AHTML:Highlight Row- wrong row after sorting performed
* 151019 1455 wjf 172862 AHTML: Add the ability to embed json from irpcfg.json
* 150914 1523 bjd 136022 AHTML: NFR: Export to PDF Option
* 150911 1322 wjf 171673 Slider not showing in the Prompt area
* 150723 1644 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150626 1743 bjd 169143 Context Menu Errors in IE11 Using IE8/Quirks mode
* 150615 1422 iys 166187 AHTM drill menu items do not work on ipad or safari
* 150409 1442 wjf 166225 AHTML: Context Menu: Cascading Multidrill Integration
* 150403 0959 wjf 166080 AHTML: JSCHART: multi page layout incorrectly sizing charts
* 150128 1325 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150116 1017 wjf 163908 AHTML: Mob: Dont set width if in IFrame
* 141016 1213 iys 153403 AHTML:tab:Filter value window covers all after create chart
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
* 141002 1020 wjf 134795 Active Visualization
* 140903 1718 bjd 126262 AHTML: Display Filter Selection Window in Viewable Area
* 140903 1350 bjd 126262 NFR:AHTML display Filter Selection window in viewable area
* 140721 1528 bjd 160171 VAL:AHTML:PivotTool window cannot be resized in IE10+
* 140718 1640 bjd 154660 VAL:AHTML:PivotTool horiz scrollbar not works in FF,chrome
* 140709 1503 wjf 134795 Active Visualization
* 140630 1639 asb 138154 AHTML:KKA:Label & Tooltip Change Bar to Column
* 140606 0757 wjf 134795 Active Visualization
* 140603 0022 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.58 $ 
//$Log: argenfunctions.js,v $
//Revision 1.58  2014/06/02 19:30:18  William_Forde
//[p158619] Look for images in the ar_images for the api.
//
//Revision 1.57  2014/05/07 15:31:53  Brian_DCruz
//[p158599] Original column\dataField values needed for Hide\Show columns after columns are moved
//
//Revision 1.56  2014/04/11 15:54:13  Brian_DCruz
//[p158040] for Cache mode, change export to excel menu string
//
//Revision 1.55  2014/04/07 18:41:56  Brian_DCruz
//[p157878] add logic for CDN_QUOTEP
//
//Revision 1.54  2014/03/20 18:22:34  Brian_DCruz
//[p156867][>branch8100] Logic changes: mytable is NULL when ARPASSWORD logic is being processed
//
//Revision 1.53  2014/03/06 16:49:28  Toshifumi_Kojima
//[p156884][>branch8100] SRVR:AHTML:CDN displays Numeric data into AlphaNum
//
//Revision 1.52  2014/03/04 04:57:21  William_Forde
//[p134795][>branch8100] Fix issue with grid not showing correct data when a filter is applied with cache.
//
//Revision 1.51  2014/02/25 02:55:22  William_Forde
//[p134795][>branch8100] swap search and menu icons position in filter.  Fix issue with grid error.
//
//Revision 1.50  2014/02/24 14:26:49  William_Forde
//[p134795][>branch8100] Fix issue with Grid not showing up properly in AV when SUM is used instead of PRINT.  Allow NE to perform NOT ... IN so that multiple values can be tested.
//
//Revision 1.49  2014/02/10 18:22:33  William_Forde
//[p156355][>branch8100] Fix issue with IE11 not allowing "window" to move.
//
//Revision 1.48  2014/02/04 21:04:31  Israel_Schulman
//[p155631][>branch8100] Check for styleSheet property on style element for IE instead of b_ie - in case b_ie is forced to false.
//
//Revision 1.47  2014/01/08 21:14:59  Brian_DCruz
//[p143512] when changing column visibility, pass in array that has columns explicitly hidden
//
//Revision 1.46  2014/01/03 22:23:25  Brian_DCruz
//[p151156] enable\disable chartmenu window to be draggable.
//
//Revision 1.45  2013/12/20 16:39:58  Brian_DCruz
//[p148394] send filterType as int instead of string as CONTAINS\OMIT logic was confused in certain cases
//
//Revision 1.44  2013/12/03 21:07:33  Israel_Markhovsky
//[p153619] VAL:AHTML:Enlarge chart window frm reprt thrws Webpage Error
//
//Revision 1.43  2013/11/25 18:59:54  William_Forde
//[p154650] Microsoft remove the MSIE string from user agent.  If we only find trident, then turn on activeX.
//
//Revision 1.42  2013/11/18 17:46:35  Brian_DCruz
//[p141034] refactor redefined vars, etc
//
//Revision 1.41  2013/11/18 16:09:21  Brian_DCruz
//[p152147] remove "Enable Transitions" menu option
//
//Revision 1.40  2013/11/12 15:59:42  William_Forde
//[p134795] fix keyboard detection on ie and firefox
//
//Revision 1.39  2013/10/22 21:17:08  William_Forde
//[p153274]  if field is hidden, then "un"hide if selected from tool.
//
//Revision 1.38  2013/10/08 17:05:45  Israel_Markhovsky
//[p152780] AHTML:Remove fields from rollup table throws IE error
//
//Revision 1.37  2013/09/25 19:33:27  Israel_Schulman
//[p143071] If .arGridComment css class is included in irpcfg.js style section, replace the [*] comment indicator with a comment icon. Added support for setting the grid's row hover and highlighted background colors via irpcfg.js with .arGridHover and .arGridHighlight classes.
//
//Revision 1.36  2013/09/17 17:34:05  Israel_Markhovsky
//[p149650] AHTML:create close pivot then create rollup throws script Error
//
//Revision 1.35  2013/09/06 20:35:15  Brian_DCruz
//[p152039] buildwin(): move div that has resize icon up; maxwin(): remove logic that adds 2px to width, as not needed anymore.
//
//Revision 1.34  2013/06/25 14:45:26  Brian_DCruz
//[p135385] use strict comparison operator when checking for values in inarray
//
//Revision 1.33  2013/06/05 20:13:25  William_Forde
//[p134795] dont append "irb" prefix if image starts with "ir".
//
//Revision 1.32  2013/06/05 19:59:23  William_Forde
//[p134795] user either activereport.js or arcontrol.js file name to locate the images directory.
//
//Revision 1.31  2013/06/03 20:00:01  Toshifumi_Kojima
//[p129862] AHTML/RTL: SET LAYOUTRTL Parenthesis displays wrongly
//
//Revision 1.30  2013/05/21 21:24:10  William_Forde
//[p134795] Add "rv$" key sequence to display the revision numbers of js files.
//
//Revision 1.29  2013/05/06 17:21:59  Israel_Schulman
//[p146948] Reference outer div instead of inner div when calculating position for minimized windows
//
//Revision 1.28  2013/04/29 15:50:39  Israel_Markhovsky
//[p124159] fix for calculation results disappearing on Rollup resize
//
//Revision 1.27  2013/04/27 17:56:11  William_Forde
//[p134795] Roll back project 124159.
//
//Revision 1.25  2013/03/26 20:42:14  Israel_Schulman
//[p137859] Added loading indicator to tdgchart's. Added a loading message to appear while page loads. Rearranged waitwin and icons creation to occur before genTables for availability during genTables_delay.
//
//Revision 1.24  2013/03/01 20:33:09  Brian_DCruz
//[p146862] return height and width of text
//
//Revision 1.23  2013/02/07 20:38:02  Israel_Schulman
//[p137693] Change chart/rollup/pivot resize mouse cursor from pointer to nw-resize. Set width and height of div wrapping image so that it does not span entire container.
//
//Revision 1.22  2013/01/22 19:15:52  Brian_DCruz
//[p144936] remove code to Closemenu onscroll
//
//Revision 1.21  2012/11/19 18:39:13  William_Forde
//[p143851] fix js warning.
//
//Revision 1.20  2012/11/19 15:49:44  William_Forde
//[p143851] when switching tab hide the unselected container.  Make sure restore original sets window mode back to either cascade or tab.
//
//Revision 1.19  2012/10/25 20:40:51  William_Forde
//[p115450] If clear calc is selected, then also clear % of Total, since it is on the calculation menu, (as Gerry wanted).
//
//Revision 1.18  2012/09/10 16:50:13  William_Forde
//[p140937] fix parseint warning
//
//Revision 1.17  2012/09/10 13:58:16  William_Forde
//[p140937] in firefox, selectorText may not exsist in CSS rule.
//
//Revision 1.16  2012/08/26 19:52:41  William_Forde
//[p96890] Add components to the dashboard bar area.
//
//Revision 1.15  2012/08/22 19:28:07  William_Forde
//[p140229] dont check for context menu (right-click)
//
//Revision 1.14  2012/08/22 00:49:03  William_Forde
//[p140856] If we are using the api, then we are using the external images.
//
//Revision 1.13  2012/08/20 17:51:55  Brian_DCruz
//[p139121] cellmenu() to check if url ends with .alert, and if so, enclose the value within parens as it is a method call.
//
//Revision 1.12  2012/08/17 18:19:16  Brian_DCruz
//[p140034] fix typo that caused undefined value to be assigned to legit property. Only IE8 and IE7 choked when doing the assignment. Other browsers ignored the assignment.
//
//Revision 1.11  2012/08/14 04:10:39  William_Forde
//[p140572][>branch8001] Add activereport.js that will automatically include all the necessary active report js files.  Also added activereport.css that contains the styling for active.
//
//Revision 1.10  2012/08/10 04:29:54  William_Forde
//[p136963]  If ARDEFAULTHEAD=ORIGINAL then use the heading from the original report.
// 
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["argenfunctions"]="$Revision: 20180220.0915 $";

// capture keystrokes


function addCtrlF() {
    $(window).keydown(function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
            ibiFilterTool.showFilterTool();
            e.preventDefault();
        }
    });
    ibiFilterTool.ctrlFSet = true;
}

//if (document.layers) { document.captureEvents(Event.KEYPRESS); }
if(document.addEventListener)
    document.addEventListener("keypress",getKey);
else
    document.attachEvent("onkeypress",getKey);
var haveFirstKey = 0;
function getKey(keyStroke) {
    var keyCode = (keyStroke.which) ? keyStroke.which : keyStroke.keyCode;
    var keyString = String.fromCharCode(keyCode).toLowerCase();
    
    if(haveFirstKey==0 && keyString=='r') {
        haveFirstKey = 1;
    } else
    if(haveFirstKey==1) {
        haveFirstKey = 0;
        if(keyString=="v")
            haveFirstKey=2;
    } else
    if(haveFirstKey==2) {
        haveFirstKey = 0;
        if(keyString=="$")
            showRevision();
    } 
}

if(document.addEventListener)
    document.addEventListener("keypress",getKeyf);
else
    document.attachEvent("onkeypress",getKeyf);
var haveFirstKeyf = 0;
function getKeyf(keyStroke) {
    var keyCode = (keyStroke.which) ? keyStroke.which : keyStroke.keyCode;
    var keyString = String.fromCharCode(keyCode).toLowerCase();

    if(haveFirstKeyf==0 && keyString=='c') {
        haveFirstKeyf = 1;
    } else
    if(haveFirstKeyf==1) {
        haveFirstKeyf = 0;
        if(keyString=="f")
            haveFirstKeyf=2;
    } else
    if(haveFirstKeyf==2) {
        haveFirstKeyf = 0;
        if(keyString=="$")
            ibiFilter.toogleFilterHolder();
    }
}

function showRevision()
{
    var line='';
    var fname,
        fnames = Object.keys(ActiveJSRevision);
    fnames.sort();
    for (var i = 0, numFiles = fnames.length; i < numFiles; ++i) {
        fname = fnames[i];
        line += fname + ' : '
             + (ActiveJSRevision[fname].split(' ')[1])
             + '\n';
    }
    alert(line);
}

function newPwn()
{
return {'name':null,'xpos':0,'ypos':0,'table_number':-1,'minimized':false,'type':typenone,
        'agg':null,'fadd':null,'title':null,'roll_tnumber':-1,'mmenu':null,'dobj':null,
        'wtitle':null,'dobj_b':null,'dobj_t':null,'dobj_m':null,'dobj_e':null,'pn':null,
        'minw':-1,'width':-1,'height':-1,'ftm':[],'ftp':[[],[]],'children':[],
        'chartinfo':{
            'xars':null,'yars':null,'cfilt':[],'c_col_filter':[],'parms':null,
            'table_number':-1,'tcapt':null,'tcont':null,'tlook':null,'tcntl':null,
            'dobj_b':null,'dobj_m':null,'newDoc':null,'newGraph':null,'wdGraph':null,
            'newpres':null,'newslide':null,'pptGraph':null,'newEx':null,'newEXGraph':null,
            'xmenu':null,'yart':null,'ctwin':-1,
                'saveable':{
                    'saveXpos':-1,'saveYpos':-1,'saveWidth':-1,'saveHeight':-1,'pvcol':-1,
                    'linked':true,'x_cols':null,'regression':false,'colorby':-1,'stacked':false,
                    'y_cols':null,'btype':null,'ctype':null,'size':0
                    }
            }
                };
}

function initwindows(which)
{
    if(typeof(which)=="undefined") {
        winMoveX=0;
        winMoveY=0;

        winLastX = 0;
        winLastY = 0;
        if(document.dir=='rtl') {
          winMoveX-=(document.documentElement.clientWidth/4);
          winLastX=winMoveX;
        }
        pwn = [];
        for(var i=0;i<maxwindows;i++) {

            pwn[i]=newPwn();
            pwn[i].dobj=null;
        }
        
        pwn[0].name='minimized windows';
    } else {
        pwn[which] = newPwn();
        pwn[which].dobj = null;
    }
}

/**
 * returns next number based on numFormat
 *         decrements number if direction is "-"
 *         otherwise increments number
 */
function getNextNumber(num, numFormat, direction)
{
    var numDecPlaces = 0;
    var newNumStr = "0", newNum, i;
    if (numFormat.indexOf(".") !== -1) {
        newNumStr += ".";
        numDecPlaces = +numFormat.replace(/\D*\d+(\.)?/, "")
                                 .replace(/\D+/, "");
        for (i = 1; i < numDecPlaces; ++i) {
            newNumStr += "0";
        }
    }
    newNumStr += "1";
    if ((typeof direction === "string") &&
        (direction.trim() === "-")) {
        newNum = (+num) - (+newNumStr);
    } else {
        newNum = (+num) + (+newNumStr);
    }
    return newNum.toFixed(numDecPlaces);
} // end getNextNumber()

/**
 * returns object with height and width
 */
function measureText(text,uclass,style)
{
    var b = document.getElementById("ibiMeasureText");
    if(b==null) {
        var bodyRef = document.getElementsByTagName('body')[0];
        b = document.createElement('div');
        b.setAttribute('id','ibiMeasureText');
        bodyRef.appendChild(b);
    }
    var bstyle = 'position:absolute;visibility:hidden;white-space:nowrap;top:0px;left:0px;';
    if(style) bstyle+=style;
    if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
    else b.setAttribute('style',bstyle);
    b.setAttribute(ibiclassName,'');
    if(uclass) {
        b.setAttribute(ibiclassName,uclass);
    }
    b.innerHTML = text;
    var obj = { height: b.offsetHeight, width: b.offsetWidth };
    b.innerHTML = '';
    return obj;
}

function setUpNewWindow(i)
{
    pwn[i]=newPwn();
    pwn[i].dobj=d.getElementById('win'+i);
    pwn[i].dobj.innerHTML='<div id="wall'+i+'" style="display:none;position:relative;top:0;left:0;border:1px solid black;background:white;"><div style="">'+
        '<div style="" id="wtop'+i+'"><\/div>'+
        '<div style="" id="wmenu'+i+'"><\/div>'+
        '<div style="" id="wbody'+i+'"><\/div>'+
        '<div style="" id="wbot'+i+'"><\/div><\/div><\/div>';
    pwn[i].dobj_b=d.getElementById('wbody'+i);
    pwn[i].chartinfo.dobj_b = pwn[i].dobj_b;
    pwn[i].dobj_t=d.getElementById('wtop'+i);
    pwn[i].dobj_m=d.getElementById('wmenu'+i);
    pwn[i].chartinfo.dobj_m = pwn[i].dobj_m;
    pwn[i].dobj_e=d.getElementById('wbot'+i);
    pwn[i].dobj_a=d.getElementById('wall'+i);

    if(b_mobile && pwn[i].dobj_b) {
        ibiUtil.enableMobileNativeScrolling(pwn[i].dobj_b);
    }
}

function buildwin(win_num,title,mytable,allowscroll,titid,size,noWinControl,border) {
    var iconStr = '';
    var secadd = '<span><\/span>';
    var rline,m5,bc;
    var titl = title.substring(0,80);
    var dragEvent;

    if(isARBrowserExtension) {
        dragEvent = ((mytable) && (mytable.a_cntl.draggableMenu === false)) 
                    ? '' : ' onmousedown="_ARExtensionCall(&quot;dragStart(\'__event__\','+win_num+')&quot;, null, {\'event\':event,\'preventDefault\':true})"';
    } else {
        dragEvent = ((mytable) && (mytable.a_cntl.draggableMenu === false)) 
                    ? '' : ' onmousedown="dragStart(event,'+win_num+')"';
    }

    if(typeof(titid)!='undefined') 
        titl = '<span id="wtitle'+win_num+'">'+titl+'<\/span>';

    //bc = Ardefault.wincnbcolor;
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";
    pwn[win_num].dobj.style.left = pwn[win_num].xpos+'px';
    pwn[win_num].dobj.style.top = pwn[win_num].ypos+'px';
    if(size!=null)
        if(typeof(size)=='object') 
            pwn[win_num].dobj.style.width = size.width+'px';

    var line='';
    line +=    '<div width="100%" class="arWindowBar"><table width="100%" border=0 cellspacing=0 cellpadding=0 style="'+bc+';">';
    line +=  '<tr height="28">';
    line +=      '<td width="*" class="arWindowBarTitle" style="cursor:pointer;" width="*"'
                   + dragEvent + '>&nbsp;'+titl+'<\/td>';
    line +=      '<td width="34" align="right">';
    if(!noWinControl) {
        line +=        '<div id="WCS'+win_num+'">';
        line +=           '<table width=34 cellspacing=0 cellpadding=0><tr>';
        if(isARBrowserExtension) {
            line +=      '<td><div style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;minwin('+win_num+')&quot;)">'+ibiSkin.minicon+'<\/div><\/td>';
            line +=      '<td><div style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;closewin('+win_num+')&quot;)">'+ibiSkin.clsicon+'<\/div><\/td>';
        } else {
            line +=      '<td><div style="cursor:pointer;"  onclick="minwin('+win_num+')">'+ibiSkin.minicon+'<\/div><\/td>';
            line +=      '<td><div style="cursor:pointer;"  onclick="closewin('+win_num+')">'+ibiSkin.clsicon+'<\/div><\/td>';
        }
        line +=          '<td width="*" ><span><\/span><\/td>';
        line +=        '<\/tr><\/table>';
        line +=       '<\/div>';
    }
    line +=      '<\/td><\/tr>';
    line +=  '<\/table><\/div>';

    if(border)pwn[win_num].dobj_a.style.border = border;
    else pwn[win_num].dobj_a.style.border = "1px solid "+Ardefault.wincnbrcolor;
    pwn[win_num].dobj_t.innerHTML=line;
    pwn[win_num].dobj_t.style.backgroundColor="#0000BC";
    pwn[win_num].dobj_m.innerHTML=secadd;
    pwn[win_num].dobj_m.style.backgroundColor="#ECE9D8";
    pwn[win_num].dobj_b.style.backgroundColor="white";
    if(allowscroll) {
        pwn[win_num].dobj_b.style.scrollable=true;
        pwn[win_num].dobj_b.style.overflow="auto";
        pwn[win_num].dobj_b.style.height="300px";
        if(size!=null)
            if(typeof(size)=='object')
                pwn[win_num].dobj_b.style.height = size.height+'px';
    }

	if(allowscroll && ((mytable == null) || (mytable.a_cntl.WindowDisplay!='tab'))) {
        var oicon = document.getElementById("resizeIcon");
        var width = "9px", height = "9px";
        if(oicon) {
            width = oicon.childNodes[0].style.width;
            height = oicon.childNodes[0].style.height;
        }
        pwn[win_num].dobj_e.innerHTML='<div style="position:relative;top:-30px;border:0px;float:right;"><table width="100%"><tr height="28">'+
            '<td valign="BOTTOM" align="RIGHT" span id="resize'+win_num+'">'+
            '<div style="width:'+width+';height:'+height+';cursor:nw-resize;" onmousedown="resizeStart(event,'+win_num+',true)">'+ibiSkin.rszicon+'<\/span>'+
            '<\/td><\/tr><\/table></div>';
        pwn[win_num].dobj_e.style.height = "0px";
        pwn[win_num].dobj_e.style.visibility = 'visible';
        pwn[win_num].dobj_e.style.display = 'block';
    } else {
        pwn[win_num].dobj_e.innerHTML=blankdot;
        pwn[win_num].dobj_e.style.visibility = 'hidden';
        pwn[win_num].dobj_e.style.display = 'none';
    }
    pwn[win_num].wtitle=d.getElementById('wtitle'+win_num);
    var tobj = d.getElementById('twt'+win_num);
    return(line);
}

function getStyle(name)
{
    var css;
    var j,i;
    for(j=0;j<document.styleSheets.length;j++){
        css = null;
        try {
            if (typeof document.styleSheets[j].rules != "undefined")
                css = document.styleSheets[j].rules;
            else if (typeof document.styleSheets[j].cssRules != "undefined")
                css = document.styleSheets[j].cssRules;
        } catch (e) {

        }

        if(css != null) {
            for(i=0;i<css.length;i++)
                if(typeof(css[i].selectorText)!="undefined")
					if (css[i].selectorText.toLowerCase() == name.toLowerCase()) return (css[i]);
        }
    }
    return null;
}

function styleIsDefined(name)
{
	if(getStyle(name)==null)
		return false;
    else
		return true;
}

function addJsonStyles(jsonObject) {
    var headRef = document.getElementsByTagName('head')[0];
    var cssNode = document.createElement('style');
    var styleStr = '';
    var i,j;
    cssNode.setAttribute('type','text/css');
    for(i in jsonObject) {
        styleStr += i;
        styleStr += "{";
        for(j=0; j < jsonObject[i].length; j++)
            styleStr += jsonObject[i][j];
        styleStr += "}\n";
    }

    if(cssNode.styleSheet) {
        cssNode.styleSheet.cssText = styleStr;
    } else {
        gsA = styleStr.split('\n');
        for (i = 0; i < gsA.length; i++) {
            newStyle = document.createTextNode(gsA[i]);
            cssNode.appendChild(newStyle);
        }
    }
    headRef.appendChild(cssNode);
}

function ar_js_init(useDiv) {
    var i, metas, newStyle, gsA;
    if(typeof(window.ibi_iPadMenu)!="undefined") {
        ibi_iPadMenu.initListen();
    }
    if(b_mobile) {
        //need to restore position of the screen;
        metas = document.getElementsByTagName('meta');
        for (i = 0; i < metas.length; i++) {
            if (metas[i].name == "viewport") {
                if(window.frameElement)
                    metas[i].content = "minimum-scale=1.0, maximum-scale=1.0";
                else
                metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            }
        }
    }
    //menulist_obj=d.getElementById('menulist');
    if(menulist_obj) return;
    if(b_smallScreen && b_mobile) {
        //need to restore position of the screen;
        metas = document.getElementsByTagName('meta');
        for (i = 0; i < metas.length; i++) {
            if (metas[i].name == "viewport") {
                if(window.frameElement)
                    metas[i].content = "minimum-scale=1.0, maximum-scale=1.0";
                else
                metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            }
        }
    }
    if('createElement' in document) {
        var cssNode = document.createElement('style');
        cssNode.setAttribute('type','text/css');
        cssNode.setAttribute('id','MainStyeId');
        var headRef = document.getElementsByTagName('head')[0];
        headRef.appendChild(cssNode); 

        var sty = d.getElementById('ibiArCustomStyle');
        if((sty == null) && !styleIsDefined(".activeReport") && (typeof ibiArCustomStyle !== 'undefined')) {
            cssNode = document.createElement('style');
            cssNode.setAttribute('type','text/css');
            if(cssNode.styleSheet) {
                cssNode.styleSheet.cssText = ibiArCustomStyle;
            } else {
                gsA = ibiArCustomStyle.split('\n');
                for (i = 0; i < gsA.length; i++) {
                    newStyle = document.createTextNode(gsA[i]); 
                    cssNode.appendChild(newStyle);
                }
            }
            headRef.appendChild(cssNode); 
        }

        cssNode = document.createElement('style');
        cssNode.setAttribute('type','text/css');
        if(cssNode.styleSheet) {
            cssNode.styleSheet.cssText = GlobalStr;
        } else {
            gsA = GlobalStr.split('\n');
            for (i = 0; i < gsA.length; i++) {
                newStyle = document.createTextNode(gsA[i]); 
                cssNode.appendChild(newStyle);
            }
        }
        if(b_ios && (typeof(window.ibi_iPadMenu)!="undefined")) {
            if(cssNode.styleSheet) {
                cssNode.styleSheet.cssText = GlobalStr+IosStyle;
            } else {
                gsA = IosStyle.split('\n');
                for (i = 0; i < gsA.length; i++) {
                    newStyle = document.createTextNode(gsA[i]); 
                    cssNode.appendChild(newStyle);
                }
            }
        }
        headRef.appendChild(cssNode); 

        var bodyRef = document.getElementsByTagName('body')[0];
        var w;
        var h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.clientWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.clientHeight;
        if((typeof(useDiv)!="undefined") && (useDiv !=null)) {
            if(typeof(useDiv) == "string") {
                bodyRef = d.getElementById(useDiv);
                w = bodyRef.offsetWidth;
                h = bodyRef.offsetHeight;
            } else bodyRef = useDiv;
            bodyRef.style.overflow="hidden";
        }

        var b = measureText("create dummy");

/*
        for(var i=0;i<maxwindows;i++) {
            divNode = d.createElement('div');
            if(b_ie) divNode.style.setAttribute('cssText', 'z-index:100;position:absolute;top:0;left:0;', 0);
            else divNode.setAttribute('style','z-index:100;position:absolute;top:0;left:0;');
            divNode.setAttribute('id','win'+i);
            bodyRef.appendChild(divNode);
        }
*/
        divNode = d.createElement('div');
        if(b_ie) divNode.style.setAttribute('cssText', 'visibility:hidden;z-index:1000;position:absolute;top:0;left:0;', 0);
        else divNode.setAttribute('style','visibility:hidden;z-index:1000;position:absolute;top:0;left:0;');
        divNode.setAttribute('id','gotopage');
        bodyRef.appendChild(divNode);
        initwindows();

        divNode = d.createElement('div');
        if(b_ie) divNode.style.setAttribute('cssText', 'position:absolute;visibility:hidden;white-space:nowrap;top:0px;left:0px;', 0);
        else divNode.setAttribute('style','position:absolute;visibility:hidden;white-space:nowrap;top:0px;left:0px;');
        divNode.setAttribute('id','fontMetric');
        document.getElementsByTagName('body')[0].appendChild(divNode);

        //divNode = d.createElement('div');
        //if(b_ie) divNode.style.setAttribute('cssText', 'position:absolute;visibility:hidden;top:0px;left:0px;', 0);
        //else divNode.setAttribute('style','position:absolute;visibility:hidden;top:0px;left:0px;');
        //divNode.setAttribute('id','ibmlength');
        //document.getElementsByTagName('body')[0].appendChild(divNode);

        divNode = d.createElement('div');
        if(b_ie) divNode.style.setAttribute('cssText', 'position:absolute;visibility:hidden;top:0px;left:0px;', 0);
        else divNode.setAttribute('style','position:absolute;visibility:hidden;top:0px;left:0px;');
        divNode.setAttribute('id','ToolBox');
        divNode.setAttribute(ibiclassName,"arToolDragBox");
        bodyRef.appendChild(divNode);

        menulist_obj = d.createElement('div');
        if(b_ie) menulist_obj.style.setAttribute('cssText', 'position:absolute;top:0;left:0;z-index:200', 0);
        else menulist_obj.setAttribute('style','position:absolute;top:0;left:0;z-index:200');
        menulist_obj.setAttribute('id','menulist');
        menulist_obj.setAttribute(ibiclassName,"activeReport");
        document.getElementsByTagName('body')[0].appendChild(menulist_obj);

        // p144936: do not Closemenu onscroll on document
        //if('addEventListener' in document)
        //    document.addEventListener('scroll',ibiMenu.Closemenu,false);
        //else
        //    document.attachEvent('onscroll',ibiMenu.Closemenu);

    } else {
        d.write('<style id="MainStyleId" type="text/css"><\/style>');
        d.write('<div style="visibility:hidden;z-index:1000;position:absolute;top:0;left:0;" id="waitwin">'+ibiMsgStr['psmsg']+'<\/div>');
        for (i = 0; i < maxwindows; i++) {
            d.write('<div style="z-index:100;position:absolute;top:0;left:0;" id="win'+i+'"><\/div>');
        }
        d.write('<div style="position:absolute;top:0;left:0;z-index:200" id="menulist"><\/div>');
        d.write('<div style="visibility:hidden;z-index:1000;position:absolute;top:0;left:0;" id="gotopage"><\/div>');
        initwindows();

        d.write('<div id="fontMetric" style="position:absolute;visibility:hidden;"><\/div>');
        d.write('<div id="ibmlength" style="position:absolute;visibility:hidden;"><\/div>');
        d.write('<div id="ToolBox" style="position:absolute;visibility:hidden;border:1px solid black;background-color:white;"><\/div>');
        d.write('<div id="allLayoutObjects" style="position:absolute;"><\/div>');
        for (i = 0; i <= 40; i++) { d.write('<div style="visibility:hidden;display:none;" id="icon'+i+'"><\/div>'); }
        d.write(GlobalStyle);

        menulist_obj=document.getElementById('menulist');
    }
}



function drawSUM(mytable)
{
    var str='';
    var color = mytable.a_cntl.statcolor
    var gridBarCalcStyle = '';

    if(color) {
        gridBarCalcStyle = ' style="color:' + color + ';"';
    }

    str += '<table cellspacing=0 cellpadding=0 border=0><tr><td>'+ibiSkin.sumicon+'<\/td><td style="white-space:nowrap" >';
    
    switch(mytable.calcType) {
        case 0: str += '<span class="arGridBarCalc"' + gridBarCalcStyle + '>TOT<\/span>'; break;
        case 1: str += '<span class="arGridBarCalc"' + gridBarCalcStyle + '>SUB<\/span>';break;
        case 2: str += '<span class="arGridBarCalc"' + gridBarCalcStyle + '>SUB/TOT<\/span>';break;
        case 3: str += '<span class="arGridBarCalc"' + gridBarCalcStyle + '>ACCORD<\/span>';break;
    }
    str += '<\/td><\/tr><\/table>';
    return(str);
}
 
 
function CopyArray(obj_from)
{
    return JSON.parse(JSON.stringify(obj_from));
    /*
    var i,obj=[];
    if(typeof(obj_from)=='object') {
        for(i in obj_from)
            if(typeof(obj_from[i])=='function') continue;
            else
            if(obj_from[i]==missingVal) obj[i] = missingVal;
            else
            obj[i] = CopyArray(obj_from[i]);
        return obj;
    } else
    return obj_from;
    */
}
 
function drawline(color,mclass)
{return '<table width="100%" cellpadding=0 cellspacing=0 border=0><tr height="5"><td>'+blankdot+
    '<\/td><\/tr><tr height="1"><td '+(color?' bgcolor="'+color+'"':"")+(mclass?' class="'+mclass+'"':"")+'>'+blankdot+
    '<\/td><\/tr><tr height="5"><td>'+blankdot+'<\/td><\/tr><\/table>';}



function drawImg(imgnum,width,height,bcolor,inline,ctstyle,embedImg,rWidth,rHeight,forceImg)
{
    var str;
    (b_ie?str=[]:str='');
    var ln = 0;
    var s_, cs, pc, img, count, i;

	//if(!b_ie ||  (b_ie_version > 7) || forceImg) {
        if(typeof(embedImg)!="undefined") {
			s_='<div style="border:none;';
			if(width>0)
				s_+= 'width:'+width+'px;';
			if(height>0)
				s_+= 'height:'+height+'px;'
			s_ +='font-size:0px;">';
            s_+=embedImg;
            s_+='<\/div>';
            return (s_);
        }
	//}

    img = ibiSkin.Images[imgnum];
    if(typeof(img)=="undefined") {
        s_='<div style="width:12px;height:12px;border:none;color:red;">X<\/div>';
        return(s_);
    }

    var il = img.length;
    il = height;
    var hratio = 1;
    var wratio = 1;
    var wl = width;
    if(rHeight>0) {
        il = rHeight;
        wl = rWidth;
        hratio = height/rHeight;
        wratio = width/rWidth;
    }

    s_='<div style="width:'+wl+'px;height:'+il+'px;border:none;"><table border=0 cellpadding=0 cellspacing=0 width='+wl+'>';
    (b_ie?str[ln++]=s_:str+=s_);

    (b_ie?str[ln++]="<tr>":str+="<tr>");
    for (i = 0; i < wl; i++) { 
        (b_ie?str[ln++]='<td class="singledot"><\/td>':str+='<td class="singledot"><\/td>');
    }
    (b_ie?str[ln++]="<\/tr>":str+="<\/tr>");

    var currentPos = 0;
    var jm, c2, bitline, j;

    for (i = 0; i < il; i++) {
        im = parseInt(i * hratio,10);
        s_='<tr>';
        (b_ie?str[ln++]=s_:str+=s_);
        var il1 = img[im].length;
        bitline = [];
        for (j = 0; j < il1; j = j+2) {
            count=img[im][j];
            pc=img[im][j+1];
                        if(pc<0) cs = 'singledot';
            else cs = ctstyle+pc;
            //s_='<td class="'+cs+'"';
            //(b_ie?str[ln++]=s_:str+=s_);
            bitline[bitline.length] = cs;
            if(count>1) {
                for(jj=1; jj<count;jj++)
                    bitline[bitline.length] = cs;
                //s_=' colspan='+count;
                //(b_ie?str[ln++]=s_:str+=s_);
            }
            //s_='><\/td>';
            //(b_ie?str[ln++]=s_:str+=s_);
        }
        for (j = 0; j < wl; j++) {
            jm = parseInt(j * wratio,10);
            s_='<td class="'+bitline[jm]+'"';
            (b_ie?str[ln++]=s_:str+=s_);
            s_='><\/td>';
            (b_ie?str[ln++]=s_:str+=s_);
        }
        s_='<\/tr>';
        (b_ie?str[ln++]=s_:str+=s_);
    }
    s_='<\/table><\/div>';
    (b_ie?str[ln++]=s_:str+=s_);
    return (b_ie?str.join(''):str);
}


function ibi_add_images(win)
{
    var divobj, divId, i,k;
    var imarray,a;

    if(!ibiSkin.IMGARRAY) return;
    imarray = ibiSkin.IMGARRAY;
    if(imarray.length == 0) {
        var count = 0;
        var imgPrefix = 'irb';
        var scripts = document.getElementsByTagName("script");
        var relpath = '';
        for (i = 0; i < scripts.length; i++) {
            if(scripts[i].src.indexOf("activereport.js")>-1)
                relpath  = scripts[i].src.substr(0,scripts[i].src.indexOf("activereport.js")-1);
            else
            if(scripts[i].src.indexOf("arcontrol.js")>-1)
                relpath  = scripts[i].src.substr(0,scripts[i].src.indexOf("arcontrol.js")-1);
            if(relpath!='') {
                var rp = relpath.split('/');
                relpath = '';
                for(k=0;k<rp.length-1;k++)
                    relpath += rp[k]+'/';
                relpath += "ar_images/";
                break;
            }
        }

        if(isARBrowserExtension) {
            relpath = chrome.extension.getURL('images/active/irbbar.png').split('irbbar.png')[0];
        }
        
        for (var ic in ibiSkin.icons) {
            if(ibiSkin.icons[ic].defimg) {
                imgPrefix = 'irb';
                if(ibiSkin.icons[ic].defimg.substr(0,2) == "ir") 
                    imgPrefix = "";
                imarray[count] = {'html':null,'width':-1,'height':-1,'resizeWidth':-1,'resizeHeight':-1,'imgnum':count,
                    'filename':imgPrefix+ibiSkin.icons[ic].defimg,'divnames':[ibiSkin.icons[ic].id],'transparent':true,
                    'forceImg':true,
                    'embedImg':'<img src="'+relpath+imgPrefix+ibiSkin.icons[ic].defimg+'">'};
				if(typeof ibiSkin[ic] != "undefined")
					imarray[count].html = ibiSkin[ic];
                count++;
            }
        }
    }
    for (i = 0, il = imarray.length; i < il; i++) {
        a=imarray[i];
        for (var j=0, dl = a.divnames.length; j < dl; j++) {
            divId = a.divnames[j];
            ibiSkin.imgLookup[divId] = a;
            if (imageDivSet[divId]) continue;
            if(win) divobj = win.document.getElementById(divId);
            else divobj = d.getElementById(divId);
            if((divobj)&&(divobj.childNodes.length==0)) {
                if(!a.html) a.html=drawImg(a.imgnum,a.width,a.height,false,false,'ic_imgpx',a.embedImg,a.resizeWidth,a.resizeHeight,a.forceImg);
                divobj.innerHTML=a.html;
                imageDivSet[divId] = (divId.indexOf(arConstants.EMBEDIMG) == -1);
            }
            
        }
    }
}

function showCellMenu(event)
{
    var rightclick=false;

    if(b_ie||b_opera || (event.button == 2))
        rightclick=true;
    if((rightclick)&&(curCell.tablenumber!=-1)) {
        var ids= curCell.cellid.split("r");
        if(ids.length==1)
            ids = curCell.cellid.split("l");
        if(ids.length<2) return true;
        if(!b_ie && !b_opera) {
            if (typeof event.preventDefault !== 'undefined') {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            if (typeof event.stopPropagation !== 'undefined') {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
            if(event.button==0) rightclick=false;    
        }
        return cellmenu(rightclick);
    }
    return true;
}

// Capture right click events
//if ((b_ie)||(b_opera))  
//    document.oncontextmenu = showCellMenu;
//else 
//    document.onclick = showCellMenu;

function URLencode(str) {
    var re;

        /* ibiencodeURIComponent */
        str=escape(str);
        str=str.replace(/%u/g,'%25u').replace(/%([89A-F])/g,'%25u00$1');
        str=unescape(str);
    str=encodeURIComponent(str);
    re = new RegExp("'","g");
    str = str.replace(re,'%27');
    return str;
}

function decodeHtmlEntity(str) {
    return str.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&#x([0-9A-Fa-f]+);/g, function(match, hex) {
      return String.fromCharCode('0x' + hex);
  });
}

function getRealColumn(mytable, col, checkVisualize)
{
    var i, numCols, rcol = -1;
    var mmytable = mytable;
    if(mytable.isRollUp) {
        mmytable = getMyTable(mytable.parent_table);
        while(mmytable.isRollUp) mmytable = getMyTable(mmytable.parent_table);
    }
    if(typeof(mmytable.grcCols[col])!="undefined") return(mmytable.grcCols[col]);

    if (checkVisualize) {
        var aCaptCurCol;
        for (i = 0, numCols = mmytable.n_cols; i < numCols; ++i) {
            aCaptCurCol = mmytable.a_capt[i];
            if (!aCaptCurCol.noprint) {
                ++rcol;
                if (aCaptCurCol.vis) ++rcol;
                if (aCaptCurCol.vispct) ++rcol;
                if (aCaptCurCol.haspro) ++rcol;
                if (rcol >= col) {
                    mmytable.grcCols[col] = i;
                    return i;
                }
            }
        }
    } else {
        for (i = 0, numCols = mmytable.n_cols; i < numCols; i++) {
            if(!mmytable.a_capt[i].noprint) rcol++;
            if(rcol == col){
                mmytable.grcCols[col]=i;
                return(i);
            }
        }
    }
    return -1;
}


function cellmenu(wasRightclick) {
    var ii=3;
    var item, i;
    var n_id = null;
    var MI_FT = [];
    var tn = curCell.tablenumber;
    if(tn==-1) return true;
    var mytable=getMyTable(tn);
    var index,infoObject;
    var num,text;
    var rightclick=false;
    if(curCell.cellid==null) return true;
    var id = curCell.cellid;
    var ids= id.split("r");
    if(ids.length==1)
        ids = id.split("l");
    if(ids.length<2) return true;
    var rowcol = ids[1].split("C");
    var col = rowcol[1]*1;
    var rows = rowcol[0].split(".");
    var row = rows[0]*1;
//    var grow = mytable.o_paging.c * mytable.o_paging.n + row;
    var grow = row;
    var rrow = mytable.a_f_body[grow][0];
    var href,rtn;
    var colval, scol, scolval, focCol;
    var ucol, encloseInParens;
    var menuops = mytable.a_cntl.menuops;
    var do_comments = menuops.comments;

    if(mytable.a_cont[rrow][col][DARAW]<0) return true;
    if((typeof(wasRightclick)=='undefined')||(wasRightclick==false)) {
        ucol = col;
        if(mytable.a_capt[col].orgCol>-1) ucol = mytable.a_capt[col].orgCol;
        if(mytable.o_look.styles!=null) {
            href = mytable.getHrefNode(mytable.o_look.styles,ucol,0);
            if(href != null) return true;
        }
        colval = mytable.IBs[mytable.a_cont[rrow][col][DASTR]]+'';
        colval = colval.substr(0,2);
        if(colval.toUpperCase() == '<A') return true;
    }
    if(typeof(mytable.a_capt[col].userFunc)!='undefined') {
        var plen = mytable.a_capt[col].userParm.length;
        var pval = [];
        for (i = 0; i < plen; i++) {
            pval[i] = mytable.IBs[mytable.a_cont[rrow][mytable.a_capt[col].userParm[i]][DARAW]];
        }
        if(plen==0) mytable.a_capt[col].userFunc();
        else if(plen==1) mytable.a_capt[col].userFunc(pval[0]);
        else if(plen==2) mytable.a_capt[col].userFunc(pval[0],pval[1]);
        return true;
    }
    //if(b_ios && (typeof(window.ibi_iPadMenu)!="undefined")) return true;
    MI_FT[0] = ["&nbsp;",null, null];
// multidrill down if any
    var target, args, url='', putline=false;

// col have to change to allow column moves by grid tool
        var dataOrigCol = mytable.a_capt[col].dataField;
    var si = mytable.a_cont[rrow];
    colval = mytable.IBs[si[dataOrigCol][DARAW]];

    if(colval.length>20) colval = colval.substr(0,20)+'...';
    //MI_FT[0][ii++]=[[colval],'SKIP',null];
    //MI_FT[0][ii++]=[[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null];
    rtn = tn;
    ucol = col;
    if(mytable.isRollUp) {
        rtn = mytable.parent_table;
        ucol = mytable.a_capt[col].orgCol;
    }
    var MDs = null;
    var stnode = mytable.getColumnStyle(col,rrow,0,si,'',col,'NODE');
    if(stnode.MDdrillindex!=null)
        MDs = MDitems[rtn][stnode.MDdrillindex];
    else
    if(mytable.a_capt[col].hasMultiDrill)
        MDs = MDitems[rtn][0];
    if((MDs!=null)&&(MDs.length)) {
        var Item;
        var menus = {};
        var menusIndex = {};
        var addTo;
        var formated = false;
        var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined');
        for (i = 0 ; i < MDs.length; i++)
        {
            if((MDs[i].col==-1) ||
                (MDs[i].col==10003)||
                (MDs[i].col==10004 && mytable.a_capt[col].isby)||
                (MDs[i].col==10005 && !mytable.a_capt[col].isby)||
                (getRealColumn(mytable,MDs[i].col-1) == ucol)) {
                text = MDs[i].text;
                putline=true;
                target='null';
                if(MDs[i].target!="") target='"'+MDs[i].target+'"';
                url = MDs[i].url;
                if(url=="field") {
                    scol = MDs[i].urlfield;
                    if (formated || mytable.a_capt[scol].type == IBIDATE) {
                        url = mytable.IBs[mytable.a_cont[rrow][scol][DASTR]];
                    } else {
                        url = mytable.IBs[mytable.a_cont[rrow][scol][DARAW]];
                    }
                }
                encloseInParens = /.alert$/.test(url);
				if(url)
                    if(url.substr(0,11)=="javascript:")
                        encloseInParens = true;
                if((typeof(MDs[i].args)!="undefined")&&(MDs[i].args.length>0)) {
                    for(var j=0; j<MDs[i].args.length;j++) {
                        if(MDs[i].args[j].col>-1) {
                            var formated2 = false;
                            if(MDs[i].args[j].formated)
                                formated2 = true;
                            if(mytable.isRollUp)
                                scol = getRollColumn(mytable,MDs[i].args[j].col);
                            else
                                scol = getRealColumn(mytable,MDs[i].args[j].col);
                            if (formated2 || mytable.a_capt[scol].type == IBIDATE) {
                                scolval = mytable.IBs[mytable.a_cont[rrow][scol][DASTR]];
                                if(htmlEncode)
                                    scolval = decodeHtmlEntity(scolval);
                            }
                            else
                                scolval = mytable.IBs[mytable.a_cont[rrow][scol][DARAW]];
                        } else
                        if(typeof(MDs[i].args[j].literal)!="undefined"){
                            scolval = MDs[i].args[j].literal;
                        } else {
                            formated2 = false;
                            if(MDs[i].args[j].formated)
                                formated2 = true;
                            scol = -1;
                            focCol = MDs[i].args[j].focCol;
                            if (!mytable.a_capt[0].isby) { --focCol; }
                            for (var jj = 0; jj < mytable.a_cntl.a_cols.length; jj++) {
                                if (focCol == mytable.a_capt[jj].focCol) {
                                    scol = jj;
                                    break;
                                }
                            }
                            if ((scol == -1) && (MDs[i].args[j].col == -1)) {
                                scol = MDs[i].args[j].focCol;
                            }
							if(scol>-1) {
                                if (formated2 || mytable.a_capt[scol].type == IBIDATE) {
                                scolval = mytable.IBs[mytable.a_cont[rrow][scol][DASTR]];
                                if(htmlEncode)
                                    scolval = decodeHtmlEntity(scolval);
                                }
								else
                                scolval = mytable.IBs[mytable.a_cont[rrow][scol][DARAW]];
                            }
                        }
                        url += (encloseInParens) ? "('" : MDs[i].args[j].name+'=';
                        if(typeof(scolval)=="undefined") scolval = '';
                        url += URLencode(scolval);
                        if (encloseInParens) { url += "')"; }
                        if(j+1<MDs[i].args.length) url += '&';
                    }
                } else {
					if(url)
                        url += (encloseInParens) ? "()":"";
                }
                addTo = MI_FT[0];
                ii = addTo.length;
                if((MDs[i].name) && (typeof menus[MDs[i].name] != "undefined"))
                    ii = menusIndex[MDs[i].name];

                if(MDs[i].parent) {
                    addTo = menus[MDs[i].parent];
                    ii = addTo.length;
                }

                if(typeof url == "undefined")
                    Item = [[text],null,{'ocv':'text','oc' : ''}];
                else
                    Item = [[text],null,{'ocv':'text','oc' : 'MDCall("'+url+'",'+MDs[i].type+','+target+')'}];
                if(text == "SEPARATOR")
                    Item = [[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null];
                addTo[ii] = Item;
                if(MDs[i].name) {
                    menus[MDs[i].name] = addTo[ii];
                    menusIndex[MDs[i].name] = ii;
                }
            }
        }
        if(putline)MI_FT[0][MI_FT[0].length] = [[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null];
    }
    if(do_comments && (typeof ibiNotes !== 'undefined')) {
//
      MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['comments']],null,{'ocv':'addnotes','oc' : 'ibiNotes.InsertNote('+curCell.tablenumber+',"'+curCell.cellid+'")'}];
    }

//    if(typeof(mytable.a_cont[rrow][col][DANOTE])!="undefined") 
//        MI_FT[0][ii++] = [[ibiMsgStr['shwnotes']],null,{'ocv':'shownotes','oc' : 'ShowNotes('+curCell.tablenumber+','+rrow+','+col+')'}];
    if(tn<MyTable.length) {
        MI_FT[0][MI_FT[0].length] = [[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null];
        MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['hlgv']],null,{'ocv':'hlgv','oc':'createCellFilter(1,'+curCell.tablenumber+','+col+','+rrow+')'}];
        var hl;
        if(mytable.a_cntl.dataReport) {
            hl = true;
            var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
            var workTable =    MyTable[dataReportIndex];
            if(workTable.a_all_cont[rrow]["$MarkedForHighLight$"]) hl = false;
        } else {
            hl = false;
            if((mytable.a_f_body[row][1]!=1)&&(mytable.a_f_body[row][1]!=3)) hl = true;
        }
        if(hl)
            MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['hlgr']],null,{'ocv':'hlgr','oc':'createCellFilter(2,'+curCell.tablenumber+','+col+','+row+')'}];
        else
            MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['hlgu']],null,{'ocv':'hlgu','oc':'createCellFilter(3,'+curCell.tablenumber+','+col+','+row+')'}];
        MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['hlga']],null,{'ocv':'hlgu','oc':'createCellFilter(4,'+curCell.tablenumber+','+col+','+rrow+')'}];
        MI_FT[0][MI_FT[0].length] = [[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null];
        MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['filterc']],null,{'ocv':'filterc','oc':'createCellFilter(0,'+curCell.tablenumber+','+col+','+rrow+')'}];
        if(mytable.cfilt.length)
            MI_FT[0][MI_FT[0].length] = [[ibiMsgStr['filtercr']],null,{'ocv':'filtercr','oc':'createCellFilter(0,'+curCell.tablenumber+',-1)'}];
    }
    var toolbr = d.getElementById(id);
    if(toolbr) {
        var MDmenu = ibiMenu.Menu(MI_FT,MP_CFT,null,mytable,null,null,id);
        ibiMenu.Showmenu(null,tn,MDmenu,MDmenu,true,0);
    }
    return false;
}

function getRollColumn(mytable,col)
{
    var ucol=-1,ucol2;
    if(mytable.isRollUp) {
        ucol2 = getRealColumn(mytable,col);
        ucol = -1;
        for(var l=0;l<mytable.a_capt.length;l++)
            if(mytable.a_capt[l].orgCol==ucol2) {
                ucol = l;
                break;
            }
    }
    return ucol;
}


function ibi_add_popmenu(mytable,col_num)
{
	if(mytable.deleted)
		return;
    if(mytable.a_cntl.MENUTYPE=='OFF') return;
    var MyMenus = [];
	var tn = mytable.a_cntl.table_number;
	var stn = mytable.a_cntl.org_t_number;
	var popicon2;

	if(mytable.isRollUp) {
		var ppmytable = getMyTable(mytable.parent_table);
		while(ppmytable.isRollUp) ppmytable = getMyTable(ppmytable.parent_table);
		stn = ppmytable.a_cntl.org_t_number;
	}


	if(typeof(col_num)!='undefined')
		if((b_ios && (typeof(window.ibi_iPadMenu)!="undefined"))||
			(mytable.fullScreenOn)) {
			ibi_iPadMenu.showMenu(mytable,col_num,MP_POP_R);
			return;
		}

//	var linecolor = mytable.a_cntl.menu.border?mytable.a_cntl.menu.border:'m0out'+stn;
	MI_POP=[];
	var n_cols = mytable.n_cols;
	if(n_cols==0) n_cols=1;
	for (i = 0; i < n_cols; i++) {
		id = 'popid' + tn + '_' + i;
		MyMenus[i]=[];
		MyMenus[i][0] = d.getElementById(id);
		popicon2 = ibiSkin.popicon;
		if(ibiSkin.iconsRemote) popicon2 = popicon2.replace('%col',mytable.a_cntl.a_cols[i].name);
		MI_POP[i] = [[popicon2, null,null]];
	}
	if(typeof(col_num)!='undefined') {
//		if(Events['onColumnSelect'].callback!=null)
//			Events['onColumnSelect'].callback(tn,col_num);
        if(mytable.a_cntl.enableNewGridBar)
            MI_POP[col_num] = generateMenuArray(mytable,popicon2,col_num,"column");
        else
        	MI_POP[col_num] = generateMenuArray(mytable,popicon2,col_num);
	}

	if(typeof(col_num) != 'undefined') {
		id = 'popid' + tn + '_' + col_num;
		popmenu(col_num,MyMenus[col_num][0],1,mytable,id);
	} else
	if(mytable.n_cols==0) {
		id = 'popid' + tn + '_0';
		if(MyMenus[0][0]!=null)
			popmenu(0,MyMenus[0][0],0,mytable,id);
	} else
	for (i = 0; i < mytable.n_cols; i++) {
		id = 'popid' + tn + '_' + i;
		if(MyMenus[i][0]!=null)
			popmenu(i,MyMenus[i][0],0,mytable,id);
	}
}

function generateMenuArray(mytable,icon,column,type) {
	var columnOnly = false;
	var globalOnly = false;
	if(typeof type != "undefined") {
		if(type == "global")
			globalOnly = true;
        if(type == "column")
            columnOnly = true;
	}
	var do_addfield = false;
	try {
		if(mytable.tableJson.settings.enableAddField)
			do_addfield = true;
	} catch(e) {

	}
    var menuops = mytable.a_cntl.menuops;
    var do_filter    = menuops.filter;
    var do_cal    = menuops.calc;
    var do_pag    = menuops.pagination;
    var do_freeze    = menuops.freeze;
    var do_hide    = menuops.hide;
    var do_export    = menuops.exporttable;
    var do_vis    = menuops.visualize;
    var do_chart    = menuops.chart;
    var do_sort    = menuops.sortcol;
    var do_windows    = menuops.window;
    var do_notes     = menuops.comments;
    var do_pivot    = menuops.pivot;
    var do_rollup    = menuops.rollup;
    var do_print    = menuops.print;
    var do_restore    = menuops.restore;
    var do_noprint     = menuops.menunoprint;
    var do_charttool = menuops.charttool;
    var do_gridtool = menuops.gridtool;
    var do_pivottool = menuops.pivottool;
    var do_accordion = menuops.accordion;

    var MI_POP = [[icon, null,null]];
    var item_count = 3;
    var i = column;
    var tn = mytable.a_cntl.table_number;
    var calc_count,pos;
    var norecords = true;
    var do_email, do_save, excelMenuString;
    var col = column;
    var jj,ck,v,btype,spot,spot2,hidearray,pagenum,offset, j;

    if(mytable.isRollUp) {
        var ppmytable = getMyTable(mytable.parent_table);
        while(ppmytable.isRollUp) ppmytable = getMyTable(ppmytable.parent_table);
    }

    if(mytable.org_capt!==null && (typeof mytable.org_capt[column] != "undefined"))
    	col = mytable.org_capt[column].new_pos;

    if(mytable.a_cont.length) norecords=false;

    if (mytable.a_cntl.cacheMode) {
        do_email = do_save = false;
        excelMenuString = ibiMsgStr['msex'];
    } else {
        do_email = menuops.sendemail;
        do_save = menuops.savechange;
        excelMenuString = ibiMsgStr['exx'];
    }

        if(mytable.a_cntl.menuops.fsappmode)
        if(!b_ie || b_ie_version>7) {
            var pmytable = mytable;
            if(mytable.isRollUp) {
                pmytable = getMyTable(mytable.parent_table);
            }
            if(pmytable.fullScreenOn)
                MI_POP[0][item_count++] = [[ibiMsgStr['ogv']],null,{'ocv':'ogv','oc' : 'ibi_iPadMenu.fullScreen('+pmytable.id+',true,false)'}];
            else
                MI_POP[0][item_count++] = [[ibiMsgStr['fsr']],null,{'ocv':'fsr','oc' : 'ibi_iPadMenu.fullScreen('+pmytable.id+',true,true)'}];
        }
        if(!globalOnly) {
        if((do_sort)&&(!norecords)) {
                MI_POP[0][item_count++] = [[ibiMsgStr['sas']], null, {
                    'ocv': 'sorta',
                    'oc': 'doSort(' + tn + ',' + i + ',false)'
                }];
                MI_POP[0][item_count++] = [[ibiMsgStr['sds']], null, {
                    'ocv': 'sortd',
                    'oc': 'doSort(' + tn + ',' + i + ',true)'
                }];
                MI_POP[0][item_count++] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
        }
        }

        if((do_filter)&&(!norecords)) {
    		if(!columnOnly) {
                if (!ibiStd.globalProps.unifiedFilter)
                if (EnableGlobalFilter)
                    MI_POP[0][item_count++] = [[ibiMsgStr['gblf']], null, {
                        'ocv': 'gblf',
                        'oc': 'MenuFilter(' + tn + ',-1,-1,1)'
                    }];
            }
            if(!globalOnly) {
                MI_POP[0][item_count] = [[ibiMsgStr['flt']], null, null];
            calc_count = 0;
            for (j = 0; j < a_filt_types.length; j++){
                    if (ibiStd.globalProps.unifiedFilter)
                        MI_POP[0][item_count][3 + calc_count] = [[a_filt_types[j][0]], null, {
                            'ocv': a_filt_types[j][1],
                            'oc': 'ibiFilterTool.showFilterTool(' + tn + ');ibiFilterTool.addFilter(' + tn + ',"' + mytable.a_cntl.a_cols[i].qualname + '",' + a_filt_types[j][1] + ')'
                        }];
                    else
                    MI_POP[0][item_count][3 + calc_count] = [[a_filt_types[j][0]], null, {
                        'ocv': a_filt_types[j][1],
                        'oc': 'MenuFilter(' + tn + ',' + i + ',' + a_filt_types[j][1] + ',0)'
                    }];
                calc_count++;
            }
            item_count++;
        }
		}
        if((do_cal)&&(!norecords)) {
    		if(!globalOnly) {
                MI_POP[0][item_count] = [[ibiMsgStr['cal']], null, null,
                [[ibiMsgStr['clr']],null,{'ocv':'clearcalc','oc' : 'clearCalc('+tn+','+i+')'}],
                [[ibiMsgStr['cla']],null,{'ocv':'clearcalcall','oc' : 'clearCalc('+tn+')'}],
                [[drawline(mytable.a_cntl.menubordercolor,mytable.a_cntl.menu.separator),null,null,true], 'SKIP',null]];
            calc_count = 0;
 
            if(mytable.a_capt[col].type == IBISTR)
                for (j in a_calc_typesSTR) {
                    if(j=='NONE') continue;
                    ck = 0;
                    v = mytable.a_capt[col][j];
                    if(v) 
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_typesSTR[j], 1], null, {
                                'ocv': 'clearcalc',
                                'oc': 'clearCalc(' + tn + ',' + col + ')'
                            }];
                    else
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_typesSTR[j]], null, {
                                'ocv': 'addcalc',
                                'oc': 'MenuCalc(' + tn + ',' + col + ',"' + j + '")'
                            }];
                    calc_count++;
                    } else if (mytable.a_capt[col].type == IBIDATE)
                for (j in a_calc_typesDATE) {
                    if(j=='NONE') continue;
                    ck = 0;
                    v = mytable.a_capt[col][j];
                    if(v) 
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_typesDATE[j], 1], null, {
                                'ocv': 'clearcalc',
                                'oc': 'clearCalc(' + tn + ',' + col + ')'
                            }];
                    else
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_typesDATE[j]], null, {
                                'ocv': 'addcalc',
                                'oc': 'MenuCalc(' + tn + ',' + col + ',"' + j + '")'
                            }];
                    calc_count++;
                    } else if (mytable.a_capt[col].type == IBINUM) {
                for (j in a_calc_types) {
                    if(j=='NONE') continue;
                    ck = 0;
                    v = mytable.a_capt[col][j];
                    if(v) 
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_types[j], 1], null, {
                                'ocv': 'clearcalc',
                                'oc': 'clearCalc(' + tn + ',' + col + ')'
                            }];
                    else
                            MI_POP[0][item_count][6 + calc_count] = [[a_calc_types[j]], null, {
                                'ocv': 'addcalc',
                                'oc': 'MenuCalc(' + tn + ',' + col + ',"' + j + '")'
                            }];
                    calc_count++;
                }
                ck =0;
                if(mytable.a_capt[col].vispct) ck=1;
                    MI_POP[0][item_count][6 + calc_count] = [[ibiMsgStr['pot'], ck], null, {
                        'ocv': 'togglevis',
                        'oc': 'togglevispct(' + tn + ',' + col + ')'
                    }];
            }
 
            item_count++;
        }
		}
        var coln = mytable.n_cols;
        var opn_paren = (document.dir==='rtl'?'\u202a(\u202b':'(');
        var cls_paren = (document.dir==='rtl'?'\u202a)\u202b':')');

        if((do_chart)&&(!norecords)) {
			if(!globalOnly) {
            var c;
            if (mytable.a_capt[col].type == IBINUM) btype = 'SUM';
            else btype = 'COU';
                MI_POP[0][item_count] = [[ibiMsgStr['crt']], null, null,
                [[ibiMsgStr['crtpie']],null,null],
                [[ibiMsgStr['crtline']],null,null],
                [[ibiMsgStr['crtcol']],null,null]];
            c = 3;
            if(mytable.a_capt[col].type != IBISTR) {
                c = 4;
                    MI_POP[0][item_count][6] = [[ibiMsgStr['crtscat']], null, null];
            }
            for (jj = 0; jj < c; jj++) {
                var ic = ibiMsgStr['crtgby'];
                if(jj==3) ic = ibiMsgStr['xaxis'];
                spot = 2;
                    MI_POP[0][item_count][3 + jj][3] = [[ic], 'SKIP', null];
                    MI_POP[0][item_count][3 + jj][4] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                for (j = 0; j < mytable.n_cols; j++) {
                        if ((!do_noprint && mytable.a_capt[j].noprint) || (mytable.a_capt[j].neverShow)) continue;
                        MI_POP[0][item_count][3 + jj][3 + (spot++)] = [[mytable.a_cntl.a_cols[j].name], null, {
                            'ocv': 'addchart',
                            'oc': 'ibiChart.makeChartItem(' + tn + ',' + jj + ',' + i + ',' + j + ',"' + btype + '")'
                        }];
                }
            }
            item_count++;
        }
		}

        if((do_rollup)&&(!norecords)) {
			if(!globalOnly) {
                MI_POP[0][item_count] = [[ibiMsgStr['crtroll']], null, null];
            spot = 2;
                MI_POP[0][item_count][3] = [[ibiMsgStr['crtgby'] + opn_paren + btype + cls_paren], 'SKIP', null];
                MI_POP[0][item_count][4] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
            for (j = 0; j < mytable.n_cols; j++) {
                    if ((!do_noprint && mytable.a_capt[j].noprint) || (mytable.a_capt[j].neverShow))continue;
                    MI_POP[0][item_count][3 + (spot++)] = [[mytable.a_cntl.a_cols[j].name], null, {
                        'ocv': 'addchart',
                        'oc': 'ibiChart.makeChartItem(' + tn + ',4,' + i + ',' + j + ',"' + btype + '")'
                    }];
            }

            item_count++;
        }
		}
        if((do_pivot)&&(!norecords)) {
			if(!globalOnly) {
                MI_POP[0][item_count] = [[ibiMsgStr['crtpivot']], null, null];
            for (jj = 0; jj < 4; jj++) {
                spot = 2;
                    MI_POP[0][item_count][3] = [[ibiMsgStr['crtpvt2'] + opn_paren + btype + cls_paren], 'SKIP', null];
                    MI_POP[0][item_count][4] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                    for (j = 0; j < mytable.n_cols; j++) {
                        if ((!do_noprint && mytable.a_capt[j].noprint) || (mytable.a_capt[j].neverShow)) continue;
                        if(coln>1) {
                            MI_POP[0][item_count][3 + (spot)] = [[mytable.a_cntl.a_cols[j].name], null, null];
                            spot2 = 2;
                            MI_POP[0][item_count][3 + (spot)][3] = [[ibiMsgStr['crtpvt1']], 'SKIP', null];
                            MI_POP[0][item_count][3 + (spot)][4] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                            for (var j1=0; j1 <mytable.n_cols;j1++) {
                                if ((!do_noprint && mytable.a_capt[j1].noprint) || (mytable.a_capt[j].neverShow)) continue;
                                if(j1!=j)
                                    MI_POP[0][item_count][3 + (spot)][3 + (spot2++)] = [[mytable.a_cntl.a_cols[j1].name], null, {
                                        'ocv': 'addchart',
                                        'oc': 'ibiChart.makeChartItem(' + tn + ',5,' + i + ',[' + j1 + ',' + j + '],"' + btype + '")'
                                    }];
                            }
                        } else 
                            MI_POP[0][item_count][3 + (spot)] = [[mytable.a_cntl.a_cols[j].name], null, {
                                'ocv': 'addchart',
                                'oc': 'ibiChart.makeChartItem(' + tn + ',5,' + i + ',[' + j + '],"' + btype + '")'
                            }];
                        spot++;
                    }
            }
            item_count++;
        }
		}
        if((!norecords) && (do_vis) && (mytable.a_capt[col].type == IBINUM)){
			if(!globalOnly) {
            ck=0;
            if(mytable.a_capt[col].vis) ck=1;
                MI_POP[0][item_count++] = [[ibiMsgStr['visual'], ck], null, {
                    'ocv': 'togglevis',
                    'oc': 'togglevis(' + tn + ',' + col + ')'
                }];
            }
        }
        if((do_hide)&&(mytable.n_cols>1)) {
			if(!globalOnly) {
            var haveHides = false;
                MI_POP[0][item_count++] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                MI_POP[0][item_count++] = [[ibiMsgStr['hdc']], null, {
                    'ocv': 'hide',
                    'oc': 'MenuHide(' + tn + ',' + i + ')'
                }];
            hidearray = setupHide(mytable);
            for (j = 0; j < mytable.n_cols; j++) {
                    if(hidearray[j]) haveHides=true;
            }
            if(haveHides) {
                    MI_POP[0][item_count] = [];
                    MI_POP[0][item_count] = [[ibiMsgStr['uhc']], null, {'ocv': 'hide', 'oc': 'MenuHide(' + tn + ',-1)'},
                    [[ibiMsgStr['uha']],null,{'ocv':'hide','oc' : 'MenuHide('+tn+',-1)'}]
                    ]; 
                spot = 4;
    
                var _j = 0, dataField;
                for (j = 0; j < mytable.n_cols; j++) {
                    if (hidearray[_j]) {
                        dataField = IGetOriginalDataField(mytable.a_capt[_j]);
                            MI_POP[0][item_count][spot++] = [[mytable.a_cntl.a_cols[dataField].name], null, {
                                'ocv': 'hide',
                                'oc': 'MenuHide(' + tn + ',' + dataField + ')'
                            }];
                    }
                    _j++;
                }
                item_count++;
            }
        }
		}

        if((do_freeze)&&(mytable.n_cols>1)) {
			if(!globalOnly) {
            if(mytable.freezeAble) {
                    MI_POP[0][item_count++] = [[ibiMsgStr['fzc']], null, {
                        'ocv': 'freeze',
                        'oc': 'MenuFreeze(' + mytable.a_cntl.table_number + ',' + column + ')'
                    }];
                    MI_POP[0][item_count++] = [[ibiMsgStr['ufa']], null, {
                        'ocv': 'freeze',
                        'oc': 'MenuFreeze(' + mytable.a_cntl.table_number + ',-1)'
                    }];
            } 
        }
		}
		if(!columnOnly) {
        if(mytable.a_cntl.subhead || mytable.a_cntl.subfoot || mytable.a_cntl.skipline) {
            if(mytable.showsubHF) 
                    MI_POP[0][item_count++] = [[ibiMsgStr['shead']], null, {
                        'ocv': 'hideheading',
                        'oc': Function('item', 'toggleheadings(' + mytable.a_cntl.table_number + ')')
                    }];
            else 
                    MI_POP[0][item_count++] = [[ibiMsgStr['hhead']], null, {
                        'ocv': 'hideheading',
                        'oc': Function('item', 'toggleheadings(' + mytable.a_cntl.table_number + ')')
                    }];
        }

            if (do_gridtool) MI_POP[0][item_count++] = [[ibiMsgStr['gridtool']], null, {
                'ocv': 'gridtool',
                'oc': 'ibiEditTools.DoGridTool(' + mytable.a_cntl.table_number + ')'
            }];
            if (do_charttool) MI_POP[0][item_count++] = [[ibiMsgStr['charttool']], null, {
                'ocv': 'charttool',
                'oc': 'ibiEditTools.DoChartTool(' + mytable.a_cntl.table_number + ')'
            }];
            if (do_pivottool) MI_POP[0][item_count++] = [[ibiMsgStr['pivottool']], null, {
                'ocv': 'pivottool',
                'oc': 'ibiEditTools.DoPivotTool(' + mytable.a_cntl.table_number + ')'
            }];
		if(do_addfield) {
                MI_POP[0][item_count++] = [[ibiMsgStr["addf"]], null, {
                'ocv': 'fieldtool',
                'oc': 'ibiEditTools.DoAddFieldTool(' + mytable.a_cntl.table_number + ')'
            }];
            }
        }

        if(!globalOnly) {
            if (do_addfield) {
                if (mytable.a_capt[column].addedField)
                    MI_POP[0][item_count++] = [[ibiMsgStr["edtf"]], null, {
					'ocv': 'fieldtool',
                        'oc': 'ibiEditTools.DoAddFieldTool(' + mytable.a_cntl.table_number + ',' + column + ')'
				}];
        }
		}

        if(!columnOnly) {
        if((do_pag)&&(!norecords)) {
                MI_POP[0][item_count++] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                MI_POP[0][item_count] = [[ibiMsgStr['shr']], null, null,
                    [[ibiMsgStr['dft']], null, {
                        'ocv': 'setpaging',
                        'oc': Function('item', 'doDefaultPaging(' + mytable.a_cntl.table_number + ')')
                    }]];
            pagenum = 5;
            offset = 5;
            pos = 4;
            var bl = mytable.a_f_body.length;
            while((pagenum<=60)&&(pagenum<=bl)) {
                    MI_POP[0][item_count][pos++] = [[pagenum + ' ' + ibiMsgStr['rect']], null, {
                        'ocv': 'setpaging',
                        'oc': Function('item', 'dosetPage(' + mytable.a_cntl.table_number + ',' + pagenum + ')')
                    }];
                pagenum = pagenum+offset;
                if(pagenum>=40) offset=10;
            }
                MI_POP[0][item_count++][pos] = [[ibiMsgStr['sha']], null, {
                    'ocv': 'setpaging', 'oc': function () {
                        mytable.setPaging(0);
                    }
                }];
        }  else
                MI_POP[0][item_count++] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
        }
            
        if(!columnOnly) {
        if(do_notes) {
                MI_POP[0][item_count++] = [[ibiMsgStr['comments']], null, null,
                    [[ibiMsgStr['snotes'], mytable.showNotes], null, {
                        'ocv': 'shownotes',
                        'oc': 'ToggleNotes(' + mytable.a_cntl.table_number + ')'
                    }],
                    [[ibiMsgStr['hsnotes'], mytable.hideNotesInd], null, {
                        'ocv': 'shownotes',
                        'oc': 'ToggleNotesInd(' + mytable.a_cntl.table_number + ')'
                    }]];
        }
        if(do_email && b_hasActiveX) 
                MI_POP[0][item_count++] = [[ibiMsgStr['xpem']], null, {
                    'ocv': 'sendemail',
                    'oc': 'ibiActiveX.EmailMe(' + tn + ')'
                }];
        if(do_save && b_hasActiveX) 
                MI_POP[0][item_count++] = [[ibiMsgStr['xsar']], null, {
                    'ocv': 'save',
                    'oc': 'ibiActiveX.Save_AR(' + tn + ')'
                }];
        if(do_export && (b_pda==false) && (!norecords)) {
                MI_POP[0][item_count++] = (mytable.a_cntl.cacheMode)
                                         ? [[ibiMsgStr['exp']], null,null,
                [[ibiMsgStr['exh']], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exporthtml', 'oc': function () {
                                    mytable.exportHTML(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exporthtml', 'oc': function () {
                                    mytable.exportHTML(true);
                                }
                            }]],
                [[ibiMsgStr['exc']], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exportcsv', 'oc': function () {
                                    mytable.exportCSV(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exportcsv', 'oc': function () {
                                    mytable.exportCSV(true);
                                }
                            }]],
                [[excelMenuString], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exportxml', 'oc': function () {
                                    mytable.exportXML(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exportxml', 'oc': function () {
                                    mytable.exportXML(true);
                                }
                            }]],
                [[ibiMsgStr['expdf']], null, null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exportpdf', 'oc': function () {
                                    mytable.exportPDF(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exportpdf', 'oc': function () {
                                    mytable.exportPDF(true);
                                }
                            }]]]
                                         : [[ibiMsgStr['exp']], null,null,
                [[ibiMsgStr['exh']], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exporthtml', 'oc': function () {
                                    mytable.exportHTML(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exporthtml', 'oc': function () {
                                    mytable.exportHTML(true);
                                }
                            }]],
                [[ibiMsgStr['exc']], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exportcsv', 'oc': function () {
                                    mytable.exportCSV(false);
                                }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exportcsv', 'oc': function () {
                                    mytable.exportCSV(true);
                                }
                            }]],
                [[excelMenuString], null,null,
                            [[ibiMsgStr['are']], null, {
                                'ocv': 'exportxml', 'oc': function () {
                                    mytable.exportXML(false);
        }
                            }],
                            [[ibiMsgStr['olr']], null, {
                                'ocv': 'exportxml', 'oc': function () {
                                    mytable.exportXML(true);
                                }
                            }]]];
            }
        }
        if(!columnOnly) {
        if(do_print && (b_pda==false) && (!norecords)) {
                MI_POP[0][item_count++] = [[ibiMsgStr['print']], null, null,
                    [[ibiMsgStr['are']], null, {
                        'ocv': 'exporthtml', 'oc': function () {
                            mytable.exportHTML(false, true);
                        }
                    }],
                    [[ibiMsgStr['olr']], null, {
                        'ocv': 'exporthtml', 'oc': function () {
                            mytable.exportHTML(true, true);
                        }
                    }]];
        }
        if((do_accordion)&&((mytable.a_cntl.Accordion) || (mytable.a_cntl.hierarchy && mytable.a_cntl.hierarchy.Expand))){
            var p = 3;
            if(mytable.AccordionIsOn) tacz = ibiMsgStr['tac']+' '+ibiMsgStr['tac2'];
            else tacz = ibiMsgStr['tac']+' '+ibiMsgStr['tac1'];
                MI_POP[0][item_count] = [[ibiMsgStr['acd']], null, null];
            if(typeof(mytable.a_cntl.hierarchy)=='undefined')
                    MI_POP[0][item_count][p++] = [[tacz], null, {
                        'ocv': 'switchaccordion', 'oc': function () {
                            mytable.toggleAccordion();
                        }
                    }];
            if((mytable.AccordionIsOn)|| (mytable.a_cntl.hierarchy && mytable.a_cntl.hierarchy.Expand)){
                    MI_POP[0][item_count][p++] = [[ibiMsgStr['exa']], null, {
                        'ocv': 'expandall', 'oc': function () {
                            mytable.expandAll();
                        }
                    }];
                    MI_POP[0][item_count][p] = [[ibiMsgStr['cpa']], null, {
                        'ocv': 'collapseall', 'oc': function () {
                            mytable.collapseAll();
                        }
                    }];
            }
            item_count++;
        }
        }

        if(!columnOnly) {
        if (do_windows && !mytable.isRollUp) {
                MI_POP[0][item_count] = [[ibiMsgStr['wt01']], null, null];
                MI_POP[0][item_count][3] = [[ibiMsgStr['wt03']], null, {
                    'ocv': 'switchtab',
                    'oc': 'switchTab(' + tn + ',"cascade")'
                }];
                MI_POP[0][item_count][4] = [[ibiMsgStr['wt02']], null, {
                    'ocv': 'switchtab',
                    'oc': 'switchTab(' + tn + ',"tab")'
                }];

            var nowin=true;
            var ii=0;
            for (j = 1; j < maxwindows; j++) {
                if((mytable.a_cntl.WindowDisplay!='tab')&&(pwn[j].minimized)&&((pwn[j].table_number == mytable.a_cntl.table_number)||
                    (pwn[j].table_number == -1))) {
                    if(nowin) {
                            MI_POP[0][item_count][ii + 5] = [[drawline(mytable.a_cntl.menubordercolor, mytable.a_cntl.menu.separator), null, null, true], 'SKIP', null];
                            MI_POP[0][item_count][ii + 6] = [[ibiMsgStr['Mini']], 'SKIP', null];
                    }
                        MI_POP[0][item_count][ii + 7] = [[pwn[j].title], null, {
                            'ocv': 'maxwin',
                            'oc': Function('item', 'maxwin(' + j + ')')
                        }];
                    ii++;
                    nowin=false;
                }
            }
            item_count++;
        }
        }

        if(mytable.a_cntl.usermenus) {
            var M=[];
            buildUserMenu(mytable.a_cntl.usermenus,M,0);
            for (j = 0; j < M.length; j++) {
            MI_POP[0][item_count] = CopyArray(M[j]);
                item_count++;
            }
        }
//p152147    if(MyTable.length>1) 
//p152147		MI_POP[0][item_count++] = [[ibiMsgStr['dtran'],ibiCompound.transEnable],null,{'ocv':'switchtrans','oc':'ToggleTrans('+mytable.a_cntl.table_number+')'}];
	if(!columnOnly) {
        if(mytable.a_cntl.refreshUrl) 
            MI_POP[0][item_count++] = [[ibiMsgStr['Refresh']], null, {
                'ocv': 'refreshurl',
                'oc': 'RefreshUrl(' + mytable.a_cntl.table_number + ')'
            }];
        if(!norecords && do_restore)
            MI_POP[0][item_count++] = [[ibiMsgStr['rso']], null, {
                'ocv': 'resettable',
                'oc': Function('item', 'resettable(item)')
            }];
    }

    return MI_POP;
}

function ToggleTrans(tn) {
    ibi_add_popmenu(getMyTable(tn));
    ibiCompound.transEnable = !ibiCompound.transEnable;
}


function ToggleNotes(tn)
{
    var mytable=getMyTable(tn);
    mytable.showNotes=!mytable.showNotes;
//    mytable.AddNotesArray();
    ibiGrid.show(false,mytable);
}

function ToggleNotesInd(tn)
{
    var mytable=getMyTable(tn);
    mytable.hideNotesInd=!mytable.hideNotesInd;
    ibiGrid.show(false,mytable);
}

function buildUserMenu(menus,M,offset)
{
    var sub;
    for(var j=0; j<menus.length; j++) {
        if(menus[j].submenu) sub = 1;
        else sub=0;
        M[j+offset]=[[menus[j].title], null,{'ocv':'processurl','oc' : 'processUrl("'+menus[j].url+'","'+menus[j].target+'")'}];
        if(menus[j].submenu) 
            buildUserMenu(menus[j].submenu,M[j+offset],3);
    }
}

function processUrl(url,target)
{
    var type = url.charAt(0);
    var what = url.substr(1);
    var deftarg;
    if(typeof(target)=="undefined") deftarg="_self";
    else deftarg=target;
    switch(type) {
        case 'U':
            if(what.length) open(what,deftarg);
            break;
        case 'J':
            if(what.length) eval(what);
            break;
        default:
            alert(url);
            break;
    }
}

function build_filtmenu(mytable,isglobal){
    var i, id, a_cols;
    var n_id = null;
    var tn = (isglobal) ? 0 : mytable.a_cntl.table_number;
    var MI_FT = [],win,pp,pp2;
 
    MI_FT[0] = [ibiMsgStr['add'],null, null];
    if(isglobal) {
        id = 'globalop';
        a_cols = global_a_cols;
        win =  ibiFilter.gfwin;
    } else {
        a_cols = mytable.a_cntl.a_cols;
        id = 'filtop' + tn;
        win = mytable.win;
    }
 
    var _i = 0;
    for(i=0;i<a_cols.length;i++){
        if(!isglobal)
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[i].noprint) continue;
        pp2 =a_cols[i].name;
        pp = [pp2,0,a_cols[i].dis]; 
        MI_FT[0][(3 + _i*1)] = [pp,null,{'ocv':'menufilter','oc' : 'MenuFilter('+tn+','+i+','+arConstants.FILTER_IN+','+isglobal+')'}];
        _i++;
    }
    if(pwn[win].fadd!=null) n_id = pwn[win].fadd;
    var toolbr = d.getElementById(id);
    if(toolbr) {
        var MP_copy = ibiStd.copyObject(MP_ADD);
        MP_copy[0].width = toolbr.offsetWidth;
        pwn[win].fadd = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,id);
    }
}
 

function gen_table_heading(header,id)
{
    var x = 0;
    var page = 1;
    var head = d.getElementById(id);
    var hstr = ''; 
    var h2str = '';
     var hl = header.length;
    if(head) {
        hstr = '<table width="100%" cellspacing="0" cellpadding="0"><tr>';
        while((x < hl) && (header[x][0] < page)) x++;
        while((x < hl) && (header[x][0] == page)) {
            if(h2str != '') h2str = h2str + '<\/tr><tr>';
            h2str = h2str+ header[x][1]; 
            x++;
        }
        hstr = hstr + h2str + '<\/tr>';
        head.innerHTML = hstr;
    }
}
 
function togglevispct(table_number,col)
{
    var mytable = getMyTable(table_number);
    mytable.togglevispct(col);
}
 
function togglevis(table_number,col)
{
    var mytable = getMyTable(table_number);
    mytable.togglevis(col);
}
 
function resettable(item)
{
    var mytable, i, numItems;
    if(typeof(item)!='object') 
        mytable = getMyTable(item);
    else mytable = item.mytable;
    switchTab(mytable.a_cntl.table_number,mytable.a_cntl.save_WindowDisplay);
    if(typeof(ibiFilter)!="undefined") {
        if(typeof(ibiFilter.clearFilterForm)=="function")ibiFilter.clearFilterForm(mytable.a_cntl.table_number);
        if(typeof(ibiFilter.clearFilterForm)=="function")ibiFilter.clearFilterForm(-1);
    }
    if(!mytable.isRollUp) {
        for(i = 1; i < maxwindows; i++) {
            if(pwn[i].table_number==mytable.a_cntl.table_number) {
                closewin(i);
                initwindows(i);
            }
        }
    }
    mytable.clearSelection();
    mytable.n_freeze_column = mytable.save_n_freeze_column;
    mytable.n_freeze_column_before_hide = mytable.save_n_freeze_column_before_hide;
    mytable.n_rows = mytable.save_n_rows;
    mytable.o_paging.n = mytable.save_o_paging_n;
    mytable.o_paging.c = 0;
    mytable.AccordionIsOn = mytable.a_cntl.Accordion;
    mytable.isEmptyReport = false;
    delete mytable.tdg_props;

    if (mytable.a_cntl.cacheMode && mytable.a_sort.length) {
        var j, cols, col, sortOrder;
        if (mytable.bykeys) {
            mytable.a_sort = [];
            cols = T_capt[mytable.id];
            for (i = cols.length - 1, j = 0; i >= 0; --i) {
                col = cols[i];
                if (col.isby) {
                    sortOrder = (col.orow === arConstants.OROW_HIGH ||
                                 col.orow === arConstants.OROW_HIGH_NOPR) ? 1 : 0;
                    mytable.a_sort[j++] = { 'n_col': i, 'b_ord': sortOrder };
                }
            }
            mytable.callSort(false);
        } else {
            alert(ibiMsgStr['restOrgMsg']);
        }
    }

    mytable.a_sort = [];
    mytable.top_aggregate = mytable.save_top_aggregate;
    mytable.bottom_aggregate = mytable.save_bottom_aggregate;
    mytable.a_capt = mytable.copyObject(mytable.restore_a_capt);
    for (i = 0, numItems = mytable.a_capt.length; i < numItems; i++) {
        if(mytable.a_capt[i].noprint) mytable.a_capt[i].b_hide=true;
    }
    if (mytable.a_cntl.Accordion) { mytable.calcType=2; }
    if (typeof(mytable.chartOrgHidden)!="undefined") {
        for (i = 0, numItems = mytable.chartOrgHidden.length; i < numItems; i++) {
            mytable.a_capt[i].b_hide = mytable.chartOrgHidden[i];
        }
    } else { mytable.calcType = 0; }
    mytable.showsubHF = true;
    mytable.filt = [];
    mytable.sfilt=[];
    mytable.cfilt=[];
    mytable.chfilt=[];
    //mytable.apfilt=[];
    mytable.a_col_filter=[];
    if(mytable.org_capt!=null) {
        mytable.a_capt = mytable.org_capt;
        mytable.bykeys = mytable.org_bykeys;
    }
    IinitBody(mytable);
    mytable.org_capt = null;
    mytable.org_bykeys = null;
    mytable.groupSort = false;
    mytable.sublevel = mytable.savesublevel;
    for (i = 0, numItems = mytable.NotesToSet.length; i < numItems; i++) {
        mytable.a_cont[mytable.NotesToSet[i][1]][mytable.NotesToSet[i][2]][DANOTE] = [];
    }
//    mytable.NotesToSet = mytable.saveNotesToSet;
    mytable.NotesToSet = [];
    for(i = 0; i < ibiCompound.chartFilters.length; i++) {
        if(ibiCompound.chartFilters[i].obj.compoundFilter) {
            ibiCompound.chartFilters[i].obj.setValuesFromDefault();
        } else
        if(!ibiCompound.chartFilters[i].obj.deleted)
            ibiCompound.chartFilters[i].deleteFilter();
    }
    mytable.filterChange = true;
    mytable.collapseAll();
    //mytable.f_show(); done by collapseall;

}

 
function doDefaultPaging(item)
{
    if(typeof(item)!='object') {
        var mytable = getMyTable(item);
        mytable.setPaging(mytable.a_cntl.MP_LINE_COUNT);
    }
    else
    item.mytable.setPaging(item.mytable.a_cntl.MP_LINE_COUNT);
}
 
function setupHide(mytable)
{return mytable.returnHideTable();}

function dosetPage(item,num)
{
    if(typeof(item)!='object') {
        var mytable = getMyTable(item);
        mytable.setPaging(num);
    }
    else
    item.mytable.setPaging(num);
}

function toggleheadings(item)
{
    var mytable;
    if(typeof(item)!='object') {
        mytable = getMyTable(item);
    } else mytable = item.mytable;
    if(mytable.showsubHF==true)
        mytable.showsubHF=false;
    else 
        mytable.showsubHF=true;
    ibiGrid.show(false,mytable);
}
 
function getfreewin(x,y)
{
    var i = 1;
    var useX=-1,useY=-1;
    if((typeof(x)!='undefined')&&(x>-1)) useX = x;
    if((typeof(y)!='undefined')&&(y>-1)) useY = y;
    while((i < maxwindows)&&(pwn[i].name != null)) i++;
    if (i < maxwindows) {
        var xOffset, yOffset;
        if (typeof window.pageXOffset !== "undefined") {
            xOffset = window.pageXOffset;
            yOffset = window.pageYOffset;
        } else {
            var docBodyParent = document.body.parentElement;
            if (docBodyParent) {
                xOffset = docBodyParent.scrollLeft;
                yOffset = docBodyParent.scrollTop;
            } else {
                xOffset = yOffset = 0;
            }
        }
        //winLastX = winLastX+20;
        //winLastY = winLastY+20;
        if(pwn[i].dobj==null) setUpNewWindow(i);
        //if (b_ie || b_opera) {
        pwn[i].xpos = winLastX + xOffset;
        pwn[i].ypos = winLastY + yOffset;
        //} else {
            //pwn[i].xpos = winLastX+window.scrollX;
            //pwn[i].ypos = winLastY+window.scrollY;
        //}
        if(useX>-1) pwn[i].xpos = useX;
        if(useY>-1) pwn[i].ypos = useY;

        pwn[i].dobj.style.zIndex = dragObj.zIndex;
        return(i);
    }
    return(-1);
}
 
function findwin(name)
{
    for(var i=1;i<maxwindows;i++)
        if(pwn[i].name==name) return(i);
    return(-1);
}
 
function setwin(win_num,name,table_number,type,title,size)
{
    pwn[win_num].name = name;
    pwn[win_num].table_number = table_number;
    pwn[win_num].chartinfo.table_number = table_number;
    pwn[win_num].type = type;
    pwn[win_num].title = title;
    if(size) {
        pwn[win_num].dobj.style.width = size.width+'px';
    }
}

function getMyTable(tn) {
    //if(tn>=MyTable.length) return RMyTable[tn-MyTable.length];
    //else 
    return MyTable[tn];
}

function toggleWindowsVisibility(visible) {
   // The visible parameter has a CSS value of visible or hidden
   // this function hides the graph windows.
    if ((visible != "hidden") && (visible != "visible"))
        return;
    var pwn_length=pwn.length;
    var isblock = 'block';
    if(visible == 'hidden') isblock = 'none';
    for (var index=0;index<pwn_length;index++) {
        if(pwn[index].type!=typenone) {
            pwn[index].dobj_a.style.display = isblock;
            pwn[index].dobj.style.display = isblock;
        }
    }

}

 
function minwin(win_num)
{
    var tn,mytable;
    ibiMenu.Hidemenu();
    pwn[win_num].dobj_a.style.display = 'none';
    pwn[win_num].dobj.style.display = 'none';
    if(pwn[win_num].table_number!=-1) {
        tn = pwn[win_num].table_number;
        mytable = getMyTable(tn);
        if(mytable.a_cntl.WindowDisplay=='tab') return;
        ibiGrid.show(false,mytable);
    }
    pwn[win_num].minimized = true;
    if(win_num!=0)buildminwin();
}

function winToDiv(win,target)
{
    if(pwn[win].isNotWindow) return pwn[win].obj;
    pwn[win].parentObj = pwn[win].dobj.parentNode;
    var obj = pwn[win].parentObj.removeChild(pwn[win].dobj);
    pwn[win].obj = obj;
    pwn[win].isNotWindow = true;
    pwn[win].divPosition = obj.style.position;
    pwn[win].divTop = obj.style.top;
    pwn[win].divLeft = obj.style.left;
    
    obj.style.position = "absolute";
    obj.style.top = "0px";
    obj.style.left = "0px";
    obj.style.width = target.style.width;
    obj.style.height = target.style.height;
    target.appendChild(obj);
    return obj;
}

function divToWin(win)
{
    var obj = pwn[win].dobj;
    pwn[win].isNotWindow = false;
    if(pwn[win].dobj.parentNode) pwn[win].dobj.parentNode.removeChild(obj);
    obj.style.position = pwn[win].divPosition;
    obj.style.top = pwn[win].divTop;
    obj.style.left = pwn[win].divLeft;
    obj.style.display = "block";
    pwn[win].parentObj.appendChild(obj);
}
 
function maxwin(win_num,noresize)
{
	    var tn,mytable,m1,z;
    ibiMenu.Hidemenu();
    if(pwn[win_num].wtitle && pwn[win_num].type != typechart && pwn[win_num].type != typepivot) {
       pwn[win_num].dobj_t.style.display = 'block';
    }
    pwn[win_num].dobj_a.style.display = 'block';
    pwn[win_num].dobj.style.display = 'block';
    var zIndex = 0;
    if(pwn[win_num].dobj.style.zIndex)
        zIndex=(pwn[win_num].dobj.style.zIndex*1);
    for(var i = 0; i < maxwindows; i++)
        if((i!=win_num)&&(pwn[i].dobj)) {
            if(pwn[i].dobj.style.zIndex) {
                z = pwn[i].dobj.style.zIndex * 1;
                if (z >= zIndex) {
                    zIndex = z + 1;
                }
            }
        }
    dragObj.zIndex = zIndex;
    pwn[win_num].dobj.style.zIndex = zIndex;
    pwn[win_num].minimized = false;
    if(noresize) return;
    if(pwn[win_num].table_number!=-1) {
        tn = pwn[win_num].table_number;
        mytable = getMyTable(tn);
        if(mytable.a_cntl.WindowDisplay=='tab' && 
            pwn[win_num].type != typefiltersel &&
            pwn[win_num].type != typeechart) return;
    }
    if(pwn[win_num].type==typefiltersel) m1 = d.getElementById('FiltSel'+win_num).offsetWidth+'px';
    else
    if(pwn[win_num].type==typefilt) m1 = d.getElementById('FiltTable'+win_num).offsetWidth+'px';
    else
    if(pwn[win_num].type==typegbl) m1 = d.getElementById('FiltTable'+win_num).offsetWidth+'px';
    else
    if(pwn[win_num].type==typecols) m1 = d.getElementById('gridtoolt'+win_num).offsetWidth+'px';
    else
    if(pwn[win_num].type==typefield)// m1 = d.getElementById('fieldtoolt'+win_num).offsetWidth+'px';
    	m1 = "400px";
    else
    if(pwn[win_num].type==typeechart) m1 = d.getElementById('charttoolt'+win_num).offsetWidth+'px';
    else
    if(pwn[win_num].type==typeepivot) m1 = d.getElementById('pivottoolt'+win_num).offsetWidth+'px';
    else    
    if((pwn[win_num].type==typepmt)||
         (pwn[win_num].type==typenotes))m1 = d.getElementById('PromptTable'+win_num).offsetWidth+'px';
    else {
        m1=pwn[win_num].dobj_b.style.width;
    }
    pwn[win_num].dobj_b.style.width=m1;
    pwn[win_num].dobj_e.style.width=m1;
    pwn[win_num].dobj_t.style.width=m1;
    pwn[win_num].dobj_m.style.width=m1;
    pwn[win_num].dobj_a.style.width=m1;
    pwn[win_num].dobj.style.width  =m1;
    pwn[win_num].minw = 300;
    if(win_num!=0)buildminwin();
}
 
function closewin(win_num)
{
    var tn=pwn[win_num].table_number;
    var reset = false;
    var mytable;
    ibiMenu.Hidemenu();
    switch(pwn[win_num].type) {
       case typefilt:
          if(typeof(ibiFilter.clearFilterForm)=="function")ibiFilter.clearFilterForm(tn,true);
          break;
       case typegbl:
          if(typeof(ibiFilter.clearFilterForm)=="function")ibiFilter.clearFilterForm(-1,true);
          break;
       case typepmt:
          if(typeof(ibiActiveX)!="undefined")ibiActiveX.Prompts.win = -1;
          break;
       case typenotes:
          if (typeof ibiNotes !== 'undefined') {
             ibiNotes.NotesWindows[pwn[win_num].name]=null;
          }
          break;
    }
    if(tn>-1) {
        mytable = getMyTable(tn);
        if(mytable.isRollUp) {
            mytable = getMyTable(mytable.parent_table);
        }
        ibiIosGrid.closeTab(mytable,pwn[win_num].appTab);
        switch (pwn[win_num].type) { // what about ecwin ??
           case typecols:
              mytable.gtwin = -1;
              break;
           case typeepivot:
              mytable.ptwin = -1;
              break;
           case typeechart:
              mytable.ctwin = -1;
              break;
        }
    }
	if(pwn[win_num].closeCallback) {
        pwn[win_num].closeCallback();
        delete pwn[win_num].closeCallback;
	}
    if(pwn[win_num].isNotWindow) divToWin(win_num);
    pwn[win_num].dobj_b.innerHTML = blankdot;
    pwn[win_num].dobj_t.innerHTML = blankdot;
    pwn[win_num].dobj_t.style.display = "block"; // for casade->tabs->cascade
    pwn[win_num].dobj_m.innerHTML = blankdot;
    pwn[win_num].dobj_e.innerHTML = blankdot;
    pwn[win_num].dobj_e.style.display = "block"; // for cascade->tabs->cascade
    pwn[win_num].dobj.style.top = '0px';
    pwn[win_num].dobj.style.left = '0px';
    pwn[win_num].dobj_b.style.height  = '';
    pwn[win_num].dobj_a.style.display = 'none';
    pwn[win_num].dobj.style.display = 'none';
    pwn[win_num].name    = null;
    pwn[win_num].type    = typenone;
    pwn[win_num].chartinfo.saveable.y_cols    = null;
    pwn[win_num].chartinfo.saveable.x_cols    = null;
    delete pwn[win_num].chartinfo.saveable.org_ctype;
    delete pwn[win_num].chartinfo.saveable.org_fusionChart;
    delete pwn[win_num].chartinfo.saveable.org_ibiChart;
    pwn[win_num].chartinfo.xars    = null;
    pwn[win_num].chartinfo.yars    = null;
    pwn[win_num].chartinfo.saveable.ctype    = -1;
    pwn[win_num].chartinfo.saveable.btype    = -1;
    pwn[win_num].minimized  = false;
    pwn[win_num].table_number = -1;
    pwn[win_num].chartinfo.table_number = -1;
    pwn[win_num].chartinfo.saveable.linked    = true;
    pwn[win_num].chartinfo.saveable.size    = 0;
    pwn[win_num].ftm    = [];
    pwn[win_num].ftp    = [[],[]];
    pwn[win_num].chartinfo.tcapt    = null;
    pwn[win_num].chartinfo.tcont    = null;
    pwn[win_num].chartinfo.tlook    = null;
    pwn[win_num].chartinfo.tcntl    = null;
    pwn[win_num].chartinfo.newpres    = null;
    pwn[win_num].chartinfo.newslide= null;
    pwn[win_num].chartinfo.pptGraph= null;
    pwn[win_num].chartinfo.newEx    = null;
    pwn[win_num].chartinfo.newEXGraph = null;
    pwn[win_num].chartinfo.newDoc    = null;
    pwn[win_num].chartinfo.newGraph= null;
    pwn[win_num].chartinfo.wdGraph    = null;
    pwn[win_num].chartinfo.saveable.pvcol    = -1;
    if(pwn[win_num].chartinfo.cfilt.length) reset=true;
    pwn[win_num].chartinfo.cfilt = [];
    pwn[win_num].chartinfo.c_col_filter=[];
    pwn[win_num].roll_tnumber = -1;
    delete pwn[win_num].callback;
    setwinpos(win_num,0,0);
    buildminwin();
    if(tn>-1) {
        mytable = getMyTable(tn);
        if(reset) {
            mytable.redrawCharts = true;
            ibiGrid.show(false,mytable);
        }
        if(mytable.a_cntl.WindowDisplay!='cascade') {
            var ctab = -1;
            if(win_num!=mytable.currTab) ctab = mytable.currTab;
            displayTab(mytable.a_cntl.WindowDisplay,tn,ctab);
        }
    }
}
 
function setwinpos(win_num,xpos,ypos)
{
    pwn[win_num].xpos = xpos;
    pwn[win_num].ypos = ypos;
}



function moveArray(Ar,cell,newpos)
{
    var newAr=[];
    var c = Ar[cell];
    var al = Ar.length;
    var nl = 0;
    for(var i=0; i<al; i++) {
        if(newAr.length==newpos) newAr[nl++]=c;
        if(i!=cell) newAr[nl++]=Ar[i];
    }
    if(nl<al) newAr[nl++]=c;

    return newAr;
}

function locateArray(Ar,value)
{
    var x=0;
    var al = Ar.length;
    while(x<al){
        if(Ar[x]==value) return(x);
        x++;
    }
    return(-1);
}
 

 


function getPn(win_num,t_num) {
    if(win_num>-1) return pwn[win_num].chartinfo;
    else return MyTable[t_num].chartinfo;
}

function drawRollTable(a,did,capt,cont,look,cntl,p_num,heading,win,ibs,isBytoc,ctype)
{
    var dobj, j, numCapt;
    if(typeof(did)=='object') dobj=did;
    else dobj=d.getElementById(did);
    var t_num = MyTable.length;
    var nt_num = MyTable.length;
    var mytable =  getMyTable(p_num);
    if(mytable.useRoll) {
        t_num = mytable.id;
    } else
    if(!isBytoc) {
        if(pwn[win].roll_tnumber == -1) 
            pwn[win].roll_tnumber = t_num;
        else
            t_num = pwn[win].roll_tnumber;
    }    
    var oRollup = getMyTable(t_num);
     // cntl.table_number = MyTable.length;
    if(!mytable.useRoll) {
        cntl.MENUTYPE = 'POPUP';
        cntl.menuops.freeze = false;
        cntl.menuops.chart = false;
        cntl.menuops.filter = false;
        if((!isBytoc) && (ctype!=6)) {
            cntl.table_number = t_num;
            if((typeof(mytable.a_cntl.useDefaultHeading)!="undefined") && (!mytable.a_cntl.useDefaultHeading)) 
                cntl.heading = mytable.a_cntl.heading;
            else
                cntl.heading = [[{'colspan':'','exClass':'','align':'','valign':'','bcolor':'#FFFFFF','wrap':' ','style':'',
                      'color':'#000000','font':'DEFAULT-FIXED','size':'14','name':'<TT>'+heading+'<\/TT>'}]];
        }else
            cntl.table_number = MyTable.length;
        cntl.subhead = null;
        cntl.subfoot = null;
        cntl.skipline = null; 
        cntl.subtotal = null;
        cntl.acheading = null;
        cntl.grandtotal = null;
        cntl.tablefoot = null;
        cntl.Accordion = false;
        cntl.NumRecords = cont.length;
        //if(ctype!=6)cntl.status = 2;
        var acdlist = null;
        var acdtree = null;
        var wehave=[];
        if(isBytoc) {
            acdlist=[];
            look.params = [1,1,0];
            var cl = cont.length;
            for(var i=0; i < cl; i++) {
                var cl1 = cont[i].length;
                for (j = 0; j < cl1; j++) {
                    a = cont[i][j][DAACD];
                    if(typeof(a)=='string') {
                        if(!wehave[a])acdlist[acdlist.length]=a;
                        wehave[a]=true;
                    }
                }
            }
            //alert(acdlist);
            cntl.Accordion = true;
        }

        if(ctype!=6) {
            cntl.MP_COL_COUNT = cont[0].length;
            look.freeze_column=0;
            var hadCalc=false,cDcols=[],cTypes=[],cDtypes=[],cCols=0;
            if(typeof(oRollup)!='undefined'){
                var oCapt,cColx=-1,oCols=oRollup.a_capt.length;
                for(var oCol=0;oCol<oCols;oCol++){
                    oCapt = oRollup.a_capt[oCol];
                    if(true == oCapt.hascalc){
                        hadCalc = true;
                        cDcols[++cColx] = oCapt.orgCol;
                        cDtypes[ cColx] = oCapt.type;
                        for(ct in a_calc_types){
                            if(oCapt[ct]!=0){
                                cTypes[cColx]=ct;
                                break;
                            }
                        }
                    }
                }
                if(hadCalc==true) cCols = cDcols.length;
            }
            for (j = 0, numCapt = capt.length; j < numCapt; j++){
                capt[j].popmenu = '<div id="popid'+t_num+'_'+j+'"><\/div>';
                if(hadCalc==true){
                    for(var cCol=0;cCol<cCols;cCol++){
                           if(capt[j].orgCol==cDcols[cCol] && capt[j].type==cDtypes[cCol]){
                              capt[j].hascalc=true;
                              capt[j][cTypes[cCol]]=1;
                           }
                    }
                }
            }
        }else{
            for (j = 0, numCapt = capt.length; j < numCapt; j++) {
                capt[j].popmenu = '<div id="popid'+p_num+'_'+j+'"><\/div>';
            }
        }

        if (!oRollup || !oRollup.resizing) {
            if (typeof (oRollup) == 'undefined')
                MyTable[t_num] = new TTable(capt, cont, look, cntl, getMyTable(p_num).o_look.styles, true, ibs, acdtree, acdlist);
            else
                MyTable[t_num] = new TTable(capt, cont, look, cntl, getMyTable(p_num).o_look.styles, true, ibs, acdtree, acdlist, null, null, t_num, true);
        }

        if (typeof mytable.newCacheStrFile != "undefined") {
            MyTable[t_num].newCacheStrFile = mytable.newCacheStrFile;
        }
        if (typeof mytable.cacheString != "undefined") {
            MyTable[t_num].cacheString = mytable.cacheString;
        }
        mytable = MyTable[t_num];
           mytable.useLayout = MyTable[p_num].useLayout;
        mytable.parent_table = p_num;
        mytable.cacheFile = mytable.cacheFile+'r'+t_num;
        mytable.haveFilters = false;
        if(win>-1)
            pwn[win].mytable = mytable;
        if(!isBytoc)dobj.style.overflow = 'auto';
        if(mytable.a_cntl.hoverbackcolor) mytable.o_color.hovered = mytable.a_cntl.hoverbackcolor;
        if(mytable.a_cntl.selectcolor) mytable.o_color.marked = mytable.a_cntl.selectcolor;
        if(mytable.o_color.hovered)
            mytable.s_light = ' onmouseover="ibiGrid.mouseover('+mytable.id + ',this)" onmouseout="ibiGrid.mouseout('+mytable.id + ',this)"';
        if (mytable.o_color.marked) 
             mytable.s_click = ' onclick=MyTable[' + mytable.id + '].M(this)';
        //mytable.M = IExeMark;
    } else {
        mytable.haveFilters = false;
        mytable.a_all_cont = cont;
        mytable.a_cntl.NumRecords = cont.length;
        mytable.n_rows = cont.length;
        
        for(i=0; i < mytable.a_capt.length;i++) {
            mytable.a_capt[i].SdataField = mytable.a_capt[i].dataField;
            mytable.a_capt[i].dataField = i;
        }
        IinitBody(mytable);
        mytable.a_cntl.reportView = REPORTGRID;
    }
    if(ctype!=6) {
        dobj.innerHTML = '<div id=ISpan_' + mytable.id + '><\/div><div id=ISpan2_'+ mytable.id + '><\/div>';
        mytable.o_main    = d.all ? d.all['ISpan_'  + mytable.id] : d.getElementById('ISpan_'  + mytable.id);
        mytable.o_main2 = d.all ? d.all['ISpan2_' + mytable.id] : d.getElementById('ISpan2_' + mytable.id);
        if(win>-1)maxwin(win,true);
        ibiGrid.show(false,mytable);
        return t_num;
    }
    return nt_num;
}

function popmenu(colnum,id,do_real,mytable,did)
{
    var menu_pos = ((document.dir=='rtl')?MP_POP_R:MP_POP_L);
    var menu_items,pos,tbl;

    if(do_real!=0) {
        tbl = d.getElementById('IWindowBody'+ mytable.id);
        pos = findPosX(id);
        if(tbl && (pos > 360) && ((findPosX(id)+360) > tbl.offsetParent.offsetWidth) &&
          (tbl.offsetWidth>400 || document.dir=='rtl'))  menu_pos = ((document.dir=='rtl')?MP_POP_L:MP_POP_R);
    }
    if(id) {
        menu_items = MI_POP[colnum];
        if(do_real == 0) ibiMenu.Menu(menu_items,menu_pos,id,mytable,1,colnum,did);
        else ibiMenu.Menu(menu_items,menu_pos,id,mytable,0,colnum,did);
    } 
}
 
function findPosX(obj)
{
    var curleft = 0;
    if (obj.offsetParent)
        while (obj.offsetParent)
        {
            curleft += obj.offsetLeft;
            obj = obj.offsetParent;
        }
    else if (obj.x)
        curleft += obj.x;
    return curleft;
}
 
function findPosY(obj)
{
    var curtop = 0;
    if (obj.offsetParent)
        while (obj.offsetParent)
        {
            curtop += obj.offsetTop;
            obj = obj.offsetParent;
        }
    else if (obj.y)
        curtop += obj.y;
    return curtop;
}
 
function MenuFreeze(tn,j){
    if(j==-1) ibiGrid.freezeColumns(tn,0);
    else ibiGrid.freezeColumns(tn,j*1+1);
}
 
function MenuFilter(tn, i, filterType, isglobal) {
    var mytable = getMyTable(tn);
    var is_selectbox = true;
    if (i != -1) {
        if ((mytable.a_capt[i].type == IBISTR)   || 
            (filterType == arConstants.FILTER_CONTAIN_CS) ||
            (filterType == 2) || /* obsolete code-value ?? */
            (filterType == arConstants.FILTER_CONTAIN)    ||
            (filterType == arConstants.FILTER_OMIT_CS)    ||
            (filterType == arConstants.FILTER_OMIT) ) {
            is_selectbox = false;
        }
    }
    if(isglobal)
        ibiFilter.globalfilt(tn);
    else
        ibiFilter.localfilt(tn);

    if (i != -1) {
        ibiFilter.add_col_to_filter(i, filterType, tn, is_selectbox, 0, isglobal);
    }
}
 
function MenuCalc(tn,i,j,doclear){
    var mytable=getMyTable(tn);
    if((mytable.a_cntl.WindowDisplay=="tab")&&(mytable.a_cntl.table_div.viewPortType=='FLOWING')) {
        mytable.redrawCharts = true;
    }
    mytable.setAggregate(i,j,mytable.a_cntl.CALC_POSITION);
}
 
function MenuHide(tn,i){
    var mytable = getMyTable(tn);
    var hidearray = setupHide(mytable);
    if((mytable.a_cntl.WindowDisplay=="tab")&&(mytable.a_cntl.table_div.viewPortType=='FLOWING')) {
        mytable.redrawCharts = true;
    }
    if (i == -1) {
        mytable.changeColumnVisibility(-1, false, null, hidearray);
    } else {
        var j = in_col=IGetDataField(mytable.a_capt,i);
        if(hidearray[j])
            mytable.changeColumnVisibility(i,false);
        else
            mytable.changeColumnVisibility(i,true);
    }
}
 

 
function doSort(tn,i,j)
{
    var mytable = getMyTable(tn);
    if((mytable.a_cntl.WindowDisplay=="tab")&&(mytable.a_cntl.table_div.viewPortType=='FLOWING')) {
        mytable.redrawCharts = true;
    }
    mytable.groupSort=false;
    mytable.exeSort(i,j);
}
 
function clearCalc(tn,colnum){
    var mytable = getMyTable(tn);
    if((mytable.a_cntl.WindowDisplay=="tab")&&(mytable.a_cntl.table_div.viewPortType=='FLOWING')) {
        mytable.redrawCharts = true;
    }
    if(typeof(colnum)=='undefined') {
        mytable.setAggregate(-1);
         for(var i=0; i < mytable.a_capt.length; i++)
             if(mytable.a_capt[i].vispct) togglevispct(tn,i);
    } else {
        mytable.setAggregate(colnum,-1);
        if(mytable.a_capt[colnum].vispct)togglevispct(tn,colnum);
    }
    pwn[tn].chartinfo.tcapt=mytable.a_capt;
}
 
function nop(){}
 


function inarray(Ar,Ob,retloc,compLen)
{
    var al=Ar.length;
    var val1,val2 = Ob;
    if(compLen) {
        val2 = val2+'';
        val2 = val2.substr(0,compLen);
    }
    if(al>0)
        for(var i = 0; i < al; i++) {
            val1 = Ar[i];
            if(compLen) {
                val1 = val1+'';
                val1 = val1.substr(0,compLen);
            }
            if (val1 === val2) {
                if(retloc) return(i);
                else return(true);
            }
        }
    if(retloc) return(-1);
    else return(false);
}


var _env = (function () {
    var _sbwidth;
    if (_sbwidth === undefined) {
        var doc = document,
            div = doc.createElement('div');
        div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
        div = div.firstChild;
        doc.body.appendChild(div);
        _sbwidth = div.offsetWidth - div.clientWidth;
        doc.body.removeChild(div);
    }

    return {
        getScrollbarWidth: function () {
            return _sbwidth;
        }
    };
})();


function dragStart(event, win, doresize)
{
    var el;
    var x, y;
    dragObj.win = win;
    ibiMenu.Hidemenu();
    var tn = pwn[win].table_Number;
    var sx,sy;

    if(isARBrowserExtension && (typeof event === 'string')) {
        try {
            event = JSON.parse(event);
        } catch(e) {
            event = {};
        }
    }

    if(pwn[win].type!=typegbl) 
        if(tn>-1) {
            var mytable = getMyTable(tn);
            if(mytable.isRollUp) tn = mytable.parent_table;
            if((win<MyTable.length)&&(MyTable[tn].a_cntl.WindowDisplay=='tab')) return;
        }
    dragObj.elNode = pwn[win].dobj;
 
    if(typeof(window.scrollx) == 'undefined') {
        sx = d.documentElement.scrollLeft + d.body.scrollLeft;
        sy = d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        sx = window.scrollX;
        sy = window.scrollY;
    }
    x = event.clientX + sx;
    y = event.clientY + sy;
 
    dragObj.cursorStartX = x;
    dragObj.cursorStartY = y;
    dragObj.elStartLeft  = parseInt(dragObj.elNode.style.left, 10);
    dragObj.elStartTop   = parseInt(dragObj.elNode.style.top,  10);
 
    if (isNaN(dragObj.elStartLeft)) dragObj.elStartLeft = 0;
    if (isNaN(dragObj.elStartTop))  dragObj.elStartTop  = 0;
    dragObj.elNode.style.zIndex = (dragObj.zIndex=dragObj.zIndex+2);
 
    if (typeof(d.addEventListener)=="undefined") {
        d.attachEvent('onmousemove', dragGo);
        d.attachEvent('onmouseup',   dragStop);
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else {
        d.addEventListener('mousemove', dragGo,   true);
        d.addEventListener('mouseup',   dragStop, true);
        if(!isARBrowserExtension) {
            event.preventDefault();
        }
    }
}
 
function dragGo(event) {
    var x, y;
    var sx,sy;
    
     if(typeof(window.scrollx) == 'undefined') {
        sx = d.documentElement.scrollLeft + d.body.scrollLeft;
        sy = d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        sx = window.scrollX;
        sy = window.scrollY;
    }
    x = event.clientX + sx;
    y = event.clientY + sy;

 
    winMoveX = dragObj.elStartLeft + x - dragObj.cursorStartX;
    if(winMoveX < 0 && document.dir != 'rtl') winMoveX = 0;
    winMoveY = dragObj.elStartTop  + y - dragObj.cursorStartY;
    if(winMoveY < 0) winMoveY = 0;
    dragObj.elNode.style.left = (winMoveX) + 'px';
    dragObj.elNode.style.top  = (winMoveY) + 'px';
 
    if (typeof(d.addEventListener)=="undefined") {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else
        event.preventDefault();
}
 
function dragStop(event) {
    if (typeof(d.addEventListener)=="undefined") {
        d.detachEvent('onmousemove', dragGo);
        d.detachEvent('onmouseup',   dragStop);
    } else {
        d.removeEventListener('mousemove', dragGo,   true);
        d.removeEventListener('mouseup',   dragStop, true);
    }
    pwn[dragObj.win].xpos = winMoveX;
    pwn[dragObj.win].ypos = winMoveY;
    winLastX =  winMoveX;
    winLastY =  winMoveY;
}
 
function resizeStart(event, win, doresize)
{
    var el;
    var x, y,tn;
    var mytable;
    dragObj.win = win;
    var pid = 'win'+win;
    var wins = win+'';

    if(isARBrowserExtension && (typeof event === 'string')) {
        try {
            event = JSON.parse(event);
        } catch(e) {
            event = {};
        }
    }

    ibiMenu.Hidemenu();
    if(wins.charAt(0)=='M') {
        mytable = getMyTable(tn);
        tn=wins.substr(1,win.length-1)*1;
        dragObj.dobj=mytable.maintable.root;
        dragObj.dobj_e=mytable.maintable.wbot;
        pid='MAINTABLE_'+wins.substr(1,win.length-1);
        dragObj.elNode = mytable.maintable.wbody;
        dragObj.minx = 50;
    } else {
        mytable = getMyTable(pwn[win].table_number);
		if(mytable)
        if(pwn[win].type!=typegbl)
            if(mytable.a_cntl.WindowDisplay=='tab') return;
         dragObj.elNode = pwn[win].dobj_b;
        dragObj.minx = pwn[dragObj.win].minw;
        if((pwn[win].type==typechart)&&(pwn[win].chartinfo.saveable.ctype<4)) {
            var cobj = d.getElementById('wbody'+win);
            cobj.innerHTML = '';
        }
    }
     var pobj = d.getElementById(pid);
    if (typeof(d.addEventListener)=="undefined") {
        x = window.event.clientX + d.documentElement.scrollLeft + d.body.scrollLeft;
        y = window.event.clientY + d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        x = event.clientX + (window.scrollX || window.pageXOffset);
        y = event.clientY + (window.scrollY || window.pageYOffset);
    }
 
    dragObj.cursorStartX = x;
    dragObj.cursorStartY = y;
    dragObj.elStartWidth = dragObj.elNode.clientWidth;
    dragObj.elStartHeight = dragObj.elNode.clientHeight;


    dragObj.elNode.style.zIndex = (dragObj.zIndex=dragObj.zIndex+2);
 
    if (typeof(d.addEventListener)=="undefined") {
        d.attachEvent('onmousemove', resizeGo);
        d.attachEvent('onmouseup',   resizeStop);
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else {
        d.addEventListener('mousemove', resizeGo,   true);
        d.addEventListener('mouseup',   resizeStop, true);
        if(!isARBrowserExtension) {
            event.preventDefault();
        }
    }
}
 
function resizeGo(event) {
    var x, y,dobj,dobj_e,tn;
 
    if (typeof(d.addEventListener)=="undefined") {
        x = window.event.clientX + d.documentElement.scrollLeft + d.body.scrollLeft;
        y = window.event.clientY + d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        x = event.clientX + (window.scrollX || window.pageXOffset);
        y = event.clientY + (window.scrollY || window.pageYOffset);
    }

    winMoveX = dragObj.elStartWidth + x - dragObj.cursorStartX;
    if(winMoveX < dragObj.minx) winMoveX = dragObj.minx;
    winMoveY = dragObj.elStartHeight  + y - dragObj.cursorStartY;
    if(winMoveY < 50) winMoveY = 50;

    dragObj.elNode.style.width = (winMoveX) + 'px';
    dragObj.elNode.style.height  = (winMoveY) + 'px';
    var wins = dragObj.win+'';
    if(wins.charAt(0)!='M') {
        pwn[dragObj.win].dobj_t.style.width = (winMoveX) + 'px';
        pwn[dragObj.win].dobj_m.style.width = (winMoveX) + 'px';
        pwn[dragObj.win].dobj_e.style.width = (winMoveX) + 'px';
        pwn[dragObj.win].dobj_a.style.width = (winMoveX) + 'px';
         pwn[dragObj.win].dobj.style.width = (winMoveX) + 'px';
        pwn[dragObj.win].width = winMoveX;
        pwn[dragObj.win].height = winMoveY;
    } else {
        tn=wins.substr(1,wins.length-1)*1;
        if(dragObj.dobj_e) dragObj.dobj_e.style.width=(winMoveX)+'px';
        if(dragObj.dobj) dragObj.dobj.style.width=(winMoveX)+'px';
        for(var i=0; i < maxwindows;i++) {
            var ty = pwn[i].type;
            if((pwn[i].table_number==tn)&&(ty!=typetab)&&(ty!=typepmt)) {
                pwn[i].dobj_b.style.height = (winMoveY-60)+'px';
                pwn[i].dobj_b.style.width = winMoveX+'px';
            
            }
        }
    }
    if (typeof(d.addEventListener)=="undefined") {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else
        event.preventDefault();

}
 
function resizeStop(event) {
    if (typeof(d.addEventListener)=="undefined") {
        d.detachEvent('onmousemove', resizeGo);
        d.detachEvent('onmouseup',   resizeStop);
    } else {
        d.removeEventListener('mousemove', resizeGo,   true);
        d.removeEventListener('mouseup',   resizeStop, true);
    }
    var wins = dragObj.win+'';
    if(wins.charAt(0)!='M') {
        if(pwn[dragObj.win].type==typechart) {
             pwn[dragObj.win].chartinfo.saveable.size.width = winMoveX;
            pwn[dragObj.win].chartinfo.saveable.size.height = winMoveY;
            if(typeof(pwn[dragObj.win].chartinfo.tcapt)=="undefined" &&
               typeof(pwn[dragObj.win].mytable.a_capt)!="undefined")
                pwn[dragObj.win].chartinfo.tcapt=pwn[dragObj.win].mytable.a_capt;
            
            if(pwn[dragObj.win].mytable)
                pwn[dragObj.win].mytable.resizing = true;
            
            ibiChart.makeChartNSize(dragObj.win,pwn[dragObj.win].chartinfo.saveable.size,pwn[dragObj.win].table_number,-1);
            
            if(pwn[dragObj.win].mytable)
                pwn[dragObj.win].mytable.resizing = false;
        }
    }
	    if(pwn[dragObj.win].callback)
        pwn[dragObj.win].callback();
}

function isNumb(ch)
{
    return((ch>='0') && (ch<='9'));
}

function FocusFormat(value,format,cdn,cursym,getNewFormat)
{
    var newval,x;
    var isMoney = false;
    var numPosR = '';
    var numPosL = '';
    var valid   = false, doCdn = true;
    var isRight = false;
    var isAlpha = false,isDecimal=false,isPack=false,isInteger=false;
    var isFloat = false,isDate = false;
    var ch,fc;
    var i=1,isStillNum=true;
    var nf = '';

    fc = format.charAt(i);
    switch (fc) {
        case 'A': isAlpha   = true; break;
        case 'I': isInteger = true; doCdn = false; break; // default no commas...
        case 'D': isDecimal = true; break;
        case 'P': isPack    = true; break;
        case 'F': isFloat   = true; break;
    }
    if(isAlpha || isInteger || isPack || isDecimal || isFloat) {
        for(var j=2; j<format.length; j++) {
            ch = format.charAt(j);
            switch (ch) {
                case 'M': isMoney = true; break;
                case '.': isRight = true; break;
                case ' ': break;
                case ')': break;
                case 'C': if (isInteger) { doCdn = true; } break;
                default:
                    if((isRight)&&(!isNumb(ch))) isStillNum = false;
                    if(isRight) {
                        if(isStillNum) numPosR += ch;
                    } else numPosL += ch;
            }
        }
    }


    if(isAlpha || isInteger || isPack || isDecimal || isFloat) {
        valid = true;
        numPosL = numPosL*1;
        if(numPosR !='') numPosR = numPosR*1;
        else numPosR = 0;
    }
    if(value != missingVal) {
        if(isInteger) {
            value += '';
            x = value.split('.');
            value = x[0]*1;
        }
        if (!doCdn) {
            newval = value;
        } else if (valid) 
            newval = addCdnCommas(value,cdn,isMoney,numPosL,numPosR,cursym);
        else 
            newval = addCdnCommas(value,cdn);
    } else newval ='.';
    if(getNewFormat) {
        var nl = numPosL;
        if(isInteger || isPack || isDecimal || isFloat) nl=30;
        if(isInteger) fc = 'P';
        nf=fc+nl;
        if(numPosR) nf += '.'+numPosR;
        if(isMoney) nf += 'M';
        return nf;
    } else
    return newval;
}

function addCdnCommas(nStr,cdn,isMoney,numL,numR,cursym)
{
    var newval = '';
    var comma,period,x,x1,x2,ll;
    switch(cdn) {
        case 0: default: comma = ','; period = '.'; break;
        case 1: comma='.'; period=','; break;
        case 2: comma=' '; period='.'; break;
        case 3: case 4: comma = '\''; period = ','; break;
    }
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = ((x.length > 1)&&(numR!=0)) ? x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + comma + '$2');
    if(isMoney) newval = cursym;
    if(typeof(numR) != 'undefined') {
        if(numR) {
            x2=x2.substr(0,numR);
            ll = x2.length;
            if(ll<numR)
                for(var l=0; l < (numR-ll); l++)
                    x2 += '0';
            x2 = period + x2;
        }
    } else 
    if(x2!='') x2 = period+x2;
    newval += x1+x2;
    
    return newval;
}

function setminwinpos()
{
    if(pwn[0].minimized) return;
    var obj = pwn[0].dobj;
    var tobj = d.getElementById('minwin0');
    var oDiv = d.getElementById(ibiLayoutListName[0].orgdivouter);
    obj.style.left=oDiv.scrollLeft+'px';
    obj.style.top=(oDiv.clientHeight+oDiv.scrollTop-(tobj.offsetHeight+15))+'px';
    setTimeout('setminwinpos()',500);
}

function buildminwin() {
    if(pwn[0].dobj==null) setUpNewWindow(0);
    var obj = pwn[0].dobj_a;
    var is_min = false;

    var line = '<div><table id="minwin0" style="background-color:#D0D0D0;border: 1px solid black">';
    line += '<tr><td><table border=0 cellspacing=0 cellpadding=3><tr>';

     for(var j=1; j < maxwindows; j++)
        if(pwn[j].minimized && (pwn[j].name!=null)) {
            var mytable = getMyTable(pwn[j].table_number);
			if((pwn[j].type==typegbl)||(!mytable) ||(mytable.a_cntl.WindowDisplay!='tab')) {
                if(isARBrowserExtension) {
                    line += '<td class="tabPagingText1" style="color:white;background-color:#689AD5;cursor:pointer;border:1px solid gray;" onclick="_ARExtensionCall(&quot;maxwin('+j+')&quot;)">'+pwn[j].title+'<\/td>';
                } else {
                    line += '<td class="tabPagingText1" style="color:white;background-color:#689AD5;cursor:pointer;border:1px solid gray;" onclick="maxwin('+j+')">'+pwn[j].title+'<\/td>';
                }
                is_min = true;
            }
        }
    if(!is_min) {
        obj.innerHTML=blankdot; 
        minwin(0);
        return;
    }
    line += '<\/tr><\/table><\/td><\/tr><\/table><\/div>';
    obj.innerHTML=line;
    if(is_min) maxwin(0);
    else minwin(0);    
    setminwinpos();
}
 



function HTMLencode(str) {
    var re;
        re = new RegExp ("&", "g");
    str = str.replace(re,'&amp;');
        re = new RegExp (">", "g");
    str = str.replace(re,'&gt;');
        re = new RegExp ("<", "g");
    str = str.replace(re,'&lt;');
        re = new RegExp ("\n", "g");
    str = str.replace(re,'<BR>');
    return str;
}






function writeobjout(obj,putnl)
{
    var rstr = '', sq, ii, i;
    var isArray = true;
    var whattype = typeof(obj);
        if(obj==null) rstr += 'null';
    else
    if(whattype=='object') {
        sq = 0;
/*
        for(var i in obj) {
            if(typeof(obj[i])=='function') continue;
            if(isNaN(i)) isArray=false;
        } */
        if(typeof(obj.length)=="undefined") isArray=false;
        if(isArray) {
            var ol=obj.length;
            for(i = 0; i < ol; i++) {
                if(sq==0)rstr += '[';
                sq=1;
                rstr += writeobjout(obj[i],true);
                rstr += ',';
            }
        } else {
            for(i in obj) {
                if(sq==0)rstr += '{';
                sq=2;
                rstr += "'" + i + "':";
                rstr += writeobjout(obj[i],true);
                rstr += ',';
            }
        }
        if(sq==0) rstr += '[';
        else
        rstr = rstr.substr(0,rstr.length-1);
        if(sq==2) rstr +=  '}';
        else rstr += ']';
        if(putnl) rstr += '\r\n';
    } else
    if(whattype=='string') rstr += "'"+encodeStr(obj)+"'";
    else
    if(whattype=='number') rstr += obj;
    else 
    if(whattype=='boolean') {
        if(obj) rstr += 'true';
        else rstr += 'false';
    }
    return(rstr);
}


function encodeStr(str) {
    str = escape(str);
    str = str.replace(/%0A/g,'\\n').replace(/%0D/g,'\\r').replace(/%27/g,'\\\'').replace(/%u/g,'\\u').replace(/%([89A-F])/g,'\\u00$1');
    str = unescape(str);
    return(str);

}

(function() {
    var wait_win=null;
    var wait_count = 0;

    if (typeof window.ibiUtil!== 'undefined') {
        return;
    }

    window.ibiUtil= {
        duplicateField: DuplicateField,
        Strip: strip,
        StripSpace: strip_space,
        d2x:D2X,
        GetXmlHttpObject: getXmlHttpObject,
        enableMobileNativeScrolling: enableMobileNativeScrolling,
        virtualScroll: VirtualScroll,
		getGlobalFields: GetGlobalFields,
		getAllFields: GetAllFields,
        cssText: cssText
    };

    function VirtualScroll(settings) {
        settings = settings || {};
        
        this.content = settings.content;
        this.container = settings.container;
        this.hideVerticalScrollbar = settings.hideVerticalScrollbar;
        this.hideHorizontalScrollbar = settings.hideHorizontalScrollbar;

        this.containerBCR = this.container.getBoundingClientRect();
        this.contentBCR = this.content.getBoundingClientRect();
        this.contentWidth = Math.round(this.contentBCR.width);
        this.contentHeight = Math.round(this.contentBCR.height);
        this.containerWidth = Math.round(this.containerBCR.width);
        this.containerHeight = Math.round(this.containerBCR.height);

        // make width 1 pixel wider than the scrollbar actually is since 
        // it seems on IE & Edge the scroll event won't be triggered when 
        // scrolling via the mousewheel unless there is a clientWidth > 0
        this.scrollbarWidth = (b_edge) ? 13 : 18;
        this.containerInnerHeight = Math.round(parseFloat(getComputedStyle(this.container).height));
        this.containerInnerWidth = Math.round(parseFloat(getComputedStyle(this.container).width));
        this.availableVerticalScroll = Math.round(this.contentHeight - this.containerInnerHeight);
        this.availableHorizontalScroll = Math.round(this.contentWidth - this.containerInnerWidth);
        
        this.hasVerticalScroll = this.contentHeight > this.containerHeight;
        this.hasHorizontalScroll = this.contentWidth > this.containerWidth;
        this.isVerticalScrollbarFocused = false;
        this.isHorizontalScrollbarFocused = false;

        this.availableVerticalScrollIndicator = null;
        this.availableHorizontalScrollIndicator = null;
        this.verticalScrollbar = null;
        this.horizontalScrollbar = null;

        this.build = function() {
            if(this.hasVerticalScroll) {
                if(!this.hideVerticalScrollbar) {
                    this.availableVerticalScrollIndicator = this.generateVirtualScrollIndicator('vertical');
                    this.verticalScrollbar = this.generateVirtualScrollbar('vertical');
                    this.container.appendChild(this.verticalScrollbar);
                    this.container.appendChild(this.availableVerticalScrollIndicator);
                }

                this.content.addEventListener('wheel', function(e) {
                    var deltaY = e.deltaY;
                    var currentTop = parseInt(getComputedStyle(e.currentTarget).top, 10);

                    if(window.navigator.userAgent.indexOf('Firefox') > -1) deltaY *= 10;

                    if(isNaN(currentTop)) currentTop = 0;

                    // inverse sign
                    var newDelta = deltaY - (deltaY * 2);
                    // scrolling content up has a max negative top
                    // scrolling content down goes from max negative value up until 0
                    var maxTop = (deltaY > 0) ? -this.availableVerticalScroll : 0;
                    // if scrolling content up, get max negative value; negative value should not be larger than -availableVerticalScroll
                    // if scrolling content down, get minimum value; value should be negative until it reaches 0
                    var newTop = (deltaY > 0) ? Math.max((currentTop + newDelta), maxTop) : Math.min((currentTop + newDelta), maxTop);

                    var positionData = {
                        direction: 'top',
                        value: newTop + 'px'
                    };
                    
                    if(!this.hideVerticalScrollbar) {
                        this.setScrollableIndicatorPosition(positionData);
                    }
                    
                    this.setScrollableContentPosition(positionData);

                    e.preventDefault();
                }.bind(this));
            }

            if(this.hasHorizontalScroll && !this.hideHorizontalScrollbar) {
                this.availableHorizontalScrollIndicator = this.generateVirtualScrollIndicator('horizontal');
                this.horizontalScrollbar = this.generateVirtualScrollbar('horizontal');
                this.container.appendChild(this.horizontalScrollbar);
                this.container.appendChild(this.availableHorizontalScrollIndicator);
            }
        };

        this.generateVirtualScrollIndicator = function(orientation) {
            orientation = orientation || 'vertical';

            var isVertical = orientation == 'vertical';
            var indicator = document.createElement('div');
            var indicatorWrapper = document.createElement('div');
            var scrollPercentage = Math.floor(((isVertical) ? 
                this.containerInnerHeight / this.contentHeight :
                this.containerInnerWidth / this.contentWidth) * 100) + '%';

            indicatorWrapper.classList.add(orientation + '-scroll-indicator-wrapper');
            indicator.classList.add(orientation + '-scroll-indicator');

            ibiUtil.cssText(indicator, {
                opacity: 0.5,
                cursor: 'default',
                borderRadius: '5px',
                position: 'absolute',
                width: (isVertical) ? '7px' : scrollPercentage,
                height: (isVertical) ? scrollPercentage : '7px',
                backgroundColor: '#ababab'
            });

            ibiUtil.cssText(indicatorWrapper, {
                fontSize: '16px',
                fontWeight: 'bold',
                position: 'absolute',
                width: (isVertical) ? '7px' : '100%',
                height: (isVertical) ? '100%' : '7px',
                right: (isVertical) ? '0' : '',
                bottom: (isVertical) ? '' : '0'
            });

            indicatorWrapper.appendChild(indicator);

            return indicatorWrapper;
        };

        this.generateVirtualScrollbar = function(orientation) {
            orientation = orientation || 'vertical';
    
            var scrollbarDiv = document.createElement('div');
            var scrollbarWrapper = document.createElement('div');
            var isVertical = orientation == 'vertical';
            var isHorizontal = orientation == 'horizontal';
    
            scrollbarDiv.classList.add(orientation + '-virtual-scrollbar-content');
            scrollbarWrapper.classList.add(orientation + '-virtual-scrollbar-wrapper');
    
            ibiUtil.cssText(scrollbarWrapper, {
                zIndex: 100,
                position: 'absolute',
                top: (isVertical) ? 0 : '',
                right: (isVertical) ? 0 : '',
                left: (isHorizontal) ? 0 : '',
                bottom: (isHorizontal) ? 0 : '',
                height: (isVertical) ? '100%' : this.scrollbarWidth,
                width: (isVertical) ? this.scrollbarWidth : '100%',
                // make sure to hide the wrapper's horizontal/vertical scroll bar since it attempts
                // to show it in IE and Edge and affects the calculation of content top
                overflowY: (isVertical) ? 'auto' : 'hidden',
                overflowX: (isVertical) ? 'hidden' : 'auto'
            });
    
            ibiUtil.cssText(scrollbarDiv, {
                display: 'none',
                width: (isVertical) ? this.scrollbarWidth : this.contentWidth,
                height: (isVertical) ? this.contentHeight : this.scrollbarWidth
            });
    
            scrollbarWrapper.addEventListener('mouseover', function(e) {
                // depending on scrollbar orientation, set isVerticalScrollBarFocused / isHorizontalScrollBarFocused
                this['is' + ((isVertical) ? 'Vertical' : 'Horizontal') + 'ScrollbarFocused'] = true;
                scrollbarDiv.style.display = 'block';
                e.currentTarget[(isVertical) ? 'scrollTop' : 'scrollLeft'] = Math.abs(parseInt(this.content.style[(isVertical) ? 'top' : 'left'], 10));
            }.bind(this));
    
            scrollbarWrapper.addEventListener('mouseout', function() {
                // depending on scrollbar orientation, set isVerticalScrollBarFocused / isHorizontalScrollBarFocused
                this['is' + ((isVertical) ? 'Vertical' : 'Horizontal') + 'ScrollbarFocused'] = false;
                scrollbarDiv.style.display = 'none';
                //scrollbarWrapper.style[(isVertical) ? 'width' : 'height'] = 0;
            }.bind(this));
    
            scrollbarWrapper.addEventListener('scroll', function(e) {
                var positionData = {
                    direction: (isVertical) ? 'top' : 'left',
                    value:  -e.currentTarget[(isVertical) ? 'scrollTop' : 'scrollLeft'] + 'px'
                };

                // depending on scrollbar orientation, check isVerticalScrollBarFocused / isHorizontalScrollBarFocused
                if(!this['is' + ((isVertical) ? 'Vertical' : 'Horizontal') + 'ScrollbarFocused']) return;
                
                this.setScrollableContentPosition(positionData);
                this.setScrollableIndicatorPosition(positionData);
            }.bind(this));
    
            scrollbarWrapper.appendChild(scrollbarDiv);
            
            return scrollbarWrapper;
        };

        this.setScrollableIndicatorPosition = function(positionData) {
            var isVertical = positionData.direction == 'top';
            var lengthProperty = (isVertical) ? 'height' : 'width';
            var availableScroll = (isVertical) ? this.availableVerticalScroll : this.availableHorizontalScroll;
            var availableScrollIndicator = (isVertical) ? this.availableVerticalScrollIndicator : this.availableHorizontalScrollIndicator;
            var availableScrollIndicatorProgressBar = availableScrollIndicator.querySelector('div');
            var contentScrollProgress = Math.abs(parseInt(positionData.value, 10));
            var contentScrollProgressPercentage = (contentScrollProgress / availableScroll);

            var scrollIndicatorLength = Math.round(parseInt(getComputedStyle(availableScrollIndicatorProgressBar)[lengthProperty], 10));
            var scrollIndicatorWrapperLength = (isVertical) ? this.containerHeight : this.containerWidth;
            var scrollIndicatorAvailableProgress = scrollIndicatorWrapperLength - scrollIndicatorLength;
            var scrollIndicatorCurrentProgress = scrollIndicatorAvailableProgress * contentScrollProgressPercentage;
            
            availableScrollIndicatorProgressBar.style[positionData.direction] = scrollIndicatorCurrentProgress + 'px';
        };

        this.setScrollableContentPosition = function(positionData) {
            this.content.style[positionData.direction] = positionData.value;
            
            if(settings.onScrollHandler) {
                settings.onScrollHandler.call(this, positionData);
            }
        };

        this.build();
    }

    // sets (overrides) the cssText style string on a given element.
    // Expects an object of css properties/values
    function cssText(element, styles) {
        var cssText = '';
        var value;
        var numberToPxExclude = ['z-index', 'opacity'];
        var camelCaseToHyphen;

        if(!element || !element.style || !styles) return;

        if(typeof styles === 'object') {
            Object.keys(styles).map(function(property) {

                camelCaseToHyphen = property.replace(/([A-Z])/g, function (val) {
                    return '-' + val.toLowerCase();
                });

                value = styles[property];

                if(value !== '') {
                    if (numberToPxExclude.indexOf(camelCaseToHyphen) === -1 && !isNaN(value)) {
                        value += 'px';
                    }
    
                    cssText += camelCaseToHyphen + ':' + value + ';';
                }
            });
        }

        if(cssText) {
            element.style.cssText = cssText;
        }
    };

    function enableMobileNativeScrolling(scrollDivContainer, direction) {
        var container = scrollDivContainer;
        var containerClientHeight;
        var containerClientWidth;
        var containerScrollHeight;
        var containerScrollWidth;
        var containerScrollLeft;
        var containerScrollTop;
        var scrollDeltaX;
        var scrollDeltaY;
        var scrollDeltaXAbs;
        var scrollDeltaYAbs;
        var startX;
        var startY;

        if(container) {
            if(direction) {
                // optionally restrict movement to one direction
                switch(direction) {
                    // only move left/right
                    case 'xaxis':
                        container.style.overflowX = 'scroll';
                        container.style.overflowY = 'hidden';
                        break;

                    // only move up/down
                    case 'yaxis':
                        container.style.overflowX = 'hidden';
                        container.style.overflowY = 'scroll';
                        break;
                    
                    case 'both':
                    default:
                        container.style.overflow = 'scroll';
                        break;
                }
            }

            container.style.webkitOverflowScrolling = 'touch';

            container.addEventListener('touchstart', function(e) {
                startY = e.changedTouches[0].clientY;
                startX = e.changedTouches[0].clientX;
                containerClientHeight = container.clientHeight;
                containerScrollHeight = container.scrollHeight;
                containerClientWidth = container.clientWidth;
                containerScrollWidth = container.scrollWidth;
            });

            container.addEventListener('touchmove', function(e) {
                containerScrollLeft = container.scrollLeft;
                containerScrollTop = container.scrollTop;
                scrollDeltaX = startX - e.changedTouches[0].clientX;
                scrollDeltaY = startY - e.changedTouches[0].clientY;
                scrollDeltaXAbs = Math.abs(scrollDeltaX);
                scrollDeltaYAbs = Math.abs(scrollDeltaY);

                // moving along x axis
                if(scrollDeltaXAbs > scrollDeltaYAbs) {
                    var hitLeftBoundary = (scrollDeltaX > 0 && (containerScrollLeft === (containerScrollWidth - containerClientWidth)));
                    var hitRightBoundary = (scrollDeltaX < 0 && containerScrollLeft === 0);

                    if(hitRightBoundary || hitLeftBoundary) {
                        e.preventDefault();
                    }
                }

                // moving along y axis
                if(scrollDeltaYAbs > scrollDeltaXAbs) {
                    var hitTopBoundary = (scrollDeltaY > 0 && (containerScrollTop === (containerScrollHeight - containerClientHeight)));
                    var hitBottomBoundary = (scrollDeltaY < 0 && containerScrollTop === 0);
                    
                    if(hitTopBoundary || hitBottomBoundary) {
                        e.preventDefault();
                    }
                }
                // stop event from propagating to document level where default touch
                // behavior is prevented (ibi_ios_stopmove)
                e.stopPropagation();
            });
        }
    }
    
    function GetGlobalFields()
    {
        var i, j=0;
        var a_cols = [];
        var a_capt = [];
        var count = [];
        var gobj = {"capt":[],"cols":[]};
        global_a_cols =[];
        var nameArray=[];
        var x = 0;
        if(MyTable.length==1)
        	return gobj;
        var mergefield = null;
        if(isMergeReports) mergefield = MyTable[0].a_cntl.a_cols[0].name;
        for (i = 0; i < MyTable.length; i++) {
            if(MyTable[i].deleted)
                continue;
            for(var ii=0; ii < MyTable[i].n_cols; ii++) {
                x = inarray(nameArray,MyTable[i].a_cntl.a_cols[ii].name,true);
                if(x == -1){
                    x = a_cols.length;
                    a_cols[x] = CopyArray(MyTable[i].a_cntl.a_cols[ii]);
                    a_cols[x].originalTable = MyTable[i].id;
                    a_capt[x] = CopyArray(MyTable[i].a_capt[ii]);
                    nameArray[x] = a_cols[x].name;
                    count[x] = 1;
                } else count[x]++;
            }
        }
        for (i = 0; i < a_cols.length; i++) {
            if((count[i]==MyTable.length)&&(mergefield!=a_cols[i].name)) {
                gobj.cols[gobj.cols.length] = CopyArray(a_cols[i]);
                gobj.capt[gobj.capt.length] = CopyArray(a_capt[i]);
            }
        }
        return gobj;
    }

    function GetAllFields()
    {
        var i, j=0;
        var a_cols = [];
        var a_capt = [];
        var gobj = {"capt":[],"cols":[]};
        var nameArray=[];
        var x = 0;
        var mergefield = null;
        if(isMergeReports)
        	mergefield = MyTable[0].a_cntl.a_cols[0].qualname;
        for (i = 0; i < MyTable.length; i++) {
            if(MyTable[i].deleted)
                continue;
            for(var ii=0; ii < MyTable[i].n_cols; ii++) {
            	if(typeof MyTable[i].a_cntl.a_cols[ii].qualname != "undefined") {
            		if(mergefield == MyTable[i].a_cntl.a_cols[ii].qualname )
            			continue;
                    x = inarray(nameArray, MyTable[i].a_cntl.a_cols[ii].qualname, true);
                    if (x == -1) {
                        x = a_cols.length;
                        a_cols[x] = CopyArray(MyTable[i].a_cntl.a_cols[ii]);
                        a_cols[x].originalTable = MyTable[i].id;
                        a_cols[x].foundIn = [MyTable[i].id];
                        a_capt[x] = CopyArray(MyTable[i].a_capt[ii]);
                        nameArray[x] = a_cols[x].qualname;
                    } else {
                        a_cols[x].foundIn[a_cols[x].foundIn.length] = MyTable[i].id;
                    }
                }
            }
        }
		gobj.cols = CopyArray(a_cols);
		gobj.capt = CopyArray(a_capt);

        return gobj;
    }

    function DuplicateField(mytable,field)
    {
        var counter = 0;
        for(var j=0; j < mytable.a_cntl.a_cols.length; j++)
        {
            if(field == mytable.a_cntl.a_cols[j].field) counter++;
            if(counter==2) return true;
        }
        return false;
    }

    var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    function D2X(value){
        var a,r;    

            a = Math.floor(value / 16);
        r = value - (a*16);
        return hex[a]+hex[r];
    }

    var stripskip = " \t\r\n";
    function strip(str,leading,trailing)
    {
        var i;
        str = str +'';
        var start = 0,end = str.length-1;
        var l = str.length;

        if(leading) 
            while((start<l)&&(stripskip.indexOf(str.charAt(start))!=-1)) start++;
        if(trailing)
            while((end>0)&&(stripskip.indexOf(str.charAt(end))!=-1)) end--;
        if(end<start) return('');
        else return(str.substring(start,end+1));
    }

    function strip_space(str,leading,trailing)
    {
        var i;
        str = str +'';
        var l = str.length;
        var start = 0,end = str.length-1;

        if(leading) 
        while((start<l)&&(str.charAt(start)==' ')) start++;
        if(trailing)
            while((end>0)&&(str.charAt(end)==' ')) end--;
        if(end<start) return('');
        else return(str.substring(start,end+1));
    }

    function getXmlHttpObject()
    {
        var xmlHttp=null;
        try
         {
             xmlHttp=new XMLHttpRequest();
         }
        catch (e)
         {
            try
              {
                  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
             }
             catch (e)
              {
                  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
              }
         }
        return xmlHttp;
    }
})();
