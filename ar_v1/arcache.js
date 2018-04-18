/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arcache.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 171221 1507 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 1214 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 1020 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 0656 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 0141 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171220 1311 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171106 1318 wjf 197487 Vis: Filters on Define with constant value throws web page
* 170925 1124 wjf 195830 http 403 error when saving Excel or CSV from within active R
* 170822 1004 wjf 194161 FOCEXURL with double amper (&&) may casue cache not to work
* 170816 1736 wjf 194161 FOCEXURL with double amper (&&) may casue cache not to work
* 170815 1121 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170727 1159 txk 193066 NLS:Visualization : IBIAPP_app makes an error with NLS chars
* 170419 2010 wjf 190481 IDIS: filtering on map error: THE FIELDNAME IS NOT RECOGNIZ
* 170406 1150 wjf 189974 FOC804 running visualization in IA
* 170324 0943 wjf 186113 8201MR2:Active Report getting amdom Filter results
* 170110 1315 wjf 185725 Filter doesn't work at run time for Visualization Migrated
* 161215 1423 wjf 185725 Filter doesn't work at run time for Visualization Migrated
* 161123 0935 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161117 1425 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161117 1137 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161114 1247 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 160901 1219 iys 161555 AHTML: Cache: Rollup Cnt w/ Sort - duplicate col values
* 160809 1942 wjf 182848 BUE: IE browser stops responding +44 7818531647
* 160804 2250 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160718 1119 wjf 182831 BUE:8201: unable to get lasso points above 500 + points at
* 160610 1256 hms 180534 Remove tab characters from source files
* 160601 1106 wjf 178381 selecting a value with "&" in filter prompt is not reflecti
* 160512 1145 bjd 178910 AHTML_CACHE:Applying filter in calculated sum column shows
* 160504 1008 wjf 180533 Map: Enable drill up/drill down in Visualization
* 160322 1839 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160322 1443 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160317 1027 wjf 178544 Run visualization throws error message on output window
* 160316 1111 wjf 178473 Defines in the master need to be fully qualified
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160302 1409 wjf 177816 Lasso filter in preview mode do not seems to get updated fo
* 160225 1405 wjf 176898 AHTML: Cache performance enhancement
* 160225 1109 wjf 176898 AHTML: Cache performance enhancement
* 160216 1510 wjf 176898 AHTML: Cache performance enhancement
* 160212 1024 wjf 176898 AHTML: Cache performance enhancement
* 160211 1615 wjf 176898 AHTML: Cache performance enhancement
* 160210 2355 wjf 176898 AHTML: Cache performance enhancement
* 160209 1753 wjf 176898 AHTML: Cache performance enhancement
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160115 1719 wjf 175088 Visualization returns FOC295 when Filter Chart with Define
* 160105 1047 iys 170651 MOB:Cache:Wrong Visualization has been displayed against th
* 151218 1134 txk 174382 Visualization: adding field yields error w. master file fro
* 151110 1309 bjd 168500 AHTML: Cache: Sorting report fields changes the field format
* 151008 0903 bjd 170268 NFR Sort order not retained with last page of AHTML
* 150909 0925 bjd 166671 AHTML export active cache bydisplay setting ignored
* 150908 0929 bjd 166469 i5r: Active cache export excel, FOC003 when only BY fields
* 150806 1831 wjf 170330 Measure filter with aggregation picks up Sort field values
* 150720 1009 wjf 169736 IE10:Run Visualization with Filter returns Server Error:0
* 150714 1016 wjf 169528 AHTML:Allow filter controls to support multi-fields
* 150624 1131 wjf 167789 Allow filter controls to get data values in parallel
* 150603 1248 wjf 167789 Allow filter controls to get data values in parallel
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150513 1210 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150511 0917 wjf 163115 AHTML: Add tracing to active reports
* 150509 1135 wjf 163115 AHTML: Add tracing to active reports
* 150509 1113 wjf 167440 AHTML: Api: Ajax call fail when updateJsonReport.
* 150505 1014 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150417 0917 wjf 166610 AHTML: IA-2013: Filter with Range not working properly
* 150414 1517 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150414 0948 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150330 1555 bjd 164004 AHTML: Bar Chart  sorting with Cache On
* 150212 1229 bjd 161573 i5r : WFServlet Export EXCEL is failing Siteminder agent
* 150211 1510 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150206 0852 wjf 164182 AHTML: Allow static where condition.
* 150130 1311 wjf 161573 i5r : WFServlet Export EXCEL is failing Siteminder agent
* 150129 1240 wjf 161573 i5r : WFServlet Export EXCEL is failing Siteminder agent
* 150122 1211 txk 163981 NLS: nls fld values not displayed in Filter Prompts Dialog w
* 150114 0740 wjf 163863 AHTML: Pass dates to ID in original format
* 150112 1325 txk 163809 NLS: Selected fld values NOT appering in Filter Prompts Dial
* 141208 1059 wjf 163206 AHTML: Add CSRF token to ouput, needed for cache calls.
* 141203 1018 wjf 163115 AHTML: Add tracing to active reports
* 141125 1014 wjf 163008 AHTML: Allow Amper Variables in WHERE conditions
* 141120 1504 wjf 162934 AHTML: StyleTree gets swap with columns in cache
* 141030 1325 wjf 134795 Active Visualization
* 141024 1431 wjf 134795 Active Visualization
* 140924 1440 wjf 134795 Active Visualization
* 140924 0948 wjf 134795 Active Visualization
* 140912 0914 wjf 134795 Active Visualization
* 140911 1630 ixm 155992 AHTML_Cache:Sort values get repeated after export or print
* 140909 1204 wjf 134795 Active Visualization
* 140904 1009 wjf 134795 Active Visualization
* 140903 1146 wjf 134795 Active Visualization
* 140829 1340 bjd 157552 AHTML:Excel Export:ASNAME blank column title shows Column #
* 140812 1949 wjf 134795 Active Visualization
* 140722 1435 wjf 147534 Active cache on ACROSSed columns name collision
* 140715 1225 wjf 134795 Active Visualization
* 140714 1604 wjf 134795 Active Visualization
* 140709 1156 wjf 134795 Active Visualization
* 140708 1253 wjf 134795 Active Visualization
* 140707 1240 wjf 134795 Active Visualization
* 140702 0056 wjf 134795 Active Visualization
* 140620 1745 wjf 134795 Active Visualization
* 140620 1234 wjf 134795 Active Visualization
* 140606 1735 wjf 134795 Active Visualization
* 140603 2333 wjf 134795 Active Visualization
* 140601 1214 wjf 134795 Active Visualization
* 140529 1514 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140516 1514 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
/*
* Powered by WebFOCUS, Information Builders Inc.
*/
//$Revision: 1.49 $ 
//$Log: arcache.js,v $
//Revision 1.49  2014/06/01 14:42:04  William_Forde
//[p134795] fix issue with filter not showing all the values.
//
//Revision 1.48  2014/05/29 19:03:14  William_Forde
//[p134795]  Use DB_INFILE to perform aggregation filtering.
//
//Revision 1.47  2014/05/29 15:44:35  William_Forde
//[p134795]  Use the tooltip generated by jschart, if there is one.  Add back remove to the filter menu.
//
//Revision 1.46  2014/05/28 16:31:45  William_Forde
//[p134795] Apply aggregation when getting the list of values for filter controls.
//
//Revision 1.45  2014/05/27 03:57:42  William_Forde
//[p134795]  Fix issue with duplicate where conditions.
//
//Revision 1.44  2014/05/22 21:56:41  William_Forde
//[p134795] More changes for reengineering.
//
//Revision 1.43  2014/05/22 14:04:49  William_Forde
//[p134795] Check if any report contains "included defines/joins" and make sure to send it with each request if the same master is used. even if its a different report.  If define or compute, dont use the full qualified name.
//
//Revision 1.42  2014/05/21 12:03:11  William_Forde
//[p134795] Allow filter field not to be part of the chart/grid if we are in cache mode NOEXTRACT, since it is possible for that field be in the master, but not in the request used to popluate the filters.  Also fix the all issue in the checkbox.
//
//Revision 1.41  2014/05/16 19:11:02  William_Forde
//[p134795] Fix error in code that was casing E0x field to be use in NOEXTRACT
//
//Revision 1.40  2014/05/16 15:16:55  William_Forde
//[p134795] use fully qualified name for cache mode NOEXTRACT if available.
//
//Revision 1.39  2014/05/09 19:12:52  William_Forde
//[p134795] Add support for inline COMPUTE.
//
//Revision 1.38  2014/05/06 16:09:53  Israel_Schulman
//[p152718] Encode the AS value when exporting data so that '%' doesnt't corrupt the URL
//
//Revision 1.37  2014/05/01 19:21:31  William_Forde
//[p134795] cant use mixcase file names on unix for -includes.
//
//Revision 1.36  2014/04/14 16:56:25  William_Forde
//[p134795] If arcacheInclude is set, then we need to store the fex on the server using the WRITEINCLUDE cache call.  This fex will then be included for all cache functions done on the server.
//
//Revision 1.35  2014/04/10 21:00:16  Brian_DCruz
//[p158005] if SET HTMLENCODE = ON, need cache logic to send the setting back to server
//
//Revision 1.34  2014/03/17 12:59:08  William_Forde
//[p134795][>branch8100] Properly handle the limit when doing SUM in cache
//
//Revision 1.33  2014/03/11 18:21:58  William_Forde
//[p134795][>branch8100] Send recordlimit to cache for rollup.
//
//Revision 1.32  2014/03/11 15:07:39  William_Forde
//[p134795][>branch8100]Add record limit to rollup and rename CRECLIMIT to AR_CRECLIMIT
//
//Revision 1.31  2014/03/10 19:30:54  William_Forde
//[p134795][>branch8100] remove newlines
//
//Revision 1.30  2014/03/06 16:47:24  William_Forde
//[p134795][>branch8100]  Fix issue with slider causing js error.
//
//Revision 1.29  2014/03/05 20:22:55  William_Forde
//[p134795][>branch8100] Fix issue with chart not filtering when field is not used in report but is part of the "dataReport". Fix slider api not setting the default values properly.
//
//Revision 1.28  2014/02/25 16:40:17  William_Forde
//[p134795][>branch8100] Append "&" to focexurl before adding cache parameters, if needed.
//
//Revision 1.27  2014/01/30 17:52:31  William_Forde
//[p134795][>branch8100] Fix issue with WHERE condition not created correctly in cache when a filter is removed.
//
//Revision 1.26  2014/01/30 17:50:39  William_Forde
//[p155898][>branch8100] rename all active cache variables to start with AR_
//
//Revision 1.25  2013/12/13 05:07:50  William_Forde
//[p134795] fix issues with grid not filtering
//
//Revision 1.24  2013/11/27 18:57:28  Israel_Markhovsky
//[p143199] AHTML: Calculate average includes missing cells
//                  corrected count calculation to be the same as in FOCUS
//
//Revision 1.23  2013/11/19 16:36:27  William_Forde
//[p134795] call window.open instead of just open.
//
//Revision 1.22  2013/11/19 01:00:15  William_Forde
//[p134795] pass missing cache parameters
//
//Revision 1.21  2013/11/05 20:09:51  Brian_DCruz
//[p141034] refactor code to remove redefined vars
//
//Revision 1.20  2013/11/05 19:34:13  Brian_DCruz
//[p153628] initialize CAVERB to 'SUM' as in non-cache mode.
//
//Revision 1.19  2013/08/30 22:05:38  Israel_Markhovsky
//[p143199] AHTML: Calculate average includes missing cells
//                  commented out jstrace
//
//Revision 1.18  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.17  2013/08/01 20:13:20  Israel_Markhovsky
//[p143199] fix for AHTML: Calculate average includes missing cells
//                  added semicolon at the end of line 63 to stop Pkg_Admin warning
//
//Revision 1.16  2013/08/01 19:32:11  Israel_Markhovsky
//[p143199] fix for AHTML: Calculate average includes missing cells
//
//Revision 1.15  2013/05/15 19:18:47  William_Forde
//[p134795] Add support to pass PRINT/SUM verb for rollup.
//
//Revision 1.14  2013/05/07 21:11:25  William_Forde
//[p149222] Dont clear sort object for cache.  It was incorrectly doing BYDISPLAY=OFF, when sort was not on the first column.
//
//Revision 1.13  2013/04/27 13:19:20  William_Forde
//[p134795] Add method to return the correct field format based on the cache mode being used.
//
//Revision 1.12  2013/04/22 19:29:31  William_Forde
//[p134795] If arcachemode eq NOHOLD/NOEXTACT then we use origial fieldnames not the E0x ones.
//
//Revision 1.11  2013/04/18 20:15:16  William_Forde
//[p147534] Fix issue with rollup and export not using E0x fieldnames.
//
//Revision 1.10  2013/04/10 21:03:11  William_Forde
//[p147534] Use E0x fieldname when sending request to server.
//
//Revision 1.9  2013/04/10 05:08:30  William_Forde
//[p147526] Fix issue with sorting field causes columns to have wrong data when retrieving new records from cache.
//
//Revision 1.8  2013/04/03 18:15:40  William_Forde
//[p147526] Make sure all fields are urlencoded when passed
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arcache"]="$Revision: 20171221.1507 $";

