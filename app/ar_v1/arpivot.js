/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arpivot.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 171220 1311 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171106 1450 wjf 195749 Vis Esri map run time 'show data' shows layer twice
* 171106 1423 wjf 195281 Vis : Run time tool bar menu - Show data displaying  sort v
* 170928 0956 wjf 196030 AHTML: Pivot Table from a Rollup Report hangs/loops.
* 170815 1526 wjf 192533 Runtime tool bar options: Click Show data icon displays mea
* 170804 1307 bjd 190666 NLV: A string, "MISSING" needs to be extracted for translat
* 170313 1249 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 170303 1341 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 160919 0936 wjf 184465 Switch chart to grid
* 160914 1313 wjf 184533 AHTML:Cache:Date column total in pivot table shows NAN inst
* 160913 1614 iys 184130 AHTML/MOB:Pivot drop down menu missing Orig/FS View option
* 160610 1256 hms 180534 Remove tab characters from source files
* 160413 1344 wjf 178868 Vis: Show data at run time after Drilldown on 2By fields wi
* 151008 1417 wjf 172420 Negative vertical axis is shown after after field to Matrix
* 150817 1024 wjf 170769 IE11:VAL:AHTML:Export to option is missing under pivot tool
* 150409 1442 wjf 166225 AHTML: Context Menu: Cascading Multidrill Integration
* 150402 0846 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150401 1652 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150330 0938 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150326 1016 wjf 164963 AHTML: Bucket: Swap ROW and COLUMN for GRID
* 150324 1753 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150324 1216 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150324 1030 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150323 1637 wjf 164963 AHTML: Bucket: Swap ROW and COLUMN for GRID
* 150317 1229 wjf 163920 AHTML: POPOUT: Show filter data for show data
* 150309 1740 wjf 164963 AHTML: Bucket: Swap ROW and COLUMN for GRID
* 141222 0847 wjf 163482 AHTML: ID: Grid - allow column/row totals to be tuen ON/OFF
* 141218 0938 wjf 163479 AHTML:  ID: Align "total" left for column totals
* 141107 1843 wjf 134795 Active Visualization
* 141106 1210 wjf 134795 Active Visualization
* 141104 1549 wjf 134795 Active Visualization
* 141028 2339 wjf 134795 Active Visualization
* 141028 1535 wjf 134795 Active Visualization
* 141028 1327 wjf 134795 Active Visualization
* 141027 1611 wjf 162402 AHTML: Support border styling from stylesheets
* 141024 1121 wjf 134795 Active Visualization
* 141023 2258 wjf 134795 Active Visualization
* 141023 1025 wjf 134795 Active Visualization
* 141021 1316 bjd 162267 AHTML: Refactor ARPIVOT logic to remove obsolete code
* 141021 1249 bjd 107390 AHTML:Smart dates not respected in Pivot (Cross Tab) option
* 140918 1350 wjf 134795 Active Visualization
* 140918 1241 wjf 134795 Active Visualization
* 140828 1219 wjf 134795 Active Visualization
* 140728 1457 wjf 134795 Active Visualization
* 140728 1237 wjf 134795 Active Visualization
* 140620 0828 wjf 134795 Active Visualization
* 140618 1613 wjf 134795 Active Visualization
* 140612 1445 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140603 2333 wjf 134795 Active Visualization
* 140603 0014 wjf 134795 Active Visualization
* 140602 1226 wjf 134795 Active Visualization
* 140531 1936 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.14 $ 
//$Log: arpivot.js,v $
//Revision 1.14  2014/06/02 14:00:44  William_Forde
//[p134795] Allow multi measures in  pivot.  Still working on styling the piovt.
//
//Revision 1.13  2014/05/31 22:37:30  William_Forde
//[p134795] Fixes for using pivot for LOOKGRAPH=GRID.  Add scroll bars when using pivot.  make sure pivot resizes properly.
//
//Revision 1.12  2014/05/27 04:13:01  William_Forde
//[p134795] fix js erroe.
//
//Revision 1.11  2014/05/27 03:59:19  William_Forde
//[p134795]  Initial return of pivot for use in Infor Discovery
//
//Revision 1.10  2013/10/25 20:15:21  Brian_DCruz
//[p141034] refactor code; remove var redefines, etc
//
//Revision 1.9  2013/10/22 21:30:55  Brian_DCruz
//[p152564] get column backgroundcolor and color from original table columns to apply to pivot table.
//
//Revision 1.8  2013/05/15 15:50:30  Israel_Schulman
//[p147775] Respect stylesheet TITLE BACKCOLOR setting for pivot "Total" table cells. Apply background color to "Total" cells as well as cells which contain the "Total" table.
//
//Revision 1.7  2013/04/22 19:13:29  Israel_Schulman
//[p137882] Removed inline border style which was overriding custom irpcfg*js defined styles. Only add inline style for colors if status color variables are set.
//
//Revision 1.6  2012/08/10 04:29:55  William_Forde
//[p136963]  If ARDEFAULTHEAD=ORIGINAL then use the heading from the original report.
//
//Revision 1.5  2012/08/09 16:30:50  William_Forde
//[p135287] FIx issue with border around pivot not being sized correctly why toggling between layouts.
// 
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arpivot"]="$Revision: 20171220.1311 $";

