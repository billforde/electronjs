/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arapi.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180227 1508 wjf 200246 AHML: Unify JSON output
* 180227 1156 wjf 200246 AHML: Unify JSON output
* 180226 1934 wjf 200246 AHML: Unify JSON output
* 180226 1052 wjf 200246 AHML: Unify JSON output
* 180222 1518 wjf 200246 AHML: Unify JSON output
* 180222 1046 wjf 200246 AHML: Unify JSON output
* 180220 1620 wjf 200246 AHML: Unify JSON output
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 180125 1534 wjf 198189 Vis : Filter : Restore lasso 2nd level hierarchy filter, di
* 171122 2046 wjf 188889 Vis: Run time menu - Remove filter icon not working
* 170821 1938 wjf 193520 MAG:Displays incorrect tool tip when hovering over sub menu
* 170804 1307 bjd 190666 NLV: A string, "MISSING" needs to be extracted for translat
* 170630 1412 wjf 192245 Visualization:Extra Vertical and Horizontal bar is displaye
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170530 1310 wjf 191420 Vis:Single Drill is not being added to Tooltip menu when in
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 161220 1814 wjf 180329 As a user I want to group dimension values through the repo
* 161201 1244 wjf 186934 With Info Assist+ The Sales by Country and Product Fex in R
* 160930 1100 wjf 185264 Vis: Value 'All' displayed in Prompt type to "List(Single s
* 160915 1507 wjf 183084 AHTML: Filtering on a Bar Chart with a DATE field as BY, do
* 160902 1235 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160902 1149 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160831 1820 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160809 1103 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160610 1256 hms 180534 Remove tab characters from source files
* 160502 0955 wjf 180091 Running an active report with Multi source tree control thr
* 160407 2343 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 1113 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160325 0921 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160324 1629 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160323 1723 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160323 0942 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160322 1528 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 1519 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 1142 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160316 1649 wjf 178484 Slider prompt does not shows properly on canvas
* 160314 1513 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160312 1641 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160302 1136 iys 177738 Vis:Filter prompt does not work after drilldown.
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160225 1059 wjf 176951 Unable to "Drill Up" in Run mode
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160110 1152 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151229 1646 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151209 1246 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 150805 1150 wjf 170326 CLONE - iDis does not show FOCUS errors
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150513 1251 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150508 1017 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150506 2040 wjf 167336 AHTML: Display filters created from chart
* 150402 1150 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150225 1025 wjf 164530 AHTML: IDIS: sort on controls not working properly
* 150203 1528 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150126 1020 wjf 164016 AHTML: API: allow filter sort order to be changed
* 141119 0901 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141119 0753 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141118 1341 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141030 1505 wjf 134795 Active Visualization
* 141029 1722 wjf 134795 Active Visualization
* 140930 1204 wjf 134795 Active Visualization
* 140924 1042 wjf 134795 Active Visualization
* 140918 1720 wjf 134795 Active Visualization
* 140918 1241 wjf 134795 Active Visualization
* 140905 1417 wjf 134795 Active Visualization
* 140905 1346 wjf 134795 Active Visualization
* 140729 1603 wjf 134795 Active Visualization
* 140729 1303 wjf 134795 Active Visualization
* 140714 1604 wjf 134795 Active Visualization
* 140703 1914 wjf 134795 Active Visualization
* 140703 1027 wjf 134795 Active Visualization
* 140624 1114 wjf 134795 Active Visualization
* 140624 0948 wjf 134795 Active Visualization
* 140621 2256 wjf 159606 AHTML/FLEX Add support for Not BETWEEN to filter controls
* 140620 1745 wjf 134795 Active Visualization
* 140618 1842 wjf 134795 Active Visualization
* 140616 1109 wjf 134795 Active Visualization
* 140611 1015 wjf 134795 Active Visualization
* 140606 0952 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
// ==ClosureCompiler==
// @language ECMASCRIPT5
// ==/ClosureCompiler==
//$Revision: 1.56 $
//$Log: arapi.js,v $
//Revision 1.56  2014/05/28 16:31:45  William_Forde
//[p134795] Apply aggregation when getting the list of values for filter controls.
//
//Revision 1.55  2014/05/19 22:56:26  William_Forde
//[p134795] more fixes for api
//
//Revision 1.54  2014/05/19 16:31:50  William_Forde
//[p134795] fix issue with fully qualified field name not being parse correctly in the api.
//
//Revision 1.53  2014/05/08 14:25:20  William_Forde
//[p134795] fix issue with filter's dropdown menu not working after switching filter type from menu.
//
//Revision 1.52  2014/04/21 22:19:23  William_Forde
//[p134795] Allow filter handle to return "type".  Also if filterHandle.type is set, it will switch the filter control to that type.
//
//Revision 1.51  2014/04/10 19:25:06  William_Forde
//[p134795]  When switching pages, all containers from the previous page is no longer valid, so we need to check before trying to display the chart/grid.
//
//Revision 1.50  2014/04/10 14:15:41  William_Forde
//[p134795] Fix javascript error due to the fact that even if you delete an object from an array, any reference to that object will remain.
//
//Revision 1.49  2014/04/10 00:50:24  William_Forde
//[p134795] Fix more issues with switching pages causing errors.
//
//Revision 1.48  2014/04/10 00:41:20  William_Forde
//[p134795] Add workaround to fix issue with addJsonReport being called with a div that is already in use, we now switch automatically to an updateJsonReport so that we dont end up with multiple copies of charts in memory.
//
//Revision 1.47  2014/04/08 17:49:08  William_Forde
//[p134795] Fix issue with filter, when ":BY...." is added to dataColumn.
//
//Revision 1.46  2014/04/01 13:38:29  William_Forde
//[p134795] Allow font, color, size to be set through the api.
//
//Revision 1.45  2014/03/26 20:37:22  William_Forde
//[p134795] fix chainSibling method to correctly handle adding node to doublely linked list.
//
//Revision 1.44  2014/03/26 16:21:29  William_Forde
//[p134795] additional change
//
//Revision 1.43  2014/03/26 16:18:23  William_Forde
//[p134795] if we are passed in a div object, then we dont need to look it up, just use it.
//
//Revision 1.42  2014/03/26 15:08:23  William_Forde
//[p134795] Chain the filter (for demo only).  Should fix some filtering issues.
//
//Revision 1.41  2014/03/26 00:01:18  William_Forde
//[p134795] fix javascript warnings
//
//Revision 1.40  2014/03/25 22:27:42  William_Forde
//[p134795] For demo, set all filter controls to active.
//
//Revision 1.39  2014/03/25 04:02:58  William_Forde
//[p134795] Add chainSibling method.
//
//Revision 1.38  2014/03/25 02:17:24  William_Forde
//[p134795] Alllow filterSibling and filterParent to be set.
//
//Revision 1.37  2014/03/07 20:57:23  William_Forde
//[p134795][>branch8100] Add dummy mytable entry when delete report using the api.
//
//Revision 1.36  2014/03/07 05:09:45  William_Forde
//[p134795][>branch8100]  add deleted property to handle with the default value of false.
//
//Revision 1.35  2014/03/06 20:11:22  William_Forde
//[p134795][>branch8100] Track all filter and report handles so that we can mark them as deleted.
//
//Revision 1.34  2014/03/05 20:22:55  William_Forde
//[p134795][>branch8100] Fix issue with chart not filtering when field is not used in report but is part of the "dataReport". Fix slider api not setting the default values properly.
//
//Revision 1.33  2014/03/04 16:43:39  William_Forde
//[p154876][>branch8100] If api isued to create filter object, default width to 100%
//
//Revision 1.32  2014/03/03 19:43:21  William_Forde
//[p134795][>branch8100]Add  method clearActiveReport to reinitialize all active objects.
//
//Revision 1.31  2014/02/21 18:40:42  William_Forde
//[p134795][>branch8100] Make sure iconBox is removed before we rebuild the filter components.
//
//Revision 1.30  2014/02/19 16:43:14  William_Forde
//[p134795][>branch8100] add constants to filter object for list of conditions
//
//Revision 1.29  2014/02/19 15:41:00  William_Forde
//[p134795][>branch8100] add onFilterChange callback
//
//Revision 1.28  2014/02/13 15:28:15  William_Forde
//[p134795][>branch8100] Add deleteJsonReport method to remove Active Report object.
//
//Revision 1.27  2014/02/10 15:10:20  William_Forde
//[p134795][>branch8100] allow api to create slider
//
//Revision 1.26  2014/02/03 23:51:54  William_Forde
//[p134795][>branch8100]  Auto resize charts if they are created through the api.
//
//Revision 1.25  2014/01/30 20:16:05  William_Forde
//[p134795][>branch8100] When calling deleteFilter, trigger a refresh of associated reports.
//
//Revision 1.24  2014/01/30 15:03:55  William_Forde
//[p134795] In case of emptyreport (0 records) in json, create empty t_cont.
//
//Revision 1.23  2014/01/15 15:42:27  William_Forde
//[p134795] Allow api to override aricon onclick function.
//
//Revision 1.22  2014/01/14 15:01:33  William_Forde
//[p134795] add showMenu and showSearch option to  filters so that icons can be hidden.
//
//Revision 1.21  2013/12/13 21:24:23  William_Forde
//[p134795] Allow setter/getter to not cause syntax error on ie8
//
//Revision 1.20  2013/12/12 19:12:38  William_Forde
//[p134795] add getNumOfReports method to activereport object to return the number of current reports defined.
//
//Revision 1.19  2013/12/12 18:37:21  William_Forde
//[p134795] Fix issues with reseting defaultValues not updating the filter control upon refresh.
//
//Revision 1.18  2013/12/06 21:23:57  William_Forde
//[p134795] if showTitle is OFF, then dont show title.
//
//Revision 1.17  2013/12/06 15:48:19  William_Forde
//[p134795] rename delete to deleteFilter.  Added language version to fix issue wit compiler.
//
//Revision 1.16  2013/12/06 13:47:29  William_Forde
//[p134795] Add delete option to filter object.
//
//Revision 1.15  2013/12/05 21:16:54  William_Forde
//[p134795] Updated api to support refresh and not use json to create filter objects.
//ex:
//
//var ar = new activeReport();
//var filter = ar.newFilterList(); //other optios: newFilterRadioButton, newFilterComboBox,newFilterSlider,newFilterVSlider,newFilterTextInput,newFilterCheckBox
//        filter.dataReport = 'MYCACHE';
//        filter.dataColumn = 'COUNTRY';
//        filter.visible = true;
//        filter.filterTarget = '*';
//        filter.showTitle = "ON";
//        filter.defaultValues = ['JAPAN','ENGLAND'];
//        ar.addFilterObject(filter,"filtercontrol");
//        filter.refresh();
//        filter.apply() ;
//
//Revision 1.14  2013/11/19 01:00:59  William_Forde
//[p134795] add missing semicolon
//
//Revision 1.13  2013/11/15 00:47:13  William_Forde
//[p134795] Fix report(s) array. Initial return of filter object api.
//
//Revision 1.12  2013/11/13 20:18:38  William_Forde
//[p134795] Add array _reports to handle returned from addJSONreport so that tdg chart handle._reports[0]._chart can be accessed.
//
//Revision 1.11  2013/04/27 13:12:57  William_Forde
//[p134795] Allow for hidden reports to be created without needing a container.
//
//Revision 1.10  2013/04/15 19:53:39  William_Forde
//[p148406] Fix index in updateJsonReport
//
//Revision 1.9  2013/04/15 15:23:42  William_Forde
//[p148406] Add two new method to the api, addJsonReport and updateJsonReport.
//
//Revision 1.8  2012/09/29 20:33:38  William_Forde
//[p142247] make sure we properly increment level when the column is labeled as a by.
//
//Revision 1.7  2012/09/25 20:23:18  William_Forde
//[p141833][>branch8001] Add showMenuBar so that we display the menu like we use to.  Need to add option later to switch this value.
//
//Revision 1.6  2012/08/22 01:08:07  William_Forde
//[p140894] Missing mobile menu file.  If launched from api dont enable fullscreen mode.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arapi"]="$Revision: 20180227.1508 $";
var ApiEnableGlobal=true;
var Events=[];
Events['onclick']={'type':'onclick','callback':null,'tables':[]};
Events['onColumnSelect']={'type':'onColumnSelect','callback':null,'tables':[]};
Events['onFilterChange']={'type':'onFilterChange','callback':null,'tables':[]};
Events['onLayoutChange']={'type':'onLayoutChange','callback':null,'tables':[]};
Events['onColumnHide']  ={'type':'onColumnHide','callback':null,'tables':[]};

