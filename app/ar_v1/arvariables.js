/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arvariables.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180504 1543 bjd 202889 Invoking "XFOCUS" Reporting server console throws error.
* 180503 1032 bjd 202855 AHTML: COLUMN=field(*) formatting does not format computed f
* 180425 0844 bjd 202656 AHTML:Filter marker selection is different in Edge browser
* 180416 1222 wjf 196843 Visualization: Exclude column results in Error; page hangs
* 180408 1106 wjf 202042 VIS: Apply lasso filter on "Sale,Year/Month", display error
* 180306 1442 wjf 200246 AHML: Unify JSON output
* 180301 1128 wjf 200246 AHML: Unify JSON output
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 171222 0945 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 170807 2153 wjf 190184 Vis : Different order format shows in filter dialog and pro
* 170713 1751 wjf 192845 Grid Performance slow
* 170620 0946 wjf 191515 Create unified filter component to replace old style filter
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170522 1600 bjd 191414 AHTML: Refactor Excel\XML code generation
* 170324 0910 wjf 188280 Visualization Slider does not reflect date format in databa
* 170323 1134 wjf 188280 Visualization Slider does not reflect date format in databa
* 170323 1128 wjf 187182 Incorrect date sorting on x-axis for AHTML Chart with Color
* 170322 0836 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170307 1410 iys 181288 Active report in portal can't scroll on Android tablet and
* 161221 1357 bjd 187344 Active Reports (AHTML): Value does not filter properly unle
* 161219 2152 wjf 187347 Tooltip options too close together on mobile devices
* 161219 1753 bjd 163933 Subtotals not updated in Active compound Report w/ filters
* 161205 1119 wjf 187013 Slider Prompt shows decimal places after changing default v
* 160930 0833 wjf 170843 IDIS: Unknown Error when filtering on certain date formats
* 160929 1018 wjf 185099 Vis:Exclude, then Filter Chart on define field with Y Forma
* 160925 1742 wjf 178042 BUE Vis: Filter on a define field with Y Format throws erro
* 160921 0949 iys 184736 Aggregation title is displayed as "Undefined" in chart tool
* 160919 1157 iys 184736 Aggregation title is displayed as "Undefined" in chart tool
* 160909 0941 wjf 183566 AHTML:Export to CSV/EXCEL formates displays wrong outputs
* 160902 1235 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160830 1504 wjf 183991 Vis: selecting Filter chart option from live preview with d
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160721 1755 iys 183012 AHTML: Filter selections from Report drop down list do not
* 160628 1337 wjf 182331 Sort is incorrect in Active Charts on Chrome
* 160610 1256 hms 180534 Remove tab characters from source files
* 160609 1241 ppl 174119 Add new Tree Filter control.
* 160526 1220 wjf 179839 Getting FOC Error, when filtering on certain date formats (
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160407 1744 wjf 179512 AHTML: Chart using translated Month number fails in BUE, Ch
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 151214 1331 bjd 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151209 1659 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151119 1608 iys 173630 Add setting for report display mode
* 151026 0835 txk 172954 BIDI: First X of X records Displays after Page of Page
* 151023 1721 wjf 173061 AHTML: remove check for trident when in quirks mode
* 151022 0857 txk 172954 BIDI: First X of X records Displays after Page of Page
* 150924 1007 wjf 172112 [CHART-1211] Date fields are not sorted properly
* 150831 1425 bjd 170992 AHTML: Cache: webpage error when filtering with DATEs (MtYY)
* 150803 1515 txk 168509 BIDI: First X of X records displays after Page of Pages whe
* 150510 1511 wjf 163115 AHTML: Add tracing to active reports
* 150509 1135 wjf 163115 AHTML: Add tracing to active reports
* 150415 1157 wjf 166507 AHTML: Fix multiple pie issues
* 150409 1442 wjf 166225 AHTML: Context Menu: Cascading Multidrill Integration
* 150114 0740 wjf 163863 AHTML: Pass dates to ID in original format
* 150107 1458 wjf 163737 AHTML: Add hover bcolor to filter options for ID
* 150105 2132 wjf 163685 AHTML:  Use INT for float point comparisons
* 141211 1434 wjf 163322 AHTML: Fix javascript error caused by use of right method
* 141205 1251 wjf 163064 AHTML: Cleanup text(info) window.
* 141204 1422 wjf 163064 AHTML: Cleanup text(info) window.
* 141203 1018 wjf 163115 AHTML: Add tracing to active reports
* 141118 1341 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141105 0957 wjf 134795 Active Visualization
* 141027 1214 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 140926 1725 bjd 146870 AHTML:Export Line chart to Powerpoint always a Pie
* 140925 1107 wjf 134795 Active Visualization
* 140917 1035 wjf 134795 Active Visualization
* 140916 1812 wjf 134795 Active Visualization
* 140904 1557 bjd 134795 Active Visualization
* 140902 1232 wjf 134795 Active Visualization
* 140826 1245 wjf 134795 Active Visualization
* 140814 1958 wjf 134795 Active Visualization
* 140812 1949 wjf 134795 Active Visualization
* 140807 0910 wjf 134795 Active Visualization
* 140728 1222 wjf 134795 Active Visualization
* 140728 1027 wjf 134795 Active Visualization
* 140728 0703 wjf 134795 Active Visualization
* 140718 1648 wjf 134538 AHTML/AFLEX:support GRAPH with ACROSS
* 140624 1458 iys 158066 AHTML:Export XML(Excel) w Chrome prompts for ActiveX control
* 140621 2256 wjf 159606 AHTML/FLEX Add support for Not BETWEEN to filter controls
* 140618 0737 wjf 134795 Active Visualization
* 140617 1822 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.39 $
//$Log: arvariables.js,v $
//Revision 1.39  2014/04/16 13:28:23  William_Forde
//[p134795]  wait screen needed display set to none, so that it doesnt cause scroll bars
//
//Revision 1.38  2014/04/08 21:00:56  Brian_DCruz
//[p157804] added logic to export to XLSX format. Framework set to handle exporting to other EXCEL formats in the future.
//
//Revision 1.37  2014/03/26 00:01:18  William_Forde
//[p134795] fix javascript warnings
//
//Revision 1.36  2014/03/25 22:27:42  William_Forde
//[p134795] For demo, set all filter controls to active.
//
//Revision 1.35  2014/02/24 14:26:50  William_Forde
//[p134795][>branch8100] Fix issue with Grid not showing up properly in AV when SUM is used instead of PRINT.  Allow NE to perform NOT ... IN so that multiple values can be tested.
//
//Revision 1.34  2013/12/24 15:03:04  William_Forde
//[p155333]  Check trident version to see if we are ie11 and above.
//
//Revision 1.33  2013/12/19 22:20:02  Brian_DCruz
//[p155334] refactor FILTER logic to avoid hardcoded numbers
//
//Revision 1.32  2013/11/25 18:59:54  William_Forde
//[p154650] Microsoft remove the MSIE string from user agent.  If we only find trident, then turn on activeX.
//
//Revision 1.31  2013/11/25 14:51:19  William_Forde
//[p134795] Add new function to retrieve report by name.
//
//Revision 1.30  2013/11/22 16:12:56  William_Forde
//[p151491] Fix issue with charts not resize in HBOX/VBOX when the browser changes size.
//
//Revision 1.29  2013/10/22 21:09:03  William_Forde
//[p150545] allow json object to pass 'url' function.
//
//Revision 1.28  2013/07/11 15:04:04  Toshifumi_Kojima
//[p129862] AHTML/RTL: SET LAYOUTRTL Parenthesis displays wrongly
//
//Revision 1.27  2013/05/28 21:20:34  Israel_Schulman
//[p137859] Check for existence of body tag in case JS is included prior to body creation.
//
//Revision 1.26  2013/05/15 21:53:52  Brian_DCruz
//[p133458] autoFit SET values for JS code to use
//
//Revision 1.25  2013/05/01 23:09:24  William_Forde
//[p134795] make sure we use object.prototype
//
//Revision 1.24  2013/05/01 16:23:26  William_Forde
//[p134795]  check for ___array
//
//Revision 1.23  2013/05/01 15:25:23  William_Forde
//[p134795] Fix the way we check for ARRAY vs OBJECT
//
//Revision 1.22  2013/04/22 13:32:14  William_Forde
//[p137859] Should be OR condition not AND
//
//Revision 1.21  2013/04/19 15:29:06  William_Forde
//[p137859] If using activereport.js to load the javascript, hide the loading message.
//
//Revision 1.20  2013/04/18 16:57:01  William_Forde
//[p134795] fix parseint
//
//Revision 1.19  2013/04/18 13:57:21  William_Forde
//[p134795] Add new constant for AV
//
//Revision 1.18  2013/04/08 20:00:00  Israel_Schulman
//[p137859] Centered loading text. Added class name of arLoadingMessage for styling loading message.
//
//Revision 1.17  2013/04/02 16:27:05  Israel_Schulman
//[p147977] Prevent waitwin show/hide during genTables if table in report is AHTMLTAB. Remove text loading message element upon completion of genTables.
//
//Revision 1.16  2013/03/26 20:42:14  Israel_Schulman
//[p137859] Added loading indicator to tdgchart's. Added a loading message to appear while page loads. Rearranged waitwin and icons creation to occur before genTables for availability during genTables_delay.
//
//Revision 1.15  2013/03/07 18:08:57  William_Forde
//[p136289] Improve check for version of IE.
//
//Revision 1.14  2013/02/25 16:59:35  Israel_Schulman
//[p146233] Added class arMobileTabBar to tab area (#iosfullscreentab). Removed font/color style properties from .iosGridTab class (added to arMobileTabBar class in irpcfg.js).
//
//Revision 1.13  2013/01/15 21:49:13  Brian_DCruz
//[p134135] added OROW constants for sort order
//
//Revision 1.12  2012/12/03 14:40:51  William_Forde
//[p144206] Disable copy/paste for mobile.
//
//Revision 1.11  2012/08/27 16:58:15  William_Forde
//[p96890] Fix issue with filter being reset when toggling layout.  Fix issue with chart in dashboardbar vanishing when toggling layout. Add constant for LAYOUT_DASHBOARD -3.
//
//Revision 1.10  2012/08/14 04:10:39  William_Forde
//[p140572][>branch8001] Add activereport.js that will automatically include all the necessary active report js files.  Also added activereport.css that contains the styling for active.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arvariables"]="$Revision: 20180504.1543 $";

if(typeof(T_look)=="undefined") {
var w = window;
var d = document;
var tdginfo = new Object();
var IBISTR='IBISTR', IBIDATE='IBIDATE',IBINUM='IBINUM';
var DISPLAY_MODE_DEFAULT='active', DISPLAY_MODE_ADAPTIVE='adaptive';
var DASTR=0,DARAW=1,DACLS=2,DAACD=3,DATYP=4,DAHIR=5,DACNT=6,DANOTE=7;
var DORGLINE=8;
var ar_trace = false;
var missingVal={'missing':true};
var MyTable = [];
var T_look=[], T_capt=[], T_cntl=[], T_cont=[],ARstrings=[], a_T_cont=[], b_T_cont=[], T_saveARs=[], MDitems=[], t_T_capt=[];
var ST_REPORT     = -1;
var ST_IMAGE      =  0;
var ST_DATA       =  1;
var ST_TITL       =  2;
var ST_TBHD       =  3;
var ST_TBFT       =  4;
var ST_HEAD       =  5;
var ST_FOOT       =  6;
var ST_SBHD       =  7;
var ST_SBFT       =  8;
var ST_SBTL       =  9;
var ST_UNDR       =  10;
var ST_ACRV       =  11;
var ST_ACRH       =  12;
var ST_PAGENUM    =  13;
var ST_RECAP      =  14;
var ST_SKIPLINE   =  15;
var ST_GRANDTOTAL =  16;
var ST_BlankLine  =  17;
var ST_TitleUnder =  18;
var ST_ContUnder  =  19;  
var ST_FREETEXT   =  20;
var ST_CssBlankIns=  21;
var ST_DATAMATRIX =  22;

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

var NumOfTable=0;
var LayoutSection=[];
var LayoutObjects=[];
if(typeof(JSdecomp)=='undefined')var JSdecomp=false;
var paglinetext = "";
var isARBrowserExtension = isARBrowserExtension || false;

var arConstants = {
   EMBEDIMG: "EMBEDIMG",
   AR_MISSING: -1,
   AR_NODATA: -989,
   MISSING_OR_NODATA: -989,
   LAYOUT_DASHBOARDBAR: -3,
   OROW_LOWEST:    0,
   OROW_HIGH:      1,
   OROW_LOW_NOPR:  2,
   OROW_HIGH_NOPR: 3,
   OROW_NULL_KEY:  4,
   AUTOFIT_OFF:    0,
   AUTOFIT_ON:     1,
   AUTOFIT_RESIZE: 2,
   AUTOFIT_CONTAINER: 3,
   
    DP_RAW: 0,
    DP_DISPLAY_STRING: 1,
    DP_SELECTED: 2,
    DP_DISPLAY: 3,
    DP_TYPE: 4,
    DP_FORMAT: 5,
    DP_VALUE_ARRAY: 6,
    DP_TREE: 7,

   FILTER_CONTAIN_CS:  0,
   FILTER_EQ        :  1,
   FILTER_CONTAIN   :  3,
   FILTER_GT        :  4,
   FILTER_LT        :  5,
   FILTER_GE        :  6,
   FILTER_LE        :  7,
   FILTER_BETWEEN   :  8,
   FILTER_IN        :  9,
   FILTER_OMIT_CS   : 11,
   FILTER_OMIT      : 12,
   FILTER_NE        : 13,
   FILTER_NOTIN     : 14,
   FILTER_NOTBETWEEN: 15,

   NUMBER_ROUND_HIGH: 1,
   NUMBER_ROUND_LOW: 2,

   // set AREXPEXCEL
   SS_VALUE_EXL2K   : 0, // 'EXL2K'
   SS_VALUE_XLSX    : 1,  // 'XLSX'

   // SUBTOTAL prefix
   SUB_SUM     : 1,
   SUB_AVE     : 2,
   SUB_MAX     : 3,
   SUB_MIN     : 4,
   SUB_FST     : 5,
   SUB_LST     : 6,
   SUB_CNT     : 7,
   SUB_ASQ     : 8,
   SUB_ROLL    : 11,
   SUB_ROLL_AVE: 12,
   SUB_ROLL_MAX: 13,
   SUB_ROLL_MIN: 14,
   SUB_ROLL_FST: 15,
   SUB_ROLL_LST: 16,
   SUB_ROLL_CNT: 17,
   SUB_ROLL_ASQ: 18,
   SUB_SUM_IMP : 20,

   // cache related
   RECLIMIT: 50000,

   // Column Info
   CD_DefaultStart: 10000,
   CD_AllRowTotal : 10001,
   CD_AcrossColumn: 10002,
   CD_AllField    : 10003,
   CD_AllBy       : 10004,
   CD_AllVerb     : 10005
};

var arSet = {
   FILTER_SEPARATOR: ',', // defaults to comma; settable later on
    FILTER_SEPARATOR_OPTIONAL: "[ibi$sep]"
};

var arXlChartType = {            // XlChartType Enumeration
   xl3DArea                   : -4098,     // 3D Area
   xl3DAreaStacked            : 78,     // 3D Stacked Area
   xl3DAreaStacked100         : 79,    // 100% Stacked Area
   xl3DBarClustered           : 60,    // 3D Clustered Bar
   xl3DBarStacked             : 61,    // 3D Stacked Bar
   xl3DBarStacked100          : 62,    // 3D 100% Stacked Bar
   xl3DColumn                 : -4100,     // 3D Column
   xl3DColumnClustered        : 54,    // 3D Clustered Column
   xl3DColumnStacked          : 55,     // 3D Stacked Column
   xl3DColumnStacked100       : 56,     // 3D 100% Stacked Column
   xl3DLine                   : -4101,     // 3D Line
   xl3DPie                    : -4102,     // 3D Pie
   xl3DPieExploded            : 70,     // Exploded 3D Pie
   xlArea                     : 1,     // Area
   xlAreaStacked              : 76,     // Stacked Area
   xlAreaStacked100           : 77,     // 100% Stacked Area
   xlBarClustered             : 57,     // Clustered Bar
   xlBarOfPie                 : 71,     // Bar of Pie
   xlBarStacked               : 58,     // Stacked Bar
   xlBarStacked100            : 59,     // 100% Stacked Bar
   xlBubble                   : 15,     // Bubble
   xlBubble3DEffect           : 87,    // Bubble with 3D effects
   xlColumnClustered          : 51,     // Clustered Column
   xlColumnStacked            : 52,     // Stacked Column
   xlColumnStacked100         : 53,     // 100% Stacked Column
   xlConeBarClustered         : 102,    // Clustered Cone Bar
   xlConeBarStacked           : 103,    // Stacked Cone Bar
   xlConeBarStacked100        : 104,    // 100% Stacked Cone Bar
   xlConeCol                  : 105,     // 3D Cone Column
   xlConeColClustered         : 99,     // Clustered Cone Column
   xlConeColStacked           : 100,     // Stacked Cone Column
   xlConeColStacked100        : 101,    // 100% Stacked Cone Column
   xlCylinderBarClustered     : 95,    // Clustered Cylinder Bar
   xlCylinderBarStacked       : 96,    // Stacked Cylinder Bar
   xlCylinderBarStacked100    : 97,     // 100% Stacked Cylinder Bar
   xlCylinderCol              : 98,     // 3D Cylinder Column
   xlCylinderColClustered     : 92,     // Clustered Cone Column
   xlCylinderColStacked       : 93,     // Stacked Cone Column
   xlCylinderColStacked100    : 94,    // 100% Stacked Cylinder Column
   xlDoughnut                 : -4120,     // Doughnut
   xlDoughnutExploded         : 80,     // Exploded Doughnut
   xlLine                     : 4,     // Line
   xlLineMarkers              : 65,    // Line with Markers
   xlLineMarkersStacked       : 66,     // Stacked Line with Markers
   xlLineMarkersStacked100    : 67,     // 100% Stacked Line with Markers
   xlLineStacked              : 63,     // Stacked Line
   xlLineStacked100           : 64,     // 100% Stacked Line
   xlPie                      : 5,    // Pie
   xlPieExploded              : 69,    // Exploded Pie
   xlPieOfPie                 : 68,     // Pie of Pie
   xlPyramidBarClustered      : 109,     // Clustered Pyramid Bar
   xlPyramidBarStacked        : 110,    // Stacked Pyramid Bar
   xlPyramidBarStacked100     : 111,     // 100% Stacked Pyramid Bar
   xlPyramidCol               : 112,    // 3D Pyramid Column
   xlPyramidColClustered      : 106,     // Clustered Pyramid Column
   xlPyramidColStacked        : 107,    // Stacked Pyramid Column
   xlPyramidColStacked100     : 108,     // 100% Stacked Pyramid Column
   xlRadar                    : -4151,     // Radar
   xlRadarFilled              : 82,    // Filled Radar
   xlRadarMarkers             : 81,     // Radar with Data Markers
   xlStockHLC                 : 88,     // High-Low-Close
   xlStockOHLC                : 89,    // Open-High-Low-Close
   xlStockVHLC                : 90,    // Volume-High-Low-Close
   xlStockVOHLC               : 91,    // Volume-Open-High-Low-Close
   xlSurface                  : 83,    // 3D Surface
   xlSurfaceTopView           : 85,    // Surface (Top View)
   xlSurfaceTopViewWireframe  : 86,    // Surface (Top View wireframe)
   xlSurfaceWireframe         : 84,     // 3D Surface (wireframe)
   xlXYScatter                : -4169,    // Scatter
   xlXYScatterLines           : 74,    // Scatter with Lines
   xlXYScatterLinesNoMarkers  : 75,    // Scatter with Lines and No Data Markers
   xlXYScatterSmooth          : 72,    // Scatter with Smoothed Lines
   xlXYScatterSmoothNoMarkers : 73     // Scatter with Smoothed Lines and No Data Markers
};

var arFocXlDateFormats = {  // FOCUS to Excel Date Formats
    "DMYY": "dd/mm/yyyy",
    "MDYY": "mm/dd/yyyy",
    "YYMD": "yyyy/mm/dd",
    "YYM" : "yyyy/mm"
};

var chartIsPie = 0;
var chartIsLine = 1;
var chartIsBar = 2;
var chartIsScat = 3;
var chartIsRoll = 4;
var chartIsPivot = 5;
var chartIsRmRoll = 6;
var chartIsFusion = 7;
var chartIsGoogle = 8;
var chartIsTDG = 9;

var ptypeEmail = 1;
var ptypeSave = 2;
var ptypeNote = 3;
var ptypePass = 4;

var dragObj = new Object();
dragObj.zIndex = 100;
var onclick_event = null;

var curCell = {'tablenumber':-1,'cellid':null};
var EnableGlobalFilter=false;
var hasdata = 0;
var genStyleDone = [];
var REPORTGRID=1,REPORTPIVOT=2,REPORTBAR=4,REPORTLINE=5,REPORTPIE=6,REPORTSCATTER=7;
var REPORTFUSION=8;
var REPORTGMAP=9;
var REPORTTDG=10;
var REPORTROLL=11;
var isMergeReports = false;
var pageObjects=null;
var layoutObjDivs=[];
var isCompoundCall = false;
var activeVisMode = false;

var arGraphEngineDEFAULT=1;
var arGraphEngineFUSION=2;
var arGraphEngineFLEX=3;
var arGraphEngineJSFUSION=4;
var arGraphEngineJSCHART=5;
var arGraphEngineFLEXCHART=6;
var arGraphEngine = 0;
var IRreq = null;

var defStatusColor = "#ECE9D8";

var callCount = 0;

var arr_n=((document.dir=='rtl')?'&#9668;':'&#9658;');
var arr_p=((document.dir=='rtl')?'&#9658;':'&#9668;');

var arDisplayMode = DISPLAY_MODE_DEFAULT;
var arAdaptiveOrientation = 'horizontal';
var b_hasActiveX = false;
var b_ie = navigator.userAgent.indexOf('MSIE') > -1;
var trident;
var trident_version;
if(b_ie) {
    b_hasActiveX = true;
    var b_ie_version = parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf('MSIE')+4),10);
   /*
    if(b_ie_version < 9)
    {
        trident=navigator.userAgent.indexOf("Trident/");
        if(trident)
        {
            trident_version=parseInt(navigator.userAgent.substring(trident+8),10);
            if(trident_version == 5)b_ie_version=9;  
            else if(trident_version > 6) {
                b_ie = false;
                b_ie_version = 11;
            }                                              
            else if(trident_version >5)b_ie_version=10;
        }
    }                              
    */
} else {
//If we are here, then we maybe ie 11 and up
    trident=navigator.userAgent.indexOf("Trident/");
    if(trident > -1)
        {
            b_hasActiveX = true;
            trident_version=parseInt(navigator.userAgent.substring(trident+8),10);
            if(trident_version == 5)b_ie_version=9;                                                
            else if(trident_version >5)b_ie_version=11;
        }
}


