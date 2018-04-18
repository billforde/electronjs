/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arradiobutton.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 160809 1942 wjf 182848 BUE: IE browser stops responding +44 7818531647
* 160610 1256 hms 180534 Remove tab characters from source files
* 160321 1128 wjf 178339 BUE: Drill up after drill down removes options from child f
* 160104 1201 iys 175341 AHTML:Dashboard with Radio Button performs very slowly on v
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 141103 1309 wjf 134795 Active Visualization
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
* 140918 1241 wjf 134795 Active Visualization
* 140827 1759 wjf 134795 Active Visualization
* 140827 1231 wjf 134795 Active Visualization
* 140624 0948 wjf 134795 Active Visualization
* 140620 1234 wjf 134795 Active Visualization
* 140601 1823 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arradiobutton"]="$Revision: 20170613.1135 $";
//$Revision: 1.26 $
//$Log: arradiobutton.js,v $
//Revision 1.26  2014/06/01 22:05:25  William_Forde
//[p134795] add scroll to filter controls.
//
//Revision 1.25  2014/05/09 22:12:15  William_Forde
//[p134795] fix similar issue with list that radiobutton had.
//
//Revision 1.24  2014/05/09 21:39:30  William_Forde
//[p134795] Fix issue with radiobutton causing error, when delete is clicked.
//
//Revision 1.23  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.22  2014/01/13 15:24:48  William_Forde
//[p154876] Handle dhowtitle setting in arcompound.
//
//Revision 1.21  2013/12/30 14:27:58  William_Forde
//[p153472]  If ARFILTER_ONCHANGE=ON, then we need to apply it after we refresh its list of value, from its parent filter being changed by the user.
//
//Revision 1.20  2013/12/05 15:23:50  William_Forde
//[p154876] fix radiobutton not using proper "type"
//
//Revision 1.19  2013/12/05 15:18:17  William_Forde
//[p154876] Fix apply filter.
//
//Revision 1.18  2013/12/05 14:37:52  William_Forde
//[p154876] Merge common routines into arcompound.
//
//Revision 1.17  2013/12/05 03:10:12  William_Forde
//[p154876] Move showtile routine into arcompound so that only one file needs to be updated.
//
//Revision 1.16  2013/12/02 17:29:09  William_Forde
//[p151491] Width and height can be percentage.
//
//Revision 1.15  2013/11/21 15:11:16  William_Forde
//[p154707] = should have been ==
//
//Revision 1.14  2013/11/21 14:57:23  William_Forde
//[p154707] If filterTaget=* then create a array of all report names.
//
//Revision 1.13  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.12  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.11  2013/07/16 16:43:31  Israel_Schulman
//[p151122] Make sure to populate filter component values with properly typed data. Also make sure filter target names are not invalid.
//
//Revision 1.10  2012/11/13 19:59:43  Aryeh_Mark
//[140854] Added Base 10 parameter to parseInt JavaScript function
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
function arradioButton(xarg,yarg,widtharg,heightarg)
{
	ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
    this.width=widtharg;
    this.height=heightarg;
    this.id = null;
    this.active = false;
    this.values = [];
    this.defaultValues = null;
    this.filterOnload = false;
    this.visible = true;
    this.dataColumn = null;
    this.dataProvider = null;
    this.dataReport = null;
    this.multiselect = false;
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
    this.orgX = -1;
    this.orgY = -1;
    this.Mx = -1;
    this.My = -1;
    this.objs = null;
    this.filterOnloadRan = false;
    this.type = "radiobutton";
    this.isScrolling = false;


    this.buildComponent = function() {
        var formstr= '<form id="'+this.type+this.id+'" style="margin:0px"><div '+
                        ' style="position:relative;top:0px;left:0px;"  id="'+this.type+'_d'+this.id+'"><\/div><\/form>';
		return this.c_buildComponent(formstr);
    };

    this.outputValueHtmlBegin = function(){
        this.line = '';
        this.line += '<table style="border:hidden;">';
    };

    this.outputValueHtmlBody = function(i){
        var isIn;
        var isChecked='';
        isChecked = '';
        if(this.values != null)
            isIn = inarray(this.values, this.dataProvider[3][i],null,this.clen);
        else
            isIn = false;
        if (isIn) {
            isChecked = 'checked="checked"';
        }
        this.line += '<tr><td style="width:10px;">';
        this.line += '<div style="width:20px;overflow:hidden">';
        this.line += '<input '+isChecked+' type="radio" onclick="ibiCompound.drawObjectsPtr[\''+this.id+'\'].updateValues(this);ibiCompound.drawObjectsPtr[\''+this.id+'\'].doFilter()" id="'+this.type+this.id+'_'+i+'" name="value" value="'+this.dataProvider[3][i]+'"\/>';
        this.line += '<\/div>';
        this.line += '<\/td><td width="*">';
        this.line += '<label style="';
        if(this.font) this.line += 'font-family:'+this.font+';';
        if(this.color) this.line += 'color:'+this.color+';';
        if(this.size) this.line += 'font-size:'+this.size+'pt;';
        this.line += '" for="'+this.type+this.id+'_'+i+'">'+this.dataProvider[1][i]+'<\/label>';
        this.line += '<\/td><\/tr>';
    };

    this.outputValueHtmlEnd = function(){
        this.line += '<\/table>';
        this.objs.innerHTML = this.line;
    };

    this.updateValues = function(item) {
        this.values = [];
        this.allSelected = false;
        var strUnderCover = (this.filter_datatype == "IBISTR" || this.filter_datatype == "IBIDATE"); // p167472: raw dates are now strings...
        var objValue;

        if(item && item.checked) {
            objValue = item.value;
            
            if(!strUnderCover && objValue !== ibiMsgStr['all']) {
                objValue *= 1;   
            }

            this.values[this.values.length] = objValue;

            if(objValue === ibiMsgStr['all']) {
                this.active = false;
                this.allSelected = true;
            }
        }
		this.setInternalTitle();
    };

    this.refresh = function(async) {
        var i;
        var isIn;
        var isChecked='';
        if(this.objs == null) {
            this.objs = document.getElementById(this.type+"_d"+this.id);
            if(this.objs == null) return;
            if('addEventListener' in this.objs) 
                if('ontouchstart' in this.objs) {
                    this.objs.addEventListener("touchstart",ibiCompound.drawObjectsPtr[this.id].startDiv,false);
                    this.objs.addEventListener("touchmove",ibiCompound.drawObjectsPtr[this.id].moveDiv,false);
                    //this.objs.addEventListener("touchend",ibiCompound.drawObjectsPtr[this.id].stopDiv,false);
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