(function() {

    if (typeof window.apiCont !== 'undefined') {
        return;
    }

    window.apiCont = {
        GRID:1,
        GRIDCOLUMN:2,
        GRIDHEADER:3,
        COLOR:50,
        SIZE:51,
        FONT:52,
        BACKCOLOR:53,
        BACKCOLORS:54,
        HEADERCOLOR:100,
        HEADERSIZE:101,
        HEADERFONT:102,
        MENUBORDER:200,
        MENUSELOUT:201,
        MENUSELOVER:202,
        PIECHART : 0,
        LINECHART : 1,
        BARCHART : 2,
        SCATTERCHART : 3,
        ROLLUP : 4,
        PIVOT : 5,
        CALC_SUM :'SUM',
        CALC_MIN :'MIN',
        CALC_MAX :'MAX',
        CALC_AVERAGE :'AVG',
        CALC_COUNT :'COU',
        CALC_CONTDISTINCT:'DIS',
        handleList:[],
        filterHandles:[]
    };
})();


(function() {
    if (typeof(window.ibiApiReportObj) !== 'undefined') {
        return;
    }

    window.ibiApiReportObj = {
        getColumns:APIgetColumns,
        getColumnValues:APIgetColumnValues,
        delFilters:APIdelFilters,
        addFilter:APIaddFilter,
        setReportType:APIsetReportType,
        getFilterTypes:APIgetFilterTypes,
        getNumOfReports:APIgetNumOfReports,
        getMenuOptionsNames:APIgetMenuOptionsNames,
        getReportTypes:APIgetReportTypes,
        getNumOfRecords:APIgetNumOfRecords,
        getLinesPerPage:APIgetLinesPerPage,
        setLinesPerPage:APIsetLinesPerPage,
        getCurrentPage:APIgetCurrentPage,
        setGraphEngine:APIsetGraphEngine,
        setCurrentPage:APIsetCurrentPage,
        getSortCol:APIgetSortCol,
        getSortOrderType:APIgetSortOrderType,
        sortCol:APIsortCol,
        show:APIshow,
        getEventList:APIgetEventList,
        setEventHandle:APIsetEventHandle,
        addUserMenu:APIaddUserMenu,
        setXaxis:APIsetXaxis,
        setYaxis:APIsetYaxis,
        addArReport:APIaddArReport,
        setArReportData:APIsetArReportData,
        disableGlobal:APIdisableGlobal,
        enableGlobal:APIenableGlobal,
        addToReport:APIaddToReport,
        addJsonReport:APIaddJsonReport,
		saveJsonReport: APIsaveJsonReport,
        addFilterObject:APIaddFilterObject,
        deleteFilterObject:APIdeleteFilterObject,
        updateFilterObject:APIupdateFilterObject,
        newFilterJson:APInewFilterJson,
        newFilterList:APInewFilterList,
        newFilterCheckBox:APInewFilterCheckBox,
        newFilterDummy:APInewFilterDummy,
        newFilterRadioButton:APInewFilterRadioButton,
        newFilterTextInput:APInewFilterTextInput,
        newFilterComboBox:APInewFilterComboBox,
        newFilterVSlider:APInewFilterVSlider,
        newFilterSlider:APInewFilterSlider,
        clearActiveReport:APIclearActiveReport,
        updateJsonReport:APIupdateJsonReport,
		deleteJsonReport:APIdeleteJsonReport,
		getFilter:APIgetFilter,
		findFilterById: APIfindFilter,
		originalJson: null
    };
    

	function APIgetFilter(name) {
		if(typeof ibiCompound.drawObjectsPtr[name] != "undefined")
			return ibiCompound.drawObjectsPtr[name];
		return null;
	}

    function APIgetNumOfReports()
    {
        return MyTable.length;
    }

    function APIgetColumns(t_num) {
        var cols=[];
        for(var i=0; i < MyTable[t_num].a_capt.length; i++) {
            cols[i] = {'name':MyTable[t_num].a_cntl.a_cols[i].name,
                'isby':MyTable[t_num].a_capt[i].isby?true:false,
                'isnoprint':MyTable[t_num].a_capt[i].noprint?true:false,
                'type':MyTable[t_num].a_capt[i].type
                };
        }
        return cols;
    }

    function APIgetColumnValues(t_num,col) {
        var ca=[],res=null;
    
        if(t_num!=-1) {
            var n_col = -1;
            for(var j=0; j < MyTable[t_num].n_cols; j++)
                if(MyTable[t_num].a_cntl.a_cols[j].name == col) n_col = j;
            res=MyTable[t_num].getUniqValues(n_col,ca,res,false);
        } else res=MyTable[t_num].getAllUniqValues(col,ca,false);
        return res;
    }

    function APIsetGraphEngine(rtype)
    {
        arGraphEngine = rtype*1;
    }

    function APIdelFilters(t_num,reset) {
        var mytable = MyTable[t_num];
        mytable.ap_col_filter = [];
        mytable.apfilt=[];
        mytable.filterChange = true;
        if(reset) ibiGrid.show(false,mytable);
        //clearFilterForm(t_num,reset);
    }

    function APIaddFilter(t_num,fcol,ftype,fvalue,fvalue2) {
        var coln=-1;
        for(var i=0; i < MyTable[t_num].a_cntl.a_cols.length; i++)
            if(fcol == MyTable[t_num].a_cntl.a_cols[i].name) coln = i;
        if(MyTable[t_num].ap_col_filter==null) MyTable[t_num].ap_col_filter = [];
        i = MyTable[t_num].ap_col_filter.length;

        MyTable[t_num].ap_col_filter[i] = [];
        MyTable[t_num].ap_col_filter[i][0] = coln;
        MyTable[t_num].ap_col_filter[i][1] = ftype;
        if((ftype==8)&&(typeof(fvalue2)=='undefined')) {
            if(typeof(fvalue)=='object') {
                fvalue2 = fvalue[1];
                fvalue = fvalue[0];
            }
        }
        if(typeof(fvalue)!='object') {
            MyTable[t_num].ap_col_filter[i][3] = [fvalue];
            MyTable[t_num].ap_col_filter[i][5] = [fvalue];
        } else {
            MyTable[t_num].ap_col_filter[i][3] = fvalue;
            MyTable[t_num].ap_col_filter[i][5] = fvalue;
        }

        if(typeof(fvalue2)=='undefined')
            MyTable[t_num].ap_col_filter[i][4] = null;
        else
        if(typeof(fvalue2)!='object') {
            MyTable[t_num].ap_col_filter[i][4] = [fvalue2];
            MyTable[t_num].ap_col_filter[i][6] = [fvalue2];
        } else {
            MyTable[t_num].ap_col_filter[i][4] = fvalue2;
            MyTable[t_num].ap_col_filter[i][6] = fvalue2;
        }
        MyTable[t_num].filterChange = true;
        MyTable[t_num].attachForm(false,4);
    }

    function APIsetReportType(t_num,rtype)
    {
        if((rtype>0)&&(rtype<7))
            MyTable[t_num].a_cntl.reportView = rtype*1;
    }

    function APIgetFilterTypes() {
        var opts = new Array();
        for(var i=0; i < a_filt_types.length; i++)
            opts[i] = {'name':a_filt_types[i][0],'value':a_filt_types[i][1]};
        return opts;
    }

    function APIgetMenuOptionsNames() {
        var opts = new Array();
        return opts;
    }

    function APIgetReportTypes() {
        var opts = new Array();
        opts[0]={'name':ibiMsgStr['crtgrid'],'value':1};
        opts[1]={'name':ibiMsgStr['crtpvt'],'value':2};
        opts[2]={'name':ibiMsgStr['crtbar'],'value':4};
        opts[3]={'name':ibiMsgStr['crtline'],'value':5};
        opts[4]={'name':ibiMsgStr['crtpie'],'value':6};
        return opts;
    }

    function APIgetNumOfRecords(t_num)
    {
        if(MyTable[t_num].haveFilters)
            return MyTable[t_num].a_filter_body.length;
        else
            return MyTable[t_num].a_cntl.NumRecords;
    }

    function APIgetLinesPerPage(t_num)
    {
        return MyTable[t_num].o_paging.c;
    }

    function APIsetLinesPerPage(t_num,lp)
    {
        MyTable[t_num].o_paging.n = lp;
    }

    function APIgetCurrentPage(t_num)
    {
        return MyTable[t_num].o_paging.c+1;
    }

    function APIsetCurrentPage(t_num,p)
    {
        MyTable[t_num].o_paging.c=(p-1);
    }

    function APIgetSortCol(t_num)
    {
        var s = new Object();
        var os;
        if((typeof(MyTable[t_num].a_sort)=='undefined')||(MyTable[t_num].a_sort.length==0)) return null;
        os = ibiMsgStr['sas'];
        if(a_sort[0].n_ord) os = ibiMsgStr['sds'];
        s = {'column':MyTable[t_num].a_cntl.a_cols[a_sort[0].n_col].name,'order':a_sort[0].n_ord,
            'orderString':os};
        return s;
    }

    function APIgetSortOrderType() {
        var opts = new Array();
        opts[0] = {'name':ibiMsgStr['sas'],'value':0}; 
        opts[1] = {'name':ibiMsgStr['sds'],'value':1};
        return opts;
    }

    function APIsortCol(t_num,col,direct,dontShow)
    {
        var coln=-1;
        var dShow;
        if(typeof(dontShow)=='undefined') dShow=false;
        else dShow = dontShow;
        for(var i=0; i < MyTable[t_num].a_cntl.a_cols.length; i++)
            if(col == MyTable[t_num].a_cntl.a_cols[i].name) coln = i;
        if(coln!=-1) MyTable[t_num].exeSort(coln,direct,dShow);
    }

    function APIshow(t_num) {
        ibiGrid.show(false,MyTable[t_num]);
    }

    function APIgetEventList()
    {
        var opts = new Array();
        for(var i in Events) {
            if(typeof(Events[i])=='function') continue;
            opts[opts.length] = Events[i].type;
        }
        return opts;        
    }

    function APIsetEventHandle(t_num,eventType,callback)
    {
        Events[eventType].callback=callback;
        Events[eventType].tables[Events[eventType].tables.length]=t_num;
    }

    function APIaddUserMenu(t_num,text,funcstr)
    {
        var mytable = MyTable[t_num];
        if(!mytable.a_cntl.usermenus) mytable.a_cntl.usermenus=[];
        mytable.a_cntl.usermenus[mytable.a_cntl.usermenus.length]={'title':text,'url':'J'+funcstr,'target':null};
    }

    function APIsetYaxis(t_num,x_cols)
    {
        var mytable = MyTable[t_num];
        var xc = [];
        var col;

        if(typeof(x_cols)=='object') xc = x_cols;
        else xc[0] = x_cols;
        mytable.chartinfo.saveable.x_cols = [];
        mytable.chartinfo.xars=null;
        for(var j=0; j<xc.length; j++) {
            for(var i=0; i < mytable.a_cntl.a_cols.length; i++)
                if(xc[j] == mytable.a_cntl.a_cols[i].name) col = i;
            mytable.chartinfo.saveable.x_cols[j] = col;
        }
    }
    
    

    function APIsetXaxis(t_num,y_cols)
    {
        var mytable = MyTable[t_num];
        var yc = [];
        var col;

        if(typeof(y_cols)=='object') yc = y_cols;
        else yc[0] = y_cols;
        mytable.chartinfo.saveable.y_cols = [];
        mytable.chartinfo.xars=null;
        for(var j=0; j<yc.length; j++) {
            for(var i=0; i < mytable.a_cntl.a_cols.length; i++)
                if(yc[j] == mytable.a_cntl.a_cols[i].name) col = i;
            mytable.chartinfo.saveable.y_cols[j] = col;
        }
    }

    function APIaddArReport(ArString,dontShow,usediv)
    {
        eval(ArString);
        var resize = false;
        this.reportString = ArString;
        var tn = NumOfTable;
        if(usediv) 
            resize = true;
        genTables(dontShow,usediv,null,null,null,resize);
        return tn;
    }
    
	function APIupdateJsonReport(iJsonObj)
    {
        var i;
		var pn;
		var JsonObj = iJsonObj;
        //this.deleteJsonReport();
        //window.apiCont.handleList[this.id].deleted = false;
		this.originalJson = ibiStd.copyObject(iJsonObj);
        $AR.originalJson = this.originalJson;
        if(JsonObj.info) {
            if(JsonObj.info.revision == "1.0") {
                if(typeof usediv == "undefined")
                    fullReport = true;
                var newObj = convertJsonToOldv1(iJsonObj);
                JsonObj = newObj;

            }
        }
        for(i=this.mytableStart; i<this.mytableEnd+1; i++) {
            t_T_capt[i] = JsonObj.reports[i-this.mytableStart].t_T_capt;
            T_capt[i] = JsonObj.reports[i-this.mytableStart].T_capt;
            if(typeof(JsonObj.reports[i-this.mytableStart].T_cont)=="undefined")
                T_cont[i] = [];
            else
                T_cont[i] = JsonObj.reports[i-this.mytableStart].T_cont;
            T_look[i] = JsonObj.reports[i-this.mytableStart].T_look;
            T_cntl[i] = JsonObj.reports[i-this.mytableStart].T_cntl;
            T_cntl[i].ARstrings = JsonObj.reports[i-this.mytableStart].ARstrings;
            delete MDitems[i];
            if(typeof JsonObj.reports[i-this.mytableStart].MDitems != "undefined")
                MDitems[i] = JsonObj.reports[i-this.mytableStart].MDitems;
            if(MyTable[i].resizeChart) {
                if(document.removeEventListener)
                    document.removeEventListener('resize',MyTable[i].resizeChart);
                else
                    document.detachEvent("onresize",MyTable[i].resizeChart);
                MyTable[i].resizeID = null;
            }
            MyTable[i].deleted = true;
			pn = getPn(-1, MyTable[i].id);
			if(pn) {
				delete pn.tcntl;
			}
        }
        var resize = false;
        if(this.useDiv)
            resize = true;

        genTables(false,this.useDiv,true,this.mytableStart,this.mytableEnd,resize);
        var reports=[];
        for(i=this.mytableStart; i <= this.mytableEnd; i++) {
            reports[reports.length] = MyTable[i];
            MyTable[i].filterChangedFunc = this.filterChangedFunc;
            MyTable[i].updateCompleteFunc = this.updateCompleteFunc;
            MyTable[i].drillDownChangedFunc = this.drillDownChangedFunc;
			MyTable[i].showMenuFunc = this.showMenuFunc;
        }
        this._reports = reports;
        
    }

    function APIdeleteJsonReport()
    {
        for(var i=this.mytableStart; i<this.mytableEnd+1; i++) {
            t_T_capt[i] = [];
            T_capt[i] = [];
            T_cont[i] = [];
            T_look[i] = [];
            T_cntl[i] = [];
            T_cntl[i].ARstrings = [];
            if(MyTable[i].resizeChart) {
                if(document.removeEventListener)
                    document.removeEventListener('resize',MyTable[i].resizeChart);
                else
                    document.detachEvent("onresize",MyTable[i].resizeChart);
                MyTable[i].resizeID = null;
            }
            MyTable[i].deleted = true; // there may be references to this that dont get cleared.
            delete MyTable[i];
            /* put dummy place holder */
            MyTable[i] = {};
            MyTable[i].deleted = true;
            MyTable[i].n_cols = 0;
        }
        window.apiCont.handleList[this.id].deleted = true;
    }
    
    function APIfilterObject()
    {
        var obj,i,j;
        obj =  {
            'obj':null,
            'layout':1,
            'backcolor':null,
            'color':'#808080',
            'showFiltered':false,
            'filterParent':'',
            'filterActive':false,
            'filterSibling':'',
            'font':'ARIAL',
            'size':12,
            'bold':false,
            'italic':false,
            'constant':{
                'EQ':0,
                'IN':1,
                'NE':2,
                'GT':3,
                'LT':4,
                'GE':5,
                'LE':6,
                'BETWEEN':7,
                'NOTBETWEEN':8
            },
            'underline':false
            //'deleted':false
        };

        try{
            Object.defineProperty(obj, 'defaultValues', {
                set: function(w1) {
                    var w = w1;
                    var i;
                    if(w != null) {
                        w = ibiStd.copyObject(w1);
                        if(typeof w== "object") {
                            for( i =0; i < w.length; i++ )
                                if(typeof w[i] == "string")
                                    w[i] = w[i].split(arSet.FILTER_SEPARATOR_OPTIONAL).join(arSet.FILTER_SEPARATOR);
                        } else
                            if(typeof w == "string")
                                w = w.split(arSet.FILTER_SEPARATOR_OPTIONAL).join(arSet.FILTER_SEPARATOR);
                    }

                    if(w!=null && this.obj.values!=null && typeof(w)=="object" && typeof(this.obj.values)=="object") {
                        if(w.length == this.obj.values.length) {
                            for(i=0; i < w.length; i++) {
                                if(w[i]!=this.obj.values[i])
                                    break;
                                if(i == w.length-1) 
                                    return;
                            } 
                        }
                    } else
                        if(w == this.obj.values)
                            return;
                    //also check values.
                    //if(typeof w == "object")
                    //    this.obj.defaultValues= ibiStd.copyObject(w);
                    //else
                    if(typeof w== "object")
                        this.obj.defaultValues = ibiStd.copyObject(w);
                    else
                    this.obj.defaultValues= w;

                    if(w!=null && this.obj.values!=null && typeof(w)=="object" && typeof(this.obj.values)=="object") {
                        if(w.length == this.obj.values.length) {
                            for(i=0; i < w.length; i++) {
                                if(w[i]!=this.obj.values[i])
                                    break;
                                if(i == w.length-1) 
                                    return;
                            } 
                        }
                    } else
                        if(w == this.obj.values)
                            return;
                    this.obj.filterOnload = true;
                    this.obj.filterOnloadRan = false;
                    this.filterChanged = true;
                    this.obj.values = [];
                    if (this.obj.defaultValues != null) {
                        var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
                        if(typeof this.obj.defaultValues == "object") {
                            for(i=0; i < this.obj.defaultValues.length; i++)
                                if(this.obj.defaultValues[i] == "_FOC_MISSING")
                                    this.obj.defaultValues[i] = MISSING_STR;
                        } else {
                            if(this.obj.defaultValues == "_FOC_MISSING")
                                this.obj.defaultValues = MISSING_STR;
                        }
					}
                    if(this.obj.type == "slider" || this.obj.type == "vslider") {
                        if(w.length>1)
                            this.obj.multiselect = true;
                        this.obj.selectedMin = null;
                        this.obj.selectedMax = null;
                    }
                    this.obj.allSelected = false;
					if(typeof this.obj.setValuesFromDefault != "undefined") {
						if(this.obj.dataProvider != null)
                            this.obj.setValuesFromDefault();
						else
							this.obj.needToSetValuesFromDefault = true;
					}
                    if(this.obj.values.length == 0)
                        this.obj.allSelected = true;
                },
                get: function() {
                    if(typeof this.obj.values == "object")
                        return ibiStd.copyObject(this.obj.values);
                    else
                        return this.obj.values;
                }
            });
            Object.defineProperty(obj, 'filterValues', {
                set: function(w1) {
                    var w = w1;
                    var i;
                    if(w != null) {
                        w = ibiStd.copyObject(w1);
                        if(typeof w== "object") {
                            for( i =0; i < w.length; i++ )
                                if(typeof w[i] == "string")
                                    w[i] = w[i].split(arSet.FILTER_SEPARATOR_OPTIONAL).join(arSet.FILTER_SEPARATOR);
                        } else
                            if(typeof w == "string")
                                w = w.split(arSet.FILTER_SEPARATOR_OPTIONAL).join(arSet.FILTER_SEPARATOR);
                    }
                    if(w!=null && this.obj.defaultValues!=null && typeof(w)=="object" && typeof(this.obj.defaultValues)=="object") {
                        if(w.length == this.obj.defaultValues.length) {
                            for(i=0; i < w.length; i++) {
                                if(w[i]!=this.obj.defaultValues[i])
                                    break;
                                if(i == w.length-1) 
                                    return;
                            } 
                        }
                    } else
                        if(w == this.obj.defaultValues)
                            return;
                    this.obj.defaultValues= w;
                    //also check values.
                    if(w!=null && this.obj.values!=null && typeof(w)=="object" && typeof(this.obj.values)=="object") {
                        if(w.length == this.obj.values.length) {
                            for(i=0; i < w.length; i++) {
                                if(w[i]!=this.obj.values[i])
                                    break;
                                if(i == w.length-1) 
                                    return;
                            } 
                        }
                    } else
                        if(w == this.obj.values)
                            return;
                    this.filterChanged = true;
                    this.obj.filterOnload = true;
                    this.obj.filterOnloadRan = false;
                    this.obj.values = [];
                    if(this.obj.type == "slider" || this.obj.type == "vslider") {
                        if(w.length>1)
                            this.obj.multiselect = true;
                        this.obj.selectedMin = null;
                        this.obj.selectedMax = null;
                    }
                    this.obj.allSelected = false;
                    if(typeof this.obj.setValuesFromDefault != "undefined")
                    this.obj.setValuesFromDefault();
                    if(this.obj.values.length == 0)
                        this.obj.allSelected = true;
                },
                get: function() {
                    return this.obj.defaultValues;
                }
            });
            Object.defineProperty(obj, 'filterCondition', {
                set: function(w) {
                    if(w == this.obj.filterCondition)
                        return;
                    this.filterChanged = true;
                    this.obj.filterCondition= w;
                },
                get: function() {
                    return this.obj.filterCondition;
                }
            });
            Object.defineProperty(obj, 'filterMultiple', {
                set: function(w) {
                    this.obj.multiselect = w;
                },
                get: function() {
                    return this.obj.multiselect;
                }
            });
            Object.defineProperty(obj, 'multiselect', {
                set: function(w) {
                    this.obj.multiselect = w;
                },
                get: function() {
                    return this.obj.multiselect;
                }
            });
            Object.defineProperty(obj, 'visible', {
                set: function(w) {
                
                    this.obj.visible = w;
                
                },
                get: function() {
                    return this.obj.visible;
                }
            });
            Object.defineProperty(obj, 'filterTarget', {
                set: function(w) {
                    if(w == this.obj.filterTarget)
                        return;
                    this.filterChanged = true;
					this.obj.dataProvider = null;
                    this.obj.filterTarget = w;
                },
                get: function() {
                    return this.obj.filterTarget;
                }
            });
            Object.defineProperty(obj, 'filterSibling', {
                set: function(w) {
                    if(w == this.obj.filterSibling)
                        return;
                    this.filterChanged = true;
                    this.obj.filterSibling = w;
                },
                get: function() {
                    return this.obj.filterSibling;
                }
            });
            Object.defineProperty(obj, 'filterSortOrder', {
                set: function(w) {
					var ss = this.obj.filterSortDesc;
                    if(w.toLowerCase()=="ascending")
                        this.obj.filterSortDesc = false;
                    else
                        this.obj.filterSortDesc = true;
                    if(ss!=this.obj.filterSortDesc) {
                        this.obj.dataProvider = null;
                        this.obj.refresh(false);
                    }
                },
                get: function() {
                    if(this.obj.filterSortDesc)
                        return ("ascending");
                    else
                        return ("descending");
                }
            });
            Object.defineProperty(obj, 'filterParent', {
                set: function(w) {
                    if(w == this.obj.filterParent)
                        return;
                    this.filterChanged = true;
                    this.obj.filterParent = w;
                },
                get: function() {
                    return this.obj.filterParent;
                }
            });
            Object.defineProperty(obj, 'filterConnector', {
                set: function(w) {
                    var c = 0;
                    if(w.toLowerCase()=="or")
                        c = 1;
                    if(c == this.obj.filterConnector)
                        return;
                    this.filterChanged = true;
                    this.obj.filterConnector = c;
                },
                get: function() {
                    if(this.obj.filterConnector == 0)
                        return('AND');
                    else
                        return('OR');
                }
            });
            Object.defineProperty(obj, 'name', {
                set: function(w) {
                    this.obj.name = w;
                },
                get: function() {
                    return this.obj.name;
                }
            });
            Object.defineProperty(obj, 'width', {
                set: function(w) {
                    this.obj.width = w;
                },
                get: function() {
                    return this.obj.width;
                }
            });
            Object.defineProperty(obj, 'height', {
                set: function(w) {
                    this.obj.height = w;
                },
                get: function() {
                    return this.obj.height;
                }
            });
            Object.defineProperty(obj, 'valueAsIs', {
                set: function(w) {
                    this.obj.valueAsIs = w;
                },
                get: function() {
                    return this.obj.valueAsIs;
                }
            });
            Object.defineProperty(obj, 'showTitle', {
                set: function(w) {
                    if(w=="OFF")
                        this.obj.showTitle=null;
                    else
                        this.obj.showTitle = w;
                },
                get: function() {
                    return this.obj.showTitle;
                }
            });
            Object.defineProperty(obj, 'dataColumn', {
                set: function(w1) {
                    var w = w1;
                    if(w) {
                        if (w[0] == "'")
                            w = w.substr(1);
                        if (w[w.length - 1] == "'")
                            w = w.substr(0, w.length - 1);
                    }
                    if(w == this.obj.dataColumnSave)
                        return;
                    this.obj.dataColumnSave = w;
                    if(typeof(w)=="string") {
                        if (w.indexOf("[") != -1) {
                            try {
                                var hh = w.split("[");
                                hh = hh[1].split("]");
                                hh = hh[0].split(",");
                                w = [];
                                for (var k = 0; k < hh.length; k++)
                                    w[k] = hh[k];
                                this.obj.defineName = "ARMULTI" + this.id;
                                this.obj.dataColumnType = "multi";
                            } catch (e) {
                                ibiStd.trace("invalid columns for filter:" + this.obj.dataColumnSave);
                                this.obj.dataColumn = "$xxx$";
                            }
                        }
                    }
                    this.filterChanged = true;
                    var aggTypes = {'SUM':true,'MAX':true,'MIN':true,'CNT':true,'AVE':true,'PCT':true,'FST':true,'LST':true,'MDN':true,
                        'TOT':true,'ASQ':true,'DST':true,'CNT.DST':true,'PCT.CNT':true,'SUM.DST':true,'AVE.DST':true,'RPCT':true};
                    var aggC;
                    var aggtype;
                    i = -1;
                    j = -1;
                    if(typeof(w)=="string") {
                        i = w.indexOf(".");
                        j = w.indexOf(":");
                    }
                    aggC = w;
                    this.obj.aggBy = null;
                    this.obj.haveAgg = false;
                    this.obj.aggColumn = null;
                    this.obj.aggType = null;
                    if(j!=-1) {
                        aggC = w.substr(0,j);
                        i = aggC.indexOf(".");
                        this.obj.aggBy = w.substr(j+1);
                        if(this.obj.aggBy.substr(0,3) == "BY.")
                            this.obj.aggBy = this.obj.aggBy.substr(3);
                    }
                    this.obj.aggColumn = aggC;
                    if(i!=-1) {
                        aggtype = aggC.substr(0,i);
                        if(aggtype in aggTypes ) {
                            this.obj.aggType = aggtype;
                            this.obj.aggColumn = aggC.substr(i+1);
                            this.obj.haveAgg = true;
                            i = this.obj.aggColumn.indexOf(".");
                            if(i != -1) {
                                aggtype = this.obj.aggColumn.substr(0,i);
                                if(this.obj.aggType+'.'+aggtype in aggTypes) {
                                    this.obj.aggType = this.obj.aggType+'.'+aggtype;
                                    this.obj.aggColumn = this.obj.aggColumn.substr(i+1);
                                }
                            }
                        }
                    }
                    this.obj.dataColumn = aggC;
					this.obj.dataProvider = null;
                },
                get: function() {
                    return this.obj.dataColumn;
                }
            });
            Object.defineProperty(obj, 'showAll', {
                set: function(w) {
                    if(w && (this.obj.values==null || this.obj.values.length == 0)) {
                        this.obj.allSelected = true;
                    }
					this.obj.dataProvider = null;
                    this.obj.showAll = w;
                },
                get: function() {
                    return this.obj.showAll;
                }
            });
            Object.defineProperty(obj, 'dataReport', {
                set: function(w) {
                    this.obj.dataReport = w;
                },
                get: function() {
                    return this.obj.dataReport;
                }
            });
            Object.defineProperty(obj, 'y', {
                set: function(w) {
                    this.obj.y= w;
                },
                get: function() {
                    return this.obj.y;
                }
            });
            Object.defineProperty(obj, 'x', {
                set: function(w) {
                    this.obj.x = w;
                },
                get: function() {
                    return this.obj.x;
                }
            });
            Object.defineProperty(obj, 'deleted', {
                set: function(w) {
                    this.obj.deleted= w;
                },
                get: function() {
                    return this.obj.deleted;
                }
            });
            Object.defineProperty(obj, 'showMenu', {
                set: function(w) {
                    this.obj.showMenu = w;
                },
                get: function() {
                    return this.obj.showMenu;
                }
            });
            Object.defineProperty(obj, 'showSearch', {
                set: function(w) {
                    this.obj.showSearch = w;
                },
                get: function() {
                    return this.obj.showSearch;
                }
            });
            Object.defineProperty(obj, 'onClickSearch', {
                set: function(w) {
                    if(this.obj.showSearchObj)
                        this.obj.showSearchObj.onClick = w;
                    else
                        this.obj.showSearchFunc = w;
                },
                get: function() {
                    return this.obj.showSearchObj.onClick;
                }
            });
            Object.defineProperty(obj, 'onClickMenu', {
                set: function(w) {
                    if(this.obj.showMenuObj)
                        this.obj.showMenuObj.onClick = w;
                    else
                        this.obj.showMenuFunc = w;
                },
                get: function() {
                    return this.obj.showMenuObj.onClick;
                }
            });
			Object.defineProperty(obj, 'onShowMenu', {
				set: function(w) {
					this.obj.showMenuFunc = w;
				},
				get: function() {
					return this.obj.showMenuFunc;
				}
			});
            Object.defineProperty(obj, 'getActiveContextMenuFunc', {
                set: function(w) {
                    this.obj.showMenuFunc = w;
                },
                get: function() {
                    return this.obj.showMenuFunc;
                }
            });
            Object.defineProperty(obj, 'onFilterChange', {
                set: function(w) {
                    this.obj.filterChangedFunc = w;
                },
                get: function() {
                    return this.obj.filterChangedFunc;
                }
            });
            Object.defineProperty(obj, 'onUpdateComplete', {
                set: function(w) {
                    this.obj.updateCompleteFunc = w;
                },
                get: function() {
                    return this.obj.updateCompleteFunc;
                }
            });
            Object.defineProperty(obj, 'updateCompleteFunc', {
                set: function(w) {
                    this.obj.updateCompleteFunc = w;
                },
                get: function() {
                    return this.obj.updateCompleteFunc;
                }
            });
            Object.defineProperty(obj, 'font', {
                set: function(w) {
                    this.obj.font = w;
                },
                get: function() {
                    return this.obj.font;
                }
            });
            Object.defineProperty(obj, 'color', {
                set: function(w) {
                    this.obj.color = w;
                },
                get: function() {
                    return this.obj.color;
                }
            });
            Object.defineProperty(obj, 'size', {
                set: function(w) {
                    this.obj.size = w;
                },
                get: function() {
                    return this.obj.size;
                }
            });
            Object.defineProperty(obj, 'type', {
                set: function(w) {
                    if(w != this.obj.type) {
                        var o = APInewFilterObj(w);
                        o.size         = this.obj.size;
                        o.color     = this.obj.color;
                        o.font         = this.obj.font;
                        o.x         = this.obj.x;
                        o.y            = this.obj.y;
                        o.width        = this.obj.width;
                        o.height    = this.obj.height;
                        o.aggColumn = this.obj.aggColumn;
                        o.active    = this.obj.active;
                        o.filterTarget = this.obj.filterTarget;
                        o.filterOnload = this.obj.filterOnload;
                        o.filterOnloadRan = this.obj.filterOnloadRan;
                        o.filterChangedFunc = this.obj.filterChangedFunc;
						o.showMenuFunc = this.obj.showMenuFunc;
                        o.drillDownChangedFunc = this.obj.drillDownChangedFunc;
                        o.updateCompleteFunc = this.obj.updateCompleteFunc;
                        o.showSearch = this.obj.showSearch;
                        o.showMenuFunc = this.obj.showMenuFunc;
                        o.filterCondition = this.obj.filterCondition;
                        o.container = this.obj.container;
                        o.dataReport = this.obj.dataReport;
                        o.dataColumn = this.obj.dataColumn;
                        o.containerId = this.obj.containerId;
                        o.showAll = this.obj.showAll;
                        o.iconBox = this.obj.iconBox;
                        o.showMenuObj = this.obj.showMenuObj;
                        if(typeof(this.obj.defaultValues)!="undefined")
                            o.defaultValues = ibiStd.copyObject(this.obj.defaultValues);
                        if(typeof(this.obj.values)!="undefined")
                            o.values = ibiStd.copyObject(this.obj.values);
                        ibiCompound.deleteLayoutObject(this.obj);
                        if(this.obj.filterSibling)
                            this.obj.filterSibling.filterSiblingLeft = o;
                        if(this.obj.filterSiblingLeft)
                            this.obj.filterSiblingLeft.filterSibling = o;
                        if(this.obj.filterParent)
                            this.obj.filterParent.children[this.obj.filterParent.children.length] = o;
                        o.filterSibling = this.obj.filterSibling;
                        o.filterSiblingLeft = this.obj.filterSiblingLeft;
                        o.filterParent = this.obj.filterParent;
                        o.chidren = [];
                        for (var i=0; i < this.obj.children.length; i++)
                            o.children[o.children.length] = this.obj.children[i];
                        this.obj.filterParent = null;
                        this.obj.filterSibling = null;
                        this.obj.filterSiblingLeft = null;
                        this.obj.children = [];
                        this.deleteFilter();
                        ibiCompound.addLayoutObject(o);
                        this.obj = o;
                        this.refresh(false);
                    }
                },
                get: function() {
                    return this.obj.type;
                }
            });
        } catch(e) {
        }
        obj.id = window.apiCont.handleList.length;
        window.apiCont.handleList[obj.id] = obj;
        return obj;
    }
    
    function APInewFilterObj(what,pobj)
    {
        var obj;
        switch(what) {
            case 'textinput':   
                obj  = new artextInput(0,0,null, null); 
                break;
            case 'checkbox':    
                obj  = new archeckBox(0,0,null, null); 
                break;
            case 'list':        
                obj   = new arlist(0,0,null, null); 
                break;
            case 'slider':      
                obj  = new arslider(0,0,null, null); 
                break;
            case 'vslider':      
                obj  = new arslider(0,0,null, null,"vertical"); 
                break;
            case 'radiobutton':
                obj  = new arradioButton(0,0,null, null); 
                break;
            case 'combobox':    
                obj  = new arcomboBox(0,0,null, null); 
                break;
            case 'dummy':
                obj  = pobj;
                break;
        }
        if(what != "dummy") {
            obj.filterSibling = null;
            obj.filterSiblingLeft = null;
            obj.showMenu = true;
            obj.showSearch = true;
            obj.type = what;
            obj.width = "100%";
            obj.undoStack = new ibiCompound.undoStack(obj);
        }
        return(obj);
    }
    
	function APIfindFilter(id) {
        for(var j = 0; j < ibiCompound.drawObjectsApiFilters.length; j++)
            if(id == ibiCompound.drawObjectsApiFilters[j].obj.id )
            	return(ibiCompound.drawObjectsApiFilters[j]);
        return null;
	}

    function APInewFilterSelect(what,tobj)
    {
        var filterObj = APIfilterObject();
        activeVisMode = false;
        
        filterObj.obj = APInewFilterObj(what,tobj);
        filterObj.filterChanged = true;
        filterObj.chainSibling = function(w) {
            if(w.obj.deleted || this.obj.deleted)
                return;
            if(w.obj.id == this.obj.id) {
                return null;
            }
            if(w.obj.filterSibling || w.obj.filterSiblingLeft) {
                return null;
            }
            this.filterChanged = true;
            var s = this.obj.filterSibling;
            var sl = this.obj.filterSiblingLeft;
            //var ws = w.obj.filterSibling;
            //var wsl = w.obj.filterSiblingLeft;
            
            this.obj.filterSibling = w.obj;
            //this.obj.filterSiblingLeft = wsl;
            w.obj.filterSiblingLeft = this.obj;
            if(s) {
                w.obj.filterSibling = s;
                s.filterSiblingLeft = w.obj;
            }
            //if(wsl)
            //    wsl.filterSibling = this.obj;
            //if(s)
            //    s.filterSiblingLeft = w.obj;
        };
        filterObj.chainToParent = function(w) {
            var pobj = w;
            if(typeof w.obj !== "undefined")
                pobj = w.obj;
            if(pobj.deleted || this.obj.deleted)
                return;
            if(pobj.id == this.obj.id) {
                return null;
            }
            this.obj.filterParent = pobj;
            this.filterChanged = true;
            pobj.children[pobj.children.length] = this.obj;
        };
        filterObj.refresh = function(async) {
            if(typeof(this.obj.refresh)!="undefined") {
                var aasync = false;
                if(typeof async != "undefined")
                    aasync = async;
                if(this.obj.deleted)
                    return;
                this.obj.refresh(aasync);
            }
        };
        filterObj.apply = function() {
            if(typeof(this.obj.doFilter)!="undefined") {
                if(this.obj.deleted) 
                    return;
                if(!this.filterChanged)
                    return;
                this.obj.apiCall = true;
                this.obj.doFilter();
                this.obj.apiCall = false;
                this.filterChanged = false;
            }
        };
        filterObj.deleteFilter = function(dontApplyUpdate) {
			var i,j;
            if(this.obj.deleted)
                return;
            this.obj.values = [];
            this.filterChanged = true;
            this.obj.active = false;
            this.obj.deleted = true;

            if(this.obj.filterSiblingLeft)
                this.obj.filterSiblingLeft.filterSibling = this.obj.filterSibling;

            if(this.obj.filterSibling)
                this.obj.filterSibling.filterSiblingLeft = this.obj.filterSiblingLeft;

            if(typeof(this.obj)!="undefined")
                ibiCompound.deleteLayoutObject(this.obj);

            this.obj.filterSibling = null;
            this.obj.filterSiblingLeft = null;

            if(this.obj.filterParent) {
                for(i = 0; i < this.obj.filterParent.children.length; i++) {
                    if(this.obj.filterParent.children[i].id == this.obj.id) {
                        this.obj.filterParent.children.splice(i,1);
                        break;
                    }
                }
            }
            //this.obj.deleted = true;
            if(this.container)
                this.container.innerHTML = "";
            //this.obj.doFilter();
			for(j = 0; j < ibiCompound.drawObjectsApiFilters.length; j++)
				if(this.obj.id == ibiCompound.drawObjectsApiFilters[j].obj.id ) {
                    ibiCompound.drawObjectsApiFilters.splice(j,1);
                    break;
                }

			for(j=0; j < MyTable.length; j++) {
				if(MyTable[j].deleted)
					continue;
				if(MyTable[j].chartFiltersForUndo)
					for(i = 0; i < MyTable[j].chartFiltersForUndo.length; i++)
						if(this.obj.id == MyTable[j].chartFiltersForUndo[i].obj.id) {
                            MyTable[j].chartFiltersForUndo.splice(i,1);
                            break;
						}

			}

            if(!dontApplyUpdate) {
                for(var i in window.apiCont.handleList)
                    if(!window.apiCont.handleList[i].deleted)
                        if(typeof(window.apiCont.handleList[i]._reports)!="undefined")
                            for(var j = 0; j < window.apiCont.handleList[i]._reports.length; j++) {
                                window.apiCont.handleList[i]._reports[j].o_paging.c = 0;
                                window.apiCont.handleList[i]._reports[j].filterChange = true;
                                window.apiCont.handleList[i]._reports[j].isEmptyReport = false;
                                window.apiCont.handleList[i]._reports[j].gshow();
                            }
            }
        };
        ibiCompound.drawObjectsApiFilters[ibiCompound.drawObjectsApiFilters.length] = filterObj;
        return filterObj;
    }
    
    function APInewFilterList()
    {
        var obj = APInewFilterSelect("list");
        return obj;
    }

    function APInewFilterComboBox()
    {
        var obj = APInewFilterSelect("combobox");
        return obj;
    }
    
    function APInewFilterRadioButton()
    {
        var obj = APInewFilterSelect("radiobutton");
        return obj;
    }
    
    function APInewFilterTextInput()
    {
        var obj = APInewFilterSelect("textinput");
        return obj;
    }
    
    function APInewFilterCheckBox()
    {
        var obj = APInewFilterSelect("checkbox");
        return obj;
    }
    
    function APInewFilterDummy(tobj)
    {
        var obj = APInewFilterSelect("dummy",tobj);
        return obj;
    }

    function APInewFilterSlider()
    {
        var obj = APInewFilterSelect("slider");
        return obj;
    }
    
    function APInewFilterVSlider()
    {
        var obj = APInewFilterSelect("vslider");
        return obj;
    }
    
	function APIaddFilterObject(obj,iUsediv)
    {
		var usediv = iUsediv;
        var html;
        var pUsediv = usediv;
        var bodyRef = document.getElementsByTagName('body')[0];
        var newobj = {};
        var b,d,i;
        var dID;
        var bstyle;
                
        if(typeof(usediv)=="string") {
            for(i=0; i < apiCont.filterHandles.length; i++)
                if(apiCont.filterHandles.containerId == usediv) {
                    apiCont.filterHandles[i].deleteFilter();
                    apiCont.filterHandles[i]= {'deleted':true};
                    break;
                }
        }
        
        if(typeof(usediv)=="string") {
            d = document.getElementById(usediv);
            if(d == null)
            	usediv = null;
        }

        if((typeof(usediv)=="undefined")||(usediv==null)) {
            pUsediv = "ibi$dummy$div";
            if(document.getElementById(pUsediv)==null) {
                b = document.createElement('div');
				bstyle = 'position:absolute;visibility:hidden;overflow:hidden;height:10px;white-space:nowrap;top:0px;left:0px;';
                if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
                else b.setAttribute('style',bstyle);
                b.setAttribute('id',pUsediv);
                bodyRef.appendChild(b);
            }
            dID = pUsediv;
            d = document.getElementById(pUsediv);
        } else
        if(typeof(usediv)=="string") {
            d = document.getElementById(usediv);
            dID = usediv;
        } else { 
            d = usediv;
        }
        b = document.createElement('div');
        bstyle = 'position:absolute;white-space:nowrap;top:0px;left:0px;';
		if(d)
			if(d.style.position == "")
				bstyle = '';
        if((obj.obj.height != 0) && (obj.obj.height != null))
            bstyle += "height:"+obj.obj.height+";";
        if((obj.obj.width != 0) && (obj.obj.width != null))
            bstyle += "width:"+obj.obj.width+";";
        if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
        else b.setAttribute('style',bstyle);
        //b.setAttribute('id',pUsediv);
        if(d != null) {
            d.appendChild(b);
            obj.container = b;
            obj.obj.container = obj.container;
            html = obj.obj.buildComponent();
            b.innerHTML = html;
            ibiCompound.addLayoutObject(obj.obj);
            obj.containerId = dID;
        }
        // chain for demo only
        apiCont.filterHandles[apiCont.filterHandles.length] = obj;
        obj.refresh = function(async,dontRefreshDataProvider) {
            try {
                if (this.obj.iconBox)
                    delete this.obj.iconBox;
                if(this.container)
                    this.container.innerHTML = this.obj.buildComponent();
                this.obj.objs = null;
                if (!this.obj.visible) {
                    var dd = document.getElementById(this.obj.divName);
                    if (!dd && this.container)
                        dd = this.container.children[0];
                    if (dd) {
                        var wid = this.obj.type + "_d" + this.obj.id;
                        dd.style.display = "block";

                        this.obj.objs = document.getElementById(wid);
                        if (!this.obj.objs)
                            this.obj.objs = IBIgetElementById(dd, wid);

                        this.obj.objsRoot = document.getElementById(this.obj.type + this.obj.id);
                        if (!this.obj.objsRoot)
                            this.obj.objsRoot = IBIgetElementById(dd, this.obj.type + this.obj.id);

                        dd.style.display = "none";
                    }
                }
                if (typeof(this.obj.refresh) != "undefined") {
                    var aasync = false;
                    if(typeof async != "undefined")
                        aasync = async;
					this.obj.reloadData = true;
					this.obj.refresh(aasync);
                }
                if(ibiFilterTool.opened) {
                	var mt = null;
                	if(this.obj.filterTarget != "*") {
                        mt = this.obj.getTable(this.obj.filterTarget);
                        if(mt)
                        	mt = mt.id;
                    }
                    ibiFilterTool.showFilterTool(mt, true);
                }
            } catch(e) {
                if(this.obj.updateCompleteFunc) {
                    var myObj = {
                        'id': this.obj.id,
                        'error': true,
                        'errorMessage': e.message
                    };
                    this.obj.updateCompleteFunc(myObj);
                }
            }
        };
    }

    function IBIgetElementById(node,id) {
        var p;
        if(node.id == id)
            return node;
        for(var i=0; i < node.children.length; i++) {
            p = IBIgetElementById(node.children[i],id);
            if(p)
                return p;
        }
        return null;
    }
    
    function APIaddFilterObjectJSON(filterObj,usediv)
    {
        var obj = ibiCompound.createLayoutObject(JsonObj);
        var html = obj.buildComponent();
        var pUsediv = usediv;
        var bodyRef = document.getElementsByTagName('body')[0];
        var newobj = {};
        var b,d;
        var bstyle;
        
        if((typeof(usediv)=="undefined")||(usediv==null)) {
            pUsediv = "ibi$dummy$div";
            if(document.getElementById(pUsediv)==null) {

                b = document.createElement('div');
				bstyle = 'position:absolute;visibility:hidden;overflow:hidden;height:10px;white-space:nowrap;top:0px;left:0px;';
                if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
                else b.setAttribute('style',bstyle);
                b.setAttribute('id',pUsediv);
                bodyRef.appendChild(b);
            }
        } else
        if(typeof(usediv)=="string")
            d = document.getElementById(usediv);
        else 
            d = usediv;
        if(d != null) {
            b = document.createElement('div');
            bstyle = 'position:relative;white-space:nowrap;top:0px;left:0px;';
            if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
            else b.setAttribute('style',bstyle);
            //b.setAttribute('id',pUsediv);
            d.appendChild(b);
            b.innerHTML = html;
        }
        newobj._filter = obj;
        newobj.refresh = function() {
            if(typeof(this._filter.refresh)!="undefined")
                this._filter.refresh(false);
        };
        return newobj;
    }
    
    function APIupdateFilterObject(JsonObj,usediv)
    {
    }
    
    function APIdeleteFilterObject(filterObject)
    {
    }
    
    function APInewFilterJson()
    {
        var json = {
            'type':'list',
            'name':'object1',
            'layout':1,
            'x':0,
            'y':0,
            'x2':-1,
            'y2':-1,
            'backcolor':null,
            'color':'#808080',
            'showAll':true,
            'showFiltered':false,
            'showTitle':false,
            'filterMultiple':true,
            'dataReport':'report',
            'dataColumn':'column',
            'filterTarget':'R1',
            'filterValues':null,
            'filterName':'',
            'filterParent':'',
            'filterActive':false,
            'filterSibling':'',
            'filterCondition':1,
            'font':'ARIAL',
            'size':12,
            'bold':false,
            'italic':false,
            'underline':false
        };
        return json;
    }
    
    function APIclearActiveReport()
    {
        var i,o;

        for(i=0; i < ibiCompound.drawObjectsList.length; i++) 
            if(ibiCompound.drawObjectsList[i]) {
                if(ibiCompound.drawObjectsList[i].objs)
                    ibiCompound.drawObjectsList[i].objs.innerHTML = "";
                if(ibiCompound.drawObjectsList[i].container)
                    ibiCompound.drawObjectsList[i].container.innerHTML = "";
            }
    
		for(i=0; i < MyTable.length; i++) {
			if(MyTable[i].deleted)
				continue;
            if(MyTable[i].useMdiv) {
                o = document.getElementById(MyTable[i].useMdiv);
                if(o)
                    o.innerHTML = "";
            }
		}
            
        for(i=0; i < window.apiCont.handleList.length; i++) {
            if(window.apiCont.handleList[i].deleteJsonReport)
                window.apiCont.handleList[i].deleteJsonReport();
            window.apiCont.handleList[i].deleted = true;
        }
        ibiCompound = ibiCompound.ResetCompound();
        LayoutSection=[];
        LayoutObjects=[];
        MyTable = [];
        NumOfTable=0;
        //since we are deleteing all components, no need to keep handles around.
        window.apiCont.handleList = [];
        T_look=[]; T_capt=[]; T_cntl=[]; T_cont=[];ARstrings=[]; a_T_cont=[]; b_T_cont=[]; T_saveARs=[]; MDitems=[]; t_T_capt=[];
    }
    
	function convertJsonToOldv1 (JsonObj) {
		var newObj = {};
        newObj.reports = [];
        for(i = 0; i < JsonObj.reports.length; i++) {
            newObj.reports[i] = {};
            newObj.reports[i].T_capt = JsonObj.reports[i].columns;
            newObj.reports[i].t_T_capt = JsonObj.reports[i].tablecss;
            newObj.reports[i].T_cont = JsonObj.reports[i].data;
            newObj.reports[i].T_look = JsonObj.reports[i].gridlook;
            newObj.reports[i].T_cntl = JsonObj.reports[i].settings;
            if(typeof JsonObj.reports[i].MDitems != "undefined")
            	newObj.reports[i].MDitems = JsonObj.reports[i].MDitems;

            if(typeof newObj.reports[i].T_cntl.fullFex == "object")
                newObj.reports[i].T_cntl.fullFex = newObj.reports[i].T_cntl.fullFex.join('');
            if(typeof newObj.reports[i].T_cntl.jschartScript == "object")
                newObj.reports[i].T_cntl.jschartScript = newObj.reports[i].T_cntl.jschartScript.join('');
            if(typeof newObj.reports[i].T_cntl.jsonProps == "object")
                newObj.reports[i].T_cntl.jsonProps = newObj.reports[i].T_cntl.jsonProps.join('');
            if(typeof newObj.reports[i].T_cntl.tdgScript == "object")
                newObj.reports[i].T_cntl.tdgScript = newObj.reports[i].T_cntl.tdgScript.join('');
            if(typeof newObj.reports[i].T_cntl.graphProps != "undefined") {
                for(j=0; j < newObj.reports[i].T_cntl.graphProps.length; j++) {
                    if(typeof newObj.reports[i].T_cntl.graphProps[j].pfj == "object")
                        newObj.reports[i].T_cntl.graphProps[j].pfj  = newObj.reports[i].T_cntl.graphProps[j].pfj.join('');
                    if(typeof newObj.reports[i].T_cntl.graphProps[j].json == "object")
                        newObj.reports[i].T_cntl.graphProps[j].json  = newObj.reports[i].T_cntl.graphProps[j].json.join('');
                }
            }
            if(typeof JsonObj.reports[i].savedSettings != "undefined")
                newObj.reports[i].savedSettings = JsonObj.reports[i].savedSettings;

            if(typeof newObj.reports[i].T_cntl.graphFinalProps != "undefined") {
                for(j=0; j < newObj.reports[i].T_cntl.graphFinalProps.length; j++) {
                    if(typeof newObj.reports[i].T_cntl.graphFinalProps[j].pfj == "object")
                        newObj.reports[i].T_cntl.graphFinalProps[j].pfj  = newObj.reports[i].T_cntl.graphFinalProps[j].pfj.join('');
                    if(typeof newObj.reports[i].T_cntl.graphFinalProps[j].json == "object")
                        newObj.reports[i].T_cntl.graphFinalProps[j].json  = newObj.reports[i].T_cntl.graphFinalProps[j].json.join('');
                }
            }
            newObj.reports[i].ARstrings = JsonObj.datastrings;
        }

        newObj.ibiMsgStr = JsonObj.strings;
        ARstrings = JsonObj.datastrings;
        if(JsonObj.icons) {
            var ic;
            for(ic in ibiSkin.icons) {
                var html = "";
                if(JsonObj.icons[ibiSkin.icons[ic].id]) {
                    html = JsonObj.icons[ibiSkin.icons[ic].id];
                    if(html.indexOf("<")==-1) {
                        for(i=0; i < JsonObj.images.length; i++) {
                            if(JsonObj.images[i].name == html) {
                                html = JsonObj.images[i].html;
                                break;
                            }
                        }
                    }
                }
                ibiSkin[ic] = html;
            }
        }
        if(JsonObj.pages) {
            for(i=0; i < JsonObj.pages.length; i++) {
                if(JsonObj.pages[i]!=null)
                    LayoutSection[JsonObj.pages[i].layout] = ibiStd.copyObject(JsonObj.pages[i]);
            }
        }
        if(JsonObj.LayoutObjects) {
            for(i=0; i < JsonObj.LayoutObjects.length; i++) {
                LayoutObjects[LayoutObjects.length] = ibiStd.copyObject(JsonObj.LayoutObjects[i]);
                if(JsonObj.LayoutObjects[i].type == "image") {
                    for(j=0; j < JsonObj.images.length; j++) {
                        if(JsonObj.images[j].name == JsonObj.LayoutObjects[i].image) {
                            LayoutObjects[LayoutObjects.length-1].image = JsonObj.images[j].html;
                            break;
                        }
                    }

                }
            }
        }

        if (JsonObj.reportcss) {
            var headRef = document.getElementsByTagName('head')[0];
            for(var c in JsonObj.reportcss) {
                if(JsonObj.reportcss[c] != null) {
                	var style = JsonObj.reportcss[c];
                	if(typeof style == "object")
                		style = style.join('');
                    style = atob(style);
                    var cssNode = document.createElement('style');
                    cssNode.setAttribute('type', 'text/css');
                    if (cssNode.styleSheet) {
                        cssNode.styleSheet.cssText = style;
                    } else {
                        var gsA = style.split('\n');
                        for (i = 0; i < gsA.length; i++) {
                            var newStyle = document.createTextNode(gsA[i]);
                            cssNode.appendChild(newStyle);
                        }
                    }
                    headRef.appendChild(cssNode);
                }
            }
        }
        return newObj;

	}

	function APIsaveJsonReport() {
		var i,j;
		var newObj = {
			"info": {
				"revision" :"1.0",
				"generatedBy" : "usersave"
			},
			"activeOptions":{},
			"strings":ibiMsgStr,
			"reports":[],
			"reportcss":{},
			"icons":{},
			"images":[],
			"pages":[],
			"LayoutObjects":[],
			"datastrings":ARstrings
		};
		if(this.originalJson) {
			newObj.activeOptions = ibiStd.copyObject(this.originalJson.activeOptions);
			if(this.originalJson.pages)
				newObj.pages = ibiStd.copyObject(this.originalJson.pages);
			if(this.originalJson.images)
				newObj.images = ibiStd.copyObject(this.originalJson.images);
            if(this.originalJson.icons)
                newObj.icons = ibiStd.copyObject(this.originalJson.icons);
            if(this.originalJson.reportcss)
                newObj.reportcss = ibiStd.copyObject(this.originalJson.reportcss);
            if(this.originalJson.LayoutObjects)
                newObj.LayoutObjects = ibiStd.copyObject(this.originalJson.LayoutObjects);

		}
		for(i = 0; i < MyTable.length; i++) {
			if(!MyTable[i].deleted) {
				var report = {};
				report.tablecss = ibiStd.copyObject(MyTable[i].o_look.styles);
				report.columns =[];
				for(j = 0; j < MyTable[i].a_capt.length; j++) {
					var column = {};
					column.name = MyTable[i].a_capt[j].name;
                    column.focCol = MyTable[i].a_capt[j].focCol;
                    column.viscolor = MyTable[i].a_capt[j].viscolor;
                    column.format = MyTable[i].a_capt[j].format;
                    column.visualize = MyTable[i].a_capt[j].vis;
                    column.vispct = MyTable[i].a_capt[j].vispct;
                    column.isby = MyTable[i].a_capt[j].isby;
                    column.orow = MyTable[i].a_capt[j].orow;
                    column.orowLimit = MyTable[i].a_capt[j].orowLimit;
                    column.orowByTotal = MyTable[i].a_capt[j].orowByTotal;
                    column.ishier = MyTable[i].a_capt[j].ishier;
                    column.noprint = MyTable[i].a_capt[j].noprint;
                    column.isTotal = MyTable[i].a_capt[j].isTotal;
                    if(MyTable[i].a_capt[j].b_hide_filter != undefined)
                    	column.hide_filter = MyTable[i].a_capt[j].b_hide_filter;
                    if(MyTable[i].a_capt[j].hideable != undefined)
                    	column.hideable = MyTable[i].a_capt[j].hideable;
                    column.level = MyTable[i].a_capt[j].level;
                    column.SUM = MyTable[i].a_capt[j].SUM;
                    column.MIN = MyTable[i].a_capt[j].MIN;
                    column.MAX = MyTable[i].a_capt[j].MAX;
                    column.AVG = MyTable[i].a_capt[j].AVG;
                    column.COU = MyTable[i].a_capt[j].COU;
                    column.DIS = MyTable[i].a_capt[j].DIS;
                    column.type = MyTable[i].a_capt[j].type;
                    column.haspro = MyTable[i].a_capt[j].haspro;
                    column.b_hide = MyTable[i].a_capt[j].b_hide;
                    column.hide = MyTable[i].a_capt[j].hide;
                    column.isCompute = MyTable[i].a_capt[j].isCompute;
                    column.isTempDefine = MyTable[i].a_capt[j].isTempDefine;
                    column.isFilter = MyTable[i].a_capt[j].isFilter;
                    column.computeText = MyTable[i].a_capt[j].computeText;
                    column.isFilter = MyTable[i].a_capt[j].isFilter;
                    if( MyTable[i].a_capt[j].exp_hide != undefined)
                    	column.exphide = MyTable[i].a_capt[j].exp_hide;
                    if(MyTable[i].a_capt[j].orgCol != -1)
                    	column.orgCol = MyTable[i].a_capt[j].orgCol;
                    if(typeof(MyTable[i].a_capt[j].userFunc)!='undefined') {
                        column.userFunc = MyTable[i].a_capt[j].userFunc;
                        column.userParm = MyTable[i].a_capt[j].userParm;
                    }
					report.columns[j] = column;
				}
				report.gridlook = ibiStd.copyObject(MyTable[i].ru_o_look);
				report.globalProps = {};
				report.data = ibiStd.copyObject(MyTable[i].a_cont);
				report.settings = ibiStd.copyObject(MyTable[i].a_cntl);
				report.savedSettings = {
                    "n_freeze_column": MyTable[i].n_freeze_column,
                    "n_freeze_column_before_hide": MyTable[i].n_freeze_column_before_hide,
                    "n_rows": MyTable[i].n_rows,
                    "o_paging_n": MyTable[i].o_paging.n,
                    "o_paging_c": MyTable[i].o_paging.c,
                    "AccordionIsOn": MyTable[i].AccordionIsOn,
                    "a_sort": ibiStd.copyObject(MyTable[i].a_sort),
                    "top_aggregate": MyTable[i].top_aggregate,
                    "bottom_aggregate": MyTable[i].bottom_aggregate,
                    "WindowDisplay": MyTable[i].a_cntl.WindowDisplay,
                    "groupSort": MyTable[i].groupSort,
                    "calcType": MyTable[i].calcType,
                    "sublevel": MyTable[i].sublevel,
                    "reportView": MyTable[i].a_cntl.reportView,
                    "showsubHF": MyTable[i].showsubHF
            	};
				newObj.reports[newObj.reports.length] = report;
			}
		}

		return newObj;
	}

	function APIaddJsonReport(iJsonObj,usediv)
    {
        var handle = {};
        var reports = [];
        var start = T_cntl.length;
        var i,j;
		var JsonObj = iJsonObj;
		var fullReport = false;

        this.originalJson = ibiStd.copyObject(iJsonObj);
        $AR.originalJson = this.originalJson;

        LayoutObjects = [];
        LayoutSection = [];

		if(JsonObj.info) {
			if(JsonObj.info.revision == "1.0") {
				if(typeof usediv == "undefined")
					fullReport = true;
				var newObj = convertJsonToOldv1(iJsonObj);
                JsonObj = newObj;
			}
		}
        if(usediv) {
            for(i in window.apiCont.handleList)
                if(!window.apiCont.handleList[i].deleted)
                    if(window.apiCont.handleList[i].useDiv == usediv) {
                        window.apiCont.handleList[i].updateJsonReport(JsonObj,usediv);
                        return window.apiCont.handleList[i];
                    }
        }
        handle.mytableStart = start;
        // use lang found in json
        if(typeof(JsonObj.ibiMsgStr)!="undefined")
            ibiMsgStr = ibiStd.copyObject(JsonObj.ibiMsgStr);

        if(initvars()) {
            ar_js_init(this.api_useDiv);
            if (ibiSkin.ImgGlobalStyle) ibiSkin.GenStyles(true);
            genstarted = true;
        }
        for(i=0; i < JsonObj.reports.length; i++) {
            t_T_capt[i+start] = JsonObj.reports[i].t_T_capt;
            T_capt[i+start] = JsonObj.reports[i].T_capt;
            if(typeof(JsonObj.reports[i].T_cont)=="undefined")
                T_cont[i+start] = [];
            else
                T_cont[i+start] = JsonObj.reports[i].T_cont;
            T_look[i+start] = JsonObj.reports[i].T_look;
            T_cntl[i+start] = JsonObj.reports[i].T_cntl;
			if(!fullReport && ((typeof(usediv)=="undefined")||(usediv==null)))
                T_cntl[i+start].table_div.hidden = true;
            T_cntl[i+start].ARstrings = JsonObj.reports[i].ARstrings;
			if(ARstrings.length == 0)
            	ARstrings = JsonObj.reports[i].ARstrings;
            if(typeof JsonObj.reports[i].MDitems != "undefined")
                MDitems[i+start] = JsonObj.reports[i].MDitems;
            if(typeof JsonObj.reports[i].savedSettings != "undefined")
                T_saveARs[i+start] = JsonObj.reports[i].savedSettings;
            if(typeof JsonObj.reports[i].LayoutSection != "undefined") {
                for(j=0; j < JsonObj.reports[i].LayoutSection.length; j++ )
                    if(JsonObj.reports[i].LayoutSection[j]!=null)
                        LayoutSection[JsonObj.reports[i].LayoutSection[j].layout] = ibiStd.copyObject(JsonObj.reports[i].LayoutSection[j]);
            }
            if(typeof JsonObj.reports[i].LayoutObjects != "undefined") {
                for(j=0; j < JsonObj.reports[i].LayoutObjects.length; j++ )
                    LayoutObjects[LayoutObjects.length] = ibiStd.copyObject(JsonObj.reports[i].LayoutObjects[j]);
            }
        }
        NumOfTable = start + JsonObj.reports.length;
        var pUsediv = usediv;
        if((typeof(usediv)=="undefined")||(usediv==null)) {
            pUsediv = "ibi$dummy$div";
            if(document.getElementById(pUsediv)==null) {
                var bodyRef = document.getElementsByTagName('body')[0];
                var b = document.createElement('div');
				var bstyle = 'position:absolute;visibility:hidden;overflow:hidden;height:10px;white-space:nowrap;top:0px;left:0px;';
                if(b_ie) b.style.setAttribute('cssText', bstyle, 0);
                else b.setAttribute('style',bstyle);
                b.setAttribute('id',pUsediv);
                bodyRef.appendChild(b);
            }
        }
        arGraphEngine = T_cntl[start].GraphEngine;
        var resize = false;
        if(pUsediv)
            resize =true;
        handle.mytableEnd = start + JsonObj.reports.length - 1;
		if(fullReport)
			genTables_delay();
		else
        genTables(false,pUsediv,null,null,null,resize);
        //handle.mytableEnd = T_cntl.length-1;
        for(i=handle.mytableStart; i <= handle.mytableEnd; i++)
            reports[reports.length] = MyTable[i];
        handle._reports = reports;
        handle.useDiv = pUsediv;
        handle.updateJsonReport = window.ibiApiReportObj.updateJsonReport;
        handle.deleteJsonReport = window.ibiApiReportObj.deleteJsonReport;
        handle.id = window.apiCont.handleList.length;
        window.apiCont.handleList[handle.id] = handle;
        Object.defineProperty(handle, 'filterChangedFunc', {
            set: function(w) {
                this._filterChangedFunc = w;
                for(var i=0; i< this._reports.length;i++)
                    this._reports[i].filterChangedFunc = w;
            },
            get: function() {
                return this._filterChangedFunc;
            }
        });
		Object.defineProperty(handle, 'showMenuFunc', {
			set: function(w) {
				this._showMenuFunc = w;
				for(var i=0; i< this._reports.length;i++)
					this._reports[i].showMenuFunc = w;
			},
			get: function() {
				return this._showMenuFunc;
			}
		});
        Object.defineProperty(handle, 'getActiveContextMenuFunc', {
            set: function(w) {
                this._showMenuFunc = w;
                for(var i=0; i< this._reports.length;i++)
                    this._reports[i].showMenuFunc = w;
            },
            get: function() {
                return this._showMenuFunc;
            }
        });
        Object.defineProperty(handle, 'drillDownChangedFunc', {
            set: function(w) {
                this._drillDownChangedFunc = w;
                for(var i=0; i< this._reports.length;i++)
                    this._reports[i].drillDownChangedFunc = w;
            },
            get: function() {
                return this._drillDownChangedFunc;
            }
        });
        Object.defineProperty(handle, 'updateCompleteFunc', {
            set: function(w) {
                this._updateCompleteFunc = w;
                for(var i=0; i< this._reports.length;i++)
                    this._reports[i].updateCompleteFunc = w;
            },
            get: function() {
                return this._updateCompleteFunc;
            }
        });
        if(handle._reports.length > 0)
            handle.showMessage = function(msg) { this._reports[0].showMessage(msg);};
        else
            handle.showMessage = function(msg) { alert(msg);};
        handle.deleted = false;
        return handle;
    }
    
    function APIsetArReportData(t_num,ArString,dontShow)
    {    
        var mytable = MyTable[t_num];

        this.reportString = ArString;
        ServerUpdatedata(ArString,t_num);
        if(!dontShow) ibiGrid.show(false,mytable);
    }

    function APIenableGlobal()
    {
        ApiEnableGlobal = true;
    }

    function APIdisableGlobal()
    {
        ApiEnableGlobal = false;
        EnableGlobalFilter = false;
    }

    function APIaddToReport(ArDataObj,usedivid,dontShow)
    {
        var tn = NumOfTable;
        T_capt[tn]=ArDataObj.capt;
        T_look[tn]=ArDataObj.look;
        T_cont[tn]=ArDataObj.cont;
        T_cntl[tn]=ArDataObj.cntl;
        ArDataObj.cntl.table_number = tn;
        APImenuStyle(ArDataObj.cntl);
        NumOfTable++;
        genTables(dontShow,usedivid);
        return tn;
    }

    function APImenuStyle(cntl) 
    {
        cntl.style[cntl.style.length]='.m0out'+cntl.table_number+'{  border: #F0F0F0 1px solid;}';
        cntl.style[cntl.style.length]='.m1i'+cntl.table_number+'{  font: 8pt Arial;  color: #000000;  background-color: #C8C8C8;}';
        cntl.style[cntl.style.length]='.m1o'+cntl.table_number+'{  font: 8pt Arial;  color: #000000;  background-color: #F0F0F0;}';
    }

})();

