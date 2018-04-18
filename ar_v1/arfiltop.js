/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arfiltop.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170525 1101 wjf 191515 Create unified filter component to replace old style filter
*
* END %&$
*-------------------------------------------------------------------*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arfiltop"]="$Revision: 20170613.1135 $";
//  Container for filter options filter,highlight,show at top
function arFilterOptions(filter)
{

    /* options to display

     */
    this.filter = filter;
    this.container = null;
    this.showOptions = function(div) {
        var dstr='';
        return;
        var obj = document.getElementById(div);
        if(obj) {
            if(this.container == null) {
                this.container = document.createElement("div");
                obj.appendChild(this.container);
            }
            if(obj.offsetHeight != this.container.parentNode.offsetHeight)
                obj.appendChild(this.container);
            var dstyle = "border:1px solid;width:100px;height:"+obj.offsetHeight+"px;overflow:auto;position:absolute;top:0px;left:"+(obj.offsetWidth-100)+"px;background-color:white;";
            if(typeof this.container.setAttribute != "undefined")
                this.container.setAttribute('style',dstyle);
            else
                this.container.style.setAttribute('cssText',dstyle);
            if(this.filter.filterTarget)
                dstr += 'filterTarget: '+this.filter.filterTarget+'<br>';
            if(this.filter.filterCondition)
                dstr += 'filterCondition: '+this.filter.filterCondition+'<br>';
            if(this.filter.dataReport)
                dstr += 'dataReport: '+this.filter.dataReport+'<br>';
            this.container.innerHTML = dstr;
        }
    };
}
