/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/aredittool.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 171117 1155 wjf 196097 AHTL:Pivot Tool:Unable to drag a field name with quotes
* 170925 1223 wjf 189627 Advanced Chart option not passing correct variable back to
* 170522 1314 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170522 0931 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170511 1811 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170322 1813 wjf 188307 Incorrect behavior working with a AHTML chart changing the
* 170322 1810 wjf 188307 Incorrect behavior working with a AHTML chart changing the
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 161208 1345 iys 186079 Chart Type not displayed correctly in MobleFaves on iPad
* 161128 1447 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 160804 2250 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160610 1256 hms 180534 Remove tab characters from source files
* 160427 1241 wjf 179948 AHTML:Sorting on chart displays incorrect title.
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160407 1010 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160307 0942 wjf 175695 Remove RATIO feature from AHTML
* 150505 1024 wjf 166981 FedEx: NFR for recompute functionality in AHTML
* 150316 1152 bjd 164302 VAL:AHTML:fld name displyed on top left of chart/rollup wndw
* 150225 1204 bjd 162587 VAL:AHTML:Chart/Rollup tool: .(dot) is missing for nodata
* 150224 1608 bjd 162587 VAL:AHTML:Chart/Rollup tool: .(dot) is missing for nodata
* 141114 1104 bjd 162381 VAL:AHTML:Fields are misaligned in Grid Tool
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["aredittool"]="$Revision: 20171117.1155 $";
//$Revision: 1.11 $
//$Log: aredittool.js,v $
//Revision 1.11  2014/05/06 15:24:15  Brian_DCruz
//[p157112] We need to update column number when columns are moved because of Active Visualization project
//
//Revision 1.10  2014/01/08 15:06:43  William_Forde
//[p155544] fix doc. to document.  Causing an issue in AV.
//
(function() {
	var columnlist	=[];
    var coltypelist    =null;
	var sortlist	=[];
	var sortorderlist=[];
    var hiddenlist     =null;
    var acrosslist    =null;
    var grouplist    =null;
    var measurelist    =null;
	var bucketlist = null;
    var textBoxOpen = false;
    var textBoxOpenPos = 0;
	var agglist	=[];
    var virtFieldNumber = 1;
    var typelist    =null;
    var isModTool    =[];
    var gsortlist    =[];
    var winlist    =[];
    var subcalclist = [];
    var myibiChart = [];
    var virtlist = [];
    var dragObjTool = new Object();
    var optypes = ['+','-','*','/',"**","(",")","%"];
    var selectionBar = "<table cellspacing=0 cellpadding=0 width='100%'>"+
        "<tr height=7><td  id='x_y_z_1' width=7 style='background-color:white;'>"+blankdot+"<\/<td>"+
        "<td width='*' valign='middle'><table cellspacing=0 cellpadding=0 width='100%'>"+
        "<tr height=2><td id='x_y_z_2' style='background-color:white;'>"+blankdot+"<\/td><\/tr><\/table><\/td>"+
        "<td id='x_y_z_3' width=7 style='background-color:white;'>"+blankdot+"<\/<td><\/tr>"+
        "<\/table>";

    if (typeof(window.ibiEditTools) !== 'undefined') {
        return;
    }
    window.ibiEditTools = {
		sortorderlist: sortorderlist,
		columnlist: columnlist,
		sortlist: sortlist,
		agglist: agglist,
		subcalclist: subcalclist,
        DoGridTool:doGridTool,
        DoChartTool:doChartTool,
        DoPivotTool:doPivotTool,
        DoPivotToolmod:doPivotToolmod,
        DoChartToolmod:doChartToolmod,
		DoAddFieldTool:doAddFieldTool,
        Gt_changeColPos:gt_changeColPos,
        Gt_hideColPos:gt_hideColPos,
        Gt_changeSortPos:gt_changeSortPos,
        Gt_hideSortPos:gt_hideSortPos,
        Gt_showAggmenu:gt_showAggmenu,
        Gt_changehide:gt_changehide,
        Gt_changesort:gt_changesort,
        Gt_toggleSortGroup:gt_toggleSortGroup,
        Gt_dogrid:gt_dogrid,
		Gt_sortCol: gt_sortCol,
        Gt_changeSubCalc:gt_changeSubCalc,
        Gt_changeAgg:gt_changeAgg,
        Gt_removesort:gt_removesort,
        Ct_dochart:ct_dochart,
        Ct_changeGroupPos:ct_changeGroupPos,
        Ct_hideGroupPos:ct_hideGroupPos,
        Ct_changeMeasurePos:ct_changeMeasurePos,
        Ct_insertMeasurePos:ct_insertMeasurePos,
        Ct_hideMeasurePos:ct_hideMeasurePos,
        Ct_showAggmenu:ct_showAggmenu,
        Ct_showOpmenu:ct_showOpmenu,
        Ct_removemeasure:ct_removemeasure,
        Ct_removegroup:ct_removegroup,
        Ct_setChartType:ct_setChartType,
        Ct_changeAgg:ct_changeAgg,
        Ct_changeOp:ct_changeOp,
        Ct_toogleTab:ct_toogleTab,
        Ct_setmyibiChart: ct_setmyibiChart,
        Pt_changeGroupPos:pt_changeGroupPos,
        Pt_hideGroupPos:pt_hideGroupPos,
        Pt_changeMeasurePos:pt_changeMeasurePos,
        Pt_hideMeasurePos:pt_hideMeasurePos,
        Pt_changeAcrossPos:pt_changeAcrossPos,
        Pt_hideAcrossPos:pt_hideAcrossPos,
        Pt_changeAgg:pt_changeAgg,
        Pt_showAggmenu:pt_showAggmenu,
        Pt_removemeasure:pt_removemeasure,
        Pt_removeacross:pt_removeacross,
        Pt_removegroup:pt_removegroup,
        Pt_dopivot:pt_dopivot,
        showVirtFieldName:ShowVirtFieldName,
        setVirtFieldName:SetVirtFieldName,
		DragStartTool:dragStartTool,
		AddField: doAddField
    };

    window.ibiEditTools.escapeQ = function(s) {
        var ss = s+'';
        ss = ss.replace(/"/g, '&quot;') ;
        ss = ss.replace(/'/g, "\\'") ;
        return ss;
    };

    function showselectionBar(id)
    {
        var obj1 = d.getElementById(id+'_1');
        var obj2 = d.getElementById(id+'_2');
        var obj3 = d.getElementById(id+'_3');
        if(obj1) obj1.style.backgroundColor = Ardefault.chartSelect;
        if(obj2) obj2.style.backgroundColor = Ardefault.chartSelect;
        if(obj3) obj3.style.backgroundColor = Ardefault.chartSelect;
    }

    function hideselectionBar(id)
    {
        var obj1 = d.getElementById(id+'_1');
        var obj2 = d.getElementById(id+'_2');
        var obj3 = d.getElementById(id+'_3');
        if(obj1) obj1.style.backgroundColor = "white";
        if(obj2) obj2.style.backgroundColor = "white";
        if(obj3) obj3.style.backgroundColor = "white";
    }



    function getselectionBar(id)
    {
        var re = new RegExp("x_y_z", "g");
        return selectionBar.replace(re,id);
    }

    function gt_changeColPos(win,t_num,pos)
    {
        if(dragObjTool.win != win) return;
        if(dragObjTool.arg2!='c') return;
        showselectionBar('gtc_'+t_num+'_'+pos);
        dragObjTool.doFunc = gt_moveCol;
        dragObjTool.pos = pos;
    }

    function gt_hideColPos(win,t_num,pos)
    {
        if(dragObjTool.win != win) return;
        hideselectionBar('gtc_'+t_num+'_'+pos);
        dragObjTool.doFunc = null;
    }

    function gt_moveCol()
    {
        var win = dragObjTool.win;
        var tn = pwn[win].table_number;
        var i = dragObjTool.arg1;
        var clist = columnlist[win];
        var hlist = hiddenlist[win];
        var tlist = coltypelist[win];
        var alist = agglist[win];
        var col = clist.splice(i,1);
        var hcol = hlist.splice(i,1);
        var tcol = tlist.splice(i,1);
        var acol = alist.splice(i,1);
        var pos = dragObjTool.pos;
        if(pos>i) pos = pos-1;
        clist.splice(pos,0,col[0]);
        hlist.splice(pos,0,hcol[0]);
        tlist.splice(pos,0,tcol[0]);
        alist.splice(pos,0,acol[0]);
        columnlist[win] = clist;
        hiddenlist[win] = hlist;
        coltypelist[win] = tlist;
        agglist[win] = alist;
        doGridToolUpdate(win,tn);
    }

    function gt_changeSortPos(win,t_num,pos)
    {
        if(dragObjTool.win != win) return;
        showselectionBar('gts_'+t_num+'_'+pos);
        dragObjTool.doFunc = gt_sortCol;
        dragObjTool.pos = pos;
    }
function ct_changeGroupPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    showselectionBar('ctg_'+t_num+'_'+pos);
    dragObjTool.doFunc = ct_groupCol;
    dragObjTool.pos = pos;
}
function ct_changeMeasurePos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    showselectionBar('ctm_'+t_num+'_'+pos);
    dragObjTool.doFunc = ct_measureCol;
    dragObjTool.pos = pos;
}

    function ct_insertMeasurePos(win,t_num,pos)
    {
        if(dragObjTool.win != win) return;
        //showselectionBar('ctm_'+t_num+'_'+pos);
        dragObjTool.doFunc = ct_measureColVirt;
        dragObjTool.pos = pos;
    }

function pt_changeGroupPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    showselectionBar('ptg_'+t_num+'_'+pos);
    dragObjTool.doFunc = pt_groupCol;
    dragObjTool.pos = pos;
}
function pt_changeAcrossPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    showselectionBar('pta_'+t_num+'_'+pos);
    dragObjTool.doFunc = pt_acrossCol;
    dragObjTool.pos = pos;
}
function pt_changeMeasurePos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    showselectionBar('ptm_'+t_num+'_'+pos);
    dragObjTool.doFunc = pt_measureCol;
    dragObjTool.pos = pos;
}


