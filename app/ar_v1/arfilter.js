/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arfilter.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180312 0957 bjd 201157 AHTML: after deleting filters output does not correclty refr
* 180309 0924 bjd 200302 AHTML:Filter values retains previously selected filter value
* 170721 1536 bjd 193041 WF8105M : Unable to select "missing" value in an active rep
* 170424 1036 wjf 186587 Text is overflowing the dropdown box on Filter selection
* 161221 1357 bjd 187344 Active Reports (AHTML): Value does not filter properly unle
* 161201 1534 iys 185237 Mobile: Global Filter button inactive on Document run on iP
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160610 1256 hms 180534 Remove tab characters from source files
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160314 1513 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160216 1510 wjf 176898 AHTML: Cache performance enhancement
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151229 1141 bjd 175140 AHTML_Cache: Filter Selection displays a line for BLANK valu
* 151224 1015 bjd 175140 AHTML_Cache: Filter Selection displays a line for BLANK valu
* 151209 1246 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 150509 1144 wjf 167336 AHTML: Display filters created from chart
* 150506 2040 wjf 167336 AHTML: Display filters created from chart
* 140709 1247 bjd 159929 AHTML: FILTER_NE multivalues reset if another FILTER chosen
* 140708 1249 bjd 159691 AHTML:Unable to select multiple values for NE filter option
* 140707 1600 bjd 159691 AHTML:Unable to select multiple values for NE filter option
* 140621 2256 wjf 159606 AHTML/FLEX Add support for Not BETWEEN to filter controls
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.12 $
//$Log: arfilter.js,v $
//Revision 1.12  2013/12/20 17:07:09  Brian_DCruz
//[p148394] CONTAIN\OMIT to use string comparison for DATEs under covers
//
//Revision 1.11  2013/12/20 16:44:56  Brian_DCruz
//[p148394] CONTAIN\OMIT to use string comparison for DATEs under covers
//
//Revision 1.10  2013/12/19 23:08:47  Brian_DCruz
//[p155334] refactor FILTER logic to avoid hardcoded numbers
//
//Revision 1.9  2013/12/13 23:09:12  Brian_DCruz
//[p141034] refactor code to remove redefined vars, etc.
//
//Revision 1.8  2013/12/13 21:29:32  Brian_DCruz
//[p154829] UnValues maybe empty.
//
//Revision 1.7  2013/08/05 17:10:06  Israel_Schulman
//[p149960] Reset $MarkedForHighLight$ property on data rows to false when filters are cleared.
//
//Revision 1.6  2013/03/01 20:33:38  Brian_DCruz
//[p146862] return height and width of text
//
//Revision 1.5  2012/09/17 15:46:34  William_Forde
//[p96890] accidental use of "divnode" instead of local variable "obj".  Fix
//
//Revision 1.4  2012/08/22 20:08:13  William_Forde
//[p140925] if multiselect option, then redraw menu
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arfilter"]="$Revision: 20180312.0957 $";
(function() {
    if (typeof(window.ibiFilter) !== 'undefined') {
        return;
    }
    window.ibiFilter = {
        clearFilterForm:ClearFilterForm,
        clearFilter:ClearFilter,
        FilterHolderExpanded: false,
        localfilt:Localfilt,
        add_col_to_filter:Add_col_to_filter,
        add_val_to_filter:Add_val_to_filter,
        add_type_to_filter:Add_type_to_filter,
        filterBoxTable:FilterBoxTable,
        setFilterAndOr:SetFilterAndOr,
        executeFilt:ExecuteFilt,
        buildGlobal:build_global,
        GmobileWinOpened:false,
        gfwin:null,
        filterHolder: null,
        showFilterHolder: ShowFilterHolder,
        hideFilterHolder: HideFilterHolder,
        addToFilterHolder: AddToFilterHolder,
        toogleFilterHolder: ToogleFilterHolder,
        removeFromFilterHolder:RemoveFromFilterHolder,
        globalfilt:Globalfilt
    };

    function ToogleFilterHolder()
    {
        if(ibiFilter.FilterHolderExpanded)
            ibiFilter.hideFilterHolder();
        else
            ibiFilter.showFilterHolder();
    }

    function ShowFilterHolder() {
        var obj = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+'FILTERS');
        //var obj2 = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+'FILTERSCONTROL');
        if(this.filterHolder == null) {
            this.filterHolder = new arbox(0,0,"100%","100%");
            this.filterHolder.align = "vertical";
            obj.appendChild(this.filterHolder.buildComponent());
        }
        ibiFilter.FilterHolderExpanded = true;
        obj.style.display = "block";
        //obj2.style.display = "block";
    }

    function HideFilterHolder() {
        var obj = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+'FILTERS');
        ibiFilter.FilterHolderExpanded = false;
        obj.style.display = "none";
    }

    function AddToFilterHolder(newFilter) {
        var obj = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+'FILTERS');
        var obj2 = document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+'FILTERSCONTROL');
        var filterContainer = document.getElementById(newFilter.obj.divName);
        if(filterContainer == null)
            return;
        newFilter.addedToHolder = true;
        if(this.filterHolder == null) {
            this.filterHolder = new arbox(0,0,"100%","100%");
            this.filterHolder.align = "vertical";
            this.filterHolder.id = "forVert";
            this.filterHolder.overflow = "visible";
            obj.appendChild(this.filterHolder.buildComponent());
        }
        this.filterHolder.addElement(filterContainer);
        if(obj2)
        obj2.style.display = "block";
        //ibiFilter.showFilterHolder();
    }

    function RemoveFromFilterHolder(filter) {
        if(!filter.addedToHolder)
            return;
        filter.addedToHolder = false;
        var filterContainer = document.getElementById(filter.obj.divName);
        this.filterHolder.removeElement(filterContainer);
    }