(function() {

    if (typeof window.ibiArCache !== 'undefined') {
        return;
    }
    
    window.ibiArCache = {
        includeFiles: {},
        tempHoldCounter:0
    };
})();

var raCol = [];
var rTstart = [];
var currColData = [];
var currColType = [];
var remoteRollData = [];
var remoteRollDataF = [];

function splitUpOriginalFex(orignalFex) {
    var i,j;
	var validKeywords = ["SUM","PRINT","BY","ON","HEADING"];
	var fexParts = {
		graph_script: '',
		graph_js: '',
        graph_js_final: '',
		table_style: '',
		focus_cmd: ''
	};
	var s = orignalFex.split("SET STYLE *");
	fexParts.focus_cmd = s[0];
	if(fexParts.focus_cmd) {
		var keywords = fexParts.focus_cmd.split("\n");
		keywords = keywords.join(" ");
        keywords = keywords.split(" ");
		for(i = 0; i < keywords.length; i++) {
			keywords[i] = ibiUtil.StripSpace(keywords[i],true,true);
			if(keywords[i]=='') {
                keywords.splice(i, 1);
                i--;
            }
		}
		fexParts.focus = {};
		fexParts.focus.command = keywords[0];
		fexParts.focus.file = keywords[2];
		fexParts.focus.bys = [];
		fexParts.focus.aggfields = [];
		fexParts.focus.aggtype = null;
		var currentKeyword = fexParts.focus.aggtype;
		for(i=3; i < keywords.length; i++) {
			if(inarray(validKeywords,keywords[i])) {
                currentKeyword = keywords[i];
			} else
			switch (currentKeyword) {
				case 'SUM':
				case 'PRINT':
					if(fexParts.focus.aggtype==null)
                        fexParts.focus.aggtype = currentKeyword;
					fexParts.focus.aggfields[fexParts.focus.aggfields.length] = keywords[i];
					break;
				case 'BY':
					fexParts.focus.bys[fexParts.focus.bys.length] = keywords[i];
					break;
			}
		}
	}
	if(s.length>1) {
		s = s[1].split("ENDSTYLE");
		fexParts.styleSheet = s[0];
		s = fexParts.styleSheet.split("\n*");
		for(var i=0; i < s.length; i++) {
			var ss = s[i].split("\n");
			var st = ibiUtil.StripSpace(ss[0],true,true);
			var l = '';
			switch(st) {
				case 'GRAPH_SCRIPT':
					ss.splice(0,1);
					fexParts.graph_script = ss.join("\n");
					break;
				case 'GRAPH_JS':
                    ss.splice(0,1);
                    fexParts.graph_js = ss.join("\n");
                    break;
                case 'GRAPH_JS_FINAL':
                    ss.splice(0,1);
                    fexParts.graph_js_final = ss.join("\n");
                    break;
				case 'END':
                case 'TABLE_STYLE':
                    ss.splice(0,1);
				default:
					l = ss.join("\n");
                    fexParts.table_style += '\n'+l;
			}
        }
	}

	return fexParts;
}

function allfields(mytable)
{
    var flds = '';
    var f;
    var v;
    for(var j=0; j < mytable.a_cntl.a_cols.length; j++) {
        if(mytable.a_capt[j].ignore) continue;
        if(mytable.a_cntl.cacheWriteMode>0) {
            if(mytable.a_capt[j].isCompute && mytable.a_capt[j].computeText)
                f = "COMPUTE "+mytable.a_capt[j].computeText;
            else {
                f = ibiUtil.StripSpace(mytable.a_cntl.a_cols[j].field,true,true);
                v = false;
                if(mytable.a_cntl.a_cols[j].qualname)
                    v = (mytable.a_cntl.a_cols[j].qualname.split(".").length>2);
                if(!mytable.a_capt[j].isDefine || v)
                    if(mytable.a_cntl.a_cols[j].qualname && !mytable.a_capt[j].isTempDefine)
                        f = mytable.a_cntl.a_cols[j].qualname;
            }
        } else {
            if(mytable.a_capt[j].isFilterDefine)
                f = mytable.a_cntl.a_cols[j].field;
            else
            if(mytable.a_capt[j].orgCol==-1)
                f = "F"+((mytable.a_capt[j].dataField<9)?"0":"")+(mytable.a_capt[j].dataField+1);
            else
            if(mytable.isRollUp)
                f = "E"+((mytable.a_capt[j].orgCol<9)?"0":"")+(mytable.a_capt[j].dataField+1);
            else
                f = "F"+((mytable.a_capt[j].orgCol<9)?"0":"")+(mytable.a_capt[j].orgCol+1);
        }
        flds += f+' ';
    }
    return flds;
}

function getCacheFirstRealFieldName(mytable)
{
    var ccol = -1;
    var i,j;
    for(i=0; i < mytable.a_capt.length; i++) {
        if(mytable.a_capt[i].isDefine || mytable.a_capt[i].isCompute || mytable.a_capt[i].ignore) continue;
        ccol = i;
    }
    if(ccol!=-1)
        return getCacheFieldName(mytable,ccol);
    else {
        var columns = ibiReports.getAllColumns(mytable.a_cntl.cacheOriginalMaster);
        var column = '';
        if(columns) {
            for(i=0;i<columns.length;i++) {
                if(columns[i].colObject.isDefine || columns[i].colObject.isCompute) 
                    continue;
                column = columns[i].column.name;
                break;
            }
            var gcObj  = ibiReports.getColumnObject(mytable.a_cntl.cacheOriginalMaster,column);
            if(gcObj) {
                j = mytable.a_capt.length;
                mytable.a_capt[j] = mytable.copyObject(gcObj);
                mytable.a_cntl.a_cols[j] = mytable.copyObject(ibiReports.getColumnNames(mytable.a_cntl.cacheOriginalMaster,column));
                mytable.a_capt[j].b_hide = true;
                mytable.a_capt[j].ignore = true;
            }
            return getCacheFieldName(mytable,j);
        }
    }
}

function getCacheFieldName(mytable,field,dontSwitchReport,returnQual)
{
    var f,v;
    var a_cols = mytable.a_cntl.a_cols;
    var a_capt = mytable.a_capt;
	if((mytable.a_cntl.dataReport) && (!dontSwitchReport)) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        var workTable =    MyTable[dataReportIndex];
        a_cols = workTable.a_cntl.a_cols;
        a_capt = workTable.a_capt;
    }
    if(mytable.a_cntl.cacheWriteMode>0) {
        f = ibiUtil.StripSpace(a_cols[field].field,true,true);
        v = false;
        if(a_cols[field].qualname)
            v = (a_cols[field].qualname.split(".").length>2);
        if(!mytable.a_capt[field].isDefine || v)
            if((a_cols[field].qualname) && (!a_capt[field].isTempDefine)
         //   && (!a_capt[field].isDefine || a_capt[field].isFilter) && !a_capt[field].isCompute
            )
                f = a_cols[field].qualname;
    } else
    if(!mytable.a_cntl.cacheMode) {
        f = ibiUtil.StripSpace(a_cols[field].field,true,true);
        if(returnQual)
            f = ibiUtil.StripSpace(a_cols[field].qualname,true,true);
    }
    else {
        if(mytable.a_capt[field].isFilterDefine)
            f = a_cols[field].field;
        else
        if(mytable.a_capt[field].orgCol==-1)
            f = "F"+((mytable.a_capt[field].dataField<9)?"0":"")+(mytable.a_capt[field].dataField+1);
        else
            f = "F"+((mytable.a_capt[field].orgCol<9)?"0":"")+(mytable.a_capt[field].orgCol+1);
    }
    return f;
}