var b_pda = false;
var b_opera = false;

if(navigator.userAgent.indexOf('Opera') > -1) {
    var v = navigator.appVersion.split(' ');
    b_opera=true;
        b_ie = false;
    if(parseFloat(v[0])<9) {
        b_pda = true;
        arr_n='&gt;';
        arr_p='&lt;';
    }
}
var b_Playbook = navigator.userAgent.indexOf('PlayBook') > -1;
var b_Android = navigator.userAgent.indexOf('Android') > -1;
var b_iPad = navigator.userAgent.indexOf('iPad') > -1;
//b_iPad = true;
var b_iPhone = navigator.userAgent.indexOf('iPhone') > -1;
var b_iPod = navigator.userAgent.indexOf('iPod') > -1;
var b_ios = b_iPad | b_iPhone | b_iPod | b_Android | b_Playbook;
var b_uiView = false;
if((b_iPad || b_iPod || b_iPhone) && (navigator.userAgent.indexOf('Safari') < 0)) b_uiView = true;
var b_smallScreen = false;
var b_mobile = b_ios;
var b_iframe = false;
    var b_edge = false;
    if (/Edge\/\d./i.test(navigator.userAgent)){
        b_edge = true;
    }
if(window.location != (window.parent.location)) {
    b_mobile = false;
    b_ios = false;
    b_iframe = true;
}
if(screen.width<500) 
    b_smallScreen = true;
