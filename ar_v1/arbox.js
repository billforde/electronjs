/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arbox.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170614 0749 wjf 191515 Create unified filter component to replace old style filter
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170522 1314 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170522 0931 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 170321 1019 wjf 168489 NFR:Filtering in Active Reports doesn't update totals
* 160610 1256 hms 180534 Remove tab characters from source files
* 160314 1513 wjf 178339 BUE: Drill up after drill down removes options from child f
* 151209 1246 wjf 174519 AHTML: "Exclude from Chart" is missing in Bubble chart
* 140903 1837 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.10 $
//$Log: arbox.js,v $
//Revision 1.10  2014/04/16 13:33:33  William_Forde
//[p134795] save a reference to the TD object so that it can be updated later.
//
//Revision 1.9  2014/02/05 17:50:24  William_Forde
//[p151491][>branch8100] If content contains more that one object and the object dimensions is 100% we need to adjust the percentage.
//
//Revision 1.8  2014/01/14 16:28:10  William_Forde
//[p151491] ignore case for align.
//
//Revision 1.7  2013/12/20 06:49:01  William_Forde
//[p151491] If Box contains more than one component and one of the components have width=100%, dont set it, so that it only takes up the space that is left over.
//
//Revision 1.6  2013/11/22 16:12:56  William_Forde
//[p151491] Fix issue with charts not resize in HBOX/VBOX when the browser changes size.
//
//Revision 1.5  2013/10/23 18:06:50  William_Forde
//[p151491] fix javascript error.
//
//Revision 1.4  2013/10/15 13:32:47  William_Forde
//[p151491]  Ignore spaces or case in "CONTENT" of vbox/hbox
//
//Revision 1.3  2013/10/03 13:44:16  William_Forde
//[p151491] Use TABLE instead of DIV because div's had too many issues with borders.
//
//Revision 1.2  2013/08/01 15:38:20  William_Forde
//[p151491] Layout HBOX/VBOX with just divs.  Due to border on some divs, they need to be wrapped by a "clean" div, since 100% with and height doesnt include the border.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arbox"]="$Revision: 20170614.0749 $";
function arbox(xarg,yarg,widtharg,heightarg)
{
    this.x=xarg;
    this.y=yarg;
    Object.defineProperty(this, 'width', {
        set: function(w) {
            this._width = w+'';
        },
        get: function() {
            return this._width;
        }
    });
    this.width=widtharg;
    Object.defineProperty(this, 'height', {
        set: function(w) {
            this._height = w+'';
        },
        get: function() {
            return this._height;
        }
    });
    this.height=heightarg;
    this.overflow = "hidden";
    this.id = null;
    this.visible=true;
	this.border = "0px";
    this.children = [];
    this.divName = '';
    this.color = null;
    this.font = null;
    this.backcolor = null;
    Object.defineProperty(this, 'align', {
        set: function(w) {
            this._align = w;
        },
        get: function() {
            return this._align;
        }
    });
    Object.defineProperty(this, 'orientation', {
        set: function(w) {
            this._align = w;
        },
        get: function() {
            return this._align;
        }
    });
    this.align = "horizontal";
    this.content = null;
    this.componentType = 'box';
    this.domObj = null;
    this.innerDomObj = null;
    this.added = false;
    this.isRootParent = null;
    this.rows = [];
	this.type = "boxContainer";
    this.columns = [];
	this.resizeCallBack = null;

	this.resizeBox = function(w,h)
    {
        ibiCompound.adjustBox(this,w,h);

    };

    this.removeElement = function(tobj) {
        if((typeof(tobj.id)=="undefined")||( tobj.id.substr(0,14)!="ibi$container$")){
            tobj.parentNode.parentNode.removeChild(tobj.parentNode);
        }
        tobj.parentNode.removeChild(tobj);
    };

	this.addElement = function(tobji,nodei)
    {
	    var tobj = tobji;
	    var node = nodei;
	    if(typeof tobji.domObj != "undefined") {
	        tobj = tobji.domObj;
	        node = tobji;
        }
        var p;
        var dobjx;
        var po = tobj.parentNode;

        if(po) {
            if(po.parentNode.id == "ibi$dummy$div")
                po.parentNode.removeChild(po);
            po.removeChild(tobj);
        }

        if((typeof(tobj.id)=="undefined")||( tobj.id.substr(0,14)!="ibi$container$")) {
            var obj = {'type':"boxDummyHolder","node":dobjx};
            obj.width = tobj.style.width;
            obj.height = tobj.style.height;
            if(typeof tobj.style.float != "undefined")
                obj.float = tobj.style.float;

            dobjx = document.createElement('div');
            this.columns[this.columns.length] = dobjx;
            if(this.align.toLowerCase() == "horizontal") {
                if(this.content && (tobj.style.width == "100%") && (this.content.split(',').length > 1)) {
                    p = 100/this.content.split(',').length;
                    dobjx.style.width = p+"%";
                } else
                    dobjx.style.width = tobj.style.width;
                if(typeof this.float != "undefined")
                    dobjx.style.float = this.float;
                else
                if(obj.float)
                    dobjx.style.float = obj.float;
                else
                dobjx.style.float = "left";
                dobjx.vAlign="top";
                dobjx.style.verticalAlign="top";
                //this.innerDomObj.style.display = "inline-flex";
            }
            else
            if(this.align.toLowerCase() == "vertical") {
				dobjx.style.width = "100%";
                dobjx.style.horizAlign="left";
                this.innerDomObj.style.display = "block";
			}
            dobjx.style.height = this.innerDomObj.height;
            this.innerDomObj.appendChild(dobjx);

            tobj.style.position = "static";
            tobj.style.overflow = "hidden";
            tobj.style.width = "100%";
            tobj.style.height = "100%";
            //tobj.style.border = "none";
            tobj.style.left = null;
            tobj.style.top = null;
            dobjx.appendChild(tobj);
            if(typeof node != "undefined") {
                this.children[this.children.length] = obj;
            }
            return dobjx;
        } else {
            this.columns[this.columns.length] = tobj;
            this.innerDomObj.appendChild(tobj);
            if(typeof node != "undefined") {
                this.children[this.children.length] = node;
            }
            return this.innerDomObj;
        }

    };
        
    this.refreshChildren = function()
    {
        if(this.children.length) {
            for(var j=0; j < this.children.length; j++) {
                this.children[j].refresh();
                this.children[j].refreshChildren();
            }
        }
    };

    
    this.buildComponent = function() {
        this.domObj = document.createElement('div');
        this.domObj.setAttribute('id','ibi$container$root$'+this.id);
        if(b_ie) this.domObj.style.setAttribute('cssText', 'width:100%;height:100%;overflow:'+this.overflow+';margin:0px;border:0px;padding:0px;', 0);
        else this.domObj.setAttribute('style','width:100%;height:100%;overflow:'+this.overflow+';margin:0px;border:0px;padding:0px;');

        //this.domObjTable = document.createElement('table');
        //this.domObjTable.setAttribute('id','ibi$container$'+this.id);
        //if(b_ie) this.domObjTable.style.setAttribute('cssText', 'margin:0px;padding:0px;width:'+this.width+';height:'+this.height+';', 0);
        //else this.domObjTable.setAttribute('style','margin:0px;padding:0px;width:'+this.width+';height:'+this.height+';');
        
        //this.domObjTable.cellSpacing = 0;
        //this.domObjTable.cellPadding = 0;
        //this.domObjTable.border = 0;

        //this.domObj.appendChild(this.domObjTable);
        this.innerDomObj = document.createElement('div');
        this.innerDomObj.setAttribute('id','ibi$container$inner$'+this.id);
        if(b_ie) this.innerDomObj.style.setAttribute('cssText', 'width:100%;height:100%;overflow:'+this.overflow+';position:relative;margin:0px;border:0px;padding:0px;', 0);
        else this.innerDomObj.setAttribute('style','width:100%;height:100%;overflow:'+this.overflow+';position:relative;margin:0px;border:0px;padding:0px;');

        this.domObj.appendChild(this.innerDomObj);
        return this.domObj;
    };

    this.refresh = function() {
    };
}