function ClearFilterForm(table_number,redraw)
{
    var i;
    if(fb_win!=null) closewin(fb_win);
    fb_win=null;
    if(table_number==-1) {
        global_a_col_filter=[];
        gfilt = [];
        global_filterValues=[];
        for(i=0;i < MyTable.length;i++) {
            if(MyTable[i].deleted)
                continue;
            MyTable[i].filterChange = true;
            MyTable[i].redrawCharts =true;
        }
    } else {
        var mytable = getMyTable(table_number);
        if(mytable.a_cntl.Accordion) mytable.calcType = 2;
        else mytable.calcType = 0;
        mytable.a_col_filter=[];
        mytable.filt = [];
        mytable.filterValues = [];
        mytable.filterChange=true;
        mytable.redrawCharts =true;
        /*if(redraw) 
            mytable.clearSelection();*/
    }

    if(Events['onFilterChange'].callback!=null){
        Events['onFilterChange'].callback(table_number);
    }
    if(redraw){
        if(table_number!=-1) ibiGrid.show(false,mytable);
        else {
            for(i=0;i < MyTable.length;i++) {
                if(MyTable[i].deleted)
                    continue;
                ibiGrid.show(false,MyTable[i]);
            }
        }
    }
}
 
function ClearFilter(item,table_number,isglobal){
    var tn, mytable, a_col_filter, filterValues, i, numElems, filt;

    if (isglobal) {
        tn = -1;
        mytable = MyTable[0];
        a_col_filter = global_a_col_filter;
        filterValues = global_filterValues;
        filt = gfilt;
    } else {
        tn = table_number;
        mytable = MyTable[table_number];
        a_col_filter = mytable.a_col_filter;
        filterValues = mytable.filterValues;
        filt = mytable.filt;
    }

    if(mytable.a_all_cont) {
        for (i = 0, numElems = mytable.a_all_cont.length; i < numElems; i++) {
            mytable.a_all_cont[i]["$MarkedForHighLight$"] = false;
        }
    }

    if((item == -1)||(a_col_filter.length==1)) {
        if(isglobal) {
            ClearFilterForm(-1);
            MyTable[0].exeFilt(0,isglobal);
        } else {
            ClearFilterForm(table_number,true);
            if(mytable.a_cntl.Accordion) mytable.calcType = 2;
            else mytable.calcType = 0;
//            mytable.exeFilt(0,isglobal);
        }
    } else {
        delete filterValues[a_col_filter[item][0]];
        a_col_filter.splice(item, 1);
        filt.splice(item, 1);
    }

    if(Events['onFilterChange'].callback!=null){
        Events['onFilterChange'].callback(tn);
    }
    Add_col_to_filter(-1,0,table_number,0,true,isglobal);
    if(isglobal) {
        for (i = 0, numElems = MyTable.length; i < numElems; i++) {
            if (MyTable[i].deleted)
                continue;
            MyTable[i].filterChange = true;
            MyTable[i].redrawCharts = true;
            ibiGrid.show(false,MyTable[i]);
        }
    } else {
        mytable.filterChange = true;
        mytable.redrawCharts = true;
        ibiGrid.show(false,mytable);
        if(mytable.a_cntl.WindowDisplay=='tab')
            displayTab(mytable.a_cntl.WindowDisplay,table_number,-1);
    }
}

function ExecuteFilt(table_number,ftype,isglobal)
{
    var mytable=MyTable[table_number];
    var a_table_attache=[];
    if(fb_win!=null) closewin(fb_win);
    fb_win=null;
    if(isglobal) {
        var ttform = 'TTFORMG';
        var a_col_filter = global_a_col_filter;
        ge_form = [];
        for(var i=0; i < ibiCompound.drawObjectsList.length; i++) {
            ibiCompound.drawObjectsList[i].active = false;
        }
    }
    mytable.attachForm(isglobal);
    if((ftype==1)||(mytable.a_cntl.Accordion)) mytable.calcType = 2;
    else mytable.calcType = 0;
    mytable.exeFilt(ftype,isglobal);
    if(mytable.a_cntl.WindowDisplay=='tab')
        displayTab(mytable.a_cntl.WindowDisplay,table_number,-1);    
}

function clear_check_values(tn, isglobal, col, vs, filterType)
{
    var founds = [];
    var UnValues = (isglobal) ? global_filterValues : MyTable[tn].filterValues;
    if ((typeof(UnValues)=="undefined") || (UnValues.length == 0)) {
        return founds;
    }

    switch (filterType) {
        case arConstants.FILTER_CONTAIN_CS:
        case arConstants.FILTER_CONTAIN:
        case arConstants.FILTER_OMIT_CS:
        case arConstants.FILTER_OMIT:
            filterValueOption = 1;
            break;
        default:
            filterValueOption = 0;
            break;
    }

    for(var i = 0; i < UnValues[col][0].length; i++) {
        if (UnValues[col][filterValueOption][i] != vs) {
            UnValues[col][2][i]=false;
        } else {
            founds[founds.length] = vs;
        }
    }
    return founds;
}