var ibiclassName = 'class';
if((b_ie) && (b_ie_version<9)) ibiclassName = 'class';

var Ardefault = new Object();
Ardefault.wincnbcolor = "#0079c1";
Ardefault.wincnbrcolor = "#ccddee";
Ardefault.chartSelect = "#EE3520";
Ardefault.checkbox = "#3394cd";

if(b_Android) {
    arr_n='&gt;';
    arr_p='&lt;';
}

if(b_mobile) {
    document.documentElement.style.webkitUserSelect='none';
    document.documentElement.style.webkitTouchCallout='none';
}
var pwn;
var MSWORD = 0, MSEXCEL = 1, MSPOWERPOINT = 2;
var typenone='NONE',typechart='CHART',typefilt='FILTER',typegbl='GLOBAL',typeac='CRTADV',typetab='IBITABS';
var typepmt='PROMPT',typepivot='PIVOT',typenotes='NOTES',typecols='EDITCOLS',typeechart='EDITCHARTS',typeepivot='EDITPIVOT',typefield="EDITFIELD";
var typefiltersel='FILTSEL';
var maxwindows = 32;
var winMoveX,winMoveY;
var winLastX,winLastY;
var colorTable=[];

colorTable["ibi"]=[[0x00,0x79,0xC1],[0xEE,0x2E,0x23],[0xb6,0x0C,0xB0],[0xA3,0xC3,0x66],[0xA1,0xa1,0xd9],
        [0xff,0xeb,0x95],[0x7f,0xad,0xdc],[0x2e,0x2e,0xab],[0x88,0x03,0xa4],[0x09,0xb8,0xce],[0x10,0x7a,0x16],
        [0x6c,0x95,0xc8],[0x3c,0x31,0x24],[0xbf,0xda,0xaa],[0xa9,0x6d,0xcd],[0x13,0x17,0xa2],[0x4e,0x2b,0x25],
        [0xff,0xef,0x79],[0xf0,0xab,0xc4],[0x42,0x46,0x49],[0x9e,0xd5,0xf3],[0xc3,0xda,0x7d],[0xd2,0x8f,0xff],
        [0xe6,0x79,0x58],[0x13,0x17,0xa2],[0xff,0xef,0x00],[0x00,0x98,0x52],[0xce,0x00,0x36],[0xf0,0x9f,0x61],
        [0x77,0x39,0x20]]; 
