/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arcompound.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180710 1155 wjf 204537 AHTML:Exclude from chart / Undo Filter not working properly
* 180628 1121 wjf 202452 Vis : Running "Missing" value filtered chart throws error
* 180614 1130 wjf 203644 Issue loading Scatter plot in Visualization mode
* 180612 1104 wjf 203644 Issue loading Scatter plot in Visualization mode
* 180416 1050 wjf 202085 Hiding the filter prompt title, hides the prompt drop-down i
* 180329 1145 wjf 201527 Document Canvas: Type any text inside "Edit box" throws "Web
* 180326 1420 wjf 200478 Filter prompt showing additional unselected values, which wa
* 180222 1046 wjf 200246 AHML: Unify JSON output
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 171120 1344 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 171108 0927 bjd 173921 Active report with freeze-column wont resize
* 171016 1652 wjf 196768 "No Data to Graph" message is getting displayed when changin
* 170915 0926 wjf 195240 Dropdown in AR Dashboard does not expand with line object i
* 170905 1448 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170901 1052 wjf 191268 Choropleth\Proportional: lasso on ESRI maps throwing Script
* 170804 1307 bjd 190666 NLV: A string, "MISSING" needs to be extracted for translat
* 170725 1141 wjf 192996 @@measures; chart loading indefinitely
* 170705 1133 wjf 188889 Vis: Run time menu - Funnel functionality is not working pr
* 170620 1412 wjf 191515 Create unified filter component to replace old style filter
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170614 0749 wjf 191515 Create unified filter component to replace old style filter
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170606 1052 wjf 191515 Create unified filter component to replace old style filter
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170522 0931 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170307 1016 wjf 189064 Unchecking "show prompt" option in filter dialog box for cu
* 170217 1912 wjf 188662 POC:Context Menu for Filter Prompt disappears when you resi
* 170215 1030 wjf 188662 POC:Context Menu for Filter Prompt disappears when you resi
* 170209 1803 iys 188553 AHTML: Document with a Text Box Filter does not show report
* 170208 1029 iys 188192 AHTML: Document with several Filters loops on execution.
* 170130 0943 iys 188013 Defaults in an active report
* 170117 1008 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 170110 1146 wjf 187478 Vis: ScrollBar gets disapper at runtime for Filer.
* 161221 1357 bjd 187344 Active Reports (AHTML): Value does not filter properly unle
* 161220 1121 wjf 187346 HTML Canvas: Responsive Page controls not adjusted correctl
* 161220 1116 wjf 185994 Vis: Chrome: Filter prompts slider value not updating at ru
* 161216 2219 wjf 187123 [BLANK] value in Filter Prompt does not appear as displayed
* 161216 0942 wjf 186674 Firefox browser: Filter: Slider range position is dislocate
* 161215 1325 wjf 185425 Filter not applied when use multiple fields in Horizontal A
* 161215 1157 wjf 182462 Matrix Visualization : Filter/Exclude from chart is not wor
* 161215 1110 wjf 186934 With Info Assist+ The Sales by Country and Product Fex in R
* 161123 0910 wjf 186735 Maximize/Restore IA window throws webpage error
* 161116 1141 wjf 186606 Merge Dashboard with filter controls may not display proper
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 161031 1453 ppl 174119 Add new Tree Filter control.
* 161014 1635 wjf 185731 Visualization drill down (auto drill) does not show correct
* 161003 1008 wjf 178042 BUE Vis: Filter on a define field with Y Format throws erro
* 160930 1614 wjf 178042 BUE Vis: Filter on a define field with Y Format throws erro
* 160927 0955 wjf 185118 Vis: slider range not shown in prompt while adding date fie
* 160925 1742 wjf 178042 BUE Vis: Filter on a define field with Y Format throws erro
* 160920 1340 wjf 179717 Vis:Runtime: Lasso Filter after Restore & Remove Filter doe
* 160919 0951 wjf 178299 Field Titles Need Localizaton when Generating Reports
* 160919 0940 wjf 183084 AHTML: Filtering on a Bar Chart with a DATE field as BY, do
* 160914 1405 wjf 183084 AHTML: Filtering on a Bar Chart with a DATE field as BY, do
* 160907 1148 wjf 172322 Active Dashboard has several Filtering problems using a Che
* 160902 1115 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160831 1820 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160831 0847 iys 184211 AHTML: Form Controls with @@COLUMNS/MEASURES Missing/Blank
* 160830 1413 wjf 179652 Vis:Runtime: Restore and Remove filter doesn't preserve the
* 160824 1534 iys 167733 AHTML: Form Controls with @@COLUMNS/MEASURES Missing/Blank
* 160816 1936 wjf 183762 AHTML:  Lasso & Show data then Reset button cause JS error
* 160810 1022 wjf 179816 Retail Samples: "Reset" option in IE11 results script error
* 160711 1501 iys 179638 AHTML:Drop down list entry for Missing data is displayed im
* 160623 0956 wjf 171120 AHTML: Styling: Font Properties
* 160621 1223 wjf 182125 Box objects causing double scroll bars
* 160610 1256 hms 180534 Remove tab characters from source files
* 160609 1241 ppl 174119 Add new Tree Filter control.
* 160526 1220 wjf 179839 Getting FOC Error, when filtering on certain date formats (
* 160519 1010 wjf 180238 If Filter Prompt Created in Descending Order, Only First Va
* 160407 2343 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160407 1615 wjf 179129 AHTML:Chart\Rollup: Error when deleting and adding product
* 160404 2314 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1458 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160404 1452 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160330 0836 wjf 179108 etail Samples: Mutiple action between Visualizations generat
* 160329 1058 wjf 177431 Incorrect values displayed in filter prompt when decomposed
* 160329 1025 wjf 177431 Incorrect values displayed in filter prompt when decomposed
* 160323 1723 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 1128 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 0955 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160321 0915 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160311 1107 wjf 177647 Running This Fex With Drill Down And Drill Up Throws a Scri
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160225 1253 wjf 177432 (FOC280) is thrown for filter with aggregation(Count)
* 160225 1059 wjf 176951 Unable to "Drill Up" in Run mode
* 160217 1339 wjf 176924 WF BUE: Drill down to second level of dimension hierarchy i
* 160215 1638 wjf 176898 AHTML: Cache performance enhancement
* 160211 1615 wjf 176898 AHTML: Cache performance enhancement
* 160209 0945 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160208 1128 iys 176790 AHTML:Active Dashboard chain with radio button not working
* 160204 1206 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 160202 1310 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151214 1331 bjd 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 151026 2004 wjf 169528 AHTML:Allow filter controls to support multi-fields
* 150826 1139 bjd 145226 AHTML:Script error with multi-page, select Filter, switch pg
* 150820 1535 bjd 168416 Filter with Compound date returns FORMAT OF THE TEST VALUE
* 150720 1140 wjf 169809 Prompts: Edit title from prompt generates multiple ALL opti
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150716 1824 wjf 168416 Filter with Compound date returns FORMAT OF THE TEST VALUE
* 150714 1016 wjf 169528 AHTML:Allow filter controls to support multi-fields
* 150624 1131 wjf 167789 Allow filter controls to get data values in parallel
* 150603 1248 wjf 167789 Allow filter controls to get data values in parallel
* 150529 1517 wjf 167789 Allow filter controls to get data values in parallel
* 150528 1505 wjf 167789 Allow filter controls to get data values in parallel
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150519 1526 bjd 167472 AHTML: raw dates not in full YYMD format are incorrect
* 150519 1350 bjd 167472 AHTML: raw dates not in full YYMD format are incorrect
* 150519 1246 wjf 167733 AHTMLK: 8103 error with @@MEASURES in Active Dashboard
* 150507 1309 bjd 161399 ARFILTER_ACTIVE doesn't work w/ date fmt MTYY or YYMT
* 150506 2040 wjf 167336 AHTML: Display filters created from chart
* 150417 0917 wjf 166610 AHTML: IA-2013: Filter with Range not working properly
* 150225 1025 wjf 164530 AHTML: IDIS: sort on controls not working properly
* 150217 1531 wjf 164317 AHTML: MOBILE: Sync checkbox control and menu
* 150206 0852 wjf 164182 AHTML: Allow static where condition.
* 150128 1325 bjd 156223 AHTML:Add AUTOFIT capability to AHTML TABLE grid
* 150122 1147 wjf 163846 Active Dashboard:Chaining Does Not Work
* 150114 0740 wjf 163863 AHTML: Pass dates to ID in original format
* 150112 1616 wjf 163820 AHTML: C9: textinput value causing JS error
* 141215 0630 hms 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141213 1201 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141211 1210 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141119 1920 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141118 1341 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141103 1328 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141103 1309 wjf 134795 Active Visualization
* 141030 1325 wjf 134795 Active Visualization
* 141027 1554 wjf 134795 Active Visualization
* 141027 1214 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141022 1532 wjf 134795 Active Visualization
* 141022 0855 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
* 140925 1935 wjf 134795 Active Visualization
* 140925 1422 wjf 134795 Active Visualization
* 140924 0948 wjf 134795 Active Visualization
* 140917 1237 wjf 134795 Active Visualization
* 140911 1254 wjf 134795 Active Visualization
* 140911 1157 wjf 134795 Active Visualization
* 140909 1224 bjd 161113 AHTML: ARFILTER_SORT = ASCENDING\DESCENDING
* 140905 1417 wjf 134795 Active Visualization
* 140905 1346 wjf 134795 Active Visualization
* 140903 1837 wjf 134795 Active Visualization
* 140827 1904 bjd 161113 AHTML: ARFILTER_SORT = ASCENDING\DESCENDING
* 140827 1759 wjf 134795 Active Visualization
* 140827 1231 wjf 134795 Active Visualization
* 140826 1245 wjf 134795 Active Visualization
* 140813 1618 wjf 134795 Active Visualization
* 140812 1305 bjd 157706 AHTML:ADP:script error running CMPD with empty form controls
* 140729 1603 wjf 134795 Active Visualization
* 140709 1503 wjf 134795 Active Visualization
* 140709 1156 wjf 134795 Active Visualization
* 140708 1625 wjf 134795 Active Visualization
* 140703 1914 wjf 134795 Active Visualization
* 140703 1027 wjf 134795 Active Visualization
* 140702 0812 wjf 134795 Active Visualization
* 140617 1214 wjf 134795 Active Visualization
* 140616 1109 wjf 134795 Active Visualization
* 140601 2014 wjf 134795 Active Visualization
* 140601 1823 wjf 134795 Active Visualization
* 140531 1936 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140516 1514 wjf 134795 Active Visualization
* 140516 1023 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.80 $ 
//$Log: arcompound.js,v $
//Revision 1.80  2014/06/02 00:11:33  William_Forde
//[p134795] fix issue with grid not resizing in run mode.
//
//Revision 1.79  2014/06/01 22:05:25  William_Forde
//[p134795] add scroll to filter controls.
//
//Revision 1.78  2014/05/31 22:37:30  William_Forde
//[p134795] Fixes for using pivot for LOOKGRAPH=GRID.  Add scroll bars when using pivot.  make sure pivot resizes properly.
//
//Revision 1.77  2014/05/28 16:31:45  William_Forde
//[p134795] Apply aggregation when getting the list of values for filter controls.
//
//Revision 1.76  2014/05/21 12:03:11  William_Forde
//[p134795] Allow filter field not to be part of the chart/grid if we are in cache mode NOEXTRACT, since it is possible for that field be in the master, but not in the request used to popluate the filters.  Also fix the all issue in the checkbox.
//
//Revision 1.75  2014/05/16 15:09:37  William_Forde
//[p134795] check if aggregation is added to fieldname
//
//Revision 1.74  2014/05/16 13:58:49  William_Forde
//[p134795][IA-408] FIx issue with string object not being found when added to hbox/vbox.  Will need to fix issue with string object width and height not supporting percentage.
//
//Revision 1.73  2014/05/08 21:28:39  William_Forde
//[p134795] fix issue with combobox's dropdown arrow not working. fix issue with drop down arrow for the menu disappearing.
//
//Revision 1.72  2014/04/21 22:08:16  William_Forde
//[p134795] auto hide icon buttons after 5 seconds
//
//Revision 1.71  2014/04/16 14:37:46  William_Forde
//[p134795] Size VBOX/HBOX to match IA canvas.  Fix issue with slider not being applied properly at runtime causing no data message to be displayed.
//
//Revision 1.70  2014/04/04 12:10:08  William_Forde
//[p134795] Disable console.log for search icon.  Now it will do nothing.
//
//Revision 1.69  2014/03/26 19:10:56  William_Forde
//[p134795] fix error when values seem to be null.
//
//Revision 1.68  2014/03/26 00:01:18  William_Forde
//[p134795] fix javascript warnings
//
//Revision 1.67  2014/03/25 22:27:42  William_Forde
//[p134795] For demo, set all filter controls to active.
//
//Revision 1.66  2014/03/25 12:56:10  William_Forde
//[p134795] Support filterSibling and fix slider to not act like a "chain" filter unless specified.
//
//Revision 1.65  2014/03/17 13:02:23  William_Forde
//[p134795][>branch8100] Return correct fix for warning message.
//
//Revision 1.64  2014/03/14 19:23:56  Peter_Lenahan
//[p134795][>branch8100] Fixed issues with JavaScript warnings and the closure compiler.
//
//Revision 1.63  2014/03/13 02:26:55  William_Forde
//[p134795][>branch8100] Fix javascript warning
//
//Revision 1.62  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.61  2014/03/06 16:47:23  William_Forde
//[p134795][>branch8100]  Fix issue with slider causing js error.
//
//Revision 1.60  2014/03/05 20:22:55  William_Forde
//[p134795][>branch8100] Fix issue with chart not filtering when field is not used in report but is part of the "dataReport". Fix slider api not setting the default values properly.
//
//Revision 1.59  2014/03/04 16:43:39  William_Forde
//[p154876][>branch8100] If api isued to create filter object, default width to 100%
//
//Revision 1.58  2014/03/04 04:57:21  William_Forde
//[p134795][>branch8100] Fix issue with grid not showing correct data when a filter is applied with cache.
//
//Revision 1.57  2014/03/03 19:43:21  William_Forde
//[p134795][>branch8100]Add  method clearActiveReport to reinitialize all active objects.
//
//Revision 1.56  2014/03/03 16:21:20  Israel_Schulman
//[p156517][>branch8100] In case width/height are Numbers, use String to access indexOf method.
//
//Revision 1.55  2014/02/27 15:22:08  Israel_Schulman
//[p156371][>branch8100] Parse height value as integer so that dashboard bar can be set to proper height if it has layout objects. Call drawLayoutObjects() if there are no LayoutObjects but there are ibiCompound.ibiDashLayout objects; fixes graph/report not displaying in dashboard bar.
//
//Revision 1.54  2014/02/25 04:08:02  William_Forde
//[p134795][>branch8100] Add new search icon. fix issue with where condition.
//
//Revision 1.53  2014/02/25 02:55:22  William_Forde
//[p134795][>branch8100] swap search and menu icons position in filter.  Fix issue with grid error.
//
//Revision 1.52  2014/02/19 15:41:00  William_Forde
//[p134795][>branch8100] add onFilterChange callback
//
//Revision 1.51  2014/02/10 22:13:48  Brian_DCruz
//[p151710] cleanup code caught by Lint. Unrelated to project bug.
//
//Revision 1.50  2014/02/10 21:53:07  Brian_DCruz
//[p151710] div ids should be unique
//
//Revision 1.49  2014/01/30 20:18:07  William_Forde
//[p134795][>branch8100] Merge applyfilter code from checkbox to main compound code.
//
//Revision 1.48  2014/01/15 16:01:03  William_Forde
//[p134795] pass more information in aricon's event object.
//
//Revision 1.47  2014/01/15 15:42:27  William_Forde
//[p134795] Allow api to override aricon onclick function.
//
//Revision 1.46  2014/01/14 15:01:33  William_Forde
//[p134795] add showMenu and showSearch option to  filters so that icons can be hidden.
//
//Revision 1.45  2014/01/13 19:50:22  William_Forde
//[p134795] Allow filter condition for slider to be EQ (1 tab) or BT (2 tabs).
//
//Revision 1.44  2014/01/13 17:25:45  William_Forde
//[p134795] Implement vslider and fix html syntax error.
//
//Revision 1.43  2014/01/13 15:24:48  William_Forde
//[p154876] Handle dhowtitle setting in arcompound.
//
//Revision 1.42  2013/12/30 14:27:58  William_Forde
//[p153472]  If ARFILTER_ONCHANGE=ON, then we need to apply it after we refresh its list of value, from its parent filter being changed by the user.
//
//Revision 1.41  2013/12/20 06:49:01  William_Forde
//[p151491] If Box contains more than one component and one of the components have width=100%, dont set it, so that it only takes up the space that is left over.
//
//Revision 1.40  2013/12/19 21:02:52  William_Forde
//Use jquery ui version of the slider.
//
//Revision 1.39  2013/12/13 05:09:08  William_Forde
//[p134795] Make sure all components have a unique id.
//
//Revision 1.38  2013/12/06 13:47:29  William_Forde
//[p134795] Add delete option to filter object.
//
//Revision 1.37  2013/12/05 21:16:55  William_Forde
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
//Revision 1.36  2013/12/05 15:18:17  William_Forde
//[p154876] Fix apply filter.
//
//Revision 1.35  2013/12/05 14:37:52  William_Forde
//[p154876] Merge common routines into arcompound.
//
//Revision 1.34  2013/12/05 03:10:12  William_Forde
//[p154876] Move showtile routine into arcompound so that only one file needs to be updated.
//
//Revision 1.33  2013/12/03 14:58:13  William_Forde
//[p154876] Add showtitle option.
//
//Revision 1.32  2013/11/22 16:12:56  William_Forde
//[p151491] Fix issue with charts not resize in HBOX/VBOX when the browser changes size.
//
//Revision 1.31  2013/11/21 14:08:28  William_Forde
//[p154707] If filtertarget is
//
//Revision 1.30  2013/11/19 17:35:58  William_Forde
//[p154515] Box and Line needs dummy hidden div.
//
//Revision 1.29  2013/11/19 17:12:57  William_Forde
//[p154515]  since objname is now being set it a seperate function, use the divName passed back from that function.
//
//Revision 1.28  2013/11/14 18:36:32  William_Forde
//[p154515] If hidden flag, then do make control visible.
//
//Revision 1.27  2013/11/14 18:24:11  William_Forde
//[p154515] If hidden flag, then do make control visible.
//
//Revision 1.26  2013/10/15 18:51:30  Israel_Schulman
//[p153644] Check for both name and objname properties on items in LayoutObjects when assigning object id's.
//
//Revision 1.25  2013/10/15 13:32:47  William_Forde
//[p151491]  Ignore spaces or case in "CONTENT" of vbox/hbox
//
//Revision 1.24  2013/10/03 13:43:30  William_Forde
//[p151491] Use TABLE instead of DIV because div's had too many issues with borders.
//
//Revision 1.23  2013/08/20 00:26:19  Brian_DCruz
//[p147991] Since the filter option is stored in an <option> tag, the values have to be stored as strings. So on the way back, if we encounter a numeric value, we store a number, otherwise we store the value asis from the mergereport form.
//
//Revision 1.22  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.21  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.20  2013/08/02 13:26:07  William_Forde
//[p151491] fix issue wth yuicompressor thinking float is a reserve word.
//
//Revision 1.19  2013/08/01 15:38:20  William_Forde
//[p151491] Layout HBOX/VBOX with just divs.  Due to border on some divs, they need to be wrapped by a "clean" div, since 100% with and height doesnt include the border.
//
//Revision 1.18  2013/05/23 20:39:52  Brian_DCruz
//[p145797] fix forever bug typo syle instead of style
//
//Revision 1.17  2013/04/18 14:09:40  William_Forde
//[p134795] Performance enhancement for filter onload.
//
//Revision 1.16  2012/09/29 20:35:39  William_Forde
//[p128912] Fix issue with filtertarget pointing at more than one report.  Fix issue with filter being applied to wrong report.
//
//Revision 1.15  2012/09/27 15:21:55  William_Forde
//[p128912][>branch8001] Allow use to set the default value(s) of the filter controls.
//
//Revision 1.14  2012/09/11 19:41:50  William_Forde
//[p141579]  Display dashboardbar area if there is any components added to the dashboardbar pagelayout.
//
//Revision 1.13  2012/09/06 20:05:22  William_Forde
//[p141424] rollup hide/show already handled elsewhere, so dont check for maintable if it is a rollup.
//
//Revision 1.12  2012/09/06 19:09:52  William_Forde
//[p136793] Only set controls to inactive, when its target matches the current filter control being applied.
//
//Revision 1.11  2012/08/27 17:57:11  William_Forde
//[p96890] Fix issue with incorrectly using the height of non dashboardbar components to set its max height.
//
//Revision 1.10  2012/08/27 16:58:12  William_Forde
//[p96890] Fix issue with filter being reset when toggling layout.  Fix issue with chart in dashboardbar vanishing when toggling layout. Add constant for LAYOUT_DASHBOARD -3.
//
//Revision 1.9  2012/08/27 14:46:36  William_Forde
//[p96890] Allow chart/grid/pivot to be placed in dashboardbar area.
//
//Revision 1.8  2012/08/26 19:52:41  William_Forde
//[p96890] Add components to the dashboard bar area.
//
//Revision 1.7  2012/08/09 16:30:50  William_Forde
//[p135287] FIx issue with border around pivot not being sized correctly why toggling between layouts.
// 
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arcompound"]="$Revision: 20180710.1155 $";

(function() {

    if (typeof window.ibiCompound !== 'undefined') {
        return;
    }

    window.ibiCompound = resetCompound();
    if ('addEventListener' in window) {
        window.addEventListener("resize", ibiCompound.handleResize, false);
    } else {
        window.attachEvent("onresize", ibiCompound.handleResize);
    }

    function resetCompound()
    {
        return {
        Showlayout:showlayout,
        layoutIsOn:false,
        ibiLayout:[],
        ibiDashLayout:[],
        currentMergeFilter:null,
        hiddenGlobalFilters:[],
        drawObjectsList:[],
        drawObjectsPtr:{},
        drawObjectsActive:[],
        drawObjectsApiFilters:[],
        drawBoxLayouts:[],
        DrawLayoutObjects:drawLayoutObjects,
        DoAnyTrans:doAnyTrans,
        transEnable:false,
        SwitchMerge:switchMerge,
        hasSameTarget:HasSameTarget,
        showBar:showbar,
        haveDashBoardObjects:false,
        handleResize: HandleResize,
        handleResizeReal: HandleResizeReal,
        createLayoutObject: CreateLayoutObject,
        addLayoutObject:APIAddLayoutObject,
        findLayoutObject: APIfindLayoutObject,
        deleteLayoutObject:APIDeleteLayoutObject,
        showTitle: ShowTitle,
        moveDiv:MoveDiv,
        stopDiv:StopDiv,
        startDiv:StartDiv,
        dashHeight: 0,
        getTable:GetTable,
        doFilter:DoFilter,
        doFilterReal: DoFilterReal,
        refreshChildren:RefreshChildren,
        showIconBox: ShowIconBox,
        hideIconBox: HideIconBox,
        resetIconBox: ResetIconBox,
        hideIconBox: HideIconBox,
        undoStack: undoStack,
        processDataProvider: ProcessDataProvider,
        processDataProvider2: ProcessDataProvider2,
        dispatchFilterChangedEvent: dispatchFilterChangedEvent,
        setValuesFromDefault:SetValuesFromDefault,
        applyFilter:ApplyFilter,
        currentLayout:-1,
        tempNameCount:200,
        boxLayoutFullsceen:false,
        showMobileFilter: ShowMobileFilter,
        mobileItemSelect: MobileItemSelect,
        ResetCompound: resetCompound,
        chartFilters:[],
        isCompoundReport: false,
        getDateFilterValue: GetDateFilterValue,
        getMultiFilterValue: GetMultiFilterValue,
        buildComponent: BuildComponent,
        setInternalTitle: SetInternalTitle,
        adjustBox:AdjustBox,
        setFilterFunctions: SetFilterFunctions,
        DoFilterTimer: null
        };
    }

    function SetFilterFunctions(filter) {
        filter.setInternalTitle = ibiCompound.setInternalTitle;
        filter.moveDiv = ibiCompound.moveDiv;
        filter.stopDiv = ibiCompound.stopDiv;
        filter.startDiv = ibiCompound.startDiv;
        filter.getTable = ibiCompound.getTable;
        filter.doFilter = ibiCompound.doFilter;
        filter.refreshChildren = ibiCompound.refreshChildren;
        filter.BuildShowTitle = ibiCompound.showTitle;
        filter.applyFilter = ibiCompound.applyFilter;
        filter.processDataProvider = ibiCompound.processDataProvider;
        filter.processDataProvider2 = ibiCompound.processDataProvider2;
        filter.setValuesFromDefault = ibiCompound.setValuesFromDefault;
        filter.c_buildComponent = ibiCompound.buildComponent;
        filter.javaScriptDateToIbiDate = ibiStd.javaScriptDateToIbiDate;
        filter.ibiDateToJavaScriptDate = ibiStd.ibiDateToJavaScriptDate;
        filter.doFilterReal = ibiCompound.doFilterReal;
        filter.dispatchFilterChangedEvent = ibiCompound.dispatchFilterChangedEvent;
    }

    function SetInternalTitle() {
        var fc = a_filt_name[ibiStd.mapFilterObjectCondition(this.filterCondition)];
        var i;
        var columnName;
        if(typeof this.mytable == "undefined")
            this.mytable = this.getTable(this.dataReport);

        if(!this.mytable)
            return;

        if(this.dataColumnType == "multi") {
            columnName = this.mytable.getColumnTitleByName(this.dataColumn[0]);
            for(i=1; i < this.dataColumn.length; i++) {
                columnName += " : "+this.mytable.getColumnTitleByName(this.dataColumn[i]);
            }
        } else {
            if(this.aggColumn)
                columnName = this.mytable.getColumnTitleByName(this.aggColumn);
            else
        columnName = this.mytable.getColumnTitleByName(this.dataColumn);
        }
        this.internalTitle =  columnName + " " + fc + " ";
        if (this.values.length) {
            var maxVals = this.values.length;
            if(maxVals>4)
                maxVals = 4;
            for (i = 0; i < maxVals; i++)
                this.internalTitle += this.values[i] + ',';
            if(maxVals < this.values.length)
                this.internalTitle += "etc";
        }
        if(this.internalTitleUpdated)
            this.internalTitleUpdated();
    }


    function BuildComponent(formstr) {
        var divStr=' id="'+this.divName+'" style="display:'+(this.visible?'block':'none')+';';

        if((this.y!=0) || (this.x!=0))
            divStr += "position:absolute;top:"+this.y+"px;left:"+this.x+"px;";
        else
            divStr += "position:relative;";
        if(this.font) divStr += 'font-family:'+this.font+';';
        if(this.color) divStr += 'color:'+this.color+';';
        if(this.backcolor) divStr += 'background-color:'+this.backcolor+';';
        if(this.size) divStr += 'font-size:'+this.size+'pt;';
        if(this.container) {
            var c = this.container;
            if(c.parentNode)
                if((c.parentNode.offsetWidth != 0) || (c.parentNode.offsetHeight != 0))
                    c = c.parentNode;
            if(c) {
                if(c.offsetWidth!=0)
                    divStr += "width:"+c.offsetWidth+"px;";
                else
                if(typeof(c.style.width)!="undefined")
                    divStr += "width:"+c.style.width+";";

                if(c.offsetHeight!=0)
                    divStr += "height:"+c.offsetHeight+"px;";
                else
                if(typeof(c.style.height)!="undefined")
                    divStr += "height:"+ c.style.height+";";
            }
        } else {
            if(this.width!=null) divStr += "width:"+this.width+";";
            if(this.height!=null) divStr += "height:"+this.height+";";
        }
        if(!this.showTitle)
            if(this.width!=null||this.height!=null)
                divStr += "overflow:auto;";
        divStr += '"';
        var newdiv = '<div '+divStr+'>'+formstr+'<\/div>';
        newdiv = this.BuildShowTitle(formstr,divStr);
        return newdiv;
    }

    function MobileItemSelect(filter_id,item_number) {
        var filter = getObjectByName(filter_id);
        var obj;
        var displayedIndex = item_number;
        if(filter) {
            if(filter.type == "checkbox") {
                var obj = document.getElementById(filter.type+filter.id);
                if(obj)
                    obj.value[displayedIndex].checked =  !obj.value[displayedIndex].checked;
                obj.value[displayedIndex].onclick();
                if(ibi_iPadMenu)
                    ibi_iPadMenu.updateMenuItem(displayedIndex,obj.value[displayedIndex].checked);
            }
        }
    }

    function ShowMobileFilter(filter_id) {
        var filter = getObjectByName(filter_id);
        var mytable = null;
        if(filter) {
            mytable = filter.getTable(filter.dataReport);
            var menu = ["line one","line two"];
            menu = {'items':[],'title':filter.title};
            menu.items[0] = {'func':null,'display':'line one'};
            menu.items[1] = {'func':null,'display':'line two'};

            for(var i=0; i < filter.dataProvider[0].length; i++) {
                //if(i==10) break;
                menu.items[i] = {};
                menu.items[i].func = "ibiCompound.mobileItemSelect('"+filter_id+"',"+i+");";
                var isChecked = '';
                var isIn;
                var val = filter.dataProvider[3][i]+'';

                /*
                if(filter.values != null) {
                    if(typeof filter.values[0] != "string")
                        val = val * 1;
                    isIn = inarray(filter.values, val, null, this.clen);
                } else
                    isIn = false;
                    */
                isIn = false;
                if(inarray(filter.checked,i))
                    isIn = true;
                if (isIn) {
                    menu.items[i].checked = true;
                    //isChecked = 'checked="checked"';
                    //filter.checked[filter.checked.length] = i;
                }

                menu.items[i].display = filter.dataProvider[1][i];
               // this.line += '<input '+isChecked+' type="checkbox" onclick="ibiCompound.drawObjectsPtr[\''+this.id+'\'].checkMulti('+i+');ibiCompound.drawObjectsPtr[\''+this.id+'\'].doFilter()" id="'+this.type+this.id+'_'+i+'" name="value" value="'+this.dataProvider[0][i]+'"\/>';

            }

            ibi_iPadMenu.showFilterMenu(mytable,filter,menu,MP_GRP);

        }

    }

    function ProcessDataProvider(t_async) {
        var i;
        var isIn;
        var comp = this;
        var async = true;
        if(typeof t_async != "undefined")
            async = t_async;

        this.mytable = this.getTable(this.dataReport);
        if(typeof this.processDataProviderCallBack == "undefined") {
            this.processDataProviderCallBack = ibiCompound.processDataProvider2;
        }
        if (this.mytable) {
            this.dataProvider = [];
            this.col = this.dataColumn;
            var top_level_filter;

            if(typeof this.col != "object")
                if (this.col.substring(0, 2) == "@@") {
                    this.multiselect = true;
                    this.special = true;
                //if (this.realFilterTarget == null) {
                //    this.realFilterTarget = this.filterTarget;
                //    this.filterTarget = "@@";
                //}
                }
            if (!this.special) {
                this.col = -1;
                if(typeof this.aggColumn != "object")
                this.col = this.mytable.getColumnByName(this.aggColumn, this.mytable);
                else
                    if(this.defineName)
                        this.col = this.mytable.getColumnByName(this.defineName, this.mytable);
                //add data column  to all tables.
                var cols = [];
                var types = [];
                var formats = [];
                if((this.col == -1) && (this.dataColumnType == "multi")) {
                    for(i = 0; i < this.dataColumn.length; i++) {
                        cols[i] = this.mytable.getColumnByName(this.dataColumn[i], this.mytable);
                        types[i] = this.mytable.a_capt[cols[i]].type;
                        formats[i]= this.mytable.a_capt[cols[i]].format;
                    }
                    this.types = types;
                    this.formats = formats;
                    this.col = this.mytable.a_capt.length;
                    if(this.filterFromFex) {
                        this.mytable.restore_a_capt[this.col] = {
                            'norpint': true,
                            'columns': cols,
                            'isFilterDefine': true,
                            'fields': cols,
                            'format': '(A1000)',
                            'ignore': true,
                            'type': IBISTR
                        };
                        this.mytable.restore_a_cntl.a_cols[this.col] = {
                            'name': this.defineName,
                            'field': this.defineName,
                            'dis': this.defineName,
                            'qualname': this.defineName,
                            'alias': this.defineName
                        };
                    }
                    this.mytable.a_capt[this.col] = {'norpint':true,'columns':cols,'isFilterDefine':true,'fields':cols,'format':'(A1000)','ignore':true,'type':IBISTR};
                    this.mytable.a_cntl.a_cols[this.col]={'name':this.defineName,'field':this.defineName,'dis':this.defineName,'qualname':this.defineName,'alias':this.defineName};
                    var tnames = this.filterTarget.split(",");
                    if(this.filterTarget=="*") {
                        tnames=[];
                        for(i=0; i < MyTable.length; i++) {
                            if(MyTable[i].deleted)
                                continue;
                            tnames[tnames.length] = MyTable[i].table_name;
                        }
                    }
                    for(i=0; i < tnames.length; i++) {
                        var m = getTable(tnames[i]);
                        if(m) {
                            if(m.getColumnByName(this.defineName) == -1) {
                                if(this.filterFromFex) {
                                    m.restore_a_capt[m.a_capt.length] = {
                                        'norpint': true,
                                        'columns': cols,
                                        'isFilterDefine': true,
                                        'fields': cols,
                                        'format': '(A1000)',
                                        'ignore': true,
                                        'orgReport': this.mytable.table_name
                                    };
                                    m.restore_a_cntl.a_cols[m.a_cntl.a_cols.length] = {
                                        'name': this.defineName,
                                        'field': this.defineName,
                                        'dis': this.defineName,
                                        'qualname': this.defineName,
                                        'alias': this.defineName
                                    };
                                }
                                m.a_capt[m.a_capt.length] = {'norpint':true,'columns':cols,'isFilterDefine':true,'fields':cols,'format':'(A1000)','ignore':true,'orgReport':this.mytable.table_name};
                                m.a_cntl.a_cols[m.a_cntl.a_cols.length]={'name':this.defineName,'field':this.defineName,'dis':this.defineName,'qualname':this.defineName,'alias':this.defineName};
                            }
                        }
                    }

                }
            }

            var fcomp = this;
            var recordLimit = arConstants.RECLIMIT;
            if(this.limitDataProvider) {
                recordLimit = 1;
            }

            var cb = function(db) {
                fcomp.dataProvider=db;
                fcomp.processDataProviderCallBack();
            };
            if (this.col != -1) {
                if (this.special) {
                    this.dataProvider = this.getColumnNamesDP(this.mytable, this.col.substr(2));
                } else {
                    var bycol  = -1;
                    this.filter_datatype = this.mytable.a_capt[this.col].type;
                    this.filter_dataformat = this.mytable.a_capt[this.col].format;
                    if(this.haveAgg && (this.filter_datatype != IBINUM)) {
                        this.filter_datatype = IBINUM;
                        this.filter_dataformat = "(I10     )";
                    }
                    if((this.haveAgg)&&(this.aggBy))
                        bycol = this.mytable.getColumnByName(this.aggBy,this.mytable);
                    if (this.mytable.cacheCol)
                        if (this.mytable.cacheCol[this.col])
                            this.mytable.cacheCol[this.col] = null;

                    if (this.filterOnload && (this.filterParent || this.children.length)) {
                        top_level_filter = this;

                        while (top_level_filter.filterParent)
                            top_level_filter = top_level_filter.filterParent;

                        if (top_level_filter && top_level_filter.filter_chain_values) {
                            if (top_level_filter.filter_chain_values[this.dataColumn]) {
                                this.dataProvider = top_level_filter.filter_chain_values[this.dataColumn];
                            }

                            if (!this.children.length)
                                top_level_filter.filter_chain_values = null;
                        } else {
                            this.dataProvider = this.mytable.getUniqValues(this.col, this.dataProvider, null, recordLimit, this.showFiltered, null, this.aggType, bycol,undefined,async,cb);
                        }
                    } else {
                        this.dataProvider = this.mytable.getUniqValues(this.col, this.dataProvider, null, recordLimit, this.showFiltered, null, this.aggType, bycol,undefined,async,cb);
                    }
                }
            }
            if(this.dataProvider != "wait")
            window.setTimeout(function () {
                comp.processDataProviderCallBack();
            }, 0);
        }
    }

    function GetDateFilterValue(comp,val,fromZero) {
        var indx = -1;
        if(comp.dataProvider && comp.dataProvider.length>4) {
            indx = inarray(comp.dataProvider[1], val, true);
            if (indx < 0)
                indx = inarray(comp.dataProvider[3], val + '', true);
            if (indx < 0)
                indx = inarray(comp.dataProvider[0], val + '', true);
            if(indx<0) {
                vald = ibiStd.ibiDateToJavaScriptDate(val, comp.filter_dataformat);
                vald = ibiStd.javaScriptDateToIbiDate(vald,comp.filter_dataformat,true);
                indx = inarray(comp.dataProvider[1], vald, true);
            }
        }
        if (indx >= 0) {
            if(fromZero)
                return comp.dataProvider[0][indx];
            else
                return comp.dataProvider[3][indx]; // use raw values under the covers
        } else {
            return ibiStd.ibiDateToJavaScriptDate(val, comp.filter_dataformat, true) + "";
        }
    }

    function GetMultiFilterValue(comp,val,fromZero) {
        var indx = -1;
        var i,j;
        if(comp.limitDataProvider) {
            if(typeof val == "object")
                return val;
            else
            return val.split(arSet.FILTER_SEPARATOR_OPTIONAL);
        } else
        if(comp.dataProvider && comp.dataProvider.length>4) {
            indx = inarray(comp.dataProvider[1], val, true);
            if (indx < 0)
                indx = inarray(comp.dataProvider[3], val, true);
            if (indx < 0)
                indx = inarray(comp.dataProvider[0], val, true);
            //chech if any fields are dates and convert temp to display
            if(indx<0) {
                if(comp.types) {
                    var hasDate = false;
                    for (i = 0; i < comp.types.length; i++)
                        if(comp.types[i]=="IBIDATE")
                            hasDate = true;
                    if(hasDate) {
                        if (typeof comp.dataProvider[6] != "undefined") {
                            for(i =0; i < comp.dataProvider[6].length; i++) {
                                if(typeof comp.dataProvider[6][i][0] == "undefined")
                                    continue;
                                var nval = '';
                                for(j=0; j < comp.dataColumn.length; j++) {
                                    if(j>0)
                                        nval += arSet.FILTER_SEPARATOR;
                                    if (comp.types[j] == "IBIDATE")
                                        nval += ibiStd.ibiDateToFormat(comp.dataProvider[6][i][j],comp.formats[j],true);
                                    else
                                        nval += comp.dataProvider[6][i][j];
                                }
                                if(nval == val) {
                                    indx = i;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (indx >= 0) {
            if(fromZero)
                return comp.dataProvider[0][indx];
            else
                return comp.dataProvider[3][indx]; // use raw values under the covers
        } else {
            return val;
        }
    }

    function SetValuesFromDefault() {
        if(!this.defaultValues) {
            if(this.type != 'textinput') {
                if(this.showAll)
                    this.undoStack.pushValue([ibiMsgStr["all"]]);
                else
                    this.undoStack.pushValue([this.dataProvider[3][0]]);
            }
            return;
        }
        var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
        var stopLoop = (this.multiselect) ? this.defaultValues.length : 1;
        if(typeof this.defaultValues != "object") {
            stopLoop = 1;
        }
        var vals;
        this.allSelected = false;
        this.values = [];
        var valueIsObject = false;
        this.selectedMin = null;
        this.selectedMax = null;
        for (var i = 0; i < stopLoop; ++i) {
            vals = this.defaultValues[i];
            if(this.valueAsIs) {
                if(typeof this.defaultValues != "object")
                    vals = this.defaultValues;
                if (typeof vals == "object")
                    valueIsObject = true;
                else {
                    try {
                        vals = JSON.parse(vals);
                        if (typeof vals == "object")
                            valueIsObject = true;
                    } catch (e) {

                    }
                }
            }
            if(vals==ibiMsgStr["all"]) {
                //this.values = [ibiMsgStr["all"]];
                this.values = [];
                this.allSelected = true;
                this.active = false;
                break;
            }
            if(vals=="_FOC_MISSING") {
                this.defaultValues[i] = MISSING_STR;
            }
            if(typeof this.filter_datatype == "undefined") {
                if(this.dataReport) {
                    if(this.mytable == null)
                        this.mytable = this.getTable(this.dataReport);
                }
                if(this.mytable && this.dataColumn) {
                    if(typeof this.dataColumn == "object") {
                        this.filter_dataformat = "(A1000)";
                        this.filter_datatype = IBISTR;
                    } else {
                        var col = this.mytable.getColumnByName(this.dataColumn);
                        if(col!=-1) {
                            this.filter_dataformat = this.mytable.a_capt[col].format;
                            this.filter_datatype = this.mytable.a_capt[col].type;
                        }
                    }
                }
            }
            if((vals == MISSING_STR)|| (vals == "_FOC_MISSING" ))
                this.values[i] = missingVal;
            else
            switch (this.filter_datatype) {
                case IBIDATE:
                    if(vals != 0) {
                        this.values[i] = ibiCompound.getDateFilterValue(this, vals);
                    } else {
                        this.values[i] = " ";
                    }
                    this.defaultValues[i] = this.values[i];
                    break;
                case IBINUM:
                    this.values[i] = ibiStd.ibiNumberToFormat(vals * 1, this.filter_dataformat);//this.defaultValues[i]*1;
                    break;
                default:
                    if(typeof this.aggColumn == "object")
                        this.values[i] = ibiCompound.getMultiFilterValue(this,this.defaultValues[i]);
                    else
                        this.values[i] = vals;
                    break;
            }

            if(this.type == 'textinput') {
                var textInputElement = document.getElementById(this.type + this.id);

                if(textInputElement) {
                    textInputElement.value.value = this.values[0];
                }
            }
        }
        if(this.valueAsIs) {
            if(valueIsObject) {
                if(this.values[0].column) {
                    var o = this.values[0].column.split(":");
                    var tn = o[0];
                    var bn = o[1];
                    var sv = ibiStd.copyObject(this.values);
                    var mytable = this.getTable(tn);
                    if(mytable.a_cntl.buckets) {
                        if (mytable.a_cntl.buckets[bn]) {
                            var bcol = mytable.a_cntl.buckets[bn][0];
                            this.dataColumn = mytable.a_cntl.a_cols[bcol].field;
                            this.aggColumn = this.dataColumn;
                            this.dataReport = tn;
                            this.valueSpecialSub = true;
                            this.values = sv[0].value;
                            this.filter_dataformat = mytable.a_capt[bcol].format;
                            this.filter_datatype = mytable.a_capt[bcol].type;
                        }
                    }

                }

            }
        }
        if(vals == ibiMsgStr['all'] && this.showAll )
            this.undoStack.pushValue([ibiMsgStr['all']]);
        else
            this.undoStack.pushValue(this.values);
        if(this.undoStack.extra) {
            var fo = this.undoStack.getCurrentValueInternal();
            if(fo)
                fo.object = this.undoStack.extra;
            this.undoStack.extra = null;
        }
    }

    function ProcessDataProvider2() {
        var i;
        var isIn;

        if(this.needToSetValuesFromDefault) {
            this.setValuesFromDefault();
            this.needToSetValuesFromDefault = false;
        }
        if (this.mytable) {
            if (this.col != -1) {
                if (this.special) {
                } else {
                    if(this.dataProvider.length)
                        if(typeof(this.dataProvider[4])!='undefined') {
                            this.filter_datatype = this.dataProvider[4];
                            this.filter_dataformat = this.dataProvider[5];
                        }
                }
                // When using the api to change some of the filter options, that cause a refresh, we can end up will multiple ALLs.
                if (this.showAll && (this.dataProvider != null) && (typeof this.dataProvider == "object")) {
                    if(this.dataProvider.length == 0){
                        for(i=0;i <= 6; i++)
                            this.dataProvider[i] = [];
                    }
                        
                    if(this.dataProvider[0][0] != ibiMsgStr['all']) {
                        this.dataProvider[0].splice(0, 0, ibiMsgStr['all']);
                        this.dataProvider[1].splice(0, 0, ibiMsgStr['all']);
                        this.dataProvider[3].splice(0, 0, ibiMsgStr['all']);

                        if(this.dataProvider[6]) {
                            this.dataProvider[6].splice(0, 0, ibiMsgStr['all']);
                        }
                    }
                }

                if(!this.special)
                    if(typeof(this.filter_datatype)=='undefined') {
                        this.filter_datatype = this.mytable.a_capt[this.col].type;
                        this.filter_dataformat = this.mytable.a_capt[this.col].format;
                    }
                this.rowCount = this.dataProvider[0].length;
                this.clen = null;
                //if (this.filter_datatype == IBIDATE) {
                //    this.clen = 8;
                //}
                var stopLoop;
                var doOnload = false;
                var filterIndex = (this.filterSortDesc === true) ? this.rowCount - 1 : 0;
                if(this.showAll)
                    filterIndex = 0;

                if (this.filterOnload && !this.filterOnloadRan)
                    doOnload = true;

                if (doOnload || this.onChange) {
                    if (this.onChange && !doOnload) {
                        this.values[0] = this.dataProvider[3][filterIndex];
                        //this.applyFilter();
                    } else {
                        if (this.defaultValues == null)
                            this.values[0] = this.dataProvider[3][filterIndex];
                        //this.filterOnloadRan = true;
                    }
                    if(this.allSelected && this.showAll) {
                        this.values = [];
                        this.values[0] = ibiMsgStr['all'];
                    }
                    this.applyFilter();
                } else if (this.showAll) {
                    this.reset = false;
                    this.allSelected = false;

                    if ((this.values != null) && (this.values.length>0)) {
                        for (i = 0; i < this.values.length; i++) {
                            isIn = inarray(this.dataProvider[3], this.values[i], null, this.clen);
                            if (!isIn) {
                                this.reset = true;
                                break;
                            }
                        }
                    } else
                        this.reset = true;
                    if (this.reset) {
                        this.values = [];
                        this.values[0] = ibiMsgStr['all'];
                        this.allSelected = true;
                    }
                }
                if((this.values.length == 0)||(this.values[0]==ibiMsgStr['all']))
                    this.active = false;

                if(this.allSelected && this.showAll) {
                    this.values = [];
                    this.values[0] = ibiMsgStr['all'];
                }

                if(this.objs) {
                    if(this.displayControl)
                        this.displayControl();
                    else if (typeof(this.outputValueHtmlBegin) != "undefined") {
                        stopLoop = this.dataProvider[0].length;
                        this.outputValueHtmlBegin();
                        if (this.filterSortDesc === true) {
                            var c = 0;
                            if (this.showAll === true) {
                                this.outputValueHtmlBody(0,0);
                                c = 1;
                                stopLoop = 1;
                            } else {
                                stopLoop = 0;
                            }
                            for (i = this.dataProvider[0].length - 1; i >= stopLoop; --i,c++) {
                                this.outputValueHtmlBody(i,c);
                            }
                        } else {
                            for (i = 0; i < stopLoop; i++) {
                                this.outputValueHtmlBody(i,i);
                            }
                        }
                        this.outputValueHtmlEnd();
                    }
                }
                if (doOnload)
                    this.filterOnloadRan = true;
            }
            this.setInternalTitle();
            this.dispatchFilterChangedEvent();
        }
        this.ready = true;
        if(this.updateCompleteFunc) {
            var myObj = {
                'id': this.id,
                'parentId': this.parentId,
                'title': this.title,
                'currentFilter': (this.parentId ? ibiCompound.drawObjectsPtr[this.parentId] : null)
            };
            this.updateCompleteFunc(myObj);
        }
        if(this.showFilterOptions) {
            var comp = this;
            window.setTimeout(function() {
                comp.filterOptions.showOptions(comp.divName);
            },0);
        }
    }

    function dispatchFilterChangedEvent() {
        var arFilterChangedEvent;
        
        if(typeof Event === 'function') {
            arFilterChangedEvent = new Event('arFilterChanged');
        } else {
            // backward compatibility for IE11 where Event is an Object, not a constructor
            arFilterChangedEvent = document.createEvent('Event');
            arFilterChangedEvent.initEvent('arFilterChanged', true, true);
        }
        
        arFilterChangedEvent.arFilter = this;
        
        document.dispatchEvent(arFilterChangedEvent);
    }

    function undoStack(filter) {
        this.stack = [];
        this.filter = filter;
        this.stackInternal = [];
        this.maxStack = 20;
        this.extra = null;
        this.clickCount = 0;
        this.dontPush = false;
        this.originalValue = null;

        this.resetToOriginal = function(doApplyFilter) {
            if(this.filter) {
                this.dontPush = true;
                this.filter.defaultValues = this.originalValue;
                this.filter.setValuesFromDefault();
                if(!doApplyFilter)
                    this.filter.applyFilter();
                this.stack.splice(1,this.stackInternal.length-1);
                this.stackInternal.splice(1,this.stackInternal.length-1);
                return false;
            }
        };

        this.resetToPrevious = function(doApplyFilter) {
            if(this.filter) {
                if(this.stack.length>1) {
                    this.dontPush = true;
                    this.filter.defaultValues = this.stack[this.stack.length-2];
                    this.filter.setValuesFromDefault();
                    if(!doApplyFilter)
                        this.filter.applyFilter();
                    this.stack.splice(this.stack.length-1,1);
                    this.stackInternal.splice(this.stackInternal.length-1,1);
                    this.dontPush = false;
                    return false;
                }
                else {
                    this.resetToOriginal();
                    return true;
                }
            }
        };

        this.popValue = function(counter) {
            var cc =1;
            if(typeof counter != "undefined")
                cc = counter;
            for(var i = 0; i < cc; i++) {
                var o1 = this.stack.splice(this.stack.length - 1, 1);
                var o2 = this.stackInternal.splice(this.stackInternal.length - 1, 1);
            }
            return {'value':o1,'valueInternal':o2};
        };

        this.getPreviousValue = function() {
            if(this.stack.length<2)
                return null;
            else
                return this.stack[this.stack.length-2];
        };

        this.getPreviousValueInternal = function() {
            if(this.stack.length<2)
                return null;
            else
                return this.stackInternal[this.stackInternal.length-2];
        };

        this.getCurrentValueInternal = function() {
            if(this.stack.length<1)
                return null;
            else
                return this.stackInternal[this.stackInternal.length-1];
        };

        this.pushValue = function (values) {
            if(this.dontPush)
                return;
            var same = true;
            if(this.stack.length == 0) {
                same = false;
            } else
            if(typeof values == "object") {
                if(values.length != this.stack[this.stack.length-1].length) {
                    same = false;
                } else
                for (var i = 0; i < values.length; i++)
                    if (values[i] != this.stack[this.stack.length-1][i]) {
                        same = false;
                        break
                    }
            } else
            if(values != this.stack[this.stack.length-1]) {
                same = false;
            }
            if(!same) {
                if(this.clickCount == 0)
                    this.originalValue = values;
                if (this.stack.length > this.maxStack) {
                    this.stack.splice(1, 1);
                    this.stackInternal.splice(1,1);
                }
                this.stack[this.stack.length] = values;
                this.stackInternal[this.stackInternal.length] = {};
                this.clickCount++;
            }
        };

    }

    function ApplyFilter(noControlCheck,doingSibling)
    {
        var ftarget = this.filterTarget;
        var i, dtype = "", strUnderCover = false;
        var tcol;
        var notready = false;
        var val;
        var v = this;

        if(this.needToSetValuesFromDefault)
            return;

        this.undoStack.pushValue(this.values);

        var getMissingColumn = function(fieldname,comp,mytable) {
            var col;
            var fmytable = comp.getTable(comp.dataReport);
            if (mytable.a_cntl.cacheWriteMode == 4) {
                var fcol = fmytable.getColumnByName(fieldname);
                if (fcol > -1) {
                    col = mytable.a_capt.length;
                    mytable.a_capt[col] = mytable.copyObject(fmytable.a_capt[fcol]);
                    mytable.a_cntl.a_cols[col] = mytable.copyObject(fmytable.a_cntl.a_cols[fcol]);
                    mytable.a_capt[col].b_hide = true;
                    mytable.a_capt[col].ignore = true;
                }
            }
            return col;
        };
        if(v.filterParent)
            if(v.filterParent.type == "placeholder")
                v = v.filterParent;
        if(!doingSibling)
            if(v.filterSibling || v.filterSiblingLeft)
                notready = true;    
    
        if(this.filterParent != null) {
            var node = this.filterParent;
            while (node.filterParent!=null) node = node.filterParent;
            ftarget = node.filterTarget;
        }
        if(ftarget!=null && !notready) {
            var tnames = ftarget.split(",");
            if(ftarget=="*") {
                tnames=[];
				for(i=0; i < MyTable.length; i++) {
                    if(MyTable[i].deleted)
                        continue;
                    tnames[tnames.length] = MyTable[i].table_name;
                }
            }
            for(var j=0;j<tnames.length;j++) {
                var tnm = tnames[j];
                var mytable = this.getTable(ibiUtil.StripSpace(tnm,true,true));
                if(!mytable)
                    continue;
                //for(i=0; i< drawObjectsList.length; i++) drawObjectsList[i].active = false;
                this.active = true;
                if(mytable.useRoll) {
                    for(i=0; i < mytable.a_capt.length;i++) 
                        if(typeof(mytable.a_capt[i].SdataField)!="undefined")
                            mytable.a_capt[i].dataField = mytable.a_capt[i].SdataField;
                }
                var obj = document.getElementById(this.type+this.id);
                if(!obj && this.objsRoot)
                    obj = this.objsRoot;
                if(!this.special) {
                    var col;
                    dtype = IBISTR;
                    if (typeof this.aggColumn != "object") {
                        col = mytable.getColumnByName(this.aggColumn);
                        if(col < 0)
                            col = getMissingColumn(this.aggColumn,this,mytable);
                    if(col>-1)
                        dtype = mytable.a_capt[col].type;
                    } else {
                        for(i = 0; i < this.aggColumn.length; i++) {
                            col = mytable.getColumnByName(this.aggColumn[i]);
                            if(col < 0) {
                                col = getMissingColumn(this.aggColumn[i],this,mytable);
                                if(col < 0)
                                    break;
                            }
                        }
                    }

                    if(mytable.a_cntl.dataReport) {
                        dmytable = getTable(mytable.a_cntl.dataReport);
                        if (dmytable) {
                            if (typeof this.aggColumn != "object") {
                            col = dmytable.getColumnByName(this.aggColumn);
                        if(col>-1)
                            dtype = dmytable.a_capt[col].type;
                            } else {
                                for(i = 0; i < this.aggColumn.length; i++) {
                                    col = dmytable.getColumnByName(this.aggColumn[i]);
                    if(col<0)
                                        break;
                                }
                            }
                        }
                    }
                    if (col < 0)
                        return;

                    if(typeof(this.filter_datatype)!="undefined")
                        dtype = this.filter_datatype;
                }
                strUnderCover = (dtype == "IBISTR" || dtype == "IBIDATE"); // p167472: raw dates are now strings...
                if(obj || (this.type == "placeholder")) {
                    if(!noControlCheck) {
                    //this.values = [];
                    if(!this.deleted)
                    switch(this.type) {
                        case "textinput":
                                for(i=0; i < this.currentValues.length; i++) {
                                    this.values[i] = this.currentValues[i];
                                    if(!this.valueAsIs) {
                                        if (!strUnderCover) {
                                            if (this.values[i] != ibiMsgStr["all"])
                                                this.values[i] = this.values[i] * 1;
                                        }
                                    }
                                }
                                if(this.values.length == 0)
                                    this.active = false;
                                //this.currentValue = obj.value.value;
                                break;
                        case "list":
                                break;
                        case "combobox":
                                break;
                        case "slider":
                        case "vslider":
                                if(this.filterCondition==7 || this.filterCondition==8) {
                                    this.values[0] = this.selectedMin;
                                    this.values[1] = this.selectedMax;
                                } else 
                                    this.values[0] = this.selectedMin;
                                if(this.selectedMin==null) this.active = false;
                                else
                                if(dtype==IBIDATE) {
                                    var d = new Date();
                                    d.setTime(this.values[0]);
                                    this.values[0] = d.getFullYear() +((d.getMonth()<9)?'0':'')+(d.getMonth()+1)+''+((d.getDate()<10)?'0':'')+ d.getDate()+'';
                                    if(this.filterCondition==7 || this.filterCondition==8) {
                                        d.setTime(this.values[1]);
                                        this.values[1] = d.getFullYear() +((d.getMonth() < 9) ? '0' : '') + (d.getMonth()+1) + '' + ((d.getDate() < 10) ? '0' : '') + d.getDate() + '';
                                    }
                                }
                                break;
                        case 'checkbox':
                            if(this.special) {
                                for(i=0; i < obj.value.length; i++) {
                                    val = obj.value[i].value;
                                    if (tnames[j] == this.dataReport)
                                        tcol = val.substring(0, val.indexOf("@@")) * 1;
                                    else
                                        tcol = mytable.getColumnByName(val.substring(val.indexOf("@@") + 2), mytable);
                                    if(tcol != -1) {
                                        mytable.a_capt[tcol].b_hide = true;
                                        mytable.a_capt[tcol].noprint = true;
                                        mytable.a_capt[tcol].hide = true;
                                        if(mytable.chartinfo) {
                                            mytable.chartinfo.tcapt[tcol].b_hide = true;
                                            mytable.chartinfo.tcapt[tcol].noprint = true;
                                            mytable.chartinfo.tcapt[tcol].hide = true;
                                        }
                                    }
                                }
                                for(i=0; i < this.checked.length; i++) {
                                    val = obj.value[this.checked[i]].value;
                                        if (tnames[j] == this.dataReport)
                                            tcol = val.substring(0, val.indexOf("@@")) * 1;
                                        else
                                            tcol = mytable.getColumnByName(val.substring(val.indexOf("@@") + 2), mytable);
                                        if(tcol != -1) {
                                            mytable.a_capt[tcol].b_hide = false;
                                            mytable.a_capt[tcol].noprint = false;
                                        mytable.a_capt[tcol].hide = false;
                                        if(mytable.chartinfo) {
                                            mytable.chartinfo.tcapt[tcol].b_hide = false;
                                            mytable.chartinfo.tcapt[tcol].noprint = false;
                                            mytable.chartinfo.tcapt[tcol].hide = false;
                                        }
                                        }
                                    if (val == ibiMsgStr['all']) {
                                        this.active = false;
                                        break;
                                    }
                                }
                                if (typeof(mytable.chartinfo) != "undefined")
                                    if (typeof(mytable.chartinfo.saveable) != "undefined")
                                        this.resetChartInfo(mytable);
                            } else {
                                if(this.values[0] == ibiMsgStr['all']) {
                                    this.active = false;
                                }
                            }
                            break;
                        case 'placeholder':
                            break;
                        }
                    }
                    if(mytable && v.filterParent==null && v.filterSibling==null && !notready) {
                        if(!this.special) {
                            mytable.o_paging.c = 0;
                            mytable.isEmptyReport = false;
                            mytable.filterChange = true;
                        }
                        if(mytable.useRoll) mytable.a_cntl.reportView = REPORTROLL;
						if(!mytable.a_cntl.gridForChartData) {
                            mytable.removeWaitingCharts();
                            if(mytable.gshowId)
                                window.clearTimeout(mytable.gshowId);
                            mytable.gshowId = null;
                            mytable.removeCallBack();
                            mytable.gshow();
                        }
                        //ibiGrid.show(false,mytable);
                    }
                }
            }
        }
        if(!doingSibling && notready) {
            node = v;
            while(node.filterSiblingLeft != null) 
                node = node.filterSiblingLeft;
            while(node) {
                if(node.type == "placeholder")
                    node.children[0].applyFilter(false,true);
                else
                node.applyFilter(false,true);
                node = node.filterSibling;
            }
        }
        if(this.filterParent != null) {
            v = this.filterParent;
            if(this.filterParent.type == "placeholder")
                v = this.filterParent.filterParent;
            if(v)
                v.applyFilter();
        }
        
    }
    
    function RefreshChildren(filterOnloadOnly)
    {
        if(this.children.length) {
            for(var j=0; j < this.children.length; j++) {
                if(filterOnloadOnly && !this.children[j].filterOnload)
                    break;
                if(!filterOnloadOnly || this.children[j].defaultValues==null || !this.children[j].defaultValues.length ) {
                    this.children[j].values = [];
                    this.children[j].dataProvider = null;
                    this.children[j].refresh();
                    if(this.children[j].onChange && !this.children[j].active) {
                        this.children[j].active = true;
                        this.children[j].applyFilter();
                    }
                }
                this.children[j].refreshChildren(filterOnloadOnly);
            }
        }
    }

    function DoFilter(e)
    {
        var id = this.id;
        var delay = 0;
        var filter = this;
        ibiStd.ShowWait();
        if(e=="user") {
            if(b_mobile)
                delay = 2000;
            else
                delay = 500;
        }
        if(this.isScrolling) {
            if(e && typeof(e) == 'object') {
                // prevent radiobutton label's default behavior of
                // selecting its associated filter item
                e.preventDefault();
            }
            return;
        }
        if(e=="user") {
            if (ibiCompound.DoFilterTimer)
                window.clearTimeout(ibiCompound.DoFilterTimer);
            ibiCompound.DoFilterTimer = window.setTimeout(function () {
                filter.doFilterReal(id);
            }, delay);
        } else
        this.doFilterReal(id);
    }

    function DoFilterReal(id)
    {
        var i;
        var fformat;
        if(id == null)
            return;
        var filter = getObjectByName(id);

        ibiCompound.DoFilterTimer = null;
        if (!filter.mytable)
            filter.mytable = filter.getTable(filter.dataReport);
        if(!filter.globalHidden) {
        for(i=0; i< ibiCompound.drawObjectsList.length; i++) {
                if(ibiCompound.drawObjectsList[i].globalHidden)
                    continue;
                if(ibiCompound.hasSameTarget(this.filterTarget,ibiCompound.drawObjectsList[i].filterTarget))
                    if(activeVisMode) { // temporary for demo.
                        if ((ibiCompound.drawObjectsList[i].type == 'slider') || (ibiCompound.drawObjectsList[i].type == 'vslider') ||
                            (ibiCompound.drawObjectsList[i].values == null) ||
                            ((typeof ibiCompound.drawObjectsList[i].values== "object" )&&(ibiCompound.drawObjectsList[i].values[0] != ibiMsgStr['all'])))
                            ibiCompound.drawObjectsList[i].active = true;
                    } else /*  other filters maybe still active when using the api to load fex in tools */
                        ibiCompound.drawObjectsList[i].active = false;
            }
        }

        filter.applyFilter();
        filter.refreshChildren();
        if(!filter.deleted && filter.filterChangedFunc && !filter.apiCall && (typeof(filter.values)!="undefined") && (filter.values != null)) {
            if (!filter.mytable)
                filter.mytable = filter.getTable(filter.dataReport);
            var col = filter.mytable.getColumnByName(filter.aggColumn);
			var sdval= [];
            for(i=0;i < filter.values.length; i++)
                if(filter.values[i]==missingVal)
                    sdval[i] = "_FOC_MISSING";
                else
                    sdval[i] = filter.values[i];
            if(sdval[0] == ibiMsgStr['all'])
                sdval = ['*'];
            else
            if(filter.mytable.a_capt[col].type == "IBIDATE") {
                fformat =  this.mytable.a_capt[col].format;
                /*
                if((filter.mytable.a_capt[col].type == IBIDATE)&&
                    (fformat.indexOf('q')==-1)&&
                    (fformat.indexOf('m')==-1)&&
                    (fformat.indexOf('y')==-1)
                    )
                    fformat = "(YYMD)";
                */
                //sdval = [];
                for(i =0 ; i < sdval.length; i++) {
                    if(sdval[i]!="_FOC_MISSING")
                        sdval[i] =  ibiStd.ibiDateToFormat(sdval[i], fformat, true);
                }
            }

            var myObj = {
                'id':filter.id,
                'parentId':filter.parentId,
                'title': filter.title,
                'values': sdval,
                'currentFilter': (filter.parentId?ibiCompound.drawObjectsPtr[filter.parentId]:null)
            };
            filter.filterChangedFunc(myObj,sdval);
        }
        ibiStd.HideWait();
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

    function getObjectIdByScrollDivId(id) {
        var scrollableControls = ['checkbox', 'list', 'radiobutton'],
            splitID = id.split('_'),
            index,
            filterComponentID = '';

        if(splitID.length > 1) {
          index = scrollableControls.indexOf(splitID[0]);
          if(index > -1) {
            filterComponentID = id.substring(scrollableControls[index].length + 2);
          }
        }

        return filterComponentID;
    }
    
    function StopDiv(e)
    {
        e.ibiCancelBubble=true;
        var id = getObjectIdByScrollDivId(this.id);
        var t = ibiCompound.drawObjectsPtr[id];

        if(t) {
          this.removeEventListener('touchend', StopDiv, false);

          setTimeout(function(){
            if(t.hasOwnProperty('isScrolling')) {
                t.isScrolling = false;
            }  
          },0);
          
          t.Mx = -1;
          t.My = -1;
        }
    }

    function StartDiv(e)
    {
        e.ibiCancelBubble=true;
    }

    function MoveDiv(e)
    {
        e.ibiCancelBubble=true;
        //if('stopPropagation' in e ) e.stopPropagation();
        //else e.cancelBubble = true;
        var x, y;
        var id = getObjectIdByScrollDivId(this.id);
        var t = ibiCompound.drawObjectsPtr[id];

        if(!t)
          return;

        this.addEventListener('touchend', StopDiv, false);
        
        if(t.hasOwnProperty('isScrolling'))
            t.isScrolling = true;

        if(e.touches) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }
        if(t.Mx == -1) {
            if(t.objs) {
                t.orgX = parseInt(t.objs.style.left,10);
                t.orgY = parseInt(t.objs.style.top,10);
            }
            t.Mx = x;
            t.My = y;

        } 
        if(t.objs) {
            var x1 = t.orgX + (x-t.Mx);
            var y1 = t.orgY + (y-t.My);
            var titleOffset = 0;

            if(t.showTitle) {
                titleOffset = t.titleHeight || 28;
            } 
            
            if(x1>0) {
                x1 = 0;
                t.Mx = t.Mx+x1;
            }
            if(y1>0) {
                y1 = 0;
                t.My = t.My+y1;
            }
            if(y1<0) {
                var y1abs = Math.abs(y1);
                var heightDiff = t.objs.offsetHeight - (parseInt(t.height,10) - titleOffset);
                
                if(y1abs >= heightDiff) {
                    y1 = heightDiff * -1;
                }
            }

            // only move div if its height is larger than its container's height
            if(t.objs.offsetHeight > (parseInt(t.height,10) - titleOffset)) {
                t.objs.style.top = y1+'px';
            }
        }
        return false;
    }
    
    function ShowTitle(formstr,divStr)
    {
        var divStr2 = ' style="';
        var title;
        var newdiv;
        var newdiv1;
        var col;
        var titleOffset = 0;
        var mobileStr = '';
        var aggType;

        mytable = this.getTable(this.dataReport);

        if((this.showTitle == "ON")||(this.showTitle==null)) {
            this.title = '';
            aggType = null;
            if(mytable) {
                if(typeof this.aggColumn != "object") {
                col = mytable.getColumnByName(this.aggColumn,mytable);
                    if (col > -1) {
                        this.title = mytable.a_cntl.a_cols[col].dis;
                        aggType = this.aggType;
                        if(aggType == "SUM")
                            aggType = null;
                    }
                } else {
                    for(var i = 0; i < this.aggColumn.length; i++) {
                        col = mytable.getColumnByName(this.aggColumn[i],mytable);
                        if(col > -1)
                            this.title += mytable.a_cntl.a_cols[col].dis + ((i<this.aggColumn.length-1)?arSet.FILTER_SEPARATOR:'');
                    }
                }
            }
            if(this.title=="") this.title = this.dataColumn;
            if(this.showTitle == "ON" && aggType) {
                this.title = aggType + "&nbsp;(" + this.title + ")";
            }
        } else
            this.title = this.showTitle;

        if(this.showTitle != null)
            title = this.title;

        if(ibiCompound.boxLayoutFullsceen)
        if((b_ios && (typeof(window.ibi_iPadMenu)!="undefined"))||
            (mytable.fullScreenOn || mytable.fullScreenOnGraph)){
            if(this.type == "checkbox") {
                mobileStr = '';
               // mobileStr = ' style="overflow:scroll;webkitOverflowScrolling:touch;" onclick="ibiCompound.showMobileFilter(\'' + this.id + '\')" ';
                var pos = divStr.indexOf('style="');
                if(pos!=-1)
                    divStr = divStr.substring(0,pos+7)+"overflow:scroll;-webkit-overflow-scrolling:touch;"+divStr.substring(pos+7);
                else
                    mobileStr = ' style="overflow:scroll;-webkit-overflow-scrolling:touch;" ';
                mobileStr += ' onclick="window.setTimeout(function(){ibiCompound.showMobileFilter(\'' + this.id + '\')},200)" ';
            }
            //ibi_iPadMenu.showMenu2(getMyTable(tablenumber),dobj,thismenu.a_config,MP_GRP);
            //return;
        }

        if(title) {
            var fontSize = (this.size) ? this.size + 'pt;' : $('#allLayoutObjects').css('font-size');
            var fontFamily = (this.font) ? this.font + ';' : $('#allLayoutObjects').css('font-family');
            var titleStyle = '';

            titleStyle = 'font-size:' + fontSize;
            titleStyle += 'font-family:' + fontFamily;

            titleOffset = measureText(title, 'arFilterButton', titleStyle).height || 20;
            this.titleHeight = titleOffset;
        }

        if(this.width!=null) {
            if(this.width.toString().indexOf("%") == -1)
                divStr2 += 'width:100%;';
        }
        if(this.container) {
            var c = this.container;
            if(c.parentNode)
			    if((c.parentNode.offsetWidth != 0) || (c.parentNode.offsetHeight != 0))
                c = c.parentNode;
            if(c) {
                if(c.offsetHeight)
                    divStr2 += 'height:'+(c.offsetHeight-titleOffset)+'px;';
            }
        } else
        if(this.height!=null) {
            if(this.height.toString().indexOf("%") == -1)
				//divStr2 += 'height:'+(parseInt(this.height,10)-titleOffset)+'px;';
                divStr2 += 'height:100%;';
        }

        if(this.width!=null || this.height!=-1) {
            if((this.type == "slider") || (this.type=="textinput") || (this.type=="combobox"))
                divStr2 += 'overflow:visible;';
            else
                divStr2 += 'overflow:auto;';
        }
        var sStyle = '';
        if((ibiStd.mapFilterObjectCondition(this.filterCondition) == arConstants.FILTER_NE) ||
            (ibiStd.mapFilterObjectCondition(this.filterCondition) == arConstants.FILTER_NOTIN))
            sStyle = ' style="text-decoration: line-through;"';
        divStr2 += '"';
        newdiv1 = '<div id="'+this.id+'_cs" '+divStr2+'>'+formstr+'<\/div>';
        newdiv = '<div '+mobileStr+divStr+' onmousemove="ibiCompound.resetIconBox(\''+this.id+'\')"  onmouseout="ibiCompound.hideIconBox(\''+this.id+'\')" onmouseover="ibiCompound.showIconBox(\''+this.id+'\')">'+
				'<table width="100%" border="0" cellpadding="0" cellspacing="0" style="padding:0px;margin:0px;height:100%">';
        if(this.showTitle) 
			    newdiv += '<tr><td id="'+this.id+'_ths" style="height:'+this.titleHeight+'px"><div class="arFilterButton"><span '+sStyle+'>'+title+'<\/span><\/div><\/td><\/tr>';
        newdiv += '<tr><td valign="top" style="vertical-align: top">'+newdiv1+'<\/td><\/tr><\/table><\/div>';
        return newdiv;
    }
    
    function ResetIconBox(id)
    {
        var filter = getObjectByName(id);
        if(filter) {
            if(filter.menuTimeout) {
                window.clearTimeout(filter.menuTimeout);
                filter.menuTimeout = window.setTimeout(function(){HideIconBox(filter.id);},5000);
            }
        }
    }
    
    function ShowIconBox(id)
    {
        var filter = getObjectByName(id);
        var io;
        if(filter) {
            var obj = document.getElementById(filter.divName);
            if(!filter.showMenu && !filter.showSearch) return;
            if(typeof(filter.iconBox)=="undefined") {
                filter.iconHolder = new arbox(0,0,"100%","100%");
                filter.iconBox = document.createElement('div');
                if(b_ie) 
                    filter.iconBox.style.setAttribute('cssText', 'position:absolute;top:0px;right:0px;margin:0px;padding:0px;width:'+this.width+';height:'+this.height+';', 0);
                else 
                    filter.iconBox.setAttribute('style','position:absolute;top:0px;right:0px;margin:0px;padding:0px;width:'+this.width+';height:'+this.height+';');
                filter.iconBox.className = "arFilterButton";
                filter.iconBox.appendChild(filter.iconHolder.buildComponent());
                obj.appendChild(filter.iconBox);
                
                if(filter.showSearch) {
                    io = new aricon();
                    io.title = "do search";
                    io.iconImg = ibiSkin.searchicon;
                    ibiCompound.addLayoutObject(io);
                    io.parentId = filter.id;
                    filter.iconHolder.addElement(io.buildComponent());
                    filter.showSearchObj = io;
                    if(filter.showSearchFunc)
                        filter.showSearchObj.onClick = filter.showSearchFunc;
                }
                if(filter.showMenu) {
                    io = new aricon();
                    io.title = "show menu";
                    io.iconImg = ibiSkin.popicon;
                    ibiCompound.addLayoutObject(io);
                    io.parentId = filter.id;
                    filter.iconHolder.addElement(io.buildComponent());
                    filter.showMenuObj = io;
                    if(filter.showMenuFunc)
                        filter.showMenuObj.onClick = filter.showMenuFunc;
                }
            }
            filter.iconBox.style.display = "block";
            if(typeof(filter.menuTimeout)=="undefined") 
                filter.menuTimeout = null;
            if(filter.menuTimeout)
                window.clearTimeout(filter.menuTimeout);
            filter.menuTimeout = window.setTimeout(function(){HideIconBox(filter.id);},5000);
        }
    }
    
    function HideIconBox(id)
    {
        var filter = getObjectByName(id);
        if(filter) {
            if(filter.iconBox)
                filter.iconBox.style.display = "none";
            if(filter.menuTimeout)
                window.clearTimeout(filter.menuTimeout);
            filter.menuTimeout = null;
        }
    }


    function HandleResize()
    {
        if(ibiCompound.ResizeTimer)
            window.clearTimeout(ibiCompound.ResizeTimer);
        ibiCompound.ResizeTimer =window.setTimeout(function(){
            ibiCompound.handleResizeReal();
        },100);
        ibiCompound.ResizeTimer = null;
    }

	function HandleResizeReal()
	{
        var i;
        var boxC;
        var dobjo;
        var dobj;
        var dhobj;
        var dbobj;
        var node;
        var height;

        if(ibiCompound.drawBoxLayouts.length)
            dobjo = document.getElementById(ibiLayoutListName[0].orgdivouter);
        
        for(i = 0; i < ibiCompound.drawBoxLayouts.length; i++) {    
            if(ibiCompound.drawBoxLayouts[i].isRootParent!=null) {
                boxC = ibiCompound.drawBoxLayouts[i].isRootParent;
    
                //var twidth=dobjo.offsetWidth-2;
                //var theight=dobjo.offsetHeight-2;
                var twidth=dobjo.clientWidth;
                var theight=dobjo.clientHeight;
                var scrollbarWidth = 0;
                if(dobjo.clientWidth<dobjo.offsetWidth) {
                    //scrollbarWidth = 4;
                    twidth += scrollbarWidth;                    
                }
                if(dobjo.clientHeight<dobjo.offsetHeight) {
                    //scrollbarWidth = 4;
                    theight += scrollbarWidth;                    
                }
                
                //if(dobjo.scrollWidth>0)
                //    twidth = dobjo.scrollWidth-2;
                //if((dobjo.scrollHeight>0) && (dobjo.scrollHeight < dobjo.offsetHeight))
                //    theight=dobjo.scrollHeight-2;
                    
                if(b_ie) boxC.style.setAttribute('cssText', 'overflow:auto;padding:0px;margin:0px;border:none;width:'+twidth+'px;height:'+theight+'px;', 0);
                else boxC.setAttribute('style','overflow:auto;padding:0px;margin:0px;border:none;width:'+twidth+'px;height:'+theight+'px;');
                AdjustBox(ibiCompound.drawBoxLayouts[i],twidth,theight);
            }
        }    
        for(i = 0; i < ibiCompound.drawObjectsApiFilters.length; i++) {
            node = ibiCompound.drawObjectsApiFilters[i];
            if(node.obj.deleted)
                continue;
            if(node.container) {
                delete node.obj.iconBox;
                node.container.innerHTML = node.obj.buildComponent();
                node.obj.objs = null;
                node.obj.reloadData = true;
                node.obj.refresh();
                if(node.obj.showOptions)
                    node.obj.filterOptions.showOptions(node.obj.divName);
                /*
                if(node.obj.iconBox) {
                    var obj = document.getElementById(node.obj.divName);
                    if(obj)
                        obj.appendChild(node.obj.iconBox);
                }
                */
                //ibiCompound.drawObjectsApiFilters[i].obj.processDataProviderCallBack();
            }
            dobj = document.getElementById(node.obj.id+"_cs");
            if(dobj) {
                dhobj = document.getElementById(node.obj.id+"_ths");
                dbobj = document.getElementById(node.obj.divName);
                if(dbobj) {
                    height = dbobj.offsetHeight;
                    if(height) {
                        if (dhobj)
                            height = height - dhobj.offsetHeight;
                        dobj.style.height = height + "px";
                    }
                }
            }
        }
	}

    
    function AdjustBox(box,width,height)
    {
        var newwidth, newheight;
        var totalWidthPercent=0;
        var totalHeightPercent=0;
        var totalWidthFix=0;
        var totalHeightFix=0;
        var node;
        var val,valw,valh;
        var i;
        var obj;
        var updateLater = [];
        var leftoverWidth, leftoverHeight;
        var xpos = 0;
        var ypos = 0;
        var xoffset= 0, yoffset = 0;
        var xwidth, xheight;
        var sch = 0, scw = 0;

        box.domObj.style.width = width +"px";
        box.domObj.style.height = height + "px";
        if(box.domObj.style.overflow == "auto")
            box.innerDomObj.style.overflow = "visible";
        else
            box.innerDomObj.style.overflow = "hidden";

		for(i=0; i < box.children.length; i++) {
            node = box.children[i];
            obj = {};
            obj.comp = node;
            if((typeof(node.type)!="undefined") || (node.type == "boxContainer")) {
                if(box.align.toLowerCase()=="horizontal") {
                    valw = parseInt(node.width,10);
                    if(node.width.indexOf("%")>-1) {
                        totalWidthPercent += valw;
                        valw = -valw;
                    } else
                        totalWidthFix += valw;
                    valh = parseInt(node.height,10);
                    if(node.height.indexOf("%")>-1) {
                        if(valh > totalHeightPercent) {
                            totalHeightPercent = valh;
                            valh = -valh;
                        }
                    } else {
                        if(valh > totalHeightFix)
                            totalHeightFix = valh;
                    }
                } else {
                    valh = parseInt(node.height,10);
                    if(node.height.indexOf("%")>-1) {
                        totalHeightPercent += valh;
                        valh = -valh;
                    } else
                        totalHeightFix += valh;
                    valw = parseInt(node.width,10);
                    if(node.width.indexOf("%")>-1) {
                        if(valw > totalWidthPercent) {
                            totalWidthPercent = valw;
                            valw = -valw;
                        }
                    } else {
                        if(valw > totalWidthFix)
                            totalWidthFix = valw;
                    }
                }
            } else
            if(typeof(node.a_cntl)!="undefined") {
                if(box.align.toLowerCase()=="horizontal") {
                    if(node.a_cntl.table_div.percentWidth>0) {
                        totalWidthPercent += node.a_cntl.table_div.percentWidth;
                        valw = -node.a_cntl.table_div.percentWidth; 
                    } else {
                        totalWidthFix += node.a_cntl.table_div.width;
                        valw = node.a_cntl.table_div.width;
                    }
                    if(node.a_cntl.table_div.percentHeight>0) {
                        if(node.a_cntl.table_div.percentHeight > totalHeightPercent) {
                            totalHeightPercent = node.a_cntl.table_div.percentHeight;
                        }
                        valh = -node.a_cntl.table_div.percentHeight;
                    } else {
                        if(node.a_cntl.table_div.percentHeight > totalHeightFix) {
                            totalHeightFix = node.a_cntl.table_div.height;
                        }
                        valh = node.a_cntl.table_div.height;
                    }
                } else {
                    if(node.a_cntl.table_div.percentHeight>0) {
                        totalHeightPercent += node.a_cntl.table_div.percentHeight;
                        valh = -node.a_cntl.table_div.percentHeight;
                    } else {
                        totalHeightFix += node.a_cntl.table_div.height;
                        valh = node.a_cntl.table_div.height;
                    }
                    if(node.a_cntl.table_div.percentWidth>0) {
                        if(node.a_cntl.table_div.percentWidth > totalWidthPercent) {
                            totalWidthPercent = node.a_cntl.table_div.percentWidth;
                        }
                        valw = -node.a_cntl.table_div.percentWidth;
                    } else {
                        if(node.a_cntl.table_div.percentWidth > totalWidthFix) {
                            totalWidthFix = node.a_cntl.table_div.width;
                        }
                        valw = node.a_cntl.table_div.width;
                    }
                }
            }
            obj.width = valw;
            obj.height = valh;
            updateLater[updateLater.length] = obj;
        }
        leftoverWidth = width - totalWidthFix;
        leftoverHeight = height - totalHeightFix;

        for(i=0; i < updateLater.length; i++) {
            node = updateLater[i];

            if (box.align.toLowerCase() == "horizontal") {
                xwidth = node.width;
                if (xwidth < 0) {
                    xwidth = parseInt(leftoverWidth * ((xwidth * -1) / totalWidthPercent), 10);
                }
                xpos = xpos + xwidth;
            } else {
                xheight = node.height;
                if (xheight < 0) {
                    xheight = parseInt(leftoverHeight * ((xheight * -1) / totalHeightPercent), 10);
                }
                ypos = ypos + xheight;
            }
        }
        if(xpos > width) {
            box.innerDomObj.style.overflowX = "auto";
            sch = _env.getScrollbarWidth();
        }
        if(ypos > height) {
            box.innerDomObj.style.overflowY = "auto";
            scw = _env.getScrollbarWidth();
        }

        xpos = 0;
        ypos = 0;

        for(i=0; i < updateLater.length; i++) {
            node = updateLater[i];

            if(box.align.toLowerCase()=="horizontal") {
                if(node.width<0) {
                    node.width = parseInt(leftoverWidth * ((node.width*-1)/totalWidthPercent),10);
                }
                node.height = height-sch;
                box.columns[i].width = node.width+'px';
                xpos = xpos + node.width;
                xoffset = node.width;
            } else {
                if(node.height<0) {
                    node.height = parseInt(leftoverHeight * ((node.height*-1)/totalHeightPercent),10);
                }
                node.width = width-scw;
                box.columns[i].height = node.height+'px';
                ypos = ypos + node.height;
                yoffset = node.height;
            }

            if(typeof(node.comp.domObj)!="undefined") {
                if(node.comp.domObj.id.substr(0,14)=="ibi$container$") {
                    node.comp.domObj.style.left = (xpos-xoffset) + "px";
                    node.comp.domObj.style.top = (ypos-yoffset) + "px";
                } else {
                    node.comp.resizeContainer.style.left = (xpos-xoffset) + "px";
                    node.comp.resizeContainer.style.top = (ypos-yoffset) + "px";
                }

                if(node.comp.domObj.id.substr(0,14)=="ibi$container$") {
                    node.comp.domObj.style.width = node.width + "px";
                    node.comp.domObj.style.height = node.height + "px";
                    node.comp.domObj.style.position = "absolute";
                } else {
                    node.comp.domObj.style.width = node.width + "px";
                    node.comp.domObj.style.height = node.height + "px";
                    node.comp.resizeContainer.style.width = node.width + "px";
                    node.comp.resizeContainer.style.height = node.height + "px";
                    node.comp.resizeContainer.style.position = "absolute";
                }
            }  else
            if(typeof(node.comp.resizeContainer)!="undefined") {
                node.comp.resizeContainer.style.left = (xpos-xoffset) + "px";
                node.comp.resizeContainer.style.top = (ypos-yoffset) + "px";
                node.comp.resizeContainer.style.width = node.width + "px";
                node.comp.resizeContainer.style.height = node.height + "px";
                node.comp.resizeContainer.style.position = "absolute";
            }
            if(node.comp.type == "boxContainer") {
                AdjustBox(node.comp, node.width, node.height);
            }
        }
        var comp = box;
        var e = {};
        e.height = height;
        e.width = width;
        if(comp.resizeCallBack)
            window.setTimeout(function() {
                comp.resizeCallBack(e);
            },0);


    }


function HasSameTarget(p1,p2)
{
    var source = p1;
    var target = p2;
    var q=new Object();
    var i;
    
    if((p1 == null) || (p2 == null)) 
        return false;
    if((p1=="*")||(p2=="*")) 
        return true;
    if(typeof(p2) != "object") 
        target = p2.split(",");
    for (i=0; i < target.length; i++) 
        q[target[i]] = true;
    
    if(typeof(p1) != "object") 
        source = p1.split(",");
    for (i=0; i < source.length; i++) 
        if(q[source[i]]) 
            return true;
    return false;
}

function switchMerge() {
    var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
    var mv=d.mergeform.mergeval.value;
    var tran = 2;
    var i;
    if(ibiCompound.transEnable) tran = 3;
    var dobj;
    outdiv=[];
    if(b_smallScreen && b_mobile) {
        //need to restore position of the screen;
        var metas = document.getElementsByTagName('meta');
        for (i=0; i<metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            }
        }
    }

    if (mv === MISSING_STR) {
        mv = missingVal;
    }

    if(ibiCompound.currentMergeFilter[0].value[0]==mv) return;
    ibiCompound.currentMergeFilter[0].value[0] = isNaN(mv) ? mv : mv * 1;

    isCompoundCall=true;
    var numT = MyTable.length;
    for(i=0; i < ibiCompound.drawObjectsList.length; i++) {
        ibiCompound.drawObjectsList[i].active = false;
    }
    for(i=0;i<numT;i++) {
        if(MyTable[i].deleted)
            continue;
        if(MyTable[i].isRollUp) continue;
        if((MyTable[i].a_cntl.reportView>REPORTPIVOT)&&
            (MyTable[i].a_cntl.table_div.layout==ibiCompound.currentLayout)) {
            dobj = MyTable[i].maintable.span;
        }
        MyTable[i].o_paging.c = 0;
        MyTable[i].filterChange = true;
        MyTable[i].redrawCharts = true;
        ibiGrid.show(false,MyTable[i]);
    }
    isCompoundCall=false;
    ibi_add_images();
    showlayout(ibiCompound.currentLayout, true);
}

var indiv=[],outdiv=[];

function doAnyTrans(running) {
    var i;
    if((indiv.length==0)&&(outdiv.length==0)) return;
    
    for(i=0; i<indiv.length; i++) {
        if(indiv[i].done) continue;
        //indiv[i].div.style.visibility='hidden';
        indiv[i].div.style.display='none';
        indiv[i].done = true;
    }
    for(i=0; i<outdiv.length; i++) {
        if(outdiv[i].done) continue;
        //outdiv[i].div.style.visibility='visible';
        outdiv[i].div.style.display='block';
        outdiv[i].done = true;
        if(outdiv[i].mytable) {
            if(outdiv[i].mytable.a_cntl.reportView==REPORTGRID)
                ibiGrid.resizeGrid(outdiv[i].mytable.id);
            if(outdiv[i].mytable.a_cntl.reportView==REPORTPIVOT)
                ibiPivot.resizePivot(outdiv[i].mytable,outdiv[i].mytable.id);
        }
        if(outdiv[i].pn && typeof(outdiv[i].pn)!="undefined") 
            if(outdiv[i].pn.parms && typeof(outdiv[i].pn.parms)!="undefined") 
                if(typeof(outdiv[i].pn.parms.chartRedraw)!="undefined") outdiv[i].pn.parms.chartRedraw(outdiv[i].pn);
    }

    indiv=[];
    outdiv=[];
    if((ibiCompound.currentLayout!=-1)&&(LayoutSection.length!=0)) {
        if(ibiLayoutListName[0].orgdivouterComp==null) 
            ibiLayoutListName[0].orgdivouterComp = document.getElementById(ibiLayoutListName[0].orgdivouter);
        if(LayoutSection[ibiCompound.currentLayout].backcolor!=null) {
            if(ibiLayoutListName[0].orgdivouterComp) {
                ibiLayoutListName[0].orgdivouterComp.style.backgroundColor = LayoutSection[ibiCompound.currentLayout].backcolor;
                ibiLayoutListName[0].orgdivouterComp.bgColor = LayoutSection[ibiCompound.currentLayout].backcolor;
            }
        } else {
            basecolor = "";
            ibiLayoutListName[0].orgdivouterComp.style.backgroundColor = basecolor;
            ibiLayoutListName[0].orgdivouterComp.bgColor = basecolor;
        }
    }
}


function setDivOpac(div,per) {
    var per1=per/100;

    div.style.filter='alpha(opacity='+(per)+')';
    div.style.opacity=per1;
}

function showlayout(lynum, refreshFilters)
{
    var ld=document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+"TABS");
    var s='',md,selstr,ln;
    var tabwinshow=true;
    var i;
    indiv = [];
    outdiv=[];

    if(ibiCompound.currentLayout!=lynum) {
        //Handle rollup/pivot/chart windows here
        for(i=0; i <maxwindows; i++) {
            if(pwn[i].table_number>-1) {
                tabwinshow=true;
                if(MyTable[pwn[i].table_number].a_cntl.WindowDisplay=='tab')
                    if(MyTable[pwn[i].table_number].currTab!=i) tabwinshow=false;
                if(tabwinshow) {
                    if(T_cntl[pwn[i].table_number].table_div.layout != arConstants.LAYOUT_DASHBOARDBAR) {
                        if((T_cntl[pwn[i].table_number].table_div.layout!=-1)&&
                            (T_cntl[pwn[i].table_number].table_div.layout!=lynum)) {
                            indiv[indiv.length]={'div':pwn[i].dobj_a,'trans':2,'done':false,'stval':0,'endval':0};
                            indiv[indiv.length]={'div':pwn[i].dobj,'trans':2,'done':false,'stval':0,'endval':0};
                        } else {
                            outdiv[outdiv.length]={'div':pwn[i].dobj_a,'trans':2,'done':false,'stval':0,'endval':0};
                            outdiv[outdiv.length]={'div':pwn[i].dobj,'trans':2,'done':false,'stval':0,'endval':0,'pn':pwn[i].pn};
                        }
                    }
                }
            }
        }
        for(i=0; i<layoutObjDivs.length;i++) {
            if(layoutObjDivs[i].layout!=arConstants.LAYOUT_DASHBOARDBAR) {
                if((layoutObjDivs[i].layout!=-1)&&(layoutObjDivs[i].layout!=lynum)) 
                    indiv[indiv.length]={'div':layoutObjDivs[i].div,'trans':2,'done':false,'stval':0,'endval':0};
                else
                    outdiv[outdiv.length]={'div':layoutObjDivs[i].div,'trans':2,'done':false,'stval':0,'endval':0};
            }
        }

        for(i=0;i<MyTable.length;i++) {
            if(MyTable[i].deleted)
                continue;
            if(!MyTable[i].isRollUp) {
                md=MyTable[i].maintable.root;
                if(md) {
                    if(MyTable[i].a_cntl.table_div.layout!=arConstants.LAYOUT_DASHBOARDBAR) {
                        if((MyTable[i].a_cntl.table_div.layout!=-1)&&(MyTable[i].a_cntl.table_div.layout!=lynum)) 
                            indiv[indiv.length]={'div':md,'trans':2,'done':false,'stval':0,'endval':0};
                        else
                            outdiv[outdiv.length]={'div':md,'trans':2,'done':false,'stval':0,'endval':0,'pn':MyTable[i].pn,'mytable':MyTable[i]};
                    }
                }
            }
        }
    }

    showbar(lynum);
    if(refreshFilters) {
        for(i=0; i < ibiCompound.drawObjectsList.length; i++) {
            if(!ibiCompound.drawObjectsList[i].active) {
                ibiCompound.drawObjectsList[i].refresh();
            }
        }    
    }
    ibiCompound.currentLayout = lynum;
    ibiCompound.handleResize();
    if(Events['onLayoutChange'].callback!=null)
        Events['onLayoutChange'].callback(lynum);
}

function showbar(lynum)
{
    var ld=document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+"TABS");
    var s='';
    var i;
    s+='<form name="mergeform" style="margin: 0px"><table width="100%" cellspacing=0 cellpadding=0 "';
    s+='style="border:none;">';
    s+='<tr><td><table id="iLayTB$"><tr>';
    if(ibiCompound.ibiLayout.length>2)  {
        s+='<td id="iLayM1$" style="white-space:nowrap" ><div>'+ibiMsgStr['Layouts']+'<div><\/td>';
        for(i = 1; i < ibiCompound.ibiLayout.length; i++) {
            var ln=i+'';
            var cl = "arDashboardBarButton";
            if(typeof(LayoutSection[i])!='object') continue;
            if(LayoutSection[i].name!='') ln = LayoutSection[i].name;
            if(i==lynum) cl = "arDashboardBarButtonSelected";
            s+='<td style="white-space:nowrap">';
            s+= '<div id="iLay$'+i+'" class="'+cl+'" style="white-space:nowrap;overflow:hidden;cursor:pointer;" onclick=';
            s+='"wait_func(\'ibiCompound.Showlayout('+i+')\');"><span>&nbsp;'+ln+'&nbsp;<\/span><\/div>';
            s+='<\/td>';
        }
        
    }
    if(isMergeReports) {
        var col= MyTable[0].a_cntl.a_cols[0].name;
        var selstr;
        s+='<td id="iLayM2$" style="white-space:nowrap;border-left:1px solid gray;"><span>&nbsp;&nbsp;'+col;
        s+='<\/span><\/td><td id="iLayM3$"><div><select class="arDashboardMergeDropdown" name="mergeval" onchange="wait_func(\'ibiCompound.SwitchMerge()\')">';
        for(i=0; i < ibiCompound.currentMergeFilter[0].data[0].length; i++) {
            selstr=' value="'+ibiCompound.currentMergeFilter[0].data[1][i]+'"';
            if(ibiCompound.currentMergeFilter[0].value[0]==ibiCompound.currentMergeFilter[0].data[0][i])
                selstr+=' selected="selected"';
            s+='<option '+selstr+'>'+ibiCompound.currentMergeFilter[0].data[1][i]+'<\/option>';
        }
        s+='<\/select><\/div><\/td>';
    }
    if(EnableGlobalFilter) {
        s+='<td id="iLayM4$" style="white-space:nowrap" >';
        s+= '<div class="arDashboardBarGlobalButton" style="cursor:pointer;"  onclick=';
        if(b_mobile) s+='"ibiFilter.globalfilt(0,true);">';
        else s+='"MenuFilter(0,-1,-1,1);">';
        s+='<span title="'+ibiMsgStr['gblf']+'">'+ibiSkin.gflticon+'<\/span><\/div>';
        s+='<\/td>';
    }
    s+='<\/tr><\/table><\/td><td width="*">&nbsp;<\/td><\/tr><\/table><\/form>';

    if(ibiCompound.haveDashBoardObjects || isMergeReports || (ibiCompound.ibiLayout.length>2) || (EnableGlobalFilter && MyTable[0].a_cntl.showGlobalFilter)){
        if(ld) ld.innerHTML = s;
        window.setTimeout(function(){
            var l = ibiCompound.ibiLayout.length;
            if(l>2) {
                var obj = document.getElementById("iLayTB$");
                var mobj;
                var w = 0;
                var mobj1 = document.getElementById("iLayM1$");
                if(mobj1) w += mobj1.offsetWidth;
                var mobj2 = document.getElementById("iLayM2$");
                if(mobj2) w += mobj2.offsetWidth;
                var mobj3 = document.getElementById("iLayM3$");
                if(mobj3) w += mobj3.offsetWidth;
                var mobj4 = document.getElementById("iLayM4$");
                if(mobj4) w += mobj4.offsetWidth;
                var pw = parseInt(((ld.offsetWidth-w)-((l-1)*12+4))/(l-1),10);
                if(pw<12) pw=12;
                if(obj.offsetWidth>ld.offsetWidth) {
                    obj.style.width = ld.offsetWidth+'px';
                    for(i = 1; i < l; i++) {
                        mobj = document.getElementById("iLay$"+i);
                        if(mobj) mobj.style.width=pw+'px';
                    }
                    if((w+pw*(l-1))>ld.offsetWidth) {
                        mobj1.style.width="0px";
                        mobj1.innerHTML="";
                    }
                }

            }
        },0);
    } else  
    if(ld) {
        ld.style.display = "none";
//        var dtobj = d.getElementById("allLayoutObjects");
//        if(dtobj) dtobj.style.top="0px";
    }
}

function getTable(table_name)
{
    var i;
    for(i=0; i < MyTable.length; i++) {
        if(MyTable[i].deleted)
            continue;
        if(MyTable[i].table_name.toUpperCase() == ibiUtil.StripSpace(table_name,true,true).toUpperCase()) return MyTable[i];
    }
    return null;
}
    
function getContentLayoutByName(name) {
    for(var i=0; i < ibiCompound.drawBoxLayouts.length; i++) 
        if(ibiCompound.drawBoxLayouts[i].id.toUpperCase() == ibiUtil.StripSpace(name,true,true).toUpperCase()) 
            return ibiCompound.drawBoxLayouts[i];
    return null;
}

function getObjectByName(name) {
    var obj;
    if(typeof(ibiCompound.drawObjectsPtr[ibiUtil.StripSpace(name,true,true).toUpperCase()]) != "undefined") {
        obj = ibiCompound.drawObjectsPtr[ibiUtil.StripSpace(name, true, true).toUpperCase()];
        if(obj.type=="placeholder")
            obj = obj.children[0];
        return obj;
    }
    return null;
}

function APIDeleteLayoutObject(obj)
{
    for(var i=0; i < ibiCompound.drawObjectsList.length; i++) 
        if(ibiCompound.drawObjectsList[i].id == obj.id) {
            ibiCompound.drawObjectsList.splice(i,1);
            break;
        }
    obj.deleted = true;
    delete ibiCompound.drawObjectsPtr[obj.id];
}

function APIAddLayoutObject(obj)
{
    if(typeof(obj.name)!="undefined") {
        obj.id = 'LOBJ'+obj.name.toUpperCase();
    } else {
        obj.name = 'LOBJC'+ibiCompound.tempNameCount;
        ibiCompound.tempNameCount++;
        obj.id = obj.name.toUpperCase();
    }
    if (obj.filterActive) {
        obj.filterOnload = true;
        ibiCompound.drawObjectsActive[ibiCompound.drawObjectsActive.length] = obj;
    }
    ibiCompound.drawObjectsPtr[obj.id] = obj;
    obj.divName = obj.name;
    ibiCompound.drawObjectsList[ibiCompound.drawObjectsList.length] = obj;
}


function APIfindLayoutObject(name)
{
    for(var i = 0; i < ibiCompound.drawObjectsList; i++)
        if(name == ibiCompound.drawObjectsList[i].name) {
            var obj = ibiCompound.drawObjectsList[i];
            if(obj.type == "placeholder")
                obj = obj.children[0];
            return obj;
        }
    return null;
}

function CreateLayoutObject(theLayoutObject, num)
{
    var newObj=null;
    var isv = 'visible';
    var isb = 'block';
    var divStr;
    var dobj;
    var width,height;
    var i,j;
    var aggTypes = {'SUM':true,'MAX':true,'MIN':true,'CNT':true,'AVE':true,'PCT':true,'FST':true,'LST':true,'MDN':true,
                'TOT':true,'ASQ':true,'DST':true,'CNT.DST':true,'PCT.CNT':true,'SUM.DST':true,'AVE.DST':true,'RPCT':true};
    
    if((theLayoutObject.layout>-1)&&(theLayoutObject.layout!=ibiCompound.currentLayout)) {
        isb='none';
    }
    if(theLayoutObject.layout==arConstants.LAYOUT_DASHBOARDBAR) ibiCompound.haveDashBoardObjects = true;
    var x  = theLayoutObject.x;
    var x2 = theLayoutObject.x2;
    var y  = theLayoutObject.y;
    var y2 = theLayoutObject.y2;
    var aggtype;
    var aggC;
    var objname = 'LOBJ' + (theLayoutObject.name || theLayoutObject.objname) 
                         + (num || Math.floor(Math.random() * 101));

    switch (theLayoutObject.type) {
    case 'string':
        newObj = {}; 
        width = x2-x;
        height = y2-y;
        divStr=' id="'+objname+'" style="visibility:'+isv+';display:'+isb+';position:absolute;top:'+theLayoutObject.y+'px;left:'+theLayoutObject.x+'px;';
        if(width>0) divStr+='width:'+width+'px;';
        if((theLayoutObject.layout == arConstants.LAYOUT_DASHBOARDBAR) && (height>0)) {
            divStr+='height:'+height+'px;';
            if((theLayoutObject.y+height)> ibiCompound.dashHeight) ibiCompound.dashHeight = theLayoutObject.y+height;
        }
        divStr += '"';
        spanStr=' style="font-family:'+theLayoutObject.font+';font-size:'+theLayoutObject.size+'pt;';
        if(theLayoutObject.lineSpacing>1) spanStr += 'line-height:'+theLayoutObject.lineSpacing+';';
        if(theLayoutObject.color!=null)
            spanStr+='color:'+theLayoutObject.color+';';
        spanStr+='"';
        var stext = '<span style="';
		if(theLayoutObject.bold)
            stext += 'font-weight:bold;';
		if(theLayoutObject.italic)
            stext += 'font-style:italic;';
		if (theLayoutObject.underline)
            stext += 'text-decoration: underline;';
        stext += '">';
        stext += theLayoutObject.text;
        stext += '<\/span>';
		newObj.text = stext;
        newObj.divName = objname;
        newObj.objname = objname;
        width = (x2 > 0) ? (x2 - x)+'px' : null;
        height = (y2 > 0) ? (y2 - y)+'px' : null;
        if(typeof(theLayoutObject.percentWidth)!="undefined")
            width = theLayoutObject.percentWidth+'%';
        if(typeof(theLayoutObject.percentHeight)!="undefined")
            height = theLayoutObject.percentHeight+'%';
        newObj.width = width;
        newObj.height = height;
        if(typeof(theLayoutObject.objname)=='undefined')
            newObj.id = objname;
        else
            newObj.id = theLayoutObject.objname.toUpperCase();
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.type = theLayoutObject.type;
        newObj.divStr = divStr;
        newObj.buildComponent = function() {
            return '<div'+this.divStr+'><table width="100%" CELLSPACING=0 CELLPADDING=0 BORDER=0><tr>'+
                '<td id="'+this.objname+'_TEXT" '+spanStr+'>'+this.text+'<\/td><\/tr><\/table><\/div>';
            };
        break;
    case 'image':
        newObj = {};
        divStr=' id="'+objname+'" style="visibility:'+isv+';display:'+isb+';position:absolute;top:'+theLayoutObject.y+'px;left:'+theLayoutObject.x+'px;"';
        newObj.image = theLayoutObject.image;
        newObj.divName = objname;
        if(typeof(theLayoutObject.name)=='undefined')
            newObj.id = objname;
        else
            newObj.id = theLayoutObject.name.toUpperCase();
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.type = theLayoutObject.type;
        newObj.buildComponent = function() {
		    var imgName = this.image+"";
		    if(imgName.substr(0,4)=="<img")
                return '<div'+divStr+'>'+imgName+'<\/div>';
            else
                return '<div'+divStr+'><div id="' + arConstants.EMBEDIMG + (this.image-1)+'"><\/div><\/div>';
        };
        var imgObj = ibiSkin.imgLookup[arConstants.EMBEDIMG + (theLayoutObject.image-1)];
		if(imgObj) {
            height = imgObj.height;
            rheight = imgObj.resizeHeight;
            if(rheight>0) height = rheight;
            if(height<0) height = 0;
        } else {
		    height = 0;
        }
        if((theLayoutObject.layout == arConstants.LAYOUT_DASHBOARDBAR) &&((theLayoutObject.y+height)> ibiCompound.dashHeight))
            ibiCompound.dashHeight = theLayoutObject.y+height;
        break;
    case 'box':
        newObj = {};
        width = x2-x;
        height = y2-y;
		divStr=' id="'+objname+'" style="overflow:visible;visibility:'+isv+';display:'+isb+';position:absolute;top:'+y+'px;left:'+x+'px;width:'+width+'px;height:'+height+'px"';
        if((theLayoutObject.layout == arConstants.LAYOUT_DASHBOARDBAR) &&((theLayoutObject.y+y2+4)> ibiCompound.dashHeight))
            ibiCompound.dashHeight = theLayoutObject.y+y2+4;
        dobj = document.getElementById("ibiMeasureText");
        dobj.innerHTML = '';
        jg = new jsGraphics(dobj);
        if(theLayoutObject.backcolor==null) {
            jg.setColor(theLayoutObject.color);
			jg.drawRect(0,0,width,height);
        } else {
            jg.setColor(theLayoutObject.backcolor);
			jg.fillRect(0,0,width,height);
        }
        jg.paint();
        newObj.html = dobj.innerHTML;
        newObj.divName = objname;
        if(typeof(theLayoutObject.name)=='undefined')
            newObj.id = objname;
        else
            newObj.id = theLayoutObject.name.toUpperCase();
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.type = theLayoutObject.type;
        newObj.buildComponent = function() {
            return '<div'+divStr+'>'+this.html+'<\/div>';
        };
        dobj.innerHTML = "";
        break;
    case 'line':
        newObj = {};
        divStr=' id="'+objname+'" style="overflow:visible;visibility:'+isv+';display:'+isb+';position:absolute;top:0px;left:0px;"';
        if((theLayoutObject.layout == arConstants.LAYOUT_DASHBOARDBAR) &&(y2 > ibiCompound.dashHeight))
            ibiCompound.dashHeight = y2;
        dobj = document.getElementById("ibiMeasureText");
        dobj.innerHTML = '';
        jg = new jsGraphics(dobj);
        jg.setColor(theLayoutObject.color);
        jg.setStroke(theLayoutObject.width);
        jg.drawLine(x,y,x2,y2);
        jg.paint();
        newObj.html = dobj.innerHTML;
        newObj.divName = objname;
        if(typeof(theLayoutObject.name)=='undefined')
            newObj.id = objname;
        else
            newObj.id = theLayoutObject.name.toUpperCase();
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.type = theLayoutObject.type;
        newObj.buildComponent = function() {
            return '<div'+divStr+'>'+this.html+'<\/div>';
        };
        dobj.innerHTML = "";
        break;
    case 'boxContainer':
        width = (x2 > 0) ? (x2 - x)+'px' : null; 
        height = (y2 > 0) ? (y2 - y)+'px' : null;
        if(typeof(theLayoutObject.percentWidth)!="undefined") 
            width = theLayoutObject.percentWidth+'%';
        if(typeof(theLayoutObject.percentHeight)!="undefined") 
            height = theLayoutObject.percentHeight+'%';
        newObj = new arbox(x,y,width,height);
        if(typeof(theLayoutObject.name)=='undefined')
            newObj.id = objname;
        else
            newObj.id = theLayoutObject.name.toUpperCase();
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.content = theLayoutObject.content;
        newObj.align = theLayoutObject.align;
        newObj.type = theLayoutObject.type;
        newObj.domObj = newObj.buildComponent();
        ibiCompound.drawBoxLayouts[ibiCompound.drawBoxLayouts.length] = newObj;
        break;
    default:
        width = (x2 > 0) ? (x2 - x)+'px' : null; 
        height = (y2 > 0) ? (y2 - y)+'px' : null;
        if(typeof(theLayoutObject.percentWidth)!="undefined") width = theLayoutObject.percentWidth+'%';
        if(typeof(theLayoutObject.percentHeight)!="undefined") height = theLayoutObject.percentHeight+'%';
        if((theLayoutObject.layout == arConstants.LAYOUT_DASHBOARDBAR) && ((theLayoutObject.y + parseInt(height,10)) > ibiCompound.dashHeight))
            ibiCompound.dashHeight = theLayoutObject.y + parseInt(height,10);
        switch(theLayoutObject.type) {
            case 'textinput':   newObj = new artextInput(x,y,width, height); break;
            case 'checkbox':    newObj = new archeckBox(x,y,width, height); break;
            case 'list':        newObj = new arlist(x,y,width, height); break;
            case 'slider':      newObj = new arslider(x,y,width, height); break;
            case 'vslider':        newObj = new arslider(x,y,width, height,"vertical"); break;
            case 'tree':        newObj = new artree(x,y,width, height); break;
            case 'treeckbx':    newObj = new artree(x,y,width, height);
                                newObj.isCheckbox=true; break;
            case 'radiobutton': newObj = new arradioButton(x,y,width, height); break;
            case 'combobox':    newObj = new arcomboBox(x,y,width, height); break;
        }
        newObj.id = theLayoutObject.name.toUpperCase();
        newObj.undoStack = new undoStack(newObj);
        newObj.filterSibling = null;
        newObj.filterSiblingLeft = null;
        newObj.valueAsIs = false;
        newObj.fullWhere = false;
        newObj.filterFromFex = true;
        if(theLayoutObject.filterCondition>0) newObj.filterCondition = theLayoutObject.filterCondition;
        if(theLayoutObject.filterTarget!='') newObj.filterTarget = theLayoutObject.filterTarget;
        if(theLayoutObject.filterParent!='') newObj.filterParent = theLayoutObject.filterParent;
        if(theLayoutObject.filterSibling!='') newObj.filterSibling = theLayoutObject.filterSibling;
        if(theLayoutObject.filterActive && theLayoutObject.showAll && (theLayoutObject.filterValues == null)) {
            theLayoutObject.fitlerActive = false;
        }
        if(typeof theLayoutObject.filterValueASIS !== "undefined")
            if(theLayoutObject.filterValueASIS) {
                newObj.valueAsIs = true;
                if(theLayoutObject.filterValueFull)
                    newObj.fullWhere = true;
            }
        if (theLayoutObject.filterActive) {
            newObj.filterOnload = true;
            ibiCompound.drawObjectsActive[ibiCompound.drawObjectsActive.length] = newObj;
        }
        if (typeof theLayoutObject.filterSortDesc !== "undefined") {
            newObj.filterSortDesc = true;
        }
        newObj.allSelected = false;
        newObj.showAll = theLayoutObject.showAll;
        if(theLayoutObject.filterParent!='' || isMergeReports)
            newObj.showFiltered = true;
        else
            newObj.showFiltered = false;
        if(theLayoutObject.showFiltered != null)
            newObj.showFiltered = theLayoutObject.showFiltered;
        ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        newObj.visible = true;
        if(theLayoutObject.hidden) {
            newObj.visible = false;
            if(ibiCompound.hiddenGlobalFilters == null)
                ibiCompound.hiddenGlobalFilters = [];
            ibiCompound.hiddenGlobalFilters[ibiCompound.hiddenGlobalFilters.length] = newObj;
            newObj.globalHidden = true;
            newObj.active = true;
        }
        newObj.color = theLayoutObject.color;
        newObj.multiselect = theLayoutObject.filterMultiple;
        newObj.defaultValues = theLayoutObject.filterValues;
        if(newObj.defaultValues && !newObj.valueAsIs) {
            for(i=0; i < newObj.defaultValues.length; i++) {
                if(typeof newObj.defaultValues[i] == "string") {
                    var s = newObj.defaultValues[i].split(arSet.FILTER_SEPARATOR_OPTIONAL);
                    newObj.defaultValues[i] = s.join(arSet.FILTER_SEPARATOR);
                }
            }
        }
        if(newObj.fullWhere)
            newObj.defaultValues = [theLayoutObject.filterValues];
        if(newObj.defaultValues || newObj.filterOnload)
            newObj.active = true;

        if(newObj.showAll) {
            newObj.allSelected = true;
            if(newObj.defaultValues)
                if(newObj.defaultValues.length)
                    newObj.allSelected = false;
        }

        newObj.onChange = theLayoutObject.onChange;
        if(newObj.onChange && (newObj.filterParent == null) && !newObj.filterOnload)  {
            newObj.filterOnload = true;
            ibiCompound.drawObjectsActive[ibiCompound.drawObjectsActive.length] = newObj;
        }
        newObj.backcolor = theLayoutObject.backcolor;
        newObj.size = theLayoutObject.size;
        newObj.font = theLayoutObject.font;
        newObj.showTitle = theLayoutObject.filterTitle;
        //newObj.type = theLayoutObject.type;
        if((theLayoutObject.layout>-1)&&(theLayoutObject.layout!=ibiCompound.currentLayout)) 
            newObj.visible=false;
        newObj.divName = objname;
        if(theLayoutObject.dataReport!='')newObj.dataReport = theLayoutObject.dataReport; 
        i = j = -1;
        if (theLayoutObject.dataColumn != '') {
            newObj.dataColumn = theLayoutObject.dataColumn;
            if(newObj.dataColumn.indexOf("[")!=-1) {
                try
                {
                    //eval("newObj.dataColumn = "+newObj.dataColumn);
                    var hh = newObj.dataColumn.split("[");
                    hh = hh[1].split("]");
                    hh = hh[0].split(",");
                    newObj.dataColumn = [];
                    for(var k = 0; k < hh.length; k++)
                        newObj.dataColumn[k] = hh[k];
                    newObj.defineName = "ARMULTI"+newObj.id;
                    newObj.dataColumnType = "multi";
                } catch (e){
                    ibiStd.trace("invalid columns for filter:"+theLayoutObject.dataColumn);
                    newObj.dataColumn = "$xxx$";
                };
                i = -1;
                j = -1;
            } else {
                i = newObj.dataColumn.indexOf(".");
                j = newObj.dataColumn.indexOf(":");
            }
        }
        aggC = newObj.dataColumn;
        newObj.aggBy = null;
        newObj.haveAgg = false;
        newObj.ready = false;
        newObj.aggColumn = null;
        newObj.aggType = null;
        if(j!=-1) {
            aggC = newObj.dataColumn.substr(0,j);
            i = aggC.indexOf(".");
            newObj.aggBy = newObj.dataColumn.substr(j+1);
            if(newObj.aggBy.substr(0,3) == "BY.")
                newObj.aggBy = newObj.aggBy.substr(3);
        }
        newObj.aggColumn = aggC;
        if(i!=-1) {
            aggtype = aggC.substr(0,i);
            if(aggtype in aggTypes ) {
                newObj.aggType = aggtype;
                newObj.aggColumn = aggC.substr(i+1);
                newObj.haveAgg = true;
                i = newObj.aggColumn.indexOf(".");
                if(i != -1) {
                    aggtype = newObj.aggColumn.substr(0,i);
                    if(newObj.aggType+'.'+aggtype in aggTypes) {
                        newObj.aggType = newObj.aggType+'.'+aggtype;
                        newObj.aggColumn = newObj.aggColumn.substr(i+1);
                    }
                }
            }
        }
        newObj.needToSetValuesFromDefault = true;
        //newObj.setValuesFromDefault();
        if(newObj.haveAgg) {
            var oo = new arholder();
            ibiCompound.drawObjectsList[ibiCompound.drawObjectsList.length] = oo;
            oo.filterParent = newObj.filterParent;
            oo.filterSibling = newObj.filterSibling;
            oo.filterTarget = newObj.filterTarget;
            oo.aggColumn = newObj.aggColumn;
            oo.realFilter = newObj;
            oo.id = newObj.id;
            oo.refresh = function () {};
            oo.refreshChildren = ibiCompound.refreshChildren;
            oo.applyFilter = ibiCompound.applyFilter;
            oo.getTable = ibiCompound.getTable;
            oo.children = [newObj];
            newObj.id = 'LOBJ'  + (num || Math.floor(Math.random() * 101));
            newObj.filterParent = oo;
            newObj.filterSibling = null;
            newObj.filterSiblingLeft = null;
            oo.visible = false;
            ibiCompound.drawObjectsPtr[oo.id] = oo;
            ibiCompound.drawObjectsPtr[newObj.id] = newObj;
        }
        ibiCompound.drawObjectsList[ibiCompound.drawObjectsList.length] = newObj;

        if (typeof(ibiCompound.ar) == "undefined")
            ibiCompound.ar = new activeReport();
        var pp = ibiCompound.ar.newFilterDummy(newObj);
        pp.compoundFilter = true;
        newObj.compoundFilter = true;
        //ibiCompound.drawObjectsApiFilters[ibiCompound.drawObjectsApiFilters.length] = pp;
        break;
    }
    return newObj;
}
    
function drawLayoutObjects()
{
    var dobj = d.getElementById("allLayoutObjects");
    var dobjo = d.getElementById(ibiLayoutListName[0].orgdivouter);
    var dobji = d.getElementById(ibiLayoutListName[0].orgdivinner);
    var newdiv,divStr,spanStr,newdivs='';
    var dashdivs = "";
    var cc=[],cn=[];
    var newObj, text, objname, theLayoutObject, i, numItems;
    var jg,x,y,width,height,y2,x2;
    var rheight;
    var content;
    var j;
    
    ibiCompound.dashHeight = 0;
    for (i = 0, numItems = LayoutObjects.length; i < numItems; i++) {
        newdiv = '';

        theLayoutObject = LayoutObjects[i];
        newObj = CreateLayoutObject(theLayoutObject, i);

        
        if(newObj)
            if(typeof(newObj.buildComponent)!="undefined")
                newdiv = newObj.buildComponent();
                
        if((newdiv!='') &&( newObj.type != "boxContainer")) {
            if(theLayoutObject.layout==arConstants.LAYOUT_DASHBOARDBAR)
                dashdivs += newdiv;
            else
                newdivs += newdiv;
            cc[cc.length]=i;
            cn[i]=newObj.divName;
        }
    }
    
    dobj.innerHTML = newdivs;
    var ld=document.getElementById(ibiLayoutListName[0].IBILAYOUTDIV+"OBJS");
    if(dashdivs!="") {
        ld.innerHTML = dashdivs;
    }
    var pobj;
    for(i = 0, numItems = ibiCompound.drawObjectsList.length; i < numItems; i++) {
        if(typeof(ibiCompound.drawObjectsList[i].filterParent)=="string") {
            if(ibiCompound.drawObjectsList[i].filterParent != null) {
                pobj = ibiCompound.drawObjectsPtr[ibiCompound.drawObjectsList[i].filterParent.toUpperCase()];
                if(pobj.type == "placeholder")
                    pobj = pobj.children[0];
                ibiCompound.drawObjectsList[i].filterParent = pobj;
                ibiCompound.drawObjectsList[i].filterParent.children[ibiCompound.drawObjectsList[i].filterParent.children.length] = ibiCompound.drawObjectsList[i];
                /*if(ibiCompound.drawObjectsList[i].filterOnload) {
                    var node = ibiCompound.drawObjectsList[i].filterParent;
                    while(node) {
                        for(j=0; j <ibiCompound.drawObjectsActive.length; j++)
                            if(ibiCompound.drawObjectsActive[j].id == node.id)
                                ibiCompound.drawObjectsActive.splice(j,1);
                        node = node.filterParent;
                    }
                }*/
            }
        }
        if(typeof(ibiCompound.drawObjectsList[i].filterSibling)!="undefined") {
            if(ibiCompound.drawObjectsList[i].filterSibling != null) {
                var pobj = ibiCompound.drawObjectsPtr[ibiCompound.drawObjectsList[i].filterSibling.toUpperCase()];
                if(pobj.type == "placeholder")
                    pobj = pobj.children[0];
                ibiCompound.drawObjectsList[i].filterSibling = pobj;
                ibiCompound.drawObjectsList[i].filterSibling.filterSiblingLeft = ibiCompound.drawObjectsList[i];
            }
        }
    }
    var inchain = function(id,node) {
        var node2 = node;
        while(node2.filterSibling)
            node2 = node2.filterSibling;
        return inchain2(id,node2);
    };

    var inchain2 = function(id,node) {
        if(node.id == id)
            return true;
        if(node.filterSiblingLeft) {
            if (inchain2(id, node.filterSiblingLeft))
                return true;
        }
        for(var i=0; i < node.children.length; i++) {
            if(inchain(id,node.children[i]))
                return true;
        }
        return false;
    };

    // make sure only the lowest active node is in drawObjectsActive;
    i = 0;
    var n_removed;
    while( i < ibiCompound.drawObjectsActive.length) {
        node = ibiCompound.drawObjectsActive[i];
        n_removed = false;
        for (j = 0; j < ibiCompound.drawObjectsActive.length; j++) {
            if(node.id == ibiCompound.drawObjectsActive[j].id)
                continue;
            if(inchain(ibiCompound.drawObjectsActive[j].id,node)){
                ibiCompound.drawObjectsActive.splice(i, 1);
                n_removed = true;
                break;
            }
        }
        if(!n_removed)
            i++;
    }
    var boxC = null;
    var tb;
    var alignment;
    var dobjx;
    var node;
    var pcontent;
    for(i = 0; i < ibiCompound.drawBoxLayouts.length; i++) {
        node = ibiCompound.drawBoxLayouts[i];
        content = node.content.split(",");
        for(j=0; j < content.length; j++) {
            pcontent = ibiUtil.StripSpace(content[j],true,true);
            obj = getContentLayoutByName(pcontent);
            if(obj) {
                node.addElement(obj.domObj);
                node.children[node.children.length] = obj;
                obj.added = true;
            } else {
                obj = getObjectByName(pcontent);
                if(obj) {
                    tobj = document.getElementById(obj.divName);
                    if(tobj) {
                        obj.resizeContainer = node.addElement(tobj);
                        obj.resizeContainer.setAttribute("id","Resize_"+tobj.id);
                    }
                    node.children[node.children.length] = obj;
                } else {
                    tb=ibiCompound.getTable(pcontent);
                    if(tb!=null) {
                        tobj = document.getElementById("MAINTABLE_"+tb.id);
                        if(tobj) {
                            node.children[node.children.length] = tb;
                            tb.domObj = tobj;
                            tb.resizeContainer = node.addElement(tobj);
                            tb.resizeContainer.setAttribute("id","Resize_"+tobj.id);
                            tb.a_cntl.autoFit = arConstants.AUTOFIT_CONTAINER;
                            if(tb.a_cntl.graphLook == 'GRID') {
                                tb.a_cntl.table_div.viewPortType="SCROLL";
                                tb.ru_a_cntl.table_div.viewPortType="SCROLL";
                            }
                            tb.a_cntl.inBox = true;
                            tb.ru_a_cntl.inBox = true;
                            tb.useMdiv = tobj.id;
                        }                    
                    } else {
                        tobj = document.getElementById('LOBJ'+pcontent);
                        if(tobj) {
                            node.addElement(tobj);
                            node.children[node.children.length] = tobj;
                        }
                    }
                }
                
            }
        }
    }
    
    for(i = 0; i < ibiCompound.drawBoxLayouts.length; i++) {    
        if(!ibiCompound.drawBoxLayouts[i].added) {
            if(boxC == null) {
                var twidth=dobjo.offsetWidth-2;
                var theight=dobjo.offsetHeight-2;
                
                boxC = document.createElement('div');divNode.setAttribute('id','ibi$container$'+this.id);
                if(b_ie) boxC.style.setAttribute('cssText', '-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;overflow:hidden;padding:0px;margin:0px;border:none;width:'+twidth+'px;height:'+theight+'px;', 0);
                else boxC.setAttribute('style','-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;overflow:hidden;padding:0px;margin:0px;border:none;width:'+twidth+'px;height:'+theight+'px;');
                dobji.appendChild(boxC);
            }
            boxC.appendChild(ibiCompound.drawBoxLayouts[i].domObj);
            ibiCompound.drawBoxLayouts[i].added = true;
            ibiCompound.drawBoxLayouts[i].isRootParent = boxC;
        }
    }

    for (i = 0, numItems = cc.length; i < numItems; i++) {
        layoutObjDivs[layoutObjDivs.length] = {'layout':LayoutObjects[cc[i]].layout,'div':d.getElementById(cn[cc[i]])};
    }

    for(i = 0, numItems = ibiCompound.drawObjectsList.length; i < numItems; i++) {
        if(typeof(ibiCompound.drawObjectsList[i].refresh)!="undefined") {
            //if(!isMergeReports) {
            //    if (!ibiCompound.drawObjectsList[i].filterOnload ||
            //        ((!ibiCompound.drawObjectsList[i].children.length) && (!ibiCompound.drawObjectsList[i].filterParent)))
                    ibiCompound.drawObjectsList[i].refresh();
             //   else
             //       ibiCompound.drawObjectsList[i].ready = true;
            //}
        }
    }
    // remove grid/pivot/chart from 
    for(i=0; i < ibiCompound.ibiDashLayout.length; i++) {
        var tn = ibiCompound.ibiDashLayout[i];
        var td = MyTable[tn].a_cntl.table_div;
        if(!td.hidden) {
            var id = 'MAINTABLE_'+tn;
            var obj = document.getElementById(id);
            obj.parentNode.removeChild(obj);
            ld.appendChild(obj);
            obj.style.display = "block";
            if(td.height>0) 
                if((td.height+td.top) > ibiCompound.dashHeight) ibiCompound.dashHeight = td.height+td.top;
        }
    }
     if(ibiCompound.dashHeight>0) ld.style.height = ibiCompound.dashHeight+"px";
     window.setTimeout(ibiCompound.handleResize,0);
    /*
     if ('addEventListener' in window) {
        window.addEventListener("resize", ibiCompound.handleResize, false);
    } else {
        window.attachEvent("onresize", ibiCompound.handleResize);
    }
	*/
}

})();

function arholder()
{
    this.type = "placeholder";
}

function aricon(xarg,yarg,widtharg,heightarg)
{
    this.x=xarg;
    this.y=yarg;
    Object.defineProperty(this, 'width', {
        set: function(w) {
            var ww = parseInt(w);
            this._width = ww;
        },
        get: function() {
            return this._width;
        }
    });
	this.width=20;
    Object.defineProperty(this, 'height', {
        set: function(w) {
            var ww = parseInt(w);
            this._height = ww;
        },
        get: function() {
            return this._height;
        }
    });
	this.height=20;
    this.id = null;
	this.border = null;
	this.padding = null;
    this.visible = true;
    this.type = "icon";
    this.title = "";
	this.class = null;
    this.parentId = null;
    this.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACx"+
        "jwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAA9SURBVDhPY/z/ieE/AwWACUqTDcAueKelAuWS"+
        "BoSu3aHcBdT3AshZ+AC62oH3wjAwYLgkJCibLEChCxgYAGpEGswFEmVhAAAAAElFTkSuQmCC";
    this.iconImg = '<img src="'+this.url+'">';
    this.onClick = null;
    this.container = null;
    
    this.doclick = function(e) {
        var myObj = {
            'x':e.clientX,
            'y':e.clientY,
            'id':this.id,
            'parentId':this.parentId,
            'event':e,
            'title': this.title,
            'currentFilter': (this.parentId?ibiCompound.drawObjectsPtr[this.parentId]:null)
        };
        if(this.onClick) {
            this.onClick(myObj);
        }
        // else
        //    console.log(this.id);
    };
    
    this.buildComponent = function() {
    var id = this.id;
        this.container = document.createElement('div');
        this.container.innerHTML = this.iconImg;
		var styleText = 'width:'+this.width+'px;height:'+this.height+'px;cursor:pointer;';
		if(this.border)
		    styleText +=  "border:"+this.border;

        if(this.padding)
            styleText +=  "padding:"+this.padding;

		if(this.class)
		    this.container.className = this.class;

        if(b_ie)
			this.container.style.setAttribute('cssText',styleText);
        else
			this.container.setAttribute('style',styleText);

        if(this.container.addEventListener)
            this.container.addEventListener("click",function(e){
                ibiCompound.drawObjectsPtr[id].doclick(e,id);},false);
        else
            this.container.attachEvent("onclick",function(e){
                ibiCompound.drawObjectsPtr[id].doclick(e,id);});
        return this.container;
    };
    
    

}


