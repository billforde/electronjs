/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arcontrol.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180302 1345 wjf 200246 AHML: Unify JSON output
* 180226 1254 wjf 200246 AHML: Unify JSON output
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 180215 1230 bjd 197012 Dynamically reformatted field is not styled correctly
* 180125 1507 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 180108 1725 wjf 198693 Vis: Drilldown on map doesn`t work design or run time
* 171220 1311 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171205 1120 wjf 198518 Visualization: Chart output is truncated after resizing the
* 171204 1352 wjf 190965 Vis: ESRI: Filter chart, Exclude from chart, Drill down opt
* 171201 1142 wjf 195037 AS:Active fromated reports are not visible at run time when
* 171121 1321 wjf 196891 AHTML:Clicking or Dragging slider control displays Zero rec
* 171120 1344 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 171117 0930 wjf 196455 ACT: Converting BLA chart to Scatter/Bubble using Advanced
* 171115 1128 wjf 194792 HEAD: ESRI maps with 'Active report' output format displays
* 171107 1600 iys 197661 Chart data table has overflow visible instead of auto
* 171025 0904 bjd 191817 AHTML:Freeze/Unfreeze option is missing in Active dropdown
* 171016 1652 wjf 196768 "No Data to Graph" message is getting displayed when changin
* 171016 1639 ppl 196755 Show prompt in Visualization >True and False strings nee
* 171003 1108 bjd 194078 AHTML: Filtering on Datetime translated dates causes loopin
* 171002 1654 bjd 194078 AHTML: Filtering on Datetime translated dates causes loopin
* 170929 1203 bjd 194085 AHTML: Filtering with Datetime field causes incorrect resul
* 170926 1319 wjf 192077 AHTML: Bar chart with PRINT returns SUM
* 170920 1247 bjd 178500 ACT: Parameters not passed when mix visible/hidden columns
* 170919 1130 bjd 178500 ACT: Parameters not passed when mix visible/hidden columns
* 170901 1052 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170816 1057 wjf 193903 Active Dashoard colors. Changed from 8.1 to 8.2
* 170815 1121 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170809 1314 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170807 1036 wjf 191624 8201MR1:Unable to apply a limit in a visualization
* 170804 1307 bjd 190666 NLV: A string, "MISSING" needs to be extracted for translat
* 170731 1530 bjd 193319 AHTML: Filtering on legacy date fields fails for blank valu
* 170717 1531 iys 185617 Mobile:AHTML report using FREEZE displays tiny panel in upp
* 170711 1117 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170705 1133 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 170629 1107 wjf 191515 Create unified filter component to replace old style filter
* 170626 1519 bjd 192077 AHTML: Bar chart using Print ignores the detail and still s
* 170620 1550 iys 185617 Mobile:AHTML report using FREEZE displays tiny panel in upp
* 170620 1536 bjd 192077 AHTML: Bar chart using Print ignores the detail and still s
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1400 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170525 1020 wjf 191511 Add Gridbar for non column related options.
* 170522 0931 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170511 1811 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170503 1108 wjf 190731 HEAD:Visualization: ESRI maps displays default screen in li
* 170502 1851 wjf 190731 HEAD:Visualization: ESRI maps displays default screen in li
* 170420 1442 wjf 190486 Wf_retail: Getting foc error on editing the "Store,Store La
* 170404 1317 wjf 189263 AHTML: Report returns 0 records using a valid Filter value.
* 170331 1139 wjf 187417 Auto Drill Breadcrumbs for date fields should reflect its f
* 170329 0738 wjf 188852 Vis: Applied Footer background color displays on grid data
* 170321 1029 wjf 189263 AHTML: Report returns 0 records using a valid Filter value.
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170316 1131 bjd 189359 AHTML: Horizontal Bar Chart options missing from Chart/Roll
* 170316 1110 iys 185240 Mobile: Scroll bars do not function on Bar Chart in Documen
* 170310 1351 bjd 189302 AHTML: Cache Report returns 0 records using a valid Filter
* 170309 1232 bjd 189263 AHTML: Report returns 0 records using a valid Filter value.
* 170223 1523 bjd 180891 Active Report Filter options not working consistently.
* 170209 1425 bjd 187343 AHTML: Cache EQ/NE filter not working well for rounded value
* 170203 1103 bjd 187342 AHTML: Cache GE/LE filter excludes equal values
* 170130 0943 iys 188013 Defaults in an active report
* 170126 1120 bjd 186007 TOC report at 2nd level displaying data for other 1st level
* 170118 1559 wjf 187700 Hidden Fields cause unexpected behavior with certain Active
* 170117 1317 wjf 187700 Hidden Fields cause unexpected behavior with certain Active
* 170112 1147 bjd 187342 AHTML: Cache GE/GT/LE/LT filter sometimes returns incorrect
* 161221 1559 bjd 187344 Active Reports (AHTML): Value does not filter properly unle
* 161220 1814 wjf 180329 As a user I want to group dimension values through the repo
* 161216 0927 wjf 186604 Slider range does not reset back to default values when cli
* 161215 1443 wjf 187123 [BLANK] value in Filter Prompt does not appear as displayed
* 161208 1345 iys 186079 Chart Type not displayed correctly in MobleFaves on iPad
* 161208 1241 wjf 186935 With CACHE enabled Highlight does not work after filtering
* 161208 1225 wjf 186951 AHTML: Filter Menu/Highlight then Cell Filter/Highlight res
* 161201 1258 wjf 186951 AHTML: Filter Menu/Highlight then Cell Filter/Highlight res
* 161201 1143 wjf 180891 Active Report Filter options not working consistently.
* 161129 1504 bjd 186173 Active Report creates chart; filter and unfilter on higher
* 161129 1024 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 161128 1805 wjf 186841 Allow paglinetext to be overriden directly from fex
* 161128 1447 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 161123 0935 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161117 1425 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161117 1137 wjf 186546 Visualization: Resizing browser window throws FOC002 and FO
* 161116 1141 wjf 186606 Merge Dashboard with filter controls may not display proper
* 161107 0856 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161021 1146 wjf 185920 Run menu icon not displayed for Retail samples > Sales by C
* 161017 1437 wjf 185787 Visualization shows incorrect tooltip label when drill down
* 160925 1742 wjf 178042 BUE Vis: Filter on a define field with Y Format throws erro
* 160921 0952 wjf 184913 Visualization: Filter chart and then Reset returns (FOC804)
* 160920 1142 wjf 184850 Vis:Reset after drilldown in runtime popout menu shows inc
* 160919 1133 wjf 184799 Retail samples: Clicking on Reset button from runtime menu
* 160916 0913 wjf 184727 AHTML: Active report that creates multiple charts fails to
* 160913 1433 wjf 183217 Heading with field name displays incorrectly on Active Char
* 160913 1124 wjf 183350 Visualization drilldown Esri map behaves different from cha
* 160831 1820 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160830 1413 wjf 179652 Vis:Runtime: Restore and Remove filter doesn't preserve the
* 160830 1051 wjf 179078 Vis: List Single Select doesn't work after Remove filter an
* 160829 1813 wjf 179582 BUE: If same field is in horizontal axis and tooltip, displ
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160810 1158 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160809 0916 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160804 2250 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160802 1549 iys 180062 Create Active Report "Plug-in" for browers
* 160802 1129 wjf 180533 Map: Enable drill up/drill down in Visualization
* 160802 1119 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160715 1606 bjd 180891 Active Report Filter options not working consistently.
* 160714 1649 bjd 182234 Traffic light condition does not work with ACROSS and AHTML
* 160714 1421 bjd 182234 Traffic light condition does not work with ACROSS and AHTML
* 160711 1501 iys 179638 AHTML:Drop down list entry for Missing data is displayed im
* 160629 1711 bjd 182195 AHTML:Cache:VAL:Highlight with greater than option doesnt s
* 160617 1353 bjd 130686 Multiple conditional styling incorrect in  AHTML format
* 160610 1256 hms 180534 Remove tab characters from source files
* 160609 1241 ppl 174119 Add new Tree Filter control.
* 160606 1404 bjd 180891 Active Report Filter options not working consistently.
* 160603 1142 wjf 181636 visualization report at portal runtime yields webpage error
* 160602 1302 bjd 180891 Active Report Filter options not working consistently.
* 160602 1148 wjf 181567 Active Chart Toolbar: Select "Tagcloud Chart" types in adva
* 160524 1032 wjf 181091 Runtime Show Data not displayed when there is a Filter on a
* 160523 1541 bjd 180891 Active Report Filter options not working consistently.
* 160516 1113 wjf 180967 Dummy table, created by tool, should be hidden.
* 160504 1355 iys 180062 Create Active Report "Plug-in" for browers
* 160502 1129 iys 178263 AHTML:Horizontal scroll bar appears in Active Report. Not n
* 160413 1004 wjf 178160 Grid (from UI at run time) and drill down don't match (cach
* 160405 0006 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 2314 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1452 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160401 1126 iys 179156 Mob: "Show Data" menu doesn't work properly
* 160329 1139 wjf 178923 BUE: FOC error on Exclude when Vertical axis has Packed for
* 160323 1723 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160323 0942 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160322 1443 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 1128 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160314 1513 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160308 1456 wjf 177149 Mouse pointer does not change to hand when over an Auto Dri
* 160307 1254 bjd 177781 AHTML:Active report rollup up to Bar Chart, then report los
* 160302 1639 wjf 177816 Lasso filter in preview mode do not seems to get updated fo
* 160302 1409 wjf 177816 Lasso filter in preview mode do not seems to get updated fo
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160223 1624 bjd 175649 AHTML: Pagination -vertical scrollbar missing bottom arrow
* 160217 1339 wjf 176924 WF BUE: Drill down to second level of dimension hierarchy i
* 160216 1510 wjf 176898 AHTML: Cache performance enhancement
* 160215 2327 wjf 176898 AHTML: Cache performance enhancement
* 160215 1638 wjf 176898 AHTML: Cache performance enhancement
* 160214 1732 wjf 176898 AHTML: Cache performance enhancement
* 160211 1615 wjf 176898 AHTML: Cache performance enhancement
* 160210 2355 wjf 176898 AHTML: Cache performance enhancement
* 160209 0945 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160203 1053 wjf 176579 Webpage Error (fixMathBug) generated
* 160202 1616 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160125 1501 bjd 174727 AHTML Chart with sort filter shows No data on lasso filter.
* 160119 1151 bjd 175758 AHTML:Cache:Omit filter doesnt retrieve exact value
* 160115 1719 wjf 175088 Visualization returns FOC295 when Filter Chart with Define
* 160112 1056 wjf 173426 Support d3 plug-ins in Active Canvas (IDis)
* 160109 1130 wjf 175079 No Grid data is displayed in "Run" window
* 151230 1221 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151214 1331 bjd 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151209 1246 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151204 0939 wjf 170103 AHTML: Webviewer/Arcachemode SET command errors/bad output
* 151201 1306 bjd 174158 Script Error Occurs When Selecting Grid Graph in Run Mode i
* 151123 1056 iys 174062 AHTML:Numeric EQ/NE filters not filtering properly
* 151123 1042 bjd 172823 AHTML click sequence on hightlight value changes sort order
* 151119 1608 iys 173630 Add setting for report display mode
* 151026 2004 wjf 169528 AHTML:Allow filter controls to support multi-fields
* 151019 1455 wjf 172862 AHTML: Add the ability to embed json from irpcfg.json
* 151008 1417 wjf 172420 Negative vertical axis is shown after after field to Matrix
* 151006 1348 wjf 168617 AHTML: support rowtotal(*) in stylesheet
* 151002 1302 bjd 169835 AHTML chart - no missing values
* 150914 1523 bjd 136022 AHTML: NFR: Export to PDF Option
* 150817 1115 wjf 170492 AHTML_Cache:Chart:Map with compute field throws script erro
* 150807 1405 wjf 170202 AHTML: Filter Prompt slider range not displayed correctly
* 150806 1831 wjf 170330 Measure filter with aggregation picks up Sort field values
* 150805 0932 wjf 170250 AHTML_Cache:Chart/Rollup/Pivot Tool calculate Distinct func
* 150723 1644 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1519 wjf 169938 Run request with multiple prompt returns 'undefined' error
* 150714 1016 wjf 169528 AHTML:Allow filter controls to support multi-fields
* 150626 1743 bjd 169143 Context Menu Errors in IE11 Using IE8/Quirks mode
* 150624 1131 wjf 167789 Allow filter controls to get data values in parallel
* 150615 1026 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150612 1414 wjf 168617 AHTML: support rowtotal(*) in stylesheet
* 150611 1558 wjf 167789 Allow filter controls to get data values in parallel
* 150603 1248 wjf 167789 Allow filter controls to get data values in parallel
* 150528 1417 bjd 165003 AHTML: Cache: Support BY TOTAL aggregations
* 150528 1411 bjd 165003 AHTML: Cache: Support BY TOTAL aggregations
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150521 1115 bjd 167472 AHTML: raw dates not in full YYMD format are incorrect
* 150519 1350 bjd 167472 AHTML: raw dates not in full YYMD format are incorrect
* 150514 0808 wjf 167336 AHTML: Display filters created from chart
* 150509 1103 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150506 2040 wjf 167336 AHTML: Display filters created from chart
* 150505 1014 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150423 1531 wjf 165307 AHTML: Allow jschart morphing.
* 150423 0915 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150417 0917 wjf 166610 AHTML: IA-2013: Filter with Range not working properly
* 150415 1025 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150414 0948 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150406 1358 wjf 165307 AHTML: Allow jschart morphing.
* 150330 1555 bjd 164004 AHTML: Bar Chart  sorting with Cache On
* 150319 1139 wjf 165307 AHTML: Allow jschart morphing.
* 150310 1235 wjf 165003 AHTML: Cache: Support BY TOTAL aggregations
* 150211 1930 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150211 1510 bjd 163778 VAL:AHTML:GridTool:sortorder subtotal not working good
* 150209 1526 bjd 162553 AHTML: IE: BORDER not respected
* 150206 0852 wjf 164182 AHTML: Allow static where condition.
* 150203 1528 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150129 1001 wjf 164052 AHTML: POPOUT not positioned after resize.
* 150116 1749 wjf 163920 AHTML: POPOUT: Show filter data for show data
* 150105 1402 wjf 163685 AHTML:  Use INT for float point comparisons
* 141205 1251 wjf 163064 AHTML: Cleanup text(info) window.
* 141204 1422 wjf 163064 AHTML: Cleanup text(info) window.
* 141204 1142 wjf 163064 AHTML: Cleanup text(info) window.
* 141203 0907 wjf 163064 AHTML: Cleanup text(info) window.
* 141125 1014 wjf 163008 AHTML: Allow Amper Variables in WHERE conditions
* 141124 1536 wjf 162992 AHTML: Use EQ when only one value in WHERE cond
* 141124 1500 wjf 162991 AHTML: Use FROM-TO Focus syntax for BETWEEN oper
* 141120 1313 bjd 162526 AHTML:expand& filter values are not working for accordion
* 141119 0901 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141119 0808 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141118 1420 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141110 1522 wjf 134795 Active Visualization
* 141110 1222 wjf 134795 Active Visualization
* 141107 1609 wjf 134795 Active Visualization
* 141107 1559 wjf 134795 Active Visualization
* 141106 1529 wjf 162629 AHTML: Add support for POPOUT menu.
* 141105 0818 wjf 134795 Active Visualization
* 141104 1549 wjf 134795 Active Visualization
* 141103 1328 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141103 1309 wjf 134795 Active Visualization
* 141031 1117 wjf 134795 Active Visualization
* 141030 1359 wjf 134795 Active Visualization
* 141030 1325 wjf 134795 Active Visualization
* 141030 1247 wjf 134795 Active Visualization
* 141028 2339 wjf 134795 Active Visualization
* 141028 1534 iys 162427 AHTML:Missing filtered stylesheet grandtotal w/filter ctrl
* 141027 1611 wjf 162402 AHTML: Support border styling from stylesheets
* 141027 1554 wjf 134795 Active Visualization
* 141023 2258 wjf 134795 Active Visualization
* 141021 1509 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141021 1316 bjd 162267 AHTML: Refactor ARPIVOT logic to remove obsolete code
* 141016 1306 bjd 158632 AHTML:Cache:NFR:Make NOPRINT fields available for DRILLDOWN
* 141006 1013 wjf 134795 Active Visualization
* 141002 1020 wjf 134795 Active Visualization
* 140924 0948 wjf 134795 Active Visualization
* 140922 1406 bjd 158523 AHTML SET NODATA missing value not displayed as filter value
* 140916 1426 wjf 134795 Active Visualization
* 140915 1629 wjf 134795 Active Visualization
* 140911 1157 wjf 134795 Active Visualization
* 140904 1559 bjd 134795 Active Visualization
* 140904 1436 wjf 134795 Active Visualization
* 140902 1232 wjf 134795 Active Visualization
* 140814 1958 wjf 134795 Active Visualization
* 140813 1346 wjf 134795 Active Visualization
* 140812 1949 wjf 134795 Active Visualization
* 140731 1314 ixm 157411 CMPD:AHTML:Multiple PIE charts are displayed for PIE
* 140729 1303 wjf 134795 Active Visualization
* 140718 1648 wjf 134538 AHTML/AFLEX:support GRAPH with ACROSS
* 140714 1604 wjf 134795 Active Visualization
* 140710 0913 wjf 134795 Active Visualization
* 140709 1503 wjf 134795 Active Visualization
* 140709 1156 wjf 134795 Active Visualization
* 140708 1625 wjf 134795 Active Visualization
* 140630 1149 wjf 134795 Active Visualization
* 140626 1312 wjf 134795 Active Visualization
* 140621 2256 wjf 159606 AHTML/FLEX Add support for Not BETWEEN to filter controls
* 140620 1745 wjf 134795 Active Visualization
* 140620 0828 wjf 134795 Active Visualization
* 140618 1613 wjf 134795 Active Visualization
* 140617 1214 wjf 134795 Active Visualization
* 140616 1109 wjf 134795 Active Visualization
* 140612 1445 wjf 134795 Active Visualization
* 140611 1443 wjf 134795 Active Visualization
* 140611 1015 wjf 134795 Active Visualization
* 140609 1156 wjf 134795 Active Visualization
* 140609 1110 wjf 134795 Active Visualization
* 140606 0952 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140601 1826 wjf 134795 Active Visualization
* 140531 1936 wjf 134795 Active Visualization
* 140530 1745 wjf 134795 Active Visualization
* 140529 2010 wjf 134795 Active Visualization
* 140529 1514 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140516 1514 wjf 134795 Active Visualization
* 140515 1319 bjd 158723 AHTML:Grid tool group by column incorrect filtering
* 140513 1808 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
/*
* Powered by WebFOCUS, Information Builders Inc.
*/
//$Revision: 1.145 $ 
//$Log: arcontrol.js,v $
//Revision 1.145  2014/06/01 22:22:59  William_Forde
//[p134795] for agg filter strip off qual.
//
//Revision 1.144  2014/05/31 22:37:30  William_Forde
//[p134795] Fixes for using pivot for LOOKGRAPH=GRID.  Add scroll bars when using pivot.  make sure pivot resizes properly.
//
//Revision 1.143  2014/05/30 21:28:13  William_Forde
//[p134795] Fix issue with more than one filter causing incorrect focus command
//
//Revision 1.142  2014/05/30 19:50:30  William_Forde
//[p134795] add support for BY TOTAL HIGHEST.  requires backed change.  For BLA charts, add formated value.
//
//Revision 1.141  2014/05/30 13:11:21  William_Forde
//[p134795] Temporary remove fix for Kevin, since it breaks maps.  Need to make a server change first.
//
//Revision 1.140  2014/05/30 00:07:30  William_Forde
//[p134795]  support sort order on numeric used as by.
//
//Revision 1.139  2014/05/29 19:03:14  William_Forde
//[p134795]  Use DB_INFILE to perform aggregation filtering.
//
//Revision 1.138  2014/05/28 16:32:59  William_Forde
//[p134795] pass aggregation type and BY to function that retrieves the list of unique values for a column.
//
//Revision 1.137  2014/05/21 12:03:11  William_Forde
//[p134795] Allow filter field not to be part of the chart/grid if we are in cache mode NOEXTRACT, since it is possible for that field be in the master, but not in the request used to popluate the filters.  Also fix the all issue in the checkbox.
//
//Revision 1.136  2014/05/16 14:55:34  William_Forde
//[p134795] allow qualified field names in filtering
//
//Revision 1.135  2014/05/13 22:03:04  William_Forde
//[p134795] Allow aggregation on measure
//
//Revision 1.134  2014/05/09 20:23:24  William_Forde
//[p134795] Fix issue with pie chart showing blank when swap is click.  Two almost simultaneous calls are being made to show the same pie.  added code to clear the timeout of the first one, if the second call comes in qucikly enough.
//
//Revision 1.133  2014/05/09 19:12:52  William_Forde
//[p134795] Add support for inline COMPUTE.
//
//Revision 1.132  2014/05/08 19:02:24  Brian_DCruz
//[p158659] Use original dataField to index into a_all_cont and a_cont arrays for correct data to visualize
//
//Revision 1.131  2014/05/07 16:22:56  Brian_DCruz
//[p157112] added comment for easier code maintenance...
//
//Revision 1.130  2014/05/07 15:31:08  Brian_DCruz
//[p158599] Original column\dataField values needed for Hide\Show columns after columns are moved
//
//Revision 1.129  2014/05/06 15:25:47  Brian_DCruz
//[p157112] Since we update column numbers when columns are moved (because of Active Visualization project) we need a way to access original column number
//
//Revision 1.128  2014/05/02 15:33:58  William_Forde
//[p134795] Allow NOPRINT with graph and buckets
//
//Revision 1.127  2014/04/30 01:19:31  William_Forde
//[p134795] Fix issue with only measure without by.  Swap long and lat.
//
//Revision 1.126  2014/04/28 22:01:16  William_Forde
//[p134795] initial support of LOOKGRAPH=GRID
//
//Revision 1.125  2014/04/22 16:56:18  William_Forde
//[p134795] If the field is a define then we should not try to redefine it.
//
//Revision 1.124  2014/04/21 22:07:15  William_Forde
//[p134795] if ALL is selected dont add to active filters
//
//Revision 1.123  2014/04/21 20:12:24  Brian_DCruz
//[p157693] Apply NE logic for NOTIN
//
//Revision 1.122  2014/04/15 17:05:56  Israel_Schulman
//[p156331] If GRID style is set to OFF, remove the outer dashboard-object border inherited from .arDashboardObject class.
//
//Revision 1.121  2014/04/14 16:56:25  William_Forde
//[p134795] If arcacheInclude is set, then we need to store the fex on the server using the WRITEINCLUDE cache call.  This fex will then be included for all cache functions done on the server.
//
//Revision 1.120  2014/04/10 14:15:41  William_Forde
//[p134795] Fix javascript error due to the fact that even if you delete an object from an array, any reference to that object will remain.
//
//Revision 1.119  2014/04/01 13:41:15  William_Forde
//[p134795] remove resize event each time chart object is reused.
//
//Revision 1.118  2014/03/26 21:57:27  Israel_Markhovsky
//[p141106] WF8:AHTML document initially has blank Chart n Library/Email
//                  set arGraphEngine from 1st component where it is non zero
//
//Revision 1.117  2014/03/26 15:08:23  William_Forde
//[p134795] Chain the filter (for demo only).  Should fix some filtering issues.
//
//Revision 1.116  2014/03/25 12:56:10  William_Forde
//[p134795] Support filterSibling and fix slider to not act like a "chain" filter unless specified.
//
//Revision 1.115  2014/03/14 19:22:13  Peter_Lenahan
//[p134795][>branch8100] Fixed JavaScript warnings from the closure compiler
//
//Revision 1.114  2014/03/13 16:04:09  William_Forde
//[p134795][>branch8100] disable call to get cache format.
//
//Revision 1.113  2014/03/13 16:01:03  William_Forde
//[p134795][>branch8100] Fix issue with chart/grid not applying filter when modified.
//
//Revision 1.112  2014/03/11 18:21:58  William_Forde
//[p134795][>branch8100] Send recordlimit to cache for rollup.
//
//Revision 1.111  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.110  2014/03/06 16:47:23  William_Forde
//[p134795][>branch8100]  Fix issue with slider causing js error.
//
//Revision 1.109  2014/03/05 20:22:55  William_Forde
//[p134795][>branch8100] Fix issue with chart not filtering when field is not used in report but is part of the "dataReport". Fix slider api not setting the default values properly.
//
//Revision 1.108  2014/02/27 15:22:07  Israel_Schulman
//[p156371][>branch8100] Parse height value as integer so that dashboard bar can be set to proper height if it has layout objects. Call drawLayoutObjects() if there are no LayoutObjects but there are ibiCompound.ibiDashLayout objects; fixes graph/report not displaying in dashboard bar.
//
//Revision 1.107  2014/02/25 16:26:06  William_Forde
//[p134795][>branch8100] Fix issue with chart being broken, when check for SUM.
//
//Revision 1.106  2014/02/25 04:08:02  William_Forde
//[p134795][>branch8100] Add new search icon. fix issue with where condition.
//
//Revision 1.105  2014/02/24 20:48:10  Israel_Schulman
//[p156263][>branch8100] pass true to showlayout refreshFilters parameter when isMergeReports in order to trigger filter controls' refresh method.
//
//Revision 1.104  2014/02/24 14:26:50  William_Forde
//[p134795][>branch8100] Fix issue with Grid not showing up properly in AV when SUM is used instead of PRINT.  Allow NE to perform NOT ... IN so that multiple values can be tested.
//
//Revision 1.103  2014/02/22 03:21:02  William_Forde
//[p153274][>branch8100] if user use the menu to select/deselect by columns, then do the same thing that we do in the edit tool and remove the b_hide flag. Also use b_hide flag instead of hide flag when getting chart values.
//
//Revision 1.102  2014/02/06 19:26:51  Israel_Markhovsky
//[p139009] AHTML Bar Chart -field FORMAT A50 - error 2 of null
//
//Revision 1.101  2014/02/05 16:52:30  William_Forde
//[p156037][>branch8100] Use the focus format to properly round decimal numbers.
//
//Revision 1.100  2014/02/03 23:51:54  William_Forde
//[p134795][>branch8100]  Auto resize charts if they are created through the api.
//
//Revision 1.99  2014/01/23 14:20:55  William_Forde
//[p134795] Generate data for the circlepack chart.
//
//Revision 1.98  2014/01/17 23:26:04  William_Forde
//[p134795] fix issue with non jschart , charts being broken.
//
//Revision 1.97  2014/01/15 20:40:08  William_Forde
//[p134795] check if report-view is chart and the chart type is CLUSTER, then create special cluster chart component.
//
//Revision 1.96  2014/01/08 21:18:17  Brian_DCruz
//[p143512] when changing column visibility for "show all", un-hide columns that were explicitly hidden by the client.  Do not un-hide all columns.
//
//Revision 1.95  2013/12/27 20:35:30  Brian_DCruz
//[p148394] CONTAIN\OMIT logic for Dates with '/' as well as case-sensitive filtering
//
//Revision 1.94  2013/12/20 16:35:19  Brian_DCruz
//[p148394] CONTAIN\OMIT to use string comparison for DATEs under covers
//
//Revision 1.93  2013/12/19 22:51:22  Brian_DCruz
//[p155334] refactor FILTER logic to avoid hardcoded numbers
//
//Revision 1.92  2013/12/19 21:02:52  William_Forde
//Use jquery ui version of the slider.
//
//Revision 1.91  2013/12/13 05:09:57  William_Forde
//[p134795] fix issue with cachefex not be set propery when datareport is used.
//
//Revision 1.90  2013/12/12 18:45:54  William_Forde
//[p134795] Fix issue in AV with non numeric fields getting SUM. appended when used in a where condition.
//
//Revision 1.89  2013/11/27 18:57:28  Israel_Markhovsky
//[p143199] AHTML: Calculate average includes missing cells
//                  corrected count calculation to be the same as in FOCUS
//
//Revision 1.88  2013/11/26 17:16:16  Brian_DCruz
//[p154642] IE8 and below handle events for IFRAME differently
//
//Revision 1.87  2013/11/22 21:16:45  Brian_DCruz
//[p154772] delay display logic for non-active IFRAME
//
//Revision 1.86  2013/11/19 16:33:31  William_Forde
//[p134795] fix mytable error, should have been "this"
//
//Revision 1.85  2013/11/19 00:58:47  William_Forde
//[p134795] Copy all cache variables to new report.
//
//Revision 1.84  2013/11/07 17:19:50  Brian_DCruz
//[p153444] since we fixed server code to send down DATEs as INTs, instead of STRINGs, we do not need to use STRING version to compare DATEs.
//
//Revision 1.83  2013/11/05 18:22:59  William_Forde
//[p134795] Make sure to reset the IBs (list of stings) if datareport is set.
//
//Revision 1.82  2013/10/31 20:03:36  Israel_Schulman
//[p153880] Use getColumnByName method when adding chart filter so that columns with aliases, display names, etc. are recognized.
//
//Revision 1.81  2013/10/30 04:08:30  William_Forde
//[p152529] When updating the report, through the api, reset the footing, heading, tableheading, tablefooting, subfoot, subtotal, subhead, and skipline structures in case they have changed.
//
//Revision 1.80  2013/10/28 15:10:11  Brian_DCruz
//[p152186] prevent crash when all *NOPRINTS* in table request
//
//Revision 1.79  2013/10/24 15:10:06  Brian_DCruz
//[p141034] remove redefinition of j for cache mode filtering
//
//Revision 1.78  2013/10/23 21:17:22  Brian_DCruz
//[p141034] fix redefinition of various variables
//
//Revision 1.77  2013/10/23 19:29:50  Brian_DCruz
//[p153444] Since inarray does strict comparison, and dates are stored as raw strings, pass in string value instead of numeric value.
//
//Revision 1.76  2013/10/08 17:05:45  Israel_Markhovsky
//[p152780] AHTML:Remove fields from rollup table throws IE error
//
//Revision 1.75  2013/10/07 22:28:30  Brian_DCruz
//[p123409] Handle [MISSING] data with filters
//
//Revision 1.74  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.73  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.72  2013/08/05 17:10:06  Israel_Schulman
//[p149960] Reset $MarkedForHighLight$ property on data rows to false when filters are cleared.
//
//Revision 1.71  2013/08/01 19:32:11  Israel_Markhovsky
//[p143199] fix for AHTML: Calculate average includes missing cells
//
//Revision 1.70  2013/08/01 15:38:20  William_Forde
//[p151491] Layout HBOX/VBOX with just divs.  Due to border on some divs, they need to be wrapped by a "clean" div, since 100% with and height doesnt include the border.
//
//Revision 1.69  2013/07/24 17:54:24  William_Forde
//[p134795] Fix issue with chart filter not working.  caused by revision 1.60
//
//Revision 1.68  2013/07/15 18:29:50  Brian_DCruz
//[p150849] For AHTMLTAB, we revert to document.write to create the placeholder div for each TABLE
//
//Revision 1.67  2013/07/02 16:13:56  Brian_DCruz
//[p150768] Use int value, instead of string representation of the int value when filtering, because inarray() does strict comparison
//
//Revision 1.66  2013/06/27 20:08:39  Israel_Schulman
//[p137859] Add 0ms setTimeout before genTables to increase consistency of loading message rendering.
//
//Revision 1.65  2013/06/24 14:52:54  William_Forde
//[p150395]  if rtl then, table_div with have 'right' property instead of 'left';
//
//Revision 1.64  2013/06/20 13:44:10  Brian_DCruz
//[p150397] permit all BYs for sorting purposes, including NOPRINT BYs
//
//Revision 1.63  2013/06/17 20:19:10  Israel_Schulman
//[p149898] Check if report has expired when menu is opened. Clear report from page if expired.
//
//Revision 1.62  2013/05/23 20:25:02  William_Forde
//[p134795] Initialize chart filter array.
//
//Revision 1.61  2013/05/23 20:00:02  Israel_Markhovsky
//Project 145866 : 1) Current page = first non blank 2) if only one non-blank page hide dahboard bar
//
//Revision 1.60  2013/05/22 15:19:56  William_Forde
//[p134795] Major changes in handling of filters.  Enable support of checking if a record has (f1 eq v1 and f2 eq v2 and f3 eq v3) or (f1 eq vv1 and f2 eq vv2 and f3 eq vv3).
//
//Revision 1.59  2013/05/06 18:44:09  Peter_Kaboolian
//[p87810] make it run faster for large number of points
//
//Revision 1.58  2013/05/06 14:28:25  William_Forde
//[p134795] Fix issue with roll/chart in cache mode not getting correct column.
//
//Revision 1.57  2013/05/01 23:08:58  William_Forde
//[p134795] make sure we use object.prototype
//
//Revision 1.56  2013/05/01 17:44:13  William_Forde
//[p134795] change the way we check for array
//
//Revision 1.55  2013/05/01 17:39:39  William_Forde
//[p134795] Need to call go to recreate internal structures.
//
//Revision 1.54  2013/04/27 14:07:28  William_Forde
//[p134795] Allow api to update existing report with new json.
//
//Revision 1.53  2013/04/24 12:12:32  William_Forde
//[p134795] Make ssure when datareport is set we also set the cachewritemode so that we know how to deal with field names for cache.
//
//Revision 1.52  2013/04/22 19:30:37  William_Forde
//[p134795] If div is passed through the api, use the width and height of the div, if available. to graw the charts.
//
//Revision 1.51  2013/04/18 20:15:16  William_Forde
//[p147534] Fix issue with rollup and export not using E0x fieldnames.
//
//Revision 1.50  2013/04/17 20:33:51  Toshifumi_Kojima
//[p148165] UC:7703->7704:IE8:LAYOUTRTL=ON:AHMTL:No horizontal scrollbar
//
//Revision 1.49  2013/04/15 21:23:32  Toshifumi_Kojima
//[p148261] UC:7703->7705:AHTML:LAYOUTRTL:Report not aligned to right
//
//Revision 1.48  2013/04/15 19:55:53  William_Forde
//[p147534] Fix where condition for cache to use E0x field.
//
//Revision 1.47  2013/04/15 15:43:35  William_Forde
//[p148406] add reset parms to gentables function to allow for update of report through the api.
//
//Revision 1.46  2013/04/11 21:16:47  Israel_Schulman
//[p137859] Always check for sumIcon to create icons, regardless of genstarted since api sets genstarted to true.
//
//Revision 1.45  2013/04/11 21:06:32  Israel_Schulman
//[p137859] Create icons if they don't exist, in genTables_delay as well as in genTables to support api and other code which may not use genTables_delay.
//
//Revision 1.44  2013/04/10 21:02:36  William_Forde
//[p147534] Use E0x fieldname when sending request to server.
//
//Revision 1.43  2013/04/04 19:37:44  Israel_Schulman
//[p148064] Ensure waitwin and icon elements are created only if they don't exist on the document yet. Call HideWait prior to method returns.
//
//Revision 1.42  2013/04/02 16:27:05  Israel_Schulman
//[p147977] Prevent waitwin show/hide during genTables if table in report is AHTMLTAB. Remove text loading message element upon completion of genTables.
//
//Revision 1.41  2013/03/27 15:43:26  William_Forde
//[p147703] use hide instead of b_hide property, since b_hide is turn on if noprint or hide is set.
//
//Revision 1.40  2013/03/26 20:42:14  Israel_Schulman
//[p137859] Added loading indicator to tdgchart's. Added a loading message to appear while page loads. Rearranged waitwin and icons creation to occur before genTables for availability during genTables_delay.
//
//Revision 1.39  2013/03/26 04:55:32  William_Forde
//[p147703] If hide=on is set on a graph's by column, dont use it for sorting.  The user is most likely using it as part of an active filter.
//
//Revision 1.38  2013/03/18 20:18:58  William_Forde
//[p147332] Make sure date value is in quotes.
//
//Revision 1.37  2013/03/18 14:52:36  William_Forde
//[p147332] If date column then use DATECVT to test value.
//
//Revision 1.36  2013/01/15 21:50:40  Brian_DCruz
//[p134135] use OROW information to sort data, instead of unconditionally sorting data in ascending order.
//
//Revision 1.35  2012/12/14 21:07:54  William_Forde
//[p144333] Fix issue with chart created with merge on not being displayed correctly.
//
//Revision 1.34  2012/11/30 13:28:00  William_Forde
//[p115026] Pass new data (cont) using a_all_cont property which IInitBody expects instead of a_cont.
//
//Revision 1.33  2012/11/20 19:56:40  Brian_DCruz
//[p140819]
//1. permit all BY fields, including NOPRINTS in y_cols, so SORT is accurate.
//2. Since NOPRINTS are in y_col, we need to avoid them in the labels.
//3. If *all* the BY fields are NOPRINTS, use the last NOPRINT BY field as the label
//4. NOTE: the NOPRINT fields are NOT formatted for output
//
//Revision 1.32  2012/11/19 18:04:36  William_Forde
//[p139495]  Use zindex to swap fullscreen and original mode because using display=none was causing charts to not get proper dimensions.
//
//Revision 1.31  2012/11/19 15:49:44  William_Forde
//[p143851] when switching tab hide the unselected container.  Make sure restore original sets window mode back to either cascade or tab.
//
//Revision 1.30  2012/11/05 21:29:58  William_Forde
//[p143182] Only disable prerendering on mobile.
//
//Revision 1.29  2012/11/05 17:47:08  William_Forde
//[p143182]  Fix bug where chart icons were being rendered, even when they were not part of the current category.  This was causing the chart type menu to not be scrollable due to background processing.  Also disabled prerendering of all the chart icons, since only ipad 3 and up is fast enough to handle this.
//
//Revision 1.28  2012/10/25 20:21:32  William_Forde
//[p143178]if show global filter is off, and there is nothing else in the dashboard bar, then dont show it.
//
//Revision 1.27  2012/10/18 20:42:24  Brian_DCruz
//[p140301] if any of the TABLE requests is AHTMLTAB, mark all the TABLEs are such.
//
//Revision 1.26  2012/09/29 20:35:39  William_Forde
//[p128912] Fix issue with filtertarget pointing at more than one report.  Fix issue with filter being applied to wrong report.
//
//Revision 1.25  2012/09/28 17:28:05  Brian_DCruz
//[p137958] Fix issue where alias is the same in more than one field and they are both blank. Also, do not check for .dis
//
//Revision 1.24  2012/09/26 15:43:34  William_Forde
//[p142140][>branch8001] fix issue cause be adding "labels" to fix charting same column by same colum.
//
//Revision 1.23  2012/09/19 18:41:05  Brian_DCruz
//[p133939]: Use FOCUS UPCASE userfunction to handle case insensitive filtering.
//
//Revision 1.22  2012/09/11 19:41:50  William_Forde
//[p141579]  Display dashboardbar area if there is any components added to the dashboardbar pagelayout.
//
//Revision 1.21  2012/09/10 16:18:33  William_Forde
//[p139529] Dont try to resize outer container if it is not standalone AR.
//
//Revision 1.20  2012/08/27 19:58:08  Brian_DCruz
//[p137958] For merged filters, maintain original logic, but instead of checking only for name, check for name, dis, alias, and field.
//
//Revision 1.19  2012/08/27 16:58:15  William_Forde
//[p96890] Fix issue with filter being reset when toggling layout.  Fix issue with chart in dashboardbar vanishing when toggling layout. Add constant for LAYOUT_DASHBOARD -3.
//
//Revision 1.18  2012/08/27 14:46:36  William_Forde
//[p96890] Allow chart/grid/pivot to be placed in dashboardbar area.
//
//Revision 1.17  2012/08/26 19:52:41  William_Forde
//[p96890] Add components to the dashboard bar area.
//
//Revision 1.16  2012/08/24 16:38:04  Brian_DCruz
//[p141034] Fix warning: parseInt missing radix parameter
//
//Revision 1.15  2012/08/24 16:14:23  Brian_DCruz
//[p139204] Fix invalid reference into acdLines to get "rows" to expand\collapse. Also refactored code for maintenance and efficiency.
//
//Revision 1.14  2012/08/21 20:13:00  Brian_DCruz
//[p137842]: IGetChartValues() if x_col is null (set by caller) then no need to CopyArray based on x_col values, simply add empty array to newcont[res.length][xpos].
//
//Existing bug, checked as far back as 7702 --we managed to avoid throwing an exception as CopyArray() avoided handling an undefined variable.
//
//Revision 1.13  2012/08/15 17:59:06  William_Forde
//[p139110][>branch8001] Add try/catch in case doc is closed while generating mini icons.
//
//Revision 1.12  2012/08/14 15:53:27  William_Forde
//[p140624][>branch8001] If arpassword is set then we need to use the decrypted arstrings instead of the saved one.
//
//Revision 1.11  2012/08/10 12:54:50  William_Forde
//[p139249]  genTables_delay may not get called when using api or html layout.
//
//Revision 1.10  2012/08/09 20:29:33  William_Forde
//[p139177] dont set default font and size if not Report style node.
// 
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arcontrol"]="$Revision: 20180302.1345 $";



if(typeof(genstarted)=="undefined") {
    var genstarted=false;
    var windowscreated = false;
    var currTableCount = 0;
    var ibiExternalHolder= false;
    var innerDivpos;
    var ibiLayoutListName = [];
    var resizeDashBar = true;
    var ibiMobileFullscreen = false;
    var gentablecalled = false;
    var chartIconsCreated = false;
    var arPassword=null;
    var arGraphEngineSet=false;
    var imageDivSet=[];
    var nodepos;
    var nodeposHigh;
}


function RefreshUrl(tnum,w)
{
    var mytable = MyTable[tnum];
    if(mytable.a_cntl.refreshUrl) {
        refreshTable = tnum;
        ServerRequest(mytable.a_cntl.refreshUrl+'&DATAONLY=YES&WH='+w+'&DUMMY='+callCount,null);
        callCount++;
    }

}

function setCurCell(tablenumber,cellid) {
    curCell.tablenumber=tablenumber;
    curCell.cellid=cellid;
}

function ServerUpdatedata(msg,t_num)
{
    var savt = NumOfTable;
    NumOfTable = t_num;
    mytable = MyTable[t_num];
    eval(msg);
    mytable.a_all_cont = T_cont[t_num];
    //mytable.n_rows = mytable.a_cntl.NumRecords;
    mytable.n_rows = T_cont[t_num].length;
    mytable.a_cntl.NumRecords = mytable.n_rows;
    mytable.IBs = ARstrings;
    mytable.redrawCharts = true;
    mytable.o_paging.c = 0;
    mytable.a_cntl.heading = T_cntl[t_num].heading;
    mytable.a_cntl.footing = T_cntl[t_num].footing;
    mytable.a_cntl.tablehead = T_cntl[t_num].tablehead;
    mytable.a_cntl.tablefoot = T_cntl[t_num].tablefoot;
    mytable.a_cntl.subfoot = T_cntl[t_num].subfoot;
    mytable.a_cntl.subhead = T_cntl[t_num].subhead;
    mytable.a_cntl.subtotal = T_cntl[t_num].subtotal;
    mytable.a_cntl.skipline = T_cntl[t_num].skipline;
    setUpHeadFoot(mytable);
    IinitBody(mytable);
    NumOfTable = savt;
}

function setUpHeadFoot(mytable)
{
    var i;
    var j;
    var jj;
    
    if(mytable.a_cntl.subhead)
        for(j=0; j < mytable.a_cntl.subhead.length; j++) {
            jj=0;
            while(typeof(mytable.a_cntl.subhead[j][jj].byvalue)!="undefined") {
                if(mytable.a_cntl.subhead[j][jj].colnum>mytable.sublevel)
                    mytable.sublevel = mytable.a_cntl.subhead[j][jj].colnum;
                jj++;
            }
        }
    if(mytable.a_cntl.skipline) 
        for(j=0; j < mytable.a_cntl.skipline.length; j++) {
            jj=0;
            while(typeof(mytable.a_cntl.skipline[j][jj].byvalue)!="undefined") {
                if(mytable.a_cntl.skipline[j][jj].colnum>mytable.sublevel)
                    mytable.sublevel = mytable.a_cntl.skipline[j][jj].colnum;
                jj++;
            }
        }

    if(mytable.a_cntl.subfoot)
        for(j=0; j < mytable.a_cntl.subfoot.length; j++) {
            jj=0;
            while(typeof(mytable.a_cntl.subfoot[j][jj].byvalue)!="undefined") {
                if(mytable.a_cntl.subfoot[j][jj].colnum>mytable.sublevel)
                    mytable.sublevel = mytable.a_cntl.subfoot[j][jj].colnum;
                jj++;
            }
        }
    if(mytable.a_cntl.subtotal)
        for(j=0; j < mytable.a_cntl.subtotal.length; j++) {
            jj=0;
            while(typeof(mytable.a_cntl.subtotal[j][jj].byvalue)!="undefined") {
                if(mytable.a_cntl.subtotal[j][jj].colnum>mytable.sublevel)
                    mytable.sublevel = mytable.a_cntl.subtotal[j][jj].colnum;
                jj++;
            }
        }

    if(mytable.a_cntl.heading)
        for(i=0;i<mytable.a_cntl.heading.length;i++)
            for(j=0;j<mytable.a_cntl.heading[i].length;j++)
                if(mytable.a_cntl.heading[i][j].colspan!='') mytable.heading_split=true;
    if(mytable.a_cntl.tablehead)
        for(i=0;i<mytable.a_cntl.tablehead.length;i++)
            for(j=0;j<mytable.a_cntl.tablehead[i].length;j++)
                if(mytable.a_cntl.tablehead[i][j].colspan!='') mytable.heading_split=true;
    if(mytable.a_cntl.footing)
        for(i=0;i<mytable.a_cntl.footing.length;i++)
            for(j=0;j<mytable.a_cntl.footing[i].length;j++)
                if(mytable.a_cntl.footing[i][j].colspan!='') mytable.footing_split=true;
    if(mytable.a_cntl.tablefoot)
        for(i=0;i<mytable.a_cntl.tablefoot.length;i++)
            for(j=0;j<mytable.a_cntl.tablefoot[i].length;j++)
                if(mytable.a_cntl.tablefoot[i][j].colspan!='') mytable.footing_split=true;

}

function ServerRequestReady()
{
    var msg,m;
    var mytable = MyTable[refreshTable];
    if(IRreq.readyState==4) {
        if(IRreq.status==200) {
            msg = IRreq.responseText;
            m=msg.split('<!--');
            msg = m[0];
            ServerUpdatedata(msg,refreshTable);
            ibiGrid.show(false,mytable);
//            IRreq.abort();
        }
    }
}

function ServerRequest(url,myfunc,async)
{
    var callback = ServerRequestReady;
    if(myfunc!=null) callback = myfunc;
    IRreq = ibiUtil.GetXmlHttpObject();
    if(IRreq!=null) {
        IRreq.open("GET",url,async);
        IRreq.onreadystatechange = callback;
        IRreq.send(null);
    }
}



function wait_func(dofunc)
{
    ibiStd.ShowWait('');
    //if(isARBrowserExtension) {
        setTimeout(function() {
            eval(dofunc);
            ibiStd.HideWait();
        }, 0);
        //} else {
        //setTimeout(dofunc+";ibiStd.HideWait();",0);
    //}
}


(function() {
    var prompts = {'win':-1,'callback':null,'callargs':null};

    if (typeof(window.ibiPrompt) !== 'undefined') {
        return;
    }
    window.ibiPrompt = {
        PromptUser:promptuser,
        Prompts: prompts,
        isReportExpired: isReportExpired
    };
    
    function isReportExpired(clearReport) {
        var ARs = ARstrings[0];
        
        if( typeof(ARs) == 'object' ) {
            if(ARs.expdate) {
                var cDate = new Date();
                var yy = cDate.getFullYear()+'';
                yy = yy.substr(2,2);
                var mm = (cDate.getMonth()+1)+'';
                if(mm.length==1) mm='0'+mm;
                var dd = cDate.getDate()+'';
                if(dd.length==1) dd='0'+dd;
                var todayDate = (yy+mm+dd)*1;
                
                if(ARs.expdate < todayDate) {
                    if(clearReport) {
                        var dReport = document.getElementById("orgdiv0");
                        var mReport = document.getElementById("iosfullscreen");
                        
                        if(dReport)
                            dReport.parentNode.removeChild(dReport);
                            
                        if(mReport)
                            mReport.parentNode.removeChild(mReport);
                    }
                    
                    alert( ibiMsgStr['expreport'] );
                    return true;
                }
            }
        }
        return false;
    }

    function promptuser(str,varname,size,tablenumber,callbackfunc,ptype,callargs)
    {
        var wind = 'promptwin';
        var title = ibiMsgStr['Prompt'];
        if(ptype==ptypePass)
            title = ibiMsgStr['passpmt'];

        if(prompts.win==-1) 
            prompts.win = getfreewin();
        var line='';
        var mytable=null;
        var tn = -1;
        if(tablenumber!=-1) {
            mytable = getMyTable(tablenumber);
            tn = mytable.a_cntl.table_number;
        }
        prompts.callback=callbackfunc; 
        prompts.callargs=callargs;
        if(prompts.win != -1) {
            var nwin = 'win'+prompts.win;
            var nnwin = 'windiv'+prompts.win;
            setwin(prompts.win,wind,tn,typepmt,title);
            var noWinControl = false;
            if(ptype==ptypePass) noWinControl = true;

            buildwin(prompts.win,title,mytable,false,null,null,noWinControl);
            line+= '<table id="PromptTable'+prompts.win+'"><tr><td>';
            {
                line += "<form name='promptform' action='javascript:nop();' onSubmit='return checkPassword();'>"+
                    "<table>"+
                    //"<tr><td colspan=2><span class='notesText'>"+ibiMsgStr['passpmt']+"<\/span><\/td><\/tr>"+
                    "<tr><td colspan=2>"+varname+"<\/td><\/tr>"+
                    "<tr><td>"+str+"<\/td>"+
                    "<td><input type=password size="+size+"  name='password'><\/td><\/tr>";

                line+= "<tr><td colspan=2 align=RIGHT><table><tr><td style=\"white-space:nowrap;cursor:pointer\" onclick=\"checkPassword()\">"+
                    "<div width=\"100%\" class=\"arPromptButton\">&nbsp;"+
                        ibiMsgStr['ok']+"&nbsp;<\/div><\/td><\/tr><\/table><\/td><\/tr>";
            }
            line+=    '<\/table><\/form><\/td><\/tr><\/table>';
            pwn[prompts.win].dobj_b.innerHTML = line;
            maxwin(prompts.win);
            if(ptype==ptypeNote) d.promptform.note.focus();
        }
    }
})();



function getPassword(msg)
{
    ibiPrompt.PromptUser('<span class="notesText">'+ibiMsgStr['password']+'<\/span>',msg,32,-1,checkPassword,ptypePass);
}

function checkPassword()
{
    var arPassword = d.promptform.password.value;
    var a,b,dedata;

    dedata = unescape(AREstrings[0][0]);
    b=ibiAES.AESDecrypt(dedata, arPassword, 256);
    a=b.substr(0,AREstrings[0][1]);

    if(a.substr(0,9)!="ARstrings") {
        getPassword('<span class="notesText">'+ibiMsgStr['passwrong']+'<\/span>');
    } else {
        closewin(ibiPrompt.Prompts.win);
        ibiPrompt.Prompts.win = -1;

        for(var i=1; i< AREstrings.length; i++) {
            dedata = unescape(AREstrings[i][0]);
            b=ibiAES.AESDecrypt(dedata, arPassword, 256);
            a+=b.substr(0,AREstrings[i][1]);
        }
        eval(a);
        setTimeout("genTables(false);",0);
    }
}


var genTableisDelayed = false;
function genTables_onResize()
{
    if ('addEventListener' in window) {
        window.removeEventListener("resize", genTables_onResize, false);
    } else {
        window.detachEvent("onresize", genTables_onResize);
    }
    genTables_delayContinue();
}

function genTables_delayContinue()
{
    if(isARBrowserExtension && window.opener) {
		genTables_delay_2();
	}
    
    if(document.readyState == 'complete') {
        window.setTimeout(function(){genTables();},0);
    } else {
        if(!genTableisDelayed) {
            if('addEventListener' in window)
                window.addEventListener("load",genTables_delay_2,false);
            else
                window.attachEvent('onload',genTables_delay_2);
             genTableisDelayed  = true;
        }
    }
}

function genTables_delay()
{
    var i;
    var isAHTMTable = ( T_cntl.length ) ? T_cntl[0].isAHTMTable : null;
    var waitwin = document.getElementById("waitwin");
    var sumIcon = document.getElementById("sumIcon");
    var bodyRef = document.getElementsByTagName("body")[0];
    
    if(!genstarted) {
        var divNode = document.createElement('div');
        
        if(!waitwin) {
            divNode.setAttribute('id','waitwin');
            if(b_ie) divNode.style.setAttribute('cssText', 'visibility:hidden;z-index:1000;position:absolute;top:0;left:0;', 0);
            else divNode.setAttribute('style','visibility:hidden;z-index:1000;position:absolute;top:0;left:0;');
            divNode.innerHTML = ibiMsgStr['psmsg'];
            bodyRef.appendChild(divNode);    
        }
        
        if(!sumIcon) {
            for (i in ibiSkin.icons) {
                divNode = document.createElement('div');
                if(b_ie) divNode.style.setAttribute('cssText', 'visibility:hidden;display:none;', 0);
                else divNode.setAttribute('style','visibility:hidden;display:none;');
                divNode.setAttribute('id',ibiSkin.icons[i].id);
                bodyRef.appendChild(divNode);
            }
        }
    }
    
    if(typeof(ibiSkin.sumicon)=='undefined') {
        ibi_add_images();
        ibiSkin.seticons();
    }
    
    if(!isAHTMTable)
        ibiStd.ShowWait();
    //if(document.readyState == 'complete') {
    //    window.setTimeout(function(){genTables();},0);
    //} else 
    {
        // Put place holder that we will fill in later.
        var id = 'ibiDivHolder'+currTableCount;        
        if (isAHTMTable) {
            // create div place holder after script portion of HTML page
            var divNodeStr = '<div class="activeReport" id="'+id+'" ><\/div>';
            document.write(divNodeStr);
        } else {
            var arc = document.createElement("div");
            arc.setAttribute("class", "activeReport");
            arc.setAttribute("id", id);
            if(bodyRef)
                bodyRef.appendChild(arc);
        }
        
        if(T_cntl.length>currTableCount) {
            for (i = currTableCount; i < T_cntl.length; i++) {
                T_cntl[i].ARstrings = CopyArray(ARstrings);
                if(T_cntl[i].isAHTMTable) {
                    ibiExternalHolder = true;
                }
                T_cntl[i].useDivHolderID = id;
            }
        }
        currTableCount = T_cntl.length;
    }
    if ((document.body.clientWidth === 0) && 
        (!b_ie || (b_ie_version > 8)) ) { // possibly IFRAME in non-active tab
        if ('addEventListener' in window) {
            window.addEventListener("resize", genTables_onResize, false);
        } else {
            window.attachEvent("onresize", genTables_onResize);
        }
    } else { 
        genTables_delayContinue();
    }
}

function genTables_delay_2() 
{
    setTimeout(genTables, 0);
}


var genIconTO=null;
function genChartIcons(force,whichcat)
{
    if(chartIconsCreated) return;
    if(typeof(tdginfo)=="undefined") return;
    var bodyRef = document.getElementsByTagName('body')[0];
    var catlist;
    var wc = 0;
    var wconly = false;
    if(typeof(whichcat)!="undefined") {
        wc = whichcat;
        wconly = true;
    }

    if(arGraphEngine == arGraphEngineJSCHART) catlist = tdginfo.category;
    else return;
    
    /* If running under Mobile Favs dont prerender icons */
    if(b_mobile && !force) {
    //if(b_uiView && !force) {
        genChartIconsMiniAvailable = false;
        return;
    }

    var tdgScript = null;
    var jschartScript = null;
	var jsonProps = null;
	var graphProps = null;
	var graphFinalProps = null;
    if(typeof(MyTable[0])!="undefined") {
        tdgScript = MyTable[0].a_cntl.tdgScript;
		jsonProps = MyTable[0].a_cntl.jsonProps;
		graphProps = MyTable[0].a_cntl.graphProps;
		graphFinalProps = MyTable[0].a_cntl.graphFinalProps
        //jschartScript = MyTable[0].a_cntl.jschartScript;
    }
    if('addEventListener' in window)
        window.addEventListener("unload",cancelgenIcons,false);
    else
        window.attachEvent("onunload",cancelgenIcons);
	genIconTO=window.setTimeout(function(){genChartIconsMini(bodyRef,tdgScript,jschartScript,catlist,wc,0,wconly,jsonProps,graphProps,graphFinalProps);},10);
    chartIconsCreated = true;
}

function cancelgenIcons()
{  
    try {
        if(genIconTO) window.clearTimeout(genIconTO);
        genIconTO = null;    
    } catch(e) {
        genIconTO = null;
    }
}

var genChartIconsMiniAvailable = true;

function genChartIconsMini(bodyRef,tdgScript,jschartScript,catlist,i,j,wconly,jsonProps,graphProps,graphFinalProps)
{
    var obj;
    try {
        var k, clist;
        var needToWait = false;
        
        if(catlist[i].chartList[j].showInTool) {
            divNode = d.createElement('div');
            if(b_ie) divNode.style.setAttribute('cssText', 'visibility:hidden;display:none;', 0);
            else divNode.setAttribute('style','visibility:hidden;display:none;');
            divNode.setAttribute('id','charticon_'+i+'_'+j);
            bodyRef.appendChild(divNode);

            clist = catlist[i].chartList[j];
            var size = tdginfo.chartIconsSize;
            var x = clist.sampleData.x;
            var y = clist.sampleData.y;
            var parms = {'tcapt':[]};
            for (k = 0; k < (x.length+y.length); k++) { parms.tcapt[k]={}; }
            var chartType = clist.name;
            var title = catlist[i].chartList[j].label;
            var dp = clist.sampleData.data;
            var delay = 0;

            if(!genChartIconsMiniAvailable) {
                if((typeof(clist.showWhenLoad)!="undefined") &&
                    (clist.showWhenLoad.length > 0)) {
                    var divNode1 = document.getElementById(clist.showWhenLoad[0]);
                    if(divNode1) divNode = divNode1;
                }
            }
            if(clist.sampleImg == null)  {
				ibiTDGCharts.drawChart(parms,chartType,divNode,size,dp,x,y,x,null,title,tdgScript,jschartScript,tdginfo.chartIconsProps,true,false,false,
					undefined,undefined,undefined,undefined,jsonProps,graphProps,graphFinalProps);
                //if(genChartIconsMiniAvailable)
                clist.sampleImg = divNode.innerHTML;
                needToWait = (clist.sampleImg == "");
                delay = 10;
            }
            if(clist.sampleImg != null)
                  if((clist.sampleImg.toUpperCase().indexOf("<EMBED")>-1) ||
                (clist.sampleImg.toUpperCase().indexOf("<OBJECT")>-1))  {
                cancelgenIcons();
                clist.sampleImg = null;
                genChartIconsMiniAvailable = false;
                return;
            }
            if(genChartIconsMiniAvailable)divNode.style.display = 'none';
            if(clist.showWhenLoad) {
                if(genChartIconsMiniAvailable)
                for (k = 0; k < clist.showWhenLoad.length; k++) {
                    obj = document.getElementById(clist.showWhenLoad[k]);
                    if(obj) obj.innerHTML = clist.sampleImg;
                }
                delete clist.showWhenLoad;
            }
        }
        var jj = j+1;
        var ii = i;
        if(jj >= catlist[i].chartList.length) {
            ii = i+1;
            jj = 0;
            if(wconly) return;
        }
        if ((ii < catlist.length) && (genIconTO != null)) {
            if (needToWait) {
                parms.chart.registerEvent(function () {
                    if (clist) {
                        clist.sampleImg = divNode.innerHTML;
                    }
                    genChartIconsMini(bodyRef,tdgScript,jschartScript,catlist,ii,jj,wconly,jsonProps,graphProps,graphFinalProps);
                }, 'renderComplete');
            } else {
                genIconTO = window.setTimeout(function () { genChartIconsMini(bodyRef, tdgScript, jschartScript, catlist, ii, jj, wconly, jsonProps, graphProps, graphFinalProps); }, delay);
            }
        }
    } catch(e)
    {
        cancelgenIcons();
    }
}



function getDataFieldByName(capt,cols,name)
{
    for(var i=0; i < capt.length; i++)
        if(cols[i].qualname)
            if(cols[i].qualname == name) return capt[i].dataField;
    for(var i=0; i < capt.length; i++)
        if(cols[i].field == name) return capt[i].dataField;
    return -1;
}

function getReportByName(report_name) 
{
	for(var i = 0; i < MyTable.length; i++) {
		if(MyTable[i].deleted)
			continue;
        if(MyTable[i].a_cntl.table_name == report_name) return i;
	}
    return -1;
}

function genTables(dontshow,useMdiv,reset,resetStart,resetEnd,autoSize)
{
    var start=MyTable.length;
    var m_end=T_capt.length;
    var outdata,inlen,outlen;
    var s_ = '',ln,isv,isb,ss_=[]; 
    var mytable,SARs,dedata;
    var alertMsg='';
    var usediv=null;
    var cl = 0, i;
    var sizeToGrid;
	var pageColor = "white";
    var bodyRef = document.getElementsByTagName('body')[0];
    var isAHTMTable = ( T_cntl.length ) ? T_cntl[0].isAHTMTable : null;
    var lar = document.getElementById("loadingARMsg");
    var sumIcon = document.getElementById("sumIcon");
    var outerDivOrg = null, divOrg = null;
    
    if(reset) {
        start = resetStart;
        m_end = resetEnd+1;
    }
    
    if(start>=T_cntl.length) {
        ibiStd.HideWait();
        return; //ie may call gentables when no table needs to be processed
    }

    if(LayoutSection.length)
        ibiCompound.isCompoundReport = true;

    //check to see if any global properties are being set
    for(i = 0; i < T_cntl.length; i++) {
        var js2;
        if(typeof ibiStd.globalProps == "undefined")
            ibiStd.globalProps = {};
        if(typeof ibiStd.componentProps == "undefined")
            ibiStd.componentProps = {};
        if(typeof ibiStd.compoundProps == "undefined")
            ibiStd.compoundProps = {};
        if(typeof T_cntl[i].tableProps != "undefined") {
            var js2;
            for(j=0; j < T_cntl[i].tableProps.length;j++) {
                try {
                    js2 = eval('({' + T_cntl[i].tableProps[i].json + '})');
                    if(js2.global)
                        ibiStd.globalProps = ibiStd.mergeObject(ibiStd.globalProps,js2.global);
                    if(js2.component)
                        ibiStd.componentProps = ibiStd.mergeObject(ibiStd.componentProps,js2.component);
                    if(js2.compound)
                        ibiStd.compoundProps = ibiStd.mergeObject(ibiStd.compoundProps,js2.compound);
                } catch (e) {

                }
            }
        }
        if((ibiStd.globalProps.unifiedFilter) && (!ibiFilterTool.ctrlFSet))
            addCtrlF();
            
        if(ibiStd.globalProps.arDisplayMode) {
            arDisplayMode = ibiStd.globalProps.arDisplayMode;
        }

        if(ibiStd.globalProps.arAdaptiveOrientation) {
            arAdaptiveOrientation = ibiStd.globalProps.arAdaptiveOrientation;
        }
    }
    if(b_mobile) {
        if(document.title=="WebFOCUS Active Report")
            document.title = ibiMsgStr["mobiletitle"];
    }
    
    if(!sumIcon) {
        for (i in ibiSkin.icons) {
            divNode = document.createElement('div');
            if(b_ie) divNode.style.setAttribute('cssText', 'visibility:hidden;display:none;', 0);
            else divNode.setAttribute('style','visibility:hidden;display:none;');
            divNode.setAttribute('id',ibiSkin.icons[i].id);
            bodyRef.appendChild(divNode);
        }
    }

    if(!genstarted) {
        initvars();
        ar_js_init(usediv);
            if(ibiSkin.ImgGlobalStyle)ibiSkin.GenStyles(true);
        //genChartIcons();
        genstarted=true;
    }

    sizeToGrid = false;
    for (i = 0, numItems = LayoutObjects.length; i < numItems; i++) {
        if (LayoutObjects[i].layout == arConstants.LAYOUT_DASHBOARDBAR)
            ibiCompound.haveDashBoardObjects = true;
        if((LayoutObjects[i].type == 'boxContainer') &&
            (LayoutObjects[i].percentWidth == 100) &&
            (LayoutObjects[i].percentHeight == 100)) {
            ibiCompound.boxLayoutFullsceen = true;
            sizeToGrid = true;
        }
    }

    if(!ibiCompound.layoutIsOn) ibiCompound.currentLayout=1;    
        
    ibiSkin.GenStyles(false);

    if(typeof(ibiSkin.sumicon)=='undefined') {
        ibi_add_images();
        ibiSkin.seticons();
    }
    var firstLayout = -1;
    if (LayoutSection.length) {
        for (i = 1; i < LayoutSection.length; i++) {
            if((firstLayout == -1) && (typeof(LayoutSection[i])=="object")){ firstLayout = i; break; }
        }
    }

    if(!gentablecalled) {
        for (i = start; i < m_end; i++) {
            if (i == 0) { // p152186 stopgap to prevent crash when all NOPRINTS in TABLE request
            // if(T_cntl[i].isMergeReports) isMergeReports=true;
                if ((T_cntl[i].isMergeReports) && (T_cntl[i].a_cols.length > 0)) { 
                    isMergeReports=true; 
                }
            }
            if(typeof T_cntl[i].table_name != "undefined")
                if(T_cntl[i].table_name.indexOf("dummyReportName")==0)
                    T_cntl[i].table_div.hidden = true;
            if(typeof(T_cntl[i].table_div.layout)!='undefined') {
                ln = T_cntl[i].table_div.layout;
                if(ln==-1) ln = 0;
                if(ln!=arConstants.LAYOUT_DASHBOARDBAR) {
                    if(typeof(ibiCompound.ibiLayout[ln])=='undefined') ibiCompound.ibiLayout[ln]=[];
                    ibiCompound.ibiLayout[ln][ibiCompound.ibiLayout[ln].length] = i;
                } else {
                    ibiCompound.haveDashBoardObjects = true;
                    if(typeof(ibiCompound.ibiDashLayout)=='undefined') ibiCompound.ibiDashLayout=[];
                    ibiCompound.ibiDashLayout[ibiCompound.ibiDashLayout.length] = i;
                }
            }

        }
        if((ibiCompound.ibiLayout.length>2)|| isMergeReports || ibiCompound.haveDashBoardObjects) {
            ibiCompound.layoutIsOn=true; 
            if((ibiCompound.ibiLayout.length>2) && !isMergeReports && !ibiCompound.haveDashBoardObjects){
                var fudgedPgCnt=0;
                var ibiCompoundLayout=ibiCompound.ibiLayout;
                var ibiCompoundLayoutLen=ibiCompoundLayout.length;
                for(var ix=1; ix < ibiCompoundLayoutLen; ix++){
                    if(typeof(ibiCompoundLayout[ix])!="undefined"){
                        if(fudgedPgCnt==0) firstLayout=ix;
                        fudgedPgCnt++;
                    }
                }
                if(fudgedPgCnt<2) ibiCompound.layoutIsOn=false;
            }
        }
        cl = ibiLayoutListName.length;
        ibiLayoutListName[cl] = {'orgdiv':'orgdiv'+start,
                    'orgdivouter':'orgdivouter'+start,
                    'orgdivouterComp':null,
                    'IBILAYOUTDIV':'IBILAYOUTDIV'+start,
                    'GLOBALFILTERDIV':'GLOBALFILTER'+start,
                    'orgdivtable':'orgdivtable'+start,
                    'orgdivFromUser':false,
                    'orgdivinner':'orgdivinner'+start};

        var offset = 0, ov;
        //if(ibiCompound.layoutIsOn) offset=44;
        if((typeof(useMdiv)!='string')||(ibiCompound.layoutIsOn)) {
            for (i = start; i < m_end; i++) {
                isv = 'visible';
                isb = 'block';
                if((ibiCompound.layoutIsOn)&&(T_cntl[i].table_div.layout!=-1)&&
                    (T_cntl[i].table_div.layout!=ibiCompound.currentLayout)) {
                    //isv='hidden';
                    isb='none';  /* cant set to "none" else charts dont render */
                }
                var id = 'MAINTABLE_'+i;
                if(T_cntl[i].pagecolor) pageColor = T_cntl[i].pagecolor;
                if (typeof(T_cntl[i].useDivHolderID)!="undefined") {
                    if (T_cntl[i].isAHTMTable) {
                        id = T_cntl[i].useDivHolderID;
                    } else {
                        for (var nxt = i + 1; nxt < T_capt.length; ++nxt) {
                            if (T_cntl[nxt].isAHTMTable && (typeof(T_cntl[nxt].useDivHolderID)!="undefined")) {
                                T_cntl[i].isAHTMTable = true;
                                id = T_cntl[i].useDivHolderID;
                                break;
                            }
                        }
                    }
                } 
                if(d.getElementById(id)==null) {
                    var opac = '';
                    if(typeof(T_cntl[i].table_div.alpha)!="undefined") opac = "opacity:"+(T_cntl[i].table_div.alpha/100)+";filter:alpha(opacity="+T_cntl[i].table_div.alpha+");";
                    if(T_cntl[i].table_div.hidden) {
                        ss_[ss_.length] = "";
                    } else 
                    if(T_cntl[i].table_div.position=='absolute') {
                        ss_[ss_.length]='<div class="arDashboardObject" id="MAINTABLE_'+i+'" style="'+opac+'position:absolute;top:'+(T_cntl[i].table_div.top+offset)+'px'+
                        (document.dir=='rtl'?';right:'+T_cntl[i].table_div.right+'px;':';left:'+T_cntl[i].table_div.left+'px;')+
                        ((T_cntl[i].table_div.width>0)?'width:'+T_cntl[i].table_div.width+'px;':'')+
                        ((T_cntl[i].table_div.percentWidth>0)?'width:'+T_cntl[i].table_div.percentWidth+'%;':'')+
                        ((T_cntl[i].table_div.height>0)?'height:'+T_cntl[i].table_div.height+'px;':'')+
                        ((T_cntl[i].table_div.percentHeight>0)?'height:'+T_cntl[i].table_div.percentHeight+'%;':'')+
                        ';visibility:'+isv+';display:'+isb+';'+
                        ((T_look[i].params[2] == 0) ? 'border:0;' : '') +
                        (((T_cntl[i].table_div.viewPortType=='DIMENSION') || (T_cntl[i].forDataDisplay))?'overflow:auto;':'overflow:visible;')+'"><\/div>';
                    } else if(T_cntl[i].table_div.position=='relative')
                        ss_[ss_.length]='<div id="MAINTABLE_'+i+'" style="position:relative;'+opac+'"><\/div>';
                    else
                        ss_[ss_.length]='<div id="MAINTABLE_'+i+'" style="z-index:100;'+opac+'"><\/div>\n';
                } 
            } 
        } else {
            if(T_cntl[start].table_div.hidden) 
                ss_[ss_.length]="";
            else
                ss_[ss_.length]='<div id="MAINTABLE_'+start+'"><\/div>\n';
        }
        s_= ss_.join('');

        if(!useMdiv) {
            //var holder = '<div id="'+ibiLayoutListName[cl].orgdiv+'" class="activeReport" style="';
            ov = 'hidden';
            if(LayoutSection.length==0) ov="visible";
            var sss = 'overflow:'+ov+';top:0px;left:0px;z-index:50;'+(document.dir=='rtl'?'':'position:absolute;')+'background-color:white;';
            sss += 'width:0px;height:0px;';
            if(ibiExternalHolder) sss += 'display:none;';
            //holder += sss;
            //holder += '"><\/div>';
            //d.write(holder);
            divNode = d.createElement('div');
            if(b_ie) divNode.style.setAttribute('cssText', sss, 0);
            else divNode.setAttribute('style',sss);
            divNode.setAttribute('id',ibiLayoutListName[cl].orgdiv);
            divNode.setAttribute(ibiclassName,"activeReport");
            var refNode = document.getElementById("ibiDivHolder0");
            
            if(refNode)
                refNode.parentNode.insertBefore(divNode,refNode);
            else
                bodyRef.appendChild(divNode);
        } else {
            var holder = '<div id="'+ibiLayoutListName[cl].orgdiv+'" class="activeReport" style="';
            if(b_ie) holder += 'width:0px;height:0px;top:0px;left:0px;">';
            else holder+= 'width:0px;height:0px;top:0;left:0;">';
            holder += '<\/div>';
            if(!reset) {
                if(typeof(useMdiv) == 'string') document.getElementById(useMdiv).innerHTML=holder;
                else useMdiv.innerHTML = holder;
            }
        }

        //if(useMdiv) {
            //if(typeof(useMdiv) =='string') ibiLayoutListName[cl].orgdiv=useMdiv;
            //else ibiLayoutListName[cl].orgdiv=useMdiv.id;
            //ibiLayoutListName[cl].orgdivFromUser = true;
        //}
        var orgdiv = document.getElementById(ibiLayoutListName[cl].orgdiv);
        var w;
        var h;
        if('innerWidth' in window) w = window.innerWidth;
        else w = document.documentElement.clientWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.clientHeight;
        var b = orgdiv.parentNode;

        if(b.tagName != 'BODY') {
            w = 0;
            h = 0;
            if((typeof(b.style.width) !="undefined")
                &&(b.style.width!='')) { w = parseInt(b.style.width, 10); }
            if(w==0) w = b.offsetWidth;
            if((typeof(b.style.height) !="undefined")
                &&(b.style.height!='')) { h = parseInt(b.style.height, 10); }
            if(h==0) h = b.offsetHeight;
            if(b.tagName!='DIV') sizeToGrid = true;
            if((w==0)||(h==0)) sizeToGrid = true;
            if(sizeToGrid) {
                w=300;
                h=300;
            }
        } else { //if opening fron a file on IE, clientWidth/Height may not be set.
            if(w==0) w = b.offsetWidth;
            if(h==0) h = b.offsetHeight;
            if(!b_mobile) sizeToGrid = true;
        }
        
        orgdiv.style.height = h+'px';
        orgdiv.style.width = w+'px';

        ov = 'hidden';
        var ov2 = 'auto';
        if(LayoutSection.length==0) {
            ov="visible";
            ov2 = 'visible';
        }
        var lb ='';

        if(LayoutSection.length) 
            if(LayoutSection[firstLayout].backcolor!=null) 
                    lb = 'background-color:'+LayoutSection[firstLayout].backcolor+';';
        holder = '<div style="position:relative;padding:0;margin:0;width:'+w+'px;overflow:'+ov+';" id="'+ibiLayoutListName[cl].orgdivtable+'" border="0" padding="0" margin="0">'+
            '<div id="'+ibiLayoutListName[cl].IBILAYOUTDIV+'" style="width:'+w+'px;overflow:hidden;" class="arDashboardBar">'+
            '<table width="100%">'+
            '<tr><td><div id="'+ibiLayoutListName[cl].IBILAYOUTDIV+'OBJS" style="overflow:visible;position:relative;"><\/div><\/td><\/tr>'+
            '<tr><td><div id="'+ibiLayoutListName[cl].IBILAYOUTDIV+'TABS" style="width:'+w+'px;overflow:hidden;"><\/div><\/td><\/tr>'+
            '<\/table>'+
            '<\/div>'+
            //'<div id="'+ibiLayoutListName[cl].GLOBALFILTERDIV+'" style="display:none;position:absolute;top:20px;left:0px;width:'+w+'px;overflow:hidden;min-height:20;" class="globaldashbar"><\/div>'+
            '<div style="'+lb+'position:relative;width:'+w+'px;height:'+h+'px;overflow:'+ov2+';" id="'+ibiLayoutListName[cl].orgdivouter+'">'+
                '<div style="'+(document.dir=='rtl'?'':'position:absolute;')+'top:0px;left:0px;" id="'+ibiLayoutListName[cl].orgdivinner+'">'+
                    '<div id="'+ibiLayoutListName[cl].IBILAYOUTDIV+'FILTERS" style="display:none;position:absolute;top:0px;left:0px;width:200px;height:100%;overflow:auto;z-index:999;" class="arDashboardBar">'+
                    '<\/div>'+
                    '<div id="allLayoutObjects" style="position:relative"><\/div>'+
                '<\/div>'+
            '<\/div>'+

                        //Remove "+" till feature is fully spec.
            //'<div onclick="ibiFilter.toogleFilterHolder()" id="'+ibiLayoutListName[cl].IBILAYOUTDIV+'FILTERSCONTROL" style="display:none;cursor:pointer;position:absolute;top:0px;left:0px;width:20px;height:20px;overflow:hidden;">'+
            //'+<\/div>'+
            '<\/div>';
        if(!reset)
            orgdiv.innerHTML= holder;
        if(!windowscreated) {
            var bodyRef1 = d.getElementsByTagName('body')[0];
            //if((typeof(useMdiv)!="undefined") && (useMdiv !=null)) {
            //    if(typeof(useMdiv) == "string") bodyRef = d.getElementById(useMdiv);
            //    else bodyRef = useMdiv;
            //} else
            if((b.tagName == 'BODY') && ((typeof(useMdiv)=="undefined") || (useMdiv ==null)))
                bodyRef1 = document.getElementById(ibiLayoutListName[cl].orgdivinner);
            for (i = 0; i < maxwindows; i++) {
                divNode = d.createElement('div');
                if(b_ie) divNode.style.setAttribute('cssText', 'z-index:100;position:absolute;top:0;left:0;', 0);
                else divNode.setAttribute('style','z-index:100;position:absolute;top:0;left:0;');
                divNode.setAttribute('id','win'+i);
                if(ibiExternalHolder) bodyRef.appendChild(divNode);
                else bodyRef1.appendChild(divNode);
            }
            windowscreated = true;
        }
        var docDiv = document.getElementById(ibiLayoutListName[cl].orgdivinner);
        if(s_!='') {
            var ss = docDiv.innerHTML + s_;
            if(!reset)
                docDiv.innerHTML = ss;
        }
        var docDiv2 = document.getElementById(ibiLayoutListName[cl].orgdivtable);
        if(docDiv2) {
            var dobjo = document.getElementById(ibiLayoutListName[cl].orgdivouter);
            var dobj = document.getElementById(ibiLayoutListName[cl].orgdiv);
            var dobja = document.getElementById(ibiLayoutListName[cl].IBILAYOUTDIV);
            if(ibiCompound.layoutIsOn) {
                outerDivOrg = dobjo;
                divOrg = dobj;
                //docDiv2.children[0].rows[0].style.display = 'display';
                dobjo.style.height = (parseInt(dobj.style.height, 10) - parseInt(dobja.offsetHeight, 10))+'px';
            } else {
                //docDiv2.children[0].rows[0].style.display = 'none';
                dobja.style.display = "none";
                dobjo.style.height = parseInt(dobj.style.height, 10)+'px';
            }
        }

        if(!useMdiv) {
            if('addEventListener' in window)
                window.addEventListener("resize",resizeInnerDiv,false);
            else
                window.attachEvent("onresize",resizeInnerDiv);
        }

        if((!sizeToGrid)&&(!useMdiv)) {
            innerDivpos={x:0,y:0,Mx:-1,My:-1,M1x:-1,M1y:-1,obj:null,scaling:false,moving:false,scale:1.0,scaleSave:1.0};
            resizeInnerDiv(null);

            if('ontouchstart' in document) {
                var obj = document.getElementById(ibiLayoutListName[cl].orgdiv);
                if(b_mobile) {
                    ibi_iPadMenu.isTouchApp();
                    obj.addEventListener('touchmove',moveInnerDiv,false);
                    //obj.addEventListener('touchmove',function(e,cl){moveInnerDiv(e,cl)});
                    obj.addEventListener('touchend',stopInnerDiv,false);
                    document.addEventListener("resize",resizeInnerDiv,false);
                    window.addEventListener("scroll",resizeInnerDiv,false);
                    window.addEventListener("orientationchange",resizeInnerDiv,false);
                }
            }
        }
    }
    gentablecalled = true;
    if((typeof(AREstrings)!='undefined') && (arPassword==null) && (ARstrings.length==0)){
        getPassword('');
        ibiStd.HideWait();
        return;
    }
    gentablecalled = false;
    
    if( ibiPrompt.isReportExpired(true) ) {
        ibiStd.HideWait();
        if(lar) 
            lar.parentNode.removeChild(lar);
        return;
    }
    
    isCompoundCall=true;

    for (i = start; i < m_end; i++) {
        T_cntl[i].table_number=i;
        if(T_cont[i].length) hasdata++;
        SARs = null;
        var mDiv = useMdiv;
        if(ibiCompound.layoutIsOn) mDiv = null;
        // we ma not have called gentables_delay, if we are being called from htmllaout.
        var ARs = ((typeof(T_cntl[i].ARstrings)=="undefined")||(typeof(AREstrings)!='undefined'))?ARstrings:T_cntl[i].ARstrings;
        if(T_saveARs.length) if(T_saveARs[i]) SARs = T_saveARs[i];
        var useRoll = false;
        if(T_cntl[i].dataReport && T_cntl[i].verbs && ((typeof(T_cntl[i].reportView)=="undefined") || (T_cntl[i].reportView == REPORTGRID) ))
            if(T_cntl[i].verbs[0].type=="SUM") {
                useRoll = true;
                T_cntl[i].reportView = REPORTROLL;
            }
         MyTable[i]=new TTable(T_capt[i],T_cont[i],T_look[i],T_cntl[i],t_T_capt[i],false,ARs,a_T_cont[i],b_T_cont[i],SARs,mDiv,(reset?i:-1));
        MyTable[i].useLayout = cl;
        MyTable[i].sizeToGrid = sizeToGrid;
        MyTable[i].useRoll = useRoll;
        if(autoSize) {
            if(typeof(useMdiv)=="string")
                MyTable[i].resizeContainer = document.getElementById(useMdiv);
            else
                MyTable[i].resizeContainer = useMdiv;
            MyTable[i].a_cntl.autoFit = arConstants.AUTOFIT_CONTAINER;
        }
        if(MyTable[i].a_cntl.alertMsg) alertMsg +=MyTable[i].a_cntl.alertMsg+'\n';
        //displayReportView(MyTable[i],true);
    }

    for (i = start; i < m_end; i++) {
        if(MyTable[i].a_cntl.dataReport) {
            var dataReportIndex = getReportByName(MyTable[i].a_cntl.dataReport);
            if(dataReportIndex != -1) {
                if(MyTable[i].useRoll)
                    MyTable[i].parent_table = dataReportIndex;
                MyTable[i].n_rows =  MyTable[dataReportIndex].n_rows;
                MyTable[i].a_cntl.NumRecords =  MyTable[dataReportIndex].a_cntl.NumRecords;
                MyTable[i].a_all_cont = MyTable[dataReportIndex].a_all_cont;
                MyTable[i].IBs =  MyTable[dataReportIndex].IBs;
                IinitBody(MyTable[i]);
                if(MyTable[dataReportIndex].a_cntl.cacheMode) {
                    MyTable[i].a_cntl.cacheMode = MyTable[dataReportIndex].a_cntl.cacheMode;
                    MyTable[i].a_cntl.cacheWriteMode = MyTable[dataReportIndex].a_cntl.cacheWriteMode;
                    MyTable[i].a_cntl.cacheFex = MyTable[dataReportIndex].a_cntl.cacheFex;
                    MyTable[i].cacheFile  = MyTable[dataReportIndex].a_cntl.cacheFex;
                    MyTable[i].a_cntl.cacheOriginalMaster = MyTable[dataReportIndex].a_cntl.cacheOriginalMaster;
                    MyTable[i].a_cntl.cacheFormat = MyTable[dataReportIndex].a_cntl.cacheFormat;
                    MyTable[i].a_cntl.cacheString = MyTable[dataReportIndex].a_cntl.cacheString;
                    MyTable[i].a_cntl.arcacheInclude = MyTable[dataReportIndex].a_cntl.arcacheInclude;
                } 
                for(var j=0; j < MyTable[i].a_capt.length; j++) {
                    MyTable[i].a_capt[j].dataField = 
                        getDataFieldByName(MyTable[dataReportIndex].a_capt,
                            MyTable[dataReportIndex].a_cntl.a_cols,
                            (MyTable[i].a_cntl.a_cols[j].qualname)?MyTable[i].a_cntl.a_cols[j].qualname:MyTable[i].a_cntl.a_cols[j].field);
                    if((MyTable[i].a_capt[j].dataField == -1) && MyTable[i].a_cntl.a_cols[j].qualname)
                        MyTable[i].a_capt[j].dataField =
                            getDataFieldByName(MyTable[dataReportIndex].a_capt,MyTable[dataReportIndex].a_cntl.a_cols,MyTable[i].a_cntl.a_cols[j].field);
                }
            }
        }
        //displayReportView(MyTable[i],true);
    }

    if((arGraphEngine == 0)&&(!arGraphEngineSet)) {
        //arGraphEngine = MyTable[start].a_cntl.GraphEngine;
        var mtl=MyTable.length;
        for(var mtx=0;mtx<mtl;mtx++){
			if(MyTable[mtx].deleted)
				continue;
            if(MyTable[mtx].a_cntl.GraphEngine && MyTable[mtx].a_cntl.GraphEngine>0){
                arGraphEngine = MyTable[mtx].a_cntl.GraphEngine;
                break;
            }
        }
        arGraphEngineSet = true;
    }

    window.setTimeout(function(){genChartIcons();},2000);

    if(LayoutObjects.length) ibiCompound.DrawLayoutObjects();
    if(typeof(ibiCompound.ibiDashLayout)!='undefined' && !LayoutObjects.length) {
        if(ibiCompound.ibiDashLayout.length) {
            ibiCompound.DrawLayoutObjects();
        }
    }
    
    for (i = start; i < m_end; i++) {
        displayReportView(MyTable[i],true);
    }
    

    if(isMergeReports) {
        if(ibiCompound.currentMergeFilter==null) {
            var col= MyTable[0].a_cntl.a_cols[0];
            var ca = [];
            ibiCompound.currentMergeFilter = [];
            ibiCompound.currentMergeFilter[0] = {'data':null,'value':null,'column':null};
            ibiCompound.currentMergeFilter[0].value = [];
            ibiCompound.currentMergeFilter[0].column = col;
            ibiCompound.currentMergeFilter[0].data = IGetAllUniqValues(col,ca);
            ibiCompound.currentMergeFilter[0].value[0] = ibiCompound.currentMergeFilter[0].data[0][0];
            for (i = start; i < T_capt.length; i++) {
                if(!MyTable[i].a_cntl.forDataDisplay)
                    MyTable[i].filterChange = true;
            }
        }
    } else {
        if(pageColor) {
            if(useMdiv) {
                if(typeof(useMdiv) == 'string') document.getElementById(useMdiv).style.backgroundColor = pageColor;
                else useMdiv.style.backgroundColor = pageColor;
            } else 
            bodyRef.style.backgroundColor = pageColor;
        }
    }
    for (i = start; i < m_end; i++) {
        mytable = MyTable[i];
        if(T_saveARs.length)
            if(T_saveARs[i]) {
				if((typeof T_saveARs[i].a_col_filter != "undefined")&&(T_saveARs[i].a_col_filter.length))
                    mytable.a_col_filter = T_saveARs[i].a_col_filter;
                if(T_saveARs[i].acdNode) {
                    for(var ii=0;ii<mytable.acdList.length;ii++) 
                        if(T_saveARs[i].acdNode[ii])mytable.expand(MyTable[i].acdList[ii],1);
                    ibiGrid.show(false,mytable);
                }
				if((typeof(ibiChart)!="undefined")&&(typeof T_saveARs[i].a_col_filter != "undefined"))
					ibiChart.drawChartfilt(T_saveARs[i],mytable);
            }
        if(mytable.a_cntl.bytoc) 
            MakeByTree(mytable,mytable.maintable.filter);
		var forceShow = true;
        if(dontshow!=true) {
            if(ibiCompound.drawObjectsList.length) 
                for (j = 0; j < ibiCompound.drawObjectsList.length; j++) 
                    if(ibiCompound.drawObjectsList[j].active) {
                        if(ibiCompound.hasSameTarget(mytable.table_name,ibiCompound.drawObjectsList[j].filterTarget)) {
							if(!mytable.a_cntl.forDataDisplay) {
                                mytable.filterChange = true;
								forceShow = false;
							}
                            break;
                        }
                    }
			if(!mytable.filterChange || (ibiCompound.drawObjectsActive.length == 0) || forceShow)
                ibiGrid.show(false,mytable);
            if(mytable.a_cntl.WindowDisplay=='tab')
                displayTab(mytable.a_cntl.WindowDisplay,i,-1);
        }
    }
    isCompoundCall=false;
    ibi_add_images();
    if(typeof(user_init)=='function') user_init();
    if(typeof(ibiFilter)!='undefined') ibiFilter.buildGlobal();

    if((typeof(global_a_cols)!="undefined") && (global_a_cols !=null))
        if(((hasdata>1)&&(ApiEnableGlobal)&&(T_capt.length>1)&&(global_a_cols.length>0))&&
            (MyTable[0].a_cntl.showGlobalFilter)) EnableGlobalFilter=true;
    if((ibiCompound.layoutIsOn)||(isMergeReports)||((EnableGlobalFilter)&&(ibiCompound.ibiLayout.length))) {
        ibiCompound.layoutIsOn=true;
        ibiCompound.currentLayout=firstLayout;
        var ld = document.getElementById(ibiLayoutListName[cl].IBILAYOUTDIV);
        ld.style.display = 'block';
        ibiCompound.Showlayout(firstLayout, isMergeReports);
        if (outerDivOrg == null) {
            outerDivOrg = document.getElementById(ibiLayoutListName[cl].orgdivouter);
        }
        if (divOrg == null) {
            divOrg = document.getElementById(ibiLayoutListName[cl].orgdiv);
        }
        outerDivOrg.style.height = (divOrg.offsetHeight - ld.offsetHeight) + 'px';
/*
        var dobj = d.getElementById("allLayoutObjects");
        for(var i=start;i<T_capt.length;i++) {
            dobj = d.getElementById("MAINTABLE_"+i);
            if(dobj)
                dobj.style.top = (parseInt(dobj.style.top)+30)+'px';
            
        }
*/
    }

    if(ibiCompound.ibiLayout.length && b_ios && arDisplayMode === DISPLAY_MODE_ADAPTIVE){
        var armd = new ARMobileDashboard({
            layoutTabsOrientation: arAdaptiveOrientation
        });
        orgdiv.style.left = '-10000px';
    }
    
    ibiCompound.DoAnyTrans(true);
    ibiCompound.applyReadyFilters = function() {
        var i;
        var ready = true;
    if(ibiCompound.drawObjectsActive.length) {
            for (i = 0; i < ibiCompound.drawObjectsActive.length; i++) {
                if(!ibiCompound.drawObjectsActive[i].ready)
                    ready = false;
            }
            if(!ready) {
                window.setTimeout(ibiCompound.applyReadyFilters,100);
                return;
            }

            for (i = 0; i < ibiCompound.drawObjectsActive.length; i++) {
            ibiCompound.drawObjectsActive[i].active = true;
            }

            var f_body;
            var f_comp;
            var f_comps = [];
            var f_comp_bottom_level;
            var f_report;
            var f_sv_body;
            var f_sv_f_body;
            var f_sv_sort;
            var f_sort_cols = [];
            var f_col_num;
            var f_comp_top_level;
            var f_chain_values = [];
            var f_uniq_data = [];
            var f_cont_index;
            var f_IBs_ind;
            var f_IBs_val;
            var f_IBs_val_str;
            var f_col_name;
            var f_sv_col_num;
            var f_sv_col_val;
            var f_sv_col_val6;
            var f_sv_col_ind;
            var f_sv_DOL = ibiCompound.drawObjectsList;
            var f_IBs_ind_prev;
            var f_values = [];
            var f_cont;
            var f_data_type;
            var f_inlist;
            var f_filt_called = [];
            var f_sv_active;
            var f_refresh;
            var fi, fii, fj, fjj;
            var f_aggC;

            for(fi=0; fi < ibiCompound.drawObjectsActive.length; fi++) {

                f_sv_col_ind = null;
                f_IBs_ind_prev = null;
                f_uniq_data = [];

                f_comp = ibiCompound.drawObjectsActive[fi];
                f_comp_bottom_level = f_comp;

                if(f_comp.dataReport)
                    f_report = f_comp.getTable(f_comp.dataReport);

                // if merged report, handle drawObjectsList refresh here instead of in drawLayoutObjects()
                if(isMergeReports) {
                    if(ibiCompound.currentMergeFilter!=null) {
                        if(f_report) {
                            if(!f_filt_called[f_report.id]) {
                                f_sv_active = [];
                                for(i = 0; i < ibiCompound.drawObjectsList.length; i++) {
                                    f_sv_active.push(ibiCompound.drawObjectsList[i].active);
                                    ibiCompound.drawObjectsList[i].active = false;
                                }
                                f_report.callFilt(true);
                                f_filt_called[f_report.id] = true;
                                for(i = 0; i < ibiCompound.drawObjectsList.length; i++) {
                                    ibiCompound.drawObjectsList[i].active = f_sv_active[i];
                                }
                            }
                            for(i = 0, numItems = ibiCompound.drawObjectsList.length; i < numItems; i++) {
                                if(typeof(ibiCompound.drawObjectsList[i].refresh)!="undefined") {
                                    if(!ibiCompound.drawObjectsList[i].filterOnload ||
                                        ((!ibiCompound.drawObjectsList[i].children.length) && (!ibiCompound.drawObjectsList[i].filterParent))) {
                                            if(f_comp.dataReport == ibiCompound.drawObjectsList[i].dataReport)
                                                ibiCompound.drawObjectsList[i].refresh();
                                    }
                                }
                            }
                        }
                    }
                }
                // if there is no filterParent and children, then no need to sort for standalone filter
                if(!f_comp.filterParent && !f_comp.children.length) {
                    if(f_comp.active)
                        f_comp.doFilter();
                // otherwise if active on load filters are chained, perform a sort to determine
                // appropriate values for each filter component in the chain
                } else {
                    if(f_report) {
                        f_cont = f_report.a_all_cont;
                        // save report's body and sort to restore after we apply temporary sort
                        f_sv_body = f_report.a_all_body;
                        f_sv_f_body = f_report.a_filter_body;
                        f_sv_sort = f_report.a_sort;
                        f_sv_filt = f_report.filt;

                        f_comps = [];

                        // traverse the filter chain from bottom to top
                        while(f_comp) {
                            if(f_comp.type != "placeholder") {
                                f_aggC = f_comp.aggColumn;
                                if (typeof f_comp.aggColumn == "object")
                                    f_aggC = f_comp.defineName;
                                f_col_num = f_report.getColumnByName(f_aggC);
                            // build array of sort objects
                                f_sort_cols.push({'n_col': f_col_num, 'b_ord': 0, 'dataColumn': f_aggC});
                                if ((!f_comp.filterParent)||((f_comp.filterParent.type == "placeholder")&&(f_comp.filterParent.filterParent == null)))
                                    f_comp_top_level = f_comp;
                                // build array of filter components in chain; ordered from top to bottom
                                f_comps.unshift(f_comp);
                            }
                            f_comp = f_comp.filterParent;
                        }

                        // apply temporary sort which will affect f_body
                        f_report.a_sort = f_sort_cols;
                        f_report.callSort(false,true);

                        f_body = (f_report.a_filter_body) ? f_report.a_filter_body : f_report.a_all_body;

                        // temporarily clear drawObjectsList so f_report.callFilt() can be called without error
                        ibiCompound.drawObjectsList = [];

                        // loop through filter components to obtain their "filtered" and unique values
                        for(fii = 0; fii < f_comps.length; fii++) {
                            if(f_comps[fii].type == "placeholder")
                                continue;
                            if((f_comps[fii].defaultValues == null) || (f_comps[fii].defaultValues.length == 0))
                                f_comps[fii].filterOnloadRan = false;
                            f_col_name = f_comps[fii].dataColumn;
                            f_aggC =  f_comps[fii].aggColumn;
                            if(typeof  f_comps[fii].aggColumn == "object" ) {
                                f_aggC = f_comps[fii].defineName;
                                f_col_name = f_aggC;
                            }
                            f_col_num = f_report.getColumnByName(f_aggC);
                            f_uniq_data[f_col_name] = [];
                            f_inlist = [];
                            f_data_type = f_report.a_capt[f_col_num].type;

                            // the top level filter in a filter chain will have all unique values from its column
                            if(fii>0) {
                                // otherwise filter will only have filtered values based on first value of parent filter...
                                f_sv_col_val = f_values[0][0];
                                f_sv_col_val6 = f_values[6][0];
                                if (f_comps[fii].showAll) {
                                    f_sv_col_val = [];
                                    f_sv_col_val6 = [];
                                }

                                // ...unless parent filter has defaultValues set
                                if (f_comps[fii - 1].defaultValues) {
                                    f_sv_col_val = [];
                                    f_sv_col_val6 = [];
                                    for(var ii=0; ii < f_values[0].length; ii++)
                                        for(var iii=0; iii < f_comps[fii - 1].defaultValues.length; iii++)
                                            if(f_comps[fii-1].defaultValues[iii]==f_values[0][ii]) {
                                                f_sv_col_val[f_sv_col_val.length] = f_values[0][ii];
                                                f_sv_col_val6[f_sv_col_val6.length] = f_values[6][ii];
                                            }
                                }

                                // apply filter to report with first value of parent filter or defaultValues
                                if(f_report.a_capt[f_sv_col_num].isFilterDefine) {
                                    f_report.filt[f_report.filt.length] = new addfilt(f_report.a_capt[f_sv_col_num].fields, 9, f_sv_col_val6);
                                } else
                                    f_report.filt[f_report.filt.length] = new addfilt(f_sv_col_num,9,f_sv_col_val);
                                f_report.callFilt(true);
                            } else {
                                f_report.filt = [];
                            }
                            f_values = f_report.getUniqValues(f_col_num, [], null, arConstants.RECLIMIT, f_comps[fii].showFiltered, null, f_comps[fii].aggType);

                            f_uniq_data[f_col_name] = f_values;
                            f_uniq_data.length++;
                            f_sv_col_num = f_col_num;
                            f_comp_top_level.filter_chain_values = f_uniq_data;
                            f_comps[fii].dataProvider = null;
                            f_comps[fii].refresh();
                        }
                        f_comp_top_level.filter_chain_values = null;

                        //f_comp_top_level.filter_chain_values = f_uniq_data;
                        // restore report's body and sort
                        f_report.a_all_body = f_sv_body;
                        f_report.a_filter_body = f_sv_f_body;
                        f_report.a_sort = f_sv_sort;
                        f_report.filt = f_sv_filt;

                        ibiCompound.drawObjectsList = f_sv_DOL;
                        // refresh top level filter and its children
                        //f_comp_top_level.refresh();
                        // call refreshChildren only for children with filterOnload
                        //f_comp_top_level.refreshChildren(true);
                        // apply filter to bottom level filter since applyFilter checks for filterParent and
                        // applies filter upwards to the top level filter
                        f_comp_bottom_level.applyFilter();
                        // call refreshChildren for any children left in chain which are not filterOnload
                        //f_comp_bottom_level.refreshChildren();
                    }
                }
            }
            // refresh filters that did not get refreshed in merge report section in above loop
            if(isMergeReports) {
                if(ibiCompound.currentMergeFilter!=null) {
                    for(fi=0; fi<ibiCompound.drawObjectsList.length; fi++) {
                        f_comp = ibiCompound.drawObjectsList[fi];
                        if(typeof(f_comp.refresh)!="undefined") {
                            if(!f_comp.active) {
                                if(!f_comp.filterParent)
                                    f_refresh = true;
                                if(f_comp.filterParent)
                                    if(f_comp.filterParent.active)
                                        f_refresh = true;

                                if(f_refresh) {
                                    f_comp.refresh();
                                    f_comp.refreshChildren();
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    if(ibiCompound.drawObjectsActive.length)
        window.setTimeout(ibiCompound.applyReadyFilters,100);
    if(LayoutSection.length==0 && !ibiCompound.isCompoundReport)
        if(b_mobile) window.setTimeout(function(){ibi_iPadMenu.fullScreen(0,true,true);},200);
    if(alertMsg!='') alert(alertMsg);
    
    if(lar) 
        lar.parentNode.removeChild(lar);
    if(!isAHTMTable)
        ibiStd.HideWait();
}


function resizeInnerDiv(e)
{
    var w;
    var h;
    var i, numItems;

    if(ibiMobileFullscreen) return;
    if(e)
        if(e.type=='orientationchange') {
            //window.setTimeout(scrollTo,0,0,1);
            resizeDashBar = true;
        }
    for (i = 0, numItems = ibiLayoutListName.length; i < numItems; i++) {
        if('innerWidth' in window) w = window.innerWidth;    
        else w = document.documentElement.clientWidth;
        if('innerHeight' in window) h = window.innerHeight;
        else h = document.documentElement.clientHeight;

        var obj1 = document.getElementById(ibiLayoutListName[i].orgdiv);
        if(!obj1) continue;
        var b = obj1.offsetParent;
        if(!b) b = obj1.parentNode;
        if(w==0) w = b.offsetWidth;
        if(h==0) h = b.offsetHeight;
        
        if(!ibiCompound.isCompoundReport) {
            var scrollHeight = (document.scrollingElement) ? 
                                document.scrollingElement.scrollHeight :
                                document.documentElement.scrollHeight;

            var scrollWidth = (document.scrollingElement) ?
                               document.scrollingElement.scrollWidth :
                               document.documentElement.scrollWidth;

            if(scrollHeight > window.innerHeight) {
                w = document.documentElement.clientWidth;
            }

            if(scrollWidth > window.innerWidth) {
                h = document.documentElement.clientHeight;
            }
        }
        
        var obj2 = document.getElementById(ibiLayoutListName[i].orgdivouter);
        var obj3 = document.getElementById(ibiLayoutListName[i].IBILAYOUTDIV);
        var obj4 = document.getElementById(ibiLayoutListName[i].orgdivtable);
        if(!ibiLayoutListName[i].orgdivFromUser) {
            obj1.style.width = w+'px';
            obj1.style.height = h+'px';
        }
        obj2.style.height = h+'px';
        obj2.style.width = w+'px';
        obj3.style.width = w+'px';
        obj4.style.width = w+'px';
        if(ibiCompound.layoutIsOn) {
            var dobja = document.getElementById(ibiLayoutListName[i].IBILAYOUTDIV);
            dobja.style.width = w+'px';
            obj2.style.height = (h - parseInt(dobja.offsetHeight, 10))+'px';
        } 
    }
    // fix layout bar;

    if(resizeDashBar && MyTable[0]) {
		if(isARBrowserExtension) {
			if(ibiCompound.layoutIsOn) {
                if(ibiCompound.currentLayout!=-1)ibiCompound.showBar(ibiCompound.currentLayout);
            }
		} else {
            if(ibiCompound.currentLayout!=-1)ibiCompound.showBar(ibiCompound.currentLayout);
        }
	}
    resizeDashBar = false;

    for (i = 0, numItems = MyTable.length; i < numItems; ++i) {
        ibi_add_popmenu(MyTable[i]);
    }
}


function moveInnerDiv(e)
{
    if(e.ibiCancelBubble || (e.target instanceof SVGElement)) return;
    var x, y,x1,y1;
    var target, scale;

    if(e.touches) {
        if(!innerDivpos.moving && !innerDivpos.scaling) {
            if(e.touches.length==1) innerDivpos.moving = true;
            else innerDivpos.scaling = true;
        }
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        target = e.touches[0].target;
        if(innerDivpos.scaling) {
            x1 = e.touches[1].clientX;
            y1 = e.touches[1].clientY;
        }
    } else {
        x = e.clientX;
        y = e.clientY;
        target = e.target;
    }
    layout = 0;
    if(innerDivpos.Mx == -1) {
        innerDivpos.obj = document.getElementById(ibiLayoutListName[layout].orgdivinner);
        innerDivpos.obj.style.webkitPerspective=0;
        if(innerDivpos.obj) {
            innerDivpos.orgX = parseInt(innerDivpos.obj.style.left, 10);
            innerDivpos.orgY = parseInt(innerDivpos.obj.style.top, 10);
        }
        innerDivpos.Mx = x;
        innerDivpos.My = y;
        if(innerDivpos.scaling) {
            innerDivpos.M1x = x1;
            innerDivpos.M1y = y1;
        }
    } 

    if(innerDivpos.moving) {
        if(innerDivpos.obj) {
            var xx = innerDivpos.orgX + (x-innerDivpos.Mx);
            var yy = innerDivpos.orgY + (y-innerDivpos.My);

            if(xx>0) {
                innerDivpos.Mx = innerDivpos.Mx+xx;
                xx = 0;
            }
            if(yy>0) {
                innerDivpos.My = innerDivpos.My+yy;
                yy = 0;
            }
            innerDivpos.Sx = xx;
            innerDivpos.Sy = yy;
            scale = innerDivpos.scale;
            innerDivpos.obj.style.webkitTransform = 'translate3d('+(xx-innerDivpos.orgX)+'px,'+(yy-innerDivpos.orgY)+'px, 0) scale3d('+scale+','+scale+',1)';
        }
    } else {
        var dist1 = Math.abs(innerDivpos.Mx-innerDivpos.M1x);
        var dist2 = Math.abs(innerDivpos.My-innerDivpos.M1y);
        var dist3 = Math.abs(x-x1);
        var dist4 = Math.abs(y-y1);
        var l1 = Math.sqrt(dist1*dist1+dist2*dist2);
        var l2 = Math.sqrt(dist3*dist3+dist4*dist4);
        innerDivpos.scale = innerDivpos.scaleSave * (l2/l1);
        if(innerDivpos.scale>5) innerDivpos.scale = 5;
        if(innerDivpos.scale<1) innerDivpos.scale = 1;
        scale = innerDivpos.scale;
        window.setTimeout(function(){
            innerDivpos.obj.style.webkitTransform='scale3d('+scale+','+scale+',0)';
            innerDivpos.obj.style.webkitTransformOrigin = "0 0";
            innerDivpos.obj.style.MozTransform='scale('+scale+')';
            innerDivpos.obj.style.MozTransformOrigin = "0 0";
            innerDivpos.obj.style.OTransform='scale('+scale+')';
            innerDivpos.obj.style.MsTransform='scale('+scale+')';
        },0);
    }
}

function stopInnerDiv(e)
{
    if(e.ibiCancelBubble || (e.target instanceof SVGElement)) return;
    if(!innerDivpos.moving && !innerDivpos.scaling) return;
    var scale =  innerDivpos.scale;
    innerDivpos.obj.style.webkitTransform = 'translate3d(0,0,0) scale3d('+scale+','+scale+',10)';
    innerDivpos.obj.style.left = innerDivpos.Sx+'px';
    innerDivpos.obj.style.top = innerDivpos.Sy+'px';
    innerDivpos.Mx = -1;
    innerDivpos.My = -1;
    innerDivpos.scaling = false;
    innerDivpos.moving = false;
    innerDivpos.scaleSave = innerDivpos.scale;
}


function displayReportView(mytable,init) {
    var btype;
    var ctype=0;
    if(((mytable.a_cntl.GraphEngine==0)||(mytable.a_cntl.GraphEngine==1))&&(mytable.a_cntl.reportView==REPORTFUSION)) {
        mytable.a_cntl.reportView = mytable.a_cntl.defaultView;
    }
    switch(mytable.a_cntl.reportView) {
        case REPORTLINE: ctype=1; break;
        case REPORTBAR: ctype=2; break;
        case REPORTPIE: ctype=0; break;
        case REPORTSCATTER: ctype=3; btype="NONE"; break;
        case REPORTPIVOT: ctype=5; break;
        case REPORTFUSION: ctype=7; break;
        case REPORTGMAP: ctype=8; break;
        case REPORTTDG: ctype=9; break;
        case REPORTROLL: ctype=4; break;
    }
    if(init) {
        var j, x_cols=[],y_cols=[];
        var linked=false;
        var pvcol=0;
        var size = new Object();
        var btypeNONE;
        try {
            btypeNONE = ((mytable.a_cntl.verbs[0].type == "PRINT") &&
                         (arGraphEngine == arGraphEngineJSCHART));
        } catch (e) {
            btypeNONE = false;
        }
        btype = "SUM";
        if(mytable.useMdiv) {
            size =  {'width':500,'height':300};
            var ss=document.getElementById(mytable.useMdiv);
            if(!ss) alert("Element width id "+mytable.useMdiv+" was not found");
            else {
                if(ss.style!=null) {
                    var w = parseInt(ss.style.width, 10);
                    var h = parseInt(ss.style.height, 10);
                    size = {'width':w,'height':h};
                } 
            }
        }
        else 
        if(mytable.a_cntl.table_div.width>10)
            size = {'width':mytable.a_cntl.table_div.width,'height':mytable.a_cntl.table_div.height};
        else
        if(mytable.a_cntl.table_div.percentWidth>0) {
            var ddobj = document.getElementById("MAINTABLE_"+mytable.id);
            if(ddobj)
                size = {'width':ddobj.clientWidth,'height':ddobj.clientHeight};
        }
        else size =  {'width':500,'height':300};

        for (j = 0; j < mytable.n_cols; j++) {
            if(mytable.a_capt[j].isby){
                //since the merge field is normally noprinted we dont need to skip
                //the first field.  Also logic is wrong for skipping the merge field anyway.
                //if (!isMergeReports || (j == 0)) { // need to permit all BYs for sorting
                    y_cols[y_cols.length]=j;
                //}
            } else
            if((((!mytable.a_capt[j].noprint)&&(!mytable.a_capt[j].b_hide))||(mytable.a_cntl.hasBuckets)) && (!mytable.a_capt[j].neverShow))
                x_cols[x_cols.length]=j;
        }
        mytable.chartinfo.saveable.x_cols = x_cols;
        mytable.chartinfo.saveable.y_cols = y_cols;
        mytable.chartinfo.saveable.btypeArray = [];
        for (j = 0; j < x_cols.length; j++) {
            if (btypeNONE) { 
                btype = "NONE";
            } else {
                btype = "SUM";
                if(mytable.a_capt[x_cols[j]].type != "IBINUM")
                    btype = "FST";
            }
            mytable.chartinfo.saveable.btypeArray[j] = btype;
            if(mytable.a_capt[x_cols[j]].aggType)
                mytable.chartinfo.saveable.btypeArray[j] =mytable.a_capt[x_cols[j]].aggType;
        }
        mytable.chartinfo.table_number = mytable.a_cntl.table_number;
        mytable.chartinfo.saveable.linked = linked;
        mytable.chartinfo.saveable.size = size;
        mytable.chartinfo.saveable.pvcol = pvcol;
    } 
    if(mytable.a_cntl.reportView==REPORTGRID) return;
    if(!init) {
        if((typeof mytable.chartinfo.parms == "undefined")||
            (typeof mytable.chartinfo.parms._chart == "undefined"))
            mytable.o_main.innerHTML = '';
        var dobj=mytable.maintable.root;
        if(dobj.style.backgroundColor=='')
            dobj.style.backgroundColor = "white";
        //if(mytable.a_cntl.reportView!=REPORTPIVOT)
        //    dobj.style.border=mytable.n_border+'px solid #000000';
        //else
        //    dobj.style.border='none';
        if((arGraphEngine == arGraphEngineJSCHART) && typeof(mytable.a_cntl.ibiChart)!="undefined" && (mytable.a_cntl.ibiChart.toLowerCase() == "cluster"))
        {
            mytable.cluster = new arClusterChart(mytable.o_main,mytable,mytable.chartinfo.saveable.size.width,mytable.chartinfo.saveable.size.height);
            mytable.cluster.refresh();
        } else {
            mytable.chartinfo.saveable.ctype = ctype;
            mytable.chartinfo.xars = null;
            if(mytable.a_cntl.graphLook == "GRID") {
                mytable.a_cntl.fusionChart = "GRID";
                mytable.a_cntl.ibiChart = "GRID";
            }
            if(typeof mytable.chartinfo.saveable.org_ibiChart == "undefined") {
                mytable.chartinfo.saveable.fusionChart = mytable.a_cntl.fusionChart;
                mytable.chartinfo.saveable.ibiChart = mytable.a_cntl.ibiChart;
                mytable.chartinfo.saveable.org_ibiChart = mytable.a_cntl.ibiChart;
                mytable.chartinfo.saveable.fromGraph = true;
            }

            if(typeof(ibiChart)!="undefined") {
                ibiStd.ShowWait();
                if(mytable.gshowId) {
                    window.clearTimeout(mytable.gshowId);
                    ibiStd.HideWait();
                }
                mytable.gshowId = null;
                //mytable.removeCallBack();
                mytable.gshowId = window.setTimeout(function() {
                    ibiChart.makeChart(null, mytable.chartinfo, -999 + mytable.a_cntl.table_number, mytable.o_main);
                    mytable.gshowId = null;
                    ibiStd.HideWait();
                },100);
            }
//            MakeChart(null,mytable.chartinfo,-999+mytable.a_cntl.table_number,mytable.maintable.span);
        }
    }
}

function setpage(tn) {
    var mytable = getMyTable(tn);
    var fname = 'formgoto';
    var fobj = d.getElementById(fname);
    var pagenumber = parseInt(fobj.value, 10);
    var save_cp = mytable.o_paging.c;
    var maxpag = parseInt((mytable.n_rows/mytable.o_paging.n)+1, 10);
    if((pagenumber<=maxpag)&&(pagenumber>0))  {
        mytable.o_paging.c = pagenumber-1;
    }
    var obj2 = document.getElementById('gotopage');
    if(obj2) {
        obj2.innerHTML='';
        obj2.style.visibility='hidden';
    }
    ibiGrid.show(false,mytable);
    return false;
}

 

function addnode(root,val,nodedata,isInt,nodepos)
{
    var done=false,stval;
    var p = root;

    if(typeof(nodepos[val])!='undefined') p = nodepos[val];
    else
    if((val >= root.leftmost.value)&& (val != missingVal)) p = root.leftmost;
    else
    if(((val <= root.rightmost.value)&&(root.rightmost.value!=missingVal))
         || (val == missingVal)) p = root.rightmost;
    else 
    if(isInt) { // this helps numberic columns with extremely unique values 
        stval=val-1;
        while((typeof(nodepos[stval])=='undefined')&&(stval>(val-20))) stval--;

        if(stval>(val-19)) {
            if(nodepos[stval].parent!=null) p = nodepos[stval].parent;
            else p = nodepos[stval];
        }
    }

    while(!done) {
        if(p.value == val) {
            done = true;
        } else
        if(((val != missingVal) && (val > p.value)) || (p.value == missingVal)) {
            if(p.left==null) {
                p.left = {'left':null,'right':null,'value':val,'printed':false,
                    'parent':p,'data':[]};
                p = p.left;
                done = true;
                nodepos[val]=p;
                if(val > root.leftmost.value) root.leftmost = p;
            }
            else p = p.left;
        } else {
            if(p.right==null) {
                p.right = {'left':null,'right':null,'value':val,'printed':false,
                    'parent':p,'data':[]};
                p = p.right;
                done = true;
                nodepos[val]=p;
                if(((val < root.rightmost.value)&&(root.rightmost.value!=missingVal))
                    || (val == missingVal)) root.rightmost = p;
            }
            else p = p.right;
        }
    }
    p.data[p.data.length] = nodedata;
}
 
function pnode(node,root) {
    node.printed = true;
    var nl = node.data.length;
    for(var i=0; i < nl; i++) {
        this.a_fn_body[root.count] = this.a_body[node.data[i]];
        root.count++;
    }
}
 
function printnode(node,ord,root)
{
    var nn = node;
    if(ord)    nn = root.leftmost;
    else nn = root.rightmost;
    
    while(nn) {
        if(ord) {
            if(!nn.printed) {
                while(nn.left && !nn.left.printed) nn=nn.left;
                this.pnode(nn,root);
                if(nn.right) nn = nn.right;
                else while(nn && nn.printed) nn = nn.parent;
            } 
        } else {
            if(!nn.printed) {
                while(nn.right && !nn.right.printed) nn=nn.right;
                this.pnode(nn,root);
                if(nn.left) nn = nn.left;
                else while(nn && nn.printed) nn = nn.parent;
            } 
 
        }
    }
 
}
 
function MySort(i1,i2,sort,isInt) {
    var j = i1;
    var i;
    var normalSort = true;
    var val,si;
        this.a_fn_body = [];
    nodepos=[];
    nodeposHigh=[];

    var parent_array = [];
    if((typeof(this.a_body)=='undefined') ||
        (typeof(this.a_body[j])=='undefined')) return this.a_fn_body;
    si = this.a_cont[this.a_body[j][0]][sort][DARAW];
    if(si == arConstants.MISSING_OR_NODATA) val = missingVal;
    else val = this.IBs[si];

    var isRoot = true;
    if(this.mytable.isRollUp) isRoot=false;
    var hr;
        
    var topnode = {'left':null,'right':null,'value':val,'printed':false,
        'parent':null,'data':[],'leftmost':null,'rightmost':null,'count':0};
    topnode.leftmost = topnode;
    topnode.rightmost = topnode;
    topnode.count=j;
    nodepos[val]=topnode;
    
    var topnodeHigh = {'left':null,'right':null,'value':val,'printed':false,
        'parent':null,'data':[],'leftmost':null,'rightmost':null,'count':0};
    topnodeHigh.leftmost = topnodeHigh;
    topnodeHigh.rightmost = topnodeHigh;
    topnodeHigh.count=j;
    nodeposHigh[val] = topnodeHigh;
    
    for(i=j;i<i2;i++) {
        si = this.a_cont[this.a_body[i][0]][sort][DARAW];
        if(si == arConstants.MISSING_OR_NODATA) val = missingVal;
        else val = this.IBs[si];
        if(normalSort) 
            hr = 0;
        else
            hr = this.mytable.callHigh(isRoot,this.a_cont[this.a_body[i][0]]);
        if(hr==1)
            addnode(topnodeHigh,val,i,isInt,nodeposHigh);
        else
            addnode(topnode,val,i,isInt,nodepos);
    }
    this.printnode(topnodeHigh,this.b_order,topnodeHigh);
    topnode.count = topnodeHigh.count;
    this.printnode(topnode,this.b_order,topnode);
    j = topnode.count;
    nodepos=[];
    nodeposHigh=[];
    return(this.a_fn_body);
}
 
function Isort_data(new_sort,a_body,a_cont,IBs,b_order,isInt,mytable)
{
    this.a_body = a_body;
    this.a_cont = a_cont;
    this.MySort = MySort;
    this.b_order = b_order;
    this.IBs = IBs;
    this.mytable = mytable;
    return (this.MySort(0, a_body.length, new_sort, isInt));
    
}
 
 
function IExeSort(n_col, n_ord,dontshow) {
    var i = 0,j;
    var pmytable=this;
 
    this.a_sort = [];
    this.a_sort[i]={'n_col' : n_col,'b_ord' : n_ord};
    this.a_capt[n_col].b_ord = n_ord;
    if(this.AccordionIsOn) {
        j=n_col-1;
        while(j>=0) {
            if((this.a_capt[j].isby)&&(!this.a_capt[j].issum)) {
//            if(this.a_capt[j].isby) {
                i++;
                this.a_sort[i]={'n_col' : j,'b_ord' : this.a_capt[j].b_ord};
            }
            j--;
        }
    }

    if(this.a_sort[0].n_col!=this.FirstNoprintColumn)
        this.showsubHF=false;
    else
        this.showsubHF=true;
    this.o_paging.c = 0;
    this.sortneeded = true;
//    this.filterChange = true;
    if(!dontshow) ibiGrid.show(false,this);
}
 

function ICallSort(usefilter,sync) {
    var pmytable=this;
    var isInt,format,vtype;
    var useCol;
    for(var i=0;i<pmytable.a_sort.length;i++){
        if(this.a_cntl.cacheMode) {
            ibiStd.ShowWaitSB(ibiMsgStr['sorting'],this.a_cntl.table_number);
            var pn_col = pmytable.a_sort[i].n_col;
            if(pmytable.a_capt[pn_col].isFilterDefine) {
                pn_col = pmytable.a_capt[pn_col].fields;
            }
            if(sync) {
                IgetSortData(pmytable.a_cntl.table_number,pn_col,pmytable.a_sort[i].b_ord);
                ibiStd.HideWaitSB(this.a_cntl.table_number);
            } else
                setTimeout("IgetSortData("+pmytable.a_cntl.table_number+","+pn_col+","+pmytable.a_sort[i].b_ord+");ibiStd.HideWaitSB("+this.a_cntl.table_number+");",0);
        } else {
            isInt = false;
            vtype = pmytable.a_capt[pmytable.a_sort[i].n_col].type;
            format = pmytable.a_capt[pmytable.a_sort[i].n_col].format;
            useCol = pmytable.a_capt[pmytable.a_sort[i].n_col].dataField; // needs updated dataField for sorting (NOT original dataField)
            if(vtype == IBINUM)
                if(format.indexOf('.')==-1) isInt = true;
            pmytable.b_order = pmytable.a_sort[i].b_ord;
            if(pmytable.a_filter_cont) 
                pmytable.a_filter_body=Isort_data(useCol,pmytable.a_filter_body,pmytable.a_filter_cont,this.IBs, pmytable.b_order,isInt,pmytable);
            pmytable.a_all_body=Isort_data(useCol,pmytable.a_all_body,this.a_all_cont,pmytable.IBs,pmytable.b_order,isInt,pmytable);
        }
    }
    return this.a_cntl.cacheMode;
}
 
function IToggleStatus()
{
    if(this.a_cntl.status) this.a_cntl.status = 0;
    else this.a_cntl.status = 1;
    ibiGrid.show(false,this);
}

function IToggleAccordion()
{
    this.AccordionIsOn = !this.AccordionIsOn;
//    if(!this.AccordionIsOn) {
//        for(var j=0; j<this.n_cols; j++)
//            this.a_capt[j].exp_hide=false;
//    } else {
    if(this.AccordionIsOn) {
        var sl = this.a_sort.length;
        if(sl)
            this.exeSort(this.a_sort[sl-1].n_col,this.a_sort[sl-1].b_ord,true);
    }
    ibiGrid.show(false,this);
}

function IExpandAll()
{
    if(this.AccordionIsOn) {
        var maxlevel = 0;
        var curAcdList, levels, numLevels, al = this.acdList.length;
        for(var i=0;i<al;i++) {
            curAcdList = this.acdList[i];
            if (this.acdNode[curAcdList] == false) {
                this.acdNode[curAcdList] = true;
                levels = curAcdList.split(':');
                numLevels = levels.length;
                this.bycount[numLevels]++;
                if (numLevels > maxlevel) { maxlevel = numLevels; }
            }
        }
        for(var col = 0, numCols = this.n_cols; col < numCols; ++col) {
            this.a_capt[col].exp_hide = false;
        }
        for(var row = 0, numRows = this.n_rows, nextCol = this.n_cols + 1;
            row < numRows; ++row) {
            this.a_cont[row][nextCol] = maxlevel;
        }
    }
    this.hierexpandall();
    ibiGrid.show(false,this);
}
 
function ISetLevel(row,val)
{
    if (typeof(row)=='object') {
        for (var i = 0, numRows = row.length; i < numRows; i++) { 
            this.setlevel(row[i], val); 
        }
    } else { 
        this.a_all_cont[row*1][this.n_cols+1] = val;
    }
}
 
function IExpand(event,nodeid,noshow)
{
    if (typeof event.stopPropagation !== 'undefined') { event.stopPropagation(); }
    else { event.cancelBubble = true; }

    var curLevel, curCaptCol;
    var levels = nodeid.split(':');
    var numLevels = levels.length;
    var offset=0;

    this.bycount[numLevels]++;
    this.acdNode[nodeid] = true;

    curLevel = numLevels;
    for (var col = 0, numCols = this.n_cols;
         ((col < numCols) && (this.a_capt[col].level <= curLevel));
         col++) {
        curCaptCol = this.a_capt[col];
        if ((curCaptCol.noprint) && (curLevel <= curCaptCol.level)) {
            curLevel = curCaptCol.level+1;
        }
        curCaptCol.exp_hide = false;
    }

    var rows = this.acdLines, numRows = rows.length;
    for (var i = 0; i < numLevels; ++i) {
        curLevel = levels[i] * 1;
        if (curLevel < numRows) {
            rows = rows[curLevel];
        }
    }
    this.setlevel(rows, numLevels);

    if (typeof(noshow)=="undefined" || (noshow != 1)) { ibiGrid.show(false, this); }
}
 
function ICollapseAll()
{
    if(this.AccordionIsOn) {
        var i, MAX_BYCOUNT = 33;
        var al = this.acdList.length;
        for(i = 0; i < al; ++i) { this.acdNode[this.acdList[i]] = false; }
        for(i = 0; i < MAX_BYCOUNT; ++i) { this.bycount[i] = 0; }
        for(var col = 0, numCols = this.n_cols; col < numCols; ++col) {
            if (this.a_capt[col].level > this.first_level) {
                this.a_capt[col].exp_hide = true;
            }
        }
        for (var row = 0, numRows = this.n_rows, nextCol = this.n_cols + 1;
            row < numRows; ++row) {
            this.a_cont[row][nextCol] = 0;
        }        
    }
    this.hiercollapseall();
      ibiGrid.show(false,this);
}


function ICollapse(event, nodeid, noshow)
{
    if (typeof event.stopPropagation !== 'undefined') { event.stopPropagation(); }
    else { event.cancelBubble = true; }

    var curAcdList, curNumLevels;
    var levels = nodeid.split(':');
    var numLevels = levels.length;
    var nodeidLength = nodeid.length;
    var i, al, offset = 0;

    for (i = 0, al = this.acdList.length; i < al; ++i) {
        curAcdList = this.acdList[i];
        if (nodeid == curAcdList.substr(0, nodeidLength)) {
            if (this.acdNode[curAcdList]) {
                levels = curAcdList.split(':');
                curNumLevels = levels.length;
                this.bycount[curNumLevels]--;
                this.acdNode[curAcdList]=false;
            }
        }
    }
    var curLevel, rows = this.acdLines, numRows = rows.length;
    for (i = 0; i < numLevels; ++i) {
        curLevel = levels[i] * 1;
        if (curLevel < numRows) {
            rows = rows[curLevel];
        }
    }
    this.setlevel(rows, numLevels-1);
    if(noshow!=1) {
        for (var col = 0, numCols = this.n_cols; col < numCols; ++col) {
            curCaptCol = this.a_capt[col];
            if ((curCaptCol.level > this.first_level) && (this.bycount[curCaptCol.level-offset] == 0)) {
                curCaptCol.exp_hide = true;
            }
            if (curCaptCol.noprint) { offset++; }
        }
        ibiGrid.show(false,this);
    }
}
 
function IHierExpand(row,col) {
    var node = this.a_cont[row][col];
    var level= node[DAHIR]+1;
    var srow=row+1;
    var numRows = this.n_rows, numCols = this.n_cols;
    
    node = this.a_cont[srow][col];
    while((node[DAHIR] >= level) && (srow < (numRows-1))) {
        if (node[DAHIR] == level) { this.a_cont[srow][numCols+2] = 0; }
        srow++;
        node = this.a_cont[srow][col];
    }
    ibiGrid.show(false,this);
}

function IHierExpandAll(){
    if (this.a_cntl.hierarchy) {
        if (this.a_cntl.hierarchy.Expand) {
            var numCols = this.n_cols; 
            for (var i = 0, numItems = this.a_f_body.length; i < numItems; ++i) { 
                this.a_cont[this.a_f_body[i][0]][numCols + 2] = 0;
            }
        }
    }
}

function IHierCollapseAll() {
    if (this.a_cntl.hierarchy) {
        if (this.a_cntl.hierarchy.Expand) {
            var numCols = this.n_cols; 
            for (var i = 0, numItems = this.a_f_body.length; i < numItems; ++i) { 
                if (this.a_cont[this.a_f_body[i][0]][numCols + 4] != 0) {
                    this.a_cont[this.a_f_body[i][0]][numCols + 2] = 1;
                }
            }
        }
    }
}

function IHierCollapse(row,col) {
    var node = this.a_cont[row][col];
    var level= node[DAHIR]+1;
    var srow=row+1;
    var numRows = this.n_rows, numCols = this.n_cols;
    node = this.a_cont[srow][col];
    while ((srow < numRows) && (node[DAHIR] >= level)) {
        this.a_cont[srow][numCols + 2] = 1;
        srow++;
        if (srow < numRows) {
            node = this.a_cont[srow][col];
        }
    }
    ibiGrid.show(false,this);
}

 
function TTreturnHideTable()
{
    var hidearray = [];
    for (var col = 0, numCols = this.n_cols; col < numCols; ++col) {
        hidearray[col] = 0;
        if (!this.a_cntl.menuops.menunoprint && this.a_capt[col].noprint) continue;
		if (this.a_capt[col].b_hide && !this.a_capt[col].neverShow ) { hidearray[col] = 1; }
        
    }
    return(hidearray);
}
 

function IToggleCalc()
{
    this.calcType++;
    if(this.calcType>2) this.calcType = 0;
    ibiGrid.show(false,this);
}
            
function ITogglevis(col)
{
    this.a_capt[col].vis = !(this.a_capt[col].vis);
    ibiGrid.show(false,this);
}
 
function ITogglevispct(col)
{
    this.a_capt[col].vispct = !(this.a_capt[col].vispct);
    ibiGrid.show(false,this);
}


function addfilt(col,ftype,fp1,fp2,agg)
{
    if(typeof(agg)!="undefined") this.an_aggtype = agg;
    this.an_fcol=(typeof(col)!="object")?[col*1]:col;
    this.as_fpat1=(typeof(fp1)!="object")?[fp1]:fp1;
    this.as_fpat1=((typeof(this.as_fpat1[0])!="object") 
                   || ((typeof this.as_fpat1[0] === "object") && (this.as_fpat1[0].missing === true)))
                  ? [this.as_fpat1] 
                  : this.as_fpat1;
    if(fp2 != null) {
        this.as_fpat2=(typeof(fp2)!="object")?[fp2]:fp2;
        this.as_fpat2=(typeof(this.as_fpat2[0])!="object")?[this.as_fpat2]:this.as_fpat2;
    } else
        this.as_fpat2=null;
    this.an_ftype=ftype*1;
    this.filterChange=true;
}

function IinitBody(iMytable)
{
	var mytable = this;
	if(typeof iMytable != "undefined")
		mytable = iMytable;
    var whatwehave = mytable.a_all_cont.length;
	var i,j;
    mytable.a_all_body = new Array(whatwehave);
    for (i = 0; i < whatwehave; i++)
        mytable.a_all_body[i] = [i,0,0,-1,i];
//    mytable.a_body = mytable.a_all_body;
    mytable.a_f_body = mytable.a_all_body;
    mytable.a_cont = mytable.a_all_cont;
	//check for compute text
	var hasComputeText = false;
	var computeTextColumns = [];
	for(i=0; i < mytable.a_capt.length; i++) {
		if(mytable.a_capt[i].computeScript) {
			hasComputeText = true;
			computeTextColumns[computeTextColumns.length] = i;
		}
	}
	if(hasComputeText) {
		var inlist = {};
        for(i=0; i<mytable.IBs.length; i++)
            inlist[mytable.IBs[i]] = i;
		for(i=0; i < mytable.a_cont.length; i++) {
            var c= {};
            for (j = 0; j < mytable.a_cntl.a_cols.length; j++) {
                c[mytable.a_cntl.a_cols[j].field] = {
                    "value": mytable.IBs[mytable.a_cont[i][j][DARAW]],
                    "display": mytable.IBs[mytable.a_cont[i][j][DASTR]]
                }
            }
            var row = {};
            row.index = i;
            var txt = "column = "+JSON.stringify(c);
            eval(txt);
			for(j=0; j < computeTextColumns.length; j++) {
                    var t,p;

                    try {
                    	var sandBox = function(cScript) {
                    		var t;
                            var document = {};
                            var window = {};
                            var $ = {};
                            var mytable = {};
                            var MyTable = {};
                            var txt = "t = " + cScript;
                        eval(txt);
                            return t;
                        };
                    	t = sandBox(mytable.a_capt[computeTextColumns[j]].computeScript);

                        if(typeof(inlist[t])!="undefined")
                            p = inlist[t];
                        else {
                            p = mytable.IBs.length;
                            mytable.IBs[p] = t;
                            inlist[t] = p;
                        }
                        mytable.a_cont[i][computeTextColumns[j]] = [];
                        mytable.a_cont[i][computeTextColumns[j]][DARAW] = p;

                        if(typeof(inlist[t])!="undefined")
                            p = inlist[t];
                        else {
                            p = mytable.IBs.length;
                            mytable.IBs[p] = t;
                            inlist[t] = p;
                        }
                        mytable.a_cont[i][computeTextColumns[j]][DASTR] = p;

                    } catch (e) {
                        //
                    }
            }
        }
    }
}

function IGetColumnByName(name,mytable)
{
    var i;
    for(i=0; i < this.a_cntl.a_cols.length; i++) {
		if(this.a_capt[i].deleted)
			continue;
		if(typeof this.a_cntl.a_cols[i].field == "undefined")
			continue;
        if((this.a_cntl.a_cols[i].field.toUpperCase() == name.toUpperCase())||
        (this.a_cntl.a_cols[i].name.toUpperCase() == name.toUpperCase())||
        (this.a_cntl.a_cols[i].alias.toUpperCase() == name.toUpperCase()))
             return i;
		if(this.a_cntl.a_cols[i].qualname) {
            if(this.a_cntl.a_cols[i].qualname.toUpperCase() == name.toUpperCase())
                return i;
            var pos = this.a_cntl.a_cols[i].qualname.indexOf(".");
            if(pos>-1) {
            	if(this.a_cntl.a_cols[i].qualname.substr(pos+1).toUpperCase() == name.toUpperCase())
                    return i;
			}
        }
        if(name.indexOf(" ")!=-1) {
            var fixSpaceName = name.split(" ");
            var j = 0;
            while (j < fixSpaceName.length) {
                if (fixSpaceName[j] == "") {
                    fixSpaceName.splice(j, 1);
                } else
                    j++;
            }
            fixSpaceName = fixSpaceName.join(" ");
            if ((this.a_cntl.a_cols[i].field.toUpperCase() == fixSpaceName.toUpperCase()) ||
                (this.a_cntl.a_cols[i].name.toUpperCase() == fixSpaceName.toUpperCase()) ||
                (this.a_cntl.a_cols[i].alias.toUpperCase() == fixSpaceName.toUpperCase()))
                return i;
            if (this.a_cntl.a_cols[i].qualname)
                if (this.a_cntl.a_cols[i].qualname.toUpperCase() == fixSpaceName.toUpperCase())
                    return i;
        }
    }
    return -1;
}

function GetFieldInfo(fields)
{
	var i,j;
    if(this.a_cntl.cacheWriteMode==4) {
        var bycols = "";
        for(i=0; i < fields.length; i++)
            bycols += "BY "+fields[i]+' ';
        var limit = 1;
        var async = false;
        var calcdefs = "";
		var r_num = 0;
        IremoteRollInfo(this.a_cntl.table_number,bycols,calcdefs,r_num,false);
		/*
        if(this.returnInfo) {
            this.returnInfo.capt.splice(this.returnInfo.capt.length - 1, 1);
            this.returnInfo.cols.splice(this.returnInfo.cols.length - 1, 1);
        }
		*/
        return this.returnInfo;
    } else {
        var obj = {cols:[],capt:[]};
		var workTable = this;
		if(this.a_cntl.dataReport) {
			var dataReportIndex = getReportByName(this.a_cntl.dataReport);
			workTable = MyTable[dataReportIndex];
		}
		for(i=0; i < fields.length; i++) {
			j = workTable.getColumnByName(fields[i]);
			if(j != -1) {
				obj.cols[i] = ibiStd.copyObject(workTable.a_cntl.a_cols[j]);
				obj.capt[i] = ibiStd.copyObject(workTable.a_capt[j]);
			} else {
				obj.cols[i] ={};
				obj.capt[i] ={};
			}
		}
        return obj;
    }

}

function TTable(a_capt, a_cont, o_look, a_cntl, a_styles, subtab,tstrings,acdLines,acdList,saveARs,useMdiv,reset,dontRefresh) {
    var filters = ['substring','match','regexp','substr case ins'];
    var i, jj,j;
    var a_css = ['main', 'captCell', 'captText', 'head', 'foot', 'pagnCell', 'pagnText', 'pagnPict', 'filtCell', 'filtPatt', 'filtSelc'];
    this.a_capt = []; 
    this.a_head = []; 
    this.a_sel_capt=[];
    this.a_cont=null;
    this.original_cntl = ibiStd.copyObject(a_cntl);
    this.original_capt = ibiStd.copyObject(a_capt);
    this.zIndexCounter = 0;
    this.dataReportList = {};
    this.n_hid_rows = 0;
    this.activeAjaxRequests = 0;
    if(typeof(a_cntl.org_t_number)=='undefined') a_cntl.org_t_number=a_cntl.table_number;
    if(typeof(a_cntl.menu)=='undefined') a_cntl.menu = {};
        this.a_cntl = a_cntl;
    this.cacheFile = null;
    this.cacheWhereCondition = '';
    this.cacheSortCondition = '';
    this.cacheWhereConditionEval = '';
    this.cacheByColumns = '';
    this.cacheCalcColumns = '';
    if(typeof(a_cntl.cacheFex)!='undefined') this.cacheFile = a_cntl.cacheFex;
    this.table_name = null;
    this.a_fn_body = [];  //only for sorting
    this.a_all_body = null;
    this.a_filter_body = null;
    this.a_all_cont = null;
    this.a_filter_cont = null;
    // hardcoded false until server sends down setting
    this.isHFreezeEnabled = false && !b_ios;
    this.getColumnByName = IGetColumnByName;
	this.getColumnTitleByName = function (name,mytable)
		{
			var i;
			var title;
			for(i=0; i < this.a_cntl.a_cols.length; i++) {
				if(this.a_capt[i].deleted)
					continue;
				if(typeof this.a_cntl.a_cols[i].field == "undefined")
					continue;
				if((this.a_cntl.a_cols[i].field.toUpperCase() == name.toUpperCase())||
					(this.a_cntl.a_cols[i].name.toUpperCase() == name.toUpperCase())||
					(this.a_cntl.a_cols[i].alias.toUpperCase() == name.toUpperCase())) {
                    title = this.a_cntl.a_cols[i].dis;
                    if(title == "")
                    	title = this.a_cntl.a_cols[i].field;
                    return title;
                }
				if(this.a_cntl.a_cols[i].qualname)
					if(this.a_cntl.a_cols[i].qualname.toUpperCase() == name.toUpperCase()) {
                        title = this.a_cntl.a_cols[i].dis;
                        if(title == "")
                            title = this.a_cntl.a_cols[i].field;
                        return title;
                    }
				if(name.indexOf(" ")!=-1) {
					var fixSpaceName = name.split(" ");
					var j = 0;
					while (j < fixSpaceName.length) {
						if (fixSpaceName[j] == "") {
							fixSpaceName.splice(j, 1);
						} else
							j++;
					}
					fixSpaceName = fixSpaceName.join(" ");
					if ((this.a_cntl.a_cols[i].field.toUpperCase() == fixSpaceName.toUpperCase()) ||
						(this.a_cntl.a_cols[i].name.toUpperCase() == fixSpaceName.toUpperCase()) ||
						(this.a_cntl.a_cols[i].alias.toUpperCase() == fixSpaceName.toUpperCase()))
						return i;
					if (this.a_cntl.a_cols[i].qualname)
						if (this.a_cntl.a_cols[i].qualname.toUpperCase() == fixSpaceName.toUpperCase()) {
                            title = this.a_cntl.a_cols[i].dis;
                            if(title == "")
                                title = this.a_cntl.a_cols[i].field;
                            return title;
                        }
				}
			}
			return "";
		};
    this.tabwin=null;
    this.currTab=null;
    this.copyObject = ICopyObj;
    this.IBs = tstrings;
    this.acdLines = acdLines;
    this.org_capt = null;
    this.FullTotal = [];
    this.FullTotalMin = [];
    this.FullTotalMax = [];
    this.FullTotalDst = [];
    this.FullTotalCnt = [];
    this.FullAbsTotal = [];
    this.FullMissingCnt = [];
    this.FullTotalAvg   = [];
    this.FilterTotalAvg = [];
    this.FilterTotal = [];
    this.FilterTotalMin = [];
    this.FilterTotalMax = [];
    this.FilterTotalDst = [];
    this.FilterTotalCnt = [];
    this.FilterAbsTotal = [];
    this.filterChange = false;
    this.groupSort = false;
    this.getAllFilters = GetAllFilters;
    this.useMdiv = null;
    if(typeof(useMdiv)=='string') this.useMdiv=useMdiv;
    if(typeof(save_AR)=="function") this.save_AR = save_AR;
	this.removeWaitingCharts = function(dpos) {
		var ddpos = 0;
		if(typeof dpos != "undefined") {
			ddpos = dpos;
		}
		if(ddpos == 0) {
        if(this.gshowId) {
            window.clearTimeout(this.gshowId);
            ibiStd.HideWait();
            this.gshowId = null;
        }
        if(this.resizeChart) {
            if(this.resizeChartTimeoutId)
                window.clearTimeout(this.resizeChartTimeoutId);
            this.resizeChartTimeoutId = null;
            if ('addEventListener' in window) {
                window.removeEventListener("resize", this.resizeChart);
            } else {
                window.detachEvent("onresize",this.resizeChart);
            }
        }
        if(this.dhandle) {
				var ii;
				for (ii = 0; ii < this.dhandle.length; ii++)
					if (this.dhandle[ii])
						window.clearTimeout(this.dhandle[ii]);
				for (ii = 0; ii < this.dhandle2.length; ii++)
					if (this.dhandle2[ii])
						window.clearTimeout(this.dhandle2[ii]);
				this.dhandle = [];
				this.dhandle2 = [];
			}
		} else {
			if (this.dhandle) {
				if (this.dhandle[dpos])
					window.clearTimeout(this.dhandle[dpos]);
				if (this.dhandle2[dpos])
					window.clearTimeout(this.dhandle2[dpos]);
				this.dhandle[dpos] = null;
				this.dhandle2[dpos] = null;
			}
        }
    };
    this.reset=false;
    if((typeof(reset)=="undefined") || (reset<0)) {
        this.id = MyTable.length;
        this.filterChangedFunc = null;
        this.drillDownChangedFunc = null;
		this.showMenuFunc = null;
    } else {
        this.id = MyTable[reset].id;
        MyTable[reset].removeWaitingCharts();
        if(!dontRefresh) this.reset = true;
        this.chartinfo = MyTable[reset].chartinfo;
		delete this.chartinfo.saveable.org_ibiChart;
		delete this.tdgOrgChartType;
        if((MyTable[reset].chartinfo.parms) &&
            (MyTable[reset].chartinfo.parms._chart)){
            //this.chartinfo._chart = MyTable[reset].chartinfo._chart;
            //delete MyTable[reset]._chart;
            this.reset = false;
        }
        //this._chart = MyTable[reset]._chart;
        MyTable[reset].table_name = null;
        MyTable[reset].removeCallBack();
        MyTable[reset].deleted = true;
    }
    MyTable[this.id] = this;
    this.removeCallBack = function() {
        if(this.rCallBack) {
            if (this.IRreq) {
                this.IRreq.abort();
                if (typeof this.reqObj.cleanUp != "undefined")
                    this.reqObj.cleanUp();
            }
            delete this.reqObj;
            delete this.rCallBack;
            delete this.rCallBackArgs;
        }
        delete this.rHasCallBackCont;
        delete this.rCallBackCont;
    };
    this.destroy = function() {
        if((this.chartinfo.parms) &&
            (this.chartinfo.parms._chart)) {
                this.chartinfo.parms._chart.destroy();
        }
    };
    if(typeof(a_cntl.table_name)!='undefined')
        this.table_name = a_cntl.table_name;
    else
        this.table_name = "$ibi$table%"+this.id;
    this.pnode = pnode;
    this.grcCols = [];
    this.connectedReports=[];
 
    this.newEX=null;
    this.exSheet=null;
    this.exGraph=null;
    this.showNotes=false;
    this.hideNotesInd=false;
    this.haveFilters = false;
    this.newCacheStrFile = false;

    this.currSortCol = -1;
        //this.ttable = TTable;
        //this.resetTable = TTResetTable;
    this.n_fcol = null;
    this.s_fpat = '';
    this.s_light = '';
    this.a_index=[];
    this.a_index_d=[];
    this.a_marked=[];
    this.cont = '';
    this.n_p_by = 0;
    this.A_opt = [];
    this.gshow = function(){
        //dont do settimeout here, because controls wont get right filter values.
            var u = this;
            //this.gshowId = window.setTimeout(function(){
                    ibiGrid.show(false,u);
            //        u.gshowId = null;
            //    },100);
            };
    this.redrawCharts = false; 
    this.freezeAble = false;
        this.highest_level = 0;
    this.MI_FTV=[];
    this.side = 'r';
    this.getColumnStyle = IgetColumnStyle;
    this.getStyleNode = IgetStyleNode;
    this.getReportStyle = IgetReportStyle;
    this.getReportStyleNode = IgetReportStyleNode;
    this.getHrefNode =IgetHrefNode;
    this.getHrefNodeReal = IgetHrefNodeReal;
    this.setlevel  = ISetLevel;
    this.exeSort   = IExeSort;
    this.exePage   = IExePage;
    this.getFieldInfo = GetFieldInfo;
    this.getMoreData = IgetMoreData;
        this.getSortData = IgetSortData;
    this.sortneeded = false;

        this.internal = false;
    if(typeof(IExportRemote)!="undefined") this.exportRemote = IExportRemote;
    if(typeof(IExportHTML)!="undefined")this.exportHTML = IExportHTML;
    if(typeof(IExportCSV)!="undefined")this.exportCSV  = IExportCSV;
    if(typeof(IExportXML)!="undefined")this.exportXML  = IExportXML;
    if(typeof(IExportPDF)!="undefined")this.exportPDF  = IExportPDF;
    this.toggleStatus = IToggleStatus;
    this.getChartValues = IGetChartValues;
    this.doingFrCalc = false;
    this.resetactree = IResetAcTree;
    this.toggleAccordion = IToggleAccordion;    
    this.showsubHF = true;
    
    this.sortuniq =    ISortUniq;
    this.exeFilt   = IExeFilt;
    this.callFilt  = ICallFilt;
    this.callHigh  = ICallHigh;
    this.callFiltReal = ICallFiltReal;
    this.callSort  = ICallSort;
    this.attachForm = IAttach_form;
        this.filter_andor = 0;
    this.hierexpand = IHierExpand;
    this.hiercollapse = IHierCollapse;
    this.hierexpandall = IHierExpandAll;
    this.hiercollapseall = IHierCollapseAll;
	this.expandTitle = function(title) {
		var str=title;
		var o = title.split("{{");
		str = o[0];
		for(var i=1; i < o.length; i++) {
			var s = "";
			var l = o[i].split("}}");
			var ll = l[0].split("_");
			var prefix=ll[0]+"_"+ll[1];
			var field = ll[2];
			for(var j=3; j < ll.length; j++)
				field += "_"+ll[j]
			var f = this.getColumnByName(field);
			if(f!=-1) {
				s = this.IBs[this.a_cont[this.a_f_body[0][0]][f][DASTR]];
			}
			str += s;
			if(l.length>1)
				str += l[1];
		}
		return str;
	};

    this.filter_type = 0;
    this.ecwin = -1;
    this.gtwin = -1;
    this.ctwin = -1;
    this.ptwin = -1;
    this.useDropIcon = true;
 

    this.child = [];
    this.expand = IExpand;
    this.collapse = ICollapse;
        this.returnHideTable = TTreturnHideTable;
        this.expandAll = IExpandAll;
        this.collapseAll = ICollapseAll;


    this.changeColumnVisibility = IChangeColumnVisibility;
    this.a_sort = [];
    this.level = [];
    this.is_export = false;
    this.NotesToSet=[];
    this.saveNotesToSet = [];

    this.FirstNoprintColumn = -1;
    
    this.MySort = MySort;
    this.printnode = printnode;
    this.sort_data = Isort_data;
        
        this.a_col_filter = []; 
    this.filt = [];
        this.s_col_filter = []; 
    this.sfilt = [];
    this.c_col_filter = [];
    this.cfilt = [];
    this.ch_col_filter = []; 
    this.chfilt = [];
    this.tdg_filt = [];
    this.ap_col_filter = []; 
    this.apfilt = [];
        this.a_col_high = []; 
    this.high = [];
    this.highCondition = [];
    this.haveHighlight = false;
    if((typeof(reset)=="undefined") || (reset<0)) {
        this.c_filter_type=0;
        this.chartinfo = new Object();
        this.chartinfo.saveable = new Object();
        this.chartinfo.children = [];
        this.chartinfo.cfilt = [];
        this.chartinfo.c_col_filter = [];
    }
    this.togglevis = ITogglevis;
    this.togglevispct = ITogglevispct;
    this.togglecalc = IToggleCalc;
    this.maxFilterDropLines = 20;
    this.maxFilterOptions = 50000;

    this.setPaging = ISetPaging;
    this.aggregateFun = IAggregateFun;
    this.setAggregate = ISetAggregate;
    this.getUniqValues = IGetUniqValues;
    this.getAllUniqValues = IGetAllUniqValues;
    this.showMessage = showMessage;
    this.showBottomMenu = showBottomMenu;
    this.setpage = setpage;
 
    //this.rememberScroll = IRememberScroll;
    //this.freezeColumns = IFreezeColumns;
    this.clearSelection = IClearSelection;
    this.internal = false;
    this.saveStyles = [];
    this.saveHrefs = [];
    this.o_css = [];
    this.s_filthtml='';
    this.b_date=false;
    this.n_key = o_look.key || 0;
    this.selected_column = null;
    this.heading_split = false;
        this.footing_split = false;
    this.setHrefValues = IsetHrefValues;
    this.useCustomMenu = false;

    var numC = a_css.length;
    for (i=0; i<numC;i++) 
        this.o_css[a_css[i]] = o_look.css != null && o_look.css[a_css[i]] ? ' class="' + o_look.css[a_css[i]] + '"' : '';
    this.o_css.body = [];
    this.scroll_size = o_look.scroll.size ? o_look.scroll.size : [400,100];
    this.n_padding = o_look.params[0] || 0;
    this.n_spacing = o_look.params[1] || 0;
    this.n_border  = o_look.params[2] || 0;
    this.o_color = o_look.colors || {};
 
    var fsize = 8;
    if(b_ios) fsize = 16;
    
    this.o_paging = {
        's_pf' : '<span style="font-family:Arial;font-size: '+fsize+'pt;border: none; cursor: pointer; text-decoration: none;">'+arr_p+arr_p+'<\/span>',
        's_pp' : '<span style="font-family:Arial;font-size: '+fsize+'pt;border: none; cursor: pointer; text-decoration: none;">|'+arr_p+'&nbsp;<\/span>',
        's_pn' : '<span style="font-family:Arial;font-size: '+fsize+'pt;border: none; cursor: pointer; text-decoration: none;">&nbsp;'+arr_n+'|<\/span>',
        's_pl' : '<span style="font-family:Arial;font-size: '+fsize+'pt;border: none; cursor: pointer; text-decoration: none;">'+arr_n+arr_n+'<\/span>',
        's_tt' : ibiMsgStr['paglinetext'],
        'c' : 0
    };
    this.horizontal_scroll = -1;
    this.x_freeze_column = o_look.freeze_column;

    this.horizontal_scroll=-1;
    this.n_cols = a_capt.length;
    this.a_all_cont = a_cont;

    this.scale = 1;
    this.scaleSave = 1;
    this.midx=-1;
    this.mid2x=-1;


    this.n_rows_have = this.a_all_cont.length;
    this.n_rows_filter_have = 0;
    this.n_rows = this.a_cntl.NumRecords;

    this.o_paging.n = o_look.paging.by && o_look.paging.by > 0 ? o_look.paging.by : this.a_all_cont.length;
    if(this.a_cntl.hier) this.o_paging.n=999999;
    this.save_n_rows =  this.n_rows;
    this.save_o_paging_n = this.o_paging.n;
    this.o_look=[];
    this.o_look.css = [];
    this.o_look.css.body = [];
    this.o_look.styles = a_styles;
    this.a_capt_height = [];
 
    this.top_aggregate = false;
    this.bottom_aggregate = false;
    this.bykeys = null;
    this.first_by = -1;
    this.first_level = 0;
    this.bycount = [];
	this.a_cntl.enableNewGridBar = false;


    if(typeof(this.a_cntl.tableProps)!="undefined") {
        var js = {},js2;
        var settings;

        for(i=0; i < this.a_cntl.tableProps.length;i++) {
            try {
                js2 = eval('({' + this.a_cntl.tableProps[i].json + '})');
                js = ibiStd.mergeObject(js,js2);
            } catch (e) {

            }
        }
        this.tableJson = js;
        if(this.tableJson.styles)
            if(this.tableJson.styles.html)
                addJsonStyles(this.tableJson.styles.html);

		if(this.tableJson.strings)
			if(this.tableJson.strings.paglinetext)
				this.o_paging["s_tt"] = this.tableJson.strings.paglinetext;

        if(settings = this.tableJson.settings) {
            if(settings.compound) {
                if(settings.compound.arDisplayMode)
                    arDisplayMode = settings.compound.arDisplayMode;
                if(settings.compound.arAdaptiveOrientation) 
                    arAdaptiveOrientation = settings.compound.arAdaptiveOrientation.toLowerCase();
            }
            if(settings.enableNewGridBar) {
            	this.a_cntl.enableNewGridBar = true;
			}
        }
    }

    if(typeof(this.a_cntl.reportView)=='undefined') {
        if(this.a_cntl.isGraphRequest)
            this.a_cntl.reportView = REPORTTDG;
        else
            this.a_cntl.reportView = REPORTGRID;
    }
    var displayablebys = 0, nLevel = 0;
    for (i = 0; i < 33; i++) { this.bycount[i] = 0; }
    var non_noprint_col = -1;
    this.n_cols_print=0;
    for (i = 0; i < this.n_cols; i++) { 
        if((this.FirstNoprintColumn==-1)&&(!a_capt[i].noprint)) this.FirstNoprintColumn=i;
    }
    for (i = 0; i < this.n_cols; i++) {
        this.o_css.body[i] = !o_look.css || !o_look.css.body ? '' : 
            typeof(o_look.css.body) != 'object' ? o_look.css.body : 
                o_look.css.body[i] ? ' class="' + o_look.css.body[i] + '"' : '';
        this.o_look.css.body[i] = o_look.css.body[i];
        this.a_sel_capt[i]={'name': a_capt[i].name};
        this.a_capt[i] = {
            'name' : a_capt[i].name,
            'focCol' : a_capt[i].focCol,
            'format': a_capt[i].format?a_capt[i].format:'(A256)',
            'viscolor' : a_capt[i].viscolor,
            'vis' : ((a_capt[i].visualize)||(a_capt[i].vis))?true:false,
            'visOrig' : a_capt[i].visualize, // keep track of original visibility
            'vispct' : a_capt[i].vispct?a_capt[i].vispct:false,
            'isby' : a_capt[i].isby?true:false,
            'orow' : a_capt[i].orow ? a_capt[i].orow : 0,
            'orowLimit' : a_capt[i].orowLimit ? a_capt[i].orowLimit : 0,
            'orowByTotal' : a_capt[i].orowByTotal ? a_capt[i].orowByTotal : false,
            'ishier' : a_capt[i].ishier?true:false,
            'noprint' : a_capt[i].noprint?true:false,
            'abstotal' : 0,
            'postotal' : 0,
            'negtotal' : 0,
            'maxval' : 0,
            'b_ord' : 0,
            'issum' : false,
            'hascalc':false,
            'hasMultiDrill':false,
            'isTotal':a_capt[i].isTotal?true:false,
            'dataField': i,
            'orgCol': (typeof(a_capt[i].orgCol)=='undefined')?-1:a_capt[i].orgCol,
            'parent_by' : -1, 
            'parent_val' : null,
            'b_hide_filter' : a_capt[i].hide_filter,
            'hideable':a_capt[i].hideable,
            'level': (subtab) ? nLevel : a_capt[i].level,
            'SUM':a_capt[i].SUM?a_capt[i].SUM:0,
            'MIN':a_capt[i].MIN?a_capt[i].MIN:0,
            'MAX':a_capt[i].MAX?a_capt[i].MAX:0,
            'AVG':a_capt[i].AVG?a_capt[i].AVG:0,
            'COU':a_capt[i].COU?a_capt[i].COU:0,
            'DIS':a_capt[i].DIS?a_capt[i].DIS:0,
            'type' : a_capt[i].type,
            'popmenu' : '<div id="popid'+this.a_cntl.table_number+'_'+i+'"><\/div>',
//            'popmenu' : a_capt[i].popmenu,
            'haspro' : a_capt[i].haspro?a_capt[i].haspro:null,
			'b_hide' : ((a_capt[i].hide||a_capt[i].b_hide||a_capt[i].noprint)&&(!subtab)||(a_capt[i].isCompute && a_capt[i].computeText.substr(0,5)=="MAP__"))?true:false,
			'hide' : (a_capt[i].hide && !subtab)?true:false,
            'isCompute' : a_capt[i].isCompute?true:false,
            'isDefine' : a_capt[i].isDefine?true:false,
			'isTempDefine' : a_capt[i].isTempDefine?true:false,
            'isFilter' : a_capt[i].isFilter?true:false,
            'computeText':a_capt[i].computeText?a_capt[i].computeText:null,
            'aggType':a_capt[i].aggType?a_capt[i].aggType:null,
            'exp_hide' : a_capt[i].exphide
        };
        if (this.a_capt[i].isby) { ++nLevel; }
        if(typeof(a_capt[i].userFunc)!='undefined') {
            this.a_capt[i].userFunc = a_capt[i].userFunc;
            this.a_capt[i].userParm = a_capt[i].userParm;
        }
        if(this.a_capt[i].noprint) {
            this.a_capt[i].name = this.copyObject(a_capt[this.FirstNoprintColumn].name);
            var colorStr = "";
            if(this.a_capt[i].name.color!="") colorStr = "color:"+this.a_capt[i].name.color+";";
            var stylestr = ' style="'+colorStr+'font-size:'+this.a_capt[i].name.size+'pt';
            if(this.a_capt[i].font!='' && this.a_capt[i].name.font!='DEFAULT-PROPORTIONAL' &&
                this.a_capt[i].name.font!='DEFAULT-FIXED')
                stylestr+=';font-family:'+this.a_capt[i].name.font+';';
            stylestr +='"';
            if(this.a_capt[i].name.font=='DEFAULT-FIXED')
                this.a_capt[i].name.name = '<tt>'+a_cntl.a_cols[i].name+'<\/tt>';
            else
                this.a_capt[i].name.name = '<span'+stylestr+'>'+a_cntl.a_cols[i].name+'<\/span>';
        }
        if(!this.a_capt[i].noprint) non_noprint_col++;
        if(!this.a_capt[i].noprint) this.n_cols_print++;
        if(this.x_freeze_column==0) this.n_freeze_column = 0;
        else
        if(this.x_freeze_column==non_noprint_col) this.n_freeze_column = i;
        if(this.highest_level<this.a_capt[i].level) this.highest_level=this.a_capt[i].level;
        if(this.a_capt[i].SUM ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].MIN ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].MAX ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].AVG ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].COU ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].DIS ==2){this.a_capt[i].hascalc=true;this.bottom_aggregate = true;}
        if(this.a_capt[i].SUM ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].MIN ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].MAX ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].AVG ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].COU ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].DIS ==1){this.a_capt[i].hascalc=true;this.top_aggregate = true;}
        if(this.a_capt[i].hide)this.n_hid_rows++;
        if(this.a_capt[i].isby) {
            displayablebys++;
            if((this.first_by==-1)&&(!this.a_capt[i].noprint)) {
                this.first_by = i;
                this.first_level=this.a_capt[i].level;
            }
            if(this.bykeys==null) this.bykeys=[];
            this.bykeys[this.bykeys.length]={'column':i*1,'value':null,'noprint':this.a_capt[i].noprint,'subcalcs':false,'subcalcData':null};
        }
        var master = null;
        if(this.a_cntl.cacheOriginalMaster)
            master = this.a_cntl.cacheOriginalMaster;
        if(master)
            ibiReports.storeColumn(this.id,master,this.a_cntl.a_cols[i],this.a_capt[i]);
    }
	for (i = 0; i < this.n_cols; i++) {
		var style = this.getColumnStyle(i,0,0,"","",i,"NODE");
		if(style.computeScript)
			this.a_capt[i].computeScript = style.computeScript;
	}

    //add dummy column to keep track of original line;
	/*
    var dc = this.n_cols;
    this.a_capt[dc] = {'b_hide':true,'hide':true,'type':IBINUM,'noproint':true,'neverShow':true,'ignore':true,'isDefine':true};
   if(dc>0) {
        this.a_capt[dc].level = this.a_capt[dc - 1].level;
    }
    this.a_cntl.a_cols[dc]={'name':'ibi$rowcount','dis':'ibi$rowcount','alias':'ibi$rowcount','qualname':'ibi$rowcount','field':'ibi$rowcount'};
    this.n_cols++;
    var na_cont = [];
    for(i=0; i < a_cont.length;i++) {
        na_cont[i] = ibiStd.copyObject(a_cont[i]);
        na_cont[i][dc] = [i,i,i];
    }
    this.a_all_cont = na_cont;
*/
    if(this.first_by==-1) this.first_by = 0;
    if(this.bykeys && this.bykeys.length) {
        var cc=this.bykeys[this.bykeys.length-1].column;
        if((cc+1)<this.n_cols) 
            if(this.a_capt[cc].level==a_capt[cc+1].level) {
                this.a_capt[cc].issum=true;
                if(displayablebys<=1) { 
                    this.a_cntl.Accordion=false;
                    for (jj = 0; jj < this.n_cols; jj++) {
                        this.a_capt[jj].exp_hide=false;
                    }
                }
            }
    }
    if(this.a_cntl.hierarchy) 
        if(this.a_cntl.hierarchy.Expand) this.a_cntl.Accordion=false;
    this.AccordionIsOn = this.a_cntl.Accordion;
    var hparent = null;
    var hparlevel = 1;
    var parentid = 0;
    var llevel = -1;
    IinitBody(this);

    if((this.AccordionIsOn)||(this.a_cntl.bytoc)) {
        this.acdList = acdList;
            this.acdNode =  [];
        var al = acdList.length;
        for (i = 0; i < al; i++) { this.acdNode[acdList[i]] = false; }
    }
    this.sublevel = -1;
    var j, cb = 0;
    for (j = 0; j < this.n_cols; j++) {
        this.a_capt[j].parent_by=cb;
        if((this.a_capt[j].isby)&&(!this.a_capt[j].noprint)&&(!this.a_capt[j].issum)) cb=j;
    }
    if (this.a_cntl.subhead) {
        for (j = 0; j < this.a_cntl.subhead.length; j++) {
            jj=0;
            while(typeof(this.a_cntl.subhead[j][jj].byvalue)!="undefined") {
                if(this.a_cntl.subhead[j][jj].colnum>this.sublevel)
                    this.sublevel = this.a_cntl.subhead[j][jj].colnum;
                jj++;
            }
        }
    }
    if (this.a_cntl.skipline) {
        for (j = 0; j < this.a_cntl.skipline.length; j++) {
            jj=0;
            while(typeof(this.a_cntl.skipline[j][jj].byvalue)!="undefined") {
                if(this.a_cntl.skipline[j][jj].colnum>this.sublevel)
                    this.sublevel = this.a_cntl.skipline[j][jj].colnum;
                jj++;
            }
        }
    }

    if (this.a_cntl.subfoot) {
        for (j = 0; j < this.a_cntl.subfoot.length; j++) {
            jj=0;
            while(typeof(this.a_cntl.subfoot[j][jj].byvalue)!="undefined") {
                if(this.a_cntl.subfoot[j][jj].colnum>this.sublevel)
                    this.sublevel = this.a_cntl.subfoot[j][jj].colnum;
                jj++;
            }
        }
    }
	this.hasSubTotal = [];
	var slevel;
    if (this.a_cntl.subtotal) {
        for (j = 0; j < this.a_cntl.subtotal.length; j++) {
            jj=0;
			slevel = -1;
            while(typeof(this.a_cntl.subtotal[j][jj].byvalue)!="undefined") {
                if(this.a_cntl.subtotal[j][jj].colnum>this.sublevel)
                    this.sublevel = this.a_cntl.subtotal[j][jj].colnum;
				if(this.a_cntl.subtotal[j][jj].colnum>slevel)
					slevel = this.a_cntl.subtotal[j][jj].colnum;
                jj++;
            }
			if(slevel != -1)
				this.hasSubTotal[slevel-1] = true;
        }
    }

    var n_cc = 0;
    this.scroll_bar_width = 17;
    this.scrollLeft = 0;
    this.Gscroll_width = this.scroll_size - this.scroll_bar_width;
    if(this.AccordionIsOn) {
        this.calcType = 2;
        this.level[0]=1;

    }
    else this.calcType = 0;
    if (this.a_cntl.heading) {
        for (i = 0; i < this.a_cntl.heading.length; i++) {
            for (j = 0; j < this.a_cntl.heading[i].length; j++) {
                if(this.a_cntl.heading[i][j].colspan!='') this.heading_split=true;
            }
        }
    }
    if (this.a_cntl.tablehead) {
        for (i = 0; i < this.a_cntl.tablehead.length; i++) {
            for (j = 0; j < this.a_cntl.tablehead[i].length; j++) {
                if(this.a_cntl.tablehead[i][j].colspan!='') this.heading_split=true;
            }
        }
    }
    if (this.a_cntl.footing) {
        for (i = 0; i < this.a_cntl.footing.length; i++) {
            for (j = 0; j < this.a_cntl.footing[i].length; j++) {
                if(this.a_cntl.footing[i][j].colspan!='') this.footing_split=true;
            }
        }
    }
	if(typeof(this.a_cntl.buckets)!="undefined") {
		if(typeof(this.a_cntl.mapIndex)!="undefined") {
            for(i in this.a_cntl.buckets)
                for(j=0; j < this.a_cntl.buckets[i].length; j++)
                    this.a_cntl.buckets[i][j] = this.a_cntl.mapIndex[this.a_cntl.buckets[i][j]];
            if(this.a_cntl.vbuckets)
                for(i in this.a_cntl.vbuckets)
                    for(j=0; j < this.a_cntl.vbuckets[i].length; j++)
                        this.a_cntl.vbuckets[i][j] = this.a_cntl.mapIndex[this.a_cntl.vbuckets[i][j]];
        }
        var inBucket = {};
        for (i in this.a_cntl.buckets)
            for (j = 0; j < this.a_cntl.buckets[i].length; j++)
                inBucket[this.a_cntl.buckets[i][j]] = i;
        if (this.a_cntl.vbuckets)
            for (i in this.a_cntl.vbuckets)
                for (j = 0; j < this.a_cntl.vbuckets[i].length; j++)
                    inBucket[this.a_cntl.vbuckets[i][j]] = i;
        this.a_cntl.buckets['ACTIVE_NOTUSED'] = [];
        for(i=0; i < this.a_capt.length; i++) {
			if(typeof inBucket[i] == "undefined")
				this.a_cntl.buckets['ACTIVE_NOTUSED'][this.a_cntl.buckets['ACTIVE_NOTUSED'].length] = i;
		}
	}
    this.save_n_freeze_column = this.n_freeze_column;
    this.n_freeze_column_before_hide = this.n_freeze_column;
    this.save_n_freeze_column_before_hide =  this.n_freeze_column_before_hide;

    this.ru_a_capt = this.copyObject(a_capt);
    this.ru_o_look = this.copyObject(o_look);
    this.ru_a_cntl = this.copyObject(a_cntl);
    this.save_bottom_aggregate = this.bottom_aggregate;
    this.save_top_aggregate = this.top_aggregate;
    this.isRollUp = false;
    this.savesublevel = this.sublevel;
    if((typeof(saveARs)=='object')&&(saveARs!=null)) {
        this.n_freeze_column = saveARs.n_freeze_column;
        this.n_freeze_column_before_hide = saveARs.n_freeze_column_before_hide;
        this.n_rows = saveARs.n_rows;
        this.o_paging_n = saveARs.o_paging_n;
        this.o_paging_c = saveARs.o_paging_c;
        this.AccordionIsOn = saveARs.AccordionIsOn;
        this.a_sort = this.copyObject(saveARs.a_sort);
        this.top_aggregate = saveARs.top_aggregate;
        this.bottom_aggregate = saveARs.bottom_aggregate;
        this.calcType = saveARs.calcType;
        this.showsubHF = saveARs.showsubHF;
        this.groupSort = saveARs.groupSort;
        this.a_cntl.WindowDisplay = saveARs.WindowDisplay;
        if(this.a_sort) this.sortneeded = true;
        this.a_cntl.reportView = saveARs.reportView;
        if(saveARs.a_capt) {
            this.org_capt = this.a_capt;
            this.org_bykeys = this.bykeys;
            this.bykeys = this.copyObject(saveARs.bykeys);
            this.a_capt = this.copyObject(saveARs.a_capt);
            for (i = 0; i < this.org_capt.length; i++) {
                this.org_capt[i].new_pos = saveARs.a_capt_org[i].new_pos;
            }
            this.sublevel = saveARs.sublevel;
        }
        for (i = 0; i < this.a_capt.length; i++) {
			if((typeof saveARs.agg != "undefined")&&
				(typeof saveARs.agg[i] != "undefined")){
            this.a_capt[i].SUM = saveARs.agg[i].SUM;
            this.a_capt[i].MIN = saveARs.agg[i].MIN;
            this.a_capt[i].MAX = saveARs.agg[i].MAX;
            this.a_capt[i].AVG = saveARs.agg[i].AVG;
            this.a_capt[i].COU = saveARs.agg[i].COU;
            this.a_capt[i].DIS = saveARs.agg[i].DIS;
            this.a_capt[i].vispct = saveARs.agg[i].vispct;
            this.a_capt[i].haspro = saveARs.agg[i].haspro;
            this.a_capt[i].vis = saveARs.agg[i].vis;
            this.a_capt[i].b_hide = saveARs.agg[i].b_hide;

            }
        }
        this.a_col_filter = this.copyObject(saveARs.a_col_filter);
    }
    for (i = 0; i < this.a_cntl.style.length; i++) {
        if(this.a_cntl.style[i].indexOf(".m0out")>-1) this.useCustomMenu = true;
    }
    this.a_cntl.save_WindowDisplay = this.a_cntl.WindowDisplay;
    var col;
    if(this.a_cntl.cacheRecGet)this.maxCacheRecords = this.a_cntl.cacheRecGet*5;
    var tn = this.a_cntl.table_number;
    if((!subtab)&&(MDitems.length)) {
        if(typeof(MDitems[tn])=="undefined") MDitems[tn] = []; 
        for (jj = 0; jj < MDitems[tn].length; jj++)
            for (i = 0 ; i < MDitems[tn][jj].length; i++) {
                if(typeof(MDitems[tn][jj][i].col)!="undefined") {
                    if((MDitems[tn][jj][i].col==-1)||(MDitems[tn][jj][i].col==10003)) {
                        for (j = 0; j < this.a_capt.length; j++) {
                            this.a_capt[j].hasMultiDrill = true;
                            if(typeof this.ru_a_capt != "undefined")
                                this.ru_a_capt[j].hasMultiDrill = true;
                        }
                    } else
                    if(MDitems[tn][jj][i].col==10004) {
                        for (j = 0; j < this.a_capt.length; j++) {
                            if(this.a_capt[j].isby) {
                                this.a_capt[j].hasMultiDrill = true;
                                if(typeof this.ru_a_capt != "undefined")
                                    this.ru_a_capt[j].hasMultiDrill = true;
                            }
                        }
                    } else
                    if(MDitems[tn][jj][i].col==10005) {
                        for (j = 0; j < this.a_capt.length; j++) {
                            if(!this.a_capt[j].isby) {
                                this.a_capt[j].hasMultiDrill = true;
                                if(typeof this.ru_a_capt != "undefined")
                                    this.ru_a_capt[j].hasMultiDrill = true;
                            }
                        }
                    } else
                    if(MDitems[tn][jj][i].col>=0){
                        col = getRealColumn(this,MDitems[tn][jj][i].col-1);
                        if(col>-1) {
                            this.a_capt[col].hasMultiDrill = true;
                            if(typeof this.ru_a_capt != "undefined")
                            	this.ru_a_capt[col].hasMultiDrill = true;
                        }
                    }
                }
            }
    }
    if(this.a_cntl.dataReport) {
            var dataReportIndex = getReportByName(this.a_cntl.dataReport);
            MyTable[dataReportIndex].dataReportList[this.id] = this;
    }

	if(this.a_cntl.fullfex) {
		var ff = this.a_cntl.fullfex;
		if(typeof ff == "object")
			ff = ff.join('');
        this.fexParts = splitUpOriginalFex(ff);
    }

    if((this.a_cntl.cacheMode) && (this.a_cntl.arcacheInclude)) {
        IwriteInclude(this.id);
    }
    //Was getting the incorrect max number of records.
    if((this.a_cntl.cacheMode) && (this.a_cntl.cacheWriteMode==4)) {
        this.a_cntl.NumRecords = -9;
        this.n_rows = -9;
        var getmaxrows = true;
        if(this.a_cntl.table_div)
            if(this.a_cntl.table_div.hidden)
                getmaxrows = false;
        if(this.a_cntl.isGraphRequest)
            getmaxrows = false;
        if(getmaxrows)
            InumRecords(this.id);
        //IgetCacheFormat(this.id);
    }
    if(b_pda || b_ios) this.a_cntl.WindowDisplay = 'tab';
    var af = this.getAllFilters();
    if(!this.a_cntl.forDataDisplay)
        if(af.length) 
            this.filterChange = true;
    if(this.reset) {
        //ibiGrid.show(false,this);
        this.reset = false;
        ibiGrid.go(this);     
    } else
    if(subtab) this.isRollUp = true;
    else ibiGrid.go(this);

	var useActiveTotals = false;
	if(this.tableJson)
		if(typeof this.tableJson.settings != "undefined")
		    if(this.tableJson.settings.useActiveTotals)
			    useActiveTotals = true;

	if(useActiveTotals && (this.a_cntl.subtotal || this.a_cntl.grandtotal || this.a_cntl.total)) {
		var win = ibiEditTools.DoGridTool(this.id,true);
		for(i=0; i < this.a_capt.length; i++)
			if(this.a_capt[i].isby) {
				ibiEditTools.Gt_sortCol(win,this.id,i,"c",i);
				if(this.hasSubTotal[i])
					ibiEditTools.Gt_changeSubCalc(win,this.id,i,true);
				if((this.a_capt[i].orow == arConstants.OROW_LOWEST) ||
					(this.a_capt[i].orow == arConstants.OROW_LOW_NOPR))
					ibiEditTools.Gt_changesort(win,this.id,i,0);
				else
					ibiEditTools.Gt_changesort(win,this.id,i,1);
			} else {
				var tAggType = "SUM";
				if(this.a_cntl.subop) {
					var tField = i - 2;
					switch (this.a_cntl.subop[0][tField]) {
						case 1 : tAggType = "SUM"; break;
                        case 2 : tAggType = "AVG"; break;
                        case 3 : tAggType = "MAX"; break;
                        case 4 : tAggType = "MIN"; break;
                        case 5 : tAggType = "FST"; break;
                        case 6 : tAggType = "LST"; break;
                        case 7 : tAggType = "COU"; break;
                        case 8 : tAggType = "ASQ"; break;
					}
				}
				ibiEditTools.Gt_changeAgg(win,this.id,i,tAggType);
			}
		ibiEditTools.Gt_toggleSortGroup(win,this.id,true);
		ibiEditTools.Gt_dogrid(win,this.id);
	}

	this.restore_a_capt = this.copyObject(this.a_capt);
	this.restore_o_look = this.copyObject(this.o_look);
	this.restore_a_cntl = this.copyObject(this.a_cntl);
	this.restore_ru_a_capt = this.copyObject(this.ru_a_capt);
	this.restore_ru_o_look = this.copyObject(this.ru_o_look);
	this.restore_ru_a_cntl = this.copyObject(this.ru_a_cntl);

	this.getColumnObjById = function (col)
    {
        var i;
        obj = null;
        for(i=0; i < this.a_cntl.a_cols.length; i++) {
            if(this.a_capt[i].dataField == col) {
               obj = {
               	'capt':this.a_capt[i],
				   'col': this.a_cntl.a_cols[i]
			   }
            }
        }
        return obj;
    };

	this.addColumn = function(columnName,columnTitle,columnType,columnDataField,updateColumn) {
		var title = columnTitle;
		var i;
		var cp = this.a_capt.length;
		var df = this.a_capt.length;
		var updating = false;
		if(typeof updateColumn != "undefined") {
			updating = true;
			cp = updateColumn;
		}

		if(typeof columnDataField != "undefined")
			df = columnDataField;
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
		if(!updating) {
            var level = 0;
            if(this.a_capt.length) {
                level = this.a_capt[cp-1].level;
                if(this.a_capt[cp-1].isby) level++;
            }
            this.a_capt[cp] = ibiStd.copyObject(this.a_capt[cp-1]);
            delete this.a_capt[cp].computeText;
            delete this.a_capt[cp].origDataField;
            this.a_capt[cp].dataField = df;
            this.a_capt[cp].level = level;
            this.a_capt[cp].addedField = true;
            this.a_capt[cp].popmenu ='<div id="popid'+this.a_cntl.table_number+'_'+cp+'"><\/div>';
            this.n_cols++;
            this.a_cntl.MP_COL_COUNT = df;
            if(this.org_capt) {
                var ocp = this.org_capt.length;
                this.org_capt[ocp] = ibiStd.copyObject(this.a_capt[cp]);
                this.org_capt[ocp].new_pos = cp;
            }
        }

         this.a_capt[cp].title = title;
         this.a_capt[cp].format = ft;
         this.a_capt[cp].type = columnType;
         this.a_capt[cp].name.name = '<tt>'+title+'<\/tt>';
		this.a_cntl.a_cols[cp]={'name':columnName,'dis':title,'field':columnName,'alias':columnName};
		if(this.org_capt)
            for(i=0; i < this.org_capt.length; i++) {
                if(this.org_capt[i].new_pos == cp) {
                    this.org_capt[i].title = title;
                    this.org_capt[i].format = ft;
                    this.org_capt[i].type = columnType;
                    this.org_capt[i].name.name = '<tt>'+title+'<\/tt>';
                    break
                }
            }

		return {'capt':this.a_capt[cp],
			'col': this.a_cntl.a_cols[cp]
		};
 	};

	this.initBody = IinitBody;
}

function IResetAcTree()
{

}

 
function IClearSelection(){
    var i, o_right, o_left;
    var al = this.a_all_body.length;
    for (i=0;i<al;i++)
        if(typeof(this.a_all_body[i])!='undefined')
            //if(this.a_all_body[i][1] == 1)
                this.a_all_body[i][1] = 0;
    if(this.a_filter_body!=null) {
        al = this.a_filter_body.length;
        for (i=0;i<al;i++)
            if(typeof(this.a_filter_body[i])!='undefined')
                //if(this.a_filter_body[i][1] == 1)
                    this.a_filter_body[i][1] = 0;
    }
}

function showMessage(lmsg,type) {
    var msgWindow;
    var d = new Date();
    var id = this.id;
    var msg = '<span style="">'+d.toString()+'<\/span><br>';
    var messageContainer = document.getElementById("MAINTABLE_messageContainer"+id);

    var lmytable = this;
    if(this.useMdiv == "ibi$dummy$div") {
        for(var i=0; i < MyTable.length; i++) {
			if(MyTable[i].deleted)
				continue;
            if(MyTable[i].useMdiv != "ibi$dummy$div") {
                id = MyTable[i].id;
                lmytable = MyTable[i];
                msg += '<span style="">from report: '+lmytable.table_name+'<\/span><br>';
            }
        }
    }
    msg += '<br>'+lmsg;

    if(!messageContainer) {
        lmytable.showBottomMenu(true);
        messageContainer = document.getElementById("MAINTABLE_messageContainer"+id);
    }
    if(!messageContainer)
        return;

    var sizeContainer = messageContainer;

    if(lmytable.useMdiv)
        sizeContainer = document.getElementById(lmytable.useMdiv);

    var winHeight,winWidth;

    winHeight = sizeContainer.offsetHeight;
    winWidth = sizeContainer.offsetWidth;

    if(winHeight == 0)
        winHeight += sizeContainer.scrollHeight;
    if(winWidth == 0)
        winWidth += sizeContainer.scrollWidth;

    var closeMsg = '<div onclick="mshowMessage('+id+')" style="cursor:pointer;background-color:gray;position:absolute;top:20px;border:0px;left:'+(winWidth-50)+'px;">'+ibiSkin.clsicon+'<\/div>';
    if(!lmytable.messageLog) {
        lmytable.messageLog = '';
    }
    var vmsg = '<table border="0" width="100%"><tr><td width="50"><span style="float:left;width:25px;">&nbsp;<\/span><\/td>';
    switch(type) {
        case 'error':
            vmsg += '<td><div style="overflow-x:auto;opacity:.8;border-color:darkred;border-style:solid;border-width:1px;padding:10px;background-color: #F9E8E8;color:black;">'+msg+'<\/div><\/td>';
            break;
        case 'info':
            vmsg += '<td><div style="overflow-x:auto;opacity:.8;border-color:lightgray;border-style:solid;border-width:1px;padding:10px;background-color: white;color:black;">'+msg+'<\/div><\/td>';
            break;
        case 'trace':
            vmsg += '<td><div style="overflow-x:auto;opacity:.8;border-color:yellowgreen;border-style:solid;border-width:1px;padding:10px;background-color: #FAF7DA;color:black;">'+msg+'<\/div><\/td>';
            break;
        default:
            vmsg += '<td><div style="overflow-x:auto;opacity:.8;border-color:lightgray;border-style:solid;border-width:1px;padding:10px;background-color: white;color:black;">'+msg+'<\/div><\/td>';
    }
    vmsg += '<td width="50"><span style="float:left;width:25px;">&nbsp;<\/span><\/td><\/tr><\/table><br>';
    if(lmsg!='')
        ibiStd.setLogMessage(vmsg,lmytable.id);
        //lmytable.messageLog += vmsg;

    messageContainer.innerHTML = '<div style="background-color: white; opacity: .6;position: absolute; top: 0px;left: 0px;width:'+winWidth+'px;height: '+winHeight+'px;"></div>'+
        '<div style="overflow-y:auto;overflow-x:hidden;position: absolute;top:0px;left:0px;width:'+winWidth+'px ;height: '+winHeight+'px;" id="MAINTABLE_messageContainer_text'+id+'"></div>'+
        '<div style="position: absolute;top:0px;left:0px;" id="MAINTABLE_messageContainer_menu'+id+'"></div>';
    var mtext = document.getElementById("MAINTABLE_messageContainer_text"+id);
    mtext.innerHTML = ibiStd.getLogMessage(lmytable.id);
    var mmenu = document.getElementById("MAINTABLE_messageContainer_menu"+id);
    mmenu.innerHTML = closeMsg;
    showMenuWindow(lmytable, "message");
    }

function showChartFilters(id){
    ibiFilter.showFilterHolder();
}

function showMenuWindow(report,which){
    var reportContainer = document.getElementById("MAINTABLE_reportContainer"+report.id);
    var messageContainer = document.getElementById("MAINTABLE_messageContainer"+report.id);
    reportContainer.style.zIndex = -1;
    messageContainer.style.zIndex = -1;
    if(which=="message")
        messageContainer.style.zIndex = 900;
    if(which=="report")
        reportContainer.style.zIndex = 900;
}


function showBottomMenu(noMenu){
    var rootContainer = document.getElementById("MAINTABLE_"+this.id);
    var menuContainer = document.getElementById("MAINTABLE_menuContainer"+this.id);
    var menuContainerA = document.getElementById("MAINTABLE_menuContainerA"+this.id);
    var menuContainerS = document.getElementById("MAINTABLE_menuContainerS"+this.id);
    var reportContainer = document.getElementById("MAINTABLE_reportContainer"+this.id);
    var messageContainer = document.getElementById("MAINTABLE_messageContainer"+this.id);
    var sizeContainer = rootContainer;
    var mytable = getMyTable(this.id);
    var pn = getPn(-1,this.id);
    if(mytable.useMdiv)
        sizeContainer = document.getElementById(mytable.useMdiv);
    var m;
    var winHeight = window.innerHeight || document.documentElement.offsetHeight,
        winWidth = window.innerWidth || document.documentElement.offsetWidth;

    var _resizeMenu = function() {
        var reDrawChart = false;
        var winHeight = window.innerHeight || document.documentElement.offsetHeight,
            winWidth = window.innerWidth || document.documentElement.offsetWidth;
        var rootContainer = document.getElementById("MAINTABLE_"+mytable.id);
        var menuContainer = document.getElementById("MAINTABLE_menuContainer"+mytable.id);
        var menuContainerA = document.getElementById("MAINTABLE_menuContainerA"+mytable.id);
        var menuContainerS = document.getElementById("MAINTABLE_menuContainerS"+mytable.id);
        var reportContainer = document.getElementById("MAINTABLE_reportContainer"+mytable.id);
        var messageContainer = document.getElementById("MAINTABLE_messageContainer"+mytable.id);
        var sizeContainer = rootContainer;
        if(mytable.useMdiv)
            sizeContainer = document.getElementById(mytable.useMdiv);

        winHeight = sizeContainer.offsetHeight;
        winWidth = sizeContainer.offsetWidth;

        if(winHeight == 0)
            winHeight = sizeContainer.scrollHeight;
        if(winWidth == 0)
            winWidth = sizeContainer.scrollWidth;

        reportContainer.style.width = winWidth + "px";
        reportContainer.style.height = winHeight+"px";
        reportContainer.style.overflow = "auto";

        messageContainer.style.width = winWidth + "px";
        messageContainer.style.height = winHeight+"px";

        //menuContainer.style.top = (winHeight-30)+"px";
		    menuContainer.style.bottom = "0px";
        //menuContainer.style.width = winWidth + "px";
        menuContainer.style.left = winWidth - (menuContainerA.offsetWidth+menuContainerS.offsetWidth)+'px';
        if(messageContainer.style.zIndex != -1)
        mytable.showMessage("");

    };

    if(rootContainer){
        winHeight = sizeContainer.offsetHeight;
        winWidth = sizeContainer.offsetWidth;

        if(winHeight == 0)
            winHeight += sizeContainer.scrollHeight;
        if(winWidth==0)
            winWidth += sizeContainer.scrollWidth;
        if(!menuContainer) {
            menuContainer = document.createElement("div");
            if(b_ie)
               // menuContainer.style.setAttribute('cssText', "position:absolute;top:"+(winHeight-30)+"px;border:0px;z-index:999;", 0);
                menuContainer.style.setAttribute('cssText', "position:absolute;bottom:0px;border:0px;z-index:999;", 0);
            else
               // menuContainer.setAttribute('style',"position:absolute;top:"+(winHeight-30)+"px;border:0px;z-index:999;");
                menuContainer.setAttribute('style',"position:absolute;bottom:0px;border:0px;z-index:999;");
            menuContainer.setAttribute("id","MAINTABLE_menuContainer"+this.id);
            menuContainer.innerHTML = '<div style="float:right;"><table border="0" cellspacing="0" cellpadding="0"><tr>'+
                '<td><div id="MAINTABLE_menuContainerA'+this.id+'"></div><\/td>'+
                '<td><div id="MAINTABLE_menuContainerS'+this.id+'"></div><\/td>'+
                '<\/tr><\/table><\/div>';
            rootContainer.appendChild(menuContainer);
            menuContainerA = document.getElementById("MAINTABLE_menuContainerA"+this.id);
            menuContainerS = document.getElementById("MAINTABLE_menuContainerS"+this.id);
            //menuContainer.style.width = winWidth + "px";
        }
        if(!reportContainer) {
            reportContainer = document.createElement("div");
            if(b_ie)
                reportContainer.style.setAttribute('cssText',"position:absolute;top:0px;left:0px;width:"+winWidth+"px;height:"+winHeight+"px;border:0px;z-index:-1;background-color:white;", 0);
            else
                reportContainer.setAttribute('style',"position:absolute;top:0px;left:0px;width:"+winWidth+"px;height:"+winHeight+"px;border:0px;z-index:-1;background-color:white;");
            reportContainer.setAttribute("id","MAINTABLE_reportContainer"+this.id);
            rootContainer.appendChild(reportContainer);

            messageContainer = document.createElement("div");
            if(b_ie)
                messageContainer.style.setAttribute('cssText',"position:absolute;top:0px;left:0px;width:"+winWidth+"px;height:"+winHeight+"px;border:0px;z-index:-1;background-color:transparent;", 0);
            else
                messageContainer.setAttribute('style',"position:absolute;top:0px;left:0px;width:"+winWidth+"px;height:"+winHeight+"px;border:0px;z-index:-1;background-color:transparent;");
            messageContainer.setAttribute("id","MAINTABLE_messageContainer"+this.id);
            rootContainer.appendChild(messageContainer);

            mytable.resizeMenu = function() {
                if(mytable.deleted)
                    return;
                window.clearTimeout(mytable.resizeMenuTimeoutId);
                mytable.resizeMenuTimeoutId = window.setTimeout(function(){_resizeMenu();}, 1000);
            }; // end .resizeChart()

            if ('addEventListener' in window) {
                window.addEventListener("resize", mytable.resizeMenu, false);
            } else {
                window.attachEvent("onresize", mytable.resizeMenu);
            }
            reportContainer.style.width = winWidth + "px";
            reportContainer.style.height = winHeight+"px";
            reportContainer.style.overflow = "auto";

        }

        menuContainerA.style.display = "none";
        menuContainerA.innerHTML = '<table><tr>'+
            '<td valign="BOTTOM" align="RIGHT" span><span title="'+ibiMsgStr["showData"]+'" style="cursor:pointer;" onclick="mshowReport('+this.id+')">'+ibiSkin.roll1icon+'<\/span><\/td>'+
            '<td valign="BOTTOM" align="RIGHT" span><span title="'+ibiMsgStr["rso"]+'" style="cursor:pointer;" onclick="mresetDashboard('+this.id+')">'+ibiSkin.initchart+'<\/span><\/td>'+
            ((ibiCompound.chartFilters.length==0)?'':''+
                '<td valign="BOTTOM" align="RIGHT" span><span title="'+ibiMsgStr["untcflt"]+'" style="cursor:pointer;" onclick="ibiChart.undoFilter('+this.id+')">'+ibiSkin.pvicon1+'<\/span><\/td>'+
                '<td valign="BOTTOM" align="RIGHT" span><span title="'+ibiMsgStr["crtcflt"]+'" style="cursor:pointer;" onclick="ibiChart.removeFilter()">'+ibiSkin.cflticon+'<\/span><\/td>')+
            '<\/tr><\/table>';
        menuContainerS.innerHTML = '<div style="background-color:#c0c0c0;cursor:pointer;" onclick="toggleBottomMenu('+this.id+')">'+ibiSkin.pvicon6+'<\/div>';
        menuContainerS.style.display = "block";
        if(noMenu)
            menuContainerS.style.display = "none";
        menuContainer.style.left = winWidth - (menuContainerA.offsetWidth+menuContainerS.offsetWidth)+'px';;
    }
}

function mshowChartFilters(id) {
    showChartFilters(id);
    return;
    ibiChart.removeFilter();
}


function toggleBottomMenu(id) {
    var winHeight,    winWidth;
    var rootContainer = document.getElementById("MAINTABLE_"+id);
    var sizeContainer = rootContainer;
    var menuContainer = document.getElementById("MAINTABLE_menuContainer"+id);
    var menuContainerA = document.getElementById("MAINTABLE_menuContainerA"+id);
    var menuContainerS = document.getElementById("MAINTABLE_menuContainerS"+id);
    winHeight = sizeContainer.offsetHeight;
    winWidth = sizeContainer.offsetWidth;

    if(winHeight == 0)
        winHeight = sizeContainer.scrollHeight;
    if(winWidth == 0)
        winWidth = sizeContainer.scrollWidth;
    if(menuContainerA) {
        if(menuContainerA.style.display == "none")
            menuContainerA.style.display = "block";
        else
            menuContainerA.style.display = "none";
    }
    menuContainer.style.left = winWidth - (menuContainerA.offsetWidth+menuContainerS.offsetWidth)+'px';
}

function mresetDashboard(id) {
    var i, j;

    for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
        if (typeof(ibiCompound.drawObjectsList[i].defaultValues) != "undefined") {
            if (ibiCompound.drawObjectsList[i].defaultValues == null)
                ibiCompound.drawObjectsList[i].values = null;
            else {
                ibiCompound.drawObjectsList[i].values = [];
                for (j = 0; j < ibiCompound.drawObjectsList[i].defaultValues.length; j++)
                    ibiCompound.drawObjectsList[i].values[j] = ibiCompound.drawObjectsList[i].defaultValues[j];
            }
            if(ibiCompound.drawObjectsList[i].type == "slider") {
                ibiCompound.drawObjectsList[i].selectedMin = null;
                ibiCompound.drawObjectsList[i].selectedMax = null;
			}
            ibiCompound.drawObjectsList[i].refresh(false);
        }
    }
	//for (i = 0; i < MyTable.length; i++) {
        ibiChart.removeFilter();
	//}
    for (i = 0; i < MyTable.length; i++) {
		if(MyTable[i].deleted)
			continue;
		var saveAutoFit = MyTable[i].a_cntl.autoFit;
        MyTable[i].o_paging.c = 0;
        MyTable[i].filterChange = true;
		MyTable[i].a_capt = MyTable[i].copyObject(MyTable[i].restore_a_capt);
		MyTable[i].o_look = MyTable[i].copyObject(MyTable[i].restore_o_look);
		MyTable[i].a_cntl = MyTable[i].copyObject(MyTable[i].restore_a_cntl);
		MyTable[i].ru_a_capt = MyTable[i].copyObject(MyTable[i].restore_ru_a_capt);
		MyTable[i].ru_o_look = MyTable[i].copyObject(MyTable[i].restore_ru_o_look);
		MyTable[i].ru_a_cntl = MyTable[i].copyObject(MyTable[i].restore_ru_a_cntl);
        MyTable[i].a_cntl.autoFit = saveAutoFit;
		delete MyTable[i].swapFieldFirstCall;
		delete MyTable[i].swapFieldOriginal;
		delete MyTable[i].overrideToolTip;
    }
	for (i = 0; i < MyTable.length; i++) {
		if (MyTable[i].deleted)
			continue;
        MyTable[i].gshow();
    }
}

function mshowMessage(id) {
    var mytable = getMyTable(id);
    if(mytable) {
        var container = document.getElementById("MAINTABLE_messageContainer"+id);
        if(container.style.zIndex == -1)
            showMenuWindow(mytable,"message");
        else
            showMenuWindow(mytable,"none");
    }
}

function mshowReport(id,dontSwitch)
{
    var mytable = getMyTable(id);
    var winHeight,    winWidth;
    var rootContainer = document.getElementById("MAINTABLE_"+id);
    var sizeContainer = rootContainer;
    winHeight = sizeContainer.clientHeight;
    winWidth = sizeContainer.clientWidth;

    if(winHeight == 0)
        winHeight = sizeContainer.scrollHeight;
    if(winWidth == 0)
        winWidth = sizeContainer.scrollWidth;
    if(mytable) {
        if(typeof(mytable.ar)=="undefined")
            mytable.ar = new activeReport();
        var container = document.getElementById("MAINTABLE_reportContainer"+id);
        container.style.overflow = "auto";
        container.style.width = winWidth+'px';
        container.style.height = winHeight+'px';
        if(container) {
            if((container.style.zIndex == -1)||(dontSwitch)) {
                if(!dontSwitch)
                showMenuWindow(mytable,"report")
                if(!mytable.showReportRendered) {
                    var json = {'reports': [
                        {}
                    ]};

                    var saveLayoutObjects = LayoutObjects;
                    var saveLayoutSection = LayoutSection;
                    var saveDrawObjectsActive = ibiCompound.drawObjectsActive;
                    ibiCompound.drawObjectsActive = [];
                    LayoutObjects = [];
                    LayoutSection = [];
                    json.reports[0].t_T_capt = ibiStd.copyObject(mytable.o_look.styles);

                    //json.reports[0].T_capt = ibiStd.copyObject(mytable.save_a_capt);
                    if(mytable.pn) {
                        json.reports[0].T_capt = ibiStd.copyObject(mytable.pn.parms.tcapt);
                        json.reports[0].T_cont = ibiStd.copyObject(mytable.pn.parms.tcont);
                        json.reports[0].T_look = ibiStd.copyObject(mytable.pn.parms.tlook );
                        json.reports[0].T_cntl = ibiStd.copyObject(mytable.pn.parms.tcntl);
                    } else {
                        json.reports[0].T_capt = ibiStd.copyObject(mytable.ru_a_capt);
                        json.reports[0].T_cont = ibiStd.copyObject(mytable.a_all_cont);
                        json.reports[0].T_look = ibiStd.copyObject(mytable.ru_o_look);
                        json.reports[0].T_cntl = ibiStd.copyObject(mytable.ru_a_cntl);
						json.reports[0].T_cntl.a_cols.splice(mytable.restore_a_capt.length, (json.reports[0].T_cntl.a_cols.length - mytable.restore_a_capt.length));
						json.reports[0].T_capt.splice(mytable.restore_a_capt.length, (json.reports[0].T_capt.length - mytable.restore_a_capt.length));
                    }
                    delete json.reports[0].T_cntl.heading;
                    delete json.reports[0].T_cntl.footing;
                    delete json.reports[0].T_cntl.mapIndex; // p174158: original server mapIndex not needed
                    json.reports[0].T_cntl.table_name = mytable.table_name+'_sr';
                    json.reports[0].T_cntl.graphLook = "GRID";
                    json.reports[0].T_cntl.forDataDisplay = true;
                    delete json.reports[0].T_cntl.cacheMode;
                    delete json.reports[0].T_cntl.cacheWriteMode;
                    delete json.reports[0].T_cntl.cacheFex;
                    json.reports[0].T_cntl.table_div = {};
                    json.reports[0].T_cntl.table_div.position = "absolute";
                    json.reports[0].T_cntl.table_div.width = winWidth-4;
                    json.reports[0].T_cntl.table_div.height = winHeight-4;
                    json.reports[0].T_cntl.table_div.top = 0;
                    json.reports[0].T_cntl.table_div.left = 0;
                    json.reports[0].T_cntl.gridForChartData = true;
                    json.reports[0].ARstrings = ibiStd.copyObject(mytable.IBs);
                    json.reports[0].LayoutObjects = [];
                    json.reports[0].LayoutSection = [];
                    mytable.menuReporthandle = mytable.ar.addJsonReport(json, container);
                    mytable.showReportRendered = true;
                    mytable.haveFilters = false;
                    LayoutObjects = saveLayoutObjects;
                    LayoutSection = saveLayoutSection;
                    ibiCompound.drawObjectsActive = saveDrawObjectsActive;
                }
                else {
                    //mytable.menuReporthandle._reports[0].gshow();
                }
            } else
                showMenuWindow(mytable,"none");
        }
    }
}

function IGetOriginalDataField(captElement) {
    return (typeof captElement.origDataField === 'undefined')
           ? captElement.dataField : captElement.origDataField;
}


function IGetDataField(capt,field)
{
    for (var i = 0; i < capt.length; i++) {
        if (IGetOriginalDataField(capt[i]) == field) { return i; }
    }
    return -1;
}

function IChangeColumnVisibility(n_col, b_hide, istree, hidearray){
    var i, numCols, numUnhidden, refreeze = false;
    var in_col = n_col;
    var arrayHidden = hidearray || [];

    if (in_col != -1) { in_col = IGetDataField(this.a_capt,n_col); }

    if(!istree) {
        if (in_col == -1 && !b_hide){
            numUnhidden = 0;
            for (i = 0, numCols = this.n_cols; i < numCols; i++) {
                if (arrayHidden[i]) { 
                    this.a_capt[i].b_hide = false;
                    ++numUnhidden;
                }
            }
            this.n_hid_rows -= numUnhidden;
            this.n_freeze_column = this.n_freeze_column_before_hide;
            refreeze = true;
        }else{
            refreeze = true;
            if(!this.a_capt[in_col].b_hide && b_hide) this.n_hid_rows++;
            else if(this.a_capt[in_col].b_hide && !b_hide) this.n_hid_rows--;
            this.a_capt[in_col].b_hide = b_hide;
        }
        this.hide = true;
        if(refreeze) 
            ibiGrid.freezeColumns(this.id,this.n_freeze_column);
        this.hide = false;
        if(!this.internal) ibiGrid.show(false,this);
    } else 
        this.a_capt[in_col].exp_hide = b_hide;
}
 
 
function ISetAggregate(n_col,s_type,topOrbot,noshow){
    var i;
    var noneset = 1;

    if(n_col == -1){
        if(typeof(s_type)=="undefined") {
            for(i=0;i<this.n_cols;i++){
                this.a_capt[i].SUM = 0;
                this.a_capt[i].MIN = 0;
                this.a_capt[i].MAX = 0;
                this.a_capt[i].AVG = 0;    
                this.a_capt[i].COU = 0;
                this.a_capt[i].DIS = 0;
             // for(var i=0;i<this.n_cols;i++)
                this.a_capt[i].hascalc=false;
            }
            this.top_aggregate = false;
            this.bottom_aggregate = false;
            if(!noshow)ibiGrid.show(false,this);
            return;
           } 
    }
    this.a_capt[n_col].SUM = 0;
    this.a_capt[n_col].MIN = 0;
    this.a_capt[n_col].MAX = 0;
    this.a_capt[n_col].AVG = 0;
    this.a_capt[n_col].COU = 0;
    this.a_capt[n_col].DIS = 0;
    this.a_capt[n_col].hascalc = false;
    switch(s_type){
        case 'SUM':
            this.a_capt[n_col].SUM = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
        case 'MIN':
            this.a_capt[n_col].MIN = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
        case 'MAX':
            this.a_capt[n_col].MAX = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
        case 'COU':
            this.a_capt[n_col].COU = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
        case 'DIS':
            this.a_capt[n_col].DIS = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
        case 'AVG':
            this.a_capt[n_col].AVG = topOrbot;
            this.a_capt[n_col].hascalc=true;
        break;
    }
    if (this.bykeys) {
        for (i = 0; i < this.bykeys.length; i++) { this.bykeys[i].subcalcData = null; }
    }
    var hascalc = false;
    for (i = 0; i < this.n_cols; i++) {
        if(this.a_capt[i].hascalc) hascalc=true;
    }

    if(hascalc) {
        if (topOrbot==1) { this.top_aggregate = true; }
        else if (topOrbot==2) { this.bottom_aggregate = true; }
    } else {
        this.top_aggregate = false;
        this.bottom_aggregate = false;
    }
    if(!noshow)ibiGrid.show(false,this);
}
 
function IAggregateFun(s_type,in_col){
    var u,vst,vsInt,vstInt,s,what,p,ps,pst,valf;
    var i,j=0,n_sum = 0,n_min = null,n_max = null,n_asum=0;
        var v_n_sum = 0,v_n_min = null,v_n_max = null, jj=0;
        var expanded = 0, totallines = 0;
    var res=[],vs,p1;
    var rStr='',cc,al,s_;
    var tcou=0,val,a_body,a_cont;
    var n_col = this.a_capt[in_col].dataField;
    var origCol = IGetOriginalDataField(this.a_capt[in_col]);
    var valsFormat = this.a_capt[in_col].format,
        vals;
    
    valf = new Object();
    var isnum = (this.a_capt[in_col].type == IBINUM);
    if((typeof(this.FullTotal[n_col])=="undefined")||(this.FullTotal[n_col]==null)) {
        if(this.a_cntl.cacheMode) {
            IremoteAgg(this.a_cntl.table_number,n_col,origCol,false,isnum); // need origCol data
        } else {
            this.FullTotal[n_col] = 0;
            this.FullAbsTotal[n_col]=0;
            this.FullTotalMax[n_col] = new Object();
            this.FullTotalMin[n_col] = new Object();
            this.FullTotalMax[n_col].raw = "-!---!-";
            this.FullTotalMin[n_col].raw = "-!---!-";
            this.FullTotalCnt[n_col] = this.a_all_body.length;
            this.Fullres = [];
            al = this.a_all_body.length;
            for(i=0;i<al;i++) {
                val = this.a_all_cont[i][origCol];
                if(val[DARAW]<0) continue;
                tcou++;
                vals = ibiStd.ibiNumberToFormat(this.IBs[val[DARAW]], valsFormat, null, 0); // round as per formatting
                if (isnum) vals = vals * 1;
                if((this.FullTotalMax[n_col].raw =="-!---!-") ||
                   (this.FullTotalMax[n_col].raw < vals)) {
                       this.FullTotalMax[n_col].raw=vals;
                       this.FullTotalMax[n_col].str=this.IBs[val[DASTR]];
                }
                if((this.FullTotalMin[n_col].raw=="-!---!-") ||
                   (this.FullTotalMin[n_col].raw > vals)) {
                        this.FullTotalMin[n_col].raw=vals;
                    this.FullTotalMin[n_col].str=this.IBs[val[DASTR]];
                }
                if(isnum) {
                    this.FullTotal[n_col] += vals;
                    this.FullAbsTotal[n_col] += Math.abs(vals);
                }
                if(typeof(this.Fullres[this.IBs[val[DARAW]]])=='undefined') this.Fullres[this.IBs[val[DARAW]]]=1;
            }
            this.FullMissingCnt[n_col] = this.FullTotalCnt[n_col]-tcou;
            tcou=0;
            this.FullTotalDst[n_col] = 0;
            for (j in this.Fullres) {
                if(typeof(this.Fullres[j])=='function') continue;
                this.FullTotalDst[n_col]++;
            }
        }
    } 
    if(this.a_cntl.cacheMode) {
        if(this.haveFilters) {
            if((typeof(this.FilterTotal[n_col])=="undefined")||(this.FilterTotal[n_col]==null))
                IremoteAgg(this.a_cntl.table_number,n_col,origCol,true,isnum); // need origCol data
            n_sum = this.FilterTotal[n_col];
            n_min = new Object();
            n_max = new Object();
            n_min.raw = this.FilterTotalMin[n_col].raw;
            n_max.raw = this.FilterTotalMax[n_col].raw;
            n_min.str = this.FilterTotalMin[n_col].str;
            n_max.str = this.FilterTotalMax[n_col].str;
            tcou  = this.FilterTotalCnt[n_col];
            u     = this.FilterTotalDst[n_col];
        }
    } else  {
        if(this.haveFilters) {
            a_body = this.a_filter_body;
            a_cont = this.a_filter_cont;
        } else {
            a_body = this.a_all_body;
            a_cont = this.a_all_cont;
        }
        cc = a_body.length;
        for(i=0;i<cc;i++) {
            s_= a_cont[a_body[i][0]][origCol];
            if(s_[DARAW]<0) continue;
            tcou++;
            if(this.AccordionIsOn) {
                var lx;
                if(this.a_capt[n_col].level) lx =  s_[DAACD].substr(0,s_[DAACD].lastIndexOf(':'));
                else lx = s_[DAACD];
                isexpanded = this.acdNode[lx];
                if(isexpanded)    expanded = 1;
                else    expanded = 2;
            }
            val = this.IBs[s_[DARAW]];
            valf = new Object();
            valf.raw = this.IBs[s_[DARAW]];
            valf.str = this.IBs[s_[DASTR]];
            if(!isNaN(val)) {
                n_sum += val;
                n_asum +=  Math.abs(val);
            }
            if(val!='.'){
                j++;
                if(expanded==1)    jj++;
            } 
            if(typeof(res[val])=='undefined') res[val]=1;
            
            if(n_min==null) n_min = valf;
            else if(valf.raw < n_min.raw) n_min = valf;
            if(n_max==null) n_max = valf;
            else if(valf.raw > n_max.raw) n_max = valf;
                if(expanded==1) {
                if(v_n_min==null) v_n_min = val;
                else if(val<v_n_min) v_n_min = val;
                if(v_n_max==null) v_n_max = val;
                else if(val > v_n_max) v_n_max = val;
                 v_n_sum += this.IBs[s_[DARAW]];
            }
        }
        u = 0;
        for(var jx in res) {
            if(typeof(res[jx])=='function') continue;
            u++;
        }
        this.FilterTotal[n_col]=n_sum;
        this.FilterAbsTotal[n_col]=n_asum;
        this.FilterTotalMin[n_col]=n_min;
        this.FilterTotalMax[n_col]=n_max;
        this.FilterTotalCnt[n_col]=tcou;
        this.FilterTotalDst[n_col]=u;
    }

    if(this.a_capt[in_col].type == IBINUM) {
        if(this.AccordionIsOn) p = Math.round((v_n_sum/n_sum)*10000)/100;
    }
    var addcomma = true;
    var fformat = true;
    var rs;
    var roundOff = 100;
    if(this.a_capt[n_col].format.indexOf(".")>0) {
        var ro = parseInt(this.a_capt[n_col].format.substr(this.a_capt[n_col].format.indexOf(".")+1),10);
        if(ro>0)
            roundOff = Math.pow(10,ro);
    }
    switch(s_type){
        case 'SUM':
            vst =Math.round(v_n_sum*roundOff)/roundOff;
            vs = Math.round(n_sum*roundOff)/roundOff;
            s  = Math.round(this.FullTotal[n_col]*roundOff)/roundOff;
            vsInt = vs;
            vstInt = vst;
            rs = s;
            what = ibiMsgStr['irsum'];
        break;
        case 'MIN':
            if(v_n_min != null) {
                vst =v_n_min;
                vstInt = v_n_min;
            } else {
                vstInt = 0;
                vst = 0;
            }
            vs = (n_min!=null?n_min.raw:null);
            vsInt= (n_min!=null?n_min.raw:null);
            s  = this.FullTotalMin[n_col].raw;    
            if(this.a_capt[in_col].type==IBIDATE) {
                            vs  = (n_min!=null?n_min.str:null);
                            vsInt= (n_min!=null?n_min.str:null);
                s  = this.FullTotalMin[n_col].str;    
            }

            rs = s;
            what = ibiMsgStr['irmin'];
            if(this.a_capt[n_col].type != IBINUM)addcomma = false;
        break;
        case 'MAX':
            if(v_n_max != null) {
                vst = v_n_max;
                vstInt = v_n_max;
            } else {
                vstInt = 0;
                vst = 0;
            }
            vs  = (n_max!=null?n_max.raw:null);
            vsInt= (n_max!=null?n_max.raw:null); 
            s   = this.FullTotalMax[n_col].raw;
            if(this.a_capt[n_col].type==IBIDATE) {
                vs  = (n_max!=null?n_max.str:null);
                vsInt= (n_max!=null?n_max.str:null);
                s   = this.FullTotalMax[n_col].str;
            }
            rs = s;
            what = ibiMsgStr['irmax'];
            if(this.a_capt[n_col].type != IBINUM)addcomma = false;
        break;
        case 'COU':
            vst = jj;
            vs = tcou;
            s = this.FullTotalCnt[n_col]-((typeof(this.FullMissingCnt[n_col])=="undefined")?0:this.FullMissingCnt[n_col]);
            rs = s;
            vsInt = vs;
            vstInt = vst;         
            what = ibiMsgStr['ircnt'];
            fformat = false;
        break;
        case 'DIS':
            vst = u;
            vs  = u;
            s   = this.FullTotalDst[n_col];
            vsInt = vs;
            vstInt = vst;
            rs =s;
            what=ibiMsgStr['ircnd'];
            fformat = false;
        break;
        case 'AVG':
            if(jj)    vst = Math.round((v_n_sum/jj)*roundOff)/roundOff;
            else vst = 0;
            if(this.a_cntl.cacheMode){
                vs = this.FilterTotalAvg[n_col];
                s = this.FullTotalAvg[n_col];
            }else{
                vs = Math.round((n_sum/tcou)*roundOff)/roundOff;
                s = Math.round((this.FullTotal[n_col]/(this.FullTotalCnt[n_col]-((typeof(this.FullMissingCnt[n_col])=="undefined")?0:this.FullMissingCnt[n_col])))*roundOff)/roundOff;
            }
            rs = s;        
            vsInt = vs;
            vstInt = vst;
            what = ibiMsgStr['iravg'];
        break;
    }
    if(s_type != 'ALL') {
        if(rs) {
            ps = '';
            if(isnum) {
                p = Math.abs(Math.round((vsInt/rs)*10000)/100);
                ps = '('+p+'%)';
            }
        } else ps = '';
        if(vs) {
            pst = '';
            if(isnum) {
                p1 = Math.abs(Math.round((vstInt/vsInt)*10000)/100);
                pst = '('+p1+'%)';
            }
        } else pst = '';
        var colclass=' STYLE="font-family:'+this.a_capt[n_col].name.font+';font-size:'+this.a_capt[n_col].name.size+'pt;" ';
        var _calcType = this.calcType;

        if(!this.haveFilters) {
            _calcType = (this.AccordionIsOn) ? 2 : 0;
        }

        switch(_calcType) {
            case 0: rStr+='<Span class="arGridAgg">'+ibiMsgStr['ctot']+' '+what+'<\/span> <span'+colclass+'>'+(addcomma?FocusFormat(s,fformat?this.a_capt[n_col].format:'',this.a_cntl.cdn,this.a_cntl.cursym):s)+'<\/span>';break;
            case 1: rStr+='<Span class="arGridAgg">'+ibiMsgStr['cfil']+' '+what+'<\/span> <span'+colclass+'>'+(addcomma?FocusFormat(vs,fformat?this.a_capt[n_col].format:'',this.a_cntl.cdn,this.a_cntl.cursym):vs)+'<\/span>';break;
            case 2: if(this.AccordionIsOn) rStr+='<Span class="arGridAgg">'+ibiMsgStr['cexp']+' '+what+'<\/span> <span'+colclass+'>'+(addcomma?FocusFormat(vst,fformat?this.a_capt[n_col].format:'',this.a_cntl.cdn,this.a_cntl.cursym):vst)+pst+'<\/span><BR>';
                rStr+='<Span class="arGridAgg">'+ibiMsgStr['cfil']+' '+what+'<\/span> <span'+colclass+'>'+(addcomma?FocusFormat(vs,fformat?this.a_capt[n_col].format:'',this.a_cntl.cdn,this.a_cntl.cursym):vs)+ps+'<\/span><BR>';
                rStr+='<Span class="arGridAgg">'+ibiMsgStr['ctot']+' '+what+'<\/span> <span'+colclass+'>'+(addcomma?FocusFormat(s,fformat?this.a_capt[n_col].format:'',this.a_cntl.cdn,this.a_cntl.cursym):s)+'<\/span>';break;
        }
    }
    return (rStr);
}

function ISetPaging(n_value){
    this.o_paging.n = n_value>0?n_value:this.n_rows;
    this.o_paging.c = 0;
    ibiGrid.show(false,this);
}
 
function UNsort(a,b){return ((a*1)-(b*1));}

function ISortUniq(res)
{
    var newres=[];
    newres[0]=[];
    newres[1]=[];
    newres[2]=[];
    newres[3]=[];
    newres[6]=[];
    var j, cc=0;
    
    var so = new Object();
    var vala = [];
    for (j = 0; j < res[0].length; j++) {
        vala[vala.length] = res[0][j];
        so[res[0][j]] = j;
    }
    
    if(typeof(res[0][0]) == 'string')
        vala = vala.sort();
    else
        vala = vala.sort(UNsort);
    
    for (j = 0; j < vala.length; j++) {
        newres[0][newres[0].length]=res[0][so[vala[j]]];
        newres[1][newres[1].length]=res[1][so[vala[j]]];
        newres[2][newres[2].length]=res[2][so[vala[j]]];
        newres[3][newres[3].length]=res[3][so[vala[j]]];
        newres[6][newres[6].length]=res[6][so[vala[j]]];
    }
        

/*
    while(res[0].length) {
        var val=res[0][0];
        var pos=0;
        var rl = res[0].length;
        if(rl>1)
        for(var j=1;j<rl;j++){
            if(val>res[0][j]) {
                val=res[0][j];
                pos=j;
            }
        }
        newres[0][cc]=res[0][pos];
        newres[1][cc]=res[1][pos];
        newres[2][cc++]=res[2][pos];
        res[0].splice(pos,1);
        res[1].splice(pos,1);
        res[2].splice(pos,1);
    }
*/
    return newres;
}
 
function IGetAllUniqValues(filterCol,checkarray,limit)
{
    var n_col, curTable, curCol, col, numCols;
    var res = null;
    var checkAll = (typeof filterCol === 'object');

    for (var i = 0, numTables = MyTable.length; i < numTables; ++i) {
		if(MyTable[i].deleted)
			continue;
        n_col = -1;
        curTable = MyTable[i];
        numCols = curTable.n_cols;
        
        if (checkAll) { // 1st check for name, then field, then alias
            for (col = 0; col < numCols; ++col) {
                if (curTable.a_cntl.a_cols[col].name == filterCol.name) {
                    n_col = col;
                    break;
                }
            }
            if (n_col == -1) {
                for (col = 0; col < numCols; ++col) {
                    if (curTable.a_cntl.a_cols[col].field == filterCol.field) {
                        n_col = col;
                        break;
                    }
                }
                if (n_col == -1) {
                    for (col = 0; col < numCols; ++col) {
                        curCol = curTable.a_cntl.a_cols[col]; 
                        if ((curCol.alias != "") && (curCol.alias == filterCol.alias)) {
                            n_col = col;
                            break;
                        }
                    }
                }
            }
        } else {
            for (col = 0; col < numCols; ++col) {
                if (curTable.a_cntl.a_cols[col].name == filterCol) {
                    n_col = col;
                    break;
                }
            }
        }
        if (n_col >- 1) { 
            res = MyTable[i].getUniqValues(n_col,checkarray,res,limit);
        }
    }
    return res;    
}

 
function IGetUniqValues(n_col, checkarray, oldres, limits, usefiltered, filterType, aggType,aggBy,getMinMax,async,callback,callbackLabel){
    var limit = (typeof limits == "boolean")?1000:limits;
    var i, j, res, sr, strUnderCover;
    var inlist = [];

    if((typeof(oldres)=='undefined')||(oldres==null)) {
        res = [];
        res[0]=[];
        res[1]=[];
        res[2]=[];
        res[3]=[];
        res[6]=[];
    } else {
        res  = oldres;
        for(i=0;i<res[0].length;i++) 
            inlist[res[0][i]] = true;
    }
    var missingString = "[" + ibiMsgStr['missing'] + "]";
    var missing = false, blank = false;
    var isStr = this.a_capt[n_col].type == IBISTR;
    var isDate = this.a_capt[n_col].type == IBIDATE;
    var cont = this.a_all_cont;
    var dformat = this.a_capt[n_col].format;
    var isGrid = (this.a_cntl.reportView === REPORTGRID ||
                  this.a_cntl.reportView === REPORTROLL ||
                  this.a_cntl.reportView === REPORTPIVOT);
    var useIbiDateToFormat = true,
        sortUnique = true;
    if (isGrid) {
        if (isDate && (this.a_cntl.cacheMode == true)) {
            useIbiDateToFormat = false;
            var dtFmt = dformat.toUpperCase();
            if ((dtFmt[1] != "H") && (dtFmt.match(/^(?=.*MT)(?=.*WR).*$/))) {
                useIbiDateToFormat = true;
            }
        }
    }

    if((usefiltered)&&(this.a_filter_cont!=null)) cont = this.a_filter_cont;
    var ucol = n_col;

    var comp = this;
    var setInfo = function() {
        var info = readCacheCol(comp.a_cntl.table_number);
            var na = null;

            if(info) {
                na = info.data;
                //if(aggType && na.length && typeof(na[0][1])=="object")
                //    ucol = 1;
            isStr = true;
            dformat = "A1000";
            if(!comp.a_capt[ucol].isFilterDefine) {
                isStr = info.col[ucol].type == IBISTR;
                isDate = info.col[ucol].type == IBIDATE;
                dformat =  info.col[ucol].format;
            }
        } else return false;
        comp.cacheCol[n_col] = CopyArray(na);
        return true;
    };
    var sgetMinMax = getMinMax;
    var an_col = n_col;
    var genValuesMinMax = function() {
        cont = comp.cacheCol[an_col];
        if(sgetMinMax) {
            var smn_ = cont[0][0];
            var smx_ = cont[0][1];
            srmin = (strUnderCover) ? comp.IBs[smn_[DASTR]] : comp.IBs[smn_[DARAW]];
            srmax = (strUnderCover) ? comp.IBs[smx_[DASTR]] : comp.IBs[smx_[DARAW]];
            if (isStr) {
                res[0][res[0].length] = srmin;
                res[3][res[3].length] = srmin;
                res[0][res[0].length] = srmax;
                res[3][res[3].length] = srmax;
            } else
            if (isDate) {
                res[0][res[0].length] = srmin+'';
                res[3][res[3].length] = srmin+'';
                res[0][res[0].length] = srmax+'';
                res[3][res[3].length] = srmax+'';
            } else {
                res[0][res[0].length] = srmin;
                res[3][res[3].length] = ibiStd.ibiNumberToFormat(srmin*1,dformat);
                res[0][res[0].length] = srmax;
                res[3][res[3].length] = ibiStd.ibiNumberToFormat(srmax*1,dformat);
            }
            res[1][res[1].length] = comp.IBs[smn_[DASTR]];
            res[1][res[1].length] = comp.IBs[smx_[DASTR]];

            res[2][res[2].length]=false;
            res[2][res[2].length]=false;

            res[4] = IBINUM;
            if(isDate)
                res[4] = IBIDATE;
            if(isStr)
                res[4] = IBISTR;
            res[5] = dformat;
        }
    };
    var afilterType = filterType;
    var acheckarray = checkarray;
    var genValues = function() {
        var dcol = comp.a_capt[ucol].dataField;
        var i,j;
        if(comp.a_capt[ucol].isFilterDefine) {
            dcol = comp.a_capt[ucol].fields;
        } else
            dcol = [dcol];

        if (!useIbiDateToFormat) {
            strUnderCover = true;
            sortUnique = false;
        } else {
            strUnderCover = (isDate && (afilterType == arConstants.FILTER_CONTAIN_CS ||
                                        afilterType == arConstants.FILTER_CONTAIN    ||
                                        afilterType == arConstants.FILTER_OMIT_CS    ||
                                        afilterType == arConstants.FILTER_OMIT));
        }

        var cl = 0;
        if(cont != null)
            cl = cont.length;
        var s_;
        for (i = 0; i < cl; i ++) {
            sr = '';
            var sr2 = [];
			var sr3 = '';
            for(j = 0; j <dcol.length; j++) {
                if(!comp.a_cntl.cacheMode)
                    s_ = cont[i][dcol[j]];
                else
                    s_ = cont[i][j];
                sr += (strUnderCover) ? comp.IBs[s_[DASTR]] : comp.IBs[s_[DARAW]];
                sr3 += comp.IBs[s_[DASTR]];
                if(j<(dcol.length-1)) {
                    sr += arSet.FILTER_SEPARATOR;
                    sr3 += arSet.FILTER_SEPARATOR;;
                }
                sr2[sr2.length] = (strUnderCover) ? comp.IBs[s_[DASTR]] : comp.IBs[s_[DARAW]];
            }
            if (s_[DARAW] < 0) {
                missing = true;
                if (comp.IBs[s_[DASTR]] !== ".") {
                    missingString = comp.IBs[s_[DASTR]];
                }
            }
            else if(((sr+'')==' ')||((sr3+'')==' ')) blank=true;
            else
            if(!inlist[sr]){
                inlist[sr]=true;
                    //if(dcol.length>1){
                    res[6][res[6].length] = sr2;
                    //}
                if(isStr) {
                    res[0][res[0].length] = sr;
                    res[3][res[3].length] = sr;
                } else
                if(isDate) {
                    res[0][res[0].length] = sr;
                    res[3][res[3].length] = sr;
                } else  {
                    res[0][res[0].length] = sr * 1;
                    res[3][res[3].length] = ibiStd.ibiNumberToFormat(sr*1,dformat);
                }
                if(dcol.length>1)
                    res[1][res[1].length]=sr3;
                else
                    res[1][res[1].length]=comp.IBs[s_[DASTR]]+"";

                if(inarray(acheckarray,sr))
                    res[2][res[2].length]=true;
                else
                    res[2][res[2].length]=false;
            }
        }
    //if(!this.a_cntl.cacheMode)
        if (sortUnique) {
            res=comp.sortuniq(res);
        }
        if(missing) {
            res[0].unshift(missingVal);
            res[1].unshift(missingString);
            res[2].unshift(false);
            res[3].unshift(missingVal);
            res[6].unshift(missingVal);
            if(inarray(acheckarray,missingVal)) res[2][0]=true;
        }
        if(blank) {
            res[0].unshift(' ');
            res[1].unshift("[BLANK]");
            res[2].unshift(false);
            res[3].unshift(' ');
            res[6].unshift(' ');
            if(inarray(acheckarray,'')) res[2][0]=true;
        }
        if(res.length) {
            res[4] = IBINUM;
            if(isDate)
                res[4] = IBIDATE;
            if(isStr)
                res[4] = IBISTR;
            res[5] = dformat;
        }
        res[arConstants.DP_TREE] = [];
        var root,node;

        if(typeof res[arConstants.DP_VALUE_ARRAY]!= "undefined") {
            for(i=0; i < res[arConstants.DP_VALUE_ARRAY].length; i++) {
                if(typeof res[arConstants.DP_VALUE_ARRAY][0] == "undefined")
                    break;
                root = res[arConstants.DP_TREE];
                for(j=0; j < res[arConstants.DP_VALUE_ARRAY][i].length; j++) {
                    node = null;
                    for(var jj=0; jj < root.length; jj++)
                        if(root[jj].display == res[arConstants.DP_VALUE_ARRAY][i][j]) {
                            node = root[jj];
                            break;
                        }
                    if(node == null) {
                        node = {
                            'display':res[arConstants.DP_VALUE_ARRAY][i][j],
                            'dataProviderValue':res[arConstants.DP_DISPLAY][i],
                            'children':[]
                        };
                        if(j<(res[arConstants.DP_VALUE_ARRAY][i].length-1))
                            delete node.dataProviderValue;
                        root[root.length] = node;
                    }
                    root = node.children;
                }
            }
        }
    };

    if(this.a_capt[n_col].isFilter) {
        res = [[1,0],[ibiMsgStr['true'],ibiMsgStr['false']],[false,false],[1,0]];
        if(inarray(checkarray,0))
            res[2][1] = true;
        if(inarray(checkarray,1))
            res[2][0] = true;
        return res;
    } else
    if(this.a_cntl.cacheMode) {
        if(!comp.a_capt[ucol].isFilterDefine)
            ucol = 0;
        if(typeof(this.cacheCol)=="undefined") {
            this.cacheCol = [];
            for(i=0;i<this.n_cols;i++) this.cacheCol[i]=null;
        }

        if(this.cacheCol[n_col]==null) {
            if(async == true ) {
                var ucallback = callback;
                var rCallBack = function() {
                    if(setInfo()) {
                        genValuesMinMax();
                        if(!sgetMinMax)
                            genValues();
                        ucallback(res);
                    }
                };
                IgetCUniqColVals(this.a_cntl.table_number,n_col,limit,usefiltered,aggType,aggBy,getMinMax,async,rCallBack);
                return "wait";
            } else
            IgetCUniqColVals(this.a_cntl.table_number,n_col,limit,usefiltered,aggType,aggBy,getMinMax);
            setInfo();
        }

        genValuesMinMax();
        if(sgetMinMax)
            return (res);
    }
    genValues();
    return (res);
}

 
function IGetChartValues(x_col,y_col,sumres,res,groupbyArray,get_all,isnotfirst,newcont,isRoot,doSort,win,index,noroll,rlimit,fmtCols,async)
{
    var p,sx_,ss_,gb;
    var i,j,val,val2;
    var string = false,aa;
    var dcount=[];
    var acdn=[],acds=[],acdl=[];
	var count = new Array(), min = new Array(), max = new Array(), fst = new Array();
    var countOrgLines = [];
    var isNum;
    var isDate,isStr;
    var isarray = typeof(y_col)=="object";
    //var ignore; // p169835: dont need ignore; old code, commenting it out for now
    var xpos = 1;
    var a_body;
    var resetsort = false, bytot = false;
    var a_cont;
    var bycols='',calccols='',calcdefs='',cols='',computeStr='';
    var fc = 'SUM';
    var x_cols, fld, fmt, yl;
    var capt = this.a_capt;
	var inlist=[],inlist2;
    var fldname;
    var fmtColNum;
    var limit = rlimit;
    if(this.isEmptyReport)
        limit = 1;

    if(this.org_capt) capt = this.org_capt;
    if(!this.a_cntl.cacheMode) {
        if(x_col!=null)    {
            isNum = capt[x_col].type == IBINUM;
            isDate = capt[x_col].type == IBIDATE;
            isStr = capt[x_col].type == IBISTR;
        } else isNum = true;
    }
    if(this.a_cntl.cacheMode) {
        for(i=0;i<y_col.length;i++) {
            fldname = getCacheFieldName(this,this.a_capt[y_col[i]].dataField);
            cols += fldname + ' ';
            bycols += 'BY ';
            //if(this.a_capt[y_col[i]].type == IBINUM)
            bytot = false;
            if ((this.a_cntl.bytot) &&
                (this.a_cntl.bytot[y_col[i]] > 0)) {
                    bycols +='TOTAL ';
                    bytot = true;
            }
            if(this.a_capt[y_col[i]].orow) {
                 switch(this.a_capt[y_col[i]].orow) {
                     case arConstants.OROW_HIGH:  
                         bycols += 'HIGHEST ';
                         break;
                       case arConstants.OROW_LOW_NOPR: 
                        if(this.a_capt[y_col[i]].orowLimit)
                        	bycols += 'LOWEST ';
                        else
                            bycols += ' ';
                         break;
                       case arConstants.OROW_HIGH_NOPR:
                           bycols += 'HIGHEST ';
                         break; 
                       case arConstants.OROW_NULL_KEY:
                        if(this.a_capt[y_col[i]].orowLimit)
                            bycols += 'LOWEST ';
                        else
                           bycols += ' ';
                         break;  
                 } 
			 	if(this.a_capt[y_col[i]].orowLimit)
                    bycols += this.a_capt[y_col[i]].orowLimit+' ';
            }
            if (bytot && this.a_capt[y_col[i]].aggType) {
                fldname = this.a_capt[y_col[i]].aggType + '.' + fldname;
            }
            bycols += fldname+' ';
            if(this.a_capt[y_col[i]].noprint) 
                bycols += 'NOPRINT ';
        }
        if((x_col!=null) && (typeof(x_col)=='object')) {
            x_cols = x_col;
            for(i=0;i<x_col.length;i++) {
                switch(groupbyArray[i]) {
                    case 'SUM': fc=''; break;
                    case 'MAX': fc='MAX.'; break;
                    case 'FST': fc='FST.'; break;
                    case 'MIN': fc='MIN.'; break;
                    case 'AVG': fc='AVE.'; break;
                    case 'COU': fc='CNT.'; break;
                    case 'DIS': fc='CNT.DST.'; break;
                    default: fc='';
                }
                if (this.a_cntl.cacheWriteMode == 4 && this.a_capt[x_col[i]].aggType && (fc == '')) { // only for CACHENOEXTRACT
                    fc = this.a_capt[x_col[i]].aggType+'.';
                }
                if(!this.a_capt[x_col[i]].isCompute || this.a_cntl.cacheWriteMode!=4) {
                    fld = getCacheFieldName(this,this.a_capt[x_col[i]].dataField);
                    fmtColNum = (typeof fmtCols !== 'undefined')
                                ? this.a_capt[fmtCols[i]].dataField
                                : this.a_capt[x_col[i]].dataField; 
                    fmt = getCacheFieldFormat(this, fmtColNum);
					if((fc!='MAX.')&&(fc!='MIN.')&&(fc!='FST.')&&
                        ((!this.a_capt[x_col[i]].isDefine)&&(!this.a_capt[x_col[i]].isCompute)
                            &&(fld.indexOf(".")==-1)))
                        calcdefs += fld+'/'+FocusFormat(0,fmt,0,'',true)+
                            ' MISSING ON='+fld+';';
                    calccols += fc+fld+' ';
                    cols += fld + ' ';
                } else {
                    if(this.a_capt[x_col[i]].computeText.substr(0,5)!="MAP__") {
                        computeStr = 'COMPUTE ' + this.a_capt[x_col[i]].computeText;
                        calccols += computeStr + ' ';
                        cols += computeStr + ' AS C' + i + ' ';
                    }
                }
			}
        } else {
            x_cols = [];
            if(x_col!=null) {
                switch(groupbyArray[i]) {
                    case 'SUM': fc=''; break;
                    case 'MAX': fc='MAX.'; break;
                    case 'MIN': fc='MIN.'; break;
                    case 'FST': fc='FST.'; break;
                    case 'AVG': fc='AVE.'; break;
                    case 'COU': fc='CNT.'; break;
                    case 'DIS': fc='CNT.DST.'; break;
                    default: fc='';
                }
                if (this.a_cntl.cacheWriteMode == 4 && this.a_capt[x_col].aggType && (fc == '')) { // only for CACHENOEXTRACT
                    fc = this.a_capt[x_col].aggType+'.';
                }
                fld = getCacheFieldName(this,x_col);
                fmt = getCacheFieldFormat(this,x_col);
                x_cols[0] = x_col;
				if((fc!='MAX.')&&(fc!='MIN.')&&(fc!='FST.')&&(!this.a_capt[x_col].isDefine)&&(fld.indexOf(".")==-1))
                    calcdefs += fld+'/'+FocusFormat(0,fmt,0,'',true)+
                        ' MISSING ON='+fld+';';
                calccols += fc+fld;
                cols += fld + ' ';
            }
        }
        if((calccols=="") && (y_col.length)) calccols = 'CNT.'+getCacheFieldName(this,y_col[y_col.length-1]);
        newcont = [];
        var r_num = 0;
        if(noroll) r_num = index+50;
        else
        if(win>-1) {
            if(pwn[win].roll_tnumber > -1) 
                r_num = pwn[win].roll_tnumber;
        }

        var rCallBack = function(tn) {
            var i;
            var j;
            var y1;
            var yy;
            var pos = 0;
            var newcont = this.rCallBackArgs['newcont'];
            var res = this.rCallBackArgs['res'];
            var sumres = this.rCallBackArgs['sumres'];
            var x_cols = this.rCallBackArgs['x_cols'];
            var y_col = this.rCallBackArgs['y_col'];
            var groupbyArray = this.rCallBackArgs['groupbyArray'];

            if(remoteRollData[this.a_cntl.table_number]!=null) {
                newcont = remoteRollData[this.a_cntl.table_number];
                for(i=0;i<x_cols.length;i++) sumres[i]=[];
                yl = y_col.length;
                var xl = x_cols.length;
                var ii = -1;
                for(i=0;i<remoteRollData[this.a_cntl.table_number].length;i++) {
                    yy = '';
                    pos = 0;
                    for(j=0;j<yl;j++) {
                        if(this.a_capt[y_col[j]].b_hide) continue;
                        pos++;
                        if (pos>1)
                            yy += ' / ';
                        yy += this.IBs[newcont[i][j][DASTR]];
                    }
                    if((ii== -1)||(res[ii]!=yy)) {
                        ii++;
                        res[ii] = yy;
                    }
                    pos = y_col.length;
                    for(j=0;j<xl;j++) {
                        switch(groupbyArray[j]) {
                            case 'MAX':
                            case 'MIN':
                            case 'FST':
                                sumres[j][ii] = this.IBs[newcont[i][j + pos][DASTR]];
                                break;
                            case 'SUM':
                            case 'AVG':
                            case 'COU':
                            case 'DIS':
                            default:
                                sumres[j][ii] = this.IBs[newcont[i][j + pos][DARAW]];
                                break;

                        }

                    }
                }
            }
            this.rCallBackCont = newcont;
        };
        this.removeCallBack();
        this.rCallBack = rCallBack;
        this.rCallBackArgs = {
            'x_cols':x_cols,
            'res':res,
            'sumres':sumres,
            'groupbyArray':groupbyArray,
            'newcont':newcont,
            'y_col':y_col

        };
        IremoteRoll(this.a_cntl.table_number,bycols,calccols,calcdefs,get_all,r_num,limit,cols,async);
        if(!async) {
            newcont = this.rCallBackCont;
        } else
            newcont = "delay";
        return newcont;
    } else {
        if((isnotfirst)&&(newcont.length)) xpos = newcont[0].length;
        else {
            if(isarray) xpos = y_col.length;
            newcont=[];
        }

        var sv_sort = this.a_sort;
        var allData = ((get_all)||(!this.haveFilters));
        var sv_body = this.a_all_body; // a_all_body reassigned in callSort()
        var sv_f_body = this.a_filter_body;

        if(y_col.length) {
            this.a_sort = [];
            if(isarray) {
                yl = y_col.length;
                var an = 0;
                for (i = yl-1; i >= 0 ; i--) {
                    // need to permit all BYs for sorting, including NOPRINTs
                    var sortOrder = (this.a_capt[y_col[i]].orow === arConstants.OROW_HIGH ||
                                     this.a_capt[y_col[i]].orow === arConstants.OROW_HIGH_NOPR)
                                    ? 1 : 0;
                    this.a_sort[an++]={'n_col' : y_col[i],'b_ord' : sortOrder};
                }
            } else {
                this.a_sort[0]={'n_col' : y_col,'b_ord' : 0};
            }
            if (this.a_sort.length) {
                this.callSort(!allData);
                if(sv_sort && sv_sort.length) resetsort=true;
            }
            this.a_sort = sv_sort;
        }


        if(allData){
            a_body = this.a_all_body;
            a_cont = this.a_all_cont;
        } else {
            a_body = this.a_filter_body;
            a_cont = this.a_filter_cont;
        }

        var lastc=-1;
        var st = 0;

		if((isMergeReports)&&(isRoot)) {
			st = 1;
			if(ibiCompound.currentMergeFilter) {
				if(y_col.length) {
					if(ibiCompound.currentMergeFilter[0].column.field != this.a_cntl.a_cols[y_col[0]].field)
						st = 0;
				}
			}
		}
        var al = a_body.length;
        //var showhide = true;
        var showhide=false;
        //for(var j=0; j < y_col.length; j++)
            //if(!this.a_capt[y_col[j]].b_hide) showhide = false;
        var label, lastNoprintBy, s_;
		inlist2 = {};
        for (i = 0; i < al; i ++) {
            label = lastNoprintBy = '';
            //ignore =false; // p169835: dont need ignore
            if(isarray) {
                var c=-1;
                yl = y_col.length;
                s_ = '';
                for (j = 0; j < yl; j++) {
					if((this.a_capt[y_col[j]].b_hide)&&(!showhide)&&(yl>1)) continue;
                    sx_=a_cont[a_body[i][0]][this.a_capt[y_col[j]].dataField];
                    ss_ = this.IBs[sx_[DASTR]];
                    //if(sx_[DARAW]<0) ignore = true; // p169835: dont need ignore
                    //else {
                        if(j>=st) {
                            if ((typeof(ss_)=='string') && (ss_.charAt(0)=='<')) {
                                ss_ = this.IBs[sx_[DARAW]];
                            }
                            s_ += ss_;
                            if(j<(y_col.length-1)) s_ += ' / ';
                            if (!this.a_capt[y_col[j]].b_hide) { // avoid hidden\noprint values
                                label += (label.length !== 0) ? ' / ' + ss_ : ss_;
                            } else {
                                lastNoprintBy = ss_;
                            }
                        }
                    //} // p169835: dont need ignore
                }            
                if (label.length == 0) { label = lastNoprintBy; }
            } else {
                s_ = this.IBs[a_cont[a_body[i][0]][this.a_capt[y_col].dataField][DASTR]];
                label = s_;
            }
            if ((typeof(s_)=='string') && (s_.charAt(0)=='<')) {
                s_ = this.IBs[a_cont[a_body[i][0]][y_col][DARAW]];
                if (!isarray) { label = s_; }
            }
            //if(!ignore) { // p169835: dont need ignore
                if((x_col==null)||(typeof(a_cont[a_body[i][0]][this.a_capt[x_col].dataField])=="object")) {
                    if(groupbyArray[index]=='NONE') aa = -1;
                    else {
                        if(inlist[s_]) aa = inlist[s_]-1;
                        else aa = -1;
                        /* If datareport then we need to check if the verb is SUM or PRINT */
                        if((this.a_cntl.dataReport)&&(typeof(this.a_cntl.verbs)!="undefined")) {
                            if(this.a_cntl.verbs[0].type=="PRINT") aa = -1;
                        }
                //        aa = inarray(res,s_,true);
                    }
                    if(x_col!=null) {
                        var si = a_cont[a_body[i][0]][this.a_capt[x_col].dataField][DARAW];
                        var si2 = a_cont[a_body[i][0]][this.a_capt[x_col].dataField][DASTR];
                        if((si<0) && (aa!=-1)) continue;
                        val2 = new Object();
                        if(si<0) {
                            val = missingVal;
                            val2.raw = missingVal;
                            val2.str = ".";
                        } else {
                            val = this.IBs[si];
                            val2.raw = val;
                            val2.str = this.IBs[si2];
                        }
                    }
                    if(aa==-1){
                        inlist[s_] = res.length+1;
                        if((sumres!=null)||(groupbyArray[index]=='NONE')) {
                            sumres[res.length] = val;
                            min[res.length] = val2;
                            max[res.length] = val2;
                            fst[res.length] = val2;

                        }
                        countOrgLines[res.length] = [];
                        countOrgLines[res.length][0] = a_body[i][0];
                        count[res.length] = 1;
                        dcount[res.length] = [];
                        dcount[res.length][0] = val;
                        if(!isnotfirst) {
                            newcont[res.length] = [];
                            if(isarray) {
                                var cc;
                                for (j = 0; j < y_col.length; j++) {
                                    var acd='';
                                    cc=j;
                                    if(j==(y_col.length-1)) cc =j-1;
                                    for(var jj=0;jj<=cc;jj++) {
                                //        acd=acd+acdn[jj]+'';
                                        if(jj<cc) acd=acd+':';
                                    }
                                    newcont[res.length][j] = CopyArray(a_cont[a_body[i][0]][this.a_capt[y_col[j]].dataField]);
                                    newcont[res.length][j][DAACD]=acd;
                                }
                            } else {
                                newcont[res.length][0] =  CopyArray(a_cont[a_body[i][0]][this.a_capt[y_col].dataField]);
                            }
                        }
                        newcont[res.length][xpos] = (x_col != null) 
                            ? CopyArray(a_cont[a_body[i][0]][this.a_capt[x_col].dataField]) : [];
                        res[res.length] = label;
                    } else {
                        if(sumres!=null) {
                            if(sumres[aa]==missingVal) {
                                count[aa]--;
                                sumres[aa] = 0;
                            }
                            if(isNum) 
                                sumres[aa] += val;
                            if((min[aa].raw>val2.raw)||(min[aa].raw==missingVal)) min[aa]=val2;
                            if((max[aa].raw<val2.raw)||(max[aa].raw==missingVal)) max[aa]=val2;
                        }
                        count[aa]++;
                        countOrgLines[aa][countOrgLines[aa].length] = a_body[i][0];

						//if(inarray(dcount[aa],val,true)==-1) {
						if(typeof inlist2[val] == "undefined") {
							dcount[aa][dcount[aa].length]=val;
							inlist2[val] = true;
						}
                    }
                }
            //} // p169835: dont need ignore
        }
        this.a_all_body = sv_body;
        this.a_filter_body = sv_f_body;
    }
    gb = groupbyArray[index];
    var dispval;
    inlist = [];

	if((isDate||isStr)&&(gb!='COU')&&(gb!='NONE')&&(gb!='DIS')&&(gb!='MIN')&&(gb!='MAX')&&(gb!='FST')) gb='COU';
	//else
	//if((isStr)&&(gb!='COU')&&(gb!='NONE')&&(gb!='DIS')) gb='COU';
    
    if(sumres!=null)
    {
        var tempDispval = [];
        for (i = 0; i < count.length; i++) {
            switch(gb) {
            case 'AVG':
                if(sumres[i]==missingVal) {
                    dispval = '.';
                } else {
                    sumres[i] = sumres[i]/count[i];
                    dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
                }
                break;
            case 'MAX':
                if(max[i]==missingVal) {
                    dispval = '.';
                } else {
                    sumres[i] = max[i].raw;
                    if(!isNum) dispval = max[i].str;
                    else dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
                }
				break;
			case 'FST':
                    if(fst[i]==missingVal) {
                        dispval = '.';
                    } else {
                        sumres[i] = fst[i].raw;
                        if(!isNum) dispval = fst[i].str;
                        else dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
                    }
                break;
            case 'MIN':
                if(min[i]==missingVal) {
                    dispval='.';
                } else {
                    sumres[i] = min[i].raw;
                    if(!isNum) dispval = min[i].str;
                    else dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
    
                }
                break;
            case 'COU':
                sumres[i] = count[i];
                dispval = sumres[i];
                break;
            case 'DIS':
                sumres[i] = dcount[i].length;
                dispval = sumres[i];
                break;
            default:
                dispval = FocusFormat(sumres[i],capt[x_col].format,this.a_cntl.cdn,this.a_cntl.cursym);
                break;
            }
            tempDispval[i] = dispval;
        }
    
/*
		if(typeof capt[x_col].computeScript != "undefined") {
			for(i=0; i < count.length; i++) {
				computeObj = {'value':null,'display':'Js error'};
				try {
					eval(capt[x_col].computeScript);
				} catch (e) {
					computeObj.value = 0;
				}
				sumres[i] = computeObj.value;
				tempDispval[i] = computeObj.display;

			}
		}
*/

        for (i = 0; i < count.length; i++)
        {
            p = this.IBs.length;
            this.IBs[p] = sumres[i];
            inlist[sumres[i]] = p;
        
            dispval = tempDispval[i];
            p = this.IBs.length;
            this.IBs[p] = dispval;
            inlist[dispval] = p;
        }
        
        for (i = 0; i < count.length; i++) {
            dispval = tempDispval[i];
            if(sumres[i]!=missingVal) {
                if(!inlist[sumres[i]])
                    p = inarray(this.IBs,sumres[i],true);
                else 
                    p = inlist[sumres[i]];
                if(p==-1) {
                    p = this.IBs.length;
                    this.IBs[p] = sumres[i];
                    inlist[sumres[i]] = p;
                }
                newcont[i][xpos][DARAW] = p;
            } else newcont[i][xpos][DARAW] = -1;
            
            if(!inlist[dispval])
                p = inarray(this.IBs,dispval,true);
            else
                p = inlist[dispval];
            if(p==-1) {
                p = this.IBs.length;
                this.IBs[p] = dispval;
                inlist[dispval]=p;
            }
            newcont[i][xpos][DASTR] = p;
            newcont[i][0][DORGLINE] = CopyArray(countOrgLines[i]);
        }
    }
    return newcont;
}


 
function showGotoPage(tn,cpage)
{
    var obj = document.getElementById('ipgnum'+tn);
    var obj2 = document.getElementById('gotopage');
    var line = '';
    var node,x=0,y=0;
    line += '<div style="background-color:white;position:relative;border:1px black solid;">';
    line += '<form action="javascript:nop();" onsubmit="return setpage('+tn+');">';
    line += "<input size=4 type=text name='pgnum' id='formgoto' value='"+cpage+"'>";
    line += '<\/form><\/div>';
    if(obj2) {
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
}
 

function removeComma(num)
{
    var str = num+'';
    var a = str.split(',');
    if(a.length>1)    return a.join('');
    else return str;
}
 

 
 
function IAttach_form(isglobal,isSpecial,win_num,table_number){
    var i;
    if(isglobal) {
        gfilt = [];
        for (i = 0; i < global_a_col_filter.length; i++) { 
            gfilt[i] = new addfilt(global_a_col_filter[i][0],global_a_col_filter[i][1],global_a_col_filter[i][3],global_a_col_filter[i][4]);
        }
    } else {
        if(isSpecial==3) {
            var pn = getPn(win_num,table_number);
            var mytable=MyTable[table_number];
            pn.cfilt = [];
            for (i = 0; i < pn.c_col_filter.length; i++) {
                pn.cfilt[i] = new addfilt(pn.c_col_filter[i][0],pn.c_col_filter[i][1],pn.c_col_filter[i][3],pn.c_col_filter[i][4]);
            }
        } else
        if(isSpecial==4) {
            this.apfilt = [];
            for (i = 0; i < this.ap_col_filter.length; i++) {
                this.apfilt[i] = new addfilt(this.ap_col_filter[i][0],this.ap_col_filter[i][1],this.ap_col_filter[i][3],this.ap_col_filter[i][4]);
            }
        } else
        if(isSpecial==2) {
            this.cfilt = [];
            for (i = 0; i < this.c_col_filter.length; i++) {
                this.cfilt[i] = new addfilt(this.c_col_filter[i][0],this.c_col_filter[i][1],this.c_col_filter[i][3],this.c_col_filter[i][4]);
            }
        } else
        if(isSpecial==5) {
            this.chfilt = [];
            for (i = 0; i < this.ch_col_filter.length; i++) {
                this.chfilt[i] = new addfilt(this.ch_col_filter[i][0],this.ch_col_filter[i][1],this.ch_col_filter[i][3],this.ch_col_filter[i][4]);
            }
        } else
        if(isSpecial==1) {
            this.sfilt = [];
            for (i = 0; i < this.s_col_filter.length; i++) {
                this.sfilt[i] = new addfilt(this.s_col_filter[i][0],this.s_col_filter[i][1],this.s_col_filter[i][3],this.s_col_filter[i][4]);
            }
        } else {
            this.filt = [];
            for (i = 0; i < this.a_col_filter.length; i++) {
                this.filt[i] = new addfilt(this.a_col_filter[i][0],this.a_col_filter[i][1],this.a_col_filter[i][3],this.a_col_filter[i][4]);
            }
        }
    }
}

function GetAllFilters()
{
    var totalFilters = [];
    var col,ftype,fval1,fval2;
    var gf, cf, cfilt, i, j, jj,k;
    var pmytable;
    var gcObj;
    var isroot = true;

    if((ibiCompound.currentMergeFilter!=null)&&(isroot)) {
        var curCol, filterCol, numCols = this.a_cntl.a_cols.length;
        gf=[];
        for(i=0;i<ibiCompound.currentMergeFilter.length;i++) {
            col = -1;
            filterCol = ibiCompound.currentMergeFilter[i].column;
            for (j = 0; j < numCols; ++j) {
                if (this.a_cntl.a_cols[j].name == filterCol.name) {
                    col = j;
                    break;
                }
            }
            if (col == -1) {
                for (j = 0; j < numCols; ++j) {
                    if (this.a_cntl.a_cols[j].field == filterCol.field) {
                        col = j;
                        break;
                    }
                }
                if (col == -1) {
                    for (j = 0; j < numCols; ++j) {
                        curCol = this.a_cntl.a_cols[j];
                        if ((curCol.alias != "") && (curCol.alias == filterCol.alias)) {
                            col = j;
                            break;
                        }
                    }
                }
            }
            fval2 = null;
            fval1 = ibiCompound.currentMergeFilter[i].value;
            ftype = arConstants.FILTER_IN; /* EQ */
            if(col!=-1) gf[gf.length] = new addfilt(col,ftype,fval1,fval2);
        }
        if(gf.length) 
            for(k = 0; k < gf.length; k++)
                totalFilters[totalFilters.length] = gf[k];
    }

    if((gfilt.length)&&(global_filter_type!=2)) { 
        gf=[];
        for (i = 0; i < gfilt.length; i++) {
            j = 0;
            while((this.a_cntl.a_cols[j].name!=global_a_cols[gfilt[i].an_fcol[0]].name)&&
                (j < this.a_cntl.a_cols.length)) j++;
            gf[gf.length] = new addfilt(j,gfilt[i].an_ftype,gfilt[i].as_fpat1,gfilt[i].as_fpat2);
        }
        if(gf.length) 
            for(k = 0; k < gf.length; k++)
                totalFilters[totalFilters.length] = gf[k];
    }
    if(ibiCompound.drawObjectsList.length) {
        var df=[];
        var comp_filter_type = 1;
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
            if((ibiCompound.drawObjectsList[i].active) &&
                ibiCompound.hasSameTarget(ibiCompound.drawObjectsList[i].filterTarget,this.table_name)) {
                pmytable = this;
                if(this.a_cntl.dataReport) {
                    pmytable = ibiStd.getTable(this.a_cntl.dataReport);
                }
                var cols = ibiCompound.drawObjectsList[i].aggColumn;
                if(typeof cols == "string")
                    cols = [cols];
                for(k=0; k < cols.length; k++) {
                    j = pmytable.getColumnByName(cols[k], this);
                    if((j==-1)&&(this.a_cntl.cacheWriteMode==4)) {
						gcObj = ibiReports.getColumnObject(this.a_cntl.cacheOriginalMaster, cols[k],this);
                        if(gcObj) {
                            j = this.a_capt.length;
                            this.a_capt[j] = this.copyObject(gcObj);
                                this.a_cntl.a_cols[j] = this.copyObject(ibiReports.getColumnNames(this.a_cntl.cacheOriginalMaster, cols[k]));
                            this.a_capt[j].b_hide = true;
                            this.a_capt[j].ignore = true;
                        }

                    }
                }
                if((j<0)||(cols.length>1)) continue;
                var cond = ibiStd.mapFilterObjectCondition(ibiCompound.drawObjectsList[i].filterCondition);
                if(ibiCompound.drawObjectsList[i].highlight) comp_filter_type=2;
                var val = ibiCompound.drawObjectsList[i].values;
                if(val==null || val.length==0) continue;
                if (cond == arConstants.FILTER_BETWEEN)
                    df[df.length] = new addfilt(j,cond,[val[0]],[val[1]]);
                else
                    df[df.length] = new addfilt(j,cond,val,null);
                if(ibiCompound.drawObjectsList[i].aggBy) {
                    df[df.length-1].extra = {
                            'infile':this.cacheFile+'hh'+df.length,
                            'aggtype':ibiCompound.drawObjectsList[i].aggType,
                            'component':ibiCompound.drawObjectsList[i]
                        };
                }
            }
        }
        if(df.length)
            if(comp_filter_type!=2)
                for(k = 0; k < df.length; k++)
                    totalFilters[totalFilters.length] = df[k];
    }
    for (jj = 0; jj < MyTable.length; jj++) {
		if(MyTable[jj].deleted)
			continue;
        if(MyTable[jj].chartinfo.cfilt.length) { 
            cf=[];
            cfilt = MyTable[jj].chartinfo.cfilt;
            a_cols = MyTable[jj].a_cntl.a_cols;
            for (i = 0; i < cfilt.length; i++) {
                j = this.getColumnByName(a_cols[cfilt[i].an_fcol[0]].name, this);
                if((j==-1)&&(this.a_cntl.cacheWriteMode==4)) {
					gcObj  = ibiReports.getColumnObject(this.a_cntl.cacheOriginalMaster,a_cols[cfilt[i].an_fcol[0]].name,this);
                    if(gcObj) {
                        j = this.a_capt.length;
                        this.a_capt[j] = this.copyObject(gcObj);
                        this.a_cntl.a_cols[j] = this.copyObject(ibiReports.getColumnNames(this.a_cntl.cacheOriginalMaster,a_cols[cfilt[i].an_fcol[0]].name));
                        this.a_capt[j].b_hide = true;
                        this.a_capt[j].ignore = true;
                    }
                }
                if(j!=-1)
                    cf[cf.length] = new addfilt(j,cfilt[i].an_ftype,cfilt[i].as_fpat1,cfilt[i].as_fpat2);
            }
            if(cf.length) 
                for(k = 0; k < cf.length; k++)
                    totalFilters[totalFilters.length] = cf[k];
        }
    }
    if(this.tdg_filt.length) 
        for(k = 0; k < this.tdg_filt.length; k++)
            totalFilters[totalFilters.length] = this.tdg_filt[k];
    if(this.sfilt.length) 
        for(k = 0; k < this.sfilt.length; k++)
            totalFilters[totalFilters.length] = this.sfilt[k];
    if(this.apfilt.length)
        for(k = 0; k < this.apfilt.length; k++)
            totalFilters[totalFilters.length] = this.apfilt[k];
    for (i = 0; i < maxwindows; i++) {
        if((pwn[i].table_number==this.a_cntl.table_number)&&(pwn[i].chartinfo))
            if((pwn[i].chartinfo.cfilt)&&(pwn[i].chartinfo.cfilt.length)) 
                for(k = 0; k < pwn[i].chartinfo.cfilt.length; k++)
                    totalFilters[totalFilters.length] = pwn[i].chartinfo.cfilt[k];
    }

    if(this.cfilt.length) {
        if(this.c_filter_type!=2)
            for(k = 0; k < this.cfilt.length; k++)
                totalFilters[totalFilters.length] = this.cfilt[k];
    }
    if(this.filt.length) {
        if(this.filter_type!=2) 
            for(k = 0; k < this.filt.length; k++)
                totalFilters[totalFilters.length] = this.filt[k];
    }
    return totalFilters;
}

function ICallFilt(isroot) {
    var a_body = this.copyObject(this.a_all_body);
    var a_cont = this.a_all_cont;
    var col,ftype,fval1,fval2;
    var gf, cf, cfilt, i, j, jj;
    var pmytable;
    this.haveFilters = false;
    this.haveHighlight = false;
    this.filterChange = false;
    this.cacheWhereCondition = '';
    this.cacheWhereConditionEval = '';
    this.isEmptyReport = false;

    if(this.a_cntl.cacheMode) {
        a_body = {'isRemote':true,'cond':null};
        a_body.cond = [];
    }
    for(i=0; i< this.a_capt.length; i++) this.FilterTotal[i]=null;
    if((ibiCompound.currentMergeFilter!=null)&&(isroot)) {
        var curCol, filterCol, numCols = this.a_cntl.a_cols.length;
        gf=[];
        for(i=0;i<ibiCompound.currentMergeFilter.length;i++) {
            col = -1;
            filterCol = ibiCompound.currentMergeFilter[i].column;
            for (j = 0; j < numCols; ++j) {
                if (this.a_cntl.a_cols[j].name == filterCol.name) {
                    col = j;
                    break;
                }
            }
            if (col == -1) {
                for (j = 0; j < numCols; ++j) {
                    if (this.a_cntl.a_cols[j].field == filterCol.field) {
                        col = j;
                        break;
                    }
                }
                if (col == -1) {
                    for (j = 0; j < numCols; ++j) {
                        curCol = this.a_cntl.a_cols[j];
                        if ((curCol.alias != "") && (curCol.alias == filterCol.alias)) {
                            col = j;
                            break;
                        }
                    }
                }
            }
            fval2 = null;
            fval1 = ibiCompound.currentMergeFilter[i].value;
            ftype = arConstants.FILTER_IN; /* EQ */
            if(col!=-1) gf[gf.length] = new addfilt(col,ftype,fval1,fval2);
        }
        if(gf.length)a_body = this.callFiltReal(a_body,gf,1,0);
    }

    if((gfilt.length)&&(global_filter_type!=2)) { 
        gf=[];
        for (i = 0; i < gfilt.length; i++) {
            j = 0;
            while((this.a_cntl.a_cols[j].name!=global_a_cols[gfilt[i].an_fcol[0]].name)&&
                (j < this.a_cntl.a_cols.length)) j++;
            gf[gf.length] = new addfilt(j,gfilt[i].an_ftype,gfilt[i].as_fpat1,gfilt[i].as_fpat2);
        }
        a_body = this.callFiltReal(a_body,gf,global_filter_type,global_filter_andor);
    }
    if(ibiCompound.drawObjectsList.length) {
        var df=[];
        var comp_filter_type = 1;
        var connector = 0; //AND

        var genFilter = function (mytable,df,comp,comp_filter_type,connector,cwhere) {
            var pmytable;
            var j,i;
            var gcObj;
            var cols;
            var col = comp.aggColumn;
            if(comp.dataColumnType == "define")
                col = comp.defineName;

            pmytable = mytable;
            var fields = [];
            if(typeof col == "object")
                cols = col;
            else
                cols = [col];
            if(mytable.a_cntl.dataReport) {
                pmytable = ibiStd.getTable(mytable.a_cntl.dataReport);
                }

            for(var x=0; x < cols.length; x++) {
                j = pmytable.getColumnByName(cols[x], mytable);
                fields[x] = j;
            if((j==-1)&&(mytable.a_cntl.cacheWriteMode==4)) {
					gcObj = ibiReports.getColumnObject(mytable.a_cntl.cacheOriginalMaster, cols[x],mytable);
                    if(gcObj) {
                    j = mytable.a_capt.length;
                    mytable.a_capt[j] = mytable.copyObject(gcObj);
						mytable.a_cntl.a_cols[j] = mytable.copyObject(ibiReports.getColumnNames(mytable.a_cntl.cacheOriginalMaster, cols[x]));
                    mytable.a_capt[j].b_hide = true;
                    mytable.a_capt[j].ignore = true;
                    if(typeof(comp.filter_datatype)!= "undefined") {
                        mytable.a_capt[j].type = comp.filter_datatype;
                        mytable.a_capt[j].format = comp.filter_dataformat;
                        }
                    }
                }
                if(j<0) return;
            }

            var cond  = ibiStd.mapFilterObjectCondition(comp.filterCondition);

            if(typeof comp.filterConnector != 'undefined')
                connector = comp.filterConnector;

            if(comp.highlight) comp_filter_type=2;
            var val = comp.values;
            var vval = val;
            if(fields.length>1) {
                var na = [];
                var nv = [];
                var cn = 0;
                for(j =0; j < val.length;j++) {
                    if(comp.dataProvider.length>0) {
                        var isIn = inarray(comp.dataProvider[3],val[j],true,comp.clen);
                        if(isIn>-1) {
                            na[cn] = comp.dataProvider[6][isIn];
                            nv[cn] = comp.dataProvider[3][isIn];
                            cn++;
                        }
                    }
                }
                val ={};
                val.forRemoteWhereValues = na;
                val.forLocalMultiValues = nv;
                if(na.length == 0 )return;
                if(nv[0] == ibiMsgStr['all'])
                    val == nv;
                j = fields;
            }

            delete comp.focusWhereCondition;

            if(vval==null || vval.length==0 || (vval.length==1 && vval[0] == ibiMsgStr['all'])) {
                var emptyReport = false;
                if(((cond == arConstants.FILTER_EQ)||(cond == arConstants.FILTER_IN)) && (vval != null) && (vval.length == 0) && !comp.allSelected) {
                    emptyReport = true;
                }
                return emptyReport;
            }

            if (cond == arConstants.FILTER_BETWEEN)
                df[df.length] = new addfilt(j,cond,[val[0]],[val[1]]);
            else
                df[df.length] = new addfilt(j,cond,val,null);

            if(comp.valueAsIs && !comp.valueSpecialSub) {
                    df[df.length-1].valueAsIs = true;
            if(comp.fullWhere)
                    df[df.length - 1].fullWhere = true;
            }
            if(fields.length>1) {
                df[df.length - 1].multi = true;
            }
            if(typeof(comp.filter_datatype)!= "undefined") {
                df[df.length - 1].datatype = comp.filter_datatype;
                df[df.length - 1].dataformat = comp.filter_dataformat;
                }

            if(comp.aggBy) {
                    df[df.length-1].extra = {
                    'infile':mytable.cacheFile+'hh'+df.length,
                    'aggtype':comp.aggType,
                    'addWhere':cwhere,
                    'component':comp
                        };
                }
            if(mytable.a_cntl.cacheWriteMode == 4) {
                var dff = [df[df.length - 1]];
                var a = {'isRemote':true,'cond':null};
                a.cond = [];
                a = mytable.callFiltReal(a, df, comp_filter_type, connector);
                comp.focusWhereCondition = a.cond;
            }

            if(comp.dataColumnType == "define") {
                df[df.length-1].extraDefine = {};
                df[df.length-1].extraDefine.define = isSpecialDefine(pmytable,j)+'\n';
            }
        };

        var cwhere = '';
        if(ibiCompound.hiddenGlobalFilters) {
            for (i = 0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
				if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].disabled)
                    continue;
                if (ibiCompound.hasSameTarget(ibiCompound.hiddenGlobalFilters[i].filterTarget, this.table_name)) {
                    if (!ibiCompound.hiddenGlobalFilters[i].aggBy) {
                        if(genFilter(this, df, ibiCompound.hiddenGlobalFilters[i], comp_filter_type, connector, ''))
                            this.isEmptyReport = true;
                        if (typeof ibiCompound.hiddenGlobalFilters[i].focusWhereCondition != "undefined")
                            cwhere = 'WHERE ' + ibiCompound.hiddenGlobalFilters[i].focusWhereCondition[0].string + '\n';
                    }
                }
            }
        }
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
            if(ibiCompound.drawObjectsList[i].globalHidden || ibiCompound.drawObjectsList[i].usedAsHiddenGlobal)
                continue;
            if(ibiCompound.drawObjectsList[i].deleted)
                continue;
            if(ibiCompound.drawObjectsList[i].disabled)
                continue;
            if((ibiCompound.drawObjectsList[i].active) &&
                ibiCompound.hasSameTarget(ibiCompound.drawObjectsList[i].filterTarget,this.table_name)) {
                if(!ibiCompound.drawObjectsList[i].aggBy) {
                    if(genFilter(this, df, ibiCompound.drawObjectsList[i], comp_filter_type, connector,''))
                        this.isEmptyReport = true;
                    if(typeof ibiCompound.drawObjectsList[i].focusWhereCondition != "undefined")
                        cwhere = 'WHERE '+ibiCompound.drawObjectsList[i].focusWhereCondition[0].string+'\n';
        }
            }
        }
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
            if(ibiCompound.drawObjectsList[i].globalHidden)
                continue;
            if(ibiCompound.drawObjectsList[i].deleted)
                continue;
            if(ibiCompound.drawObjectsList[i].disabled)
                continue;
            if((ibiCompound.drawObjectsList[i].active) &&
                ibiCompound.hasSameTarget(ibiCompound.drawObjectsList[i].filterTarget,this.table_name)) {
                if(ibiCompound.drawObjectsList[i].aggBy)
                    genFilter(this,df,ibiCompound.drawObjectsList[i],comp_filter_type,connector,cwhere);
            }
        }
        if(df.length){
            if(comp_filter_type!=2) {
                a_body = this.callFiltReal(a_body,df,comp_filter_type,connector);
                this.calcType = 2;
            } else { 
                this.haveHighlight = true;
            }
        }
    }
    if(this.isEmptyReport)
        a_body = [];
    for (jj = 0; jj < MyTable.length; jj++) {
		if(MyTable[jj].deleted)
			continue;
        if(MyTable[jj].chartinfo.cfilt.length) { 
            cf=[];
            cfilt = MyTable[jj].chartinfo.cfilt;
            a_cols = MyTable[jj].a_cntl.a_cols;
            for (i = 0; i < cfilt.length; i++) {
                j = this.getColumnByName(a_cols[cfilt[i].an_fcol[0]].name, this);
                if((j==-1)&&(this.a_cntl.cacheWriteMode==4)) {
					gcObj  = ibiReports.getColumnObject(this.a_cntl.cacheOriginalMaster,a_cols[cfilt[i].an_fcol[0]].name,this);
                    if(gcObj) {
                        j = this.a_capt.length;
                        this.a_capt[j] = this.copyObject(gcObj);
                        this.a_cntl.a_cols[j] = this.copyObject(ibiReports.getColumnNames(this.a_cntl.cacheOriginalMaster,a_cols[cfilt[i].an_fcol[0]].name));
                        this.a_capt[j].b_hide = true;
                        this.a_capt[j].ignore = true;
                    }
                }
                if(j!=-1)cf[cf.length] = new addfilt(j,cfilt[i].an_ftype,cfilt[i].as_fpat1,cfilt[i].as_fpat2);
            }
            if(cf.length)a_body = this.callFiltReal(a_body,cf,1,0);
        }
    }
    if(this.tdg_filt.length) 
        a_body = this.callFiltReal(a_body,this.tdg_filt,1,1);
    if(this.sfilt.length) 
        a_body = this.callFiltReal(a_body,this.sfilt,this.filter_type,0);
    if(this.apfilt.length)
        a_body = this.callFiltReal(a_body,this.apfilt,this.filter_type,1);
    for (i = 0; i < maxwindows; i++) {
        if((pwn[i].table_number==this.a_cntl.table_number)&&(pwn[i].chartinfo))
            if((pwn[i].chartinfo.cfilt)&&(pwn[i].chartinfo.cfilt.length)) 
                a_body = this.callFiltReal(a_body,pwn[i].chartinfo.cfilt,this.filter_type,1);
    }

    if(this.chfilt.length) this.haveHighlight=true;
    if(this.cfilt.length) {
        if(this.c_filter_type!=2) a_body = this.callFiltReal(a_body,this.cfilt,this.c_filter_type,0);
        else this.haveHighlight = true;
    }
    if(this.filt.length) {
        if(this.filter_type!=2) a_body = this.callFiltReal(a_body,this.filt,this.filter_type,this.filter_andor);
        else this.haveHighlight = true;
    }
    if(this.a_cntl.cacheMode) {
        if(!this.isEmptyReport)
            if(a_body.cond.length)
                IgetFilterData(this.a_cntl.table_number,a_body.cond);
    } else
    if(this.haveFilters) {
        this.a_filter_cont = [];
        for (jj = 0; jj < a_body.length; jj++) {
            //this.a_filter_cont[jj] = this.copyObject(this.a_all_cont[a_body[jj][0]]);
            this.a_filter_cont[jj] = this.a_all_cont[a_body[jj][0]];
            a_body[jj][0]=jj;
        }
        this.a_filter_body =  this.copyObject(a_body);
    } else {
        this.a_filter_body = null;
        this.a_filter_cont = null;
        this.n_rows_filter_have=0;
    }
}
 
function ICallHigh(isroot,record) {
    var a_body = this.a_all_body;
    if(this.haveFilters) a_body = this.a_filter_body;
    var a_cont = this.a_all_cont;
    var col,ftype,fval1,fval2;
    var saveAndOr;
    var gf, cf, cfilt, i, j;
	var isHigh = false;
    //this.haveHighlight = false;
    this.highChange = true;
    var fieldname;

    this.highCondition = [];

    if(typeof record == "undefined")
        return;
    if(record["$MarkedForHighLight$"]==true) return(1);
    if((gfilt.length)&&(global_filter_type==2)) { 
        gf=[];
        for (i = 0; i < gfilt.length; i++) {
            j = 0;
            while((this.a_cntl.a_cols[j].name!=global_a_cols[gfilt[i].an_fcol[0]].name)&&
                (j < this.a_cntl.a_cols.length)) j++;
            gf[gf.length] = new addfilt(j,gfilt[i].an_ftype,gfilt[i].as_fpat1,gfilt[i].as_fpat2);
        }
        if(isHigh==null) isHigh=true;
		isHigh |= this.callFiltReal(a_body,gf,2,global_filter_andor,record,true);
    }
    if(ibiCompound.drawObjectsList.length) {
        var df=[];
        var comp_filter_type = 1;
        var fields = [];
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
            if((ibiCompound.drawObjectsList[i].active) &&
                ibiCompound.hasSameTarget(ibiCompound.drawObjectsList[i].filterTarget,this.table_name)) {
                if(ibiCompound.drawObjectsList[i].dataColumnType == "define")
                    fieldname = ibiCompound.drawObjectsList[i].defineName;
                else
                    fieldname = ibiCompound.drawObjectsList[i].aggColumn;
                if(typeof fieldname == "object") {
                    j = 0;
                    for(var k=0; k < fieldname.length; k++) {
                        fields[k] = this.getColumnByName(fieldname[k], this);
                        if(fields[k]<0) {
                            j = -1;
                        }
                    }
                } else {
                j = this.getColumnByName(fieldname,this);
                }
                if(j<0) continue;
                if(fields.length)
                    j = fields;
                var cond = ibiStd.mapFilterObjectCondition(ibiCompound.drawObjectsList[i].filterCondition);
                if(ibiCompound.drawObjectsList[i].highlight) comp_filter_type=2;
                var val = ibiCompound.drawObjectsList[i].values;
                if((val.length == 0) || (val[0]==ibiMsgStr['all']))continue;
                df[df.length] = new addfilt(j,cond,val,null);
            }
        }
        if((df.length) && (comp_filter_type==2)) {
			//if(isHigh==null) isHigh=true;
			isHigh |= this.callFiltReal(a_body,df,2,0,record,true);
        }
    }
    if(this.chfilt.length) {
		//if(isHigh==null) isHigh=true;
		isHigh |= this.callFiltReal(a_body,this.chfilt,2,0,record,true);
    }
    if((this.filt.length)&&(this.filter_type==2)) {
		//if(isHigh==null) isHigh=true;
		isHigh |= this.callFiltReal(a_body,this.filt,2,this.filter_andor,record,true);
    }
	//if(isHigh==null) isHigh=false;
    record["$MarkedForHighLight$"]=false;
    if(isHigh && this.a_cntl.dataReport) record["$MarkedForHighLight$"]=true;
    if(isHigh) return(1);
    else return(0);
}

function toDateString(dt) {
    if(!dt) return '';
    var month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var dt1 = dt+'';
    var yy = dt1.substr(0,4);
    var m = dt1.substr(4,2)*1;
    var d =  dt1.substr(6,2)*1;
    return month[m-1]+' '+d+' '+yy;
}

function ICallFiltReal(r_body,e_filt,filter_type,filter_andor,record,doingHighLight,isVisFilter) {
    var BLANK_DISPLAY_AS_VAL = "[BLANK]", BLANK = " ";
    var ss_,sx_,p1,p2,p3, inarraySearchValue, dataType, colBeingFiltered;
    var true_counter, j, i, jj, filterType, strUnderCover, caseUpper;
    var addto = [],ch,v1,vls;
	var addTotal = false;
    var spchars = '\\[^$.|?*+()';
    var a_body = [], s_, r_;
    var rlen = r_body.length;
    var isString = false;
    var isDate = false;
    var isNumber = true, fpdType = false;
    var wherestr,cname;
    var recordmatch;
    var oa;
	var ismissing = false;
    var isHigh=false;
    var cacheMode = this.a_cntl.cacheMode;
    var isGrid = (this.a_cntl.reportView === REPORTGRID ||
                  this.a_cntl.reportView === REPORTROLL ||
                  this.a_cntl.reportView === REPORTPIVOT);
    var cacheDateField;
    var pmytable = this;
    if(this.a_cntl.dataReport) {
        pmytable = ibiStd.getTable(this.a_cntl.dataReport);
    }
    
    if(filter_type==2) cacheMode = false;
    if(filter_andor==1) oa = ' OR\n';
    else oa = ' AND\n';
    if (cacheMode) {
        rlen = 1;
        var cl = r_body.cond.length;
        r_body.cond[cl] = {'string':''};
    }
    if(filter_type==2) {
        rlen = 1;
    }
    var chold = '';
    for (j = 0; j <rlen; j ++){
        true_counter = 0;
        for (i = 0; i < e_filt.length; i++) {
            if ((typeof e_filt[i].as_fpat1[0].forLocalMultiValues == "undefined" ) &&
                    (typeof(e_filt[i].as_fpat1[0][0])=="undefined" || e_filt[i].an_fcol[0] == null)) {
                true_counter++;
            }else{
                recordmatch = true;
                var afcol = e_filt[i].an_fcol;
                if(e_filt[i].multi)
                    afcol = [e_filt[i].an_fcol[0]];
                var mval = '';
                for(var ii=0; ii < afcol.length; ii++ ) {
                    var selectedList = e_filt[i].as_fpat1[ii];
                    var selectedListArray = null;
                    if(e_filt[i].multi) {
                        selectedListArray = e_filt[i].as_fpat1[0].forRemoteWhereValues;
                        selectedList = e_filt[i].as_fpat1[0].forLocalMultiValues;
                    }
                    if(filter_type!=2)this.haveFilters = true;
                    caseUpper = strUnderCover = isString = false;
                    isDate = false;
                    isNumber = false;
                    if(e_filt[i].fullWhere) {
                        p1 = e_filt[i].as_fpat1[ii][0];
                    } else {
                        var lcols = [e_filt[i].an_fcol[ii]];

                        if (e_filt[i].multi)
                            lcols = e_filt[i].an_fcol;
                        for (var ij = 0; ij < lcols.length; ij++) {
                            colBeingFiltered = lcols[ij];
                        if (pmytable.org_capt !== null) {
                            colBeingFiltered = pmytable.org_capt[colBeingFiltered].new_pos;
                        }
                        var filterFormat = pmytable.a_capt[colBeingFiltered].format.match(/\w+/);
                        var fformat = pmytable.a_capt[colBeingFiltered].format;
                        dataType = pmytable.a_capt[colBeingFiltered].type;
                        if(e_filt[i].datatype) {
                            dataType = e_filt[i].datatype;
                            filterFormat = e_filt[i].dataformat.match(/\w+/);
                            fformat = e_filt[i].dataformat;
                        }

                        cacheDateField = false;
                        if (dataType == IBISTR) {
                            isString = true;
                        } else if (dataType == IBIDATE) {
                            isDate = true;
                            cacheDateField = (cacheMode == true);
                        } else if (dataType == IBINUM) {
                            isNumber = true;
                        }

                            if(isNumber)
                                fpdType = ((fformat.indexOf("F") != -1) ||
                                (fformat.indexOf("P") != -1) ||
                                (fformat.indexOf("D") != -1));

                        if(cacheMode)
                            if (e_filt[i].extra || e_filt[i].an_aggtype) {
                                isString = false;
                                isDate = false;
                            }
                        if (typeof e_filt[i].as_fpat1[0].forLocalMultiValues != "undefined")
                            v1 = e_filt[i].as_fpat1[0].forLocalMultiValues[0];
                        else
                        v1 = e_filt[i].as_fpat1[ii][0];
                        if (v1 === BLANK_DISPLAY_AS_VAL) {
                            v1 = BLANK;
                        }
							ismissing = false;
                        if (v1 != missingVal) {
                            vls='';
                            var  v2 = v1+'';
                            for (jj = 0; jj < v2.length; jj++) {
                                ch=v2.charAt(jj);
                                if(spchars.indexOf(ch)!=-1) vls+='\\';
                                vls += ch;
                            }
                            if ((e_filt[i].an_ftype == 2) || (e_filt[i].an_ftype == arConstants.FILTER_OMIT_CS)) {
                                r_ = (isDate && vls.indexOf('/') != -1)
                                     ? vls : eval('/' + vls + '/');
                            }
                            if ((e_filt[i].an_ftype == arConstants.FILTER_CONTAIN) || (e_filt[i].an_ftype == arConstants.FILTER_OMIT)) {
                                if (isDate && vls.indexOf('/') != -1) {
                                    r_ = vls.toUpperCase();
                                    caseUpper = true;
                                } else {
                                    r_ = eval('/' + vls + '/i');
                                }
                            }
							} else
								ismissing = true;
                            p1 = selectedList[0];
                        if(e_filt[i].as_fpat2!=null) p2 = e_filt[i].as_fpat2[0];
                        else p2 = p1;

                        if(!cacheMode) {
                                var rcol = lcols[ij];
                            if(pmytable.a_capt[rcol].isFilterDefine) {
                                sx_ = '';
                                for(var ii2 = 0; ii2<pmytable.a_capt[rcol].fields.length; ii2++ ) {
                                    s_ = this.a_all_cont[r_body[j][0]][pmytable.a_capt[rcol].fields[ii2]];
                                    sx_ += this.IBs[s_[DASTR]];
                                    if(ii2<(pmytable.a_capt[rcol].fields.length-1))
                                        sx_ += arSet.FILTER_SEPARATOR;
                                }
                                ss_ = sx_;
                            } else {
                                if(filter_type!=2)
                                    s_ = this.a_all_cont[r_body[j][0]][rcol];
                                else {
                                    rcol = pmytable.a_capt[rcol].dataField;
                                    s_ = record[rcol];
                                }

									ismissing = (s_[DARAW] < 0);
                                if (ismissing) {
                                    sx_ = (p1 === missingVal) ? missingVal : this.IBs[s_[DASTR]];
                                } else if ((this.IBs[s_[DASTR]] + '') === BLANK) {
                                    strUnderCover = true;
                                    sx_ = BLANK;
                                } else {
                                    filterType = e_filt[i].an_ftype;
                                    if (isDate && (filterType == arConstants.FILTER_CONTAIN_CS ||
                                                   filterType == arConstants.FILTER_CONTAIN    ||
                                                   filterType == arConstants.FILTER_OMIT_CS    ||
                                                   filterType == arConstants.FILTER_OMIT)) {
                                        strUnderCover = true;
                                        sx_ = this.IBs[s_[DASTR]] + '';
                                        if (caseUpper) {
                                            sx_ = sx_.toUpperCase();
                                        }
                                    } else {
                                        if (isDate) {
                                            strUnderCover = true;
                                            sx_ = this.IBs[s_[DARAW]] + '';
                                        } // p167472: raw dates are strings...
                                        else if (isNumber && fpdType) {
                                            sx_ = ibiStd.ibiNumberToFormat(this.IBs[s_[DARAW]], fformat) + '';
                                        } else {
                                            sx_ = this.IBs[s_[DARAW]] + '';
                                        }
                                    }
                                }
                                ss_ = sx_;

                                if (!strUnderCover && dataType != IBISTR && !ismissing) {
                                    ss_ = ss_*1;
                                }
                            }
                            inarraySearchValue = ss_;
                        }
                        if (!isString && !strUnderCover && !ismissing) {
								if (!e_filt[i].valueAsIs || filt.valueSpecialSub) {
                                if(!isDate) {
                                    p1 = p1*1;
                                    p2 = p2*1;
                                }
                                if((cacheMode) && (!isDate)) {
                                    p1 = ibiStd.ibiNumberToFormat(p1,fformat);
                                    p2 = ibiStd.ibiNumberToFormat(p2,fformat);
                                }
                                if (!isDate && fpdType) {
                                    var ff = fformat.indexOf(".");
                                    var roff = (ff != -1)
                                               ? parseInt(fformat.substr(ff + 1))
                                               : 2;
                                    var roundOff = Math.pow(10,roff);
                                    if(e_filt[i].an_ftype == arConstants.FILTER_BETWEEN) {
                                            p1 = Math.round(p1 * roundOff - 0.6) / roundOff;
                                            p2 = Math.round(p2 * roundOff + 0.5) / roundOff;
                                    } else {
                                        p1 = Math.round(p1 * roundOff) / roundOff;
                                        p2 = Math.round(p2 * roundOff) / roundOff;
                                    }
                                    var fixExp = function(value) {
                                        var sp1 = value + '';
                                        var spa, spas, ab, ab2,i, spas2;
                                        var extraPos  = 0;
                                        spas = value;
                                        if (sp1.indexOf("e")!=-1) {
                                            spa = sp1.split('e');
                                            ab = Math.abs(spa[0] * 1)+"";
                                            ab2 = Math.abs(spa[1] * 1);
                                            if(ab.indexOf(".")>-1) {
                                                spas2 = ab.split(".");
                                                ab = spas2[0];
                                                extraPos = spas2[1].length;
                                                ab += spas2[1].substr(0,ab2);
                                            }
                                            spas = "";
                                            if (spa[0] * 1 < 0)
                                                spas += "-";
                                            if (spa[1] * 1 > 0) {
                                                spas += ab;
                                                for (i = 0; i < (ab2-extraPos); i++)
                                                    spas += "0";
                                            } else {
                                                spas += "0.";
                                                for (i = 1; i < (ab2); i++)
                                                    spas += "0";
                                                spas += ab;
                                            }
                                        }
                                        return spas;
                                    };
                                    if(cacheMode) {
                                        p1 = fixExp(p1);
                                        p2 = fixExp(p2);
                                    }
                                }
                            }
                        } else if (cacheMode && !ismissing) {
                            p1 = "'"+p1+"'";
                            p2 = "'"+p2+"'";
                        }
                        if(ij>0)
                            mval += arSet.FILTER_SEPARATOR;
                        mval += ss_;
                    }
                    }
                    if(e_filt[i].multi)
                        inarraySearchValue = mval;
                     if(cacheMode) {
                        var fixMathBug = false;
                        var cacheDateFieldInGrid = (cacheDateField && isGrid);
                        if(e_filt[i].fullWhere) {
                            wherestr = p1;
                        } else {
                            //
                            var genWhereClause = function(p1,p2,col,filt,ftype,isMulti)
                            {
                                var isString = false;
                                var isDate = false;
                                var isNumber = false;
                                var froundOff, ffpos, froff;
                                var colBeingFiltered = col;
                                var wherestr;
                                var fpdType = false, fpdTypeWithDec = false;
                                var roundingFactorStr = "5";
                                var useDTF = false, useIbiDateToFormat = true;
                                var intNegStr, intPosStr, numNeg, numPos, singleEq;
                                var genIN_NOTINLogic = function(fixMathBug, singleEq)
                                { // handle IN as well as NOT IN
                                    var ismissing = false;
                                    var notIn = (ftype == arConstants.FILTER_NOTIN);
                                    if (fpdType) {
                                        intNegStr += "IN (";
                                        intPosStr += "IN (";
                                        numNeg = numPos = 0;
                                    } else {
                                        wherestr += "IN (";
                                    }
                                    for (jj = 0; jj < filt.as_fpat1[ii].length; jj++) {
                                        p3 = filt.as_fpat1[ii][jj];
                                        if (p3 != missingVal) {
                                            if (!filt.valueAsIs || filt.valueSpecialSub) {
                                                if (isString || !useIbiDateToFormat) {
                                                    p3 = "'" + escapeAmper(p3) + "'";
                                                } else if (isDate) {
                                                    p3 = "'" + ibiStd.ibiDateToFormat(p3, pmytable.a_capt[colBeingFiltered].format, undefined, true) + "'";
                                                } else if (isNumber) {
                                                    if (fixMathBug) {
                                                        p3 = p3 * froundOff;
                                                        p3 = Math.round(p3);
                                                    } else {
                                                        p3 = ibiStd.ibiNumberToFormat(p3, fformat);
                                                    }
                                                }
                                            }
                                            if (fpdType) {
                                                if (p3 < 0) {
                                                    ++numNeg;
                                                    intNegStr += p3 + "[ibi$blank]";
                                                } else {
                                                    ++numPos;
                                                    intPosStr += p3 + "[ibi$blank]";
                                                }
                                            } else {
                                                wherestr += p3 + "[ibi$blank]";
                                            }
                                        } else {
                                            ismissing = true;
                                        }
                                    }
                                    if (fpdType) {
                                        intNegStr += ")";
                                        intPosStr += ")";
                                    } else {
                                        wherestr += ")";
                                    }
                                    if (ismissing) {
                                        if (filt.as_fpat1[ii].length == 1) {
                                            wherestr = '';
                                        } else {
                                            wherestr += (notIn) ? " AND " : " OR ";
                                        }
                                        wherestr += ((notIn) ? "NOT " : "") + cname + " EQ MISSING";
                                    }
                                    if (fpdType && !singleEq) {
                                    	var svm = '';
                                    	if(ismissing)
                                    		svm = wherestr;
                                        wherestr = "";
                                        if (numNeg) {
                                            wherestr = intNegStr;
                                            if (numPos) {
                                                wherestr += " OR ";
                                            }
                                        }
                                        if (numPos) {
                                            wherestr += intPosStr;
                                        }
                                        wherestr += svm;
                                    }
                                    if (notIn) {
                                        wherestr = " NOT ( " + wherestr + ")";
                                    }

                                    return wherestr;
                                }; // end genIN_NOTINLogic()

                                if (pmytable.org_capt !== null) {
                                    colBeingFiltered = pmytable.org_capt[colBeingFiltered].new_pos;
                                }
                                var filterFormat = pmytable.a_capt[colBeingFiltered].format.match(/\w+/);
                                var fformat = pmytable.a_capt[colBeingFiltered].format;

                                dataType = pmytable.a_capt[colBeingFiltered].type;
                                if (filt.datatype) {
                                    dataType = filt.datatype;
                                    filterFormat = filt.dataformat.match(/\w+/);
                                    fformat = filt.dataformat;
                                }

                                if (dataType == IBISTR) {
                                    isString = true;
                                } else if (dataType == IBIDATE) {
                                    isDate = cacheDateField = useIbiDateToFormat = true;
                                    useDTF = cacheDateFieldInGrid = false;
                                    if (isGrid) {
                                        var dtFmt = filterFormat[0].toUpperCase();
                                        useIbiDateToFormat = false;
                                        if ((fformat[1] == "H") || (dtFmt.match(/^(?=.*JUL).*$/))) {
                                            useDTF = true;
                                        } else {
                                            if (dtFmt.match(/^(?=.*MT)(?=.*WR).*$/)) {
                                                useIbiDateToFormat = true;
                                            }
                                        }
                                        cacheDateFieldInGrid = true;
                                    }
                                } else if (dataType == IBINUM) {
                                    isNumber = true;
                                }

								if(isNumber)
                                    if ((fformat.indexOf("F") != -1) ||
                                        (fformat.indexOf("P") != -1) ||
                                        (fformat.indexOf("D") != -1)) {
                                        fpdType = true;
                                        froundOff = 1;
                                        ffpos = fformat.indexOf(".");
                                        if (ffpos != -1) {
                                            fpdTypeWithDec = true;
                                            froff = parseInt(fformat.substr(ffpos + 1));
                                            froundOff = Math.pow(10, froff);
                                        }
                                    }

								if(isMulti && isString  && p1 != missingVal)
                                    p1 = "'" + p1 + "'";
								if (!isDate && !isString && (!filt.valueAsIs || filt.valueSpecialSub) &&
                                        ((ftype == arConstants.FILTER_NOTIN) ||
                                        (ftype == arConstants.FILTER_EQ) ||
                                        (ftype == arConstants.FILTER_NE) ||
                                        (ftype == arConstants.FILTER_IN))) {
                                    if (fpdTypeWithDec) {
                                        fixMathBug = true;
                                    }
                                }

                                if (isDate && (!filt.valueAsIs || filt.valueSpecialSub) && useIbiDateToFormat) {
                                    p1 = "'" + ibiStd.ibiDateToFormat(p1, pmytable.a_capt[colBeingFiltered].format,undefined,true) + "'";
                                    p2 = "'" + ibiStd.ibiDateToFormat(p2, pmytable.a_capt[colBeingFiltered].format,undefined,true) + "'";
                                }
                                cname = getCacheFieldName(pmytable, colBeingFiltered);
                                var upcaseThis = (isString &&
                                    ((ftype == arConstants.FILTER_CONTAIN) ||
                                    (ftype == arConstants.FILTER_OMIT)));
//                        if(!isString && !isDate)
//                            if(typeof(this.a_cntl.verbs)!="undefined")
//                                if(this.a_cntl.verbs[0].type=="SUM") {
//                                    //cname = "SUM."+cname;
//                                }
                                if (filt.extra) {
                                    cname = filt.extra.aggtype + "." + cname;
                                } else if (filt.an_aggtype)
                                    cname = filt.an_aggtype + "." + cname;

								if(pmytable.a_capt[colBeingFiltered].isCompute) {
                                    if ((pmytable.a_cntl.cacheMode) && (pmytable.a_cntl.cacheWriteMode==4))
                                    //	cname = " TOTAL " + cname;
                                    	addTotal = true;
                                }

                                if (upcaseThis) {
                                    var filterLength = filterFormat[0].match(/\d+/);
                                    var cnameUpCase = "UPCASE(" + filterLength[0] + "," + cname + ", '" + filterFormat[0] + "')";
                                    cname = cnameUpCase;
                                }

                                if (fpdType) {
                                    intNegStr = " (INT(((" + cname + " * -1.0) * " + froundOff + ") + .5) * -1.0) ";
                                    intPosStr = " INT((" + cname + " * " + froundOff + ") + .5) ";
                                    //ccname = "INT(" + froundOff + " * " + cname + " + .5)";
                                    //ccname = "FMOD("+froundOff+" * "+cname+" + .5,10**31,'D15')";
                                }

                                wherestr = "";
                                if (ii)
                                    wherestr = " AND ";
                                        //if (filt.an_fcol.length > 1) wherestr += "(";
                                if (!fixMathBug) {
                                    wherestr += cname + ' ';
                                }
                                if (isDate) {
                                    if (useDTF) {
                                        wherestr = " DT_FORMAT(" + cname + ", '" + filterFormat[0] + "') ";
                                    } else if (cacheDateFieldInGrid) {
                                        wherestr = cname + ' ';
                                    } else {
                                        if (filterFormat[0].indexOf("S") != -1 && (!filt.valueAsIs || filt.valueSpecialSub))
                                            wherestr = "(HDATE(" + cname + ",'YYMD')) ";
                                        //    else
                                        //        wherestr = "(DATECVT(" + cname + ",'" + filterFormat[0] + "','A8YYMD')) ";
                                        // }
                                    }
                                }
                                if(p1 == missingVal)
                                    p1 = "MISSING";
                                else
								if (!filt.valueAsIs || filt.valueSpecialSub) {
                                    p1 = escapeAmper(p1);
                                    p2 = escapeAmper(p2);
                                    if (!useIbiDateToFormat) {
                                        p1 = "'" + p1 + "'";
                                        p2 = "'" + p2 + "'";
                                    }
                                }
								var notOp = false;
                                switch(ftype) {
                                case arConstants.FILTER_CONTAIN_CS: wherestr += "CONTAINS "+p1; break;
                                case arConstants.FILTER_EQ     : wherestr += "EQ "+p1; break;
                                case arConstants.FILTER_CONTAIN: wherestr += "CONTAINS " + ((upcaseThis) ? p1.toUpperCase() : p1); break;
                                case arConstants.FILTER_GT: {
                                    if (isNumber) {
                                        if (fpdTypeWithDec) {
                                            wherestr += "GE " + (getNextNumber(p1, fformat) + roundingFactorStr);
                                        } else if (fpdType) {
                                            wherestr = (p1 < 0) ? intNegStr : intPosStr;
                                            wherestr += "GT " + p1;
                                        } else {
                                            wherestr += "GT " + p1;
                                        }
                                    } else {
                                        wherestr += "GT " + p1;
                                    }
                                    break;
                                }
                                case arConstants.FILTER_LT: {
                                    if (isNumber) {
                                        if (fpdTypeWithDec) {
                                            wherestr += "LE " + (getNextNumber(p1, fformat, "-") + roundingFactorStr);
                                        } else if (fpdType) {
                                            wherestr = (p1 < 0) ? intNegStr : intPosStr;
                                            wherestr += "LT " + p1;
                                        } else {
                                            wherestr += "LT " + p1;
                                        }
                                    } else {
                                        wherestr += "LT " + p1;
                                    }
                                    break;
                                }
                                case arConstants.FILTER_GE: {
                                    if (isNumber) {
                                        if (fpdTypeWithDec) {
                                            wherestr += "GT " + (getNextNumber(p1, fformat, "-") + roundingFactorStr);
                                        } else if (fpdType) {
                                            wherestr = (p1 < 0) ? intNegStr : intPosStr;
                                            wherestr += "GE " + p1;
                                        } else {
                                            wherestr += "GE " + p1;
                                        }
                                    } else {
                                        wherestr += "GE " + p1;
                                    }
                                    break;
                                }
                                case arConstants.FILTER_LE: {
                                    if (isNumber) {
                                        if (fpdTypeWithDec) {
                                            wherestr += "LT " + (getNextNumber(p1, fformat) + roundingFactorStr);
                                        } else if (fpdType) {
                                            wherestr = (p1 < 0) ? intNegStr : intPosStr;
                                            wherestr += "LE " + p1;
                                        } else {
                                            wherestr += "LE " + p1;
                                        }
                                    } else {
                                        wherestr += "LE " + p1;
                                    }
                                    break;
                                }
                                case arConstants.FILTER_BETWEEN:
                                    if (isDate && !cacheDateFieldInGrid) {
                                        wherestr += "FROM "+p1+" ";
                                    } else {
                                        wherestr += "GE "+p1+" AND ";
                                        if (useDTF) {
                                            wherestr += " DT_FORMAT(" + cname + ", '" + filterFormat[0] + "') ";
                                        } else if (cacheDateFieldInGrid) {
                                            wherestr += cname + ' ';
                                        } else {
                                            if ((isDate) && (filterFormat[0].indexOf("S") != -1) && (!filt.valueAsIs || filt.valueSpecialSub))
                                                wherestr += "(HDATE(" + cname + ",'YYMD')) ";
                                            //     else
                                            //         wherestr += "(DATECVT(" + cname + ",'" + filterFormat[0] + "','A8YYMD')) ";
                                            else
                                                wherestr += cname;
                                        }
                                    }
                                    if (isDate && !cacheDateFieldInGrid) {
                                        wherestr += " TO "+p2;
                                    } else {
                                        wherestr += " LE "+p2;
                                    }
                                    break;
                                case arConstants.FILTER_NOTBETWEEN:
                                    wherestr += "LT "+p1+" OR ";
                                    if (useDTF) {
                                        wherestr += " DT_FORMAT(" + cname + ", '" + filterFormat[0] + "') ";
                                    } else if (cacheDateFieldInGrid) {
                                        wherestr += cname + ' ';
                                    } else {
                                        if ((isDate) && (filterFormat[0].indexOf("S") != -1) && (!filt.valueAsIs || filt.valueSpecialSub))
                                            wherestr += "(HDATE(" + cname + ",'YYMD')) ";
                                        //    else
                                        //        wherestr += "(DATECVT(" + cname + ",'" + filterFormat[0] + "','A8YYMD')) ";
                                        else
                                            wherestr += cname;
                                    }
                                    wherestr += " GT "+p2;
                                    break;
                                case arConstants.FILTER_IN:
                                    singleEq = false;
                                    p3 = filt.as_fpat1[ii][0];
                                    if ((filt.as_fpat1[ii].length == 1) && (p3 != missingVal)) {
                                        if (fpdType) {
                                            wherestr = (p3 < 0) ? intNegStr : intPosStr;
                                            singleEq = true;
                                        }
                                        wherestr += "EQ ";
                                        if (p3 != missingVal) {
                                            if (!filt.valueAsIs || filt.valueSpecialSub) {
                                                if (isString || !useIbiDateToFormat) {
                                                    p3 = "'" + escapeAmper(p3) + "'";
                                                } else if (isDate) {
                                                    p3 = "'" + ibiStd.ibiDateToFormat(p3, pmytable.a_capt[colBeingFiltered].format, undefined, true) + "'";
                                                } else if (isNumber) {
                                                    if (fixMathBug) {
                                                        p3 = Number(p3) * froundOff; // p3 = parseInt(p3 * froundOff, 10);
                                                        p3 = Math.round(p3);
                                                    } else {
                                                        p3 = ibiStd.ibiNumberToFormat(p3, fformat);
                                                    }
                                                }
                                            }
                                        } else {
                                            p3 = "MISSING";
                                        }
                                        wherestr += p3 + "[ibi$blank]";
                                    } else {
                                        wherestr = genIN_NOTINLogic(fixMathBug, singleEq);
                                    }
                                    break;
                                case arConstants.FILTER_OMIT_CS:
                                    wherestr += "NOT CONTAINS " + p1;
                                    break;
                                case arConstants.FILTER_OMIT   :
                                    wherestr += "NOT CONTAINS " + ((upcaseThis) ? p1.toUpperCase() : p1);
                                    break;
                                case arConstants.FILTER_NE     :
                                    wherestr += "NE " + p1;
                                    break;
                                case arConstants.FILTER_NOTIN:
										notOp = true;
                                    wherestr = genIN_NOTINLogic(fixMathBug, false);
                                    break;
                                case 2: case 10: break;
                            }
                                if(addTotal) {
                                    if(notOp)
                                        wherestr = " TOTAL ( " + wherestr + ")";
                                    else
                                        wherestr = " TOTAL " + wherestr;
                                }
                                return wherestr;
                            };

                            wherestr = '';
                            var vftype = e_filt[i].an_ftype;
                            if (e_filt[i].multi) {
                                if(vftype ==arConstants.FILTER_IN )
                                    vftype = arConstants.FILTER_EQ;
                                if(vftype ==arConstants.FILTER_NOTIN)
                                    vftype = arConstants.FILTER_NE;
                                for(var ik=0; ik < selectedListArray.length; ik++) {
									if(selectedListArray.length>1)
                                        wherestr += "(";
                                    for (ij = 0; ij < lcols.length; ij++) {
                                        p1 = selectedListArray[ik][ij];
                                        wherestr += genWhereClause(p1,null, lcols[ij], e_filt[i], vftype,true);
                                        if(ij<(lcols.length-1)) {
                                            if (vftype == arConstants.FILTER_EQ)
                                                wherestr += " AND ";
                                            else
                                                wherestr += " OR ";
                                        }
                                    }
                                    if(selectedListArray.length>1)
                                        wherestr += ")";
                                    if(ik<(selectedListArray.length-1)) {
                                        if (vftype == arConstants.FILTER_EQ)
                                            wherestr += " OR ";
                                        else
                                            wherestr += " AND ";
                                    }
                                }
                            } else
                                wherestr += genWhereClause(p1,p2,lcols[0],e_filt[i],vftype);



                            //if (e_filt[i].an_fcol.length > 1) wherestr += ")";
                        chold = '';
                        if(e_filt[i].extra) {
                            if(ii)
                                wherestr = wherestr.substr(4);
                            if(fixMathBug)
                                chold = 'TABLE FILE '+this.a_cntl.cacheOriginalMaster+' SUM '+cname+' NOPRINT BY '+e_filt[i].extra.component.aggBy+
                                        ' '+e_filt[i].extra.addWhere + ' WHERE TOTAL (' + wherestr + ') ON TABLE HOLD FORMAT BINARY AS ' + e_filt[i].extra.infile + '\nEND\n';
                            else
                                chold = 'TABLE FILE '+this.a_cntl.cacheOriginalMaster+' SUM '+cname+' NOPRINT BY '+e_filt[i].extra.component.aggBy+
                                        ' '+e_filt[i].extra.addWhere + ' WHERE TOTAL (' + wherestr + ') ON TABLE HOLD FORMAT SQL_SCRIPT AS ' + e_filt[i].extra.infile + '\nEND\n';
                            wherestr = '';
                            if(ii) 
                                wherestr = " AND ";
                            var shname = e_filt[i].extra.component.aggBy.split('.');
                            shname = shname[shname.length-1];
                            wherestr += ' DB_INFILE (\''+e_filt[i].extra.infile+'\','+e_filt[i].extra.component.aggBy+','+shname+' )';
                        }
                    }
                    if(e_filt[i].extraDefine) {
                        chold += "DEFINE FILE ";
                        if(this.a_cntl.cacheWriteMode == 4)
                            chold += this.a_cntl.cacheOriginalMaster;
                        else
                            chold += 'foccache/'+pmytable.cacheFile;
                        chold += " ADD\n";
                        chold += e_filt[i].extraDefine.define+"\n";
                        chold += "END\n";
                    }
                    if(e_filt[i].fullWhere) {
                        r_body.cond[cl]['full'] = wherestr;
                    } else {
                            if((e_filt[i].multi) && ( e_filt.length>1))
                                wherestr = '(' + wherestr +')';
                        r_body.cond[cl]['string']=r_body.cond[cl]['string']+' '+wherestr;
                            if (((i + 1) < e_filt.length) && ((ii == e_filt[i].an_fcol.length - 1)||(e_filt[i].multi)))
                            r_body.cond[cl]['string']+=oa;
                        if(e_filt[i].an_aggtype) {
                            r_body.cond[cl].aggtype = e_filt[i].an_aggtype;
                        }
                    }
                    if(chold) {
                        if(typeof(r_body.cond[cl].chold)=="undefined")
                            r_body.cond[cl].chold = "";
                        else
                            r_body.cond[cl].chold +="\n";
                        r_body.cond[cl].chold += chold;
                    }
                    
                    } else {

 						if(isNumber) {
 							for(var sl =0; sl < selectedList.length; sl++)
 								selectedList[sl] = selectedList[sl]*1;
						}
                        if (!(
                            (e_filt[i].an_ftype == arConstants.FILTER_NE && !inarray(selectedList, inarraySearchValue)) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_NOTIN && !inarray(selectedList, inarraySearchValue)) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_OMIT    &&
                                sx_ != missingVal && sx_.search(r_) == -1) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_OMIT_CS &&
                                sx_ != missingVal && sx_.search(r_) == -1) ||
                            (e_filt[i].an_ftype ==10 &&
                                            ss_ != selectedList[0]) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_IN      &&
                                            inarray(selectedList, inarraySearchValue)) ||
                            ((e_filt[i].an_ftype== arConstants.FILTER_BETWEEN &&
                                (ss_ >= p1 && ss_ <= p2)))||
                            ((e_filt[i].an_ftype== arConstants.FILTER_NOTBETWEEN &&
                                (ss_ < p1 || ss_ > p2)))||
                            ((e_filt[i].an_ftype== arConstants.FILTER_LE &&
                                ss_ <= p1))||
                            ((e_filt[i].an_ftype== arConstants.FILTER_GE &&
                                ss_ >= p1))||
                            ((e_filt[i].an_ftype== arConstants.FILTER_LT &&
                                ss_ < p1))||
                            ((e_filt[i].an_ftype== arConstants.FILTER_GT &&
                                ss_ > p1))||
                            (e_filt[i].an_ftype == arConstants.FILTER_CONTAIN &&
                                sx_ != missingVal && sx_.search(r_) != -1)||
                            (e_filt[i].an_ftype ==2 && sx_ != missingVal &&
                                sx_.search(r_) != -1) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_EQ &&
                                ss_ == p1) ||
                            (e_filt[i].an_ftype == arConstants.FILTER_CONTAIN_CS &&
                            sx_ != missingVal && sx_.indexOf(selectedList[0]) != -1)
                        )) recordmatch = false;
                    }
                }
                if(recordmatch) true_counter++;
            }
        }
        if(!cacheMode) {
            if(filter_type!=2)  {
                if(((filter_andor==1)&&(true_counter>0))||
                    ((filter_andor==0)&&(true_counter == e_filt.length))) {
                    a_body[a_body.length]=r_body[j];
                }
            } else {
                if(((filter_andor==1)&&(true_counter>0))||
                    ((filter_andor==0)&&(true_counter == e_filt.length))) 
                        isHigh = true;
            }
        } else a_body = r_body;
    }
    if(filter_type!=2) return a_body;
    else return isHigh;
}

function IExeFilt(i_,isglobal) {
    var j;
    if(isglobal) global_filter_type = i_;
        else this.filter_type = i_;
    if (i_){
        if((isglobal) && (gfilt.length==0)) return false;
        else
        if((!isglobal) && (this.filt.length==0)) return false;
 
        /*if(isglobal) 
            for(var i=0; i<MyTable.length; i++) {
                MyTable[i].filter_type = i_; 
            }*/
    }else{
        if(isglobal) {
            gfilt = [];
            /*for(var i=0; i<MyTable.length; i++)
                if(MyTable[i].filt.length==0) 
                    MyTable[i].filter_type = 0; */
        } else {
            this.filt = [];
            for (j = 0; j < this.a_f_body.length; j ++)
                this.a_f_body[j][1] = 0;
            this.filter_type = 0;
            this.filtCol = [];
        }
    }
    this.redrawCharts = true;
    if(!isglobal) {
         //this.clearSelection();
        this.o_paging.c = 0;
        this.filterChange = true;
        ibiGrid.show(false,this);
    } else {
        for(var i=0; i < MyTable.length; i++) {
			if(MyTable[i].deleted)
				continue;
             //MyTable[i].clearSelection();
            MyTable[i].o_paging.c = 0;
            MyTable[i].filterChange = true;
            ibiGrid.show(false,MyTable[i]);
        }
    }
    if(Events['onFilterChange'].callback!=null){
        var tn = -1;
        if(!isglobal) tn = this.a_cntl.table_number;
        Events['onFilterChange'].callback(tn);
    }
    return true;
}

function IExePage(n) {
    this.o_paging.c = n; 
    var obj2 = document.getElementById('gotopage');
    if(obj2) {
        obj2.innerHTML='';
        obj2.style.visibility='hidden';
    }
    ibiGrid.show(false,this);
}
 
function ICopyObj(obj_from)
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
        if(typeof(obj_from[i])=='function') continue;
        obj[i] = this.copyObject(obj_from[i]);
    }
    return(obj);
}
 

 
function cursor_wait() {d.body.style.cursor = 'wait';}
 
function cursor_clear() {d.body.style.cursor = 'default';}




function hasColFromOrg(col,a_capt)
{
    var i;
    for(i=0;i<a_capt.length;i++)
        if(a_capt[i].orgCol==col) return i;
    return -1;
}


function getColbyFoc(a_capt,col)
{
    var i = 0;
    for(i=0;i<a_capt.length;i++)
        if(a_capt[i].focCol == col) return i;
    return -1;
}

function getColbyName(columns,fieldName)
{
    var i = 0;
    for(i=0;i<columns.length;i++)
        if(columns[i].field == fieldName) return i;
    for(i=0;i<columns.length;i++)
        if(columns[i].name == fieldName) return i;
    return -1;
}

function _IgetStyleNode(snode, stnode, parent)
{ // assumption: snode and stnode are defined
    var attributeValue, snodeAttrib = snode.attrib;
    var  borderOptions = {};
    borderOptions[0] = "0px";
    borderOptions[-1]= "0px";
    borderOptions[-2]= "0px";
    borderOptions[-3]= "1px";
    borderOptions[-4]= "2px";
    borderOptions[-5]= "3px";
    borderOptions[-6]= "1px";

    if(snode.hierarchy)
        stnode.hierarchy = snode.hierarchy;
    attributeValue = snodeAttrib.size;
    if (attributeValue && attributeValue != 10) { 
        if ((parent==null) || (attributeValue != parent.attrib.size)) {
            stnode.fontSize = attributeValue+"pt";
        }
    }
    attributeValue = snodeAttrib.textalign;
    if (attributeValue && attributeValue != "") { 
        if ((parent==null) || (attributeValue != parent.attrib.textalign)) {
            stnode.textAlign = attributeValue;
        }
    }
    attributeValue = snodeAttrib.color;
    if (attributeValue != null && attributeValue != "#000000") {
        if ((parent==null) || (attributeValue != parent.attrib.color)) {
            stnode.color = attributeValue;
        }
    }
    attributeValue = snodeAttrib.backcolor;
    if (attributeValue != null && attributeValue != "#FFFF99") {
        if ((parent==null) || (attributeValue != parent.attrib.backcolor)) {
            stnode.backgroundColor = attributeValue;
        }
    }
    attributeValue = snodeAttrib.font;
    if (attributeValue != null && attributeValue != 'DEFAULT-FIXED') {
        if ((parent==null) || (attributeValue != parent.attrib.font)) {
            stnode.fontFamily = attributeValue;
        }
    }
    attributeValue = snodeAttrib.viscolor;
    if (typeof(attributeValue) != "undefined") {
        if ((parent==null) || (attributeValue != parent.attrib.viscolor)) {
            stnode.viscolor = attributeValue;
        }
    }
    attributeValue = snodeAttrib.viscolorneg;
    if (typeof(attributeValue) != "undefined") {
        if ((parent==null) || (attributeValue != parent.attrib.viscolorneg)) {
            stnode.viscolorneg = attributeValue;
        }
    }

    if(stnode.border==null)
        stnode.border = {'top':{},'bottom':{},'left':{},'right':{}};

    if (typeof(snodeAttrib.borderTopWidth)!="undefined") {
        if(snodeAttrib.borderTopWidth>0)
            stnode.border.top.width = snodeAttrib.borderTopWidth+'px';
        else {
            stnode.border.top.width = borderOptions[snodeAttrib.borderTopWidth];
        }

    }
    if (typeof(snodeAttrib.borderBottomWidth)!="undefined") {
        if(snodeAttrib.borderBottomWidth>0)
            stnode.border.bottom.width = snodeAttrib.borderBottomWidth+'px';
        else
            stnode.border.bottom.width = borderOptions[snodeAttrib.borderBottomWidth];
    }
    if (typeof(snodeAttrib.borderLeftWidth)!="undefined") {
        if(snodeAttrib.borderLeftWidth>0)
            stnode.border.left.width = snodeAttrib.borderLeftWidth+'px';
        else
            stnode.border.left.width = borderOptions[snodeAttrib.borderLeftWidth];
    }
    if (typeof(snodeAttrib.borderRightWidth)!="undefined") {
        if(snodeAttrib.borderRightWidth>0)
            stnode.border.right.width = snodeAttrib.borderRightWidth+'px';
        else
            stnode.border.right.width = borderOptions[snodeAttrib.borderRightWidth];
    }

    if (typeof(snodeAttrib.borderTopStyle)!="undefined") {
        stnode.border.top.style = snodeAttrib.borderTopStyle;
    }
    if (typeof(snodeAttrib.borderBottomStyle)!="undefined") {
        stnode.border.bottom.style = snodeAttrib.borderBottomStyle;
    }
    if (typeof(snodeAttrib.borderLeftStyle)!="undefined") {
        stnode.border.left.style = snodeAttrib.borderLeftStyle;
    }
    if (typeof(snodeAttrib.borderRightStyle)!="undefined") {
        stnode.border.right.style = snodeAttrib.borderRightStyle;
    }

    if (typeof(snodeAttrib.borderTopColor)!="undefined") {
        stnode.border.top.color = snodeAttrib.borderTopColor;
    }
    if (typeof(snodeAttrib.borderBottomColor)!="undefined") {
        stnode.border.bottom.color = snodeAttrib.borderBottomColor;
    }
    if (typeof(snodeAttrib.borderLeftColor)!="undefined") {
        stnode.border.left.color = snodeAttrib.borderLeftColor;
    }
    if (typeof(snodeAttrib.borderRightColor)!="undefined") {
        stnode.border.right.color = snodeAttrib.borderRightColor;
    }
    if (snodeAttrib.bold) { stnode.bold = true; }
    if (snodeAttrib.italic) { stnode.italic = true; }
    if (snodeAttrib.underline) { stnode.underline = true; }
    if (typeof(snodeAttrib.drillindex) != "undefined") { 
        stnode.MDdrillindex = snodeAttrib.drillindex;
    }
	if (typeof(snode.computeScript) != "undefined") {
		stnode.computeScript = snode.computeScript;
	}
}

var styleHasCond = false;
function IgetStyleNode(snode,col,row,stnode,parent,values,acrossColumn,printColNum,dataType,colCapt)
{
    var usethis = false, thisAcrossColumn = false;
    var scol = snode.column;
    var dt = dataType;
    if(typeof(dataType)=="undefined") dt = ST_DATA;

    if (scol>9999) {
        if (typeof(acrossColumn) != 'undefined') {
            if (acrossColumn < 0) return;
            if ((printColNum < snode.attrib.firstAcross) ||
                (printColNum > snode.attrib.lastAcross)) { // printColNum: avoids noprint cols
                thisAcrossColumn = false;
            } else {
                var mod = (printColNum - snode.attrib.firstAcross) % snode.attrib.acrossGroupCols;
                thisAcrossColumn = ((mod + snode.attrib.firstAcross) == acrossColumn);
            }
        }
    }

    if (((snode.type==ST_REPORT) && ((scol == -1) || (getRealColumn(this,scol-1) == col))) ||
        ((scol==-1) && (snode.type==dt)) ||
        ((snode.type==dt) && ((getRealColumn(this,scol-1) == col)||((scol==10001)&&(colCapt.isTotal))))   ||
        thisAcrossColumn) {
        if (snode.attrib.cond) {
            var val1, val2, col1 = -1, col2, cond;
            cond = snode.attrib.cond;
            if (typeof cond[0].subscr !== 'undefined') {
                col1 = getColbyFoc(this.a_capt, cond[0].col1);
            }
            if (col1 == -1) {
                col1 = getColbyName(this.a_cntl.a_cols,cond[0].field1);
            }
            col2 = (typeof(cond[0].val)=='undefined') ?
                    getColbyName(this.a_cntl.a_cols,cond[0].field2) : 0;
            usethis = false;

            // make sure we are on the right column for checking conditional style
            // when it is not across row
            if ( (typeof(snode.acrossColumn) != 'undefined') && (snode.acrossColumn != 0) ) {
                // the conditional styleing is on the oth col, i.e whole row
                //if (col1 != 0) { col1 = col; }
                if (col1 > (snode.attrib.firstAcross - 1)) { // only for conditions on VERBs
                    // add correct index into acrossgroup for conditional test column node
                    col1 += (snode.attrib.acrossGroupCols * 
                             (~~((printColNum - snode.attrib.firstAcross) / snode.attrib.acrossGroupCols)));
                }
            }

            if ((col1 != -1) && (col2 != -1)) {
				if(typeof(cond[0].val)!='undefined')
					val2 = cond[0].val;
				else
				if(typeof values != "object")
					val2 = values;
				else
					val2 = this.IBs[values[col2][DARAW]];

				if(typeof values != "object")
					val1 = values;
				else
                    val1 = this.IBs[values[col1][DARAW]];

                if(typeof(val1)=='string') 
                    val1 = ibiUtil.StripSpace(val1,true,true);
                if(typeof(val2)=='string') 
                    val2 = ibiUtil.StripSpace(val2,true,true);

                /* Op 1="EQ", 2="NE", 3="GT", 4="LT", 5="GE", 6="LE" */
                switch (cond[0].op) {
                    case 1: if(val1==val2) usethis = true; break;
                    case 2: if(val1!=val2) usethis = true; break;
                    case 3: if(val1>val2) usethis = true; break;
                    case 4: if(val1<val2) usethis = true; break;
                    case 5: if(val1>=val2) usethis = true; break;
                    case 6: if(val1<=val2) usethis = true; break;
                }
            }
             styleHasCond = true;
        }
        else
        {
            //be aware conditional style are hidden as children of snode object
            // done in (usethis) section.
            //if(snode.child) 
            //        for(var i=0; i< snode.child.length;i++)
            //            this.getStyleNode(snode.child[i],col,row,stnode,snode,values,snode.child[i].acrossColumn);
             //} else
            usethis = true;
        }
    }
    if(usethis) {
        _IgetStyleNode(snode, stnode, parent);
        if (snode.child) {
            for (var i=0; i < snode.child.length; i++) {
                if (this.getStyleNode(snode.child[i],col,row,stnode,snode,values,snode.child[i].acrossColumn,printColNum,dt,colCapt)) {
                    break;
                }
            }
        }
    }
    return usethis;
}

function IgetReportStyleNode(snode,stnode,parent,nodeType,column)
{
    var nt = ST_REPORT;
    if(typeof(nodeType)!="undefined") nt = nodeType;
    var col = -1;
    if((typeof(column)!="undefined") && (column>-1))
        col = column;
    if (((snode.type == nt) || (snode.type == ST_REPORT)) && ((getRealColumn(this,snode.column-1) == col)||(snode.column == -1))) {
        _IgetStyleNode(snode, stnode, parent);
        if (snode.child) {
            for (var i=0; i < snode.child.length; i++) {
                this.getReportStyleNode(snode.child[i],stnode,snode,nt,col);
            }
        }
    }
    return;
}

function IgetReportStyle(returntype,nodeType,column)
{
    var nt = ST_REPORT;
    if(typeof(nodeType)!="undefined") nt = nodeType;
    var style = ' style="';
    var m = 0;
    var dontunder = false;
    var snode = this.o_look.styles;
    var stnode = {
        'fontSize':'10pt',
        'color':null,
        'backgroundColor':null,
        'textAlign':null,
        'fontFamily':'DEFAULT-FIXED',
        'bold':false,
        'italic':false,
        'underline':false,
        'viscolor':null,
        'viscolorneg':null,
        'MDdrillindex':null,
        'hierarchy':null,
        'border':null,
        'cursor':null
    };
    if(nt != ST_REPORT) {
        stnode.fontFamily = null;
        stnode.fontSize = null;
    }
    var col = column;
    if((typeof(column)!="undefined") && (col > -1))
        if(this.a_capt[col].orgCol>-1)
            col = this.a_capt[col].orgCol;
    if(snode!=null) this.getReportStyleNode(snode,stnode,null,nt,col);
    if(stnode.textAlign!=null) style += "text-align:"+stnode.textAlign+";";
    if(stnode.fontSize!=null)style += "font-size: "+stnode.fontSize+";";
    if(stnode.fontFamily!=null)style += "font-family: "+stnode.fontFamily+";";
    if(stnode.color!=null) style += "color:"+stnode.color+";";
    if(stnode.backgroundColor!=null) {
        if(typeof(stnode.backgroundColor)!='object')
            style += "background-color:"+stnode.backgroundColor+";";
        else {
            style += "background-color:"+stnode.backgroundColor[m]+";";
        }
    }
    if(stnode.bold) style += "font-weight:bold;";
    if(stnode.italic) style += "font-style:italic;";
    if((stnode.underline)&&(!dontunder)) style += "text-decoration:underline;";
    if((stnode.cursor)&&(!dontunder)) style += "cursor:"+stnode.cursor+";";
    if(stnode.border) {
        if(stnode.border.top) {
            if(typeof(stnode.border.top.width)!="undefined")
                style += "border-top-width:"+stnode.border.top.width+';';
            if(typeof(stnode.border.top.style)!="undefined")
                style += "border-top-style:"+stnode.border.top.style+';';
            if(typeof(stnode.border.top.color)!="undefined")
                style += "border-top-color:"+stnode.border.top.color+';';
        }
        if(stnode.border.bottom) {
            if(typeof(stnode.border.bottom.width)!="undefined")
                style += "border-bottom-width:"+stnode.border.bottom.width+';';
            if(typeof(stnode.border.bottom.style)!="undefined")
                style += "border-bottom-style:"+stnode.border.bottom.style+';';
            if(typeof(stnode.border.bottom.color)!="undefined")
                style += "border-bottom-color:"+stnode.border.bottom.color+';';
        }
        if(stnode.border.left) {
            if(typeof(stnode.border.left.width)!="undefined")
                style += "border-left-width:"+stnode.border.left.width+';';
            if(typeof(stnode.border.left.style)!="undefined")
                style += "border-left-style:"+stnode.border.left.style+';';
            if(typeof(stnode.border.left.color)!="undefined")
                style += "border-left-color:"+stnode.border.left.color+';';
        }
        if(stnode.border.right) {
            if(typeof(stnode.border.right.width)!="undefined")
                style += "border-right-width:"+stnode.border.right.width+';';
            if(typeof(stnode.border.right.style)!="undefined")
                style += "border-right-style:"+stnode.border.right.style+';';
            if(typeof(stnode.border.right.color)!="undefined")
                style += "border-right-color:"+stnode.border.right.color+';';
        }
    }
    if(returntype == 'NODE') return stnode;
    else return style;
}

function IsetHrefValues(href,rowinfo)
{
    var nhref = href;
    var val;
    var ucol;
    var l,ucol2;
    var formated, noPrint, str, res, colType, col;
    var reg = /\$[A-Z]*\$[0-9]*\$/g;

	while ((res = reg.exec(href)) != null) {
	    str = res[0];
	    colType = str.match(/\$[A-Z]*\$/)[0];
	    col = str.match(/\d/g)[0];

	    formated = noPrint = false;
	    switch (colType) {
	        case "$NOPRINT$":
	            noPrint = true;
	            break;
	        case "$COL_F$":
	        case "$NOPRINT_F$":
	            noPrint = true;
	            formated = true;
	            break;
	        case "$COL$":
	            noPrint = false;
	            break;
	        default:
	            noPrint = formated = false;
	            break;
	    }

	    if (this.isRollUp) {
	        ucol2 = (noPrint) ? col : getRealColumn(this, col);
	        ucol = -1;
	        for (l = 0; l < this.a_capt.length; l++) {
	            if (this.a_capt[l].orgCol == ucol2) {
	                ucol = l;
	                break;
	            }
	        }
	    } else {
	        ucol = (noPrint) ? col : getRealColumn(this, col);
	    }
	    if (ucol > -1) {
	        val = (formated)
                ? URLencode(this.IBs[rowinfo[ucol][DARAW]] + '')
                : URLencode(this.IBs[rowinfo[ucol][DASTR]] + '');
	    }
	    else {
	        val = "ERR";
	    }
	    nhref = nhref.replace(str, val);
	}
	return nhref;
}

var CD_AcrossColumn = 10002;

function IgetHrefNodeReal(snode,col,row)
{
    var href = null,href2;

        // Has to decide if this is a across_column
    var realCol = -1;
    if ( snode.attrib.href )
    {
            if ( snode.column == CD_AcrossColumn )
            {
            var testCol = snode.attrib.firstAcross;
            while ( testCol <= snode.attrib.lastAcross )
            {
                var realTestCol;
                 realTestCol = getRealColumn(this, testCol );
                if ( realTestCol == col )
                {
                                realCol = realTestCol;
                                break;
                        }
                testCol += snode.attrib.acrossGroupCols;
            }
                }
                else
                {
            realCol = getRealColumn(this,snode.column-1);
        }
          
        if ( realCol == col )
        {
            return snode.attrib.href;
        }
    }

    if(snode.child) 
        for(var i=0; i< snode.child.length;i++) {
            href2=this.getHrefNodeReal(snode.child[i],col,row);
            if(href2!=null) href = href2;
        }
    return href;
}


function IgetHrefNode(snode,col,row)
{
    var href;
    if(typeof(this.saveHrefs[col])!='undefined') return this.saveHrefs[col];
    href = this.getHrefNodeReal(snode,col,row);
    if(typeof(this.saveHrefs[col])=='undefined') this.saveHrefs[col]=href;
    return href;
}

function IgetColumnStyle(col,row,indexrow,val,dispval,printColNum,returntype)
{
    var style = ' style="';
    var ucol = col;
    var m = 0;
    var dontunder = false;
    styleHasCond = false;
    if(this.a_capt[col].orgCol>-1) ucol = this.a_capt[col].orgCol;
    var snode = this.o_look.styles;
    var stnode = {
        'fontSize':'10pt',
        'color':'Black',
        'backgroundColor':null,
        'textAlign':null,
        'fontFamily':'DEFAULT-FIXED',
        'bold':false,
        'italic':false,
        'underline':false,
        'viscolor':null,
        'viscolorneg':null,
        'MDdrillindex':null,
        'cursor':null,
        'border':null,
		'computeScript':null
    };
    var addBorderWidthNonIE = (typeof window.scrollX !== 'undefined');

    if(typeof(this.saveStyles[col])!='undefined') {
        stnode = this.saveStyles[col];
        if((dispval=='')||(dispval=='&nbsp;')) dontunder = true;
    } else
    if(snode!=null) this.getStyleNode(snode,ucol,row,stnode,null,val,this.a_capt[col].acrossColumn,printColNum,undefined,this.a_capt[col]);
    if((this.a_capt[col].hasMultiDrill)&&(stnode.MDdrillindex!=null)&&(val!='')&&(val!='&nbsp;')){
        stnode.underline = true;
        stnode.cursor = "pointer";
    }
    if(stnode.textAlign!=null) style += "text-align:"+stnode.textAlign+";";
    if(style.indexOf('text-align')==-1) {
        if(this.a_capt[col].type == IBISTR) style += "text-align:left;";
        else style += "text-align:right;";
    }
    style += "font-size: "+stnode.fontSize+";";
    style += "font-family: "+stnode.fontFamily+";";
    if(stnode.border) {
        // in IE if border-width is added, the border is ignored 
        // (somehow it is recomputed to 0px; maybe because we are in deeply nested tables)
        if (stnode.border.top) {
            if (addBorderWidthNonIE &&
                (typeof(stnode.border.top.width) != "undefined"))
                style += "border-top-width:" + stnode.border.top.width + ';';
            if (typeof(stnode.border.top.style) != "undefined")
                style += "border-top-style:" + stnode.border.top.style + ';';
            if (typeof(stnode.border.top.color) != "undefined")
                style += "border-top-color:" + stnode.border.top.color + ';';
        }
        if (stnode.border.bottom) {
            if (addBorderWidthNonIE &&
                (typeof(stnode.border.bottom.width) != "undefined"))
                style += "border-bottom-width:" + stnode.border.bottom.width + ';';
            if (typeof(stnode.border.bottom.style) != "undefined")
                style += "border-bottom-style:" + stnode.border.bottom.style + ';';
            if (typeof(stnode.border.bottom.color) != "undefined")
                style += "border-bottom-color:" + stnode.border.bottom.color + ';';
        }
        if (stnode.border.left) {
            if (addBorderWidthNonIE &&
                (typeof(stnode.border.left.width) != "undefined"))
                style += "border-left-width:" + stnode.border.left.width + ';';
            if (typeof(stnode.border.left.style) != "undefined")
                style += "border-left-style:" + stnode.border.left.style + ';';
            if (typeof(stnode.border.left.color) != "undefined")
                style += "border-left-color:" + stnode.border.left.color + ';';
        }
        if (stnode.border.right) {
            if (addBorderWidthNonIE &&
                (typeof(stnode.border.right.width) != "undefined"))
                style += "border-right-width:" + stnode.border.right.width + ';';
            if (typeof(stnode.border.right.style) != "undefined")
                style += "border-right-style:" + stnode.border.right.style + ';';
            if (typeof(stnode.border.right.color) != "undefined")
                style += "border-right-color:" + stnode.border.right.color + ';';
        }
    }
    if(((stnode.color=='#000000')||(stnode.color=='Black')||(stnode.color==null))&&(this.a_capt[col].hasMultiDrill)&&(stnode.MDdrillindex!=null)) {
        stnode.color = "blue";
    }
    if(stnode.color!=null)
        style += "color:"+stnode.color+";";
    if(stnode.backgroundColor!=null) {
        if(typeof(stnode.backgroundColor)!='object')
            style += "background-color:"+stnode.backgroundColor+";";
        else {
            m = (indexrow-1) % stnode.backgroundColor.length;
            style += "background-color:"+stnode.backgroundColor[m]+";";
        }
    }
    if(stnode.bold) style += "font-weight:bold;";
    if(stnode.italic) style += "font-style:italic;";
    if((stnode.underline)&&(!dontunder)) style += "text-decoration:underline;";
    if((stnode.cursor)&&(!dontunder)) style += "cursor:"+stnode.cursor+";";
    if(this.a_capt[col].name.wrap) {
        if(this.a_capt[col].name.wrap==" NOWRAP") {
            if(style.indexOf('white-space')==-1) style += "white-space: nowrap;";
        } else 
        if(this.a_capt[col].name.wrap!=" ") style += 'width:'+this.a_capt[col].name.wrap+'px;';
    }
    style += '" ';
    if((typeof(this.saveStyles[col])=='undefined')&&(styleHasCond==false))
        this.saveStyles[col] = {
            'fontSize':stnode.fontSize,
            'color':stnode.color,
            'backgroundColor':stnode.backgroundColor,
            'fontFamily':stnode.fontFamily,
            'bold':stnode.bold,
            'italic':stnode.italic,
            'border':ibiStd.copyObject(stnode.border),
            'textAlign':stnode.textAlign,
            'underline':stnode.underline,
                        'viscolor':stnode.viscolor,
            'viscolorneg':stnode.viscolorneg,
			'MDdrillindex':stnode.MDdrillindex,
			'computeScript':stnode.computeScript
        };
    if(returntype == 'NODE') return stnode;
    else return style;
}

/*
for(var s in ibiMsgStr)
    ibiMsgStr[s] = fixMsgStr(ibiMsgStr[s]);
	*/

function fixMsgStr(s)
{
    var startStr = eval("\"<\"+\"%^\"");
    var endStr = eval("\"%\"+\">\"");

    if(s.indexOf(startStr)==-1) return s;
    var sr="";
    var s2;
    var s1 = s.split(startStr);
    for (var i=0; i < s1.length; i++) {
        s2 = s1[i].split(endStr);
        for(var j=0; j < s2.length; j++) {
            sr += s2[j];
        }
    }
    return sr;
}

(function() {

    if (typeof window.ibiReports!== 'undefined') {
        return;
    }

    window.ibiReports = resetReports();

    function resetReports()
    {
        return {
            Reports:{},
            storeColumn:StoreColumn,
            getColumnObject:GetColumnObject,
            getColumnNames:GetColumnNames,
            getAllColumns:GetAllColumns,
            isColumn:IsColumn
        };
    }
    
    function StoreColumn(table_id,master,column,colObject)
    {
        var columnO = {
            'table_id': table_id,
            'column':column,
            'colObject': colObject
        };
        if(!ibiReports.Reports[master])
            ibiReports.Reports[master] = {'columns':[]};
        var columns = ibiReports.Reports[master].columns;
        var pos = columns.length;
        for(var j = 0; j < columns.length; j++)
            for(var k in columns[j].column)
                if(columns[j].column[k] == column[k]) {
                    pos = j;
                    break;
                }
        ibiReports.Reports[master].columns[pos] = columnO;
    }
    
    function IsColumn(master,column)
    {
        if(ibiReports.Reports[master]) {
            var columns = ibiReports.Reports[master].columns;
            for(var i=0; i < columns.length; i++)
                for(var k in columns[i].column)
                    if(columns[i].column[k] == column) 
                        return true;
        }
        return false;
    }
    
    function GetColumnNames(master,column)
    {
        if(ibiReports.Reports[master]) {
            var columns = ibiReports.Reports[master].columns;
            for(var i=0; i < columns.length; i++)
                for(var k in columns[i].column)
                    if(columns[i].column[k] == column) 
                        return columns[i].column;
        }
        return null;
    }
    
    function GetAllColumns(master)
    {
        if(ibiReports.Reports[master]) {
            var columns = ibiReports.Reports[master].columns;
            return columns;
        }
        return null;
    }
    
	function GetColumnObject(master,column,mytable)
    {
        if(ibiReports.Reports[master]) {
            var columns = ibiReports.Reports[master].columns;
            for(var i=0; i < columns.length; i++)
                for(var k in columns[i].column)
                    if(columns[i].column[k] == column) 
                        return columns[i].colObject;
        }
		if(mytable) {
		    var afields = [column];
            var ainfo = null;
            if (afields.length)
                ainfo = mytable.getFieldInfo(afields);
            if(ainfo) {
                ibiReports.storeColumn(this.id,master,ainfo.cols[0],ainfo.capt[0]);
                return ibiReports.getColumnObject(master,column);
            }
        }
        return null;
    }

})();