function getAReportObj(useDiv)
{
    //this.raw_tables = MyTable;
    this.getColumns = window.ibiApiReportObj.getColumns;
    this.getColumnValues = window.ibiApiReportObj.getColumnValues;
    this.numOfTables = MyTable.length;
    this.getNumOfReports = window.ibiApiReportObj.getNumOfReports;
    this.deleteFilters = window.ibiApiReportObj.delFilters;
    this.addFilter = window.ibiApiReportObj.addFilter;
    this.setReportType = window.ibiApiReportObj.setReportType;
    this.getFilterTypes = window.ibiApiReportObj.getFilterTypes;
    this.getMenuOptionsNames = window.ibiApiReportObj.getMenuOptionsNames;
    this.getReportTypes = window.ibiApiReportObj.getReportTypes;
    this.getNumOfRecords = window.ibiApiReportObj.getNumOfRecords;
    this.getLinesPerPage = window.ibiApiReportObj.getLinesPerPage;
    this.setLinesPerPage = window.ibiApiReportObj.setLinesPerPage;
    this.getCurrentPage = window.ibiApiReportObj.getCurrentPage;
    this.setCurrentPage = window.ibiApiReportObj.setCurrentPage;
    this.getSortCol =  window.ibiApiReportObj.getSortCol;
    this.getSortOrderType = window.ibiApiReportObj.getSortOrderType;
    this.sortCol = window.ibiApiReportObj.sortCol;
    this.refresh = window.ibiApiReportObj.show;
    this.getEventList = window.ibiApiReportObj.getEventList;
    this.setEventHandle = window.ibiApiReportObj.setEventHandle;
    this.addUserMenu = window.ibiApiReportObj.addUserMenu;
    this.setXaxis = window.ibiApiReportObj.setXaxis;
    this.setYaxis = window.ibiApiReportObj.setYaxis;
    this.addArReport = window.ibiApiReportObj.addArReport;
    this.setArReportData = window.ibiApiReportObj.setArReportData;
    this.disableGlobal = window.ibiApiReportObj.disableGlobal;
    this.enableGlobal = window.ibiApiReportObj.enableGlobal;
    this.addToReport = window.ibiApiReportObj.addToReport;
    this.addJsonReport = window.ibiApiReportObj.addJsonReport;
    this.setGraphEngine = window.ibiApiReportObj.setGraphEngine;
    this.addFilterObject = window.ibiApiReportObj.addFilterObject;
    this.deleteFilterObject = window.ibiApiReportObj.deleteFilterObject;
    this.updateFilterObject = window.ibiApiReportObj.updateFilterObject;
    this.newFilterJson = window.ibiApiReportObj.newFilterJson;
    this.newFilterList = window.ibiApiReportObj.newFilterList;
    this.newFilterCheckBox = window.ibiApiReportObj.newFilterCheckBox;
    this.newFilterDummy = window.ibiApiReportObj.newFilterDummy;
    this.newFilterRadioButton = window.ibiApiReportObj.newFilterRadioButton;
    this.newFilterTextInput = window.ibiApiReportObj.newFilterTextInput;
    this.newFilterComboBox = window.ibiApiReportObj.newFilterComboBox;
    this.newFilterVSlider = window.ibiApiReportObj.newFilterVSlider;
    this.newFilterSlider = window.ibiApiReportObj.newFilterSlider;
    this.clearActiveReport = window.ibiApiReportObj.clearActiveReport;
	this.getFilter = window.ibiApiReportObj.getFilter;
	this.findFilterById = window.ibiApiReportObj.findFilterById;
    this.saveJsonReport = window.ibiApiReportObj.saveJsonReport;
    this.originalJson = null;
    this.numOfTable = 0;
    this.reportString = null;
    this.arStrings = [];
	if(useDiv)
		this.api_useDiv = useDiv;
    if(!genstarted) {
		if(initvars()) {
            ar_js_init(this.api_useDiv);
            if(ibiSkin.ImgGlobalStyle)ibiSkin.GenStyles(true);
            genstarted=true;
        }
	}
    this.constants = window.apiCont;
}


