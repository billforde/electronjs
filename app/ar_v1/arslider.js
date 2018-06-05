/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arslider.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 171122 1121 wjf 191622 Vis : Run time : Chart not reset while applied filter right
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170322 1842 wjf 188280 Visualization Slider does not reflect date format in databa
* 161221 1029 wjf 187389 FF: Retail Samples: Slider range does not reset back to def
* 161220 1116 wjf 185994 Vis: Chrome: Filter prompts slider value not updating at ru
* 161216 0833 wjf 185994 Vis: Chrome: Filter prompts slider value not updating at ru
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 160610 1256 hms 180534 Remove tab characters from source files
* 160113 1940 wjf 171416 Prompt with YMD or two digit year date shows incorrect Year
* 150825 1442 bjd 170202 AHTML: Filter Prompt slider range not displayed correctly
* 150813 1545 wjf 169865 Error when creating Filter with decomposed date field, rang
* 150807 1405 wjf 170202 AHTML: Filter Prompt slider range not displayed correctly
* 150806 1851 wjf 170202 AHTML: Filter Prompt slider range not displayed correctly o
* 150805 0918 wjf 170202 AHTML: Filter Prompt slider range not displayed correctly o
* 150719 1850 wjf 169544 8105:Edit filter selection options not working properly for
* 150716 1824 wjf 168416 Filter with Compound date returns FORMAT OF THE TEST VALUE
* 150624 1131 wjf 167789 Allow filter controls to get data values in parallel
* 150603 0951 wjf 167789 Allow filter controls to get data values in parallel
* 150528 1352 wjf 167789 Allow filter controls to get data values in parallel
* 141111 1403 wjf 134795 Active Visualization
* 141110 1259 wjf 134795 Active Visualization
* 141003 1450 iys 161701 AHTML/MOB:filter sized incorrectly and doesn`t scroll
* 140925 2015 wjf 134795 Active Visualization
* 140918 1241 wjf 134795 Active Visualization
* 140917 1452 wjf 134795 Active Visualization
* 140917 1237 wjf 134795 Active Visualization
* 140916 1812 wjf 134795 Active Visualization
* 140905 1155 wjf 134795 Active Visualization
* 140905 1021 wjf 134795 Active Visualization
* 140826 1614 wjf 134795 Active Visualization
* 140826 1245 wjf 134795 Active Visualization
* 140814 1958 wjf 134795 Active Visualization
* 140812 1949 wjf 134795 Active Visualization
* 140728 1027 wjf 134795 Active Visualization
* 140718 1648 wjf 134538 AHTML/AFLEX:support GRAPH with ACROSS
* 140714 1604 wjf 134795 Active Visualization
* 140710 0930 wjf 134795 Active Visualization
* 140709 1156 wjf 134795 Active Visualization
* 140707 2007 wjf 134795 Active Visualization
* 140707 1240 wjf 134795 Active Visualization
* 140702 1340 wjf 134795 Active Visualization
* 140702 0812 wjf 134795 Active Visualization
* 140702 0056 wjf 134795 Active Visualization
* 140528 1632 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.19 $
//$Log: arslider.js,v $
//Revision 1.19  2014/05/28 16:33:42  William_Forde
//[p134795]  Allow slider to use aggregation.
//
//Revision 1.18  2014/04/22 18:55:27  William_Forde
//[p134795] make sure defaultvalues are applied to slider at run time.
//
//Revision 1.17  2014/04/22 14:54:37  William_Forde
//[p134795] If defaultvalues is set then use them when initially displaying slider.
//
//Revision 1.16  2014/04/21 22:05:16  William_Forde
//[p134795] fix more issues with hidding icon buttons
//
//Revision 1.15  2014/04/16 14:37:46  William_Forde
//[p134795] Size VBOX/HBOX to match IA canvas.  Fix issue with slider not being applied properly at runtime causing no data message to be displayed.
//
//Revision 1.14  2014/03/26 19:36:06  William_Forde
//[p134795] fix slider when GE or LE is used as a condition
//
//Revision 1.13  2014/03/25 12:56:10  William_Forde
//[p134795] Support filterSibling and fix slider to not act like a "chain" filter unless specified.
//
//Revision 1.12  2014/03/20 21:08:21  William_Forde
//[p134795][>branch8100] clean up errors
//
//Revision 1.11  2014/03/20 20:43:51  William_Forde
//[p134795][>branch8100] Fix many issue with slider not working.
//
//Revision 1.10  2014/03/06 20:15:23  William_Forde
//[p134795][>branch8100] Add initial support for dataColumn being prefixed with agg for filter controls.
//
//Revision 1.9  2014/03/06 16:47:23  William_Forde
//[p134795][>branch8100]  Fix issue with slider causing js error.
//
//Revision 1.8  2014/01/13 19:50:22  William_Forde
//[p134795] Allow filter condition for slider to be EQ (1 tab) or BT (2 tabs).
//
//Revision 1.7  2014/01/13 17:25:45  William_Forde
//[p134795] Implement vslider and fix html syntax error.
//
//Revision 1.6  2014/01/13 15:21:52  William_Forde
//[p134795]  Display min and max value above slider.
//
//Revision 1.5  2013/12/19 21:02:51  William_Forde
//Use jquery ui version of the slider.
//
//Revision 1.4  2012/09/27 15:21:54  William_Forde
//[p128912][>branch8001] Allow use to set the default value(s) of the filter controls.
//
//Revision 1.3  2012/09/17 15:46:31  William_Forde
//[p96890] accidental use of "divnode" instead of local variable "obj".  Fix
//
//Revision 1.2  2012/09/06 19:09:52  William_Forde
//[p136793] Only set controls to inactive, when its target matches the current filter control being applied.
//
//Revision 1.1  2012/07/17 18:51:43  William_Forde
//[p134795] initial return of slider control
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arslider"]="$Revision: 20171122.1121 $";
function arslider(xarg,yarg,widtharg,heightarg,orientation)
{
	ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
	this._active = false;
    this.value = 0;
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
    this.children = [];
    this.divName = '';
    this.mytable = null;
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
    this.orientation = "horizontal";
    if((typeof(orientation)!="undefined") && (orientation != null))
        this.orientation = orientation;
    this.minValue = 0;
    this.maxValue = 100;
    //this.selectedMin = null;
    //this.selectedMax = null;
    this._selectedMin = null;
    this._selectedMax = null;
    Object.defineProperty(this, 'selectedMin', {
        set: function(w) {
            this._selectedMin = (w != null) ? w + '' : w;
        },
        get: function() {
            return this._selectedMin;
        }
    });
    Object.defineProperty(this, 'selectedMax', {
        set: function(w) {
            this._selectedMax = (w != null) ? w + '' : w;
        },
        get: function() {
            return this._selectedMax;
        }
    });
    Object.defineProperty(this, 'active', {
        set: function(w) {
            this._active = w;
        },
        get: function() {
            return this._active;
        }
    });
    this.autoBound = true;
    this.dragObj = new Object();
    this.values = [];
    this.type = "slider";
    this.column=-1;
    if(this.orientation=="vertical") this.type = "vslider";


    this.buildComponent = function() {
        var formstr= '<form action="javascript:nop();" id="'+this.type+this.id+'"  style="margin:0px"><div style="position:relative;top:0px;left:0px;" id="'+this.type+'_d'+this.id+'"><\/div><\/form>';
		return this.c_buildComponent(formstr);
    };


    this.valuesChanged = function(id,min,max) {
        if((this.selectedMin == min) && (this.selectedMax == max)) return;
        this.selectedMin = min;
        this.selectedMax = max;
        if(this.mytable.a_capt[this.column].type == IBINUM) {
            this.selectedMin = ibiStd.ibiNumberToFormat(this.selectedMin,this.mytable.a_capt[this.column].format);
            if((this.filterCondition==7)||(this.filterCondition == 8))
                this.selectedMax = ibiStd.ibiNumberToFormat(this.selectedMax,this.mytable.a_capt[this.column].format);
        }
        this.showSelectedValues(id);
        this.setInternalTitle();
    };

    this.showSelectedValues = function(id) {
        var min = this.selectedMin;
        var max = this.selectedMax;
        var maxS,minS;
        var obj;
        if(this.mytable.a_capt[this.column].type == IBIDATE) {
            minS = this.javaScriptDateToIbiDate(min,this.mytable.a_capt[this.column].format,true);
            if((this.filterCondition==7)||(this.filterCondition == 8))
                maxS = this.javaScriptDateToIbiDate(max,this.mytable.a_capt[this.column].format,true);
        } else
        if(this.mytable.a_capt[this.column].type == IBINUM) {
            minS = ibiStd.ibiNumberToFormat(min,this.mytable.a_capt[this.column].format);
            if((this.filterCondition==7)||(this.filterCondition == 8))
                maxS = ibiStd.ibiNumberToFormat(max,this.mytable.a_capt[this.column].format);
        }
        else {
            minS = min+'';
            if((this.filterCondition==7)||(this.filterCondition == 8))
                maxS = max+'';
        }
        obj = document.getElementById(id+"_min");
        if(obj)
            obj.innerHTML = minS;
        if((this.filterCondition==7)||(this.filterCondition == 8)) {
            obj = document.getElementById(id+"_max");
            if(obj)
                obj.innerHTML = maxS;
        }
    };
    
    this.applyChange = function(id,min,max) {
        var obj;
        this.doFilter(); 
    };

    this.refresh = function(t_async) {
        var i;
        var comp = this;
        var async = true;
        if(typeof t_async != "undefined")
            async = t_async;
        var min=0,max=100;
        this.selectedArray = [];
        if(this.objs == null) {
            this.objs = document.getElementById(this.type+"_d"+this.id);
            //if('addEventListener' in this.objs) 
            //    if('ontouchstart' in this.objs) {
            //        this.objs.addEventListener("touchstart",ibiCompound.drawObjectsPtr[this.id].startDiv,false);
            //        this.objs.addEventListener("touchmove",ibiCompound.drawObjectsPtr[this.id].moveDiv,false);
            //        this.objs.addEventListener("touchsend",ibiCompound.drawObjectsPtr[this.id].stopDiv,false);
            //    }
    
        }
        if(this.objs) {
            this.mytable = this.getTable(this.dataReport);
            if(this.mytable) {
                var ms = '';
                var bc;
                var vals;
                var sObj;
                //if(this.multiselect) ms='multiple';
                if((comp.filterCondition == 7) || (comp.filterCondition == 8))
                    this.multiselect = true;
                this.dataProvider=[];
                this.column = this.mytable.getColumnByName(this.aggColumn,this.mytable);
                var bycol  = -1;
                if((this.haveAgg)&&(this.aggBy))
                    bycol = this.mytable.getColumnByName(this.aggBy,this.mytable);

                var displaySlider = function() {
                    if(comp.needToSetValuesFromDefault) {
                        comp.setValuesFromDefault();
                        comp.needToSetValuesFromDefault = false;
                    }
                    comp.rowCount = comp.dataProvider[0].length;
                    var widthStr = '';
                    if (comp.width > 0) widthStr += 'width:' + comp.width + 'px;';
                    if (comp.height > 0) widthStr += 'height:' + comp.height + 'px;';
                    if (comp.font)widthStr += 'font-family:' + comp.font + ';';
                    if (comp.color) widthStr += 'color:' + comp.color + ';';
                    if (comp.size) widthStr += 'font-size:' + comp.size + 'pt;';
                    var line = '';
                    var sh = 20, sh2=10;
                    var p1 = getStyle(".arSliderPicker");
                    if(p1) sh = parseInt(p1.style.height,10);
                    var p2 = getStyle(".arSliderBar");
                    if(p2) sh2 = parseInt(p2.style.height,10);
                    //var bpos = Math.round((sh / 2) - (sh2 / 2));
                    var needConv = false;
                    var fformat = comp.mytable.a_capt[comp.column].format;
                    // dont need to do this since we expect the date in original format
                    /*if ((comp.mytable.a_capt[comp.column].format.indexOf('q') == -1) &&
                        (comp.mytable.a_capt[comp.column].format.indexOf('m') == -1) &&
                        (comp.mytable.a_capt[comp.column].format.indexOf('y') == -1) &&
                        (comp.mytable.a_capt[comp.column].format.indexOf('d') == -1))
                        fformat = "(YYMD)";
                        */

                    if (comp.autoBound) {
                        min = max = comp.dataProvider[0][0];
                        for (i = 1; i < comp.dataProvider[0].length; i++) {
                            if (comp.dataProvider[0][i] < min) min = comp.dataProvider[0][i];
                            if (comp.dataProvider[0][i] > max) max = comp.dataProvider[0][i];
                        }
                        if(min == max) {
                            if(min>0) {
                                min = 0;
                            } else {
                                max = 0;
                            }
                        }
                    }

                    if (comp.defaultValues != null) {
                        if (comp.selectedMin == null) {
                            comp.selectedMin = comp.values[0];
                            needConv = true;
                            fformat = "(YYMD)";
                        }
                        if (comp.selectedMax == null)
                            if (comp.defaultValues.length > 1) {
                                comp.selectedMax = comp.values[1];
                            needConv = true;
                        }
                    }
                    if (comp.mytable.a_capt[comp.column].type == IBIDATE) {
                        if ((comp.selectedMin != null) && needConv)
                            comp.selectedMin = comp.ibiDateToJavaScriptDate(comp.selectedMin, fformat);
                        if ((comp.selectedMax != null) && needConv)
                            comp.selectedMax = comp.ibiDateToJavaScriptDate(comp.selectedMax, fformat);

                        // min = this.ibiDateToJavaScriptDate(min,this.mytable.a_capt[this.column].format);
                        min = comp.ibiDateToJavaScriptDate(min, "(YYMD)");
                        //max = this.ibiDateToJavaScriptDate(max,this.mytable.a_capt[this.column].format);
                        max = comp.ibiDateToJavaScriptDate(max, "(YYMD)");
                    } else if (comp.mytable.a_capt[comp.column].type == IBINUM) {
                        if (comp.selectedMin != null)
                            comp.selectedMin = ibiStd.ibiNumberToFormat(comp.selectedMin, comp.mytable.a_capt[comp.column].format);
                        if (comp.selectedMax != null)
                            comp.selectedMax = ibiStd.ibiNumberToFormat(comp.selectedMax, comp.mytable.a_capt[comp.column].format);
                    }

                    if (comp.selectedMin == null)
                        comp.selectedMin = min;
                    if (comp.selectedMax == null)
                        comp.selectedMax = max;

                    var sid = comp.type + '_' + comp.id + '-s';
                    var minS,maxS;
					var vP = 0;
                    var step = 1;
                    if (comp.selectedMin == null)
                        minS = min;
                    else
                        minS = comp.selectedMin;
                    if (comp.selectedMax == null)
                        maxS = max;
                    else
                        maxS = comp.selectedMax;
                    if (comp.mytable.a_capt[comp.column].type == IBIDATE) {
						minS = comp.javaScriptDateToIbiDate(min, comp.mytable.a_capt[comp.column].format,true);
						maxS = comp.javaScriptDateToIbiDate(max, comp.mytable.a_capt[comp.column].format,true);
                    } else if (comp.mytable.a_capt[comp.column].type == IBINUM) {
                        minS = ibiStd.ibiNumberToFormat(min, comp.mytable.a_capt[comp.column].format);
                        maxS = ibiStd.ibiNumberToFormat(max, comp.mytable.a_capt[comp.column].format);

                        if (comp.mytable.a_capt[comp.column].format.indexOf('.') > -1) {
                            var vformat = comp.mytable.a_capt[comp.column].format;
							vP = parseInt(vformat.substr(vformat.indexOf('.') + 1));
                            step = 1/Math.pow(10,vP);
                        }
                    }
                    if (comp.orientation == "vertical") {
                        line = '<div style="padding:10px;"><table cellspacing=0 cellpadding=0 width="100%">'+
                            '<tr><td rowspan="2"><div id="'+sid+'"><\/div><\/td>'+
                            '<td valign="top"><span id="'+sid+'_max">'+maxS+'<\/span><\/td><\/tr>'+
                            '<tr><td valign="bottom"><span id="'+sid+'_min">'+minS+'<\/span><\/td><\/tr>'+
                            '<\/table></div>';
                    } else {
                        line = '<div style="padding:10px;"><table cellspacing=0 cellpadding=0 width="100%">'+
                            '<tr><td align="left"><span id="'+sid+'_min">'+minS+'<\/span><\/td>';
                        if ((comp.filterCondition == 7) || (comp.filterCondition == 8))
                            line += '<td>&nbsp;<\/td><td align="right"><span id="'+sid+'_max">'+maxS+'<\/span><\/td>';
                        line += '<\/tr>'+
                            '<tr><td colspan="3"><div id="'+sid+'"><\/div><\/td><\/tr>'+
                            '<\/table></div>';
                    }
                    comp.objs.innerHTML = line;
					var stmin = min*1;
					var stmax = max*1;

					if(step < 1) {
                        var pw = Math.pow(10, vP);
						stmin = parseInt(stmin*pw,10)/pw;
						stmax = parseInt((stmax+step)*pw)/pw;
					}
                    sObj = {
                        'range': true,
						'min': stmin,
						'max': stmax,
                        'step':step,
                        'orientation': comp.orientation
                    };

                    if ((comp.filterCondition != 7) && (comp.filterCondition != 8)) {
                        sObj.range = false;
                        if ((comp.filterCondition == 3) || (comp.filterCondition == 5))
                            sObj.range = "max";
                        if ((comp.filterCondition == 4) || (comp.filterCondition == 6))
                            sObj.range = "min";
                        sObj.value = ((comp.selectedMin == null) ? min : comp.selectedMin);
                        comp.values = [((comp.selectedMin == null) ? min : comp.selectedMin)];
                        if (comp.mytable.a_capt[comp.column].type == IBIDATE) {
                            comp.values[0] = comp.javaScriptDateToIbiDate(comp.values[0], "IBIDATE");
                        }
                        sObj.slide = function(event,ui) {
                            var uid = event.target.id;
                            var pid = uid.substring(uid.indexOf('_')+1,uid.indexOf('-'));
                            ibiCompound.drawObjectsPtr[pid].valuesChanged(uid,ui.value);
                        };
                        sObj.change = function(event,ui) {
                            var uid = event.target.id;
                            var pid = uid.substring(uid.indexOf('_')+1,uid.indexOf('-'));
                            ibiCompound.drawObjectsPtr[pid].applyChange(uid,ui.value);
                        };
                    } else {
                        comp.values = [((comp.selectedMin == null) ? min : comp.selectedMin), ((comp.selectedMax == null) ? max : comp.selectedMax)];
                        sObj.values = [((comp.selectedMin == null) ? min : comp.selectedMin), ((comp.selectedMax == null) ? max : comp.selectedMax)];
                        if (comp.mytable.a_capt[comp.column].type == IBIDATE) {
                            comp.values[0] = comp.javaScriptDateToIbiDate(comp.values[0], "IBIDATE");
                            comp.values[1] = comp.javaScriptDateToIbiDate(comp.values[1], "IBIDATE");
                        }
                        sObj.slide = function(event,ui) {
                            var uid = event.target.id;
                            var pid = uid.substring(uid.indexOf('_')+1,uid.indexOf('-'));
                            ibiCompound.drawObjectsPtr[pid].valuesChanged(uid,ui.values[0],ui.values[1]);
                        };
                        sObj.change = function(event,ui) {
                            var uid = event.target.id;
                            var pid = uid.substring(uid.indexOf('_')+1,uid.indexOf('-'));
                            ibiCompound.drawObjectsPtr[pid].applyChange(uid,ui.values[0],ui.values[1]);
                        };
                    }
                    $('#'+sid).slider(sObj);
                    $('#'+sid).mouseout(function(){
                        var id = this.id.split("_");
                        id = id[1];
                        id = id.split("-");
                        id = id[0];
                        ibiCompound.hideIconBox(id);
                    });
                    $('#'+sid).mouseover(function(){
                        var id = this.id.split("_");
                        id = id[1];
                        id = id.split("-");
                        id = id[0];
                        ibiCompound.showIconBox(id);
                    });
                    comp.showSelectedValues(sid);
					comp.setInternalTitle();
                    comp.ready = true;
                    if(comp.updateCompleteFunc) {
                        var myObj = {
                            'id': comp.id,
                            'parentId': comp.parentId,
                            'title': comp.title,
                            'currentFilter': (comp.parentId ? ibiCompound.drawObjectsPtr[comp.parentId] : null)
                        };
                        comp.updateCompleteFunc(myObj);
                    }
                };

                if(this.column!=-1) {
                    if (this.mytable.a_cntl.cacheMode) {
                        var sv = this.mytable.cacheSortCondition;
                        if(this.mytable.cacheCol)
                            this.mytable.cacheCol[this.column] = null;
                        this.mytable.cacheSortCondition = "BY ";
                        if(this.aggType)
                            this.mytable.cacheSortCondition +=" TOTAL ";
                        if(this.aggType)
                            this.mytable.cacheSortCondition += this.aggType+".";
                        this.mytable.cacheSortCondition +=  this.aggColumn;
                    }
                    comp.displaySlider = displaySlider;
                    var cb = function(db) {
                        comp.dataProvider=db;
                        comp.displaySlider();
                    };
                    this.filter_datatype = this.mytable.a_capt[this.column].type;
                    this.filter_dataformat = this.mytable.a_capt[this.column].format;

                    this.dataProvider=this.mytable.getUniqValues(this.column,this.dataProvider,null,9999,false,ibiStd.mapFilterObjectCondition(this.filterCondition),this.aggType,bycol,true,async,cb);
                    if(this.mytable.a_cntl.cacheMode)
                        this.mytable.cacheSortCondition = sv;
                    if(this.dataProvider == "wait") {

                    }
                } else return(false);
                if(this.dataProvider != "wait")
                    displaySlider();
            }
        }

    };
}
