/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/artextinput.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170209 1803 iys 188553 AHTML: Document with a Text Box Filter does not show report
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 161031 1014 wjf 186195 ADP:TEXT prompt functionality is not working at run time.
* 160610 1256 hms 180534 Remove tab characters from source files
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 150128 1047 wjf 164049 AHTML: Textinput use onkeyup instead of onchange.
* 141212 1745 wjf 163301 AHTML:Unable to apply one active control to multiple reports
* 141119 1920 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 141119 0901 wjf 162877 AHTML:  Allow controls to ignore formatting when gen WHERE
* 140918 1241 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.17 $
//$log$
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["artextinput"]="$Revision: 20170613.1135 $";
function artextInput(xarg,yarg,widtharg,heightarg)
{
	ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
    this.width=widtharg;
    this.height=heightarg;
    this.id = null;
    this.visible=true;
    this.maxlength = 20;
     this.textsize = 20;
    this.active = false;
    this.values = [];
    this.valueAsIs = false;
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
    this.currentValues = [];
    this.type="textinput";

    this.updateValues = function() {
        this.currentValues = [];
        var obj = document.getElementById(this.type+this.id);
        this.currentValues[0] = obj.value.value;
        this.setInternalTitle();
    };

    this.buildComponent = function() {
        var spacer = 6;
        if((this.values == null) && this.filterOnload && (this.defaultValues != null)) this.currentValues = ibiStd.copyObject(this.defaultValues);
        var formstr= '<form action="javascript:nop();" onsubmit="ibiCompound.drawObjectsPtr[\''+this.id+'\'].doFilter()" id="'+this.type+this.id+'" style="margin:0px">'+
            '<input onkeyup="ibiCompound.drawObjectsPtr[\''+this.id+'\'].updateValues()" type="text" value="'+((this.currentValues.length>0)?this.currentValues[0]:'')+'" size="'+this.textsize+'" name="value" style="';
        if(this.font) formstr += 'font-family:'+this.font+';';
        if(this.color) formstr += 'color:'+this.color+';';
        if(this.backcolor) formstr += 'background-color:'+this.backcolor+';';
        if(this.size) formstr += 'font-size:'+this.size+'pt;';
        if(this.width!=null) formstr+= 'width:'+(this.width-spacer)+';';
        if(this.height!=null) formstr+= 'height:'+(this.height-spacer)+';';
        formstr+='"\/><\/form>';
		return this.c_buildComponent(formstr);
    };

    this.refresh = function() {
		if(this.needToSetValuesFromDefault) {
			this.setValuesFromDefault();
			this.needToSetValuesFromDefault = false;
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
    };
}