function APIgdStyleName(st) 
{
    this.gridColumn.name.dataClass=st;
}


function activeReport(useDiv)
{
    //b_mobile = false;
    var obj = new getAReportObj(useDiv);
    
    if (typeof useDiv != 'undefined') {
       b_mobile = false;
    }
    
    return obj;
}

function arGridObject(){return new ARgrid();}

function ARgrid()
{
    this.cntl = {
        'MENUTYPE':"POPUP",
        'MP_COL_COUNT':0,
        'MP_LINE_COUNT':20,
        'CALC_POSITION':1,
        'filter_form_table':'filter_form_table',
        'menuops' :{'pagination':true,'freeze':true,'hide':true,'search':true,'filter':true,'calc':true,'chart':true,'visualize':true,'exporttable':true,'msappexport':true,'sortcol':true,
            'rollup':true,'pivot':true,'comments':true,'window':true,'restore':true,'sendemail':true,'savechange':true,'print':true,'accordion':true,'pivottool':true,'gridtool':true,'charttool':true},
        'table_number': -1,
        'style' : 
            [
//            '.IBIS'+NumOfTable+'_0 {  font-size: 10pt;  font-family: DEFAULT-FIXED;  color: #0000FF;  text-align: left;  font-weight: bold;}',
//            '.IBIS'+NumOfTable+'_1 {  font-size: 10pt;  font-family: DEFAULT-FIXED;  text-align: left;}',
//            '.IBIS'+NumOfTable+'_2 {  font-size: 10pt;  font-family: DEFAULT-FIXED;  text-align: right;}',
//            '.m0out'+NumOfTable+'{  border: #F0F0F0 1px solid;}',
//            '.m0i'+NumOfTable+'{  font: 10pt Arial;  color: #000000;  background-color: #C8C8C8;}',
//            '.m1i'+NumOfTable+'{  font: 8pt Arial;  color: #000000;  background-color: #C8C8C8;}',
//            '.m0o'+NumOfTable+'{  font: 10pt Arial;  color: #000000;  background-color: #F0F0F0;}',
//            '.m1o'+NumOfTable+'{  font: 8pt Arial;  color: #000000;  background-color: #F0F0F0;}',
//            '.m0im'+NumOfTable+'{  font: 7pt Arial;  color: #000000;  background-color: #C8C8C8;}'
            ],
        'menubordercolor' : '#F0F0F0',
        'showMenuBar': 'true',
        'statusalign':0,
        'cdn' : 0,
        'menu' : {},
        'cursym':'$',
        'status' : 0,
        'ByDisplay':false,
        'WindowDisplay':'cascade',
        'table_div':{'position':'none','top':0,'left':0,'width':-1,'height':-1},
        'Accordion':false,
        'NumRecords':0,
        'FocexUrl':'',
        'a_cols' : []
    };
    this.look = {
        'structure' : [0, 2, 4],
        'params' : [2, 0, 1],
         'colors' : {
          'even'    : 'white',
          'odd'     : 'white',
          'hovered' : '#fffccc',
          'marked'  : '#33ffcc'
        },
        'freeze' : [0, 0],
        'freeze_column': 0 ,
        'scroll':{
          'horizontal' : false,
          'size': 0
        },
        'paging' : {
          'by' : 30,
          'tt' : paglinetext,
          'pf' : '<span style="font-size: 8pt; font-family: Arial; border: none; cursor: pointer; text-decoration: none;">&#9668;&#9668;<\/span>',
          'pp' : '<span style="font-size: 8pt; font-family: Arial; border: none; cursor: pointer; text-decoration: none;">|&#9668;&nbsp;<\/span>',
          'pn' : '<span style="font-size: 8pt; font-family: Arial; border: none; cursor: pointer; text-decoration: none;">&nbsp;&#9658;|<\/span>',
          'pl' : '<span style="font-size: 8pt; font-family: Arial; border: none; cursor: pointer; text-decoration: none;">&#9658;&#9658;<\/span>',
          'sh' : true
        },
        'filter' : {
          'type': 8
        },
        'css' : {
          'body'     : ['tabBody1Col0','tabBody1Col1','tabBody1Col2','tabBody1Col3','tabBody1Col4','tabBody1Col5','tabBody1Col6','tabBody1Col7','tabBody1Col8'],
          'pagnCell' : 'tabPaging1',
          'pagnText' : 'tabPagingText1',
          'pagnPict' : 'tabPagingArrowCell1',
          'filtCell' : 'tabFilter1',
          'filtPatt' : 'tabFilterPattern1',
          'filtSelc' : 'tabFilterSelect1'
        }
    };
    this.capt = [];
    this.cont = [];
    this.addColumn = window.ibiApiGridObj.addColumn;
    this.addDataArray = window.ibiApiGridObj.addDataArray;
    this.setReportType = window.ibiApiGridObj.setReportType2;
    this.addEventListener = window.ibiApiGridObj.setEventHandle2;
    this.setStyle = window.ibiApiGridObj.gridStyle;
    this.styleName = window.ibiApiGridObj.gdStyleName;
    this.setWidth = window.ibiApiGridObj.setWidth;
    this.setHeight = window.ibiApiGridObj.setHeight;
    this.refresh = window.ibiApiGridObj.show2;
    this.addChart = window.ibiApiGridObj.addgChart;
    this.chartsCount = 0;
    this.menu = new APImenu(this);
    this.rowCount =  window.ibiApiGridObj.setLinesPerPageG;
}