function Add_val_to_filter(n_col,f_type,table_number,part,index,isglobal){
    var mytable = MyTable[table_number];
    var pos, a_col_filter, a_cols, win, UnValues;
    var multiequal = false;
    var redraw = true;
    var limit = (mytable.a_cntl.cacheMode) ? arConstants.RECLIMIT : 1000;
    if(isglobal) {
        a_col_filter = global_a_col_filter;
        a_cols = global_a_cols;
        win = ibiFilter.gfwin;
    } else {
        a_col_filter = mytable.a_col_filter;
        a_cols = mytable.a_cntl.a_cols;
        win = mytable.win;
    }
    var col = a_col_filter[n_col][0];
    if(isglobal)
        UnValues = MyTable[0].getAllUniqValues(a_cols[a_col_filter[n_col][0]].name,a_col_filter[n_col][2+part],true);
    else
        UnValues = mytable.getUniqValues(a_col_filter[n_col][0],a_col_filter[n_col][2+part],null,limit);
    if((a_col_filter[n_col][1] == arConstants.FILTER_IN) || 
       (a_col_filter[n_col][1] == arConstants.FILTER_NE) ||
       (a_col_filter[n_col][1] == arConstants.FILTER_NOTIN)){
        var l=inarray(a_col_filter[n_col][part+2],UnValues[3][index],true);
        pos=-1;
        if(l!=-1) {
            a_col_filter[n_col][part+2].splice(l,1);
            a_col_filter[n_col][part+4].splice(l,1);
            if(isglobal) global_filterValues[col][2][index]=false;
            else mytable.filterValues[col][2][index]=false;
        }
        else pos=a_col_filter[n_col][part+2].length;
        multiequal = true;
    } else {
        pos=0;
        a_col_filter[n_col][part+2]=[];
        a_col_filter[n_col][part+4]=[];
        for(var j=0;j<UnValues[0].length;j++)
            if(isglobal) global_filterValues[col][2][j]=false;
            else  mytable.filterValues[col][2][j]=false;
    }
    if(pos!=-1) { 
        a_col_filter[n_col][part+2][pos]=UnValues[3][index];
        a_col_filter[n_col][part+4][pos]=UnValues[1][index];
        if(isglobal) global_filterValues[col][2][index]=true;
        else mytable.filterValues[col][2][index]=true;
        if(!multiequal) redraw = false;
    }
    if(a_col_filter[n_col][7]!=-1){
        switch(a_col_filter[n_col][7]) {
            case arConstants.FILTER_IN:
            case arConstants.FILTER_NE:
            case arConstants.FILTER_NOTIN:
                if (!multiequal) { redraw = false; }
                break;
            default:
                if (multiequal) { redraw = false; }
                break;
        }
    }
    a_col_filter[n_col][7]=a_col_filter[n_col][1];
    //if(multiequal) {
        if(b_mobile && isglobal) 
            ibiIosGrid.build_Filtvals(mytable,n_col,win,isglobal,a_col_filter,part,index,redraw,ibiMenu.Gl_Item);
        else
            build_filtvals(mytable,n_col,win,isglobal,a_col_filter,part,index,redraw,ibiMenu.Gl_Item);

        if(fb_win!=null)
            if(!multiequal) {
                closewin(fb_win);
                fb_win=null;
            }

        if((mytable.showFilterFunc)&&(mytable.fullScreenOn)) mytable.showFilterFunc(mytable,win);
    //} else {
    //    Add_col_to_filter(a_col_filter[n_col][0],f_type,table_number,a_col_filter[n_col][2],false,isglobal);
    //    if(b_mobile) 
    //        ibiIosGrid.build_Filtvals(mytable,n_col,win,isglobal,a_col_filter,part,index,redraw,ibiMenu.Gl_Item);
    //}
}
 
function Add_type_to_filter(item,n_col,n_type,table_number,is_selectbox,removing,isglobal){
    Add_col_to_filter(n_col,n_type,table_number,is_selectbox,removing,isglobal);
}