colorTable["tdg"]=["linear-gradient(0%,0%,100%,0%, 20% #0079c1, 95% #007900)",
        "linear-gradient(0%,0%,100%,0%, 20% #ee2e23, 95% #002e23)",
        "linear-gradient(0%,0%,100%,0%, 20% #b60cb0, 95% #b600b0)",
        "linear-gradient(0%,0%,100%,0%, 20% #a3c366, 95% #a3c300)",
        "linear-gradient(0%,0%,100%,0%, 20% #a1a1d9, 95% #a1a100)",
        "linear-gradient(0%,0%,100%,0%, 20% #ffeb95, 95% #ff0000)",
        "linear-gradient(0%,0%,100%,0%, 20% #7faddc, 95% #7f0000)",
        "linear-gradient(0%,0%,100%,0%, 20% #2e2eab, 95% #2e0000)",
        "linear-gradient(0%,0%,100%,0%, 20% #8803a4, 95% #880000)",
        "linear-gradient(0%,0%,100%,0%, 20% #09b8ce, 95% #090000)",
        "linear-gradient(0%,0%,100%,0%, 20% #107a16, 95% #100000)",
        [0x6c,0x95,0xc8],[0x3c,0x31,0x24],[0xbf,0xda,0xaa],[0xa9,0x6d,0xcd],[0x13,0x17,0xa2],[0x4e,0x2b,0x25],
        [0xff,0xef,0x79],[0xf0,0xab,0xc4],[0x42,0x46,0x49],[0x9e,0xd5,0xf3],[0xc3,0xda,0x7d],[0xd2,0x8f,0xff],
        [0xe6,0x79,0x58],[0x13,0x17,0xa2],[0xff,0xef,0x00],[0x00,0x98,0x52],[0xce,0x00,0x36],[0xf0,0x9f,0x61],
        [0x77,0x39,0x20]]; 
colorTable["ms"]=[[59,99,148],[74,121,177],[127,156,200],[150,60,59],[179,74,71],[202,126,126],[122,146,68],
        [146,175,83],[175,197,132],[99,77,126],[118,93,151],[155,137,179],[57,133,156],[71,161,185],
        [125,187,208],[195,117,53],[232,140,65],[248,170,121]];
colorTable["gray"]=[[49,82,132],[57,90,140],[57,99,148],[66,99,148],[66,107,156],[66,115,165],[74,115,173],
        [74,123,181],[74,123,189],[90,132,189],[115,148,198],[132,156,206],[148,165,206],
        [165,181,214],[173,189,214],[181,198,222],[198,206,222],[206,214,231],[214,222,231]];


var global_a_col_filter = [];
var global_a_cols = null;
var global_filter_andor=0;
var global_filter_type=0;
var gfilt = [];
var global_filterValues = [];
var global_acf = [];
var global_MI_FTV=[];

var a_filt_types;
var a_filt_name;
var a_calc_typesSTR;
var a_calc_typesDATE;
var a_calc_types;
var a_calc_scatt_types;
var a_calc_roll_types;
var a_calc_all_types, a_calc_all_types_display;

var check_mark='<span style="font-family:Helvetica;font-size:8pt">&#8730;<\/span>';
if(b_ie_version)
    check_mark='<span style="font-family:symbol;font-size:8pt">&#0214;<\/span>';

 
var menulist_obj = null;

var GlobalStr = 'BODY {margin:0px;padding:0;}\n';
    GlobalStr += '.ibiGlowReport {border: 4px solid #dadada;border-radius: 7px;outline: none;border-color: #9ecaed;box-shadow: 0 0 10px #9ecaed;}\n';
    GlobalStr += '.tabPagingTextTabi {font-size:10pt;background-color:#c8c8c8;}\n';
    GlobalStr += '.tabPagingTextTabo {font-size:10pt;background-color:#DDDDDD;}\n';
    if(b_mobile)
        GlobalStr += '.tabPagingArrowCell1 {width:20pt;text-align:center;}\n';
    else
        GlobalStr += '.tabPagingArrowCell1 {width:10pt;text-align:center;}\n';
    GlobalStr += '.notesText {white-space:nowrap;}\n';
    GlobalStr += '.tabFilter1 {font-size:12pt;height:18px;color:black;background:white;}\n';
    GlobalStr += '.tabFilterPattern1 {font-size:10pt;}\n';
    GlobalStr += '.tabFilterSelect1 {font-size:10pt;height:16px;}\n';
    GlobalStr += '.singledot {width:1px;height:1px;}\n';
    GlobalStr += ".pageNumber{font-family:Helvetica;z-index:100;font-size:24pt;position:absolute;top:3px;left:3px;background-color:#91969D;color:white;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;height: 50px;min-width:50px;border-width: 0px 8px 0px 8px;padding: 3;}\n";
    GlobalStr += ".slideA {position:absolute;margin: 0px;padding:0px;border-right:1px solid black;-webkit-transform:translate3d(0,0,0);}\n";
    GlobalStr += ".slideB {position:absolute;margin: 0px;padding:0px;-webkit-transform:translate3d(0,0,0);}\n";
    GlobalStr += ".iosDIV1 {font-family: Helvetica;overflow:visible;display: block;-webkit-transform-origin:0 0;-webkit-transform:scale(1.0);background-color:white;position:absolute;z-index:1002; margin: 0px; padding: 0px;}\n";
    GlobalStr += ".iosDIV1i {font-family: Helvetica;overflow:visible;display: block;-webkit-transform-origin:0 0;-webkit-transform:scale(1.0);position:absolute;z-index:1002; margin: 0px; padding: 0px;}\n";
    GlobalStr += ".iosDIV2i {font-family: Helvetica;overflow:hidden;display: block;width: 300px;-webkit-transform-origin:0px 0px; position:absolute;background-color:#FFFFFF;border:6px solid black;border-radius:15px;-webkit-border-radius:15px;-moz-border-radius:15px}\n";
    GlobalStr += ".iosDIVl {font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:50px;border-right:1px solid black;width: 300px;min-height: 300px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosDIVl3 {font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:0px;width: 300px;min-height: 300px;}\n";
    GlobalStr += ".iosDIVl2 {font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:0px;border-right:1px solid black;width: device-width;min-height: 418px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosDIVr {font-family: Helvetica;background-color:#c8c8c8;display:hidden;position:absolute;left:301px;top:0px;width:400px;border-right:1px solid black;min-height: 418px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosDIVr2 {font-family: Helvetica;background-color:#c8c8c8;display:hidden;position:absolute;left:0px;top:0px;width:device-width;min-height: 418px; margin: 0;padding:0px;}\n";
    GlobalStr += ".iosDIVUL {font-family: Helvetica;border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;display: block;background-color:#FFFFFF;left: 0px;top: 41px;width: 96%; margin: 0px;  padding: 0px;}\n";
    GlobalStr += ".iosmDIV1 {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;overflow:visible;display: block;-webkit-transform-origin:0 0;-webkit-transform:scale(1.0);background-color:white;position:absolute;z-index:1002; margin: 0px; padding: 0px;}\n";
    GlobalStr += ".iosmDIV1i {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;overflow:visible;display: block;-webkit-transform-origin:0 0;-webkit-transform:scale(1.0);position:absolute;z-index:1002; margin: 0px; padding: 0px;}\n";
    GlobalStr += ".iosmDIV2i {overflow:auto;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;display: block;width: 300px;-webkit-transform-origin:0px 0px; position:absolute;background-color:#FFFFFF;border:6px solid black;border-radius:15px;-webkit-border-radius:15px;-moz-border-radius:15px}\n";
    GlobalStr += ".iosmDIVl {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:50px;border-right:1px solid black;width: 300px;min-height: 300px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosmDIVl3 {overflow:visible;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:0px;width: 300px;min-height: 300px;}\n";
    GlobalStr += ".iosmDIVl2 {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;background-color:#c8c8c8;position:absolute;left:0px,top:0px;border-right:1px solid black;width: device-width;min-height: 418px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosmDIVr {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;background-color:#c8c8c8;display:hidden;position:absolute;left:301px;top:0px;width:400px;border-right:1px solid black;min-height: 418px; margin: 0px;padding:0px;}\n";
    GlobalStr += ".iosmDIVr2 {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;background-color:#c8c8c8;display:hidden;position:absolute;left:0px;top:0px;width:device-width;min-height: 418px; margin: 0;padding:0px;}\n";
    GlobalStr += ".iosmDIVUL {overflow-y:scroll;-webkit-overflow-scrolling:touch;font-family: Helvetica;border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;display: block;background-color:#FFFFFF;left: 0px;top: 41px;width: 96%; margin: 0px;  padding: 0px;}\n";
    GlobalStr += ".iosDIV,";
    GlobalStr += ".iosFORM {font-family: Helvetica;border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;display: block;background-color:#FFFFFF;left: 0px;top: 41px;width: 100%;min-height: 418px; margin: 0px;  padding: 0px;}\n";
    GlobalStr += ".iosDIVULLI {font-family: Helvetica;margin: 0;border-bottom: 1px solid #E0E0E0;padding: 0;font-size: 18px;font-weight: bold;list-style: none;}\n";
    GlobalStr += ".iosDIVULLIA {font-family: Helvetica;display: block;padding: 8px 32px 8px 8px;text-decoration: none;color: inherit;}\n";
    GlobalStr += ".iosfieldset {font-family: Helvetica;box-sizing:border-box;width:100%;margin:0;border:none;padding:10px 6px;}\n";
    GlobalStr += ".iosfieldseth1 {margin: 0 10px 0 10px;padding:0;font-size:18px;font-weight:bold;color:#FFFFFF;text-shadow: rgba(0, 0, 0, 0.6) 0px -1px 0;text-align:center;}\n";
    GlobalStr += ".iosGridTop {font-family: Helvetica;overflow:hidden;background-color:#c8c8c8;position:absolute; margin: 0;padding:0;}\n";
    GlobalStr += ".iosGridMid {font-family: Helvetica;overflow:hidden;position:absolute; margin: 0;padding:0;}\n";
    GlobalStr += ".iosGridTab {overflow:hidden; position:absolute; margin: 0;padding:0;}\n";
    GlobalStr += ".iosGridBot {font-family: Helvetica;overflow:hidden;background-color:#c8c8c8;position:absolute; margin: 0;padding:0;}\n";
    GlobalStr += ".slide {border-left:1px solid black;border-right:1px solid black;position:absolute; overflow:hidden;margin: 0;padding:0;-webkit-animation-name: none;-webkit-animation-duration: .8s; -webkit-animation-iteration-count: 1;}\n";
    GlobalStr += ".sliden {;position:absolute; overflow:hidden;margin: 0;padding:0;-webkit-animation-name: none;-webkit-animation-duration: .8s; -webkit-animation-iteration-count: 1;}\n";
    GlobalStr += ".iosH1 {font-family: Helvetica;box-sizing: border-box;margin: 0;padding: 10px;line-height: 20px;font-size: 18px;font-weight:bold;text-align:center;text-shadow: rgba(0, 0, 0, 0.6) 0px -1px 0;";
    GlobalStr += "text-overflow:ellipsis;color:#AEAEAE;border-bottom: 1px solid #3f4e63;}\n";

    