function getCacheFieldFormat(mytable,field)
{
    var f;
    var a_capt = mytable.a_capt;
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        var workTable =    MyTable[dataReportIndex];
        a_capt = workTable.a_capt;
    }
    f = a_capt[field].format;
    return f;
}

function split_results(str)
{
    var result = {'messages':'','javascript':''};
    var i,ii,pos=0;
    i = str.indexOf("<!--");
    if(i>0) {
        ii=-3;
    }
    while(i!=-1) {
        if(ii!=-3) {
            ii = str.indexOf("-->",i+1);
            if(ii!=-1) {
                result.messages += str.substring(i+4,ii-3);
                pos = ii+3;
            }
            i = str.indexOf("<!--",i+4);
        }
        if(i!=-1) {
            result.javascript += str.substring(ii+3,i-1);
            pos = i;
            if(ii==-3) {
                ii=0;
            }
        }
    }
    if(pos<str.length) {
        result.javascript += str.substr(pos);
    }
    return result;
}

function getDrillUrl(mytable) {
    var url,i,lastchar;

    if(mytable.a_cntl.FocexUrl) {
        url = mytable.a_cntl.FocexUrl;
        if(url.indexOf('?')==-1) url += '?';
    } else {
        var l = location.href.split('?');
        url = l[0]+'?';
    }
    i = url.indexOf('IBIAPP_app=');
    if(i!=-1) {
        var k = url.indexOf('&',i+1);
        var url_n = url.substring(0,i+11)+((k!=-1)?URLencode(url.substring(i+11,k))+url.substring(k):URLencode(url.substring(i+11)));
        url = url_n;
    }
    i = url.indexOf('IBIMR_drill=');
    if(i!=-1) {
        var j = url.indexOf('&',i+1);
        var nurl = url.substr(0,i)+url.substr(j+1);
        url = nurl;
	}

        lastchar = url.substr(url.length-1,1);
        if(lastchar != "?" && lastchar != "&")
            url += "&"; 

    return url;
}

function IgetMoreData(tnum,startat)
{
    ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'],tnum);
    var mytable = getMyTable(tnum);
    
    var wcond = '';
    var chold = '';
    var wExtra = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheWhereCondition) {
        wcond = mytable.cacheWhereCondition;
        chold = mytable.cacheWhereHoldFiles;
        if(mytable.cacheWhereConditionEval != '')
            wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
    }
        
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }
    var havestr = 'NO';
    if(mytable.highCondition!='') havestr = 'YES';
    var fmod = '';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    var tcont = mytable.a_all_cont;
    if(mytable.haveFilters) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
        tcont = mytable.a_filter_cont;
    }
    var recc = 0;
    var cend = (startat+1+mytable.a_cntl.cacheRecGet);
    var i = startat;
    /*
    while((i<=cend)&&(typeof(tcont[i])=="undefined")) {
        recc++;
        i++;
    }
    if(recc<mytable.a_cntl.cacheRecGet) {
        cend = i;
        i=startat;
        while((i>0)&&(typeof(tcont[i])=="undefined")&&(recc<mytable.a_cntl.cacheRecGet)) {
            i--;
            recc++;
        }
        startat=i;

    } */
    rTstart[tnum] = startat;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var url = getDrillUrl(mytable);
    var fld = getCacheFirstRealFieldName(mytable);
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition) 
        sortorder = mytable.cacheSortCondition;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_SCOL='+URLencode(fld)+
        '&AR_CSTART='+(startat+1)+
        '&AR_CFUNC=GETDATA'+
        '&IBIF_wfdescribe=OFF'+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&AR_HAVEHIGH='+havestr+
        '&AR_HACHEFEX='+mytable.cacheFile+fmod+'h'+
        '&AR_CEND='+cend+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'GETMOREDATA',tnum,false);
}

function IwriteInclude(tnum)
{
    var mytable = getMyTable(tnum);
    var fmod = '';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    if(mytable.haveFilters) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
    }
    var url = getDrillUrl(mytable);
    var lines = mytable.a_cntl.arcacheInclude.split('\n');
    var linesc = '';
    for(var i = 0; i < lines.length; i++)
        linesc += '&AR_INCLUDELINE'+(i+1)+'='+URLencode(lines[i]);
    linesc += '&AR_INCLUDECOUNT='+i;
    var cacheFileName = mytable.cacheFile+'i';
    ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster] = {'cacheFileName':cacheFileName};
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_CFUNC=WRITEINCLUDE'+
        '&IBIF_wfdescribe=OFF'+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_IACHEFEX='+cacheFileName+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+linesc;
    CServerRequest(url,'WRITEINCLUDE',tnum,false);
}

function InumRecords(tnum)
{
    var mytable = getMyTable(tnum);
    var havestr = 'NO';
    if(mytable.highCondition!='') havestr = 'YES';
    var fmod = '';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    if(mytable.haveFilters) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
    }
    var url = getDrillUrl(mytable);
    var fld = getCacheFirstRealFieldName(mytable);
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var wcond = '';
    var chold = '';
    var extras = '';
    var wExtra = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheWhereCondition) {
        wcond = mytable.cacheWhereCondition;
        chold = mytable.cacheWhereHoldFiles;
        if(mytable.cacheWhereConditionEval != '')
            wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
    }
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    //find non define field
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_COL='+URLencode(fld)+extras+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_CFUNC=NUMRECORDS'+
        '&IBIF_wfdescribe=OFF'+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&AR_HAVEHIGH='+havestr+
        '&AR_HACHEFEX='+mytable.cacheFile+fmod+'h'+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'NUMRECORDS',tnum,false);
}

function IgetCacheFormat(tnum)
{
    var mytable = getMyTable(tnum);
    var url = getDrillUrl(mytable);
    var fmod = '';
    var wcond='';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';

    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_CFUNC=CACHEFORMAT'+
        '&IBIF_wfdescribe=OFF'+
        '&AR_COLS='+
        '&AR_COL='+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&AR_SORDER='+sortorder+
            splitWhere(wcond)+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'CACHEFORMAT',tnum,false);
}

function IexportData(tnum,fformat,filtered)
{
    var mytable = getMyTable(tnum);
    var fmod = '';
    var printable = '+';
    var wcond = '';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    var chold = '';
    var wExtra = '';
    if((filtered)&&(mytable.haveFilters)) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
        else {
            wcond = mytable.cacheWhereCondition;
            chold = mytable.cacheWhereHoldFiles;
            if(mytable.cacheWhereConditionEval != '')
                wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
        }
    }
    var url = getDrillUrl(mytable);
    var asname, bycols='';
    for(var i=0;i<mytable.a_cntl.a_cols.length;i++){
        if(!mytable.a_capt[i].noprint){ //need ASname (.dis) instead of .name
            asname = '+'+getCacheFieldName(mytable,mytable.a_capt[i].dataField)+' AS \''+URLencode(mytable.a_cntl.a_cols[i].dis)+'\'';
            if(mytable.a_capt[i].isby==true)
                bycols += '+BY+'+asname;
            else
                printable += asname;
        }
    }
    var byDisplay  = (mytable.a_cntl.ByDisplay === true) ? '&AR_BYDISP=ON' : '';
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    if (printable == '+') { printable = ''; } 
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_CFUNC=EXPORT'+
        '&IBIF_wfdescribe=OFF'+
        '&AR_CFORMAT='+fformat+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&AR_COLS='+printable+
        byDisplay+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+htmlEncode+isInclude+centZero;
    if(bycols!='') url += '&AR_BYCOLS=' +bycols;
    expwin = window.open('','export');
    if(expwin==null)
        return;

    var lines = url.split("?");
    expwin.document.write('<html><head></head><body><form id="a" method="post" action="'+lines[0]+'" target="_self">');
    lines = lines[1].split("&");
    var np;
    for(var j=0; j < lines.length; j++) {
        np = lines[j].split("=");
        if (np.length !== 2) continue; // avoid empty string
        expwin.document.write('<input type="hidden" name="'+np[0]+'" value="'+decodeURIComponent(np[1]).replace(/\+/g,' ')+'">')
    }
    if (typeof(mytable.a_cntl.csrfName) != "undefined") {
        expwin.document.write('<input type="hidden" name="'+ mytable.a_cntl.csrfName + '" value="'+decodeURIComponent(mytable.a_cntl.csrfValue).replace(/\+/g,' ')+'">');
    }
    expwin.document.write('</form><script>document.getElementById("a").submit();</script></body></html>');
}

function hasAmper(str1) {
    var str = str1+'';
    var i = str.indexOf('&');
    var c = '';
    if(i!=-1) {
        c = str.substr(i+1,1);
        if(c!="|")
            return true;
    }
    return false;
}

function escapeAmper(str1) {
    var str = str1+'';
    var s = '';
    var i;
    var c,n;
    var quotedString = false;
    if(str[0] == "'" && str[str.length-1]=="'")
        quotedString = true;
    for(i=0; i< str.length; i++) {
        c = str.charAt(i);
        n = null;
        if(i+1<str.length)
            n = str.charAt(i+1);
        s += c;
        if(c == "'")
            if(!quotedString || (i>0 && i < str.length-2))
                s+="'";
        if ((c == "&")&&(n!="|")&&(n!=" "))
            s+= "|";
    }
    return s;
}