function Add_col_to_filter(n_col,n_type,table_number,is_selectbox,removing,isglobal){
    var i, j, k, rc, colNum, priorFilterType, filterValues;
    var filter_dis,addop;
    var update = false;
    var obj;
    var mytable = MyTable[table_number];
    var ttform = (isglobal) ? 'TTFORMG' : 'TTFORM'+mytable.a_cntl.table_number;
    var andorval, vs, a_col_filter, a_cols, win;
 
    if(global_a_cols==null) build_global();
 
     switch (n_type) {
        case arConstants.FILTER_CONTAIN_CS: 
        case arConstants.FILTER_CONTAIN: 
        case arConstants.FILTER_OMIT_CS: 
        case arConstants.FILTER_OMIT:
            is_selectbox = false;
            break;
        default:
            is_selectbox = true;
            break;
    }
    if(isglobal) {
        a_col_filter = global_a_col_filter;
        a_cols = global_a_cols;
        win = ibiFilter.gfwin;
        filterValues = global_filterValues;
    } else {
        a_col_filter = mytable.a_col_filter;
        a_cols = mytable.a_cntl.a_cols;
        win = mytable.win;
        filterValues = mytable.filterValues;
    }
    if (typeof filterValues === "undefined" || filterValues.length === 0) {
        filterValues = [];
    }
     
    if(n_col>-1) {
        if(a_col_filter.length){
            for(i=0;i<a_col_filter.length;i++){
                colNum = a_col_filter[i][0];
                if (colNum == n_col) {
                    priorFilterType = a_col_filter[i][1];
                    a_col_filter[i][1] = n_type;
                    a_col_filter[i][2] = is_selectbox;
                    update = true;
                    if (((n_type != arConstants.FILTER_IN) &&
                         (n_type != arConstants.FILTER_NE) &&
                         (n_type != arConstants.FILTER_NOTIN) &&
                         (a_col_filter[i][3].length > 1)) 
                        || (a_col_filter[i][3].length == 1)) {
                        switch (priorFilterType) {
                            case arConstants.FILTER_CONTAIN_CS: 
                            case arConstants.FILTER_CONTAIN: 
                            case arConstants.FILTER_OMIT_CS: 
                            case arConstants.FILTER_OMIT:
                                for (k = 0; k < filterValues.length; ++k) { // put back int values
                                    if (filterValues[colNum][1][k] == a_col_filter[i][3][0]) {
                                        a_col_filter[i][3][0] = filterValues[colNum][0][k];
                                    }
                                }
                                break;
                        }
                        vs = (is_selectbox) ? a_col_filter[i][3][0] : a_col_filter[i][5][0];
                        a_col_filter[i][3] = clear_check_values(table_number, isglobal, colNum, vs, n_type);
                    } 
                    break;
                }
            }
        }
        if((!update)&&(removing!=true)) a_col_filter[a_col_filter.length] = [n_col,n_type,is_selectbox,[],[],[],[],-1];
    }
     if(isglobal) global_a_col_filter = a_col_filter;
    else mytable.a_col_filter = a_col_filter;
    if(isglobal && b_mobile) {
        ibiFilter.globalfilt(0);
        return;
    }
    if(mytable.filter_andor) 
        filter_dis = ibiMsgStr['ors'];
    else 
        filter_dis = ibiMsgStr['ans'];
    var foid = "ANDOR_FILTER"+mytable.a_cntl.table_number;
    if(isglobal) foid = "ANDOR_FILTERG";
    var filter_op = '<span id="'+foid+'">' + filter_dis+'<\/span>';
    var op_frm = '<form action="javascript:nop();"><table class="arFilter" id="FiltTable'+win+'" border=0 cellspacing=1 cellpadding=1><tr>';
        op_frm+= '<td style="height:8px;width:20px;"><\/td><td width="*"><\/td>';
        op_frm+= '<td width=120><\/td>';
        op_frm+= '<td width=200><\/td>';
        op_frm+= '<\/tr>';
    if(isglobal) addop = 'globalop';
    else addop = 'filtop'+mytable.a_cntl.table_number;
    var txtMeasurement = measureText(ibiMsgStr['add'], "arFilterButton");
    var awidth = txtMeasurement.width + 16;
    var close_form_html = '<tr><td style="height:10px" colspan="5"><\/td><\/tr><tr>';
        close_form_html+= '<td style="white-space:nowrap" colspan="4" align="right"><table cellspacing=0 cellpadding=1 border=0 width="100%"><tr>';
        if(isARBrowserExtension) {
            close_form_html+= '<td align="LEFT" width="110" style="white-space:nowrap;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiFilter.setFilterAndOr('+mytable.a_cntl.table_number+',0,'+isglobal+')&quot;)"><div nowrap class="arFilterButton" style="width:110px;">';
            close_form_html+= filter_op+'<\/div><\/td>';
            close_form_html+= '<td style="white-space:nowrap;width:'+awidth+'px;cursor:pointer" width="'+awidth+'"><div id="'+addop+'" class="arFilterButton" style="white-space:nowrap;width:'+awidth+'px;overflow:hidden;"><\/div><\/td>';
            close_form_html+= '<td width="*">&nbsp;<\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiFilter.executeFilt('+mytable.a_cntl.table_number+',1,'+isglobal+')&quot;)"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['flt']+'<\/div><\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiFilter.executeFilt('+mytable.a_cntl.table_number+',2,'+isglobal+')&quot;)"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['hlg']+'<\/div><\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="_ARExtensionCall(&quot;ibiFilter.clearFilter(-1,'+mytable.a_cntl.table_number+','+ isglobal +')&quot;)"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['cla']+'<\/div><\/td>';
        } else {
            close_form_html+= '<td align="LEFT" width="110" style="white-space:nowrap;cursor:pointer" onclick="ibiFilter.setFilterAndOr('+mytable.a_cntl.table_number+',0,'+isglobal+')"><div nowrap class="arFilterButton" style="width:110px;">';
            close_form_html+= filter_op+'<\/div><\/td>';
            close_form_html+= '<td style="white-space:nowrap;width:'+awidth+'px;cursor:pointer" width="'+awidth+'"><div id="'+addop+'" class="arFilterButton" style="white-space:nowrap;width:'+awidth+'px;overflow:hidden;"><\/div><\/td>';
            close_form_html+= '<td width="*">&nbsp;<\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="ibiFilter.executeFilt('+mytable.a_cntl.table_number+',1,'+isglobal+')"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['flt']+'<\/div><\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="ibiFilter.executeFilt('+mytable.a_cntl.table_number+',2,'+isglobal+')"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['hlg']+'<\/div><\/td>';
            close_form_html+= '<td width="90" style="white-space:nowrap;width:90px;cursor:pointer" onclick="ibiFilter.clearFilter(-1,'+mytable.a_cntl.table_number+','+ isglobal +')"><div class="arFilterButton" style="width:90px;">';
            close_form_html+= ibiMsgStr['cla']+'<\/div><\/td>';    
        }
        
        close_form_html+= '<\/tr><\/table><\/td><\/tr>';
        close_form_html+= '<\/FORM><\/table>';
 
    var UnValues = [];
    var attache_html = '';
    for (j = 0; j < a_col_filter.length; j++){
        txtMeasurement = measureText(a_filt_name[a_col_filter[j][1]], "arFilterItem");
        awidth = txtMeasurement.width;
        if(awidth<120) awidth=120;
        attache_html += '<tr class="arFilterItem"><td valign="middle" style="white-space:nowrap" width="17">';
        attache_html += '<div style="text-align:center;cursor:pointer;" ';
        if(isARBrowserExtension) {
            attache_html += 'title="'+ibiMsgStr['del']+'" onclick="_ARExtensionCall(&quot;ibiFilter.clearFilter('+j+','+mytable.a_cntl.table_number+','+ isglobal + ')&quot;)">';
        } else {
            attache_html += 'title="'+ibiMsgStr['del']+'" onclick="ibiFilter.clearFilter('+j+','+mytable.a_cntl.table_number+','+ isglobal + ')">';
        }
        attache_html += ibiSkin.delicon +'<\/div>';
        attache_html += '<\/td><td style="white-space:nowrap" valign="middle">';
        attache_html += '<span title="'+a_cols[a_col_filter[j][0]].dis+'">';
        attache_html += a_cols[a_col_filter[j][0]].name+'<\/span> ';
        attache_html += '<\/td><td style="white-space:nowrap">';

        attache_html += '<table border=0 width="'+(awidth+16)+'" cellspacing=2 cellpadding=0><tr><td align="right" width="'+(awidth)+'" style="white-space:nowrap;">';
		attache_html += '<Div class="arFilterItemDrowpDown" style="white-space:nowrap;text-align:left;width:'+awidth+'px;overflow:hidden;">'+a_filt_name[a_col_filter[j][1]]+'<\/Div><\/td>';
        attache_html += '<td style="white-space:nowrap" align="left" width="16"><Div id="ft'+win+'_'+j+'"><\/Div><\/td>';
        attache_html += '<\/tr><\/table><\/td>';

        if(a_col_filter[j][1] == arConstants.FILTER_BETWEEN || a_col_filter[j][1] == arConstants.FILTER_NOTBETWEEN ) {
            attache_html += '<td colspan=2><table border=0 cellspacing=0 cellpadding=0><tr>';
            attache_html +='<td valign="MIDDLE" rowspan=2><div style="width:8px">[<\/div><\/td>';
        }
        if(a_col_filter[j][2]){ // is_selectbox
            if(a_col_filter[j][3].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
            else {
                vs = a_col_filter[j][5][0];
                if(a_col_filter[j][3].length>1) vs = '*'+vs;
            }
            
            attache_html += '<td><span id="fboxi'+j+'"><table border=0 cellspacing=2 cellpadding=0><tr>';
            if (a_col_filter[j][1] != arConstants.FILTER_BETWEEN && a_col_filter[j][1] != arConstants.FILTER_NOTBETWEEN ) { 
                attache_html += '<td><div style="width:8px"><\/div><\/td>';
            }
			attache_html += '<td style="white-space:nowrap" ><div class="arFilterItemDrowpDown" style="width:170px;overflow:hidden;" id="ftpv'+win+'_1_'+j+'">'+vs+'<\/div>';
            attache_html += '<\/td><td style="white-space:nowrap" width=22><Div id="ftp'+win+'_1_'+j+'"><\/Div><\/td>';
            attache_html += '<\/tr><\/table><\/span><\/td>';
        }else{
            if(a_col_filter[j][3].length==0) vs = '';
            else vs = a_col_filter[j][3][0];
            attache_html += '<td><span id="fboxi'+j+'"><table cellspacing=0 cellpadding=0 border=0><tr>';
            attache_html += '<td><div style="width:10px"><\/div><\/td>';
            if(isglobal)
                attache_html += '<td><input type="text" name="'+j+'filtPatt1" onchange="global_a_col_filter['+j+'][3][0] = this.value" value="'+vs+'"><\/td>';
            else 
                attache_html += '<td><input type="text" name="'+j+'filtPatt1" onchange="MyTable['+mytable.a_cntl.table_number+'].a_col_filter['+j+'][3][0] = this.value" value="'+vs+'"><\/td>';
            attache_html += '<\/tr><\/table><\/span><\/td>';
        }
 
        if(a_col_filter[j][1] == arConstants.FILTER_BETWEEN || a_col_filter[j][1] == arConstants.FILTER_NOTBETWEEN ){
            attache_html += '<\/tr><tr>';
            if(a_col_filter[j][4].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
            else {
                vs = a_col_filter[j][6][0];
                if(a_col_filter[j][4].length>1) vs = '*'+vs;
            }
            attache_html += '<td><span id="fbox2i'+j+'"><table border=0 cellspacing=2 cellpadding=0><tr>';
			attache_html += '<td style="white-space:nowrap" ><div class="arFilterItemDrowpDown" style="width:170px;overflow:hidden;" id="ftpv'+win+'_2_'+j+'">'+vs+'<\/div>';
            attache_html += '<\/td><td style="white-space:nowrap" Width=22><Div id="ftp'+win+'_2_'+j+'"><\/Div><\/td>';
            attache_html += '<\/tr><\/table><\/span><\/td>';
        } 
        if(a_col_filter[j][1] == arConstants.FILTER_BETWEEN || a_col_filter[j][1] == arConstants.FILTER_NOTBETWEEN ) 
            attache_html += '<\/tr><\/Table><\/td>';
        attache_html += '<td width="*">&nbsp;<\/td><\/tr>';
    }

    pwn[win].dobj_b.innerHTML = op_frm+attache_html+close_form_html;
    pwn[win].dobj_a.style.width = pwn[win].dobj_b.offsetWidth+'px';
        build_filtmenu(mytable,isglobal);
    if(a_col_filter.length) {
        for (i = 0; i < a_col_filter.length; i++) {
            build_filttype(mytable,i,win,isglobal,a_col_filter);
            if (a_col_filter[i][2]) { // is_selectbox
                rc=build_filtvals(mytable,i,win,isglobal,a_col_filter,1);
                if(rc==-1) {
                    obj = d.getElementById('fboxi'+i);
                    if(a_col_filter[i][3].length==0) vs = '';
                    else vs = a_col_filter[i][3][0];
                    if(obj) obj.innerHTML = '<table cellspacing=0 cellpadding=0 border=0><tr>'+
                        '<td><div style="width:10px"><\/div><\/td>'+
                        '<td><input type="text" name="'+i+'filtPatt1" onchange="MyTable['+mytable.a_cntl.table_number+'].a_col_filter['+i+'][3][0] = this.value" value="'+vs+'"><\/td>'+
                        '<\/tr><\/table>';
                }
            }
            if(a_col_filter[i][1] == arConstants.FILTER_BETWEEN || a_col_filter[i][1] == arConstants.FILTER_NOTBETWEEN )
                if(a_col_filter[i][2]) { // is_selectbox
                    rc=build_filtvals(mytable,i,win,isglobal,a_col_filter,2);
                    if(rc==-1) {
                        obj = d.getElementById('fbox2i'+i);
                        if(a_col_filter[i][3].length==0) vs = '';
                        else vs = a_col_filter[i][3][0];
                        if(obj) obj.innerHTML = '<table cellspacing=0 cellpadding=0 border=0><tr>'+
                            '<td><div style="width:10px"><\/div><\/td>'+
                            '<td><input type="text" name="'+i+'filtPatt2" onchange="MyTable['+mytable.a_cntl.table_number+'].a_col_filter['+i+'][4][0] = this.value" value="'+vs+'"><\/td>'+
                            '<\/tr><\/table>';
                    }
                }
        }
    }
    if((mytable.showFilterFunc)&&(mytable.fullScreenOn)) mytable.showFilterFunc(mytable,win);
    maxwin(win);
}

function Globalfilt(table_number,toggle)
{
    if(global_a_cols==null) build_global();
    if(global_a_cols.length==0) return;
    var mytable = MyTable[table_number];
    var wind = 'globalfilt';
    var title = ibiMsgStr['gblf'];
    var win = findwin(wind);
    var newwin = true;
    if (win == -1) {
        win = getfreewin();
    } else {
        newwin = false;
    }
    if(!b_mobile) {
        if(win != -1) {
            var nnwin = 'windiv'+win;
            if(newwin) {
                setwin(win,wind,-1,typegbl,title);
                buildwin(win,title,mytable,false);
            } 
            ibiFilter.gfwin = win;
            Add_col_to_filter(-1,-1,table_number,0,0,1);
        }
    } else {
        if(global_a_cols==null) build_global();
        if((win != -1) && (newwin)) {
            ibiFilter.gfwin = win;
        }
        var obj = document.getElementById("ibiGlobalFilterDash");
        var ld=document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV);
        if(obj==null) {
            var bodyRef = d.getElementsByTagName('body')[0];
            var sty = "visible:none;position:absolute;top:0px;left:0px;z-index:100;";
            obj = d.createElement('div');
            obj.setAttribute('id','ibiGlobalFilterDash');
            obj.setAttribute(ibiclassName,'arDashboardBarGlobalMobile');
            if(b_ie) obj.style.setAttribute('cssText', sty, 0);
            else obj.setAttribute('style',sty);
            bodyRef.appendChild(obj);
            obj.style.top=ld.offsetHeight+'px';
        }
        if(!toggle) ibiFilter.GmobileWinOpened = true;
        else ibiFilter.GmobileWinOpened = !ibiFilter.GmobileWinOpened;
        if(ibiFilter.GmobileWinOpened) {
            var line='<div id="ibiGlobalFilterDashTab"><\/div>';
            line += '<div id="ibiGlobalFilterDashBody"><\/div>';
            obj.innerHTML = line;
            obj.style.visible="display";
            obj1 = document.getElementById("ibiGlobalFilterDashTab");
            obj2 = document.getElementById("ibiGlobalFilterDashBody");
            ibiIosGrid.DisplayFilterBody(obj2,1);
            ibiIosGrid.DisplayFilterTab(ibiFilter.gfwin,1,obj1);
        } else {
            obj.innerHTML="";
            obj.style.visible="none";        
        }
    }
}
 