var GlobalStyle  = '\n<style type="text/css">\n'+GlobalStr+'<\/style>\n';

var IosStyle = "body {margin: 0;font-family: Helvetica;overflow: hidden;-webkit-text-size-adjust: none;}\n";
//    IosStyle += "input{box-sizing:border-box;width:100%;margin:6px 0px 0px 0px;padding:6px 6px 6px 44px;font-size:16px;font-weight:normal;}\n";

var ID_hover_filter_style = ' onmouseover="this.style.background=\'rgba(67,100,80,0.15)\';" onmouseout="this.style.background=\'\';" ';
var Tooltip_ext_props = '';
    if(b_mobile)
        Tooltip_ext_props = 'padding-bottom:5px;padding-top:5px;font-size:100%;';

var MI_POP = new Array();
var MI_XP_COL = new Array();
var MP_ARRAY = new Array();
var hide_delay=120000;
if(b_pda) hide_delay=120000;

var MP_POP_L = [
{'height':2,'width':15,'top':-15,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing': 2,'width': 130,'top': -8,'left': 80,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'top': -8,'width': 144,'left':80}
];
 
var MP_POP_R = [
{'height':2,'width':15,'top':-15,'left':-134,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing': 2,'width': 126,'top': -8,'left': -134,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'top': -8,'left':-134,'width': 126}
];
 
 
var MP_ADD = [
{'height':2,'width':100,'top':0,'left':0,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width': 132,'top':-2,'left':-79,'scrollable':true,'css':{'outer':['arMenu'],'inner':['arMenu','arMenuHover']}},
{'width': 150,'left':122},
{'width': 150}
];
 
var MP_AGG = [
{'height':2,'width':60,'top':-16,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':100,'top':-8,'left':0,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'width':100,'left':50}
];

var MP_AGG2 = [
{'height':2,'width':90,'top':-16,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':100,'top':-8,'left':0,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'width':100,'left':50}
];

var MP_CFT = [
{'height':2,'width':60,'top':-16,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':200,'top':-8,'left':150,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'top':-8,'width':150,'left':100}
];

var MP_GRP = [
{'height':8,'width':16,'top':0,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':120,'top':-10,'left':80,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'width':100,'left':50,'scrollable':true}
];
 

var MP_FT = [
{'height':2,'width':12,'top':0,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':120,'top':-2,'left':-104,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}}
];

var MP_FTV = [
{'height':2,'width':12,'top':0,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':120,'top':-2,'left':-104,'scrollable':true,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}}
];


var blankdot = '<div style="width:1px;height:1px;border:none;margin:0;padding:0"><table border=0 cellpadding=0 cellspacing=0 width=1>'+
            '<tr><td class="singledot"><\/td><\/tr><\/table><\/div>';
}

if(typeof ibiMsgStr == "undefined")
    var ibiMsgStr = null;
else {
    showLoadingMessage();
}

function showLoadingMessage() {
    if(typeof(arHideLoadingMessage)=="undefined" || !arHideLoadingMessage) {
        var lar = document.getElementById("loadingARMsg");
        if(!lar)
            lar = document.createElement("div");
        var larcss = "position:absolute;left:0;top:32px;width:100%;text-align:center;";
        if(b_ie)lar.style.setAttribute("cssText", larcss);
        else lar.setAttribute("style", larcss);
        lar.setAttribute("id", "loadingARMsg");
        lar.setAttribute("class", "arLoadingMessage");
        lar.innerHTML = ibiMsgStr["Loading"];
        var bodyRef = document.getElementsByTagName("body")[0];
        if(bodyRef)
            bodyRef.appendChild(lar);
    }
}

function initvars()
{

    if(ibiMsgStr == null)
        return false;

    for(var s in ibiMsgStr)
        ibiMsgStr[s] = fixMsgStr(ibiMsgStr[s]);

    if(document.dir==='rtl'){
        for(var key in ibiMsgStr) {
            ibiMsgStr[key] = ibiMsgStr[key].replace(/\(([\w ]+)\)/g,'\u202a\($1\)\u202b');
            if( ibiMsgStr[key].match(/\%rcs .. \%trcs/) === 'null' ) {
                ibiMsgStr[key] = ibiMsgStr[key].replace(/(\%rcs )/g,'\u202a$1\u202b');
            }
        }
    }

    if(typeof tdginfoInit != "undefined")
        tdginfoInit(ibiMsgStr);

    a_filt_types = [
        [ibiMsgStr['eq'], arConstants.FILTER_IN,'EQ'],
        [ibiMsgStr['neq'],arConstants.FILTER_NOTIN,'NE'],
        [ibiMsgStr['grt'],arConstants.FILTER_GT,'GT'],
        [ibiMsgStr['gre'],arConstants.FILTER_GE,'GE'],
        [ibiMsgStr['lss'],arConstants.FILTER_LT,'LT'],
        [ibiMsgStr['lse'],arConstants.FILTER_LE,'LE'],
        [ibiMsgStr['bet'],arConstants.FILTER_BETWEEN,'BT'],
        [ibiMsgStr['nbt'],arConstants.FILTER_NOTBETWEEN, 'NB'],
        [ibiMsgStr['cnt'],arConstants.FILTER_CONTAIN,'CT'],
        [ibiMsgStr['ctm'],arConstants.FILTER_CONTAIN_CS,'CTM'],
        [ibiMsgStr['omt'],arConstants.FILTER_OMIT,'OMIT'],
        [ibiMsgStr['omm'],arConstants.FILTER_OMIT_CS,'OMITM']
        ];
    a_filt_name = [];
    for (var i=0; i<a_filt_types.length;i++) a_filt_name[a_filt_types[i][1]] = a_filt_types[i][0];
    a_calc_typesSTR = {'COU':ibiMsgStr['cou'],'DIS':ibiMsgStr['cds']};
    a_calc_typesDATE = {'MIN':ibiMsgStr['irmin'],'MAX':ibiMsgStr['irmax'],'COU':ibiMsgStr['cou'],'DIS':ibiMsgStr['cds']};
    a_calc_types = {'SUM':ibiMsgStr['irsum'],'AVG':ibiMsgStr['iravg'],'MIN':ibiMsgStr['irmin'],'MAX':ibiMsgStr['irmax'],'COU':ibiMsgStr['cou'],'DIS':ibiMsgStr['cds']};
    a_calc_scatt_types = {'NONE':ibiMsgStr['detail']};
    a_calc_roll_types = {'SUM':ibiMsgStr['irsum'],'AVG':ibiMsgStr['iravg'],'MIN':ibiMsgStr['irmin'],'MAX':ibiMsgStr['irmax'],'COU':ibiMsgStr['cou'],'DIS':ibiMsgStr['cds'],'NONE':ibiMsgStr['detail']};
    a_calc_all_types = a_calc_roll_types;

    a_calc_all_types_display = {
        'PCT.CNT': 'PCT.CNT',
        'CNT.DST': ibiMsgStr['ircnd'],
        'FST': 'FST',
        'LST': 'LST',
        'TOT': 'TOT',
        'PCT': ibiMsgStr['pct'],
        'RPCT': 'RPCT',
        'MDN': 'MDN',
        'ASQ': 'ASQ',
        'SUM': ibiMsgStr['irsum'],
        'AVG': ibiMsgStr['iravg'],
        'AVE': ibiMsgStr['iravg'],
        'MIN': ibiMsgStr['irmin'],
        'MAX': ibiMsgStr['irmax'],
        'CNT': ibiMsgStr['cou'],
        'COU': ibiMsgStr['cou'],
        'DIS': ibiMsgStr['cds'],
        'NONE': ibiMsgStr['detail']
    };
    return true;
}

(function() {
    var wait_win=null;
    var wait_count = 0;

    if (typeof window.ibiStd !== 'undefined') {
        return;
    }
    
	/*
    if(typeof(arHideLoadingMessage)=="undefined" || !arHideLoadingMessage) {
        var lar = document.createElement("div");
        var larcss = "position:absolute;left:0;top:32px;width:100%;text-align:center;";
        if(b_ie)lar.style.setAttribute("cssText", larcss);
        else lar.setAttribute("style", larcss);
        lar.setAttribute("id", "loadingARMsg");
        lar.setAttribute("class", "arLoadingMessage");
        lar.innerHTML = ibiMsgStr["Loading"];
        var bodyRef = document.getElementsByTagName("body")[0];
        if(bodyRef)
            bodyRef.appendChild(lar);    
    }
	*/


    window.ibiStd = {
        copyObject: CopyObject,
        mergeObject: MergeObject,
        decompress: Decompress,
        ShowWait: show_wait,
        ShowWaitSB: show_wait_sb,
        HideWait: hide_wait,
        HideWaitSB: hide_wait_sb,
        HideURLbar:hideURLbar,
        getTable: GetTable,
        messageLog: {},
        setLogMessage: SetLogMessage,
        getLogMessage: GetLogMessage,
        javaScriptDateToIbiDate:JavaScriptDateToIbiDate,
        ibiDateToFormat:IbiDateToFormat,
        ibiDateToJavaScriptDate:IbiDateToJavaScriptDate,
        mapFilterObjectCondition:MapFilterObjectCondition,
        mapFilterObjectConditionReverse:MapFilterObjectConditionReverse,
        ibiNumberToFormat:IbiNumberToFormat,
        trace:arTrace,
        traceObject:arTraceObject,
        id2jdLookup:{}
    };

    function SetLogMessage(str,id){
        if(typeof(ibiStd.messageLog[id])=="undefined")
            ibiStd.messageLog[id] = '';
        ibiStd.messageLog[id] += str;
    }
    function GetLogMessage(id) {
        if(typeof(ibiStd.messageLog[id]) != "undefined")
        return ibiStd.messageLog[id];
        else
            return "";
    }

    function IbiNumberToFormat(val,format,roundHow,roffSeed,pad)
    {
        var blanks = "                   ";
        var rv = val;
        if ((format.indexOf("F") != -1) ||
             (format.indexOf("P") != -1) ||
             (format.indexOf("D") != -1)) {
            var ff = format.indexOf(".");
            var offs = 0;
            if(roundHow == arConstants.NUMBER_ROUND_HIGH)
                offs = 0.5;
            if(roundHow == arConstants.NUMBER_ROUND_LOW)
                offs = -1;
            var roff = (typeof roffSeed === "undefined") ? 0 : roffSeed; // tempFix till resolve why seed is 2;
            if (ff != -1)
                roff = parseInt(format.substr(ff + 1));
            var roundOff = Math.pow(10, roff);
            rv = Math.round(val * roundOff + offs) / roundOff;
        }
        if(pad) {
            rv = rv+'';
            var nlength = parseInt(format.substr(2));
            if(nlength > rv.length)
                rv = blanks.substr(0,nlength-rv.length)+rv;
        }
        return rv;
    }

    function MapFilterObjectCondition(iCond)
    {
        var cond = arConstants.FILTER_IN;
        switch(iCond) {
            case 1: cond = arConstants.FILTER_IN; break; /* EQ */
            case 2: cond = arConstants.FILTER_NOTIN; break;
            case 3: cond = arConstants.FILTER_GT; break;
            case 4: cond = arConstants.FILTER_LT; break;
            case 5: cond = arConstants.FILTER_GE; break;
            case 6: cond = arConstants.FILTER_LE; break;
            case 7: cond = arConstants.FILTER_BETWEEN; break;
            case 8: cond = arConstants.FILTER_NOTBETWEEN; break;
        }
        return cond;
    }

    function MapFilterObjectConditionReverse(iCond)
    {
        var cond = 1;
        switch(iCond) {
            case arConstants.FILTER_IN: cond = 1; break; /* EQ */
            case arConstants.FILTER_NOTIN: cond = 2; break;
            case arConstants.FILTER_GT: cond = 3; break;
            case arConstants.FILTER_LT: cond = 4; break;
            case arConstants.FILTER_GE: cond = 5; break;
            case arConstants.FILTER_LE: cond = 6; break;
            case arConstants.FILTER_BETWEEN: cond = 7; break;
            case arConstants.FILTER_NOTBETWEEN: cond = 8; break;
        }
        return cond;
    }

    function JavaScriptDateToIbiDate(iDate,format,forDisplay) {
        if(iDate == null)
            return '';
        var d = new Date();
        d.setTime(iDate);

        var isQuarter = format.indexOf('q');
        var isMonth = format.indexOf('m');
        var isYear = format.indexOf('y');

        var order=[];
        var hasYear = format.indexOf("Y");
        if(hasYear!=-1)
            order[hasYear] = "Y";
        var hasYYear = format.indexOf("YY");
        if(hasYYear!=-1)
            order[hasYYear] = "YY";
        var hasMonth = format.indexOf("M");
        if(hasMonth!=-1)
            order[hasMonth] = "M";
        var hasDay = format.indexOf("D");
        if(hasDay!=-1)
            order[hasDay] = "D";


        var dv = '';

        if(format == "IBIDATE")
            dv = d.getFullYear() +((d.getMonth() < 9) ? '0' : '') + (d.getMonth()+1) + '' + ((d.getDate() < 10) ? '0' : '') + d.getDate() + '';
        else
        if(isQuarter != -1) {
            dv = d.getFullYear() + ' Q' + (parseInt((d.getMonth()+3) / 3,10)) ;
        } else
        if(isYear != -1) {
            dv = d.getFullYear()+'';
        } else
        if(isMonth != -1) {
            dv =  d.getFullYear()+ '/' + ((d.getMonth()<9)?'0':'') + (d.getMonth()+1);
        } else {
            dv =  ((d.getMonth()<9)?'0':'')+(d.getMonth()+1)+'/'+((d.getDate()<10)?'0':'')+ d.getDate()+'/'+d.getFullYear();
            if(forDisplay) {
                dv = '';
                var first = false;
                for(var i=0; i<order.length;i++) {
                    if(typeof order[i] != "undefined") {
                        if(first)
                            dv += '/';
                        first = true;
                        switch(order[i]) {
                                case "D":
                                    dv += ((d.getDate() < 10) ? '0' : '') + d.getDate();
                                    break;
                                case "M":
                                    dv += ((d.getMonth() < 9) ? '0' : '') + (d.getMonth() + 1);
                                    break;
                                case "Y":
                                    var yyy = d.getFullYear()+'';
                                    dv += yyy.substr(2);
                                    break;
                                case "YY":
                                    dv += d.getFullYear();
                                    break;

                        }
                    }
                }
            }
        }
        return dv;
    }

    function IbiDateToFormat(iDate,format,forApi,forceYY) {
        if(iDate == null)
            return '';

        var d = iDate+'';
        if(d.indexOf(" Q")>-1) {
            return iDate;
        } else
        if(d.indexOf("/")>-1) {
            d = d.split("/");
            if(d.length != 3) {
                //may already be formated
                return iDate;
            }
            d = d.join("");
            d = ibiStd.ibiDateToJavaScriptDate(d,format,true)+'';
        } else
            if(d.length<6)
                d = ibiStd.ibiDateToJavaScriptDate(d,format,true)+'';
        var i;
        if(d.indexOf('e')!=-1)
           d = (iDate/1000000) + '';
        var isQuarter = format.indexOf('q');
        var isMonth = format.indexOf('m');
        var isYear = format.indexOf('y');
        var hasYear = format.indexOf("Y");
        var hasYYear = format.indexOf("YY");
        var hasMonth = format.indexOf("M");
        var hasDay = format.indexOf("D");
        var order = [];
        if(hasYear && forceYY) {
            if(d.length==6)
                d = "00"+d;
            hasYYear = true;
        }

        if(forApi) {
            isQuarter = -1;
            isMonth = -1;
            isYear = -1;
        }

        if((hasYear != -1) || ( hasYYear != -1)) {
            hasYear = 2;
            if(hasYYear != -1)
                hasYear = 4;
        } else
        hasYear = 0;
        var yy = d.substr(0,4);
        var mm = d.substr(4,2)*1;
        var dd = d.substr(6,2)*1;
        var month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        var dv = '';

        if((hasYear == 2) || (format.indexOf("I6")!=-1))
            yy = yy.substr(2,2);

        if(format == "IBIDATE")
            dv = yy +((mm < 10) ? '0' : '') + (mm) + '' + ((dd < 10) ? '0' : '') + dd + '';
        else
        if(isQuarter != -1) {
            dv = yy + ' Q'+(parseInt((mm+2) / 3,10));
        } else
        if(isYear != -1) {
            dv = yy+'';
        } else
        if(isMonth != -1) {
            if(forApi)
                dv = ((mm < 10) ? '0' : '') + mm + ' ' + yy;
            else
                dv =  month[mm-1] + ' ' + yy;
        } else
        if((forApi) || (format.indexOf("I")!=-1)) {
            if(hasYYear != -1)
                order[hasYYear] = yy+'';
            else
            if(hasYear != -1) {
                hasYYear = format.indexOf("Y");
                var yys = yy+'';
                order[hasYYear] = yys.substr(yys.length-2);
            }

            if(hasMonth != -1)
                order[hasMonth] = ((mm < 10) ? '0' : '') + mm;
            if(hasDay != -1)
                order[hasDay] = ((dd < 10) ? '0' : '') + dd;

            if(forApi) {
                dv = '';
                for (i=0; i < order.length; i++)
                    if(typeof(order[i])!="undefined")
                        dv += order[i];
            } else
            dv = yy + ((mm < 10) ? '0' : '') + (mm) + '' + ((dd < 10) ? '0' : '') + dd + '';
        }  else
           // dv =  ((mm<10)?'0':'')+(mm)+'/'+((dd<10)?'0':'')+ dd+'/'+yy;
            dv = ((hasMonth != -1) ?month[mm-1]+' ': '')+((hasDay != -1) ? dd+' ' : '')+yy;
        return dv;
    }

    function IbiDateToJavaScriptDate(iDate,format,shortDate) {
        var key = iDate+':'+format+':'+shortDate;
        if(ibiStd.id2jdLookup[key])
            return ibiStd.id2jdLookup[key];
        var d = iDate+'';
        if(d.indexOf('e')!=-1)  //Number too big, so it becomes exponent
            d = (iDate/1000000) + '';
        var sp = d.split(' ');
        var sp2 = d.split('/');
        var mm;
        var yy;
        var dd;
        var d1,d2;
        var mp,yp,dp,yyp;
       var yi=-1,mi=-1,di=-1;
        yp = format.indexOf('Y');
        yyp = format.indexOf('YY');
        mp = format.indexOf('M');
        dp = format.indexOf('D');
        var mmp = (format.indexOf('m') != -1);
        var tp = format.indexOf('t');
        var parts = d.split("/").length;
       if(yp!=-1) {
          yi = 0;
          if((mp!=-1)&&(mp<yp))
            yi++;
          if((dp!=-1) && (dp<yp))
            yi++;
       }
       if(mp!=-1) {
          mi = 0;
          if(yi==0)
            mi++;
          if((dp!=-1) && (dp<mp))
            mi++;
       }
       if(dp != -1) {
          di = 0;
          if((yi==0)||(mi==0)) {
             di++;
             if ((yi==1)||(mi==1))
                di++;
          }

       }
        if(format.indexOf('I')!=-1) {
            if(yp>0)
                yp = yp - 2;
            if(mp>0)
                mp = mp - 2;
            if(dp>0)
                dp = dp - 2;
            if(yyp>0)
                yyp = yyp - 2;
        }
        if(isNaN(iDate) && (iDate.length==3) &&  (mp != -1) && (tp != -1)) {
            var month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
            mm = inarray(month,iDate.toUpperCase(),true);
            if(mm>-1)
                mm++;
            d1 = mm+'/01/2016';
            d2 = Date.parse(d1);
            d2 = new Date(d2).getTime();
            ibiStd.id2jdLookup[key] = d2;
            return d2;
        } else
        if(isNaN(iDate) && mmp  && parts==2) {
            d1 = d.split("/");
            d2 = d1[0]+"/01/"+d1[1];
            d2 = Date.parse(d2);
            d2 = new Date(d2).getTime();
            ibiStd.id2jdLookup[key] = d2;
            return d2;
        } else
        if(isNaN(iDate) && (sp.length!=2) && (sp2.length!=2) && (sp.length!=3) && (sp2.length!=3)) {
            ibiStd.id2jdLookup[key] = null;
            return null;
        }


        if(sp2.length>1) {
            if((yp != -1)&&(typeof sp2[yi]!="undefined")) {
               yy = sp2[yi];
            } else
                yy = '1970';

            if((mp != -1)&&(typeof sp2[mi]!="undefined"))
                mm = sp2[mi];
            else
                mm = '01';

            if((dp != -1)&&(typeof sp2[di]!="undefined"))
                dd = sp2[di];
            else
                dd = '01';
        } else
        if(sp.length==1) {
            if(d.length == 2 || d.length == 1) {
                dd = "00";
                mm = "00";
                d1 = d;
                if(d.length == 1)
                    d1 = "0"+d;
                if(d<20)
                    yy = "20"+d1;
                else
                    yy = "19"+d1;
            } else
            //Must be a date in the format YY or YYMD or YMD
            if(d.length==4) {
                dd = "01";
                mm = "01";
                yy = d;
            } else
            if(d.length==6) {
                yy = d.substring(0,2);
                mm = d.substring(2,4);
                dd = d.substring(4,6);
                //must be focus format
                if((dd*1>31)||(mm*1>12)) {
                    var ar=[];
                    var mmp = mp;
                    if(mp>-1) {
                        ar[0] = "month";
                    } else
                        mmp = 99;
                    var ddp = dp;
                    if(dp>-1) {
                        if(ar.length==0)
                            ar[0] = "day";
                        else {
                            if (dp < mp)
                                ar.splice(0,0,["day"]);
                            else
                                ar[ar.length]="day";
                        }
                    } else
                        ddp = 99;
                    if(yp>-1) {
                        if(ar.length==0) {
                            ar.splice(0, 0, "year");
                            if(yyp>-1)
                                ar.splice(0, 0, "year");
                        }
                        else {
                            if ((yp < mmp) && (yp < ddp)) {
                                ar.splice(0, 0, "year");
                                if(yyp>-1)
                                    ar.splice(0, 0, "year");
                            } else
                            if((yp < mmp) || (yp < ddp)) {
                                ar.splice(1, 0, "year");
                                if(yyp>-1)
                                    ar.splice(1, 0, "year");
                            } else {
                                ar.splice(ar.length, 0, "year");
                                if(yyp>-1)
                                    ar.splice(ar.length, 0, "year");
                            }
                        }
                    }

                    if(yp != -1) {
                        yy = d.substr(inarray(ar,"year",true)*2,2);
                        if(yyp != -1)
                            yy = d.substr(inarray(ar,"year",true)*2,4);
                    } else
                        yy = '1970';

                    if(mp != -1)
                        mm = d.substr(inarray(ar,"month",true)*2,2);
                    else
                        mm = '01';

                    if(dp != -1)
                        dd =  d.substr(inarray(ar,"day",true)*2,2);
                    else
                        dd = '01';

                }
            } else {
                if(d.length==7)
                    d = '0'+d;
                mm = d.substr((mp-1)*2,2);
                if(mm>12) {  //format doesnt match actual date passed
                    yp = 1;
                    ypp = 1;
                    dp = 4;
                    mm = d.substr(4,2);
                }
                if(yyp==-1)
                    yp++;
                yy = d.substr((yp-1)*2,(yyp==-1?2:4));
                dd = d.substr((dp-1)*2,2);
            }
        } else {
            //Must be a date in format Q YY,
            if(sp[1].substr(0,1) == 'Q') {
                yy = sp[0];
                dd = '01';
                q = sp[1].substr(1)*1;
                mm = ((q-1)*3+1)+'';
                if(mm.length==1) mm = '0'+mm;
            } else
            if(sp[0].substr(0,1) == 'Q') {
                yy = sp[1];
                dd = '01';
                q = sp[0].substr(1)*1;
                mm = ((q-1)*3+1)+'';
                if(mm.length==1) mm = '0'+mm;
            } else {
                yy = sp[1];
                dd = '01';
                mm = sp[0];
            }

        }

        if(yy.length==2)
            yy = '19'+yy;

        if(shortDate) {
            ibiStd.id2jdLookup[key] = (yy + mm + dd) * 1;
            return (yy+mm+dd)*1;
        }
        d1 = mm+'/'+dd+'/'+yy;
        d2 = Date.parse(d1);
        d2 = new Date(d2).getTime();
        ibiStd.id2jdLookup[key] = d2;
        return d2;
    }

    function CopyObject(obj_from)
    {
        var t=typeof(obj_from);
        if(obj_from==null) return(null);
        else
        if(t!="object") return(obj_from);
        var isArray  = true;
        var obj;
        //for(var i in obj_from) {
        //    if(typeof(obj_from[i])=='function') continue;
        //    if(isNaN(i)) isArray = false;
        //}
        isArray = (Object.prototype.toString.call(obj_from) === "[object Array]");
        //temp fix 
        if(!isArray) {
            if(typeof(obj_from["______array"])!="undefined") isArray = true;
        }
        if(isArray) obj = [];
        else obj = new Object();
        for(var i in obj_from) {
            if((typeof(obj_from[i])=='function') &&
                (i!='formatCallback') &&
                (i!='url') &&
                (i!='attribution')
                  ) continue;
            obj[i] = this.copyObject(obj_from[i]);
        }
        return(obj);
    }

    function MergeObject(obj,obj_from)
    {
        for (var p in obj_from) {
            if((typeof(obj_from[p])=='function') &&
                (p!='formatCallback') &&
                (p!='url') &&
                (p!='attribution')
                  ) continue;
               try {
                  // Property in destination object set; update its value.
                      if ( typeof(obj_from[p]) == 'object' ) {
                        obj[p] = MergeObject(obj[p], obj_from[p]);
                      } else {
                        obj[p] = obj_from[p];
                      }
                } catch(e) {
                  // Property in destination object not set; create it and set its value.
                      obj[p] = ibiStd.copyObject(obj_from[p]);
                }
          }
          return obj;
    }
    
    function GetTable(table_name)
    {
        var i;
		for(i=0; i < MyTable.length; i++) {
            if(MyTable[i].deleted)
                continue;
            if(MyTable[i].table_name == table_name) return MyTable[i];
        }
        return null;
    }

    function Decompress(jsStr,index,key){
        var m = jsStr.split('@');
        var k={},i;
        for(i=0;i<key.length;i++)
            k[key.charAt(i)]=index[i];
        i = 1;
        while(i<m.length) {
            m[i]=k[m[i].charAt(0)]+m[i++].substr(1);
        }
        return(m.join(''));
    }


    function show_wait_sb(msg,tn) {
        var obj = document.getElementById('smsg'+tn);
        if(obj) obj.innerHTML = '['+msg+']';
        show_wait('');
    }

    function show_wait(msg)
    {
        var imsg = '';
        if(msg) imsg = msg;
        wait_count++;
        if(wait_win==null) 
            wait_win = d.getElementById('waitwin');
        if(wait_win) {
            var pw = wait_win.parentNode;
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

            var line = '<div style="background-color:gray;opacity:0.2;filter:alpha(opacity=20);top:0;left:0;position:absolute;height:' + h + 'px;width:' + w + 'px;"><\/div>';
            line += '<div style="position:absolute;top:' + parseInt(h / 2) + 'px;left:' + parseInt(w / 2) + 'px;">' + ibiSkin.loadingImg + '<br>' +
                imsg + '<\/div>';
            wait_win.innerHTML = line;
            wait_win.style.zIndex = 2000;
            wait_win.style.height = h + 'px';
            wait_win.style.width = w + 'px';
            wait_win.style.top = d.body.scrollTop + 'px';
            wait_win.style.left = d.body.scrollLeft + 'px';
            wait_win.style.visibility = 'visible';
            document.getElementById('waitwin').style.display = "none";
            document.getElementById('waitwin').offsetHeight;
            document.getElementById('waitwin').style.webkitTransform = 'scale(1)';
            document.getElementById('waitwin').style.display = "block";
        }
    }

    function hide_wait_sb(tn) {
        var obj = document.getElementById('smsg'+tn);
        if(obj) obj.innerHTML ='';
        hide_wait();
    }
    
    function hide_wait()
    {
        wait_count--;
        if(wait_win==null) wait_win=d.getElementById('waitwin');
        if((wait_win!=null) &&(wait_count<1)) {
            wait_win.style.visibility='hidden';
            wait_win.style.display = 'none';
        }
        if(onclick_event!=null) {
            if(Events['onclick'].callback!=null)
                Events['onclick'].callback(onclick_event);
            onclick_event = null;
        }
        if(wait_count<0) wait_count=0;
        setTimeout(function(){ibiCompound.DoAnyTrans();},0);
    }


    function hideURLbar()
    {
        window.addEventListener("load",
            function(e){
                setTimeout(
                    function(){
                        window.scrollTo(0,0.9);
                    },200);
                });
    }

   function arTrace(str,mytable)
   {
      if(ar_trace)
         mytable.showMessage(str,"trace");
   }

   function arTraceObject(obj,mytable)
   {
      rstr = writeobjout(obj,true);
      rstr = HTMLencode(rstr);
      ibiStd.trace(rstr,mytable);
   }

})();

if(document.addEventListener)
    document.addEventListener("keypress",arTestForTrace);
else
    document.attachEvent("onkeypress",arTestForTrace);

var arTestForTraceHandle = null;
var arTestForTraceCC = 0;
function arTestForTrace(keyStroke) {
    var str = "trace$";
    var keyCode = (keyStroke.which) ? keyStroke.which : keyStroke.keyCode;
    var keyString = String.fromCharCode(keyCode).toLowerCase();
    if(keyString == str.substr(arTestForTraceCC,1)) {
        arTestForTraceCC++;
        if(arTestForTraceCC==str.length) {
            ar_trace = !ar_trace;
            if(ar_trace) alert("trace enabled");
            else alert("trace disabled");
        } else {
            if (arTestForTraceHandle)
                window.clearTimeout(arTestForTraceHandle);
            arTestForTraceHandle = window.setTimeout(function () {
                arTestForTraceCC = 0;
                arTestForTraceHandle = null;
            }, 5000);
        }
    } else
    arTestForTraceCC = 0;

}

if(b_mobile) ibiStd.HideURLbar();
