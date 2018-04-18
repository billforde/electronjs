/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arlist.js
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
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
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
ActiveJSRevision["arlist"]="$Revision: 20180116.1536 $";
//$Revision: 1.25 $
//$Log: arlist.js,v $
//Revision 1.25  2014/06/01 22:05:25  William_Forde
//[p134795] add scroll to filter controls.
//
//Revision 1.24  2014/05/09 22:12:15  William_Forde
//[p134795] fix similar issue with list that radiobutton had.
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
//Revision 1.20  2013/12/05 21:16:55  William_Forde
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
//Revision 1.19  2013/12/05 15:18:17  William_Forde
//[p154876] Fix apply filter.
//
//Revision 1.18  2013/12/05 14:37:52  William_Forde
//[p154876] Merge common routines into arcompound.
//
//Revision 1.17  2013/12/05 03:10:12  William_Forde
//[p154876] Move showtile routine into arcompound so that only one file needs to be updated.
//
//Revision 1.16  2013/12/03 14:58:13  William_Forde
//[p154876] Add showtitle option.
//
//Revision 1.15  2013/11/21 15:11:16  William_Forde
//[p154707] = should have been ==
//
//Revision 1.14  2013/11/21 14:57:23  William_Forde
//[p154707] If filterTaget=* then create a array of all report names.
//
//Revision 1.13  2013/10/03 14:03:13  William_Forde
//[p151491] Use TABLE instead of DIV because div's had too many issues with borders.
//
//Revision 1.12  2013/08/13 17:14:42  Israel_Schulman
//[p147385] Handle default values if they are set. Address js scan warnings.
//
//Revision 1.11  2013/08/12 19:51:03  Israel_Schulman
//[p147385] Performance enhancement to filter logic for filters which are active onload for both cache and non-cache mode. Functionality improvements and logic changes on filter components (archeckbox, arcombobox, arlist and arradiobutton).
//
//Revision 1.10  2013/05/01 16:19:43  Israel_Schulman
//[p147711] Reference arlist's dataProvider Array of raw values versus the Array of formatted values when populating arlist.values Array.
//
//Revision 1.9  2012/12/13 21:11:41  Brian_DCruz
//[p137460] Implement logic only when showAll is true
//
//Revision 1.8  2012/10/24 19:31:47  Brian_DCruz
//[p137460] When multiselect, if item other than [ALL] is selected, deselect [ALL]. If [ALL] is selected, deselect other items.
//
//Revision 1.7  2012/09/27 15:21:55  William_Forde
//[p128912][>branch8001] Allow use to set the default value(s) of the filter controls.
//
//Revision 1.6  2012/09/17 15:46:34  William_Forde
//[p96890] accidental use of "divnode" instead of local variable "obj".  Fix
//
function arlist(xarg,yarg,widtharg,heightarg)
{
	ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
    this.active = false;
    this.values = [];
    this.defaultValues = null;
    this.filterOnload = false;
    this.width=widtharg;
    this.height=heightarg;
    this.id = null;
    this.visible = true;
    this.rowCount = 4;
    this.dataColumn = null;
    this.dataProvider = null;
    this.dataReport = null;
    this.filterCondition = 0;
    this.filterTarget = null;
    this.filterParent = null;
    this.filterSibling = null;
    this.children = [];
    this.divName = '';
    this.showAll=false;
    this.color = null;
    this.font = null;
    this.backcolor = null;
    this.size = null;
    this.multiselect = false;
    this.selectedArray = [];
    this.orgX = -1;
    this.orgY = -1;
    this.Mx = -1;
    this.My = -1;
    this.objs = null;
    this.showTitle = false;
    this.highlight = false;
    this.filterOnloadRan = false;
    this.isScrolling = false;
    this.type = "list";


    this.toggleValue = function(selectedRow)
    {
        if(this.isScrolling) {            
            return;
        }
        var obj, doc = document;    
        if(!this.multiselect) {
            for (var i = 0, numElem = this.selectedArray.length; i < numElem; ++i) {
                if(selectedRow != i) {
                    obj = doc.getElementById("list_td"+this.id+"_"+i);
                    if(obj) obj.style.backgroundColor="white";
                    this.selectedArray[i]=false;
                }
            }
        }
        obj = doc.getElementById("list_td" + this.id + "_" + selectedRow);
        if(obj) {
            if(this.selectedArray[selectedRow]) {
                obj.style.backgroundColor="white";
                this.selectedArray[selectedRow] = false;
            } else {
                obj.style.backgroundColor="#A0A0A0";
                if (this.showAll) {
                    if (selectedRow === 0) {
                        for (var i = 1, numElem = this.selectedArray.length; i < numElem; ++i) {
                            if (this.selectedArray[i]) {
                                obj = doc.getElementById("list_td" + this.id + "_" + i);
                                if (obj) { obj.style.backgroundColor = "white"; }
                                this.selectedArray[i] = false;
                            }
                        }
                    } else if (this.selectedArray[0]) {
                        obj = doc.getElementById("list_td" + this.id + "_0");
                        if (obj) { obj.style.backgroundColor = "white"; }
                        this.selectedArray[0] = false;
                    }
                }                
                this.selectedArray[selectedRow] = true;
            }
        }
        //this.applyFilter();
    };

    this.updateValues = function() {
        this.values = [];
        this.allSelected = false;
        var strUnderCover = (this.filter_datatype == "IBISTR" || this.filter_datatype == "IBIDATE")
        var obj = document.getElementById(this.type + this.id);
        var dtype = this.mytable.a_capt[this.col].type;
        for(i=0; i < this.selectedArray.length; i++) {
            if(this.selectedArray[i]) {
                if(!strUnderCover) {
                    this.values[this.values.length] = this.dataProvider[3][i];
                    if (this.values[this.values.length - 1] != ibiMsgStr["all"])
                        this.values[this.values.length - 1] = this.values[this.values.length - 1] * 1;
                } else
                    this.values[this.values.length]=this.dataProvider[3][i];
                if(this.dataProvider[1][i]==ibiMsgStr['all']) {
                    this.active = false;
                    this.allSelected = true;
                }
            }
        }
		this.setInternalTitle();
        this.dispatchFilterChangedEvent();
    };

    this.buildComponent = function() {
        var formstr= '<form action="javascript:nop();" id="list'+this.id+'"  style="margin:0px"><div style="position:relative;top:0px;left:0px;" id="list_d'+this.id+'"><\/div><\/form>';
		return this.c_buildComponent(formstr);
    };

    this.outputValueHtmlBegin = function(){
        this.line = '';
        this.line += '<table width="100%" border="0" style="border:hidden;">';
    };

    this.outputValueHtmlBody = function(i) {
        var bc;
        var isIn;
        this.selectedArray[i] = false;
        if(this.values != null)
            isIn = inarray(this.values, this.dataProvider[3][i],null,this.clen);
        else
            isIn = false;
        if (isIn) {
            this.selectedArray[i] = true;
        }

        if(this.selectedArray[i])
            bc="#A0A0A0";
        else
            bc="white";
        this.line += '<tr>';
        this.line += '<td style="background-color:'+bc+';" id="list_td'+this.id+'_'+i+'">';
        this.line += '<div onclick="ibiCompound.drawObjectsPtr[\''+this.id+'\'].toggleValue('+i+');ibiCompound.drawObjectsPtr[\''+this.id+'\'].updateValues();ibiCompound.drawObjectsPtr[\''+this.id+'\'].doFilter()" style="';
        if(this.font) this.line += 'font-family:'+this.font+';';
        if(this.color) this.line += 'color:'+this.color+';';
        if(this.size) this.line += 'font-size:'+this.size+'pt;';
        this.line += ';cursor:pointer">'+this.dataProvider[1][i];
        this.line += '<\/div>';
        this.line += '<\/td><\/tr>';
    };

    this.outputValueHtmlEnd = function(){
        this.line += '<\/table>';
        this.objs.innerHTML = this.line;
    };


    this.refresh = function(async) {
        this.selectedArray = [];
        if(this.objs == null) {
            this.objs = document.getElementById("list_d"+this.id);
            if(this.objs==null) return;
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