function Localfilt(table_number)
{
    var mytable = MyTable[table_number];
    var wind = 'localfilt_'+table_number;
    var win = findwin(wind);
    var title=ibiMsgStr['fls'];
    if(MyTable.length>1) title += '&nbsp'+ibiMsgStr['frp'] + (table_number+1);
    var newwin = true;
    if (win == -1) { 
        win = getfreewin();
    } else { 
        newwin = false;
    }
 
    if(win != -1) {
        var nnwin = 'windiv'+win;
        if(newwin) {
            setwin(win,wind,table_number,typefilt,title);
            buildwin(win,title,mytable,false);
        }
        mytable.win = win;
        Add_col_to_filter(-1,-1,table_number,0,0,0);
    }
    if(mytable.a_cntl.WindowDisplay!='cascade')
        displayTab(mytable.a_cntl.WindowDisplay,mytable.a_cntl.table_number,win);
}
 
function build_global()
{
    var i, j=0;
    var a_cols = [];
    var count = [];
    global_a_cols =[];
    var nameArray=[];
    var x = 0;
    if(MyTable.length==1) return;
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
                nameArray[x] = a_cols[x].name;
                count[x] = 1;
            } else count[x]++;
        }
    }
    for (i = 0; i < a_cols.length; i++) {
        if((count[i]==MyTable.length)&&(mergefield!=a_cols[i].name)) 
            global_a_cols[global_a_cols.length]=CopyArray(a_cols[i]);
    }
    a_cols = [];
}