(function() {


    if (typeof window.ibiPivot !== 'undefined') {
        return;
    }

    window.ibiPivot = {
        DrawPivotTableComp:drawPivotTableComp,
        buildChartdrop:build_chartdrop,
        buildChartagg:build_chartagg,
        DrawPivotGrid:drawPivotGrid,
        ShowMenu: showMenu,
        sortBucket: SortBucket,
        sortMeasureBucket: SortMeasureBucket,
        showRowTotal: ShowRowTotal,
        showColumnTotal: ShowColumnTotal,
        moveToBucket:MoveToBucket,
        moveInBucket:MoveInBucket,
        delayShowMenu: DelayShowMenu,
        clearDelayShowMenu: ClearDelayShowMenu,
        resizePivot:ResizePivot
    };

function GetPivUniqValues(n_col,a_capt,a_cont,IBs){
    var missing = false, blank = false;
    var isStr = a_capt[n_col].type == IBISTR;
    var isDate = a_capt[n_col].type == IBIDATE;
    var i, j, s_, res = [];
    res[0]=[];
    res[1]=[];
    res[2]=[];
    for (i = 0; i < a_cont.length; i ++) {
        s_ = a_cont[i][n_col];
        if (s_[DARAW] < 0) { missing = true; }
        else if ((IBs[s_[DARAW]]+'') == ' ') { blank = true; }
        else if (!inarray(res[0],IBs[s_[DARAW]])) {
            if (isStr) { res[0][res[0].length] = IBs[s_[DARAW]]; }
            else { res[0][res[0].length] = IBs[s_[DARAW]]; }
            res[1][res[1].length] = IBs[s_[DASTR]];
            res[2][res[2].length] = s_[DACLS];
        }
    }
    res=ISortUniq(res);
    if(missing) {
        var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
        res[0].unshift(missingVal);
        res[1].unshift(MISSING_STR);
    }
    if(blank) {
        res[0].unshift(' ');
        res[1].unshift('[BLANK]');
    }
    return (res);
}


function ResizePivot(mytable)
{
    var h = mytable.maintable.wbody.offsetHeight;
    if(h<mytable.maintable.wbody.scrollHeight) h = mytable.maintable.wbody.scrollHeight;
    var w = mytable.maintable.wbody.offsetWidth;
    if(w<mytable.maintable.wbody.scrollWidth) w = mytable.maintable.wbody.scrollWidth;

    if(mytable.a_cntl.table_div.viewPortType=='FLOWING') {
        mytable.maintable.root.style.width = (w)+'px';
        mytable.maintable.root.style.height = (h)+'px';
    }
}

function GetPivXaisValues(startcol,endcol){
    var res = [];
    var order;
    var i,j,ii;
    var lastval=new Array(endcol-startcol);
    var newrow;
    this.a_sort=[];
    for(i=0;i<(endcol-startcol);i++) lastval[i] = -1;
    j = 0;
    for(i=startcol;i<endcol;i++) {
        order = 0;
        if((this.a_capt[(endcol-(i+1))+startcol].orow == arConstants.OROW_HIGH) ||
            (this.a_capt[(endcol-(i+1))+startcol].orow == arConstants.OROW_HIGH_NOPR))
            order = 1;
        this.a_sort[j++]={'n_col':(endcol-(i+1))+startcol,'b_ord':order};
    }
    this.callSort(true,true);

    if(this.haveFilters) {
        this.a_f_body = this.a_filter_body;
        this.a_cont = this.a_filter_cont;
    } else {
        this.a_f_body = this.a_all_body;
        this.a_cont = this.a_all_cont;
    }
    j = 0;
    for(i=0; i<(endcol-startcol); i++)lastval[i] = -1;

    for(i=0; i < this.a_cont.length; i++) {
        newrow = false;
        for(ii=startcol;ii<endcol;ii++)
            if(lastval[ii-startcol]!=this.a_cont[this.a_f_body[i][0]][ii][DARAW]) newrow=true;
        if(newrow) {
            res[j]=[];
            for(ii=startcol;ii<endcol;ii++) {
                res[j][ii-startcol]=[];
                res[j][ii-startcol][DARAW]=this.a_cont[this.a_f_body[i][0]][ii][DARAW];
                res[j][ii-startcol][DASTR]=this.a_cont[this.a_f_body[i][0]][ii][DASTR];
                res[j][ii-startcol][DACLS]=this.a_cont[this.a_f_body[i][0]][ii][DACLS];
                lastval[ii-startcol] = this.a_cont[this.a_f_body[i][0]][ii][DARAW];
            }
            j++;
        }
    }
    return res;
}

function getPivotGridPosX(startcol,endcol,cont)
{
    if(startcol==endcol) return 0;
    var pos = 0;
    var i = startcol;
    var col = 0;
    while((i<endcol)&&(pos<this.HorzTree.length)) {
        if(this.HorzTree[pos][col][DARAW] == cont[i][DARAW]) {
            col++;
            i++;
        } else {
            pos++;
        }
    }
    return pos;
}

function getPivotGridPosY(startcol,endcol,cont)
{
    if(startcol==endcol) return 0;
    var pos = 0;
    var i = startcol;
    var col = 0;
    while((i<endcol)&&(pos<this.VertTree.length)) {
        if(this.VertTree[pos][col][DARAW] == cont[i][DARAW]) {
            col++;
            i++;
        } else {
            pos++;
        }
    }
    return pos;
}


function drawPivotTableComp(a,did,capt,cont,look,cntl,p_num,heading,win,ibs,pvcol,nrcols,btypeArray,y_cols,linked,subTable,hideBar)
{
    // pvcol = number of columns in across
    // nrcols = number
    var dobj,pn,yy,classStr;
    if(typeof(did)=='object') dobj=did;
    else dobj=d.getElementById(did);
    var tnc =  cntl.table_number;
    var i,ii,j,jj,x,y,id;
    var VertTree = [];
    var HorzTree = [];
    var ColPos=[];
    var line = '';
    var s_ = [],s,str,ss;
    var nx=1, ny=1,nxx,nyy;    
    var PAr = [];
    var npv = nrcols-pvcol;
    var xx,xdiv=[],ydiv=[];
    var vny,vnx;
    var show;
    var mytable = getMyTable(tnc);
    var si;
    var pid = 'cpop'+win;
    if(subTable>-1) pid += '_'+subTable;
    var sid = 'SUM_'+win;
    if(subTable>-1) sid += '_'+subTable;
    var status_bcolor = "";
    if(mytable.a_cntl.statbackcolor) status_bcolor = "background-color:"+mytable.a_cntl.statbackcolor+";";
    var status_color = "";
    if(mytable.a_cntl.statcolor) status_color = "color:"+mytable.a_cntl.statcolor+";";

	if(typeof mytable.maintable != "undefined") {
        if(win<0) {
            mytable.maintable.wmenu.innerHTML=blankdot;
            mytable.maintable.wmenu.style.display = "none";
        } else
        mytable.maintable.wmenu.style.display = "block";
    }
    if(mytable.useMdiv==null)
        dobj.style.overflow = 'auto';

    var nt_num;
    var t_num = MyTable.length;
    if(win>0) {
        if(pwn[win].roll_tnumber == -1) 
            pwn[win].roll_tnumber = t_num;
        else
            t_num = pwn[win].roll_tnumber;
    }
    nt_num = MyTable.length;
    cntl.table_number = MyTable.length;
    cntl.MENUTYPE = 'POPUP';
    cntl.menuops.freeze = false;
    cntl.menuops.chart = false;
    cntl.menuops.filter = false;
    if((typeof(mytable.a_cntl.useDefaultHeading)!="undefined") && (!mytable.a_cntl.useDefaultHeading)) 
        cntl.heading = mytable.a_cntl.heading;
    else
        cntl.heading = [[{'colspan':'','exClass':'','align':'','valign':'','bcolor':'#FFFFFF','wrap':' ','style':'','color':'#000000','font':'DEFAULT-FIXED','size':'14','name':'<TT>'+heading+'<\/TT>'}]];
    cntl.subhead = null;
    cntl.subfoot = null;
    cntl.skipline = null; 
    cntl.subtotal = null;
    cntl.acheading = null;
    cntl.grandtotal = null;
    cntl.tablefoot = null;
    cntl.Accordion = false;
    cntl.NumRecords = cont.length;
    cntl.status = 2;
    var wehave=[];
    var captObj;
    look.freeze_column=0;
    cntl.MP_COL_COUNT = cont[0].length;
    for (j = 0; j < capt.length; j++) {
        capt[j].popmenu = '<div id="popid'+nt_num+'_'+j+'"><\/div>';
    }
	var ccont = ibiStd.copyObject(cont);
	var cibs = ibiStd.copyObject(ibs);
	MyTable[t_num] = new TTable(capt, ccont, look, cntl, look.styles,true,cibs,null,null);
    MyTable[t_num].maintable = mytable.maintable;
    mytable = MyTable[t_num];
    mytable.isPivot = true;
    mytable.useLayout = MyTable[p_num].useLayout;
    mytable.roll_number = t_num;
    mytable.parent_table = p_num;
    mytable.getPivTree = GetPivXaisValues;
    mytable.getXpos = getPivotGridPosX;
    mytable.getYpos = getPivotGridPosY;

    var styling = [], parentTable = MyTable[mytable.parent_table];
    for (i = 0; i < capt.length; ++i) {
        styling[i] = parentTable.getColumnStyle(capt[i].orgCol,0,1,parentTable.a_cont[0],'x',capt[i].orgCol);
    }

    if(pvcol>0) {
        HorzTree = mytable.getPivTree(0,pvcol);
        nx = HorzTree.length;
    } 
    if(npv>0) {
        VertTree = mytable.getPivTree(pvcol,npv+pvcol);
        ny = VertTree.length;
    }

    mytable.HorzTree = HorzTree;
    mytable.VertTree = VertTree;
    nx=nx+npv;
    if(pvcol>0) nx=nx+1;
    if(npv>0) ny++;
    if(pvcol>0) ny+=pvcol*2;
    else ny++;
    if(pvcol>0) yy=pvcol*2;
    else yy=1;
    vnx = nx;
    //if(nx>20) vnx=20+npv;
    vny = ny;
    //if(ny>20) vny=20+pvcol*2;
    PAr = new Array(vny);
    mytable.PivotArray = PAr;
    for(i=0;i<vny;i++) {
        PAr[i] = new Array(vnx);
        for(j=0;j<vnx;j++)
            PAr[i][j] = null;
    }
    if(win<0 && !hideBar) {
    var type_chart  = '<table><tr>';
        type_chart += '<td valign="MIDDLE"><div style="cursor:pointer;"  id="'+pid+'">'+ibiSkin.cpopicon+'<\/div><\/td>';
        if(win>-1) type_chart += '<td valign="MIDDLE"><div style="cursor:pointer;"  onclick="ToggleFiltLink('+win+')">'+(linked?ibiSkin.unlinkicon:ibiSkin.linkicon)+'<\/div><\/td>';
        type_chart += '<\/tr><\/table>';

    var sum_line  = '<table><tr>';
        sum_line += '<td style="white-space:nowrap" width="60" valign="TOP" class="tabPagingText1"><div id="'+sid+'" class="tabPagingText1" style="white-space:nowrap;cursor:pointer;"><\/div><\/td>';
        sum_line += '<\/tr><\/table>';

    var mline  = '<Table class="arPivotMenuBar" ';
        if(status_color || status_bcolor) {
            mline += 'style="';
            if(status_color)
                mline += status_color;
            if(status_bcolor)
                mline += status_bcolor;
            mline += '" ';
        }
        mline += 'width="100%" border=0 cellspacing=0 cellpadding=0><tr height="18">';
        mline += '<td Width=30 class="arPivotMenuBarContainer" style="white-space:nowrap;" Valign="MIDDLE">'+type_chart+'<\/td>';
        mline += '<td Width=60 class="arPivotMenuBarContainer" style="white-space:nowrap;" Valign="MIDDLE">'+sum_line+'<\/td>';
    var dopad = true;
    if(mytable.a_cntl.menuops.fsappmode || b_ios)
        if(!b_ie || (b_ie_version>7)) {
              mline += '<td align="right" width="*"><span title="'+ibiMsgStr["fsr"]+'" style="cursor:pointer;" onclick="ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,true)">'+ibiSkin.fullicon1+'<\/span><\/td>';
            dopad = false;
        }
    if(dopad) mline += '<td width="*">&nbsp;<\/td>';
        mline += '<\/tr><\/table>';
    }
    if(!mytable.a_cntl.showMenuBar) mline = '';
    var tbe='<table border=0 cellspacing=0 cellpadding=0>'+
        '<tr><td style="white-space:nowrap" class="tabPagingText1">';
    var dvb='<div class="tabPagingText1" style="cursor:pointer;" ';
    var tbd='<\/td><\/tr><\/table><\/div>';

    for(j=0;j<pvcol;j++) {
        x=j*2;
        y=npv;
        captObj = capt[j];
                if(capt[j].noprint) {
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[j].name,'size':'','font':''};
        }
        PAr[x][y] = '<table class="arPivotColumnHeading" width="100%"'+(captObj.name.bcolor==''?'':' style="background-color:'+captObj.name.bcolor+';"')+'><tr><td width="10">'+
            dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j]+',false,1,1,'+tnc+','+subTable+')">'+
            tbe+ibiSkin.pvicon1+tbd+'<\/td><td width="10">';
        if(j!=0)
            PAr[x][y]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j]+',false,1,2,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon4+tbd;
        else
            PAr[x][y]+=tbe+ibiSkin.gpvicon4+'<\/td><\/tr><\/table>';    
        PAr[x][y]+='<\/td><td width="10">';
        if(j+1<pvcol)
            PAr[x][y]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j]+',false,1,3,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon3+tbd;
        else
            PAr[x][y]+=tbe+ibiSkin.gpvicon3+'<\/td><\/tr><\/table>';
        PAr[x][y]+='<\/td><td width="10">';
        if(nrcols>1) 
            PAr[x][y]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j]+',true,1,0,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon7+tbd;
        else
            PAr[x][y]+=tbe+ibiSkin.gpvicon7+'<\/td><\/tr><\/table>';
        PAr[x][y]+='<\/td><td width="*"><\/td><\/tr>'+
            '<tr><td colspan=5>'+captObj.name.name+'<\/td><\/tr><\/table>';
        for(i=0;i<HorzTree.length;i++) {
            str=mytable.IBs[HorzTree[i][j][DASTR]];
            show = 1;
            if(i>0) {
                if(j==0) {
                    if (mytable.IBs[HorzTree[i][j][DARAW]] == mytable.IBs[HorzTree[i - 1][j][DARAW]]) show = 0;
                } else {
                    if((PAr[x-1][y+i][DASTR]=="&nbsp;") &&
                        (HorzTree[i-1][j][DARAW]==HorzTree[i][j][DARAW]))
                        show = 0;
                }
            }
            PAr[x+1][y+i] = [];
            PAr[x+1][y+i][DACLS]='class="IBIS'+tnc+'_'+HorzTree[i][j][DACLS]+'" '+styling[j];
            PAr[x+1][y+i][DATYP]=1;
            PAr[x+1][y+i][DARAW]=str;
            if(show)
                PAr[x+1][y+i][DASTR]=str;
            else
                PAr[x+1][y+i][DASTR]="&nbsp;";
        }

    }


    for(j=0;j<npv;j++) {
        captObj = capt[j+pvcol];
                if(capt[j+pvcol].noprint) {
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[j+pvcol].name,'size':'','font':''};
        }
        if(pvcol>0) xx=pvcol*2-1;
        else xx=0;
            PAr[xx][j]='<table class="arPivotColumnHeading" width="100%"'+(captObj.name.bcolor==''?'':' style="background-color:'+captObj.name.bcolor+';"')+'"><tr><td width="10">'+
            dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j+pvcol]+',false,2,1,'+tnc+','+subTable+')">'+
            tbe+ibiSkin.pvicon2+tbd+'<\/td><td width="10">';
        if(j!=0)
            PAr[xx][j]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j+pvcol]+',false,2,2,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon6+tbd;
        else
            PAr[xx][j]+=tbe+ibiSkin.gpvicon6+'<\/td><\/tr><\/table>';
        PAr[xx][j]+='<\/td><td width="10">';
        if(j+1<npv)
            PAr[xx][j]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j+pvcol]+',false,2,3,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon5+tbd;
        else
            PAr[xx][j]+=tbe+ibiSkin.gpvicon5+'<\/td><\/tr><\/table>';
        PAr[xx][j]+='<\/td><td width="10">';
        if(nrcols>1) 
            PAr[xx][j]+=dvb+' onclick="ibiChart.makeChartAddYcol('+win+','+y_cols[j+pvcol]+',true,2,0,'+tnc+','+subTable+')">'+
                tbe+ibiSkin.pvicon7+tbd;
        else
            PAr[xx][j]+=tbe+ibiSkin.gpvicon7+'<\/td><\/tr><\/table>';
        PAr[xx][j]+='<\/td><td width="*"><\/td><\/tr>'+
            '<tr><td colspan=5>'+captObj.name.name+'<\/td><\/tr><\/table>';
        for(i=0;i<VertTree.length;i++) {
            str=mytable.IBs[VertTree[i][j][DASTR]];
            show = 1;
            if(i>0) {
                if(j==0) {
                    if (mytable.IBs[VertTree[i][j][DARAW]] == mytable.IBs[VertTree[i - 1][j][DARAW]]) show = 0;
                } else {
                    if((PAr[i+yy][j-1][DASTR]=="&nbsp;") &&
                        (VertTree[i-1][j][DARAW]==VertTree[i][j][DARAW]))
                        show = 0;
                }
            }
            PAr[i+yy][j] = [];
            PAr[i+yy][j][DACLS]='class="IBIS'+tnc+'_'+VertTree[i][j][DACLS]+'" '+styling[j];
            PAr[i+yy][j][DATYP]=1;
            PAr[i+yy][j][DARAW]=str;
            if(show)
                PAr[i+yy][j][DASTR]=str;
            else
                PAr[i+yy][j][DASTR]="&nbsp;";
        }
    }
    captObj = capt[nrcols];
        if(capt[nrcols].noprint) {
        captObj.name = new Object();
        captObj.name = {'bcolor':'','name':cntl.a_cols[nrcols].name,'size':'','font':''};
    }
    var pgt = '<table width="100%"><tr><td class="arPivotColumnHeading" style="'+
        (captObj.name.color==''?'':'color:'+captObj.name.color+';')+
        (captObj.name.size==''?'':'font-size:'+captObj.name.size+'pt;')+
        (captObj.name.font==''?'':'font-family:'+captObj.name.font+';')+
        (captObj.name.bcolor==''?'':'background-color:'+captObj.name.bcolor+';')+
        '"><B>'+ibiMsgStr['pgtotal']+'<\/B><\/td><\/tr><\/table>';
    if(npv>0) {
        PAr[vny-1][npv-1]=[];
        PAr[vny-1][npv-1][DASTR]=pgt;
        PAr[vny-1][npv-1][DATYP]=1;
        PAr[vny-1][npv-1][DACLS]=(captObj.name.bcolor==''?'class="arPivotColumnHeading"':'class="" style="background-color:'+captObj.name.bcolor+';"');
    }
    if(pvcol>0) {
        PAr[pvcol*2-1][vnx-1]=[];
        PAr[pvcol*2-1][vnx-1][DASTR]=pgt;
        PAr[pvcol*2-1][vnx-1][DATYP]=1;
        PAr[pvcol*2-1][vnx-1][DACLS]=(captObj.name.bcolor==''?'class="arPivotColumnHeading"':'class="" style="background-color:'+captObj.name.bcolor+';"');
    }
    if((npv>0)&&(pvcol>0)) PAr[vny-1][vnx-1]=null;
    if(pvcol>0) yy=pvcol*2;
    else yy=1;
    if(pvcol>0) yy=pvcol*2;
    else yy=1;
	for(i=0;i<mytable.a_cont.length;i++) {
		x = mytable.getXpos(0,pvcol,mytable.a_cont[i]);
		y = mytable.getYpos(pvcol,npv+pvcol,mytable.a_cont[i]);
		s = mytable.a_cont[i][nrcols];
        PAr[y+yy][x+npv]=s;
        si = s[DARAW];
        if(si<0) continue;
		ii = mytable.IBs[si]*1;
        if(pvcol>0) {
            if(PAr[y+yy][vnx-1]==null) {
                PAr[y+yy][vnx-1]=[];
                PAr[y+yy][vnx-1][DATYP]=1;
                PAr[y+yy][vnx-1][DARAW]= ii;
                PAr[y+yy][vnx-1][DACLS]='class="IBIS'+tnc+'_'+s[DACLS]+'" '+styling[styling.length - 1];
                PAr[y+yy][vnx-1][DASTR]=FocusFormat(ii,captObj.format,cntl.cdn,cntl.cursym);
                PAr[y+yy][vnx-1][DACNT]=1;
            } else {
                PAr[y+yy][vnx-1][DACNT]++;
                if(btypeArray[0]=='MIN') {
                    if(ii<PAr[y+yy][vnx-1][DARAW])PAr[y+yy][vnx-1][DARAW] = ii;
                } else
                if(btypeArray[0]=='MAX') {
                    if(ii>PAr[y+yy][vnx-1][DARAW])PAr[y+yy][vnx-1][DARAW] = ii;
                } else
                    PAr[y+yy][vnx-1][DARAW]+=ii;
                PAr[y+yy][vnx-1][DASTR]=FocusFormat(PAr[y+(pvcol*2)][vnx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
            }
        }

        if(npv>0) {
            if(x+npv<vnx) {
                if(PAr[vny-1][x+npv]==null) {
                    PAr[vny-1][x+npv]=[];
                    PAr[vny-1][x+npv][DATYP]=1;
                    PAr[vny-1][x+npv][DACNT]=1;
                    PAr[vny-1][x+npv][DARAW]=ii;
                    PAr[vny-1][x+npv][DACLS]='class="IBIS'+tnc+'_'+s[DACLS]+'" '+styling[styling.length - 1];
                    PAr[vny-1][x+npv][DASTR]=FocusFormat(ii,captObj.format,cntl.cdn,cntl.cursym);
                } else {
                    PAr[vny-1][x+npv][DACNT]++;
                    if(btypeArray[0]=='MIN') {
                        if(ii<PAr[vny-1][x+npv][DARAW])PAr[vny-1][x+npv][DARAW] = ii;
                    } else
                    if(btypeArray[0]=='MAX') {
                        if(ii>PAr[vny-1][x+npv][DARAW])PAr[vny-1][x+npv][DARAW] = ii;
                    } else
                        PAr[vny-1][x+npv][DARAW]+=ii;
                    PAr[vny-1][x+npv][DASTR]=FocusFormat(PAr[vny-1][x+npv][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                }
            }
            if(pvcol>0) {
                if(PAr[vny-1][vnx-1]==null) {
                    PAr[vny-1][vnx-1]=[];
                    PAr[vny-1][vnx-1][DATYP]=1;
					PAr[vny-1][vnx-1][DACLS]='class="IBIS'+tnc+'_'+mytable.a_cont[0][nrcols][DACLS]+'" '+styling[styling.length - 1];
                    PAr[vny-1][vnx-1][DARAW]=ii;
                } else {
                    if(btypeArray[0]=='MIN') {
                        if(ii<PAr[vny-1][vnx-1][DARAW])PAr[vny-1][vnx-1][DARAW] = ii;
                    } else
                    if(btypeArray[0]=='MAX') {
                        if(ii>PAr[vny-1][vnx-1][DARAW])PAr[vny-1][vnx-1][DARAW] = ii;
                    } else
                        PAr[vny-1][vnx-1][DARAW] += ii;
                }
                PAr[vny-1][vnx-1][DASTR]=FocusFormat(PAr[vny-1][vnx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
            }
        }
    }
    captObj = capt[nrcols];
        if(capt[nrcols].noprint) {
        captObj.name = new Object();
        captObj.name = {'bcolor':'','name':cntl.a_cols[nrcols].dis,'size':'','font':''};
    }
    if(btypeArray[0]=='AVG'){
        if(pvcol>0)
        for(i=0; i<nyy; i++)
            if(PAr[i+yy][nx-1]!=null) {
                PAr[i+yy][nx-1][DARAW]=PAr[i+yy][nx-1][DARAW]/PAr[i+yy][nx-1][DACNT];
                PAr[i+yy][nx-1][DASTR]=FocusFormat(PAr[i+yy][nx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
            }
        if(npv>0)
        for(i=0; i<nxx; i++)
            if(PAr[ny-1][i+npv]!=null) {
                PAr[ny-1][i+npv][DARAW]=PAr[ny-1][i+npv][DARAW]/PAr[ny-1][i+npv][DACNT];
                PAr[ny-1][i+npv][DASTR]=FocusFormat(PAr[ny-1][i+npv][DARAW],captObj.format,cntl.cdn,cntl.cursym);
            }
        if((pvcol>0)&&(npv>0)) {
			PAr[ny-1][nx-1][DARAW]=PAr[ny-1][nx-1][DARAW]/mytable.a_cont.length;
            PAr[ny-1][nx-1][DASTR]=FocusFormat(PAr[ny-1][nx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
        }
    }
    s_[s_.length] = '<table class="arPivot" id="piv'+win+'" cellpadding=0 cellspacing=0 border=0 bgcolor="white"><tr><td>';
    if(win<0 && !hideBar)
    s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=1>'+
        '<tr><td bgcolor="#ECE9D8" id="PIVOT_MENU'+win+'">'+mline+'<\/td><\/tr><\/table>'+
         '<\/td><\/tr><tr><td>';
    s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=1><tr><td>';
    s_[s_.length] = heading;
    s_[s_.length] = '<\/td><\/tr><\/table><\/td><\/tr><tr><td>';

    if(mytable.a_cntl.ibinotvalid) {
        s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=1><tr><td class="arAuthorizedMessage">';
        s_[s_.length] = ibiMsgStr['lic'];
        s_[s_.length] = '<\/td><\/tr><\/table><\/td><\/tr><tr><td>';
    }
    s_[s_.length] = '<table cellpadding='+mytable.n_padding+' cellspacing='+mytable.n_spacing+mytable.o_css.main+' border='+mytable.n_border+'>';
    for(i=0; i<vny; i++) {
        s_[s_.length] = '<tr>';
        for(ii=0; ii<vnx; ii++) {
            classStr='';
            s=PAr[i][ii];
            if(s==null) {
                if (i > 0) { classStr = styling[styling.length - 1]; }
                if((i<yy)||(ii<npv))
                    str='&nbsp;';
                else
                    str = mytable.a_cntl.nodata;
            } else
            if(typeof(s)=='object') {
                if(typeof(s[DACLS])=='number') classStr =' class="IBIS'+tnc+'_'+s[DACLS]+'" '+styling[styling.length - 1];
                else classStr= ' '+s[DACLS];
				str=mytable.IBs[s[DASTR]];
                if(typeof(s[DATYP])!='undefined')
                    if(s[DATYP]==1) str=s[DASTR];
            } else str=s;
            if (i == 1) {
                var tempStr = classStr;
                classStr = (tempStr.indexOf("class") !== -1) ? 
                    tempStr.replace(/(\")/, '"arPivotColumnHeadingContainer ') :
                    ' class="arPivotColumnHeadingContainer" ';
            }
            s_[s_.length]='<td'+classStr+'>'+str+'<\/td>';
        }
        s_[s_.length] = '<\/tr>';
    }
//    s_[s_.length] = '<tr>';
    s_[s_.length] = '<\/table><\/td><\/tr><\/table>';
    line =s_.join('');
    dobj.innerHTML = line;

    pn = getPn(win,tnc);
    if(subTable!=-1) pn = pn.children[subTable];
    var ppmytable=getMyTable(p_num);
    if(mytable.a_cntl.showMenuBar) {
        build_chartdrop(ppmytable,pid,win,ibiSkin.cpopicon,sum_line,pn,5,subTable);
        var sumprt='<table border=0 cellspacing=0><tr><td>'+ibiSkin.sumicon+'<\/td><td style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+a_calc_types[pn.saveable.btypeArray[0]]+'<\/td><\/tr><\/table>';
        build_chartagg(ppmytable,sid,win,sumprt,pn,5,subTable);
    }
    if(win<0) {
        dobj = d.getElementById("piv"+win);
        if(mytable.useMdiv==null) {
            ResizePivot(mytable);
        }
    }
}
    function drawPivotGridHeading(mytable,istype,noHTML) {
        var first_col = -1;
        var last_col = -1;
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
            case isSubTotal: heading=mytable.a_cntl.subtotal;break;
            case isGrandTotal: heading=mytable.a_cntl.grandtotal;break;
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

                        //cs = ICalcColSpan(useFc,useLc);
                        cs = mytable.n_cols;

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
                            if (!noHTML) {
                                divStyle = (curHeadColCell.name.substr(0,2).toUpperCase() === '<A')
                                    ? paddingBottom : '';
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

    function drawPivotGridColumnHeading(mytable,localCol,altText,orgCol,colspan) {
        var a_;
        var tn = mytable.id;
        var sortstr;
        var cls = "";
        var mstr='';
        var otext = '';
        var i = orgCol;
        var align = "left";

        if(mytable.a_capt[i].type == IBINUM)
            align = "right";

        mstr = ' ';
        var gns =  mytable.getReportStyle("STRING",ST_TITL,orgCol);
        if (typeof(mytable.a_capt[i].name) != "undefined") {
            if ((typeof(mytable.a_capt[i].name.bcolor) != "undefined") &&
                (mytable.a_capt[i].name.bcolor != '')) gns += "background-color:" + mytable.a_capt[i].name.bcolor + ";";
            if ((typeof(mytable.a_capt[i].name.color) != "undefined") &&
                (mytable.a_capt[i].name.color != '')) gns += "color:" + mytable.a_capt[i].name.color + ";";
            if(typeof(mytable.a_capt[i].name.exClass)!="undefined")
                if(mytable.a_capt[i].name.exClass!='') {
                    cls = mytable.a_capt[i].name.exClass;
                    mstr = ' class="'+cls+'" ';
                }
            if(typeof(mytable.a_capt[i].name.align)!="undefined")
                if(mytable.a_capt[i].name.align!='')
                    align = mytable.a_capt[i].name.align;

            if(typeof(mytable.a_capt[i].name.wrap)!="undefined")
                switch (mytable.a_capt[i].name.wrap) {
                    case " NOWRAP": case " ":
                    gns += 'white-space:nowrap;';
                    break;
                    default:
                        gns += 'width:' + mytable.a_capt[i].name.wrap + 'px;"';
                        break;
                }
            otext = mytable.a_cntl.a_cols[i].dis;
        }
        mstr += ' align="'+align+'" ';
        //mstr += 'id=\'' + idstr + '\' ';
        mstr += mytable.o_css.captText;
        if(typeof(altText)!="undefined")
            otext = altText;
        var idstr="TCOL_"+tn+"_C_"+i;
        gns += '"';
        if(colspan != undefined)
            mstr += ' colspan="'+colspan+'" ';
        var spanStr = "";
        //spanStr += ' onclick="ibiPivot.ShowMenu(event,\''+mytable.id+'\','+orgCol+','+localCol+')"  style="cursor:pointer;" ';
        //spanStr += ' onmouseover="" onmouseout="" '
        if(gns.indexOf("font-weight:bold;")>0)
            spanStr += ' style="font-weight:bold;"';
        a_ = '<td '+gns+' valign="BOTTOM" '+mstr+'><span '+spanStr+'>'+otext+'<\/span><\/td>';
        return a_;
    }

function drawPivotGrid(a,did,capto,cont,look,cntl,p_num,heading,win,ibs,buckets,btypeArray,linked,subTable,hideBar1,footing)
{
    var i,ii,j,jj,x,y,id,k;
    var DAREC = 11;
    var DARECCOL = 12;
    var DARECSTR = 13;
    var href,ucol,val;
    var rowBucket = ibiStd.copyObject(buckets["ROW"]);
    var columnBucket = buckets["COLUMN"];
    var measureBucket = [];
    var usedInBucket = [];
    for(i=0; i < capto.length; i++)
    	usedInBucket[i] = false;
    for(i in buckets) {
        if((i != "COLUMN") && (i != 'ROW'))
            if(buckets[i].length)
                for(j=0;j< buckets[i].length;j ++) {
        			if(capto[buckets[i][j]].computeText)
                        if(capto[buckets[i][j]].computeText.substr(0,5)=="MAP__")
                        	continue;
        			usedInBucket[buckets[i][j]] = true;
                    if(capto[buckets[i][j]].isby)
                        rowBucket[rowBucket.length] = buckets[i][j];
                    else
                        measureBucket[measureBucket.length] = buckets[i][j];
        }
    }
    for(i=0; i < capto.length; i++)
    	if(!usedInBucket[i] && capto[i].isby && !inarray(buckets['ROW'],i,false) && !inarray(buckets['COLUMN'],i,false))
            rowBucket[rowBucket.length] = i;
    var y_cols = [];
    var capt = [];

    var y_colsLength = 0;
    var rowsLength = 0;
    var colsLength = 0;
    for(i = 0; i < columnBucket.length; i++) {
        y_cols[y_cols.length] = columnBucket[i];
        capt[capt.length] = capto[columnBucket[i]];
        y_colsLength++;
        if(![columnBucket[i]].noprint)
            colsLength++;
    }
    for(i = 0; i < rowBucket.length; i++) {
        y_cols[y_cols.length] = rowBucket[i];
        capt[capt.length] = capto[rowBucket[i]];
        y_colsLength++;
        if(![columnBucket[i]].noprint)
            rowsLength++;
    }
    for(i = 0; i < measureBucket.length; i++) {
        capt[capt.length] = capto[measureBucket[i]];
    }

    var dname;
    var dobj,pn,yy,classStr;
    if(typeof(did)=='object') dobj=did;
    else dobj=d.getElementById(did);

    var tnc =  cntl.table_number;
    //var number_of_measures = capt.length - y_cols.length;
    var number_of_measures = measureBucket.length;
    //for(i=y_cols.length;i<capt.length;i++)
    //    if(!capt[i].isTotal)
    //        number_of_measures++;
    if(number_of_measures==0)
        number_of_measures = 1;
    var VertTree = [];
    var hideBar = hideBar1;
    var HorzTree = [];
    var ColPos=[];
    var line = '';
    var s_ = [],s,str,ss;
    var nx=1, ny=1,nxx,nyy,mline='';    
    var PAr = [];
    var xx,xdiv=[],ydiv=[];
    var number_of_rows,number_of_columns;
    var show;
    var colSpan;
    var xpos;
    var row;
    var mytable = getMyTable(tnc);

    if(!mytable.a_cntl.showMenuBar)
        hideBar = true;
    var si;
    var pid = 'cpop'+win;
    if(subTable>-1) pid += '_'+subTable;
    var sid = 'SUM_'+win;
    if(subTable>-1) sid += '_'+subTable;
    var status_bcolor = "";
    if(mytable.a_cntl.statbackcolor) status_bcolor = "background-color:"+mytable.a_cntl.statbackcolor+";";
    var status_color = "";
    if(mytable.a_cntl.statcolor) status_color = "color:"+mytable.a_cntl.statcolor+";";
    var showRowTotal = false;
    if(mytable.a_cntl.showRowTotal)
        showRowTotal = true;
    var showColumnTotal = false;
    if(mytable.a_cntl.showColumnTotal)
        showColumnTotal = true;

    if(win<0) {
        mytable.maintable.wmenu.innerHTML=blankdot;
        mytable.maintable.wmenu.style.display = "none";
    } else     
    mytable.maintable.wmenu.style.display = "block";
    needWrapAuto = false;
    var useDiv = mytable.useMdiv;
    if(mytable.useMdiv==null)
        dobj.style.overflow = 'auto';
    else 
        needWrapAuto = true;

    var nt_num;
    var t_num = MyTable.length;
    if(win>0) {
        if(pwn[win].roll_tnumber == -1) 
            pwn[win].roll_tnumber = t_num;
        else
            t_num = pwn[win].roll_tnumber;
    }
    var wehave=[];
    var captObj;

    mytable.getPivTree = GetPivotValues;
    mytable.getXpos = getPivotGridPosXB;
    mytable.getYpos = getPivotGridPosYB;
    mytable.a_all_cont = cont;
    mytable.gridContainer = dobj;
    mytable.pivotCapt = capt;
    IinitBody(mytable);
    mytable.IBs = ibs;

    var styling = [];
    //var parentTable = MyTable[mytable.parent_table];
    for (i = 0; i < capt.length; ++i) {
        styling[i] = mytable.getColumnStyle(capt[i].orgCol,0,1,mytable.a_cont[0],'x',capt[i].orgCol);
    }

    var stylingReport = mytable.getReportStyle('STRING')+'"';
    var sv1 = mytable.a_cntl.cacheMode;
    var sv2 = mytable.haveFilters;
    //mytable.a_cntl.cacheMode = false;
    //mytable.haveFilters = false;
    
    if(columnBucket.length>0) {
        HorzTree = mytable.getPivTree(columnBucket);
        nx = HorzTree.length;
    } 
    if(rowBucket.length>0) {
        VertTree = mytable.getPivTree(rowBucket);
        ny = VertTree.length;
    } else {
        if(columnBucket.length==0)
            ny = cont.length;
        else
            ny = 1;
    }
    mytable.a_cntl.cacheMode = sv1;
    mytable.haveFilters = sv2;

    ibs = mytable.IBs;
    mytable.HorzTree = HorzTree;
    mytable.VertTree = VertTree;
    nx=(nx*number_of_measures)+rowBucket.length;
    if(nx==0) 
        nx = 1;
    if(columnBucket.length>0)
        nx=nx+number_of_measures;
    if(rowBucket.length)
        ny++;
    if(columnBucket.length>0)
        ny+=columnBucket.length*2;
    else 
        ny++;
    if(columnBucket.length>0)
        yy=columnBucket.length*2+1;
    else 
        yy=1;
    number_of_columns = nx;

    number_of_rows = ny+1;
    if((measureBucket.length) == 0) {
        number_of_columns--;
        number_of_rows--;
        if((columnBucket.length == 0) || (y_cols.length == columnBucket.length))
            number_of_rows--;
        number_of_measures = 0;
    }  else
    if(columnBucket.length==0) {
        number_of_rows--;
    }

    PAr = new Array(number_of_rows);
    mytable.PivotArray = PAr;
    for(i=0;i<number_of_rows;i++) {
        PAr[i] = new Array(number_of_columns);
        for(j=0;j<number_of_columns;j++)
            PAr[i][j] = null;
    }
    mline = '';
    if(needWrapAuto) {
        var sobj = useDiv;
        if(typeof(sobj)!='object') 
            sobj=d.getElementById(sobj);
        if(sobj) {
            s_[s_.length] =  '<div id="'+sobj.id+'_ar_resize" style="overflow:auto;width:'+sobj.offsetWidth+'px;height:'+sobj.offsetHeight+'px">';
            mytable.needWrapAuto = true;
            mytable.resizeFromObject = sobj;
            mytable.resizeToId = sobj.id+'_ar_resize';
        }
    }
    if(win<0 && !hideBar) {
        var type_chart  = '<table><tr>';
            type_chart += '<td valign="MIDDLE"><div style="cursor:pointer;"  id="'+pid+'">'+ibiSkin.cpopicon+'<\/div><\/td>';
            if(win>-1) type_chart += '<td valign="MIDDLE"><div style="cursor:pointer;"  onclick="ToggleFiltLink('+win+')">'+(linked?ibiSkin.unlinkicon:ibiSkin.linkicon)+'<\/div><\/td>';
            type_chart += '<\/tr><\/table>';
    
        var sum_line  = '<table><tr>';
            sum_line += '<td style="white-space:nowrap" width="60" valign="TOP" class="tabPagingText1"><div id="'+sid+'" class="tabPagingText1" style="white-space:nowrap;cursor:pointer;"><\/div><\/td>';
            sum_line += '<\/tr><\/table>';
    
        mline  += '<Table class="arPivotMenuBar" ';
        mline += mytable.getReportStyle("STRING");
        if(status_color || status_bcolor) {
            mline += 'style="';
            if(status_color)
                mline += status_color;
            if(status_bcolor)
                mline += status_bcolor;

        }
        mline += '" ';
        mline += 'width="100%" border=0 cellspacing=0 cellpadding=0><tr height="18">';
        mline += '<td Width=30 class="arPivotMenuBarContainer" style="white-space:nowrap;" Valign="MIDDLE">'+type_chart+'<\/td>';
        mline += '<td Width=60 class="arPivotMenuBarContainer" style="white-space:nowrap;" Valign="MIDDLE">'+sum_line+'<\/td>';
        var dopad = true;
        if(mytable.a_cntl.menuops.fsappmode || b_ios)
            if(!b_ie || (b_ie_version>7)) {
                  mline += '<td align="right" width="*"><span title="'+ibiMsgStr["fsr"]+'" style="cursor:pointer;" onclick="ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,true)">'+ibiSkin.fullicon1+'<\/span><\/td>';
                dopad = false;
            }
        if(dopad) mline += '<td width="*">&nbsp;<\/td>';
            mline += '<\/tr><\/table>';
    }
    if(!mytable.a_cntl.showMenuBar) mline = '';
    //Populate the grid with the horizontal headings.
    if((columnBucket.length==0) && (measureBucket.length)){
        counter = 0;
        for(k = rowBucket.length ; k<rowBucket.length+number_of_measures; k++) {
            captObj = capt[k];
            dname = k;
            if(captObj.noprint) {
                captObj.name = new Object();
                captObj.name = {'bcolor':'','name':cntl.a_cols[measureBucket[counter]].dis,'size':'','font':''};
                dname = k;
            }
            PAr[0][counter+rowsLength]= {'type':'header','col':dname};
            counter++;
        }
    }

    for(j=0;j<columnBucket.length;j++) {
        x=j*2;
        y=rowsLength;
        captObj = capt[j];
        dname = j;
        if(captObj.noprint) {
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[columnBucket[j]].dis,'size':'','font':''};
            dname = k+y_cols.length;
        }
        var n = number_of_measures;
        if(n==0)
            n = 1;
        var cls = HorzTree.length * n;
        PAr[x][y]={'type':'header','col':dname,'colspan':cls};
        for(i = 1; i < cls ; i++) {
            PAr[x][y+i] = [];
            PAr[x][y+i][DACLS]='';
            PAr[x][y+i][DATYP]=1;
            PAr[x][y+i][DARAW]='';
            PAr[x][y+i][8] = 'hide';
        }
        counter = number_of_measures;
        if(number_of_measures == 0)
            counter = 1;
        for(i=0;i<HorzTree.length;i++) {
            xpos = i*counter+rowBucket.length;
            if(measureBucket.length)
            for(k = y_cols.length ; k<number_of_measures+y_cols.length; k++) {
                captObj = capt[k];
                dname = k;
                if(captObj.noprint) {
                    captObj.name = new Object();
                    captObj.name = {'bcolor':'','name':cntl.a_cols[measureBucket[k]].dis,'size':'','font':''};
                    dname = measureBucket[k];
                }
                PAr[columnBucket.length*2][xpos+(k-y_cols.length)]={'type':'header','col':dname};
            }
            str=mytable.IBs[HorzTree[i][j][DASTR]];
            show = true;
            if(i>0) {
                if(j==0) {
                    if(mytable.IBs[HorzTree[i][j][DARAW]]==mytable.IBs[HorzTree[i-1][j][DARAW]]) show = false;
                } else {
                    if((PAr[x-1][y+i][DASTR]=="&nbsp;") &&
                        (HorzTree[i-1][j][DARAW]==HorzTree[i][j][DARAW]))
                        show = false;
                }
            }
            PAr[x+1][xpos] = [];
            //PAr[x+1][xpos][DACLS]='class="IBIS'+tnc+'_'+HorzTree[i][j][DACLS]+'" '+styling[j];
            PAr[x+1][xpos][DACLS]='class="IBIS'+tnc+'_'+HorzTree[i][j][DACLS]+'" '+mytable.getColumnStyle(capt[j].orgCol,i,1,mytable.a_cont[0],'x',capt[j].orgCol);
            PAr[x+1][xpos][DATYP]=1;
            PAr[x+1][xpos][DARAW]=str;
            PAr[x+1][xpos][8] = '';
            if(number_of_measures>1)
                PAr[x+1][xpos][8]=' colspan="'+number_of_measures+'" ';
            if(show)
                PAr[x+1][xpos][DASTR]=str;
            else
                PAr[x+1][xpos][DASTR]="&nbsp;";
            if(number_of_measures>1) {
                for(k=1;k<number_of_measures;k++) {
                    PAr[x+1][xpos+k] = [];
                    PAr[x+1][xpos+k][DACLS]='class="IBIS'+tnc+'_'+HorzTree[i][j][DACLS]+'" '+mytable.getColumnStyle(capt[k+y_cols.length].orgCol,i,i+1,mytable.a_cont[0],'x',capt[k+y_cols.length].orgCol);
                    PAr[x+1][xpos+k][DATYP]=1;
                    PAr[x+1][xpos+k][DARAW]=str;
                    PAr[x+1][xpos+k][8] = 'hide';
                }
                
            }
        }

    }


    counter = 0;
    for(j=0;j<rowBucket.length;j++) {
        captObj = capt[j+columnBucket.length];
        dname = j+columnBucket.length;
        if(capt[dname].noprint) {
            continue;
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[rowBucket[j+columnBucket.length]].dis,'size':'','font':''};
            dname = rowBucket[j+columnBucket.length];
        }
        if(columnBucket.length>0)
            row=colsLength*2;
        else 
            row=0;
        PAr[row][counter]={'type':'header','col':dname};
        row++;
        var vl = VertTree.length;
        for(i=0;i<vl;i++) {
            str=mytable.IBs[VertTree[i][j][DASTR]];
            show = 1;
            if(i>0) {
                if(counter==0) {
                    if(mytable.IBs[VertTree[i][j][DARAW]]==mytable.IBs[VertTree[i-1][j][DARAW]]) show = 0;
                } else {
                    if((PAr[i+row][counter-1][DASTR]=="&nbsp;") &&
                        (VertTree[i-1][j][DARAW]==VertTree[i][j][DARAW]))
                        show = 0;
                }
            }
            PAr[i+row][counter] = [];
            PAr[i+row][counter][DACLS]='class="IBIS'+tnc+'_'+VertTree[i][j][DACLS]+'" '+mytable.getColumnStyle(capt[j+columnBucket.length].orgCol,i,i+1,mytable.a_cont[0],'x',capt[j+columnBucket.length].orgCol);
            PAr[i+row][counter][DATYP]=1;
            PAr[i+row][counter][DARAW]=str;
            if(show)
                PAr[i+row][counter][DASTR]=str;
            else
                PAr[i+row][counter][DASTR]="&nbsp;";
        }
        counter++;
    }
    
    var pgt = '';
    if(measureBucket.length) {
        captObj = capt[y_cols.length];
        if(captObj.noprint) {
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[measureBucket[0]].dis,'size':'','font':''};
        }
        pgt = ibiMsgStr['pgtotal'];
    }
    
    if((rowBucket.length>0) && (number_of_measures>0)) {
        //PAr[number_of_rows-1][npv-1]={'type':'total','col':y_cols.length-1,'text':pgt};
        PAr[number_of_rows-1][0]={'type':'total-column','col':y_cols.length-1,'text':pgt};
        for(i=1; i < rowBucket.length; i++)
            PAr[number_of_rows-1][i]={'type':'total-column','col':y_cols.length-1,'text':''};
    }
    if((columnBucket.length>0) && (number_of_measures>0)) {
        for(i=0; i < number_of_measures; i++) {
            PAr[columnBucket.length*2][number_of_columns-(number_of_measures-i)]={'type':'total-row','col':measureBucket[i],'text':pgt};
        }
    }
    if((rowBucket.length>0)&&(columnBucket.length>0)) PAr[number_of_rows-1][number_of_columns-1]=null;
    if(columnBucket.length>0) yy=columnBucket.length*2+1;
    else yy=1;
    //Populate the grid with the actual data values
    if(measureBucket.length)
    for(i=0;i<cont.length;i++) {
        x = mytable.getXpos(columnBucket,cont[i]);
        y = mytable.getYpos(rowBucket,cont[i]);
        //if no bys;
        if(HorzTree.length == 0 && VertTree.length == 0) {
            y = i;
        }
        for(j=0; j < number_of_measures; j++) {
            xpos = x*number_of_measures+j;
            s = cont[i][measureBucket[j]];
            captObj = capt[j+y_cols.length];
            PAr[y+yy][xpos+rowBucket.length] = ibiStd.copyObject(s);
            PAr[y+yy][xpos+rowBucket.length][DACLS] = 'class="IBIS'+tnc+'_'+s[DACLS]+'" '+mytable.getColumnStyle(capt[j+y_cols.length].orgCol,i,y+1,cont[i],'x',capt[j+y_cols.length].orgCol);
            PAr[y+yy][xpos+rowBucket.length][DAREC] = i;
            PAr[y+yy][xpos+rowBucket.length][DARECCOL] = measureBucket[j];

            si = s[DARAW];
            if(si<0) continue;
            ii = ibs[si]*1;

            href = null;
            ucol = j+y_cols.length;
            if(capt[ucol].orgCol>-1)
                ucol = capt[ucol].orgCol;
            if(mytable.o_look.styles!=null)
                href = mytable.getHrefNode(mytable.o_look.styles,ucol,i);
            if(href !=null) {
                href = mytable.setHrefValues(href,cont[i]);
                val = href + FocusFormat(ii,captObj.format,cntl.cdn,cntl.cursym) + "<\/a>";
                PAr[y+yy][xpos+rowBucket.length][DASTR] = val;
                PAr[y+yy][xpos+rowBucket.length][DATYP] = 1;
            }

            var tpos = number_of_columns-(number_of_measures-j);
            if(columnBucket.length>0) {
                if(PAr[y+yy][tpos]==null) {
                    PAr[y+yy][tpos]=[];
                    PAr[y+yy][tpos][DATYP]=1;
                    PAr[y+yy][tpos][DARAW]= ii;
                    //PAr[y+yy][tpos][DACLS]='class="IBIS'+tnc+'_'+s[DACLS]+'" '+mytable.getColumnStyle(capt[nrcols+j].orgCol,i,y+1,cont[i],'x',capt[nrcols+j].orgCol);
                    PAr[y+yy][tpos][DACLS]='class="IBIS'+tnc+'_'+s[DACLS]+'" '+mytable.getReportStyle("STRING",ST_GRANDTOTAL,capt[j+y_cols.length].orgCol)+';text-align:right;align:right;"';
                    PAr[y+yy][tpos][DASTR]=FocusFormat(ii,captObj.format,cntl.cdn,cntl.cursym);
                    PAr[y+yy][tpos][DACNT]=1;
                } else {
                    PAr[y+yy][tpos][DACNT]++;
                    if(btypeArray[0]=='MIN') {
                        if(ii<PAr[y+yy][tpos][DARAW])PAr[y+yy][number_of_columns-1][DARAW] = ii;
                    } else
                    if(btypeArray[0]=='MAX') {
                        if(ii>PAr[y+yy][tpos][DARAW])PAr[y+yy][number_of_columns-1][DARAW] = ii;
                    } else
                        PAr[y+yy][tpos][DARAW]+=ii;
                    PAr[y+yy][tpos][DASTR]=FocusFormat(PAr[y+(columnBucket.length*2)+1][tpos][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                }
            }
            
            if(rowBucket.length>0) {
                if(xpos+rowBucket.length<number_of_columns) {
                    if(PAr[number_of_rows-1][xpos+rowBucket.length]==null) {
                        PAr[number_of_rows-1][xpos+rowBucket.length]=[];
                        PAr[number_of_rows-1][xpos+rowBucket.length][DATYP]=1;
                        PAr[number_of_rows-1][xpos+rowBucket.length][DACNT]=1;
                        PAr[number_of_rows-1][xpos+rowBucket.length][DARAW]=ii;
                        PAr[number_of_rows-1][xpos+rowBucket.length][DACLS]='class="IBIS'+tnc+'_'+s[DACLS]+'" '+mytable.getReportStyle("STRING",ST_GRANDTOTAL,capt[j+y_cols.length].orgCol)+';text-align:right;align:right;"';
                        PAr[number_of_rows-1][xpos+rowBucket.length][DASTR]=FocusFormat(ii,captObj.format,cntl.cdn,cntl.cursym);
                    } else {
                        PAr[number_of_rows-1][xpos+rowBucket.length][DACNT]++;
                        if(btypeArray[0]=='MIN') {
                            if(ii<PAr[number_of_rows-1][xpos+rowBucket.length][DARAW])PAr[number_of_rows-1][xpos+rowBucket.length][DARAW] = ii;
                        } else
                        if(btypeArray[0]=='MAX') {
                            if(ii>PAr[number_of_rows-1][xpos+rowBucket.length][DARAW])PAr[number_of_rows-1][xpos+rowBucket.length][DARAW] = ii;
                        } else
                            PAr[number_of_rows-1][xpos+rowBucket.length][DARAW]+=ii;
                        PAr[number_of_rows-1][xpos+rowBucket.length][DASTR]=FocusFormat(PAr[number_of_rows-1][xpos+rowBucket.length][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                    }
                }
                if(columnBucket.length>0) {
                    if(PAr[number_of_rows-1][tpos]==null) {
                        PAr[number_of_rows-1][tpos]=[];
                        PAr[number_of_rows-1][tpos][DATYP]=1;
                        PAr[number_of_rows-1][tpos][DACLS]='class="IBIS'+tnc+'_'+cont[0][measureBucket[0]][DACLS]+'" '+mytable.getReportStyle("STRING",ST_GRANDTOTAL)+'"';
                        PAr[number_of_rows-1][tpos][DARAW]=ii;
                    } else {
                        if(btypeArray[0]=='MIN') {
                            if(ii<PAr[number_of_rows-1][tpos][DARAW])PAr[number_of_rows-1][tpos][DARAW] = ii;
                        } else
                        if(btypeArray[0]=='MAX') {
                            if(ii>PAr[number_of_rows-1][tpos][DARAW])PAr[number_of_rows-1][tpos][DARAW] = ii;
                        } else
                            PAr[number_of_rows-1][tpos][DARAW] += ii;
                    }
                    PAr[number_of_rows-1][tpos][DASTR]=FocusFormat(PAr[number_of_rows-1][tpos][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                }
            }
        }
    }

    if(measureBucket.length) {
        captObj = capt[y_cols.length];
        if(capt[y_cols.length].noprint) {
            captObj.name = new Object();
            captObj.name = {'bcolor':'','name':cntl.a_cols[measureBucket[0]].dis,'size':'','font':''};
        }
        if(btypeArray[0]=='AVG'){
            if(columnBucket.length>0)
            for(i=0; i<nyy; i++)
                if(PAr[i+yy][nx-1]!=null) {
                    PAr[i+yy][nx-1][DARAW]=PAr[i+yy][nx-1][DARAW]/PAr[i+yy][nx-1][DACNT];
                    PAr[i+yy][nx-1][DASTR]=FocusFormat(PAr[i+yy][nx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                }
            if(rowBucket.length>0)
            for(i=0; i<nxx; i++)
                if(PAr[ny-1][i+rowBucket.length]!=null) {
                    PAr[ny-1][i+rowBucket.length][DARAW]=PAr[ny-1][i+rowBucket.length][DARAW]/PAr[ny-1][i+rowBucket.length][DACNT];
                    PAr[ny-1][i+rowBucket.length][DASTR]=FocusFormat(PAr[ny-1][i+rowBucket.length][DARAW],captObj.format,cntl.cdn,cntl.cursym);
                }
            if((columnBucket.length>0)&&(rowBucket.length>0)) {
                PAr[ny-1][nx-1][DARAW]=PAr[ny-1][nx-1][DARAW]/cont.length;
                PAr[ny-1][nx-1][DASTR]=FocusFormat(PAr[ny-1][nx-1][DARAW],captObj.format,cntl.cdn,cntl.cursym);
            }
        }
    }
    var widthStr='';
    /*
    if(mytable.useMdiv) {
        widthStr=' width="100%" ';
    }  else
    if(mytable.a_cntl.table_div) {
        if(typeof(mytable.a_cntl.table_div.percentWidth)!="undefined")
            widthStr = ' width="'+mytable.a_cntl.table_div.percentWidth+'%" ';
        else
        if(typeof(mytable.a_cntl.table_div.width)!="undefined")
            widthStr = ' width="'+mytable.a_cntl.table_div.width+'px" ';
    }
    */
    s_[s_.length] = '<div style="padding:20px;margin:0"><table class="arPivot" '+widthStr+' id="piv'+win+'" cellpadding=0 cellspacing=0 border=0><tr><td>';
    if(!hideBar)
        s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=1>'+
        '<tr><td bgcolor="#ECE9D8" id="PIVOT_MENU'+win+'">'+mline+'<\/td><\/tr><\/table>'+
         '<\/td><\/tr><tr><td>';

    if(mytable.a_cntl.heading) {
        s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=0>';
        s_[s_.length] = drawPivotGridHeading(mytable,isHead);
        s_[s_.length] = '<\/table><\/td><\/tr><tr><td>';
    }

    //var h = drawPivotGridHeading(mytable,isHead,false);

    if(mytable.a_cntl.ibinotvalid) {
        s_[s_.length] = '<table width="100%" cellpadding=0 cellspacing=0 border=1><tr><td class="arAuthorizedMessage">';
        s_[s_.length] = ibiMsgStr['lic'];
        s_[s_.length] = '<\/td><\/tr><\/table><\/td><\/tr><tr><td>';
    }
    mytable.n_border=1;
    
    //Draw the grid
    var rs = mytable.getReportStyle("STRING");
    s_[s_.length] = '<table width="100%" cellpadding='+mytable.n_padding+' cellspacing='+mytable.n_spacing+mytable.o_css.main+' border='+mytable.n_border+'  '+rs+'">';
    var col;

    var nor = number_of_rows;
    var noc = number_of_columns;
    if(!showColumnTotal && (rowBucket.length>0) && (number_of_measures>0))
        nor = nor - 1;
    if(!showRowTotal && (columnBucket.length>0) && (number_of_measures>0))
        noc = noc - number_of_measures;

    var record;
    var recordColumn;

    for(i=0; i<nor; i++) {
        s_[s_.length] = '<tr>';
        for(ii=0; ii<noc; ii++) {
            classStr='';
            s=PAr[i][ii];
            record = -1;
            recordColumn = -1;
            if(s==null) {
                classStr = stylingReport;
                if((i<yy)||(ii<rowBucket.length)) {
                    str = '&nbsp;';
                } else {
                    if(number_of_measures == 0)
                        col = 0;
                    else
                        col = ((ii-rowBucket.length)%number_of_measures)+y_cols.length;
                    classStr = mytable.getColumnStyle(capt[col].orgCol,i,i,null,null,capt[col].orgCol);
                    str = mytable.a_cntl.nodata;
                }
            } else
            if((typeof(s)=='object') && (s.type == "total-column")) {
                classStr = mytable.getReportStyle("STRING",ST_GRANDTOTAL)+';text-align:left;"';
                s = s.text;
                str = s;
            } else
            if((typeof(s)=='object') && (s.type == "total-row")) {
                classStr = mytable.getReportStyle("STRING",ST_GRANDTOTAL)+';"';
                s = s.text;
                str = s;
            } else
            if((typeof(s)=='object') && (s.type != "header")) {
                classStr= ' '+s[DACLS];
                str=ibs[s[DASTR]];
                if(typeof(s[DATYP])!='undefined')
                    if(s[DATYP]==1) str=s[DASTR];
                record = s[DAREC];
                recordColumn = s[DARECCOL];
            } else str=s;
            /*
            if (i == 1) {
                var tempStr = classStr;
                classStr = (tempStr.indexOf("class") !== -1) ? 
                    tempStr.replace(/(\")/, '"arPivotColumnHeadingContainer ') :
                    ' class="arPivotColumnHeadingContainer" ';
            }*/
            colSpan = '';

            spanStr='';
            if(classStr != undefined)
                if(classStr.indexOf("font-weight:bold;")>0)
                    spanStr = ' style="font-weight:bold;"';

            spanStr += ' onmouseover="ibiPivot.delayShowMenu(event,\''+mytable.id+'\','+record+','+recordColumn+',\''+str+'\')" onmouseout="ibiPivot.clearDelayShowMenu(\''+mytable.id+'\')" ';
            if((s!=null)&&(typeof(s)=='object') && (s.type == "header")) {
                if(s.col<capt.length)
                    s_[s_.length]=drawPivotGridColumnHeading(mytable, s.col, s.text,capt[s.col].orgCol, s.colspan);
            } else
            if(s) {
                if(s[8]=="hide") {
                } else {
                    colSpan = '';
                    if(s[8])
                        colSpan = s[8];
                    s_[s_.length]='<td '+colSpan+classStr+'><span '+spanStr+'>'+str+'<\/span><\/td>';
                }
            } else {
                s_[s_.length] = '<td ' + colSpan + classStr + '><span '+spanStr+'>' + str + '<\/span><\/td>';
           }
        }
        s_[s_.length] = '<\/tr>';
    }
//    s_[s_.length] = '<tr>';
    s_[s_.length] = '<\/table><\/td><\/tr>';

    if(mytable.a_cntl.footing) {
        s_[s_.length] = '<tr><td><table width="100%" cellpadding=0 cellspacing=0 border=0>';
        s_[s_.length] = drawPivotGridHeading(mytable,isFoot);
        s_[s_.length] = '<\/table><\/td><\/tr>';
    }
    s_[s_.length] = '<\/table><\/div>';
    if(needWrapAuto)
        s_[s_.length] =  '<\/div>';
    line =s_.join('');
    dobj.innerHTML = line;

    pn = getPn(win,tnc);
    if(subTable!=-1) pn = pn.children[subTable];
    var ppmytable=getMyTable(p_num);
    if(mytable.a_cntl.showMenuBar) {
        build_chartdrop(ppmytable,pid,win,ibiSkin.cpopicon,sum_line,pn,5,subTable);
        var sumprt='<table border=0 cellspacing=0><tr><td>'+ibiSkin.sumicon+'<\/td><td style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+a_calc_types[pn.saveable.btypeArray[0]]+'<\/td><\/tr><\/table>';
        build_chartagg(ppmytable,sid,win,sumprt,pn,5,subTable);
    }
    if(win<0) {
        dobj = d.getElementById("piv"+win);
        if(mytable.useMdiv==null) {
            ResizePivot(mytable);
        }
        if(mytable.needWrapAuto) {
            var _resizeTDGChart = function() {
                var obj = document.getElementById(mytable.resizeToId);
                if(obj) {
                    obj.style.width = mytable.resizeFromObject.offsetWidth+'px';
                    obj.style.height = mytable.resizeFromObject.offsetHeight+'px';
                }
                ibiPivot.resizePivot(mytable);
            };
            
            mytable.resizeChart = function() {
                if(mytable.deleted) 
                    return;
                if(!document.getElementById(mytable.resizeToId)) 
                    return;
                window.clearTimeout(mytable.resizeChartTimeoutId);
                mytable.resizeChartTimeoutId = window.setTimeout(function(){_resizeTDGChart();}, 100);
            }; // end .resizeChart()
    
            if ('addEventListener' in window) {
                window.addEventListener("resize", mytable.resizeChart, false);
            } else {
                window.attachEvent("onresize", mytable.resizeChart);
            }
        }
    }
    if(mytable.updateCompleteFunc) {
        var myObj = {
            'id': mytable.id
        };
        mytable.updateCompleteFunc(myObj);
    }
}

function build_chartdrop(mytable,id,win,icon,sline,pn,ctype,subTable) {
    var MI_FT=[];
    var n_id = null;
    var i=3,count,pp;
    var ic,pp2;

    MI_FT[0] = [icon,null,null];
    if(win>-1) MI_FT[0][i++]=[[ibiMsgStr['nwbt']],null,{'ocv':'newchart','oc' : 'ibiChart.newMakeChart('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];

    if(b_mobile) {
        if(mytable.fullScreenOn)
            MI_FT[0][i++]=[[ibiMsgStr['ogv']],null,{'ocv':'newchart','oc' : 'ibi_iPadMenu.fullScreen('+mytable.id+',true,false);'}];
        else
            MI_FT[0][i++]=[[ibiMsgStr['fsr']],null,{'ocv':'newchart','oc' : 'ibi_iPadMenu.fullScreen('+mytable.id+',true,true);'}];
    }
    
    count = 3;
    ic = ibiMsgStr['crtgby'];
    MI_FT[0][i] = [[ic],null,null];
    var yl = pn.saveable.y_cols.length;
    if(yl) {
        for(ic=0; ic< yl; ic++) {
            pp2 =mytable.a_cntl.a_cols[pn.saveable.y_cols[ic]].name;
            pp = [pp2,1,mytable.a_cntl.a_cols[pn.saveable.y_cols[ic]].dis]; 
            MI_FT[0][i][count++] = [pp,null,{'ocv':'chartaddycol','oc' : 'ibiChart.makeChartAddYcol('+win+','+pn.saveable.y_cols[ic]+',true,0,0,'+mytable.a_cntl.table_number+','+subTable+')'}];
        }
        MI_FT[0][i][count++] = [[drawline(mytable.a_cntl.menubordercolor),null,null,true], 'SKIP',null];
    }
    for(ic=0; ic< mytable.n_cols; ic++){
        if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[ic].noprint) continue;
        if(!inarray(pn.saveable.y_cols,ic)) {
            pp2 =mytable.a_cntl.a_cols[ic].name;
            pp = [pp2,0,mytable.a_cntl.a_cols[ic].dis]; 
            MI_FT[0][i][count++] = [pp,null,{'ocv':'chartaddycol','oc' : 'ibiChart.makeChartAddYcol('+win+','+ic+',false,0,0,'+mytable.a_cntl.table_number+','+subTable+')'}];
        }
    }
    i++;
    ic = ibiMsgStr['addy'];
    MI_FT[0][i++]=build_chartadd(mytable,id,win,ic,pn,ctype,subTable);
    if(b_hasActiveX)MI_FT[0][i++]=build_chartMSexp(mytable,id,win,ibiMsgStr['mset'],pn,subTable);
    MI_FT[0][i++] = [[ibiMsgStr['pivottool']],null,{'ocv':'pivottool','oc': 'ibiEditTools.DoPivotToolmod('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];

    if(pn.xmenu != null) n_id = pn.xmenu;
    var toolbr = d.getElementById(id);
    if(toolbr) {
        var MP_copy = ibiStd.copyObject(MP_GRP);
        MP_copy[0].css = {};
        pn.xmenu = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,id);
    }
}

function build_chartadd(mytable,id,win,icon,pn,ctype,subTable){
    var i;
    var addarray = [];
    var MI_FT=[],pp,pp2;
 
    MI_FT = [[icon],null, null];
    if(typeof(pn.saveable.x_cols)=='object') {
        for (i = 0; i < pn.saveable.x_cols.length; i++) {
            addarray[i]=pn.saveable.x_cols[i];
        }
    } else { 
        addarray[0] = pn.saveable.x_cols;
    }

    var checked, _i = 0; 
    for(i=0;i<mytable.n_cols;i++){
        if((ctype==3)&&(mytable.a_capt[i].type==IBISTR)) continue;
        if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[i].noprint) continue;
        checked = 1;
        if (!inarray(addarray,i)) { checked=0; }
        pp2 =mytable.a_cntl.a_cols[i].name;
        pp = [pp2,checked,mytable.a_cntl.a_cols[i].dis]; 
        MI_FT[3+_i] = [pp,null,{'ocv':'chartaddxcol','oc' : 'ibiChart.makeChartAddXcol('+win+','+i+','+(checked?true:false)+','+mytable.a_cntl.table_number+','+subTable+')'}];
        _i++;
    }
    return MI_FT;
}

function build_chartMSexp(mytable,id,win,icon,pn,subTable){
    var i=3;
    var MI_FT=[];
 
    MI_FT = [[icon],null, null];

    MI_FT[i++] = [[ibiMsgStr['msex']],null,{'ocv':'chartexport','oc' : 'ibiChart.makeChartMSexport('+win+','+MSEXCEL+','+subTable+')'}];
    MI_FT[i++] = [[ibiMsgStr['mswd']],null,{'ocv':'chartexport','oc' : 'ibiChart.makeChartMSexport('+win+','+MSWORD+','+subTable+')'}];
    MI_FT[i++] = [[ibiMsgStr['mspt']],null,{'ocv':'chartexport','oc' : 'ibiChart.makeChartMSexport('+win+','+MSPOWERPOINT+','+subTable+')'}];
    return MI_FT;
}

function build_chartagg(mytable,id,win,icon,pn,ctype,subTable){
    var j;
    var n_id = null;
    var MI_FT = [];
    var count;
    var act = a_calc_types; 
    MI_FT[0] = [icon,null,null];

    count = 0;
    for(j in act){
        if(j=='NONE') continue;
        MI_FT[0][3+count] = [[act[j]],null,{'ocv':'setchartnbtype','oc' : 'ibiChart.makeChartNBType('+win+',"'+j+'",'+mytable.a_cntl.table_number+','+subTable+')'}];
        count++;
    }

    if(pn.agg != null) n_id = pn.agg;
    var toolbr = d.getElementById(id);
    var m = MP_AGG;
    if(b_mobile) m = MP_AGG2;
    if(toolbr) {
        var MP_copy = ibiStd.copyObject(m);
        MP_copy[0].css = {};
        pn.agg = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,id);
    }
}
    function GetPivotValues(columns){
        var res = [];
        var order;
        var i,j,ii;
        var lastval=new Array(columns.length);
        var newrow;
        /*
        this.a_sort=[];
        for(i=0;i<(columns.length);i++) lastval[i] = -1;
        j = columns.length-1;
        //for(i=startcol;i<endcol;i++) {
        for (i=0; i < columns.length; i++) {
            order = 0;
            if((this.a_capt[columns[i]].orow == arConstants.OROW_HIGH) ||
                (this.a_capt[columns[i]].orow == arConstants.OROW_HIGH_NOPR))
                order = 1;
            this.a_sort[j--]={'n_col':columns[i],'b_ord':order};
        }
        this.callSort(true,true);

        if(this.haveFilters) {
            this.a_f_body = this.a_filter_body;
            this.a_cont = this.a_filter_cont;
        } else {
            this.a_f_body = this.a_all_body;
            this.a_cont = this.a_all_cont;
        }
        */

        var xar = [];
        var yar = [];
        var newcont = [];
        var btypeA = [];
        var group = [], fmtCols = [];
        var b;
        var curCol;
        var bys = [];
        var partOfData = [];
        var bytot = [];
        if(this.a_cntl.bytot)
            bytot = this.a_cntl.bytot;

        for (i = 0; i < columns.length; i++) {
            partOfData[i] = {};
            for(j=0; j < this.a_cont.length; j++){
                partOfData[i][this.a_cont[j][columns[i]][DARAW]] = true;
            }
            curCol = this.a_capt[columns[i]];
            bys[bys.length] = IGetOriginalDataField(curCol);
            fmtCols[fmtCols.length] = curCol.dataField;
            if(curCol.SUM) b='SUM';
            else if(curCol.MIN) b='MIN';
            else if(curCol.MAX) b='MAX';
            else if(curCol.AVG) b='AVG';
            else if(curCol.COU) b='COU';
            else if(curCol.DIS) b='DIS';
            btypeA[btypeA.length]=b;
        }
        newcont = this.getChartValues(bys[0],bys,xar,yar,btypeA,false,0,newcont,true,false,-1,0,true,null,fmtCols);
        j = 0;
        for(i=0; i< columns.length; i++)lastval[i] = -1;

        for(i=0; i < newcont.length; i++) {
            newrow = false;
            for(ii=0;ii<columns.length;ii++)
                if(lastval[ii]!=newcont[i][ii][DARAW]) newrow=true;
            if(newrow) {
                for(ii=0;ii<columns.length;ii++) {
                    if(bytot[columns[ii]]>0)
                        continue;
                    if (!partOfData[ii][newcont[i][ii][DARAW]])
                        newrow = false;
                }
                //check if it is part of the data
            }
            if(newrow) {
                res[j]=[];
                for(ii=0;ii<columns.length;ii++) {
                    res[j][ii]=[];
                    res[j][ii][DARAW]=newcont[i][ii][DARAW];
                    res[j][ii][DASTR]=newcont[i][ii][DASTR];
                    res[j][ii][DACLS]=newcont[i][ii][DACLS];
                    lastval[ii] = newcont[i][ii][DARAW];
                }
                j++;
            }
        }
        return res;
    }

    function getPivotGridPosXB(columns,cont)
    {
        if(columns.length==0) return 0;
        var pos = 0;
        var col = 0;
        var bytot = [];
        if(this.a_cntl.bytot)
            bytot = this.a_cntl.bytot;
        while((col<columns.length)&&(pos<this.HorzTree.length)) {
            if((this.IBs[this.HorzTree[pos][col][DARAW]] == this.IBs[cont[columns[col]][DARAW]]) ||
                (bytot[columns[col]] > 0)){
                col++;
            } else {
                col = 0;
                pos++;
            }
        }
        return pos;
    }

    function getPivotGridPosYB(columns,cont)
    {
        if(columns.length == 0) return 0;
        var pos = 0;
        var col = 0;
        var bytot = [];
        if(this.a_cntl.bytot)
            bytot = this.a_cntl.bytot;
        while((col<columns.length)&&(pos<this.VertTree.length)) {
            if((this.IBs[this.VertTree[pos][col][DARAW]] == this.IBs[cont[columns[col]][DARAW]]) ||
                (bytot[columns[col]] > 0)){
                col++;
            } else {
                col = 0;
                pos++;
            }
        }
        return pos;
    }

    function showMenu(event,mytable_id,column,pivotColumn,dataType,record,title)
    {
        var mytable = getMyTable(mytable_id);
        var alias = "tdg/jschart/distribution/";
        var obj;
        var htmlMenu = mytable.a_cntl.a_cols[column].name+'<br><hr>';
        var tcntl = mytable.ru_a_cntl;
        var pos;
        var shownoprint = true;
        var menuArray = [];

        if(typeof title != "undefined")
            htmlMenu = title + '<br>';

        if(inarray(tcntl.buckets['ROW'],column,false)) {
            pos = inarray(tcntl.buckets['ROW'],column,true);
            htmlMenu += '<hr>';
            htmlMenu += '<table><tr>';
            htmlMenu += '<td><div style="background-color:gray;">';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveToBucket(' + mytable.id + ',' + column + ',\'ROW\',\'COLUMN\')">' + ibiSkin.pvicon2 + '<\/span>';
            htmlMenu += '<\/div><\/td>';
            if(tcntl.buckets['ROW'].length>1) {
                if(pos>0) {
                    htmlMenu += '<td><div style="background-color:gray;">';
                    htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveInBucket(' + mytable.id + ',' + column + ',\'ROW\',\'DOWN\')">' + ibiSkin.pvicon6 + '<\/span>';
                    htmlMenu += '<\/div><\/td>';
                }
                if(pos<(tcntl.buckets['ROW'].length-1)) {
                    htmlMenu += '<td><div style="background-color:gray;">';
                    htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveInBucket(' + mytable.id + ',' + column + ',\'ROW\',\'UP\')">' + ibiSkin.pvicon5 + '<\/span>';
                    htmlMenu += '<\/div><\/td>';
                }
            }
            htmlMenu += '<\/tr><\/table>';
        } else
        if(inarray(tcntl.buckets['COLUMN'],column,false)) {
            pos = inarray(tcntl.buckets['COLUMN'],column,true);
            htmlMenu += '<hr>';
            htmlMenu += '<table><tr>';
            htmlMenu += '<td><div style="background-color:gray;">';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveToBucket(' + mytable.id + ',' + column + ',\'COLUMN\',\'ROW\')">' + ibiSkin.pvicon1 + '<\/span>';
            htmlMenu += '<\/div><\/td>';
            if(tcntl.buckets['COLUMN'].length>1) {
                if(pos>0) {
                    htmlMenu += '<td><div style="background-color:gray;">';
                    htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveInBucket(' + mytable.id + ',' + column + ',\'COLUMN\',\'DOWN\')">' + ibiSkin.pvicon4 + '<\/span>';
                    htmlMenu += '<\/div><\/td>';
                }
                if(pos<(tcntl.buckets['COLUMN'].length-1)) {
                    htmlMenu += '<td><div style="background-color:gray;">';
                    htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.moveInBucket(' + mytable.id + ',' + column + ',\'COLUMN\',\'UP\')">' + ibiSkin.pvicon3 + '<\/span>';
                    htmlMenu += '<\/div><\/td>';
                }
            }
            htmlMenu += '<\/tr><\/table>';
        } else {

        }

        if(inarray(tcntl.buckets['ROW'],column,false) || inarray(tcntl.buckets['COLUMN'],column,false)) {
            htmlMenu += '<hr>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.sortBucket(' + mytable.id + ',' + column + ',0)">';
            htmlMenu += '' + ibiMsgStr['sas'] + '<\/span><br>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.sortBucket(' + mytable.id + ',' + column + ',1)">';
            htmlMenu += '' + ibiMsgStr['sds'] + '<\/span><br>';
            htmlMenu += '<hr>';
            if(inarray(tcntl.buckets['ROW'],column,false)) {
                htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.showRowTotal(' + mytable.id + ',' + column + ',0)">';
                htmlMenu += '' + ibiMsgStr['srowtot'] + '<\/span><br>';
            } else {
                htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.showColumnTotal(' + mytable.id + ',' + column + ',1)">';
                htmlMenu += '' + ibiMsgStr['scoltot'] + '<\/span><br>';
            }
        } else {
            htmlMenu += '<hr>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.sortMeasureBucket(' + mytable.id + ',' + column + ',0)">';
            htmlMenu += '' + ibiMsgStr['sas'] + '<\/span><br>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.sortMeasureBucket(' + mytable.id + ',' + column + ',1)">';
            htmlMenu += '' + ibiMsgStr['sds'] + '<\/span><br>';
            htmlMenu += '<hr>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.showRowTotal(' + mytable.id + ',' + column + ',0)">';
            htmlMenu += '' + ibiMsgStr['srowtot'] + '<\/span><br>';
            htmlMenu += '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiPivot.showColumnTotal(' + mytable.id + ',' + column + ',1)">';
            htmlMenu += '' + ibiMsgStr['scoltot'] + '<\/span><br>';
        }

        if(inarray(mytable.a_cntl.buckets['ROW'],column,false)) {

        } else
        if(inarray(mytable.a_cntl.buckets['COLUMN'],column,false)) {

        } else {

        }

        menuArray[menuArray.length] = htmlMenu;
        if(dataType == "DATA") {
            var dstooltip = ibiChart.BuildDrillToolTip(mytable,mytable.a_cntl.buckets,mytable.t_capt, mytable.t_cntl, mytable.t_cont,  column);
            if(dstooltip != '') {
                menuArray[menuArray.length] = '<hr>';
                for (j = 0; j < dstooltip.length; j++)
                    menuArray[menuArray.length] = dstooltip[j];
            }
        }

        if(mytable.gridMenuHandle) {
            mytable.gridMenuHandle.hide();
            if(mytable.gridMenuHandleTimer)
                window.clearTimeout(mytable.gridMenuHandleTimer);
            mytable.gridMenuHandleTimer = null;
        }
        if(mytable) {
            //if(typeof mytable.gridChart == "undefined") {
            //    mytable.gridChart = new tdgchart({backend: 'js', allowBackendFallback: false, tdgPath: alias});
           //}

            if (mytable.gridChart && mytable.a_cntl.graphProps) {
                for (var j = 0; j < mytable.a_cntl.graphProps.length; j++) {
                    if (mytable.a_cntl.graphProps[j].json) {
                        var js = {};
                        try {
                            js = eval('({' + mytable.a_cntl.graphProps[j].json + '})');
                        } catch (e) {

                        }
                        mytable.gridChart.set(js);
                    }
                }
            }
            var props ={};
            if(typeof mytable.resizeContainer == "undefined")
                obj = d.getElementById(mytable.resizeToId);
            else
                obj = mytable.resizeContainer;
			if(obj == null)
				obj = mytable.o_main;
            //props.width = obj.offsetWidth;
            //props.height = obj.offsetHeight;
            //mytable.gridChart.set(props);
            //mytable.gridChart.documentRoot = obj.id;

            //if(typeof mytable.gridMenuHandle == "undefined") {
            //var root = tdgchart.d3.select('#' + obj.id);
            //var tooltipdiv = mytable.gridChart.createHTMLToolTip(root, null, true);
            mytable.gridMenuHandle = tdgchart.createExternalToolTip(obj, "ibi$menu"+mytable.id);
            //}

            mytable.gridMenuHandle.content(menuArray);

            var x = event.clientX;
            if(typeof event.layerX != "undefined")
                x = event.layerX;
            var y = event.clientY;
            if(typeof event.layerY != "undefined")
                y = event.layerY;

            mytable.gridMenuHandle.position(x,y);
            mytable.gridMenuHandle.show();

            if(mytable.gridMenuHandle.dom) {
                var hideMenu = function (e) {
                    mytable.gridMenuHandleTimer = window.setTimeout(function(){
                        mytable.gridMenuHandleTimer = null;
                        mytable.gridMenuHandle.hide();
                    }, 3000);
                };
                var resetMenu = function (e) {
                    if(mytable.gridMenuHandleTimer != null)
                        window.clearTimeout(mytable.gridMenuHandleTimer);
                    mytable.gridMenuHandleTimer = null;
                };
                mytable.gridMenuHandle.dom.style.zIndex = 99999;
                mytable.gridMenuHandle.dom.addEventListener("mouseout",hideMenu);
                mytable.gridMenuHandle.dom.addEventListener("mouseover",resetMenu);
            }
        }
    }

    function MoveToBucket(table_id,column,fromBucket,toBucket)
    {
        var mytable = getMyTable(table_id);
        mytable.gridMenuHandle.hide();
        var tcntl = mytable.ru_a_cntl;
        // gshow will set xars to null.
        //if(mytable.chartinfo.tcntl && mytable.chartinfo.xars != null)
        //    tcntl = mytable.chartinfo.tcntl;
        var pos = inarray(tcntl.buckets[fromBucket],column,true);
        tcntl.buckets[fromBucket].splice(pos,1);
        tcntl.buckets[toBucket][tcntl.buckets[toBucket].length] = column;
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function MoveInBucket(table_id,column,bucket,direction)
    {
        var mytable = getMyTable(table_id);
        mytable.gridMenuHandle.hide();
        var tcntl = mytable.ru_a_cntl;
        var pos = inarray(tcntl.buckets[bucket],column,true);
        tcntl.buckets[bucket].splice(pos,1);
        if(direction=="UP") {
            tcntl.buckets[bucket].splice(pos+1,0,column);
        } else {
            tcntl.buckets[bucket].splice(pos-1,0,column);
    }
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function SortBucket(table_id,column,order)
    {
        var mytable = getMyTable(table_id);
        if(order) {
            mytable.a_capt[column].orow = arConstants.OROW_HIGH;
        } else {
            mytable.a_capt[column].orow = arConstants.OROW_LOWEST;
        }

        mytable.gridMenuHandle.hide();
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function SortMeasureBucket(table_id,column,order)
    {
        var mytable = getMyTable(table_id);
        if(order) {
            mytable.a_capt[column].orow = arConstants.OROW_HIGH;
        } else {
            mytable.a_capt[column].orow = arConstants.OROW_LOWEST;
        }

        var tcntl = mytable.ru_a_cntl;
        if(!inarray(tcntl.buckets['ROW'],column))
            tcntl.buckets['ROW'].splice(0,0,column);
        mytable.gridMenuHandle.hide();
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function ShowRowTotal(table_id,column) {
        var mytable = getMyTable(table_id);
        mytable.a_cntl.showRowTotal = !mytable.a_cntl.showRowTotal;
        mytable.gridMenuHandle.hide();
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function ShowColumnTotal(table_id,column) {
        var mytable = getMyTable(table_id);
        mytable.a_cntl.showColumnTotal = !mytable.a_cntl.showColumnTotal;
        mytable.gridMenuHandle.hide();
        window.setTimeout(function() {
            mytable.gshow();
        },0);
    }

    function DelayShowMenu(event,table_id,record,column,displayValue){
        var mytable = getMyTable(table_id);
        mytable.gridMenuHandleTimerM = window.setTimeout(function(){
            ibiPivot.ShowMenu(event,table_id,column,column,"DATA",record,displayValue);
        }, 1000);
    }

    function ClearDelayShowMenu(table_id) {
        var mytable = getMyTable(table_id);
        if(mytable.gridMenuHandleTimerM)
            window.clearTimeout(mytable.gridMenuHandleTimerM);
        mytable.gridMenuHandleTimerM = null;
    }

})();
