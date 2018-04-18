/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/archart.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180125 1428 wjf 191009 Bucketize Pyramid Chart
* 171222 0856 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 1629 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171221 0141 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171220 1627 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171220 1311 wjf 198693 Vis: Drilldown on map doesn't work correctly at run time, w
* 171206 0954 wjf 190965 Vis ESRI Drill down options missing in tool tip
* 171204 1352 wjf 190965 Vis: ESRI: Filter chart, Exclude from chart, Drill down opt
* 171204 1005 wjf 196075 AHTML:Restore Original after Ext Chart conversion give err
* 171201 1105 wjf 192001 AHTML: Bucketized Streamgraph with Color BY does not multi-
* 171122 2046 wjf 188889 Vis: Run time menu - Remove filter icon not working
* 171121 1228 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 171120 1344 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 171117 1247 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 171117 1001 wjf 196456 Retail Samples : Converting BLA chart to Scatter/Bubble usi
* 171117 0930 wjf 196455 ACT: Converting BLA chart to Scatter/Bubble using Advanced
* 171116 1326 wjf 196075 AHTML: Restore Original after Extension Chart conversion gi
* 171024 1124 txk 196162 Auto Drill: NLS characters corrupted after clicking drillin
* 171023 1553 txk 196162 Auto Drill: NLS characters corrupted after clicking drillin
* 170928 1251 wjf 195616 Chart/Rollup Tool: Tooltip info for Measure does not show s
* 170928 1232 wjf 195789 Paperclicpping : Date separator ( / ) missing for Paper cli
* 170927 0950 wjf 189627 Advanced Chart option not passing correct variable back to
* 170926 1124 wjf 195616 Chart/Rollup Tool: Tooltip info for Measure does not show s
* 170925 1223 wjf 189627 Advanced Chart option not passing correct variable back to
* 170922 1138 wjf 181421 Group labels do not respect FOCUS format of field
* 170922 1017 wjf 192077 AHTML: Bar chart using Print ignores the detail and still s
* 170919 1809 wjf 195226 Active/vis Heatmap chart : Vertical axis title is missing
* 170919 1501 txk 195514 NLS: Visualization: drill down to report with parameters fa
* 170918 1347 wjf 195269 Paper clipping : Editing group value for date (YMD) field g
* 170907 1230 wjf 191207 AHTML: Extension Chart using Advanced Chart Tool conversion
* 170907 1216 wjf 189152 Active chart toolbar displays "undefined" for aggregation w
* 170907 1042 wjf 190619 Active Chart toolbar: Convert BLA to Pie chart, Legends dis
* 170907 1019 wjf 194950 Visualization drill down (to FEX, webpage) only works on a
* 170905 1155 wjf 194928 Active chart : Currency symbol and Decimal points missing
* 170901 1145 wjf 192871 Pie Chart: Legends are displayed as [object object] while m
* 170901 1052 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170818 1540 wjf 191001 Bucketize TagCloud
* 170818 1236 wjf 191001 Bucketize TagCloud
* 170817 1418 wjf 192174 Vis - Horizontal label format of bin field incorrect
* 170817 1021 wjf 192174 Vis - Horizontal label format of bin field incorrect
* 170816 1810 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170816 1225 wjf 192174 Vis - Horizontal label format of bin field incorrect
* 170816 1057 wjf 193903 Active Dashoard colors. Changed from 8.1 to 8.2
* 170812 1215 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170810 1235 wjf 193799 Select Drill Down for 'Refresh BI Portal' in Visualization
* 170809 1314 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170809 0949 wjf 193314 AHTML: Bucketized TagCloud chart does not provide Active fu
* 170808 1002 wjf 192174 Vis - Horizontal label format of bin field incorrect
* 170808 0724 wjf 192397 VIS: Dimension field added to Size bucket displays incorrec
* 170807 2247 wjf 191608 VIS:Apply sort by Ascending/Descending for Size bucket with
* 170807 1348 wjf 192221 Vis - Can't filter on bin values, selection tooltip missing
* 170807 1050 wjf 193382 Vis: Drill down & up to chart throws script error.
* 170725 1141 wjf 192996 @@measures; chart loading indefinitely
* 170721 2127 wjf 193117 Skipping values for a lasso filter is treated as range (BET
* 170705 1133 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 170630 1122 wjf 191515 Create unified filter component to replace old style filter
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170614 0749 wjf 191515 Create unified filter component to replace old style filter
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170530 1400 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170511 2045 wjf 191001 Bucketize TagCloud
* 170510 0852 wjf 191015 AHTML:Selecting advanced chart for Funnel/Pyramid throws We
* 170425 1002 wjf 190415 POC: Document - Title of blank still shows in Run mode
* 170421 1150 wjf 190415 POC: Document - Title of blank still shows in Run mode
* 170419 0737 wjf 190444 AHTML:Unable to select Scatter/Bubble charts from Chart/Rol
* 170331 1454 wjf 185582 Horizontal Labels not displayed correctly in Active Report
* 170331 1139 wjf 187417 Auto Drill Breadcrumbs for date fields should reflect its f
* 170330 1157 wjf 181900 Active leaflet proportional with Lat & Long shows legend la
* 170329 0628 wjf 185582 Horizontal Labels not displayed correctly in Active Report
* 170328 1509 wjf 189393 Matrix marker chart : Heading missing for addeding more tha
* 170324 1008 wjf 188933 Vis : After apply sort - Ascending/descending, dimension fi
* 170324 0943 wjf 186113 8201MR2:Active Report getting amdom Filter results
* 170321 1452 wjf 189296 Retail samples: X-axis column displayed as "Undefined" when
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170310 1126 wjf 189296 Retail samples: X-axis column displayed as "Undefined" when
* 170307 1026 wjf 188584 Sort icon mising after adding one dimension field
* 170130 1246 wjf 188021 IE: Uncheck All Active Report menu options and run it, it t
* 170130 1040 wjf 187350 Visualization: Sort icon is missing in GRID Column
* 170128 1101 wjf 187350 Visualization: Sort icon is missing in GRID Column
* 170127 1014 wjf 188176 AHTML: Deselecting Y axis Values displays refresh loop in R
* 170126 1536 wjf 187350 Visualization: Sort icon is missing in GRID Column
* 170126 1010 wjf 188021 IE: Uncheck All Active Report menu options and run it, it t
* 170125 1144 wjf 187700 Hidden Fields cause unexpected behavior with certain Active
* 170124 1624 bjd 185428 Mobile: Active bubble chart lasso tooltip misbehaves
* 170119 1037 wjf 187700 Hidden Fields cause unexpected behavior with certain Active
* 170109 1123 wjf 187703 Vis : Column totals not applied to grid column in both live
* 161221 1105 wjf 185202 Divider line is missing when "Remove Filter" is the only fi
* 161220 1814 wjf 180329 As a user I want to group dimension values through the repo
* 161219 2152 wjf 187347 Tooltip options too close together on mobile devices
* 161219 1251 wjf 177853 Tooltip in grid displays values stripped of formatting
* 161215 1704 wjf 185202 Divider line is missing when "Remove Filter" is the only fi
* 161212 1121 bjd 187007 AHTML REPORT + EMPTYREPORT=ON + AUTOFIT ON incorrect output
* 161208 1125 wjf 183161 Run output of Compare 2 chart extension in active report is
* 161206 1156 wjf 183161 Run output of Compare 2 chart extension in active report is
* 161205 1723 wjf 183161 Run output of Compare 2 chart extension in active report is
* 161121 1213 iys 180212 AHTML:MOB:Adding Group BY from Rollup report loses data
* 161114 1541 iys 185366 Mobile: Converting Bar with multiple measures to Pies at ru
* 161111 0909 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161107 0856 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161016 1908 wjf 185755 CNT.undefined err when creating Prop Sym map from CAROLAP
* 161014 1635 wjf 185731 Visualization drill down (auto drill) does not show correct
* 161012 1644 wjf 185520 Tooltip info is incorrect after changing Title of Sorted CN
* 161011 1359 wjf 185504 Visualization Esri Proportional displays Color as both Colo
* 161010 1839 wjf 185504 Visualization Esri Proportional displays Color as both Colo
* 160929 0958 wjf 183084 AHTML: Filtering on a Bar Chart with a DATE field as BY, do
* 160929 0946 wjf 183084 AHTML: Filtering on a Bar Chart with a DATE field as BY, do
* 160922 1321 wjf 184920 AHTML:Chart:Hovering Auto drilldown context box menu shows
* 160922 1221 wjf 184991 Vis: Other than BLA chart shows incorrect tooltip for dimen
* 160920 1407 wjf 183972 Vis:Exclude from chart is not working for single point in P
* 160920 1340 wjf 179717 Vis:Runtime: Lasso Filter after Restore & Remove Filter doe
* 160919 1157 iys 184736 Aggregation title is displayed as "Undefined" in chart tool
* 160916 1117 wjf 182439 NFR: Would like to turn off the FILTER CHART and EXCLUDE FR
* 160916 0950 bjd 184667 AHTML: Tooltip values missing in PIE chart created by Advan
* 160914 1040 wjf 182274 Visualization Esri Map shows Drill down to define instead o
* 160913 1154 wjf 184420 AHTML: Document with Coordinated field filter fails when NO
* 160913 0935 wjf 182274 Visualization Esri Map shows Drill down to define instead o
* 160912 1604 iys 184429 Mobile: Scatter Chart tooltip shows X & Y instead of values
* 160912 1257 wjf 182274 Visualization Esri Map shows Drill down to define instead o
* 160907 1704 wjf 182274 Visualization Esri Map shows Drill down to define instead o
* 160907 1148 wjf 172322 Active Dashboard has several Filtering problems using a Che
* 160906 1412 wjf 175050 AHTML:Chart:Measure title is not displayed in Pie Chart
* 160906 1315 wjf 184224 AHTML: Advanced Chart Tool fails to convert Treemap to othe
* 160906 1143 wjf 182264 Running Active Report With Join Shows Incorrect Data Based
* 160906 1138 iys 181951 Tooltips of several Visuals in one fex on mobile do not dis
* 160906 1119 wjf 181897 leaflet Proportional Map missing Filter options in tooltip
* 160902 0845 wjf 177468 Row/Column Visualization default tool tip is wrong after dr
* 160901 1322 wjf 183626 HTML:Chart:Changing line chart to HEATMAP from Advanced cha
* 160831 1231 bjd 182099 '1 point' Tool Tip Not Disabled Properly When Left Clicking
* 160830 1646 bjd 168397 Streamgraph chart with Active PDF/Flash format shows blank
* 160830 1051 wjf 179078 Vis: List Single Select doesn't work after Remove filter an
* 160829 1813 wjf 179582 BUE: If same field is in horizontal axis and tooltip, displ
* 160829 1424 bjd 183901 AHTML : Create Pie chart and click any Bar chart(vice versa
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160810 1554 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160810 0957 wjf 179430 Vis:No user friendly message when 0 lines to show(empty Cha
* 160810 0952 wjf 178601 Vis:Exclude from chart is not working for single point in P
* 160809 1942 wjf 182848 BUE: IE browser stops responding +44 7818531647
* 160807 0903 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160805 0626 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160804 2250 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160706 1256 bjd 181753 Tooltip missing for Sigma aggregation symbol in chart\rollu
* 160628 1014 wjf 174265 Visualization:Drill menu consolidation for cases with multi
* 160623 1204 wjf 174265 Visualization:Drill menu consolidation for cases with multi
* 160621 1217 wjf 181362 Map: Enable drill up/drill down in Visualization
* 160614 1112 wjf 172017 Handle bucket graphs with no data and EMPTYREPORT=ON
* 160610 1256 hms 180534 Remove tab characters from source files
* 160609 1321 wjf 172017 Handle bucket graphs with no data and EMPTYREPORT=ON
* 160607 1357 bjd 179210 Mob: Tooltip remains in the canvas when do actions in Chart
* 160603 1147 wjf 181636 visualization report at portal runtime yields webpage error
* 160603 1142 wjf 181636 visualization report at portal runtime yields webpage error
* 160602 1324 wjf 179572 Legend Title incorrect with ESRI Proportional Symbol Chart
* 160601 1557 wjf 179915 Heatmap displays colors at top of chart only
* 160601 1502 wjf 179900 Date Doesn't display correctly in Treemap grouping
* 160526 0932 wjf 181231 Drop-down in chart toolbar (1st button) missing tooltip
* 160526 0916 wjf 181362 Map: Enable drill up/drill down in Visualization
* 160525 1438 wjf 179772 BUE: Date in Color Bucket doesn't work
* 160524 1132 wjf 181274 AHTML: ESRI Choropleth does not show Auto Drill menu
* 160517 1408 bjd 179344 AHTML:horizontal\vertical scroll bars in chart rollup creat
* 160505 1850 bjd 180460 Active Charts: respect margin settings in the stylesheet
* 160505 1734 bjd 180460 Active Charts: respect margin settings in the stylesheet
* 160427 1241 wjf 179948 AHTML:Sorting on chart displays incorrect title.
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160413 1004 wjf 178160 Grid (from UI at run time) and drill down don't match (cach
* 160413 0955 wjf 177853 Tooltip in grid displays values stripped of formatting
* 160411 1659 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160408 1654 bjd 178735 AHTML:VAL:Rollup values are not tabulated in a table.
* 160408 1640 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160408 1351 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160408 1032 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160408 0945 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 2343 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 1633 wjf 179504 Datagrid column title not displayed if there are no measures
* 160407 1615 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 1204 wjf 179408 Legend options not working properly for visualization chart
* 160407 1010 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 0817 wjf 176974 WF BUE:GRID:Adding two measures do not display the second i
* 160406 1625 wjf 179387 Color By on 3 fields in Horizontal axis not working
* 160406 1554 bjd 178764 AHTML:Global filter value change is not reflected in Chart
* 160405 2313 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160405 0006 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 2314 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1624 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1513 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1452 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160329 1633 wjf 179045 Vis:Treemap:Single color display with heirarical Interger da
* 160329 1256 wjf 179045 Vis:Treemap:Single color display with heirarical Interger da
* 160329 1244 wjf 179045 Vis:Treemap:Single color display with heirarical Interger da
* 160329 0955 wjf 178415 Filter without value is created when filter on cell in heat
* 160328 1456 wjf 178613 Auto Drill for Active charts showing an extra Drill Down li
* 160328 1232 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160328 0951 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160323 1723 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160323 1524 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160322 1830 bjd 178735 AHTML:VAL:Rollup values are not tabulated in a table.
* 160322 1605 bjd 178735 AHTML:VAL:Rollup values are not tabulated in a table.
* 160322 1528 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160322 1443 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 1918 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160317 1529 wjf 177339 Treemap: Lasso does not filter chart on Design and Runtime
* 160315 1631 wjf 178373 Vis: Sorting a visualization with 2 dimensions results in b
* 160314 1621 iys 178243 AHTML:MOB:Charts are displayed with Horizontal lines and Ve
* 160314 1513 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160314 1113 wjf 177133 Visualization, drilldown in Preview creates wrong filter
* 160314 0956 wjf 178116 Click on "Hide" option for dimension yields error with visu
* 160312 1641 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160308 1136 wjf 177859 Treemap visualization with size & color displays incorrect
* 160307 1514 wjf 177986 BUE: If hierarchy field in color, drill down gives wrong re
* 160307 1423 bjd 177341 AHTML: Handle tooltip positioning during preview & runtime
* 160304 1333 wjf 177859 Treemap visualization with size & color displays incorrect
* 160303 1015 wjf 177816 Lasso filter in preview mode do not seems to get updated fo
* 160302 1639 wjf 177816 Lasso filter in preview mode do not seems to get updated fo
* 160302 0831 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160301 1801 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160225 1505 iys 177568 AHTML:MOB:VAL:Unable to create chart from report
* 160225 1331 wjf 177087 Drill up on Transaction Date changes Year filter to SUM (Ye
* 160225 1251 wjf 177487 Visualization: Filter after sorting the measure field was n
* 160225 1059 wjf 176951 Unable to "Drill Up" in Run mode
* 160224 1351 wjf 177351 Show user-friendly message in lieu of horizontal and vertic
* 160224 1310 wjf 177487 Visualization: Filter after sorting the measure field was n
* 160224 1249 wjf 177487 Visualization: Filter after sorting the measure field was n
* 160223 1153 wjf 176949 WF BUE: Selecting prompt filters after Lasso filter, resets
* 160219 1829 bjd 177341 AHTML: Handle tooltip positioning during preview & runtime
* 160219 1324 wjf 176603 Tooltip information missing for Pie chart
* 160219 0927 wjf 176898 AHTML: Cache performance enhancement
* 160218 1710 wjf 177075 WFBUE: VIS:BY field value is incorrect in tooltip at design
* 160218 1357 wjf 176898 AHTML: Cache performance enhancement
* 160217 1731 wjf 177213 Lasso filter 2nd level doesn't work in visualization previe
* 160217 1706 wjf 176603 Tooltip information missing for Pie chart
* 160217 1358 wjf 176898 AHTML: Cache performance enhancement
* 160214 1732 wjf 176898 AHTML: Cache performance enhancement
* 160212 1117 wjf 176898 AHTML: Cache performance enhancement
* 160210 0812 wjf 176898 AHTML: Cache performance enhancement
* 160209 1158 wjf 176800 Geometry georoles not painted on canvas in Visualization
* 160209 0945 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160204 1056 iys 171756 AHTML:IE10:Window tabs are missing when report invoked from
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160129 1052 wjf 175342 ESRI: Map - Options are missing on Filter menu
* 160129 1002 wjf 176394 Leaflet: Add fields into Lat/Long for bubble map error
* 160128 1439 wjf 176346 Visualization:Add field to ROWS, then Horizontal axis yields
* 160126 1527 bjd 174727 AHTML Chart with sort filter shows No data on lasso filter.
* 160122 1313 bjd 170516 AHTML: IE11 PIE and FF BAR context menu way to the left
* 160121 1236 bjd 176018 AHTML: Lasso displays incorrect tooltip info if hover over d
* 160121 1050 bjd 174727 AHTML Chart with sort filter shows No data on lasso filter.
* 160115 1235 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160115 1129 wjf 175647 Visualization Bubble chart with AVE is not displayed proper
* 160114 2338 wjf 175647 Visualization Bubble chart with AVE is not displayed proper
* 160114 1517 wjf 175647 Visualization Bubble chart with AVE is not displayed proper
* 160113 0918 wjf 174756 Pie chart not displaying legend after sort is performed
* 160112 1425 wjf 175661 Adding field to Rows (without Measure) in Visualization Gri
* 160112 1411 bjd 170516 AHTML: IE11 PIE and FF BAR context menu way to the left
* 160112 1119 wjf 175661 Adding field to Rows (without Measure) in Visualization Gri
* 160112 1056 wjf 173426 Support d3 plug-ins in Active Canvas (IDis)
* 160112 1012 wjf 175647 Visualization Bubble chart with AVE is not displayed proper
* 160111 1539 bjd 169038 AHTML: Scatter chart does not show correct results for Date
* 160111 1526 wjf 173426 Support d3 plug-ins in Active Canvas (IDis)
* 160110 1252 wjf 174756 Pie chart not displaying legend after sort is performed
* 160110 1152 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160109 2111 wjf 170951 Field in color bucket produced the wrong chart
* 160109 1516 wjf 175413 Visualization tooltip has extra vertical "white space"
* 160109 1253 wjf 175321 Bubble Chart: Sale,Year not display on the x-axis properly
* 160108 1111 wjf 174366 Server-Side support for HTML5 Grid
* 160106 1402 wjf 174366 Server-Side support for HTML5 Grid
* 160105 1531 bjd 147319 AHTML DRILLMENUITEM wrong or missing &variables with NOPRINT
* 151230 1643 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151230 1115 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151229 0959 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151229 0951 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151223 1014 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151217 1338 bjd 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151215 1201 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151215 1019 wjf 174366 Server-Side support for HTML5 Grid
* 151215 1017 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151214 1525 bjd 174727 AHTML Chart with sort filter shows No data on lasso filter.
* 151214 1357 wjf 174366 Server-Side support for HTML5 Grid
* 151209 1659 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151209 1246 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151119 1202 bjd 173947 AHTML: BarGraph bucket syntax; Click bar throws script error
* 151112 1555 bjd 168561 Active Dashboard: Chart title doesn`t change based on coord
* 151002 1302 bjd 169835 AHTML chart - no missing values
* 150924 1007 wjf 172112 [CHART-1211] Date fields are not sorted properly
* 150916 1237 wjf 171694 Unable to drilldown when Measure field is sorted
* 150828 1135 iys 163262 AHTML:chart format YY and M incorrect in mobile device
* 150825 1623 bjd 171083 AHTML_Dahsboard:Insert Existing HTML5 AHTML format to Dashb
* 150820 1423 bjd 169430 AHTML: JSCHART does not resize with AUTOFIT ON
* 150817 1115 wjf 170492 AHTML_Cache:Chart:Map with compute field throws script erro
* 150806 1827 wjf 170384 Bubble Chart returns Action Failed error when select 'Exclu
* 150731 1122 wjf 170201 Matrix Marker bubble size is very small
* 150728 1409 wjf 170101 Matrix Marker: Bubbles displayed as small size with sort fi
* 150723 1644 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150721 0946 wjf 163762 JSCHART: Sliders with bucket syntax
* 150706 1252 wjf 168935 Refactor MoonBeam ToolTips
* 150702 1012 wjf 168935 Refactor MoonBeam ToolTips
* 150615 1254 wjf 165630 Cascading menus in tooltips for JSCHART graphs
* 150615 1001 wjf 167937 Chart selection menu remains on canvas when lassoing multip
* 150603 1211 bjd 166044 AHTML: Scatter chart filter shows "no data to chart."
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150514 0727 wjf 167569 ID:Script error with field in Vertical Axis and Rows/Column
* 150513 1303 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150513 1210 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150513 0923 wjf 167237 IDIS: Map Chart Not Plotting when one of the aggregated con
* 150511 0944 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150510 1738 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150509 1135 wjf 163115 AHTML: Add tracing to active reports
* 150509 1103 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150508 1515 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150508 1017 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150508 1000 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150506 2040 wjf 167336 AHTML: Display filters created from chart
* 150506 1015 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150505 1720 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150505 1141 wjf 166981 FedEx: NFR for recompute functionality in AHTML
* 150505 1134 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150505 1014 wjf 167100 IDIS: Drill Down and Drill thru support from the output
* 150424 0852 wjf 165307 AHTML: Allow jschart morphing.
* 150423 1531 wjf 165307 AHTML: Allow jschart morphing.
* 150423 1112 wjf 166677 Ring Pie chart shows unexpected constant number as total va
* 150420 1241 wjf 166677 Ring Pie chart shows unexpected constant number as total va
* 150415 1157 wjf 166507 AHTML: Fix multiple pie issues
* 150415 1025 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150414 0948 wjf 165945 NFR: iDis: run agents in parallel for multiple procedures
* 150409 1442 wjf 166225 AHTML: Context Menu: Cascading Multidrill Integration
* 150409 1119 wjf 165630 Cascading menus in tooltips for JSCHART graphs
* 150407 1611 wjf 166183 AHTML:Matrix Pie chart throws type error with field in size
* 150407 1527 wjf 166178 AHTML: JSCHART: noprint sort field causes js error
* 150407 1237 wjf 165630 Cascading menus in tooltips for JSCHART graphs
* 150406 1358 wjf 165307 AHTML: Allow jschart morphing.
* 150403 0801 wjf 166076 AHTML: JSCHART: Pie showing empty circle for null data
* 150403 0723 wjf 166075 AHTML: JSCHART: Update Function not called
* 150402 0846 wjf 165611 AHTML: GRID: Add menu options using graph tooltips style
* 150401 0843 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150331 1807 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150331 1804 wjf 165229 AHTML:Chart filter functionality does not filter data
* 150331 1313 wjf 165229 AHTML:Chart filter functionality does not filter data
* 150325 1409 wjf 164784 Heatmap charts with bucket syntax
* 150317 1136 wjf 165350 AHTML: Buckets: Support SIZE in other charts.
* 150317 1029 wjf 165339 AHTML: Treemap: color bucket causing JS error
* 150317 1024 wjf 165307 AHTML: Allow jschart morphing.
* 150316 1154 wjf 165285 AHTML: Multi Pie with missing data produces incorrect slices
* 150309 1740 wjf 164963 AHTML: Bucket: Swap ROW and COLUMN for GRID
* 150303 1426 wjf 163762 JSCHART: Sliders with bucket syntax
* 150303 1402 wjf 163762 JSCHART: Sliders with bucket syntax
* 150303 1136 wjf 164704 AHTML: Bucket: Treat dates as string when used as label
* 150226 1303 wjf 163762 JSCHART: Sliders with bucket syntax
* 150212 1308 wjf 164277 AHTML: JSCHART - Empty report GRAPH causes JS error
* 150209 1357 wjf 163561 Nested row/column labels in matrix charts [CHART-214]
* 150204 1120 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150203 1528 wjf 164125 AHTML:  ROW/COLUMN not being applied when filtering
* 150201 0840 wjf 163561 Nested row/column labels in matrix charts [CHART-214]
* 150121 1556 wjf 163942 AHTML: Map: Non-By color should be value.
* 150121 1110 wjf 163942 AHTML: Map: Non-By color should be value.
* 150121 1019 bjd 163586 AHTML:Selectng values frm charts created using rpt thrws err
* 150120 1322 wjf 163942 AHTML: Map: Non-By color should be value.
* 150114 0740 wjf 163863 AHTML: Pass dates to ID in original format
* 150112 1653 wjf 163804 AHTML: ID; Dont allow filter on Compute
* 150112 1516 wjf 163804 AHTML: ID; Dont allow filter on Compute
* 150112 1005 wjf 163804 AHTML: ID; Dont allow filter on Compute
* 150112 0850 wjf 163801 AHTML: C-pleth Map produces incorrect color
* 150112 0839 wjf 163800 AHTML: Treemap: Chart selection on subgroups does not filter
* 150107 1458 wjf 163737 AHTML: Add hover bcolor to filter options for ID
* 150106 1149 wjf 163704 AHTML: Bucket: Only add color to dataArrayMap when needed
* 150106 1116 wjf 163703 AHTML: Chart: Buckets - multi-measure y-axis needs no title
* 141211 1403 wjf 163319 AHTML: Fix missing tooltip in BLA charts.
* 141211 1337 wjf 163318 AHTML:  Fix Lasso on Gauge chart
* 141210 1432 wjf 163213 AHTML: Fix default dataArrayMap to hide legend with 1 item
* 141208 1837 wjf 163224 AHTML: [CHART-588] use tooltip from first series
* 141208 1402 wjf 163213 AHTML: [CHART-655] Fix default dataArrayMap
* 141202 2029 wjf 163108 AHTML: Apply both filters when selection done on Bubble Map
* 141118 1436 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141118 1341 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141107 1407 wjf 134795 Active Visualization
* 141105 1653 wjf 134795 Active Visualization
* 141105 1557 wjf 134795 Active Visualization
* 141023 1525 wjf 134795 Active Visualization
* 141022 1012 wjf 134795 Active Visualization
* 141021 1316 bjd 162267 AHTML: Refactor ARPIVOT logic to remove obsolete code
* 141020 1009 wjf 129312 NFR: New Syntax for mapping data to visualizations in FEX
* 141006 1013 wjf 134795 Active Visualization
* 141001 1113 wjf 134795 Active Visualization
* 140929 0944 wjf 134795 Active Visualization
* 140926 0822 wjf 134795 Active Visualization
* 140926 0807 wjf 134795 Active Visualization
* 140925 1337 wjf 134795 Active Visualization
* 140925 1310 wjf 134795 Active Visualization
* 140925 1208 wjf 134795 Active Visualization
* 140925 1028 wjf 134795 Active Visualization
* 140923 1109 ixm 156943 AHTML:Rollup table sort value are repeated
* 140917 1237 wjf 134795 Active Visualization
* 140916 0950 wjf 134795 Active Visualization
* 140915 2219 wjf 134795 Active Visualization
* 140915 1359 wjf 134795 Active Visualization
* 140915 0924 wjf 134795 Active Visualization
* 140911 1750 wjf 134795 Active Visualization
* 140911 1115 wjf 134795 Active Visualization
* 140910 1101 wjf 134795 Active Visualization
* 140910 1005 wjf 134795 Active Visualization
* 140905 1535 wjf 134795 Active Visualization
* 140905 0937 wjf 134795 Active Visualization
* 140905 0908 wjf 134795 Active Visualization
* 140904 1553 wjf 134795 Active Visualization
* 140902 1232 wjf 134795 Active Visualization
* 140829 1107 wjf 134795 Active Visualization
* 140828 1104 wjf 134795 Active Visualization
* 140827 1752 wjf 134795 Active Visualization
* 140814 1958 wjf 134795 Active Visualization
* 140813 1513 wjf 134795 Active Visualization
* 140813 1438 wjf 134795 Active Visualization
* 140811 1546 wjf 134795 Active Visualization
* 140807 0910 wjf 134795 Active Visualization
* 140730 1815 wjf 134795 Active Visualization
* 140730 1230 wjf 134795 Active Visualization
* 140728 0703 wjf 134795 Active Visualization
* 140722 1403 bjd 158918 AHTML:PIE chart incorrect for COUNT of DATE
* 140718 1648 wjf 134538 AHTML/AFLEX:support GRAPH with ACROSS
* 140716 1705 wjf 134795 Active Visualization
* 140715 1138 wjf 134795 Active Visualization
* 140710 1253 wjf 134795 Active Visualization
* 140709 1503 wjf 134795 Active Visualization
* 140707 1701 wjf 134795 Active Visualization
* 140707 1030 wjf 134795 Active Visualization
* 140707 0022 wjf 134795 Active Visualization
* 140703 1614 wjf 134795 Active Visualization
* 140703 1027 wjf 134795 Active Visualization
* 140702 0906 wjf 134795 Active Visualization
* 140702 0056 wjf 134795 Active Visualization
* 140701 1609 wjf 134795 Active Visualization
* 140701 1457 wjf 134795 Active Visualization
* 140630 1639 asb 138154 AHTML:KKA:Label & Tooltip Change Bar to Column
* 140626 1703 wjf 134795 Active Visualization
* 140626 1615 wjf 134795 Active Visualization
* 140626 1526 wjf 134795 Active Visualization
* 140626 1312 wjf 134795 Active Visualization
* 140625 0922 wjf 134795 Active Visualization
* 140623 1942 wjf 134795 Active Visualization
* 140623 1907 wjf 134795 Active Visualization
* 140623 1635 wjf 134795 Active Visualization
* 140623 1627 wjf 134795 Active Visualization
* 140623 1229 wjf 134795 Active Visualization
* 140620 0828 wjf 134795 Active Visualization
* 140618 1204 wjf 134795 Active Visualization
* 140618 1017 wjf 134795 Active Visualization
* 140617 1214 wjf 134795 Active Visualization
* 140613 0951 wjf 134795 Active Visualization
* 140612 1445 wjf 134795 Active Visualization
* 140611 1015 wjf 134795 Active Visualization
* 140606 1735 wjf 134795 Active Visualization
* 140606 0757 wjf 134795 Active Visualization
* 140604 1751 wjf 134795 Active Visualization
* 140603 0757 wjf 134795 Active Visualization
* 140603 0014 wjf 134795 Active Visualization
* 140602 1226 wjf 134795 Active Visualization
* 140530 1915 wjf 134795 Active Visualization
* 140530 1745 wjf 134795 Active Visualization
* 140529 1514 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140514 1929 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.111 $ 
//$Log: archart.js,v $
//Revision 1.111  2014/06/02 14:29:23  William_Forde
//[p134795] set z-index for tooltip menu so that it shows up in the chart.
//
//Revision 1.110  2014/05/30 23:11:31  William_Forde
//[p134795] disable tooltip if selection menu is displayed
//
//Revision 1.109  2014/05/30 19:50:30  William_Forde
//[p134795] add support for BY TOTAL HIGHEST.  requires backed change.  For BLA charts, add formated value.
//
//Revision 1.108  2014/05/30 16:40:15  William_Forde
//[p134795] Use moonbeam tooltip to display selection menu for charts.
//
//Revision 1.107  2014/05/30 13:13:20  William_Forde
//[p134795] Allow selection on  all charts.
//
//Revision 1.106  2014/05/29 15:44:35  William_Forde
//[p134795]  Use the tooltip generated by jschart, if there is one.  Add back remove to the filter menu.
//
//Revision 1.105  2014/05/28 20:21:53  William_Forde
//[p134795] make sure filter menu shows up on all tooltips.
//
//Revision 1.104  2014/05/28 17:04:28  William_Forde
//[p134795] when chart=GRID use the pivot.  Initial combining of the tooltip genenrated by tdg and the filter menu.
//
//Revision 1.103  2014/05/14 23:19:56  William_Forde
//[p134795] initial support for treemap and matrix marker
//
//Revision 1.102  2014/05/09 20:55:24  William_Forde
//[p134795] Fix issue with matrix charts showing same value multiple times.  Introduced by support for PRINT.
//
//Revision 1.101  2014/05/08 14:01:45  William_Forde
//[p134795] Fix issue with scatter/bubble caused by fixes for maps.
//
//Revision 1.100  2014/05/06 19:13:02  William_Forde
//[p134795] If x-axis is numeric (IBINUM), it may actually be a date so create grouplabels anyway.
//
//Revision 1.99  2014/05/06 16:25:53  William_Forde
//[p134795] Fix slice error with pie chart
//
//Revision 1.98  2014/05/06 13:45:36  William_Forde
//[p134795] Display the number of records if too many points
//
//Revision 1.97  2014/05/05 23:08:56  William_Forde
//[p134795] If user is doing PRINT, then allow label values to repeat.
//
//Revision 1.96  2014/05/05 14:18:44  William_Forde
//[p134795] fix issue with too many records message not being shown.
//
//Revision 1.95  2014/05/02 15:33:58  William_Forde
//[p134795] Allow NOPRINT with graph and buckets
//
//Revision 1.94  2014/04/30 01:19:31  William_Forde
//[p134795] Fix issue with only measure without by.  Swap long and lat.
//
//Revision 1.93  2014/04/28 22:01:16  William_Forde
//[p134795] initial support of LOOKGRAPH=GRID
//
//Revision 1.92  2014/04/28 21:21:06  William_Forde
//[p134795] fix issues with pie chart not rendering
//
//Revision 1.91  2014/04/28 19:11:58  William_Forde
//[p134795] fix cleorpath maps with geolocation bucket.
//
//Revision 1.90  2014/04/28 14:01:59  William_Forde
//[p134795] allow jschart to render charts with only one axis specified.
//
//Revision 1.89  2014/04/16 13:31:20  William_Forde
//[p134795] when hiding chart menu bar, make sure div is also set to display none.
//
//Revision 1.88  2014/04/15 15:54:58  Israel_Schulman
//[p136132] Only show Advanced Chart icon if ARGRAPHENGINE is JSCHART
//
//Revision 1.87  2014/04/09 18:38:51  Brian_DCruz
//[p157967] if SET ARGRMERGE = ON, let GRMERGE logic run
//
//Revision 1.86  2014/03/28 20:43:35  Brian_DCruz
//[152665] if ALLOW-EXPORT=OFF, do not display Export menu items
//
//Revision 1.85  2014/03/28 14:01:09  Brian_DCruz
//[p157205] use strict comparison to avoid incorrect logic path
//
//Revision 1.84  2014/03/26 19:57:00  Brian_DCruz
//[p150342] disable GRMERGE
//
//Revision 1.83  2014/03/26 15:30:57  William_Forde
//[p134795] Fix legend for bucket pie chart.
//
//Revision 1.82  2014/03/26 00:01:18  William_Forde
//[p134795] fix javascript warnings
//
//Revision 1.81  2014/03/25 23:08:22  William_Forde
//[p134795] If map and only get Y-AXIS then use it to generate groupLabels.
//
//Revision 1.80  2014/03/25 22:49:09  William_Forde
//[p134795] Check format when generating labels, to make sure they are either string or numbers.
//
//Revision 1.79  2014/03/25 12:16:03  William_Forde
//[p134795] fix styling in matrix chart
//
//Revision 1.78  2014/03/21 11:45:02  William_Forde
//[p134795][>branch8100] Choropleth maps currently generate location not latlng.
//
//Revision 1.77  2014/03/18 16:41:13  William_Forde
//[p134795][>branch8100] Fix javascript error that occurs when creating maps.
//
//Revision 1.76  2014/03/17 19:51:15  William_Forde
//[p129312][>branch8100] Fix issue with javascript error when row is added to the matrix chart , before the column is.
//
//Revision 1.75  2014/03/17 17:35:48  William_Forde
//[p134795][>branch8100] If map (bubblemap) then treat as if we were passed bucket syntax to display the map.
//
//Revision 1.74  2014/03/13 18:48:18  William_Forde
//[p129312][>branch8100] In matrix chart, place riser in correct y value.
//
//Revision 1.73  2014/03/13 14:28:55  William_Forde
//[p134795][>branch8100] fIx breakage in chart/rollup tool.
//
//Revision 1.72  2014/03/13 02:31:44  William_Forde
//[p129312][>branch8100] Add support for nested X-AXIS, COLUMN and ROW (matrix)
//
//Revision 1.71  2014/03/11 18:40:11  William_Forde
//[p150342][>branch8100] disable grmerge
//
//Revision 1.70  2014/03/11 18:21:58  William_Forde
//[p134795][>branch8100] Send recordlimit to cache for rollup.
//
//Revision 1.69  2014/03/11 15:22:58  William_Forde
//[p129312][>branch8100] Add initial support for bubble an scatter.
//
//Revision 1.68  2014/03/10 19:26:08  William_Forde
//[p129312][>branch8100] get basic matrix chart working
//
//Revision 1.67  2014/03/07 04:32:11  William_Forde
//[p129312][>branch8100] Add initial support for bucket syntax to active reports.
//
//Revision 1.66  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.65  2014/02/24 14:26:49  William_Forde
//[p134795][>branch8100] Fix issue with Grid not showing up properly in AV when SUM is used instead of PRINT.  Allow NE to perform NOT ... IN so that multiple values can be tested.
//
//Revision 1.64  2014/02/22 03:21:02  William_Forde
//[p153274][>branch8100] if user use the menu to select/deselect by columns, then do the same thing that we do in the edit tool and remove the b_hide flag. Also use b_hide flag instead of hide flag when getting chart values.
//
//Revision 1.63  2014/02/03 23:51:54  William_Forde
//[p134795][>branch8100]  Auto resize charts if they are created through the api.
//
//Revision 1.62  2014/01/14 20:09:24  William_Forde
//[p154472] fix missing parameter
//
//Revision 1.61  2013/12/14 06:13:09  Israel_Markhovsky
//[p149936] AHTML:FUSION:Radar chart is not showed
//mapped Radar chart as per Specification for Active Charts Graph Type Mapping
//
//Revision 1.60  2013/11/25 18:59:54  William_Forde
//[p154650] Microsoft remove the MSIE string from user agent.  If we only find trident, then turn on activeX.
//
//Revision 1.59  2013/11/22 23:32:37  Brian_DCruz
//[p154642] fine tune vertical margin for TDGCHART with AUTOFIT logic
//
//Revision 1.58  2013/11/18 17:12:52  William_Forde
//[p153347] revert back to setting the width, since set left and right to 0 does not seem to be working.
//
//Revision 1.57  2013/11/18 16:46:14  William_Forde
//[p133785] support bubble in grmerge.
//
//Revision 1.56  2013/11/17 04:26:35  William_Forde
//[154577] use the translated version of by.
//
//Revision 1.55  2013/11/05 20:43:02  Brian_DCruz
//[p151156] If COMPOSER sends us a DIV, ignore AUTOFIT logic, as it does *not* apply to a DIV.
//
//Revision 1.54  2013/11/05 19:35:18  Brian_DCruz
//[p153628] handle case where we do not have any data for chart; should not crash
//
//Revision 1.53  2013/11/04 15:59:55  Brian_DCruz
//[p152241] If user selects "hidden" column, "unhide" it by setting b_hide to false
//
//Revision 1.52  2013/11/01 03:14:38  William_Forde
//[p150342]  Generate "flat" dataprovider for advanced mode.
//
//Revision 1.51  2013/10/25 19:50:35  Brian_DCruz
//[p141034] refactor code; remove redefines etc
//
//Revision 1.50  2013/10/25 18:31:30  Brian_DCruz
//[p152564] pass tcapt for getting styling info for pivot table on mobile device
//
//Revision 1.49  2013/10/22 21:17:08  William_Forde
//[p153274]  if field is hidden, then "un"hide if selected from tool.
//
//Revision 1.48  2013/10/03 14:25:50  William_Forde
//[p150342] more grmerge changes. fix issue with maps not displaying if GMERGE ADVANCED.
//
//Revision 1.47  2013/09/05 15:20:45  Israel_Schulman
//[p152037] Also apply TYPE=HEADING specified style to chart windows if there is a grid HEADING set.
//
//Revision 1.46  2013/08/01 15:38:20  William_Forde
//[p151491] Layout HBOX/VBOX with just divs.  Due to border on some divs, they need to be wrapped by a "clean" div, since 100% with and height doesnt include the border.
//
//Revision 1.45  2013/07/30 16:05:47  William_Forde
//[p150342] make area work with grmerge
//
//Revision 1.44  2013/07/30 16:03:26  William_Forde
//[p150342]  If chart type is not in the table of irptdgc.js then use the basic version of the closes type (line,pie,bar,scatter,buble,area)
//
//Revision 1.43  2013/07/25 14:16:44  William_Forde
//[p150342] Only do GRMERGE for certain chart types.
//
//Revision 1.42  2013/07/24 20:59:11  William_Forde
//[p150342] Make sure total BYs equal GRMULTI+GRLEGEND+GRAXIS
//
//Revision 1.41  2013/07/22 18:44:32  William_Forde
//[p150342] Support GRLEGEND.
//
//Revision 1.40  2013/07/18 14:43:17  William_Forde
//[p150342] Also make sure if GRMULTI=1 and GRAXIS=1 produces correct chart.
//
//Revision 1.39  2013/07/18 14:25:50  William_Forde
//[p150342] fix issue when GRAXIS 1.
//
//Revision 1.38  2013/07/16 13:36:48  William_Forde
//[p150342] Reset groupLabels when switch between multiple charts.
//
//Revision 1.37  2013/07/15 20:15:53  William_Forde
//[p150342] Add dropdown menu for MULTI chart selection
//
//Revision 1.36  2013/07/15 17:45:54  William_Forde
//[p150342] initial return of GRMERGE support.
//
//Revision 1.35  2013/07/10 18:43:54  Brian_DCruz
//[p133458] If the GRAPH's root container has explicit height and\or width properties, do not trigger AUTOFIT logic.
//
//Revision 1.34  2013/07/02 15:44:17  William_Forde
//[p148116] Fix issue with reportView incorrectly being updated by "original chart" when it is done from a chart created from the menu.
//
//Revision 1.33  2013/06/21 17:47:21  William_Forde
//[p134795] fix javascript warning.
//
//Revision 1.32  2013/06/21 14:26:02  William_Forde
//[p150545] pass jsonProps to the tdg chart engine.
//
//Revision 1.31  2013/05/28 17:20:44  Brian_DCruz
//[p133458] logic to trigger SET AUTOFIT logic for FUSION charts
//
//Revision 1.30  2013/05/20 19:16:15  Brian_DCruz
//[p133458] trigger SET AUTOFIT = ON\RESIZE logic for ARDEFCHART.
//
//Revision 1.29  2013/05/15 19:20:41  William_Forde
//[p134795] Move code to handle aggregating data so that we can change the data without have to recreate all the different chart structures.
//
//Revision 1.28  2013/05/02 15:09:14  Israel_Schulman
//[p142796] Remove condition which restricted CHART-TYPE=PIE to only one measure.
//
//Revision 1.27  2013/04/27 14:45:12  William_Forde
//[p134795] Pass mobile flag so that we correctly know when to set secondchart.
//
//Revision 1.26  2013/04/27 13:23:05  William_Forde
//[p134795] Allow charts to support highlighting.
//
//Revision 1.25  2013/04/11 19:50:01  Israel_Schulman
//[p143088] Apply styles to charts other than just the "original" chart.
//
//Revision 1.24  2013/03/29 20:47:08  Brian_DCruz
//[p140615] pass footing for Fusion Charts
//
//Revision 1.23  2013/03/05 22:09:10  Brian_DCruz
//[p140615] prevent ChartFooting from being called as a regular method --as it would make no sense.
//
//Revision 1.22  2013/03/01 22:59:19  Brian_DCruz
//[p140615] logic to create chart footing
//
//Revision 1.21  2012/12/04 20:27:47  Brian_DCruz
//[p136477] When "Original Chart" is selected from menu, reset the table"s reportView to original values.
//
//Revision 1.20  2012/11/30 13:52:07  William_Forde
//[p144158] Use the default size for charts in tab mode, unless ARREPORTSIZE=DIMENSION and the dimensions are set.
//
//Revision 1.19  2012/11/09 20:08:12  Brian_DCruz
//[p136477] when selecting Restore Original from drop down chart menu, reset the table's reportView as well.
//
//Revision 1.18  2012/11/07 21:29:10  Brian_DCruz
//[p141034] Fix warning: parseInt missing radix parameter
//
//Revision 1.17  2012/11/07 17:06:44  Brian_DCruz
//[p143246] need to pass in labels as xnames changed by project 142093
//
//Revision 1.16  2012/09/25 17:19:34  William_Forde
//[p142093][>branch8001] When creating dataprovider, append agg type to name so that we get each column off agg even when columns have the same name.
//
//Revision 1.15  2012/08/10 04:29:53  William_Forde
//[p136963]  If ARDEFAULTHEAD=ORIGINAL then use the heading from the original report.
//
//Revision 1.14  2012/08/09 19:59:56  William_Forde
//[p139032]  If we are doing roll up dont mark the first column as hidden.
//
//Revision 1.13  2012/08/09 13:47:53  William_Forde
//[p139757] use the width specified in "size" to set the width of the menu area.
// 
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["archart"]="$Revision: 20180125.1428 $";

(function() {

    if (typeof window.ibiFusionCharts == 'undefined') window.ibiFusionCharts = {drawChart:nochart};
    if (typeof window.ibiTDGCharts == 'undefined') window.ibiTDGCharts = {drawChart:nochart};
    function nochart()
    {
        return "Engine not available";
    }

    if (typeof window.ibiChart !== 'undefined') {
        return;
    }

    window.ibiChart = {
        makeChart: MakeChart,
        makeChartRedraw: MakeChartRedraw,
        makeChartItem: MakeChartItem,
        makeChartNSize:MakeChartNSize,
        makeChartNType:MakeChartNType,
        makeChartNBType:MakeChartNBType,
        makeChartAddYcol:MakeChartAddYcol,
        makeChartAddXcol:MakeChartAddXcol,
        makeChartItem2:MakeChartItem2,
        makeChartMSexport:MakeChartMSexport,
        makeChartRestore:MakeChartRestore,
        makeChartTDGtype:MakeChartTDGtype,
        DoChartFilter:doChartFilter,
        DoChartFilterTDG:doChartFilterTDG,
        makeChartAddClrBy:MakeChartAddClrBy,
        makeChartData: MakeChartData,
        showChart:ShowChart,
        newMakeChart:NewMakeChart,
        Hlg_c_filter:hlg_c_filter,
        addFilter:add_c_filter,
        getColumnsAndValues: GetColumnsAndValues,
        findFilter:find_api_filter,
        undoFilter:undo_c_filter,
        removeFilter:rem_c_filter,
        makeChartFullScreen:MakeChartFullScreen,
        toggleFiltLink:ToggleFiltLink,
        makeChartItemOnly:MakeChartItemOnly,
        toggleStacked:ToggleStacked,
        toggleRegression:ToggleRegression,
        toggleTop:ToggleTop,
        buildChartdrop:build_chartdrop,
        buildChartagg:build_chartagg,
        drawChartfilt:drawchartfilt,
        getInfo:GetInfo,
        chartSelectionChanged:ChartSelectionChanged,
        doChartSelection:DoChartSelection,
        BuildDrillToolTip:buildDrillToolTip,
        swapField: SwapField,
        swapBuckets: MakeChartSwapBuckets,
        setMakeChartExternal:setMCExt,
        stripComma: StripComma

    };

    function StripComma(val) {
        // comma are converted to newlines
        var s = val.split("\n");
        return s.join(' ');
    }

    function GetInfo(name,returnDefault)
    {
        if((typeof ibiTDGCharts != "undefined") && (typeof ibiTDGCharts.getInfo != "undefined"))
            return ibiTDGCharts.getInfo(name,returnDefault);
        else
            return null;
    }

    function setMCExt(func)
    {
        makeChartExternal = func;
    }

var makeChartExternal=null;

function drawchartfilt(saveARs,mytable) {
    var chartinfo;
    if(mytable.a_col_filter.length) {
        mytable.filterChange = true;
        ibiFilter.localfilt(mytable.a_cntl.table_number);
        ibiFilter.executeFilt(mytable.a_cntl.table_number,1,0);
    } 

    for(var i=0; i < saveARs.charts.length; i++) {
        chartinfo = new Object();
        chartinfo.saveable = saveARs.charts[i].chartinfo;
        chartinfo.table_number = mytable.a_cntl.table_number;
        MakeChart(null,chartinfo,null,null);
    }
}

function MakeChartTDGtype(win_num,t_num,subTable,charttype)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.saveable.ibiChart = charttype;
    pn.saveable.ctype = 9;
    pn.tcntl.buckets = ibiChart.swapBuckets(mytable, mytable.tdgOrgChartType, charttype);
    MakeChart(null,pn,win_num,pn.usediv);
}

function MakeChartRestore(win_num,t_num,subTable,dontRemoveFilter){
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];

    if (win_num < 0) { // restore table's reportView as well
        var mytable = getMyTable(t_num);
        mytable.a_cntl.reportView = pn.tcntl.reportView;
        delete mytable.tdg_props;
        if(typeof(mytable.chartOrgHidden)!="undefined")
        for(i=0;i<mytable.chartOrgHidden.length;i++)
            mytable.a_capt[i].b_hide = mytable.chartOrgHidden[i];
    }
    //pn.xars=null;
    pn.saveable.ctype = pn.saveable.org_ctype;
    pn.saveable.pvcol = pn.saveable.org_pvcol;
    pn.saveable.x_cols = CopyArray(pn.saveable.org_x_cols);
    pn.saveable.y_cols = CopyArray(pn.saveable.org_y_cols);
    pn.saveable.btypeArray = CopyArray(pn.saveable.org_btypeArray);
    if(typeof pn.saveable.org_fromGraph != "undefined")
        pn.saveable.fromGraph = pn.saveable.org_fromGraph;
    delete pn.saveable.org_fromGraph;
    //pn.saveable.fusionChart = pn.saveable.org_fusionChart;
   // pn.saveable.ibiChart = pn.saveable.org_ibiChart;

    //MakeChart(null,pn,win_num,pn.usediv);

    var dontRedraw = false;
    if(!dontRemoveFilter)
        dontRedraw = ibiChart.removeFilter();
    ibiChart.makeChartNType(win_num,-1,t_num,subTable,dontRedraw);
}

function MakeChartAddClrBy(win_num,clrby,remove,t_num,subTable)
{
    var mytable = null;
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];

    if(clrby!=pn.saveable.colorby) {
        pn.saveable.colorby=clrby;
        pn.xars=null;
    }
    MakeChart(null,pn,win_num,pn.usediv);
}

function MakeChartSwapBuckets(mytable,fromChart,toChart) {
    if(typeof mytable.a_cntl.buckets == "undefined")
        return undefined;
    var buckets = ibiStd.copyObject(mytable.a_cntl.buckets);
    var i, o, o1, o2, j, chartConversionFnBody, k;
    var newBuckets;
    var info = ibiChart.getInfo(fromChart);
    var info2 = ibiChart.getInfo(toChart);
    var tdgKnownBucketLen = tdginfo.knownBuckets.length;
        
    if(mytable.a_cntl.hasVirtBuckets) {
        //buckets['VIRTFIELD'] = mytable.a_cntl.vbuckets;
        var inFields = [];
        for(i in mytable.a_cntl.vbuckets)
            inFields = inFields.concat(mytable.a_cntl.vbuckets[i]);
        for(i=0; i < mytable.a_capt.length; i++) {
            if(i in inFields) {
                if(mytable.a_capt[i].isby) {
                    if(!inarray(buckets["X-AXIS"],i,false))
                        buckets["X-AXIS"][buckets["X-AXIS"].length] = i;
                }  else {
                    if(!inarray(buckets["Y-AXIS"],i,false))
                        buckets["Y-AXIS"][buckets["Y-AXIS"].length] = i;
                }
            }
        }
    }

    newBuckets = ibiStd.copyObject(buckets);
    if(info2 && (info2.base != info.base)) {
        if(tdginfo.iaChartMappings) {
            o = null;
            for(i=0; i < tdginfo.iaChartMappings.length; i++)
                if(tdginfo.iaChartMappings[i].fromChart == info.internalType) {
                    o = tdginfo.iaChartMappings[i];
                    break;
                }
            if(o) {
                o1 = null;
                for(i = 0; i < o.targets.length; i++)
                    if(o.targets[i].toChart == info2.internalType) {
                        o1 = o.targets[i];
                        break;
                    }
                if(o1) {
                    newBuckets = [];
                    for(i=0; i < tdgKnownBucketLen; i++)
                        newBuckets[tdginfo.knownBuckets[i]] = [];
                    var comp = {
                        isFirstField: function() {
                            return (this.bucketIndex==0)?true:false;
                        },
                        setBucket: function(bucket_name) {
                            var bn = bucket_name
                            this.isNumeric = false;
                            if(bn.substr(0,4) == "NUM_") {
                                bn = bn.substr(4);
                                this.isNumeric = true;
                            }
                            if(bn == "XAXIS")
                                bn = "X-AXIS";
                            if(bn == "YAXIS")
                                bn = "Y-AXIS";
                            this.bucketName =  bn;
                        },
                        getCount: function(bucket_name) {
                            var bn = bucket_name
                            this.isNumeric = false;
                            if(bn.substr(0,4) == "NUM_") {
                                bn = bn.substr(4);
                                this.isNumeric = true;
                            }
                            if(bn == "XAXIS")
                                bn = "X-AXIS";
                            if(bn == "YAXIS")
                                bn = "Y-AXIS";
                            return this.buckets[bn].length;
                        },
                        isSecondField: function() {
                            return (this.bucketIndex==1)?true:false;
                        },
                        isLastField: function() {
                            return ((this.bucketIndex+1)==this.bucketLength)?true:false;
                        }

                    };
                    comp.buckets = newBuckets;

                    var listOfModFields = [];
                    var nf = '';
                    for (k = 0; k < o1.fields.length; k++) {
                        nf =  o1.fields[k].field;
                        if((nf=="XAXIS") || (nf=="NUM_XAXIS"))
                            nf = "X-AXIS";
                        if((nf=="YAXIS") || (nf=="NUM_YAXIS"))
                            nf = "Y-AXIS";
                        listOfModFields[listOfModFields.length] = nf;
                    }
                    if(listOfModFields.length) {
                        for (i in buckets) {
                            if(buckets[i].length)
                                if(listOfModFields.indexOf(i)==-1)
                                    newBuckets[i] = ibiStd.copyObject(buckets[i]);
                        }
                    }
                    for(i in buckets) {
                        var isNumeric;
                        if(buckets[i].length) {
                            var fname = i;
                            var fieldname;
                            if(fname == "X-AXIS")
                                fname = "XAXIS";
                            else
                            if(fname == "Y-AXIS")
                                fname = "YAXIS";
                            comp.bucketLength = buckets[i].length;
                            for(j = 0; j < buckets[i].length; j++) {
                                isNumeric = false;
                                if ((mytable.a_capt[buckets[i][j]].type == IBINUM) && !mytable.a_capt[buckets[i][j]].isby &&
                                   ((i == "X-AXIS")||(i == "Y-AXIS")||(i == "COLOR"))) {
                                   isNumeric = true;
                                    fieldname = "NUM_" + fname;
                                } else
                                    fieldname = fname;
                                o2 = null;
                                for (k = 0; k < o1.fields.length; k++)
                                    if (fieldname == o1.fields[k].field) {
                                        o2 = o1.fields[k];
                                        break;
                                    }
                                if(o2) {
                                        comp.bucketIndex = j;
                                        comp.bucketName = null;
                                        chartConversionFnBody = o2.function.replace(/function\s*\(\s*\)/, "");
                                        eval("this.f = function(comp) " + chartConversionFnBody + ";");
                                        this.f(comp);
                                        var addTo = comp.bucketName;
                                        if(addTo) {
                                            if(typeof newBuckets[addTo] != "undefined")
                                                newBuckets[addTo][newBuckets[addTo].length] = buckets[i][j];
                                        }
                                }
                               //else
                              // if(typeof newBuckets[i] != "undefined")
                                //   newBuckets[i][newBuckets[i].length] = buckets[i][j];
                            }
                        }
                    }
                }
            }

        } else
        if(tdginfo.chartMappings[info.base]) {
            o = tdginfo.chartMappings[info.base].to;
            if(o[info2.base]) {
                newBuckets = [];
                for(i=0; i < tdgKnownBucketLen; i++)
                    newBuckets[tdginfo.knownBuckets[i]] = [];
                o1 = o[info2.base];
                for (i in o1)
                    if ((typeof buckets[i] !=  "undefined") && buckets[i].length)
                        newBuckets[o1[i]] = buckets[i];
            }
            o1 = tdginfo.chartMappings[info2.base];
            if(o1) {
                o1 = o1.columns;
                if(o1) {
                    for (i in o1) {
                        if ((typeof newBuckets[i] !=  "undefined") && (newBuckets[i].length > 1) && (!o1[i].allowMultiple))
                            newBuckets[i] = [newBuckets[i][newBuckets[i].length - 1]];
                    }
                }
            }
        }
    }
    for (i = 0; i < tdgKnownBucketLen; ++i) {
        if ((tdginfo.knownBuckets[i] != "TOOLTIP") &&
            (newBuckets[tdginfo.knownBuckets[i]].length)) {
            if(typeof newBuckets["TOOLTIP"] != "object")
                newBuckets["TOOLTIP"] = [];
            for(j = 0; j < newBuckets[tdginfo.knownBuckets[i]].length; j++)
                if(!inarray(newBuckets["TOOLTIP"] ,newBuckets[tdginfo.knownBuckets[i]][j],false))
                    newBuckets["TOOLTIP"][newBuckets["TOOLTIP"].length] = newBuckets[tdginfo.knownBuckets[i]][j];
        }
    }
    newBuckets['ACTIVE_NOTUSED'] = ibiStd.copyObject(buckets['ACTIVE_NOTUSED']);
    return newBuckets;
}

function MakeChartNType(win_num,ctype,t_num,subTable,dontRedraw)
{
    var mytable = getMyTable(t_num);
    var pn = getPn(win_num,t_num);
    var cctype = ctype;
    var reportView;
    var i;

    if(ctype == -1) {
        pn.saveable.ctype = pn.saveable.org_ctype;
        pn.saveable.fusionChart = pn.saveable.org_fusionChart;
        pn.saveable.ibiChart = pn.saveable.org_ibiChart;
        delete pn.tcntl.buckets;
        pn.xars=null;
        cctype = pn.saveable.org_ctype;
        reportView = mytable.a_cntl.reportView;
        switch (cctype) {
            case  chartIsPie:    reportView = REPORTPIE; break;
            case  chartIsLine:   reportView = REPORTLINE; break;
            case  chartIsBar:    reportView = REPORTBAR; break;
            case  chartIsScat:   reportView = REPORTSCATTER; break;
            case  chartIsPivot:  reportView = REPORTPIVOT; break;
            case  chartIsFusion: reportView = REPORTFUSION; break;
            case  chartIsGoogle: reportView = REPORTGMAP; break;
            case  chartIsTDG:    reportView = REPORTTDG; break;
            case  chartIsRoll: case chartIsRmRoll: break; // not reset
        } 
        if(win_num<0)
            mytable.a_cntl.reportView = reportView;
        else
            pn.saveable.ctype = cctype;
    } else pn.saveable.ctype = ctype;

    if(subTable!=-1) pn = pn.children[subTable];
    if(win_num<0) {
        reportView = mytable.a_cntl.reportView;
        switch(ctype) {
            case  chartIsPie:  reportView = REPORTPIE; break;
            case  chartIsLine: reportView = REPORTLINE; break;
            case  chartIsBar:  reportView = REPORTBAR; break;
            case  chartIsScat: reportView = REPORTSCATTER; break;
        } 
        mytable.a_cntl.reportView = reportView;
    }

    for(i=0; i < pn.saveable.btypeArray.length; i++) {
        if((pn.saveable.btypeArray[i]=='NONE') && (ctype!=chartIsScat) && (cctype!=chartIsRoll)) 
            pn.saveable.btypeArray[i]='SUM';
        /*if(ctype==chartIsScat) pn.saveable.btypeArray[i]='NONE';*/
    }

    if(((pn.parms.cctype==chartIsScat)&&(cctype!=chartIsScat))||
        ((pn.parms.cctype!=chartIsScat)&&(cctype==chartIsScat))) {
        pn.xars=null;
    } 
    if(!dontRedraw)
        MakeChart(null,pn,win_num,pn.usediv);
}

function MakeChartRedraw(pn)
{
    var win_num = pn.parms.win;
    MakeChart(null,pn,win_num,pn.usediv);
}
 
function MakeChartNBType(win_num,btype,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    var x_cols = pn.saveable.x_cols;
    var mytable = getMyTable(t_num);
    pn.xars=null;
    for(var i=0; i < x_cols.length; i++) {
        pn.saveable.btypeArray[i]=btype;
        if(mytable.a_capt[x_cols[i]].type!=IBINUM)
            if((btype!='COU')&&(btype!='DIS'))
                pn.saveable.btypeArray[i] = 'COU';
    }
    MakeChart(null,pn,win_num,pn.usediv);
}
 
function MakeChartAddXcol(win_num,x_col,remove,t_num,subTable)
{
    var mytable = getMyTable(t_num);
    var pvcol,x_cols;
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.xars=null;
    x_cols = pn.saveable.x_cols;
    if(!remove) {
        mytable.a_capt[x_col].b_hide = false; // explicitly selected
        if((pn.saveable.ctype!=chartIsPie)&&((pn.saveable.ctype!=chartIsScat)||(arGraphEngine>1))
            &&(pn.saveable.ctype!=chartIsPivot)){
            var btype = pn.saveable.btypeArray[0];
            if(x_cols.length>0)pn.saveable.btypeArray[x_cols.length]=btype;
            if(mytable.a_capt[x_col].type!=IBINUM) 
                if((btype!='COU')&&(btype!='DIS'))
                    pn.saveable.btypeArray[x_cols.length]='COU';
            x_cols[x_cols.length] = x_col;
        } else 
            x_cols[0] = x_col;
    }
    else {
        var newx = [];
        var newb = [];
        for(var i=0; i < x_cols.length;i++) {
            if(x_cols[i]!=x_col) {
                newx[newx.length]=x_cols[i];
                newb[newb.length]=pn.saveable.btypeArray[i];
            }
        }
        if(newx.length) {
            x_cols = CopyArray(newx);
            pn.saveable.btypeArray = CopyArray(newb);
        } else {
            x_cols = [];
            pn.saveable.btypeArray = [];
            pn.saveable.btypeArray[0]='SUM';
        }
    }
    pn.saveable.x_cols = x_cols;
    if(typeof pn.saveable.org_fromGraph == "undefined")
        pn.saveable.org_fromGraph = pn.saveable.fromGraph;
    pn.saveable.fromGraph = false;

    MakeChart(null,pn,win_num,pn.usediv);
}

function MakeChartAddYcol(win_num,y_col,remove,pvrowcol,doshift,t_num,subTable)
{
    var newy=[];
    var mytable = null;
    var ctype,btype,size,table_number,pvcol,y_cols,x_cols;
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];

    table_number = pn.table_number;
    pvcol = pn.saveable.pvcol;
    var i;
    y_cols = pn.saveable.y_cols;
    var yl = y_cols.length;
    if(!mytable)pn.xars=null;
    
    mytable = getMyTable(t_num);
    if(doshift>0) {
        if(doshift==1) {
            if(pvrowcol==1) {
                newy = moveArray(y_cols,locateArray(y_cols,y_col),pvcol-1);
                pvcol--;
            } else {
                newy = moveArray(y_cols,locateArray(y_cols,y_col),pvcol);
                pvcol++;
            }
        } else
        if(doshift==3) {
            i = locateArray(y_cols,y_col);
            if(i+1<yl) newy = moveArray(y_cols,i,i+1);
            else newy = CopyArray(y_cols);
        } else
        if(doshift==2) {
            i = locateArray(y_cols,y_col);
            if(i>0)    newy = moveArray(y_cols,i,i-1);
            else newy = CopyArray(y_cols);
        }
        if(newy.length) y_cols = CopyArray(newy);
        else y_cols = [];
    } else
    if(!remove) {
        mytable.a_capt[y_col].b_hide = false; // explicitly selected
        if((pn.saveable.ctype==chartIsScat)&&(arGraphEngine<2)) {
            y_cols = pn.saveable.y_cols;
            if(y_cols.length) y_cols[y_cols.length-1] = y_col;
            else y_cols[0] = y_col;
        } else
        if(pvrowcol==1) {
            for(i=0; i < y_cols.length;i++) {
                if(i==pvcol) newy[newy.length]=y_col;
                newy[newy.length]=y_cols[i];
            }
            y_cols = CopyArray(newy);
            pvcol++;
        } else
        y_cols[y_cols.length] = y_col;
    } else {
        for(i=0; i < y_cols.length;i++)
            if(y_cols[i]!=y_col) newy[newy.length]=y_cols[i];
        if(newy.length) y_cols = CopyArray(newy);
        else y_cols = [];
        if(pvrowcol==1) pvcol--;
    }
    
    if(typeof(mytable.chartOrgHidden) == "undefined") {
        mytable.chartOrgHidden = [];
        for(i = 0; i < mytable.a_capt.length; i++)
            mytable.chartOrgHidden[i] = mytable.a_capt[i].b_hide;
    }
    
    for(i=0;i<y_cols.length;i++) {
        mytable.a_capt[y_cols[i]].b_hide = false;
    }
    pn.saveable.y_cols = y_cols;
    pn.saveable.pvcol = pvcol;
    if(typeof pn.saveable.org_fromGraph == "undefined")
        pn.saveable.org_fromGraph = pn.saveable.fromGraph;
    pn.saveable.fromGraph = false;
    MakeChart(null,pn,win_num,pn.usediv);
}

function ToggleFiltLink(win_num,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    var obj = d.getElementById('LINKIMG'+win_num+'_'+subTable);
    var linked = !pn.saveable.linked;
    pn.saveable.linked=linked;

    if(linked) obj.innerHTML = ibiSkin.unlinkicon;
    else obj.innerHTML= ibiSkin.linkicon;
    if(linked) {
        pn.xars=null;
        MakeChart(null,pn,win_num,pn.usediv);
    }
}


function ToggleRegression(win_num,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.saveable.regression= !pn.saveable.regression;
    MakeChart(null,pn,win_num,pn.usediv);
}

function ToggleTop(win_num,t_num,subTable,howmany)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    var mytable = getMyTable(pn.table_number);
    if(howmany == 0) 
        mytable.myjsScript = {};
    else
        mytable.myjsScript = {
            interaction: {
                click: 'otherSliceDrillDown'    
            },
            pieProperties: {
                otherSlice: {
                    threshold: 'top '+howmany
                }
            }
        };
    MakeChart(null,pn,win_num,pn.usediv);
}

function ToggleStacked(win_num,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.saveable.stacked=!pn.saveable.stacked;
    MakeChart(null,pn,win_num,pn.usediv);
}
 
function MakeChartNSize(win_num,size,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.saveable.size=size;
    MakeChart(null,pn,win_num,pn.usediv);
}

function NewMakeChart(win_num,t_num,subTable)
{
    var pn = getPn(win_num,t_num);
    if(subTable!=-1) pn = pn.children[subTable];
    MakeChart(null,pn,null,null);
}

function MakeChartItem(tn,ctype,x_col, y_col, btype,pvcol,myChart){
    var pn = new Object;
    c = myChart;
    if(typeof(c)=="undefined") c="";
    pn.saveable = new Object;
    pn.saveable.ctype = ctype;
    pn.saveable.x_cols = x_col;
    pn.saveable.y_cols = y_col;
    pn.saveable.btypeArray = [];
    if(typeof(x_col)!='object') pn.saveable.btypeArray[0]=btype;
    else
    for(var i=0; i< x_col.length; i++)
        pn.saveable.btypeArray[i] = btype;
    pn.saveable.saveXpos=-1;
    pn.saveable.saveYpos=-1;
    pn.saveable.fusionChart= c;
    pn.saveable.ibiChart = c;
    pn.saveable.fromGraph = false;
    pn.ctwin = -1;
    if((pvcol!=null) && (typeof(pvcol)!="undefined")) pn.saveable.pvcol = pvcol;
    MakeChart(tn,pn,null,null);
}

function MakeChartItemOnly(tn,ctype,x_col, y_col,width,height, btype,isApi,pvcol){
    var pn = new Object;
    pn.saveable = new Object;
    pn.saveable.ctype = ctype;
    pn.saveable.x_cols = x_col;
    pn.saveable.y_cols = y_col;
    pn.saveable.isApi = isApi;
    pn.saveable.btypeArray = [];
    pn.saveable.size = new Object();
    pn.saveable.size.width = width;
    pn.saveable.size.height = height;
    pn.saveable.btypeArray = btype;
    pn.saveable.saveXpos=-1;
    pn.saveable.saveYpos=-1;
    pn.saveable.fusionChart='';
    pn.saveable.ibiChart = '';
    pn.saveable.fromGraph = false;
    pn.ctwin = -1;
    if(typeof(pvcol)!="undefined") pn.saveable.pvcol = pvcol;
    return pn;
}

function MakeChartItem2(tn,ctype,x_col, y_col, btype,pvcol,shownoprint,myChart){
    var pn = new Object;
    c = myChart;
    if(typeof(c)=="undefined") c="";
    pn.saveable = new Object;
    pn.saveable.ctype = ctype;
    pn.saveable.x_cols = x_col;
    pn.saveable.y_cols = y_col;
    pn.saveable.btypeArray = btype;
    pn.saveable.saveXpos=-1;
    pn.saveable.saveYpos=-1;
    pn.saveable.shownoprint=shownoprint;
    pn.saveable.fusionChart= c;
    pn.saveable.ibiChart = c;
    pn.ctwin = -1;
    pn.saveable.fromGraph = false;
    pn.saveable.fromTool = true;
    if((typeof(pvcol)!="undefined")&&(pvcol!=-1)) pn.saveable.pvcol = pvcol;
    MakeChart(tn,pn,null,null);
}

/**
    ChartFooting:
    requires tableId to call ibiGrid.buildHead()
    returns object with 
    * htmlText (mimics logic of titles)
    * plainText (regular string, can be empty string)
    * height and width of htmlText
*/
ChartFooting = function (tableId)
{
    if (!(this instanceof ChartFooting)) {
        throw new Error("ChartFooting must be instantiated.");      
    }

    this.htmlText = "";
    this.height = 0;
    this.width = 0;

    var footing = ibiGrid.buildHead(tableId, isFoot, -1, -1);
    this.plainText = footing.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "") // strip html markup
                            .replace(/&nbsp;/g, '') // strip &nbsp
                            .replace(/^\s+/, '')    // strip leading blanks
                            .replace(/\s+$/, '');   // strip trailing blanks
    if (this.plainText !== '') {
        this.htmlText = '<TABLE width="100%" BORDER=0 CELLSPACING=0 CELLPADDING=0>' +
                        footing +
                        '<\/TABLE>';
        var textMeasurement = measureText(this.htmlText);
        this.height = textMeasurement.height;
        this.width = textMeasurement.width;
    }
}; // end ChartFooting

function MakeChartData(parms)
{
    var j, isroot;
    var newcont_object = {};
    var x_col = parms.x_col;
    var y_col = parms.y_col;
    var btypeArray = parms.btypeArray;
    var win = parms.win;
    var tctype = parms.tctype;
    var colorby = parms.colorby;
    var mytable = parms.mytable;

    isroot = (win > -1) ? false : true;

    newcont_object.newcont = [];
    newcont_object.yar = [];
    newcont_object.xar = [];
    newcont_object.newcont_xcol = [];
    newcont_object.newcont_ycol = CopyArray(y_col);

    var xc,yc;
    if(x_col.length==0) {
        newcont_object.yar = [];
        newcont_object.newcont = mytable.getChartValues(null,y_col,null,newcont_object.yar,btypeArray,false,0,newcont_object.newcont,isroot,false,win,-1);
        xc = [];
        yc = y_col;
    } else {
        xc = [];
        yc = y_col;
        var doSort=false;
        if((tctype==chartIsScat) && (arGraphEngine<2)) {
            xc[0]=y_col[y_col.length-1];
            btypeArray[0]='NONE';
            //pn.saveable.btypeArray[0] = 'NONE';
            if(colorby==-1) {
                if((win<0)&&(isMergeReports)&&(y_col.length>2)) colorby=y_col[1];
                else
                if(y_col.length>1) colorby=y_col[0];
                pn.saveable.colorby = colorby;
            }
            if(colorby!=-1) {
                yc = [];
                if(isMergeReports && (win<0)) yc[0]=y_col[0];
                yc[yc.length]=colorby;
                doSort=true;
            } 
            xc[1] = x_col[0];
            btypeArray[1]='NONE';
            //pn.saveable.btypeArray[1] = 'NONE';
            xtype = 0;
            if ((mytable.a_capt[xc[0]].type==IBISTR) ||
                (mytable.a_capt[xc[0]].type == IBIDATE)) {
                xtype = 1;
            }
            y_Str = mytable.a_cntl.a_cols[xc[0]].name;
            x_Str = mytable.a_cntl.a_cols[xc[1]].name;
        } else {
            for (j = 0; j < x_col.length; j++) { xc[xc.length] = x_col[j]; }
        }
        if(mytable.a_cntl.cacheMode) {
            newcont_object.yar=[];
            newcont_object.newcont = mytable.getChartValues(xc,yc,newcont_object.xar,newcont_object.yar,btypeArray,false,0,newcont_object.newcont,isroot,doSort,win);
        } else {
            for (j = 0; j < xc.length; j++) {
                if(mytable.a_capt[xc[i]].virtField) continue;
                newcont_object.xar[j] = [];
                newcont_object.yar = [];
                newcont_object.newcont = mytable.getChartValues(xc[j],yc,newcont_object.xar[j],newcont_object.yar,btypeArray,false,j,newcont_object.newcont,isroot,doSort,win,j);
            }
        }
        newcont_object.newcont_xcol = CopyArray(xc);
        newcont_object.newcont_ycol = CopyArray(yc);
        if((arGraphEngine<2)&&(tctype==chartIsScat)&&(pn.saveable.colorby!=-1)) {
            var newxar=[];
            newxar[0]=[];
            newxar[1]=[];
            var cpos=0;
            var pyar = yar[0];
            pn.yart = [];
            pn.yart[0] = pyar;
            var yl = yar.length;
            var pnl=0;
            for (j = 0; j < yl; j++) {
                if(yar[j]!=pyar) {
                    cpos = cpos+2;
                    pyar = yar[j];
                    newxar[cpos]=[];
                    newxar[cpos+1]=[];
                    pn.yart[++pnl]=pyar;
                }
                newxar[cpos][newxar[cpos].length] = xar[0][j];
                newxar[cpos+1][newxar[cpos+1].length] = xar[1][j];                    
            }
            newcont_object.xar = CopyArray(newxar);
        } 
//else pn.yart[0]='';
    }
    return (newcont_object);
}

// if other types map 2 'MSColumn2D' then add it to 1st 'fr' array
// if need 2 map 2 other than "MSColumn2D" then add another 'fr'/'to' primary array member
// if mapping no more needed, then remove it from corresponding part of following 2 vars
var mapFUSION2Dft  =[[{'fr':["Radar"]},{'to':"MSColumn2D"}]];
var mapJSFUSION2Dft=[[{'fr':["Radar"]},{'to':"MSColumn2D"}]];
function MakeChart(tn,pnn,usewin,usediv)
{
    var ctitle,titid,pien,tttype,boxd,ppid;
    var pied,wind,mytable,s_x_col,s_y_col,sumprt;
    var id,pxar,dataArray,win,line;
    var xar=[],yar=[],car=[], newcont;
    var x_Str = '', y_Str = '';
    var xtype = 0;
    var groupby = 0,pn;
    var csize = null;
    var count = 0,ind=0, cc=[];
    var reset = false;
    var menuid = '';
    var numcolors;
    var stacked,regression;
    var cs=null,xs;
    var x_col,y_col,btypeArray,ctype,size,pvcol,colorby,table_number;
    var linked, i, j, xc, yc;
    var subTable=-1;
    var hideBar = false;
    var newcont_xcol,newcont_ycol;
    var cfoot = null;
    var charttype;
    var info = null;
    var mapLn;
    var found;
    var grp,igr,igl,igt,grx,igx;
    var cctype, fctype;
    var pnTcapt, tblCntl;
    var olevel = 0;
    
    ctype = pnn.saveable.ctype;
    btypeArray = CopyArray(pnn.saveable.btypeArray);

    x_col = CopyArray(pnn.saveable.x_cols);
    y_col = CopyArray(pnn.saveable.y_cols);
    size  = pnn.saveable.size;
    pvcol = pnn.saveable.pvcol;
    var isApi = pnn.saveable.isApi;
    var shownoprint = pnn.saveable.shownoprint?true:false;
    if(typeof(pnn.saveable.subTable)!="undefined") subTable = pnn.saveable.subTable;

    xtype = pnn.xtype;
    colorby = pnn.saveable.colorby;
    if(typeof(colorby)=='undefined') colorby = -1;
    linked = pnn.saveable.linked;
    table_number = pnn.table_number;
    if(tn!=null) table_number = tn;
    mytable = getMyTable(table_number);
    tblCntl = mytable.a_cntl;

    if(typeof(islinked)=='undefined') linked=true;
    else linked = islinked;
    if((typeof(usewin)!='undefined')&&(usewin!=null)) {
        win=usewin;
        reset=true;
    } else win = getfreewin(pnn.saveable.saveXpos,pnn.saveable.saveYpos);

    if(win == -1) {
        alert(ibiMsgStr['mxwnr']);
        return;
    }
    if(win>-1) {
        if(typeof(size)!='object')
        {
            if(b_pda) size = {'width':310,'height':200};
            else    size = {'width':500,'height':300};
        }
        if((mytable.a_cntl.WindowDisplay=="tab") &&
            (mytable.a_cntl.table_div.viewPortType=="DIMENSION")) {
            if(mytable.a_cntl.table_div.width>0)size.width = mytable.a_cntl.table_div.width;
            if(mytable.a_cntl.table_div.height>0)size.height = mytable.a_cntl.table_div.height;
        }
        if(pwn[win].roll_tnumber == -1) 
            pwn[win].roll_tnumber = MyTable.length;
     }


    csize = new Object();
    if(pnn.fullscreen) {
        csize.width = parseInt(usediv.style.width, 10);
        csize.height = parseInt(usediv.style.height, 10)-24;
    } else {
        csize.width = size.width;
        csize.height = size.height;
        if((win>-1)&&(mytable.a_cntl.WindowDisplay!="tab")) csize.height = csize.height - 24;
    }

    var resizeInfo = null;
    if (mytable.useMdiv) { 
        if(tblCntl.autoFit != arConstants.AUTOFIT_CONTAINER)
            tblCntl.autoFit = arConstants.AUTOFIT_OFF;
    } // no AUTOFIT for DIV
    if ((tblCntl.autoFit === arConstants.AUTOFIT_ON) ||
        (tblCntl.autoFit === arConstants.AUTOFIT_RESIZE)) {
        if (((mytable.maintable.root.style.height === "") && 
             (mytable.maintable.root.style.width  === "")) ||
            ((mytable.maintable.root.style.height === "100%") &&
             (mytable.maintable.root.style.width  === "100%"))) {
            var bodyStyle, numSpacers = 8, 
                spacerHeight = (arGraphEngine === arGraphEngineJSCHART) ? 4 : 5;

            resizeInfo = {
                vMarginsDefault: (spacerHeight * numSpacers),
                autoFit:  tblCntl.autoFit,
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
                resizeInfo.vMargins = tblCntl.margin[0] + tblCntl.margin[2];
                resizeInfo.hMargins = tblCntl.margin[1] + tblCntl.margin[3];
            }

            d.body.style.overflow = "hidden";
        } else { // turn off AUTOFIT as it does not make any sense in such cases...
            tblCntl.autoFit = arConstants.AUTOFIT_OFF;
        }
    }

    var menuops = mytable.a_cntl.menuops;
    var do_charttool = menuops.charttool;
    var do_msappexport = menuops.msappexport;
    if(!b_hasActiveX) do_msappexport = false; 

    if(typeof(pvcol)=='undefined') {
        if(ctype==5) pvcol = 1;
        else pvcol=-1;
    }
    pn = getPn(win,table_number);
    if(isApi) {
        if(typeof(pn.children[subTable]) =="undefined"){
            pn.children[subTable] = {
                'xars':null,'yars':null,'cfilt':[],'c_col_filter':[],
                'table_number':-1,'tcapt':null,'tcont':null,'tlook':null,'tcntl':null,
                'dobj_b':null,'dobj_m':null,'newDoc':null,'newGraph':null,'wdGraph':null,
                'newpres':null,'newslide':null,'pptGraph':null,'newEx':null,'newEXGraph':null,
                'xmenu':null,'yart':null,'ctwin':-1,
                'saveable':{
                    'saveXpos':-1,'saveYpos':-1,'saveWidth':-1,'saveHeight':-1,'pvcol':-1,
                    'linked':true,'x_cols':null,'regression':false,'colorby':-1,'stacked':false,
                    'y_cols':null,'btype':null,'ctype':null,'size':0
                }
            };
        }
        pn = pn.children[subTable];
    }

    //should not be null
    if(pn.parms == null)
        delete pn.parms;

    if(typeof(btypeArray)=='undefined') {
        btypeArray = []; 
        for (i = 0; i < x_col.length; i++) {
            if (mytable.a_capt[x_col[i]].type==IBINUM) { btypeArray[i] = 'SUM'; }
            else { btypeArray[i] = 'COU'; }
        }
        pn.saveable.btypeArray  = CopyArray(btypeArray);
    } else { pn.saveable.btypeArray = CopyArray(pnn.saveable.btypeArray); }

    pn.saveable.pvcol  = pvcol;
    pn.saveable.isApi = isApi;
    pn.saveable.subTable = subTable;
    pn.saveable.fusionChart = pnn.saveable.fusionChart;
    pn.saveable.ibiChart = pnn.saveable.ibiChart;
    pn.saveable.fromGraph = pnn.saveable.fromGraph;
    pn.saveable.fromTool = pnn.saveable.fromTool;
    pn.xaxisFunction = pnn.xaxisFunction;
    pn.yaxisFunction = pnn.yaxisFunction;
    pn.callback = pnn.callback;

    if(typeof(pn.saveable.org_ctype)=="undefined") {
        pn.saveable.org_ctype = pnn.saveable.ctype;
        pn.saveable.org_pvcol = pnn.saveable.pvcol;
        pn.saveable.org_fusionChart = pnn.saveable.fusionChart;
        pn.saveable.org_ibiChart = pnn.saveable.ibiChart;
        pn.saveable.org_x_cols = CopyArray(pnn.saveable.x_cols);
        pn.saveable.org_y_cols = CopyArray(pnn.saveable.y_cols);
        pn.saveable.org_btypeArray = CopyArray(pnn.saveable.btypeArray);
    }
    if(typeof(pnn.saveable.regression)=='undefined') pn.saveable.regression=false;
    else pn.saveable.regression = pnn.saveable.regression;

    if(typeof(usediv) == 'object') pn.usediv = usediv;
    else pn.usediv = null;
    if(typeof(colorby)!='undefined') pn.saveable.colorby = colorby;
    var tctype = ctype;
    //if(ctype == 7) 
    //    if(pn.saveable.fusionChart=="Scatter")
            //tctype = chartIsScat;
            
    cctype = ctype;
    fctype = pn.saveable.fusionChart;
    if((arGraphEngine==arGraphEngineJSCHART)||
       (arGraphEngine==arGraphEngineFLEXCHART)){
        if(ctype<=chartIsScat){
            cctype = chartIsTDG;
            switch(ctype){
                case 0: fctype = "pie";break;
                case 1: fctype = "line";break;
                case 2: if(pn.saveable.stacked)
                        fctype = "column2";
                    else
                        fctype = "column";
                    break;
                case 3: fctype = "scatter";break;
            }
        }else{
            fctype = pn.saveable.ibiChart;
            if(fctype == "GRID")
                cctype = chartIsPivot;
        }
    }else
    if(((arGraphEngine==arGraphEngineFUSION)||
        (arGraphEngine==arGraphEngineFLEX)||
        (arGraphEngine==arGraphEngineJSFUSION)) &&
       (ctype<=chartIsScat)){
        cctype = chartIsFusion;
        switch(ctype){
            case 0: fctype = "Pie2D";break;
            case 1: fctype = "MSLine";break;
            case 2: if(pn.saveable.stacked)
                    fctype = "StackedColumn2D";
                else 
                    fctype = "MSColumn2D";
                break;
            case 3: fctype = "Scatter";break;
        }
    }else
    if(arGraphEngine==arGraphEngineFUSION){
        mapLn=mapFUSION2Dft.length;
        found=false;
        for(grx=0;grx<mapLn;grx++){
            grp=mapFUSION2Dft[grx];
            igr=grp[0]['fr'];
            igl=igr.length;
            for(igx=0;igx<mapLn;igx++){
                igt=igr[igx];
                if(igt==fctype){
                   found=true;
                   break;
                }
            }
            if(found==true) break;
        }
        if(found==true){
            fctype = grp[1]['to'];
        }
    }else
    if(arGraphEngine==arGraphEngineJSFUSION){
        mapLn=mapJSFUSION2Dft.length;
        found=false;
        for(grx=0;grx<mapLn;grx++){
            grp=mapJSFUSION2Dft[grx];
            igr=grp[0]['fr'];
            igl=igr.length;
            for(igx=0;igx<mapLn;igx++){
                igt=igr[igx];
                if(igt==fctype){
                   found=true;
                   break;
                }
            }
            if(found==true) break;
        }
        if(found==true){
            fctype = grp[1]['to'];
        }
    }

    if(typeof pn.saveable.org_ibiChart != "undefined")
        mytable.tdgOrgChartType = pn.saveable.org_ibiChart.toLowerCase();
    
    var doGrMerge = false;
    var grmSet = mytable.a_cntl.grm || 0;
    var doBucket = false;
    var limit = null;
    
    if(pn.tcapt && pn.xars != null)
        tcapt = pn.tcapt;
    else
        tcapt= mytable.ru_a_capt;
        
    if(pn.tcntl && pn.xars != null)
        tcntl = pn.tcntl;
    else {
        tcntl = ibiStd.copyObject(mytable.ru_a_cntl);
        if(pn.tcntl)
            if(pn.tcntl.buckets)
                tcntl.buckets = pn.tcntl.buckets;
    }

    if (grmSet === 0) {
        tcntl.graphMerge = 0; // GRMERGE_OFF
    }

    var hasBuckets = (tcntl.hasBuckets?true:false);
    //if (pn.saveable.org_ibiChart != fctype)
    //    hasBuckets = false;

    if((typeof(fctype)!="undefined") && (fctype != "" ) && hasBuckets === false) {
        charttype = ibiUtil.StripSpace(fctype.toLowerCase(),true,true);
        info = ibiChart.getInfo(charttype);
        if (info && info.base == "map") {
            tcntl.hasBuckets = true;
            hasBuckets = true;
            tcntl.buckets = {};
            tcntl.buckets['Y-AXIS'] = [];
            tcntl.buckets['X-AXIS'] = [];
            tcntl.buckets['SIZE'] = [];
            for(i=0; i < tcapt.length; i++) {
                if(!tcapt[i].isby)
                    tcntl.buckets['SIZE'] = [i];
                else
                if(tcntl.buckets['Y-AXIS'].length == 0)
                    tcntl.buckets['Y-AXIS'] = [i];
                else
                    tcntl.buckets['X-AXIS'] = [i];
            }
            tcntl.buckets['ROW'] = [];
            tcntl.buckets['COLUMN'] = [];
            tcntl.buckets['COLOR'] = [];    
        }
    }
    //if (hasBuckets) {
        //mytable.a_cntl.showMenuBar = false;
        //if (typeof mytable.a_cntl.chartMenuBar == "undefined")
            //m/ytable.a_cntl.chartMenuBar = {};
    //}
    if(((tcntl.graphMerge == 2)&&(cctype == 9)) || hasBuckets) {
        charttype = ibiUtil.StripSpace(fctype.toLowerCase(),true,true);
        info = ibiChart.getInfo(charttype);
        if(info==null) info = ibiChart.getInfo("bar");
        if(info && (typeof(info.useChart)!="undefined")) {
            charttype = info.useChart;
            info = ibiChart.getInfo(charttype);
        }
        if(info && tdginfo)
            if(typeof(tdginfo[info.chartProps])!="undefined")
                if(tdginfo[info.chartProps].activeProps)
                    if(tdginfo[info.chartProps].activeProps.maxRecords)
                        limit = tdginfo[info.chartProps].activeProps.maxRecords;
        if(limit && hasBuckets && (tcntl.buckets["COLUMN"].length || tcntl.buckets["ROW"].length))
            limit = limit * 4;
        if(hasBuckets)
            doBucket = true;
        else if (grmSet === 1) {
        if((info.base == "bar") || (info.base == "line") || (info.base == "bubble") || (info.base == "area") || (tcntl.graphMulti > 0) || (tcntl.graphLegend > 0))
            doGrMerge = true;
        }
    }

    if(pn.xars == null) { 
        pn.yart = [];
        if (typeof(x_col) != 'object') {
            if (x_col != -1) {
                x_Str = mytable.a_cntl.a_cols[x_col].name;
                s_x_col = x_col;
                x_col = [];
                x_col[0] = s_x_col;
            } else x_col = [];
        } else {
            x_Str = '';
            for (j = 0; j < x_col.length; j++) {
                if (mytable.a_capt[x_col[j]].b_hide)
                    continue;
                if (mytable.a_capt[x_col[j]].noprint)
                    continue;
                if (x_Str != '')
                    x_Str += ',&nbsp;';
                x_Str += mytable.a_cntl.a_cols[x_col[j]].name;
            }
        }
        if((tctype!=chartIsScat)||(arGraphEngine>1)) {
            var chartAggregate = mytable.a_cntl.chartAggregate;
            var aCntlCols = mytable.a_cntl.a_cols;
            for (i = x_col.length - 1; i >= 0; --i) { 
                pn.yart[i] = aCntlCols[x_col[i]].name;
                if (chartAggregate) { 
                    pn.yart[i] += '(' + a_calc_all_types[btypeArray[i]] + ')';
                }
            }
        }

        if(typeof(y_col)!='object') {
            if(y_col!=-1) {
                y_Str = mytable.a_cntl.a_cols[y_col].name;
                s_y_col = y_col;
                y_col = [];
                y_col[0] = s_y_col;
            } else y_col = [];
        } else {
            for (j = 0; j < y_col.length; j++) {
                if (!mytable.a_capt[y_col[j]].b_hide && !mytable.a_capt[y_col[j]].noprint) {
                    y_Str += mytable.a_cntl.a_cols[y_col[j]].name;
                    if(j<(y_col.length-1)) y_Str += ',&nbsp;';
                }
            }
        }
        newcont = [];
        var isroot = true;
        if(win>-1) isroot = false;
        newcont_xcol = [];
        newcont_ycol = CopyArray(y_col);

        if(x_col.length==0) {
            yar = [];
            xc = [];
            yc = y_col;
            if(mytable.rHasCallBackCont) {
                newcont = mytable.rCallBackCont;
                yar = mytable.rCallBackArgs['res'];
                delete mytable.rCallBackCont;
                delete mytable.rHasCallBackCont;
            } else
                newcont = mytable.getChartValues(null,y_col,null,yar,btypeArray,false,0,newcont,isroot,false,win,-1,null,limit,undefined,
                    ((mytable.a_cntl.cacheMode) && (mytable.a_cntl.cacheWriteMode==4))?true:false);
            if(newcont=="delay")
                return;
        } else {
            var doSort=false;
            xc = [];
            yc = y_col;
            if((tctype==chartIsScat) && (arGraphEngine<2)) {
                xc[0]=y_col[y_col.length-1];
                btypeArray[0]='NONE';
                //pn.saveable.btypeArray[0] = 'NONE';
                if(colorby==-1) {
                    if((win<0)&&(isMergeReports)&&(y_col.length>2)) colorby=y_col[1];
                    else
                    if(y_col.length>1) colorby=y_col[0];
                    pn.saveable.colorby = colorby;
                }
                if(colorby!=-1) {
                    yc = [];
                    if(isMergeReports && (win<0)) yc[0]=y_col[0];
                    yc[yc.length]=colorby;
                    doSort=true;
                } 
                xc[1] = x_col[0];
                btypeArray[1]='NONE';
                //pn.saveable.btypeArray[1] = 'NONE';
                xtype = 0;
                if ((mytable.a_capt[xc[0]].type==IBISTR) ||
                    (mytable.a_capt[xc[0]].type == IBIDATE)) {
                    xtype = 1;
                }
                y_Str = mytable.a_cntl.a_cols[xc[0]].name;
                x_Str = mytable.a_cntl.a_cols[xc[1]].name;
            }
            else
            for (j = 0; j < x_col.length; j++) { xc[xc.length] = x_col[j]; }
            if(mytable.a_cntl.cacheMode) {
                yar=[];
                if(mytable.rHasCallBackCont) {
                    newcont = mytable.rCallBackCont;
                    xar = mytable.rCallBackArgs['sumres'];
                    yar = mytable.rCallBackArgs['res'];
                    delete mytable.rCallBackCont;
                    delete mytable.rHasCallBackCont;
                } else
                    newcont = mytable.getChartValues(xc,yc,xar,yar,btypeArray,false,0,newcont,isroot,doSort,win,null,null,limit,undefined,
                        ((mytable.a_cntl.cacheMode) && (mytable.a_cntl.cacheWriteMode==4))?true:false);
                if(newcont=='delay')
                    return;
            } else
            for (j = 0; j < xc.length; j++) {
                if(mytable.a_capt[xc[j]].virtField)
                    continue;
                xar[j] = [];
                yar = [];
                newcont = mytable.getChartValues(xc[j],yc,xar[j],yar,btypeArray,false,j,newcont,isroot,doSort,win,j,null,limit);
            }
            var inlist = null;
            var jj,p;
            for (j = 0; j < xc.length; j++) {
                if(mytable.a_capt[xc[j]].virtField) {
                    if(inlist == null) {
                        inlist = {};
                        for(jj=0; jj < mytable.IBs.length; jj++)
                            inlist[mytable.IBs[jj]] = jj;
                    }
                    for(jj=0; jj < newcont.length; jj++ ) {
                        xar[j] = [];
                        var fields = mytable.a_capt[xc[j]].fields;
                        var val1,val2;
                        val1 = mytable.IBs[newcont[jj][fields[0].field][DARAW]];
                        for(var jk=1; jk<fields.length; jk++) {
                            val2 = mytable.IBs[newcont[jj][fields[jk].field][DARAW]];
                            switch (fields[jk].operator) {
                                case "*": val1 = val1 * val2;break;
                                case "/": val1 = val1 / val2; break;
                                case "+": val1 = val1 + val2; break;
                                case "-": val1 = val1 - val2; break;
                            }

                        }
                        if(typeof inlist[val1] != "undefined")
                            p = inlist[val1];
                        else
                            p = -1;
                        if(p==-1) {
                            p = mytable.IBs.length;
                            mytable.IBs[p] = val1;
                            inlist[val1]=p;
                        }
                        newcont[jj][j+yc.length] = [];
                        newcont[jj][j+yc.length][DARAW] = p;
                        newcont[jj][j+yc.length][DASTR] = p;
                        newcont[jj][j+yc.length][DACLS] = 1;
                    }
                }
            }
            newcont_xcol = CopyArray(xc);
            newcont_ycol = CopyArray(yc);
            if((arGraphEngine<2)&&(tctype==chartIsScat)&&(pn.saveable.colorby!=-1)) {
                var newxar=[];
                newxar[0]=[];
                newxar[1]=[];
                var cpos=0;
                var pyar = yar[0];
                pn.yart = [];
                pn.yart[0] = pyar;
                var yl = yar.length;
                var pnl=0;
                for (j = 0; j < yl; j++) {
                    if(yar[j]!=pyar) {
                        cpos = cpos+2;
                        pyar = yar[j];
                        newxar[cpos]=[];
                        newxar[cpos+1]=[];
                        pn.yart[++pnl]=pyar;
                    }
                    newxar[cpos][newxar[cpos].length] = xar[0][j];
                    newxar[cpos+1][newxar[cpos+1].length] = xar[1][j];                    
                }
                xar = CopyArray(newxar);
            } 
//else pn.yart[0]='';
        }
        ind = 0;
        numcolors = yar.length;
        if((y_col.length+x_col.length)>numcolors) numcolors = y_col.length+x_col.length;
        if(mytable.a_cntl.colorTable) cs = colorTable[mytable.a_cntl.colorTable];
        else cs = colorTable["ibi"];
        var r,g,b,off=0;
        while(count<numcolors) {
            if(typeof(cs[ind])=="string") car[count++] = cs[ind];
            else {
                r=(cs[ind][0]+off)%256;
                g=(cs[ind][1]+off)%256;
                b=(cs[ind][2]+off)%256;
                car[count++] = '#'+ibiUtil.d2x(r)+ibiUtil.d2x(g)+ibiUtil.d2x(b);
            }
            ind++;
            if(ind>=cs.length) {
                ind=0;
                off=off+20;
            }
        }
         if(typeof(pn)=='object') {
            pn.saveable.x_cols = CopyArray(x_col);
            pn.saveable.linked = linked;
            if(typeof(pn.saveable.regression)=='undefined') pn.saveable.regression=false;
            if(typeof(pn.saveable.stacked)=='undefined') pn.saveable.stacked=false;
            pn.xars = CopyArray(xar);
            pn.yars = CopyArray(yar);
            pn.saveable.y_cols = CopyArray(y_col);
            pn.car  = CopyArray(car);
            pn.table_number = mytable.a_cntl.table_number;
            pn.saveable.y_Str = y_Str;
            pn.saveable.x_Str = x_Str;
            pn.tcapt = [];
            pn.tcntl = tcntl;  // already set properly above
            //pn.tcntl = mytable.copyObject(mytable.ru_a_cntl);
            pn.tcntl.a_cols = [];
            pn.xtype=xtype;
            pn.saveable.shownoprint = shownoprint;

            if (typeof(yc) == 'object') {
                for (j = 0; j < yc.length; j++) {
                    pn.tcapt[pn.tcapt.length] = mytable.copyObject(mytable.ru_a_capt[yc[j]]);
                    pn.tcapt[pn.tcapt.length - 1].orgCol = yc[j];
                    pn.tcapt[pn.tcapt.length - 1].b_hide = mytable.a_capt[yc[j]].b_hide;
                    pn.tcapt[pn.tcapt.length - 1].noprint = mytable.a_capt[yc[j]].noprint;
                    if ((pn.tcapt[pn.tcapt.length - 1].hide || pn.tcapt[pn.tcapt.length - 1].b_hide)
                        && ((yc.length == 1)||(yc.length == 2 && isMergeReports))) {
                        pn.tcapt[pn.tcapt.length - 1].hide = false;
                        pn.tcapt[pn.tcapt.length - 1].b_hide = false;
                    }
                    if (isMergeReports && (j == 0) && (yc[j]==0) && (ctype != 6) && (ctype != 4)  && (yc.length>1)) {
                        pn.tcapt[pn.tcapt.length-1].b_hide = true;
                    }
                    pn.tcntl.a_cols[pn.tcntl.a_cols.length] = mytable.copyObject(mytable.ru_a_cntl.a_cols[yc[j]]);
                    if(shownoprint && pn.tcapt[pn.tcapt.length-1].noprint) {
                        pn.tcapt[pn.tcapt.length-1].noprint = false;
                        pn.tcapt[pn.tcapt.length-1].name = {'colspan':'','exClass':'','align':'','valign':'BOTTOM','bcolor':'','wrap':' NOWRAP','style':'','color':'#000000','font':'DEFAULT-FIXED','size':'10','name':''};
                        pn.tcapt[pn.tcapt.length-1].name.name = '<TT>'+pn.tcntl.a_cols[pn.tcntl.a_cols.length-1].name+'<\/TT>';
                    }
                }
            } else {
                pn.tcapt[pn.tcapt.length] = mytable.copyObject(mytable.ru_a_capt[y_col]);
                pn.tcapt[pn.tcapt.length - 1].b_hide = mytable.a_capt[y_col].b_hide;
                pn.tcapt[pn.tcapt.length - 1].noprint = mytable.a_capt[y_col].noprint;
                if (pn.tcapt[pn.tcapt.length - 1].hide || pn.tcapt[pn.tcapt.length - 1].b_hide) {
                    pn.tcapt[pn.tcapt.length - 1].hide = false;
                    pn.tcapt[pn.tcapt.length - 1].b_hide = false;
                }
                pn.tcapt[pn.tcapt.length-1].orgCol = y_col;
                if(isMergeReports && (y_col==0) && (ctype!=6) && (ctype!=4)) 
                        pn.tcapt[pn.tcapt.length-1].b_hide = true;
                pn.tcntl.a_cols[pn.tcntl.a_cols.length] = mytable.copyObject(mytable.ru_a_cntl.a_cols[y_col]);
                if(shownoprint && pn.tcapt[pn.tcapt.length-1].noprint) {
                    pn.tcapt[pn.tcapt.length-1].noprint = false;
                    pn.tcapt[pn.tcapt.length-1].name = {'colspan':'','exClass':'','align':'','valign':'BOTTOM','bcolor':'','wrap':' NOWRAP','style':'','color':'#000000','font':'DEFAULT-FIXED','size':'10','name':''};
                    pn.tcapt[pn.tcapt.length-1].name.name = '<TT>'+pn.tcntl.a_cols[pn.tcntl.a_cols.length-1].name+'<\/TT>';
                }
            }
             for (j = 0; j < xc.length; j++) {
                if(mytable.a_capt[xc[j]].addedField) {
                     pn.tcapt[pn.tcapt.length] = mytable.copyObject(mytable.a_capt[xc[j]]);
                } else
                if (mytable.a_capt[xc[j]].virtField) {
                    pn.tcapt[pn.tcapt.length] = mytable.copyObject(mytable.a_capt[xc[j]]);
                    fields = mytable.a_capt[xc[j]].fields;
                    for (k = 0; k < fields.length; k++) {
                        pn.tcapt[fields[k].field].noprint = true;
                        pn.tcapt[fields[k].field].b_hide = true;
                    }
                } else
                     pn.tcapt[pn.tcapt.length] = mytable.copyObject(mytable.ru_a_capt[xc[j]]);

                pnTcapt = pn.tcapt[pn.tcapt.length - 1];

                pn.tcapt[pn.tcapt.length - 1].b_hide = mytable.a_capt[xc[j]].b_hide;
                pn.tcapt[pn.tcapt.length - 1].hide = mytable.a_capt[xc[j]].hide;
                pn.tcapt[pn.tcapt.length - 1].noprint = mytable.a_capt[xc[j]].noprint;

                var ba = btypeArray[j];
                if(typeof btypeArray[j] == "undefined")
                    ba = btypeArray[0];
                if (ba != 'NONE' && ba != 'FST' ) {
                    pnTcapt.typeOrig = pnTcapt.type;
                    pnTcapt.type = "IBINUM";
                }
                pnTcapt.isby = false;

                pn.tcapt[pn.tcapt.length - 1].orgCol = xc[j];
                if (mytable.a_capt[xc[j]].virtField || mytable.a_capt[xc[j]].addedField)
                    pn.tcntl.a_cols[pn.tcntl.a_cols.length] = mytable.copyObject(mytable.a_cntl.a_cols[xc[j]]);
                else
                    pn.tcntl.a_cols[pn.tcntl.a_cols.length] = mytable.copyObject(mytable.ru_a_cntl.a_cols[xc[j]]);
                if(shownoprint && pn.tcapt[pn.tcapt.length-1].noprint) {
                    pn.tcapt[pn.tcapt.length-1].noprint = false;
                    pn.tcapt[pn.tcapt.length-1].name = {'colspan':'','exClass':'','align':'','valign':'BOTTOM','bcolor':'','wrap':' NOWRAP','style':'','color':'#000000','font':'DEFAULT-FIXED','size':'10','name':''};
                    pn.tcapt[pn.tcapt.length-1].name.name = '<TT>'+pn.tcntl.a_cols[pn.tcntl.a_cols.length-1].name+'<\/TT>';
                }
                if((ctype!=6)&&(mytable.isRollUp)&&((pn.tcapt[pn.tcapt.length-1].type == IBISTR)||(pn.tcapt[pn.tcapt.length-1].type==IBIDATE))) {
                    pn.tcapt[pn.tcapt.length-1].format = '(I8      )';
                    pn.tcapt[pn.tcapt.length-1].type = IBINUM;
                }
                if(pn.saveable.fromTool)
                    pn.tcapt[pn.tcapt.length-1].b_hide = false;
            }
            
            for (j = 0; j < pn.tcapt.length; j++) {
                pn.tcapt[j].level = olevel;
                if(pn.tcapt[j].isby)
                    olevel++;
                
                pn.tcapt[j].dataField = j;
                if ((ctype==6) && (j>0)) {
                    pn.tcapt[j].exphide = true;
                } else {
                    pn.tcapt[j].exphide = false;
                }
            }
            pn.tlook = CopyArray(mytable.ru_o_look);
            pn.ibs = CopyArray(mytable.IBs);
            pn.tcont = newcont;
        } 
    } else {
        xar = pn.xars;
        yar = pn.yars;
                y_col = pn.saveable.y_cols;
                x_col = pn.saveable.x_cols;
        linked = pn.saveable.linked;
        x_Str = pn.saveable.x_Str;
        y_Str = pn.saveable.y_Str;
        newcont_xcol = pn.parms.newcont_xcol;
        newcont_ycol = pn.parms.newcont_ycol;
        car = pn.car;
    }
    var tcapt =  pn.tcapt;
    var tcont =  pn.tcont;
    var tlook =  pn.tlook;
    var tcntl =  pn.tcntl;
    var ibs   =  pn.ibs;
    var rec;

    if(mytable.haveHighlight) {
        var myobj = new Object();
        myobj.chfilt = mytable.chfilt;
        myobj.filt   = mytable.filt;
        myobj.a_cntl = mytable.a_cntl;
        myobj.filter_andor = mytable.filter_andor;
        myobj.table_name = mytable.table_name;
        myobj.a_all_cont = tcont;
        myobj.haveFilters = false;
        myobj.a_capt    = tcapt;
        myobj.callHigh    = ICallHigh;
        myobj.getColumnByName = IGetColumnByName;
        myobj.callFiltReal = ICallFiltReal;
        myobj.IBs       = ibs;
        IinitBody(myobj);
        for (rec = 0; rec < tcont.length; rec++) {
            tcont[rec][0][5]= myobj.callHigh(true,tcont[rec]);
        }
    } else {
        for (rec = 0; rec < tcont.length; rec++) {
            tcont[rec][0][5]= 0;
        }
    }
    var pid='cpop'+win;
    if(pnn.fullscreen) pid = 'cpopf'+win;
    if(subTable>-1) pid+='_'+subTable;
    var sid='SUM_'+win;
    if(pnn.fullscreen) sid = 'SUMF_'+win;
    if(subTable>-1) sid+='_'+subTable;
    var pid2='cpop2_'+win;
    if(pnn.fullscreen) pid2 = 'cpop2f'+win;

    var status_bcolor ="";
    if(mytable.a_cntl.statbackcolor) status_bcolor= 'background-color:'+mytable.a_cntl.statbackcolor+';';
    var status_color = "";
    if(mytable.a_cntl.statcolor) status_color = 'color:'+mytable.a_cntl.statcolor+';';

    var type_chart  = '<table><tr>';
    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['menuOptions']+'" style="cursor:pointer;" id="' + pid + '">' + ibiSkin.cpopicon + '<\/div><\/td>';
    if (!hasBuckets) {
        if(ctype!=5) {
            if(isARBrowserExtension) {
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtcol']+'" style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',2,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.bar1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtpie']+'" style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',0,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.pie1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtline']+'" style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',1,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.line1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtscat']+'" style="cursor:pointer;"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',3,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.scat1icon+'<\/div><\/td>';
            } else {
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtcol']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',2,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.bar1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtpie']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',0,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.pie1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtline']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',1,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.line1icon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtscat']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',3,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.scat1icon+'<\/div><\/td>';
            }

        }
    }
    if (ctype != 5) {
            if(isARBrowserExtension) {
                if(win>-1)type_chart += '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtroll']+'" style="cursor:pointer;" onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',4,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.roll1icon+'<\/div><\/td>';
            } else {
                if(win>-1)type_chart += '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtroll']+'" style="cursor:pointer;" onclick="ibiChart.makeChartNType('+win+',4,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.roll1icon+'<\/div><\/td>';
            }

            if(b_ios && arGraphEngine == arGraphEngineJSCHART) {
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtadm']+'" style="cursor:pointer"  onclick="ibi_iPadMenu.ShowChartPickerTool('+win+','+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.advChartIcon+'<\/div><\/td>';
            }            
            if(do_charttool && !b_ios) {
                if(isARBrowserExtension) {
                    type_chart += '<td valign="MIDDLE"><div title="' + ibiMsgStr['crtadm'] + '" style="cursor:pointer"  onclick="_ARExtensionCall(&quot;ibiEditTools.DoChartToolmod(' + win + ',' + mytable.a_cntl.table_number + ',' + subTable + ')&quot;)">' + ibiSkin.advChartIcon + '<\/div><\/td>';
                } else {
                    type_chart += '<td valign="MIDDLE"><div title="' + ibiMsgStr['crtadm'] + '" style="cursor:pointer"  onclick="ibiEditTools.DoChartToolmod(' + win + ',' + mytable.a_cntl.table_number + ',' + subTable + ')">' + ibiSkin.advChartIcon + '<\/div><\/td>';
                }
            }

            if(isARBrowserExtension) {
                //type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['OrigChart']+'" style="cursor:pointer"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartNType('+win+',-1,'+mytable.a_cntl.table_number+','+subTable+')&quot;)">'+ibiSkin.initchart+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['OrigChart']+'" style="cursor:pointer"  onclick="_ARExtensionCall(&quot;ibiChart.makeChartRestore('+win+','+mytable.a_cntl.table_number+','+subTable+',true)&quot;)">'+ibiSkin.initchart+'<\/div><\/td>';
            } else {
                //type_chart += '<td valign="MIDDLE"><div title="' + ibiMsgStr['OrigChart'] + '" style="cursor:pointer"  onclick="ibiChart.makeChartNType(' + win + ',-1,' + mytable.a_cntl.table_number + ',' + subTable + ')">' + ibiSkin.initchart + '<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="' + ibiMsgStr['OrigChart'] + '" style="cursor:pointer"  onclick="ibiChart.makeChartRestore(' + win + ',' + mytable.a_cntl.table_number + ',' + subTable + ',true)">' + ibiSkin.initchart + '<\/div><\/td>';
            }
        }
        if((win>-1) || (isApi)) type_chart += '<td valign="MIDDLE"><div id="LINKIMG'+win+'_'+subTable+'" style="cursor:pointer;"  onclick="ibiChart.toggleFiltLink('+win+','+table_number+','+subTable+')">'+(linked?ibiSkin.unlinkicon:ibiSkin.linkicon)+'<\/div><\/td>';
        type_chart += '<\/tr><\/table>';

    var sum_line  = '<table><tr>';
        sum_line += '<td style="white-space:nowrap" width="60" valign="TOP" class="tabPagingText1"><div id="'+sid+'" class="tabPagingText1" style="white-space:nowrap;cursor:pointer;"><\/div><\/td>';
        sum_line += '<\/tr><\/table>';

    wind = 'win'+win;
    pied = 'wbody'+win;
    ppid = 'px_'+win;
    boxd = 'box_'+win;
    pien = 'Pie'+win;
    titid = 'tit_'+win;
    menuid = 'menudiv_'+win;

    ctitle = x_Str+' '+ibiMsgStr['by']+' '+y_Str;
    pn.saveable.ctype  = ctype;
    pn.saveable.size   = size;
    if(win>-1) {
        pn.dobj_b.style.width = size.width+'px';
        pn.dobj_b.style.height = size.height+'px';
    }
    tttype=typechart;
    if(ctype==5) tttype=typepivot;
    if(win>-1) {
        var ptn = mytable.a_cntl.table_number;
        if(mytable.isRollUp) {
            ptn = mytable.parent_table;
        }
        setwin(win,wind,ptn,tttype,ctitle,size);
    }

    var barclass = "arChartMenuBar";
    if(ctype == 5) barclass = "arPivotMenuBar";
    line  = '<table class="'+barclass+'" width="100%" style="'+status_bcolor+status_color+'"  border=0 cellspacing=0 cellpadding=0><tr height="31">';
    line += '<td Width=50 class="'+barclass+'Container" style="white-space:nowrap;" Valign="MIDDLE">'+type_chart+'<\/td>';
    line += '<td Width=60 class="'+barclass+'Container" style="white-space:nowrap;" Valign="MIDDLE">'+sum_line+'<\/td>';
    if((typeof(ibiCompound.chartFilters) != "undefined") &&
        (ibiCompound.chartFilters.length))
            line += '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtcflt']+'" style="cursor:pointer;"  onclick="ibiChart.removeFilter()">'+ibiSkin.cflticon+'<\/div><\/td>';
    var dopad = true;
    // don't add fullscreen button if mobile version of dashboard is being used
    if(typeof ARMobileDashboards === 'undefined' && (mytable.a_cntl.menuops.fsappmode || b_mobile))
        if(!b_ie || (b_ie_version>7)) {
              line += '<td align="right" width="*"><span title="'+ibiMsgStr["fsr"]+'" style="cursor:pointer;" onclick="ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,true)">'+ibiSkin.fullicon1+'<\/span><\/td>';
            dopad = false;
        }
    if(dopad) line += '<td width="*">&nbsp;<\/td>';
    line += '<\/tr><\/table>';
    if(!mytable.a_cntl.showMenuBar) {
         line = '';
         mytable.maintable.wmenu.style.display = "none";
    }
    var dobjt = null;
    var usediv2 = null;
    if((win>-1)&&(!pnn.fullscreen)) {
        dobjt=pn.dobj_m;
        if(reset)
            pn.wtitle = ctitle;
        else 
            buildwin(win,ctitle,mytable,true,titid,size);
        pn.dobj_m.innerHTML=line;
        hideBar = true;
    } else {
        if((!isApi)&&(!pnn.fullscreen)) {
            dobjt = mytable.maintable.wmenu;
            if(dobjt) {
                if((ctype<4)||(ctype>6)) dobjt.style.backgroundColor = "#ECE9D8";
                if(ctype!=5) dobjt.innerHTML=line;
                if(mytable.a_cntl.showMenuBar)
                    dobjt.style.display = "block";
            }
            if((typeof pn.parms == "undefined")|| (pn.parms == null) ||
                (typeof pn.parms._chart == "undefined"))
                usediv.innerHTML='';
        } else {
            if((typeof pn.parms == "undefined")|| (pn.parms == null) ||
                (typeof pn.parms._chart == "undefined")) {
                usediv.innerHTML='';
                //if(ca.length == 0) {
                var divNode = d.createElement('div');
                usediv.appendChild(divNode);
                divNode.innerHTML = line;
                divNode.style.backgroundColor="#ECE9D8";

                usediv2 = d.createElement('div');
                usediv2.setAttribute('id',pid2);
                usediv.appendChild(usediv2);
                /*} else {
                    ca[0].innerHTML = line;
                    usediv2 = ca[1];
                    usediv2.setAttribute('id',pid2);
                } */
            } else {
                usediv2 = usediv.getElementById(pid2);
            }
            hideBar = true;
        }

    }
    // Dont resize root container
    //if((win<-1)&&(!pnn.fullscreen)) {
    //    if(mytable.useMdiv==null) {
    //        mytable.maintable.root.style.height = size.height+dobjt.offsetHeight+4+'px';
    //        mytable.maintable.root.style.width = size.width+2+'px';
    //    }
    //}

    dataArray = xar;

    pxar = xar[0] || null;

    if((ctype!=chartIsPivot)&&(mytable.a_cntl.showMenuBar)) {
        var noAgg = false;
        if(btypeArray.length==0)
            noAgg = true;
        build_chartdrop(mytable,pid,win,ibiSkin.cpopicon,sum_line,pn,ctype,subTable);
        if(!noAgg)
            sumprt='<table border=0 cellspacing=0><tr><td title="' + ibiMsgStr['agg'] + '">'+ibiSkin.sumicon+'<\/td><td style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+a_calc_all_types_display[btypeArray[0]]+'<\/td><\/tr><\/table>';
        else
            sumprt = '<table border=0 cellspacing=0 style="cursor:default;"><tr><td title="' + ibiMsgStr['agg'] + '">' + ibiSkin.sumicon + '<\/td><td style="white-space:nowrap;color:#8494a9;" valign="TOP" class="tabPagingText1">'+ibiMsgStr["none"]+'<\/td><\/tr><\/table>';
        build_chartagg(mytable, sid, win, sumprt, pn, ctype, subTable,noAgg);
    }

    if((do_msappexport)&&(mytable.a_cntl.showMenuBar)) {
        id='MSE_'+win;
        mseprt='<table border=0 cellspacing=0><tr><td style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+ibiMsgStr['mset']+'<\/td><\/tr><\/table>';
        build_chartMSexp(mytable,id,win,mseprt,sum_line);
    }

    var dmsg = '<table border=0 width="100%"><tr><td style="height:20px;"><\/td><\/tr>';
//    if(pn.saveable.y_cols.length==0) dmsg += '<tr><td align="center">'+ibiMsgStr['ngbmsg']+'<\/td><\/tr>';
//    if(pn.x_cols.length==0) dmsg += '<tr><td align="center">'+ibiMsgStr['naymsg']+'<\/td><\/tr>';
    dmsg += '<\/table>';
    //var pobj = d.getElementById(pied);
    if(pnn.fullscreen) {
        pied = usediv2;
        pien = 'Pietf'+table_number+'_'+subTable;
    } else
    if(win<0) {
        pied = usediv;
        pien = 'Piet'+table_number;
        if(isApi) {
            pied = usediv2;
            pien = 'Piet'+table_number+'_'+subTable;
        }

        if(mytable.a_cntl.heading) {
            /*if((ctype != 7) && (mytable.a_cntl.GraphEngine<2))*/
                ctitle = '<TABLE width="100%" BORDER=0 CELLSPACING=0 CELLPADDING=0>'+ibiGrid.buildHead(mytable.id,isHead,-1,-1)+'<\/TABLE>';
        /*    else 
                ctitle = ibiGrid.buildHead(mytable.id,isHead,-1,-1,0,true) */
        }
        if (mytable.a_cntl.footing) {
            cfoot = new ChartFooting(mytable.id);
        }
    } else {
        if((typeof(mytable.a_cntl.useDefaultHeading)!="undefined") && (!mytable.a_cntl.useDefaultHeading)) 
            ctitle = '<TABLE width="100%" BORDER=0 CELLSPACING=0 CELLPADDING=0>'+ibiGrid.buildHead(mytable.id,isHead,-1,-1)+'<\/TABLE>';
        pied = pn.dobj_b;
        if(mytable.a_cntl.WindowDisplay=="tab")    pied.style.height = csize.height+'px';
    }
    if((typeof pn.parms == "undefined")|| (pn.parms == null) ||
        (typeof pn.parms._chart == "undefined"))
        pied.innerHTML='';
    pn.id = pien;
    pn.window = win;
    var hasdata = (y_col.length>0 && x_col.length>0) || (x_col.length>0 && ctype==6) || (ctype == 4);
    if(ctype == 9)
        hasdata =  (tcont.length>0);
    if(hasdata && ctype!=4 && !doBucket)
        if ((pxar === null) || (pxar.length == 0) || ((ctype!=0)&&(dataArray[0].length == 0))) hasdata=false;
//    if((hasdata)&&(ctype==3)&&(x_col.length<2)) hasdata=false;
    stacked=pn.saveable.stacked?1:0;
    regression=pn.saveable.regression?0:1;
    filterChartOn=true;
    filterFunction='ibiChart.DoChartFilter(event,'+win+','+table_number+','+ctype+','+writeobjout(y_col,false)+','+writeobjout(x_col,false)+','+subTable;
    multiMarker = false;
    
    if((typeof(mytable.a_cntl.heading)=="undefined") || win > -1){
        var str = mytable.getReportStyle("STRING",ST_HEAD);
        ctitle = '<div '+str+'">'+ctitle+'<\/div>';
    }

    if(!hasdata) {
        hline='<div style="width:'+size.width+'px;height:'+size.height+'px;'+
            'background-color:#A0A0A0;">'+
            '<div style="position:absolute;top:40%;left:30%">'+ibiMsgStr['nodata']+'<\/div><\/div>';
        pied.innerHTML=hline;
    } else
    if((mytable.a_cntl.ibinotvalid)&&(ctype!=chartIsPivot)&&(ctype!=chartIsRmRoll)&&(ctype!=chartIsRoll)) {
    /*    var newid="rebody"+win;
        var hline='<div style="width:'+size.width+'px;height:'+size.height+'px;">'+
            '<div style="position:absolute;width:100%;height:100%;top:0;left:0;" '+
            'id="'+newid+'"><\/div>'+
            '<div style="position:absolute;top:40%;left:0;width:'+size.width+'px;"><span class="arAuthorizedMessage" style="width:'+size.width+'px;">'+ibiMsgStr['lic2']+'<\/span><\/div><\/div>';
        pied.innerHTML=hline;
        pied = d.getElementById(newid); */
        //if((mytable.a_cntl.GraphEngine<2))
            ctitle = '<TABLE style="width:'+size.width+'px;" border="0" cellspacing="0" cellpadding="0"><TR><TD>'+ctitle+'<\/TD><\/TR><TR><TD class="arAuthorizedMessage">'+ibiMsgStr['lic2']+'<\/TD><\/TR><\/TABLE>';
    }

    
    pn.saveable.btypeArray  = CopyArray(btypeArray);
    mytable.internalTitle = ctitle;
    var sa_chart = null;
    if(pn.parms && pn.parms._chart)
        sa_chart = pn.parms._chart;
    pn.parms = new Object();
    if(sa_chart != null)
        pn.parms._chart = sa_chart;
    pn.parms.pien = pien;
    pn.parms.pied = pied;
    pn.parms.pxar = pxar;
    pn.parms.yar = yar;
    pn.parms.car = car;
    pn.parms.ctitle = ctitle;
    pn.parms.cfoot = (cfoot) ? cfoot.htmlText : '';
    pn.parms.csize = csize;
    pn.parms.dataArray = dataArray;
    pn.parms.xtype = xtype;
    pn.parms.regression = regression;
    pn.parms.stacked = stacked;
    pn.parms.win = win;
    pn.parms.ibs = ibs;
    pn.parms.y_col = y_col;
    pn.parms.x_col = x_col;
    pn.parms.tcapt = tcapt;
    pn.parms.tlook = tlook;
    pn.parms.tcntl = tcntl;
    pn.parms.tcont = tcont;
    pn.parms.linked = linked;
    pn.parms.fctype = fctype;
    pn.parms.cctype = cctype;
    pn.parms.mytable = mytable;
    pn.parms.subTable = subTable;
    pn.parms.btypeArray = CopyArray(btypeArray);
    pn.parms.tctype = tctype;
    pn.parms.hideBar = hideBar;
    pn.parms.pvcol = pvcol;
    pn.parms.newcont_xcol = CopyArray(newcont_xcol);
    pn.parms.newcont_ycol = CopyArray(newcont_ycol);
    var pfjScript = null;

    if(typeof(mytable.a_cntl.tdgScript)!="undefined") 
        pfjScript = mytable.a_cntl.tdgScript;

    if(win>-1) pwn[win].pn = pn;
    else mytable.pn = pn;
    var labels = [];
    var dataProvider;

    if (resizeInfo) {
        resizeInfo.menuDiv = dobjt;
        resizeInfo.containerId = pien;
        resizeInfo.setupEvent = false;
/*
        if ((cctype !== chartIsFusion) && (resizeInfo.vMargins === 0)) {
            resizeInfo.vMargins = (b_ie && !cfoot && (arGraphEngine == arGraphEngineJSCHART))
                                  ? resizeInfo.vMarginsDefault / 2 : resizeInfo.vMarginsDefault;
        }
*/
        if (ibiCompound.layoutIsOn == false) { resizeInnerDiv(); }
    }

    if(hasdata) {
        var xnames = [];
        var ynames = [];
        xc = newcont_xcol;
        yc = newcont_ycol;

        for (i = 0; i < xc.length; i++) {
            if(!tcapt[i+yc.length].b_hide) {
                xnames[xnames.length] = btypeArray[i]+'.'+mytable.a_cntl.a_cols[xc[i]].name;
                labels[i] = mytable.a_cntl.a_cols[xc[i]].name;
                if (mytable.a_cntl.chartAggregate) {
                    labels[i] += '(' + a_calc_all_types[btypeArray[i]] + ')';
                }
            }
        }
        for (i = 0; i < yc.length; i++) {
            if (!tcapt[i].b_hide) {
                ynames[ynames.length] = mytable.a_cntl.a_cols[yc[i]].name;
            }
        }
                
        if(fctype != "GRID") {
            if(doBucket) {
                var copy_bucket = ibiStd.copyObject(tcntl.buckets);
                dataProvider = generateBucketDataProvider(copy_bucket, yc, xc, mytable, tcont, tcapt, tcntl, ibs, btypeArray, charttype, info);
            } else
            if(doGrMerge)
                dataProvider = generateAdvancedDataProvider(yc,xc,mytable,tcont,ibs,btypeArray,tcntl.graphMulti,tcntl.graphLegend,tcntl.graphAxis,charttype,tcapt);
            else {
                dataProvider = generateFlatDataProvider(yc,xc,mytable,tcont,ibs,btypeArray,tcapt);
                if ((grmSet === 0) && (tcntl.graphMulti > 0)) {
                    dataProvider.removeSetTitle = true;
                }
            }
        }
        
        if (!pnn.fullscreen && cctype == chartIsTDG && csize.height != size.height) {
            pied.style.overflow = "hidden";
            csize.height = size.height;
            if (ctitle) {
                var msize = measureText(ctitle);
                csize.headingHeight = msize.height;
            }
        }

        if(dobjt) {
            dobjt.style.width = csize.width - 
               (tblCntl.margin ? (tblCntl.margin[1] + tblCntl.margin[3]) : 0) + "px";
            //dobjt.style.left = "0px";
            //dobjt.style.right ="0px";
        }

        if((makeChartExternal!=null)&&(cctype!=8)&&(cctype!=4)&&(cctype!=5)&&(cctype!=6)) {
            pied.style.width = csize.width+'px';
            pied.style.height = csize.height+'px';
            makeChartExternal(cctype,pied,dataProvider,xnames,ynames,car,ctitle);
        } else
        switch(cctype){
            case 0:drawPieChart(pien,pied,pxar,yar,car,'Arial',1,ctitle,csize,cfoot,resizeInfo);break;
            case 1:drawLineChart(pien,pied,dataArray,pn.yart,yar,car,'Arial',ctitle,csize, null, null, null, null,pn.xaxisFunction,pn.yaxisFunction,cfoot,resizeInfo);break;
            case 2:drawBarChart(pien,pied,dataArray,pn.yart,yar,car,'Arial',ctitle,csize,null,null,stacked,pn.xaxisFunction,pn.yaxisFunction,cfoot,resizeInfo);break;
            case 3:
                var tempDataArray = [];
    
                for ( var m=0; m<dataArray.length; m++ )
                         {
                                tempDataArray[m] = CopyArray(dataArray[m]);
                         }
                drawScatChart(pien,pied,tempDataArray,pn.yart,car,'Arial',ctitle,csize,null,xtype,regression,pn.xaxisFunction,pn.yaxisFunction,cfoot,resizeInfo);break;
            case 4:drawRollTable(pien,pied,tcapt,tcont,tlook,tcntl,mytable.a_cntl.table_number,ctitle,win,ibs,false,4);break;
            case 5:
                if(hasBuckets)
                    ibiPivot.DrawPivotGrid(pien,pied,tcapt,tcont,tlook,tcntl,mytable.a_cntl.table_number,ctitle,win,ibs,tcntl.buckets,btypeArray,linked,subTable,hideBar,cfoot);
                else
                    ibiPivot.DrawPivotTableComp(pien,pied,tcapt,tcont,tlook,tcntl,mytable.a_cntl.table_number,ctitle,win,ibs,pvcol,y_col.length,btypeArray,y_col,linked,subTable,hideBar);
                break;
            case 6:mytable.useReport = drawRollTable(pien,pied,tcapt,tcont,tlook,tcntl,mytable.a_cntl.table_number,ctitle,win,ibs,false,6);
                break;
            case 7:ibiFusionCharts.drawChart(fctype,pien,pied,dataProvider,xnames,ynames,labels,pn.yart,yar,car,'Arial',ctitle,csize,mytable.a_cntl.GraphEngine,mytable.a_cntl.FocexUrl,regression,mytable,cfoot,resizeInfo);break;
            case 8:drawGoogleMap(pien,pied,dataArray,pn.yart,yar,car,'Arial',ctitle,csize);break;
            case 9:ibiTDGCharts.drawChart(pn.parms,fctype,pied,csize,dataProvider,xnames,ynames,labels,car,ctitle,pfjScript,mytable.a_cntl.jschartScript,mytable.myjsScript,false,((pn.saveable.org_ibiChart == fctype) && (mytable.a_cntl.graphLook != "NONE"))?pn.saveable.fromGraph:false,regression,mytable.a_cntl.FocexUrl,cfoot,null
                                            ,resizeInfo,mytable.a_cntl.jsonProps,mytable.a_cntl.graphProps,mytable.a_cntl.graphFinalProps);break;
        }
        if((cctype==7)||(cctype==9))
            pn.parms.chartRedraw = function(pn) {
                ibiChart.makeChartRedraw(pn);
            };
    } else
    if(hasBuckets) {
        dataProvider = {
            "type" : "buckets",
            "chartType": "bar",
            "series": [ { series: 'all', tooltip: 'auto' } ],
            "groupLabels": null,
            "legend": null,
            "data": [],
            "dataArrayMap": [],
            "colorScale": null,
            "numRecords": 0,
            "buckets": ibiStd.copyObject(tcntl.buckets)
        };
        var myjsScript = {
            "title" : {"text": ""},
            "errorMessage": ibiMsgStr["nodatagraph"]
        };
        ibiTDGCharts.drawChart(pn.parms,fctype,pied,csize,dataProvider,xnames,ynames,labels,car,ctitle,pfjScript,mytable.a_cntl.jschartScript,myjsScript,false,(pn.saveable.org_ibiChart == fctype)?pn.saveable.fromGraph:false,regression,mytable.a_cntl.FocexUrl,cfoot,null
            ,resizeInfo,mytable.a_cntl.jsonProps,mytable.a_cntl.graphProps,mytable.a_cntl.graphFinalProps);
    }
    filterChartOn=false;
    filterFunction=null;    
    if(ctype != 6) {
        var pmytable = mytable;
        if(mytable.isRollUp) {
            pmytable = getMyTable(mytable.parent_table);
        }
        if((win>-1)&&(pmytable.a_cntl.WindowDisplay!='tab')) maxwin(win);
        if((!reset)&&(pmytable.a_cntl.WindowDisplay!='cascade'))
            displayTab(pmytable.a_cntl.WindowDisplay,pmytable.a_cntl.table_number,win);
    }
    if((mytable.showChartFunc)&&(mytable.fullScreenOn)) mytable.showChartFunc(pn,true);
    if(mytable.showReportRendered) {
        mytable.showReportRendered = false;
        var container = document.getElementById("MAINTABLE_reportContainer"+mytable.id);
        mytable.menuReporthandle.deleteJsonReport();
        if(container.style.zIndex > -1)
            mshowReport(mytable.id,true);
    }

}

function generateFlatDataProvider(yc,xc,mytable,tcont,ibs, btypeArray,tcapt)
{
    var dataProvider = [];
    var xcolname, j, idxToName;
    for(var i=0; i<tcont.length; i++) {
        dataProvider[i] = new Object;
        if(tcont[i][0][5])
            dataProvider[i].ibiHighLightChartRecord = true;
        else
            dataProvider[i].ibiHighLightChartRecord = false;
        dataProvider[i].originalLines = tcont[i][0][DORGLINE];
        for (j = 0; j < xc.length; j++) {
            if(!tcapt[j+yc.length].b_hide) {
                xcolname =  btypeArray[j]+'.'+mytable.a_cntl.a_cols[xc[j]].name;
                dataProvider[i][xcolname] = ibs[tcont[i][j+yc.length][DARAW]];
                if(tcapt[j+yc.length].type==IBINUM) {
                    if(dataProvider[i][xcolname]=="")
                        dataProvider[i][xcolname] = 0;
                    else
                    if(typeof(dataProvider[i][xcolname]) != "undefined")
                        dataProvider[i][xcolname] =
                              dataProvider[i][xcolname] * 1;
                } else
                if(tcapt[j+yc.length].type==IBIDATE) {
                    dataProvider[i][xcolname] = ibs[tcont[i][j + yc.length][DASTR]];
                    if (!(btypeArray[j] == 'COU' || btypeArray[j] == 'DIS')) {
                        dataProvider[i][xcolname] += '';
                    }
                }
            }
        }
        for (j = 0; j < yc.length; j++) {
            if(!tcapt[j].b_hide) {
                idxToName = tcont[i][j][DARAW];
                if (idxToName == arConstants.MISSING_OR_NODATA) {
                    idxToName = tcont[i][j][DASTR];
                }
                dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = ibs[idxToName];
                if(tcapt[j].type==IBINUM) {
                    if(dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name]=="")
                        dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = 0;
                    else 
                    if(typeof(dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name]) != "undefined")
                        dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = 
                              dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] * 1;
                } else
                if(tcapt[j].type==IBIDATE) {
                    dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = ibs[tcont[i][j][DASTR]]+'';
                }
            }
        }
    }
    return dataProvider;
}
    
    function getSeries(array,series)
    {
        for(var i=0; i< array.length; i++) {
            if(array[i].series == series) return array[i];
        }
        return null;
    }
    
    
function generateBucketDataProvider(ibuckets,yc,xc,mytable,ptcont,tcapt1,tcntl1,ibs, btypeArray,chartTypeName,info)
{
    var dataProvider = {'type':'buckets','data':[],'dataArray':[],'groupLabels':[],'series':null};
    var i, j, k;
    var tcntl = ibiStd.copyObject(tcntl1);
    var groupLabels = [""];
    var SgroupLabels = [""];
    var series;
    var bucketForFilter;
    var bycol = -1;
    var xaxis=null,yaxis=null,zaxis=null;
    var matrixProperties = null;
    var dataGridProperties;
    var gbucket;
    var colorScale = null;
    var vs;
    var jj,cc,count;
    var r,c,x;
    var rowM,colM,groupM;
    var jsonObj;
    var legend = null;
    var extraProps=null;
    var ybucket = [];
    var xbucket = [];
    var colorbucket;
    var firstColor = 0;
    var dataPageSlider = null;
    var notLatLongMap = true;
    var tcont = ptcont;
    var numRecords;
    var data;
    var pdata;
    var dataArrayMap;
    var s1,s2;
    var jsObj1,jsObj2;
    var saveTooltip;
    var buckets = ibiStd.copyObject(ibuckets);
    var tcapt = ibiStd.copyObject(tcapt1);
    var chartType;
    var dataBuckets = null;
    var emptyObject = function(u) {
        j = 0;
        for (var i in u) {
            if(typeof u[i] != "function")
            j++;
        }
        if (j == 0)
            return true;
        else
            return false;
    }
    for(i=0; i < tcapt.length; i++)
        if(tcapt[i].isby && tcapt[i].type == IBINUM) {
            tcapt[i].type = IBISTR;
            tcapt[i].realType = IBINUM;
        }

    var getGroup = function(array,group)
    {
        for(var i=0; i< array.length; i++) {
            if(array[i].group == group) return array[i];
        }
        return null;
    };

    buckets['VIRTFIELD'] = null;
    if(tcntl.hasVirtBuckets) {
        buckets['VIRTFIELD'] = tcntl.vbuckets;

        if(chartTypeName == "extension") {
            var inFields = [];
            for(i in tcntl.vbuckets)
                inFields = inFields.concat(tcntl.vbuckets[i]);
            for(i=0; i < tcapt.length; i++) {
                if(i in inFields) {
                    if(tcapt[i].isby) {
                        if(!inarray(buckets["X-AXIS"],i,false))
                            buckets["X-AXIS"][buckets["X-AXIS"].length] = i;
                    }  else {
                        if(!inarray(buckets["Y-AXIS"],i,false))
                            buckets["Y-AXIS"][buckets["Y-AXIS"].length] = i;
                    }
                }
            }

        }
    }

    for(i=0; i < tdginfo.knownBuckets.length; i++)
        if(typeof buckets[tdginfo.knownBuckets[i]] == "undefined")
            buckets[tdginfo.knownBuckets[i]] = [];

    //empty report;
    /*
    if(tcont.length==0) {
        //dataProvider.xaxis = xaxis;
        //dataProvider.yaxis = yaxis;
        dataProvider.numRecords = 0;
        dataProvider.buckets = ibiStd.copyObject(buckets);
        return dataProvider;
    }
    */
    dataProvider.chartType = info.base;
    chartType = info.base;
    if(chartType=="map" && chartTypeName=="choropleth")
        chartType = chartTypeName;
    dataProvider.tooManyDataPoints = false;


    jsonObj = ibiStd.copyObject(tdginfo[info.chartProps]);
    if(typeof(info.chartPropsExtra)!="undefined")
        extraProps = tdginfo[info.chartPropsExtra];
    if(extraProps)
        ibiStd.mergeObject(jsonObj,extraProps);


    if((typeof(tcntl.jschartScript)!="undefined") && (tcntl.jschartScript!=null)) {
        try {
            jsObj1 = eval("({"+tcntl.jschartScript+"})");
        } catch(e) {
            jsObj1 = {};
        }
    } else jsObj1 = {};

    if(typeof(tcntl.graphProps) != "undefined") {
        for (j = 0; j < tcntl.graphProps.length; j++) {
            if (tcntl.graphProps[j].json) {
                var js = {};
                try {
                    js = eval('({' + tcntl.graphProps[j].json + '})');
                } catch (e) {
                    js = {};
                }
                ibiStd.mergeObject(jsObj1, js);
            }
        }
    }

    if(typeof(tcntl.jsonProps)!="undefined") {
        try {
                jsObj2 = eval("({"+tcntl.jsonProps+"})");
        } catch(e) {
                jsObj2 = {};
        }
    } else jsObj2 = {};

    if(jsObj1.xaxis) {
        if(xaxis==null)
            xaxis = {};
        xaxis = ibiStd.mergeObject(xaxis,jsObj1.xaxis);
    }
    if(jsObj2.xaxis) {
        if(xaxis==null)
            xaxis = {};
        xaxis = ibiStd.mergeObject(xaxis,jsObj2.xaxis);
    }

    if(jsObj1.yaxis) {
        if(yaxis==null)
            yaxis = {};
        yaxis = ibiStd.mergeObject(yaxis,jsObj1.yaxis);
    }
    if(jsObj2.yaxis) {
        if(yaxis==null)
            yaxis = {};
        yaxis = ibiStd.mergeObject(yaxis,jsObj2.yaxis);
    }

    if(jsObj1.zaxis) {
        if(zaxis==null)
            zaxis = {};
        zaxis = ibiStd.mergeObject(zaxis,jsObj1.zaxis);
    }
    if(jsObj2.zaxis) {
        if(zaxis==null)
            zaxis = {};
        zaxis = ibiStd.mergeObject(zaxis,jsObj2.zaxis);
    }

    if (jsObj1.legend) {
        if (legend == null)
            legend = {};
        legend = ibiStd.mergeObject(legend, jsObj1.legend);
    }
    if (jsObj2.legend) {
        if (legend == null)
            legend = {};
        legend = ibiStd.mergeObject(legend, jsObj2.legend);
    }

    dataGridProperties = {
        "colHeader":{},
        "rowHeader":{},
        "cell":{},
        "columnTotals":{},
        "rowTotals":{}
    };
    if(jsObj1.dataGridProperties) {
        if(jsObj1.dataGridProperties.colHeader) {
            dataGridProperties.colHeader = ibiStd.copyObject(jsObj1.dataGridProperties.colHeader);
            delete dataGridProperties.colHeader.labels;
        }
        if(jsObj1.dataGridProperties.rowHeader) {
            dataGridProperties.rowHeader = ibiStd.copyObject(jsObj1.dataGridProperties.rowHeader);
            delete dataGridProperties.rowHeader.labels;
        }
        if(jsObj1.dataGridProperties.cell)
            dataGridProperties.cell = ibiStd.copyObject(jsObj1.dataGridProperties.cell);
        if(jsObj1.dataGridProperties.columnTotals)
            dataGridProperties.columnTotals = ibiStd.copyObject(jsObj1.dataGridProperties.columnTotals);
        if(jsObj1.dataGridProperties.rowTotals)
            dataGridProperties.rowTotals = ibiStd.copyObject(jsObj1.dataGridProperties.rowTotals);
    }
    if(jsObj2.dataGridProperties) {
        if(jsObj2.dataGridProperties.colHeader) {
            dataGridProperties.colHeader = ibiStd.mergeObject(dataGridProperties.colHeader,jsObj2.dataGridProperties.colHeader);
            delete dataGridProperties.colHeader.labels;
        }
        if(jsObj2.dataGridProperties.rowHeader) {
            dataGridProperties.rowHeader = ibiStd.mergeObject(dataGridProperties.rowHeader,jsObj2.dataGridProperties.rowHeader);
            delete dataGridProperties.rowHeader.labels;
        }
        if(jsObj2.dataGridProperties.cell)
            dataGridProperties.cell = ibiStd.mergeObject(dataGridProperties.cell,jsObj2.dataGridProperties.cell);
        if(jsObj2.dataGridProperties.columnTotals)
            dataGridProperties.columnTotals = ibiStd.mergeObject(dataGridProperties.columnTotals,jsObj2.dataGridProperties.columnTotals);
        if(jsObj2.dataGridProperties.rowTotals)
            dataGridProperties.rowTotals = ibiStd.mergeObject(dataGridProperties.rowTotals,jsObj2.dataGridProperties.rowTotals);
    }
    var maxRecords = 0;
    if(jsonObj.activeProps)
        if(jsonObj.activeProps.maxRecords) {
            maxRecords = jsonObj.activeProps.maxRecords;
            if(buckets.COLUMN.length || buckets.ROW.length)
                maxRecords = maxRecords * 4;
            if (maxRecords < tcont.length) {
                dataProvider.tooManyDataPoints = true;
                tcont = [];
                for (i = 0; i < maxRecords; i++)
                    tcont[i] = ptcont[i];
            }
        }

    if(btypeArray) {
        if (btypeArray.length) {
            if (btypeArray[0] == "NONE") {
                var inlist = {};
                for(i=0; i<ibs.length; i++)
                    inlist[ibs[i]] = i;

                var pos = 0;
                for(i=0; i < tcapt.length; i++)
                    if(tcapt[i].isby)
                        pos = i+1;

                var newTcont = ibiStd.copyObject(tcont);
                for (i = 0; i < newTcont.length; i++) {
                    if(typeof inlist[i] == "undefined" ) {
                        inlist[i] = ibs.length;
                        ibs[ibs.length] = i;
                    }
                    newTcont[i].splice(pos, 0, [inlist[i],inlist[i],newTcont[i][pos-1][2]]);
                }
                tcont = newTcont;

                // move fields in buckets by one
                for (i in buckets)
                    if(buckets[i] != null)
                        for (j = 0; j < buckets[i].length; j++)
                            if(buckets[i][j]>=pos)
                                buckets[i][j]++;

                var newTcapt = ibiStd.copyObject(tcapt);
                newTcapt.splice(pos,0,{
                    'b_hide': true,
                    'noprint': true
                });
                buckets["X-AXIS"].splice(buckets["X-AXIS"].length,0,pos);
                tcapt = newTcapt;

                tcntl.a_cols.splice(pos,0,{
                    'dis':"noprint",
                    'qualname':"noprint",
                    'field':"noprint"
                });

            }
        }
    }

    numRecords = tcont.length;
    if(buckets['Y-AXIS'].length)
        ybucket = buckets['Y-AXIS'];
    else {
        if(buckets['MEASURE'].length)
            ybucket = buckets['MEASURE'];
        if (buckets['SIZE'].length && (chartType == "treemap" || chartType == "marker" || chartType == "tagcloud" ))
            ybucket = buckets['SIZE'];
        if(buckets['LOCATION'].length)
            ybucket = buckets['LOCATION'];
        if(buckets['LATITUDE'].length) {
            ybucket = buckets['LATITUDE'];
            notLatLongMap = false;
        }
    }

    colorbucket = buckets['COLOR'];
    var sizebucket = buckets['SIZE'];
    var detailbucket = buckets['DETAIL'];

    if(buckets['X-AXIS'].length)
        xbucket = buckets['X-AXIS'];
    else {
        if (buckets['COLOR'].length && (chartType == 'pie' || chartType == 'treemap' || chartType == 'funnel' || chartType == 'pyramid'))
            xbucket = colorbucket;
        if (buckets['DETAIL'].length && (chartType == 'tagcloud'))
            xbucket = detailbucket;
        if(buckets['LONGITUDE'].length) {
            notLatLongMap = false;
            xbucket = buckets['LONGITUDE'];
        }
    }

    //if((chartType == "choropleth") && (sizebucket.length==0) && (colorbucket.length)) {
    //    sizebucket = buckets['COLOR'];
    //    colorbucket = [];
    //}

    c = 0;
    for(i=0; i < xbucket.length; i++) {
        if(tcapt[xbucket[i]].noprint)
            continue;
        c++;
        if(xaxis==null)
            xaxis = {};
        if(!xaxis.title)
            xaxis.title = {};
        xaxis.title.visible=true;
        if(c == 1)
            xaxis.title.text = ibiChart.stripComma(tcntl.a_cols[xbucket[i]].dis);
        else
        if(c>1)
            xaxis.title.text += ' : '+ibiChart.stripComma(tcntl.a_cols[xbucket[i]].dis);
        xaxis.ibiDataField = tcapt[xbucket[i]].dataField;
    }

    c = 0;
    for(i=0; i < ybucket.length; i++) {
        if(tcapt[ybucket[i]].noprint)
            continue;
        c++;
        if(yaxis==null)
            yaxis = {};
        if(!yaxis.title)
            yaxis.title = {};
        yaxis.title.visible=true;
        if(c==1)
            yaxis.title.text = ibiChart.stripComma(tcntl.a_cols[ybucket[i]].dis);
        else
            yaxis.title.text='';
        if(c==1) {
            yaxis.ibiDataField = tcapt[ybucket[i]].dataField;
            if(chartType=='treemap')
                yaxis.mode = 'color';
        }
    }

    series = [];
    series[0] = {};
    if(jsObj1.series) {
        s1 = getSeries(jsObj1.series,'all');
        ibiStd.mergeObject(series[0],s1);
    }
    if(jsObj2.series) {
        s2 = getSeries(jsObj2.series,'all');
        ibiStd.mergeObject(series[0],s2);
    }

    series[0].series = "all";
    saveTooltip = null;
    if(series[0].tooltip)
        saveTooltip = series[0].tooltip;

    var yb = ybucket;
    if(yb.length == 0)
        yb = [-1];
    if(((chartType == "bubblemap") || (chartType == "choropleth") || (chartType == "map"))&& (sizebucket.length)) {
        yb = sizebucket;
    }
    for (i = 0; i < yb.length; i++) {
        j = series.length;
        series[j] = {};
        s1 = null;
        s2 = null;
        if(jsObj1.series) {
            s1 = getSeries(jsObj1.series,i);
        ibiStd.mergeObject(series[j],s1);
        }
        if(jsObj2.series) {
            s2 = getSeries(jsObj2.series,i);
        ibiStd.mergeObject(series[j],s2);
        }

        series[j].series = i;
        if((yb[i]!=-1) && !((chartType == "map") && (sizebucket.length)))
            series[j].label = tcntl.a_cols[yb[i]].name;
        if(!series[j].tooltip) {
            if(saveTooltip)
                series[j].tooltip = ibiStd.copyObject(saveTooltip);
            else
                series[j].tooltip = '';
        } else
        saveTooltip = series[j].tooltip;
        series[j].visible = true;
        if ((yb[i]!=-1)&&(tcapt[yb[i]].noprint))
            series[j].visible = false;
    }

    if(sizebucket.length) {
        if(zaxis == null)
            zaxis = {};
        if(!zaxis.title)
            zaxis.title = {};
        zaxis.title.visible = true;
        zaxis.title.text = ibiChart.stripComma(tcntl.a_cols[sizebucket[0]].dis);
    } else
    if(chartType == "heatmap"  && buckets["Y-AXIS"].length) {
        if (zaxis == null)
            zaxis = {};
        if (!zaxis.title)
            zaxis.title = {};
        zaxis.title.visible = true;
        zaxis.title.text = ibiChart.stripComma(tcntl.a_cols[buckets["Y-AXIS"][0]].dis);
    }


    var sliderCount = -1;
    if(buckets.SLIDER.length) {
        dataPageSlider = {labels:[]};
        dataPageSlider.labels = bucketCompressToArray(genNestedBucket(buckets.SLIDER,tcapt,tcont,ibs,dosort,true));
        sliderCount = dataPageSlider.labels.length;

    }
    //if(chartType == "bubblemap")
    //    series = null;

    bucketForFilter = ibiStd.copyObject(xbucket);
    var bff = [];
    for(j=0; j < bucketForFilter.length; j++) {
        if((!tcapt[bucketForFilter[j]].noprint) || (tcapt[bucketForFilter[j]].type != IBINUM)) {
            bff = bucketForFilter[j];
        }
    }
    bucketForFilter = bff;

    if(chartType == "datagrid") {
        var fixDGHeader = function(label) {
            for(var i=0; i < label.length; i++) {
                if(typeof label[i] == "object") {
                    for(var j in label[i])
                        fixDGHeader(label[i][j]);
                } else {
                    var n = label[i];
                    label[i] = {};
                    label[i][n] = [" "];
                }
            }
        };
        var ii;
        if(buckets.ROW.length) {
            if(typeof dataGridProperties.rowHeader == "undefined")
            dataGridProperties.rowHeader={};
            dataGridProperties.rowHeader.title = {};
            dataGridProperties.rowHeader.title.text = [];
            ii = 0;
            for(i=0; i < buckets['ROW'].length; i++)
                if(!tcapt[buckets['ROW'][i]].noprint)
                    dataGridProperties.rowHeader.title.text[ii++] = ibiChart.stripComma(tcntl.a_cols[buckets['ROW'][i]].dis);
            dataGridProperties.rowHeader.labels = {};
            dataGridProperties.rowHeader.labels.content_ibi = genNestedBucket(buckets['ROW'], tcapt, tcont, ibs, true, true,true);
            dataGridProperties.rowHeader.labels.content = genNestedBucketRemoveNP(dataGridProperties.rowHeader.labels.content_ibi,buckets['ROW'], tcapt);
        }
        if(buckets['COLUMN'].length) {
            if(typeof dataGridProperties.colHeader == "undefined")
            dataGridProperties.colHeader={};
            dataGridProperties.colHeader.title = {};
            dataGridProperties.colHeader.title.text = [];
            ii = 0;
            for(i=0; i < buckets['COLUMN'].length; i++)
                if(!tcapt[buckets['COLUMN'][i]].noprint)
                    dataGridProperties.colHeader.title.text[ii++] = ibiChart.stripComma(tcntl.a_cols[buckets['COLUMN'][i]].dis);
            dataGridProperties.colHeader.labels = {};
            dataGridProperties.colHeader.labels.content_ibi = genNestedBucket(buckets['COLUMN'], tcapt, tcont, ibs, true, true,true);
            dataGridProperties.colHeader.labels.content = genNestedBucketRemoveNP(dataGridProperties.colHeader.labels.content_ibi ,buckets['COLUMN'],tcapt);
            if(ybucket.length == 0)
                fixDGHeader(dataGridProperties.colHeader.labels.content)
        }
        if((ybucket.length == 0) && (typeof dataGridProperties.colHeader != "undefined")) {
            //dataGridProperties.colHeader.sorting = {'enabled':false};
        }
        if(ybucket.length) {
            var bc = [];
            for(i=0; i < ybucket.length; i++)
                 bc[i] = tcntl.a_cols[ybucket[i]].name;
            if(typeof dataGridProperties.colHeader == "undefined")
                dataGridProperties.colHeader={};
            if(typeof dataGridProperties.colHeader.labels == "undefined") {
                dataGridProperties.colHeader.labels = {};
                dataGridProperties.colHeader.labels.content = bc;
            } else {
                var addColNames = function(content,names) {
                    if(typeof content[0] == "string") {
                        for (var k = 0; k < content.length; k++) {
                            var val = content[k];
                            content[k] = {};
                            content[k][val] = names;
                        }
                    } else {
                        for (var i = 0; i < content.length; i++) {
                            for (var j in content[i])
                                addColNames(content[i][j],names);
                        }
                    }
                };
                addColNames(dataGridProperties.colHeader.labels.content,bc)

            }
        }
    } else
    if (buckets.COLUMN.length || buckets.ROW.length) {
        dataProvider.chartType = 'matrix';
        matrixProperties = {'chartType': chartType};

        if(buckets.COLUMN.length) {
            matrixProperties.colHeader = {'text': ''};
            for(j=0; j < buckets.COLUMN.length; j++) {
                if(matrixProperties.colHeader.text != '')
                    matrixProperties.colHeader.text += " : ";
                if(!tcapt[buckets['COLUMN'][j]].noprint)
                    matrixProperties.colHeader.text += ibiChart.stripComma(tcntl.a_cols[buckets['COLUMN'][j]].dis);
            }
            matrixProperties.colLabels = {};
            matrixProperties.colLabels.labels = genNestedBucket(buckets['COLUMN'],tcapt,tcont,ibs,true,true);
        }

        if(buckets.ROW.length) {
            matrixProperties.rowHeader = {'text': ''};
            for(j=0; j < buckets.ROW.length; j++) {
                if(matrixProperties.rowHeader.text != '')
                    matrixProperties.rowHeader.text += " : ";
                if(!tcapt[buckets['ROW'][j]].noprint)
                    matrixProperties.rowHeader.text += ibiChart.stripComma(tcntl.a_cols[buckets['ROW'][j]].dis);
            }
            matrixProperties.rowLabels = {};
            matrixProperties.rowLabels.labels = genNestedBucket(buckets['ROW'],tcapt,tcont,ibs,true,true);
        }
    }

    /* process color by */

    if(colorbucket.length) {
        firstColor = 0;
        for(j=0; j<colorbucket.length; j++) {
            if(!tcapt[colorbucket[j]].noprint) {
                firstColor = j;
                break;
            }
        }

        if ((chartType != "marker") && (tcapt[colorbucket[firstColor]].isby)) {
            bycol = colorbucket[firstColor];
            series = [];
            series[0] = {};
            saveTooltip = null;
            if (jsObj1.series) {
                s1 = getSeries(jsObj1.series, 'all');
                ibiStd.mergeObject(series[0], s1);
            }
            if (jsObj2.series) {
                s2 = getSeries(jsObj2.series, 'all');
                ibiStd.mergeObject(series[0], s2);
            }
            series[0].series = "all";
            if (series[0].tooltip)
                saveTooltip = series[0].tooltip;
            var cSeries = genNestedBucket(colorbucket, tcapt, tcont, ibs, true, true);
            cSeries = genNestedBucketRemoveNP(cSeries,colorbucket,tcapt);
            cc = 1;
            for (j = 0; j < cSeries.length; j++) {
                vs = cSeries[j];
                count = 1;
                if (ybucket.length > 1)
                    count = ybucket.length;
                for (jj = 0; jj < count; jj++) {
                    var addlabel = "";
                    if ((count > 1) && ybucket.length)
                        addlabel = tcntl.a_cols[ybucket[jj]].name + ':';
                    series[cc] = {};
                    s1 = null;
                    s2 = null;

                    if (jsObj1.series) {
                        s1 = getSeries(jsObj1.series, cc-1);
                        ibiStd.mergeObject(series[cc], s1);
                    }
                    if (jsObj2.series) {
                        s2 = getSeries(jsObj2.series, cc-1);
                        ibiStd.mergeObject(series[cc], s2);
                    }
                    series[cc].series = cc-1;
                    //series[i].label =  ibs[tcont[j][bycol][DASTR]]+"";
                    series[cc].label = addlabel +  vs;
                    series[cc].ibiDataValue = addlabel + vs;
                    if (!series[cc].tooltip) {
                        if (saveTooltip)
                            series[cc].tooltip = ibiStd.copyObject(saveTooltip);
                        else
                            series[cc].tooltip = '';
                    } else
                        saveTooltip = series[cc].tooltip;
                    cc++;
                }
            }
        }
    }

    if (jsObj1.colorScale || jsObj2.colorScale) {
        colorScale = {};
        if (jsObj1.colorScale)
            colorScale = ibiStd.mergeObject(colorScale,jsObj1.colorScale);
        if (jsObj2.colorScale)
            colorScale = ibiStd.mergeObject(colorScale,jsObj2.colorScale);
        if(colorbucket.length) {
            if (!colorScale.title)
                colorScale.title = {};
            colorScale.title.visible = true;
            colorScale.title.text = ibiChart.stripComma(tcntl.a_cols[colorbucket[firstColor]].dis);
            if(legend != null) {
                if (!legend.title)
                    legend.title = {};
                legend.title.text = ibiChart.stripComma(tcntl.a_cols[colorbucket[firstColor]].dis);
            }
        }
    }


    /* process group Labels */
    var ub = colorbucket;
    var dosort = false;
    var ybg = null;
    var groupLabelsFormated = null;
    if(matrixProperties || (colorbucket && colorbucket.length))
        dosort = true;
    if(xbucket.length) {
        //if(tcapt[xbucket[0]].type != "IBINUM")  {
        groupLabels = genNestedBucket(xbucket,tcapt,tcont,ibs,dosort,true);
        groupLabelsFormated = genNestedBucket(xbucket, tcapt, tcont, ibs, dosort, true,true);
        ub = xbucket;
        gbucket = xbucket;
        //}
    } else
    if(ybucket.length && ((chartType == "bubblemap") || (chartType == "choropleth") || (chartType == "map"))) {
        //if(tcapt[ybucket[0]].type != "IBINUM")  {
        if(ybg != null)
            groupLabels = ybg;
        else {
            groupLabels = genNestedBucket(ybucket,tcapt,tcont,ibs,dosort,true);
            groupLabelsFormated = genNestedBucket(ybucket, tcapt, tcont, ibs, dosort, true,true);
        }
        ybg = groupLabels;
        ub = ybucket;
        gbucket = ybucket;
        //}
    }

    var seriesLabels = groupLabels;

    if(chartType == "heatmap") {
        if (ybucket.length) {
            if(ybg != null)
                seriesLabels = ybg;
            else
                seriesLabels = genNestedBucket(ybucket,tcapt,tcont,ibs,dosort,true);
            ybg = seriesLabels;
            ub = ybucket;
        } else {
            //if(colorbucket.length)
            //    seriesLabels = [tcntl.a_cols[colorbucket[0]].name];
            seriesLabels = [" "];
        }
    }
    if (((chartType == "pie") || (chartType == "heatmap") || (chartType == 'funnel')  || (chartType == 'pyramid')
        //|| (chartType == "tagcloud")
        ) && seriesLabels) {
        series = [];
        series[0] = {};
        if(jsObj1.series) {
            s1 = getSeries(jsObj1.series,'all');
            ibiStd.mergeObject(series[0],s1);
        }
        if(jsObj2.series) {
            s2 = getSeries(jsObj2.series,'all');
            ibiStd.mergeObject(series[0],s2);
        }
        series[0].series = "all";
        if(ub.length)
            seriesLabels = bucketCompressToGroupLabels(seriesLabels,tcapt,ub,0);
        for(i=0; i < seriesLabels.length; i++) {
            j = series.length;
            series[j] = {};
            if(jsObj1.series) {
                s1 = getSeries(jsObj1.series,i);
                ibiStd.mergeObject(series[j],s1);
            }
            if(jsObj2.series) {
                s2 = getSeries(jsObj2.series,i);
                ibiStd.mergeObject(series[j],s2);
            }
            if(!s1 && !s2) {
                if(jsObj1.series) {
                    s1 = getSeries(jsObj1.series,0);
                    ibiStd.mergeObject(series[j],s1);
                }
                if(jsObj2.series) {
                    s2 = getSeries(jsObj2.series,0);
                    ibiStd.mergeObject(series[j],s2);
                }
                delete series[j].color;
            }
            series[j].series = i;
            series[j].ibiDataValue = seriesLabels[i];
            series[j].label =  seriesLabels[i];
            if(chartType != "pie") {
                if(!series[j].tooltip) {
                    if ((i != 0) && (series[j - 1].tooltip)) {
                        series[j].tooltip = ibiStd.copyObject(series[j - 1].tooltip);
                    } else
                        series[j].tooltip = '';
                }
            } else delete series[j].tooltip;
        }
    }

    data = [];
    if(groupLabels) {
        groupM = bucketCompressToArray(groupLabels);
    }


    switch(chartType) {
        case 'treemap':
            dataArrayMap = ['size'];
            break;
        default:
            dataArrayMap = [];

    }
    if(chartType == "scatter" || chartType == "bubble") {
        if(buckets['DETAIL'].length)
            for(i=0; i < buckets['DETAIL'].length; i++)
            buckets['TOOLTIP'].splice(i,0,buckets['DETAIL'][i]);
    }
    /*
    if(buckets["TOOLTIP"]) {
        for(i=0; i < buckets["TOOLTIP"].length; i++){
            dataArrayMap[dataArrayMap.length] = "tooltip"+(i+1);
        }
    }
    */

    var filter = {};
    var dataObj;

    var matrixOn = false;
    if (matrixProperties || dataGridProperties.colHeader.labels || dataGridProperties.rowHeader.labels) {
        r = 1;
        matrixOn = true;
        if(buckets.ROW.length) {
            if(matrixProperties)
                rowM = bucketCompressToArray(matrixProperties.rowLabels.labels);
            else
                rowM = bucketCompressToArray((typeof dataGridProperties.rowHeader.labels.content_ibi != "undefined")?
                        dataGridProperties.rowHeader.labels.content_ibi:dataGridProperties.rowHeader.labels.content);
            r = rowM.length;
        }
        c = 1;
        if (buckets.COLUMN.length || (ybucket.length && matrixProperties == null )) {
            if(matrixProperties)
                colM = bucketCompressToArray(matrixProperties.colLabels.labels);
            else
                colM = bucketCompressToArray((typeof dataGridProperties.colHeader.labels.content_ibi != "undefined")?
                        dataGridProperties.colHeader.labels.content_ibi:dataGridProperties.colHeader.labels.content);
            c = colM.length;
        }
        x = 1;
        if(groupLabels) {
            groupM = bucketCompressToArray(groupLabels);
            x = groupM.length;
        }
    }

    var loop=1;
    if(sliderCount!=-1)
        loop = sliderCount;

    var sc = 0;
    var ttcont = tcont;
    var recs,recs2,recs3;
    while(sc < loop) {
        pdata = [];
        recs = tcont;
        filter = {};
        if (buckets.SLIDER.length) {
            filter['SLIDER'] = {columns: buckets.SLIDER, 'values': dataPageSlider.labels[sc].split("=:=")};
            recs = getChartRecords(recs, ibs, filter);
        }

        if (matrixOn) {
            groupLabelsFormated = null;
            var sv_groupLabels = ibiStd.copyObject(groupLabels);
            for(i=0; i<r; i++) {
                recs2 = recs;
                filter = {};
                if (buckets.ROW.length) {
                    filter['ROW'] = {columns: buckets.ROW, 'values': rowM[i].split("=:=")};
                    recs2 = getChartRecords(recs, ibs, filter);
                }
                pdata[i] = [];
                for(j=0; j<c; j++) {
                    recs3 = recs2;
                    filter = {};
                    if (buckets.COLUMN.length) {
                        filter['COLUMN'] = {columns: buckets.COLUMN, 'values': colM[j].split("=:=")};
                        recs3 = getChartRecords(recs2, ibs, filter);
                    }
                    pdata[i][j] = [];
                    vs = '';
                    if(buckets.ROW.length)
                        vs += rowM[i];
                    else
                        vs += ".";
                    vs += ":";
                    if(buckets.COLUMN.length)
                        vs += colM[j];
                    else
                        vs += ".";
                    //pdata[vs] = data[i][j];

                    if (recs3.length != 0) {
                        dataObj = generateBucketData(chartType, dataArrayMap, notLatLongMap, bycol, recs3, tcapt, tcntl, ibs, series, groupM, sv_groupLabels, xaxis, yaxis,
                            cSeries, buckets, colorbucket, sizebucket, detailbucket, ybucket, xbucket);
                        if(chartType == "datagrid") {
                            var idx = j % ybucket.length;
                            if(ybucket.length == 0)
                                idx = 0;
                            pdata[i][j] = dataObj.data[idx][0];
                        } else
                            pdata[i][j] = dataObj.data;
                    } else {
                        dataObj = {};
                        if(chartType == "datagrid")
                            pdata[i][j] = null;
                        else
                            pdata[i][j] = [];
                    }
                    if (typeof dataObj.dataArrayMap != "undefined")
                    dataArrayMap = dataObj.dataArrayMap;
                    if (typeof dataObj.groupLabels != "undefined")
                        groupLabels = dataObj.groupLabels;
                    if (typeof dataObj.SgroupLabels != "undefined")
                        SgroupLabels = dataObj.SgroupLabels;
                    if (typeof dataObj.series != "undefined")
                        series = dataObj.series;
                    if (typeof dataObj.xaxis != "undefined")
                        xaxis = dataObj.xaxis;
                    if (typeof dataObj.yaxis != "undefined")
                        yaxis = dataObj.yaxis;
                    if (typeof dataObj.zaxis != "undefined")
                        zaxis = dataObj.zaxis;
                    if (typeof dataObj.bucketForFilter != "undefined")
                        bucketForFilter = dataObj.bucketForFilter;
                }
            }
        } else {
            if(buckets.SLIDER.length)
                //ttcont = getChartRecords(tcont, ibs, filter);
                ttcont = recs;
            dataObj = generateBucketData(chartType, dataArrayMap, notLatLongMap, bycol, ttcont, tcapt, tcntl, ibs, series, groupM, groupLabels, xaxis, yaxis,
                cSeries, buckets, colorbucket, sizebucket, detailbucket, ybucket, xbucket);
            pdata = dataObj.data;
            dataArrayMap = dataObj.dataArrayMap;
            if (typeof dataObj.groupLabels != "undefined") {
                groupLabels = dataObj.groupLabels;
                groupLabelsFormated = null;
            }
            if (typeof dataObj.SgroupLabels != "undefined")
                SgroupLabels = dataObj.SgroupLabels;
            if (typeof dataObj.series != "undefined")
                series = dataObj.series;
            if (typeof dataObj.xaxis != "undefined")
                xaxis = dataObj.xaxis;
            if (typeof dataObj.yaxis != "undefined")
                yaxis = dataObj.yaxis;
            if (typeof dataObj.zaxis != "undefined")
                zaxis = dataObj.zaxis;
            if (typeof dataObj.bucketForFilter != "undefined")
                bucketForFilter = dataObj.bucketForFilter;
        }
        if(sliderCount==-1)
            data = pdata;
        else
            data[sc] = pdata;
        sc++;
    }

    dataProvider.xaxis = xaxis;
    dataProvider.yaxis = yaxis;
    dataProvider.zaxis = zaxis;
    dataProvider.dataArrayMap = dataArrayMap;

    if(groupLabels && (typeof gbucket != "undefined") && ((groupLabels.length>1)||(groupLabels[0]!=""))) {
        var gl = bucketCompressToGroupLabels(groupLabels, tcapt, gbucket, 0);
        if(gl != -1) {
            groupLabels = gl;
            if(groupLabelsFormated != null)
                groupLabelsFormated = bucketCompressToGroupLabels(groupLabelsFormated, tcapt, gbucket, 0);;
        }
    }

    if ((chartType == "pie") || ( chartType == 'funnel')  || (chartType == 'pyramid')
        //|| (chartType == "tagcloud")
        ) {
        var gb = groupLabels;
        if(gb.length==0)
            gb = [""];
        for (i = 0; i < gb.length; i++) {
            j = series.length;
            series[j] = {};
            if (jsObj1.series) {
                s1 = getGroup(jsObj1.series, i);
                ibiStd.mergeObject(series[j], s1);
            }
            if (jsObj2.series) {
                s2 = getGroup(jsObj2.series, i);
                ibiStd.mergeObject(series[j], s2);
            }
            if (!s1 && !s2) {
                if (jsObj1.series) {
                    s1 = getGroup(jsObj1.series, 0);
                    ibiStd.mergeObject(series[j], s1);
                }
                if (jsObj2.series) {
                    s2 = getGroup(jsObj2.series, 0);
                    ibiStd.mergeObject(series[j], s2);
                }
                delete series[j].color;
            }
            series[j].group = i;
            series[j].ibiDataValue = gb[i];
            series[j].label = gb[i];
            if (!series[j].tooltip) {
                if ((i != 0) && (series[j - 1].tooltip)) {
                    series[j].tooltip = ibiStd.copyObject(series[j - 1].tooltip);
                } else
                    series[j].tooltip = '';
            }
        }
    }

    if ((data == null )|| (data.length == 0))
        dataArrayMap = [];
    var cellFilterAdded = false;
    if(series) {
        var menuops = mytable.a_cntl.menuops;
        var showFilter = menuops.filter;
        var showNoFilterMessage = false;
        var showExclude = true;
        var pn = getPn(-1,mytable.id);
        var labelx,labely;
        var colsText;
        var labelsText;

        for(i=1; i < series.length; i++) {
            labelsText = '';
            colsText = '';

            cols = getColumnsForFilter(buckets, dataProvider, chartType, mytable);
            for (j = 0; j < cols.length; j++) {
                if (mytable.a_capt[cols[j]].type == IBINUM)
                    labelsText += "{{AR_SFLD_" + mytable.a_cntl.a_cols[cols[j]].field + "}}";
                else
                    labelsText += "'{{AR_SFLD_" + mytable.a_cntl.a_cols[cols[j]].field + "}}'";
                colsText += cols[j];

                if (j < cols.length - 1) {
                    colsText += ',';
                    labelsText += ',';
                }
                if (mytable.a_capt[cols[j]].isCompute && mytable.filterChangedFunc) {
                    //showFilter = false;
                    //showNoFilterMessage = true;
                }
            }

            if ((cols.length == 0) || (tcont.length < 2))
                showFilter = false;

            //if (cols.length > 1)
            //   showExclude = false;

            var stooltip = '';
            var addHardReturn = true;
            if (showFilter) {
                addHardReturn = false;
                stooltip += '<hr>' +
                    '<div style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style + ' ontouchend="ibiChart.addFilter(' + mytable.id + ',[' + colsText + '],' + arConstants.FILTER_IN + ',[[' + labelsText + ']],null);" ' +
                    ' onclick="ibiChart.addFilter(' + mytable.id + ',[' + colsText + '],' + arConstants.FILTER_IN + ',[[' + labelsText + ']],null);">' + ibiMsgStr['ecfilt'] + '</div>' +
                    '<div style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style + ' onclick="ibiChart.addFilter(' + mytable.id + ',[' + colsText + '],' + arConstants.FILTER_NOTIN + ',[[' + labelsText + ']],null);">' + ibiMsgStr['exfilt'] + '</div>';
            }

            if(showNoFilterMessage) {
                stooltip += '<hr>' +
                    '<div style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                    '>' + ibiMsgStr['nofilt'] + '</div>';

            }

            if(mytable.chartFiltersForUndo) {
                var showUndo = false;
                var iic = 0;
                var iicc = mytable.chartFiltersForUndo.length;
                for(var ii = 0 ; ii < iicc; ii++)
                    if(!mytable.chartFiltersForUndo[iic].obj.deleted) {
                        if (mytable.chartFiltersForUndo[iic].obj.undoStack.stack.length > 2)
                        showUndo = true;
                        iic++;
                    } else {
                        mytable.chartFiltersForUndo.splice(iic,1);
                    }

                if (showUndo) {
                    if(addHardReturn)
                        stooltip += '<hr>';
                    else
                        stooltip += '';
                    addHardReturn = false;
                    stooltip += '<div style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style + ' onclick="ibiChart.undoFilter('+mytable.id+');">' + ibiMsgStr['untcflt'] + '</div>';

                }
            }

            if (ibiCompound.chartFilters.length) {
                if(addHardReturn)
                    stooltip += '<hr>';
                else
                    stooltip += '';
                stooltip += '<div style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style + ' onclick="ibiChart.removeFilter();">' + ibiMsgStr['crtcflt'] + '</div>';
            }

            if(typeof series[i].tooltip != "undefined") {
                var addContentOfToolTip = false;
                var useToolTipBucket = buckets.TOOLTIP;
                if(series[i].tooltip == ""  && buckets.TOOLTIP.length>0)
                    addContentOfToolTip = true;
                else if(buckets.TOOLTIP.length && typeof series[i].tooltip == "object" ) {
                    var alreadyInToolTip = [];
                    for(j=0; j < series[i].tooltip.length; j++) {
                        if(series[i].tooltip[j].type == "nameValue") {
                            alreadyInToolTip[alreadyInToolTip.length] = getColbyName(tcntl.a_cols,series[i].tooltip[j].name);
                        }
                    }
                    useToolTipBucket = [];
                    for(var j=0; j < buckets.TOOLTIP.length; j++) {
                        if(!inarray(alreadyInToolTip,buckets.TOOLTIP[j],false))
                            useToolTipBucket[useToolTipBucket.length] = buckets.TOOLTIP[j];
                        if(useToolTipBucket.length)
                            addContentOfToolTip = true;
                    }
                }

                if(addContentOfToolTip) {

                    if(typeof series[i].tooltip == "object"  && series[i].tooltip.length)
                        j = series[i].tooltip.length;
                    else {
                    series[i].tooltip = [];
                    j = 0;
                    }
                    for(var t=0; t < useToolTipBucket.length; t++) {
                        var addMeasure = true;
                        if((chartType == "pie") || (chartType == 'pyramid')  || (chartType == 'funnel')) {
                            if(inarray(buckets["MEASURE"],useToolTipBucket[t],false)) {
                                if(series[i].ibiDataValue != tcntl.a_cols[useToolTipBucket[t]].name)
                                    addMeasure = false;
                            }
                        }
                        if(addMeasure) {
                            series[i].tooltip[j] = {
                                "name": tcntl.a_cols[useToolTipBucket[t]].name,
                                "type": "nameValue",
                                "value": "{{AR_FLD_" + tcntl.a_cols[useToolTipBucket[t]].field + "}}"
                            };
                            j++;
                        }
                    }
                }
                if (typeof series[i].tooltip == "object") {
                    series[i].tooltip[series[i].tooltip.length] = stooltip;
                } else {
                    series[i].tooltip += stooltip;
                }
                if(cols.length) {
                    var dstooltip = buildHierToolTip(mytable, buckets,colsText,labelsText);
                    if(dstooltip != '') {
                        series[i].tooltip[series[i].tooltip.length] = '<hr>';
                        for (j = 0; j < dstooltip.length; j++)
                            series[i].tooltip[series[i].tooltip.length] = dstooltip[j];
                    }
                    if (!cellFilterAdded && dataGridProperties) {
                        if(dataGridProperties.cell)
                            if(dataGridProperties.cell.tooltip) {
                                if (typeof dataGridProperties.cell.tooltip == "object") {
                                    dataGridProperties.cell.tooltip[dataGridProperties.cell.tooltip.length] = stooltip;
                                } else {
                                    dataGridProperties.cell.tooltip += stooltip;
                                }
                            }
                            if (typeof dataGridProperties.cell.formatList == "object") {
                                for (j = 0; j < dataGridProperties.cell.formatList.length; j++) {
                                    if (typeof dataGridProperties.cell.formatList[j].tooltip != "undefined") {
                                        if (typeof dataGridProperties.cell.formatList[j].tooltip == "object") {
                                            dataGridProperties.cell.formatList[j].tooltip[dataGridProperties.cell.formatList[j].tooltip.length] = stooltip;
                                        } else {
                                            dataGridProperties.cell.formatList[j].tooltipp += stooltip;
                                        }
                                    }
                                }
                            }
                            cellFilterAdded = true;
                        }
                }

                var dcol = 0;
                if (ybucket.length) {
                    var si = i-1;
                    if(si<ybucket.length)
                        dcol = ybucket[si];
                    else
                        dcol = ybucket[0];
                }

                var dstooltip = buildDrillToolTip(mytable,buckets,tcapt, tcntl, tcont, dcol);
                if(dstooltip != '') {
                    series[i].tooltip[series[i].tooltip.length] = '<hr>';
                    for (j = 0; j < dstooltip.length; j++)
                        series[i].tooltip[series[i].tooltip.length] = dstooltip[j];
                }
            }
        }
    }

    var tstring = '';
    var ag;
    var fixTooltipVariables = function (tooltip) {
        var t = tooltip;
        var j;
        var tstring;
            if( buckets['X-AXIS'].length) {
                tstring = '';
                for(j=0; j <  buckets['X-AXIS'].length; j++)
                    tstring +="{{AR_FLD_"+tcntl.a_cols[ buckets['X-AXIS'][j]].field+"}}";
            t = t.replace('{{x}}', tstring);
                            }
            if( buckets['Y-AXIS'].length) {
                tstring = '';
                for(j=0; j <  buckets['Y-AXIS'].length; j++)
                    tstring +="{{AR_FLD_"+tcntl.a_cols[ buckets['Y-AXIS'][j]].field+"}}";
            t = t.replace('{{y}}', tstring);
                        }
            if( buckets['COLOR'].length) {
                tstring = '';
            for (j = 0; j < buckets['COLOR'].length; j++) {
                ag = "";
                if (mytable.a_capt[buckets['COLOR'][j]].aggType)
                    ag = mytable.a_capt[buckets['COLOR'][j]].aggType + "_";
                tstring += "{{AR_FLD_" + ag + tcntl.a_cols[buckets['COLOR'][j]].field + "}}";
            }
            t = t.replace('{{color}}', tstring);
                        }
            if( buckets['SIZE'].length) {
                tstring = '';

            for (j = 0; j < buckets['SIZE'].length; j++) {
                ag = "";
                if(mytable.a_capt[buckets['SIZE'][j]].aggType)
                    ag = mytable.a_capt[buckets['SIZE'][j]].aggType +"_";
                tstring += "{{AR_FLD_" + ag + tcntl.a_cols[buckets['SIZE'][j]].field + "}}";
            }
            t = t.replace('{{size}}', tstring);
                        }
        if(t.indexOf('{{value}}')>-1) {
            t = t.replace('{{value}}', '{{display_value}}');
        }

            var lbl = t.match("{{ibi_label}}(.*){{ibi_value}}");
            if (lbl != null) {
                var c = mytable.getColumnByName(lbl[1]);
                if (c != -1) {
                    var val = t.match("{{ibi_value}}(.*?)<");
                    if (val != null) {
                       t = t.replace(val[1], ('{{AR_FLD_' + mytable.a_cntl.a_cols[c].field + '}}'));
                    }
                }
            }

        return t;
    };

    var fixCascadingToolTip = function(tooltip) {
        var col;
        var gl = "{{group_label";
        var sl = "{{col_label";
        var cl = "{{series_label";
        var rl = "{{row_label";
        var ex = "{{extension_bucket";
        var gl2 = "{{group_label_nested";
        if(typeof tooltip.entry != "undefined") {
            tooltip.entry = fixTooltipVariables(tooltip.entry);
            if(typeof tooltip.children != "undefined") {
                for(var i=0; i < tooltip.children.length; i++)
                    if(typeof tooltip.children[i] == 'object')
                        fixCascadingToolTip(tooltip.children[i]);
                    else
                        tooltip.children[i] = fixTooltipVariables(tooltip.children[i]);
                    }
        } else
        if(tooltip.type == 'nameValue') {
            if((tooltip.value.indexOf(gl)>-1) ||
                (tooltip.value.indexOf(rl)>-1) ||
                (tooltip.value.indexOf(cl)>-1) ||
                (tooltip.value.indexOf(sl)>-1) ||
                (tooltip.value.indexOf(gl2)>-1)) {
                if(mytable.overrideToolTip) {
                    for(var j in mytable.swapFieldOriginal) {
                        if (tooltip.name == mytable.swapFieldOriginal[j].name) {
                            tooltip.name = mytable.overrideToolTip[j].toName;
                        }
                    }
                }
            }
            if(tooltip.value.indexOf(ex)>-1) {
            } else {
                var fieldReplaced = false;
                var c = mytable.getColumnByName(tooltip.name);
                var aggtype = "";
                if(c>=0) {
                    if(mytable.a_capt[c].aggType)
                        aggtype = tcapt[c].aggType+"_";
                    tooltip.value = '{{AR_FLD_' + aggtype + mytable.a_cntl.a_cols[c].field + '}}';
                }
                if(mytable.overrideToolTip) {
                    for(j in mytable.overrideToolTip) {
                        if ((tooltip.value.indexOf('{{AR_FLD_' + mytable.swapFieldOriginal[j].field + '}}') > -1) ||
                            (tooltip.value.indexOf('{{AR_FLD_MAP__' + mytable.swapFieldOriginal[j].field + '}}') > -1)){
                            tooltip.name = mytable.overrideToolTip[j].toName;
                            tooltip.value = '{{AR_FLD_' + mytable.overrideToolTip[j].toField + '}}';
                            fieldReplaced = true;
                        }
                    }
                }

    /*
                if(!fieldReplaced) {
                    var c = mytable.getColumnByName(tooltip.name);
                    if(c>=0) {
                        tooltip.value = '{{AR_FLD_' + mytable.a_cntl.a_cols[c].field + '}}';
                    }
                }
                */
                tooltip.value = fixTooltipVariables(tooltip.value);
            }
        }
    };

    for (i = 1; i < series.length; i++) {
        if(typeof series[i].tooltip == "undefined")
            continue;
        if(typeof series[i].tooltip == "object") {
            for(j=0; j < series[i].tooltip.length; j++) {
                if(typeof series[i].tooltip[j] == "object") {
                    fixCascadingToolTip(series[i].tooltip[j])
                } else
                series[i].tooltip[j] = fixTooltipVariables(series[i].tooltip[j]);
            }
        } else
            series[i].tooltip = fixTooltipVariables(series[i].tooltip);
    }
    if(chartType == "datagrid") {
        if(typeof dataGridProperties.cell.formatList != "undefined") {
            for (i = 0; i < dataGridProperties.cell.formatList.length; i++) {
                if (typeof dataGridProperties.cell.formatList[i].tooltip == "undefined")
                    continue;
                if (typeof dataGridProperties.cell.formatList[i].tooltip == "object") {
                    for (j = 0; j < dataGridProperties.cell.formatList[i].tooltip.length; j++) {
                        if (typeof dataGridProperties.cell.formatList[i].tooltip[j] == "object") {
                            fixCascadingToolTip(dataGridProperties.cell.formatList[i].tooltip[j])
                        } else
                            dataGridProperties.cell.formatList[i].tooltip[j] = fixTooltipVariables(dataGridProperties.cell.formatList[i].tooltip[j]);
                    }
                } else
                    dataGridProperties.cell.formatList[i].tooltip = fixTooltipVariables(dataGridProperties.cell.formatList[i].tooltip);
            }
        }
    }

    if((chartType == "bubble") || (chartType == "scatter")) {
        if(ybucket.length) {
            groupLabelsFormated = null;
            groupLabels = [groupLabels];
            if(ybg==null)
                ybg = genNestedBucket(ybucket, tcapt, tcont, ibs, dosort, true);
            groupLabels[1] = bucketCompressToGroupLabels(ybg,tcapt,ybucket,0);
        }
    }
    if(chartType == "extension") {
        if(typeof jsObj1.dataBuckets)
            dataProvider.dataBuckets = jsObj1.dataBuckets;
        if(typeof jsObj2.dataBuckets)
            dataProvider.dataBuckets = jsObj2.dataBuckets;
    }
    if ((chartType == "pie") || ( chartType == 'funnel')  || (chartType == 'pyramid')) {
        groupLabels = SgroupLabels;
        groupLabelsFormated = null;
    }
    if(chartType == "datagrid")
        dataProvider.chartType = chartType;
    dataProvider.series = series;
    dataProvider.groupLabels = groupLabels;
    if(groupLabelsFormated!=null)
        dataProvider.groupLabels = groupLabelsFormated;
    dataProvider.legend = legend;
    dataProvider.data = data;
    if(dataProvider.data == null)
        dataProvider.data = [];
    if(dataProvider.dataArrayMap.length == 0)
        dataProvider.dataArrayMap = ["value"];
    dataProvider.colorScale = colorScale;
    dataProvider.numRecords = numRecords;
    if(chartType == "datagrid") {
        if(emptyObject(dataGridProperties.colHeader))
            delete dataGridProperties.colHeader;
        if(emptyObject(dataGridProperties.rowHeader))
            delete dataGridProperties.rowHeader;
        if(emptyObject(dataGridProperties.columnTotals))
            delete dataGridProperties.columnTotals;
        if(emptyObject(dataGridProperties.rowTotals))
            delete dataGridProperties.rowTotals;
        dataProvider.dataGridProperties = dataGridProperties;
        if(jsObj1.matrixProperties) {
            dataProvider.matrixProperties = ibiStd.copyObject(jsObj1.matrixProperties);
        }
        if(jsObj2.matrixProperties) {
            dataProvider.matrixProperties = ibiStd.copyObject(jsObj2.matrixProperties);
        }
    } else
    dataProvider.matrixProperties = matrixProperties;
    if(dataPageSlider != null)
        dataProvider.dataPageSlider = dataPageSlider;
    dataProvider.buckets = ibiStd.copyObject(buckets);
    ibiStd.trace("DataProver:",mytable);
    ibiStd.traceObject(dataProvider,mytable);
    return dataProvider;

                        }
    function getChartRecords(tcont,ibs,filters) {
        var records = [];
        var match;
        var val;
        var vala;
        var t;
        var f;
        var tl = tcont.length;
        for(var k = 0; k < tl; k++) {
            match = true;
            t = tcont[k];
            for (var i in filters) {
                f = filters[i];
                for (var j = 0; j < f.columns.length; j++) {
                    val = f.values[j]+'';
                    vala = t[f.columns[j]];
                    if(( val != ibs[vala[DARAW]]+'') &&
                        (val != ibs[vala[DASTR]]+'')){
                        match = false;
                        break;
                    }
                }
                if(!match)
                    break;
            }
            if(match)
                records[records.length] = t;
        }
        return records;
    }

    function generateBucketData(chartType,dataArrayMap,notLatLongMap,bycol,tcont,tcapt,tcntl,ibs,series,groupM, groupLabels,xaxis,yaxis,cSeries, buckets,colorbucket,sizebucket,detailbucket,ybucket,xbucket)
    {
        var sval;
        var svalD;
        var cval;
        var spos;
        var type;
        var cldata;
        var data = [];
        var sdata;
        var i;
        var k,kk;
        var j;
        var vs;
        var xval;
        var yval;
        var cpos;
        var pdata;
        var tpos;
        var gpos;
        var yb;
        var returnObject = {};
        var vlabel;
        var ydval;
        var ydsval;
        var glist = {};
        var glastPos=0;
        var firstcolor=0;
        if(colorbucket.length)
            for(i=0; i < colorbucket.length; i++)
                if(!tcapt[colorbucket[i]].noprint) {
                    firstcolor = i;
                    break;
                }


        returnObject.dataArrayMap = dataArrayMap;

        var valuePos = inarray(returnObject.dataArrayMap, "value", true);
        var displayPos = inarray(returnObject.dataArrayMap,"display_value",true);
        var colorPos = inarray(returnObject.dataArrayMap,"color",true);
        var sizePos = inarray(returnObject.dataArrayMap,"size",true);
        var xPos = inarray(returnObject.dataArrayMap,"x",true);
        var yPos = inarray(returnObject.dataArrayMap,"y",true);
        var namePos = inarray(returnObject.dataArrayMap,"name",true);
        var lngPos = inarray(returnObject.dataArrayMap,"lng",true);
        var latPos = inarray(returnObject.dataArrayMap,"lat",true);
        var seriesPos = inarray(returnObject.dataArrayMap,"series",true);

        if((chartType == "marker") || (chartType == "bubble")  || (chartType == "map") || (chartType == "scatter") || (chartType == "bubblemap") || (chartType == "choropleth")) {
            if(bycol!=-1) {
                cldata = {};
                data[0] = [];
                sdata = data;
                for(i=0; i < series.length-1; i++) {
                    sdata[i] = [];
                    cldata[series[i+1].label] = i;
                }
            } else {
                data[0] = [];
                sdata = data;
                i = 0;
            }

            for(j=0; j < tcont.length; j++) {
                svalD = null;
                if (bycol != -1) {
                    i = cldata[bgetDataValue(tcont[j][colorbucket[firstcolor]], ibs, tcapt[colorbucket[firstcolor]].type) + ""];
                }
                pdata = sdata[i];
                if (xbucket.length)
                    xval = bgetDataValue(tcont[j][xbucket[0]], ibs, tcapt[xbucket[0]].type);
                else
                    xval = 0;
                if (ybucket.length)
                    yval = bgetDataValue(tcont[j][ybucket[0]], ibs, tcapt[ybucket[0]].type);
                else
                    yval = 0;

                sval = null;
                cval = null;

                if (sizebucket.length) {
                    sval = bgetDataValue(tcont[j][sizebucket[0]], ibs, tcapt[sizebucket[0]].type);
                    svalD = ibs[tcont[j][sizebucket[0]][DASTR]];
                }

                //else
                //if((chartType != "scatter") && (chartType != "bubble"))
                 //   sval = 1;

                if (colorbucket.length) {
                    if (tcapt[colorbucket[firstcolor]].isby) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            cval = ibs[tcont[j][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            cval = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                        //svalD = ibs[tcont[j][colorbucket[firstcolor]][DASTR]];
                        for (k = 0; k < series.length-1; k++) {
                            if (series[k+1].ibiDataValue == cval) {
                                cpos = series[k+1].series;
                                break;
                            }
                        }
                        pdata = sdata[cpos];

                    } else {
                        if((chartType == "choropleth")
                           // || (chartType == "map")
                        ) {
                            sval = bgetDataValue(tcont[j][colorbucket[firstcolor]], ibs,tcapt[colorbucket[firstcolor]].type);
                            svalD = ibs[tcont[j][colorbucket[firstcolor]][DASTR]];
                        } else {
                            cval = bgetDataValue(tcont[j][colorbucket[firstcolor]], ibs,tcapt[colorbucket[firstcolor]].type);
                            //svalD = ibs[tcont[j][colorbucket[firstcolor]][DASTR]];
                        }
                    }
                }
                if(chartType=="marker") {
                    pdata[pdata.length] = [];
                    if(sizebucket.length) {
                        if (valuePos == -1) {
                            valuePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[valuePos] = "value";
                        }
                        pdata[pdata.length - 1][valuePos] = sval;
                    }
                    if(colorbucket.length) {
                        if (colorPos == -1) {
                            colorPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[colorPos] = "color";
                        }
                        pdata[pdata.length-1][colorPos] = cval;
                    }
                } else
                if ((chartType == "scatter") || (chartType == "bubble")) {
                    pdata[pdata.length] = [];
                    if(xbucket.length) {
                        if(xPos == -1) {
                            xPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[xPos] = "x";
                        }
                        pdata[pdata.length-1][xPos] = xval;
                    } else {
                        returnObject.dataArrayMap[0] = "x-dummy";
                        pdata[pdata.length-1][0] = 0;
                    }
                    if(ybucket.length) {
                        if(yPos == -1) {
                            yPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[yPos] = "y";
                        }
                        pdata[pdata.length-1][yPos] = yval;
                    } else {
                        returnObject.dataArrayMap[1] = "y-dummy";
                        pdata[pdata.length-1][1] = 0;
                    }
                    if((chartType == "bubble") && ((xbucket.length>1)||
                            ((xbucket.length==1)&&(tcapt[xbucket[0]].type!= IBINUM))))
                        pdata[pdata.length-1][0] = pdata[pdata.length-1][0]+'';
                    if(sval != null) {
                        if(sizePos == -1) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = "size";
                        }
                        pdata[pdata.length-1][sizePos] = sval;
                    }
                } else
                if(notLatLongMap) {
                    pdata[pdata.length] = [];
                    if(buckets["GEOMETRY"].length) {
                        if(namePos == -1) {
                            namePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[namePos] = "name";
                        }
                        var gval = bgetDataValue(tcont[j][buckets["GEOMETRY"][0]], ibs, tcapt[buckets["GEOMETRY"][0]].type);
                        try {
                            pdata[pdata.length-1][namePos] = JSON.parse(gval);
                        } catch (e) {
                            pdata[pdata.length - 1][namePos] = null;
                        }
                    } else
                    if(ybucket.length) {
                        if(namePos == -1) {
                            namePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[namePos] = "name";
                        }
                        pdata[pdata.length-1][namePos] = yval;
                    }
                    if(sval != null) {
                        if(valuePos == -1) {
                            valuePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[valuePos] = "value";
                        }
                        pdata[pdata.length-1][valuePos] = sval;
                    }
                    returnObject.bucketForFilter = ybucket;
                    returnObject.labelForFilter = "{{name}}";
                } else {
                    pdata[pdata.length] = [];
                    if(xbucket.length) {
                        if(lngPos == -1) {
                            lngPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[lngPos] = "lng";
                        }
                        pdata[pdata.length-1][lngPos] = xval;
                    }
                    if(ybucket.length) {
                        if(latPos == -1) {
                            latPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[latPos] = "lat";
                        }
                        pdata[pdata.length-1][latPos] = yval;
                    }
                    if(sval != null) {
                        if(valuePos == -1) {
                            valuePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[valuePos] = "value";
                        }
                        pdata[pdata.length-1][valuePos] = sval;
                    }
                    returnObject.labelForFilter = "{{value}}";
                }
                if((colorbucket.length)&&(!tcapt[colorbucket[firstcolor]].isby)) {
                    if(colorPos == -1) {
                        colorPos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[colorPos] = "color";
                    }
                    pdata[pdata.length-1][colorPos] = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                }
                addToolTipData(buckets,pdata[pdata.length-1],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,svalD,tcapt);
            }
        } else
        if(chartType == 'treemap') {
            var sc = null;
            detailbucket = buckets['DETAIL'];
            detailbucket.sort();
            colorbucket = buckets['COLOR'];
            sizebucket = buckets['SIZE'];
            returnObject.groupLabels = null;
            returnObject.bucketForFilter = detailbucket;

            if(colorbucket.length==0)
                returnObject.yaxis = null;
            returnObject.zaxis=null;
            var seriesv;
            var sseriesv;

            var svx = xaxis;
            returnObject.xaxis = yaxis;
            returnObject.yaxis = svx;

            var pval = undefined;
            var levelstr=[];
            var newdetail;

            for (j = 0; j < detailbucket.length; j++)
                levelstr[j] = null;

            seriesv = null;

            if(colorbucket.length) {
                if (tcapt[colorbucket[firstcolor]].isby) {
                    colorScale = null;
                    // swap xaxis
                    sc = 0;
                }
            }


            for(i=0; i < tcont.length; i++) {
                xval = null;
                newdetail = false;
                pval = undefined;
                sval = undefined;

                if(colorbucket.length) {
                    if(tcapt[colorbucket[firstcolor]].isby) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            sseriesv = ibs[tcont[i][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            sseriesv = bgetDataValue(tcont[i][colorbucket[firstcolor]], ibs, tcapt[colorbucket[firstcolor]].type);
                        if(sseriesv != seriesv) {
                            sc = inarray(cSeries,sseriesv,true);
                            data[data.length] = [sseriesv, undefined, undefined];
                            pdata = data[data.length-1][2];
                            seriesv = sseriesv;
                            newdetail = true;
                            pval = seriesv;
                        }
                        pval = seriesv;
                    } else {
                        xval = bgetDataValue(tcont[i][colorbucket[firstcolor]], ibs,tcapt[colorbucket[firstcolor]].type);
                    }
                }

                if(detailbucket.length) {
                    for (j = 0; j < detailbucket.length; j++) {
                        type = tcapt[detailbucket[j]].type;
                        if(typeof tcapt[detailbucket[j]].realType != "undefined")
                            type = tcapt[detailbucket[j]].realType;
                        if(type == "IBIDATE")
                            sval = ibs[tcont[i][detailbucket[j]][DASTR]]+'';
                        else
                            sval = bgetDataValue(tcont[i][detailbucket[j]], ibs, tcapt[detailbucket[j]].type)+'';
                        if (levelstr[j] != sval) {
                            newdetail = true;
                        }
                        if (newdetail) {
                            data[data.length] = [sval, pval, undefined];
                            levelstr[j] = sval;
                        }
                        pval = sval;
                    }

                    if(newdetail) {
                        data[data.length-1][2] = [];
                        pdata = data[data.length-1][2];
                    }
                }

                if(sizebucket.length)
                    yval = bgetDataValue(tcont[i][sizebucket[0]],ibs,tcapt[sizebucket[0]].type);
                else
                    yval = 0;

                if(typeof pdata == "undefined") {
                    if(data.length == 0) {
                        data[0] = ['',undefined];
                    }
                    data[data.length-1][2] = [];
                    pdata = data[data.length-1][2];
                }
                //pdata[pdata.length] = yval;
                if(sizePos>-1) {
                    if(sizePos==-1) {
                        sizePos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[sizePos] = "size";
                    }
                    pdata[sizePos] = yval;
                }
                if(sc!=null) {
                    if(seriesPos == -1) {
                        seriesPos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[seriesPos] = "series";
                    }
                    pdata[seriesPos] = sc;
                }
                if(xval!=null) {
                    if (colorPos == -1) {
                        colorPos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[colorPos] = "color";
                    }
                    pdata[colorPos] = xval;
                }
                addToolTipData(buckets,pdata,ibs,tcont[i],returnObject.dataArrayMap,tcntl.a_cols,sval,tcapt);
            }
        } else
        if(chartType == "tagcloud"){
            data[0]=[0];
            yb = ybucket;

            if(ybucket.length == 0) {
                yb = [-1];
            }
            for(i=0; i < yb.length; i++) {
                data[i] = [];
                for (j = 0; j < groupLabels.length; j++)
                    data[i][j] = null;

                for(j=0; j < tcont.length; j++) {
                    k = j;
                    if(valuePos == -1) {
                        valuePos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[valuePos] = 'value';
                    }

                    if ((colorbucket.length) && (tcapt[colorbucket[firstcolor]].isby)) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            sval = ibs[tcont[j][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            sval = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                        var slabel = '';
                        if(yb[i] != -1)
                            slabel = tcntl.a_cols[yb[i]].name+':';
                        for (kk = 0; kk < series.length-1; kk++) {
                            if ((series[kk+1].ibiDataValue == sval) ||
                                (series[kk+1].ibiDataValue == slabel+sval)){
                                k = kk;
                                break;
                            }
                        }
                    }
                    data[i][k] = [];
                    if(yb[i]!=-1)
                        data[i][k][valuePos] = bgetDataValue(tcont[j][yb[i]],ibs,tcapt[ybucket[i]].type);
                    else
                        data[i][k][valuePos] = 1;
                    if(buckets['SIZE'].length) {
                        if(sizePos<0) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = 'size';
                        }
                        data[i][k][sizePos] = bgetDataValue(tcont[j][buckets['SIZE'][0]],ibs,tcapt[buckets['SIZE'][0]].type);
                    }
                    if(buckets['COLOR'].length) {
                        if(colorPos<0) {
                            colorPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[colorPos] = 'color';
                        }
                        data[i][k][colorPos] = bgetDataValue(tcont[j][buckets['COLOR'][0]],ibs,tcapt[buckets['COLOR'][0]].type);
                    }
                    var ybv = null;
                    if(yb[i]!=-1)
                        ybv = ibs[tcont[j][yb[i]][DASTR]]
                    addToolTipData(buckets,data[i][k],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,ybv,tcapt);
                }
            }
        } else
        if((chartType == "pie") || ( chartType == 'funnel') || (chartType == 'pyramid')){
            data[0]=[0];
            yb = ybucket;

            if(ybucket.length == 0) {
                yb = [-1];
            }
            for(i=0; i < yb.length; i++) {
                data[i] = [];
                for (j = 0; j < groupLabels.length; j++)
                    data[i][j] = null;

                for(j=0; j < tcont.length; j++) {
                    k = j;
                    if(valuePos == -1) {
                        valuePos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[valuePos] = 'value';
                    }

                    if ((colorbucket.length) && (tcapt[colorbucket[firstcolor]].isby)) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            sval = ibs[tcont[j][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            sval = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                        var slabel = '';
                        if(yb[i] != -1)
                            slabel = tcntl.a_cols[yb[i]].name+':';
                        for (kk = 0; kk < series.length-1; kk++) {
                            if ((series[kk+1].ibiDataValue == sval) ||
                                (series[kk+1].ibiDataValue == slabel+sval)){
                                k = kk;
                                break;
                            }
                        }
                    }
                    data[i][k] = [];
                    if(yb[i]!=-1)
                        data[i][k][valuePos] = bgetDataValue(tcont[j][yb[i]],ibs,tcapt[ybucket[i]].type);
                    else
                        data[i][k][valuePos] = 1;
                    if(buckets['SIZE'].length) {
                        if(sizePos<0) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = 'size';
                        }
                        data[i][k][sizePos] = bgetDataValue(tcont[j][buckets['SIZE'][0]],ibs,tcapt[buckets['SIZE'][0]].type);
                    }
                    var ybv = null;
                    if(yb[i]!=-1)
                        ybv = ibs[tcont[j][yb[i]][DASTR]]
                    addToolTipData(buckets,data[i][k],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,ybv,tcapt);
                }
            }
            returnObject.groupLabels = [];
            returnObject.SgroupLabels = [];
            for (i = 0; i < buckets['MEASURE'].length; i++) {
                returnObject.groupLabels[returnObject.groupLabels.length] = tcntl.a_cols[buckets['MEASURE'][i]].name;
                returnObject.SgroupLabels[returnObject.SgroupLabels.length] = ibiChart.stripComma(tcntl.a_cols[buckets['MEASURE'][i]].dis);
            }

        } else
        if(chartType=="heatmap"){
            /*
            if((colorbucket.length)&&(tcapt[colorbucket[firstcolorisby)) {
                //for(k=0; k< ybucket.length; k++) {
                // data[k] = [];
                for (j = 0; j < series.length-1; j++) {
                    data[j] = [];
                    for (i = 0; i < groupLabels.length; i++)
                        data[j][i] = null;
                }
                // }
            } else */
            for (i = 0; i < series.length-1; i++) {
                data[i] = [];
                for (j = 0; j < groupLabels.length; j++)
                    data[i][j] = null;
            }

            //for(i=0; i < ybucket.length; i++) {
            i = 0;
                for(j=0; j < tcont.length; j++) {
                    pdata = data[i];
                    if(ybucket.length) {
                        if(tcapt[ybucket[0]].type == IBIDATE)
                            sval = bgetDataValue(tcont[j][ybucket[0]],ibs,tcapt[ybucket[0]].type,true);
                        else
                            sval = bgetDataValue(tcont[j][ybucket[0]],ibs,tcapt[ybucket[0]].type);
                        for (k = 0; k < series.length-1; k++) {
                            if(typeof series[k+1].ibiDataValue == "object") {
                                if(typeof series[k+1].ibiDataValue[sval] != "undefined" ) {
                                    spos = k;
                                    break;
                                }
                            } else
                            if (series[k+1].ibiDataValue == sval) {
                                spos = k;
                                break;
                            }
                        }
                        pdata = data[spos];
                    }
                    {
                        vs = null;
                        for(k=0; k < xbucket.length; k++) {
                            if(vs!=null)
                                vs += '=:=';
                            else
                                vs = '';
                            if(tcapt[xbucket[k]].type == "IBIDATE")
                                vs += ibs[tcont[j][xbucket[k]][DASTR]];
                            else
                                vs += bgetDataValue(tcont[j][xbucket[k]],ibs,tcapt[xbucket[k]].type);
                        }
                        if (groupM.length == 1)
                            gpos = 0;
                        else
                        if(xbucket.length) {
                            sval = bgetDataValue(tcont[j][xbucket[0]],ibs,tcapt[xbucket[0]].type);
                            if(typeof glist[vs + ""] != "undefined")
                                gpos = glist[vs + ""];
                            else {
                                if(groupM[glastPos]== vs+"")
                                    gpos = glastPos;
                                else
                                    gpos = inarray(groupM, vs + "", true);
                                glist[vs + ""] = gpos;
                                glastPos = gpos + 1;
                            }
                        } else
                            gpos = j;
                    }
                    pdata[gpos] = [];
                    if(valuePos<0) {
                        valuePos = returnObject.dataArrayMap.length;
                        returnObject.dataArrayMap[valuePos] = 'value';
                    }
                    if(ybucket.length) {
                        pdata[gpos][valuePos] = bgetDataValue(tcont[j][ybucket[i]],ibs,tcapt[ybucket[i]].type);
                        if(displayPos<0) {
                            displayPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[displayPos] = 'display_value';
                        }
                        pdata[gpos][displayPos] = ibs[tcont[j][ybucket[i]][DASTR]];
                        svalD =  bgetDataValue(tcont[j][ybucket[i]],ibs,tcapt[ybucket[i]].type,true);
                    } else {
                        pdata[gpos][valuePos] = 0;
                    }

                    if(buckets['SIZE'].length) {
                        if(sizePos<0) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = 'size';
                        }
                        pdata[gpos][sizePos] = bgetDataValue(tcont[j][buckets['SIZE'][0]],ibs,tcapt[buckets['SIZE'][0]].type);
                    }
                    if(colorbucket.length) {
                        if(colorPos == -1) {
                            colorPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[colorPos] = "color";
                        }
                        pdata[gpos][colorPos] = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                    }
                    addToolTipData(buckets,pdata[gpos],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,svalD,tcapt);
                }
            //}
        } else
        if(chartType == "datagrid") {
            yb = ybucket;
            if(yb.length == 0)
                yb = [-1];
            if((colorbucket.length)&&(tcapt[colorbucket[firstcolor]].isby)) {
                //for(k=0; k< ybucket.length; k++) {
                // data[k] = [];
                for (j = 0; j < series.length-1; j++) {
                    data[j] = [];
                    for (i = 0; i < groupM.length; i++)
                        data[j][i] = null;
                }
                // }
            } else
                for(i=0; i < yb.length; i++) {
                    data[i] = [];
                    for(j=0; j < groupM.length; j++)
                        data[i][j] = null;
                }

            for(i=0; i < yb.length; i++) {
                for(j=0; j < tcont.length; j++) {
                    pdata = data[i];
                    if ((colorbucket.length) && (tcapt[colorbucket[firstcolor]].isby)) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            sval = ibs[tcont[j][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            sval = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                        for (k = 0; k < series.length-1; k++) {
                            vlabel = "";
                            if(yb[i]!= -1)
                                vlabel = tcntl.a_cols[yb[i]].name+':';
                            if ((series[k+1].ibiDataValue == sval) ||
                                (series[k+1].ibiDataValue == vlabel+sval)){
                                spos = k;
                                break;
                            }
                        }
                        vs = null;
                        for(k=0; k < xbucket.length; k++) {
                            if(vs!=null)
                                vs += '=:=';
                            else
                                vs = '';
                            if(tcapt[xbucket[k]].type == "IBIDATE")
                                vs += ibs[tcont[j][xbucket[k]][DASTR]];
                            else
                                vs += bgetDataValue(tcont[j][xbucket[k]],ibs,tcapt[xbucket[k]].type);
                        }
                        if(xbucket.length) {
                            sval = bgetDataValue(tcont[j][xbucket[0]],ibs,tcapt[xbucket[0]].type);
                            if(typeof glist[vs + ""] != "undefined")
                                gpos = glist[vs + ""];
                            else {
                                if(groupM[glastPos]== vs+"")
                                    gpos = glastPos;
                            else
                                    gpos = inarray(groupM, vs + "", true);
                                glist[vs + ""] = gpos;
                                glastPos = gpos + 1;
                            }
                        } else {
                            gpos = j;
                        }

                        //if(pdata[spos][gpos]==null)
                        //    pdata[spos][gpos]=[];
                        pdata = data[spos];
                    } else {
                        vs = null;
                        for(k=0; k < xbucket.length; k++) {
                            if(vs!=null)
                                vs += '=:=';
                            else
                                vs = '';
                            if(tcapt[xbucket[k]].type == "IBIDATE")
                                vs += ibs[tcont[j][xbucket[k]][DASTR]];
                            else
                                vs += bgetDataValue(tcont[j][xbucket[k]],ibs,tcapt[xbucket[k]].type);
                        }
                        if(xbucket.length) {
                            if(tcapt[xbucket[0]].type == "IBIDATE")
                                sval = ibs[tcont[j][xbucket[0]][DASTR]];
                            else
                                sval = bgetDataValue(tcont[j][xbucket[0]],ibs,tcapt[xbucket[0]].type);
                            if(typeof glist[vs + ""] != "undefined")
                                gpos = glist[vs + ""];
                            else {
                                if(groupM[glastPos]== vs+"")
                                    gpos = glastPos;
                                else
                                    gpos = inarray(groupM, vs + "", true);
                                glastPos = gpos + 1;
                                glist[vs + ""] = gpos;
                            }
                        } else
                            gpos = j;
                    }
                    ydval = null;
                    ydsval = null;
                    svalD = null;
                    pdata[gpos]=[];
                    if(yb[i]!=-1) {
                        ydval = bgetDataValue(tcont[j][yb[i]], ibs, tcapt[yb[i]].type);
                        svalD =  bgetDataValue(tcont[j][yb[i]],ibs,tcapt[yb[i]].type,true);
                        ydsval = ibs[tcont[j][yb[i]][DASTR]];
                        if(valuePos<0) {
                            valuePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[valuePos] = 'value';
                        }
                        pdata[gpos][valuePos] = ydval;
                        if(displayPos<0) {
                            displayPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[displayPos] = 'display_value';
                        }
                        pdata[gpos][displayPos] = ydsval;
                    }
                    if(buckets['SIZE'].length) {
                        if(sizePos<0) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = 'size';
                        }
                        pdata[gpos][sizePos] = bgetDataValue(tcont[j][buckets['SIZE'][0]],ibs,tcapt[buckets['SIZE'][0]].type);
                    }
                    if((colorbucket.length)&&(!tcapt[colorbucket[firstcolor]].isby)) {
                        if(colorPos == -1) {
                            colorPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[colorPos] = "color";
                        }
                        pdata[gpos][colorPos] = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                    }
                    addToolTipData(buckets,pdata[gpos],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,svalD,tcapt);
                }
            }
        } else {
            yb = ybucket;
            glist = {};
            if(yb.length == 0)
                yb = [-1];
            if((colorbucket.length)&&(tcapt[colorbucket[firstcolor]].isby)) {
                //for(k=0; k< ybucket.length; k++) {
                   // data[k] = [];
                    for (j = 0; j < series.length-1; j++) {
                        data[j] = [];
                    for (i = 0; i < groupM.length; i++)
                            data[j][i] = null;
                    }
               // }
            } else
                for(i=0; i < yb.length; i++) {
                data[i] = [];
                    for(j=0; j < groupM.length; j++)
                    data[i][j] = null;
            }

            for(i=0; i < yb.length; i++) {
                for(j=0; j < tcont.length; j++) {
                    if((typeof data[i] == "undefined") || (data[i] == null))
                        data[i] = [];
                    pdata = data[i];
                    if ((colorbucket.length) && (tcapt[colorbucket[firstcolor]].isby)) {
                        type = tcapt[colorbucket[firstcolor]].type;
                        spos = 0;
                        if(typeof tcapt[colorbucket[firstcolor]].realType != "undefined")
                            type = tcapt[colorbucket[firstcolor]].realType;
                        if(type == "IBIDATE")
                            sval = ibs[tcont[j][colorbucket[firstcolor]][DASTR]]+'';
                        else
                            sval = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                        for (k = 0; k < series.length-1; k++) {
                            vlabel = "";
                            if(yb[i]!= -1)
                                vlabel = tcntl.a_cols[yb[i]].name+':';
                            if ((series[k+1].ibiDataValue == sval) ||
                                (series[k+1].ibiDataValue == vlabel + sval)){
                                spos = k;
                                break;
                            }
                        }
                        vs = null;
                        for(k=0; k < xbucket.length; k++) {
                            if(vs!=null)
                                vs += '=:=';
                            else
                                vs = '';
                            if(tcapt[xbucket[k]].type == "IBIDATE")
                                vs += ibs[tcont[j][xbucket[k]][DASTR]];
                            else
                                vs += bgetDataValue(tcont[j][xbucket[k]],ibs,tcapt[xbucket[k]].type);
                        }
                        if (groupM.length == 1)
                            gpos = 0;
                        else
                        if(xbucket.length) {
                            sval = bgetDataValue(tcont[j][xbucket[0]],ibs,tcapt[xbucket[0]].type);
                            if(typeof glist[vs + ""] != "undefined")
                                gpos = glist[vs + ""];
                            else {
                                if(groupM[glastPos]== vs+"")
                                    gpos = glastPos;
                            else
                                    gpos = inarray(groupM, vs + "", true);
                                glist[vs + ""] = gpos;
                                glastPos = gpos + 1;
                            }
                        } else {
                            gpos = j;
                        }

                        //if(pdata[spos][gpos]==null)
                        //    pdata[spos][gpos]=[];
                        if((typeof data[spos] == "undefined") || (data[spos] == null))
                            data[spos] = [];
                        pdata = data[spos];
                    } else {
                        vs = null;
                        for(k=0; k < xbucket.length; k++) {
                            if(vs!=null)
                                vs += '=:=';
                            else
                                vs = '';
                            if(tcapt[xbucket[k]].type == "IBIDATE")
                                vs += ibs[tcont[j][xbucket[k]][DASTR]];
                            else
                                vs += bgetDataValue(tcont[j][xbucket[k]],ibs,tcapt[xbucket[k]].type);
                        }
                        if (groupM.length == 1)
                            gpos = 0;
                        else
                        if(xbucket.length) {
                            if(typeof glist[vs + ""] != "undefined")
                                gpos = glist[vs + ""];
                            else {
                                if(groupM[glastPos]== vs+"")
                                    gpos = glastPos;
                                else
                                    gpos = inarray(groupM, vs + "", true);
                                glist[vs + ""] = gpos;
                                glastPos = gpos + 1;
                            }
                            sval = bgetDataValue(tcont[j][xbucket[0]],ibs,tcapt[xbucket[0]].type);

                        } else
                        gpos = j;
                    }
                    ydval = null;
                    ydsval = null;
                    svalD = null;
                    pdata[gpos] = [];
                    if(yb[i]!=-1) {
                        ydval = bgetDataValue(tcont[j][yb[i]], ibs, tcapt[yb[i]].type);
                        svalD =  bgetDataValue(tcont[j][yb[i]],ibs,tcapt[yb[i]].type,true);
                        ydsval = ibs[tcont[j][yb[i]][DASTR]];

                        if(valuePos<0) {
                            valuePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[valuePos] = 'value';
                        }
                        pdata[gpos][valuePos] = ydval;

                        if(displayPos<0) {
                            displayPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[displayPos] = 'display_value';
                        }
                        pdata[gpos][displayPos] = ydsval;
                    }
                    //pdata[gpos] = [ydval,null,null,ydsval];

                    if(buckets['SIZE'].length) {
                        if(sizePos<0) {
                            sizePos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[sizePos] = 'size';
                        }
                        pdata[gpos][sizePos] = bgetDataValue(tcont[j][buckets['SIZE'][0]],ibs,tcapt[buckets['SIZE'][0]].type);
                    }
                    if((colorbucket.length)&&(!tcapt[colorbucket[firstcolor]].isby)) {
                        if(colorPos == -1) {
                            colorPos = returnObject.dataArrayMap.length;
                            returnObject.dataArrayMap[colorPos] = "color";
                        }
                        pdata[gpos][colorPos] = bgetDataValue(tcont[j][colorbucket[firstcolor]],ibs,tcapt[colorbucket[firstcolor]].type);
                    }
                    addToolTipData(buckets,pdata[gpos],ibs,tcont[j],returnObject.dataArrayMap,tcntl.a_cols,svalD,tcapt);
                }
            }
            if((data.length==0)|| (data[0].length == 0))
                data = null;
        }
        returnObject.data = data;
        return returnObject;
    }

    function bgetDataValue(record,ibs,type,returnString) {
        var val;
        if(returnString)
            return ibs[record[DASTR]]+'';
        if(record[DARAW] == arConstants.MISSING_OR_NODATA || record[DARAW]== -1) {
            if (type == IBINUM)
                return undefined;
            else
                return ibs[record[DASTR]];
        } else {
            val = ibs[record[DARAW]];
            if(type == IBIDATE)
                val = ibs[record[DASTR]];
            else
            if (type == IBINUM)
                val = val*1;
            else
                val = val+"";
            return val;
        }
    }

    function addToolTipData(buckets,data,ibs,record,dataArrayMap,cols,displayValue,tcapt){
        var dbucket = buckets['DETAIL'];
        var cbucket = buckets['COLOR'];
        var tbucket = buckets['TOOLTIP'];
        var vbucket = buckets['VIRTFIELD'];
        for(var i=0; i < dataArrayMap.length; i++)
            if(typeof(data[i])=="undefined")
                data[i] = null;
        if(displayValue)
            addToolTipDataDV(data,displayValue,dataArrayMap);
        addToolTipDataRec(dbucket,tbucket,data,ibs,record,dataArrayMap);
        addToolTipDataFields(data,ibs,record,dataArrayMap,cols,tcapt);
        addToolTipDataVirt(data,ibs,record,dataArrayMap,cols,tcapt,vbucket);
        //addToolTipDataColor(cbucket,data,ibs,record,dataArrayMap);
    }

    function addToolTipDataVirt(data,ibs,record,dataArrayMap,cols,tcapt,vbucket){
        var tpos,i;

        if(vbucket == null)
            return;
        for(var k in vbucket) {
            tpos = inarray(dataArrayMap,k,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = k;
            }
            data[tpos] = [];
            for(var i = 0 ; i < vbucket[k].length; i++) {
                if(vbucket[k].length>1)
                    data[tpos][i] = bgetDataValue(record[vbucket[k][i]], ibs, tcapt[vbucket[k][i]].type);
                else
                    data[tpos] = bgetDataValue(record[vbucket[k][i]], ibs, tcapt[vbucket[k][i]].type);
            }
            //data[tpos] = bgetDataValue(record[k],ibs,tcapt[k].type);
        }
    }

    function addToolTipDataDV(data,dv,dataArrayMap){
        var tpos;
        var k;
        tpos = inarray(dataArrayMap,"display_value",true);
        if(tpos==-1) {
            tpos = dataArrayMap.length;
            dataArrayMap[tpos] = "display_value";
        }
        data[tpos] = dv;

    }

    function addToolTipDataRec(dbucket,tbucket,data,ibs,record,dataArrayMap){
        var tpos;
        var tp = 1;
        var k;
/*
        if(dbucket) {
            for(k=0; k < dbucket.length; k++) {
                tpos = inarray(dataArrayMap,"tooltip"+tp,true);
                if(tpos==-1) {
                    tpos = dataArrayMap.length;
                    dataArrayMap[tpos] = "tooltip" + tp;
                }
                tp++;
                data[tpos] = ibs[record[dbucket[k]][DASTR]];
            }
        }
        */
        if(tbucket) {
            for(k=0; k < tbucket.length; k++) {
                tpos = inarray(dataArrayMap,"tooltip"+tp,true);
                if(tpos==-1) {
                    tpos = dataArrayMap.length;
                    dataArrayMap[tpos] = "tooltip" + tp;
                }
                tp++;
                data[tpos] = ibs[record[tbucket[k]][DASTR]];
            }
        }
    }

    function addToolTipDataColor(cbucket,data,ibs,record,dataArrayMap,tcapt){
        var tpos;
        var k;
        if(cbucket && cbucket.length) {
            tpos = inarray(dataArrayMap,"color",true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "color";
            }
            data[tpos] = bgetDataValue(record[cbucket[0]],ibs,tcapt[cbucket[0]].type);
        }
    }

    function addToolTipDataFields(data,ibs,record,dataArrayMap,cols,tcapt){
        var tpos;
        var escapeQ = function(s) {
            var ss = s+'';
            ss = ss.replace(/"/g, '&quot;') ;
            ss = ss.replace(/'/g, "\\'") ;
            return ss;
        };

        for(var k=0; k < cols.length; k++) {
            var qn = cols[k].qualname;
            var o = qn.split(".");
            var aggtype = "";
            if(tcapt[k].aggType)
                aggtype = tcapt[k].aggType+"_";
            if(o.length>1) {
                qn = o[1];
                for (var i = 2; i < o.length; i++) {
                    qn += "." + o[i];
                }
            } else qn = null;
            tpos = inarray(dataArrayMap,"AR_FLD_"+aggtype+cols[k].field,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "AR_FLD_"+aggtype+cols[k].field;
            }
            data[tpos] = ibs[record[k][DASTR]];
            tpos = inarray(dataArrayMap,"AR_UFLD_"+aggtype+cols[k].field,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "AR_UFLD_"+aggtype+cols[k].field;
            }
            data[tpos] = URLencode(ibs[record[k][DASTR]]);
            if(qn) {
                tpos = inarray(dataArrayMap, "AR_FLD_" +aggtype+ qn, true);
                if (tpos == -1) {
                    tpos = dataArrayMap.length;
                    dataArrayMap[tpos] = "AR_FLD_" +aggtype+ qn;
                }
                data[tpos] = ibs[record[k][DASTR]];
            }
            tpos = inarray(dataArrayMap,"AR_RFLD_"+aggtype+cols[k].field,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "AR_RFLD_"+aggtype+cols[k].field;
            }
            var type = tcapt[k].type;
            if(typeof tcapt[k].realType)
                type = tcapt[k].realType;
            data[tpos] = bgetDataValue(record[k],ibs,type);
            tpos = inarray(dataArrayMap,"AR_URFLD_"+aggtype+cols[k].field,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "AR_URFLD_"+aggtype+cols[k].field;
            }
            var type = tcapt[k].type;
            if(typeof tcapt[k].realType)
                type = tcapt[k].realType;
            data[tpos] = URLencode(bgetDataValue(record[k],ibs,type));
            tpos = inarray(dataArrayMap,"AR_SFLD_"+aggtype+cols[k].field,true);
            if(tpos==-1) {
                tpos = dataArrayMap.length;
                dataArrayMap[tpos] = "AR_SFLD_"+aggtype+cols[k].field;
            }
            data[tpos] = bgetDataValue(record[k],ibs,tcapt[k].type);
            if(tcapt[k].type == IBISTR)
                data[tpos] = escapeQ(data[tpos])
        }
    }

    function buildHierToolTip(mytable,buckets,colsText,labelsText) {
        var drillString = '';
        var rtn = mytable.id;
        var rrow = 0;
        var i, j,k;
        var ucol;
        var fieldname;
        var qualname;
        var alias;
        var hier = [];
        var style;
        var col2;
        var bk = [];

        if (mytable.isRollUp) {
            rtn = mytable.parent_table;
        }

        //check if more than one field has Hierarchy
        var s;
        var pos;
        var lastField = -1;
        var buckets = mytable.a_cntl.buckets;
        for (i in buckets)
            for(j = 0; j < buckets[i].length; j++) {
                bk[buckets[i][j]] = i;
                if(lastField<buckets[i][j])
                    lastField = buckets[i][j]
            }

        //for (i in buckets) {
        for(var l =0; l <= lastField; l++ ) {
            if(typeof bk[l] == "undefined")
                continue;
            if ((bk[l] == "TOOLTIP")||(bk[l] == "VIRTFIELD"))
                continue;
            if (!mytable.a_capt[l].isby)
                continue;
            col = l;
            ucol = col;
            if (mytable.isRollUp) {
                ucol = mytable.a_capt[col].orgCol;
            }
            style = mytable.getReportStyle('NODE', ST_DATA, ucol);
            if(style.hierarchy) {
                pos = hier.length;
                hier[pos] = {'bucket':i,'column':col,'hierarchy':style.hierarchy,'uColumn':ucol};
                var ff = ibiUtil.StripSpace(style.hierarchy,true,true);
                try {
                    hier[pos].fields = JSON.parse(ff);
                    if(typeof hier[pos].fields.length == "undefined")
                        hier[pos].fields = [hier[pos].fields];
                }
                catch(e)  {
                    if (ff.substring(0, 1) == "[")
                        ff = ff.substring(1, ff.length - 1);
                    ff = ff.split(",");
                    var ff2 = "[";
                    for(k=0; k < ff.length; k++) {
                        var ss = ibiUtil.StripSpace(ff[k],true,true);
                        if(ss.substring(0,1)!= '"' && ss.substring(0,1)!= '{')
                            ff2 += '"'+ss+'"';
                        else
                            ff2 += ss;
                        if(k<ff.length-1)
                            ff2+=",";
                    }
                    ff2 += "]";

                    //hier[hier.length-1].fields = style.hierarchy.split(",");
                    hier[pos].fields = JSON.parse(ff2);
                }
                hier[pos].fieldname = mytable.a_cntl.a_cols[col].field;
                hier[pos].qualname = mytable.a_cntl.a_cols[col].qualname;
                hier[pos].title = ibiChart.stripComma(mytable.a_cntl.a_cols[col].dis);
                if(hier[pos].title=='')
                    hier[pos].title = mytable.a_cntl.a_cols[col].name;
                hier[pos].alias = mytable.a_cntl.a_cols[col].alias;

                var hfields = [];
                var afields = [];
                var ainfo = null;
                for(k = 0; k < hier[pos].fields.length; k++) {
                    if(typeof hier[pos].fields[k] == "object") {
                        hfields[k] = hier[pos].fields[k].field;
                        if(typeof hier[pos].fields[k].alttitlefield != "undefined" )
                            afields[afields.length] = hier[pos].fields[k].alttitlefield;
                    } else
                        hfields[k] = hier[pos].fields[k];
                }

                if(typeof mytable.a_capt[col].hierInfo == "undefined") {
                    mytable.a_capt[col].hierInfo = mytable.getFieldInfo(hfields);
                    if(afields.length)
                        ainfo = mytable.getFieldInfo(afields);
                    for(k = 0; k < hier[pos].fields.length; k++)
                        if(typeof hier[pos].fields[k] == "object") {
                            if(typeof hier[pos].fields[k].title != "undefined")
                                mytable.a_capt[col].hierInfo.cols[k].name = hier[pos].fields[k].title;
                            if(typeof hier[pos].fields[k].alttitlefield != "undefined") {
                                var fcol =  mytable.getColumnByName(hier[pos].fields[k].alttitlefield);
                                if(fcol>=0)
                                    mytable.a_capt[col].hierInfo.cols[k].name = mytable.a_cntl.a_cols[fcol].name;
                                else
                                if(ainfo != null) {
                                    var save_cols = mytable.a_cntl.a_cols;
                                    mytable.a_cntl.a_cols = ainfo.cols;
                                    fcol = mytable.getColumnByName(hier[pos].fields[k].alttitlefield);
                                    mytable.a_cntl.a_cols = save_cols;
                                    if(fcol>=0)
                                        mytable.a_capt[col].hierInfo.cols[k].name = ainfo.cols[fcol].name;
                                }
                            }
                        }

                    for(k=0; k < mytable.a_capt[col].hierInfo.cols.length; k++){
                        col2 = mytable.ru_a_capt.length;
                        mytable.ru_a_capt[col2] = ibiStd.copyObject(mytable.a_capt[col].hierInfo.capt[k]);
                        mytable.ru_a_capt[col2].noprint = true;
                        mytable.ru_a_capt[col2].isby = false;
                        mytable.ru_a_cntl.a_cols[col2] = ibiStd.copyObject(mytable.a_capt[col].hierInfo.cols[k]);
                        col2 = mytable.a_capt.length;
                        mytable.a_capt[col2] = ibiStd.copyObject(mytable.a_capt[col].hierInfo.capt[k]);
                        mytable.a_capt[col2].noprint = true;
                        mytable.a_capt[col2].isby = false;
                        mytable.a_cntl.a_cols[col2] = ibiStd.copyObject(mytable.a_capt[col].hierInfo.cols[k]);
                    }
                }
                hier[pos].fields = hfields;
            }
        }

        var line = [];
        var pline = line;
        var upHier,downHier;
        upHier = [];
        downHier = [];
        for(j=0; j< hier.length; j++) {
            if(hier[j].fields.length == 1)
                continue;
            col = hier[j].column;
            i = inarray(hier[j].fields, hier[j].fieldname, true);
            if (i == -1)
                i = inarray(hier[j].fields, hier[j].qualname, true);
            if ((i == -1) && (hier[j].alias != ""))
                i = inarray(hier[j].fields, hier[j].alias, true);
            if(i!=-1) {
                if(i>0) {
                    upHier[upHier.length] = {
                        'fieldname':hier[j].fieldname,
                        'targetField':mytable.a_capt[col].hierInfo.cols[i-1].name,
                        'column':col,
                        'currentCol': i,
                        'gotoCol' : (i-1)
                    };
                }
                if(i< (hier[j].fields.length-1)) {
                    downHier[downHier.length] = {
                        'fieldname':hier[j].fieldname,
                        'targetField':mytable.a_capt[col].hierInfo.cols[i+1].name,
                        'column':col,
                        'currentCol': i,
                        'gotoCol' : (i+1)
                    };
                }
            }
        }

        if(upHier.length > 1) {
            line[line.length] = {'entry': ibiMsgStr['drillup'], 'children': []};
            pline = line[line.length - 1].children;
            for(i=0; i < upHier.length; i++)
                pline[pline.length] = '<span style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                    ' onclick="ibiChart.swapField(' + rtn + ',' + upHier[i].column + ',' +
                    upHier[i].currentCol + ',' + upHier[i].gotoCol + ')">' +
                    upHier[i].targetField+'<\/span><br>';

        } else
        if(upHier.length == 1) {
            line[line.length] = '<span style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                ' onclick="ibiChart.swapField(' + rtn + ',' + upHier[0].column + ',' +
                upHier[0].currentCol + ',' + upHier[0].gotoCol + ')">' +
                ibiMsgStr['drillup'] + ' '+ upHier[0].targetField+'<\/span><br>';
        }

        if(downHier.length > 1) {
            line[line.length] = {'entry': ibiMsgStr['drilldown'], 'children': []};
            pline = line[line.length - 1].children;
            for(i=0; i < downHier.length; i++)
                pline[pline.length] = '<span style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                    ' onclick="ibiChart.swapField(' + rtn + ',' + downHier[i].column + ',' +
                    downHier[i].currentCol + ',' + downHier[i].gotoCol +
                    ',[' + colsText + '],[[' + labelsText + ']])">' +
                    downHier[i].targetField+'<\/span><br>';

        } else
        if(downHier.length == 1) {
            line[line.length] = '<span style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                ' onclick="ibiChart.swapField(' + rtn + ',' + downHier[0].column + ',' +
                downHier[0].currentCol + ',' + downHier[0].gotoCol +
                ',[' + colsText + '],[[' + labelsText + ']])">' +
                ibiMsgStr['drilldown'] + ' '+ downHier[0].targetField+'<\/span><br>';
        }

        /*
        for(j=0; j< hier.length; j++)
        {
            col = hier[j].column;
            if(hier.length > 1) {
                title = hier[j].title;
                if(title == "")
                    title = hier[j].fieldname;
                line[line.length] = {'entry':title,'children':[]};
                pline = line[line.length-1].children;
            }
            i = inarray(hier[j].fields,hier[j].fieldname,true);
            if(i==-1)
                i = inarray(hier[j].fields,hier[j].qualname,true);
            if((i==-1) && (hier[j].alias !=""))
                i = inarray(hier[j].fields,hier[j].alias,true);

            if(i!=-1) {
                if(i>0)
                    pline[pline.length] = '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiChart.swapField(' + rtn + ',' + col + ',' + i + ',' + (i - 1) + ')">' + ibiMsgStr['drillup'] + '<\/span><br>';
                if(i< (hier[j].fields.length-1))
                    pline[pline.length] = '<span style="cursor:pointer;" ' + ID_hover_filter_style + ' onclick="ibiChart.swapField(' + rtn + ',' + col + ',' + i + ',' + (i + 1) + ',[' + colsText + '],[[' + labelsText + ']])">' + ibiMsgStr['drilldown'] + '<\/span><br>';
            }
        }
        */
        if(line.length == 0)
            line = '';
        return line;
    }

    function SwapField(tn,col,fromField,toField,icols,ivalues)
    {
        var mytable = getMyTable(tn);
        var fieldInfo = mytable.a_capt[col].hierInfo;
        var fieldnames;
        var sobj = {};
        var cols = [col];
        var values = [];
        var chartInfo = getPn(-1,tn);
        var i,j;
        var f, vals;
        var st;
        var ftype = arConstants.FILTER_IN;

        var findFilter = function(fobj) {
            var f, finfo, v;
            if (typeof fobj.obj != "undefined") {
                f = fobj.obj;
            } else {
                finfo = {};
                finfo.condition = fobj.filters[0].condition;
                v = fobj.filters[0].column;
                if(v[0]!="[") {
                    v = [v];
                } else {
                    try {
                        v = JSON.parse(v);
                    } catch(e) {
                        var v1 = v.split("[");
                        v1 = v1[1].split("]");
                        v = v1[0].split(",");
                    }
                }
                finfo.dataColumn = v;
                f = ibiChart.findFilter(finfo,true,true);
                if(f)
                    f = f.obj;
            }
            return f;
        };

        var buckets = mytable.a_cntl.buckets;
        sobj.sortindex = col;
        for (i in buckets) {
            for(j = 0; j < buckets[i].length; j++)
                if(buckets[i][j] == col) {
                    sobj.bucket = i;
                    sobj.bucketPosition = j;
                    break;
                }
        }

        if(mytable.a_capt[col].isTempDefine)
            sobj.field = mytable.a_cntl.a_cols[col].field;
        else
            sobj.field = mytable.a_cntl.a_cols[col].qualname;
        if(typeof chartInfo.hierFilters == "undefined") {
            chartInfo.hierFilters = [];
            chartInfo.userHierFilters = [];
        }
        if(typeof mytable.swapFieldFirstCall == "undefined"){
            mytable.swapFieldFirstCall = {};
            mytable.swapFieldOriginal = {};
            if(!mytable.drillDownChangedFunc)
                mytable.overrideToolTip = {};
        }
        if(!mytable.swapFieldFirstCall[col]) {
            mytable.swapFieldFirstCall[col] = true;
            mytable.swapFieldOriginal[col] =  fieldInfo.cols[fromField];
        }
        if(fieldInfo) {
            if(typeof icols != "undefined") { //Drill down
                for(i=0; i < icols.length; i++){
                    if(col == icols[i])
                        values[0]=ivalues[0][i];
                }
                //chartInfo.hierFilters[fromField] = ibiChart.addFilter(tn, cols, arConstants.FILTER_IN, values);
                chartInfo.hierFilters[fromField] = ibiChart.addFilter(tn, icols, ftype, ivalues,undefined,undefined,undefined,undefined,undefined,true);
                f = findFilter(chartInfo.hierFilters[fromField]);
                st = 1;
                if(f) {
                    if (typeof f.undoStack != "undefined") {
                        st = f.undoStack.clickCount;
                        //if (mytable.filterChangedFunc)
                            st++;
                    }
                }

                if(typeof chartInfo.hierFilters[fromField].obj != "undefined") {
                    chartInfo.hierFilters[fromField].obj.usedAsHiddenGlobal = true;
                    var found = false;
                    for(i=0; i < ibiCompound.hiddenGlobalFilters.length;i++)
                        if(ibiCompound.hiddenGlobalFilters[i].id == chartInfo.hierFilters[fromField].obj.id )
                            found = true;
                    if(!found)
                    ibiCompound.hiddenGlobalFilters[ibiCompound.hiddenGlobalFilters.length] = chartInfo.hierFilters[fromField].obj;
                }
                sobj.type = "drilldown";
                chartInfo.hierFilters[fromField].dynamic = true;
                fieldnames = [];
                for(i = 0;i < icols.length; i++)
                    fieldnames[i] = getCacheFieldName(mytable,icols[i],true);
                chartInfo.userHierFilters[fromField] = {'fieldnames':fieldnames,'cols':icols,'clickCount':st};
                af = fromField;
            } else { //drill up
                sobj.type = "drillup";
                vals = null;
                f = null;
                var dontChangeFilter = false;
                if(typeof chartInfo.userHierFilters[toField] != "undefined") {
                    if (typeof chartInfo.hierFilters[toField] != "undefined") {
                        f = findFilter(chartInfo.hierFilters[toField]);
                        if (f) {
                            ftype  = ibiStd.mapFilterObjectCondition(f.filterCondition);
                            if(f.undoStack.clickCount <= chartInfo.userHierFilters[toField].clickCount) {
                                //vals = f.undoStack.getPreviousValueInternal();
                                vals = f.undoStack.popValue().valueInternal;
                                vals = f.undoStack.getCurrentValueInternal();
                                if(vals) {
                                    if(typeof vals.object!= "undefined") {
                                        ftype = vals.object.type;
                                        vals = vals.object.values;
                                    } else
                                    vals = null;
                                }
                            } else
                            dontChangeFilter = true;
                            if(vals == null)
                                if(!f.showAll) {
                                    if(f.defaultValues)
                                        vals = [f.defaultValues];
                                }
                        }
                    }
                    if((vals == null) || (vals.length == 0))
                        vals = [[ibiMsgStr["all"]]];
                    //ibiChart.addFilter(tn, chartInfo.userHierFilters[toField].fieldnames, arConstants.FILTER_IN, vals,undefined,undefined,undefined,undefined,true);
                }
                if(!mytable.filterChangedFunc) {
                    if(typeof chartInfo.hierFilters[toField] != "undefined") {
                        if(chartInfo.hierFilters[toField].obj.deleted) {
                            delete chartInfo.hierFilters[toField];
                            delete chartInfo.userHierFilters[toField];
                        }
                    }
                }
            }
            if(!mytable.drillDownChangedFunc) {
                mytable.overrideAxisTitle = true;
                mytable.overrideToolTip[col] = {'fromName':fieldInfo.cols[fromField].name,'toName':fieldInfo.cols[toField].name,
                    'fromField':fieldInfo.cols[fromField].field,'toField':fieldInfo.cols[toField].field};
                mytable.ru_a_capt[col] = ibiStd.copyObject(mytable.ru_a_capt[col]);
                mytable.ru_a_capt[col].name = ibiStd.copyObject(fieldInfo.capt[toField].name);
                mytable.ru_a_capt[col].format = fieldInfo.capt[toField].format;
                mytable.ru_a_capt[col].type = fieldInfo.capt[toField].type;
                mytable.ru_a_capt[col].isDefine = (fieldInfo.capt[toField].isDefine?true:false);
                mytable.ru_a_capt[col].isTempDefine = (fieldInfo.capt[toField].isTempDefine?true:false);

                mytable.a_capt[col] = ibiStd.copyObject(mytable.a_capt[col]);
                mytable.a_capt[col].name = ibiStd.copyObject(fieldInfo.capt[toField].name);
                mytable.a_capt[col].format = fieldInfo.capt[toField].format;
                mytable.a_capt[col].type = fieldInfo.capt[toField].type;
                mytable.a_capt[col].isDefine = (fieldInfo.capt[toField].isDefine?true:false);
                mytable.a_capt[col].isTempDefine= (fieldInfo.capt[toField].isTempDefine?true:false);

                if(mytable.a_cntl.dataReport) {
                    var dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
                    if (dataReportIndex != -1) {
                        var dataField = getDataFieldByName(MyTable[dataReportIndex].a_capt,
                            MyTable[dataReportIndex].a_cntl.a_cols, fieldInfo.cols[toField].field);
                        mytable.ru_a_capt[col].dataField = dataField;
                        mytable.a_capt[col].dataField = dataField;
                    }
                }

                mytable.ru_a_cntl.a_cols[col] = ibiStd.copyObject(fieldInfo.cols[toField]);
                mytable.a_cntl.a_cols[col] = ibiStd.copyObject(fieldInfo.cols[toField]);
                mytable.filterChange = true;
                if(!mytable.tdg_props)
                    mytable.tdg_props = {};
                if(mytable.fexParts) {
                    if(mytable.fexParts.graph_js_final) {
                        if (mytable.fexParts.graph_js_final.indexOf("map_by_field") > -1) {
                            if(typeof mytable.fexParts.save_graph_js_final == "undefined")
                                mytable.fexParts.save_graph_js_final = mytable.fexParts.graph_js_final;
                            var l = mytable.fexParts.save_graph_js_final.split("\"map_by_field\":");
                            mytable.fexParts.graph_js_final = l[0]+"\"map_by_field\":\""+fieldInfo.cols[toField].qualname+'"';
                            l = l[1].split('"');
                            l.splice(0,2);
                            mytable.fexParts.graph_js_final += l.join('"');
                        }
                        if (mytable.fexParts.graph_js_final.indexOf("geoRoleIndex") > -1) {
                            if (typeof mytable.fexParts.save_graph_js_final == "undefined")
                                mytable.fexParts.save_graph_js_final = mytable.fexParts.graph_js_final;
                            var l = mytable.fexParts.save_graph_js_final.split("\"geoRoleIndex\":");
                            mytable.fexParts.graph_js_final = l[0] + "\"geoRoleIndex\":" + (toField+1) + '';
                            l = l[1];
                            var lp = l.indexOf(",");
                            var lp2 = l.indexOf("}");
                            if((lp>-1) & (lp <lp2))
                                lp2 = lp;
                            mytable.fexParts.graph_js_final += l.substr(lp2);
                        }

                    }
                } else
                ibiStd.mergeObject(mytable.tdg_props,
                    {
                        "extensions":{
                            "com.esri.map":{
                                "geoRoleIndex":(toField+1)
                            }
                        }
                    });

                //dont need since filter is going to be apply.
                //mytable.gshow();
            } else {
                if(sobj.bucket == "ACTIVE_NOTUSED") {
                    var sortCol = -1;
                    if(mytable.fexParts) {
                        for (var l = 0; l <= mytable.fexParts.focus.bys.length; l++) {
                            if (fieldInfo.cols[fromField].qualname == mytable.fexParts.focus.bys[l])
                                sortCol = l;
                        }
                    }
                    sobj.bucket = "LOCATION";
                    sobj.bucketPosition = 0;
                    if(sortCol != -1)
                        sobj.sortindex = sortCol;
                }
                mytable.drillDownChangedFunc(sobj);
            }
            if(sobj.type == "drillup") {
                if ((typeof chartInfo.userHierFilters[toField] != "undefined") && (!dontChangeFilter))
                    ibiChart.addFilter(tn, chartInfo.userHierFilters[toField].fieldnames, ftype, vals, undefined, undefined, undefined,true, true,true);
                else
                    mytable.gshow();
            }

        }
    }

    function buildDrillToolTip(mytable,buckets,capt,cntl,cont,icol)
    {
        var col = icol;
        var cols = [col];
        var drillString = '';
        var rtn = mytable.id;
        var rrow = 0;
        var ucol;
        var MDs = null;
        var Mn, ii;
        var encloseInParens;
        //var stnode = mytable.getColumnStyle(col,rrow,0,si,'',col,'NODE');
        //if(stnode.MDdrillindex!=null)
        //    MDs = MDitems[rtn][stnode.MDdrillindex];
        //else
        var M = [];
        var pM;
        var c;
        var menus = {};
        if(mytable.a_cntl.hasBuckets) {
            for(c=0; c < buckets.SIZE.length; c++) {
                if(!inarray(cols,buckets.SIZE[c]))
                    cols = cols.concat([buckets.SIZE[c]]);
            }
            for(c=0; c < buckets.COLOR.length; c++) {
                if(!inarray(cols,buckets.COLOR[c]))
                    cols = cols.concat([buckets.COLOR[c]]);
            }
        }
        for(var cc=0; cc <cols.length; cc++) {
            col = cols[cc];
            ucol = col;
            if(mytable.isRollUp) {
                rtn = mytable.parent_table;
                ucol = capt[col].orgCol;
            }
            if (capt[col].hasMultiDrill) {
                for(var k=0; k < MDitems[rtn].length; k++) {
                    MDs = MDitems[rtn][k];
                    if((MDs!=null)&&(MDs.length)) {
                        for (var i = 0; i < MDs.length; i++) {
                            if ((MDs[i].col == -1) ||
                                (MDs[i].col == 10003) ||
                                    (MDs[i].col == 10004 && capt[col].isby) ||
                                    (MDs[i].col == 10005 && !capt[col].isby) ||
                                (getRealColumn(mytable, MDs[i].col - 1) == ucol)) {
                                text = MDs[i].text;
                                putline = true;
                                target = 'null';
                                if (MDs[i].target != "") target =  '\''+MDs[i].target+'\'';
                                url = MDs[i].url;
                                if (url == "field") {
                                    scol = MDs[i].urlfield;
                                    url = mytable.IBs[cont[rrow][scol][DARAW]];
                                }
                                encloseInParens = /.alert$/.test(url);
                                if(url)
                                    if(url.substr(0,11)=="javascript:")
                                        encloseInParens = true;
                                if ((typeof(MDs[i].args) != "undefined") && (MDs[i].args.length > 0)) {
                                    for (var j = 0; j < MDs[i].args.length; j++) {
                                        var formated = false;
                                        if(MDs[i].args[j].formated)
                                            formated = true;
                                        if (MDs[i].args[j].col > -1) {
                                            if (mytable.isRollUp)
                                                scol = getRollColumn(mytable, MDs[i].args[j].col);
                                            else
                                                scol = getRealColumn(mytable, MDs[i].args[j].col);
                                            if(formated)
                                                scolval = "{{AR_UFLD_" + cntl.a_cols[scol].field + "}}";
                                            else
                                                scolval = "{{AR_URFLD_" + cntl.a_cols[scol].field + "}}";
                                        } else if (typeof(MDs[i].args[j].literal) != "undefined") {
                                            scolval = MDs[i].args[j].literal;
                                            scolval = URLencode(scolval);
                                        } else {
                                            scol = -1;
                                            if (MDs[i].args[j].col == -1) {
                                                scol = MDs[i].args[j].focCol;
                                            } else
                                                for (var jj = 0; jj < cntl.a_cols.length; jj++)
                                                    if ((MDs[i].args[j].focCol) == capt[jj].focCol)
                                                        scol = jj;
                                            if (scol > -1) {
                                                if(formated)
                                                    scolval = "{{AR_UFLD_" + cntl.a_cols[scol].field + "}}";
                                                else
                                                    scolval = "{{AR_URFLD_" + cntl.a_cols[scol].field + "}}";
                                            }
                                        }
                                        if(encloseInParens && j==0)
                                            url += "(";
                                        url += (encloseInParens) ? "\\'" : URLencode(MDs[i].args[j].name) + '=';
                                        if (typeof(scolval) == "undefined") scolval = '';
                                        url += scolval;
                                        url += (encloseInParens) ? "\\'" : "";
                                        if (encloseInParens && j == MDs[i].args.length-1 ) {
                                            url += ")";
                                        }
                                        if (j + 1 < MDs[i].args.length)
                                            url += (encloseInParens)?',':'&';
                                    }
                                }
                                if(drillString == "")
                                    drillString = [];

                                M = drillString;
                                if((MDs[i].name) && (typeof menus[MDs[i].name] != "undefined"))
                                    pM = menus[MDs[i].name].index;
                                else
                                if(MDs[i].text  && MDs[i].url && (typeof menus[MDs[i].text+':'+MDs[i].url] != "undefined")) {
                                    pM = menus[MDs[i].text+':'+MDs[i].url].index;
                                } else
                                    pM = M.length;

                                if(MDs[i].parent) {
                                    Mn = menus[MDs[i].parent];
                                    if(Mn.type == "index") {
                                        ii = Mn.index;
                                        Mn.menu[ii] = {
                                            'entry': Mn.menu[ii].substring(0, Mn.menu[ii].length - 4),
                                            'children': []
                                        };
                                        menus[MDs[i].parent] = Mn.menu[ii];
                                    }
                                    M = menus[MDs[i].parent].children;
                                    pM = menus[MDs[i].parent].children.length;
                                }
                                if(text == "SEPARATOR")
                                    M[pM] = "<hr>";
                                else if (typeof url != "undefined") {
                                    url = '"javascript:MDCall(\''+url+'\',\'' + MDs[i].type + '\',' + target + ')"';
                                    M[pM] = '<span style="cursor:pointer;' + Tooltip_ext_props + '" ' + ID_hover_filter_style +
                                        ' onclick='+url+'>' + text + '<\/span><br>';
                                } else
                                    M[pM] =  text + '<br>';
                                    //M[pM] = '<span style="cursor:pointer;" ' + ID_hover_filter_style + '>' + text + '<\/span><br>';

                                if(MDs[i].name) {
                                    menus[MDs[i].name] = {'index':pM,'menu':M,'type':'index'};
                                }
                                if (MDs[i].text  && MDs[i].url) {
                                    menus[MDs[i].text+':'+MDs[i].url] = {'index': pM, 'menu': M, 'type': 'index'};
                                }
                            }
                        }
                    }
                }
            }
        }
        return drillString;
    }

function bucketCompressToArray(labels)
{
    var ar,ab = [];
    var node;
    var isEnd =  true;
    if(labels.length) {
        for(var j in labels[0]) {
            if(typeof labels[0][j] == "object")
            isEnd = false;
            break;
        }
    }

    if(isEnd)
        return labels;
    else {
    for(var i=0; i <  labels.length; i++) {
            for (var j in labels[i]) {
                ar = bucketCompressToArray(labels[i][j]);
            for(var k=0; k < ar.length; k++) {
                    ab[ab.length] = j + '=:=' + ar[k];
            }        
        }
    }
    }
    return ab;
}

    function bucketCompressToGroupLabels(labels,tcapt,bucket,bucketpos) {
        var a = bucketCompressToGroupLabels2(labels,tcapt,bucket,bucketpos);
        if(a == -1) {
            a = [];
            for(var i = 0; i < labels.length; i++)
                a[i] = '';
        }
        return a;

    }

    function bucketCompressToGroupLabels2(labels,tcapt,bucket,bucketpos)
    {
        var ar,ab = [],abb;
        var i, j,k,pos,kkl;
        var isEnd =  true;
        var isArray;
        var nextpos = bucketpos+1;
        var allNoprints = true;
        for(i=0; i < bucket.length; i++)
            if(!tcapt[bucket[i]].noprint)
                allNoprints = false;

        if(!bucket)
            return labels;

        if(labels.length) {
            for(j in labels[0]) {
                if(typeof labels[0][j] == "object")
                isEnd = false;
                break;
            }
        }

        if(isEnd) {
            if(tcapt[bucket[bucketpos]].noprint) {
                return -1;
            } else
            return labels;
        } else {
            ab = null;
            var prev = null;
            if(tcapt[bucket[bucketpos]].noprint) {
                for(i=0; i <  labels.length; i++) {
                    for (j in labels[i]) {
                        ar = bucketCompressToGroupLabels2(labels[i][j], tcapt, bucket, nextpos);

                        isArray = (Object.prototype.toString.call(ar) === "[object Array]");
                        if (!isArray)
                            if (typeof(ar["______array"]) != "undefined")
                                isArray = true;

                        if(ar==-1)
                            isArray = true;

                        if(bucketpos == 0) {
                            if (ab == null)
                                ab = [];
                            if (isArray) {
                                abb = ab;
                            } else {
                                ab[ab.length] = {};
                                abb = ab[ab.length-1];
                            }

                        } else {
                            if(ab == null) {
                                if (isArray || ar == -1) {
                                    ab = [];
                                } else {
                                    ab = {};
                                }
                            }
                            abb = ab;
                        }
                        if (isArray) {
                            if(ar == -1) {
                                for (k = 0; k < labels[i][j].length; k++)
                                    abb[abb.length] = '';
                            } else {
                                for (k = 0; k < ar.length; k++) {
                                    if(typeof ar[k] == "object") {
                                        for(var kk in ar[k]) {
                                            kkl = kk;
                                        }
                                    } else
                                        kkl = ar[k];
                                    if(kkl == prev)
                                        pos = abb.length-1;
                                    else
                                        pos = abb.length;

                                    prev = kkl;

                                    if(typeof abb[pos] == "undefined")
                                        abb[pos] = ar[k];
                                    else
                                    if(typeof abb[pos][kkl] == "object")
                                        abb[pos][kkl][abb[pos][kkl].length] = ar[k][kkl][0];

                                    if(typeof abb[pos] != "object")
                                        prev = null;

                                }
                            }
                        } else {
                          for (k in ar)
                                abb[k] = ar[k];
                        }
                    }
                }
                if(typeof ab == "object")
                    if((ab.length == 1) && (ab[0] == ""))
                        ab = -1;
            } else
            for(i=0; i <  labels.length; i++) {
                for (j in labels[i]) {
                    ar = bucketCompressToGroupLabels2(labels[i][j], tcapt, bucket, nextpos);
                    if(ar == -1) {
                        if(ab == null) ab = [];
                        for(k=0; k < labels[i][j].length; k++)
                            ab[ab.length] = j;
                    }
                    else {
                        if (ab == null) ab = [];
                        ab[ab.length] = {};
                        ab[ab.length-1][j] = ar;
                    }
                }
            }
        }
        return ab;
    }

    function genNestedBucketRemoveNP(labels,bucket,tcapt,c)
    {
        var col = 0;
        var l, i, v, j;
        if(typeof c != "undefined")
            col = c;
        var newLabels = null;
        var isObject = (typeof labels[0] == "object");
        var isNoPrint = tcapt[bucket[col]].noprint;
        var emptyObject = [{'isnull':true,'length':0}];

        if(isNoPrint && !isObject ) {
            emptyObject[0].length = labels.length;
            if(typeof c == "undefined") {
                newLabels = [];
                for(i=0;i<labels.length;i++)
                    newLabels[newLabels.length] = '';
                return newLabels;
            } else
            return emptyObject;
        }

        if(!isObject) {
            return labels;
        }

        newLabels = [];


        for(i=0; i <labels.length; i++)
        {
            for(v in labels[i]) {
                l = genNestedBucketRemoveNP(labels[i][v],bucket,tcapt,col+1);
                if(l[0].isnull) {
                    if(isNoPrint && (col !=0)) {
                        newLabels = emptyObject;
                        emptyObject[0].length += l[0].length;
                    } else
                    for(j=0;j<l[0].length;j++)
                        newLabels[newLabels.length] = v;
                } else {
                    if(isNoPrint)
                        newLabels = newLabels.concat(l);
                    else {
                        newLabels[i] = {};
                        newLabels[i][v] = l;
                    }
                }
            }
        }
        return newLabels;
    }

function genNestedBucket(bucket,tcapt,tcont,ibs,sort,compress,formatedString)
{
    var vlist = {};
    var labels;
    var i,j,vs;
    var gnode;
    var col;
    var rootVs = ",.,";
    var displayCount=0;
    var dc;
    var gpos;
    var k;
    var vsl;
    var lobj = {'labels':null,'noprints':null};
    var glist = {};
    var vChange = [];
    var type;
    var pvs;
    var fs = false;
    if(formatedString)
        fs = true;

    for(i=0;i<bucket.length;i++)
        //if(!tcapt[bucket[i]].noprint)
            displayCount++;
    labels = [];
    //if(displayCount>1)
    //    labels = {};
    //else
    //    labels = [];

    for(j=0; j < tcont.length; j++) {
        gnode = labels;
        dc = 0;
        vsl = '';
        pvs = '';
        for(i=0; i < bucket.length; i++) {
            col = bucket[i];
            type = tcapt[col].type;
            if(typeof tcapt[col].realType != "undefined")
                type = tcapt[col].realType;
            //if(tcapt[col].noprint)
            //    continue;
            dc++;
            if(type == "IBIDATE" || (fs && type == "IBINUM"))
                vs = ibs[tcont[j][col][DASTR]]+'';
            else
                vs = bgetDataValue(tcont[j][col],ibs,tcapt[col].type)+"";
            pvs+=vs;
            if(vChange[i] != vs) {
                vChange[i] = vs;
                //for(k=i+1;k<bucket.length;k++)
                //    glist[k] = {};
            }

            if((dc) < displayCount) {
                gpos = -1;
                /*
                for(k=0;k<gnode.length;k++)
                    if(typeof gnode[k][vs] != "undefined") {
                        gpos = k;
                        break;
                    }
                    */
                vlist[i+'<::>'+vsl] = true;
                vsl += ':'+vs;

                if(typeof glist[vsl] != "undefined")
                    gpos = glist[vsl];

                if((gpos == -1) || (typeof gnode[gpos] == "undefined")) {
                    if(gpos == -1)
                        gpos = gnode.length;
                    gnode[gpos] = {};
                    gnode[gpos][vs] = [];
                    glist[vsl] = gpos;
                }
                gnode = gnode[gpos][vs];

            } else {
                if((vs == rootVs) && !compress){
                    vsl = vs +';::;'+j;
                } else {
                    vsl += ':'+vs;
                    rootVs = vs;
                }
                if(!vlist[i+'<::>'+vsl]) {
                    gnode[gnode.length] = rootVs;
                    vlist[i+'<::>'+vsl] = true;
                }
            } 
        }
    }
    if(sort)
        sortNestedLabels(labels,tcapt,bucket,0);
    return labels;        
}


function sortNestedLabels(labels,tcapt,bucket,bucketpos)
{
    var isArray;
    var nextpos = bucketpos +1;
    var i,j;
    var f = null;
    for(i in labels[0]) {
        f = i;
        break;
    }
    var type = tcapt[bucket[bucketpos]].type;
    if(typeof tcapt[bucket[bucketpos]].realType != "undefined")
        type = tcapt[bucket[bucketpos]].realType;

    if((labels) && (labels.length)) {
        if (typeof(labels[0][f])!="object") {
            if(type == "IBISTR") {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort();
                else
                    labels.sort(function (x, y) {
                        if (x > y)  return -1;
                        if (x < y)  return 1;
                        return 0;
                    });
            } else
            if(type == "IBIDATE") {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort(function (x, y) {
                        var x1 = ibiStd.ibiDateToJavaScriptDate(x,tcapt[bucket[bucketpos]].format);
                        var y1 = ibiStd.ibiDateToJavaScriptDate(y,tcapt[bucket[bucketpos]].format);
                        if (x1 < y1)  return -1;
                        if (x1 > y1)  return 1;
                        return 0;
                    });
                else
                    labels.sort(function (x, y) {
                        var x1 = ibiStd.ibiDateToJavaScriptDate(x,tcapt[bucket[bucketpos]].format);
                        var y1 = ibiStd.ibiDateToJavaScriptDate(y,tcapt[bucket[bucketpos]].format);
                        if (x1 > y1)  return -1;
                        if (x1 < y1)  return 1;
                        return 0;
                    });
            } else {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort(function (x, y) {
                        if (x*1 < y*1)  return -1;
                        if (x*1 > y*1)  return 1;
                        return 0;
                    });
                else
                    labels.sort(function (x, y) {
                        if (x*1 > y*1)  return -1;
                        if (x*1 < y*1)  return 1;
                        return 0;
                    });
            }
        } else {
            for (i=0; i< labels.length; i++)
                for(j in labels[i])
                    sortNestedLabels(labels[i][j], tcapt, bucket, nextpos);
            if(type == "IBISTR") {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort(function (x, y) {
                        var lx, l, z, ly;
                        for(z in x) {
                            lx = z;
                            break;
                        }
                        for(z in y) {
                            ly = z;
                            break;
                        }
                        if (lx < ly) return -1;
                        if (lx > ly) return 1;
                        return 0;
                    });
                else
                    labels.sort(function (x, y) {
                        var lx, l, z, ly;
                        for(z in x) {
                            lx = z;
                            break;
                        }
                        for(z in y) {
                            ly = z;
                            break;
                        }
                        if (lx > ly)  return -1;
                        if (lx < ly)  return 1;
                        return 0;
                    });
            } else
            if(type == "IBIDATE") {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort(function (x, y) {
                        var lx, l, z, ly;
                        for(z in x) {
                            lx = z;
                            break;
                        }
                        for(z in y) {
                            ly = z;
                            break;
                        }
                        lx = ibiStd.ibiDateToJavaScriptDate(lx,tcapt[bucket[bucketpos]].format);
                        ly = ibiStd.ibiDateToJavaScriptDate(ly,tcapt[bucket[bucketpos]].format);
                        if (lx*1 < ly*1) return -1;
                        if (lx*1 > ly*1) return 1;
                        return 0;
                    });
                else
                    labels.sort(function (x, y) {
                        var lx, l, z, ly;
                        for(z in x) {
                            lx = z;
                            break;
                        }
                        for(z in y) {
                            ly = z;
                            break;
                        }
                        lx = ibiStd.ibiDateToJavaScriptDate(lx,tcapt[bucket[bucketpos]].format);
                        ly = ibiStd.ibiDateToJavaScriptDate(ly,tcapt[bucket[bucketpos]].format);
                        if (lx*1 > ly*1)  return -1;
                        if (lx*1 < ly*1)  return 1;
                        return 0;
                    });
            }
            else {
                if ((tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOWEST) ||
                    (tcapt[bucket[bucketpos]].orow == arConstants.OROW_LOW_NOPR))
                    labels.sort(function (x, y) {
                        var lx, l, z, ly;
                        for(z in x) {
                            lx = z;
                            break;
                        }
                        for(z in y) {
                            ly = z;
                            break;
                        }
                        if (lx*1 < ly*1) return -1;
                        if (lx*1 > ly*1) return 1;
                        return 0;
                    });
                else
                    labels.sort(function (x, y) {
                        var lx, l, z;
                        for(var z in x) {
                            lx = z;
                            break;
                        }
                        for(var z in y) {
                            ly = z;
                            break;
                        }
                        if (lx*1 > ly*1)  return -1;
                        if (lx*1 < ly*1)  return 1;
                        return 0;
                    });
            }

        }
    }

}

function generateAdvancedDataProvider(yc,xc,mytable,tcont,ibs, btypeArray,graphMulti,graphLegend,graphAxis,combine,tcapt)
{
    var dataProviderGrouped = {'type':'advanced','data':[],'dataArray':[]};
    var currentNode, node, nodeVal;
    var level, i, j, k;
    var tlevel;
    var cNode;
    var dataNode;
    var groupLabels = {};
    var groupLabelsFlat = [];
    var data = [];
    var gnode={};
    var gMulti = {};
    var SeriesNames = [];
    var SN = {};
    var curS = -1;
    var AxisN = 0;
    var AxisO = {};
    var dataPos;
    var slabels=[];
    var sNv = {};
    
    if(graphMulti+graphLegend+graphAxis<=yc.length) 
        graphAxis = yc.length - (graphMulti+graphLegend+graphAxis);
    
    for (k = 0; k < xc.length; k++) {
        slabels[slabels.length] = mytable.a_cntl.a_cols[xc[k]].name;
    }
            
    if(graphAxis<=1) {
        gnode = [];
        groupLabels = [];
    }
    
    if(graphMulti!=0) {
        dataProviderGrouped.hasMulti = true;
        dataProviderGrouped.multiColumn = mytable.a_cntl.a_cols[yc[0]].name;
    }

    dataProviderGrouped.graphMulti = graphMulti;
    dataProviderGrouped.graphLegend = graphLegend;
    dataProviderGrouped.graphAxis= graphAxis;
    for (i = 0; i < tcont.length; i++) {
        level = 0;
        gnode = groupLabels;
        xS = "";
        doCombine = false;
        for (j = 0; j < yc.length; j++) {
            level++;
            nodeVal = ibs[tcont[i][j][DARAW]];
            if(mytable.a_capt[yc[j]].type==IBINUM) {
                if(nodeVal=="")
                    nodeVal = 0;
                else 
                if(typeof(nodeVal) != "undefined")
                    nodeVal = nodeVal * 1;
            } else
            if(mytable.a_capt[yc[j]].type==IBIDATE) {
                nodeVal = ibs[tcont[i][j][DASTR]]+'';
            }
            nodeVal = nodeVal +'';
            if((graphMulti>0)&&(level == graphMulti)) {
                if(typeof(gMulti[nodeVal])=="undefined") {
                    if(graphAxis == 1)
                        groupLabels = [];
                    else
                        groupLabels = {};
                    gnode = groupLabels;
                    groupLabelsFlat = [];
                    data = [];
                    slabels = [];
                    gMulti[nodeVal] = {"groupLabels":groupLabels,"data":data,"seriesLabels":slabels,"groupLabelsFlat":groupLabelsFlat};
                    if (graphLegend==0) {
                        for (k = 0; k < xc.length; k++) {
                            slabels[slabels.length] = mytable.a_cntl.a_cols[xc[k]].name;
                        }
                    }
                    AxisO = {};
                    sNv = {};
                    AxisN=0;
                }
            }
            if((graphLegend>0)&&(level == (graphMulti+graphLegend))) {
                if(typeof(SN[nodeVal])=="undefined") {
                    SeriesNames[SeriesNames.length] = nodeVal;
                    SN[nodeVal] = SeriesNames.length-1;
                }
                if(typeof(sNv[nodeVal])=="undefined"){
                    for (k = 0; k < xc.length; k++) {
                        slabels[slabels.length] = ((xc.length>1)?mytable.a_cntl.a_cols[xc[k]].name:"")+":"+nodeVal;
                    }
                    sNv[nodeVal] = true;
                }
                curS = SN[nodeVal];
            }
            if(level >= (graphMulti + graphLegend)) {
                tlevel = level - (graphMulti+graphLegend);
                if(xS != "") 
                    groupLabelsFlat[i] += ' / ';
                else
                    groupLabelsFlat[i] = '';
                groupLabelsFlat[i] += nodeVal;
                xS += ":"+nodeVal;
                if(tlevel<graphAxis) {
                    if(typeof(gnode[nodeVal])=="undefined") {
                        if(tlevel<(graphAxis-1))
                            gnode[nodeVal] = {};
                        else
                            gnode[nodeVal] = [];
                    }
                    gnode = gnode[nodeVal];

                } else {
                    if(typeof(AxisO[xS]) == "undefined") {
                        AxisO[xS] = AxisN;
                        AxisN++;
                        gnode[gnode.length] = nodeVal;
                    }
                    dataPos = AxisO[xS];
                }
            }
        }
        dataNode = data;
        series = 0;
        if ((curS != -1) && (graphMulti+graphLegend+graphAxis<yc.length))  {
            series += (curS)*xc.length;
        }
        for (j = 0; j < xc.length; j++) {
            if(!mytable.a_capt[xc[j]].b_hide) {
                nodeVal = ibs[tcont[i][j+yc.length][DARAW]];
                if(mytable.a_capt[xc[j]].type==IBINUM) {
                    if(nodeVal=="")
                        nodeVal = 0;
                    else
                    if(typeof(nodeVal) != "undefined")
                        nodeVal = nodeVal * 1;
                } else
                if(mytable.a_capt[xc[j]].type==IBIDATE) {
                    nodeVal = ibs[tcont[i][j+yc.length][DASTR]]+'';
                }
                if(typeof(dataNode[series])=="undefined") {
                    dataNode[series] = [];
                    for (k = 0; k < AxisN; k++) {
                        dataNode[series][k] = null;
                    }
                }
                dataNode[series][dataPos] = nodeVal;
                series++;
            }
        }
    }
    dataProviderGrouped.groupLabels = groupLabels;
    dataProviderGrouped.data = data;
    dataProviderGrouped.multi = gMulti;
    dataProviderGrouped.seriesLabels = slabels;
    dataProviderGrouped.flatData = generateFlatDataProvider(yc,xc,mytable,tcont,ibs, btypeArray,tcapt);
    return dataProviderGrouped;
}

    function inGroupArray(Ar,Ob,retloc)
    {
        var al=Ar.length;
        var l;
        var j;
        if(al>0)
            for(var i = 0; i < al; i++) {
                l = null;
                if(typeof Ar[i] == "object") {
                    for (j in Ar[i]) {
                        l = j;
                        break;
                    }
                }
                if ((Ar[i] === Ob) ||(l === Ob )) {
                    if(retloc) return(i);
                    else return(true);
                }
            }
        if(retloc) return(-1);
        else return(false);
    }

function getObjectInArray(InArray,ObjectName)
{
    for(var i = 0; i < InArray.length; i++)
        if(typeof(InArray[i][ObjectName])!="undefined") return InArray[i];
    return null;
}

function ShowChart(pn,useDiv,forMobileView) 
{
    var csize = {'width':parseInt(useDiv.style.width, 10),'height':parseInt(useDiv.style.height, 10)};
    var p = pn.parms;
    var mytable = p.mytable;
    var dataProvider = [];
    var xnames = [];
    var ynames = [];
    var labels = [];
    var xc = p.newcont_xcol;
    var yc = p.newcont_ycol;
    var i, j;

    for (i = 0; i < xc.length; i++) {
        xnames[i] = p.btypeArray[i]+'.'+mytable.a_cntl.a_cols[xc[i]].name;
        labels[i] = mytable.a_cntl.a_cols[xc[i]].name;
        if(mytable.a_cntl.chartAggregate)
            labels[i] += '(' + a_calc_all_types[p.btypeArray[i]] + ')';
    }
    for (i = 0; i < yc.length; i++) { ynames[i] = mytable.a_cntl.a_cols[yc[i]].name; }
    var xcolname;
    for (i = 0; i < p.tcont.length; i++) {
        dataProvider[i] = new Object;
        for (j = 0; j < xc.length; j++) {
            xcolname =  p.btypeArray[j]+'.'+mytable.a_cntl.a_cols[xc[j]].name;
            dataProvider[i][xcolname] = p.ibs[p.tcont[i][j+yc.length][DARAW]];
            if((dataProvider[i][xcolname]=="")&&
                    (mytable.a_capt[xc[j]].type==IBINUM)) dataProvider[i][xcolname] = 0;
        }
        for (j = 0; j < yc.length; j++) { 
            dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = p.ibs[p.tcont[i][j][DARAW]];

            if(mytable.a_capt[yc[j]].type === IBIDATE) {
                dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = p.ibs[p.tcont[i][j][DASTR]];
            }

            if((dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name]=="")&&
                    (mytable.a_capt[yc[j]].type==IBINUM)) dataProvider[i][mytable.a_cntl.a_cols[yc[j]].name] = 0;
        }
    }
    var pfjScript = null;

    if(typeof(p.tcntl.tdgScript)!="undefined") 
        pfjScript = p.tcntl.tdgScript;

 if(p.cctype == 9 && p.tcont.length == 0 && !makeChartExternal) {
         dataProvider = {
             "type" : "buckets",
             "chartType": "bar",
             "series": [ { series: 'all', tooltip: 'auto' } ],
             "groupLabels": null,
             "legend": null,
             "data": [],
             "dataArrayMap": [],
             "colorScale": null,
             "numRecords": 0,
             "buckets": ibiStd.copyObject(tcntl.buckets)
         };
         var myjsScript = {
             "title" : {"text": ""},
             "errorMessage": ibiMsgStr["nodatagraph"]
         };
        ibiTDGCharts.drawChart(p,p.fctype,useDiv,csize,dataProvider,xnames,ynames,labels,p.car,p.ctitle,pfjScript,p.tcntl.jschartScript,myjsScript,false,
            (pn.saveable.org_ibiChart == p.fctype)?pn.saveable.fromGraph:false,p.regression,mytable.a_cntl.FocexUrl,null,forMobileView,null,
            mytable.a_cntl.jsonProps,mytable.a_cntl.graphProps,mytable.a_cntl.graphFinalProps);
 } else
    if((makeChartExternal!=null)&&(p.cctyle!=8)&&(p.cctype!=4)&&(p.cctype!=5)&&(p.cctype!=6)) {
        useDiv.style.width = csize.width+'px';
        useDiv.style.height = csize.height+'px';
        makeChartExternal(p.fctype,useDiv,dataProvider,xnames,ynames,p.car,p.ctitle);
    } else
    switch(p.cctype){
        case 0:drawPieChart(p.pien+'_sc',useDiv,p.pxar,p.yar,p.car,'Arial',1,p.ctitle,csize);break;
        case 1:drawLineChart(p.pien+'_sc',useDiv,p.dataArray,pn.yart,p.yar,p.car,'Arial',p.ctitle,csize, null, null, null, null,pn.xaxisFunction,pn.yaxisFunction);break;
        case 2:drawBarChart(p.pien+'_sc',useDiv,p.dataArray,pn.yart,p.yar,p.car,'Arial',p.ctitle,csize,null,null,p.stacked,pn.xaxisFunction,pn.yaxisFunction);break;
        case 3:
            var tempDataArray = [];
    
            for ( var m=0; m<p.dataArray.length; m++ )
            {
                tempDataArray[m] = CopyArray(p.dataArray[m]);
            }
            drawScatChart(p.pien+'_sc',useDiv,tempDataArray,pn.yart,p.car,'Arial',p.ctitle,csize,null,p.xtype,p.regression,pn.xaxisFunction,pn.yaxisFunction);break;
        case 4:ibiIosGrid.show(pwn[p.win].mytable,useDiv);break;
        case 5:ibiIosGrid.showPivot(p.pien+'_sc',useDiv,p.tcntl,mytable.a_cntl.table_number,p.ctitle,p.win,p.ibs,p.pvcol,p.y_col.length,p.btypeArray,p.y_col,p.linked,p.subTable,p.hideBar,p.tcapt);break;
        case 6:mytable.useReport = drawRollTable(p.pien+'_sc',useDiv,p.tcapt,p.tcont,p.tlook,p.tcntl,mytable.a_cntl.table_number,p.ctitle,p.win,p.ibs,false,6);
            break;
        case 7:ibiFusionCharts.drawChart(p.fctype,p.pien+'_sc',useDiv,dataProvider,xnames,ynames,labels,pn.yart,p.yar,p.car,'Arial',p.ctitle,csize,mytable.a_cntl.GraphEngine,mytable.a_cntl.FocexUrl,p.regression,mytable);break;
        case 8:drawGoogleMap(p.pien+'_sc',useDiv,p.dataArray,pn.yart,p.yar,p.car,'Arial',p.ctitle,csize);break;
        case 9:ibiTDGCharts.drawChart(p,p.fctype,useDiv,csize,pn.parms.dataProvider,xnames,ynames,labels,p.car,p.ctitle,pfjScript,p.tcntl.jschartScript,mytable.myjsScript,false,(pn.saveable.org_ibiChart == p.fctype)?pn.saveable.fromGraph:false,p.regression,mytable.a_cntl.FocexUrl,null,forMobileView,null,mytable.a_cntl.jsonProps,mytable.a_cntl.graphProps,mytable.a_cntl.graphFinalProps);break;
    }
}

function MakeChartFullScreen(win,tablenumber,subTable,show)
{
    var pn = getPn(win,tablenumber);
    if(subTable!=-1) pn = pn.children[subTable];
    pn.fullscreen = show;
    ibi_iPadMenu.getfullscreen(show,win,subTable,tablenumber);
}


function drawGoogleMap()
{
}

function MakeChartMSexport(win,MSprog,subTable)
{

    var pn = getPn(win,win+999);
    if(subTable!=-1) pn = pn.children[subTable];
    var mytable = MyTable[pn.table_number];
    var x_Str = pn.saveable.x_Str;
    var y_Str = pn.saveable.y_Str;
    var ctitle = x_Str + 'By ' + y_Str;
    var dataArray = pn.xars;
    var yar = pn.yars;
    var ctype = pn.saveable.ctype; 
    var yart = pn.yart;
    var x_col = pn.saveable.x_cols;

    switch(MSprog) {
        case MSWORD: ibiActiveX.WordGraph(ctitle,dataArray,yar,yart,ctype,win,pn); break;
        case MSEXCEL: ibiActiveX.ExcelGraph(ctitle,dataArray,yar,yart,ctype,win,pn); break;
        case MSPOWERPOINT: ibiActiveX.PptGraph(ctitle,dataArray,yar,yart,ctype,win,pn); break;
    }
}

function build_chartagg(mytable,id,win,icon,pn,ctype,subTable,noMenu){
    var j;
    var n_id = null;
    var MI_FT = [];
    var count;
    var act = a_calc_types; 
    MI_FT[0] = [icon,null,null];

    if(!noMenu) {
        count = 0;
        if (ctype == chartIsScat) act = a_calc_scatt_types;
        if (ctype == chartIsRoll) act = a_calc_roll_types;
        for (j in act) {
            if (j == 'NONE') continue;
            MI_FT[0][3 + count] = [[act[j]], null, {
                'ocv': 'setchartnbtype',
                'oc': 'ibiChart.makeChartNBType(' + win + ',"' + j + '",' + mytable.a_cntl.table_number + ',' + subTable + ')'
            }];
            count++;
        }
    }

    if(pn.agg != null) n_id = pn.agg;
    var toolbr = d.getElementById(id);
    var m = MP_AGG;
    if(b_mobile) m = MP_AGG2;
    if(toolbr) {
        if(noMenu) {
            toolbr.innerHTML = icon;
        } else {
            var MP_copy = ibiStd.copyObject(m);
            //MP_copy[0].width = 20;
            MP_copy[0].css = {};
            pn.agg = ibiMenu.Menu(MI_FT, MP_copy, toolbr, mytable, null, n_id, id);
        }
    }
}


function build_chartdrop(mytable,id,win,icon,sline,pn,ctype,subTable) {
    var MI_FT=[];
    var n_id = null;
    var i=3,count,pp;
    var ic,pp2;
    var isBucket = (mytable.a_cntl.hasBuckets ? true : false);
    var menuops = mytable.a_cntl.menuops;
    var do_charttool = menuops.charttool;
    var do_gridtool = menuops.gridtool;

    MI_FT[0] = [icon,null,null];
    if(win>-1) MI_FT[0][i++]=[[ibiMsgStr['nwbt']],null,{'ocv':'newchart','oc' : 'ibiChart.newMakeChart('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
    //if(win<0) {
    //    if(pn.fullscreen)
    //        MI_FT[0][i++]=[[ibiMsgStr['ogv']],null,{'ocv':'newchart','oc' : 'ibiChart.makeChartFullScreen('+win+','+mytable.a_cntl.table_number+','+subTable+',false)'}];
    //    else
    //        MI_FT[0][i++]=[[ibiMsgStr['fsr']],null,{'ocv':'newchart','oc' : 'ibiChart.makeChartFullScreen('+win+','+mytable.a_cntl.table_number+','+subTable+',true)'}];
    //} else 
    if(b_mobile) {
        if(mytable.fullScreenOn)
            MI_FT[0][i++]=[[ibiMsgStr['ogv']],null,{'ocv':'newchart','oc' : 'ibi_iPadMenu.fullScreen('+mytable.id+',true,false);'}];
        else
            MI_FT[0][i++]=[[ibiMsgStr['fsr']],null,{'ocv':'newchart','oc' : 'ibi_iPadMenu.fullScreen('+mytable.id+',true,true);'}];
    }
    count = 3;
    if(!isBucket) {
        ic = ibiMsgStr['crtgby'];
        if(ctype==chartIsScat) ic = ibiMsgStr['xaxis'];
        MI_FT[0][i] = [[ic],null,null];
        var yl = pn.saveable.y_cols.length;
        if(yl) {
            for(ic=0; ic< yl; ic++) {
                pp2 =mytable.a_cntl.a_cols[pn.saveable.y_cols[ic]].name;
                pp = [pp2, 1, ibiChart.stripComma(mytable.a_cntl.a_cols[pn.saveable.y_cols[ic]].dis)];
                MI_FT[0][i][count++] = [pp, null, {
                    'ocv': 'chartaddycol',
                    'oc': 'ibiChart.makeChartAddYcol(' + win + ',' + pn.saveable.y_cols[ic] + ',true,0,0,' + mytable.a_cntl.table_number + ',' + subTable + ')'
                }];
            }
            MI_FT[0][i][count++] = [[drawline(mytable.a_cntl.menubordercolor),null,null,true], 'SKIP',null];
        }
        for(ic=0; ic< mytable.n_cols; ic++){
            if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[ic].noprint) continue;
            if(!inarray(pn.saveable.y_cols,ic)) {
                pp2 =mytable.a_cntl.a_cols[ic].name;
                pp = [pp2, 0, ibiChart.stripComma(mytable.a_cntl.a_cols[ic].dis)];
                    MI_FT[0][i][count++] = [pp, null, {
                        'ocv': 'chartaddycol',
                        'oc': 'ibiChart.makeChartAddYcol(' + win + ',' + ic + ',false,0,0,' + mytable.a_cntl.table_number + ',' + subTable + ')'
                    }];
            }
        }
        i++;
        ic = ibiMsgStr['addy'];
        if(ctype==chartIsScat) ic = ibiMsgStr['yaxis'];
        MI_FT[0][i++]=build_chartadd(mytable,id,win,ic,pn,ctype,subTable);
        if(ctype==chartIsScat)
            MI_FT[0][i++]=build_chartclrby(mytable,id,win,ibiMsgStr['colorby'],pn,subTable);
    }
    if (b_hasActiveX && mytable.a_cntl.menuops.exporttable) {
        MI_FT[0][i++]=build_chartMSexp(mytable,id,win,ibiMsgStr['mset'],pn,subTable);
    }
    if(ctype==chartIsBar) MI_FT[0][i++]=[[ibiMsgStr['stacked'],pn.saveable.stacked],null,{'ocv':'switchstack','oc' : 'ibiChart.toggleStacked('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
    if(ctype==chartIsScat) MI_FT[0][i++]=[[ibiMsgStr['regress'],pn.saveable.regression],null,{'ocv':'switchreg','oc' : 'ibiChart.toggleRegression('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
    if(ctype==chartIsPie) {
        MI_FT[0][i++]=[[ibiMsgStr['top']],null,null,
            [[ibiMsgStr['top3']],null,{'ocv':'top','oc' : 'ibiChart.toggleTop('+win+','+mytable.a_cntl.table_number+','+subTable+',3)'}],
            [[ibiMsgStr['top5']],null,{'ocv':'top','oc' : 'ibiChart.toggleTop('+win+','+mytable.a_cntl.table_number+','+subTable+',5)'}],
            [[ibiMsgStr['top10']],null,{'ocv':'top','oc' : 'ibiChart.toggleTop('+win+','+mytable.a_cntl.table_number+','+subTable+',10)'}],
            [[ibiMsgStr['topremove']],null,{'ocv':'top','oc' : 'ibiChart.toggleTop('+win+','+mytable.a_cntl.table_number+','+subTable+',0)'}]
            ];
    }
    if(do_charttool && !b_ios) {
        if(ctype==chartIsPivot)
            MI_FT[0][i++] = [[ibiMsgStr['pivottool']],null,{'ocv':'pivottool','oc': 'ibiEditTools.DoPivotToolmod('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
        else
            MI_FT[0][i++] = [[ibiMsgStr['charttool']],null,{'ocv':'charttool','oc': 'ibiEditTools.DoChartToolmod('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
    }
    MI_FT[0][i++] = [[ibiMsgStr['rso']],null,{'ocv':'charttool','oc': 'ibiChart.makeChartRestore('+win+','+mytable.a_cntl.table_number+','+subTable+')'}];
    
    if(pn.xmenu != null) n_id = pn.xmenu;
    var toolbr = d.getElementById(id);
    if(toolbr) {
        var MP_copy = ibiStd.copyObject(MP_GRP);
        MP_copy[0].width = 20;
        MP_copy[0].css = {};
        pn.xmenu = ibiMenu.Menu(MI_FT,MP_copy,toolbr,mytable,null,n_id,id);
    }

}

function build_chartclrby(mytable,id,win,icon,pn,subTable){
    var i,j;
    var addarray = [];
    var MI_FT=[],pp,pp2;
    var _i = 0,checked; 
    MI_FT = [[icon],null, null];
    for(i=0;i<mytable.n_cols;i++){
        if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[i].noprint) continue;
        checked = 0;
        if(pn.saveable.colorby==i) checked=1;
        pp2 =mytable.a_cntl.a_cols[i].name;
        pp = [pp2,checked,ibiChart.stripComma(mytable.a_cntl.a_cols[i].dis)];
        MI_FT[3+_i] = [pp,null,{'ocv':'chartaddcolorby','oc' : 'ibiChart.makeChartAddClrBy('+win+','+i+','+(checked?true:false)+','+mytable.a_cntl.table_number+','+subTable+')'}];
        _i++;

    }
    return MI_FT;
}

function build_chartadd(mytable,id,win,icon,pn,ctype,subTable){
    var i,j;
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

    var _i = 0, checked; 
    for(i=0;i<mytable.n_cols;i++){
        if((ctype==3)&&(mytable.a_capt[i].type==IBISTR)) continue;
        if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[i].noprint) continue;
        checked = 1;
        if(!inarray(addarray,i)) checked=0;
        pp2 =mytable.a_cntl.a_cols[i].name;
        pp = [pp2,checked,ibiChart.stripComma(mytable.a_cntl.a_cols[i].dis)];
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

function undo_c_filter(tableid) {
    var mytable = getMyTable(tableid);
    if(mytable.chartFiltersForUndo) {
        for(var i = 0; i < mytable.chartFiltersForUndo.length; i++) {
            var emptyStack = mytable.chartFiltersForUndo[i].obj.undoStack.resetToPrevious();
            //if(emptyStack)
            //    if(!mytable.chartFiltersForUndo[i].obj.compoundFilter)
            //        ibiFilter.removeFromFilterHolder(mytable.chartFiltersForUndo[i]);
        }
    }
}

function rem_c_filter(filter_id) {
    var j, i,k;
    var targets = "*";
    var filter;
    var hc, hp;

    if(typeof filter_id != "undefined") {
        ibiStd.ShowWait();
        var ar = new activeReport();
        filter = ar.findFilterById(filter_id);
        if(filter) {
            hc = ibiCompound.hiddenGlobalFilters.length;
            hp = 0;
            for (k = 0; k < hc ; k++) {
                if (ibiCompound.hiddenGlobalFilters[hp].id == filter_id) {
                    ibiCompound.hiddenGlobalFilters.splice(hp, 1);
                    filter.obj.usedAsHiddenGlobal = false;
                } else
                    hp++;
            }
            filter.deleteFilter(true);
        }
    } else {
        if(!ibiCompound.chartFilters.length) return false;

        ibiStd.ShowWait();

        for(j=0; j < ibiCompound.chartFilters.length; j++ ) {
                if (!ibiCompound.chartFilters[j].obj.compoundFilter) {
                    //ibiFilter.removeFromFilterHolder(ibiCompound.chartFilters[j]);
                } else {
                //Make sure filter isnt applied since we will be doing that later.
                ibiCompound.chartFilters[j].obj.undoStack.resetToOriginal(true);
                ibiCompound.chartFilters[j].obj.refresh(false);
            }
            if(ibiCompound.hiddenGlobalFilters) {
                hc = ibiCompound.hiddenGlobalFilters.length;
                hp = 0;
                for (k = 0; k < hc; k++) {
                    if (!ibiCompound.hiddenGlobalFilters[hp].active) {
                        if (ibiCompound.hiddenGlobalFilters[hp].id == ibiCompound.chartFilters[j].obj.id) {
                            ibiCompound.hiddenGlobalFilters.splice(hp, 1);
                            ibiCompound.chartFilters[j].obj.usedAsHiddenGlobal = false;
                        } else
                            hp++;
                    } else
                        hp++;
                }
            }
            if(!ibiCompound.chartFilters[j].obj.compoundFilter) {
                ibiCompound.chartFilters[j].deleteFilter(true);
            }
        }
        ibiCompound.chartFilters = [];
    }

    //refresh_c_filter(mytable,((win_num<0)?true:false));


    window.setTimeout(function() {
        if (targets) {
            var tnames = targets.split(",");
            if (targets == "*") {
                tnames = [];
                for (j = 0; j < MyTable.length; j++) {
                    if(MyTable[j].deleted)
                        continue;
                    tnames[j] = MyTable[j].table_name;
                    MyTable[j].redrawCharts = true;
                }
            }
            for (var j = 0; j < tnames.length; j++) {
                var tnm = tnames[j];
                //if (mytable.table_name == tnm)
                //    continue;
                tmytable = ibiStd.getTable(ibiUtil.StripSpace(tnm, true, true));
                if (!tmytable)
                    continue;

                tmytable.o_paging.c = 0;
                tmytable.filterChange = true;
                tmytable.gshow();
            }
        }
        if(ibiFilterTool.opened)
            ibiFilterTool.showFilterTool(-1,true);
        ibiStd.HideWait();
    },100);
    return true;
}

    function find_api_filter(filterInfo,ignoreCondition,dontAdd1) {
        var dontAdd = dontAdd1;
        var storedAlready = [];
        var filter = null;
        var found = false;
        var cc;
        var j;

        for(j=0; j < ibiCompound.chartFilters.length; j++) {
            if((ibiCompound.chartFilters[j].obj.deleted))
                continue;
            storedAlready[storedAlready.length] = ibiCompound.chartFilters[j].obj.id;
            var dc2 = ibiCompound.chartFilters[j].dataColumn;
            if(typeof dc2 != "object")
                dc2 = [ibiCompound.chartFilters[j].obj.dataColumnSave];
            if((dc2.length != filterInfo.dataColumn.length) ||
                    (!ignoreCondition && (ibiCompound.chartFilters[j].filterCondition != ibiStd.mapFilterObjectConditionReverse(filterInfo.condition))))
                continue;
            if(typeof filterInfo.filterTarget != "undefined")
                if(filterInfo.filterTarget != ibiCompound.chartFilters[j].filterTarget)
                    continue;

            //if(mytable.chartFilters[j].length != dc.length)
            //    continue;
            var colc = 0;
            for(cc=0; cc < filterInfo.dataColumn.length; cc++) {
                if (dc2[cc]!= filterInfo.dataColumn[cc])
                    continue;
                colc++
            }
            if(colc == dc2.length)
                found = true;

            if (found) {
                filter = ibiCompound.chartFilters[j];
                break;
            }
        }

        if(!found) {
            for(j=0; j < ibiCompound.drawObjectsApiFilters.length; j++) {
                var dobj = ibiCompound.drawObjectsApiFilters[j];
                dc2 = dobj.dataColumn;
                if(typeof dc2 != "object")
                    dc2 = [dobj.obj.dataColumn];
                if((dc2.length != filterInfo.dataColumn.length) ||
                        (!ignoreCondition && (dobj.filterCondition != ibiStd.mapFilterObjectConditionReverse(filterInfo.condition))))
                    continue;

                if(typeof filterInfo.filterTarget != "undefined")
                    if(filterInfo.filterTarget != dobj.filterTarget)
                        continue;

                //if(mytable.chartFilters[j].length != dc.length)
                //    continue;
                colc = 0;
                for(cc=0; cc < filterInfo.dataColumn.length; cc++) {
                    if (dc2[cc]!= filterInfo.dataColumn[cc])
                        continue;
                    colc++
                }
                if(colc == dc2.length)
                    found = true;

                if (found) {
                    if(inarray(storedAlready,dobj.obj.id,false))
                        dontAdd = true;
                    filter = dobj;
                    if(!dontAdd && !dobj.globalHidden )
                        ibiCompound.chartFilters[ibiCompound.chartFilters.length] = dobj;
                    break;
                }
            }
        }
        return filter;
    }

function add_c_filter(table_number,fcol,ftype,fvalue,fvalue2,connector,table_name,forceMulti,useFieldNames,resetList1)
{
    var scn = 'AND';
    if((typeof connector != "undefined") && (connector !=null))
        scn = connector;
    var mytable=MyTable[table_number];
    var j,k,l,v1,v2,fc,jj;
    var i;
    var ff;
    var col;
    var pnc = [];
    var cc;
    var cols = [fcol];
    var useSameFilterMcol = false;
    var ftypes = [];
    var vals1 = [];
    var vals2 = [];
    var byc, agc;
    var conn = [];
    if(typeof(fvalue)!="undefined")
        vals1 = [fvalue];
    if(typeof(fvalue2)!="undefined")
        vals2 = [fvalue2];
    if(typeof(fcol)=="object") {
        cols = fcol;
        vals1 = fvalue;
        if(typeof(fvalue2)!="undefined")
            vals2 = fvalue2;
        else 
            vals2 = [];
    }

    mytable.redrawCharts = true;

    if(typeof ftype != "object") {
        for (i = 0; i < cols.length; i++)
            ftypes[i] = ftype;
    } else
        ftypes = ftype;

    if(typeof scn != "object") {
        for (i = 0; i < cols.length; i++)
            conn[i] = scn;
    } else
        conn = scn;

    var fieldname = '';
    if((cols.length>1) ||(forceMulti))
        useSameFilterMcol = true;

    if(typeof cols[0] == "string") {
        var c = [];
        for(i=0; i < cols.length; i++)
            c[i] = mytable.getColumnByName(cols[i]);
        cols = c;
    }

    if(cols[0]>-1)
        fieldname = getCacheFieldName(mytable,cols[0],true,true);

    var filter = [];
    mytable.chartFiltersForUndo = filter;
    byc = null;
    if(typeof(ibiCompound.chartFilters) == "undefined")
        ibiCompound.chartFilters = [];

    for(j=0;j<mytable.a_capt.length;j++)
        if(mytable.a_capt[j].isby)
            byc = getCacheFieldName(mytable,j,true,true);
    var sameFilter = null;
    //check if we have a chart filter with same properties
    var reuseFilter = false;
    fc = 'EQ';

    for (j = 0; j < a_filt_types.length; j++)
        if (a_filt_types[j][1] == ftypes[0]) {
            fc = a_filt_types[j][2];
            break;
        }

    var dc = [];
    var resetList = false;
    if(resetList1)
        resetList = true;

    if(useFieldNames) {
        dc = ibiStd.copyObject(fcol);
    } else
    for(cc=0; cc < cols.length; cc++) {
        var argc1 = null;
        if (mytable.a_capt[cols[0]].isby || mytable.a_capt[cols[0]].isCompute)
            byc = null;
        if (mytable.a_cntl.cacheWriteMode == 0) {
            //fieldname = ibiUtil.StripSpace(mytable.a_cntl.a_cols[cols[cc]].field, true, true);
            fieldname = ibiUtil.StripSpace(mytable.a_cntl.a_cols[cols[cc]].qualname, true, true);
        } else
            fieldname = getCacheFieldName(mytable, cols[cc],true,true);
        if ((argc1 == null) && (!mytable.a_capt[cols[cc]].isby) && (mytable.a_capt[cols[cc]].type == IBINUM))
            argc1 = "SUM";
        if (argc1)
            fieldname = argc1 + '.' + fieldname;
        if(argc1 != null)
            if (byc)
                fieldname += ":BY." + byc;
        dc[dc.length] = fieldname;
    }

    var filterTarget = '*';
    if ((typeof table_name != "undefined") && (table_name != null))
        filterTarget = table_name;
    var finfo = {};
    finfo.filterTarget = filterTarget;
    finfo.condition = ftypes[0];
    finfo.dataColumn = dc;
    sameFilter = ibiChart.findFilter(finfo,true,mytable.filterChangedFunc?true:false);
    // if previous condition was NE, make it EQ
    // if previous condition was EQ, ane request is NE, leave it EQ, and remove the value from the list
    if(sameFilter != null) {
        var fc2 = ibiStd.mapFilterObjectCondition(sameFilter.filterCondition);
        for (j = 0; j < a_filt_types.length; j++)
            if (a_filt_types[j][1] == fc2) {
                fc2 = a_filt_types[j][2];
                break;
            }
        if(fc2 != fc) {
            if(fc2 == 'EQ') {
                useSameFilterMcol = true;
                if(fc == "NE") {
                    var nval = [];
                    var vlist = {};
                    var vlist2 = {};
                    var valr;
                    var indx;
                    var vald;
                    dt = [];
                    if(sameFilter.obj.dataProvider.length) {
                        var dt = sameFilter.obj.dataProvider[0];
                        if(cols.length>1)
                            dt = sameFilter.obj.dataProvider[6];
                    }

                    for (j = 0; j < vals1.length; j++) {
                        valr = '';
                        for(i=0;i<vals1[0].length;i++) {
                            vald = vals1[j][i];
                            if(sameFilter.obj.filter_datatype == "IBIDATE") {
                                indx = -1;
                                if(sameFilter.obj.dataProvider && sameFilter.obj.dataProvider.length>4) {
                                    indx = inarray(sameFilter.obj.dataProvider[1], vald, true);
                                    if (indx < 0)
                                        indx = inarray(sameFilter.obj.dataProvider[3], vald + '', true);
                                }
                                if (indx >= 0)
                                    vald = sameFilter.obj.dataProvider[0][indx];
                            }
                            valr += vald + ((i < vals1[0].length - 1) ? arSet.FILTER_SEPARATOR : '');
                        }
                        vlist[valr] = true;
                    }
                    if(sameFilter.obj.dataProvider.length)
                        for (j = 0; j < sameFilter.obj.dataProvider[0].length; j++) {
                            vlist2[sameFilter.obj.dataProvider[0][j]] = j;
                        }

                    dv = sameFilter.obj.values;
                    if((sameFilter.obj.values.length == 0) ||
                            (sameFilter.obj.values[0] ==  ibiMsgStr['all']))
                        dv = sameFilter.obj.dataProvider[0];

                    for(j = 0; j < dv.length; j++) {
                        if((!vlist[dv[j]]) && (dv[j]!=ibiMsgStr['all'])){
                            if(cols.length==1)
                                nval[nval.length] = [ibiStd.copyObject(dt[vlist2[dv[j]]])];
                            else
                                nval[nval.length] = ibiStd.copyObject(dt[vlist2[dv[j]]]);
                        }
                    }
                    vals1 = nval;
                    fc = "EQ";
                }
            } else
            if(fc2 == 'NE') {
                useSameFilterMcol = true;
                if(fc == "EQ") {
                    nval = [];
                    vlist = {};
                    vlist2 = {};
                    valr;
                    dt = sameFilter.obj.dataProvider[0];
                    if(cols.length>1)
                        dt = sameFilter.obj.dataProvider[6];

                    for (j = 0; j < vals1.length; j++) {
                        valr = '';
                        for(i=0;i<vals1[0].length;i++) {
                            vald = vals1[j][i];
                            if(sameFilter.obj.filter_datatype == "IBIDATE") {
                                indx = -1;
                                if (sameFilter.obj.dataProvider && sameFilter.obj.dataProvider.length > 4) {
                                    indx = inarray(sameFilter.obj.dataProvider[1], vald, true);
                                    if (indx < 0)
                                        indx = inarray(sameFilter.obj.dataProvider[3], vald + '', true);
                                }
                                if (indx >= 0)
                                    vald = sameFilter.obj.dataProvider[0][indx];
                            }
                            valr += vald + ((i < vals1[0].length - 1) ? arSet.FILTER_SEPARATOR : '');
                        }
                        vlist[valr] = true;
                    }
                    for (j = 0; j < sameFilter.obj.dataProvider[0].length; j++) {
                        vlist2[sameFilter.obj.dataProvider[0][j]] = j;
                    }

                    dv = sameFilter.obj.values;
                    //if((sameFilter.obj.values.length == 0) ||
                    //        (sameFilter.obj.values[0] ==  ibiMsgStr['all']))
                        dv = sameFilter.obj.dataProvider[0];

                    for(j = 0; j < dv.length; j++) {
                        if((!vlist[dv[j]]) && (dv[j]!=ibiMsgStr['all'])){
                            if(cols.length==1)
                                nval[nval.length] = [ibiStd.copyObject(dt[vlist2[dv[j]]])];
                            else
                                nval[nval.length] = ibiStd.copyObject(dt[vlist2[dv[j]]]);
                        }
                    }
                    vals1 = nval;
                    fc = "NE";
                    resetList = true;
                }
            } else
                sameFilter = null;

        }
        if(sameFilter != null) {
            reuseFilter = true;
            var fo = {};
            fo.values =  ibiStd.copyObject(fvalue);
            fo.values2 =  ibiStd.copyObject(fvalue2);
            fo.type = ftype;
            sameFilter.obj.undoStack.extra = fo;
        }
    }

    if(mytable.filterChangedFunc ) {
        var fldPrefix = "";
        var bucketCols = {};
        if(mytable.a_cntl.buckets)
            for(j in mytable.a_cntl.buckets)
                for(i=0; i < mytable.a_cntl.buckets[j].length;i++)
                    bucketCols[mytable.a_cntl.buckets[j][i]] = j;
        var fixValues = function(mytable,v1,cols,multi) {
            var vv1 = [ ];
            var l;
            var col;
            var format;
            var type;
            for(col = 0; col < cols.length; col++) {
                type = mytable.a_capt[cols[col]].type;
                format = mytable.a_capt[cols[col]].format;
                if (v1) {
                    if (v1[0] == ibiMsgStr['all']) {
                        v1 = ['*'];
                        vv1 = [['*']];
                        break;
                    } else {
                        if (type == IBIDATE) {
                            for (l = 0; l < v1.length; l++) {
                                if (multi) {
                                    v1[l][col] = v1[l][col] + '';
                                    v1[l][col] = ibiStd.ibiDateToFormat(v1[l][col], format, true);
                                } else {
                                    v1[l] = v1[l] + '';
                                    v1[l] = ibiStd.ibiDateToFormat(v1[l], format, true);
                                }
                            }
                        }
                        else if (type == IBINUM) {
                            for (l = 0; l < v1.length; l++) {
                                if (multi)
                                    v1[l][col] = ibiStd.ibiNumberToFormat(v1[l][col], format, null, null);
                                else
                                    v1[l] = ibiStd.ibiNumberToFormat(v1[l], format, null, null);
                            }
                        }
                        for (l = 0; l < v1.length; l++) {
                            if (typeof vv1[l] == "undefined")
                                vv1[l] = "";
                            else
                                vv1[l] += arSet.FILTER_SEPARATOR_OPTIONAL;
                            //if (multi)
                                vv1[l] = vv1[l] += v1[l][col];
                        }
                    }
                } else vv1 = null;
            }
            return {'single':v1,'multi':vv1};
        };

        var fformat;
        var myObj = {
            'id':mytable.id,
            'column': fieldname,
            'valueAsIs':false,
            'condition':fc,
            'values1': (typeof(vals1[0])!='object')?[vals1[0]]:vals1[0],
            'values2': null,
            'currentReport': mytable,
            'filters':[],
            'drillOperation':resetList
        };
        if((vals2 != null) && (typeof fvalue2 != "undefined"))
            myObj.values2 = (typeof(vals2[0])!='object')?[vals2[0]]:vals2[0];
        byc = null;
        for(j=0;j<mytable.a_capt.length;j++)
            if(mytable.a_capt[j].isby)
                byc = getCacheFieldName(mytable,j,undefined,true);

        fieldname = '';
        if(typeof(vals1)!='object')
            v1 = [vals1];
        else
            v1 =vals1;

        if((vals2==null) || (vals2.length == 0))
            v2 = null;
        else
        if(typeof(vals2)!='object')
            v2 = [vals2];
        else
            v2 = vals2;

        var o1 = fixValues(mytable,v1,cols,useSameFilterMcol);
        var o2 = fixValues(mytable,v2,cols,useSameFilterMcol);

        for(j=0; j < cols.length; j++) {
            var nfn;
            fldPrefix = "";
            if(cols[j]==-1)
                continue;
            agc = mytable.a_capt[cols[j]].aggType;
            if(agc == null)
                byc = null;
            if(fieldname!='')
                fieldname += ",";
            var nfn = getCacheFieldName(mytable,cols[j],undefined,true);
            if(mytable.a_capt[cols[j]].isCompute) {
                nfn = getCacheFieldName(mytable,0,undefined,true);
                var bucketName = bucketCols[cols[j]];
                fldPrefix = '{"column":"' + mytable.table_name+':'+bucketName + '","value":';
                fldPrefix += JSON.stringify(o1.multi);
                fldPrefix += '}';
                o1.multi = o1.single = fldPrefix;
                o2.multi = o2.single = null;
                myObj.valueAsIs = true;
                myObj.column = nfn;
                myObj.values1 = fldPrefix;
            }

            fieldname += nfn;
            if(mytable.a_capt[cols[j]].isby || mytable.a_capt[cols[j]].isCompute)
                byc = null;
        }
        var newfilt = {
            'column': (cols.length>1?'['+fieldname+']':fieldname),
            'condition':fc,
            'valueAsIs':(fldPrefix==""?false:true),
            'values1': (cols.length>1?o1.multi:o1.single),
            'values2': (cols.length>1?o2.multi:o2.single),
            'bycolumn': byc,
            'aggregation': agc,
            'multiColumn' : (cols.length>1?true:false),
            'drillOperation':resetList
        };
        myObj.filters[myObj.filters.length] = newfilt;
        if(resetList)
            if(sameFilter)
                sameFilter.obj.values = [];
        mytable.filterChangedFunc(myObj);
        return myObj;
    } else {
        var ffParent=null;
        for (i = 0; i < ibiCompound.drawObjectsList.length; i++) {
            if((ibiCompound.drawObjectsList[i].filterFromFex) && (!ibiCompound.drawObjectsList[i].dynamic))  {
                ffParent = ibiCompound.drawObjectsList[i];
            }
        }

        if(!reuseFilter) {
            i = ibiCompound.chartFilters.length;
            //mytable.chartFilters[i] = [];
        } else
        if(sameFilter)
            filter[filter.length] = sameFilter;

        for(cc=0; cc < cols.length; cc++) {
            if(cols[cc] == -1)
                continue;

            agc = mytable.a_capt[cols[cc]].aggType;
            if(mytable.a_cntl.cacheWriteMode==0) {
                //fieldname = ibiUtil.StripSpace(mytable.a_cntl.a_cols[cols[cc]].field, true, true);
                fieldname = ibiUtil.StripSpace(mytable.a_cntl.a_cols[cols[cc]].qualname, true, true);
            } else
                fieldname = getCacheFieldName(mytable, cols[cc],true,true);
            if(mytable.a_capt[cols[cc]].isby)
                byc = null;
            pnc = [];
            pnc[0] = cols[cc];
            pnc[1] = ftypes[cc];
            if(useSameFilterMcol){
                pnc[3] = vals1;
            } else
            if(typeof(vals1[cc])!='object')
                pnc[3] = [vals1[cc]];
            else
                pnc[3] =vals1[cc];

            if ((vals2 == null) || (vals2.length == 0))
                pnc[4] = null;
            else if (typeof(vals2[cc]) != 'object')
                pnc[4] = [vals2[cc]];
            else
                pnc[4] = vals2[cc];

            if(typeof(mytable.ar)=="undefined")
                mytable.ar = new activeReport();

            if(!reuseFilter) {
                if (!useSameFilterMcol || sameFilter == null) {
                    if (ftypes[cc] === arConstants.FILTER_BETWEEN ||
                        ftypes[cc] == arConstants.FILTER_NOTBETWEEN ||
                        ftypes[cc] == arConstants.FILTER_GT ||
                        ftypes[cc] == arConstants.FILTER_GE ||
                        ftypes[cc] == arConstants.FILTER_LT ||
                        ftypes[cc] == arConstants.FILTER_LE
                    )
                    filter[filter.length] = mytable.ar.newFilterSlider();
                else
                filter[filter.length] = mytable.ar.newFilterCheckBox();
                    sameFilter = filter[filter.length - 1];
                    sameFilter.notAttachedToDashboard = true;
                    sameFilter.obj.undoStack.pushValue([ibiMsgStr['all']]);
                    sameFilter.obj.isChartFilter = true;
                    sameFilter.showMenu = false;
                    if (useSameFilterMcol) {
                        sameFilter.dataColumn = [];
                        sameFilter.defaultValues = [];
                    }
                }
            }

            ff = sameFilter;
            if(!reuseFilter) {
                if (!useSameFilterMcol || cc == 0) {
                    ibiCompound.chartFilters[ibiCompound.chartFilters.length] = ff;
                     //newFilterRadioButton, newFilterComboBox,newFilterSlider,newFilterVSlider,newFilterTextInput,newFilterCheckBox
                    ff.dataReport = mytable.table_name;
                    ff.filterCondition = ibiStd.mapFilterObjectConditionReverse(ftypes[cc]);
                }
                if (useSameFilterMcol && (cols.length>1)) {
                    ff.dataColumn[ff.dataColumn.length] = fieldname;
                } else {
                    ff.dataColumn = fieldname;
                    if((agc == null)&&(!mytable.a_capt[cols[cc]].isby)&&(mytable.a_capt[cols[cc]].type == IBINUM))
                        agc = "SUM";
                    if(agc)
                        ff.dataColumn = agc+'.'+ff.dataColumn;
                    if(byc)
                        ff.dataColumn += ":BY."+byc;
                }
                ff.visible = true;
                ff.showTitle = "ON";

                ff.filterTarget = '*';
                if((typeof table_name != "undefined") && (table_name != null))
                    ff.filterTarget = table_name;
                ff.filterConnector = conn[cc];
                ff.width = "100%";
                ff.height = "100%";
                ff.showAll = true;
                ff.divName = 'LOBJ' + Math.floor(Math.random() * 101);
                ff.id = ff.divName;
                //ff.backcolor = "white";
                //ff.width = "200px";
                //ff.height = "400px";

                ff.filterMultiple = true;

                if(cc == 0) {
                    if(!ibiCompound.hiddenGlobalFilters)
                        ibiCompound.hiddenGlobalFilters = [];
                    ff.obj.globalHidden = true;
                    ff.obj.active = true;
                    ibiCompound.hiddenGlobalFilters[ibiCompound.hiddenGlobalFilters.length] = ff.obj;
                }

                //if (ffParent != null)
                //    ff.chainToParent(ffParent);
            }

            if(ftypes[cc] === arConstants.FILTER_BETWEEN || ftypes[cc] == arConstants.FILTER_NOTBETWEEN) {
                ff.defaultValues = [pnc[3], pnc[4]];
            } else {
                if(ff.defaultValues == null) {
                    ff.defaultValues = [];
                }
                var v,va,aa;
                if(useSameFilterMcol) {
                    if (cc == 0) {
                        aa = [];
                        if((ff.filterCondition == 2) && (!resetList))
                            aa = ff.defaultValues;
                        for(l=0; l < pnc[3].length; l++) {
                            v = '';
                            for(var ll=0; ll < cols.length; ll++) {
                                fformat = mytable.a_capt[cols[ll]].format;
                                if (pnc[3][l] != ibiMsgStr["all"]) {
                                    va = pnc[3][l][ll];
                                    if (mytable.a_capt[cols[ll]].type == IBIDATE) {
                                        //va = ibiStd.ibiDateToFormat(va, fformat, true);
                                    }
                                    else if (mytable.a_capt[cols[ll]].type == IBINUM) {
                                        if (mytable.a_cntl.cacheMode) {
                                            va = ibiStd.ibiNumberToFormat(va, fformat,null,null);
                                        }
                                    }
                                    v +=  va + ((ll == (pnc[3][l].length - 1)) ? "" : arSet.FILTER_SEPARATOR);
                                }
                                else v = ibiMsgStr["all"];
                            }
                            if(!inarray(aa,v,false))
                                aa[aa.length] = v;
                        }
                        ff.defaultValues = aa;
                    }
                } else {
                    aa = [];
                    if((ff.filterCondition == 2) && (!resetList))
                        aa = ff.defaultValues;
                    // setgetter not br called with ff.defaultValues[ff.defaultValues].length = "a"

                    for(l=0; l < pnc[3].length; l++) {
                        if(!inarray(aa,pnc[3][l],false)) {
                            aa[aa.length] = pnc[3][l];
                            if (mytable.a_capt[cols[cc]].type == IBINUM)
                                aa[aa.length-1] = aa[aa.length-1]*1;
                        }
                    }
                    ff.defaultValues = aa;
                }
            }

            if(!reuseFilter) {
                if (!useSameFilterMcol || cc == cols.length - 1) {
                    mytable.ar.addFilterObject(ff,null);
                    if ((useSameFilterMcol) && (cols.length>1)) {
                        ff.obj.defineName = "ARMULTI" + ff.obj.id;
                        ff.obj.dataColumnType = "multi";
                            }
                    //ff.refresh();
                    //if (ibiFilter) {
                        //dh.innerHTML = ff.obj.buildComponent();
                    //    ibiFilter.addToFilterHolder(ff);
                       // mytable.filterHolder.addElement(dh);
                    //}
                    if(filter.length>1)
                        filter[filter.length-2].chainSibling(ff);
                        //ff.chainSibling(filter[filter.length-2]);
                    //mytable.chartinfo.chartFilters = ibiCompound.chartFilters;
                }
            }
        }
        ibiStd.ShowWait();
        //for(var i=0; i < filter.length;i++)
        //    filter[i].refresh();
        window.setTimeout(function() {
            var i;
            for(i=0; i < filter.length;i++) {
                filter[filter.length - 1].refresh(false, true);
                //if ((ibiFilter) && (!filter[filter.length - 1].addedToHolder) && (filter[filter.length - 1].containerId == "ibi$dummy$div") ) {
                //    ibiFilter.addToFilterHolder(filter[filter.length - 1]);
                //}
            }
            for(i=0; i < filter.length;i++) {
                filter[filter.length - 1].filterChanged = true;
                filter[filter.length-1].obj.active = true;
            }
            for(i=0; i < filter.length;i++)
                filter[filter.length-1].apply();
            ibiStd.HideWait();
        },0);
        return ff;
    }
}


function refresh_c_filter(mytable,isglobal)
{
    if(isglobal) {
        for(var i1=0; i1 < MyTable.length; i1++) {
            if(MyTable[i1].deleted)
                continue;
            MyTable[i1].redrawCharts = true;
            MyTable[i1].filterChange=true;
            MyTable[i1].o_paging.c = 0;
            ibiGrid.show(false,MyTable[i1]);
        }
    } else {
        mytable.redrawCharts = true;
        mytable.o_paging.c = 0;
        ibiGrid.show(false,mytable);
    }
}

function hlg_c_filter(win_num,t_num,ctype,y_cols,s){
    var pn = getPn(win_num,t_num);
    var mytable=MyTable[t_num];


}

function doChartFilter(event,win_num,table_number,ctype,y_cols,x_cols,subTable,roottxt,s,g,ix,iy) {
    var pn = getPn(win_num,table_number);
    if(subTable!=-1) pn = pn.children[subTable];
    var mytable=MyTable[table_number];
    var MI_CF = [];
    var txt,nn,skip;
    var i = 3, j, ss, x, y, yv, yvs, st;
    var prev=[];
    for (j = 0; j < 33; j++) { prev[j]=[]; }

    mytable.filterChange = true;
    if(typeof(s)=='undefined') return;
    if(typeof(pn.callback) != 'undefined') {
        var obj = new Object();

        if(ctype == 0) {
            for (j = 0; j < y_cols.length; j++) {
                obj[mytable.a_cntl.a_cols[y_cols[j]].name] = pn.ibs[pn.tcont[s][j][DARAW]];
            }
            obj[mytable.a_cntl.a_cols[x_cols[0]].name] = pn.xars[0][s]; 
        } else {
            for (j = 0; j < y_cols.length; j++) {
                obj[mytable.a_cntl.a_cols[y_cols[j]].name] = pn.ibs[pn.tcont[g][j][DARAW]];
            }
            obj[mytable.a_cntl.a_cols[x_cols[s]].name] = pn.xars[s][g]; 
        }
        pn.callback(obj);
        return;
    }

    //if(typeof pn.chartFilters == "undefined")
    //    pn.chartFilters = [];

    MI_CF[0]=[[''],null,null];
    if(event==null) {
        x = ix;
        y = iy;
    } else
    if (b_ie || b_opera) {
        x = window.event.clientX + d.documentElement.scrollLeft + d.body.scrollLeft;
        y = window.event.clientY + d.documentElement.scrollTop + d.body.scrollTop;
    } else {
        x = event.clientX + (window.scrollX || window.pageXOffset);
        y = event.clientY + (window.scrollY || window.pageYOffset);
    }
    //0-pie,1-Line,2-bar,3-scatter
    MI_CF[0][i++]=[[roottxt],'SKIP',null];
    MI_CF[0][i++]=[[drawline(mytable.a_cntl.menubordercolor),null,null,true],'SKIP',null];
    //MI_CF[0][i++]=[[ibiMsgStr['hlg']],null,{'ocv':'highlightfilter','oc':'ibiChart.Hlg_c_filter('+win_num+','+table_number+
    //    ','+ctype+','+writeobjout(y_cols,false)+','+writeobjout(s,false)+')'}];
    switch(ctype){
        case chartIsPie:
        case chartIsLine:
        case chartIsBar:  
            st = 0;
            if(isMergeReports) st = 1;
            for(var sj=0; sj<s.length; sj++) {
                if(typeof(g)=="undefined")ss=s[sj];
                else ss=g;
                for (j = st; j < y_cols.length; j++) {
                    skip = false;
                    for(var jj=0; jj<pn.c_col_filter.length;jj++)
                        if(pn.c_col_filter[jj][0]==y_cols[j]) skip=true;
                    yv = pn.ibs[pn.tcont[ss][j][DARAW]]; 
                    if(prev[j][yv]) skip = true;
                    else prev[j][yv]=true;
                    if(skip) continue;
                    txt = mytable.a_cntl.a_cols[y_cols[j]].name+'='+yv;
                    if(typeof(yv)=='string') yvs ='"'+yv+'"';
                    else yvs = yv;
                    MI_CF[0][i++] = [[txt],null,{'ocv':'addcolorfilter','oc':'ibiChart.addFilter('+table_number+','+
                        y_cols[j]+',9,'+yvs+')'}];
                }
            }
            break;
        case chartIsScat: 
            break;
    }
    if(ibiCompound.chartFilters.length) MI_CF[0][i] = [[ibiMsgStr['crtcflt']],null,{'ocv':'removecolorfilter','oc':'ibiChart.removeFilter()'}];
    if(typeof(mytable.CFmenu)=='undefined') mytable.CFmenu=null;
    mytable.CFmenu = ibiMenu.Menu(MI_CF,MP_CFT,null,mytable,null,mytable.CFmenu,null);
    ibiMenu.Showmenu(null,table_number,mytable.CFmenu,mytable.CFmenu,true,0,x,y);
}

function doChartFilterTDG(win_num,table_number,ctype,y_cols,x_cols,subTable,roottxt,seriesId,groupId,x,y,keyLegend) {
    var pn = getPn(win_num,table_number);
    if(subTable!=-1) pn = pn.children[subTable];
    var mytable=MyTable[table_number];
    var MI_CF = [];
    var txt,nn,skip;
    var i = 3, j, ss, yv, yvs, st;
    var prev=[];
    for (j = 0; j < 33; j++) { prev[j]=[]; }

    mytable.filterChange = true;
    if(typeof(seriesId)=='undefined') return;
    if(typeof(pn.callback) != 'undefined') {
        var obj = new Object();

        for (j = 0; j < y_cols.length; j++) {
            obj[mytable.a_cntl.a_cols[y_cols[j]].name] = pn.ibs[pn.tcont[keyLegend][j][DARAW]];
        }
        if(ctype == chartIsPie) {
            obj[mytable.a_cntl.a_cols[x_cols[0]].name] = pn.xars[0][seriesId]; 
        } else {
            obj[mytable.a_cntl.a_cols[x_cols[seriesId]].name] = pn.xars[seriesId][groupId]; 
        }
        pn.callback(obj);
        return;
    }

    MI_CF[0]=[[''],null,null];
    //0-pie,1-Line,2-bar,3-scatter
    MI_CF[0][i++]=[[roottxt],'SKIP',null];
    MI_CF[0][i++]=[[drawline(mytable.a_cntl.menubordercolor),null,null,true],'SKIP',null];
    //MI_CF[0][i++]=[[ibiMsgStr['hlg']],null,{'ocv':'highlightfilter','oc':'ibiChart.Hlg_c_filter('+win_num+','+table_number+
    //    ','+ctype+','+writeobjout(y_cols,false)+','+writeobjout(seriesId,false)+')'}];
 
    st = 0;
    if(isMergeReports) st = 1;
    for (j = st; j < y_cols.length; j++) {
        skip = false;
        for(var jj=0; jj<pn.c_col_filter.length;jj++)
            if(pn.c_col_filter[jj][0]==y_cols[j]) skip=true;
        yv = pn.ibs[pn.tcont[keyLegend][j][DARAW]]; 
        if(prev[j][yv]) skip = true;
        else prev[j][yv]=true;
        if(skip) continue;
        txt = mytable.a_cntl.a_cols[y_cols[j]].name+'='+yv;
        if(typeof(yv)=='string') yvs ='"'+yv+'"';
        else yvs = yv;
        MI_CF[0][i++] = [[txt],null,{'ocv':'addcolorfilter','oc':'ibiChart.addFilter('+table_number+','+
            y_cols[j]+',9,'+yvs+')'}];
    }


    if(ibiCompound.chartFilters.length) MI_CF[0][i] = [[ibiMsgStr['crtcflt']],null,{'ocv':'removecolorfilter','oc':'ibiChart.removeFilter()'}];
    if(typeof(mytable.CFmenu)=='undefined') mytable.CFmenu=null;
    mytable.CFmenu = ibiMenu.Menu(MI_CF,MP_CFT,null,mytable,null,mytable.CFmenu,null);
    ibiMenu.Showmenu(null,table_number,mytable.CFmenu,mytable.CFmenu,true,0,x,y);
}

    function getColumnsForFilter(buckets,dataProvider,chartType,mytable){
        var cols = [];
        var colorAdded = false;
        var i;

        for(i=0; i < mytable.a_capt.length; i++)
            mytable.a_capt[i].mapCord = false;
        for(i=0; i < buckets.LONGITUDE.length; i++)
            mytable.a_capt[buckets.LONGITUDE[i]].mapCord = true;
        for(i=0; i < buckets.LATITUDE.length; i++)
            mytable.a_capt[buckets.LATITUDE[i]].mapCord = true;

        cols = cols.concat(buckets['ROW']);
        cols = cols.concat(buckets['COLUMN']);
        cols = cols.concat(buckets['ACTIVE_NOTUSED']);

        if ((buckets.COLOR.length>0)&&
                (mytable.a_capt[buckets.COLOR[0]].isby)) {
            cols = cols.concat(buckets.COLOR);
            colorAdded = true;
        }

        var xAxisDataField = (dataProvider.xaxis)
                ? dataProvider.xaxis.ibiDataField
                : null;
        var yAxisDataField = (dataProvider.yaxis)
                ? dataProvider.yaxis.ibiDataField
                : null;
        switch (chartType) {
            case "marker":
            case "gauge":
                break;
            case "scatter":
            case "bubble":
                cols = cols.concat(buckets.MEASURE);
                cols = cols.concat(buckets.DETAIL);
                cols = cols.concat(buckets['X-AXIS']);
                cols = cols.concat(buckets['Y-AXIS']);
                break;
            case "map":
            case "bubblemap":
            case "choropleth":
                cols = cols.concat(buckets.LOCATION);
                cols = cols.concat(buckets.LONGITUDE);
                cols = cols.concat(buckets.LATITUDE);
                cols = cols.concat(buckets.GEOMETRY);
                break;
            case "treemap":
            case "tagcloud":
                cols = cols.concat(buckets['DETAIL']);
                break;
            case "heatmap":
                cols = cols.concat(buckets['X-AXIS']);
                cols = cols.concat(buckets['Y-AXIS']);
                break;
            case "pie":
            case "funnel":
            case "pyramid":
                if(!colorAdded)
                    cols = cols.concat(buckets.COLOR);
                break;
            case "line":
            default:
                cols = cols.concat(buckets['X-AXIS']);
                break;
        }
        i = 0;
        while(i < cols.length) {
            var capt = mytable.a_capt[cols[i]];
            var isInt = ((capt.format.indexOf('I')!= -1)||
                ((capt.format.indexOf('D')!= -1)&&(capt.format.indexOf('.')== -1)));
            if((capt.isby && capt.orow && capt.noprint)||
                (!isInt && (capt.type == IBINUM)&& (!capt.mapCord))||
                (capt.isCompute)||
                (isInt && (capt.type == IBINUM)&& !capt.isby))
                cols.splice(i,1);
            else
                i++;
        }
        return cols;
    }

    function ShowChartMenu(selListx,parms,obj) {
        var mytable=parms.mytable;
        var MI_CF = [];
        var i, numItems;
        var roottxt="";
        var val;
        var fieldname;
        var fieldname2;
        var count = 0;
        var cols = [];
        var pn = getPn(-1,mytable.id);
        var chartType = parms.chart.chartType;

        try {
            parms.chart.getInternalToolTip().hide();
        } catch(e) {}

        parms.chart.htmlToolTip.enabled = false;
        if(parms.chart.chartType == "matrix") {
            chartType = parms.chart.matrixProperties.chartType;
        }
        var selList = [];

        for(i=0; i < selListx.length; i++) {
            if(selListx[i].misc != "bevel")
                selList[selList.length] = selListx[i];
        }

/*
        if(parms.chart.chartType == "matrix") {
            cols = cols.concat(parms.dataProvider.buckets['ROW']);
            cols = cols.concat(parms.dataProvider.buckets['COLUMN']);
            chartType =  parms.chart.matrixProperties.chartType;
        }
*/
        if (mytable.chartMenuInfo) {
            if (mytable.chartMenuInfo.handle) {
                mytable.chartMenuInfo.handle.hide();
            }
            try {
                mytable.chartMenuInfo.tooltip.style.visibility = "hidden";
            } catch(e) {}
            mytable.chartMenuInfo.selList = selList;
            mytable.chartMenuInfo.parms = parms;
            mytable.chartMenuInfo.obj = obj;
            mytable.chartMenuInfo.timerHandle = null;
        } else {
            mytable.chartMenuInfo = {'selList':selList,'parms':parms,'obj':obj,'handle':null};
        }
                
        for(var j=0;j<selList.length;j++)
            if(typeof(selList[j].group)!="undefined")
                count++;

        // p176018: simply display the number of points
        if (count > 0) {
            roottxt = count + ((count == 1) ? " point" : " points");
        }
/** p176018 stopgap remove using hover tooltip for displaying information
        if(count>1)
            roottxt = count + " points";
        else {
            if(parms.dataProvider.type != 'buckets') {
                var uu = parms.chart.getInternalToolTip();
                if(uu) {
                    roottxt = uu.dom.innerHTML;
                    uu.hide();
                }
            }
        }
*/
        var tdgTooltipClass = "tdgchart-tooltip-pad";
        var htmlMenu = "";
        htmlMenu += "<span class='" + tdgTooltipClass + "'>" + roottxt + "</span>";
        var menuops = mytable.a_cntl.menuops;
        var showFilter = menuops.filter;
        var showNoFilterMessage = false;
        var showExclude = true;
        if (parms.tcont.length<2)
            showFilter = false;

        if(parms.dataProvider.type == 'buckets') {
            chartType = parms.dataProvider.chartType;
            if(parms.chart.chartType == "matrix") {
                chartType = parms.chart.matrixProperties.chartType;
            }
            cols = getColumnsForFilter(parms.dataProvider.buckets,parms.dataProvider,chartType,mytable);
/**
            var xAxisDataField = (parms.dataProvider.xaxis)
                                 ? parms.dataProvider.xaxis.ibiDataField
                                 : null;
            var yAxisDataField = (parms.dataProvider.yaxis)
                                 ? parms.dataProvider.yaxis.ibiDataField
                                 : null;
            switch (chartType) {
                case "marker":
                case "gauge":
                    break;
                case "scatter":
                case "bubble":
                    if (parms.dataProvider.buckets.COLOR.length>0)
                        cols = cols.concat(parms.dataProvider.buckets.COLOR);
                    if (parms.dataProvider.buckets.MEASURE.length>0)
                        cols = cols.concat(parms.dataProvider.buckets.MEASURE);
                    if (parms.dataProvider.buckets.DETAIL.length>0)
                        cols = cols.concat(parms.dataProvider.buckets.DETAIL);
                    if(cols.length == 0) {
                        if (xAxisDataField != null) {
                            cols = cols.concat([xAxisDataField]);
                        }
                        if (yAxisDataField != null) {
                            cols = cols.concat([yAxisDataField]);
                        }
                    }
                    break;
                case "map":
                    for (j = 0, numItems = parms.dataProvider.dataArrayMap.length; j < numItems; j++) {
                        switch (parms.dataProvider.dataArrayMap[j]) {
                            case "name":
                            case "lat":
                            case "lng":
                                cols = cols.concat([j]);
                                break;
                        }
                    }
                    break;
                case "treemap":
                    cols = cols.concat(parms.dataProvider.buckets['DETAIL']);
                    break;
                case "pie":
                case "line":
                default:
                    if (xAxisDataField != null) { cols = cols.concat([xAxisDataField]); }
                    break;
            }
**/

            if (cols.length == 0) {
                showFilter = false;
            } else
            if(parms.mytable.filterChangedFunc) {
                /*
                for (i = 0, numItems = cols.length; i < numItems; i++) {
                    if (parms.mytable.a_capt[cols[i]].isCompute) {
                        showFilter = false;
                        showNoFilterMessage = true;
                    }
                }
                */
            }
        }

        var colString = JSON.stringify(cols);

        if(showFilter || ibiCompound.chartFilters.length) {
            htmlMenu += "<hr>";
            if(showFilter) {
                htmlMenu += "<span class='" + tdgTooltipClass +
                            "' style='cursor:pointer;'+Tooltip_ext_props+'' " + ID_hover_filter_style +
                            " onclick='ibiChart.doChartSelection(" + mytable.id + ",\"filter\","+colString+")'>" + ibiMsgStr['ecfilt'] + "</span><br>";
                htmlMenu += "<span class='" + tdgTooltipClass + 
                            "' style='cursor:pointer;'+Tooltip_ext_props+'' " + ID_hover_filter_style +
                            " onclick='ibiChart.doChartSelection(" + mytable.id + ",\"exclude\","+colString+")'>" + ibiMsgStr['exfilt'] + "</span><br>";
            }
            if (ibiCompound.chartFilters.length) {
                htmlMenu += "<span class='" + tdgTooltipClass +
                            "' style='cursor:pointer;'+Tooltip_ext_props+'' " + ID_hover_filter_style +
                            " onclick='ibiChart.doChartSelection(" + mytable.id + ",\"clear\")'>" + ibiMsgStr['crtcflt'] + "</span><br>";
            }
        }
        if(showNoFilterMessage) {
            htmlMenu += "<hr>";
            htmlMenu += "<span class='" + tdgTooltipClass +
                "' style='cursor:pointer;'+Tooltip_ext_props+'' " + ID_hover_filter_style +
                ">" + ibiMsgStr['nofilt'] + "</span><br>";

        }
        if(mytable.showMenuFunc) {
            var muObj = {
                'menu': htmlMenu,
                'mytable':mytable,
                'type':"select",
                'tn': mytable.id,
                'columns':JSON.parse(colString),
                'what':"filter"
            };
            htmlMenu = ibiMenu.userUpdateMenu(muObj,"select");
        }

        var x = obj.event.clientX;
        var y = obj.event.clientY;

        // mobile
        if(typeof(obj.event.clientX)=="undefined") {
            var target = obj.event.target || obj.event.srcElement;
            var rect = target.parentNode.getBoundingClientRect();
            if(typeof(obj.event.clientX)=="undefined") {
                if(typeof(obj.event.changedTouches)!="undefined") {
                    x = obj.event.changedTouches[0].clientX;
                    y = obj.event.changedTouches[0].clientY;
                    //x = x - rect.left;
                    //y = y - rect.top;
                } else {
                    x = y = 10;
                }
            } else {
                x = obj.event.clientX - rect.left;
                y = obj.event.clientY - rect.top;
            }
        }

        x = x - 20;
        y = y - 20;

        var id, node, 
            addEvents = false,
            tooltipDiv = null, tooltip = null,
            doc = document,
            w = ('innerWidth' in window) ? window.innerWidth : document.documentElement.clientWidth;
            h = ('innerHeight' in window) ? window.innerHeight : document.documentElement.clientHeight;

//        mytable.chartMenuInfo.handle = parms.chart.getInternalToolTip();

        if (typeof mytable.chartMenuInfo.tooltipDiv === 'undefined') {
            id = "ibi$ttDiv$" + mytable.id;
            node = document.getElementById(id);
            if (node == null) {
                var styleNode = null,
                    id2 = "MAINTABLE_wbody" + mytable.id,
                    node2 = document.getElementById(id2);
                if (node2 != null) {
                    for (i = 0, numItems = node2.childNodes.length; i < numItems; ++i) {
                        node = node2.childNodes[i];
                        if (node.localName == "style") {
                            styleNode = node;
                            break;
                        }
                    }
                }
                node = document.createElement('div');
                node.id = id;
                if (styleNode) {
                    var cln = styleNode.cloneNode(true);
                    cln.innerHTML = cln.innerHTML.replace("#"+id2, "");
                    node.appendChild(cln);
                } else {
                    node.innerHTML = 
"<style type='text/css'> .tdgchart-tooltip { font: 10pt Sans-Serif; color: black; background: linear-gradient(to bottom, rgba(250,250,250,0.98) 8%,rgba(230,230,230,0.98) 95%); border: 1px solid rgba(150,150,150,0.95); border-radius: 0px; cursor: default; box-shadow: 0px 3px 4px 0px rgba(50, 50, 50, 0.66); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#D2D2D2',GradientType=0);}.tdgchart-tooltip-pad { padding: 3px 1em 3px .4em;}</style>";
                }
                node.style.overflow   = "visible";
                node.style.visibility = "hidden";
                node.style.position   = "absolute";
                node.style.left       = 0 + 'px';
                node.style.top        = 0 + 'px';
                node.style.zIndex     = 9999;
                document.getElementsByTagName('body')[0].appendChild(node);
            }
            mytable.chartMenuInfo.tooltipDiv = node;
        }
        tooltipDiv = mytable.chartMenuInfo.tooltipDiv;

        if (typeof mytable.chartMenuInfo.tooltip === 'undefined') {
            id = "ibi$tt$" + mytable.id;
            tooltip = document.getElementById(id);
            if (tooltip == null) {
                tooltip = document.createElement('div');
                tooltip.id = id;
                tooltip.className = "tdgchart-tooltip";
                tooltip.style.position   = "relative";
                tooltip.style.visibility = "hidden";
                tooltipDiv.appendChild(tooltip);
            }
            mytable.chartMenuInfo.tooltip = tooltip;
            addEvents = true;
        } else {
            tooltip = mytable.chartMenuInfo.tooltip;
        }
        tooltip.innerHTML = htmlMenu;

//        mytable.chartMenuInfo.handle.hide();

        var _hideMenu = function (e) {
            if (typeof mytable.chartMenuInfo == "undefined") { return; }
            mytable.chartMenuInfo.MenuHandleTimer = window.setTimeout(function(){
                parms.chart.htmlToolTip.enabled = true;
                if (typeof mytable.chartMenuInfo == "undefined") { return; }
                mytable.chartMenuInfo.MenuHandleTimer = null;
                mytable.chartMenuInfo.tooltip.style.visibility = "hidden";
                }, 3000);
        };
        var _resetMenu = function (e) {
            if (typeof mytable.chartMenuInfo == "undefined") { return; }
            if (mytable.chartMenuInfo.MenuHandleTimer != null) {
                window.clearTimeout(mytable.chartMenuInfo.MenuHandleTimer);
            }
            mytable.chartMenuInfo.MenuHandleTimer = null;
        };
        if (addEvents) {
            mytable.chartMenuInfo.tooltip.addEventListener("mouseout", _hideMenu);
            mytable.chartMenuInfo.tooltip.addEventListener("mouseover", _resetMenu);
            addEvents = false;
        }

        var _callLater = function() {
            var tooltipWidth = mytable.chartMenuInfo.tooltip.clientWidth;
            var tooltipHeight = mytable.chartMenuInfo.tooltip.clientHeight;
            if ((x + tooltipWidth) > w) {
                x = w - tooltipWidth - 10;
            }
            if ((y + tooltipHeight) > h) { 
                y = h - tooltipHeight - 10;
            }
            mytable.chartMenuInfo.tooltip.style.left = x + 'px';
            mytable.chartMenuInfo.tooltip.style.top  = y + 'px';
            mytable.chartMenuInfo.tooltip.style.visibility = "visible";
            
        };
        window.setTimeout(_callLater, 100);
    }

    var defaultBackgroundColor = 'rgba(250, 241, 179, 0.93)';
    var defaultBorderColor = 'rgba(243, 219, 63, 0.93)';

    function ChartSelectionChanged(selList,parms,obj,force)
    {
        var mytable;
        var chartMenuInfo;

        if((obj.event.type != "mouseup")&&(obj.event.type != "touchend")&&(!force)) return;

        for(var i = 0; i < MyTable.length; i++) {
            mytable = MyTable[i];

            if(mytable.deleted)
                continue;

            if(typeof mytable.chartMenuInfo != 'undefined') {
                chartMenuInfo = mytable.chartMenuInfo;

                if(mytable.chartinfo && 
                    mytable.chartinfo.parms && 
                    mytable.chartinfo.parms.chart &&
                    mytable.chartinfo.parms.chart.htmlToolTip) {

                    mytable.chartinfo.parms.chart.htmlToolTip.enabled = true;
                }

                if (chartMenuInfo) {
                    if (chartMenuInfo.handle) {
                        chartMenuInfo.handle.hide();
                    }
                    if (chartMenuInfo.tooltip) {
                        chartMenuInfo.tooltip.style.visibility = "hidden";
                    }
                    try {
                        mytable.chartMenuInfo.tooltip.style.visibility = "hidden";
                    } catch(e) {}
                }
            }
        }

        if(selList.length) {
            window.setTimeout(function () { ShowChartMenu(selList, parms, obj); }, 100);
        } 
    }
    
    function DoChartSelection(tn,what,columns,returnObj)
    {
        var valx,valy,target,rval1,rval2;
        var mytable = MyTable[tn];
        var selList = mytable.chartMenuInfo.selList;
        var parms = mytable.chartMenuInfo.parms;
        var i;
        var j;
        var k,jj;
        var col1;
        var col2;
        var minx,maxx,miny,maxy;
        var ftype = 9;
        var dfield, dpos, dval;
        var chartType = parms.chart.chartType;
        var isMatrix = false;
        var mcols = [];
        var mvals = [];
        var mvals2 = [];
        var mftypes = [];
        var pdata;
        var sr,gr;
        var ftys;
        var ycolsCopy,
            typeAdvanced = (parms.dataProvider.type == "advanced");

        try {
            mytable.chartMenuInfo.tooltip.style.visibility = "hidden";
        } catch(e) {}

        if(what == "exclude") {
            ftype = (columns.length > 1) ? arConstants.FILTER_NE : arConstants.FILTER_NOTIN;
        }

        if(what == 'clear') {
            ibiChart.removeFilter();
        } else
        if((typeof columns != "undefined") && (parms.dataProvider.type == 'buckets' )) {
            mcols = columns;
            var subtype = chartType;
            if(subtype == "matrix")
                subtype =  parms.chart.matrixProperties.chartType;
            jj = 0;
            for(j=0; j < selList.length; j++) {
                sr = selList[j].series;
                gr = selList[j].group;
                if((gr === undefined || sr === undefined) && (subtype != "datagrid"))
                    continue;
                mvals[jj] = [];
                pdata = parms.dataProvider.data;
                if((parms.chart.chartType == "matrix") || (parms.chart.chartType == "datagrid"))
                    pdata = pdata[selList[j].row][selList[j].col];
                if(pdata) {
                    for (i = 0; i < columns.length; i++) {
                        dfield = "AR_RFLD_" + parms.mytable.a_cntl.a_cols[columns[i]].field;
                        dpos = inarray(parms.dataProvider.dataArrayMap, dfield, true);
                        if (parms.dataProvider.chartType == "extension") {
                            var ggr = sr % pdata.length;
                            var ssr = parseInt(sr / pdata.length);
                            mvals[jj][i] = pdata[ggr][ssr][dpos];
                        } else
                        if ((subtype == "pie") || (subtype == "funnel") || (subtype == "pyramid"))
                            mvals[jj][i] = pdata[gr][sr][dpos];
                        else
                        if(subtype == "treemap") {
                            mvals[jj][i] =  selList[j].treemapLabelArray[i];
                        } else
                        if(subtype == "datagrid") {
                            mvals[jj][i] = pdata[dpos];
                        } else
                        if(pdata[sr][gr])
                            mvals[jj][i] = pdata[sr][gr][dpos];
                    }
                }
                jj++;
            }
            if(ftype == arConstants.FILTER_NE )
                ftype = arConstants.FILTER_NOTIN;

            if(mcols.length) {
                if(!returnObj)
                ibiChart.addFilter(mytable.id,mcols,[ftype],mvals,mvals2,undefined,undefined,true);
                else {
                    var returnDisplay = false;
                    if(typeof returnObj == "object")
                        if(returnObj.valueType == "object")
                            returnDisplay = true;
                    var fixValues = function(mytable,v1,cols) {
                        var vv1 = [ ];
                        var l;
                        var col;
                        var format;
                        var type;
                        var val;
                        if(v1) {
                            for (l = 0; l < v1.length; l++)
                                    vv1[l] = [];
                            for (col = 0; col < cols.length; col++) {
                                type = mytable.a_capt[cols[col]].type;
                                format = mytable.a_capt[cols[col]].format;

                                if (type == IBIDATE) {
                                    for (l = 0; l < v1.length; l++) {
                                        vv1[l][col] = v1[l][col] + '';
                                        val = vv1[l][col];
                                        if(returnDisplay) {
                                            vv1[l][col] = {};
                                            var vald = ibiStd.ibiDateToJavaScriptDate(val, format);
                                            //vv1[l][col].display = ibiStd.ibiDateToFormat(val, format, false);
                                            vv1[l][col].display = ibiStd.javaScriptDateToIbiDate(vald,format,true);
                                            vv1[l][col].value = ibiStd.ibiDateToFormat(val, format, true);
                                        } else
                                        vv1[l][col] = ibiStd.ibiDateToFormat(val, format, true);
                                    }
                                }
                                else if (type == IBINUM) {
                                    for (l = 0; l < v1.length; l++) {
                                        val = v1[l][col];
                                        if(returnDisplay) {
                                            vv1[l][col] = {};
                                            vv1[l][col].display =  FocusFormat(val,format,mytable.a_cntl.cdn,mytable.a_cntl.cursym);
                                            vv1[l][col].value = ibiStd.ibiNumberToFormat(val, format, null, null);
                                        } else
                                        vv1[l][col] = ibiStd.ibiNumberToFormat(val, format, null, null);
                                    }
                                }
                                else {
                                    for (l = 0; l < v1.length; l++) {
                                        val = v1[l][col];
                                        if(returnDisplay) {
                                            vv1[l][col] = {};
                                            vv1[l][col].display = val;
                                            vv1[l][col].value = val;
                                        } else
                                        vv1[l][col] = val;
                                    }
                                }
                            }
                        } else
                            vv1 = null;
                        return vv1;
                    };
                    mobj = {
                        'columns' : mcols,
                        'values1' : fixValues(mytable,mvals,mcols),
                        'values2' : fixValues(mytable,mvals2,mcols)
                    };
                    return mobj;
                }
            }
            else if (returnObj)
                return null;
        } else
        if(selList.length && what != "clear") {
            if(parms.chart.chartType == "matrix") {
                isMatrix = true;
                col1 = parms.dataProvider.buckets['COLUMN'];
                col2 = parms.dataProvider.buckets['ROW'];
                mcols = col1.concat(col2);
                for(k=0;k<mcols.length; k++) {
                    mvals[k] = [];
                    mvals2[k] = null;
                    mftypes[k] = ftype;
                }

                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        pdata = parms.dataProvider.data;
                        pdata = pdata[selList[j].row][selList[j].col];

                        sr = selList[j].series;
                        gr = selList[j].group;

                        for(k=0; k < mcols.length; k++) {
                            dfield = "AR_RFLD_" + parms.mytable.a_cntl.a_cols[mcols[k]].field;
                            dpos = inarray(parms.dataProvider.dataArrayMap, dfield, true);
                            try {
                                mvals[k][mvals[k].length] = pdata[sr][gr][dpos];
                            } catch(e) {
                                //pie data seems incorrect
                            }
                        }
                    }
                }
                chartType =  parms.chart.matrixProperties.chartType;
            }
            if((chartType == "marker") || (chartType == "gauge")) {
            } else
            if((chartType == "scatter") || (chartType == "bubble")) {
                var parmsY = [];

                if (parms.btypeArray[0] == "") {
                    col1 = mytable.a_capt[parms.x_col[0]].dataField;
                    mcols = mcols.concat([col1]);
                    parmsY = parmsY.concat([parms.x_col[0]]);
                } else {
                    col1 = -1;
                }

                ycolsCopy = ibiStd.copyObject(parms.y_col);
                //check for noprint, since it wont be in the data
                if (!typeAdvanced) {
                    for (i = j = 0; i < parms.y_col.length; i++) {
                        if ((!inarray(parms.y, mytable.a_cntl.a_cols[parms.y_col[i]].field, false)) &&
                            (!inarray(parms.y, mytable.a_cntl.a_cols[parms.y_col[i]].name, false))) {
                            ycolsCopy.splice(j, 1);
                        } else {
                            j++;
                        }
                    }
                }
                
                for (i = 0; i < ycolsCopy.length; i++) {
                    col2 = mytable.a_capt[ycolsCopy[i]].dataField;
                    mcols = mcols.concat([col2]);
                    parmsY = parmsY.concat([parms.y[i]]);
                }
                for (j = 0; j < selList.length; j++) {
                    valx = [];
                    for (k = 0; k < parmsY.length; k++) {
                        if (typeof selList[j].group != "undefined") {
                            if (typeAdvanced) {
                                //valx = parms.dataProvider.groupLabels[selList[j].group];
                                //valy = parms.dataProvider.groupLabels[selList[j].group];
                                valx[k] = parms.dataProvider.groupLabels[selList[j].group];
                            } else {
                                //valx = parms.dataProvider[selList[j].group][parms.x[0]];
                                //valy = parms.dataProvider[selList[j].group][parms.y[0]];
                                valx[k] = parms.dataProvider[selList[j].group][parmsY[k]];
                            }
                        }
                    }
                    mvals = (mcols.length == 1) ? mvals.concat(valx) : mvals.concat([valx]);
                }
                if (mcols.length == 1) {
                    mvals = [mvals];
                } 
                mftypes = mftypes.concat([ftype, ftype]);
            } else
            if(chartType == "map") {
                valy=[];
                valx=[];
                minx = null;
                miny = null;
                maxx = null;
                maxy = null;
                var gname = -1;
                var lat = -1;
                var lng = -1;
                
                for(j=0; j < parms.dataProvider.dataArrayMap.length; j++) {
                    if(parms.dataProvider.dataArrayMap[j]=="name")
                        gname = j;
                    if(parms.dataProvider.dataArrayMap[j]=="lat")
                        lat = j;
                    if(parms.dataProvider.dataArrayMap[j]=="lng")
                        lng = j;
                }
                
                if(lat != -1) {
                    ftype = arConstants.FILTER_BETWEEN;
                    if(what == "exclude") 
                        ftype = arConstants.FILTER_NOTBETWEEN;
                }
                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        if(typeAdvanced)
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                            valy[valy.length] = parms.dataProvider[selList[j].group][parms.y[0]];
                    }
                }

                if(gname!=-1) {
                    col1 = parms.dataProvider.yaxis.ibiDataField;
                    mcols = mcols.concat([col1]);
                    mvals = mvals.concat([valy]);
                    mvals2 = mvals2.concat([null]);
                    mftypes = mftypes.concat([ftype]);
                } else {
                    col1 = parms.dataProvider.xaxis.ibiDataField;
                    col2 = parms.dataProvider.yaxis.ibiDataField;
                    mcols = mcols.concat([col1,col2]);
                    mvals = mvals.concat([[minx],[miny]]);
                    mvals2 = mvals2.concat([[maxx],[maxy]]);
                    mftypes = mftypes.concat([ftype,ftype]);
                }
                
            } else
            if(parms.chart.chartType == "treemap") {
                valy=[];
                //col1 = parms.dataProvider.xaxis.ibiDataField;
                col1 = [];
                valy = [];
                ftys = [];
                for(i=0; i < parms.dataProvider.buckets['DETAIL'].length; i++) {
                    col1[i] = parms.dataProvider.buckets['DETAIL'][i];
                    valy[i] = [];
                    ftys[i] = ftype;
                }

                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        pdata = parms.dataProvider.data;
                        if(isMatrix)
                            pdata = pdata[selList[j].row][selList[j].col];
                        for(i = 0; i < col1.length; i++) {
                            //dfield = "AR_RFLD_" + parms.mytable.a_cntl.a_cols[col1[i]].field;
                            //dpos = inarray(parms.dataProvider.dataArrayMap, dfield, true);
                        //series is the value of the field instead of rec number
                            dval = selList[j].treemapLabelArray[i];
                            valy[i][valy[i].length] = dval;
                        }
                    }
                }
                mcols = mcols.concat(col1);
                mvals = mvals.concat(valy);
                mvals2 = mvals2.concat([null]);
                mftypes = mftypes.concat(ftys);
            } else {// chartType == "line" || chartType == "bar" || chartType == "pie"
                //valy=[];
                col1 = -1;
                var isPie = ((chartType == "pie") || (chartType == "funnel") || (chartType == "pyramid"));
                ycolsCopy = ibiStd.copyObject(parms.y_col);
                //check for noprint, since it wont be in the data
                j = 0;
                if (!typeAdvanced) {
                    for (i = 0; i < parms.y_col.length; i++) {
                        if ((!inarray(parms.y, mytable.a_cntl.a_cols[parms.y_col[i]].field, false)) &&
                                (!inarray(parms.y, mytable.a_cntl.a_cols[parms.y_col[i]].name, false)))
                        {
                            ycolsCopy.splice(j, 1);
                        } else {
                            j++;
                        }
                    }
                }

                for (i = 0; i < ycolsCopy.length; i++) {
                    col1 = ycolsCopy[i];
                    valy=[];
                    if (col1 != -1) {
                        for(j=0; j < selList.length; j++) {
                            if(typeof(selList[j].group)!="undefined") {
                                if (typeAdvanced)
                                    valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                                else {
                                    valy[valy.length] = (isPie) 
                                       ? parms.dataProvider[selList[j].series][parms.y[i]]
                                       : parms.dataProvider[selList[j].group][parms.y[i]];
                                }
                            }
                        }
                    }
                    if(col1!=-1) {
                        mcols = mcols.concat([col1]);
                        if (ycolsCopy.length == 1) {
                            mvals = mvals.concat([valy]);
                        } else {
                            if (i == 0) {
                                mvals = valy;
                            } else {
                                for (j = 0; j < mvals.length; j++) {
                                    if (i == 1) {
                                        mvals[j] = [mvals[j]];
                                    }
                                    mvals[j][i] = valy[j];
                                }
                            }
                        }
                        mvals2 = mvals2.concat([null]);
                        mftypes = mftypes.concat([ftype]);
                    }
                }
            }

            if(mcols.length) {
                if(!returnObj)
                ibiChart.addFilter(mytable.id,mcols,mftypes,mvals,mvals2);
                else {
                    mobj = {
                        'columns' : mcols,
                        'values1' : mvals,
                        'values2' : mvals2
                    };
                    return mobj;
        }
    }
            else if (returnObj)
                return null;
        }
    }

    function GetColumnsAndValues(obj) {
        var returnWhat = true;
        if(typeof obj.valueType != "undefined")
            returnWhat = obj;
        return ibiChart.doChartSelection(obj.tn,obj.what,obj.columns,returnWhat);
    }

})();