function IgetFilterData(tnum,cond)
{
    ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'] ,tnum);
    var mytable = getMyTable(tnum);
    var fmod = '';
    var i;
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
    var wherestr = "";
    var wherestrEval = "";
    var scon;
    var holdstr = "";
	var addPar = false;
    for(i=0; i < cond.length; i++) {
        if (typeof cond[i].full != "undefined") {
            wherestr += cond[i].full;
        }
    }

    var addingWhereCount = 0;
    for(i=0; i < cond.length; i++)
        if(cond[i].string!='')
            if(!hasAmper(cond[i].string))
            	addingWhereCount++;
	if(addingWhereCount>1 || wherestr !='')
    	addPar = true;
    for(i=0; i < cond.length; i++) {
        scon = cond[i];
        if(cond[i].string!='') {
            if(!hasAmper(scon.string)) {
            if(wherestr!="")
                wherestr += " AND";
            else {
                wherestr = "WHERE ";
                if(scon.aggtype) {
                    wherestr += "TOTAL ";
                }
            }
                if(addPar)
                	wherestr += "(";
                wherestr +=	scon.string;
                if(addPar)
                	wherestr += ")";
            } else {
                if (wherestrEval != "")
                    wherestrEval += " AND";
                else {
                    wherestrEval = "WHERE ";
                    if (scon.aggtype) {
                        wherestrEval += "TOTAL ";
                    }
                }
                wherestrEval += "(" + scon.string + ")";
            }
            if(scon.chold)
                holdstr += scon.chold;
        }
    }
    if(wherestr!='')
        wherestr += ';';
    if(wherestrEval!='')
        wherestrEval += ';';
    wherestr = URLencode(wherestr);
    wherestrEval = URLencode(wherestrEval);
    if(holdstr!='') {
        var a = holdstr.split('\n');
        var holdstr = '';
        for(i=0; i < a.length; i++) {
            holdstr+='&AR_HOLDFILES'+(i+1)+'='+URLencode(a[i]).split("%5Bibi%24blank%5D").join('%20');
            
        }
        holdstr+='&AR_HFSCOUNT='+a.length;
    }
    var wExtra = '';
    if(wherestrEval!='')
        wExtra = wherestrEval.split("%5Bibi%24blank%5D").join('%20');

    var url = getDrillUrl(mytable);
    var fld = getCacheFirstRealFieldName(mytable);
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    url +='IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_CSTART=0'+
        '&AR_CFUNC=APPLYFILTER'+
        '&AR_SCOL='+fld+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+holdstr+
        '&AR_CACHEFEX='+mytable.cacheFile+
        '&IBIF_wfdescribe=OFF'+
        '&AR_FACHEFEX='+mytable.cacheFile+fmod+
        '&AR_CEND=1'+
			splitWhere(wherestr)+splitWhere(wExtra,true)+
        htmlEncode + isInclude + centZero;
    mytable.cacheWhereCondition = wherestr;
    mytable.cacheWhereConditionEval = wherestrEval;
    mytable.cacheWhereHoldFiles = holdstr;
    if(mytable.a_cntl.cacheWriteMode>1) {
        mytable.a_filter_body = [];
        mytable.a_filter_cont=[];
        mytable.n_rows_filter_have=0;
        ibiStd.HideWaitSB(tnum);
        return true;
    }
    CServerRequest(url,'FILTER',tnum,false);
}

function IgetSortData(tnum,scol,sorder)
{
    var si=0;
    rTstart[tnum] = 0;
    ibiStd.ShowWaitSB(ibiMsgStr['sorting'],tnum);
    if(sorder) si=1;
    var mytable = getMyTable(tnum);
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }
    var fmod = '';
    var cget = mytable.a_cntl.cacheRecGet;
    var havestr = 'NO';
    if(mytable.highCondition!='') havestr = 'YES';
    if(mytable.isPivot) {
        fmod = 'r'+mytable.roll_number;
        cget = 9999;
    }
    if(mytable.haveFilters) 
        if(mytable.a_cntl.cacheWriteMode<2) fmod = fmod+'0';
    var highCondStr = '';
    for(var i=0; i < mytable.highCondition.length; i++) {
        highCondStr += "(" + mytable.highCondition[i] + ")"; 
        if(i<(mytable.highCondition.length-1)) highCondStr += " AND ";
    }
    highCondStr = URLencode(highCondStr);
    mytable.a_body = [];
    mytable.a_cont = [];
    var url = getDrillUrl(mytable);
    var fld;
    if(typeof scol != "object") {
        fld = getCacheFieldName(mytable, scol);
        mytable.cacheSortCondition = 'BY ';
        if(si==1) mytable.cacheSortCondition += ' HIGHEST ';
        mytable.cacheSortCondition += fld+' NOPRINT';
    } else {
        mytable.cacheSortCondition = '';
        for(i =0 ; i < scol.length; i++) {
            fld = getCacheFieldName(mytable, scol[i]);
            mytable.cacheSortCondition += 'BY ';
            if (si == 1) mytable.cacheSortCondition += ' HIGHEST ';
            mytable.cacheSortCondition += fld + ' NOPRINT ';
        }
    }
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var wcond = '';
    var chold ='';
    var wExtra = '';
    if((mytable.a_cntl.cacheWriteMode>1) && (mytable.cacheWhereCondition || mytable.cacheWhereConditionEval)) {
        wcond = mytable.cacheWhereCondition;
        chold = mytable.cacheWhereHoldFiles;
        if(mytable.cacheWhereConditionEval != '')
            wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
    }
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';

    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_SCOL='+URLencode(fld)+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_CSTART=0'+
        '&AR_CFUNC=SORT'+
        '&IBIF_wfdescribe=OFF'+
        '&AR_SORDER='+mytable.cacheSortCondition+
			splitWhere(wcond)+splitWhere(wExtra,true)+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&AR_CEND='+cget+
        '&AR_HAVEHIGH='+havestr+
        '&AR_HACHEFEX='+mytable.cacheFile+fmod+'h'+
        '&AR_WHERECOND='+highCondStr+chold+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'GETMORESORTDATA',tnum,false);
}

function IremoteAgg(tnum,col,origCol,filtered,isnum)
{
    rTstart[tnum] = 0;
    raCol[tnum] = col;
    ibiStd.ShowWaitSB(ibiMsgStr['calculating'],tnum);
    var mytable = getMyTable(tnum);
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }
    var fmod = '';
    var atype = 'AGGNUM';
        var rcall = 'AGGREGATE';
    if(!isnum) {
        atype='AGGSTR';
        rcall='AGGSTRING';
    }
    var wcond = '';
    var chold ='';
    var wExtra = '';

    if((mytable.haveFilters)&&(filtered)) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = '0';
        else {
            wcond = mytable.cacheWhereCondition;
            chold = mytable.cacheWhereHoldFiles;
            if(mytable.cacheWhereConditionEval != '')
                wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
        }
    }

    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if(mytable.a_cntl.cacheWriteMode>1)
        sortorder = mytable.cacheSortCondition;
    var url = getDrillUrl(mytable);
    var fld = getCacheFieldName(mytable,origCol);
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_COL='+URLencode(fld)+
        '&AR_NFORMAT='+FocusFormat(0,mytable.a_capt[origCol].format,0,'',true)+
        '&AR_CFUNC='+rcall+
        '&IBIF_wfdescribe=OFF'+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,atype,tnum,false,filtered);
}

function IgetHighData(tnum)
{
    ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'] ,tnum);
    var mytable = getMyTable(tnum);
    var fmod = '';
    if(mytable.isPivot) fmod = 'r'+mytable.roll_number;
    if(mytable.haveFilters) 
        if(mytable.a_cntl.cacheWriteMode<2)fmod = fmod+'0';
    var highCondStr= '';
    for(var i=0; i < mytable.highCondition.length; i++) {
        highCondStr+= "(" + mytable.highCondition[i] + ")"; 
        if(i<(mytable.highCondition.length-1)) highCondStr+= " AND ";
    }
    highCondStr = URLencode(highCondStr);
    var url = getDrillUrl(mytable);
    var fld = getCacheFirstRealFieldName(mytable);
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    url +='IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_CSTART=0'+
        '&AR_CFUNC=DOHIGH'+
        '&AR_SCOL='+fld+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_SORDER='+sortorder+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+
        '&IBIF_wfdescribe=OFF'+
        '&AR_HACHEFEX='+mytable.cacheFile+fmod+'h'+
        '&AR_CEND=1'+
        '&AR_WHERECOND='+highCondStr+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'HIGHLIGHT',tnum,false);
}

function forAllRequests(mytable)
{
    var str='';
    var newStr;
    var ibsl = mytable.IBs.length;

    mytable.resetIBs = false;
        if(!mytable.newCacheStrFile) {
            mytable.newCacheStrFile = true;
        mytable.cacheString = mytable.a_cntl.cacheString+'P'+mytable.id;
            ibsl = 0;
            mytable.IBs = [];
            mytable.resetIBs = true;
    }
    if(mytable.activeAjaxRequests > 0 )
        ibsl = mytable.arsLength;
    else
        mytable.arsLength = ibsl;

    if(ibsl==0)
        newStr = '&AR_CACHESTW='+mytable.cacheString+
                '&AR_CACHESTR='+mytable.a_cntl.cacheString;
    else
        newStr = '&AR_CACHESTR='+mytable.cacheString;

    str += '&AR_STRCOUNT='+ibsl+newStr+
        '&AR_RAND='+Math.round(100000*Math.random());
    return str;
}

function splitWhere(wconde,isExtra) {
    var whlong = '';
	var mainV = "AR_WCOND";
	var mainM = "AR_WHLINE";
	var mainC = "AR_WHCOUNT";
	if(isExtra) {
		mainV = "AR_WCONDE";
		mainM = "AR_WHLINEE";
		mainC = "AR_WHCOUNTE";
	}
    var c = 0;
    var wh = wconde.split("%5Bibi%24blank%5D");
    wcond = wh.join("%20");

    if(wcond.length>4096) {
        for(var l=0; l<wh.length; l++) {
            var ww = wh[l];
        var andOr = "AND%20";
            var w = ww.split("%20AND%20");
            var w2 = ww.split("%20OR%20");
        if(w2.length > w.length) {
            w = w2;
            andOr = "OR%20";
        }

            c++;
			whlong += '&'+mainM+c+'=' + w[0];
            for (var j = 1; j < w.length; j++) {
                if(w[j].length > 4096) {
                    w2 = w[j].split((andOr=="OR%20")?"AND%20":"OR%20");
                    for(var i=0; i < w2.length; i++) {
                        c++;
						whlong += '&' + mainM + c + '=' + ((andOr == "OR%20") ? "AND%20" : "OR%20") + w[j];
                    }
                } else {
                    c++;
					whlong += '&' + mainM + c + '=' + andOr + w[j];
                }
            }
        }
		whlong += '&'+mainC+'=' + c;
    } else
		whlong = '&'+mainV+'='+wcond;
    return whlong;
}