(function() {
    if (typeof(window.ibiApiGridObj) !== 'undefined') {
        return;
    }

    window.ibiApiGridObj = {
        addColumn:APIaddColumn,
        addDataArray:APIaddDataArray,
        setReportType2:APIsetReportType2,
        setEventHandle2:APIsetEventHandle2,
        gridStyle:APIgridStyle,
        gdStyleName:APIgdStyleName,
        setWidth:APIsetWidth,
        setHeight:APIsetHeight,
        show2:APIshow2,
        addgChart:APIaddgChart,
        setLinesPerPageG:APIsetLinesPerPageG
    };

    function APIaddColumn(columnName,columnTitle,columnType,columnDataField)
    {
        var title = columnTitle;
        var ft = "(I40)";
        var halign="RIGHT";
        if(title==null) title = columnName;
        if(columnType==IBISTR)  {
            ft="(A256)";
            halign="LEFT";
        } else 
        if(columnType==IBIDATE) {
            ft="(DT)";
            halign="LEFT";
        }
        var level = 0;
        if(this.capt.length) {
            level = this.capt[this.capt.length-1].level;
            if(this.capt[this.capt.length-1].isby) level++;
        }
        this.capt[this.capt.length] = {
            'name' : {'title':title,'colspan':'','exClass':'','align':halign,'valign':'BOTTOM','bcolor':'','wrap':' NOWRAP','style':'','color':'#000000','font':'Arial','size':'10','name':'<tt>'+title+'<\/tt>'},
            'format':ft,
            'viscolor':['#000000','#000000'],
            'type' : columnType,
            'dataField': columnDataField,
            'level' : level
        };
		var plainText = title;
        var b = document.getElementById("ibi$Get$Text");
        if(b==null) {
            var bodyRef = document.getElementsByTagName('body')[0];
            b = document.createElement('div');
            b.setAttribute('id','ibi$Get$Text');
            bodyRef.appendChild(b);
        }
        b.innerHTML = plainText;
        plainText = b.innerText;
        bodyRef.removeChild(b);
		this.cntl.a_cols[this.cntl.a_cols.length]={'name':columnName,'dis':plainText,'field':columnName};
        this.cntl.MP_COL_COUNT=this.capt.length;
        return new ARgridColumn(this.capt[this.capt.length-1],this,columnName,columnDataField);
    }

    function APIaddDataArray(data)
    {
        var count = data.length;
        var cols = this.capt.length;
        var val,val2;
        var dispval;
        var inlist=[];
        var p;
        var i;
    
        //load inlist from ARstings
        for(i=0; i<ARstrings.length; i++)
            inlist[ARstrings[i]] = i;
            
        for(i=0; i<count; i++)
        {
            this.cont[i] = [];
            for(var j=0; j<cols; j++) {
                val = data[i][this.capt[j].dataField];
                if(typeof(val)=="object") {
                    val2 = val.display;
                    val = val.value;
                } else val2 = null;
                if(this.capt[j].type==IBINUM) val = val*1;
                else val = val+'';
                this.cont[i][j] = [];
                if(typeof(inlist[val])!="undefined")
                    p = inlist[val];
                else {
                    p = ARstrings.length;
                    ARstrings[p] = val;
                    inlist[val] = p;
                }
                this.cont[i][j][DARAW] = p;
                //dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
                if(val2==null)    this.cont[i][j][DASTR] = p;
                else {
                    if(typeof(inlist[val2])!="undefined")
                        p = inlist[val2];
                    else {
                        p = ARstrings.length;
                        ARstrings[p] = val2;
                        inlist[val2] = p;
                    }
                    this.cont[i][j][DASTR] = p;
                }
            }
        
        }
        if(this.cntl.table_number!=-1) {
            MyTable[this.cntl.table_number].n_rows_have = count;
            MyTable[this.cntl.table_number].n_rows = count;
            MyTable[this.cntl.table_number].save_n_rows = count;
            MyTable[this.cntl.table_number].a_all_cont = this.cont;
            MyTable[this.cntl.table_number].FullTotal = [];
            MyTable[this.cntl.table_number].sortneeded = true;
            MyTable[this.cntl.table_number].filterChange = true;
            MyTable[this.cntl.table_number].redrawCharts = true;
            IinitBody(MyTable[this.cntl.table_number]);
        }
        this.cntl.NumRecords = count;
    }

    function APIsetReportType2(rtype)
    {
        if((rtype>0)&&(rtype<7))
            this.cntl.reportView = rtype*1;
    }

    function APIsetEventHandle2(eventType,callback)
    {
        Events[eventType].callback=callback;
        Events[eventType].tables[Events[eventType].tables.length]=this.cntl.table_number;
    }

    function APIgridStyle(what,value)
    {
        if(what==apiCont.BACKCOLORS) {
            this.cntl.altcolors = value;
        }    
    }

    function APIsetWidth(val)
    {
        this.cntl.table_div.width=val;
    }

    function APIsetHeight(val)
    {
        this.cntl.table_div.height=val;
    }

    function APIshow2() {
        ibiGrid.show(false,MyTable[this.cntl.table_number]);
    }

    var wincount = -999;
    function APIaddgChart(xaxis,yaxis,agtypes,width,height,type,useDiv)
    {
        var tn=this.cntl.table_number;
        var useDivObj = document.getElementById(useDiv);
        var usewin = wincount;
        wincount--;
        var chartinfo =  ibiChart.makeChartItemOnly(tn,type,xaxis,yaxis,width,height,agtypes,true,0);
        chartinfo.saveable.subTable = this.chartsCount;
    //    MakeChart(tn,chartinfo,usewin,useDivObj);
        this.chartsCount++;
        return new APIchartObject(chartinfo,this,usewin,useDivObj);
    }

    function APIsetLinesPerPageG(lp)
    {
        this.look.paging.by = lp;
        this.cntl.MP_LINE_COUNT = lp;
    }

})();





