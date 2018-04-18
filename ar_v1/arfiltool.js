/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arfiltool.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 170719 1504 wjf 191515 Create unified filter component to replace old style filter
* 170630 1104 wjf 191515 Create unified filter component to replace old style filter
* 170629 1107 wjf 191515 Create unified filter component to replace old style filter
* 170628 1039 wjf 191515 Create unified filter component to replace old style filter
* 170622 1139 wjf 191515 Create unified filter component to replace old style filter
* 170622 0958 wjf 191515 Create unified filter component to replace old style filter
* 170620 1343 wjf 191515 Create unified filter component to replace old style filter
* 170620 0946 wjf 191515 Create unified filter component to replace old style filter
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170614 0934 wjf 191515 Create unified filter component to replace old style filter
* 170614 0749 wjf 191515 Create unified filter component to replace old style filter
* 170613 1135 wjf 191515 Create unified filter component to replace old style filter
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 170525 1101 wjf 191515 Create unified filter component to replace old style filter
*
* END %&$
*-------------------------------------------------------------------*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arfiltool"]="$Revision: 20170719.1504 $";
(function() {

    if (typeof(window.ibiFilterTool) !== 'undefined') {
        return;
    }
    window.ibiFilterTool = {
        win: null,
        currentReport: null,
        rootObj:null,
        columnTree: null,
        filterTabs: [],
        currentTab: -1,
        opened: false,
        showThisMenu: false,
        rendered: false,
        save_t_num: null,
        accordFilterList:[],
        menuContainer: null,
        tabCount: 0,
        addFilter: AddFilter,
		showFilterTool: ShowFilterTool,
        createFilterTabs: createFilterTabs,
        showFilterTab: showFilterTab,
        showColumns: showColumns,
        getTab: getTab,
        getTabByTarget: getTabByTarget,
        setFilterTabsTitle: setFilterTabsTitle,
        removeAllGlow: removeAllGlow,
        showMenu: showMenu,
        closeMenu: closeMenu,
        groupFilters: groupFilters,
        getFilterCheckedCount: getFilterCheckedCount,
        getFilterCheckedIds: getFilterCheckedIds,
        getFilterIds: getFilterIds,
        createGroupUsing: createGroupUsing,
        clearSelections: clearSelections,
        enableFilter: enableFilter,
        generateAccordHeading: generateAccordHeading,
        updateTabHeadings: updateTabHeadings
	};


	function enableFilter(tab,id,disabled) {
        var filter = ibiCompound.drawObjectsPtr[id];
        var ids = ibiFilterTool.getFilterCheckedIds(tab);
        for(var i=0; i < ids.length; i++)
            ibiCompound.drawObjectsPtr[ids[i]].disabled = disabled;
        if(filter) {
            filter.disabled = disabled;
            ibiFilterTool.updateTabHeadings(tab);
            filter.applyFilter();
        }
    }

	function createGroupUsing(tab) {

    }

    function getFilterCheckedIds(tab){
        var ids = [];
        if(ibiCompound.hiddenGlobalFilters.length) {
            for(var i=0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                var ftab = ibiFilterTool.getTabByTarget(ibiCompound.hiddenGlobalFilters[i].filterTarget);
                if(ftab != tab)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].markedForSelection)
                    ids[ids.length] = ibiCompound.hiddenGlobalFilters[i].id;
            }
        }
        return ids;
    }

    function getFilterIds(tab){
        var ids = [];
        if(ibiCompound.hiddenGlobalFilters.length) {
            for(var i=0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                var ftab = ibiFilterTool.getTabByTarget(ibiCompound.hiddenGlobalFilters[i].filterTarget);
                if(ftab != tab)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                ids[ids.length] = ibiCompound.hiddenGlobalFilters[i].id;
            }
        }
        return ids;
    }


    function clearSelections(tab) {
        var bids = ibiFilterTool.getFilterIds(tab);
        for(var i = 0 ; i < bids.length; i++) {
            domObjIcon = document.getElementById("ft_checkBox_group_"+bids[i]);
            domObjIcon.innerHTML = "";
        }
    }
	function groupFilters(id) {
	    var filter = ibiCompound.drawObjectsPtr[id];
	    var i;
        var domObjIcon;
	    if(filter) {
	        var tab = ibiFilterTool.getTabByTarget(filter.filterTarget);
            filter.markedForSelection = !filter.markedForSelection;
            var domObj = document.getElementById("ft_checkBox_"+id);

            ibiFilterTool.clearSelections(tab);
            if(ibiFilterTool.getFilterCheckedCount(tab)>1) {
                var ids = ibiFilterTool.getFilterCheckedIds(tab);
                for(i = 0 ; i < ids.length; i++) {
                    domObjIcon = document.getElementById("ft_checkBox_group_"+ids[i]);
                    domObjIcon.innerHTML = '<span title="Create Group" onclick="ibiFilterTool.createGroupUsing('+tab+')">'+ibiSkin.sumicon+'<\/span>';;
                }
            }
            window.setTimeout(function(){
                domObj.checked = filter.markedForSelection;
            },0);
        }
        return true;
    }

	function showMenu(e,data) {
        var MI_FT = [];
        var tn = 0;
        MI_FT[0] = ["&nbsp;",null, null];
        if(data.action != "select_node")
            return;

	    if(this.menuContainer == null) {
	        this.menuContainer = document.createElement("div");
	        this.menuContainer.id = "filtool_menu";
	        this.menuContainer.style.zIndex = 9999;
	        this.menuContainer.style.overflow = "visible";
            this.menuContainer.style.position = "absolute";
            pwn[this.win].dobj_b.appendChild(this.menuContainer);
        }
        this.menuContainer.style.display = "none";
        if(data.node.data) {
            var field = data.node.data.qualname;
            var offsetTop = pwn[this.win].dobj_t.offsetHeight+10;
            var offsetLeft = 40;
            this.menuContainer.style.left = (data.event.target.offsetLeft+offsetLeft)+"px";
            this.menuContainer.style.top = (data.event.target.offsetTop+offsetTop)+"px";
            this.menuContainer.innerHTML = "";
            tn = data.node.data.originalTable;
            var pos = MI_FT[0].length;
            MI_FT[0][pos] = [["Operator",null,null]];
            var spot = 3;
            for (j = 0; j < a_filt_types.length; j++) {
                MI_FT[0][pos][spot++] = [[a_filt_types[j][0]],null,{'ocv':'hlgv','oc':'ibiFilterTool.addFilter('+tn+',\''+field+'\','+a_filt_types[j][1]+')'}];
            }

            ibiFilterTool.showThisMenu = true;
            window.setTimeout(function () {
                if(ibiFilterTool.showThisMenu) {
                    ibiFilterTool.menuContainer.style.display = "block";
                    if (ibiFilterTool.menuContainer) {
                        var MP_CFT_copy = ibiStd.copyObject(MP_CFT);
                        MP_CFT_copy[0].width=80;
                        MP_CFT_copy[1].width=80;
                        MP_CFT_copy[1].left=50;
                        var MDmenu = ibiMenu.Menu(MI_FT, MP_CFT_copy, null, mytable, null, null, ibiFilterTool.menuContainer.id);
                        ibiMenu.Showmenu(null, tn, MDmenu, MDmenu, true, 0);
                    }
                }
            },200);
        }

    }

    function closeMenu() {
	    if(this.menuContainer) {
            this.menuContainer.style.display = "none";
            this.menuContainer.innerHTML = '';
        }
        this.showThisMenu = false;

    }

	function AddFilter(tn,field,cond,values,global) {
        var mytable = getMyTable(tn);
        var fcond = arConstants.FILTER_IN;
        var fval = [[ibiMsgStr["all"]]];

	    if(!ibiFilterTool.opened)
	        ibiFilterTool.showFilterTool(tn,false,true);
        if(typeof cond != "undefined")
            fcond = cond;
        if(typeof values != "undefined")
            fval = values;
        if(mytable) {
	        ibiFilterTool.closeMenu();
            var target = mytable.table_name;
            if(global || typeof global == "undefined") {
                target = "*";
            }
            var tab = ibiFilterTool.getTabByTarget(target);
            var filterObj =  ibiChart.addFilter(mytable.id,[field],fcond,fval,null,undefined,target);
            ibiFilterTool.filterTabs[tab].currentFilter = filterObj;
           filterObj.obj.showFilterOptions = true;
           filterObj.obj.internalTitleUpdated = function(){
               var obj = document.getElementById(filterObj.obj.eFilterTitleId);
               if(obj)
                   obj.innerHTML = filterObj.obj.internalTitle;
           };
            ibiFilterTool.setFilterTabsTitle();
            ibiFilterTool.showFilterTab(tab);
        }

    }

	function ShowFilterTool(tableNumber,refresh,noOpen) {
	    var t_num = tableNumber;
        var objName = "ft_fieldtoolt";
        var w = 600;
        var h = 500;

        if(ibiFilterTool.win == null) {
            ibiFilterTool.win = getfreewin();
        }
        win = pwn[ibiFilterTool.win];
        win.closeCallback = function() {
            ibiFilterTool.rendered = false;
            ibiFilterTool.win = null;
            this.tabsContainer = null;
            ibiFilterTool.columnTree = null;
            ibiFilterTool.removeAllGlow();
            ibiFilterTool.menuContainer = null;
        };

        if(win.height > -1)
            h = win.height;
        if(win.width > -1)
            w = win.width;
        if(ibiFilterTool.save_t_num != tableNumber) {
            this.rendered = false;
        }
        if(refresh && t_num == null) {
            t_num = ibiFilterTool.save_t_num;
        } else {
            ibiFilterTool.save_t_num = t_num;
        }

        var mytable = getMyTable(ibiFilterTool.save_t_num);
        ibiFilterTool.opened = true;

        if(this.rendered) {
            this.setFilterTabsTitle();
            if( ibiCompound.hiddenGlobalFilters.length != this.filterCount) {
                if(!mytable)
                    this.currentTab = 0;
                //this.filterObj.innerHTML = showAllHiddenFilters();
                this.showFilterTab(this.currentTab);
            } else
                setAccordTab();
        } else {
            this.tabsContainer = null;
        setwin(ibiFilterTool.win,"filtool",-1, "general", "Filters",{"width":w,"height":h});
            buildwin(ibiFilterTool.win, "Filters", null, true, null, {
                "width": w,
                "height": h
            }, false, "1px solid #ccddee");

        pwn[ibiFilterTool.win].dobj_b.innerHTML = '';

        var cobj = document.createElement("div");
        cobj.id = "ft_root";
        pwn[ibiFilterTool.win].dobj_b.appendChild(cobj);

        var newObj = new arbox(0,0,"100%","100%");
        newObj.id = objName+"_newField";
        newObj.align = "horizontal";
        newObj.domObj = newObj.buildComponent();
        newObj.resizeCallBack = function () {
            ibiCompound.handleResizeReal();
        };
        cobj.appendChild(newObj.domObj);

        var newObjf = new arbox();
        newObjf.id = objName+"_fft";
        newObjf.align = "vertical";
        newObjf.width = "200px";
        newObjf.height = "100%";
        newObjf.domObj = newObjf.buildComponent();
        newObj.addElement(newObjf);

        var fieldNameObj = document.createElement("div");
        fieldNameObj.id = "ft_columnList";
        fieldNameObj.style.width="100%";
        fieldNameObj.style.height=h+"px";
            this.columnContainer = fieldNameObj;
        newObjf.addElement(fieldNameObj,fieldNameObj);

        var newObj2 = new arbox();
        newObj2.id = objName+"_ft";
        newObj2.align = "vertical";
        newObj2.width = "100%";
        newObj2.height = "100%";
        newObj2.domObj = newObj2.buildComponent();
        newObj.addElement(newObj2);
        newObj2.resizeCallBack = function (e) {
                if(ibiFilterTool.tabsContainer) {
                    ibiFilterTool.tabsContainer.style.height = (e.height - 10) + "px";

                try {
                        $("#filterTabs").tabs("refresh");
                        ibiFilterTool.showFilterTab(ibiFilterTool.currentTab);
                } catch (e) {
                }
            }
        };

            this.createFilterTabs(newObj2);

            if(refresh)
                this.showFilterTab(this.currentTab);
            else
            if (mytable)
                this.showFilterTab(this.getTab(mytable.id));
            else
                this.showFilterTab(0);

            if (mytable)
                this.showColumns(mytable);
            else
                this.showColumns(-1);

            pwn[ibiFilterTool.win].rootObj = newObj;
        }
        this.tabsContainer.style.height = (h-10)+"px";

        pwn[ibiFilterTool.win].callback = function(){
            win = pwn[ibiFilterTool.win];
            var soverflow = win.dobj_b.style.overflow;
            win.dobj_b.style.overflow = "hidden";
            window.setTimeout(function() {
                var w = win.dobj_b.offsetWidth;
                var h = win.dobj_b.offsetHeight;
                win.dobj_b.style.overflow = soverflow;
            //ibiCompound.adjustBox(pwn[ibiFilterTool.win].rootObj,w,h);
            pwn[ibiFilterTool.win].rootObj.resizeBox(w,h);
            },0);
        };
        pwn[ibiFilterTool.win].callback();
        this.rendered = true;
        this.filterCount =  ibiCompound.hiddenGlobalFilters.length;
        if(!noOpen)
        maxwin(ibiFilterTool.win,true);
    }

    function showFilterTab(tab) {
        this.filterTabs[tab].container.innerHTML=showAllHiddenFilters(tab);
        try {
            $("#filterTabs").tabs("option", "active", tab);
        } catch(e) {}
        this.currentTab = tab;
        window.setTimeout(function () {
            //$("#ft_accord").accordion();
            var obj = document.getElementById("filt_tab_"+tab);
            var obj2 = document.getElementById("ft_accord_"+tab);
            if(obj && obj2)
                obj2.style.height = obj.offsetHeight-10;
            $("#ft_accord_"+tab).accordion({
                heightStyle: "fill",
                activate: function (event, ui) {
                    var tab = ibiFilterTool.currentTab;
                    var u = ui.newHeader.context.id.split("accord_"+tab+"_");
                    ibiFilterTool.filterTabs[tab].currentAccordTab = u[1]*1;
                    //ibiFilterTool.filterTabs[tab].currentFilter = wjf;
                    ibiCompound.handleResizeReal();
                }
            });
            $("#ft_accord_"+tab).accordion("option", "active", ibiFilterTool.filterTabs[ibiFilterTool.currentTab].currentAccordTab);
            for (var i = 0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                ibiCompound.hiddenGlobalFilters[i].objs = null;
                ibiCompound.hiddenGlobalFilters[i].refresh();
            }

            ibiFilterTool.removeAllGlow();

            if(ibiFilterTool.filterTabs[tab].mytable) {
                var mytable = ibiFilterTool.filterTabs[tab].mytable;
                if(mytable.maintable.wbody.childNodes.length)
                    mytable.maintable.wbody.childNodes[0].classList.add("ibiGlowReport");
                ibiCompound.Showlayout(mytable.a_cntl.table_div.layout,false);
                window.setTimeout(function(){
                    ibiCompound.DoAnyTrans();
        }, 0);
    }
        }, 0);
    }

    function removeAllGlow() {
        for(var i=1; i < ibiFilterTool.filterTabs.length; i++)
            if(ibiFilterTool.filterTabs[i].mytable)
                if(ibiFilterTool.filterTabs[i].mytable.maintable.wbody.childNodes.length)
                    ibiFilterTool.filterTabs[i].mytable.maintable.wbody.childNodes[0].classList.remove("ibiGlowReport");
    }

    function getTab(id) {
	    for(var i=0; i < this.filterTabs.length;i++)
	        if(this.filterTabs[i].id == id)
	            return i;
	    return -1;
    }

    function getTabByTarget(target) {
        for(var i=0; i < this.filterTabs.length;i++)
            if(this.filterTabs[i].target == target)
                return i;
        return -1;
    }

    function createFilterTabs(boxContainer) {
	    var i,ii;
	    var b = "";
        var baseTag = document.getElementsByTagName("base")[0];
        var existingBaseHref = null;
        if(baseTag) {
            existingBaseHref = baseTag.href;
            baseTag.href = "";
            //do not change.  href value will have the fully qualified url, and not BLANK!!!
            b = baseTag.href;
        }

        this.tabCount = 0;
	    if(this.tabsContainer == null) {
            this.tabsContainer = document.createElement("div");
            this.tabsContainer.style.width = "100%";
            this.tabsContainer.setAttribute("id", "filterTabs");
            this.tabs = document.createElement("ul");
            this.tabsContainer.appendChild(this.tabs);
            boxContainer.addElement(this.tabsContainer,this.tabContainer);
        }
	    this.filterTabs[0] = {
	        "id": -1,
            "currentAccordTab":-1,
	        "tab":document.createElement("li"),
            "currentFilter": null,
            "target":"*",
            "filterCount":0,
            "tabLabel":document.createElement("a"),
	        "container":document.createElement("div")
        };
	    this.tabs.appendChild(this.filterTabs[0].tab);
        this.filterTabs[0].tab.appendChild(this.filterTabs[0].tabLabel);
        this.tabsContainer.appendChild(this.filterTabs[0].container);
        this.filterTabs[0].tabLabel.innerHTML = "global";
        this.filterTabs[0].tabLabel.setAttribute("href",b+"#filt_tab_0");
        this.filterTabs[0].container.setAttribute("id","filt_tab_0");
        ii=0;
        this.tabCount++;
        if(reportCount()>1)
        for(i=0; i < MyTable.length; i++) {
            if(MyTable[i].a_cntl.table_div)
                if(MyTable[i].a_cntl.table_div.hidden)
                    continue;
            if(MyTable[i].deleted)
                continue;
            if(MyTable[i].isRollUp)
                continue;
            ii++;
            this.filterTabs[ii] = {
                "id":MyTable[i].id,
                "tab":document.createElement("li"),
                "tabLabel":document.createElement("a"),
                "target":MyTable[i].table_name,
                "currentAccordTab":-1,
                "currentFilter": null,
                "filterCount":0,
                "container":document.createElement("div")
            };
            this.tabs.appendChild(this.filterTabs[ii].tab);
            this.filterTabs[ii].tab.appendChild(this.filterTabs[ii].tabLabel);
            this.tabsContainer.appendChild(this.filterTabs[ii].container);
            this.filterTabs[ii].tabLabel.innerHTML = ii+'';
            this.filterTabs[ii].tabLabel.setAttribute("href",b+"#filt_tab_"+ii);
            this.filterTabs[ii].container.setAttribute("id","filt_tab_"+ii);
            this.filterTabs[ii].mytable = MyTable[i];
            this.tabCount++;
        }
        if(existingBaseHref)
            baseTag.href = existingBaseHref;
        if(this.tabCount == 1) {
            this.filterTabs[0].tabLabel.innerHTML = "Report";
        }
        this.setFilterTabsTitle();
        window.setTimeout(function () {
            //$("#ft_accord").accordion();
            $("#filterTabs").tabs({
                heightStyle:"fill",
                active: ibiFilterTool.currentTab,
                activate: function (event, ui) {
                    var u = ui.newPanel.selector.split("#filt_tab_");
                    var tab = u[1]*1;
                    ibiFilterTool.showFilterTab(tab);
                    if (ibiFilterTool.filterTabs[ibiFilterTool.currentTab].mytable)
                        ibiFilterTool.showColumns(ibiFilterTool.filterTabs[ibiFilterTool.currentTab].mytable);
                    else
                        ibiFilterTool.showColumns(-1);
                    ibiCompound.handleResizeReal();
                }
            });
        },0);
    }

    function reportCount(){
	    var count = 0;
        for(var i=0; i < MyTable.length; i++) {
            if (MyTable[i].a_cntl.table_div)
                if (MyTable[i].a_cntl.table_div.hidden)
                    continue;
            if (MyTable[i].deleted)
                continue;
            if (MyTable[i].isRollUp)
                continue;
            count++;
        }
        return count;
    }

    function setFilterTabsTitle(){
	    var i;
        for(i=0; i < this.filterTabs.length; i++) {
            this.filterTabs[i].filterCount = 0;
        }
        getFilterCount();
        this.filterTabs[0].tabLabel.innerHTML = "Global";
        if(this.tabCount == 1)
            this.filterTabs[0].tabLabel.innerHTML = "Report";
        if(this.filterTabs[0].filterCount)
            this.filterTabs[0].tabLabel.innerHTML+="("+this.filterTabs[0].filterCount+")";
        for(i=1; i < this.filterTabs.length; i++) {
            this.filterTabs[i].tabLabel.innerHTML = this.filterTabs[i].target;
            if(this.filterTabs[i].filterCount)
                this.filterTabs[i].tabLabel.innerHTML+="("+this.filterTabs[i].filterCount+")";
        }
    }

    function getFilterCount(){
        if(ibiCompound.hiddenGlobalFilters.length) {
            for(var i=0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                var tab = ibiFilterTool.getTabByTarget(ibiCompound.hiddenGlobalFilters[i].filterTarget);
                if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                ibiFilterTool.filterTabs[tab].filterCount++;
            }
        }
    }

    function getFilterCheckedCount(tab){
        var count = 0;
        if(ibiCompound.hiddenGlobalFilters.length) {
            for(var i=0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                var ftab = ibiFilterTool.getTabByTarget(ibiCompound.hiddenGlobalFilters[i].filterTarget);
                if(ftab != tab)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                if(ibiCompound.hiddenGlobalFilters[i].markedForSelection)
                    count++;
            }
        }
        return count;
    }

    function generateAccordHeading(tab,filter) {
        var str = '';
        var filter_checked = ibiFilterTool.getFilterCheckedIds(tab);

        str += '<table cellspacing="0" cellpadding="0" style="padding: 0px; margin: 0px"><tr>';

        str += '<td><form></form><span style="text-align:center;cursor:pointer;" title="Select">';
        str += '<input id="ft_checkBox_'+filter.id+'" type="checkbox" onclick="ibiFilterTool.groupFilters(\''+filter.id+'\')"';
        if(filter.markedForSelection)
            str += " checked ";
        str += '>';
        str += '<\/span></form><\/td>';

        str += '<td>';
        str += '<span id="ft_checkBox_group_'+filter.id+'">';
        if(filter_checked.length>1)
            str += '<span title="Create Group" onclick="ibiFilterTool.createGroupUsing('+tab+')">'+ibiSkin.sumicon+'<\/span>';
        str += '<\/span>';
        str += '<\/td>';

        str += '<td>';
        str += '<span id="ft_disabled_'+filter.id+'">';
        if(filter.disabled)
            str += '<span title="Enable" onclick="ibiFilterTool.enableFilter('+tab+',\''+filter.id+'\',false)">'+ibiSkin.gflticon+'<\/span>';
        else
            str += '<span title="Disable" onclick="ibiFilterTool.enableFilter('+tab+',\''+filter.id+'\',true)">'+ibiSkin.cflticon+'<\/span>';
        str += '<\/span>';
        str += '<\/td>';

        str += '<td><span style="text-align:center;cursor:pointer;" ';
        if(isARBrowserExtension) {
            str += 'title="'+ibiMsgStr['del']+'" onclick="ibiChart.removeFilter(\''+filter.id+'\')">';
        } else {
            str += 'title="'+ibiMsgStr['del']+'" onclick="ibiChart.removeFilter(\''+filter.id+'\')">';
        }
        str += ibiSkin.delicon +'<\/span><\/td>';
        str += '<td><span id="'+filter.eFilterTitleId+'">';
        str += filter.internalTitle;
        str += "</span><\/tr><\/table>";
        return str;
    }

    function updateTabHeadings(tab) {
        for(var i=0; i < ibiFilterTool.accordFilterList[tab].length; i++) {
            var obj = document.getElementById('accord_'+tab+'_'+i);
            if(obj) {
                obj.innerHTML = ibiFilterTool.generateAccordHeading(tab,ibiCompound.drawObjectsPtr[ibiFilterTool.accordFilterList[tab][i]]);
            }
        }
    }

    function showAllHiddenFilters(tab) {
	    var str="<div id='ft_accord_"+tab+"' style='width:100%'>";
	    var target = "*";
	    var count = 0;
	    if(tab>0) {
	        target = ibiFilterTool.filterTabs[tab].mytable.table_name;
        }
	    var obj = document.getElementById("ibi$dummy$div");
	    if(obj)
	        obj.innerHTML = "";
	    ibiFilterTool.accordFilterList[tab] = [];
        if(ibiCompound.hiddenGlobalFilters.length) {
            var filter_checked = ibiFilterTool.getFilterCheckedIds(tab);
            for(var i=0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                if(ibiCompound.hiddenGlobalFilters[i].deleted)
                    continue;
                if((ibiCompound.hiddenGlobalFilters[i].filterTarget != target) && (ibiFilterTool.tabCount > 1))
                    continue;
                if(ibiFilterTool.filterTabs[tab].currentFilter)
                    if(ibiCompound.hiddenGlobalFilters[i].id == ibiFilterTool.filterTabs[tab].currentFilter.obj.id)
                        ibiFilterTool.filterTabs[tab].currentAccordTab = count;
                ibiCompound.hiddenGlobalFilters[i].eFilterTitleId = "intTitle_"+ibiCompound.hiddenGlobalFilters[i].id+"_"+i;
                str += "<h3 style='display:flex' id='accord_"+tab+"_"+count+"'>";
                str += ibiFilterTool.generateAccordHeading(tab,ibiCompound.hiddenGlobalFilters[i]);
                str += "</h3>";
                str += "<div>";
                str += ibiCompound.hiddenGlobalFilters[i].buildComponent();
                str += "</div>";
                ibiFilterTool.accordFilterList[tab][count] = ibiCompound.hiddenGlobalFilters[i].id;
                count++;
            }
        }
        str += "</div>";
        return str;
    }

    function setAccordTab(){
        if(ibiCompound.hiddenGlobalFilters.length) {
            for (var i = 0; i < ibiCompound.hiddenGlobalFilters.length; i++) {
                for(var tab = 0; i < ibiFilterTool.filterTabs.length;i++)
                    if(ibiFilterTool.filterTabs[tab].currentFilter)
                        if (ibiCompound.hiddenGlobalFilters[i].id == ibiFilterTool.filterTabs[tab].currentFilter.obj.id)
                            ibiFilterTool.filterTabs[tab].currentAccordTab = i;
            }
        }
    }

    function showColumns(imytable)
    {
        var nodesCount = 0;
        var comp = {};
        var sid = "ft_columnList";
        var mytable = imytable;
        //ibiFilterTool.columnContainer.innerHTML = "";

        var displayTree = function() {
            var buildTree = function(capt,cols) { //process the data provider and build the tree object recursively
                var newTree = [];
                var obj,i;
                var dimensions={};
                var measures={};
                var mEntry = 0;
                var haveDimensions = false;
                var haveMeasures = false;
                var fieldDisplay;
                for(i = 0; i<cols.length; i++){
                    if(capt[i].ignore) {
                        //dont show on list
                    } else
                	if(capt[i].type==IBINUM) {
                        measures[cols[i].name] = ibiStd.copyObject(cols[i]);
                        haveMeasures = true;
                    }
                	else {
                        dimensions[cols[i].name] = ibiStd.copyObject(cols[i]);
                        haveDimensions = true;
                    }
                }
                if(haveMeasures) {
                    newTree[mEntry] = {
                        "id": nodesCount + "", "text": "Measures",
                        "state": {"opened": true, "selected": false},
                        "plugins": ["dnd"], "children": []
                    };
                    nodesCount++;
                    for (i in measures) {
                        fieldDisplay = measures[i].dis;
                        if(fieldDisplay == "")
                            fieldDisplay = measures[i].name;
                        obj = {
                            "id": nodesCount + "", "text": fieldDisplay,
                            "ibiType":"measures",
                            "ibiField":measures[i].name,
                            'data': measures[i],
                            "state": {"opened": true, "selected": false},
                            "plugins": ["dnd"]
                        };
                        nodesCount++;
                        newTree[mEntry].children[newTree[mEntry].children.length] = obj;
                    }
                    nodesCount++;
                    mEntry++;
                }
                if(haveDimensions) {
                    newTree[mEntry] = {
                        "id": nodesCount + "", "text": "Dimensions",
                        "state": {"opened": true, "selected": false},
                        "plugins": ["dnd"], "children": []
                    };
                    nodesCount++;
                    for (i in dimensions) {
                        fieldDisplay = dimensions[i].dis;
                        if(fieldDisplay == "")
                            fieldDisplay = dimensions[i].name;
                        obj = {
                            "id": nodesCount + "", "text": fieldDisplay,
                            "ibiType":"dimension",
                            "ibiField":dimensions[i].name,
                            'data': dimensions[i],
                            "state": {"opened": true, "selected": false},
                            "plugins": ["dnd"]
                        };
                        nodesCount++;
                        newTree[mEntry].children[newTree[mEntry].children.length] = obj;
                    }
                    nodesCount++;
                    mEntry++;
                }
                return newTree;
            };

            //Create the initial obj with the core data
            var customMenu = function(node) {
                var items = {
                  'item1' : {
                      'label' : 'filter',
                      'action' : function(){}
                  }
                };
                return items;
            };
            var obj = {
            	'plugins':['dnd','contextmenu'],
                'contextmenu': {
            	    'items' : customMenu
                },
                'core': {
                    'data':null,
                    'plugins': [ 'dnd','contextmenu']
                }
            };

            //setting the tree structure to the obj
            var gf = ibiUtil.getAllFields();
            var capt = gf.capt;
            var cols = gf.cols;

            if(mytable != -1 ) {
                capt = mytable.a_capt;
                cols = ibiStd.copyObject(mytable.a_cntl.a_cols);
                for(var i =0; i < cols.length; i++)
                    cols[i].originalTable = mytable.id;
            }
			var treeNodes = buildTree(capt, cols);
            obj.core.data = treeNodes;
            obj.core.check_callback = true;
            comp.root = obj.core.data;


            if(ibiFilterTool.columnTree)
                ibiFilterTool.columnTree.jstree("destroy");
            ibiFilterTool.columnTree = $('#' + sid).jstree(obj); //use the obj that we just create to create a tree.
            ibiFilterTool.columnTree.jstree(true).settings.core.data = treeNodes;
            ibiFilterTool.columnTree.jstree(true).refresh();

            //onchanged handling
            $(document).on('dnd_stop.vakata', function (e, mydata) {
            	if (e.type == "dnd_stop"){
            		if(mydata.event.target.id == "addFilterToolOption") {
            			var elm = mydata.data.nodes[0];
                        var node = ibiFilterTool.columnTree.jstree(true).get_node( elm );
                        if(node) {
                        var field = node.data.qualname;
                            var global = true;
                            if(typeof ibiFilterTool.filterTabs[ibiFilterTool.currentTab].mytable != "undefined")
                                global = false;
                            ibiFilterTool.addFilter(node.data.originalTable, field,undefined,undefined,global);
                        }
					}
                }

            });

            $('#'+sid).delegate("a","dblclick", function(e) {
                ibiFilterTool.closeMenu();
                var elm = $(this).parent().attr("id");
                var node = ibiFilterTool.columnTree.jstree(true).get_node( elm );
                if(node) {
                var field = node.data.qualname;
                    var global = true;
                    if(typeof ibiFilterTool.filterTabs[ibiFilterTool.currentTab].mytable != "undefined")
                        global = false;
                    ibiFilterTool.addFilter(node.data.originalTable, field,undefined,undefined,global);
                }
            });

            $('#'+sid).on("changed.jstree", function (e, mydata) {
                ibiFilterTool.showMenu(e,mydata);
                if (mydata.action != "select_node" && mydata.action != "deselect_node")
                    return;
                ibiFilterTool.columnTree.jstree("deselect_node", mydata.node);
            });
        };

        displayTree();
    }


})();