/*
function getFilterComputes(mytable) {
	var str = '';
	var comp;
	var pmytable = mytable;
    if(ibiCompound.drawObjectsList.length) {
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
        	comp = ibiCompound.drawObjectsList[i];
            if (comp.deleted)
                continue;
            if (comp.disabled)
                continue;
            if ((comp.active) &&
                ibiCompound.hasSameTarget(comp.filterTarget, mytable.table_name)) {
                if(mytable.a_cntl.dataReport) {
                    pmytable = ibiStd.getTable(mytable.a_cntl.dataReport);
                }
                var cols = ibiCompound.drawObjectsList[i].aggColumn;
                if(typeof cols == "string")
                    cols = [cols];
                for(k=0; k < cols.length; k++) {
                    j = pmytable.getColumnByName(cols[k], mytable);
                    if (pmytable.a_capt[j].isCompute) {
                        str = ' COMPUTE ' + pmytable.a_capt[j].computeText;
                    }
                }

            }
        }
    }
	return str;
}
*/

function createOriginalGraph(mytable) {
	var chartType = '';
	var s;
    if(mytable.fexParts) {
        var lineCount = 1;
        var i,j;
        cfunc = "ROLLUPGRAPH";
        var fexParts = mytable.fexParts;

        chartType = '&AR_LOOKGRAPH='+mytable.a_cntl.graphLook;
        chartType += "&AR_STLINE"+lineCount+"="+URLencode("ON GRAPH SET STYLE *");
        lineCount++;
        if(fexParts.table_style) {
            s = fexParts.table_style.split("\n");
            for(j = 0; j < s.length; j++) {
                chartType += "&AR_STLINE"+lineCount+"="+URLencode(s[j]);
                lineCount++;
            }
        }
        if(fexParts.graph_js_final) {
            chartType += "&AR_STLINE"+lineCount+"="+URLencode("*GRAPH_JS_FINAL");
            lineCount++;

            s = fexParts.graph_js_final.split("\n");
            for(j = 0; j < s.length; j++) {
                chartType += "&AR_STLINE"+lineCount+"="+URLencode(s[j]);
                lineCount++;
            }
        }
        chartType += "&AR_STLINE"+lineCount+"="+URLencode("*END");
        lineCount++;
        chartType += "&AR_STLINE"+lineCount+"="+URLencode("ENDSTYLE");
        lineCount++;
        chartType += "&AR_STCOUNT="+(lineCount-1);
    }
    return chartType;
}

function IremoteRoll(tnum,bycols,calccols,calcdefs,getall,r_num,limit,cols,async,callback)
{
    rTstart[tnum] = 0;
    var filtered = true;
    var fmod = '';
    var wcond = '';
    if(getall) filtered = false;
    remoteRollData[tnum]=null;
    remoteRollDataF[tnum]=null;
    ibiStd.ShowWaitSB(ibiMsgStr['calculating'],tnum);
    var mytable = getMyTable(tnum);
    var wverb = 'SUM'; // CAVERB default to SUM
    if(typeof(mytable.a_cntl.verbs)!="undefined")
        wverb = mytable.a_cntl.verbs[0].type;
    var chold = '';
    var wExtra = '';
    if((mytable.haveFilters)&&(filtered)) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = '0';
        else {
            wcond = mytable.cacheWhereCondition;
            chold = mytable.cacheWhereHoldFiles;
            if(mytable.cacheWhereConditionEval != '')
                wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
        }
    }
    
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }
    
    var rl='&AR_CRECLIMIT=';
    var rlc = '';
    if(limit) {
    //    rl = "&AR_CRECLIMIT=WHERE+TOTAL+COUNTER+LE+"+(limit+2)+";WHERE+READLIMIT+EQ+"+(limit+2)+";";
    //    rl = "&AR_CRECLIMIT=WHERE+TOTAL+COUNTER+LE+"+(limit+2)+";";
        rl = "&AR_CRECLIMIT=WHERE+RECORDLIMIT+EQ+"+(limit+2)+";";
    //    rlc = URLencode(" COMPUTE COUNTER=COUNTER+1; NOPRINT");
    }
    
    var url = getDrillUrl(mytable);

    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';

	var cfunc = "ROLLUP";
	var chartType = createOriginalGraph(mytable);
	if(chartType!='')
		cfunc = "ROLLUPGRAPH";

    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_BYCOLS='+URLencode(bycols)+
        '&AR_CALCCOLS='+URLencode(calccols)+rlc+
        '&AR_CALCDEFS='+URLencode(calcdefs)+
		'&AR_CFUNC='+cfunc+
        '&IBIF_wfdescribe=OFF'+
        '&AR_COLS='+URLencode(cols)+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
		splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
		'&AR_CAVERB='+wverb+chartType+
        '&AR_RACHEFEX='+mytable.cacheFile+'r'+r_num+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+rl+
        htmlEncode + isInclude + centZero;
    var aasync = false;
    if(typeof async != "undefined")
        aasync = async;
    CServerRequest(url,'ROLL',tnum,aasync);
}

function IremoteRollInfo(tnum,bycols,calcdefs,r_num,async)
{
    rTstart[tnum] = 0;
    var filtered = true;
    var fmod = '';
    var wcond = '';
    ibiStd.ShowWaitSB(ibiMsgStr['calculating'],tnum);
    var mytable = getMyTable(tnum);
	var wverb = ' '; // CAVERB default to SUM
    var chold = '';
    var wExtra = '';
    if((mytable.haveFilters)&&(filtered)) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = '0';
        else {
            wcond = mytable.cacheWhereCondition;
            if(typeof mytable.cacheWhereHoldFiles != "undefined")
                chold = mytable.cacheWhereHoldFiles;
            if(mytable.cacheWhereConditionEval != '')
				wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
        }
    }

    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }

	var rl = "&AR_CRECLIMIT=WHERE+RECORDLIMIT+EQ+1;";
    var url = getDrillUrl(mytable);

    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
        sortorder = mytable.cacheSortCondition;
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude)
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';

    var cfunc = "ROLLUPINFO";
    var chartType = '';
    //var chartType = createOriginalGraph(mytable);
    //if(chartType!='')
     //   cfunc = "ROLLUPGRAPHINFO";

    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_BYCOLS='+URLencode(bycols)+
		'&AR_CALCCOLS='+
        '&AR_CALCDEFS='+URLencode(calcdefs)+
		'&AR_CFUNC='+cfunc+
        '&IBIF_wfdescribe=OFF'+
		'&AR_COLS='+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_SORDER='+sortorder+
		'&AR_CAVERB='+wverb+chartType+
        '&AR_RACHEFEX='+mytable.cacheFile+'r'+r_num+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+rl+
        htmlEncode + isInclude + centZero;
    CServerRequest(url,'ROLLINFO',tnum,async);
}