function gt_hideSortPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('gts_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}
function ct_hideGroupPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('ctg_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}
function ct_hideMeasurePos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('ctm_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}
function pt_hideGroupPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('ptg_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}
function pt_hideAcrossPos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('pta_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}
function pt_hideMeasurePos(win,t_num,pos)
{
    if(dragObjTool.win != win) return;
    hideselectionBar('ptm_'+t_num+'_'+pos);
    dragObjTool.doFunc = null;
}

function gt_sortCol(iwin,itn,icol,itype,ipos)
{
    var win = dragObjTool.win;
	if(typeof iwin != "undefined")
		win = iwin;
    var tn = pwn[win].table_number;
	if(typeof itn != "undefined")
		tn = itn;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var clist = columnlist[win];
    var slist = sortlist[win];
    var solist = sortorderlist[win];
    var sclist = subcalclist[win];
	var dpos = dragObjTool.pos;
	if(typeof ipos != "undefined")
		dpos = ipos;
	if(typeof icol != "undefined")
		i = icol;
	if(typeof itype != "undefined")
		ctype = itype;

    if(ctype=='c') {
        if(locateArray(slist,clist[i])<0) {
			slist.splice(dpos,0,clist[i]);
			solist.splice(dpos,0,0);
			sclist.splice(dpos,0,false);
        }
    } else {
        var col = slist.splice(i,1);
        var ord = solist.splice(i,1);
        var scd = sclist.splice(i,1);
		var pos = dpos;
        if(pos>i) pos = pos-1;
        slist.splice(pos,0,col[0]);
        solist.splice(pos,0,ord[0]);
        sclist.splice(pos,0,scd[0]);
    }
    sortlist[win] = slist;
    sortorderlist[win] = solist;
    subcalclist[win]=sclist;
    doGridToolUpdate(win,tn);
}


function ct_groupCol()
{
    var win = dragObjTool.win;
    var tn = pwn[win].table_number;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var glist = grouplist[win];
    var mlist = measurelist[win];
    if(ctype=='c') {
        if (locateArray(glist, i) < 0) {
            glist.splice(dragObjTool.pos, 0, i);
        }
    } else
    if(ctype=='m') {
        if(locateArray(glist,mlist[i])<0)
            glist.splice(dragObjTool.pos,0,mlist[i]);
    } else  {
        var col = glist.splice(i,1);
        var pos = dragObjTool.pos;
        if(pos>i) pos = pos-1;
        glist.splice(pos,0,col[0]);
    }
    grouplist[win] = glist;
    doChartToolDispGroup(tn,win,glist);
    //doChartToolDisp(tn,win,clist,glist,measurelist[win],typelist[win],agglist[win]);
}
function ct_measureCol()
{
    var win = dragObjTool.win;
    var pos = dragObjTool.pos;
    var tn = pwn[win].table_number;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var clist = columnlist[win];
    var mlist = measurelist[win];
    var alist = agglist[win];
    var glist = grouplist[win];
    var vlist = virtlist[win];
    var j;

    if(ctype=='c') {
        ctype=coltypelist[win][i];
        mlist.splice(pos, 0, i); /* allow chart to have same measure with diff agg types */
        alist.splice(pos, 0, (ctype == IBINUM) ? "SUM" : "COU");
    } else
    if(ctype=='g') {
        ctype=coltypelist[win][glist[i]];
        mlist.splice(pos, 0, glist[i]);
        alist.splice(pos, 0, (ctype == IBINUM) ? "SUM" : "COU");
    } else {
        var col = mlist.splice(i,1);
        var col2 = alist.splice(i,1);
        if(pos>i) pos = pos-1;
        mlist.splice(pos,0,col[0]);
        alist.splice(pos,0,col2[0]);
    }
    // since atleast two fields must exsist for virtue field, then the following logic should be safe.
    for(j in vlist.groups) {
        if(vlist.groups[j].start>=pos) {
            vlist.groups[j].start++;
            vlist.groups[vlist.groups[j].start] = vlist.groups[j];
            vlist.groups[j] = null;
            delete vlist.groups[j];
        }
    }

    for(j=mlist.length; j > pos; j--) {
        if(typeof vlist.map[j-1] != "undefined") {
            vlist.map[j] = vlist.map[j - 1];
            vlist.map[j - 1] = null;
            delete vlist.map[j - 1];
        }
    }
    measurelist[win] = mlist;
    agglist[win] = alist;
    doChartToolDispMeasure(tn,win,mlist,alist,vlist);
    //doChartToolDisp(tn,win,clist,grouplist[win],mlist,typelist[win],alist);
}
    function ct_measureColVirt()
    {
        var win = dragObjTool.win;
        var pos = dragObjTool.pos;
        var tn = pwn[win].table_number;
        var i = dragObjTool.arg1;
        var ctype = dragObjTool.arg2;
        var clist = columnlist[win];
        var mlist = measurelist[win];
        var alist = agglist[win];
        var glist = grouplist[win];
        var vlist = virtlist[win];
        var ins = pos+1;
        var j;

        if(ctype=='c') {
            ctype=coltypelist[win][i];
            mlist.splice(ins, 0, i); /* allow chart to have same measure with diff agg types */
            alist.splice(ins, 0, (ctype == IBINUM) ? "SUM" : "COU");
        } else
        if(ctype=='g') {
            ctype=coltypelist[win][glist[i]];
            mlist.splice(ins, 0, glist[i]);
            alist.splice(ins, 0, (ctype == IBINUM) ? "SUM" : "COU");
        } else {
            var col = mlist.splice(i,1);
            var col2 = alist.splice(i,1);
            if(ins>i) ins = ins-1;
            mlist.splice(ins,0,col[0]);
            alist.splice(ins,0,col2[0]);
        }

        if(typeof vlist.groups == "undefined")
            vlist.groups = {};
        if(typeof vlist.map == "undefined")
            vlist.map = {};

        if(typeof vlist.map[pos] != "undefined") {
            var u = vlist.map[pos].position;
            pos = u.start;
        }

        if(typeof vlist.groups[pos] == "undefined") {
            vlist.groups[pos] = {};
            vlist.groups[pos].start = pos;
            vlist.groups[pos].length = 1;
            vlist.groups[pos].name = "v"+virtFieldNumber;
            virtFieldNumber++;
            vlist.map[pos] = {'position':vlist.groups[pos],'operator':"="};
            u = vlist.groups[pos];
        }
        //find the first field in the group

        for(j=mlist.length; j > ins; j--) {
            if(typeof vlist.map[j-1] != "undefined") {
                vlist.map[j] = vlist.map[j - 1];
                vlist.map[j - 1] = null;
                delete vlist.map[j - 1];
            }
        }

        vlist.groups[pos].length++;
        vlist.map[ins] = {'position':vlist.groups[pos],'operator':"+"};

        // since atleast two fields must exsist for virtue field, then the following logic should be safe.
        for(j in vlist.groups) {
            if(vlist.groups[j].start>pos) {
                vlist.groups[j].start++;
                vlist.groups[vlist.groups[j].start] = vlist.groups[j];
                vlist.groups[j] = null;
                delete vlist.groups[j];
            }
        }
        measurelist[win] = mlist;
        agglist[win] = alist;
        doChartToolDispMeasure(tn,win,mlist,alist,vlist);
        //doChartToolDisp(tn,win,clist,grouplist[win],mlist,typelist[win],alist);
    }

function pt_groupCol()
{
    var win = dragObjTool.win;
    var tn = pwn[win].table_number;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var clist = columnlist[win];
    var glist = grouplist[win];
    var mlist = measurelist[win];
    var alist = acrosslist[win];
    var pos   = dragObjTool.pos;
    var col;

    if(ctype=='c') {
        if ((locateArray(glist, i) < 0) && (locateArray(alist, i) < 0)) {
            glist.splice(pos, 0, i);
        }
    } else
    if(ctype=='a') {
        col = alist.splice(i,1);
        acrosslist[win] = alist;
        glist.splice(pos,0,col[0]);
    } else
    if(ctype=='m') {
        glist.splice(pos,0,mlist[i]);
    } else {
        col = glist.splice(i,1);
        if(pos>i) pos = pos-1;
        glist.splice(pos,0,col[0]);
    }
    grouplist[win] = glist;
    doPivotToolDisp(tn,win,clist,glist,acrosslist[win],measurelist[win],agglist[win]);
}
function pt_acrossCol()
{
    var win = dragObjTool.win;
    var tn = pwn[win].table_number;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var clist = columnlist[win];
    var glist = grouplist[win];
    var mlist = measurelist[win];
    var alist = acrosslist[win];
    var pos   = dragObjTool.pos;
    var col;

    if(ctype=='c') {
        if ((locateArray(alist, i) < 0) && (locateArray(glist, i) < 0)) {
            alist.splice(pos, 0, i);
        }
    } else 
    if(ctype=='g') {
        col = glist.splice(i,1);
        grouplist[win] = glist;
        alist.splice(pos,0,col[0]);
    } else
    if(ctype=='m') {
        alist.splice(pos,0,mlist[i]);
    } else {
        col = alist.splice(i,1);
        if(pos>i) pos = pos-1;
        alist.splice(pos,0,col[0]);
    }
    acrosslist[win] = alist;
    doPivotToolDisp(tn,win,clist,grouplist[win],alist,measurelist[win],agglist[win]);
}
function pt_measureCol()
{
    var win = dragObjTool.win;
    var tn = pwn[win].table_number;
    var i = dragObjTool.arg1;
    var ctype = dragObjTool.arg2;
    var clist = columnlist[win];
    var glist = grouplist[win];
    var mlist = measurelist[win];
    var alist = acrosslist[win];
    var aglist = agglist[win];

    if(ctype=='c') {
        if (locateArray(mlist, i) < 0) {
            mlist[0] = i;
            ctype=coltypelist[win][i];
            aglist[0] = (ctype == IBINUM) ? 'SUM' : 'COU';
        }
    } else 
    if(ctype=='g') {
        mlist[0] = glist[i];
        ctype = coltypelist[win][glist[i]];
        aglist[0] = (ctype == IBINUM) ? 'SUM' : 'COU';
    } else
    if(ctype=='a') {
        mlist[0] = alist[i];
        ctype = coltypelist[win][alist[i]];
        aglist[0] = (ctype == IBINUM) ? 'SUM' : 'COU';
    } else {
        var col = mlist.splice(i,1);
        var col2 = aglist.splice(i,1);
        var pos = dragObjTool.pos;
        if(pos>i) pos = pos-1;
        mlist.splice(pos,0,col[0]);
        aglist.splice(pos,0,col2[0]);
    }
    measurelist[win] = mlist;
    agglist[win] = aglist;
    doPivotToolDisp(tn,win,clist,grouplist[win],acrosslist[win],mlist,aglist);
}

function gt_changehide(win,t_num,pos)
{
    hiddenlist[win][pos] = !hiddenlist[win][pos];
    doGridToolUpdate(win,t_num);
}
function gt_changeSubCalc(win,t_num,pos,setting)
{
    subcalclist[win][pos] = !subcalclist[win][pos];
	if(typeof setting != "undefined")
		subcalclist[win][pos] = setting;
    doGridToolUpdate(win,t_num);
}

function gt_removesort(win,t_num,pos)
{
    var slist = sortlist[win];
    var sclist = subcalclist[win];
    var solist = sortorderlist[win];
    slist.splice(pos,1);
    sclist.splice(pos,1);
    solist.splice(pos,1);
    sortlist[win] = slist;
    sortorderlist[win] = solist;
    subcalclist[win] =sclist;
    doGridToolUpdate(win,t_num);
}
function ct_removegroup(win,t_num,pos)
{
    var glist = grouplist[win];
    glist.splice(pos,1);
    grouplist[win] = glist;
    doChartToolDispGroup(t_num,win,glist);
    //doChartToolDisp(t_num,win, columnlist[win],glist,measurelist[win],typelist[win],agglist[win]);
}
function ct_removemeasure(win,t_num,pos)
{
    var mlist = measurelist[win];
    var alist = agglist[win];
    var vlist = virtlist[win];
    mlist.splice(pos,1);
    alist.splice(pos,1);
    measurelist[win] = mlist;
    agglist[win] = alist;

    if(typeof vlist.map[pos] != "undefined") {
        var st = vlist.map[pos].position.start;
        var l = vlist.map[pos].position.length;
        var j;
        vlist.map[pos].position.length--;



        delete vlist.map[st+l-1];

        if(l==2) {
            delete vlist.map[st];
            delete vlist.groups[st];
        }


    }
    for(j=pos; j <= mlist.length ; j++) {
        if(typeof vlist.map[j+1] != "undefined") {
            vlist.map[j] = vlist.map[j + 1];
            vlist.map[j + 1] = null;
            delete vlist.map[j + 1];
        }
    }

    // since atleast two fields must exsist for virtue field, then the following logic should be safe.
    for(j in vlist.groups) {
        if(vlist.groups[j].start>pos) {
            vlist.groups[j].start--;
            vlist.groups[vlist.groups[j].start] = vlist.groups[j];
            vlist.groups[j] = null;
            delete vlist.groups[j];
        }
    }
    doChartToolDispMeasure(t_num,win,mlist,alist,vlist);
    //doChartToolDisp(t_num,win,columnlist[win],grouplist[win],mlist,typelist[win],alist);
}
function pt_removegroup(win,t_num,pos)
{
    var glist = grouplist[win];
    glist.splice(pos,1);
    grouplist[win] = glist;
    doPivotToolDisp(t_num,win,columnlist[win],glist,acrosslist[win],measurelist[win],agglist[win]);
}
function pt_removeacross(win,t_num,pos)
{
    var alist = acrosslist[win];
    alist.splice(pos,1);
    acrosslist[win] = alist;
    doPivotToolDisp(t_num,win,columnlist[win],grouplist[win],alist,measurelist[win],agglist[win]);
}
function pt_removemeasure(win,t_num,pos)
{
    var mlist = measurelist[win];
    var alist = agglist[win];
    mlist.splice(pos,1);
    alist.splice(pos,1);
    measurelist[win] = mlist;
    agglist[win] = alist;
    doPivotToolDisp(t_num,win,columnlist[win],grouplist[win],acrosslist[win],mlist,alist);
}

function ct_setChartType(win,ctype,t_num)
{
    typelist[win] = ctype;
    doChartToolDisp(t_num,win,columnlist[win],grouplist[win],measurelist[win],ctype,agglist[win],virtlist[win]);
}

function ct_changeAgg(win, t_num, pos,btype)
{
    agglist[win][pos]=btype;
    doChartToolDispMeasure(t_num,win,measurelist[win],agglist[win],virtlist[win]);
    //doChartToolDisp(t_num,win,columnlist[win],grouplist[win],measurelist[win],typelist[win],agglist[win]);
}

    function ct_changeOp(win, t_num, pos,btype)
    {
        var vlist = virtlist[win];
        if(typeof vlist.map[pos] != "undefined") {
            vlist.map[pos].operator = optypes[btype];
        }
        doChartToolDispMeasure(t_num,win,measurelist[win],agglist[win],virtlist[win]);
        //doChartToolDisp(t_num,win,columnlist[win],grouplist[win],measurelist[win],typelist[win],agglist[win]);
    }

function pt_changeAgg(win, t_num, pos,btype)
{
    agglist[win][pos]=btype;
    doPivotToolDisp(t_num,win,columnlist[win],grouplist[win],acrosslist[win],measurelist[win],agglist[win]);
}

function gt_changeAgg(win, t_num, pos,btype)
{
    agglist[win][pos]=btype;
    doGridToolUpdate(win,t_num);
}

function gt_dogrid(win,tn)
{
    var mytable = getMyTable(tn);
    var slist = sortlist[win];
    var solist = sortorderlist[win];
    var aglist = agglist[win];
    var sclist = subcalclist[win];
    var clist = [], i, j, numItems;
    var cclist = columnlist[win];
    var colsChanged=false;

    for (i = 0, numItems = mytable.n_cols; i < numItems; i++) {
        clist[i]=mytable.a_cntl.a_cols[i].name;
    }
    mytable.a_sort = [];
    mytable.groupSort = false;
    
    j = slist.length-1;
    for (i = 0, numItems = slist.length; i < numItems; i++) {
        mytable.a_sort[j] = new Object();
        mytable.a_sort[j].n_col = locateArray(clist,slist[i]);
        mytable.a_sort[j].b_ord = solist[i];
        j--;
    }

    if(mytable.org_capt) {
        mytable.a_capt = mytable.org_capt;
        mytable.bykeys = mytable.org_bykeys;
        mytable.org_capt = null;
        mytable.org_bykeys = null;
    }
    for (i = 0, numItems = mytable.n_cols; i < numItems; i++) {
        if (cclist[i] != mytable.a_cntl.a_cols[i].name) {
            colsChanged = true;
            break;
        }
    }
    if(gsortlist[win]) {
        colsChanged=true;
        mytable.groupSort=true;
        mytable.sublevel = slist.length-1;
    }

    if(colsChanged) {
        var org_col, ncapt=[];
        mytable.FullTotal = [];
        mytable.FullTotalMin = [];
        mytable.FullTotalMax = [];
        mytable.FullTotalDst = [];
        mytable.FullTotalCnt = [];
        mytable.FullAbsTotal = [];
        mytable.FilterTotal = [];
        mytable.FilterTotalMin = [];
        mytable.FilterTotalMax = [];
        mytable.FilterTotalDst = [];
        mytable.FilterTotalCnt = [];
        mytable.FilterAbsTotal = [];

        for (i = 0, numItems = mytable.a_capt.length; i < numItems; i++) {
            org_col = locateArray(clist,cclist[i]);
            ncapt[i] = mytable.copyObject(mytable.a_capt[org_col]);
            mytable.a_capt[org_col].new_pos = i;
            ncapt[i].isby = false;
            ncapt[i].level = slist.length;
            ncapt[i].b_hide = hiddenlist[win][i];
            ncapt[i].origDataField = ncapt[i].dataField;
            ncapt[i].dataField = i;
        }
    
        mytable.org_bykeys = mytable.bykeys;
        mytable.org_capt = mytable.a_capt;
        mytable.a_capt = ncapt;
        mytable.bykeys = null;
        if(mytable.groupSort) {
            mytable.bykeys=[];
            for (i = 0, numItems = slist.length; i < numItems; i++) {
                ncapt[i].isby = true;
                ncapt[i].level = i;
                mytable.bykeys[mytable.bykeys.length]={'column':i,'value':null,'noprint':mytable.a_capt[i].noprint,'subcalcs':sclist[i],'subcalcData':null,'subcalcCol':null};
            }
        }
        for (i = 0, numItems = mytable.a_capt.length; i < numItems; i++) {
            mytable.setAggregate(i,aglist[i],mytable.a_cntl.CALC_POSITION,true);
        }
    } else {
        for (i = 0, numItems = mytable.a_capt.length; i < numItems; i++) {
            mytable.setAggregate(i,aglist[i],mytable.a_cntl.CALC_POSITION,true);
            mytable.a_capt[i].b_hide = hiddenlist[win][i];
        }
    }
    closewin(win);
    mytable.sortneeded = true;
    ibiGrid.show(false,mytable);
}

function ct_dochart(win,tn)
{
    var mytable = getMyTable(tn);
    var ctype = typelist[win];
    var btype = agglist[win];
    var glist = grouplist[win];
    var mlist = measurelist[win];
    var vlist = virtlist[win];
    var myChart = myibiChart[win];
    var xcol=[],ycol=[];
    var i,j;
    if(textBoxOpen) {
        ibiEditTools.setVirtFieldName(win,tn,textBoxOpenPos);
        textBoxOpen = false;
        return;
    }
    
    if(typeof(mytable.chartOrgHidden) == "undefined") {
        mytable.chartOrgHidden = [];
        for(i = 0; i < mytable.a_capt.length; i++)
        {
            if(mytable.a_capt[i].b_hide)
                mytable.chartOrgHidden[i] = true;
            else 
                mytable.chartOrgHidden[i] = false;
        }
    }
    for(i=0;i<glist.length;i++) {
        ycol[i] = glist[i];
		if(mytable.a_cntl.hasBuckets) {
        	if(!mytable.a_capt[ycol[i]].noprint)
                mytable.a_capt[ycol[i]].b_hide = false;
        } else
            mytable.a_capt[ycol[i]].b_hide = false;
    }
    for(i=0;i<mlist.length;i++) {
        xcol[i] = mlist[i];
        if(typeof vlist.map[i] != "undefined") {
            // mytable.a_capt[xcol[i]].b_hide = true;
        } else
        mytable.a_capt[xcol[i]].b_hide = false;
    }
    var vf,st,of = 0;
    if(vlist.groups) {
        for(i in vlist.groups) {
            var obj = {'virtField':true,'fields':[],'name':{'name':vlist.groups[i].name},'type':IBINUM,'root': ibiStd.copyObject(vlist)};
            obj.name = ibiStd.copyObject(mytable.a_capt[mlist[vlist.groups[i].start]].name);
            obj.name.name = '<b>'+vlist.groups[i].name+'</b>';
            mytable.a_capt[mytable.a_capt.length] = obj;
            mytable.a_cntl.a_cols[mytable.a_cntl.a_cols.length] = {'name':vlist.groups[i].name,'dis':vlist.groups[i].name,
                'field':vlist.groups[i].name,'alias':""};
            for(j=0; j <vlist.groups[i].length; j++) {
                obj.fields[j] = {};
                obj.fields[j].field = j+vlist.groups[i].start+glist.length;
                obj.fields[j].operator = vlist.map[j+vlist.groups[i].start].operator
            }
            vf = mytable.a_capt.length-1;
            st = vlist.groups[i].start+vlist.groups[i].length;
            xcol.splice(st+of,0,vf);
            btype.splice(st+of,0,"");
            of++;
        }
    }

    if(isModTool[win]) {
        pwin = winlist[win];
        var pn = getPn(pwin,tn);
        pn.xars = null;
        pn.saveable.ctype = ctype;
        pn.saveable.btypeArray = CopyArray(btype);
        pn.saveable.y_cols = CopyArray(ycol);
        pn.saveable.x_cols = CopyArray(xcol);
		pn.tcntl.buckets = ibiStd.copyObject(bucketlist[win]);
		if(typeof pn.saveable.org_fromGraph == "undefined")
			pn.saveable.org_fromGraph = pn.saveable.fromGraph;
		pn.saveable.fromGraph = false;
        //pn.saveable.shownoprint = true;
        if(arGraphEngine == arGraphEngineJSCHART) {
            pn.saveable.ibiChart = myibiChart[win];
            pn.saveable.ctype = chartIsTDG ;
        }
        pn.ctwin = -1;
        ibiChart.makeChart(null,pn,pwin,pn.usediv);
    } else {
        ibiChart.makeChartItem2(tn,ctype,xcol,ycol,btype,-1,true,myChart);
    }
    closewin(win);
}

function pt_dopivot(win,tn)
{
    var mytable = getMyTable(tn);
    var ctype = 5;
    var btype = 'SUM';
    var glist = grouplist[win];
    var alist = acrosslist[win];
    var mlist = measurelist[win];
    var aglist = agglist[win];
    var xcol=[],ycol=[];
    var pvcol = alist.length;
    var i;
    for(i=0;i<alist.length;i++)
        ycol[i] = alist[i];
    for(i=0;i<glist.length;i++)
        ycol[i+alist.length] = glist[i];
    for(i=0;i<mlist.length;i++) 
        xcol[i] = mlist[i];
    if(isModTool[win]) {
        pwin = winlist[win];
        var pn = getPn(pwin,tn);
        pn.xars = null;
        pn.saveable.ctype = ctype;
        pn.saveable.y_cols = CopyArray(ycol);
        pn.saveable.x_cols = CopyArray(xcol);
        pn.saveable.btypeArray = CopyArray(aglist);
        pn.saveable.shownoprint = true;
        pn.ctwin = -1;
        pn.saveable.pvcol = pvcol;
        ibiChart.makeChart(null,pn,pwin,pn.usediv);
    } else {
        ibiChart.makeChartItem2(tn,ctype,xcol,ycol,aglist,pvcol,true);
    }
    closewin(win);
}

function gt_changesort(win,t_num,pos, setting)
{
    if(sortorderlist[win][pos]==0)
        sortorderlist[win][pos] = 1;
    else
        sortorderlist[win][pos] = 0;
	if(typeof setting != "undefined")
		sortorderlist[win][pos] = setting;
    doGridToolUpdate(win,t_num);
}

function gt_toggleSortGroup(win,t_num,setting)
{
    var id="gridtoolform"+win;
	if(typeof setting != "undefined")
		gsortlist[win] = setting;
	else
    gsortlist[win] = !gsortlist[win];
    doGridToolUpdate(win,t_num);
}

var CT_CFT = [
{'height':2,'width':60,'top':-16,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':80,'top':-8,'left':0,'css':{}}
];

function gt_showAggmenu(win,t_num,pos)
{
    var id = 'gtma_'+t_num+'_'+pos;
    var toolbr = d.getElementById(id);
    var mytable = getMyTable(t_num);
    var MI_FT = [];
    var ii = 3;
    var calc_types;
    var ctype=coltypelist[win][pos];
    if(ctype==IBISTR) calc_types = a_calc_typesSTR;
    else
    if(ctype==IBIDATE) calc_types = a_calc_typesDATE;
    else calc_types = a_calc_types;
    if(toolbr) {
        MI_FT[0] = ["&nbsp;",null, null];
        MI_FT[0][ii++]=[[ibiMsgStr["none"]],null,{'ocv':'addcalc','oc':'ibiEditTools.Gt_changeAgg('+win+','+t_num+','+pos+',"NONE")'}];
        for(var j in calc_types)
            MI_FT[0][ii++]=[[calc_types[j]],null,{'ocv':'addcalc','oc':'ibiEditTools.Gt_changeAgg('+win+','+t_num+','+pos+',"'+j+'")'}];
        var MDmenu = ibiMenu.Menu(MI_FT,CT_CFT,null,mytable,null,null,id);
        ibiMenu.Showmenu(null,t_num,MDmenu,MDmenu,true,0);
    }
    return false;
}

function ct_showAggmenu(win,t_num,pos)
{
    var id = 'ctma_'+t_num+'_'+pos;
    var toolbr = d.getElementById(id);
    var mytable = getMyTable(t_num);
    var MI_FT = [];
    var ii = 3;
    var calc_types;
    var ctype = coltypelist[win][measurelist[win][pos]];
    if(ctype==IBISTR) calc_types = a_calc_typesSTR;
    else
    if(ctype==IBIDATE) calc_types = a_calc_typesSTR;
    else calc_types = a_calc_types;
    if(toolbr) {
        MI_FT[0] = ["&nbsp;",null, null];
        for(var j in calc_types)
            MI_FT[0][ii++]=[[calc_types[j]],null,{'ocv':'addcalc','oc':'ibiEditTools.Ct_changeAgg('+win+','+t_num+','+pos+',"'+j+'")'}];
        var MDmenu = ibiMenu.Menu(MI_FT,CT_CFT,null,mytable,null,null,id);
        ibiMenu.Showmenu(null,t_num,MDmenu,MDmenu,true,0);
    }
    return false;
}

    function ct_showOpmenu(win,t_num,pos)
    {
        var id = 'ctmb_'+t_num+'_'+pos;
        var toolbr = d.getElementById(id);
        var mytable = getMyTable(t_num);
        var MI_FT = [];
        var ii = 3;

        if(toolbr) {
            MI_FT[0] = ["&nbsp;",null, null];
            for(var j=0; j < optypes.length; j++)
                MI_FT[0][ii++]=[[optypes[j]],null,{'ocv':'addcalc','oc':'ibiEditTools.Ct_changeOp('+win+','+t_num+','+pos+',"'+j+'")'}];
            var MDmenu = ibiMenu.Menu(MI_FT,CT_CFT,null,mytable,null,null,id);
            ibiMenu.Showmenu(null,t_num,MDmenu,MDmenu,true,0);
        }
        return false;
    }

function pt_showAggmenu(win,t_num,pos)
{
    var id = 'ptma_'+t_num+'_'+pos;
    var toolbr = d.getElementById(id);
    var mytable = getMyTable(t_num);
    var MI_FT = [];
    var ii = 3;
    var calc_types;
    var ctype = coltypelist[win][measurelist[win][pos]];
    if(ctype==IBISTR) calc_types = a_calc_typesSTR;
    else
    if(ctype==IBIDATE) calc_types = a_calc_typesSTR;
    else calc_types = a_calc_types;
    if(toolbr) {
        MI_FT[0] = ["&nbsp;",null, null];
        for(var j in calc_types)
            MI_FT[0][ii++]=[[calc_types[j]],null,{'ocv':'addcalc','oc':'ibiEditTools.Pt_changeAgg('+win+','+t_num+','+pos+',"'+j+'")'}];
        var MDmenu = ibiMenu.Menu(MI_FT,CT_CFT,null,mytable,null,null,id);
        ibiMenu.Showmenu(null,t_num,MDmenu,MDmenu,true,0);
    }
    return false;
}

function doGridToolUpdate(win,t_num)
{
    var clist = columnlist[win];
    var slist = sortlist[win];
    var solist = sortorderlist[win];
    var ctlist = coltypelist[win];
    var gsort = gsortlist[win];
    var hlist = hiddenlist[win];
    var aglist = agglist[win];
    var sclist =subcalclist[win];
    var i,pos;

    if(gsort) {
        for(i=0;i<slist.length;i++) {
            pos = locateArray(clist,slist[i]);
            clist.splice(pos,1);
            clist.splice(i,0,slist[i]);
            var a=hlist.splice(pos,1);
            hlist.splice(i,0,a[0]);
            var a1=aglist.splice(pos,1);
            aglist.splice(i,0,a1[0]);
            var a2=ctlist.splice(pos,1);
            ctlist.splice(i,0,a2[0]);
        }
        columnlist[win] = clist;
        hiddenlist[win] = hlist;
        agglist[win] = aglist;
        coltypelist[win] = ctlist;
    }
    doGridToolDisp(t_num,win,clist,slist,solist,gsort,hlist,aglist,sclist);
}

function doGridTool(t_num,init)
{
    var mytable = getMyTable(t_num);
    var title = ibiMsgStr['gridtool'];
    if((typeof(mytable.gtwin)=="undefined")||(mytable.gtwin==-1))
        mytable.gtwin = getfreewin();
    var win = mytable.gtwin;
    var nwin = 'win'+win;
    var nnwin = 'windiv'+win;
    var wind = 'gridtool'+win;
    var i, numItems;
    var curCol, colNum;

    if(columnlist==null) columnlist = [];
    if(sortlist==null) sortlist = [];
    if(sortorderlist==null) sortorderlist=[];
    if(hiddenlist==null) hiddenlist=[];
    if(agglist==null) agglist=[];
    if(coltypelist==null) coltypelist = [];
    if(subcalclist==null) subcalclist = [];
	if(bucketlist==null) bucketlist = [];
    columnlist[win] = [];
    sortlist[win]=[];
    sortorderlist[win]=[];
    hiddenlist[win]=[];
    agglist[win]=[];
    coltypelist[win]=[];
    subcalclist[win]=[];
	bucketlist[win] = null;

    gsortlist[win]=false;
    if(mytable.groupSort) gsortlist[win]=true;

    for (i = 0, numItems = mytable.n_cols; i < numItems; i++) {
        curCol = mytable.a_capt[i];
        colNum = (typeof curCol.origDataField !== 'undefined') 
                 ? curCol.origDataField : curCol.dataField;
        columnlist[win][i]=mytable.a_cntl.a_cols[colNum].name;
        hiddenlist[win][i]=curCol.b_hide;
        coltypelist[win][i]=curCol.type;
        agglist[win][i]='';
        if(curCol.SUM) agglist[win][i]='SUM';
        if(curCol.MIN) agglist[win][i]='MIN';
        if(curCol.MAX) agglist[win][i]='MAX';
        if(curCol.AVG) agglist[win][i]='AVG';
        if(curCol.COU) agglist[win][i]='COU';
        if(curCol.DIS) agglist[win][i]='DIS';
    }
    var j = mytable.a_sort.length-1;
    for (i = 0, numItems = mytable.a_sort.length; i < numItems; i++) {
        sortlist[win][j]=mytable.a_cntl.a_cols[mytable.a_sort[i].n_col].name;
        sortorderlist[win][j] = mytable.a_sort[i].b_ord;
        if(mytable.groupSort) {
            if(mytable.bykeys) subcalclist[win][i] = mytable.bykeys[i].subcalcs;
        } else subcalclist[win][i]=false;
        j--;
    }
    

    setwin(win,wind,t_num,typecols,title);
    var noWinControl = false;
    buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");
	if(init)
		return win;

    doGridToolDisp(t_num,mytable.gtwin,columnlist[win],sortlist[win],sortorderlist[win],gsortlist[win],hiddenlist[win],agglist[win],subcalclist[win]);
}

function doGridToolDisp(t_num,win,columnlist,sortlist,sortorderlist,groupSort,hidelist,agglist,subcalcs)
{
    var mytable = getMyTable(t_num);
    var sn = [], sl = 0, i, numItems;
    var chkstr,mostr,pstr;
    var bc = "";
    var aggtype;
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) {
            bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";
            toolBC = mytable.a_cntl.wincnbcolor;
        }

    sn[sl++] = '<div class="arTool" id="gridtool'+win+'">';
    sn[sl++] = '<table valign="top" id="gridtoolt'+win+'"><tr>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=4 class="arToolColumnHeading" style="white-space:nowrap;'+bc+';">'+ibiMsgStr['colorder']+'<\/td><\/tr>';
    if(!groupSort || !sortlist.length) {
        sn[sl++] = '<tr>';
        sn[sl++] = '<td colspan=4><div style="background-color:white" ';

        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Gt_hideColPos('+win+','+t_num+',0,\'c\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Gt_changeColPos('+win+','+t_num+',0,\'c\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Gt_hideColPos('+win+','+t_num+',0,\'c\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Gt_changeColPos('+win+','+t_num+',0,\'c\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="gtc_'+t_num+'_0">'+getselectionBar("gtc_"+t_num+"_0")+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    for (i = 0, numItems = columnlist.length; i < numItems; i++) {
        var qstr = ibiEditTools.escapeQ(columnlist[i]);
        if(isARBrowserExtension) {
            mostr = 'onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\','+win+',\''+qstr+'\','+i+',\'c\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})"';
        } else {
		    mostr = 'onmousedown="ibiEditTools.DragStartTool(event,'+win+',\''+qstr+'\','+i+',\'c\')"';
        }
        pstr = 'style="cursor:pointer;"';
        if(groupSort && (i<sortlist.length)) {
            mostr = '';
            pstr = '';
        }
        sn[sl++] = '<tr>';
        sn[sl++] = '<td valign="middle" style="white-space:nowrap" width="16">';
        sn[sl++] = '<div style="cursor:pointer" ';

        if(isARBrowserExtension) {
            sn[sl++] = ' onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_changehide('+win+','+ t_num + ',' + i + ')&quot;)"';
        } else {
            sn[sl++] = ' onclick="ibiEditTools.Gt_changehide('+win+','+ t_num + ',' + i + ')"';
        }

        if(hidelist[i])
            sn[sl++] = ' title="'+ibiMsgStr['dsc']+'">'+ibiSkin.hclicon +'<\/div>';
        else
            sn[sl++] = ' title="'+ibiMsgStr['hdc']+'">'+ibiSkin.sclicon +'<\/div>';
        sn[sl++] = '<\/td>';
        sn[sl++] = '<td><div title="'+ibiMsgStr['sctext']+'" id="gtma_'+t_num+'_'+i+'" onclick="ibiEditTools.Gt_showAggmenu('+win+
               ','+t_num+','+ i + ')" style="cursor:pointer;">'+ibiSkin.sumtoolsicon+'<\/div><\/td>';
        aggtype = '';
        if(agglist[i]!='') aggtype = a_calc_all_types[agglist[i]];
        sn[sl++] = '<td class="arToolItem" style="white-space:nowrap" valign="TOP">'+aggtype+'<\/td>';
        sn[sl++] = '<td class="arToolItem" style="white-space:nowrap" '+mostr+'>';
        sn[sl++] = '<div '+pstr+'>'+columnlist[i]+'<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        if(groupSort && (sortlist.length>0) && (i==sortlist.length-1)) {
            sn[sl++] = '<tr><td colspan=4 style="white-space:nowrap" class="arToolItemSeperator">'+blankdot+'<\/td><\/tr>';
        }
        if(!groupSort || (i>=sortlist.length-1)) {
            sn[sl++] = '<tr>';
            sn[sl++] = '<td colspan=4><div style="background-color:gray" ';

            if(isARBrowserExtension) {
                sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Gt_hideColPos('+win+','+t_num+','+(i+1)+',\'c\')&quot;)"';
                sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Gt_changeColPos('+win+','+t_num+','+(i+1)+',\'c\')&quot;)"';
            } else {
                sn[sl++] = ' onmouseout="ibiEditTools.Gt_hideColPos('+win+','+t_num+','+(i+1)+',\'c\')"';
                sn[sl++] = ' onmouseover="ibiEditTools.Gt_changeColPos('+win+','+t_num+','+(i+1)+',\'c\')"';
            }

            sn[sl++] = '><div class="arToolColumnSelect" id="gtc_'+t_num+'_'+(i+1)+'">'+getselectionBar('gtc_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
            sn[sl++] = '<\/tr>';
        }
    }
    var usecolspan='';
    if(groupSort) 
        usecolspan=' colspan=2 ';
    sn[sl++] = '<\/table><\/td>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td class="arToolColumnHeading" style="white-space:nowrap;'+bc+';">'+ibiMsgStr['sortorder']+'<\/td>';
    if(groupSort) {
        sn[sl++] = '<td class="arToolColumnHeading" style="white-space:nowrap;'+bc+';">'+ibiMsgStr['subtotal']+'<\/td>';
    }
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td'+usecolspan+' style="white-space:nowrap"><div ';

    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Gt_hideSortPos('+win+','+t_num+',0,\'s\')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Gt_changeSortPos('+win+','+t_num+',0,\'s\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Gt_hideSortPos('+win+','+t_num+',0,\'s\')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Gt_changeSortPos('+win+','+t_num+',0,\'s\')"';
    }

    if(sortlist.length==0) 
        sn[sl++] = ' style="white-space:nowrap;backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = 'style="white-space:nowrap;"><div class="arToolColumnSelect" id="gts_'+t_num+'_0">'+getselectionBar('gts_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for (i = 0, numItems = sortlist.length; i < numItems; i++) {
        sn[sl++] = '<tr><td class="arToolItem">';
        sn[sl++] = '<table cellpadding=0 cellspacing=0><tr><td class="arToolItem" valign="middle" style="white-space:nowrap;width:18px;">';
        sn[sl++] = '<div style="text-align:center;cursor:pointer;width:18px;" ';

        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_removesort('+win+','+ t_num + ','+i+')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Gt_removesort('+win+','+ t_num + ','+i+')">';
        }

        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;width:18px;">';
        sn[sl++] = '<div style="text-align:center;cursor:pointer;width:18px;" ';

        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['ssort']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_changesort('+win+','+ t_num + ',' + i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['ssort']+'" onclick="ibiEditTools.Gt_changesort('+win+','+ t_num + ',' + i + ')">';
        }

        if(sortorderlist[i])
            sn[sl++] = ibiSkin.scdicon +'<\/div>';
        else
            sn[sl++] = ibiSkin.scaicon +'<\/div>';
        sn[sl++] = '<\/td>';

        var qstr = ibiEditTools.escapeQ(sortlist[i]);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\','+win+',\''+qstr+'\','+i+',\'s\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		    sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,'+win+',\''+qstr+'\','+i+',\'s\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">'+sortlist[i]+'<\/div><\/td>';
        sn[sl++] = '<\/tr><\/table><\/td>';
        if(groupSort) {
            sn[sl++] = '<td class="arToolItem" style="width:14px;">';
            sn[sl++] = '<div style="cursor:pointer;border:1px solid '+Ardefault.checkbox+';width:13px;height:13px;" ';

            if(isARBrowserExtension) {
                sn[sl++] = 'onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_changeSubCalc('+win+','+ t_num + ',' + i + ')&quot;)">';
            } else {
                sn[sl++] = 'onclick="ibiEditTools.Gt_changeSubCalc('+win+','+ t_num + ',' + i + ')">';
            }

            if(subcalcs[i]) sn[sl++]=ibiSkin.chkicon;
            else sn[sl++]=blankdot;
            sn[sl++] = '<\/div><\/td>';
        }
        sn[sl++] = '<\/tr>';
        sn[sl++] = '<tr>';
        sn[sl++] = '<td'+usecolspan+'><div ';

        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Gt_hideSortPos('+win+','+t_num+','+(i+1)+',\'s\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Gt_changeSortPos('+win+','+t_num+','+(i+1)+',\'s\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Gt_hideSortPos('+win+','+t_num+','+(i+1)+',\'s\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Gt_changeSortPos('+win+','+t_num+','+(i+1)+',\'s\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="gts_'+t_num+'_'+(i+1)+'">'+getselectionBar('gts_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<tr><td style="white-space:nowrap;"'+usecolspan+' class="arToolItemSeperator">'+blankdot+'<\/td><\/tr>';
    sn[sl++] = '<tr><td '+usecolspan+' class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">';
    sn[sl++] = '<table cellspacing=0 cellpadding=0><tr><td>';
    sn[sl++] = '<div style="cursor:pointer;border:1px solid '+Ardefault.checkbox+';background-color:white;'+Ardefault.chartSelect+';width:13px;height:13px;" ';

    if(isARBrowserExtension) {
        sn[sl++] = 'onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_toggleSortGroup('+win+','+t_num+')&quot;)">';
    } else {
        sn[sl++] = 'onclick="ibiEditTools.Gt_toggleSortGroup('+win+','+t_num+')">';
    }

    if(groupSort) sn[sl++]=ibiSkin.chkicon;
    else sn[sl++]=blankdot;
    sn[sl++] = '<\/div><\/td><td style="white-space:nowrap;" class="arToolColumnHeading">'+ibiMsgStr['groupsort']+'<\/td><\/tr><\/table><\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<\/table><\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr><td colspan=2 align="right">';

    if(isARBrowserExtension) {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiEditTools.Gt_dogrid('+win+','+t_num+')&quot;)"><div width="100%" class="arToolButton">';
    } else {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiEditTools.Gt_dogrid('+win+','+t_num+')"><div width="100%" class="arToolButton">';
    }

    sn[sl++] =  ibiMsgStr['ok']+'<\/div><\/td>';

    if(isARBrowserExtension) {
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;closewin('+win+','+t_num+')&quot;)"><div width="100%" class="arToolButton">';
    } else {
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="closewin('+win+','+t_num+')"><div width="100%" class="arToolButton">';
    }

    sn[sl++] =  ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
    sn[sl++] = '<\/td><\/tr>';
    sn[sl++] = '<\/table><\/div>';
    pwn[win].dobj_b.innerHTML = sn.join('');
    maxwin(win);
}

    function doAddFieldTool(t_num,updateColumn)
    {
        var mytable = getMyTable(t_num);
        var title = 'Add Field';
        if((typeof(mytable.gtwin)=="undefined")||(mytable.gtwin==-1))
            mytable.gtwin = getfreewin();
        var win = mytable.gtwin;
        var wind = 'fieldtool'+win;

        setwin(win,wind,t_num,typefield,title);
        var noWinControl = false;
        buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");

        doAddFieldToolDisp(t_num,mytable.gtwin,updateColumn);
    }

    function doAddFieldToolDisp(t_num,win,updateColumn)
    {
        var mytable = getMyTable(t_num);
        var sn = [], sl = 0, i;
        var bc = "";
        var fieldText = ibiMsgStr["ech"];
        var functions = [
        	["", "7", "8", "9", "+"],
			["", "4", "5", "6", "-"],
			["", "1", "2", "3", "*"],
			["", "0", ".", "%", "/"],
			["", "",  "",  "(", ")"]
		];
        var objName = "fieldtoolt"+win;
        var nodesCount = 0;
        var comp = {};
        var editing = false;
        var vname = 'v1';

        var vscript = '';
        if(typeof updateColumn != "undefined") {
        	editing = true;
        	var c = mytable.getColumnObjById(updateColumn);
        	if(c) {
        		vname = c.col.field;
        		vscript = c.capt.computeScript;
			}
		} else {
            for(i = 1; i < 2000; i++) {
                vname = "v"+i;
                if(mytable.getColumnByName(vname) == -1)
                	break;
            }
		}

        if(mytable)
            if(mytable.a_cntl.wincnbcolor) {
                bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";
                toolBC = mytable.a_cntl.wincnbcolor;
            }

        sn[sl++] = '<div class="arTool" id="'+objName+'">';

        var displayActionButtons = function() {
        	var obj = '';
            obj += '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiEditTools.AddField('+win+','+t_num+','+updateColumn+')"><div width="100%" class="arToolButton">';
            obj +=  ibiMsgStr['ok']+'<\/div><\/td>';
            obj +=  '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="closewin('+win+')"><div width="100%" class="arToolButton">';
            obj +=   ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
            return obj;
		};

        var displayFunctions = function() {
        	var h2;
        	var obj;
            var holder = new arbox(0,0,"100%","100%");
            holder.orientation = "vertical";
            holder.height = (22*functions.length);
            holder.id = objName+"_funcs";
            //holder.height = "30px";
            holder.domObj = holder.buildComponent();

        	for(var i = 0; i < functions.length; i++) {
        		h2 = new arbox(0,0,"100%","100%");
                h2.height = "22";
                h2.domObj = h2.buildComponent();
                holder.addElement(h2.domObj,h2);
                for (var j = 0; j < functions[i].length; j++) {
                    var fnc = functions[i][j];
                	if(fnc != "") {
                        obj = new aricon();

                        ibiCompound.addLayoutObject(obj);
                        obj.title = "show menu";
                        obj.value = fnc;
                        obj.class = "arToolButton";
                        obj.padding = "2px";
                        obj.width = 30;
                        obj.height = 20;
                        var color = "white";

                        obj.iconImg = '<svg height="20" width="20">'+
                            // '<rect x="0" y="0" rx="4" ry="4" width="20" height="20"' +
                            //'style="stroke:'+color+';stroke-width:5;opacity:0.5" />' +
                            '<text style="fill:' + color + ';font-size:12;font-family:Verdana" x="6" y="12">' + fnc + '</text>' +
                	        '</svg>';
                        h2.addElement(obj.buildComponent());

                        obj.onClick = function() {
                            var obj = document.getElementById(objName+"_ta");
                            if(obj.value == fieldText)
                                obj.value = "";
                            obj.value += this.value;
                            checkText(obj);
                        }
                    } else {
                		var styleText = "width:30px;height:20px;";
                		obj = document.createElement('div');
                        if(b_ie)
                            obj.style.setAttribute('cssText',styleText);
                        else
                            obj.setAttribute('style',styleText);
                        obj.innerHTML = "&nbsp;";
                		h2.addElement(obj);
			        }
                }
            }

            return holder;
		};

        var checkText = function(obj) {
        	var eobj = document.getElementById(obj.id+"r");
        	var t;
        	var c = {};
        	for(var i=0; i < mytable.a_cntl.a_cols.length; i++) {
        		c[mytable.a_cntl.a_cols[i].field] = {
        			"value":mytable.IBs[mytable.a_cont[0][i][DARAW]],
					"display":mytable.IBs[mytable.a_cont[0][i][DASTR]]
				}
			}
            try {
            	var txt = "column = "+JSON.stringify(c);
            	eval(txt);
                txt = "t = "+obj.value;
                eval(txt);
                eobj.innerHTML = t;
            } catch(e) {
                eobj.innerHTML = "js error";
            }
		};

        var displayFieldNameArea = function() {
            var obj = '';
            obj += "<form><div><span>"+ibiMsgStr["fldn"]+"</span>";
            obj += "<span><input type='text' id='"+objName+"_fldN' name='fieldname' value='"+vname+"'></span>";
            obj += "</div></form>";
            return obj;
        };

        var displayEvalArea = function() {
            var obj = '';
            obj += "<div>";
            obj += "<form></form>"+fieldText+"<br><textarea id='"+objName+"_ta' rows='12' cols='24' draggable='false' style='resize:none;'>"+vscript+"</textarea><br>";
            obj += "<span id='"+objName+"_tar'></span>"
            obj += "</div>";
            return obj;
        };

        var displayTree = function() {
            var buildTree = function(capt,cols) { //process the data provider and build the tree object recursively
                var newTree = [];
                var obj,i;
                var dimensions={};
                var measures={};
                for(i = 0; i<cols.length; i++){
                	if(capt[i].type==IBINUM)
                		measures[cols[i].name] = cols[i];
                	else
                		dimensions[cols[i].name] = cols[i];
                }
                newTree[0] = {
                    "id":nodesCount+"", "text": "Measures",
                    "state": {"opened": true, "selected": false},
                    "plugins": [ "dnd" ],"children":[]
                };
				nodesCount++;
				for(i in measures) {
                    obj = {
                        "id":nodesCount+"", "text": measures[i].name,
						'data':measures[i],
                        "state": {"opened": true, "selected": false},
                        "plugins": [ "dnd" ]
                    };
                    nodesCount++;
                    newTree[0].children[newTree[0].children.length] = obj;
				}
				nodesCount++;
                newTree[1] = {
                    "id":nodesCount+"", "text": "Dimensions",
                    "state": {"opened": true, "selected": false},
                    "plugins": [ "dnd" ],"children":[]
                };
                nodesCount++;
                for(i in dimensions) {
                    obj = {
                        "id":nodesCount+"", "text": dimensions[i].name,
                        'data':dimensions[i],
                        "state": {"opened": true, "selected": false},
                        "plugins": [ "dnd" ]
                    };
                    nodesCount++;
                    newTree[1].children[newTree[1].children.length] = obj;
                }
                return newTree;
            };

            var sid = 'addfield_00-s';

            line = '<div style="padding:10px;" id="'+sid+'"></div>';
            var obj = document.getElementById(objName+"_columns");
            if(obj)
            	obj.innerHTML = line;

            //Create the initial obj with the core data
            var obj = {
            	'plugins':['dnd'],
                'core': {
                    'data':null,
                    'plugins': [ 'dnd']
                }
            };

            //setting the tree structure to the obj
			var treeNodes = buildTree(mytable.a_capt,mytable.a_cntl.a_cols);
            obj.core.data = treeNodes;
            obj.core.check_callback = true;
            comp.root = obj.core.data;
            var mytree = $('#'+sid).jstree(obj); //use the obj that we just create to create a tree.

            //onchanged handling
            $(document).on('dnd_stop.vakata', function (e, mydata) {
            	if (e.type == "dnd_stop"){
            		if(mydata.event.target.id == objName+"_ta") {
            			var obj = mydata.event.target;
            			var elm = mydata.data.nodes[0];
            			var n = "[id='"+elm+"']"
                        var tree = $('#'+sid).jstree(true);
                        var node = tree.get_node( elm );
                        if(obj.value == fieldText)
                        	obj.value = "";
                        if(obj.value!="")
                            if(optypes.indexOf(obj.value[obj.value.length-1])==-1)
                                obj.value += "+";
            			obj.value += 'column.'+node.data.field+'.value';
            			checkText(obj);
					}
                }

            });

            $('#'+sid).delegate("a","dblclick", function(e) {
                var elm = $(this).parent().attr("id");
                var obj = document.getElementById(objName+"_ta");
                var n = "[id='"+elm+"']";
                var tree = $('#'+sid).jstree(true);
                var node = tree.get_node( elm );
                if(obj.value == fieldText)
                    obj.value = "";
                if(obj.value!="")
                	if(optypes.indexOf(obj.value[obj.value.length-1])==-1)
                		obj.value += "+";
                obj.value += 'column.'+node.data.field+'.value';
                checkText(obj);
            });

            $('#'+sid).on("changed.jstree", function (e, mydata) {
                if (mydata.action != "select_node" && mydata.action != "deselect_node")
                    return;
                $('#'+sid).jstree("deselect_node", mydata.node);
            });
        };
        sn[sl++] = '<\/div>';
        pwn[win].dobj_b.innerHTML = sn.join('');

        var newObj = new arbox(0,0,"100%","100%");
        newObj.id = objName+"_newField";
        newObj.align = "vertical";
        newObj.domObj = newObj.buildComponent();
        var cobj = document.getElementById(objName);
        cobj.appendChild(newObj.domObj);

        var fieldNameObj = document.createElement("div");
        fieldNameObj.id = objName+"_fielname";
        fieldNameObj.innerHTML = displayFieldNameArea();
        fieldNameObj.style.width="100%";
        fieldNameObj.style.height="40px";
        newObj.addElement(fieldNameObj,fieldNameObj);

        var newObj2 = new arbox(0,0,"100%","100%");
        newObj2.id = objName+"_cont2";
        newObj2.overflow = "auto";
        newObj2.height = "100%";
        newObj2.domObj = newObj2.buildComponent();
        newObj.addElement(newObj2.domObj,newObj2);

        var newObj5 = new arbox(0,0,"100%","100%");
        newObj5.id = objName+"_colm5";
        newObj5.overflow = "auto";
        newObj5.border = "solid black 1px";
        newObj5.width="50%";
        newObj5.domObj = newObj5.buildComponent();
        newObj2.addElement(newObj5.domObj,newObj5);

        var colsObj = document.createElement("div");
        colsObj.id = objName+"_columns";
        colsObj.style.width = "150px";
        colsObj.style.height = "100%";
        newObj5.addElement(colsObj,colsObj);

        var newObj3 = new arbox(0,0,"100%","100%");
        newObj3.id = objName+"_cont3";
        newObj3.align = "vertical";
        newObj3.width = "50%";
        newObj3.domObj = newObj3.buildComponent();
        newObj2.addElement(newObj3.domObj,newObj3);


        var newObj4 = new arbox(0,0,"100%","100%");
        newObj4.id = objName+"_cont4";
        newObj4.overflow = "auto";
        newObj4.border = "solid black 1px";
        newObj4.width = "50%";
        newObj4.domObj = newObj4.buildComponent();
        newObj3.addElement(newObj4.domObj,newObj4);

        var buttonObj = displayFunctions();
        newObj3.addElement(buttonObj.domObj,buttonObj);

        var evalObj = document.createElement("div");
        evalObj.id = objName+"_eval";
        evalObj.style.overflow = "auto";
        var txt = displayEvalArea();
        var txtMeasure = measureText(txt);
        evalObj.style.width=txtMeasure.width+"px";
        evalObj.style.height=txtMeasure.height+"px";
        evalObj.innerHTML = displayEvalArea();
        newObj4.addElement(evalObj,evalObj);

        var newObj6 = new arbox(0,0,"100%","100%");
        newObj6.id = objName+"_bt";
        newObj6.overflow = "auto";
        newObj6.float = "right";
        newObj6.height = "30px";
        newObj6.width = "100%";
        newObj6.domObj = newObj6.buildComponent();
        newObj.addElement(newObj6.domObj,newObj6);

        var btObj = document.createElement("div");
        btObj.id = objName+"_bt2";
        //btObj.style.width = "100%";
       // btObj.style.float = "right";
        btObj.innerHTML = displayActionButtons();
        newObj6.addElement(btObj,btObj);

        var fobj = document.getElementById(objName+"_ta");
        $("#"+objName+"_ta").on("input",function (e){
        	checkText(this);
		});

        displayTree();
        ibiCompound.adjustBox(newObj,400,400);
        maxwin(win,false);
    }

    function doAddField(win,t_num,updateColumn) {
        var mytable = getMyTable(t_num);
        if(mytable) {
            var objName = "fieldtoolt"+win;
            var computeScriptObj = document.getElementById(objName+"_ta");
            var fieldNameObj = document.getElementById(objName+"_fldN");
            var obj=mytable.addColumn(fieldNameObj.value,fieldNameObj.value,IBINUM,undefined,updateColumn);
            obj.capt.computeScript = computeScriptObj.value;
            mytable.initBody();
            mytable.gshow();
		}
        closewin(win);
	}

function _setTableDraggableMenu(mytable)
{
    var toolWidth = 500, toolHeight = 300;
    var draggable = true;
    if (mytable.a_cntl.autoFit !== arConstants.AUTOFIT_OFF) {
        var h = window.innerHeight || document.documentElement.offsetHeight;
        var w = window.innerWidth  || document.documentElement.offsetWidth;
        h -= 20; w -= 20;
        if (toolHeight > (h - 85)) { toolHeight = h - 85; draggable = false; }
        if (toolWidth > w) { toolWidth = w; draggable = false; }
    }
    mytable.a_cntl.draggableMenu = draggable;
    return { height: toolHeight, width: toolWidth };
}

function doChartToolmod(pwin,t_num,subTable)
{
    var mytable = getMyTable(t_num);
    var pn = getPn(pwin,t_num);
    if(typeof(subTable)!="undefined")
        if(subTable!=-1) {
            pn = pn.children[subTable];
        }
    var title = ibiMsgStr['charttool'];
    if((typeof(pn.ctwin)=="undefined")||(pn.ctwin==-1))
        pn.ctwin = getfreewin();
    var win = pn.ctwin;
    var nwin = 'win'+win;
    var nnwin = 'windiv'+win;
    var wind = 'charttool'+win;
    var i;

    if(columnlist==null) columnlist = [];
    if(virtlist==null) virtlist = [];
    if(grouplist==null) grouplist = [];
    if(measurelist==null) measurelist = [];
    if(typelist==null) typelist = [];
    if(agglist==null) agglist = [];
    if(coltypelist==null) coltypelist = [];
    if(myibiChart==null) myibiChart = [];
	if(bucketlist==null) bucketlist = [];
    columnlist[win] = [];
    coltypelist[win] = [];
    grouplist[win]=[];
    measurelist[win] = [];
    agglist[win]=[];
	bucketlist[win] = pn.tcntl.buckets;
    virtlist[win] = {'map':{}};
    myibiChart[win] = pn.saveable.ibiChart;
    for(i=0; i < mytable.n_cols; i++) {
        columnlist[win][i]=mytable.a_cntl.a_cols[i].name;
        coltypelist[win][i]=mytable.a_capt[i].type;
    }
    for(i=0; i <pn.saveable.y_cols.length; i++) {
        grouplist[win][i] = pn.saveable.y_cols[i];
    }
    for(i=0; i <pn.saveable.x_cols.length; i++) {
		if(mytable.a_capt[pn.saveable.x_cols[i]].virtField) {
			virtlist[win] = mytable.a_capt[pn.saveable.x_cols[i]].root;
		} else {
			measurelist[win][measurelist[win].length] = pn.saveable.x_cols[i];
			agglist[win][agglist[win].length] = pn.saveable.btypeArray[i];
		}
    }
    typelist[win] = pn.saveable.ctype;
    setwin(win,wind,t_num,typeechart,title);
    var noWinControl = false;
    _setTableDraggableMenu(mytable);
    buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");
    isModTool[win]=true;
    winlist[win] = pwin;
    doChartToolDisp(t_num,pn.ctwin,columnlist[win],grouplist[win],measurelist[win],typelist[win],agglist[win],virtlist[win]);
}

function doChartTool(t_num)
{
    var mytable = getMyTable(t_num);
    var title = ibiMsgStr['charttool'];
    if((typeof(mytable.ctwin)=="undefined")||(mytable.ctwin==-1))
        mytable.ctwin = getfreewin();
    var win = mytable.ctwin;
    var nwin = 'win'+win;
    var nnwin = 'windiv'+win;
    var wind = 'charttool'+win;

    if(columnlist==null) columnlist = [];
    if(virtlist==null) virtlist = [];
    if(grouplist==null) grouplist = [];
    if(measurelist==null) measurelist = [];
    if(typelist==null) typelist = [];
    if(agglist==null) agglist = [];
    if(coltypelist==null) coltypelist = [];
    if(myibiChart==null) myibichart = [];
    columnlist[win] = [];
    grouplist[win]=[];
    virtlist[win]={'map':{}};
    measurelist[win] = [];
    agglist[win] = [];
    coltypelist[win] = [];
    typelist[win] = chartIsBar;
    myibiChart[win] = "VBar";

    for(var i=0; i < mytable.n_cols; i++) {
        columnlist[win][i]=mytable.a_cntl.a_cols[i].name;
        coltypelist[win][i]=mytable.a_capt[i].type;
    }


    setwin(win,wind,t_num,typeechart,title);
    var noWinControl = false;
    buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");
    isModTool[win]=false;
    doChartToolDisp(t_num,mytable.ctwin,columnlist[win],grouplist[win],measurelist[win],typelist[win],agglist[win],virtlist[win]);
}

function ct_toogleTab(win,t_num,spanel,hpanel)
{
    var dobjs = document.getElementById('tpanel_'+spanel+'_'+win+'_'+t_num);
    var dobjst = document.getElementById('ttpanel_'+spanel+'_'+win+'_'+t_num);
    dobjs.style.zIndex=1;
    if(dobjst)dobjst.setAttribute(ibiclassName,"arToolTabSelected");

    var dobjh = document.getElementById('tpanel_'+hpanel+'_'+win+'_'+t_num);
    var dobjht = document.getElementById('ttpanel_'+hpanel+'_'+win+'_'+t_num);
    dobjh.style.zIndex=0;
    if(dobjht)dobjht.setAttribute(ibiclassName,"arToolTab");
}

function ct_setmyibiChart(win,t_num,chart)
{
	var mytable = getMyTable(t_num);
    var dobjs = document.getElementById('chticon_'+win+'_'+t_num+'_'+chart);
    var dobjh = document.getElementById('chticon_'+win+'_'+t_num+'_'+myibiChart[win]);
    myibiChart[win] = chart;
    typelist[win] = chartIsTDG;
	if(mytable.tdgOrgChartType)
		bucketlist[win] = ibiChart.swapBuckets(mytable,mytable.tdgOrgChartType,chart);
    if(dobjs) dobjs.setAttribute(ibiclassName,"arToolChartIconSelected");
    if(dobjh) dobjh.setAttribute(ibiclassName,"arToolChartIcon");
}

function doChartToolDispGroup(t_num,win,grouplist)
{
    var mytable = getMyTable(t_num);
    var dobj = document.getElementById('cgu_'+win+'_'+t_num);
    var sl = 0;
    var sn = [];
    var bc = "", groupItemName;
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";

    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=2 class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['crtpvt2']+'<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td colspan=2 style="white-space:nowrap;"><div ';
    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Ct_hideGroupPos('+win+','+t_num+',0,\'g \')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Ct_changeGroupPos('+win+','+t_num+',0,\'g\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Ct_hideGroupPos('+win+','+t_num+',0,\'g \')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Ct_changeGroupPos('+win+','+t_num+',0,\'g\')"';
    }

    if(grouplist.length==0) 
        sn[sl++] = ' style="backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = '><div class="arToolColumnSelect" id="ctg_'+t_num+'_0">'+getselectionBar('ctg_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for(var i=0; i < grouplist.length; i++) {
        groupItemName = columnlist[win][grouplist[i]];
        sn[sl++] = '<tr>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;" width="17">';
        sn[sl++] = '<div  style="text-align:center;cursor:pointer;" ';
        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_removegroup('+win+','+ t_num+','+ i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Ct_removegroup('+win+','+ t_num+','+ i + ')">';
        }
        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';
        var qstr = ibiEditTools.escapeQ(groupItemName);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'g\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		    sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,' + win + ',\'' + qstr + '\',' + i + ',\'g\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">' + groupItemName + '<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        sn[sl++] = '<tr>';
        sn[sl++] = '<td colspan=2><div';
        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Ct_hideGroupPos('+win+','+t_num+','+(i+1)+',\'g\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Ct_changeGroupPos('+win+','+t_num+','+(i+1)+',\'g\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Ct_hideGroupPos('+win+','+t_num+','+(i+1)+',\'g\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Ct_changeGroupPos('+win+','+t_num+','+(i+1)+',\'g\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="ctg_'+t_num+'_'+(i+1)+'">'+getselectionBar('ctg_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table>';
    dobj.innerHTML = sn.join('');
}
    function ShowVirtFieldName(win,t_num,pos)
    {
        var obj = document.getElementById('vfield_'+win+'_'+pos);
        var obj2 = document.getElementById('gotopage');
        var vlist = virtlist[win];
        var line = '';
        var node,x=0,y=0;
        var val = vlist.groups[pos].name;
        line += '<div style="background-color:white;position:relative;border:1px black solid;">';
        line += '<form action="javascript:nop();" onsubmit="return ibiEditTools.setVirtFieldName('+win+','+t_num+','+pos+');">';
        line += "<input size=4 type=text name='pgnum' id='formvf' value='"+val+"'>";
        line += '<\/form><\/div>';
        if(obj) {
            node = obj;
            while(node.offsetParent) {
                y += node.offsetTop-node.scrollTop;
                x += node.offsetLeft-node.scrollLeft;
                node = node.offsetParent;
            }
            obj2.style.left = (x+5)+'px';
            obj2.style.top = (y+5)+'px';
            obj2.style.visibility='visible';
            obj2.innerHTML = line;
        }
        textBoxOpenPos = pos;
        textBoxOpen = true;
    }

    function SetVirtFieldName(win,t_num,pos) {
        var vlist = virtlist[win];
        var fname = 'formvf';
        var fobj = d.getElementById(fname);
        if(fobj != null) {
            var val = fobj.value;
            var obj2 = document.getElementById('gotopage');
            if (val != '')
                vlist.groups[pos].name = val;
            if (obj2) {
                obj2.innerHTML = '';
                obj2.style.visibility = 'hidden';
            }
            doChartToolDispMeasure(t_num, win, measurelist[win], agglist[win], virtlist[win]);
        }
        textBoxOpen = false;
        return false;
    }

function doChartToolDispMeasure(t_num,win,measurelist,agglist,vlist)
{
    var mytable = getMyTable(t_num);
    var dobj = document.getElementById('cmu_'+win+'_'+t_num);
    var sl = 0;
    var sn= [];
    var bc = "", measureItemName;
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";

    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=4 class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['measure']+'<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td colspan=4 style="white-space:nowrap;"><div';
    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Ct_hideMeasurePos('+win+','+t_num+',0,\'s\')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Ct_changeMeasurePos('+win+','+t_num+',0,\'s\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Ct_hideMeasurePos('+win+','+t_num+',0,\'s\')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Ct_changeMeasurePos('+win+','+t_num+',0,\'s\')"';    
    }
    
    if(measurelist.length==0) 
        sn[sl++] = ' style="backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = '><div class="arToolColumnSelect" id="ctm_'+t_num+'_0">'+getselectionBar('ctm_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for(var i=0; i < measurelist.length; i++) {
        measureItemName = columnlist[win][measurelist[i]];
        if(vlist.map[i]) {
            if(i == vlist.map[i].position.start) {
                sn[sl++] = '<tr><td colspan="4"><hr><\/td><\/tr>';
                sn[sl++] = '<tr><td colspan="2"><\/td><td>';
                sn[sl++] = '<span style="cursor:pointer" id="vfield_'+win+'_'+vlist.map[i].position.start+'" '+
                    'onclick="ibiEditTools.showVirtFieldName('+win+','+t_num+','+vlist.map[i].position.start+')">'+vlist.map[i].position.name+'<\/span>';
                sn[sl++] = '<\/td><td><\/td><\/tr>';
            } else {
                sn[sl++] = '<tr><td></td><td colspan="3"><div title="'+ibiMsgStr['sctext']+'" id="ctmb_'+t_num+'_'+i+
                    '" onclick="ibiEditTools.Ct_showOpmenu('+win+','+t_num+','+ i + ')" '+
                    'style="cursor:pointer;border:solid 1px black;width:12px;height:12px;text-align:center;vertical-align:middle;">'+
                    vlist.map[i].operator+'<\/div><\/td><\/tr>';
            }
        }
        sn[sl++] = '<tr>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;" width="17">';
        sn[sl++] = '<div  style="text-align:center;cursor:pointer;" ';
        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_removemeasure('+win+','+ t_num+','+ i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Ct_removemeasure('+win+','+ t_num+','+ i + ')">';
        }
        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';
        sn[sl++] = '<td class="arToolItem" width="16"><div title="'+ibiMsgStr['sctext']+'" id="ctma_'+t_num+'_'+i+
               '" onclick="ibiEditTools.Ct_showAggmenu('+win+','+t_num+','+ i + ')" style="cursor:pointer;">'+ibiSkin.sumtoolsicon+'<\/div><\/td>';
        sn[sl++] = '<td style="white-space:nowrap;" valign="TOP" class="arToolItem">'+a_calc_all_types[agglist[i]]+':<\/td>';
        var qstr = ibiEditTools.escapeQ(measureItemName);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'m\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})" ';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,' + win + ',\'' + qstr + '\',' + i + ',\'m\')" ';
        }
        //sn[sl++] = ' onmouseout="this.style.border=\'none\'"';
        //sn[sl++] = ' onmouseover="this.style.border=\'solid 1px black\';ibiEditTools.Ct_insertMeasurePos('+win+','+t_num+','+i+',\'s\')"';
        sn[sl++] = '>';
        sn[sl++] = '<div onclick="" style="cursor:pointer;">' + measureItemName + '<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        if(vlist.map[i]) {
            if(i == (vlist.map[i].position.start + vlist.map[i].position.length - 1) ) {
                sn[sl++] = '<tr><td colspan="4"><hr></td></tr>';
            }
        }
        if((typeof vlist.map[i] == "undefined") ||
            ((vlist.map[i].position.start + vlist.map[i].position.length - 1)==i)){
            sn[sl++] = '<tr>';
            sn[sl++] = '<td colspan=4><div';
            if(isARBrowserExtension) {
                sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Ct_hideMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')&quot;)"';
                sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Ct_changeMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')&quot;)"';
            } else {
                sn[sl++] = ' onmouseout="ibiEditTools.Ct_hideMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')"';
                sn[sl++] = ' onmouseover="ibiEditTools.Ct_changeMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')"';
            }
            sn[sl++] = '><div class="arToolColumnSelect" id="ctm_'+t_num+'_'+(i+1)+'">'+getselectionBar('ctm_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
            sn[sl++] = '<\/tr>';
        }
    }
    sn[sl++] = '<\/table>';
    dobj.innerHTML = sn.join('');
}

function doChartToolDisp(t_num,win,columnlist,grouplist,measurelist,ctype,agglist,vlist)
{
    var mytable = getMyTable(t_num);
    var sn = [], sl = 0, i, j, numItems, catlist;
    var bcolor=[];
    var toolwidth=500;
    var toolHeight = 300;
    if (arGraphEngine == arGraphEngineJSCHART) {
        toolwidth = (tdginfo.chartIconsSize.width+32)*4;
    }
    if (mytable.a_cntl.autoFit !== arConstants.AUTOFIT_OFF) {
        var tb = _setTableDraggableMenu(mytable);
        toolHeight = tb.height;
        toolwidth = (toolwidth > tb.width) ? tb.width : toolwidth;
    }
    var bc = "";
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) {
            bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";
            toolBC = mytable.a_cntl.wincnbcolor;
        }
    var showroll = true;
    if(mytable)
        if(mytable.a_cntl.reportView!=REPORTGRID) 
            if(winlist[win]<0) showroll = false;

    bcolor[0] = 'padding:2px;';
    bcolor[1] = 'padding:2px;';
    bcolor[2] = 'padding:2px;';
    bcolor[3] = 'padding:2px;';
    bcolor[4] = 'padding:2px;';
    bcolor[ctype] = "border:2px solid "+Ardefault.chartSelect+";";

    sn[sl++] = '<div class="arTool" id="charttool'+win+'">';
    sn[sl++] = '<table valign="top" id="charttoolt'+win+'">';
    if(arGraphEngine != arGraphEngineJSCHART) {
        sn[sl++] = '<tr><td align="left" class="arToolMenuBar">';
        sn[sl++] = '<table>';
        sn[sl++] = '<tr>';
        if(isARBrowserExtension) {
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtbar']+'" style="cursor:pointer;'+bcolor[2]+';" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_setChartType('+win+',2,'+t_num+')&quot;)">'+ibiSkin.bar1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtpie']+'" style="cursor:pointer;'+bcolor[0]+';" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_setChartType('+win+',0,'+t_num+')&quot;)">'+ibiSkin.pie1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtline']+'" style="cursor:pointer;'+bcolor[1]+';" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_setChartType('+win+',1,'+t_num+')&quot;)">'+ibiSkin.line1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtscat']+'" style="cursor:pointer;'+bcolor[3]+';" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_setChartType('+win+',3,'+t_num+')&quot;)">'+ibiSkin.scat1icon+'<\/div><\/td>';
        } else {
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtbar']+'" style="cursor:pointer;'+bcolor[2]+';" onclick="ibiEditTools.Ct_setChartType('+win+',2,'+t_num+')">'+ibiSkin.bar1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtpie']+'" style="cursor:pointer;'+bcolor[0]+';" onclick="ibiEditTools.Ct_setChartType('+win+',0,'+t_num+')">'+ibiSkin.pie1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtline']+'" style="cursor:pointer;'+bcolor[1]+';" onclick="ibiEditTools.Ct_setChartType('+win+',1,'+t_num+')">'+ibiSkin.line1icon+'<\/div><\/td>';
            sn[sl++] = '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtscat']+'" style="cursor:pointer;'+bcolor[3]+';" onclick="ibiEditTools.Ct_setChartType('+win+',3,'+t_num+')">'+ibiSkin.scat1icon+'<\/div><\/td>';
        }

        if(showroll)sn[sl++] = '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtroll']+'" style="cursor:pointer;'+bcolor[4]+';" onclick="ibiEditTools.Ct_setChartType('+win+',4,'+t_num+')">'+ibiSkin.roll1icon+'<\/div><\/td>';
        sn[sl++] = '<\/tr><\/table>';
        sn[sl++] = '<\/td><\/tr>';
    }
       sn[sl++] = '<tr>';
    sn[sl++] = '<td valign="top"  class="arToolColumnBorder">';
    if(arGraphEngine == arGraphEngineJSCHART) {
        sn[sl++] = '<div>';
        sn[sl++] = '<table><tr>';
        if(!mytable.a_cntl.hasBuckets)
            sn[sl++] = '<td><div id="ttpanel_0_'+win+'_'+t_num+'" class="arToolTabSelected" onclick="ibiEditTools.Ct_toogleTab('+win+','+t_num+',0,1);">'+ibiMsgStr['Series']+'<\/div><\/td>';
        sn[sl++] = '<td><div id="ttpanel_1_'+win+'_'+t_num+'" class="arToolTab" onclick="ibiEditTools.Ct_toogleTab('+win+','+t_num+',1,0);">'+ibiMsgStr['Charts']+'<\/div><\/td>';
        sn[sl++] = '<\/tr><\/table>';
        sn[sl++] = '<\/div>';
    }
    sn[sl++] = '<div style="width:'+toolwidth+'px;height:'+toolHeight+'px;">';
    sn[sl++] = '<div id="tpanel_'+win+'_'+t_num+'" style="display:none;position:relative;overflow:hidden;width:'+toolwidth+'px;height:'+toolHeight+'px;top:0px;left:0px;">';
    sn[sl++] = '<div id="tpanel_0_'+win+'_'+t_num+'" style="background-color:white;position:absolute;top:0px;left:0px;z-index:1;overflow:auto;width:'+toolwidth+'px;height:'+toolHeight+'px;">';
    sn[sl++] = '<table><tr><td valign="top">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['columns']+'<\/td><\/tr>';
    for (i = 0, numItems = columnlist.length; i < numItems; i++) {
        sn[sl++] = '<tr>';
        var qstr = ibiEditTools.escapeQ(columnlist[i]);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'c\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,'+win+',\''+qstr+'\','+i+',\'c\')">';
        }
        sn[sl++] = '<div onclick="" style="cursor:pointer;">'+columnlist[i]+'<\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table><\/td>';
       sn[sl++] = '<td valign="top">';
    sn[sl++] = '<div style="border:none;" id="cgu_'+win+'_'+t_num+'">';
    sn[sl++] = '<\/div><\/td>';
       sn[sl++] = '<td valign="top">';
    sn[sl++] = '<div style="border:none;" id="cmu_'+win+'_'+t_num+'">';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr><\/table><\/div>';
    if(arGraphEngine == arGraphEngineJSCHART) {
        var img,cname;
        var jj;
        var iwidth = tdginfo.chartIconsSize.width+'px';
        var iheight = tdginfo.chartIconsSize.height+'px';

        catlist = tdginfo.category;
        sn[sl++] = '<div id="tpanel_1_'+win+'_'+t_num+'" style="background-color:white;position:absolute;top:0px;left:0px;z-index:0;overflow:auto;width:'+toolwidth+'px;height:'+toolHeight+'px;">';
        sn[sl++] = '<table>';

        for (i = 0; i < catlist.length; i++) {
            sn[sl++] = '<tr>';
            jj=0;
            for (j = 0, numItems = catlist[i].chartList.length; j < numItems; j++) {
				if((!catlist[i].chartList[j].showInTool)||
					(catlist[i].chartList[j].notForBucket && mytable.a_cntl.hasBuckets)) continue;
                //if(catlist[i].chartList[j].sampleImg) 
                //     img=catlist[i].chartList[j].sampleImg;
                //else {
                    img = '';
                    //if(typeof(catlist[i].chartList[j].showWhenLoad) == "undefined")
                    //    catlist[i].chartList[j].showWhenLoad = [];
                    //catlist[i].chartList[j].showWhenLoad[catlist[i].chartList[j].showWhenLoad.length]='cp_'+t_num+'_'+i+'_'+j;
                //}
                cname = catlist[i].chartList[j].name;
                sn[sl++] = '<td>';
                sn[sl++] = '<div id="chticon_'+win+'_'+t_num+'_'+cname+'" class="arToolChartIcon" onclick="ibiEditTools.Ct_setmyibiChart('+win+','+t_num+',\''+cname+'\')">';
                sn[sl++] = '<div style="position:relative;width:'+iwidth+';height:'+iheight+';">';
                sn[sl++] = '<div style="position:absolute;background-color:white;left:0px;top:0px;width:'+iwidth+';height:'+iheight+';opacity:0.03;filter:alpha(opacity=3);z-index:1"><\/div>';
                sn[sl++] = '<div style="position:absolute;left:0px;top:0px;width:'+iwidth+';height:'+iheight+';z-index:0;" id="cp_'+t_num+'_'+i+'_'+j+'">'+img+'<\/div>';
                sn[sl++] = '<\/div><\/div>';
                sn[sl++] = '<\/td>';
                jj++;
                if(jj==4) {
                    sn[sl++]='<\/tr><tr>';
                    jj=0;
                }
            }
            if (jj) {
                for (j = jj; jj < 4; jj++) { sn[sl++] = '<td><\/td>'; }
            }
            sn[sl++] = '<\/tr>';
        }
         sn[sl++] = '<\/table>';
        sn[sl++] = '<\/div>';
    }
    sn[sl++] = '<\/div><\/div>';
    sn[sl++] = '<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr><td align="right">';
    if(isARBrowserExtension) {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiEditTools.Ct_dochart('+win+','+t_num+')&quot;)"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['ok']+'<\/div><\/td>';
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;closewin('+win+')&quot;)"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
    } else {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiEditTools.Ct_dochart('+win+','+t_num+')"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['ok']+'<\/div><\/td>';
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="closewin('+win+')"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
    }

    sn[sl++] = '<\/td><\/tr>';
    sn[sl++] = '<\/table><\/div>';
    pwn[win].dobj_b.innerHTML = sn.join('');
    if(arGraphEngine == arGraphEngineJSCHART) {
        var obj;
        catlist = tdginfo.category;

        for (i = 0; i < catlist.length; i++) {
            for (j = 0, numItems = catlist[i].chartList.length; j < numItems; j++) {
                if(!catlist[i].chartList[j].showInTool) continue;
                if(catlist[i].chartList[j].sampleImg) {
                    obj = document.getElementById('cp_'+t_num+'_'+i+'_'+j);
                    if(obj) obj.innerHTML = catlist[i].chartList[j].sampleImg;
                } else {
                    if(typeof(catlist[i].chartList[j].showWhenLoad) == "undefined")
                        catlist[i].chartList[j].showWhenLoad = [];
                    catlist[i].chartList[j].showWhenLoad[catlist[i].chartList[j].showWhenLoad.length]='cp_'+t_num+'_'+i+'_'+j;
                }
            }
        }
        chartIconsCreated = false;
        if(!genChartIconsMiniAvailable) genChartIcons(true);
    }
    doChartToolDispGroup(t_num,win,grouplist);
    doChartToolDispMeasure(t_num,win,measurelist,agglist,vlist);
    if(mytable.a_cntl.hasBuckets)
        ibiEditTools.Ct_toogleTab(win,t_num,1,0);
    maxwin(win);
    var dobj = document.getElementById("tpanel_"+win+'_'+t_num);
    dobj.style.display = 'block';
}


function doPivotTool(t_num)
{
    var mytable = getMyTable(t_num);
    var title = ibiMsgStr['pivottool'];
    if((typeof(mytable.ptwin)=="undefined")||(mytable.ptwin==-1))
        mytable.ptwin = getfreewin();
    var win = mytable.ptwin;
    var nwin = 'win'+win;
    var nnwin = 'windiv'+win;
    var wind = 'pivottool'+win;

    if(columnlist==null) columnlist = [];
    if(coltypelist==null) coltypelist = [];
    if(grouplist==null) grouplist = [];
    if(acrosslist==null) acrosslist = [];
    if(measurelist==null) measurelist = [];
    if(agglist==null) agglist = [];
    columnlist[win] = [];
    coltypelist[win] = [];
    grouplist[win]=[];
    acrosslist[win] = [];
    measurelist[win] = [];
    agglist[win] = [];
    for(var i=0; i < mytable.n_cols; i++) {
        columnlist[win][i]=mytable.a_cntl.a_cols[i].name;
        coltypelist[win][i]=mytable.a_capt[i].type;
    }
    setwin(win,wind,t_num,typeepivot,title);
    var noWinControl = false;
    buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");
    isModTool[win]=false;
    doPivotToolDisp(t_num,win,columnlist[win],grouplist[win],acrosslist[win],measurelist[win],agglist[win]);
}

function doPivotToolmod(pwin,t_num,subTable)
{
    var mytable = getMyTable(t_num);
    var pn = getPn(pwin,t_num);
    if(typeof(subTable)!="undefined")
        if(subTable!=-1) pn = pn.children[subTable];
    var title = ibiMsgStr['pivottool'];
    if((typeof(pn.ctwin)=="undefined")||(pn.ctwin==-1))
        pn.ctwin = getfreewin();
    var win = pn.ctwin;
    var nwin = 'win'+win;
    var nnwin = 'windiv'+win;
    var wind = 'pivottool'+win;

    if(columnlist==null) columnlist = [];
    if(coltypelist==null) coltypelist = [];
    if(grouplist==null) grouplist = [];
    if(acrosslist==null) acrosslist = [];
    if(measurelist==null) measurelist = [];
    if(agglist==null) agglist = [];
    coltypelist[win] = [];
    columnlist[win] = [];
    grouplist[win]=[];
    acrosslist[win] = [];
    measurelist[win] = [];
    agglist[win] = [];
    for(var i=0; i < mytable.n_cols; i++) {
        columnlist[win][i]=mytable.a_cntl.a_cols[i].name;
        coltypelist[win][i]=mytable.a_capt[i].type;
    }
    for(i=0; i <pn.saveable.pvcol; i++) {
        acrosslist[win][i] = pn.saveable.y_cols[i];
    }
    for(i=pn.saveable.pvcol; i <pn.saveable.y_cols.length; i++) {
        grouplist[win][i - pn.saveable.pvcol] = pn.saveable.y_cols[i];
    }
    for(i=0; i <pn.saveable.x_cols.length; i++) {
        measurelist[win][i] = pn.saveable.x_cols[i];
        agglist[win][i] = pn.saveable.btypeArray[i];
    }

    setwin(win,wind,t_num,typeepivot,title);
    var noWinControl = false;
    buildwin(win,title,mytable,false,null,null,noWinControl,"1px solid #ccddee");
    isModTool[win]=true;
    winlist[win] = pwin;
    doPivotToolDisp(t_num,win,columnlist[win],grouplist[win],acrosslist[win],measurelist[win],agglist[win]);
}


function doPivotToolDisp(t_num,win,columnlist,grouplist,acrosslist,measurelist,agglist)
{
    var mytable = getMyTable(t_num);
    var sn = [], sl = 0, i, numItems;
    var bc = "", itemName;
    if(mytable)
        if(mytable.a_cntl.wincnbcolor) {
            bc = "background-color:"+mytable.a_cntl.wincnbcolor+";";
            toolBC = mytable.a_cntl.wincnbcolor;
        }

    sn[sl++] = '<div class="arTool" id="pivottool'+win+'">';
    sn[sl++] = '<table valign="top" id="pivottoolt'+win+'"><tr>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['columns']+'<\/td><\/tr>';
    sn[sl++] = '<tr><td style="white-space:nowrap;" class="arToolItemSeperator">'+blankdot+'<\/td><\/tr>';
    for (i = 0, numItems = columnlist.length; i < numItems; i++) {
        sn[sl++] = '<tr>';

		var qstr = ibiEditTools.escapeQ(columnlist[i]);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\','+win+',\''+qstr+'\','+i+',\'c\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,'+win+',\''+qstr+'\','+i+',\'c\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">'+columnlist[i]+'<\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table><\/td>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=2 class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['crtpvt2']+'<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td colspan=2 style="white-space:nowrap;"><div';

    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideGroupPos('+win+','+t_num+',0,\'g\')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeGroupPos('+win+','+t_num+',0,\'g\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideGroupPos('+win+','+t_num+',0,\'g\')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeGroupPos('+win+','+t_num+',0,\'g\')"';
    }

    if(grouplist.length==0) 
        sn[sl++] = ' style="backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = '><div class="arToolColumnSelect" id="ptg_'+t_num+'_0">'+getselectionBar('ptg_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for (i = 0, numItems = grouplist.length; i < numItems; i++) {
        itemName = columnlist[grouplist[i]];
        sn[sl++] = '<tr>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;" width="17">';
        sn[sl++] = '<div  style="text-align:center;cursor:pointer;" ';

        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Pt_removegroup('+win+','+ t_num+','+ i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Pt_removegroup('+win+','+ t_num+','+ i + ')">';
        }

        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';

        var qstr = ibiEditTools.escapeQ(itemName);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'g\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,' + win + ',\'' + qstr + '\',' + i + ',\'g\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">' + itemName + '<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        sn[sl++] = '<tr>';
        sn[sl++] = '<td colspan=2><div';

        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideGroupPos('+win+','+t_num+','+(i+1)+',\'g\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeGroupPos('+win+','+t_num+','+(i+1)+',\'g\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideGroupPos('+win+','+t_num+','+(i+1)+',\'g\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeGroupPos('+win+','+t_num+','+(i+1)+',\'g\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="ptg_'+t_num+'_'+(i+1)+'">'+getselectionBar('ptg_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table><\/td>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=2 class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['crtpvt1']+'<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td colspan=2 style="white-space:nowrap;"><div';

    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideAcrossPos('+win+','+t_num+',0,\'a\')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeAcrossPos('+win+','+t_num+',0,\'a\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideAcrossPos('+win+','+t_num+',0,\'a\')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeAcrossPos('+win+','+t_num+',0,\'a\')"';
    }

    if(acrosslist.length==0) 
        sn[sl++] = ' style="backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = '><div class="arToolColumnSelect" id="pta_'+t_num+'_0">'+getselectionBar('pta_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for (i = 0, numItems = acrosslist.length; i < numItems; i++) {
        itemName = columnlist[acrosslist[i]];
        sn[sl++] = '<tr>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;" width="17">';
        sn[sl++] = '<div style="text-align:center;cursor:pointer;" ';

        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Pt_removeacross('+win+','+ t_num+','+ i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Pt_removeacross('+win+','+ t_num+','+ i + ')">';
        }

        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';

        var qstr = ibiEditTools.escapeQ(itemName);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'a\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,' + win + ',\'' + qstr + '\',' + i + ',\'a\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">' + itemName + '<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        sn[sl++] = '<tr>';
        sn[sl++] = '<td colspan=2><div';

        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideAcrossPos('+win+','+t_num+','+(i+1)+',\'a\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeAcrossPos('+win+','+t_num+','+(i+1)+',\'a\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideAcrossPos('+win+','+t_num+','+(i+1)+',\'a\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeAcrossPos('+win+','+t_num+','+(i+1)+',\'a\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="pta_'+t_num+'_'+(i+1)+'">'+getselectionBar('pta_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table><\/td>';
       sn[sl++] = '<td valign="top" class="arToolColumnBorder">';
    sn[sl++] = '<table cellspacing=0 cellpadding=1 class="arToolColumn">';
    sn[sl++] = '<tr><td colspan=4 class="arToolColumnHeading" style="white-space:nowrap;'+bc+'">'+ibiMsgStr['measure']+'<\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr>';
    sn[sl++] = '<td colspan=4 style="white-space:nowrap;"><div';

    if(isARBrowserExtension) {
        sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideMeasurePos('+win+','+t_num+',0,\'m\')&quot;)"';
        sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeMeasurePos('+win+','+t_num+',0,\'m\')&quot;)"';
    } else {
        sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideMeasurePos('+win+','+t_num+',0,\'m\')"';
        sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeMeasurePos('+win+','+t_num+',0,\'m\')"';
    }

    if(measurelist.length==0) 
        sn[sl++] = ' style="backgroundColor:white;cursor:pointer;"><span class="arToolItem">'+ibiMsgStr['draghere']+'<\/span>';
    else
        sn[sl++] = '><div class="arToolColumnSelect" id="ptm_'+t_num+'_0">'+getselectionBar('ptm_'+t_num+'_0')+'<\/div>';
    sn[sl++] = '<\/div><\/td>';
    sn[sl++] = '<\/tr>';
    for (i = 0, numItems = measurelist.length; i < numItems; i++) {
        itemName = columnlist[measurelist[i]];
        sn[sl++] = '<tr>';
        sn[sl++] = '<td class="arToolItem" valign="middle" style="white-space:nowrap;" width="17">';
        sn[sl++] = '<div style="text-align:center;cursor:pointer;" ';

        if(isARBrowserExtension) {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiEditTools.Pt_removemeasure('+win+','+ t_num+','+i + ')&quot;)">';
        } else {
            sn[sl++] = 'title="'+ibiMsgStr['del']+'" onclick="ibiEditTools.Pt_removemeasure('+win+','+ t_num+','+i + ')">';
        }

        sn[sl++] = ibiSkin.delicon +'<\/div>';
        sn[sl++] = '<\/td>';

        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" valign="middle" width="16"><div title="'+ibiMsgStr['sctext']+'" id="ptma_'+t_num+'_'+i+
                '" onclick="_ARExtensionCall(&quot;ibiEditTools.Pt_showAggmenu('+win+','+t_num+','+ i + ')&quot;)" style="cursor:pointer;">'+ibiSkin.sumtoolsicon+'<\/div><\/td>';
        } else {
            sn[sl++] = '<td class="arToolItem" valign="middle" width="16"><div title="'+ibiMsgStr['sctext']+'" id="ptma_'+t_num+'_'+i+
                '" onclick="ibiEditTools.Pt_showAggmenu('+win+','+t_num+','+ i + ')" style="cursor:pointer;">'+ibiSkin.sumtoolsicon+'<\/div><\/td>';
        }

        sn[sl++] = '<td style="white-space:nowrap;" valign="TOP" class="arToolItem">'+a_calc_all_types[agglist[i]]+':<\/td>';

        var qstr = ibiEditTools.escapeQ(itemName);
        if(isARBrowserExtension) {
            sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="_ARExtensionCall(&quot;ibiEditTools.DragStartTool(\'__event__\',' + win + ',\'' + qstr + '\',' + i + ',\'m\')&quot;, null, {\'event\'&#58;event, \'preventDefault\'&#58;true})">';
        } else {
		sn[sl++] = '<td class="arToolItem" style="white-space:nowrap;" onmousedown="ibiEditTools.DragStartTool(event,' + win + ',\'' + qstr + '\',' + i + ',\'m\')">';
        }

        sn[sl++] = '<div onclick="" style="cursor:pointer;">' + itemName + '<\/div><\/td>';
        sn[sl++] = '<\/tr>';
        sn[sl++] = '<tr>';
        sn[sl++] = '<td colspan=4><div';

        if(isARBrowserExtension) {
            sn[sl++] = ' onmouseout="_ARExtensionCall(&quot;ibiEditTools.Pt_hideMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')&quot;)"';
            sn[sl++] = ' onmouseover="_ARExtensionCall(&quot;ibiEditTools.Pt_changeMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')&quot;)"';
        } else {
            sn[sl++] = ' onmouseout="ibiEditTools.Pt_hideMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')"';
            sn[sl++] = ' onmouseover="ibiEditTools.Pt_changeMeasurePos('+win+','+t_num+','+(i+1)+',\'m\')"';
        }

        sn[sl++] = '><div class="arToolColumnSelect" id="ptm_'+t_num+'_'+(i+1)+'">'+getselectionBar('ptm_'+t_num+'_'+(i+1))+'<\/div><\/div><\/td>';
        sn[sl++] = '<\/tr>';
    }
    sn[sl++] = '<\/table><\/td>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<\/tr>';
    sn[sl++] = '<tr><td colspan=4 align="right">';

    if(isARBrowserExtension) {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiEditTools.Pt_dopivot('+win+','+t_num+')&quot;)"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['ok']+'<\/div><\/td>';
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;closewin('+win+')&quot;)"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
    } else {
        sn[sl++] = '<table><tr><td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiEditTools.Pt_dopivot('+win+','+t_num+')"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['ok']+'<\/div><\/td>';
        sn[sl++] = '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="closewin('+win+')"><div width="100%" class="arToolButton">';
        sn[sl++] =  ibiMsgStr['cancel']+'<\/div><\/td><\/tr><\/table>';
    }

    sn[sl++] = '<\/td><\/tr>';
    sn[sl++] = '<\/table><\/div>';
    pwn[win].dobj_b.innerHTML = sn.join('');
    maxwin(win);
}

var toolBC=null;

function dragStartTool(event, win, showtext,arg1,arg2,arg3,arg4)
{
    var el;
    var x, y;

    if(isARBrowserExtension && (typeof event === 'string')) {
        try {
            event = JSON.parse(event);
        } catch(e) {
            event = {};
        }
    }

    dragObjTool.win = win;
    ibiMenu.Hidemenu();

    dragObjTool.elNode = d.getElementById('ToolBox');
    dragObjTool.elNode.innerHTML=showtext;
    dragObjTool.arg1 = arg1;
    dragObjTool.arg2 = arg2;
    dragObjTool.arg3 = arg3;
    dragObjTool.arg4 = arg4;
 
    if (b_ie || b_opera) {
        x = window.event.clientX + d.documentElement.scrollLeft + d.body.scrollLeft;
        y = window.event.clientY + d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        x = event.clientX + (window.scrollX || window.pageXOffset);
        y = event.clientY + (window.scrollY || window.pageYOffset);
    }
 
    dragObjTool.cursorStartX = x;
    dragObjTool.cursorStartY = y;
    dragObjTool.elStartLeft = x+6;
    dragObjTool.elStartTop = y+6;
    dragObjTool.elNode.style.zIndex = (dragObjTool.zIndex=dragObj.zIndex+2);
     dragObjTool.elNode.style.left = (x+6) + 'px';
    dragObjTool.elNode.style.top  = (y+6) + 'px';
    dragObjTool.elNode.style.visibility='visible';
    
    if (b_ie || b_opera) {
        d.attachEvent('onmousemove', dragGoTool);
        d.attachEvent('onmouseup',   dragStopTool);
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else {
        d.addEventListener('mousemove', dragGoTool,   true);
        d.addEventListener('mouseup',   dragStopTool, true);
        if(!isARBrowserExtension) {
            event.preventDefault();
        }
    }
}

var ToolX,ToolY;
 
function dragGoTool(event) {
    var x, y;
 
    if (b_ie || b_opera) {
        x = window.event.clientX + d.documentElement.scrollLeft + d.body.scrollLeft;
        y = window.event.clientY + d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        x = event.clientX + (window.scrollX || window.pageXOffset);
        y = event.clientY + (window.scrollY || window.pageYOffset);
    }
 
    ToolX = dragObjTool.elStartLeft + x - dragObjTool.cursorStartX;
    if(ToolX < 0) ToolX = 0;
    ToolY = dragObjTool.elStartTop  + y - dragObjTool.cursorStartY;
    if(ToolY < 0) ToolY = 0;
    dragObjTool.elNode.style.left = (ToolX) + 'px';
    dragObjTool.elNode.style.top  = (ToolY) + 'px';
 
    if (b_ie || b_opera) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    } else
        event.preventDefault();
}
 
function dragStopTool(event) {
    if (b_ie || b_opera) {
        d.detachEvent('onmousemove', dragGoTool);
        d.detachEvent('onmouseup',   dragStopTool);
    } else {
        d.removeEventListener('mousemove', dragGoTool,   true);
        d.removeEventListener('mouseup',   dragStopTool, true);
    }
    if(dragObjTool.doFunc)dragObjTool.doFunc();
    dragObjTool.elNode.style.visibility='hidden';
    dragObjTool.elNode.innerHTML="";
    dragObjTool.win = -1;

}
})();
