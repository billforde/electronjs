/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/artree.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 161116 0754 wjf 180271 Unable to scroll to bottom of list of values in the runtime
* 161031 1453 ppl 174119 Add new Tree Filter control.
* 160610 1256 hms 180534 Remove tab characters from source files
* 160609 1245 ppl 174119 Add new Tree Filter control.
* 160607 1430 ppl 174119 Add new Tree Filter control.
*
* END %&$
*-------------------------------------------------------------------*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["artree"]="$Revision: 20170613.1135 $";
function artree(xarg,yarg,widtharg,heightarg,orientation)
{
    ibiCompound.setFilterFunctions(this);
    this.x=xarg;
    this.y=yarg;
    this.active = false;
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
    this.filterOnloadRan = false;
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

	this.isCheckbox = false;

    this.autoBound = true;
    this.dragObj = new Object();
    this.values = [];
    this.type = "tree";
    this.column=-1;
    if(this.orientation=="vertical") this.type = "vslider";

    this.buildComponent = function() {
        var formstr= '<form action="javascript:nop();" id="'+this.type+this.id+'"  style="margin:0px"><div style="position:relative;top:0px;left:0px;" id="'+this.type+'_d'+this.id+'"><\/div><\/form>';
        return this.c_buildComponent(formstr);
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
        }
        if(this.objs) {
            this.mytable = this.getTable(this.dataReport);
            if(this.mytable) {
                var nodesCount = 0;
                var displayTree = function() {
                    var buildTree = function(tree) { //process the data provider and build the tree object recursively
                        var newTree = [];
                        var obj;
                        for(var i = 0; i<tree.length; i++){
                            obj = {
                                "id":nodesCount+"", "text": tree[i].display,
								"state": {"opened": true, "selected": false},
								"plugins": [ "checkbox" ]
                            };

                            //dataProviderValue is the right most node value ==>
                            //in [country by car] case, [England,Jaquar] is the dataProviderValue
                            //and England node doesn't have the dataProviderValue.
                            if (typeof tree[i].dataProviderValue != "undefined"){
                                //selecting all the values to be returned when a node is selected ==>
                                //this is for supporting ARFILTER_ACTIVE from the focexec
                                obj.dpValue = tree[i].dataProviderValue;
                                if (comp.filterOnload && !comp.filterOnloadRan && comp.defaultValues.length)
                                    if (inarray(comp.defaultValues, obj.dpValue))
                                        obj.state.selected = true;
                            }
                            nodesCount++;
                            //recursive call buildTree from the data provider in tree format
                            if (tree[i].children.length)
                                obj.children = buildTree(tree[i].children);
                            newTree[newTree.length] = obj;

                        }
                        return newTree;
                    }; //buildTree

                    var sid = comp.type + '_' + comp.id + '-s';

                    line = '<div style="padding:10px;" id="'+sid+'"></div>';
                    comp.objs.innerHTML = line;

                    //Create the initial obj with the core data
                    var obj = {
                        'core': {
                            'data':null,
                            'plugins': ['state', 'dnd']
                        }
                    };
					if(this.isCheckbox) {
						obj.checkbox = {'keep_selected_style' : false};
						obj.plugins = ["checkbox"];
					}

                    //setting the tree structure to the obj
                    obj.core.data = buildTree(comp.dataProvider[arConstants.DP_TREE]);
                    comp.root = obj.core.data;
                    var mytree = $('#'+sid).jstree(obj); //use the obj that we just create to create a tree.

                    //onchanged handling
                    $('#'+sid).on("changed.jstree", function (e, mydata) {
                        if (mydata.action != "select_node" && mydata.action != "deselect_node")
                            return;

                        //turn on console for debug only
                        //console.log("Selected node = "+ mydata.node.text);

                        //Select or deselect the children of the node that was clicked on
                        if(typeof comp.selectedOnce == "undefined")
                            comp.selectedOnce = mydata.node.id; //initialize selecteOnce by

                        //Highlight or unhighlight ==> Select of deselect all the children of a selected parent node
                        var childrenElms = mydata.node.children;
                        if (childrenElms.length){
                            for (var i=0; i<childrenElms.length; i++){
                                //$('#'+sid).jstree("select_node", childrenElms[i]);
                                //when this change apply, it will triger the changed.jstree event again
                                $('#'+sid).jstree(mydata.action, childrenElms[i]);
                            }
                        }
						//Since the changed event is triggered by the children of the selected note, we want
                        //to apply the filter only when the selected id is the one that was clicked,
                        //not on the children that we highlight
                        if (comp.selectedOnce == mydata.node.id) {
                            comp.values = [];
                            var $selectedElms = $('#' + sid).jstree("get_selected", true);
                            var $selectedElmsIds = [];

                            //Display all the selected notes ==> console just for debug
                            //console.log("The selected nodes are");
                            $.each($selectedElms, function showSelected() {
                                $selectedElmsIds.push(this.id);
                                //console.log("elm: " + this.text + ", id: " + this.id +", dpValue: " + this.original.dpValue);
                                comp.values.push(this.original.dpValue);
                            });
                            //console.log("\n");

                            delete comp.selectedOnce;
                            comp.setInternalTitle();

                            //Apply the filter
                            comp.applyFilter();
                        }
                    });
                };

                this.displayControl = displayTree; //assignment
                this.processDataProvider(async);//process the data provider

            }
        }

    };
}