function APIchartObject(chartinfo,grid,usewin,useObj)
{
    this.grid = grid;
    this.xaxisFunction = null;
    this.yaxisFunction = null;
    this.chartinfo = chartinfo;
    this.usewin = usewin;
    this.useDivObj = useObj;
    this.addCallBack = window.ibiApiChartObj.callBack;
    this.refresh = window.ibiApiChartObj.refreshChart;
}

(function() {
    if (typeof(window.ibiApiChartObj) !== 'undefined') {
        return;
    }

    window.ibiApiChartObj = {
        refreshChart:APIrefreshChart,
        callBack:APIcallBack
    };

    function APIrefreshChart()
    {
        var tn=this.grid.cntl.table_number;
        this.chartinfo.yaxisFunction = this.yaxisFunction;
        this.chartinfo.xaxisFunction = this.xaxisFunction;
        try {
            ibiChart.makeChart(tn, this.chartinfo, this.usewin, this.useDivObj);
        } catch(e) {
            if(this.grid.updateCompleteFunc) {
                var myObj = {
                    'id': this.grid.id,
                    'error': true,
                    'errorMessage': e.message
                };
                this.grid.updateCompleteFunc(myObj);
            }
        }
    }

    function APIcallBack(myFunc)
    {
        this.chartinfo.callback = myFunc;
    }
})();