function SetFilterAndOr(table_number,show,isglobal){
    var mytable = MyTable[table_number];
    var andor, id, id2 = null, img, img2 = null;

    if (isglobal) {
        id = "ANDOR_FILTERG";
        andor = global_filter_andor;
    } else {
        id = 'ANDOR_FILTER' + mytable.a_cntl.table_number;
        andor = mytable.filter_andor;
        if (b_mobile) {
            id2 = 'ANDOR_FILTERF' + mytable.a_cntl.table_number;
            img2 = document.getElementById(id2);
        }
    }
    img = d.getElementById(id);
 
    if(show!=1) {
        if(andor==0) andor=1;
        else    andor=0;

    }
    if(isglobal) 
        global_filter_andor = andor;
    else
        mytable.filter_andor = andor;
    if(andor==1) img.innerHTML = ibiMsgStr['ors'];
    else        img.innerHTML = ibiMsgStr['ans'];
    if(img2) {
        if(andor==1) img2.innerHTML = ibiMsgStr['ors'];
        else        img2.innerHTML = ibiMsgStr['ans'];
    }   
}

var fb_win=null;
function FilterBoxTable(tablenumber,id,win,isglobal,part)
{
    var mytable = getMyTable(tablenumber);
    var nnwin = 'fb_'+tablenumber+'_'+id;
    var obj = null,notes_Win,nwin;
    var options=[];
    var nc=0;
    var fvalues;
    var acf = (isglobal) ? global_acf : mytable.acf[id];
    var col = acf[id][0];
    var flen,fstr;
    var checkmark;
    var title;
    if(isglobal) {
        title = global_a_cols[acf[id][0]].name;
        fvalues = global_filterValues[col];
    } else {
        title = mytable.a_cntl.a_cols[acf[id][0]].name;
        fvalues = mytable.filterValues[col];
    }
    var bcolor;
    if(fb_win==null) fb_win = getfreewin();

    if(fb_win!=-1) {
        nwin = 'win'+fb_win;
        setwin(fb_win,nnwin,tablenumber,typefiltersel,title);
        buildwin(fb_win,title,mytable,true,null,null,false);
        options[nc++] = "<TABLE style='border-style:solid;border-width:1px;' id='FiltSel"+fb_win+"' BGCOLOR='WHITE'>";
        flen = fvalues[0].length;
        for(var i=0; i<flen;i=i+4) {
            options[nc++] = "<TR>";
            for(var j=0;j<4;j++) {
                if((i+j)<flen) {
                    checkmark='';
                    bcolor = '';
                    if(fvalues[2][i+j]) {
                        checkmark=check_mark;
                        bcolor = "background-color:#A0A0A0;";
                    }
                    if((typeof(fvalues[1][i+j])!='string')||(fvalues[1][i+j].charAt(0)!='<'))
                        fstr =fvalues[1][i+j];
                    else
                        fstr =fvalues[0][i+j];
                    if ((fstr == '') || (fstr == ' ')) { fstr = '&nbsp;'; }
                    options[nc++]= "<TD width='25%' style='border-style: none;"+bcolor+"' id='fbt"+tablenumber+"v"+(i+j)+"'>"+
                        "<SPAN style='cursor:pointer;display:block;' onclick='ibiFilter.add_val_to_filter(" + id + "," + acf[id][1] + "," +
                        mytable.a_cntl.table_number+","+part+","+(i+j)+","+isglobal+");'>"+
                        fstr+'<span id="fb'+tablenumber+'v'+(i+j)+'">'+checkmark+'<\/span>'+
                        "<\/SPAN>"+
                        "<\/TD>";
                } else 
                options[nc++]= "<TD><\/TD>";
            }
            options[nc++]= "<\/TR>";
        }
        options[nc++]= "<\/TABLE>";
        pwn[fb_win].dobj_b.innerHTML=options.join('');
        maxwin(fb_win);
    }
}

