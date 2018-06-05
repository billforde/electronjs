/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/archeckbox.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170804 1307 bjd 190666 NLV: A string, "MISSING" needs to be extracted for translat
* 170725 1141 wjf 192996 @@measures; chart loading indefinitely
* 170613 1154 wjf 191515 Create unified filter component to replace old style filter
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 160831 1820 wjf 178433 FOC177: Invalid date constant when MISSING value is selecte
* 160810 0952 wjf 178601 Vis:Exclude from chart is not working for single point in P
* 160809 1942 wjf 182848 BUE: IE browser stops responding +44 7818531647
* 160610 1256 hms 180534 Remove tab characters from source files
* 160322 1528 wjf 178727 Visualization Bubble map takes much longer to render than J
* 160321 1128 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160210 2355 wjf 176898 AHTML: Cache performance enhancement
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150521 1106 wjf 167733 AHTMLK: 8103 error with @@MEASURES in Active Dashboard
* 150225 1025 wjf 164530 AHTML: IDIS: sort on controls not working properly
* 141118 1341 wjf 162758 AHTML: Fix issue with wait screen not being displayed
* 141103 1309 wjf 134795 Active Visualization
* 141022 0855 wjf 162225 AHTML:  MOB:  Display mob menu  when user clicks on filter.
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
* 140923 1556 bjd 161113 AHTML: ARFILTER_SORT = ASCENDING\DESCENDING
* 140923 1525 bjd 161113 AHTML: ARFILTER_SORT = ASCENDING\DESCENDING
* 140918 1241 wjf 134795 Active Visualization
* 140827 1759 wjf 134795 Active Visualization
* 140827 1231 wjf 134795 Active Visualization
* 140826 1245 wjf 134795 Active Visualization
* 140814 1958 wjf 134795 Active Visualization
* 140731 1207 wjf 134795 Active Visualization
* 140709 1503 wjf 134795 Active Visualization
* 140708 1625 wjf 134795 Active Visualization
* 140624 0948 wjf 134795 Active Visualization
* 140601 1823 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["archeckbox"]="$Revision: 20180116.1536 $";
//$Revision: 1.29 $
//$Log: archeckbox.js,v $
//Revision 1.29  2014/06/01 22:05:25  William_Forde
//[p134795] add scroll to filter controls.
//
//Revision 1.28  2014/05/21 12:03:11  William_Forde
//[p134795] Allow filter field not to be part of the chart/grid if we are in cache mode NOEXTRACT, since it is possible for that field be in the master, but not in the request used to popluate the filters.  Also fix the all issue in the checkbox.
//
//Revision 1.27  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.26  2014/02/14 16:15:39  William_Forde
//[p134795][>branch8100] Fix issue where refresh fails if it container disappears.
//
//Revision 1.25  2014/01/30 20:18:07  William_Forde
//[p134795][>branch8100] Merge applyfilter code from checkbox to main compound code.
//
//Revision 1.24  2014/01/13 15:24:48  William_Forde
//[p154876] Handle dhowtitle setting in arcompound.
//
//Revision 1.23  2013/12/30 14:27:58  William_Forde
//[p153472]  If ARFILTER_ONCHANGE=ON, then we need to apply it after we refresh its list of value, from its parent filter being changed by the user.
//
//Revision 1.22  2013/12/05 15:18:17  William_Forde
//[p154876] Fix apply filter.
//
//Revision 1.21  2013/12/05 14:37:52  William_Forde
//[p154876] Merge common routines into arcompound.
//
//Revision 1.20  2013/12/05 03:10:12  William_Forde
//[p154876] Move showtile routine into arcompound so that only one file needs to be updated.
//
//Revision 1.19  2013/12/02 17:29:09  William_Forde
//[p151491] Width and height can be percentage.
//
//Revision 1.18  2013/11/21 15:11:16  William_Forde
//[p154707] = should have been ==
//
//Revision 1.17  2013/11/21 14:57:23  William_Forde
//[p154707] If filterTaget=* then create a array of all report names.
//
//Revision 1.16  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.15  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.14  2013/08/05 17:35:06  Israel_Schulman
//[p151122] Only set values if checkbox is not "special" to prevent error
//
//Revision 1.13  2013/07/16 16:43:31  Israel_Schulman
//[p151122] Make sure to populate filter component values with properly typed data. Also make sure filter target names are not invalid.
//
//Revision 1.12  2013/07/05 14:15:16  William_Forde
//[p150949] For Charts, we need to reset the saved list of x and y columns.
//
//Revision 1.11  2013/07/04 14:46:56  William_Forde
//[p150949]  Display AS name, if specified, in the list of columns.  Allow control to update multiple reports.
//
//Revision 1.10  2013/07/04 01:31:07  William_Forde
//[p150949] New Feature to allow checkbox to be used to hide/show columns in a report/graph.
//
//Revision 1.9  2012/10/12 14:50:51  William_Forde
//[p128912] if show all is enabled and default values is set, do the default vaules first.
//
//Revision 1.8  2012/10/05 15:21:38  William_Forde
//[p142432] make sure the "all" string is properly set for showall.
//
//Revision 1.7  2012/09/27 15:21:55  William_Forde
//[p128912][>branch8001] Allow use to set the default value(s) of the filter controls.
//
//Revision 1.6  2012/09/17 15:46:33  William_Forde
//[p96890] accidental use of "divnode" instead of local variable "obj".  Fix
//
function archeckBox(xarg,yarg,widtharg,heightarg)
{
	ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
    this.width=widtharg;
    this.height=heightarg;
    this.id = null;
    this.visible = true;
    this.dataColumn = null;
    this.dataProvider = null;
    this.dataReport = null;
    this.active = false;
    this.values = [];
    this.defaultValues = null;
    this.filterOnload = false;
    this.filterCondition = 0;
    this.filterTarget = null;
    this.filterParent = null;
    this.realFilterTarget = null;
    this.children = [];
    this.divName = '';
    this.showAll = false;
    this.color = null;
    this.font = null;
    this.backcolor = null;
    this.size = null;
    this.multiselect = true;
    this.orgX = -1;
    this.orgY = -1;
    this.Mx = -1;
    this.My = -1;
    this.objs = null;
    this.filterOnloadRan = false;
    this.type = "checkbox";
    this.col = null;
    this.isScrolling = false;
    this.showFilterOptions = false;

    this.checked = [];
    this.clen = null;
    this.filterOptions = new arFilterOptions(this);

	this.checkMulti = function(e, IselectedRow)
    {
		var selectedRow = IselectedRow;
        if(this.isScrolling) {
          // prevent the label associated with the checkbox 
          // from causing the checkbox to be checked when no 
          // filter will be performed
          e.preventDefault();
          return;
        }
        var i;
        var obj = document.getElementById(this.type+this.id);

        if((!this.multiselect)||(this.dataProvider[0][selectedRow] == ibiMsgStr['all'])) {
            for(i=0; i < this.checked.length; i++) {
                if(obj.value[this.checked[i]].checked) {
                    obj.value[this.checked[i]].checked = false;
                    if(ibi_iPadMenu)
                        ibi_iPadMenu.updateMenuItem(i,false);
                }
            }
        }
        var displayedIndex;
       // if (this.filterSortDesc === true) {
        //    if (this.showAll) {
        //        displayedIndex = (selectedRow !== 0)
         //                        ? (obj.value.length - selectedRow) : selectedRow;
        ///    } else {
        //        displayedIndex = obj.value.length - selectedRow - 1;
        //    }
        //} else {
            displayedIndex = selectedRow;
        //}
        var pos = inarray(this.checked, displayedIndex, true);
        if(obj.value[displayedIndex].checked)
            this.checked[this.checked.length] = displayedIndex;
        else
        if(pos!=-1)
            this.checked.splice(pos,1);

        if((this.dataProvider[0][0] == ibiMsgStr['all']) && (obj.value[0].checked = true)
            &&(selectedRow!=0))
            if(obj) {
                obj.value[0].checked = false;
                if(ibi_iPadMenu)
                    ibi_iPadMenu.updateMenuItem(0,false);
                pos = inarray(this.checked,0,true);
                if(pos!=-1)
                    this.checked.splice(pos,1);
            }

        //if nothing checked, show all as checked
        if((this.checked.length == 0) && this.showAll) {
            selectedRow = 0;
			for(var i=0; i < this.dataProvider[0].length; i++)
				if(this.dataProvider[0][i] == ibiMsgStr['all']){
					selectedRow = i;
					break;
				}
            if(obj)
				obj.value[selectedRow].checked = "checked";
                if(ibi_iPadMenu)
                    ibi_iPadMenu.updateMenuItem(0,true);
        }

        if((this.multiselect)&&(this.dataProvider[0][selectedRow] != ibiMsgStr['all'])) return;

        this.checked = [];
        if(obj.value[selectedRow].checked)
            this.checked[this.checked.length] = selectedRow;

        //if(obj)
        //    for(var i=0; i < obj.value.length; i++) {
         //       if(selectedRow != i) {
          //          obj.value[i].checked = false;
          //      }
                //if (obj.value[i].value != this.dataProvider[0][selectedRow])
                //   obj.value[i].checked = false;
         //   }

    };


    this.resetChartInfo = function(mytable)
    {
        var x_cols=[],y_cols=[];
        var btype="SUM";

        for(var j=0; j<mytable.n_cols;j++) {
            if(mytable.a_capt[j].isby){
                    y_cols[y_cols.length]=j;
            } else
            if(((!mytable.a_capt[j].noprint)&&(!mytable.a_capt[j].b_hide))||(mytable.a_cntl.hasBuckets))
				x_cols[x_cols.length]=j;
        }
        mytable.chartinfo.saveable.x_cols = x_cols;
        mytable.chartinfo.saveable.y_cols = y_cols;
        mytable.chartinfo.saveable.btypeArray = [];
        for(var j=0; j < x_cols.length; j++)
            mytable.chartinfo.saveable.btypeArray[j] = btype;
    };



    this.buildComponent = function() {
        var formstr= '<form id="'+this.type+this.id+'" style="margin:0px"><div style="position:relative;top:0px;left:0px;" id="'+this.type+'_d'+this.id+'"><\/div><\/form>';
		return this.c_buildComponent(formstr);
    };

    this.updateValues = function() {
        var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
        var strUnderCover = (this.filter_datatype == "IBISTR" || this.filter_datatype == "IBIDATE"); // p167472: raw dates are now strings...
        var obj = document.getElementById(this.type + this.id);
        this.values = [];
        this.allSelected = false;
        if(!this.special && obj) {
            var dtype = this.mytable.a_capt[this.col].type;
            for (i = 0; i < this.checked.length; i++) {
                val = obj.value[this.checked[i]].value;
                if(val == MISSING_STR)
					val = missingVal;
                /** p167472: raw dates are now strings... *
                if (dtype == IBIDATE) {
                    val = val + '';
                    val = val.substr(0, 8);
                    this.values[this.values.length] = val;
                                    } else
                 if (dtype != "IBISTR") {
                                    **/
                if (!strUnderCover) {
                    this.values[this.values.length] = val;
					if((this.values[this.values.length-1]!=ibiMsgStr["all"]) && (this.values[this.values.length-1]!=missingVal))
                        this.values[this.values.length - 1] = this.values[this.values.length - 1] * 1;
                } else {
                    this.values[this.values.length] = val;
                }
                if (val == ibiMsgStr['all']) {
                    this.active = false;
                    this.allSelected = true;
                    this.values = [];
                    break;
                }
            }
        }
        this.setInternalTitle();
        this.dispatchFilterChangedEvent();
    };

    this.delayDoFilter = function(op){
        var filter = this;
        if(this.DoFilterTimer)
            window.clearTimeout(this.DoFilterTimer);
        this.DoFilterTimer = window.setTimeout(function () {
            filter.doFilter(op);
            delete filter.DoFilterTimer;
        }, 1000);

    };

    this.getColumnNamesDP = function(mytable, which)
    {
        var dp = [[],[],[],[]];
        var field;
        this.values = [];
        for(var i = 0; i < mytable.a_cntl.a_cols.length; i++) {
            if((which=="COLUMNS")||
                ((which=="BYS")&&(mytable.a_capt[i].isby))||
                ((which=="MEASURES")&&(mytable.a_capt[i].isby != true))) {
                    display = mytable.a_cntl.a_cols[i].dis;
                    field = mytable.a_cntl.a_cols[i].field;
                    if(display == "Noprint Column") display = field;
                    dp[0][dp[0].length] = i+'@@'+field;
                    dp[3][dp[3].length] = i+'@@'+field;
                    dp[1][dp[1].length] =  display;
                    if(!mytable.a_capt[i].b_hide)
                        this.values[this.values.length] = i+'@@'+field;
                }
        }
        return dp;
    };

    this.outputValueHtmlBegin = function(){
        this.line = '';
        this.line += '<table style="border:hidden;">';
        this.checked = [];
    };

    this.outputValueHtmlBody = function(i,displayRow){
        var MISSING_STR = "[" + ibiMsgStr['missing'] + "]";
        var isChecked = '';
        var isIn;
		var val;

        if(this.values != null)
            isIn = inarray(this.values,this.dataProvider[3][i],null,this.clen);
        else
            isIn = false;
        if (isIn) {
            isChecked = 'checked="checked"';
            this.checked[this.checked.length] = displayRow;
        }
        this.line += '<tr><td style="width:10px;">';
        this.line += '<div style="width:20px;overflow:hidden">';
		val = this.dataProvider[3][i];
		if(val == missingVal)
			val = MISSING_STR;
        this.line += '<input '+isChecked+' type="checkbox"  ' +
            'onclick="ibiCompound.drawObjectsPtr[\''+this.id+'\'].checkMulti(event, '+displayRow+');ibiCompound.drawObjectsPtr[\''+this.id+'\'].updateValues();ibiCompound.drawObjectsPtr[\''+this.id+'\'].delayDoFilter(\'user\')" id="'+this.type+this.id+'_'+i+'"' +
			' name="value" value="'+val+'"\/>';
        this.line += '<\/div>';
        this.line += '<\/td><td width="*">';
        this.line += '<label style="';
        if(this.font) this.line += 'font-family:'+this.font+';';
        if(this.color) this.line += 'color:'+this.color+';';
        if(this.size) this.line += 'font-size:'+this.size+'pt;';
        this.line += '" for="'+this.type+this.id+'_'+i+'">'+this.dataProvider[1][i];
        this.line += '<\/label>';
        this.line += '<\/td><\/tr>';
    };

    this.outputValueHtmlEnd = function(){
        this.line += '<\/table>';
        this.objs.innerHTML = this.line;
    };
	this.refresh = function(async) {
        var i;
        var isChecked;
        var isIn;
        if(this.objs == null) {
            this.objs = document.getElementById(this.divName);
            if(this.objs) {
                this.objs.addEventListener("touchstart", ibiCompound.drawObjectsPtr[this.id].startDiv, false);
                this.objs.addEventListener("touchmove", ibiCompound.drawObjectsPtr[this.id].startDiv, false);
            }
            this.objs = document.getElementById(this.type+"_d"+this.id);
            if(this.objs) {
                if('addEventListener' in this.objs)
                    if('ontouchstart' in this.objs) {
                        //this.objs.addEventListener("touchstart",ibiCompound.drawObjectsPtr[this.id].startDiv,false);
                        //this.objs.addEventListener("touchmove",ibiCompound.drawObjectsPtr[this.id].moveDiv,false);
                        //this.objs.addEventListener("touchend",ibiCompound.drawObjectsPtr[this.id].stopDiv,false);
                    }
            } else {
                return;
            }
        }
        if(this.objs) {
            this.mytable = this.getTable(this.dataReport);
            if(this.mytable) {
				if((this.dataProvider==null) || (!this.reloadData)) {
                    this.processDataProvider(async);
				} else {
					this.processDataProvider2();
					this.reloadData = false;
				}
            }
        }
    };
}