function APImenu(grid)
{
    this.grid = grid;
    this.border = new window.ibiApiMenuObj.menuBorder(grid);
    this.selout = new window.ibiApiMenuObj.menuSelout(grid);
    this.selover = new window.ibiApiMenuObj.menuSelover(grid);
    this.separator = new window.ibiApiMenuObj.menuSep(grid);
    this.option = window.ibiApiMenuObj.menuoption;
}

(function() {
    if (typeof(window.ibiApiMenuObj) !== 'undefined') {
        return;
    }

    window.ibiApiMenuObj = {
        menuoption:APImenuoption,
        menuBorder:APImenuBorder,
        menuSelout:APImenuSelout,
        menuSelover:APImenuSelover,
        menuSep:APImenuSep
    };

    function APImenuoption(which,onOFF)
    {
        this.grid.cntl.menuops[which] = onOFF;
    }

    function APImenuBorder(grid) 
    {
        this.grid = grid;
        this.styleName = APImbStyleName;
    }

    function APImenuSelout(grid) 
    {
        this.grid = grid;
        this.styleName = APImsoStyleName;
    }

    function APImenuSelover(grid) 
    {
        this.grid = grid;
        this.styleName = APImsvStyleName;
    }

    function APImenuSep(grid) 
    {
        this.grid = grid;
        this.styleName = APImspStyleName;
    }

    function APImbStyleName(st) 
    {
        this.grid.cntl.menu.border = st;
    }

    function APImsoStyleName(st) 
    {
        this.grid.cntl.menu.selout = st;
    }


    function APImsvStyleName(st) 
    {
        this.grid.cntl.menu.selover = st;
    }


    function APImspStyleName(st) 
    {
        this.grid.cntl.menu.separator = st;
    }
})();


