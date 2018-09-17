/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/argrid.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180802 1022 wjf 202630 AHTML formt in AppStudio canvas Column WRAP not working
* 180801 1857 wjf 202630 AHTML formt in AppStudio canvas Column WRAP not working
* 180801 1224 wjf 202630 AHTML formt in AppStudio canvas Column WRAP not working
* 180730 1311 wjf 202630 AHTML formt in AppStudio canvas Column WRAP not working
* 180727 1446 bjd 203653 AHTML: hide display ACROSS groups with null values
* 180725 1042 bjd 203653 AHTML: hide display ACROSS groups with null values
* 180725 0721 bjd 203653 AHTML: hide display ACROSS groups with null values
* 180313 1325 iys 201237 Mobile:Adaptive Dashboard:Scrolling up/down with a large rep
* 180312 1326 iys 200991 Mobile:Adaptive Dashboard:Doc with textbox and image click i
* 180125 1507 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 171114 1609 ppl 195844 IN AHTML on report heading is not wrapping
* 171108 0927 bjd 173921 Active report with freeze-column wont resize
* 170829 1531 bjd 194174 AHTML:SQUEEZE behaviour in wide report is not displaying as
* 170817 1208 bjd 194116 AHTML:Applying Freeze column option to the report throws we
* 170720 1007 bjd 188763 Horizontal Scroll Bars displays when not needed
* 170714 1246 bjd 188763 Horizontal Scroll Bars displays when not needed
* 170525 1020 wjf 191511 Add Gridbar for non column related options.
* 170316 1303 iys 189434 AHTML:CACHE:Applying global filter to AHTML TAB collapses t
* 170315 1002 iys 189016 Unexpected scrollbars displaying in Chrome
* 170313 1249 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 170303 1341 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 160914 1552 iys 180538 AHTML:Toggle calculation type is not visible in active repo
* 160902 1754 wjf 184304 AHTML:Entering Values in text box displays "Request failed
* 160901 1459 iys 176093 Active Dashboard multi-field filter loops after using Repor
* 160714 1601 wjf 180629 Heading dialog does not reflect the header syntax in a Styl
* 160610 1256 hms 180534 Remove tab characters from source files
* 160603 1142 wjf 181636 visualization report at portal runtime yields webpage error
* 160505 0752 bjd 180460 Active Charts: respect margin settings in the stylesheet
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160414 1306 bjd 134297 AHTML:Margin settings not respected in Active report formats
* 160413 1255 bjd 179338 Add support for cell padding
* 160406 1242 bjd 134297 AHTML:Margin settings not respected in Active report formats
* 160323 1723 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160316 1035 bjd 178156 Auto Drill Bread Crumbs wrapping
* 160308 1536 bjd 178085 Cannot change the font color of the current row
* 160307 1003 wjf 178010 ACT-628:Allow Freeze on/off resizing unexpected behavior
* 160106 1031 bjd 163933 Subtotals not updated in Active compound Report w/ filters
* 160105 1236 wjf 132475 AHTML:OBJECT=STATUS-AREA font size & type does not change
* 151216 1253 bjd 134297 AHTML:Margin settings not respected in Active report formats
* 151216 1249 bjd 134297 AHTML:Margin settings not respected in Active report formats
* 151209 1216 iys 171860 AHTML squeeze not respected in a very wide report.
* 150811 1548 bjd 170443 AS:LAY:Active Report format when execute, columns are spaced
* 150807 1309 bjd 170443 AS:LAY:Active Report format when execute, columns are spaced
* 150805 1133 bjd 169933 Sync Active report with chart on html - chart misplaced in
* 150330 1637 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150319 1139 wjf 165307 AHTML: Allow jschart morphing.
* 150211 1930 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150211 1506 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150210 1530 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150130 1240 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150129 1610 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150129 1128 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150113 1835 bjd 162705 AHTML:BORDER around drilldown datavalues for test wdoc0067
* 141030 1749 wjf 134795 Active Visualization
* 141028 1534 iys 162427 AHTML:Missing filtered stylesheet grandtotal w/filter ctrl
* 140926 1100 bjd 161008 Cmpnd AHTML:Grandtotal not refreshing w/ drop down selection
* 140910 1059 bjd 134795 Active Visualization
* 140904 1701 bjd 134795 Active Visualization
* 140718 1648 wjf 134538 AHTML/AFLEX:support GRAPH with ACROSS
* 140715 1315 wjf 134795 Active Visualization
* 140714 1604 wjf 134795 Active Visualization
* 140611 1623 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.45 $
//$Log: argrid.js,v $
//Revision 1.45  2014/05/12 15:07:32  Brian_DCruz
//[p158691] need original dataField to display comment in correct cell
//
//Revision 1.44  2014/05/06 15:27:26  Brian_DCruz
//[p157112] Since we update column numbers when columns are moved (because of Active Visualization project) we need the original column number to access original column data --for sorting
//
//Revision 1.43  2014/04/10 00:50:24  William_Forde
//[p134795] Fix more issues with switching pages causing errors.
//
//Revision 1.42  2014/03/05 20:22:55  William_Forde
//[p134795][>branch8100] Fix issue with chart not filtering when field is not used in report but is part of the "dataReport". Fix slider api not setting the default values properly.
//
//Revision 1.41  2014/02/10 15:02:54  Israel_Schulman
//[p143071][>branch8100] Prioritize grid's row highlight and hover styles set in fex over styles set in irpcfg css.
//
//Revision 1.40  2013/12/05 23:38:04  Israel_Markhovsky
//[p148384] AHTML:SQUEEZE:Col title misalign w/ `%of Total` calculation
//                  renamed some variables to make javascript scanner happy
//
//Revision 1.39  2013/12/05 23:23:59  Israel_Markhovsky
//[p148384] AHTML:SQUEEZE:Col title misalign w/ `%of Total` calculation
//                  renamed some variables to make javascript scanner happy
//
//Revision 1.38  2013/12/05 22:34:24  Israel_Markhovsky
//[p148384] AHTML:SQUEEZE:Col title misalign w/ `%of Total` calculation
//                  renamed some variables to make javascript scanner happy
//
//Revision 1.37  2013/12/05 21:27:41  Israel_Markhovsky
//[p148384] AHTML:SQUEEZE:Col title misalign w/ `%of Total` calculation
//
//Revision 1.36  2013/12/02 17:56:56  William_Forde
//[p154865] Fix javascript error with noprint by and no measures.
//
//Revision 1.35  2013/09/27 01:00:16  Israel_Schulman
//[p143071] If arGridComment class is included but without the background-color property, don't prevent a comment cell from changing its background color on row hover.
//
//Revision 1.34  2013/09/25 19:33:27  Israel_Schulman
//[p143071] If .arGridComment css class is included in irpcfg.js style section, replace the [*] comment indicator with a comment icon. Added support for setting the grid's row hover and highlighted background colors via irpcfg.js with .arGridHover and .arGridHighlight classes.
//
//Revision 1.33  2013/07/29 16:19:19  Brian_DCruz
//[p150737] fix assumption that we always have bykeys
//
//Revision 1.32  2013/07/26 13:34:09  Brian_DCruz
//[p150737] Logic to handle SUBFOOT/SKIP-LINE etc for Accordian
//
//Revision 1.31  2013/06/18 21:26:12  Brian_DCruz
//[p148900] need space between properties in cell
//
//Revision 1.30  2013/06/14 11:29:57  Brian_DCruz
//[p148900] apply same R\L padding to heading TD cell as non-heading TD cells
//
//Revision 1.29  2013/06/11 19:46:34  Brian_DCruz
//[p148847] remove text-decoration style for blank values
//
//Revision 1.28  2013/06/10 17:19:45  Brian_DCruz
//[p150263] handle bgcolor when verbs between keys
//
//Revision 1.27  2013/06/03 19:53:33  Brian_DCruz
//[p150073] getColumnStyle needs valid "values"
//
//Revision 1.26  2013/05/13 15:55:15  Israel_Schulman
//[p130277] Respect background color(s) for % of total columns.
//
//Revision 1.25  2013/05/09 17:37:10  Brian_DCruz
//[148241] fix many cases of colspan calculation --without ACROSS, without vis
//
//Revision 1.24  2013/05/01 16:08:39  William_Forde
//[p134795] Fix issue in api, when reloading component with new json.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["argrid"]="$Revision: 20180802.1022 $";
(function() {
    var mytable = null;
    var isHead=1;
    var isFoot=2;
    var isGrandTotal=3;
    var isTableHead=4;
    var isAcHead=5;
    var isTableFoot=6;
    var isSubHead=7;
    var isSubFoot=8;
    var isSubTotal=9;
    var isSkipLine=10; 
    var isSubCalc=20;

    if (typeof window.ibiGrid !== 'undefined') {
        return;
    }

    window.ibiGrid = {
        setMyTable:SetMyTable,
        freezeColumns:IFreezeColumns,
        mouseover:IMouseOver,
        mouseout:IMouseOut,
        go:IGo,
        buildHead:buildHead2,
        show:IShow,
        show2:IShow2,
        build:IBuild2,
        resizeGrid:ISizeGrid,
        rememberScroll:IRememberScroll
    };

    function SetMyTable(itable)
    {
        mytable = itable;
    }

    function buildHead2(tn,istype,first_col,last_col,slevel,noHTML)
    {
        mytable = MyTable[tn];
        return IBuildHead(istype,first_col,last_col,slevel,noHTML);
    }

function IMouseOver(id,o_row){
    if(isARBrowserExtension && (typeof o_row === 'string')) {
        o_row = document.getElementById(o_row);
    }
    if(o_row.marked) return;
    mytable = MyTable[id];
    var n_id = o_row.id.match(/([0-9,'.']+)$/)[0];
    var o_other_row, aColNode, aNode, ii, numNodes;
    if(o_row.id == 'I' + mytable.id+ 'r'+n_id)
        o_other_row = d.getElementById('I' + mytable.id + 'l'+n_id);
    else
        o_other_row = d.getElementById('I' + mytable.id + 'r'+n_id);
    if (!o_row.saveback) {
        o_row.saveback = o_row.style.backgroundColor;
    }
    if (!o_row.savecolor) {
        o_row.savecolor = o_row.style.color;
    }

    var aghc = getStyle(".arGridHover");
    var agcc = getStyle(".arGridComment");
    var bgOverride = false;
    var hoverBackground = mytable.o_color.hovered;
    var hoverFontColor  = mytable.a_cntl.hovercolor;
    var cellHasComment;

    try {
        if (aghc.style.backgroundColor && !mytable.a_cntl.hoverbackcolor) {
            hoverBackground = aghc.style.backgroundColor;
        }
    } catch (e) {}
    try { 
        if (agcc.style.backgroundColor) { bgOverride = true; }
    } catch(e) {}
    o_row.style.backgroundColor = hoverBackground;
    if (typeof hoverFontColor !== 'undefined') {
        o_row.style.color = hoverFontColor;
    }

    numNodes = (o_row && o_row.childNodes) ? o_row.childNodes.length : 0;
    for (ii = 0; ii < numNodes; ii++) {
        aColNode = o_row.childNodes[ii];
        if (aColNode.style.backgroundColor || aColNode.style.color) {
            aNode = d.getElementById("C" + aColNode.id);
            cellHasComment = (aNode) ? aNode.innerHTML!="" : false;
            if (!cellHasComment || !bgOverride) {
                if (aColNode.style.backgroundColor) {
                    aColNode.saveback = aColNode.style.backgroundColor;
                    aColNode.style.backgroundColor = hoverBackground;
                }
                if (aColNode.style.color) {
                    aColNode.savecolor = aColNode.style.color;
                    aColNode.style.color = hoverFontColor;
                }
            }
        }
    }
    if (o_other_row) {
        if (!o_other_row.saveback) {
            o_other_row.saveback = o_other_row.style.backgroundColor;
        }
        if (!o_other_row.savecolor) {
            o_other_row.savecolor = o_other_row.style.color;
        }
        o_other_row.style.backgroundColor = hoverBackground;
        if (typeof hoverFontColor !== 'undefined') {
            o_other_row.style.color = hoverFontColor;
        }
        numNodes = (o_other_row.childNodes) ? o_other_row.childNodes.length : 0;
        for (ii = 0; ii < numNodes; ii++) {
            aColNode = o_other_row.childNodes[ii];
            if (aColNode.style.backgroundColor || aColNode.style.color) {
                aNode = d.getElementById("C" + aColNode.id);
                cellHasComment = (aNode) ? aNode.innerHTML!="" : false;
                if (!cellHasComment || !bgOverride) {
                    if (aColNode.style.backgroundColor) {
                        aColNode.saveback = aColNode.style.backgroundColor;
                        aColNode.style.backgroundColor = hoverBackground;
                    }
                    if (aColNode.style.color) {
                        aColNode.savecolor = aColNode.style.color;
                        aColNode.style.color = hoverFontColor;
                    }
                }
            }
        }
    }
}

function IMouseOut(id,o_row){
    if(isARBrowserExtension && (typeof o_row === 'string')) {
        o_row = document.getElementById(o_row);
    }
    mytable = MyTable[id];
    var n_id = o_row.id.match(/([0-9,'.']+)$/)[0];
    var o_other_row, aColNode, aNode, ii, numNodes;
    var cellHasComment;
    if(o_row.id == 'I' + mytable.id+ 'r'+n_id)
        o_other_row =  d.getElementById('I' + mytable.id + 'l'+n_id);
    else
        o_other_row = d.getElementById('I' + mytable.id + 'r'+n_id);
 
    o_row.style.backgroundColor = (o_row.marked) ? o_row.saveMark : o_row.saveback;

    numNodes = (o_row && o_row.childNodes) ? o_row.childNodes.length : 0;
    for (ii = 0; ii < numNodes; ii++) {
        aColNode = o_row.childNodes[ii];
        if (o_row.marked) {
            aNode = d.getElementById("C" + aColNode.id);
            cellHasComment = (aNode) ? aNode.innerHTML!="" : false;
            if (!cellHasComment) {
                aColNode.style.backgroundColor = o_row.saveMark;
            }
        } else {
            if (aColNode.saveback) { aColNode.style.backgroundColor = aColNode.saveback; }
            if (aColNode.savecolor) { aColNode.style.color = aColNode.savecolor; }
        }
    }
    if (o_other_row) {
        o_other_row.style.backgroundColor = (o_other_row.marked) 
                                            ? o_other_row.saveMark : o_other_row.saveback;
        numNodes = (o_other_row.childNodes) ? o_other_row.childNodes.length : 0;
        for (ii = 0; ii < numNodes; ii++) {
            aColNode = o_other_row.childNodes[ii];
            if (o_other_row.marked) {
                aNode = d.getElementById("C" + aColNode.id);
                cellHasComment = (aNode) ? aNode.innerHTML!="" : false;
                if (!cellHasComment) {
                    aColNode.style.backgroundColor = o_other_row.saveMark;
                }
            } else {
                if (aColNode.saveback) { aColNode.style.backgroundColor = aColNode.saveback; }
                if (aColNode.savecolor) { aColNode.style.color = aColNode.savecolor; }
            } 
        }
    }
}

function IMarkSelection() {
    var obj;

    for(var i=0; i<mytable.highRow.length;i++){
        obj = d.getElementById(mytable.highRow[i]);
        if(obj) IExeMark(null,obj);
    }
}

function IFreezeColumns(tn,n_cols){
    mytable = MyTable[tn];
    mytable.horizontal_scroll=-1;
    if(!n_cols){
        mytable.n_freeze_column = 0;
        if(!mytable.hide)mytable.n_freeze_column_before_hide = 0;
        if(!mytable.internal){
            //if(mytable.fullScreenOn) ibiIosGrid.show(mytable.iosDiv);
            ibiGrid.show(false,mytable);
        }
        return;
    }else{
        mytable.n_freeze_column = n_cols;
        if (n_cols == mytable.n_cols)
            mytable.n_freeze_column = 0;
    }
    if(!mytable.hide)mytable.n_freeze_column_before_hide = mytable.n_freeze_column;
    if(!mytable.internal) {
        mytable.currentCol=mytable.n_freeze_column;
        //if(mytable.fullScreenOn) ibiIosGrid.show(mytable.iosDiv);
        ibiGrid.show(false,mytable);
    }
}

function IExeMark(o_cell,o_row){
    if(typeof(o_row)=="undefined") o_row = o_cell.parentNode;
    var id,i,o_other_row,s_add;
    if(!mytable.n_prev_sel_row)mytable.n_prev_sel_row=0;
    var n_id = o_row.id.match(/([0-9,'.']+)$/)[0];

    if(o_row.id == 'I' + mytable.id+ 'r'+n_id){
        o_other_row = d.all ? d.all['I' + mytable.id + 'l'+n_id] : d.getElementById('I' + mytable.id + 'l'+n_id);
        s_add = 'l';
    }else{
        o_other_row = d.all ? d.all['I' + mytable.id+ 'r'+n_id] : d.getElementById('I' + mytable.id + 'r'+n_id);
        s_add = 'r';
    }

    if (o_row.marked) {
        o_row.style.backgroundColor = o_row.saveback;
        if(o_row.childNodes)
            for(var ix=0; ix < o_row.childNodes.length;ix++) {
                o_row.childNodes[ix].style.backgroundColor = o_row.childNodes[ix].saveback;
            }
        if(o_other_row) {
            o_other_row.marked = false;
            o_other_row.style.backgroundColor = o_other_row.saveback;
            if(o_other_row.childNodes)
                for(var xi=0; xi < o_other_row.childNodes.length;xi++) {
                    o_other_row.childNodes[xi].style.backgroundColor = o_other_row.childNodes[xi].saveback;
                }
        }
        for(i=0;i<mytable.a_f_body.length;i++)
            if(mytable.a_f_body[i][0] == n_id)
                mytable.a_f_body[i][1]=0;
        o_row.marked = false;
    } else {
        var aghc = getStyle(".arGridHighlight");
        var agcc = getStyle(".arGridComment");
        var bgOverride = false;
        var selectedBg = mytable.o_color.marked;
         var cellHasComment;

        if(aghc && !mytable.a_cntl.selectcolor)
            if(aghc.style)
                if(aghc.style.backgroundColor)
                    selectedBg = aghc.style.backgroundColor;
        if(agcc)
            if(agcc.style)
                if(agcc.style.backgroundColor)
                    bgOverride = true;

        o_row.marked = true;
        o_row.style.backgroundColor = selectedBg;
        o_row.saveMark = selectedBg;
        
        if(o_row.childNodes)
            for(var ih=0; ih < o_row.childNodes.length;ih++) {
                if(d.getElementById("C" + o_row.childNodes[ih].id))
                    cellHasComment = d.getElementById("C" + o_row.childNodes[ih].id).innerHTML!="";
                if(!cellHasComment || !bgOverride)
                    o_row.childNodes[ih].style.backgroundColor = selectedBg;
            }
        if(o_other_row) {
            o_other_row.marked = true;
            o_other_row.style.backgroundColor = selectedBg;
            o_other_row.saveMark = selectedBg;
            if(o_other_row.childNodes)
                for(var ij=0; ij < o_other_row.childNodes.length;ij++) {
                    if(d.getElementById("C" + o_other_row.childNodes[ij].id))
                        cellHasComment = d.getElementById("C" + o_other_row.childNodes[ij].id).innerHTML!="";
                    if(!cellHasComment || !bgOverride)
                        o_other_row.childNodes[ij].style.backgroundColor = selectedBg;
                }
        }
 
    }
}


function _getWhiteSpaceInfoStr(arrayValues, wsType) {
    var wsStr = '';
    if (arrayValues) {
        var wsInfo;
        switch (wsType) {
            case "padding":
                wsInfo = ["padding-top: ", "padding-right: ", "padding-bottom: ", "padding-left: "];
                break;
            case "margin":
            default:
                wsInfo = ["margin-top: ", "margin-right: ", "margin-bottom: ", "margin-left: "];
                break;
        }
        for (var ii = 0, numElems = arrayValues.length; ii < numElems; ++ii) {
            if (arrayValues[ii] !== 0) {
                wsStr += wsInfo[ii] + arrayValues[ii] + 'px; ';
            }
        }
    }
    return wsStr;
}

function IGo(mytable_in) {
    mytable = mytable_in;
    var tblCntl = mytable.a_cntl;
    if(tblCntl.hoverbackcolor)  mytable.o_color.hovered = tblCntl.hoverbackcolor;
    if(tblCntl.selectcolor) mytable.o_color.marked = tblCntl.selectcolor;
    if (mytable.o_color.hovered) {
        if(isARBrowserExtension) {
            mytable.s_light = ' onmouseover="_ARExtensionCall(&quot;ibiGrid.mouseover('+mytable.id + ',\'__this__\')&quot, this)" onmouseout="_ARExtensionCall(&quot;ibiGrid.mouseout(' + mytable.id + ',\'__this__\')&quot, this)"';
        } else {
            mytable.s_light = ' onmouseover="ibiGrid.mouseover('+mytable.id + ',this)" onmouseout="ibiGrid.mouseout(' + mytable.id + ',this)"';
        }
    }
    var marginStyle = (tblCntl.margin)
                      ? (' style = "' + _getWhiteSpaceInfoStr(tblCntl.margin, "margin") + '"')
                      : '';
    var s_='<div id="MAINTABLE_all'+mytable.id+'"'+marginStyle+'>';
    s_+='<div id="MAINTABLE_wtop'+mytable.id+'"><\/div>';
    s_+='<div id="MAINTABLE_wmsg'+mytable.id+'" style="display:none;position:absolute;z-index:9999;overflow:auto;top:0px"><\/div>';
    s_+='<div id="MAINTABLE_wmenu'+mytable.id+'" style="display:none;"><\/div>';
    s_+='<table border=0 cellspacing=0 cellpadding=0><tr><td valign="TOP" align="LEFT" style="display:none;">';
    s_+='<div id="MAINTABLE_filter'+mytable.id+'" style="display:none;"><\/div><\/td><td valign="TOP">';
    s_+='<div id="MAINTABLE_wbodyMain'+mytable.id+'" style="position:relative;">';
    s_+='<div id="MAINTABLE_wbody'+mytable.id+'" style="position:absolute;top:0px;'+((document.dir=='rtl')?'right':'left')+':0px;">';
    //s_+='<div style="width:100%;height:100%;position:relative;top:0;left:0;opacity:1;overflow:visible;'+(b_ie?'filter:alpha(opacity=100);':'')+'" id="MAINSPAN'+mytable.id+'">';
    //s_+='<div id=ISpan_'+mytable.id+'><\/div>';
    //s_+='<div id=ISpan2_'+mytable.id+'><\/div>';
    //s_+='<\/div>';
    s_+='<\/div>';
    s_+='<\/div>';
    s_+='<\/td><\/tr><\/table>';
    s_+='<div id="MAINTABLE_wbot'+mytable.id+'"><\/div>';
    s_+='<\/div>';

    mytable.maintable={'root':null,'filter':null,'wbot':null,'wmenu':null,'span':null};
    var mm = 'MAINTABLE_'+tblCntl.table_number;
    if(tblCntl.isAHTMTable && (typeof(tblCntl.useDivHolderID)!="undefined"))
        mm = tblCntl.useDivHolderID;
    //if(mytable.useMdiv) mm = mytable.useMdiv;
    mytable.maintable.root=d.getElementById(mm);
    if(mytable.maintable.root) {
        if(!d.getElementById('MAINTABLE_wbody'+mytable.id))
            mytable.maintable.root.innerHTML=s_;
        //mytable.o_main =  d.getElementById('ISpan_' + mytable.id);
        mytable.o_main =  d.getElementById('MAINTABLE_wbody' + mytable.id);
        //mytable.o_main2 =  d.getElementById('ISpan2_' + mytable.id);
        mytable.M = IExeMark;
        mytable.maintable.filter = d.getElementById('MAINTABLE_filter'+mytable.id);
        mytable.maintable.span = d.getElementById('MAINSPAN'+mytable.id);
        mytable.maintable.wbot = d.getElementById('MAINTABLE_wbot'+mytable.id);
        mytable.maintable.wmenu = d.getElementById('MAINTABLE_wmenu'+mytable.id);
        mytable.maintable.wbody = d.getElementById('MAINTABLE_wbody'+mytable.id);
        mytable.maintable.wbodyMain = d.getElementById('MAINTABLE_wbodyMain'+mytable.id);
        mytable.maintable.all = d.getElementById('MAINTABLE_all'+mytable.id);
    }
    var dobj_t=d.getElementById('IWindowBody'+mytable.id);
    //if(dobj_t) 
    //    dobj.style.width=dobj_t.offsetWidth+'px';
}


/**
 * Hide all across columns that contain only null values
 */
function _hideNullAcross(tbl) {
    var col, numCols, row, numRows, allNull;

    if (!tbl.a_cont.length) {
        return;
    }

    for (col = 0, numCols = tbl.a_capt.length; col < numCols; ++col) {
        if (tbl.a_capt[col].isAcross) {
            allNull = true;
            for (row = 0, numRows = tbl.a_cont.length; row < numRows; ++row) {
                if (tbl.a_cont[row][col][DARAW] != arConstants.MISSING_OR_NODATA) {
                    allNull = false;
                    break;
                }
            }
            if (allNull) {
                tbl.a_capt[col].bHideNull = true;
                tbl.a_capt[col].b_hide = true;
            } else if (tbl.a_capt[col].bHideNull) {
                tbl.a_capt[col].bHideNull = false;
                tbl.a_capt[col].b_hide = false;
            }
        }
    }
}


function IShow (fromRemoteFilter,mytable_in) {
    var tmytable=null;
    var id;
    var ttcmytable = mytable_in;
    mytable = mytable_in;    

//Do auto freeze

    if(mytable.isPivot) return;
    if(!mytable.doingFrCalc) {
        var isRoot = true;
        var remotesort = false;
        if(mytable.isRollUp) isRoot=false;
        if (mytable.sortneeded && (mytable.a_sort.length)) 
            remotesort = ttcmytable.callSort(false);
        mytable.sortneeded = false;
        if(mytable.filterChange) {
            if(ttcmytable.bykeys)
                for(var i=0;i<ttcmytable.bykeys.length;i++) ttcmytable.bykeys[i].subcalcData=null;
            ttcmytable.callFilt(isRoot);
            //ttcmytable.callHigh(isRoot);
        }
        if((mytable.haveFilters) && ttcmytable.a_filter_body) {
            ttcmytable.a_f_body = ttcmytable.a_filter_body;
            ttcmytable.a_cont = ttcmytable.a_filter_cont;
            if (mytable.a_cntl.hna) {
                _hideNullAcross(mytable);
            }
        } else {
            mytable.haveFilters = false;
            ttcmytable.a_f_body = ttcmytable.a_all_body;
            ttcmytable.a_cont = ttcmytable.a_all_cont;
            if (mytable.a_cntl.hna) {
                if (mytable.a_cntl.cacheMode) {
                    _hideNullAcross(mytable);
                } else {
                    for (var col = 0, numCols = mytable.a_capt.length; col < numCols; ++col) {
                        if (mytable.a_capt[col].bHideNull) {
                            mytable.a_capt[col].bHideNull = false;
                            mytable.a_capt[col].b_hide = false;
                        }
                    }
                }
            }
        }
        //if(typeof(mytable.n_clicks)=="undefined") mytable.n_clicks = 0;
        if(mytable.haveFilters)
            ttcmytable.n_rows = ttcmytable.a_filter_body.length;
        else
            ttcmytable.n_rows = ttcmytable.a_cntl.NumRecords;
        if(remotesort) return;
        if(mytable.AccordionIsOn) ttcmytable.resetactree();
        ISumVis();
        IBuildSubCalc();
    }

    if(mytable.maintable)
        if(!mytable.maintable.root) return;

    if(typeof(mytable.a_cntl.reportView)!="undefined") {
        if(mytable.a_cntl.reportView!=REPORTGRID) {
            //if(typeof(mytable.o_main)!="undefined")
            //    mytable.o_main.innerHTML='';
            //mytable.o_main2.innerHTML='';
            var orgdiv = document.getElementById(ibiLayoutListName[mytable.useLayout].orgdiv);
            var orgdivtable = document.getElementById(ibiLayoutListName[mytable.useLayout].orgdivtable);
            var orgdivouter = document.getElementById(ibiLayoutListName[mytable.useLayout].orgdivouter);
            var orgdivinner = document.getElementById(ibiLayoutListName[mytable.useLayout].orgdivinner);
            var tblw2 = d.getElementById('MAINTABLE_wbody'+mytable.id);
            if(typeof mytable.useThisId != "undefined")
                tblw2 = d.getElementById('MAINTABLE_wbody'+mytable.useThisId);

            if(typeof(mytable.chartinfo.saveable.size)!="undefined") {
                if(!tblw2) return;
                var h = mytable.chartinfo.saveable.size.height;
                var w = mytable.chartinfo.saveable.size.width;
                if(mytable.a_cntl.reportView==REPORTPIVOT)
                    tblw2.style.width = "";
                else
                    tblw2.style.width = w+"px";
                if(!ibiCompound.isCompoundReport) {
                    orgdivtable.style.height = h+'px';
                    orgdivtable.style.width = w+'px';
                    orgdivouter.style.height = h+'px';
                    orgdivouter.style.width = w+'px';
                    orgdiv.style.height = h+'px';
                    orgdiv.style.width = w+'px';
                }
            }
            displayReportView(mytable,false);
                if(!isCompoundCall)ibi_add_images();
            return;
        }
    }

    if((!mytable.isRollUp)&&(mytable.a_cntl.WindowDisplay!='tab')) mytable.maintable.wmenu.innerHTML = blankdot;
//     var tstr = mytable.build().replace("/\'/g","\\'");
    var tbla = d.getElementById('MAINTABLE_wbody'+mytable.id);
    // was 99999 but 1 seems to work better.
    if (tbla) { 
        tbla.style.width = (mytable.useMdiv) ? "*" : "1px";
    }

    if(mytable.isHFreezeEnabled && !mytable.isRollUp) {
        ibiIosGrid.show(mytable,mytable.maintable.root);
    } else {
        var tstr = IBuild();
        mytable.o_main.innerHTML = tstr;
    } 
    
    var ppp=mytable;
    window.setTimeout(function(){ibiGrid.show2(fromRemoteFilter,ppp);},0);
    if(typeof ibiNotes !== 'undefined') {
       ibiNotes.AddNotesArray(mytable.id);
    }
    IMarkSelection();
    if(!b_ios)ibi_add_popmenu(mytable);
}

function IShow2(fromRemoteFilter,mytable)
{    
    var id = mytable.id;
    if(typeof mytable.useThisId != "undefined")
        id = mytable.useThisId;
    var tbls=null,tblw,tblww,tblwh,area_size;
    tbls = d.getElementById('IScrollWindowBody'+ id);
    tblw = d.getElementById('IWindowBody'+ id);
    if(!mytable.setFreezeable) {
        mytable.setFreezeable = function() {
            ibiMenu.Closemenu(null);
            if(mytable.doingFrCalc)
                return;
            var tblw = d.getElementById('IWindowBody'+ mytable.id);
            var tblb = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdiv);
            var area_size;
            if (typeof(mytable.useMdiv) === 'string') { //display report in "tab"
                area_size = document.getElementById(mytable.useMdiv).offsetWidth;
            } else {
                area_size = (LayoutSection.length==0) ? document.body.clientWidth : tblb.offsetWidth;
            }
            mytable.freezeAble = false;
            if(tblw)
                if(tblww >area_size) {
                    mytable.freezeAble = true;
                }
            if(mytable.freezeAble && (mytable.save_n_freeze_column!=0)) {
                mytable.n_freeze_column = mytable.save_n_freeze_column ;
                mytable.horizontal_scroll=-1;
                IShow(fromRemoteFilter, mytable);
            }
            if(!mytable.freezeAble && (mytable.n_freeze_column!=0)) {
                mytable.n_freeze_column = 0;
                mytable.horizontal_scroll=-1;
                IShow(fromRemoteFilter, mytable);
            }
        };

        if(!mytable.isHFreezeEnabled) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", mytable.setFreezeable, false);
            } else {
                window.attachEvent("onresize", mytable.setFreezeable);
            }
        }
    }

    if(mytable.maintable)
        if(!mytable.maintable.root) return;
    
    if(!mytable.isRollUp) {
        if(tblw == null) return;
        if(tblw.offsetParent) {
            var tbla = d.getElementById('MAINTABLE_all'+id);
            var tblb = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdiv);
    
            //tblww = tblw.offsetWidth;
            tblwh = tblw.offsetHeight;
            //tblww = tbla.offsetWidth;
            tblww = tblw.offsetWidth;
            if (typeof(mytable.useMdiv) === 'string') { //display report in "tab"
                area_size = document.getElementById(mytable.useMdiv).offsetWidth;
            } else {
                area_size = (LayoutSection.length==0) ? document.body.clientWidth : tblb.offsetWidth;
            }
            //if(tblw.offsetParent.offsetParent)area_size=tblb.offsetWidth;
    
            if(mytable.a_cntl.table_div)
                if(mytable.a_cntl.table_div.width)
                    if(mytable.a_cntl.table_div.width!=-1) area_size=mytable.a_cntl.table_div.width;
            if(tblw) 
                if(tblww >area_size) mytable.freezeAble=true;
    
            if(!mytable.doingFrCalc) {
                var tblf = d.getElementById('IFixWindowBody'+ id);
     
                if((tblf)&&(mytable.horizontal_scroll==-1)) {
                    mytable.doingFrCalc = true;
                    if((tblf.offsetWidth+tbls.offsetWidth)<=area_size) {
                        if(!mytable.fullScreenOn)mytable.n_freeze_column = 0;
                    } else {
                        mytable.horizontal_scroll = area_size - tblf.offsetWidth;
                        if (tblwh <= tblb.offsetHeight) {
                            mytable.horizontal_scroll += _env.getScrollbarWidth();
                        }
                        if(mytable.horizontal_scroll<350) mytable.horizontal_scroll=350;
                    }
                    IShow(fromRemoteFilter,mytable);
                    mytable.doingFrCalc = false;
                    return;
                }
            } 
            /*
            if(!mytable.isRollUp && mytable.useMdiv==null)  {
                if(mytable.a_cntl.table_div.viewPortType=='FLOWING') {
                    mytable.maintable.root.style.width = (tblww)+'px';
                    mytable.maintable.root.style.height = (tblwh)+'px';
                }
            }
            */
        }
    }
    if(mytable.a_cntl.WindowDisplay!="tab") refreshCharts(mytable);

    if(!isCompoundCall) ibi_add_images();
    if(tbls) {
        tbls.scrollLeft = mytable.scrollLeft;
        IFixRowHeight();
    }
    var pmytable = mytable;
    var useDiv = mytable.iosDiv;
    if(mytable.isRollUp) {
        pmytable = getMyTable(mytable.parent_table);
    }
    if(pmytable.fullScreenOn && useDiv) {
        ibiIosGrid.show(mytable,useDiv);
    } 

    if(ibiCompound.ibiLayout.length && b_ios && arDisplayMode === DISPLAY_MODE_ADAPTIVE && (typeof ARMobileDashboards != 'undefined')) {
        var currentLayoutSlide = ARMobileDashboards[0].getCurrentLayoutSlide();
        var gridHeight = mytable.maintable.wbodyMain.querySelector('.arGrid').offsetHeight + mytable.maintable.wmenu.offsetHeight;

        // resize the root container in Adaptive mode so that the grid can be scrolled vertically
        if(!mytable.isRollUp && (gridHeight > ARMobileDashboards[0].contentSectionHeight)) {
            mytable.maintable.root.style.height = gridHeight + 'px';
        }
        
        // in case rollup is opened when grid is scrolled left, reset scrollLeft so the rollup is in view
        currentLayoutSlide.slides[currentLayoutSlide.slideIndex][0].scrollLeft = 0;

        ARMobileDashboards[0].updateCurrentChart();
    }
    //if(mytable.sizeToGrid) {