function build_filtvals(mytable,id,win,isglobal,acf,part,row,redraw,item){
    var n_id = null,vs,ty;
    var pp=[],vsn={'val':null,'disp':null};
    var toolbr, toolbrv;
    var multiequal;
    var ck=0,line,cell,fid,cell2;
    var UnValues;
    var checkmark;
    var limit = (mytable.a_cntl.cacheMode) ? arConstants.RECLIMIT : 1000;
    if(item==null) redraw = false;
    var col = acf[id][0];

    switch (acf[id][1]) {
        case arConstants.FILTER_IN:
        case arConstants.FILTER_NE:
        case arConstants.FILTER_NOTIN:
            multiequal = true;
            break;
        default:
            multiequal = false;
            break;
    }

    if(isglobal) {
        if (typeof(global_filterValues[col]) == 'undefined') {
            global_filterValues[col] = mytable.getAllUniqValues(global_a_cols[acf[id][0]].name,acf[id][2+part],true,false,null,acf[id][1]);
        }
        mi_ftv = global_MI_FTV;
        UnValues = global_filterValues[col];
        global_acf = acf;
    } else {
        if(typeof(mytable.filterValues)=='undefined') mytable.filterValues=[];
        if(typeof(mytable.acf)=='undefined') mytable.acf=[];
        if (typeof(mytable.filterValues[col]) == 'undefined') {
            mytable.filterValues[col] = mytable.getUniqValues(acf[id][0],acf[id][2+part],null,limit,null,acf[id][1]);
        }
        mi_ftv = mytable.MI_FTV;
        UnValues = mytable.filterValues[col];
        mytable.acf[id] = acf;
    }
    //if(redraw) UnValues[2][row] = !UnValues[2][row]; 
    if(UnValues[0].length<=mytable.maxFilterDropLines) {
        if(!redraw) {
            if(typeof(mi_ftv[id])=="undefined")mi_ftv[id]=[];
            mi_ftv[id][part-1]=[];
            mi_ftv[id][part-1][0] = [{'name':ibiSkin.dropicon,'dis':null,'showback':true},null, null];
            var ul = UnValues[0].length;
            for(var i=0;i<ul;i++) {
                ty = typeof(UnValues[1][i]);
                pp=[];
                if((ty!='string')||(UnValues[1][i].charAt(0)!='<'))
                    pp[0] =UnValues[1][i];
                else
                    pp[0] =UnValues[0][i];
                pp[1]=(UnValues[2][i]?1:0);
                mi_ftv[id][part-1][0][3+i]=[pp,null,{'ms':multiequal,'ocv':'addvaltofilter','oc' : 'ibiFilter.add_val_to_filter('+id+','+acf[id][1]+','+mytable.a_cntl.table_number+','+part+','+i+','+isglobal+')'}];
            }
            fid = 'ftp'+win+'_'+part+'_'+id;
            toolbr = d.getElementById(fid);
            
            if(toolbr) {
                var MP_copy = ibiStd.copyObject(MP_FTV);
                MP_copy[0].css = {};
                pwn[win].ftp[part-1][id] = ibiMenu.Menu(mi_ftv[id][part-1],MP_copy,toolbr,mytable,null,n_id,fid);
            }
        } else {
            ty = typeof(UnValues[1][row]);
            pp=[];
            if((ty!='string')||(UnValues[1][row].charAt(0)!='<'))
                pp[0] = UnValues[1][row];
            else
                pp[0] = UnValues[0][row];
            pp[1]=(UnValues[2][row]?1:0);
            cell = d.getElementById(item.s_opt.textid);
            if(cell) {
                mi_ftv[id][part-1][0][3+row]=[pp,null,{'ms':multiequal,'ocv':'addvaltofilter','oc' : 'ibiFilter.add_val_to_filter('+id+','+acf[id][1]+','+mytable.a_cntl.table_number+','+part+','+row+','+isglobal+')'}];
                if(pp[1]) line = '<span>'+check_mark+'<\/span>';
                else line = '&nbsp;';
                cell.innerHTML=line;
            } 
        }
    } else
    if(UnValues[0].length<=mytable.maxFilterOptions) {
        fid = 'ftp'+win+'_'+part+'_'+id;
        toolbr = d.getElementById(fid);
        var popm='<div '+
            'style="cursor:pointer;" '+
            'onclick="ibiFilter.filterBoxTable('+mytable.a_cntl.table_number+',\''+id+
            '\','+win+','+isglobal+','+part+')">'+ibiSkin.dropicon+'<\/div>';
        if(toolbr) toolbr.innerHTML=popm;
        if(redraw) {
            cell = d.getElementById("fb"+mytable.a_cntl.table_number+"v"+row);
            cell2 = d.getElementById("fbt"+mytable.a_cntl.table_number+"v"+row);
            checkmark = '';
            if(UnValues[2][row]) checkmark = check_mark;
            if(cell) cell.innerHTML = checkmark;
            if(cell2) {
                if(checkmark=='') cell2.style.backgroundColor='';
                else cell2.style.backgroundColor = "#A0A0A0";
            }
        } else {
            if((fb_win!=null)&&(fb_win!=-1)){
                if(!multiequal) closewin(fb_win);
                else {
                    var obj = document.getElementById('FiltSel'+fb_win);
                    if(obj) ibiFilter.filterBoxTable(mytable.a_cntl.table_number,id,win,isglobal,part);
                }
            }
        }
    } else return -1;
    fid = 'ftpv'+win+'_'+part+'_'+id;
    toolbrv = d.getElementById(fid);
    if(acf[id][part+2].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
    else {
        vs = acf[id][part+4][0];
        if ((typeof vs === "string") && (vs.trim().length === 0)) { vs = '&nbsp;'; }
        if(acf[id][part+2].length>1) vs = '*'+vs;
    }
    if(toolbrv) toolbrv.innerHTML = vs;
    return 0;
}

    function build_filttype(mytable,id,win,isglobal,acf){
        var n_id = null,fid;
        var MI_FT = [];
        MI_FT[0] = [ibiSkin.dropicon,null, null];
        for(var i=0;i<a_filt_types.length;i++)
            MI_FT[0][3+i] = [[a_filt_types[i][0]],null,{'ocv':'addtypetofilter','oc' : 'ibiFilter.add_type_to_filter(null,'+acf[id][0]+','+a_filt_types[i][1]+','+mytable.a_cntl.table_number+','+acf[id][2]+','+false+','+isglobal+')'}];
        fid = 'ft'+win+'_'+id;
        var toolbr = d.getElementById(fid);
        if(toolbr) {
            var MP_copy = ibiStd.copyObject(MP_FT);
            MP_copy[0].css = {};
            pwn[win].ftm[id] = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,fid);
        }
    }

})();