function ARgridColumn(object,datagrid,cname,cnum) 
{
    this.gridColumn = object;
    this.dataGrid = datagrid;
    this.setStyle = window.ibiApiColumnObj.columnStyle;
    this.styleName = window.ibiApiColumnObj.cStyleName;
    this.addCalculation = window.ibiApiColumnObj.cAddCalc;
    this.header = {};
    this.header.gridColumn = object;
    this.header.styleName = window.ibiApiColumnObj.chStyleName;
    this.isBy = window.ibiApiColumnObj.setBy;
    this.colName = cname;
    this.colNum = cnum;
    this.addCallBack = window.ibiApiColumnObj.COLcallBack;
}


(function() {
    if (typeof(window.ibiApiColumnObj) !== 'undefined') {
        return;
    }

    window.ibiApiColumnObj = {
        columnStyle:APIcolumnStyle,
        cStyleName:APIcStyleName,
        cAddCalc:APIcAddCalc,
        chStyleName:APIchStyleName,
        setBy:APIsetBy,
        COLcallBack:APICOLcallBack
    };

    function APIcolumnStyle(what,value)
    {
    
        if(what=='headerColor')    this.gridColumn.name.color = value;
        if(what=='headerFont')    this.gridColumn.name.font = value;
        if(what=='headerSize')    this.gridColumn.name.size = value;  
        var stylestr = ' style="color:'+this.gridColumn.name.color+';font-size:'+this.gridColumn.name.size+'pt';
        if(this.gridColumn.name.font!='' && this.gridColumn.name.font!='DEFAULT-PROPORTIONAL' &&
            this.gridColumn.name.font!='DEFAULT-FIXED')
            stylestr+=';font-family:'+this.gridColumn.name.font+';';
        stylestr +='"';
        this.gridColumn.name.name = '<span'+stylestr+'>'+this.gridColumn.name.title+'<\/span>';
    }

    function APIcStyleName(st) 
    {
        this.gridColumn.name.dataClass=st;
    }

    function APIcAddCalc(ctype,pos)
    {
        var ppos = pos;
        if(typeof(pos)=="undefined") ppos = 1;
        this.gridColumn[ctype+'']=ppos;
    }

    function APIchStyleName(st) 
    {
        this.gridColumn.name.exClass=st;
    }

    function APIsetBy(what)
    {
        var offset = 0;
        this.gridColumn.isby = what;
        var level = 0;
        if(this.colNum!=0) {
            level = this.dataGrid.capt[this.colNum-1].level + 1;
            if(this.gridColumn.level == this.dataGrid.capt[this.colNum-1].level) {
                this.gridColumn.level = level;
                offset = 1;
            }
        }
        for(var i = this.colNum+1;i< this.dataGrid.capt.length; i++) {
            level = this.dataGrid.capt[i].level + 1;
            level += offset;
            this.dataGrid.capt[i].level = level;
        }
    }

    function APICOLcallBack(myfunc,parms)
    {
        var myParms = [];
        for(var i=0;i<parms.length;i++) 
            myParms[i]=parms[i].colNum;
        this.gridColumn.userFunc = myfunc;
        this.gridColumn.userParm = myParms;
    }
})();

(function() {
    if (typeof(window.$AR) !== 'undefined') {
        return;
    }
    window.$AR = new getAReportObj();
    window.$AR.version = ActiveJSRevision["arapi"];
})();