//because of rendering issues in IE we resize twice
        //setTimeout("ibiGrid.resizeGrid("+mytable.a_cntl.table_number+");",1000);
        window.setTimeout(function(){
            ISizeGrid(mytable.id);
        },0);
    //}
//    mytable.maintable.root.style.width=mytable.o_main.clientWidth+'px';
//    mytable.maintable.root.style.height=mytable.o_main.clientHeight+'px';
}

function refreshCharts(mytable)
{
    if(mytable.redrawCharts) {
        for(var i=0;i<maxwindows;i++){
            var ci = pwn[i].chartinfo;
            if((pwn[i].table_number==mytable.a_cntl.table_number) &&
                ((pwn[i].type==typechart)||(pwn[i].type==typepivot))&&(ci.saveable.linked)) {
                ci.xars = null;
                ibiChart.makeChart(null,ci,i,ci.usediv);
            }
        }
        for(var ix=0; ix<mytable.chartinfo.children.length;ix++)  {
            var cx = mytable.chartinfo.children[ix];
            if(cx.saveable.linked) {
                cx.xars = null;
                ibiChart.makeChart(null,cx,(-999+mytable.a_cntl.table_number),cx.usediv);
            }
        }
        mytable.redrawCharts=false;
    }
}

var resizeTableTimeoutId;
function resizeTable(e) {
    window.clearTimeout(resizeTableTimeoutId);
    resizeTableTimeoutId = window.setTimeout(function () { resizeTables(); }, 100);
}