function isSpecialDefine(mytable,col,justBys) {
    if (mytable.a_capt[col].isFilterDefine) {
        var defineStr = "";
        var pmytable = mytable;
        var fields = mytable.a_capt[col].fields;
        if(mytable.a_capt[col].orgReport)
            pmytable = ibiStd.getTable(mytable.a_capt[col].orgReport);
        else
        if(mytable.a_cntl.dataReport)
            pmytable = ibiStd.getTable(mytable.a_cntl.dataReport);
        var f = '';
        if(!justBys)
            defineStr += mytable.a_cntl.a_cols[col].field + "/A1000=";
        for (var i = 0; i < fields.length; i++) {
            if(justBys) {
				defineStr += "BY "+getCacheFieldName(pmytable,fields[i])+" ";
            } else {
                if(pmytable.a_capt[fields[i]].type == IBINUM) {
                    f = pmytable.a_capt[fields[i]].format;
                    f = f.substr(1, f.length-2);
					defineStr += "FPRINT(" + getCacheFieldName(pmytable,fields[i]) + ",'" + f + "','A20')";
                } else
                if(mytable.a_capt[fields[i]].type == IBIDATE) {
                    f = pmytable.a_capt[fields[i]].format;
                    f = f.substr(1, f.length-2);
					defineStr += "FPRINT(" + getCacheFieldName(pmytable,fields[i]) + ",'" + f + "','A20')";
                } else
					defineStr += getCacheFieldName(pmytable,fields[i]);
                if (i < fields.length - 1)
                    defineStr += "||','||";
                else
                    defineStr += ";";
            }
        }
        return  defineStr;
    }
}
function IgetCUniqColVals(tnum,col,limit,filtered,aggType,aggBy,getMinMax,async, callback,callbackLabel)
{
    var fmod = '';
    var i;
	var fldIsCompute = false;
	var defineOnly = true;
    var bycols = "";
    rTstart[tnum] = 0;
    currColData[tnum]=null;
    currColType[tnum]=null;
    var mytable = getMyTable(tnum);
    if(mytable.a_cntl.dataReport) {
        var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        if(dataReportIndex != -1) mytable = getMyTable(dataReportIndex);
    }
    if(mytable.a_cntl.cacheWriteMode<2)
        defineOnly = false;
    var url = getDrillUrl(mytable);
    if((mytable.a_cntl.cacheWriteMode > 1) &&
        (mytable.a_capt[col].isCompute))
    	fldIsCompute = true;
    if(!mytable.a_capt[col].isDefine && !mytable.a_capt[col].isTempDefine)
    	defineOnly = false;
    var rl='&AR_CRECLIMIT=';
    if(limit)
        rl = "&AR_CRECLIMIT=WHERE+RECORDLIMIT+EQ+"+(limit+2);
    else
        rl = "&AR_CRECLIMIT=WHERE+RECORDLIMIT+EQ+"+(mytable.maxFilterOptions+2);
    var fld = getCacheFieldName(mytable,col);
    if(fldIsCompute)
            fld = 'COMPUTE '+mytable.a_capt[col].computeText;
    var htmlEncode = (typeof mytable.a_cntl.htmlEncode !== 'undefined') ? '&AR_HECODE=ON' : '';
    var sortorder = '';
    //if((mytable.a_cntl.cacheWriteMode>1) && mytable.cacheSortCondition)
    //    sortorder = mytable.cacheSortCondition;
    var wcond = '';
	var wverb = 'SUM'; //used to COUNT
    var byc = '';
    var sortorderAdded = false;
    var excols = '';
    if((typeof(aggBy)!="undefined")  && (aggBy > -1)){
        var byfld = getCacheFieldName(mytable,aggBy);
        wverb = 'SUM';
        fld = aggType+'.'+fld;
        byc='&AR_BYCOLS='+URLencode(sortorder)+URLencode(' BY '+byfld+' NOPRINT');
        sortorderAdded = true;
    } else {
        //if(typeof(mytable.a_cntl.verbs)!="undefined")
            //wverb = mytable.a_cntl.verbs[0].type;
		byc = '&AR_BYCOLS='+URLencode(' BY '+fld);
		if(getMinMax)
			byc = '';
        if(!getMinMax) {
        	if(fldIsCompute)
        		fld = 'COMPUTE MAX.'+mytable.a_capt[col].computeText;
			else
		    fld = 'MAX.'+fld;
        }
        for(i = 0; i < mytable.a_capt.length; i++) {
            if(mytable.a_capt[i].isby) {
                if(bycols=="") bycols="BY ";
                bycols += getCacheFieldName(mytable,i)+" ";
                if(!mytable.a_capt[i].isDefine && !mytable.a_capt[i].isTempDefine)
                    defineOnly = false;
			} else
			if(excols == '') {
				if(!mytable.a_capt[i].isDefine){
					excols = getCacheFieldName(mytable,i)+" ";
				}
            }
        }
		if(fldIsCompute)
            byc = '&AR_BYCOLS='+URLencode(bycols);
    }
    if(sortorder !=''  && !sortorderAdded) {
        if(byc=='')
            byc = '&AR_BYCOLS='
        byc += ' ' + URLencode(sortorder);
    }
    var chold = '';
    var wExtra = '';
    if((mytable.haveFilters)&&(filtered)) {
        if(mytable.a_cntl.cacheWriteMode<2) fmod = '0';
        else {
            wcond = mytable.cacheWhereCondition;
            chold = mytable.cacheWhereHoldFiles;
            if(mytable.cacheWhereConditionEval != '')
                wExtra = mytable.cacheWhereConditionEval.split("%5Bibi%24blank%5D").join('%20');
        }
    }
    var isInclude = '';
    if(mytable.a_cntl.arcacheInclude) 
        isInclude = '&AR_IACHEFEX='+mytable.cacheFile+'i';
    else
    if(ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster])
        isInclude = '&AR_IACHEFEX='+ibiArCache.includeFiles[mytable.a_cntl.cacheOriginalMaster].cacheFileName;
    var ffunc = "GETUNQCOLVAL";
    var cfunc = "COLVAL";
    if(getMinMax) {
        ffunc = "GETCOLMINMAX";
        cfunc = "COLMINMAX";
    }
    var extraCols = '';
    if(defineOnly) {
    	extraCols = "&AR_EXCOL=MAX."+excols;
	}
    var centZero = (typeof mytable.a_cntl.cent0 !== 'undefined') ? '&AR_CZ=ON' : '';
    var defineStr = '';
    if(mytable.a_capt[col].isFilterDefine) {
        defineStr += isSpecialDefine(mytable,col,true);

        /*
        defineStr = '&AR_DEFINES='+URLencode(defineStr);
        fld = mytable.a_cntl.a_cols[col].field;
        */
        byc='&AR_BYCOLS='+URLencode(defineStr);
		fld = '';
		for(i=0; i < mytable.a_cntl.a_cols.length; i++)
			if(!mytable.a_capt[i].isby && !mytable.a_capt[i].isFilterDefine) {
                fld = getCacheFieldName(mytable,i);
                if(mytable.a_cntl.cacheWriteMode > 1)
                    if(mytable.a_capt[i].isCompute)
                    	fld = 'COMPUTE '+mytable.a_capt[i].computeText;
                break;
            }
		if(fld == '')
			fld = getCacheFieldName(mytable, 0);
    }
    url += 'IBIF_ex='+mytable.a_cntl.cacheFex+forAllRequests(mytable)+
        '&AR_COL='+URLencode(fld)+
        '&AR_CFUNC='+ffunc+
        '&IBIF_wfdescribe=OFF'+
		'&AR_CAVERB='+wverb+byc+extraCols+
        '&AR_COLS='+URLencode(allfields(mytable))+
        '&AR_COUNTCOL='+URLencode(getCacheFirstRealFieldName(mytable))+
        '&AR_SORDER='+sortorder+defineStr+
			splitWhere(wcond)+chold+splitWhere(wExtra,true)+
        '&AR_CACHEMAS='+URLencode(mytable.a_cntl.cacheOriginalMaster)+
        '&AR_CACHEMODE='+mytable.a_cntl.cacheWriteMode+
        '&AR_CACHEFMT='+mytable.a_cntl.cacheFormat+
        '&AR_CACHEFEX='+mytable.cacheFile+fmod+rl+
        '&AR_TEMPHOLD=H'+mytable.cacheFile+fmod+(ibiArCache.tempHoldCounter+'')+
        htmlEncode + isInclude + centZero;
    var aasync = false;
    if(typeof async != "undefined")
        aasync = async;
    ibiArCache.tempHoldCounter++;
    CServerRequest(url,cfunc,tnum,aasync,undefined,callback);
}


function readCacheCol(tn)
{
    if(currColData[tn]!=null) {
        return {'data':currColData[tn],'col':currColType[tn]};
    } else
        return null;
}

function cDisplayError(m,mytable)
{
    if(!mytable.showMessage) {
        var new_window = window.open("", "_blank", "");
        var nd = new_window.document;
        nd.open();
    }
    if(m.javascript!='') 
        if(m.javascript.indexOf("FOC227")>-1) {
            if(mytable.showMessage)
                mytable.showMessage(ibiMsgStr["chfail"],"error");
            else
                nd.write(ibiMsgStr["chfail"]);
        } else {
            if(mytable.showMessage)
                mytable.showMessage(m.javascript,"error");
            else
                nd.write(m.javascript);
        }
    else {

        if(m.messages.indexOf("FOC227")>-1) {
            if(mytable.showMessage)
                mytable.showMessage(ibiMsgStr["chfail"],"error");
            else
             nd.write(ibiMsgStr["chfail"]);
        } else {
            if (mytable.showMessage) {
                mytable.showMessage(m.messages,"error");

            } else {
                nd.write('<HTML><BODY><PRE>');
                nd.write(m.messages);
                nd.write('<\/PRE><\/BODY><\/HTML>');
            }
        }
    }
    if(!mytable.showMessage)
        nd.close();
}


