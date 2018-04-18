/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arcombobox.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 160809 1942 wjf 182848 BUE: IE browser stops responding +44 7818531647
* 160610 1256 hms 180534 Remove tab characters from source files
* 160321 1128 wjf 178339 BUE: Drill up after drill down removes options from child f
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 141103 1309 wjf 134795 Active Visualization
* 140918 1241 wjf 134795 Active Visualization
* 140827 1759 wjf 134795 Active Visualization
* 140827 1231 wjf 134795 Active Visualization
* 140601 1823 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arcombobox"]="$Revision: 20180116.1536 $";
//$Revision: 1.20 $
//$Log: arcombobox.js,v $
//Revision 1.20  2014/06/01 22:05:25  William_Forde
//[p134795] add scroll to filter controls.
//
//Revision 1.19  2014/05/09 21:39:30  William_Forde
//[p134795] Fix issue with radiobutton causing error, when delete is clicked.
//
//Revision 1.18  2014/05/08 21:28:39  William_Forde
//[p134795] fix issue with combobox's dropdown arrow not working. fix issue with drop down arrow for the menu disappearing.
//
//Revision 1.17  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.16  2014/01/13 15:24:48  William_Forde
//[p154876] Handle dhowtitle setting in arcompound.
//
//Revision 1.15  2013/12/30 14:27:58  William_Forde
//[p153472]  If ARFILTER_ONCHANGE=ON, then we need to apply it after we refresh its list of value, from its parent filter being changed by the user.
//
//Revision 1.14  2013/12/05 15:18:17  William_Forde
//[p154876] Fix apply filter.
//
//Revision 1.13  2013/12/05 14:37:52  William_Forde
//[p154876] Merge common routines into arcompound.
//
//Revision 1.12  2013/12/05 03:10:12  William_Forde
//[p154876] Move showtile routine into arcompound so that only one file needs to be updated.
//
//Revision 1.11  2013/12/02 17:29:09  William_Forde
//[p151491] Width and height can be percentage.
//
//Revision 1.10  2013/11/21 15:11:16  William_Forde
//[p154707] = should have been ==
//
//Revision 1.9  2013/11/21 14:57:23  William_Forde
//[p154707] If filterTaget=* then create a array of all report names.
//
//Revision 1.8  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.7  2013/07/16 16:43:31  Israel_Schulman
//[p151122] Make sure to populate filter component values with properly typed data. Also make sure filter target names are not invalid.
//
//Revision 1.6  2012/09/27 15:21:55  William_Forde
//[p128912][>branch8001] Allow use to set the default value(s) of the filter controls.
//
//Revision 1.5  2012/09/17 15:46:34  William_Forde
//[p96890] accidental use of "divnode" instead of local variable "obj".  Fix
//
function arcomboBox(xarg,yarg,widtharg,heightarg)
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
    this.children = [];
    this.divName = '';
    this.showAll = false;
    this.color = null;
    this.font = null;
    this.backcolor = null;
    this.size = null;
    this.filterOnloadRan = false;
    this.type = "combobox";
    this.objs = null;

    this.updateValues = function()
    {
        this.values = [];
        this.allSelected = false;
        var strUnderCover = (this.filter_datatype == "IBISTR" || this.filter_datatype == "IBIDATE"); // p167472: raw dates are now strings...
        var obj = document.getElementById(this.type + this.id);
        var dtype = this.mytable.a_capt[this.col].type;
        if(obj)
        for (i = 0; i < obj.value.options.length; i++)
            if (obj.value.options[i].selected) {
                if (!strUnderCover) {
                    this.values[this.values.length] = obj.value.options[i].value;
                    if (this.values[this.values.length - 1] != ibiMsgStr["all"])
                        this.values[this.values.length - 1] = this.values[this.values.length - 1] * 1;
                } else {
                    this.values[this.values.length] = obj.value.options[i].value;
                }
                if (obj.value.options[i].value == ibiMsgStr['all']) {
                    this.active = false;
                    this.allSelected = true;
                }
            }
		this.setInternalTitle();
        this.dispatchFilterChangedEvent();
    };

    this.buildComponent = function() {
        var formstr= '<form id="'+this.type+this.id+'" style="margin:0px;"><div '+
                        ' style="position:relative;top:0px;left:0px;"  id="'+this.type+'_d'+this.id+'"><\/div><\/form>';
		return this.c_buildComponent(formstr);
    };

    this.outputValueHtmlBegin = function(){
        var widthStr = '';
        if(this.width>0) widthStr += 'width:'+this.width+'px;';
        if(this.height>0) widthStr += 'height:'+this.height+'px;';
        if(this.font) widthStr += 'font-family:'+this.font+';';
        if(this.color) widthStr += 'color:'+this.color+';';
        if(this.size) widthStr += 'font-size:'+this.size+'pt;';
        this.line = '<select onmousedown="event.stopPropagation()" onmouseup="event.stopPropagation()" onmouseover="event.stopPropagation()" onclick="event.stopPropagation()" onmousemove="event.stopPropagation()"  id="'+this.type+'_ds'+this.id+'" style="'+widthStr+'" onChange="ibiCompound.drawObjectsPtr[\''+this.id+'\'].updateValues();ibiCompound.drawObjectsPtr[\''+this.id+'\'].doFilter()" name="value">';
    };

    this.outputValueHtmlBody = function(i){
        var isIn;
        this.line += '<option value="'+this.dataProvider[3][i]+'" style="';
        if(this.font) this.line += 'font-family:'+this.font+';';
        if(this.color) this.line += 'color:'+this.color+';';
        if(this.size) this.line += 'font-size:'+this.size+'pt;';
        this.line += '" ';
        if(this.values != null)
            isIn = inarray(this.values, this.dataProvider[3][i],null,this.clen);
        else
            isIn = false;
        if (isIn)
            this.line+=' selected ';
        this.line += '>'+this.dataProvider[1][i]+'<\/option>';
    };

    this.outputValueHtmlEnd = function(){
        this.line += "<\/select>";
        this.objs.innerHTML = this.line;
    };


    this.refresh = function(async) {
        var i;
        //var obj = document.getElementById(this.type+this.id);
        if(this.objs == null) {
            this.objs = document.getElementById(this.type+'_d'+this.id);
        }
        if(this.objs) {
            var sel = document.getElementById(this.type+'_ds'+this.id);
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