function resizeTables() {
    var resizeInfo = window.ibiGrid.resizeInfo;

    if (resizeInfo) {
        var i, numTables, winSize;
        winSize = {
            height: window.innerHeight || document.documentElement.offsetHeight,
            width: window.innerWidth || document.documentElement.offsetWidth
        };

        if (winSize.height > 0 && winSize.width > 0) {
            resizeInfo.height = winSize.height;
            resizeInfo.width = winSize.width;
        }
        if (winSize.height === 0 || winSize.width === 0) {
            return;
        }

        for (i = 0, numTables = T_capt.length; i < numTables; ++i) {
            if (MyTable[i].autoFit === arConstants.AUTOFIT_RESIZE) {
                ISizeGrid(i);
            }
        }
    }
}

function ISizeGrid(tn) {
    mytable = MyTable[tn];
    var id = 'MAINTABLE_'+mytable.id;
    if(mytable.a_cntl.isAHTMTable && (typeof(mytable.a_cntl.useDivHolderID)!="undefined"))
        id = mytable.a_cntl.useDivHolderID;
    var main = d.getElementById(id);
    var tblw = d.getElementById('IWindowBody'+mytable.id);
    if(!tblw) return;
    var tblw2 = d.getElementById('MAINTABLE_wbody'+mytable.id);
    if(!tblw2) return;
    var tblData = d.getElementById('ITableData' + mytable.id); // null when freezing column
    var scrollBarIssue = false;
    var isAHTMTable = ( T_cntl.length ) ? T_cntl[0].isAHTMTable : null;
    var winSize,
        tblMainTable = mytable.maintable,
        resizeInfo = (mytable.autoFit) ? window.ibiGrid.resizeInfo : null;

    winSize = resizeInfo || { height: main.offsetHeight, width: tblw.offsetWidth };

    var h = winSize.height || 50;
    var w = winSize.width || 50;

    if (resizeInfo) {
        h -= resizeInfo.vMargins;
        w -= resizeInfo.hMargins;
        if ((tblMainTable.wbody.scrollHeight > h) ||
            ((T_capt.length > 1) && (d.body.clientWidth < w))) {
            w = d.body.clientWidth;
        }
    } else {
        if (!isAHTMTable && tblData && (tblMainTable.wbody.scrollHeight > h)) {
            try {
                var col, numCols, wrapSet = false;
                for (col = 0, numCols = mytable.a_capt.length; col < numCols; ++col) {
                    if (mytable.a_capt[col].name.wrap.trim() != "NOWRAP") {
                        wrapSet = true;
                        break;
                    }
                }
                if (!wrapSet) {
                    scrollBarIssue = true;
                    w = main.clientWidth;
                }
            } catch (e) { }
        }
    }

    tblw2.style.width = w+"px";

    var orgdivinner = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdivinner);
    var layoutBar = d.getElementById(ibiLayoutListName[mytable.useLayout].IBILAYOUTDIV);
    if(mytable.sizeToGrid) {
        h = tblw2.offsetHeight;
        if(tblMainTable.wmenu.style.display!='none') h += tblMainTable.wmenu.offsetHeight;
        var orgdiv = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdiv);
        var orgdivtable = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdivtable);
        var orgdivouter = d.getElementById(ibiLayoutListName[mytable.useLayout].orgdivouter);

        if(LayoutSection.length==0) {
            orgdivtable.style.height = h+'px';
            orgdivtable.style.width = w+'px';
            orgdivouter.style.height = h+'px';
            orgdivouter.style.width = w+'px';
            orgdiv.style.height = h+'px';
            orgdiv.style.width = w+'px';
        }
    }
    if(!mytable.isRollUp && mytable.useMdiv==null)  {
        if(mytable.a_cntl.table_div.viewPortType=='FLOWING') {
            tblMainTable.root.style.width = w+'px';
            h = tblw2.offsetHeight;
            if(tblMainTable.wmenu.style.display!="none") h+=tblMainTable.wmenu.offsetHeight;
            tblMainTable.root.style.height = h+'px';
            //var screenH = h+parseInt(tblMainTable.root.style.top,10);
            //if(layoutBar && (layoutBar.style.display != "none"))
            //    screenH += layoutBar.offsetHeight;
            //if(orgdivinner.offsetHeight < screenH)
            //    orgdivinner.style.height = screenH + 'px';
        }
    }
    if(tblMainTable.wbodyMain) {
        if (resizeInfo) {
            tblMainTable.wbodyMain.style.width = w + "px";
            tblMainTable.wbodyMain.style.height = h + "px";
        } else {
            if (scrollBarIssue) {
                tblw.style.width =
                tblData.style.width =
                tblMainTable.all.style.width =
                tblMainTable.wbody.style.width =
                tblMainTable.wbodyMain.style.width =
                tblMainTable.wbot.style.width =
                tblMainTable.wmenu.style.width = w + "px";
            } else {
                tblMainTable.wbodyMain.style.width = tblMainTable.wbody.offsetWidth + "px";
                tblMainTable.wbodyMain.style.height = tblMainTable.wbody.offsetHeight + "px";
            }
        }
    }

    // Workaround for Chrome-specific issues with unnecessary or the lacking of scroll bars
    if(!isAHTMTable) {
        var sDisplay = tblMainTable.root.style.display;
        var sWidth = tblMainTable.all.style.width;
        
        tblMainTable.root.style.display = "none";
        tblMainTable.all.style.width = tblMainTable.root.style.width;

        window.setTimeout(function(){
            if(tblMainTable.root.style.display == "none") {
                tblMainTable.root.style.display = sDisplay;
            }

            window.setTimeout(function() {
                tblMainTable.all.style.width = sWidth;
            },100);        
        },100);
    }
    
    refreshCharts(mytable);
}

function IBuild2(id){
    mytable = MyTable[id];
    return IBuild();
}

function IRememberScroll(id)
{
    var obj = document.getElementById("IScrollWindowBody"+id);
    MyTable[id].scrollLeft = obj.scrollLeft;
    ibiMenu.Closemenu();
}

