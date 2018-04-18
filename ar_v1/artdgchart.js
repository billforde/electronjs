/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/artdgchart.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 171204 0930 wjf 193487 Inconsistent  Graph Rendering in Active Dashboard
* 170919 1154 wjf 195272 NATURAL_DISASTERFOC.MAS: ESRI Bubble map Size legend title
* 170919 1132 wjf 194774 WQ: Visualization: both X and Y axis labels are not display
* 170829 1328 wjf 193903 AHTML chart does not display correct colors from the sty
* 170817 1025 wjf 193903 Active Dashoard colors. Changed from 8.1 to 8.2
* 170816 1057 wjf 193903 Active Dashoard colors. Changed from 8.1 to 8.2
* 170815 1408 iys 193477 Active Document Graphing Bug: Grid Steps not applied at run
* 170804 2030 wjf 191204 Pie/Ring Pie chart : 3D effect not applied to active report
* 170804 1143 wjf 191497 AHTML gph:setConnectLineMarkers/setMarkerShape setng ignored
* 170725 1513 iys 193134 Marker should not display for Stacked area, Percent area an
* 170725 1450 bjd 192239 Frame & Background : Frame show shadow is not applied to ch
* 170718 1043 iys 192819 Active chart : Markers not display on Chart when selecting
* 170714 1318 bjd 192516 WF8201 : setscalemustincludezero code not working in Active
* 170630 1223 bjd 192332 FF : Active Chart: Advanced chart tool throws Internal erro
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170526 1041 wjf 191497 In-Document Analytics (Active Document), Charts not display
* 170515 1357 wjf 191207 AHTML: Extension Chart using Advanced Chart Tool conversion
* 170425 1246 wjf 190615 Pie/Ring pie chart : Expand/Hide pie slice not working
* 170407 1142 wjf 170846 GIS, Config driven FFS adjsutment of GRAPH map requests
* 170330 1004 wjf 189832 Visualization Pie label display options not working
* 170329 1057 wjf 181900 Active leaflet proportional with Lat & Long shows legend la
* 170328 1521 wjf 188457 Mismatch in default horizontal minor grid count  and minor
* 170328 1324 wjf 189716 AHTML: Horizontal Waterfall chart Preview turns into Vertic
* 170324 1022 wjf 188201 Reference line in Visualization not working
* 170321 1406 wjf 188359 AHTML map chart loosed when it is inserted in a Poral after
* 170316 1131 bjd 189359 AHTML: Horizontal Bar Chart options missing from Chart/Roll
* 170307 1713 bjd 187644 Frame Depth angle and radius not applied to canvas
* 170307 1636 bjd 187928 Zero data labels displaying on chart while show zero labels
* 170206 1058 wjf 188201 Reference line in Visualization not working
* 170202 0943 wjf 185933 AHTML:Bar chart conversion to PIE produces multiple 0% feel
* 170201 1530 iys 188318 MOB: Charts loop when opening disconnected attachment on An
* 170130 1223 bjd 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 170130 1058 wjf 188015 VIS:Chart min and max axis settings are ignored
* 170126 1010 wjf 188021 IE: Uncheck All Active Report menu options and run it, it t
* 170119 1413 iys 187612 AHTML:MOB:Y axis values are partially displaying in Full Sc
* 161219 1251 wjf 177853 Tooltip in grid displays values stripped of formatting
* 161215 1033 iys 187146 AHTML:MOB:CACHE - Changing from full view to original view
* 161213 1132 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161208 1125 wjf 183161 Run output of Compare 2 chart extension in active report is
* 161207 1134 wjf 186888 Allow animation to be set from the fex or by the tools.
* 161129 2211 wjf 186888 Allow animation to be set from the fex or by the tools.
* 161129 1406 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161114 1116 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161111 0909 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161110 0939 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161107 0856 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161020 0935 wjf 185901 AHTML:Series type not applied in AHTML Chart
* 161016 1109 wjf 185624 Vis: Trendline not applied neither in live preview nor runt
* 161013 1447 wjf 166236 AHTML:Newbucket shows one layout for all Area under adv chrt
* 161012 1143 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161011 1315 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161007 1537 wjf 179408 Legend options not working properly for visualization chart
* 160921 1528 wjf 177402 Colour legend title doesn't update after drill down/up at r
* 160921 1453 wjf 184828 Axes labels rotation is not respected with active chat
* 160921 1039 wjf 184828 Axes labels rotation is not respected with active chat
* 160920 1023 wjf 184828 Axes labels rotation is not respected with active chat
* 160916 1042 wjf 184727 AHTML: Active report that creates multiple charts fails to
* 160916 0913 wjf 184727 AHTML: Active report that creates multiple charts fails to
* 160913 1433 wjf 183217 Heading with field name displays incorrectly on Active Char
* 160912 1604 iys 184429 Mobile: Scatter Chart tooltip shows X & Y instead of values
* 160909 1414 wjf 183642 8201MR1:Active chart not passing define value into drill do
* 160810 1218 wjf 179720 Moving Courser from Selected Metric to Its Right Keeps the
* 160809 0916 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160805 1044 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160804 2250 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160720 1446 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 160621 1217 wjf 181362 Map: Enable drill up/drill down in Visualization
* 160610 1256 hms 180534 Remove tab characters from source files
* 160602 1148 wjf 181567 Active Chart Toolbar: Select "Tagcloud Chart" types in adva
* 160519 1548 bjd 180878 Active Report Graph (AHTML) with an embedded header has \n
* 160517 1408 bjd 179344 AHTML:horizontal\vertical scroll bars in chart rollup creat
* 160506 1458 bjd 180460 Active Charts: respect margin settings in the stylesheet
* 160505 1758 bjd 180460 Active Charts: respect margin settings in the stylesheet
* 160502 1016 wjf 178245 visualization report at portal runtime yields webpage error
* 160427 1241 wjf 179948 AHTML:Sorting on chart displays incorrect title.
* 160412 1349 wjf 179668 AHTML:Firefox:Some Chat types in advanced chart shows error
* 160407 1147 wjf 179408 Legend options not working properly for visualization chart
* 160405 2313 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1452 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160315 1631 wjf 178373 Vis: Sorting a visualization with 2 dimensions results in b
* 160307 1234 iys 177760 AHTML:MOB:Charts are not getting displayed in mobile enviro
* 160304 1146 wjf 177910 Vis formatting of series doesn't take effect (change of col
* 160302 1156 iys 177760 AHTML:MOB:Charts are not getting displayed in mobile enviro
* 160302 1007 wjf 177558 Tooltip truncated when inserting more charts
* 160219 1829 bjd 177341 AHTML: Handle tooltip positioning during preview & runtime
* 160219 1324 wjf 176603 Tooltip information missing for Pie chart
* 160217 1706 wjf 176603 Tooltip information missing for Pie chart
* 160211 0007 wjf 176898 AHTML: Cache performance enhancement
* 160117 1213 wjf 175856 AHTML: [CHART-298] Ability to morph between chart states
* 160107 1048 bjd 173869 AHTML chart tooltip values not shown for last two BAR's in
* 160106 1402 wjf 174366 Server-Side support for HTML5 Grid
* 151229 0951 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151214 1357 wjf 174366 Server-Side support for HTML5 Grid
* 151112 1555 bjd 168561 Active Dashboard: Chart title doesn`t change based on coord
* 151030 1250 iys 173296 Optimize chart updating for mobile responsive dashboard
* 151030 1122 bjd 173201 AHTML:Chart:Stack option is not applied in Bar chart when s
* 151013 1307 wjf 172608 IA: AHTML - Chart with embedded heading,doesn't load
* 150923 0937 wjf 172054 Chart: Change *GRAPH_JS to *GRAPH_JS_FINAL in UI
* 150818 1400 wjf 170772 AHTML_cache:Chart filter throws script error
* 150805 1719 bjd 169933 Sync Active report with chart on html - chart misplaced in
* 150728 1056 bjd 163238 Active Dashboard:Drill Down from Graph pass incorrect value
* 150727 1750 bjd 163238 Active Dashboard:Drill Down from Graph pass incorrect value
* 150727 1641 bjd 163238 Active Dashboard:Drill Down from Graph pass incorrect value
* 150723 1644 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150710 1229 bjd 169501 AHTML: JSCHART gets redrawn with AUTOFIT OFF and no AUTOFIT
* 150709 1246 bjd 169501 AHTML: JSCHART gets redrawn with AUTOFIT OFF and no AUTOFIT
* 150707 1558 bjd 169430 AHTML: JSCHART does not resize with AUTOFIT ON
* 150706 1400 wjf 169045 IE8 AHTML using JSCHART does not display/errors;OK in IE9/h
* 150607 1022 bjd 168382 AHTML: Restore Orginal remove Y axisLegend singleMeasureFld
* 150505 1134 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150428 1826 law 165307 AHTML: Allow jschart morphing.
* 150428 1250 wjf 165307 AHTML: Allow jschart morphing.
* 150406 1358 wjf 165307 AHTML: Allow jschart morphing.
* 150403 0959 wjf 166080 AHTML: JSCHART: multi page layout incorrectly sizing charts
* 150319 1139 wjf 165307 AHTML: Allow jschart morphing.
* 150303 1232 wjf 164732 AHTML: IDIS: Fix js error when CLEAR is selected
* 150226 2336 wjf 163762 JSCHART: Sliders with bucket syntax
* 150212 1135 wjf 162466 Allow ESRI chart types to be specified in graph requests
* 150212 1029 wjf 162466 Allow ESRI chart types to be specified in graph requests
* 150210 1146 wjf 162466 Allow ESRI chart types to be specified in graph requests
* 150114 1358 wjf 162573 AHTML:Unable to change any of the series colors in JSCHART
* 150114 1013 wjf 163585 VAL:AHTML:CHART: X and Y axis title are missing
* 150113 1108 wjf 162573 AHTML:Unable to change any of the series colors in JSCHART
* 141231 1101 wjf 156517 AHTML:Multi-graph chart throws browser error
* 141231 0922 wjf 163535 JSCHART: keep dataLabels disabled for legacy geo-maps
* 141230 1106 wjf 156517 AHTML:Multi-graph chart throws browser error
* 141216 0824 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141213 1231 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141211 1829 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141211 1355 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141210 1143 wjf 163067 AHTM: Bucket syntax causes default "Chart Title"
* 141209 1318 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141201 1403 bjd 163067 AHTM: Bucket syntax causes default "Chart Title"
* 141201 1213 wjf 163062 AHTML: Cleanup styling for format JSCHART
* 141119 0834 wjf 162752 WQ: AHTML Chart: Script error with Header/Footer when run
* 141117 1349 wjf 162752 WQ: AHTML Chart: Script error with Header/Footer when run
* 141114 1629 bjd 162752 WQ: AHTML Chart: Script error with Header/Footer when run
* 141114 1609 bjd 162752 WQ: AHTML Chart: Script error with Header/Footer when run
* 141114 1316 bjd 162570 AHTML:chart types (with LOOKGRAPH) shows wrong display
* 141114 0948 wjf 162570 AHTML:chart types (with LOOKGRAPH) shows wrong display
* 141106 1529 wjf 162629 AHTML: Add support for POPOUT menu.
* 141029 0904 wjf 134795 Active Visualization
* 141022 1637 wjf 162293 AHTML: Graphs are displaying blank/incorrect output.
* 141021 1001 wjf 129312 NFR: New Syntax for mapping data to visualizations in FEX
* 141020 1009 wjf 129312 NFR: New Syntax for mapping data to visualizations in FEX
* 141009 1632 iys 134795 Active Visualization
* 140919 1030 wjf 134795 Active Visualization
* 140919 0114 hms 134795 Active Visualization
* 140918 1241 wjf 134795 Active Visualization
* 140716 1705 wjf 134795 Active Visualization
* 140710 1253 wjf 134795 Active Visualization
* 140709 1621 wjf 134795 Active Visualization
* 140703 1216 ixm 142620 AHTML:2 measure pie charts have wrong label
* 140701 1609 wjf 134795 Active Visualization
* 140623 1652 ixm 158837 AHTML:Bar Chart axis labels overlaid after change chart type
* 140617 1214 wjf 134795 Active Visualization
* 140616 1109 wjf 134795 Active Visualization
* 140611 1015 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140604 1751 wjf 134795 Active Visualization
* 140603 0014 wjf 134795 Active Visualization
* 140531 1936 wjf 134795 Active Visualization
* 140530 1745 wjf 134795 Active Visualization
* 140529 1514 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140514 1929 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.92 $
//$Log: artdgchart.js,v $
//Revision 1.92  2014/05/31 22:37:30  William_Forde
//[p134795] Fixes for using pivot for LOOKGRAPH=GRID.  Add scroll bars when using pivot.  make sure pivot resizes properly.
//
//Revision 1.91  2014/05/30 16:40:15  William_Forde
//[p134795] Use moonbeam tooltip to display selection menu for charts.
//
//Revision 1.90  2014/05/30 13:13:20  William_Forde
//[p134795] Allow selection on  all charts.
//
//Revision 1.89  2014/05/29 15:44:35  William_Forde
//[p134795]  Use the tooltip generated by jschart, if there is one.  Add back remove to the filter menu.
//
//Revision 1.88  2014/05/27 04:02:55  William_Forde
//[p134795] remove jschart workaround.
//
//Revision 1.87  2014/05/22 14:25:46  William_Forde
//[p134795] Warning, filtering wont work properly, but the charts should display.
//
//Revision 1.86  2014/05/14 23:19:56  William_Forde
//[p134795] initial support for treemap and matrix marker
//
//Revision 1.85  2014/05/09 20:23:24  William_Forde
//[p134795] Fix issue with pie chart showing blank when swap is click.  Two almost simultaneous calls are being made to show the same pie.  added code to clear the timeout of the first one, if the second call comes in qucikly enough.
//
//Revision 1.84  2014/05/06 13:45:36  William_Forde
//[p134795] Display the number of records if too many points
//
//Revision 1.83  2014/05/05 14:18:44  William_Forde
//[p134795] fix issue with too many records message not being shown.
//
//Revision 1.82  2014/04/30 21:27:48  William_Forde
//[p134795] disable chart selection feature.
//
//Revision 1.81  2014/04/10 19:25:06  William_Forde
//[p134795]  When switching pages, all containers from the previous page is no longer valid, so we need to check before trying to display the chart/grid.
//
//Revision 1.80  2014/04/10 14:15:41  William_Forde
//[p134795] Fix javascript error due to the fact that even if you delete an object from an array, any reference to that object will remain.
//
//Revision 1.79  2014/04/02 16:24:36  Brian_DCruz
//[p157646] need to pass setAxisAssignment to TDG chart engine.
//
//Revision 1.78  2014/03/25 12:16:03  William_Forde
//[p134795] fix styling in matrix chart
//
//Revision 1.77  2014/03/20 16:05:50  William_Forde
//[p134795][>branch8100]  Fix issue with bubblemap generating data error.
//
//Revision 1.76  2014/03/18 16:41:13  William_Forde
//[p134795][>branch8100] Fix javascript error that occurs when creating maps.
//
//Revision 1.75  2014/03/11 18:21:58  William_Forde
//[p134795][>branch8100] Send recordlimit to cache for rollup.
//
//Revision 1.74  2014/03/11 15:22:58  William_Forde
//[p129312][>branch8100] Add initial support for bubble an scatter.
//
//Revision 1.73  2014/03/10 19:26:08  William_Forde
//[p129312][>branch8100] get basic matrix chart working
//
//Revision 1.72  2014/03/07 04:32:11  William_Forde
//[p129312][>branch8100] Add initial support for bucket syntax to active reports.
//
//Revision 1.71  2014/03/03 18:05:50  William_Forde
//[p134795][>branch8100] Limit the number of records used to generate chart.
//
//Revision 1.70  2014/02/13 19:46:23  Israel_Schulman
//[p156476][>branch8100] Ensure introAnimation Object is defined so that mobile chart is added to chart queue.
//
//Revision 1.69  2014/02/04 18:56:25  William_Forde
//[p149883] We need to save parms or AV will break.  Storing object with both chart and parms for future reference.
//
//Revision 1.68  2014/02/03 16:51:15  Brian_DCruz
//[p149883] remove recursive structures that causes FLEX to choke
//
//Revision 1.67  2014/01/27 15:16:30  William_Forde
//[p134795] dont call applypfjdefaults for some chart types.  Fix more styling for cluster.
//
//Revision 1.66  2013/12/30 15:53:30  William_Forde
//[p134795][IA-75] move applyPFJDefaults.
//
//Revision 1.65  2013/11/26 20:25:22  William_Forde
//[p151491]  accidently caused charts in chart tool not to work.
//
//Revision 1.64  2013/11/22 20:02:59  William_Forde
//[p134795] fix filltype error that was being caused by the reuse of the tdgchart object.
//
//Revision 1.63  2013/11/22 18:10:08  William_Forde
//[p151491] Fix issue with charts use original size when filter is applied.
//
//Revision 1.62  2013/11/22 16:12:56  William_Forde
//[p151491] Fix issue with charts not resize in HBOX/VBOX when the browser changes size.
//
//Revision 1.61  2013/11/21 18:08:08  William_Forde
//[p154642] If resizing, make sure pfjstring gets parsed again.
//
//Revision 1.60  2013/11/18 16:46:14  William_Forde
//[p133785] support bubble in grmerge.
//
//Revision 1.59  2013/11/13 20:21:11  William_Forde
//[p134795] add _chart (tdg handle) to mytable.
//
//Revision 1.58  2013/11/05 14:46:04  William_Forde
//[p150545] In AV, map only allows "click" at the moment to show menu.  Allows using Map as filter in AV. Also add exclude to AV menu.
//
//Revision 1.57  2013/10/31 02:56:26  William_Forde
//[p150545] variable ceanup
//
//Revision 1.56  2013/10/30 19:30:39  William_Forde
//[p150545] Fix group when charttype os a map, so that menu is displayed on click.
//
//Revision 1.55  2013/10/29 13:41:10  William_Forde
//[p150545] override the tdgscript path function so that it works when tdgchart is embeded.
//
//Revision 1.54  2013/10/28 19:50:07  William_Forde
//[p121117] Allow setCurrencySymbolOverride when user switch the charts.
//
//Revision 1.53  2013/10/08 18:51:54  William_Forde
//[p150342] add "map" type for list of support base charts.  If chartype is set in json, then override it when toggling from original chart.
//
//Revision 1.52  2013/09/23 14:13:40  Israel_Schulman
//[p152848] Compare correct timestamps when removing charts from queue
//
//Revision 1.51  2013/09/17 20:37:38  Israel_Schulman
//[p152848] When on mobile, make sure the chart queue mechanism calls the correct 'callLaterChart' (delayed with setTimeout) from the queue to avoid potentially loading with stale data.
//
//Revision 1.50  2013/09/11 18:28:02  Brian_DCruz
//[p151408] props.series should be initialized to seriesb, instead of setting it to seriesb later on, as it overrides the correct series. [seriesa, in this case].
//
//Revision 1.49  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.48  2013/08/05 19:57:45  William_Forde
//[p150342] Fix issue with GRMULTI and data from report coming from different source (dataReport).  Dropdown was not being populated correctly.
//
//Revision 1.47  2013/08/05 19:46:19  William_Forde
//[p134795]  dont set colorMode.mode = "bySeriesSelection" for line charts. we end up with a weird combined line/bar chart.
//
//Revision 1.46  2013/07/30 16:03:26  William_Forde
//[p150342]  If chart type is not in the table of irptdgc.js then use the basic version of the closes type (line,pie,bar,scatter,buble,area)
//
//Revision 1.45  2013/07/24 20:56:53  William_Forde
//[p150342] Fix issue with vbar not displaying correctly an other pfj commands be lost.
//
//Revision 1.44  2013/07/22 19:56:54  William_Forde
//[p150342] Fix for GRMERGE and pie.
//
//Revision 1.43  2013/07/22 18:44:32  William_Forde
//[p150342] Support GRLEGEND.
//
//Revision 1.42  2013/07/16 13:36:48  William_Forde
//[p150342] Reset groupLabels when switch between multiple charts.
//
//Revision 1.41  2013/07/15 20:15:53  William_Forde
//[p150342] Add dropdown menu for MULTI chart selection
//
//Revision 1.40  2013/07/15 17:51:03  William_Forde
//[p150342] initial return of GRMERE support
//
//Revision 1.39  2013/06/21 14:23:04  William_Forde
//[p150545] if jsonProps is passed then merge it into the other "json" properties for generating the chart.
//
//Revision 1.38  2013/06/01 02:21:33  William_Forde
//[p134795] turn off animation in AV mode once chart is initially displayed
//
//Revision 1.37  2013/05/30 11:34:09  William_Forde
//[p134795] Fix performance issue with scatter charts.
//
//Revision 1.36  2013/05/22 20:26:13  Brian_DCruz
//[p133458] set autofit=on\resize logic
//
//Revision 1.35  2013/05/22 15:15:39  William_Forde
//[p134795] Add temp workaround for pie selection 100% not working.
//
//Revision 1.34  2013/05/06 14:52:12  William_Forde
//[p134795] if AV file is not included dont link charts.
//
//Revision 1.33  2013/04/29 15:10:48  William_Forde
//[p134795] Fix issue with colorby not being set correctly.
//
//Revision 1.32  2013/04/27 14:45:12  William_Forde
//[p134795] Pass mobile flag so that we correctly know when to set secondchart.
//
//Revision 1.31  2013/04/01 21:10:12  Brian_DCruz
//[p143407] Since d3 is moved inside tdgchart; need to update code that references d3.
//
//Revision 1.30  2013/03/26 20:42:14  Israel_Schulman
//[p137859] Added loading indicator to tdgchart's. Added a loading message to appear while page loads. Rearranged waitwin and icons creation to occur before genTables for availability during genTables_delay.
//
//Revision 1.29  2013/03/04 21:34:05  Brian_DCruz
//[p140615] added logic to display footing for TDGCharts
//
//Revision 1.28  2013/02/06 18:33:34  William_Forde
//[p145989] fix missing semicolon
//
//Revision 1.27  2013/02/06 18:22:47  William_Forde
//[p145989] We may use the same "mytable" for the original and fullscreen view on mobile, so we need to keep track of both
//
//Revision 1.26  2013/02/04 16:25:09  William_Forde
//[p144543] Dynamically reset hight of div based on the actual height available to us.
//
//Revision 1.25  2013/01/28 21:12:30  Brian_DCruz
//[p140966] need to inform TDGChart engine not to handle callback for "other" slice.
//
//Revision 1.24  2013/01/22 19:03:37  William_Forde
//[p143079] Use the "labels" being passed to the chart function, and not the x value name.
//
//Revision 1.23  2012/12/20 16:41:20  William_Forde
//[p144604] splice incorrectly specified on object instead of the array.
//
//Revision 1.22  2012/12/18 00:51:16  William_Forde
//[p144604] If container is not displayed, we cant determine it size.  Wait till the container is rendered, then render chart.
//
//Revision 1.21  2012/12/12 04:29:34  William_Forde
//[p143187] On mobile, render each chart after the previous chart has finish its animation.
//
//Revision 1.20  2012/11/30 13:52:07  William_Forde
//[p144158] Use the default size for charts in tab mode, unless ARREPORTSIZE=DIMENSION and the dimensions are set.
//
//Revision 1.19  2012/11/19 16:34:59  William_Forde
//[p143860] Set overflow to hidden so that we dont cause unwanted scroll bars.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["artdgchart"]="$Revision: 20171204.0930 $";

(function() {

    if (typeof window.ibiTDGCharts !== 'undefined') {
        return;
    }

    window.ibiTDGCharts = {
        drawChart :myChartFunction,
        chartClick:ChartClick,
        checkIfContainerIsReady:CheckIfContainerIsReady,
        updateCompleteFunc: UpdateCompleteFunc,
        chartQueueFunc: ChartQueueFunc,
        chartQueueWait: false,
        getInfo: GetInfo,
        getScriptPath: myGetScriptPath,
		_chartAlias: null,
        containerQueue: [],
        chartQueue:[],
        blankChart:null
    };

    Object.defineProperty(window.ibiTDGCharts, 'chartAlias', {
        set: function(w) {
            this._chartAlias = w;
        },
        get: function() {
            return this._chartAlias
        }
    });

    if(typeof tdgchart != "undefined" && window.location.protocol != "http:" && window.location.protocol != "https:") {
        tdgchart.__localExtensionList = [];
    }

    function myGetScriptPath()
    {
        var alias = "tdg/jschart/distribution/";
        if(ibiTDGCharts.chartAlias && (ibiTDGCharts.chartAlias!='')) {
            var ind = ibiTDGCharts.chartAlias.indexOf('WFServlet');
            if (ind>0) alias = ibiTDGCharts.chartAlias.substr(0,ind)+'tdg/jschart/distribution/';
			else {
                ind = ibiTDGCharts.chartAlias.indexOf('ibiweb');
                if (ind>0) alias = ibiTDGCharts.chartAlias.substr(0,ind);
            }
        }
        return alias;
    }

    function GetInfo(name,returnDefault)
    {
        if(!tdginfo.category) return {};

        var cat = tdginfo.category;
        var cname = "name";
        if(typeof tdginfo.category == "undefined") {
            cat = fcinfo.fcCategory;
            cname = 'swfName';
        }
        for(var i=0; i< cat.length; i++) {
            for(var j=0; j < cat[i].chartList.length; j++) {
                if(cat[i].chartList[j][cname].toLowerCase() == name.toLowerCase())
                    return(cat[i].chartList[j]);
            }
        }
        if((typeof(returnDefault)=="undefined")||(returnDefault)) {
            if(name.indexOf("line")>-1) return GetInfo("line",false);
            if(name.indexOf("bar")>-1) return GetInfo("bar",false);
            if(name.indexOf("area")>-1) return GetInfo("area",false);
            if(name.indexOf("pie")>-1) return GetInfo("pie",false);
            if(name.indexOf("column")>-1) return GetInfo("column",false);
            if(name.indexOf("scatter")>-1) return GetInfo("scatter",false);
            if(name.indexOf("bubble")>-1) return GetInfo("bubble",false);
            if(name.indexOf("grid")>-1) return GetInfo("grid",false);
        }
        return null;
    }

	function myChartFunction(parms,chart_type,useDiv,size,dataProvider,x,y,labels,colortable,chart_title,ipfjString,jschartString,myjsScript,isIcon,isOriginal,showTrendLine,focexurl,IchartFooting,forMobileView,
							 resizeInfo,jsonProps,orderedProps,orderedPropsFinal)
    {
        var tdata = [];
        var glab = [];
        var pfjString = ipfjString;
        var isOriginalChart = isOriginal;
        var charttype = ibiUtil.StripSpace(chart_type.toLowerCase(),true,true);
        var isSubChart = false;
        var info = ibiTDGCharts.getInfo(charttype);
        var whichProps = tdginfo.defaultProps;
        var extraProps = null;
        var base_chart = charttype;
        var pid = useDiv.getAttribute('id')+'_f';
        var pid2 = useDiv.getAttribute('id')+'_ft';
        var seriesb,sc;
        var chartFooting = IchartFooting;
        var scatterIsText = false;
        var isFiltered = false;
        var chartFootDiv = '';
        var footerHeight = 0, headingHeight = 0, imageHeight = 0, imageWidth = 0;
        var i;
        var c;
        var ga;
        var icol;
        var j;
        var cc;
        var js;
        var p2;
        var obj;
        var chart;
        var newdata;
        var numRecords;
        var hasBuckets = false;
        var menuHeight = 0;
        var mobileDashboard = (typeof ARMobileDashboards !== 'undefined') ? ARMobileDashboards[0] : null;
        if(ibiTDGCharts.blankChart == null)
            ibiTDGCharts.blankChart = new tdgchart({backend:'js', allowBackendFallback:false,tdgPath:parms.alias});

        var dpos=0;
        if(parms.mytable)
            if(!parms.mytable.delayChart) {
                parms.mytable.delayChart = [];
                parms.mytable.delayChart2 = [];
                parms.mytable.dhandle = [];
                parms.mytable.dhandle2 = [];
                parms.mytable.dd = [];
                parms.mytable.sdd = [];
            }
        if(parms.win>-1)
            dpos = parms.win+1;
        parms.dpos = dpos;

        if(dataProvider.type == "buckets")
            hasBuckets = true;
        
        if(typeof focexurl != "undefined")
            ibiTDGCharts.chartAlias = focexurl;
        tdgchart.getScriptPath = ibiTDGCharts.getScriptPath;
        if(parms.mytable) {
            if(pid.indexOf("MAINTABLE_")>-1) {
                obj = document.getElementById("MAINTABLE_"+parms.mytable.id);
                if(obj)
                    obj.style.overflow = "visible";
            }

            if(hasBuckets)
                isOriginalChart = false;
            if(parms.mytable.haveFilters)
                isFiltered = true;
            if(parms.mytable.isRollUp)
                isSubChart = true;
                
            if(parms.mytable.a_cntl.autoFit == arConstants.AUTOFIT_CONTAINER) {
                size.height = parms.mytable.resizeContainer.clientHeight;
                size.width = parms.mytable.resizeContainer.clientWidth;
            }
            if(parms.mytable.a_cntl.jsTooltip) {
                try { 
                    eval(parms.mytable.a_cntl.jsTooltip);
                } catch(e) {
                    js = {};
                }
            }

            if(!forMobileView) {
                parms.mytable.removeWaitingCharts(dpos);
            }
        }
    
        if(info) {
            if(typeof(info.useChart)!="undefined") {
                if(typeof(ibiChart)!="undefined") 
                    info = ibiChart.getInfo(info.useChart);
            }
            if(charttype != info.name) {
                charttype = info.name;
                isOriginalChart = false;
            }
        }

        if(info) {
            whichProps = tdginfo[info.chartProps];
            if(typeof(info.chartPropsExtra)!="undefined")
                extraProps = tdginfo[info.chartPropsExtra];
            base_chart = info.base;
        }
        color_table = whichProps.ibiColorTable;
        //if (isOriginalChart) {
            var tw = ibiStd.copyObject(whichProps);
            var introAnimation = null;
            if(typeof whichProps.introAnimation != "undefined")
                introAnimation = ibiStd.copyObject(whichProps.introAnimation);
            if(introAnimation == null)
                if(typeof tdginfo.defaultProps.introAnimation != "undefined")
                    introAnimation = ibiStd.copyObject(tdginfo.defaultProps.introAnimation);

            //if (extraProps)
            //    ibiStd.mergeObject(tw, extraProps);
            if(isOriginal)
                whichProps = {'title': {'visible':false}};
            else
                ibiStd.mergeObject(whichProps,{'title': {'visible':false}});
            if(introAnimation != null)
                whichProps.introAnimation = ibiStd.copyObject(introAnimation);
            if(tw.activeProps)
                whichProps.activeProps = ibiStd.copyObject(tw.activeProps);
            if(tw.ibiColorTable)
                whichProps.ibiColorTable = ibiStd.copyObject(tw.ibiColorTable);
            //extraProps = null;
        //}

        var seriesa = [];
        if(typeof(whichProps.series)!="undefined") seriesa = ibiStd.copyObject(whichProps.series);

        var plain_title = chart_title.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
        var ss;
        var tMargin = 0, bMargin = 0, lMargin = 0, rMargin = 0;
        var p3 = null;
        if(parms.mytable) {
            try {
                tMargin = parms.mytable.a_cntl.margin[0];
                rMargin = parms.mytable.a_cntl.margin[1];
                bMargin = parms.mytable.a_cntl.margin[2];
                lMargin = parms.mytable.a_cntl.margin[3];
            } catch(e) {}
            p3 = (parms.win > -1)
                 ? document.getElementById("wmenu"+parms.win)
                 : parms.mytable.maintable.wmenu;
            if (p3) {
                if((p3.offsetHeight == 0) && (p3.innerHTML !='')) {
                    var msize = measureText(p3.innerHTML);
                    menuHeight = msize.height;
                } else {
                    menuHeight = p3.offsetHeight;
                }
            }
            headingHeight = size.headingHeight || 0;
        }
        var titlepos = " align=\"center\" ";
        if(chart_title.toUpperCase().indexOf("<TABLE")!=-1) titlepos = " style=\"width:"+size.width+"px;\" ";

        seriesb=[];
        ss = getSeries(seriesa,"all");
        if(ss!=null) seriesb[0] = ibiStd.copyObject(seriesa[ss]);
        
        var props={};
        var oProps = ibiStd.copyObject(orderedProps);
        var oPropsFinal =  ibiStd.copyObject(orderedPropsFinal);
        //if(!isOriginal)
         //   oProps = null;
        //if ((dataProvider.type != "buckets") || (!isOriginal && hasBuckets))
            props = ibiStd.copyObject(whichProps);
        props.series = seriesb;
        props.morphEnable = false;
        props.focexurl = focexurl;
        var oProps_chartType = null;
        if(!isOriginal)
            oProps_chartType = base_chart;

        if(oProps) {
            for (j = 0; j < oProps.length; j++) {
                if (oProps[j].json) {
                    js = {};
                    try {
                        js = eval('({' + oProps[j].json + '})');
                    } catch (e) {
                    }
                    if((typeof js.chartType != "undefined") && isOriginal) {
                        oProps_chartType = js.chartType;
                    }
                    ibiStd.mergeObject(props, js);
                }
            }
        }

        //if(isIcon && myjsScript)
         //   ibiStd.mergeObject(props, myjsScript);

        //if (dataProvider.type != "buckets")
            //if (extraProps)
            //    ibiStd.mergeObject(props, extraProps);
        
        if((typeof(jschartString)!="undefined") && (jschartString!=null)&& (typeof(jsonProps)!="undefined")) {
            //var js = eval("({"+jschartString+"})");
            try { 
                jschartString = jschartString.replace("{{AR_FLD_","{{AR_RFLD_");
                js = eval("({"+jschartString+"})");
            } catch(e) {
                js = {};
            }
            //var s2 = ibiStd.copyObject(js);
            props.jsonProps1 = ibiStd.copyObject(js);
            if(parms.mytable) {
                if(props.jsonProps1.title)
                    if(props.jsonProps1.title.text)
                        props.jsonProps1.title.text = parms.mytable.expandTitle(props.jsonProps1.title.text);
                if(props.jsonProps1.footnote)
                    if(props.jsonProps1.footnote.text)
                        props.jsonProps1.footnote.text = parms.mytable.expandTitle(props.jsonProps1.footnote.text);
            }
/*
            s2.series = [];
            ibiStd.mergeObject(props,s2);
            if(typeof(js.series)!="undefined") {
                for(i=0; i < js.series.length; i++) {
                    var sr = getSeries(props.series,js.series[i].series);
                    if(sr==null) 
                        props.series[props.series.length] = ibiStd.copyObject(js.series[i]);
                    else 
                        ibiStd.mergeObject(props.series[sr],js.series[i]);
                }
            }
            */
        } 
        
        var saveCtype = props.chartType;
        var useJsonTitle = false;
        if(typeof(jsonProps)!="undefined") {
            try { 
                jsonProps = jsonProps.replace("{{AR_FLD_","{{AR_RFLD_");
                js = eval("({"+jsonProps+"})");
            } catch(e) {
                js = {};
            }
            delete js.groupLabels;
            delete js.dataArrayMap;
            delete js.dataBuckets;
            props.jsonProps2 = ibiStd.copyObject(js);
            if(parms.mytable) {
                if(props.jsonProps2.title)
                    if(props.jsonProps2.title.text)
                        props.jsonProps2.title.text = parms.mytable.expandTitle(props.jsonProps2.title.text);
                if(props.jsonProps2.footnote)
                    if(props.jsonProps2.footnote.text)
                        props.jsonProps2.footnote.text = parms.mytable.expandTitle(props.jsonProps2.footnote.text);
                }
            if(!isIcon)
                if((props.jsonProps2.title) || (props.jsonProps2.footnote))
                    useJsonTitle = true;
            //ibiStd.mergeObject(props,js);
        }

        if(useJsonTitle)
            chartFooting = null;

        if(typeof(myjsScript)!="undefined") {
            ibiStd.mergeObject(props,myjsScript);
        }

        if(!isOriginal) {
            if (typeof(props.title) == "object")
                props.title.text = '';
            else
                props.title = {text: ''};
        }

        if (dataProvider.type == "buckets") {
            props.chartType = dataProvider.chartType;
            base_chart = props.chartType;
        }

        if (!isIcon) {
            var ch = null;
            obj = d.getElementById(pid2);
            if(forMobileView) {
                if(typeof parms._chartMobile != "undefined")
                    ch = parms._chartMobile;
            } else {
                if(typeof parms._chart!= "undefined")
                    ch = parms._chart;
            }
            if( (d.getElementById(pid)!=null) && (ch != null) && (typeof ch.morphAnimation != "undefined") &&
                (ch.morphAnimation.duration) && (obj != null)) {
                if(ch.chartType == base_chart) {
                    props.morphEnable = true;
                    if(charttype != parms.mytable.inChartType)
                        props.morphEnable = false;
                }
            }

            if(useJsonTitle) {
                chart_title = '';
                chartFootDiv = '';
                footerHeight = 0;
            } else {
                if (chartFooting && (chartFooting.htmlText !== "")) {
                    chartFootDiv = '<div id="' + pid + 'Foot" style=\"visibility:hidden;\">' + chartFooting.htmlText + '<\/div>';
                }
            }

            imageHeight = size.height - menuHeight - headingHeight - tMargin - bMargin;
            imageWidth = size.width - lMargin - rMargin;
            if(props.morphEnable) {
                if (chartFooting && (chartFooting.htmlText !== "")) {
                    obj = d.getElementById(pid);
                    if(obj)
                        obj.innerHTML = chartFooting.htmlText;
                }
                obj = d.getElementById(pid2);
                if(obj)
                    obj.innerHTML = '<table style="width:' + size.width + 'px;" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr><td ' + titlepos + '>' + chart_title + '<\/td><\/tr><\/table>';
                obj = d.getElementById(pid);


            } else {
                useDiv.innerHTML = '<div id="' + pid + 'mg" style="width:' + imageWidth + 'px;height:' + imageHeight + 'px;padding:0px;margin:0px;overflow:visible;">' +
                    '<div id="' + pid2 + '" style="width:' + imageWidth + 'px;"><table style="width:' + imageWidth + 'px;" border="0" cellspacing="0" cellpadding="0"><tr><td ' + titlepos + '>' + chart_title + '<\/td><\/tr><\/table><\/div>' +
                    '<div style="width:' + size.width + 'px" id="' + pid + '">' +

                    '<div style="width:32px;height:32px;position:absolute;left:50%;top:50%;margin-left:-16px;margin-top:-16px">' +
                    ibiSkin.loadingImg +
                    '<\/div>' +

                    '<\/div>' +
                    chartFootDiv +
                    '<\/div>';
            }

            if (chartFootDiv !== '') {
                chartFooting.elem = document.getElementById(pid + 'Foot');
                footerHeight = chartFooting.height = chartFooting.elem.offsetHeight;
            }
        }


        if(isIcon) pid = useDiv.getAttribute('id');

        var maxRecords = 100000;
        if(props.activeProps) {
            if(props.activeProps.maxRecords)
                maxRecords = props.activeProps.maxRecords;
        }
        
        if((saveCtype!=props.chartType)&&(!isOriginalChart))
            props.chartType = saveCtype;
        
        var tooManyDataPoints = false;
        
        if(dataProvider.type == "buckets") {
            tooManyDataPoints = dataProvider.tooManyDataPoints;
            props.data = dataProvider.data;
            if(dataProvider.dataArrayMap)
                props.dataArrayMap = dataProvider.dataArrayMap;
            if (dataProvider.dataBuckets)
                props.dataBuckets = dataProvider.dataBuckets;
            if(dataProvider.groupLabels)
                props.groupLabels = dataProvider.groupLabels;
            else
                props.groupLabels = [];
            if(dataProvider.series)
                props.series = ibiStd.copyObject(dataProvider.series);
            if(dataProvider.xaxis)
                props.xaxis = dataProvider.xaxis;
            if(dataProvider.yaxis)
                props.yaxis = dataProvider.yaxis;
            if(dataProvider.zaxis)
                props.zaxis = dataProvider.zaxis;
            if(dataProvider.colorScale)
                props.colorScale = dataProvider.colorScale;
            if (dataProvider.legend)
                props.legend = dataProvider.legend;
            if (dataProvider.dataPageSlider)
                props.dataPageSlider = dataProvider.dataPageSlider;
            if (dataProvider.dataGridProperties)
                props.dataGridProperties = dataProvider.dataGridProperties;
            if (dataProvider.matrixProperties)
                props.matrixProperties = dataProvider.matrixProperties;
            if(dataProvider.chartType == "extension") {
                props.data = [dataProvider.data[0]];
                props.series = [];
                delete props.xaxis;
                delete props.yaxis;
                delete props.zaxis;
                for(i=0; i < dataProvider.series.length; i++) {
                    if((dataProvider.series[i].series == "all") || (dataProvider.series[i].series == "0"))
                        props.series[props.series.length] = ibiStd.copyObject(dataProvider.series[i]);
                }
            }

            numRecords = dataProvider.numRecords;
            if(numRecords>1000 || parms.mytable.previousGraphNumRecords > 1000)
                props.morphEnable = false;
            parms.mytable.previousGraphNumRecords = numRecords;

            if(props.jsonProps1) {
                delete props.jsonProps1.series;
                delete props.jsonProps1.dataArrayMap;
                delete props.jsonProps1.dataBuckets;
                delete props.jsonProps1.dataGridProperties;
                delete props.jsonProps1.legend;
                delete props.jsonProps1.xaxis;
                delete props.jsonProps1.yaxis;
                delete props.jsonProps1.zaxis;
                if(typeof props.jsonProps1.dataGridProperties != "undefined") {
                    if (typeof props.jsonProps1.dataGridProperties.colHeader != "undefined") {
                        //delete props.jsonProps1.dataGridProperties.colHeader.title;
                        delete props.jsonProps1.dataGridProperties.colHeader.labels;
                    }
                    if (typeof props.jsonProps1.dataGridProperties.rowHeader != "undefined") {
                        //delete props.jsonProps2.dataGridProperties.colHeader.title;
                        delete props.jsonProps1.dataGridProperties.rowHeader.labels;
                    }
                }
                if(!isOriginal) {
                    delete props.jsonProps1.pieProperties;
                    delete props.jsonProps1.blaProperties;
                    delete props.jsonProps1.gaugeProperties;
                    //delete props.jsonProps1.dataGridProperties;
                    delete props.jsonProps1.matrixProperties;
                    delete props.jsonProps1.tagcloudProperties;
                    delete props.jsonProps1.pieProperties;
                }
            }
            if(props.jsonProps2) {
                delete props.jsonProps2.series;
                delete props.jsonProps2.dataArrayMap;
                delete props.jsonProps2.dataBuckets;
                delete props.jsonProps2.dataGridProperties;
                delete props.jsonProps2.legend;
                delete props.jsonProps2.xaxis;
                delete props.jsonProps2.yaxis;
                delete props.jsonProps2.zaxis;
                if(typeof props.jsonProps2.dataGridProperties != "undefined") {
                    if (typeof props.jsonProps2.dataGridProperties.colHeader != "undefined") {
                        //delete props.jsonProps2.dataGridProperties.colHeader.title;
                        delete props.jsonProps2.dataGridProperties.colHeader.labels;
                    }
                    if (typeof props.jsonProps2.dataGridProperties.rowHeader != "undefined") {
                        //delete props.jsonProps2.dataGridProperties.colHeader.title;
                        delete props.jsonProps2.dataGridProperties.rowHeader.labels;
                    }
                }
                if(!isOriginal) {
                    delete props.jsonProps2.pieProperties;
                    delete props.jsonProps2.blaProperties;
                    delete props.jsonProps2.gaugeProperties;
                    //delete props.jsonProps2.dataGridProperties;
                    delete props.jsonProps2.matrixProperties;
                    delete props.jsonProps2.tagcloudProperties;
                    delete props.jsonProps2.pieProperties;
                }
            }

        } else
        if(dataProvider.type == "advanced") {
            if(typeof(dataProvider.dataPageSlider)!="undefined") {
                props.dataPageSlider = {};
                ibiStd.mergeObject(props.dataPageSlider,dataProvider.dataPageSlider);
            }
            if(dataProvider.hasMulti) {
                var clist = [];
                for(i in dataProvider.multi)
                    clist[clist.length] = i;
                props.groupLabels = dataProvider.multi[clist[0]].groupLabels;
                props.data = dataProvider.multi[clist[0]].data;
                p2 = document.getElementById(pid2);
                var newObj = new arcomboBox(0,0,100, 20);
                newObj.visible = true;
                newObj.multiselect = false;
                if(parms.mytable.a_cntl.dataReport)
                    newObj.dataReport = parms.mytable.a_cntl.dataReport;
                else
                    newObj.dataReport = parms.mytable.table_name;
                newObj.dataColumn = dataProvider.multiColumn;
                newObj.aggColumn = dataProvider.multiColumn;
                newObj.defaultValues = [clist[0]];
                newObj.parms = parms;
                newObj.props = props;
                newObj.id = "xyz";
                newObj.clist = clist;
                ibiCompound.drawObjectsPtr[newObj.id] = newObj;
                newObj.doFilter = function()
                    {
                        obj = document.getElementById("combobox"+this.id);
                        if(obj) {
                            this.values = [];
                            for(i=0; i < obj.value.options.length; i++)
                                if(obj.value.options[i].selected) {
                                    this.values[this.values.length]=obj.value.options[i].value;
                                    if(obj.value.options[i].value==ibiMsgStr['all']) this.active = false;
                                }

                            this.props.groupLabels = this.parms.dataProvider.multi[this.values[0]].groupLabels;
                            this.props.data = this.parms.dataProvider.multi[this.values[0]].data;
                            if(this.parms.dataProvider.graphAxis>1) 
                                this.parms.chart.groupLabels = {};
                            else
                                this.parms.chart.groupLabels = [];
                            if(this.props.jsonProps1)
                                chart.set(this.props.jsonProps1);
                            if(this.props.jsonProps2)
                                chart.set(this.props.jsonProps2);
                            this.parms.chart.set(this.props);
                            this.parms.chart.htmlToolTip.enabled = true;
                            this.parms.chart.htmlToolTip.snap = false;
                        this.parms.chart.htmlToolTip.sticky = "auto";
                            this.parms.chart.redraw();
                        }
                    };
                var newdiv = newObj.buildComponent();
                p2.innerHTML = '<div><div style="position:relative;">'+newdiv+'</div></div>';
                newObj.refresh();                
                //p2.innerHTML = clist[0];
            } else {
                props.groupLabels = dataProvider.groupLabels;
                props.data = dataProvider.data;
            }
            //isOriginalChart = false;
            var slabel = dataProvider.seriesLabels;
            if(dataProvider.hasMulti)
                slabel = dataProvider.multi[clist[0]].seriesLabels;
            if(base_chart=="bubble") 
            {
                newdata = [];
                for(i=0; i < props.data[0].length; i++) {
                    newdata[i] = [];
                    newdata[i][0] = [];
                    for(c=0; c < 3; c++)
                        newdata[i][0][c] = props.data[c][i];
                } 
                props.data = newdata;
                slabel = dataProvider.groupLabels;
            }
            for(c=0; c< props.data.length; c++) {
                ss = getSeries(seriesa,c);
                sc = seriesb.length;
                if(ss==null) 
                    seriesb[sc]={};
                else 
                    seriesb[sc] = ibiStd.copyObject(seriesa[ss]);
                seriesb[sc].series = c;
                //seriesb[sc].label = labels[c];
                seriesb[sc].label = slabel[c];
                seriesb[sc].color = color_table[c];
            }
            
            if((base_chart=="pie") || (base_chart=="funnel")) {
                props.swapData = false;
                props.colorMode = "bySeries";
            }
            
        } else {
            if(maxRecords<dataProvider.length) {
                var dp = [];
                for(i=0;i<maxRecords;i++)
                    dp[i] = dataProvider[i];
                dataProvider = dp;
                tooManyDataPoints = true;
                numRecords = maxRecords;
            }
            if ((base_chart=="scatter") || (base_chart=="bubble") || (base_chart=="boxplot") || (base_chart=="map")) {
                ga = dataProvider[0][y[0]];
                for(icol=1; icol<y.length;icol++) {
                    ga += '/' + dataProvider[0][y[icol]];
                }
            } 

            var bw;
            
            if(((base_chart=="pie") || (base_chart=="funnel"))&& isOriginalChart) {
                for(c=0; c<dataProvider.length; c++) 
                    tdata[c] = [];
            } else
            if(base_chart=="boxplot") {
                tdata[0] = [];
                for(c=0; c<dataProvider.length; c++)
                    tdata[0][c] = [];
            } else {
                for(c=0; c<x.length; c++) tdata[c] = [];
            }

            var count = 0;    
            for(c=0; c< x.length; c++) {
                ss = getSeries(seriesa,c);
                sc = seriesb.length;
                if(ss==null) 
                    seriesb[sc]={};
                else 
                    seriesb[sc] = ibiStd.copyObject(seriesa[ss]);
                seriesb[sc].series = c;
                seriesb[sc].label = labels[c];
                seriesb[sc].color = color_table[c];
                for(i=0; i< dataProvider.length; i++) {
                    if(base_chart=="scatter") {
                        ga = dataProvider[i][y[0]];
                        for(icol=1; icol<y.length;icol++) {
                            ga += '/' + dataProvider[i][y[icol]];
                        }
                        cc = ga;
                        tdata[c][i] = [cc,dataProvider[i][x[c]]];
                    } else
                    if(base_chart=="map") {
                        ga = dataProvider[i][y[0]];
                        for(icol=1; icol<y.length;icol++) {
                            ga += '/' + dataProvider[i][y[icol]];
                        }
                        cc = ga;
                        tdata[i] = [cc,dataProvider[i][x[c]]];
                    } else
                    if(base_chart=="bubble") {
                        ga = dataProvider[i][y[0]];
                        for(icol=1; icol<y.length;icol++) {
                            ga += '/' + dataProvider[i][y[icol]];
                        }
                        cc = ga;
                        bw = 1;
                        if(typeof(x[c+1])!="undefined") bw = dataProvider[i][x[c+1]];
                        tdata[c][i] = [cc,dataProvider[i][x[c]],bw];
                    } else 
                    if(base_chart=="boxplot") {
                        tdata[0][i][c] = dataProvider[i][x[c]];
                    } else
                    if(((base_chart=="pie") || (base_chart=="funnel")) && isOriginalChart) {
                        tdata[i][c] = dataProvider[i][x[c]];
                    } else 
                    tdata[c][i] = dataProvider[i][x[c]];
                }
                if(base_chart=="bubble") c++;
            }


            for(i=0; i< dataProvider.length; i++) {
                glab[i] = dataProvider[i][y[0]] ;
                if ((base_chart!="scatter") && (base_chart!="bubble") && (base_chart!="boxplot"))
                    glab[i] = glab[i]+''; 
                for(j=1; j < y.length; j++)
                    glab[i] += '/' + dataProvider[i][y[j]];
            }
            props.groupLabels = glab;
            props.data = tdata;
            
            if((base_chart=="pie") || (base_chart=="funnel")) {
                props.swapData = (isOriginalChart) ? true : false;
                props.colorMode = "bySeries";

                seriesa = [];
                if(typeof(whichProps.series)!="undefined") seriesa = ibiStd.copyObject(whichProps.series);
                for(i=0; i < dataProvider.length ;i++) {
                    ss = getSeries(seriesa,i);
                    if(ss==null) {
                        ss = seriesa.length;
                        seriesa[ss]={};
                    }
                    seriesa[ss].series= i;
                    seriesa[ss].label= glab[i];
                    seriesa[ss].color= color_table[i];
                }
                props.series = seriesa;
                glab = [];
                for(i=0; i< x.length; i++) {
                    glab[i] = labels[i];
                }
                props.groupLabels = glab;
            } else
            if(base_chart=="boxplot") {
                seriesa = [];
                seriesa[0] = {};
                seriesa[0].series = 0;
                seriesa[0].color = color_table[0];
                props.series = seriesa;
            }
        }

        if(isIcon) {
            props.width = size.width;
            props.height = size.height;
            props.title = {text: plain_title, visible:true};
        }
        props.chartType = base_chart;
        props.extraInfo = 45;

        if(pfjString) {
            var mytable = parms.mytable;
            var isRollUp = false;
            if(mytable)
                isRollUp = parms.mytable.isRollUp;
            pfjString = pfjParse(pfjString,isOriginal,props.series,(isRollUp || dataProvider.hasMulti), mytable);
        }
        //if we see title then use it
        if ((typeof props.title === "undefined") && (!useJsonTitle)) {
		    delete props.title;
        }
        if(pfjString)
            if (pfjString.indexOf("setTitleString(")!=-1) {
                p2 = document.getElementById(pid2);
                if(p2) p2.innerHTML = '';
                if(!useJsonTitle)
                    delete props.title;
            }
        if(tooManyDataPoints) {
            p2 = document.getElementById(pid2);
            if(p2) 
                p2.innerHTML = '<span>... Too Many Data points (max:'+numRecords+') ...</span><br><span>'+p2.innerHTML+'</span>';
        }
        parms.alias = "tdg/jschart/distribution/";
        if(focexurl && (focexurl!='')) {
            var ind = focexurl.indexOf('WFServlet');
            if (ind>0) parms.alias = focexurl.substr(0,ind)+'tdg/jschart/distribution/';
        }
        parms.tdgChart = props;
        parms.useDiv = useDiv;
        parms.dataProvider = dataProvider;
        parms.labels = labels;
         parms.x = x;
        parms.y = y;
        parms.isOriginal = isOriginal;

        if(isIcon) {
            chart = new tdgchart({backend:'js', allowBackendFallback:false,tdgPath:parms.alias});
            chart.set(props);            
            chart.set({
                htmlTooltips: {enabled: false},
                mouseOverIndicator: {enabled: false},
                series: [{series: 'reset', tooltip: null}]   // probably not needed, but still safe
            });
            chart.enableBehavior('all', false); // disable all interactivity for icon charts
            if(pfjString)
                chart.parsePFJString(pfjString);
            if (oProps) {
                for (j = 0; j < oProps.length; j++) {
                    if (oProps[j].pfj) {
                        chart.parsePFJString(pfjParse(oProps[j].pfj, false,props.series,false,undefined,false));
                    } else
                    if (oProps[j].json) {
                        var js = {};
                        try {
                            js = eval('({' + oProps[j].json + '})');
                        } catch (e) {
                        }
                        delete js.chartType;
                        delete js.pieProperties;
                        delete js.blaProperties;
                        delete js.gaugeProperties;
                        delete js.dataGridProperties;
                        delete js.matrixProperties;
                        delete js.tagcloudProperties;
                        delete js.pieProperties;
                        chart.set(js);
                    }
                }
            }
            if (oPropsFinal) {
                for (var j = 0; j < oPropsFinal.length; j++) {
                    if (oPropsFinal[j].json) {
                        var js = {};
                        try {
                            js = eval('({' + oPropsFinal[j].json + '})');
                        } catch (e) {
                        }
                        delete js.chartType;
                        delete js.pieProperties;
                        delete js.blaProperties;
                        delete js.gaugeProperties;
                        delete js.dataGridProperties;
                        delete js.matrixProperties;
                        delete js.tagcloudProperties;
                        delete js.pieProperties;
                        chart.set(js);
                    } else if (oPropsFinal[j].pfj) {
                        chart.parsePFJString(pfjParse(oPropsFinal[j].pfj, false,props.series,false,undefined,false));
                    }
                }
            }

            resetProperties(chart);

            if (extraProps)
                chart.set(extraProps);
            chart.set(tdginfo.chartIconsProps);
            chart.draw(pid);
            parms.chart = chart;
        } else {
            var priorChart = { width: 0, height: 0 };
            var secondChart = false;
            var dd = new Date().getTime();
            if(forMobileView) {
                secondChart = true;
				parms.mytable.sdd[dpos] = dd;
            } else {
				parms.mytable.delayChart2[dpos] = null;
				parms.mytable.dd[dpos] = dd;
            }

            if(forMobileView) {
                if(!props.morphEnable) {
                    chart = new tdgchart({backend:'js', allowBackendFallback:true,tdgPath:parms.alias});
                    //chart.catchErrors = false;
                    if((parms.tdgChart.chartType!="map")&&(parms.tdgChart.chartType!="treemap")&&(parms.dataProvider.type != "buckets"))
                        chart.applyPFJDefaults();
                    parms._chartMobile = chart;
                    // chart.parms = parms; // FLEX chokes on recursive objects
				} else {
                    chart = parms._chartMobile;
                    chart.set(tdgchart.defaultProperties);
                }
            } else {
                if (!props.morphEnable) {
                    chart = new tdgchart({backend: 'js', allowBackendFallback: true, tdgPath: parms.alias});

                    if(parms.mytable.chartMenuInfo) {
                        if(parms.mytable.chartMenuInfo.handle) {
                            parms.mytable.chartMenuInfo.handle.hide();
                        }
                        try {
                            mytable.chartMenuInfo.tooltip.style.visibility = "hidden";
                        } catch(e) {}
                        delete parms.mytable.chartMenuInfo;
                    }
                    if ((parms.tdgChart.chartType != "map") && (parms.tdgChart.chartType != "treemap") && (parms.dataProvider.type != "buckets"))
                        chart.applyPFJDefaults();
                    delete parms._chart;
                    parms._chart = chart;
                    // chart.parms = parms; // FLEX chokes on recursive objects
                } else {
                    chart = parms._chart;
                    chart.set(tdgchart.defaultProperties);
                }
                chart.htmlToolTip.enabled = true;
                chart.htmlToolTip.snap = false;
                chart.htmlToolTip.sticky = "auto";
				    chart.catchErrors = true;
            } 

            //window.setTimeout(function(){
            var callLaterChart  = function(){
                var i;
                var ii;
                var chart;
                
                if(secondChart) {
                    chart = parms._chartMobile;
					if(dd != parms.mytable.sdd[parms.dpos]) {
                        removeFromQueue(parms.mytable, dd);
                        ibiTDGCharts.chartQueueFunc();
                        return;
                    }
                } else {
                    chart = parms._chart;
					if(dd != parms.mytable.dd[parms.dpos]) {
                        removeFromQueue(parms.mytable, dd);
                        ibiTDGCharts.chartQueueFunc();
                        return;
                    }
                }
                if (isOriginalChart) { chart.legend.visible = 'auto'; }
                var p1 = document.getElementById(pid);
                var headingDiv = document.getElementById(pid2);
                var containerDiv = document.getElementById(pid+'mg');
                headingHeight = (headingDiv) ? headingDiv.offsetHeight : 0;
                //if(parms.mytable) containerDiv = parms.mytable.maintable.wmenu;
                if(!p1)
                    return;
                var parms2 = {
                    'win':parms.win,
                    'groupLabels':parms.tdgChart.groupLabels,
                    'id':parms.mytable.id,
                    'cctype':parms.cctype,
                    'y_col':parms.y_col,
                    'x_col':parms.x_col,
                    'dataProvider':dataProvider,
                    'y': parms.y,
                    'x':parms.x,
                    'labels':parms.labels,
                    'subTable':parms.subTable
                };

                //if (resizeInfo || (parms.mytable.a_cntl.autoFit == arConstants.AUTOFIT_CONTAINER))
                //{
                var _resizeTDGChart = function() {
                    var autoFitSet = parms.mytable.a_cntl.autoFit || arConstants.AUTOFIT_OFF;
                    if ((autoFitSet === arConstants.AUTOFIT_OFF) &&
                        (priorChart.width !== 0           &&
                         priorChart.width  == props.width &&
                         priorChart.height == props.height)) {
                        return;
                    }
                    if(!document.getElementById(pid))
                        return;
                    var reDrawChart = false;
                    var winHeight = window.innerHeight || document.documentElement.offsetHeight,
                        winWidth  = window.innerWidth  || document.documentElement.offsetWidth;
                    var chartHeading = headingDiv; //document.getElementById('MAINTABLE_wbody'+parms.mytable.id+'_ft');

                    if((autoFitSet == arConstants.AUTOFIT_CONTAINER) ||
                       (autoFitSet == arConstants.AUTOFIT_OFF) ||
                       ((autoFitSet == arConstants.AUTOFIT_RESIZE) &&
                        (resizeInfo.autoFit === arConstants.AUTOFIT_RESIZE))) {
                        if(parms.mytable.resizeContainer) {
                            winHeight = parms.mytable.resizeContainer.clientHeight;
                            winWidth = parms.mytable.resizeContainer.clientWidth;
                            imageHeight = winHeight - menuHeight - headingHeight - footerHeight;
                            imageWidth  = winWidth;

                            if(parms.mytable.maintable.wmenu && parms.mytable.maintable.wmenu.style.display !== 'none') {
                                parms.mytable.maintable.wmenu.style.width = imageWidth + 'px';
                            }

                            if(chartHeading && chartHeading.querySelector('table')) {
                                chartHeading.querySelector('table').style.width = imageWidth + 'px';
                            }

                            //resizeInfo.menuDiv.style.width = winWidth + 'px';
                            //resizeInfo.heading = resizeInfo.heading || headingDiv.getElementsByTagName('table')[0];
                            //resizeInfo.heading.style.width = winWidth + 'px';
                            p1.style.height = containerDiv.style.height = imageHeight + 'px';
                            p1.style.width = containerDiv.style.width = imageWidth + 'px';
                            props.height = imageHeight;
                            props.width = imageWidth;
                        } else {
                            props.height = (parms.useDiv.offsetHeight - headingHeight) - footerHeight;
                            p1.style.height = containerDiv.style.height = props.height + 'px';
                        }
                        reDrawChart = true;
                    } else if (winHeight > 0 && winWidth > 0 && resizeInfo) {
                        imageHeight = winHeight - resizeInfo.vMargins - menuHeight - headingHeight - footerHeight;
                        imageWidth  = winWidth  - resizeInfo.hMargins;

                        if (resizeInfo.menuDiv.offsetWidth > 0) {
                            resizeInfo.menuDiv.style.width = imageWidth + 'px';
                        }
                        resizeInfo.heading = resizeInfo.heading || headingDiv.getElementsByTagName('table')[0];
                        if(resizeInfo.heading)
                            resizeInfo.heading.style.width = imageWidth + 'px';
                        p1.style.height = containerDiv.style.height = imageHeight + 'px';
                        headingDiv.style.width =
                           parms.mytable.maintable.wbody.style.width =
                           p1.style.width = containerDiv.style.width = imageWidth + 'px';
                        props.height = imageHeight;
                        props.width = imageWidth;

                        if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
                            reDrawChart = true;
                        }
                    } else if (ibiMobileFullscreen) {
                        reDrawChart = true;
                    }
                    if(reDrawChart) {
                        chart.set(props);
                        if((parms.tdgChart.chartType=="map") && (parms.dataProvider.type != "buckets")) {
                            chart.dataLabels.visible = false;
                        }
                        //if((oProps_chartType != null) && (props.chartType != 'matrix'))
                        //    chart.set({"chartType":oProps_chartType});
                        //if(!oProps) {
                        if((props.chartType == "pie") || (props.chartType == "matrix" && props.matrixProperties.chartType=="pie")) {
                            chart.parsePFJString("setPieFeelerTextDisplay(1);\n");
                        }
                        if (isOriginalChart && !chart.pfjString)
                        chart.pfjString = "setGraphType(" + parms.mytable.a_cntl.graphType + ");\n";

                             //   if (chart.pfjString) {
                              //      chart.parsePFJString(pfjParse(chart.pfjString, parms.isOriginal, props.series,(parms.mytable.isRollUp || parms.dataProvider.hasMulti), parms.mytable));
                              //      if(isOriginalChart)
                              //          chart.parsePFJString("setGraphType(" + parms.mytable.a_cntl.graphType + ");\n");
                               // }
                        //}
                        if (props.jsonProps1)
                            chart.set(props.jsonProps1);

                        // may contain info not transfered to props
                        if (props.jsonProps2)
                            chart.set(props.jsonProps2);

                        if(isOriginalChart && chart.pfjString &&( chart.pfjString.indexOf('setGraphType')!=-1) )
                            delete props.chartType;
                            if (chart.pfjString) {
                                if(isOriginalChart)
                                    chart.parsePFJString("setGraphType(" + parms.mytable.a_cntl.graphType + ");\n");
                            }

                            if (oProps) {
                                for (j = 0; j < oProps.length; j++) {
                                    if (oProps[j].pfj) {
                                        chart.parsePFJString(pfjParse(oProps[j].pfj, false,props.series,(parms.mytable.isRollUp || parms.dataProvider.hasMulti),undefined,parms.isOriginal));
                                    } else
                                    if (oProps[j].json) {
                                        js = {};
                                        try {
                                            js = eval('({' + oProps[j].json + '})');
                                        } catch (e) {
                                        }
                                        delete js.matrixProperties;
                                        delete js.chartType;
                                        delete js.colorScale;
                                        delete js.legend;
                                        if(js.zaxis)
                                            delete js.zaxis.title;
                                        if(js.xaxis)
                                            delete js.xaxis.title;
                                        if(js.yaxis)
                                            delete js.yaxis.title;
                                        if(!parms.isOriginal) {
                                            delete js.pieProperties;
                                            delete js.blaProperties;
                                            delete js.gaugeProperties;
                                            delete js.dataGridProperties;
                                            delete js.tagcloudProperties;
                                            delete js.pieProperties;
                                        }
                                        chart.set(js);
                                    }
                                }
                            }
                            if (chart.pfjString) {
                                chart.parsePFJString(pfjParse(chart.pfjString, parms.isOriginal, props.series,(parms.mytable.isRollUp || parms.dataProvider.hasMulti), parms.mytable));
                                //if(isOriginalChart)
                                //    chart.parsePFJString("setGraphType(" + parms.mytable.a_cntl.graphType + ");\n");
                            }

                            if (oPropsFinal) {
                                for (var j = 0; j < oPropsFinal.length; j++) {
                                    if (oPropsFinal[j].json) {
                                        var js = {};
                                        try {
                                                    js = eval('({' + oPropsFinal[j].json + '})');
                                        } catch (e) {
                                        }
                                        delete js.matrixProperties;
                                        delete js.chartType;
                                        delete js.colorScale;
                                        delete js.legend;
                                        if(js.zaxis)
                                            delete js.zaxis.title;
                                        if(js.xaxis)
                                            delete js.xaxis.title;
                                        if(js.yaxis)
                                            delete js.yaxis.title;
                                        if(!parms.isOriginal) {
                                            delete js.pieProperties;
                                            delete js.blaProperties;
                                            delete js.gaugeProperties;
                                            delete js.dataGridProperties;
                                            delete js.tagcloudProperties;
                                            delete js.pieProperties;
                                        }
                                        chart.set(js);
                                    } else if (oPropsFinal[j].pfj) {
                                        chart.parsePFJString(pfjParse(oPropsFinal[j].pfj, parms.isOriginal,props.series,(parms.mytable.isRollUp || parms.dataProvider.hasMulti)));
                                }
                            }
                        }
                            if((oProps_chartType != null) && (props.chartType != 'matrix'))
                                chart.set({"chartType":oProps_chartType});

                        chart.htmlToolTip.enabled = true;
                        chart.htmlToolTip.snap = false;
                        chart.htmlToolTip.sticky = "auto";
                         //   chart.catchErrors = false;

                        parms.mytable.inChartType = chart.chartType;
                        if(parms.mytable.tdg_props) {
                            chart.set(parms.mytable.tdg_props);
                        }

                        if(!parms.isOriginal)
                                resetProperties(chart);
                            
                        if(extraProps && !parms.isOriginal) {
                            chart.set(extraProps);
                        }

                            //value disappears in portal
                        ibiTDGCharts.chartAlias = props.focexurl;
                        
                        if(mobileDashboard && arDisplayMode == DISPLAY_MODE_ADAPTIVE) {
                            chart.legend.dock.minimized = true;
                        }
                        
                        if(!props.morphEnable || !document.getElementById(pid).querySelector('svg'))
                            chart.draw(pid);
                        else {
                            chart.morph();
                            // reset morphEnable so that chart doesn't morph when resize is triggered.
                            // If filter is applied, morphEnable will be set to true above.
                            props.morphEnable = false;
                        }
                    }
                    if(parms.mytable.a_cntl.showMenuPopOut)
                        window.setTimeout(function(){parms.mytable.showBottomMenu()}, 0);
                }; // end _resizeTDGChart()

                parms.mytable.resizeChart = function() {
                    if(parms.mytable.deleted) 
                        return;
                    if(!document.getElementById(pid)) 
                        return;
                    window.clearTimeout(parms.mytable.resizeChartTimeoutId);
                    if(mobileDashboard) {
                        mobileDashboard.handleChartUpdate({
                            tableNumber: parms.mytable.id,
                            resizeMethod: _resizeTDGChart,
                            isRollUp: parms.win > -1,
                            pn: getPn(parms.win, parms.mytable.id)
                        });
                    } else {
                        parms.mytable.resizeChartTimeoutId = window.setTimeout(function(){_resizeTDGChart();}, 100);
                    }
                }; // end .resizeChart()

                if ('addEventListener' in window) {
                    window.addEventListener("resize", parms.mytable.resizeChart, false);
                } else {
                    window.attachEvent("onresize", parms.mytable.resizeChart);
                }
                //}

                if(p1 && (p1.offsetWidth == 0)) {
                    if(b_mobile) {
                        removeFromQueue(parms.mytable);
                        ibiTDGCharts.chartQueueFunc();
                        if(ibiTDGCharts.chartQueue.length==0)
                            ibiTDGCharts.chartQueueWait = false;
                    } else {
                        parms.p1 = p1;
                        ibiTDGCharts.containerQueue[ibiTDGCharts.containerQueue.length]=parms;
                        if(ibiTDGCharts.containerQueue.length<=1)ibiTDGCharts.checkIfContainerIsReady();
                    }
                    return;
                }
                props.width = p1.offsetWidth - lMargin - rMargin;
                props.height = (useDiv.offsetHeight - menuHeight - headingHeight - tMargin - bMargin) - footerHeight;
                parms.useDiv = useDiv;
                if (containerDiv) {
                    p1.style.height = containerDiv.style.height = imageHeight + 'px';
                    parms.mytable.maintable.wbody.style.width = 
                       p1.style.width = containerDiv.style.width = imageWidth + 'px';
                }
                //if(containerDiv) props.height = props.height - containerDiv.offsetHeight;
                //if(b_ie) props.height = props.height-4;
                if (footerHeight > 0) {
                    chartFooting.elem.style.visibility = 'visible';
                }
                if(!isOriginalChart) {
                    if(parms.dataProvider.type != "buckets")
                        chart.parsePFJString('setToolTipStyle("html5");');
                }
                /*  Doesnt support multi measures yet
                if ((hasBuckets) && (props.chartType != 'map') && (props.chartType != 'matrix')){
                    chart.externalHTMLTip = ibiActiveVis.showChartMenuHTML;
                    
                    if((props.chartType!="scatter") && (props.chartType!="line") ) {
                        var saveColorMode = "bySeries";
                        if(typeof(props.colorMode)!="undefined") saveColorMode = props.colorMode;
                        props.colorMode = {};
                        if(saveColorMode == "bySeries") {
                            props.colorMode.mode = "bySeriesSelection";
                        } else {
                            props.colorMode.mode = "byGroupSelection";
                        }
                        props.colorMode.colorList = [];  
                        props.colorMode.data = [];
                        if(props.colorMode.mode == "byGroupSelection") 
                            for(i=0; i < props.data[0].length; i++) {
                                props.colorMode.data[i] = [];
                                props.colorMode.data[i] = "100%";
                            }
                        else {
                            for(ii=0; ii< props.series.length; ii++) {
                                if(props.series[ii].series == 'all')
                                    continue;
                                var si = props.series[ii].series;
                                props.colorMode.data[si] = [];
                                if(props.groupLabels)
                                for(i=0; i < props.groupLabels.length; i++) {
                                    if(props.chartType=="pie")
                                        props.colorMode.data[si][props.colorMode.data[si].length] = "99%";
                                    else
                                        props.colorMode.data[si][props.colorMode.data[si].length] = "100%";
                                }
                            }
                        }
                    }
                }
                */
                

                //if(props.jsonProps1)
                //    chart.set(props.jsonProps1);
                //if(props.jsonProps2)
                //    chart.set(props.jsonProps2);
                //chart.set(props);
                //if (!hasBuckets) {
                //    chart.registerEvent(ibiTDGCharts.chartClick, 'click', 'series',parms2, undefined, undefined, '!other');
                //}
                if(pfjString) {
                //    chart.parsePFJString(pfjString);
                    chart.pfjString = pfjString;
                }
                                //chart.showDebugString = true;
                                
                if(whichProps && whichProps.dataSelection) {
                    chart.dataSelection = ibiStd.copyObject(whichProps.dataSelection);
                    if(whichProps.mouseOverIndicator)
                        chart.mouseOverIndicator = ibiStd.copyObject(whichProps.mouseOverIndicator);
                } else
                chart.dataSelection = ibiStd.copyObject(tdginfo.dataSelectionDefault);
                chart.dataSelection.eventCallback = function(selList,obj) {
                        ibiChart.chartSelectionChanged(selList,parms,obj);
                };
                if(b_mobile)
                    chart.registerEvent(ibiTDGCharts.chartQueueFunc, 'renderComplete');
                chart.registerEvent(ibiTDGCharts.updateCompleteFunc, 'renderComplete');
                //chart.htmlToolTip.enabled = true;
                //chart.htmlToolTip.snap = false;
                //chart.htmlToolTip.sticky = true;
                chart._ibi_table_number = parms.mytable.id;
                //chart.draw(pid);
                _resizeTDGChart();
                priorChart.width = props.width; priorChart.height = props.height;
                if (resizeInfo && resizeInfo.autoFit === arConstants.AUTOFIT_RESIZE) {
                    resizeInfo.autoFit = arConstants.AUTOFIT_ON; // keep resizing...
                }
                delete chart.xaxis._labelList;
                parms.chart = chart;
                // chart.parms = parms; // FLEX chokes on recursive objects

                if(secondChart)
					parms.mytable.delayChart2[parms.dpos] = null;
                else
					parms.mytable.delayChart[parms.dpos] = null;
            //},0);
            };

            if(secondChart)
				parms.mytable.delayChart2[parms.dpos] = callLaterChart;
            else
				parms.mytable.delayChart[parms.dpos] = callLaterChart;

            if(b_mobile && mobileDashboard) {
                mobileDashboard.handleChartUpdate({
                    tableNumber: parms.mytable.id,
                    drawMethod: parms.mytable.delayChart[parms.dpos],
                    isRollUp: parms.win > -1,
                    pn: getPn(parms.win, parms.mytable.id)
                });
            }

            if(!mobileDashboard) {
                if(b_mobile && parms.tdgChart.introAnimation && parms.tdgChart.introAnimation.enabled) {
                    ibiTDGCharts.chartQueue[ibiTDGCharts.chartQueue.length] = 
                        {'mytable':parms.mytable,'dpos':parms.dpos,'timestamp':dd,'callLaterChart':callLaterChart,'isFullView':secondChart};
                    if(!ibiTDGCharts.chartQueueWait) ibiTDGCharts.chartQueueFunc();
                    //if(ibiTDGCharts.chartQueue.length==1) ibiTDGCharts.chartQueueFunc();
                    ibiTDGCharts.chartQueueWait = true;
                } else {
                    if(secondChart) {
                    if(parms.mytable.dhandle2[parms.dpos])
                        window.clearTimeout(parms.mytable.dhandle2[parms.dpos]);
                        parms.mytable.dhandle2[parms.dpos] = window.setTimeout(parms.mytable.delayChart2[parms.dpos],100);
                    } else {
                    if (parms.mytable.dhandle[parms.dpos])
                        window.clearTimeout(parms.mytable.dhandle[parms.dpos]);
                    parms.mytable.dhandle[parms.dpos] = window.setTimeout(parms.mytable.delayChart[parms.dpos], 100);
                    }
                }    
            }
            
        }
    
    }

    function resetProperties(chart) {
        if(chart.series) {
            for(j=0; j < chart.series.length; j++) {
                delete chart.series[j].border;
                if(chart.series[j].series != "all") {
                    delete chart.series[j].marker;

                }
            }
        }
        chart.depth = ibiTDGCharts.blankChart.depth;
        chart.pieProperties.skew = ibiTDGCharts.blankChart.pieProperties.skew;
    }



    function pfjParse(pfjString,isOriginalChart,series,hideTitle,tbl,allowSomeChartSpecific) {
        var pfj = '';
        var t,tt;
        if(pfjString) {
            var ps = pfjString.split(';');
            if(ps.length) {
                var idx, numOfFiltered, currentItem,
                    filteredItems = [],
                    isFiltered = false,
                    filtBody = (tbl) ? tbl.a_filter_body : null;
                if (isOriginalChart && filtBody !== null) {
                    for (idx = 0, numOfFiltered = filtBody.length; idx < numOfFiltered; ++idx) {
                        if(typeof filtBody[idx] != "undefined")
                            filteredItems[filteredItems.length] = filtBody[idx][filtBody[idx].length - 1];
                    }
                    isFiltered = true;
                }
                for(i=0; i< ps.length; i++) {
                    if (ps[i].indexOf("\\n") != -1) {
                        ps[i] = ps[i].replace(/\\n/g, '\n');
                    }
                    if(!isOriginalChart) {
                        if (ps[i].indexOf("setTitleString(")!=-1)
                            if (!hideTitle)
                                pfj += ps[i] + ';';

                        if ((ps[i].indexOf("Color(")!=-1)||
                            (ps[i].indexOf("setUse")!=-1)||
                            (ps[i].indexOf("setText")!=-1)||
                            (ps[i].indexOf("setSeriesType")!=-1 && allowSomeChartSpecific)||
                            (ps[i].indexOf("Gridstyle")!=-1)||
                            (ps[i].indexOf("setReverse")!=-1)||
                            (ps[i].indexOf("setNull")!=-1)||
                            (ps[i].indexOf("setLine")!=-1)||
                            (ps[i].indexOf("getLegend")!=-1)||
                            (ps[i].indexOf("setLegend")!=-1)||
                            (ps[i].indexOf("setCurveFitType")!=-1)||
                            (ps[i].indexOf("setGridCount")!=-1)||
                            (ps[i].indexOf("setDecimal")!=-1)||
                            (ps[i].indexOf("setCent")!=-1)||
                            (ps[i].indexOf("setMon")!=-1)||
                            (ps[i].indexOf("setGroup")!=-1)||
                            (ps[i].indexOf("setCustom")!=-1)||
                            (ps[i].indexOf("setColorMode")!=-1)||
                            (ps[i].indexOf("setFill")!=-1)||
                            (ps[i].indexOf("setAxisSide")!=-1)||
                            (ps[i].indexOf("setPlace")!=-1)||
                            (ps[i].indexOf("setReference")!=-1)||
                            (ps[i].indexOf("setLabelStagg")!=-1)||
                            (ps[i].indexOf("setBorder")!=-1)||
                            (ps[i].indexOf("setCube")!=-1)||
                            (ps[i].indexOf("setScale")!=-1)||
                            (ps[i].indexOf("setDisplay")!=-1)||
                            (ps[i].indexOf("setDataTextPosition")!=-1)||
                            (ps[i].indexOf("setDataTextDisplay")!=-1)||
                            (ps[i].indexOf("setTransparent")!=-1)||
                            (ps[i].indexOf("setPieFeeler")!=-1)||
                            (ps[i].indexOf("setPieLabel")!=-1)||
                            (ps[i].indexOf("setPieSlice")!=-1)||
                            (ps[i].indexOf("setPieTilt")!=-1)||
                            (ps[i].indexOf("setPieDepth")!=-1)||
                            (ps[i].indexOf("setGrad")!=-1)||
                            (ps[i].indexOf("setCurrency")!=-1)||
                            (ps[i].indexOf("setSmooth")!=-1)||
                            (ps[i].indexOf("setReportPars")!=-1)||
                            (ps[i].indexOf("setSelection")!=-1)||
                            (ps[i].indexOf("setAxisAssignment") != -1) ||
                            (ps[i].indexOf("setZeroValueDataTextDisplay") != -1) ||
                            (ps[i].indexOf("setDepthAngle") != -1) ||
                            (ps[i].indexOf("setDepthRadius") != -1) ||
                            (ps[i].indexOf("setMarkerShape") != -1) ||
                            (ps[i].indexOf("setConnectLineMarkers") != -1) ||
                            (ps[i].indexOf("setExclude") != -1) ||
                            (ps[i].indexOf("setDepth") != -1) ||
                            (ps[i].indexOf("setShadowDisplay") != -1) ||
                            (ps[i].indexOf("setGridStep") != -1) ||
                            (ps[i].indexOf("setFont")!=-1)) {
                            if(ps[i].indexOf('$')!=-1) {
                                t = ps[i].split('$');
                                tt = parseInt(t[1],10);
                                if(isNaN(tt)) {
                                   pfj += ps[i]+';';
                                } else
                                if(getSeries(series,tt) != null) {
                                   pfj += t[0]+t[1]+';'
                                }
                            } else
                                pfj += ps[i] + ';';
                        }
                    } else { // isOriginalChart 
                        if ((ps[i].indexOf("setURL") !== -1) && isFiltered) {
                           t = ps[i].split(',');
                           currentItem = parseInt(t[1], 10);
                           for (idx = 0, numOfFiltered = filteredItems.length; idx < numOfFiltered; ++idx) {
                               if (filteredItems[idx] == currentItem) {
                                   t[1] = idx + "";
                                   pfj += t + ';';
                                   break;
                               }
                           }
                        } else 
                        if((ps[i].indexOf("setNested")==-1)&&
                            (ps[i].indexOf("setGroupLabel")==-1)&&
                            (ps[i].indexOf("setToolTip")==-1)) {
                            if (ps[i].indexOf('$') != -1) {
                                t = ps[i].split('$');
                                tt = parseInt(t[1], 10);
                                if (isNaN(tt)) {
                                    pfj += ps[i]+';';
                                } else if (getSeries(series, tt) != null) {
                                    pfj += t[0] + t[1] + ';'
                                }
                            } else
                                pfj += ps[i] + ';';
                        }
                    }
                }
            }
        }
        return pfj;
    }

    function UpdateCompleteFunc() {
        var mytable=MyTable[this._ibi_table_number];
        if(mytable && mytable.updateCompleteFunc) {
            var myObj = {
                'id': this._ibi_table_number
            };
            mytable.updateCompleteFunc(myObj);
        }
    }

    function CheckIfContainerIsReady() {
        window.setTimeout(function(){
            if(ibiTDGCharts.containerQueue.length == 0) return;
            for(var i=0; i < ibiTDGCharts.containerQueue.length; i++)
				if(ibiTDGCharts.containerQueue[i].mytable.delayChart[ibiTDGCharts.containerQueue[i].dpos]) {
                    if(ibiTDGCharts.containerQueue[i].p1.offsetWidth>0) {
						window.setTimeout(ibiTDGCharts.containerQueue[i].mytable.delayChart[ibiTDGCharts.containerQueue[i].dpos],0);
                    }
                } else
                ibiTDGCharts.containerQueue.splice(i,1);
            if(ibiTDGCharts.containerQueue.length>0)ibiTDGCharts.checkIfContainerIsReady();
        },500);
    }

    function getSeries(array,series)
    {
        if((typeof array === "undefined") || (array == null))
            return null;
        for(var i=0; i< array.length; i++) {
            if(array[i].series == series) return i;
        }
        return null;
    }

    function ChartQueueFunc()
    {
        if(ibiTDGCharts.chartQueue.length) {
            if(ibiTDGCharts.chartQueue[0].callLaterChart)
                window.setTimeout(ibiTDGCharts.chartQueue[0].callLaterChart);
            removeFromQueue(ibiTDGCharts.chartQueue[0].mytable,ibiTDGCharts.chartQueue[0].timestamp);
        } else ibiTDGCharts.chartQueueWait = false;
    }
    
    function removeFromQueue(mytable, timestamp)
    {
        for(var i = 0; i < ibiTDGCharts.chartQueue.length; i++)
            if(mytable.id == ibiTDGCharts.chartQueue[i].mytable.id) {
                if(timestamp) {
                    if(ibiTDGCharts.chartQueue[i].isFullView) {
                        if(ibiTDGCharts.chartQueue[i].timestamp == timestamp)
                            ibiTDGCharts.chartQueue.splice(i,1);
                    } else {
                        if(ibiTDGCharts.chartQueue[i].timestamp == timestamp)
                            ibiTDGCharts.chartQueue.splice(i,1);
                    }    
                } else {
                    ibiTDGCharts.chartQueue.splice(i,1);
                }
            }
        if(ibiTDGCharts.chartQueue.length==0) ibiTDGCharts.chartQueueWait = false;
    }
    
    function ChartClick(object)
    {
        var parms = object.userInfo;
        var series = object.series;
        var group = object.group;
        var svgElement = object.svgElement;
        var objName = object.chartObjName;
        var misc = object.misc;
        var i;
        if(this.chartType == 'map')
        {
            for(i=0; i < parms.groupLabels.length; i++)
                if(group.toUpperCase() == parms.groupLabels[i].toUpperCase()) {
                    group = i;
                    break;
                }
        }
        if(typeof(parms.groupLabels[group])=="undefined") return;
        if (typeof(ibiChart) != "undefined") {
            var x = tdgchart.d3.event.clientX;
            var y = tdgchart.d3.event.clientY;
            var txt = svgElement.getAttribute('title') ||
                      svgElement.getAttribute('tdgtitle') ||
                      svgElement.parentNode.getAttribute('title') ||
                      svgElement.parentNode.getAttribute('tdgtitle') ||
                      "";
            var keyLegend = ((parms.cctype == chartIsPie) ||
                             (this.chartType === 'pie'   ||
                              this.chartType === 'gauge' ||
                              this.chartType === 'funnel'  ))
                            ? series : group;
            ibiChart.DoChartFilterTDG(parms.win,parms.id,parms.cctype,parms.y_col,parms.x_col,parms.subTable,txt,series,group,x,y,keyLegend);
        }
    }


})();