function CServerRequest(lurl,myfunc,tn,async,filtered,callback)
{
 // jstrace('[arcache.js CServerRequest]\nurl='+url.replace(/\?/g,'\n').replace(/&&/g,'&').replace(/&/g,'\n    '));
    var reqObj = {};
    var url = lurl;
    var mytable = getMyTable(tn);
    reqObj.mytable = mytable;
    reqObj.cleanUp = function() {
        this.mytable.activeAjaxRequests--;
        console.log('clean up '+this.mytable.activeAjaxRequests);
    };
    reqObj.arsLength = mytable.arsLength;
    if(typeof(mytable.a_cntl.csrfName)!="undefined") {
        url += '&'+mytable.a_cntl.csrfName+'='+mytable.a_cntl.csrfValue;
    }
    if(typeof(mytable.a_cntl.initProc)!="undefined") {
        url += '&IBI_INITIAL_PROCEDURE='+mytable.a_cntl.initProc;
    }
    ibiStd.trace("CServerRequest[arcache.js] - url: "+url.replace(/\?/g,'?<br>').replace(/&&/g,'&').replace(/&/g,'<br>&'),mytable);
    reqObj.IRreq=ibiUtil.GetXmlHttpObject();
    reqObj.mytable = mytable;
    if(typeof callback != "undefined")
        reqObj.callback = callback;
    if(reqObj.IRreq!=null) {
        mytable.activeAjaxRequests++;
        if (async) {
             if (navigator.userAgent.indexOf('Gecko') != -1) 
                reqObj.IRreq.onload = function() {cDataReady(myfunc,tn,filtered,true,reqObj);};
            else 
                reqObj.IRreq.onreadystatechange = function(){if(reqObj.IRreq.readyState==4)cDataReady(myfunc,tn,filtered,true,reqObj);};
        }
        var u = url.split('?');
        var d= u[1].split("&");
        var data = d[0];
        for(var i=1; i < d.length; i++)
            if(d[i]!='')
                data += '&' + d[i];

        reqObj.IRreq.open("POST",u[0],async);
        reqObj.IRreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded"+((url.indexOf("WFServlet") != -1) ? "; charset=utf-8" :""));
        if(b_ie)
            reqObj.IRreq.setRequestHeader("Content-length", data.length);
        //use Persistent-Auth if is not true
        //IRreq.setRequestHeader("Connection", "close");
        reqObj.IRreq.send(data);
        /*
        IRreq.open("GET",url,async);
        IRreq.send(null); 
        */
        if((typeof mytable.rCallBack != "undefined") && (myfunc=="ROLL")) {
            mytable.IRreq = reqObj.IRreq;
            mytable.reqObj = reqObj;
        }
        if(!async) cDataReady(myfunc,tn,filtered,false,reqObj);
    } 
}
// var trcW,walv,trcD,jsTrace=true;
// function jstrace(txt){
//       if(jsTrace===true){
//           eval("try{trcW=window.parent.trcW;trcD=trcW.document;}catch(e){}");
//           walv=(typeof(trcW)!="undefined"&&trcW!=null&&typeof(trcD)!="undefined"&&trcD!=null);
//           if(!walv){
//               trcW=open("","_blank","");
//               window.parent.trcW=trcW;
//               trcD=trcW.document;
//               trcD.write('<pre style="font-family:Lucida Console;font-size:11px;">\n');
//               trcW.document.title="WebFocus JS Trace";
//           }
//           var wtxt;
//           if(typeof(txt)=="undefined") wtxt="UnDefined";
//           if(txt.length==0) wtxt='...nothing_to_write...';
//           if(typeof(wtxt)=="undefined"){  // \f\n\r\t\v
//              wtxt=txt.replace(/\0/g,'').replace(/\r/g,'\n').replace(/\n\n/g,'\n');
//              if('\n'==wtxt.charAt(0)) wtxt=wtxt.substring(1);
//           }
//           trcD.write('\n'+wtxt);
//       }
// }
function cDataReady(ctype,tn,filtered,async,reqObj)
{
     // jstrace('\n[arcache.js cDataReady]\n');
    var msg, m, tc, j, i,c;
    var mytable = getMyTable(tn);
    var svsort;
    var S_T_cont;
    var S_T_capt;
    var S_T_look;
    var S_T_cntl;
    var S_t_T_capt;
    var asl = reqObj.arsLength;

    //original report may have been deleted and replaced by api
    if(typeof reqObj.IRreq == "undefined")
        return;
    ibiStd.trace("cDataReady[arcache.js] - function: "+ctype,mytable);
    if(reqObj.IRreq.readyState==4) {
        if(reqObj.IRreq.status==200) {
            msg = reqObj.IRreq.responseText;
            m = split_results(msg);
     //     jstrace('NumOfTable='+NumOfTable);
     //     if(typeof(m.javascript)!="undefined") jstrace('m.javascript={\n    '+
     //                               m.javascript.replace(/\0/g,'').replace(/\n/g,'').replace(/;/g,';\n    ') +
     //                               '             } // m.javascript_END');  
            if(((ctype=="WRITEINCLUDE")||(ctype=='FILTER'))&& (msg.indexOf('WRITEDONE')!=-1)) {
                if(ctype == 'FILTER') {
                    mytable.a_filter_body = [];
                    mytable.a_filter_cont=[];
                    mytable.n_rows_filter_have=0;
                }
                ibiStd.HideWaitSB(tn);
                mytable.activeAjaxRequests--;
                return true;
            } else
            if((m.javascript!='')&&(m.javascript.indexOf('var dataOnly=true')!=-1)) {
                var sv_tnum = NumOfTable;
                if((ctype=='COLMINMAX')||(ctype=="COLVAL") || (ctype=="ROLLINFO") || (ctype=="ROLL")) {
                    NumOfTable = 0;
                    S_T_cont = T_cont;
                    S_T_capt = T_capt;
                    S_T_look = T_look;
                    S_T_cntl = T_cntl;
                    S_t_T_capt = t_T_capt;
                    T_cont=[];
                    T_capt=[];
                    T_look=[];
                    T_cntl=[];
                    t_T_capt = [];
                } else
                NumOfTable++;
                eval(m.javascript);
                if(ctype != "ROLLINFO") {
                    if(mytable.resetIBs || asl==0) {
                        if(mytable.IBs.length<ARstrings.length) {
                            mytable.IBs = ARstrings;
                        }
                    } else {
                        if((ARstrings.length+asl)>(mytable.IBs.length+1)) {
                            var sl = 1;
                            if(asl!=mytable.IBs.length)
                                ARstrings.splice(0,mytable.IBs.length - asl);
                            mytable.IBs.splice(mytable.IBs.length - 1, 1);
                            mytable.IBs = mytable.IBs.concat(ARstrings);
                        }
                    }
                }
                mytable.activeAjaxRequests--;
                if(ctype=='COLVAL') {
                    NumOfTable = 0;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    tc = T_cont[NumOfTable].length;
                    currColData[tn]= null;
                    if(tc) {
                        c = 0;
                        currColData[tn]= [];
                        currColType[tn]= [];
                        for(i = 0; i < T_capt[NumOfTable].length; i++) {
                            if(!T_capt[NumOfTable][i].noprint) {
                                currColType[tn][c] = CopyArray(T_capt[NumOfTable][i]);
                                for(j = 0; j < tc; j++) {
                                    if(typeof currColData[tn][j] == "undefined")
                                        currColData[tn][j] = [];
                                    currColData[tn][j][c] = CopyArray(T_cont[NumOfTable][j][i]);
                                }
                                c++;
                            }
                        }
                    }
                    T_capt = S_T_capt;
                    T_cntl = S_T_cntl;
                    T_look = S_T_look;
                    T_cont = S_T_cont;
                    t_T_capt = S_t_T_capt;
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='COLMINMAX') {
                    NumOfTable = 0;
                    //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    tc = T_cont[NumOfTable].length;
                    currColData[tn]= null;
                    if(tc) {
                        currColData[tn]= [];
                        currColData[tn][0] = CopyArray(T_cont[NumOfTable][0]);
                        currColType[tn] = CopyArray(T_capt[NumOfTable]);
                    }
                    T_capt = S_T_capt;
                    T_cntl = S_T_cntl;
                    T_look = S_T_look;
                    T_cont = S_T_cont;
                    t_T_capt = S_t_T_capt;
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='NUMRECORDS') {
                    NumOfTable = sv_tnum+1;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    mytable.a_cntl.NumRecords = mytable.IBs[T_cont[NumOfTable][0][0][DARAW]];
                    mytable.n_rows = mytable.a_cntl.NumRecords;
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='CACHEFORMAT') {
                    NumOfTable = sv_tnum+1;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    mytable.cacheFileFormat = mytable.IBs[T_cont[NumOfTable][0][0][DARAW]];
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='HIGHLIGHT') {
                    NumOfTable = sv_tnum+1;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    if(mytable.haveFilters) {
                        mytable.n_rows_filter_have = 0;
                        mytable.a_filter_cont = [];
                        mytable.a_filter_body = [];
                    } else {
                        mytable.n_rows_have = 0;
                        mytable.a_all_cont = [];
                        mytable.a_all_body = [];
                    }
                    T_cont[NumOfTable] = [];
                    NumOfTable = sv_tnum;
                } else
                if ((ctype=='GETMOREDATA') || (ctype=='GETMORESORTDATA')) {
                    NumOfTable = sv_tnum+1;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                           if(m.javascript.indexOf('T_cont')!=-1) {
                        tc = T_cont[NumOfTable].length;

                        if (ctype == 'GETMORESORTDATA') {
                            mytable.a_all_body = [];
                        }

                        if(mytable.haveFilters) {
                            mytable.n_rows_filter_have = mytable.n_rows_filter_have + tc;
                            if(mytable.n_rows_filter_have>mytable.maxCacheRecords) {
                                mytable.a_filter_cont = [];
                                mytable.a_filter_body = [];
                                mytable.n_rows_filter_have=tc;
                            }
                        } else {
                            mytable.n_rows_have = mytable.n_rows_have + tc;
                            if(mytable.n_rows_have>mytable.maxCacheRecords) {
                                //mytable.a_all_cont = [];
                                //mytable.a_all_body = [];
                                mytable.n_rows_have=tc;
                            }
                        }
                        for(i=0; i<tc; i++) {
                            firstENP = 0;
                            if(mytable.haveFilters) {
                                if((mytable.a_cntl.cacheWriteMode>1)&&(mytable.cacheSortCondition!='')) {
                                    mytable.a_filter_cont[rTstart[tn]+i] = [];
                                    for(j = 1; j < T_cont[NumOfTable][i].length; j++) {
                                        mytable.a_filter_cont[rTstart[tn]+i][j-1] = CopyArray(T_cont[NumOfTable][i][j]);
                                    }
                                } else
                                    mytable.a_filter_cont[rTstart[tn]+i] = CopyArray(T_cont[NumOfTable][i]);
                                mytable.a_filter_body[rTstart[tn]+i] = [rTstart[tn]+i,0,0,-1];
                                if(mytable.highCondition!='') {
                                    mytable.a_filter_body[rTstart[tn]+i][1] = mytable.IBs[T_cont[NumOfTable][i]];
                                }
                            } else {
                                if((mytable.a_cntl.cacheWriteMode>1)&&(mytable.cacheSortCondition!='')) {
                                    mytable.a_all_cont[rTstart[tn]+i] = [];
                                    for(j = 1; j < T_cont[NumOfTable][i].length; j++) {
                                        mytable.a_all_cont[rTstart[tn]+i][j-1] = CopyArray(T_cont[NumOfTable][i][j]);
                                    }
                                } else
                                    mytable.a_all_cont[rTstart[tn]+i] = CopyArray(T_cont[NumOfTable][i]);
                                mytable.a_all_body[rTstart[tn]+i] = [rTstart[tn]+i,0,0,-1];
                                if(mytable.highCondition!='') {
                                    mytable.a_all_body[rTstart[tn]+i][1] = mytable.IBs[T_cont[NumOfTable+1][i][0][0]];
                                }
                            }
                        }
                        T_cont[NumOfTable] = [];
                        if(mytable.highCondition!='') T_cont[NumOfTable+1]=[];

                        NumOfTable = sv_tnum;
                        //svsort=mytable.a_sort;
                        //Dont let show do sort 
                        mytable.sortneeded = false;
                         //mytable.a_sort = [];
                        if(!mytable.isPivot) ibiGrid.show(false,mytable);
                        //mytable.a_sort = svsort;
                    } else {
                        if(mytable.haveFilters) {
                            mytable.a_filter_cont = [];
                            mytable.a_filter_body = [];
                            mytable.n_rows_filter_have=0;
                        } else {
                            mytable.a_all_cont = [];
                            mytable.a_all_body = [];
                            mytable.n_rows_have=0;
                        }
                        NumOfTable = sv_tnum;
                    }

                } else
                if(ctype=='FILTER') {
                    NumOfTable = sv_tnum+1;
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    if(m.javascript.indexOf('T_cont')!=-1)
                        mytable.a_filter_body=new Array(mytable.IBs[T_cont[NumOfTable][0][0][DARAW]]*1);
                    else
                        mytable.a_filter_body = [];
                    mytable.a_filter_cont=[];
                    mytable.n_rows_filter_have=0;
                    T_cont[NumOfTable] = [];
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='ROLL') {
                    NumOfTable = 0;
                    var cntl = T_cntl[0];
                    var cont = T_cont[0];

                    //if fexParts, GRAPH request may have been TRANSFORMED so the fields arent where we expect
                    if(mytable.fexParts && (mytable.a_cntl.cacheWriteMode == 4)) {
                    	var swappedFields = false;
                    	if(mytable.original_cntl.a_cols.length != cntl.a_cols.length)
                    		swappedFields = true;
                    	else {
                    		for(i = 0; i < cntl.a_cols.length; i++ )
                    			if(mytable.original_cntl.a_cols[i].field !=  cntl.a_cols[i].field)
                    				swappedFields = true;
						}
                    	if(swappedFields) {
                    		var newcont = [];
                    		var fieldsTransfer = [];
                    		var findFieldIn = function (fieldsList,field) {
                    			for(var j = 0; j < fieldsList.length;j++)
                    				if(field.field == fieldsList[j].field)
                    					return j;
                    			return -1;
							};

                    		for(i = 0; i <  mytable.original_cntl.a_cols.length; i++) {
                    			fieldsTransfer[i] = {
                    				'from':findFieldIn(cntl.a_cols,mytable.a_cntl.a_cols[i]),
                    				'to':i
								};
								if(fieldsTransfer[i].from == -1)
									fieldsTransfer[i].from = cntl.a_cols.length - 1;
							}
                    		for(i = 0; i < cont.length; i ++) {
                    			newcont[i] = [];
                    			for(j = 0; j < mytable.original_cntl.a_cols.length; j++) {
                    				newcont[i][j] = ibiStd.copyObject(cont[i][fieldsTransfer[j].from]);
								}
							}
                            cont = newcont;
                        }
                        if(cntl.graphFinalProps)
                            mytable.a_cntl.graphFinalProps = ibiStd.copyObject(cntl.graphFinalProps);
                        //mytable.a_cntl.graphProps = ibiStd.copyObject(cntl.graphProps);
                    }
 					if((typeof(cont)=="undefined")||(mytable.isEmptyReport))
                        remoteRollData[tn] = [];
                    else
                        remoteRollData[tn] = CopyArray(cont);
                    //T_cont[NumOfTable-1] = [];
                    //T_cont[NumOfTable] = [];
                    //NumOfTable = sv_tnum;
                    if(mytable.a_cntl.NumRecords == -9) {
                        mytable.a_cntl.NumRecords = remoteRollData[tn].length;
                        mytable.n_rows = remoteRollData[tn].length;
                    }
                    T_capt = S_T_capt;
                    T_cntl = S_T_cntl;
                    T_look = S_T_look;
                    T_cont = S_T_cont;
                    t_T_capt = S_t_T_capt;
                    NumOfTable = sv_tnum;

                } else
                if(ctype=='ROLLINFO') {
                    NumOfTable = 0;
                    var obj = {'capt':[],'cols':[]};
                    obj.capt = ibiStd.copyObject(T_capt[NumOfTable]);
                    obj.cols = ibiStd.copyObject(T_cntl[NumOfTable].a_cols);
                    T_capt = S_T_capt;
                    T_cntl = S_T_cntl;
                    T_look = S_T_look;
                    T_cont = S_T_cont;
                    t_T_capt = S_t_T_capt;
                    NumOfTable = sv_tnum;
                    mytable.returnInfo = obj;
                } else
                if(ctype=='AGGNUM') {
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    if((typeof(T_cont[NumOfTable-5])!='undefined')&&
                       (T_cont[NumOfTable-5].length>0)) {
                        if(filtered) {
                            mytable.FilterTotalMax[raCol[tn]]=new Object();
                            mytable.FilterTotalMin[raCol[tn]]=new Object();
                            mytable.FilterTotal[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-7][0][0][DARAW]];
                            mytable.FilterTotalDst[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-6][0][0][DARAW]];
                            mytable.FilterTotalMax[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-5][0][0][DARAW]];
                            mytable.FilterTotalMin[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-4][0][0][DARAW]];
                            mytable.FilterTotalMax[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-5][0][0][DASTR]];
                            mytable.FilterTotalMin[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-4][0][0][DASTR]];
                            mytable.FilterAbsTotal[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-3][0][0][DARAW]];
                            mytable.FilterTotalAvg[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-2][0][0][DARAW]];
                            mytable.FilterTotalCnt[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-1][0][0][DARAW]];
                             // mytable.FilterTotalCnt[raCol[tn]] = mytable.a_filter_body.length;
                        } else {
                            mytable.FullTotalMax[raCol[tn]]=new Object();
                            mytable.FullTotalMin[raCol[tn]]=new Object();
                            mytable.FullTotal[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-7][0][0][DARAW]];
                            mytable.FullTotalDst[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-6][0][0][DARAW]];
                            mytable.FullTotalMax[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-5][0][0][DARAW]];
                            mytable.FullTotalMin[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-4][0][0][DARAW]];
                            mytable.FullTotalMax[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-5][0][0][DASTR]];
                            mytable.FullTotalMin[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-4][0][0][DASTR]];
                            mytable.FullAbsTotal[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-3][0][0][DARAW]];
                            mytable.FullTotalAvg[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-2][0][0][DARAW]];
                            mytable.FullTotalCnt[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-1][0][0][DARAW]];
                             // mytable.FullTotalCnt[raCol[tn]] = mytable.a_cntl.NumRecords;
                        }
                    } else {
                        if(filtered) {
                            mytable.FilterTotal[raCol[tn]]=0;
                            mytable.FilterAbsTotal[raCol[tn]]=0;
                            mytable.FilterTotalDst[raCol[tn]]=0;
                            mytable.FilterTotalMax[raCol[tn]]=0;
                            mytable.FilterTotalMin[raCol[tn]]=0;
                            mytable.FilterTotalAvg[raCol[tn]]=0; //
                            mytable.FilterTotalCnt[raCol[tn]] = mytable.a_filter_body.length;
                        } else {
                            mytable.FullTotal[raCol[tn]]=0;
                            mytable.FullAbsTotal[raCol[tn]]=0;
                            mytable.FullTotalDst[raCol[tn]]=0;
                            mytable.FullTotalMax[raCol[tn]]=0;
                            mytable.FullTotalMin[raCol[tn]]=0;
                            mytable.FullTotalAvg[raCol[tn]]=0; //
                            mytable.FullTotalCnt[raCol[tn]] = mytable.a_cntl.NumRecords;
                        }
                    }
                    NumOfTable = sv_tnum;
                } else
                if(ctype=='AGGSTR') {
     //             jstrace('ctype='+ctype+'  NumOfTable='+NumOfTable);
                    if((typeof(T_cont[NumOfTable-1])!='undefined')&&
                        (T_cont[NumOfTable-1].length>0)) {
                        if(filtered) {
                            mytable.FilterTotalDst[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-3][0][0][DARAW]];
                            mytable.FilterTotalMax[raCol[tn]]=new Object();
                            mytable.FilterTotalMin[raCol[tn]]=new Object();
                            mytable.FilterTotalMax[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-2][0][0][DASTR]];
                            mytable.FilterTotalMin[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-1][0][0][DASTR]];
                            mytable.FilterTotalMax[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-2][0][0][DARAW]];
                            mytable.FilterTotalMin[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-1][0][0][DARAW]];
                            mytable.FilterTotalCnt[raCol[tn]] = mytable.a_filter_body.length;
                        } else {
                            mytable.FullTotalDst[raCol[tn]]=mytable.IBs[T_cont[NumOfTable-3][0][0][DARAW]];
                            mytable.FullTotalMax[raCol[tn]]=new Object();
                            mytable.FullTotalMin[raCol[tn]]=new Object();
                            mytable.FullTotalMax[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-2][0][0][DARAW]];
                            mytable.FullTotalMin[raCol[tn]].raw=mytable.IBs[T_cont[NumOfTable-1][0][0][DARAW]];
                            mytable.FullTotalMax[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-2][0][0][DASTR]];
                            mytable.FullTotalMin[raCol[tn]].str=mytable.IBs[T_cont[NumOfTable-1][0][0][DASTR]];
                            mytable.FullTotalCnt[raCol[tn]] = mytable.a_cntl.NumRecords;
                        }
                    } else {
                        if(filtered) {
                            mytable.FilterTotal[raCol[tn]]=0;
                            mytable.FilterAbsTotal[raCol[tn]]=0;
                            mytable.FilterTotalDst[raCol[tn]]=0;
                            mytable.FilterTotalMax[raCol[tn]]=0;
                            mytable.FilterTotalMin[raCol[tn]]=0;
                            mytable.FilterTotalCnt[raCol[tn]] = mytable.a_filter_body.length;
                        } else {
                            mytable.FullTotal[raCol[tn]]=0;
                            mytable.FullAbsTotal[raCol[tn]]=0;
                            mytable.FullTotalDst[raCol[tn]]=0;
                            mytable.FullTotalMax[raCol[tn]]=0;
                            mytable.FullTotalMin[raCol[tn]]=0;
                            mytable.FullTotalCnt[raCol[tn]] = mytable.a_cntl.NumRecords;
                        }

                    }
                    NumOfTable = sv_tnum;
                }
            } else {
                mytable.activeAjaxRequests--;
                cDisplayError(m,mytable);
                return false;
            }

            S_T_cont = T_cont;
            S_T_capt = T_capt;
            S_T_look = T_look;
            S_T_cntl = T_cntl;
            S_t_T_capt = t_T_capt;
            T_cont = [];
            T_capt = [];
            T_look = [];
            T_cntl = [];
            t_T_capt = [];
            for(c = 0; c < NumOfTable; c++) {
                T_cont[c] = S_T_cont[c];
                T_capt[c] = S_T_capt[c];
                T_look[c] = S_T_cont[c];
                T_cntl[c] = S_T_cntl[c];
                t_T_capt[c] = S_t_T_capt[c];
            }
            if(reqObj.callback)
                reqObj.callback();
            else
            if(typeof mytable.rCallBack != "undefined") {
                mytable.rCallBack(mytable.a_cntl.table_number);
                delete mytable.rCallBack;
                if(async) {
                    mytable.rHasCallBackCont = true;
                    mytable.gshow();
                }
            }
     //     jstrace('[arcache.js cDataReady] @end  NumOfTable='+NumOfTable);
     //     jstrace('--------------------------------------------------------');
            ibiStd.HideWaitSB(tn);
        } else {
            if(reqObj.IRreq.status != 0) {
                alert(ibiMsgStr['servererr']+reqObj.IRreq.status);
            }
            ibiStd.HideWaitSB(tn);
        }
    }
    return true;
}