function IBuildBar(mytable) {
    var status_bcolor = "";
    if(mytable.a_cntl.statbackcolor) status_bcolor = "background-color:"+mytable.a_cntl.statbackcolor+";";
    var status_color = "";
    if(mytable.a_cntl.statcolor) status_color = "color:"+mytable.a_cntl.statcolor+";";
    var type_chart  = '<table><tr>';
	type_chart += '<td valign="MIDDLE"><div style="cursor:pointer;"  id="gpopmenu'+mytable.id+'">'+ibiSkin.cpopicon+'<\/div><\/td>';
	type_chart += '<\/tr><\/table>';


	var mline  = '<Table class="arGridBar" border='+mytable.n_border+' ';
	if(status_color || status_bcolor) {
		mline += 'style="';
		if(status_color)
			mline += status_color;
		if(status_bcolor)
			mline += status_bcolor;
		mline += '" ';
	}
	mline += 'width="100%" cellspacing=0 cellpadding=0><tr height="18">';
	mline += '<td Width=30 class="arPivotMenuBarContainer" style="white-space:nowrap;" Valign="MIDDLE">'+type_chart+'<\/td>';
	var dopad = true;
	if(mytable.a_cntl.menuops.fsappmode || b_ios)
		if(!b_ie || (b_ie_version>7)) {
			mline += '<td align="right" width="*"><span title="'+ibiMsgStr["fsr"]+'" style="cursor:pointer;" onclick="ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,true)">'+ibiSkin.fullicon1+'<\/span><\/td>';
			dopad = false;
		}
	if(dopad) mline += '<td width="*">&nbsp;<\/td>';
	mline += '<\/tr><\/table>';
	window.setTimeout(function(){
        var MI_FT=[];
        var n_id = null;
        var id = 'gpopmenu'+mytable.id;
        var icon = ibiSkin.cpopicon;

        MI_FT = generateMenuArray(mytable,icon,0,"global");

        var toolbr = d.getElementById(id);
        if(toolbr) {
            var MP_copy = ibiStd.copyObject(MP_GRP);
            MP_copy[0].css = {};
            mytable.xmenu = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,id);
        }
	},0);

	return mline;

}

function IBuild () {
    var body_color = d.body.style.backgroundColor;
    var i, s_ =[];
    var tblCntl = mytable.a_cntl;
    var status_bcolor = tblCntl.statbackcolor;
    var cs;
    var status_color  = tblCntl.statcolor;
    var tableAutofit, widthPct = "";

    if(!status_bcolor) status_bcolor= defStatusColor;
    var mbcolor = tblCntl.menubackcolor;
    if(!mbcolor) mbcolor = defStatusColor;
    var widthstr='';
    var maxpag = Math.ceil(mytable.n_rows/mytable.o_paging.n);
    if(maxpag>0) maxpag = maxpag-1;

    switch (tblCntl.tblAutoFit) {
        case arConstants.AUTOFIT_ON:
        case arConstants.AUTOFIT_RESIZE:
            if (mytable.useMdiv) {
                tableAutofit = tblCntl.tblAutoFit = arConstants.AUTOFIT_OFF; // no AUTOFIT for DIV
            } else {// now AUTOFIT_ON to have same logic as AUTOFIT_RESIZE
                tableAutofit = arConstants.AUTOFIT_RESIZE; //mytable.a_cntl.tblAutoFit;
            }
            break;
        default:
            tableAutofit = arConstants.AUTOFIT_OFF;
            break;
    }
    if (tableAutofit) {
        var bodyStyle, scrollBarWidth,
            resizeInfo = window.ibiGrid.resizeInfo;

        if (typeof window.ibiGrid.resizeInfo === "undefined") {
            scrollBarWidth = _env.getScrollbarWidth();

            resizeInfo = {
                scrollBarWidth: scrollBarWidth,
                height: window.innerHeight || d.documentElement.offsetHeight,
                width: window.innerWidth || d.documentElement.offsetWidth,
                vMargins: 0,
                hMargins: 0
            };

            if (d.body.currentStyle) {
                bodyStyle = d.body.currentStyle;
            } else if (window.getComputedStyle) {
                bodyStyle = window.getComputedStyle(d.body, null);
            }

            if (typeof bodyStyle !== "undefined") {
                resizeInfo.vMargins = parseInt(bodyStyle.marginTop, 10) + parseInt(bodyStyle.marginBottom, 10);
                resizeInfo.hMargins = parseInt(bodyStyle.marginLeft, 10) + parseInt(bodyStyle.marginRight, 10);
            }

            if (tblCntl.margin) {
                resizeInfo.vMargins += tblCntl.margin[0] + tblCntl.margin[2];
                resizeInfo.hMargins += tblCntl.margin[1] + tblCntl.margin[3];
            }

            window.ibiGrid["resizeInfo"] = resizeInfo;
        }

        if ((tableAutofit === arConstants.AUTOFIT_RESIZE) && !resizeInfo.setupEvent) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", resizeTable, false);
            } else {
                window.attachEvent("onresize", resizeTable);
            }
            resizeInfo.setupEvent = true;
        }
        mytable.autoFit = tableAutofit;
        widthPct = ' width="100%" ';
    }

    if((tblCntl.table_div)&&(tblCntl.table_div.width>0)) widthstr=' width="'+tblCntl.table_div.width+'" ';    
    //if(mytable.isRollUp) widthstr = ' width="100%" ';

    s_[s_.length]= '<table class="arGrid" '+widthstr;

    if(!mytable.is_export) {
        if(isARBrowserExtension) {
            s_[s_.length]= ' onclick="_ARExtensionCall(&quot;cellmenu()&quot;);" onmouseout="_ARExtensionCall(\'curCell.tablenumber=-1;\')"';
        } else {
            s_[s_.length]= ' onclick="cellmenu();" onmouseout="curCell.tablenumber=-1;"';
        }
    }

	s_[s_.length]= ' style="background-color:'+body_color+'" id="IWindowBody'+mytable.id+'"'+widthPct+' cellpadding="0" cellspacing="0" border=0>';
    if(tblCntl.status==0) {
        s_[s_.length]= "<tr><td ";
        if(mytable.n_freeze_column) s_[s_.length]=" colspan=2 ";
        s_[s_.length]= '>';    
        s_[s_.length]= IBuildPage();
        s_[s_.length]= "<\/td><\/tr>";
    }

	if(mytable.a_cntl.enableNewGridBar) {
        s_[s_.length]= "<tr><td ";
        if(mytable.n_freeze_column) s_[s_.length]=" colspan=2 ";
        s_[s_.length]= '>';
        s_[s_.length]= IBuildBar(mytable);
        s_[s_.length]= "<\/td><\/tr>";
	}


    if(mytable.n_freeze_column){
        mytable.side = 'l';
        if(!mytable.heading_split) {
            if((mytable.o_paging.c==0)&&(tblCntl.tablehead)) {
                s_[s_.length]= "<tr><td colspan=2>";
                s_[s_.length]=IBuildHead(isTableHead,-1,-1);
                s_[s_.length]= "<\/td><\/tr>";
            }
            s_[s_.length]= "<tr><td colspan=2>";
            s_[s_.length]= IBuildHead(isHead,-1,-1);
            s_[s_.length]= "<\/td><\/tr>";
        }
        s_[s_.length]= '<tr><td>';
        if(mytable.horizontal_scroll==-1) {widthStr1='width="*"';widthStr2='';}
        else {
            widthStr1='width="'+mytable.horizontal_scroll+'px"';
            widthStr2='scrollLeft:'+mytable.scrollLeft+';overflow:scroll;width:'+mytable.horizontal_scroll+'px;overflow-x:scroll;overflow-y:hidden;';
        }
 
        s_[s_.length]= '<table id="IFixWindowBody'+mytable.id+'" cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing + mytable.o_css.main + ' border='+mytable.n_border+'>';
        if(mytable.heading_split) {
            if((mytable.o_paging.c==0)&&(tblCntl.tablehead))
                s_[s_.length]=IBuildHead(isTableHead,0,mytable.n_freeze_column-1);
            s_[s_.length]= IBuildHead(isHead,0,mytable.n_freeze_column-1);
        }
        if(tblCntl.acheading) s_[s_.length]= IBuildHead(isAcHead,0,mytable.n_freeze_column-1);
        s_[s_.length]= IBuildCapt();
        if(tblCntl.ibinotvalid) {
            cs = ICalcColSpan(0,mytable.n_freeze_column-1);
            s_[s_.length]='<tr><td class="arAuthorizedMessage" colspan='+cs+'>'+ibiMsgStr['lic']+'<\/td><\/tr>';
        }
        s_[s_.length]= IBuildBody();
        if(mytable.footing_split) s_[s_.length]= IBuildHead(isFoot,0,mytable.n_freeze_column-1);
        s_[s_.length]='<tr><td height="16px"><\/td><\/tr>';
        s_[s_.length]= '<\/table>';
        s_[s_.length]= '<\/td><td valign="top">';
        mytable.side = 'r';
        s_[s_.length]= '<div '+widthStr1+' id="IScrollWindowBody'+mytable.id+'" style="'+widthStr2+';" onscroll="ibiGrid.rememberScroll('+mytable.id+')">';
        s_[s_.length]= '<table id="IScrollWindowBodyTab'+mytable.id+'" cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing  + mytable.o_css.main + '  border='+mytable.n_border+'>';
        if(mytable.heading_split) {
            if((mytable.o_paging.c==0)&&(tblCntl.tablehead))
                s_[s_.length]=IBuildHead(isTableHead,mytable.n_freeze_column,-1);
            s_[s_.length]= IBuildHead(isHead,mytable.n_freeze_column,-1);    
        }
        if(tblCntl.acheading) s_[s_.length]=IBuildHead(isAcHead,mytable.n_freeze_column,-1);
        s_[s_.length]= IBuildCapt();
        if(tblCntl.ibinotvalid) {
            cs = ICalcColSpan(mytable.n_freeze_column,mytable.a_capt.length);
            s_[s_.length]='<tr><td class="arAuthorizedMessage" colspan='+cs+'>'+ibiMsgStr['lic']+'<\/td><\/tr>';
        }
        s_[s_.length]= IBuildBody();
        if(mytable.footing_split){
             s_[s_.length]= IBuildHead(isFoot,mytable.n_freeze_column,-1);
             if(mytable.o_paging.c==maxpag)s_[s_.length]= IBuildHead(isTableFoot,mytable.n_freeze_column,-1);
        }
        s_[s_.length]= "<\/table>";
        s_[s_.length]= "<\/div>";
        s_[s_.length]= '<\/td><\/tr>';
        if(!mytable.footing_split) {
            s_[s_.length]= "<tr><td colspan=2>";
            s_[s_.length]= IBuildHead(isFoot,-1,-1);
            if(mytable.o_paging.c==maxpag)s_[s_.length]= IBuildHead(isTableFoot,-1,-1);
            s_[s_.length]= "<\/td><\/tr>";
        }
    }else{
        s_[s_.length]='<tr><td>';
        s_[s_.length] = '<table id="ITableData' + mytable.id + '" ' + widthPct
            + widthstr + " cellpadding=0 cellspacing=0" + mytable.o_css.main + " border=" + mytable.n_border + ">";
        if((mytable.o_paging.c==0)&&(tblCntl.tablehead))
            s_[s_.length]=IBuildHead(isTableHead,-1,-1);
        s_[s_.length]=IBuildHead(isHead,-1,-1);
        s_[s_.length]= IBuildHead(isAcHead,-1,-1);
        s_[s_.length]= IBuildCapt();
        if(tblCntl.ibinotvalid) {
            cs = ICalcColSpan(0,mytable.a_capt.length);
            s_[s_.length]='<tr><td class="arAuthorizedMessage" colspan='+cs+'>'+ibiMsgStr['lic']+'<\/td><\/tr>';
        }
        s_[s_.length]= IBuildBody();
        s_[s_.length]= IBuildHead(isFoot,-1,-1);
        if(mytable.o_paging.c==maxpag)s_[s_.length]= IBuildHead(isTableFoot,-1,-1);
        s_[s_.length]= "<\/table>";
        s_[s_.length]= '<\/td><\/tr>';
    }
 

    if(tblCntl.status==1) {
        s_[s_.length]="<tr><td ";
        if(mytable.n_freeze_column) s_[s_.length]=" colspan=2 ";
        s_[s_.length]= '>';    
        s_[s_.length]= IBuildPage();
        s_[s_.length]= "<\/td><\/tr>";
    }
    s_[s_.length]= "<\/table>";
    var sa = s_.join('');
    return sa;
}

function IBuildPage() {
    var alignStr,fc,lc;
    var pers;
    var trcs = mytable.a_cntl.NumRecords;
    var ftrcs = trcs;
    if(mytable.haveFilters) ftrcs = mytable.a_filter_body.length;
    var n_a = Math.ceil(ftrcs / mytable.o_paging.n) - 1;
    if(ftrcs==0) {
        pers = 0;
        n_a= 0;
    } else {
        pers = Math.round((mytable.a_f_body.length/mytable.a_cntl.NumRecords)*10000)/100;
    }
    var status_bcolor = mytable.a_cntl.statbackcolor;
    var bcolorStr = "";
    if(status_bcolor) bcolorStr = "background-Color:"+status_bcolor+";";
    var tcolor = "";
    if (mytable.a_cntl.statcolor) tcolor = "color:"+mytable.a_cntl.statcolor+";";
    if (mytable.a_cntl.statfonttype) tcolor += "font-family:"+mytable.a_cntl.statfonttype+";";
    if (mytable.a_cntl.statfontsize) tcolor += "font-size:"+mytable.a_cntl.statfontsize+"pt;";
    if (mytable.is_export) return '';
    if (mytable.vertical_scroll) return '';
    var tbstr = ibiMsgStr['pbottext'], tbicon = ibiSkin.pboticon;
    var tcstr = ibiMsgStr['tctext'], tcicon = drawSUM(mytable);
        if(mytable.a_cntl.status) {
        tbstr=ibiMsgStr['ptoptext'];
        tbicon=ibiSkin.ptopicon;
    }
    var a_ = ['<table class="arGridBar" style="'+bcolorStr+'" width="100%" border='+mytable.n_border+' cellspacing=0 cellpadding=0><tr><td><table cellspacing="4" cellpadding="0" width="100%" border="0"><tr>'], n_cnt = a_.length;
    mytable.o_paging.c = mytable.o_paging.c * 1;
    var ss_ = '<span style="cursor:pointer;" onclick="javascript:MyTable[' + mytable.id + '].exePage(';
    var s_ = '<td style="white-space:nowrap" width=20>',se = '<\/td>';
    var scb = '', sce = '';    
    var minstr = '';
    switch(mytable.a_cntl.statusalign) {
        case 0: alignStr=' align="LEFT" ';  break;
        case 1: alignStr=' align="CENTER" ';break;
        case 2: alignStr=' align="RIGHT" '; break;
    }
    var leftpg1='',rightpg1='',leftpg2='',rightpg2='';
    if (mytable.o_paging.c > 0) {
        if (mytable.o_paging.s_pf) leftpg1 = ss_ + '0)"  title="'+ibiMsgStr['fpg']+'">' + mytable.o_paging.s_pf + '<\/span>';
        if (mytable.o_paging.s_pp) leftpg2 = ss_ + (mytable.o_paging.c - 1) + ')"  title="'+ibiMsgStr['ppg']+'">' + mytable.o_paging.s_pp + '<\/span>';
    }
    if (mytable.o_paging.c < n_a) {
        if (mytable.o_paging.s_pn) rightpg1 = ss_ + (mytable.o_paging.c + 1) + ')"  title="'+ibiMsgStr['npg']+'">' + mytable.o_paging.s_pn + '<\/span>';
        if (mytable.o_paging.s_pl) rightpg2 = ss_ + n_a + ')"  title="'+ibiMsgStr['lpg']+'">' + mytable.o_paging.s_pl + '<\/span>';
    }
    //if(b_ios)
    //    a_[n_cnt++] = '<td width=15><span title="'+tbstr+'" style="cursor:pointer;" onclick="ibi_iosMenu.fullScreen('+mytable.a_cntl.table_number+',true)">'+tbicon+'<\/span><\/td>';
    //else
    if(isARBrowserExtension) {
        a_[n_cnt++] = '<td width=15><span title="'+tbstr+'" style="cursor:pointer;" onclick="_ARExtensionCall(&quot;MyTable[' + mytable.id + '].toggleStatus()&quot;)">'+tbicon+'<\/span><\/td>';
    } else {
        a_[n_cnt++] = '<td width=15><span title="'+tbstr+'" style="cursor:pointer;" onclick="MyTable[' + mytable.id + '].toggleStatus()">'+tbicon+'<\/span><\/td>';
    }

    if(mytable.haveFilters) {
        var calcs = false;
        if(mytable.top_aggregate || mytable.bottom_aggregate) calcs=true;
        if(calcs) a_[n_cnt++] = '<td width=30 align="LEFT" style="white-space:nowrap" ><span title="'+tcstr+'" style="cursor:pointer;" onclick="MyTable[' + mytable.id + '].togglecalc()">'+tcicon+'<\/span><\/td>';
    }
    a_[n_cnt++] = minstr;
 
     var frcs = mytable.o_paging.c*mytable.o_paging.n+1;
    if(mytable.n_rows==0) frcs = 0;
    var lrcs = frcs+mytable.o_paging.n-1;
    if(lrcs>mytable.n_rows) lrcs = mytable.n_rows;
    
    scb = leftpg1+leftpg2;
    sce = rightpg1+rightpg2;
    var tdstart = '<td style="white-space:nowrap;'+tcolor+'" width="*"'  + '>';
    var sp = new RegExp('%tn','g');
    var sp2 = new RegExp('%ind','g');
    var indStr = "<span style='cursor:pointer;text-decoration:underline;' title='"+ibiMsgStr["gotopage"]+"' onclick='showGotoPage("+mytable.a_cntl.table_number+","+( mytable.o_paging.c+1)+")' id='ipgnum"+mytable.a_cntl.table_number+"'>"+( mytable.o_paging.c+1)+"<\/span>";
    a_[n_cnt++] = '<td '+alignStr+'><table border=0><tr>'+tdstart + scb + '<\/td>' +tdstart +
        mytable.o_paging.s_tt.replace('%inds',indStr).replace(sp2, mytable.o_paging.c+1).replace('%frcs',frcs).replace('%lrcs',lrcs).replace('%trcs',trcs).replace('%pers',pers).replace('%pgs', n_a+1).replace('%rcs', mytable.n_rows).replace(sp, mytable.a_cntl.table_number) + 
        '<\/td>' + tdstart + sce + '<\/td><\/tr><\/table><\/td>';
    
    if(arDisplayMode !== DISPLAY_MODE_ADAPTIVE && !mytable.isRollUp && (mytable.a_cntl.menuops.fsappmode || b_mobile))
        if(!b_ie || (b_ie_version>7))
              a_[n_cnt++] = '<td width=30><span title="'+ibiMsgStr["fsr"]+'" style="cursor:pointer;" onclick="ibiIosGrid.cancelDrags();ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,true)">'+ibiSkin.fullicon1+'<\/span><\/td>';
    a_[n_cnt++] = '<\/tr><\/table><\/td><\/tr><\/table>';
    return a_.join('');
}
 
function IBuildCell(value, s_CSS, s_add, s_color,s_valign) {
    return '<td style="'+s_color+'" ' + (s_valign? ' valign="' + s_valign + '"' : '')+ s_CSS + (s_add ? ' ' + s_add : '') + '>' + value + '<\/td>';
}

function IBuildSubCalc() {
    var bys = [];
    var x;

    if(!mytable.bykeys) return;
    for(var i=0;i<mytable.bykeys.length;i++) {
        bys[i]=mytable.a_capt[mytable.bykeys[i].column].dataField;
        if(mytable.bykeys[i].subcalcs) 
            if(mytable.bykeys[i].subcalcData==null) {
                mytable.bykeys[i].subcalcCol=[];
                for(var jx=0;jx<bys.length;jx++) mytable.bykeys[i].subcalcCol[jx] = bys[jx];
                x = bys.length;
                for(var j=0;j<mytable.a_capt.length;j++){
                    if(mytable.a_capt[j].hascalc) 
                        mytable.bykeys[i].subcalcCol[x++]=mytable.a_capt[j].dataField;
                }
                mytable.bykeys[i].subcalcData = IBuildSubCalcData(bys);
            }
    }
}

function IBuildSubCalcData(bys)
{
    var i, numCols, curCol;
    var group = [], fmtCols = [];
    var b;
    var xar,yar;
    var newcont=null;
    var btypeA = [];

    for (i = 0, numCols = mytable.a_capt.length; i < numCols; i++) {
        curCol = mytable.a_capt[i];
        if (curCol.hascalc) {
            group[group.length] = IGetOriginalDataField(curCol); 
            fmtCols[fmtCols.length] = curCol.dataField;
            if(curCol.SUM) b='SUM';
            else if(curCol.MIN) b='MIN';
            else if(curCol.MAX) b='MAX';
            else if(curCol.AVG) b='AVG';
            else if(curCol.COU) b='COU';
            else if(curCol.DIS) b='DIS';
            btypeA[btypeA.length]=b;
        }
    }
    if(mytable.a_cntl.cacheMode) {
        if(group.length) {
            xar = [];
            yar = [];
            newcont = [];
            newcont = mytable.getChartValues(group,bys,xar,yar,btypeA,false,i,newcont,true,false,-1,i,true,null,fmtCols);
        }
    } else
    for(var ix=0; ix < group.length; ix++) {
        xar = [];
        yar = [];
        if(newcont==null) newcont=[];
        newcont = mytable.getChartValues(group[ix],bys,xar,yar,btypeA,false,ix,newcont,true,false,-1,ix,true);
    }
    return(newcont);
}

function ISumVis()
{
    var si,aval,val,al;
    var icol;
    for(var col=0; col < mytable.a_capt.length; col++) {
        if(mytable.a_capt[col].vis||mytable.a_capt[col].vispct||mytable.a_capt[col].haspro) {
            icol = mytable.a_capt[col].dataField;
            mytable.aggregateFun('ALL',col);
            if(mytable.haveFilters) {
                mytable.a_capt[col].abstotal = mytable.FilterAbsTotal[icol];
                if(mytable.FilterTotalMax[icol]!=null)
                    mytable.a_capt[col].maxval = mytable.FilterTotalMax[icol].raw;
                if(mytable.FilterTotalMin[icol]!=null)
                    mytable.a_capt[col].minval = mytable.FilterTotalMin[icol].raw;
            } else {
                mytable.a_capt[col].abstotal = mytable.FullAbsTotal[icol];
                mytable.a_capt[col].maxval = mytable.FullTotalMax[icol].raw;
                mytable.a_capt[col].minval = mytable.FullTotalMin[icol].raw;
            }
        }
    }
}
 

function IGetSubCalc(calctable,conditions)
{
    var found = false;
    for(var i=0;i<calctable.length;i++) {
        found = true;
        for(var j=0; j< conditions.length; j++) 
            if(conditions[j]!=mytable.IBs[calctable[i][j][DARAW]]) found=false;
        if(found) return calctable[i];
    }
    return null;
}



function IBuildHead(istype,first_col,last_col,slevel,noHTML) {
    var heading = null, curHeadRow = null, curHeadColCell = null, aCaptCurHeadCol = null, lcCaptCol = null;
    var hstart = 0, numColsInCurHeadRow = 0;
    var s_ ='';
    var fc = (first_col == -1) ? 0 : first_col;
    var lc = (last_col == -1) ? mytable.n_cols : last_col;
    var maxcols = lc-fc;
    var ph = false, doingSubs = false, printheading = true;
    var tn = mytable.a_cntl.table_number;
    var idstr, useLc, useFc, cs;
    var checkVisualize = false;

    // needed because visual data not counted as column; but for colspan it is 
    var _setColInfo = function(colHeadingInfo, startingCol, userDefColspan) {
        var colspan = 0, actualColSpan = 0, aCaptCurCol, numNoprints = 0,
            firstTime = (typeof colHeadingInfo.info === 'undefined'),
            colInfo, col, numCols;

        if (firstTime) {
            colInfo = {};
            numCols = mytable.n_cols;
        } else {
            colInfo = colHeadingInfo.info;
            numCols = colInfo.nextRealCol;
        }

        for (col = startingCol; col < numCols; ++col) {
            aCaptCurCol = mytable.a_capt[col];
            if (!aCaptCurCol.noprint) {
                ++colspan; ++actualColSpan;
                if ((istype !== isAcHead) && aCaptCurCol.visOrig) { ++colspan; }
                if (aCaptCurCol.vis) { ++actualColSpan; }
                if (aCaptCurCol.vispct) { ++actualColSpan; }
                if (aCaptCurCol.haspro) { ++actualColSpan; }
                if (colspan >= userDefColspan) { break; }
            } else {
                ++numNoprints;
            }
        }
        if (col === numCols) { --col; }

        if (firstTime) {
            colInfo.origColStart = startingCol;
            colInfo.origColEnd   = col;
            colInfo.origColSpan  = userDefColspan;
            colInfo.origNoprints = numNoprints;
            colHeadingInfo.info  = colInfo;
        }
        colInfo.nonvisColSpan  = col - startingCol + 1;
        colInfo.displayColSpan = actualColSpan;
        colInfo.nextRealCol    = col + 1;
    }; // end _setColInfo()

    var _getNumCols = function() {
        var actualNumCols = 0, aCaptCurCol;
        for (var col = 0, numCols = mytable.n_cols; col < numCols; ++col) {
            aCaptCurCol = mytable.a_capt[col];
            if (!aCaptCurCol.noprint) {
                ++actualNumCols;
                if (aCaptCurCol.vis) ++actualNumCols;
                if (aCaptCurCol.vispct) ++actualNumCols;
                if (aCaptCurCol.haspro) ++actualNumCols;
            }
        }
        return actualNumCols;
    }; // end _getNumCols()

    if((istype>isTableFoot)&&(istype<isSubCalc)) doingSubs = true;
    switch (istype) {
        case isHead: heading=mytable.a_cntl.heading;break;
        case isFoot: heading=mytable.a_cntl.footing;break;
        case isSubHead: heading=mytable.a_cntl.subhead;break;
        case isSubFoot: heading=mytable.a_cntl.subfoot;break;
        case isSkipLine: heading=mytable.a_cntl.skipline;break; 
        case isSubTotal: 
            if (!mytable.haveFilters) {
                heading = mytable.a_cntl.subtotal;
            }
            break;
        case isGrandTotal: 
            if (!mytable.haveFilters) {
                heading = mytable.a_cntl.grandtotal;
            }
            break;
        case isTableHead: heading=mytable.a_cntl.tablehead;break;
        case isTableFoot: heading=mytable.a_cntl.tablefoot;break;
        case isAcHead: heading=mytable.a_cntl.acheading;break;
    }

    if((!heading)&&(istype<isSubCalc)) return '';

    if(istype==isSubCalc) {
        var cond=[];
        var data;
        for(var i=0; i<=slevel; i++) {
            cond[i]=mytable.bykeys[i].value;
        }
        if ((mytable.bykeys[slevel].subcalcData==null) ||
            (mytable.a_capt[slevel].b_hide)) {
            return '';
        }
        var record = IGetSubCalc(mytable.bykeys[slevel].subcalcData,cond);
        if(record==null) return '';

        s_ += "<tr>";
        for(var ix=fc; ix<=lc; ix++) {
            aCaptCurHeadCol = mytable.a_capt[ix];
            if (aCaptCurHeadCol.b_hide) continue;
            var tcolor='color:black;', bgColor='', classStr='';
            if (aCaptCurHeadCol.name.color) { tcolor = 'color:'+aCaptCurHeadCol.name.color+';'; }
            if (mytable.a_cntl.calccolor) { tcolor= 'color:'+mytable.a_cntl.calccolor+';'; }
            if(mytable.a_cntl.calcfonttype) tcolor += "font-family:"+mytable.a_cntl.calcfonttype+';';
            if(mytable.a_cntl.calcfontsize) tcolor += "font-size:"+mytable.a_cntl.calcfontsize+'pt;';
            if (aCaptCurHeadCol.name.bcolor) { bgColor = 'background-color:'+aCaptCurHeadCol.name.bcolor+';'; }
            if (mytable.a_cntl.calcbackcolor) { bgColor = 'background-color:'+mytable.a_cntl.calcbackcolor+';'; }
            if (mytable.o_css['head']) { classStr = mytable.o_css['head']; }
            s_ += "<td style='white-space:nowrap;"+tcolor+bgColor+"font-family:"+aCaptCurHeadCol.name.font+";font-size:"+aCaptCurHeadCol.name.size+"pt;' "+classStr;
            if(ix>=mytable.bykeys.length) {
                data = "&nbsp";
                for(var j=slevel+1;j<record.length;j++) {
                    if(aCaptCurHeadCol.dataField == mytable.bykeys[slevel].subcalcCol[j])
                        data = mytable.IBs[record[j][DASTR]];
                }
                s_ += ' align="right"><span style="font-weight:bold;'+tcolor+'">'+data+'<\/span>';
            } else if(ix==slevel) {
                s_ += ' ><span style="font-weight:bold;'+tcolor+'">'+ibiMsgStr['ctot']+" "+mytable.bykeys[slevel].value+'<\/span>';
            } else { s_ += ">&nbsp;"; }
            s_ += "<\/td>";
            if (aCaptCurHeadCol.vis) { s_ += '<td style="'+bgColor+'">&nbsp<\/td>'; }
            if (aCaptCurHeadCol.vispct) { s_ += '<td style="'+bgColor+'">&nbsp<\/td>'; }
            if (aCaptCurHeadCol.haspro) { s_ += '<td style="'+bgColor+'">&nbsp<\/td>'; }
        }
        s_ += "<\/tr>";
    } else {
    var paddingBottom, paddingFudge, divStyle, tdPaddingStyle; 
    var numActualCols = _getNumCols();
    checkVisualize = (numActualCols > mytable.n_cols_print) ? true : false;

    paddingFudge = ((b_ie) && (b_ie_version>=9)) ? 2 : ((navigator.userAgent.indexOf('Firefox') > -1) ? 1 : 0);
    paddingBottom = ' style="padding-bottom:' + (mytable.n_padding + paddingFudge) + 'px;"';
    tdPaddingStyle = ' style="padding:0px ' + mytable.n_padding + 'px;"';

    for (var row = 0, numHeadingRows = heading.length; row < numHeadingRows; ++row) {
        curHeadRow = heading[row];
        numColsInCurHeadRow = curHeadRow.length;
        if(doingSubs) {
            printheading = true;
            hstart = (slevel*1)+1;
            if (hstart > numColsInCurHeadRow) { hstart = numColsInCurHeadRow; }
            if (hstart >= numColsInCurHeadRow) {
                printheading = false;
            } else if (typeof(curHeadRow[hstart].byvalue) != "undefined") {
                printheading = false;
            } else {
                for(var ss=0; ss<hstart;ss++) {
                    var curCellByValue = curHeadRow[ss].byvalue;
                    if(typeof(curCellByValue)=="undefined") {
                        printheading=false;
                        break;
                    }
                    if(mytable.a_capt[mytable.bykeys[ss].column].type == IBINUM) {
                        var num1 = mytable.IBs[curCellByValue];
                        var num2 = mytable.bykeys[ss].value;
                        num1 = removeComma(num1);
                        num2 = removeComma(num2);
                        if(parseFloat(num1)!=parseFloat(num2)) {
                            printheading=false;
                            break;
                        }
                    } else if(mytable.IBs[curCellByValue]!=mytable.bykeys[ss].value) {
                        printheading=false;
                        break;
                    }
                }
            }
        }

        if(printheading) {
            if(!noHTML) s_ += '<tr>';
            for (var col = hstart, displayColIndex = 0, colspan = 0;
                 col < numColsInCurHeadRow;
                 ++col) {
                curHeadColCell = curHeadRow[col];
                if (typeof curHeadColCell === 'undefined') continue;
                colspan = curHeadColCell.colspan;
                if (typeof colspan === 'undefined') continue;
                if(colspan=='') {
                    colspan = ((numColsInCurHeadRow - hstart) > 1)
                              ? 1 : (checkVisualize ? numActualCols : mytable.n_cols_print);
                }
                colspan = colspan*1;
                if (checkVisualize) {
                    _setColInfo(curHeadColCell, displayColIndex, colspan);
                    colspan = curHeadColCell.info.displayColSpan;
                    useFc = curHeadColCell.info.origColStart;
                    useLc = curHeadColCell.info.origColEnd;
                    if (((useFc > lc) || (useLc < fc)) && (mytable.n_cols > 0)) {
                        displayColIndex = curHeadColCell.info.nextRealCol;
                        continue;
                    }
                } else {
                    useFc = getRealColumn(mytable, displayColIndex);
                    if ((useFc > lc) && (mytable.n_cols > 0)) {
                        displayColIndex += colspan;
                        continue;
                    }
                    useLc = getRealColumn(mytable, (displayColIndex + colspan - 1));
                    if ((useLc < fc) && (mytable.n_cols > 0)) {
                        displayColIndex += colspan;
                        continue;
                    }
                }
    
                aCaptCurHeadCol = mytable.a_capt[useFc];

                var bgcolor = '', align='';
                if(useFc<fc) useFc = fc;
                if(useLc>lc) useLc = lc;
                
                cs = ICalcColSpan(useFc,useLc);

                if((cs)||(mytable.n_cols==0)){
                    if (curHeadColCell.bcolor) { bgcolor = ' BGCOLOR="'+curHeadColCell.bcolor+'" '; }
                    if (curHeadColCell.align) { align = ' align="'+curHeadColCell.align+'" '; }
                    if((istype==isSubTotal)||(istype==isGrandTotal)) {
                        lcCaptCol = mytable.a_capt[useLc];
                        if (lcCaptCol.vis) cs--;
                        if (lcCaptCol.vispct) cs--;
                        if (lcCaptCol.haspro) cs--;
                    }
                    idstr='THEAD_'+tn+'_'+istype+'_'+col+'_'+displayColIndex;
                    if (!noHTML) { s_ += '<td '; }
                    if (!mytable.is_export && !noHTML) { s_ += 'onmouseout="curCell.tablenumber=-1;"  onmouseover="setCurCell('+tn+',\''+idstr+'\')" '; }
                    if (!noHTML) { 
                        divStyle = (curHeadColCell.name.substr(0,2).toUpperCase() === '<A')
                                   ? paddingBottom : '';
                        if (curHeadColCell.wrap.trim().toLowerCase() == 'nowrap') {
                            //Html output ==> if grid=off and htmlCss=on, the output is "WRAPPED".
                            //Active output ==> same logic ==> if grid=on or htmlCss=off, we allow NOWRAP
                            if(mytable.n_border != 0 || mytable.a_cntl.htmlCss == 0) //grid=ON or htmlCSS=OFF
                            divStyle = (divStyle == '')
                                       ? ' style="white-space:nowrap;" '
                                       : divStyle.replace(/"$/, ' white-space:nowrap;"');

						} else
						if(curHeadColCell.wrap.trim().toLowerCase()!=""){

                                divStyle = (divStyle == '')
                                    ? ' style="width:'+curHeadColCell.wrap+'px;" '
                                    : divStyle.replace(/"$/, ' width:'+curHeadColCell.wrap+'px;"');

                        }
                        s_ += 'id="'+idstr+'" COLSPAN='+cs+bgcolor+align+tdPaddingStyle+'><div ' + divStyle + '>' 
                              + curHeadColCell.name + '<\/div><\/td>';
                    }
                    else { s_ += curHeadColCell.name; }
                    if(((istype==isSubTotal)||(istype==isGrandTotal))&&(!noHTML)) {
                        if (lcCaptCol.vis) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                        if (lcCaptCol.vispct) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                        if (lcCaptCol.haspro) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                    }
                    ph = true;
                }
                displayColIndex = (checkVisualize) 
                                  ? curHeadColCell.info.nextRealCol : displayColIndex + colspan;
            }
            if (!ph && !noHTML) {
                try {
                    if(curHeadRow[0].bcolor) { bgcolor = ' BGCOLOR="'+curHeadRow[0].bcolor+'" '; }
                } catch (e) { }
                s_ += '<td COLSPAN='+maxcols+bgcolor+'>&nbsp;<\/td>';
            }
            if (!noHTML) { s_ += '<\/tr>'; }
        }
    } } // end-else and for
    return s_;
}

function IBuildCapt() {
    var a_;
    if(mytable.n_freeze_column){
        if(mytable.side == 'l')    a_ = IBuildCaptTB(0,mytable.n_freeze_column);
        else a_ = IBuildCaptTB(mytable.n_freeze_column,mytable.n_cols);
    } else a_ = IBuildCaptTB(0,mytable.n_cols);
    return a_;
}
 
function IBuildCaptTB(first,last) {
    var a_ = [], i, n_cnt = 0;
    var tn = mytable.a_cntl.table_number;
    var idstr,mstr,sortstr='',bgcolor;
    var tbgcolor = '';
    var tcolor = '';
    var cellGapStyle, cellGapIconStyle;
    var cellGap = mytable.a_cntl.cellGap;

    if (cellGap) {
        cellGapStyle = _getWhiteSpaceInfoStr(cellGap, "padding");
        cellGapIconStyle = (cellGap[1] != 0)
                         ? cellGapStyle.replace(/padding-right(.*?);/, '')
                         : cellGapStyle;
    } else {
        cellGapStyle = cellGapIconStyle = '';
    }

    a_[n_cnt++] = '<tr class="arGridColumnHeading">';
    if(last==0) 
        a_[n_cnt++]='<td><div id=popid'+tn+'_0><\/div><\/td>';
    else
    for (i=first; i < last; i++)
        if ((!mytable.a_capt[i].b_hide)&&(!mytable.a_capt[i].exp_hide || mytable.is_export || !mytable.AccordionIsOn)) {
            tcolor = "";
            tbgcolor = "";
            if ((typeof(mytable.a_capt[i].name.bcolor)!="undefined")&&
                (mytable.a_capt[i].name.bcolor!='')) tbgcolor = "background-color:"+mytable.a_capt[i].name.bcolor+";";
            if ((typeof(mytable.a_capt[i].name.color)!="undefined")&&
                (mytable.a_capt[i].name.color!='')) tcolor = "color:"+mytable.a_capt[i].name.color+";";

        if (mytable.a_capt[i].type) {
            idstr="TCOL_"+tn+"_C_"+i;
            if(!b_ios) {
                sortstr = '<td>&nbsp;<\/td><td height="20" width="20" style="white-space:nowrap; '
                          + cellGapIconStyle + '"' 
                          + '" align="left" valign="bottom">';
                if(mytable.useDropIcon)
                    sortstr += mytable.a_capt[i].popmenu+'<\/td>';
                else
                sortstr += '<\/td>';
            } else {
                sortstr = '<td>&nbsp;<\/td><td onclick="javascript:ibi_add_popmenu(getMyTable(' + tn + '),' + i + ');" height="20" width="20" style="white-space:nowrap;'
                          + cellGapIconStyle + '"'
                          + '" align="left" valign="bottom">';
                sortstr += ibiSkin.popicon;
                sortstr += '<\/td>';
            }

            mstr = '<td ';
            if(b_ios) mstr += ' onclick="javascript:ibi_add_popmenu(getMyTable('+tn+'),'+i+');" ';
            if(mytable.a_capt[i].name.exClass!='') mstr += " class='"+mytable.a_capt[i].name.exClass+"' ";
            if(!mytable.is_export) {
                if(isARBrowserExtension) {
                    mstr+='onmouseover="_ARExtensionCall(&quot;setCurCell('+tn+',\''+idstr+'\')&quot;)" ';
                } else {
                    mstr+='onmouseover="setCurCell('+tn+',\''+idstr+'\')" ';
                }
            }
            if(mytable.a_capt[i].name.align!='') mstr += " align='"+mytable.a_capt[i].name.align+"' ";
			if(typeof mytable.a_capt[i].name.wrap != "undefined")
			switch (mytable.a_capt[i].name.wrap) {
                case " NOWRAP": case " ":
                    mstr += 'style="white-space:nowrap;';
                    break;
                default:
                    mstr += 'style="width:' + mytable.a_capt[i].name.wrap + 'px;';
                    break;
            }
            mstr += cellGapStyle + '" ';
            mstr += 'id=\'' + idstr + '\' ';
            a_[n_cnt++] = IBuildCell(['<table style="'+tcolor+tbgcolor+'" cellpadding="0" cellspacing="0" border="0" width="100%"><tr valign="bottom">',mstr, mytable.o_css.captText, '>', mytable.a_capt[i].name.name, '<\/td>',sortstr,'<\/tr><\/table>'].join(''),'',null,tbgcolor,"BOTTOM");
            if(mytable.a_capt[i].vispct) {
                var spb='<span style="',spe='<\/SPAN>',va='';
                if(mytable.a_capt[i].name.font!='') spb+='font-family:'+mytable.a_capt[i].name.font+';';
                if(mytable.a_capt[i].name.size!='') spb+='font-size:'+mytable.a_capt[i].name.size+'pt;';
                spb+='">';
                if(mytable.a_capt[i].name.valign!='') va=' valign='+mytable.a_capt[i].name.valign+' ';
                a_[n_cnt++]='<td '+mytable.a_capt[i].name.wrap+' '+va+' style="'+tbgcolor+tcolor+'">'+spb+ibiMsgStr['pot']+spe+'<\/td>';
            }
            if(mytable.a_capt[i].vis) a_[n_cnt++]='<td style="'+tbgcolor+tcolor+'">&nbsp;<\/td>';
            if(mytable.a_capt[i].haspro) a_[n_cnt++]='<td style="'+tbgcolor+tcolor+'">&nbsp;<\/td>';
        } else {
            a_[n_cnt++] = IBuildCell(['<table cellpadding="0" width="100%" cellspacing="0" border="0"><tr valign="bottom"><td style="white-space:nowrap;'+cellGapStyle+tbgcolor+tcolor+'" width="100%"', mytable.o_css.captText, '>', mytable.a_capt[i].name.name, '<\/td><\/tr><\/table>'].join(''),null,null,tbgcolor,"BOTTOM");
        }
        }
    a_[n_cnt++] = '<\/tr>';
    return a_.join('');
}

function IBuildBody () {
    var a_;
    if(mytable.n_freeze_column){
        if(mytable.side == 'l') a_ = IBuildBodyTB(0,mytable.n_freeze_column);
        else a_ = IBuildBodyTB(mytable.n_freeze_column,mytable.n_cols);
    } else a_ = IBuildBodyTB(0,mytable.n_cols);
    return a_;
}


function IBuildBodyTB(first,last) {
    var cp,cp2,cs1;
    var vval;
    var a_ = [], i,n_col_count=0, j, s_color, s_color_str,  n_c = 0;
    var haveSubTop = false;
    var haveSubBot = false;
    var expanded,hr,val;
    var ss_color = 0;
    var current_by = -1,idval;
        var wside = 'r';
    var firstbycol = -1;
    var firstbyacd = -1;
    var breaklevel,classStr,exp_str,idstr, classStrExpandedCol = [];
    var cellstr,lvl;
    var tn=mytable.a_cntl.table_number;
    var tnc,si,sind,sk,sl;
    if(mytable.isRollUp) tnc = mytable.parent_table;
    else tnc = mytable.a_cntl.table_number;
    var lastbylevel=mytable.sublevel+1;
    var doByDisplay=mytable.a_cntl.ByDisplay;
    var showsubtotal=(mytable.a_cntl.subtotal)?true:false;
    var showgrandtotal=(mytable.a_cntl.grandtotal)?true:false;
    var is_export = mytable.is_export;
    var AccordionIsOn = mytable.AccordionIsOn;
    var isexpanded = false;
    var breakherelevel;
    var HierIsOn = false, breakhere=false;
    var _ll=0,needColspan;
    var allowVis,fbl,valr,dline,val2,ao;
    var showsubcalc=false, bgColorSet = false;
    var stnode;
    var numTableRows = mytable.n_rows, 
        numByKeys = (mytable.bykeys) ? mytable.bykeys.length : 0;
    var divPaddingStyle, tdPaddingStyle, classStrPadding, wrapInfo;
    var topBotPaddingFudge = 
          ((b_ie) && (b_ie_version>=9)) ? 2 : 
          ((navigator.userAgent.indexOf('Firefox') > -1) ? 1 : 0);

    divPaddingStyle = 'padding:' + (mytable.n_padding + topBotPaddingFudge) + 'px 0px;';
    tdPaddingStyle = (mytable.a_cntl.cellGap)
                     ? _getWhiteSpaceInfoStr(mytable.a_cntl.cellGap, "padding")
                     : 'padding:0px ' + mytable.n_padding + 'px;';

    mytable.NotesToSet=[];
    if(mytable.side == 'l') wside = 'l';
    i = mytable.o_paging.c * mytable.o_paging.n;
    var counter = 0;
    ss_color = 0;
    mytable.highRow = [];
    if(!AccordionIsOn)
    if((mytable.a_sort[0]) && (mytable.a_sort[0].n_col!=mytable.FirstNoprintColumn)) {
        showsubtotal=false;
        doByDisplay=true;
    }
    if(mytable.groupSort) doByDisplay=false;
    if((mytable.filt.length)&&(mytable.filter_type==1)) {
        showsubtotal=false;
        showgrandtotal=false;
    }
    if(mytable.a_cntl.subhead && mytable.showsubHF) 
        haveSubTop= true;
    if((mytable.a_cntl.subfoot && mytable.showsubHF) || showsubtotal) 
        haveSubBot = true;
        if(( mytable.a_cntl.skipline  && mytable.showsubHF) || showsubtotal) 
        haveSubBot = true;
    
    if(mytable.resetIBs && mytable.IBs.length == 0)
        mytable.a_f_body = [];

    if(mytable.bykeys) {
        var col;
        var ipos = i;

        if(ipos < 0)
            ipos = 0;

		if((typeof(mytable.a_f_body[ipos])=='undefined') && (ipos<numTableRows)){
            ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'],mytable.a_cntl.table_number);
            setTimeout("IgetMoreData("+mytable.a_cntl.table_number+","+(ipos)+");ibiStd.HideWaitSB("+mytable.a_cntl.table_number+");",0);
            ao = a_.join('');    
            return ao;
        }
        
        for (var s = 0, prevByCol = -1; s < numByKeys; s++) {
            mytable.bykeys[s].value='***';
            if(mytable.bykeys[s].subcalcs) {
                haveSubBot=true;
                showsubcalc=true;
            }
            if (AccordionIsOn && !bgColorSet) { // determine if BY cols have background colour
                col = mytable.bykeys[s].column;
                for (j = col; j > prevByCol; --j) {
                    stnode = mytable.getColumnStyle(j,0,0,mytable.a_cont[0],'',j,'NODE');
                    if (stnode.backgroundColor != null) {
                        bgColorSet = true;
                        break;
                    }
                }
                prevByCol = col;
            }
        }
    }

    if(mytable.top_aggregate)    a_[n_c++]=IBuildBodyAG(first,last,'head');
    var lastAcdV = -1, lastAcdJ, s_, dataFieldIndex;

    while((counter < mytable.o_paging.n) && (i < numTableRows)){
        /* check if we need to get data from cache */
        if(typeof(mytable.a_f_body[i])=='undefined'){
            ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'],mytable.a_cntl.table_number);
            setTimeout("IgetMoreData("+mytable.a_cntl.table_number+","+i+");ibiStd.HideWait();",0);
            ao = a_.join('');    
            return ao;
        }

        var valar = mytable.a_f_body[i];
        si = valar[0];

//check highlight on display
        var isRoot = true;
        if(mytable.isRollUp) isRoot=false;
        var hr1 = mytable.callHigh(isRoot,mytable.a_cont[si]);
        hr = mytable.a_f_body[i][1];
        if(hr1) hr = hr1;

        expanded = true;
        if(mytable.a_cntl.hierarchy)
            if(mytable.a_cntl.hierarchy.Expand)
                expanded = mytable.a_cont[si][mytable.n_cols+2]?false:true;

        if(mytable.a_f_body[i] && 
            (i==0 || expanded || is_export)){
            counter++;

            s_color = null;
            s_color_str = '';
            var ky='';
            current_by = -1;
            if(mytable.bykeys) {
                firstbycol = -1; firstbyacd=-1;
                lastbylevel=mytable.sublevel;
                for (s = 0; s < numByKeys; s++) {
                    dataField = IGetOriginalDataField(mytable.a_capt[mytable.bykeys[s].column]);
                    s_ = mytable.a_cont[si][dataField];
                    if(mytable.bykeys[s].value!=mytable.IBs[s_[DARAW]]) {
                        mytable.bykeys[s].value=mytable.IBs[s_[DARAW]];
                        if(firstbycol==-1) {
                            if(s==0) firstbycol = mytable.bykeys[s].column;
                            else {
                                firstbycol = mytable.bykeys[s-1].column;
                                lvl = mytable.a_capt[firstbycol].level;
                                while((firstbycol<mytable.n_cols)&&(mytable.a_capt[firstbycol].level==lvl))
                                    firstbycol++;
                                if(firstbycol>=mytable.n_cols) firstbycol = mytable.n_cols-1;
                            }
                            current_by = s;
                        }
                        if((firstbyacd==-1)&&(!mytable.a_capt[mytable.bykeys[s].column].noprint)) firstbyacd = mytable.bykeys[s].column;
                    }
                }
                if(firstbycol==-1) firstbycol = -2;
            }
            if((haveSubTop)&& (current_by!=-1)){
                if(firstbycol==-1) sk=mytable.sublevel;
                else sk=mytable.a_capt[mytable.bykeys[current_by].column].level;
                if(mytable.sublevel>lastbylevel) sl = lastbylevel+1;
                else sl = mytable.sublevel+1;
                if(sk<sl) {
                    for(var ss=sk; ss<sl;ss++) {
                        if(haveSubTop) {
                            a_[n_c++]=IBuildHead(isSubHead,first,last-1,ss);
                        }
                    }
                }
            }
            if(mytable.a_cntl.altcolors) {
                s_color = mytable.a_cntl.altcolors[ss_color];
                ss_color++; if(ss_color>=mytable.a_cntl.altcolors.length) ss_color=0;
                s_color_str = ' bgcolor=' + s_color;
            }

            _ll=0;
            if((hr==1)||(hr==3)) mytable.highRow[mytable.highRow.length]='I'+mytable.id+wside+si+'.'+_ll;
            if(lastAcdV!=-1) {
                if(lastAcdV == mytable.a_cont[si][lastAcdJ][DAACD]) {
                    i++;
                    continue;
                }
            }
            lastAcdV = -1;
            needColspan = 0;

            a_[n_c++] = '<tr id="I' + mytable.id + wside + si+'.'+_ll + '" ' + s_color_str + mytable.s_light+ '>';
            idval = 'I'+mytable.id+wside+i+'.'+_ll+'C';
            idstr = ' id="'+idval;
            breakhere = false;
            
            fbl = -1;
            if(mytable.bykeys) {
                if(firstbycol==-2)
                    fbl = mytable.a_capt[mytable.n_cols-1].level;
                else
                if(firstbycol!=-1)
                    fbl = mytable.a_capt[firstbycol].level;
            }

            for (var jx=first, printColNum = first - 1; jx < last; jx++) {
                idval = 'I'+mytable.id+wside+i+'.'+_ll+'C';
                if (mytable.a_capt[jx].b_hide) { // printColNum: avoids noprint cols for across
                    if (mytable.a_capt[jx].noprint == false) ++printColNum;
                    continue;
                } else {
                    ++printColNum;
                }
                dataField = IGetOriginalDataField(mytable.a_capt[jx]);
                valr = mytable.a_cont[si][dataField];
                val = mytable.IBs[valr[DASTR]];
                if(mytable.a_cntl.cacheMode) {
                    var href = null;
                    var ucol = jx;
                    if(mytable.a_capt[jx].orgCol>-1) ucol = mytable.a_capt[jx].orgCol;
                    if(mytable.o_look.styles!=null) href = mytable.getHrefNode(mytable.o_look.styles,ucol,i);
                    if(href !=null) {
                        href = mytable.setHrefValues(href,mytable.a_cont[si]);
                        val = href + val + "<\/a>";
                    }
                }
                allowVis = true;
                if(AccordionIsOn) {
                    if((mytable.a_capt[jx].level<mytable.highest_level) && valr[DAACD] && mytable.a_capt[jx].isby && !mytable.a_capt[jx].noprint)  {
                        isexpanded=mytable.acdNode[valr[DAACD]];
                        if(!isexpanded) {
                            breakhere = true;
                            breakherelevel = mytable.a_capt[jx].level;
                            lastAcdV = valr[DAACD];
                            lastAcdJ = jx;
                        }
                        //allowVis=false;
                    }
                } 
                if(!doByDisplay) { 
                    if(mytable.a_capt[jx].level<fbl) {
                        val='&nbsp;';
                        allowVis = false;
                        if(AccordionIsOn) {
                            needColspan = ICalcColSpan(first,jx);
                            continue;
                        }
                    }
                }
                if(needColspan) {
                    if (bgColorSet) {
                        for (var ii = 0; ii < needColspan; ++ii) { // BY cols have background colour
                            a_[n_c++]= '<td ' + classStrExpandedCol[ii] + idstr + jx + '">&nbsp;<\/td>';
                        }
                    } else {
                        a_[n_c++]= '<td colspan='+needColspan+' '+idstr+jx+'">&nbsp;<\/td>';
                    }
                    needColspan = 0;
                }
                if ((!mytable.a_capt[jx].b_hide)&&(!mytable.a_capt[jx].exp_hide || is_export || !mytable.AccordionIsOn)) {
                    //classStr= ' class="IBIS'+tnc+'_'+valr[DACLS]+'" ';
                    val2=val+'';
                    if(mytable.a_capt[jx].name.dataClass) classStr= ' class="'+mytable.a_capt[jx].name.dataClass+'" ';
                    else
                    //if(mytable.a_cntl.cacheMode || mytable.isRollUp) {
                        classStr = mytable.getColumnStyle(jx,si,counter,mytable.a_cont[si],val2,printColNum);
                    //}
                    //if((val2=='')||(val2==' ')||(val2=='&nbsp;')) classStr=' ';
                    exp_str = "";
                    if(val2.substr(0,2).toUpperCase() == '<A') {
                        cp = classStr.indexOf(';color:');
                        cs1 = classStr;
                        if((cp!=-1) && (classStr.substr(cp+7,5)=='Black')) {
                            cp2 = classStr.substr(cp+1).indexOf(';');
                            cs1 = classStr.substr(0,cp) + classStr.substr(cp+cp2+1);
                        }
                        cs1 = cs1.replace(/border(?:[^:]+):\s*(\w*)\s*;/gim, ""); // strip border* attributes
                        val2 = val2.substr(0,2) + ' '+cs1+val2.substr(2);
                    }
                    if(mytable.a_capt[jx].ishier) {
                        hlevel=valr[DAHIR];
                        if((!mytable.a_cntl.hierarchy.Expand)||(si+1 == numTableRows)||(valr[DAHIR]>=mytable.a_cont[si+1][mytable.a_capt[jx].dataField][DAHIR]))
                            exp_str='<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span>';
                        else {
                            if(mytable.a_cont[si+1][mytable.n_cols+2]==0)
                                exp_str = '<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span><span style="cursor:pointer;text-align:top;" onclick="javascript:MyTable[' + mytable.id + '].hiercollapse('+si+','+jx+',false)">-<\/span>&nbsp;';
                            else
                                exp_str = '<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span><span style="cursor:pointer;text-align:top;" onclick="javascript:MyTable[' + mytable.id + '].hierexpand('+si+','+jx+',true)">+<\/span>&nbsp;';
                        }
                    } else 
                    if(AccordionIsOn) {
                        if((mytable.a_capt[jx].level<mytable.highest_level) && mytable.a_capt[jx].isby && (val!='&nbsp;') && !is_export){
                            if(isexpanded) exp_str = '<span style="cursor:pointer;text-align:top;" onclick="javascript:MyTable[' + mytable.id + '].collapse(event,\''+valr[DAACD]+'\')">'+'-'+'<\/span>&nbsp;';
                            else     exp_str = '<span style="cursor:pointer;text-align:top;" onclick="javascript:MyTable[' + mytable.id + '].expand(event,\''+valr[DAACD]+'\')">'+'+'+'<\/span>&nbsp;';
                        }else exp_str="";
                    }
                    idval+=jx+'';
                    cellstr="<span title='' id='C"+idval+"'><\/span>";
                    if(typeof(valr[DANOTE])!="undefined") {

// grid tool move the column number, however notes follow the original datafield, so change to this:
                        var dataOrigCol = IGetOriginalDataField(mytable.a_capt[jx]);
                        mytable.NotesToSet[mytable.NotesToSet.length]=[mytable.a_cntl.table_number,i,dataOrigCol,idval];
                    }
                    //val2=val+'';
                    if((val2=='')||(val2==' ')) val2='&nbsp;';
                    if(mytable.a_capt[jx].name.wrap==" NOWRAP") wrapInfo = " white-space:nowrap; ";
                    else
                    if(mytable.a_capt[jx].name.wrap!=" ") wrapInfo = ' width:'+mytable.a_capt[jx].name.wrap+'px; ';
                    classStrPadding = (classStr.indexOf("style") !== -1) 
                                        ? classStr.replace(/"\s$/, tdPaddingStyle + wrapInfo + '" ')
                                        : ' style="' + tdPaddingStyle + wrapInfo + '"';
                    dline = '<td' + classStrPadding + idstr + jx + '"';
                    if(!mytable.is_export) {
                        if(isARBrowserExtension) {
                            dline+=' onmouseover="_ARExtensionCall(&quot;setCurCell('+tn+',\''+idval+'\')&quot;)"';
                        } else {
                            dline+=' onmouseover="setCurCell('+tn+',\''+idval+'\')"';
                        }
                        
                    }
                    dline += '><div style="' + divPaddingStyle + '">' + exp_str + val2 + cellstr + '<\/div><\/td>';
                    a_[n_c++]=dline;
                    if((mytable.a_capt[jx].vis) || (mytable.a_capt[jx].vispct)|| (mytable.a_capt[jx].haspro))  {
                        sind = valr[DARAW];
                        switch (sind) {
                            case arConstants.AR_MISSING:
                            case arConstants.AR_NODATA:
                            case arConstants.MISSING_OR_NODATA:
                                vval = missingVal;
                                break;
                            default:
                                vval = ibiStd.ibiNumberToFormat(mytable.IBs[sind], mytable.a_capt[jx].format, null, 0); // round as per formatting
                                break;
                        }
                        stnode = mytable.getColumnStyle(jx,si,counter,mytable.a_cont[si],val2,printColNum,'NODE');
                        a_[n_c++]=IMakeVis(val,'IBIS'+tnc+'_'+valr[DACLS],vval,mytable.a_cont.length,mytable.a_capt[jx],mytable.a_cntl.cdn,allowVis,'',stnode,classStr,counter);
                    }
                }
                if((breakhere) && (jx<mytable.n_cols-1) && (breakherelevel!=mytable.a_capt[jx+1].level)){
                    break;
                }
                if(AccordionIsOn) {
                    if(mytable.a_capt[jx].isby) breaklevel = mytable.a_capt[jx].level;
                    if (bgColorSet) {
                        classStrExpandedCol[jx] = classStr.replace(/text-decoration\s*:\s*\w*\s*;/i, "");
                    }
                    if((mytable.a_capt[jx].level<mytable.highest_level) && valr[DAACD] && (breaklevel<mytable.a_capt[jx+1].level)) {
                        a_[n_c++] = '<\/tr>';
                        _ll++;
                        a_[n_c++] = '<tr id="I' + mytable.id + wside + si+'.'+_ll + '" ' + s_color_str + mytable.s_light+ '>';
                        idstr = ' id="I'+mytable.id+wside+i+'.'+_ll+'C';
                        var cc = ICalcColSpan(first,jx);
                        if (bgColorSet) {
                            for (var im = 0; im < cc; ++im) { // BY cols have background colour
                                a_[n_c++]= '<td ' + classStrExpandedCol[im] + idstr + jx + '">&nbsp;<\/td>';
                            }
                        } else {
                            var classStrNoUnderline = classStr.replace(/text-decoration\s*:\s*\w*\s*;/i, "");
                            a_[n_c++]= '<td colspan='+cc+' ' + classStrNoUnderline + idstr+jx+'">&nbsp;<\/td>';
                        }
                        if((hr==1)||(hr==3)) mytable.highRow[mytable.highRow.length]='I'+mytable.id+wside+si+'.'+_ll;
                    }
                }
            }

            a_[n_c++] = '<\/tr>';
            current_by = -1;
            if((haveSubBot) && ((typeof(mytable.a_f_body[i+1])!="undefined")||(i+1 >= numTableRows))){
                firstbycol = -1;
                if((i+1) < numTableRows) {
                    for (s = 0; s < numByKeys; s++) {
                        if(mytable.bykeys[s].value!=mytable.IBs[mytable.a_cont[mytable.a_f_body[i+1][0]][mytable.a_capt[mytable.bykeys[s].column].dataField][DARAW]]) {
                            if(firstbycol==-1) {
                                if (AccordionIsOn && !isexpanded) {
                                    if (s === 0) {
                                        firstbycol = current_by = mytable.bykeys[s].column;
                                    } else {
                                        if (s === numByKeys - 1) {
                                            var lastRec = true;
                                            for (var nxtRow = i + 2; nxtRow < numTableRows; ++nxtRow) {
                                                if (mytable.bykeys[s-1].value != mytable.IBs[mytable.a_cont[mytable.a_f_body[nxtRow][0]][mytable.a_capt[mytable.bykeys[s-1].column].dataField][DARAW]]) {
                                                    lastRec = false;
                                                    break;
                                                }
                                            }
                                            if (lastRec) {
                                                firstbycol = current_by = 0;
                                                continue;
                                            }
                                        }
                                        if (j < mytable.n_cols) {
                                            firstbycol = current_by = mytable.a_capt[j].level;
                                        } 
                                    }
                                    lastbylevel = breakherelevel;
                                } else {
                                    firstbycol = (s === 0) 
                                                 ? mytable.bykeys[s].column
                                                 : mytable.bykeys[s-1].column + 1;
                                    current_by = s;
                                }
                            }
                        }
                    }
                } else {
                    current_by=0;
                    firstbycol = 0; 
                }
                if(current_by != -1) {
                    if(firstbycol==-1) sk=mytable.sublevel;
                    else sk=mytable.a_capt[mytable.bykeys[current_by].column].level;
                    if(mytable.sublevel>lastbylevel) sl = lastbylevel+1;
                    else sl = mytable.sublevel+1;
                    if(sk<sl) {
                        if (showsubcalc) {
                            for(var sn=sl-1; sn>=sk;sn--)
                                a_[n_c++]=IBuildHead(isSubCalc,first,last-1,sn);
                        }
                        if (showsubtotal) {
                            for(var sm=sl-1; sm>=sk;sm--)
                                a_[n_c++]=IBuildHead(isSubTotal,first,last-1,sm);
                        }
                        if ((mytable.a_cntl.subfoot)&&(mytable.showsubHF)) {
                            for(var sf=sl-1; sf>=sk;sf--)
                                a_[n_c++]=IBuildHead(isSubFoot,first,last-1,sf);
                        }
                        if ((mytable.a_cntl.skipline)&&(mytable.showsubHF)) {
                            for(var zx=sl-1; zx>=sk;zx--)
                                a_[n_c++]=IBuildHead(isSkipLine,first,last-1,zx );
                        }
                    }
                }
            }
        }
        i++;
    }
    if((i == numTableRows) && (showgrandtotal)) 
        a_[n_c++]=IBuildHead(isGrandTotal,first,last-1,ss);
    if(mytable.bottom_aggregate) a_[n_c++]=IBuildBodyAG(first,last,'foot');
    ao = a_.join('');    
    return ao;
}
 
function IBuildBodyAG(first,last,pwhere) {
    var a_ = [], n_c = 0;
    a_[n_c++]='<tr>';
    for(var j=first; j < last; j++){
        if ((!mytable.a_capt[j].b_hide)&&((!mytable.a_capt[j].exp_hide)||(mytable.isexport)|| !mytable.AccordionIsOn)) {
            var val = '&nbsp;',tcolor='',bgcolor='';
            if((mytable.a_capt[j].name.color) && (mytable.a_capt[j].name.color!=""))
                tcolor = "color:"+mytable.a_capt[j].name.color+";";
            if(mytable.a_cntl.calccolor) tcolor="color:"+mytable.a_cntl.calccolor+";";
            if(mytable.a_cntl.calcfonttype) tcolor += "font-family:"+mytable.a_cntl.calcfonttype+';';
            if(mytable.a_cntl.calcfontsize) tcolor += "font-size:"+mytable.a_cntl.calcfontsize+'pt;';

            if(mytable.a_capt[j].name.bcolor)    bgcolor = 'background-color:'+mytable.a_capt[j].name.bcolor+';'; 
            if(mytable.a_cntl.calcbackcolor) bgcolor = 'background-color:'+mytable.a_cntl.calcbackcolor+';';
 
            if(mytable.a_capt[j].SUM) val = mytable.aggregateFun('SUM',j);
            else if(mytable.a_capt[j].MIN) val = mytable.aggregateFun('MIN',j);
            else if(mytable.a_capt[j].MAX) val = mytable.aggregateFun('MAX',j);
            else if(mytable.a_capt[j].AVG) val = mytable.aggregateFun('AVG',j);
            else if(mytable.a_capt[j].COU) val = mytable.aggregateFun('COU',j);
            else if(mytable.a_capt[j].DIS) val = mytable.aggregateFun('DIS',j);
            var val2 = '<span style="'+tcolor+'">'+val+'<\/span>';
            a_[n_c++]=IBuildCell(val2,mytable.o_css[pwhere],"nowrap",bgcolor);
            if(mytable.a_capt[j].vis) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
            if(mytable.a_capt[j].haspro) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
            if(mytable.a_capt[j].vispct) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
        }
    }
    a_[n_c++]='<\/tr>';
    return a_.join('');
}

 
function IFixRowHeight()
{
    var tbls = d.getElementById('IScrollWindowBodyTab'+ mytable.id);
    var tblf = d.getElementById('IFixWindowBody'+ mytable.id);
    if(!tbls || !tblf) return;
 /*
    if(tbls.childNodes && tblf.childNodes) {
        objs = tbls.childNodes[0];
        objf = tblf.childNodes[0];
        for(var i=0; i < objs.childNodes.length;i++) {
            if(objs.childNodes[i].offsetHeight>objf.childNodes[i].offsetHeight)
                objf.childNodes[i].height = objs.childNodes[i].offsetHeight;
            else
                objs.childNodes[i].height = objf.childNodes[i].offsetHeight;
        }
    }
*/    
    var scrollRows = tbls.children[0].rows;
    var fixedRows  = tblf.children[0].rows;
    var minNumRows = (scrollRows.length < fixedRows.length) ? scrollRows.length : fixedRows.length;
    var h;
    for(var i=0; i < minNumRows; i++) {
        h = scrollRows[i].offsetHeight;
        if (h < fixedRows[i].offsetHeight) h = fixedRows[i].offsetHeight;
        scrollRows[i].style.height = h+'px';
        fixedRows[i].style.height = h+'px';
    } 
}
 
function ICalcColSpan(first, last, checkVisualize, colspan)
{
    var start = 0, end = mytable.n_cols;
    var col = 0;
     if((first<0) || (last<0)) return 1;
    if(typeof(first)!="undefined") {
        start = first;
        if((typeof(last)=="undefined")||(last+1>end)) end = mytable.n_cols;
        else end = last+1;
    } else
    if(mytable.freeze_column) {
        if(mytable.side=='r') start = mytable.freeze_column;
        else end = mytable.freeze_column;
    }

    var aCaptCurCol, j=start; 
    while((j<end)&&(j<mytable.n_cols)) {
        aCaptCurCol = mytable.a_capt[j];
        if((!aCaptCurCol.b_hide)&&(!aCaptCurCol.exp_hide || !mytable.AccordionIsOn)) {
            col++;
            if(aCaptCurCol.vis) col++;
            if(aCaptCurCol.vispct) col++;
            if(aCaptCurCol.haspro) col++;
        }
        j++;
    }
    return(col);
}
// mytable function adds the "Visualize", and "percent of total" columns to the table.  
// I added an extra argument s_add that has the "onclick" event needed for the new columns
// of the tables.  That event highlights the entire row when a row is clicked.  

function IMakeVis(dval,dclass,rval,rows,capt,cdn,show,s_add,stnode,classStr,indexrow)
{
    var dv,viscolor;
    var visposcolor = 'blue';
    var visnegcolor = 'red';
    var vispctBC = '';
    var scale = 1;
    var diff;
    var per;
    if(capt.viscolor) {
        visnegcolor=capt.viscolor[0];
        visposcolor=capt.viscolor[1];
    }

    
        if((typeof(rval)=="undefined")||(rval==missingVal)) {
        line = '';
        if(capt.vis) line +='<td>&nbsp;<\/td>';
        if(capt.vispct) line += '<td>&nbsp;<\/td>';
        if(capt.haspro) line += '<td>&nbsp;<\/td>';
        return line;
    }
    var minper = capt.minval;
    if(minper>0) minper=0;
    var maxper = capt.maxval;
    if(maxper<0) maxper = 0;
    diff = capt.abstotal;
    per= Math.round(rval/diff*10000)/100;
    maxper = Math.round(maxper/diff*10000)/100;
    minper = Math.round(minper/diff*10000)/100;
        var sc = Math.abs(maxper-minper);
    scale = Math.round(100/sc);
    if((scale<1)||(sc==0)) scale = 1;
    var minwidth = Math.round(Math.abs(minper)*scale)+4;
    var maxwidth = Math.round(maxper*scale)+4;
    var line  = '';

    if(rval<0) viscolor = visnegcolor;
    else viscolor = visposcolor;
    if(stnode!=null) {
        if((rval>0) && (stnode.viscolor!=null)) viscolor = stnode.viscolor;
        if((rval<0) && (stnode.viscolorneg!=null)) viscolor = stnode.viscolorneg;
    }

    if(show) {
        //dv = addCdnCommas(per,cdn)+'%';
        dv = FocusFormat(per,"(D3.2)",cdn,'$')+'%';
    } else {
        dv = "&nbsp;";
        per = 0;
    }
    
    if(capt.vispct) {
        if(stnode.backgroundColor) {
            vispctBC = "background-color:";
            if(typeof(stnode.backgroundColor) != "object")
                vispctBC += stnode.backgroundColor;
            else
                vispctBC += stnode.backgroundColor[ (indexrow-1) % stnode.backgroundColor.length ];
            vispctBC += ";";
        }
        line += '<td class="'+dclass+'" style="color:'+viscolor+';'+vispctBC+'" width="50" ' + s_add + ' align="right">'+dv+'<\/td>';
    }
    if(capt.haspro) line += '<td class="'+dclass+'" style="color:'+viscolor+';" width="50" ' + s_add + ' align="right">'+dv+'<\/td>';
    if(capt.vis) {
        line += '<td '+classStr+' width="'+(minwidth+maxwidth+4)+'"' + s_add + '><table width="'+(minwidth+maxwidth)+'" cellspacing=0 cellpadding=0 border=0><tr>';
        line += '<td align="right" style="width:'+minwidth+'px;">';
        if(per<0) line += '<table border=0 cellspacing=0 cellpadding=0><tr><td style="width:'+Math.round(Math.abs(per)*scale)+'px;height:12px;background-color:'+viscolor+';"><\/td><\/tr><\/table>';
        if(show) line += '<\/td><td style="width:1px;height:15px;background-color:black;"><\/td>';
        else     line += '<\/td><td style="width:1px;height:15px;"><\/td>';
        line += '<td style="width:'+maxwidth+'px;">';
        if(per>0) line += '<table border=0 cellspacing=0 cellpadding=0><tr><td style="width:'+Math.round(per*scale)+'px;height:12px;background-color:'+viscolor+';"><\/td><\/tr><\/table>';
        line += '<\/td><\/tr><\/table><\/td>';
    }
    line += '';
    return(line);
}
 

})();





