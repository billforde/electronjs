/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/armenu.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180626 1614 iys 204125 Running the AHTML Document after promoting Freeze enabled re
* 180523 0959 bjd 194659 In-Document Analytics, menu pops up to left and you can't s
* 180516 1445 bjd 194659 In-Document Analytics, menu pops up to left and you can't s
* 180516 1123 bjd 194659 In-Document Analytics, menu pops up to left and you can't s
* 180510 1156 wjf 194659 In-Document Analytics, menu pops up to left and you can't s
* 180227 1508 wjf 200246 AHML: Unify JSON output
* 180226 1344 wjf 200246 AHML: Unify JSON output
* 180222 1518 wjf 200246 AHML: Unify JSON output
* 170928 1232 wjf 195789 Paperclicpping : Date separator ( / ) missing for Paper cli
* 170807 2131 wjf 193387 Vis: Group selection option is missing in tooltip
* 170618 2118 wjf 191515 Create unified filter component to replace old style filter
* 170602 1759 wjf 191515 Create unified filter component to replace old style filter
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170505 1615 wjf 180329 As a user I want to group dimension values through the repo
* 170407 1108 wjf 188399 AHTML - filter cell after second run doesn't filter data co
* 161221 0748 wjf 180329 As a user I want to group dimension values through the repo
* 161220 1814 wjf 180329 As a user I want to group dimension values through the repo
* 161201 1005 wjf 186935 ACT-214 cache HL not working after filering
* 161121 0908 bjd 186459 AHTML: Cell Filtering using certain Decimal/Packed field fo
* 161118 1026 bjd 186459 AHTML: Cell Filtering using certain Decimal/Packed field fo
* 161116 1114 bjd 186459 AHTML: Cell Filtering using certain Decimal/Packed field fo
* 160927 1005 wjf 185119 AHTML:Selecting values from charts throws browser error
* 160922 1554 bjd 184857 Tab to cascade reports appears behind the intial report ins
* 160718 1609 bjd 175571 AHTML: FREEZE-COLUMN report; DropDown Menu Outside of Report
* 160610 1256 hms 180534 Remove tab characters from source files
* 160602 1453 iys 178953 AHTML:Right click on window menu opitons opens in next colu
* 160504 1355 iys 180062 Create Active Report "Plug-in" for browers
* 160421 1617 iys 180062 Create Active Report "Plug-in" for browers
* 160129 1145 bjd 173837 Grid menu positions incorrectly when using custom container
* 160108 1554 bjd 175571 AHTML: FREEZE-COLUMN report; DropDown Menu Outside of Report
* 151217 1408 iys 161709 WF7705: Save comments in BYTOC in an AHTML rpt doesn't save
* 151117 1328 iys 173837 Grid menu positions incorrectly when using custom container
* 150626 1743 bjd 169143 Context Menu Errors in IE11 Using IE8/Quirks mode
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.19 $
//$Log: armenu.js,v $
//Revision 1.19  2014/04/15 17:05:56  Israel_Schulman
//[p156331] If GRID style is set to OFF, remove the outer dashboard-object border inherited from .arDashboardObject class.
//
//Revision 1.18  2013/11/13 21:49:02  Brian_DCruz
//[p141034] refactor code to remove redefined vars
//
//Revision 1.17  2013/11/13 21:16:13  Brian_DCruz
//[p153087] colorg not needed when col == -1; i.e when we have some cellfilter
//
//Revision 1.16  2013/08/09 21:39:49  Brian_DCruz
//[p151639] if filter value is numeric, do not store it as a string as inarray() does strict comparison
//
//Revision 1.15  2013/06/17 20:19:10  Israel_Schulman
//[p149898] Check if report has expired when menu is opened. Clear report from page if expired.
//
//Revision 1.14  2013/04/27 13:42:23  William_Forde
//[p134795] Only if datareport is set allow higlighting on the charts.
//
//Revision 1.13  2012/12/11 19:22:41  Brian_DCruz
//[p144371] fix dropdown menu where HTMLFORM has various HOLD TABLEs output within another TABLE
//
//Revision 1.12  2012/12/05 21:18:29  Brian_DCruz
//[p143947] scrollbar top and left values need to be calculated from different nodes up the dom tree
//
//Revision 1.11  2012/11/30 13:52:07  William_Forde
//[p144158] Use the default size for charts in tab mode, unless ARREPORTSIZE=DIMENSION and the dimensions are set.
//
//Revision 1.10  2012/11/19 15:49:44  William_Forde
//[p143851] when switching tab hide the unselected container.  Make sure restore original sets window mode back to either cascade or tab.
//
//Revision 1.9  2012/08/27 20:12:01  William_Forde
//[p136411] Fix  javascript error with dashboard on mobile, when wmenu/wbody not defined.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["armenu"]="$Revision: 20180626.1614 $";
(function() {
    if (typeof(window.ibiMenu) !== 'undefined') {
        return;
    }
    window.ibiMenu = {
        userUpdateMenu:userUpdateMenu,
        Showmenu:showmenu,
                Hidemenu:hidemenu,
        menu_onClick: menu_onclick,
        menu_onMouseover: menu_onmouseover,
        menu_onMouseout: menu_onmouseout,
        menu_Expand: menu_expand,
        menu_Collapse: menu_collapse,
        doUserFunc: DoUserFunc,
                curMenuId: null,
        Closemenu:closeMenu,
                ALL_MENUS: {},
                o_showtimer:null,
                hm_to: null,
        curMainMenu: null,
        Gl_Item: null,
        Menu:menu
    };


    function DoUserFunc(tn,option) {
        var mytable = getMyTable(tn);
        if(mytable.userMenu) {
            if(typeof mytable.userMenu[option] != "undefined") {
                try {
                    mytable.userMenu[option].callbackFunction( mytable.userMenu[option].callbackArgument);
                } catch (e) {

                }
            }
        }
    }

    function userUpdateMenu(obj) {
        var nmenu = obj.menu;
        var mytable = obj.mytable;
        var tdgTooltipClass = "tdgchart-tooltip-pad";
        var i;
        var um = null;
        if(mytable.showMenuFunc && obj.type=="select") {
            var myObj = {
                'id':mytable.id,
                'columns': [],
                'currentReport': mytable
            };
            obj.valueType = "object";
            var cobj = ibiChart.getColumnsAndValues(obj);
            delete obj.valueType;
            if(cobj) {
                for(i=0; i < cobj.columns.length; i++) {
                    var col = cobj.columns[i];
                    myObj.columns[i] = {};
                    myObj.columns[i].column = getCacheFieldName(mytable,col,true,true);
                    myObj.columns[i].values = [];
                    myObj.columns[i].index = col;
                    for(var j = 0; j < cobj.values1.length; j++) {
                        if(typeof cobj.values1[j][i] == "object" )
                            myObj.columns[i].values[j] = [ cobj.values1[j][i].display, cobj.values1[j][i].value];
                        else
                            myObj.columns[i].values[j] = [ cobj.values1[j][i], cobj.values1[j][i]];
                    }
                }
                var userMenu = mytable.showMenuFunc(myObj);
                if(userMenu) {
                    um = '';
                    for(i=0; i < userMenu.length; i++) {
                        var l = userMenu[i].menu.label.toLowerCase();
                        if((l.indexOf("<hr>")==-1) && (l.indexOf("<hr ")==-1))
                            um += '<span class="' + tdgTooltipClass +'" style="cursor:pointer;'+Tooltip_ext_props+'" ' + ID_hover_filter_style +
                                ' onclick="ibiMenu.doUserFunc(' + mytable.id + ',' + i+ ')">' + userMenu[i].menu.label+'<\/span><br>';
                        else
                            um += userMenu[i].menu.label;
                    }
                }
                mytable.userMenu = userMenu;
            }
        }
        if(um != null) {
            if (typeof nmenu == "object")
                nmenu[nmenu.length] = um;
            else
                nmenu += um;
        }
        return nmenu;
    }

    function closeMenu(e) {
        if(ibiMenu.curMainMenu==null) return;
        hidemenu();
    }

    function hidemenu() {
        if(ibiMenu.curMainMenu!=null) {
            var m_root = d.getElementById('d'+ibiMenu.curMainMenu);
            if(m_root) m_root.style.display = 'none';
            ibiMenu.curMainMenu=null;
            if(Events['onColumnHide'].callback!=null)
                Events['onColumnHide'].callback();
            if('addEventListener' in document)
                document.removeEventListener('click',ibiMenu.Closemenu,false);
            else
                document.detachEvent('onclick',ibiMenu.Closemenu);
        }
    }


    function showmenu(event,tablenumber,colnum,m_id,nodelay,temp,px,py)
    {
        var x=0,y=0,node=null,pos;
        var m_root;
        var thismenu = ibiMenu.ALL_MENUS[m_id].thismenu;
        var menu_id = thismenu.root_id;

        var dobj=null;
        var mytable = MyTable[tablenumber];
        
        if( ibiPrompt.isReportExpired(true) ) return;

        if(typeof(thismenu.divid)!='undefined') dobj=d.getElementById(thismenu.divid);
        if((b_ios && (typeof(window.ibi_iPadMenu)!="undefined"))|| 
            (mytable.fullScreenOn || mytable.fullScreenOnGraph)){
            ibi_iPadMenu.showMenu2(getMyTable(tablenumber),dobj,thismenu.a_config,MP_GRP);
            return;
        }
        if(dobj) {
            var dobjBCR = dobj.getBoundingClientRect();
            var orgDiv = ibiLayoutListName[mytable.useLayout].orgdiv;
            var docBody = document.body;
            if (mytable.n_freeze_column) {
                var recalculateX = true;
                var scrollDiv = d.getElementById("IScrollWindowBody" + mytable.id);
                var scrollLeft = (scrollDiv) ? scrollDiv.scrollLeft : 0;
                // scrollbar top and left need to be calculated from different node path up the dom tree
                for (node = dobj; node.offsetParent && node.id != orgDiv; node = node.offsetParent) {
                    y += node.offsetTop-node.scrollTop;
                    x += node.offsetLeft-node.scrollLeft;
                    if (node.offsetParent === docBody && node.parentElement !== docBody) {
                        // HTMLFORM with nested HOLD TABLEs displayed within it
                        recalculateX = false;
                    }
                }
                if (recalculateX) {
                    x = 0; 
                    for (node = dobj; node.parentElement && node.id != orgDiv; node = node.parentElement) {
                        x += node.offsetLeft-node.scrollLeft;
                    }
                } else if (scrollLeft > 0) {
                    if ((colnum * 1) >= mytable.n_freeze_column) {
                        x -= scrollLeft;
                    }
                }
            } else {
                x = dobjBCR.left;
                y = dobjBCR.top;
            }
        }
        if(typeof(px)!='undefined') {
            x=px;
            y=py;
        }
        if(ibiMenu.curMainMenu!=null) {
            m_root = d.getElementById('d'+ibiMenu.curMainMenu);
            if(m_root) m_root.style.display="none";
            if('addEventListener' in document)
                document.removeEventListener('click',ibiMenu.Closemenu,false);
            else
                document.detachEvent('onclick',ibiMenu.Closemenu);
            ibiMenu.curMainMenu = menu_id;
        }
        m_root = d.getElementById('d'+menu_id);
        window.setTimeout(function(){
            if('addEventListener' in document)
                document.addEventListener('click',ibiMenu.Closemenu,false);
            else
                document.attachEvent('onclick',ibiMenu.Closemenu);
            },0);
        if(m_root.style.display!='block') {
            if(temp) {
                menu_do_real(tablenumber,colnum,m_id,nodelay);
                m_root = d.getElementById('d'+menu_id);
            }

            if (dobj) {
                if (mytable.n_freeze_column == 0) {
                    x += (window.scrollX || window.pageXOffset);
                    y += (window.scrollY || window.pageYOffset);
                }
                m_root.style.top = (y+(dobj.offsetHeight-4))+'px';
            } else {
                m_root.style.top = (y+5)+'px';
            }
            m_root.style.left = (x+5)+'px';
            var rw = parseInt(m_root.style.width, 10);
            if(dobjBCR) {
                if((dobjBCR.left + rw) > document.body.offsetWidth) {
                    var _left = (x - 5) - rw + dobjBCR.width;
                    // if clicked cell is only partially in view, subtract part of cell out of view
                    if((dobjBCR.left + dobjBCR.width) > document.body.offsetWidth) {
                        _left -= (dobjBCR.left + dobjBCR.width) - document.body.offsetWidth;
                    }
                    m_root.style.left = _left + 'px';
                }
            }
    /*        if(thismenu.menuScroll) {
            /* need to figure how big menu is 
            }   */
            
            m_root.style.display = 'block';
        }
        ibiMenu.curMainMenu = menu_id;
        if(Events['onColumnSelect'].callback!=null)
            Events['onColumnSelect'].callback(tablenumber,colnum);
    }


    function menu_do_real(tablenumber,colnum,n_id,nodelay)
    {
        var mytable = getMyTable(tablenumber);
        var thismenu = ibiMenu.ALL_MENUS[n_id].thismenu;
        ibi_add_popmenu(mytable,colnum);
    }

    function setMenuStyle(mytable,menuCSS)
    {
        var miclass,miclass1,miclass2;
        var stn = mytable.a_cntl.org_t_number;

        if(mytable.isRollUp) {
            var ppmytable = getMyTable(mytable.parent_table);
            while(ppmytable.isRollUp) ppmytable = getMyTable(ppmytable.parent_table);
            stn = ppmytable.a_cntl.org_t_number;
        }
        if(mytable.useCustomMenu) {
            miclass = 'm1i'+ stn;
            miclass1 = 'm0out'+stn;
            miclass2 = 'm1o'+stn;
        } else {
            miclass = "arMenu";
            miclass1 = "arMenu";
            miclass2 = "arMenuHover";
        }
        menuCSS.outer = [miclass1];
        menuCSS.inner = [miclass,miclass2];
    
    }
 
    function menu(a_items, a_tpl, inline, mytable, temp,n_id,id)
    {
        ca_tpl = ibiStd.copyObject(a_tpl);
        setMenuStyle(mytable,ca_tpl[1].css);
         if((typeof(n_id)=='undefined')||(n_id==null))  n_id = id+'_x_';    
        if(typeof(ibiMenu.ALL_MENUS[id])=='undefined')
            ibiMenu.ALL_MENUS[id]={'thismenu':{}};
        domenu(ibiMenu.ALL_MENUS[id].thismenu,a_items, ca_tpl, inline, mytable, temp,n_id,id);
        return(id);
    }

    function domenu (thismenu,a_items, a_tpl, inline, mytable, temp,n_id,id) {
        var menuline='';
        var ln = 0;
        thismenu.mytable = mytable; 
        thismenu.a_config = a_items;
        thismenu.scrolldivs = [];
//        thismenu.a_tpl = mnCopyObj(a_tpl);
        thismenu.a_tpl = a_tpl;
 
        thismenu.n_id_col = n_id;
    
        thismenu.a_index = [];
        thismenu.colnum    = thismenu.n_id_col;
        if(id) thismenu.divid = id;

        thismenu.prefix = 't'+mytable.a_cntl.table_number+'_';

        var myStr =mytable.a_cntl.table_number+',\''+thismenu.colnum+'\'';

        thismenu.n_depth = 0;

        thismenu.n_x = 0;
        thismenu.n_y = 0;
        thismenu.n_id = thismenu.prefix + thismenu.n_id_col;
        thismenu.root_id = thismenu.n_id+'_0';
        thismenu.menu_id = id;

        var html2str = '';
        var sv_a_config = thismenu.a_config;
        thismenu.a_config = thismenu.a_config[0];

        var width = mitem_getprop(thismenu,'width',0);
        var left  = mitem_getprop(thismenu,'left',0);
        var top   = mitem_getprop(thismenu,'top',0);
        var style = mitem_getstyle(thismenu,0, 0, 0);
        var style1 = mitem_getstyle(thismenu,1, 0, 0);
        var width1 = mitem_getprop(thismenu,'width',1);
        var spacing = mitem_getprop(thismenu,'spacing',1);

        var a_conf = sv_a_config[0];
        var item_text, item_dis;
        if(typeof(a_conf[0])!='object') {
            item_text = a_conf[0];
            item_dis  = null;
        } else {
            item_text = a_conf[0].name;
            item_dis  = a_conf[0].dis;
        }
        thismenu.a_index[thismenu.root_id] = {};
        if(a_conf.length>2) {
            var scrollable = mitem_getprop(thismenu,'scrollable',thismenu.n_depth+1); 
            if(scrollable)
                thismenu.menuScroll = true;
            else 
                thismenu.menuScroll = false;

            thismenu.n_depth = 0;
            menuline+=menu_item(thismenu, thismenu.n_depth,thismenu.a_config,thismenu.root_id, mytable); 
            thismenu.n_x += left;
            thismenu.n_y += top;
        } 

        if(isARBrowserExtension) {
            
            html2str += '<div onclick="_ARExtensionCall(&quot;ibiMenu.Showmenu(event,'+myStr+',\''+thismenu.menu_id+'\',true,'+temp+')&quot;)" '+
                    'class="' + style1 +'" style="width:'+width+'px;cursor:pointer;">'+item_text+'<\/div>';
        } else {
            html2str += '<div onclick="ibiMenu.Showmenu(event,'+myStr+',\''+thismenu.menu_id+'\',true,'+temp+');" '+
                    'class="' + style1 +'" style="width:'+width+'px;cursor:pointer;">'+item_text+'<\/div>';
        }
        var mid = 'p'+thismenu.n_id+'_0';
        var mobj = document.getElementById(mid);
        if(!mobj) {
            //var mldiv = '<div id="'+mid+'" style="visibility:visible;"><\/div>';
            //menulist_obj.innerHTML = menulist_obj.innerHTML + mldiv;
            mobj = document.createElement('div');
            if(b_ie) mobj.style.setAttribute('cssText', 'visibility:visible;display:block;', 0);
            else mobj.setAttribute('style','visibility:visible;display:block;');
            mobj.setAttribute('id',mid);
            document.getElementById('menulist').appendChild(mobj);
            //mobj = d.getElementById(mid);
        }
        if(mobj){
             mobj.innerHTML = menuline;
            mobj.style.visibility = 'visible';
        }

        if(inline) inline.innerHTML = html2str;
    }
 
    function menu_collapse (n_id,to_depth,id) {
        if(ibiMenu.hm_to)clearTimeout(ibiMenu.hm_to);ibiMenu.hm_to=null;
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        if(ibiMenu.o_showtimer) clearTimeout(ibiMenu.o_showtimer);

        var item = thismenu.a_index[n_id];
        if(item)
        while(item.s_opt && (item.s_opt.depth >= to_depth)) {
            if(item.child_div) 
                item.child_div.style.display = 'none';
            item = thismenu.a_index[item.s_opt.parent_n_id];
        }
        if(!to_depth) hidemenu();
    }
 
    function menu_expand (n_id,id) {
        if(ibiMenu.hm_to)clearTimeout(ibiMenu.hm_to);ibiMenu.hm_to=null;
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        var o_item = thismenu.a_index[n_id];

        if(thismenu.o_current) {
            if(thismenu.o_current.s_opt.depth > o_item.s_opt.depth)
                menu_collapse(thismenu.o_current.n_id,o_item.s_opt.depth,id);
            else
            if(n_id.indexOf(thismenu.o_current.n_id)!=0) 
                menu_collapse(thismenu.o_current.n_id,thismenu.o_current.s_opt.depth,id);
        }
        if(o_item.s_opt.child_n_id) {
            if(o_item.child_div.innerHTML=='delay'){
                var spacing = mitem_getprop(thismenu,'spacing',1);
                o_item.child_div.innerHTML=menu_item(thismenu, o_item.s_opt.depth+1,o_item.s_opt.a_config,o_item.n_id, null);
            }
            
    /*        if(thismenu.menuScroll) {
/* need to figure out height here 
            }   */
            
            o_item.child_div.style.display = 'block';
        }
        thismenu.o_current = o_item;
    }
 
    function menu_onscroll (n_id,id) {
        if(ibiMenu.hm_to)clearTimeout(ibiMenu.hm_to);ibiMenu.hm_to=null;
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        var item = thismenu.a_index[thismenu.o_hidetimer_id];
    }
 

    function menu_onclick (event,n_id,id) {
        var callstr;
        if (typeof event.stopPropagation !== 'undefined') {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        var o_item = thismenu.a_index[n_id];
        var item = thismenu.a_index[n_id];
        while(item.s_opt) {
            var nstyle = mitem_getstyle(thismenu,1, 0,item.s_opt.depth);
            item.my_div.className = nstyle;
            item = thismenu.a_index[item.s_opt.parent_n_id];
        }
        if (o_item.s_opt.a_config[2] && typeof(o_item.s_opt.a_config[2]) == 'object'){
//            show_wait();
            ibiMenu.Gl_Item=o_item;
            onclick_event = ibiMenu.Gl_Item.s_opt.a_config[2]['ocv'];
            if((typeof(o_item.s_opt.a_config[2]['ms'])=='undefined')||(o_item.s_opt.a_config[2]['ms']==false))
                menu_collapse(n_id,0,id);
            if(typeof(o_item.s_opt.a_config[2]['oc']) == 'function') 
//                setTimeout("ibiMenu.Gl_Item.s_opt.a_config[2]['oc'](ibiMenu.Gl_Item);ibiStd.HideWait();",0);
                callstr = "ibiMenu.Gl_Item.s_opt.a_config[2]['oc'](ibiMenu.Gl_Item)";
            else
//                setTimeout(ibiMenu.Gl_Item.s_opt.a_config[2]['oc']+";ibiStd.HideWait();",0);
                callstr = ibiMenu.Gl_Item.s_opt.a_config[2]['oc'];
            wait_func(callstr);
        }
        return Boolean(o_item.s_opt.a_config[1]);
    }
 
    function menu_onmouseout (event,n_id,id) {
        if(ibiMenu.hm_to)clearTimeout(ibiMenu.hm_to);ibiMenu.hm_to=null;
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        var o_item = thismenu.a_index[n_id];
        var item = thismenu.a_index[n_id];
         if(ibiMenu.o_showtimer)clearTimeout(ibiMenu.o_showtimer);
        ibiMenu.o_showtimer = null;
        if(item)
        while(item.s_opt) {
            var nstyle = mitem_getstyle(thismenu,1, 0,item.s_opt.depth);
            item.my_div.className = nstyle;
            item = thismenu.a_index[item.s_opt.parent_n_id];
        }
        thismenu.o_hidetimer_id = n_id;
    }
 
    function menu_onmouseover(event,n_id,id) {
        var nodelay = true;
        if(ibiMenu.hm_to)clearTimeout(ibiMenu.hm_to);ibiMenu.hm_to=null;
        if (typeof event.stopPropagation !== 'undefined') {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        var thismenu = ibiMenu.ALL_MENUS[id].thismenu;
        var h,scrollwin,newh,pos,node;
        thismenu.o_hidetimer = null;
        if(ibiMenu.o_showtimer)clearTimeout(ibiMenu.o_showtimer);

        var o_item = thismenu.a_index[n_id];
        var item = thismenu.a_index[n_id];
        var cdelay = (nodelay) ? 0
                     : mitem_getprop(thismenu,'expd_delay',o_item.s_opt.depth);
        thismenu.a_index[n_id].my_div = d.getElementById(o_item.s_opt.n_id);
        if(o_item.s_opt.child_n_id) 
            thismenu.a_index[n_id].child_div = d.getElementById(o_item.s_opt.child_n_id);
        while(item.s_opt) {
            if(item.s_opt.a_config[1]!='SKIP') {
                var nstyle = mitem_getstyle(thismenu,1, 1,item.s_opt.depth);
                item.my_div.className = nstyle;
            }
            item = thismenu.a_index[item.s_opt.parent_n_id];
        }
        ibiMenu.curMenuId = n_id;

        //if(isARBrowserExtension) {
            ibiMenu.o_showtimer = setTimeout(function() {
                ibiMenu.menu_Expand(o_item.n_id, id);
            },cdelay);  
        //} else {
        //    ibiMenu.o_showtimer = setTimeout('ibiMenu.menu_Expand("' + o_item.n_id + '","'+id+'");',cdelay);
        //}

        return(false); /* dont trigger other mouseover */
    }
 
 
    function menu_item (thismenu,mn_depth,m_config,p_n_id, mytable) {
        if (!m_config) return('');
 
        // store info from parent item
        var menuline;
        (b_ie?menuline=[]:menuline='');
        var n_id;
        var ln=0;
        var localid;
        var textid;
        var c,csp;
        var item_text;
        var item_dis;
        var n_depth,width,style, maxWidth;
        var a_tpl  = thismenu.a_tpl;
        var spacing;
        var s_;
        var ts = '',delay;
        var dstyle;
        dstyle = mitem_getstyle(thismenu,0, 0, 1);
        var scrollStr = 'overflow:visible;';
        var cstr,a_config;
        var doc_dir=((document.dir=='rtl')?'px;right:':'px;left:');
        n_depth = mn_depth;
        if(!mn_depth) {
            delay = mitem_getprop(thismenu,'hide_delay',1);
            if(isARBrowserExtension) {
                 ts = ' onmouseout="_ARExtensionCall(&quot;ibiMenu.hm_to = setTimeout(function(){ibiMenu.menu_Collapse(ibiMenu.curMenuId,0,\\\''+thismenu.menu_id+'\\\');},'+delay+');&quot)" ';
            } else {
                 ts = ' onmouseout="ibiMenu.hm_to = setTimeout(function(){ibiMenu.menu_Collapse(ibiMenu.curMenuId,0,\''+thismenu.menu_id+'\');},'+delay+');" ';
            }
            width = mitem_getprop(thismenu,'width',1);
            s_= '<div id="d'+p_n_id+'" class="' + dstyle +'" ' +
                'style="position:absolute;background:white;top:0px;display:none;' +
                scrollStr+'left:0px;width:'+width+'px;' +
                'z-index:0" onscroll="menu_onscroll(\''+thismenu.n_id+'\')">';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            n_depth++;
        } else {
            width = mitem_getprop(thismenu,'width',n_depth);
        }
        spacing = mitem_getprop(thismenu,'spacing',n_depth);


         s_='<table bgcolor="white" '+ts+' width='+width+' border=0 cellspacing=0 cellpadding='+spacing+'>';
        (b_ie?menuline[ln++]=s_:menuline+=s_);
        var ml = m_config.length;
        if((ml-3)==0) {
            s_='<tr><td><\/td><\/tr>';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
        } else
        for (var n_order = 0; n_order < ml - 3; n_order++) {
            cstr = '';
            a_config = m_config[n_order+3];
            if(a_config[1]!='SKIP') cstr=' style="cursor:pointer;" ';
            item_text = a_config[0];
            item_dis  = null;
            n_id = p_n_id + '_' + n_order;
            localid =  'e' + n_id + 'i';
            textid = localid+'_t';
            thismenu.a_index[n_id] = {};
            thismenu.a_index[n_id].n_id=n_id;
            thismenu.a_index[n_id].child_div = null;
            thismenu.a_index[n_id].mytable = mytable;

            if(item_text[2])
                item_dis = item_text[2];
            else
            if(!item_text[3])
                item_dis = item_text[0];

            var checked=false,line;
            csp = 1;
            if(item_text[1]) checked=true;
            if(checked) line = '<span>'+check_mark+'<\/span>';
            else line = '&nbsp;';
            s_='<tr id="'+n_id+'" class="' + mitem_getstyle(thismenu,1, 0,n_depth)+'" '+cstr;
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            if(isARBrowserExtension) {
                s_= 'onclick="_ARExtensionCall(&quot;ibiMenu.menu_onClick(\'__event__\',\''+n_id + '\',\''+thismenu.menu_id+'\')&quot;, null, {\'event\':event,\'stopPropagation\':true})"'+
                'onmouseout="_ARExtensionCall(&quot;ibiMenu.menu_onMouseout(\'__event__\',\''+n_id + '\',\''+thismenu.menu_id + '\')&quot;, null)"'+
                'onmouseover="_ARExtensionCall(&quot;ibiMenu.menu_onMouseover(\'__event__\',\''+n_id + '\',\''+thismenu.menu_id + '\')&quot;, null, {\'event\':event,\'stopPropagation\':true})">';
            } else {
                s_= 'onclick="return ibiMenu.menu_onClick(event,\''+n_id + '\',\''+thismenu.menu_id+'\')"'+
                'onmouseout="return ibiMenu.menu_onMouseout(event,\''+n_id + '\',\''+thismenu.menu_id + '\')"'+
                'onmouseover="return ibiMenu.menu_onMouseover(event,\''+n_id + '\',\''+thismenu.menu_id + '\')">';
            }
            
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            if(item_text[3]) csp = 3;
            if(!item_text[3]) {
                s_='<td width=15 id="'+textid+'">'+line+'<\/td>';
                (b_ie?menuline[ln++]=s_:menuline+=s_);
            }
            s_='<td COLSPAN='+csp+' WIDTH="*" ';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            if(item_dis) {
                s_= ' title="'+item_dis+'" ';
                (b_ie?menuline[ln++]=s_:menuline+=s_);
            }

            maxWidth = width - (15 + 15);
            s_='><span style="max-width:'+maxWidth+'px;overflow:hidden;display:block;text-overflow:ellipsis;white-space:nowrap" id="s'+textid+'">'+item_text[0]+'<\/span>';
            (b_ie?menuline[ln++]=s_:menuline+=s_);

            c = null;
            var aline = '&nbsp;';
            if (a_config.length > 3) { 
                c = 'd' + n_id;
                var n_x =  mitem_getprop(thismenu,'left',n_depth);
                var n_y =  mitem_getprop(thismenu,'top',n_depth);
                scrollStr = 'overflow:visible;';
                s_= '<div style="position:relative;width:0px;height:0px"><div id="'+c+'" class="' + dstyle + '" ' +
                    'style="position:absolute;' + scrollStr +
                    'top:'+n_y+doc_dir+n_x+'px; width:'+mitem_getprop(thismenu,'width',n_depth+1)+'px;' +
                    'display:none;" onscroll="menu_onscroll(\''+n_id + '\',\''+thismenu.menu_id+ '\')">'+
                    'delay<\/div><\/div>';
                (b_ie?menuline[ln++]=s_:menuline+=s_);
                aline='<span style="font-family:arial;font-size:8pt;text-align:right;">'+arr_n+'<\/span>';
            }
            s_='<\/td>';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            if(!item_text[3]) {
                s_='<td width=15>'+aline+'<\/td>';
                (b_ie?menuline[ln++]=s_:menuline+=s_);
            }
            s_='<\/tr>';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
            thismenu.a_index[n_id].s_opt={'textid':textid,'parent_n_id':p_n_id,'child_n_id':c,'n_id':n_id,'depth':n_depth,'a_config':a_config,'colnum':thismenu.colnum};
        }
        s_='<\/table>';
        (b_ie?menuline[ln++]=s_:menuline+=s_);
        if(!mn_depth){
            s_='<\/div>';
            (b_ie?menuline[ln++]=s_:menuline+=s_);
        }
        if(b_ie) menuline = menuline.join('');
        return menuline;
 
    }
 
    function mitem_getprop (thismenu,s_key,depth) {
        if(depth == -1) return(null);
        var s_value = null,a_level = thismenu.a_tpl[depth];
        if(a_level) s_value = a_level[s_key];
        if(s_value!=null) return(s_value);
        if((typeof(thismenu.a_tpl[depth])!='undefined')||(s_value==null))
             return mitem_getprop(thismenu,s_key,depth-1);
        return (null);
    }

 
    function mitem_getstyle (thismenu,n_pos, n_state, depth) {
        var a_css = mitem_getprop(thismenu,'css',depth);
        var a_oclass = a_css[n_pos ? 'inner' : 'outer'];
 
        if (typeof(a_oclass) == 'string') return a_oclass;
        if (typeof(a_oclass) == 'undefined') return null;
 
        for (var n_currst = n_state; n_currst >= 0; n_currst--)
            if (a_oclass[n_currst]) return a_oclass[n_currst];
        return null;
    }

    function mnCopyObj(obj_from)
    {
        var i,obj=[];
        for(i in obj_from){
            if(typeof(obj_from[i])=='function') continue;
            if(typeof(obj_from[i])== 'object') obj[i] = mnCopyObj(obj_from[i]);
            else obj[i] = obj_from[i];
        }
        return obj;
    }
})();
 
 

function MDCall(url,ctype,target)
{
    var newArg = '';
    var holdArg = "";
    var oweAmp = 0;
    var eqAmp = 0;
    var ar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_?@%";
    var firstEqual = 1;

    if (!(target != null && target.length != 0))
    {
        // see if window has target
        var hele = d.getElementsByTagName('BASE');
        if(hele != null)
        {
            var tar = hele.href;
            if(tar != null)
                target = tar;
        }
    }


    if (target != null && target.length != 0) 
        window.open(url, target);
    else
        document.location = url; 
}

function selectTab(win,tablenumber)
{
    var dobj,dobj_t,dobj1,toa,tob,obj;
    var mytable = MyTable[tablenumber];
    if(mytable.currTab==win) return;

    if(mytable.currTab==-1) {
        mytable.maintable.wbody.style.display = "none";
    } else {
        obj = winToDiv(mytable.currTab,mytable.maintable.wbodyMain);
        obj.style.display = "none";
    }


    if(mytable.currTab==-1) {
        dobj_t=d.getElementById('tab_'+tablenumber);
        toa=d.getElementById('taba_'+tablenumber);
        tob=d.getElementById('tabb_'+tablenumber);
    } else {
        dobj_t=d.getElementById('tab_'+tablenumber+'_'+mytable.currTab);
        toa=d.getElementById('taba_'+tablenumber+'_'+mytable.currTab);
        tob=d.getElementById('tabb_'+tablenumber+'_'+mytable.currTab);
    }
    var tns ='tabPagingTextTabo';
    if(b_mobile) tns = 'arMobileTab';
    dobj_t.className=tns;
    if(toa) toa.className=tns;
    if(tob) tob.className=tns;

    if(win==-1) {
        mytable.maintable.wbody.style.zIndex=mytable.zIndexCounter++;
        mytable.maintable.wbody.style.display = "block";
    } else {
        obj = winToDiv(win,mytable.maintable.wbodyMain);
        obj.style.zIndex = mytable.zIndexCounter++;
        obj.style.display = "block";
        maxwin(win);
    }

    if(win==-1) {
        dobj_t=d.getElementById('tab_'+tablenumber);
        toa=d.getElementById('taba_'+tablenumber);
        tob=d.getElementById('tabb_'+tablenumber);
    } else {
        dobj_t=d.getElementById('tab_'+tablenumber+'_'+win);
        toa=d.getElementById('taba_'+tablenumber+'_'+win);
        tob=d.getElementById('tabb_'+tablenumber+'_'+win);
    }
    tns = 'tabPagingTextTabi';
    if(b_mobile) tns = 'arMobileTabSelected';
    dobj_t.className=tns;
    if(toa) toa.className=tns;
    if(tob) tob.className=tns;

    mytable.currTab=win;
    if(win!=-1) {
        if(MyTable[pwn[win].table_number].delayChart)
            window.setTimeout(MyTable[pwn[win].table_number].delayChart,0);
    }

    // trigger Adaptive dashboard's updateCurrentChart method when switching tabs, 
    // in case a resize of a chart's outer container is needed
    if(b_mobile && 
        arDisplayMode == DISPLAY_MODE_ADAPTIVE && 
        typeof ARMobileDashboards != 'undefined') {
        ARMobileDashboards[0].updateCurrentChart();
    }
}

function switchTab(tn,what)
{
    var mytable,dobj,mt,i,id;
    var wd,ht,line,win,wobj;

    mytable = MyTable[tn];
    mt = "MAINTABLE"+mytable.a_cntl.table_number;
    if(mytable.a_cntl.WindowDisplay==what) return;
    mytable.a_cntl.WindowDisplay=what;
    displayTab(mytable.a_cntl.WindowDisplay,mytable.a_cntl.table_number,-1);
    ibi_add_popmenu(mytable);
    buildminwin();
}


function displayTab(dtype,tablenumber,twin) 
{
    var dobj,dobj1,mt,i,id,classStr,dwobj,dobj_b,dobj_e;
    var maxwd,maxht,line,win,wobj,ty,tabname;
    mt = 'MAINTABLE'+tablenumber;
    var tn = maxwindows+1;
    if(tablenumber!=-1) tn=tablenumber;
    var mytable = MyTable[tn];
    var wall;

    if(mytable.a_cntl.reportView>REPORTPIVOT) return;
    if(dtype=='tab') {
        line = "<table><tr>";
        if(twin==-1) {
            if(b_mobile) classStr="class='arMobileTab'";
            else classStr="class='tabPagingTextTabi'";
            if(mytable.maintable.wbody) {
                mytable.maintable.wbody.style.zIndex = mytable.zIndexCounter++;
                mytable.maintable.wbody.style.display = "block";
            }
            mytable.currTab=-1;
        }
        else {
            if(b_mobile) classStr="class='arMobileTab'";
            else classStr="class='tabPagingTextTabo'";
            if(mytable.maintable.wbody) 
                mytable.maintable.wbody.style.display = "none";
        }
        var sextra = "border:2px solid #ECE9D8;";
        if(b_mobile) sextra = "";
        line+='<td id="tab_'+tn+'" '+classStr+' style="white-space:nowrap;cursor:pointer;'+sextra+'"><div style="white-space:nowrap" ';
        line+=' onclick="selectTab(-1,'+tn+')">&nbsp;'+ibiMsgStr['Report']+'&nbsp;<\/div><\/td>';
        /*if(twin!=-1) {
            mytable.maintable.wbody.style.zIndex = 0;
        }*/
        for (i = 0; i < maxwindows; i++) {
            ty = pwn[i].type;
            tabname='tab';
            if((pwn[i].table_number==tn)&&(ty!=typetab)&&(ty!=typepmt)) {
                wobj = d.getElementById('WCS'+i);
                if(pwn[i].dobj_e) pwn[i].dobj_e.style.display='none';
                if(pwn[i].dobj_t) pwn[i].dobj_t.style.display='none';
                if(wobj) wobj.style.display='none';

                robj = d.getElementById('resize'+i);
                if(robj) {
                    robj.innerHTML='';
                }
                if(ty==typechart) tabname=ibiMsgStr['Chart'];
                else
                if(ty==typepivot) tabname=ibiMsgStr['Pivot'];
                else
                if(ty==typefilt) tabname=ibiMsgStr['Filter'];
                else
                if(ty==typenotes) tabname=ibiMsgStr['notes'];
                else
                if(ty==typecols) tabname=ibiMsgStr['gridtool'];
                else
                if(ty==typeechart) tabname=ibiMsgStr['charttool'];
                else
                if(ty==typeepivot) tabname=ibiMsgStr['pivottool'];        
                if(twin==i) {
                    if(b_mobile) classStr="class='arMobileTabSelected'";
                    else classStr="class='tabPagingTextTabi'";
                    mytable.currTab=i;
                } else {
                    if(b_mobile) classStr="class='arMobileTab'";
                    else classStr="class='tabPagingTextTabo'";
                }
                line+='<td id="tab_'+tn+'_'+i+'" '+classStr+' style="white-space:nowrap;cursor:pointer;'+sextra+'">';
                line+='<table border=0><tr><td id="taba_'+tn+'_'+i+'" '+classStr+'style="white-space:nowrap"><div style="white-space:nowrap" ';
                line+='onclick="selectTab('+i+','+tn+')">'+tabname+'<\/div><\/td><td id="tabb_'+tn+'_'+i+'" '+classStr+'>';
                line+='<div onclick="closewin('+i+')">'+ibiSkin.clsicon+'<\/div><\/td><\/tr><\/table>';
                line+='<\/td>';
                var obj = winToDiv(i,mytable.maintable.wbodyMain);
                if(twin==i) {
                    obj.style.zIndex = mytable.zIndexCounter++;
                    obj.style.display = "block";
                    if(!mytable.n_border) {
                        wall = document.getElementById("wall" + twin);
                        if(wall) {
                            wall.style.border = "0";
                        }
                    }
                    maxwin(i);
                } else {
                    obj.style.display = "none";
                    //obj.style.zIndex = 0;
                }
            }
        }
        line+='<\/tr><\/table>';
        if(mytable.maintable.wmenu) {
            mytable.maintable.wmenu.style.height='26px';
            mytable.maintable.wmenu.innerHTML=line;
            mytable.maintable.wmenu.style.display="block";
        }
    } else
    if(dtype=='cascade') {
        mytable.maintable.wmenu.innerHTML=blankdot;
        mytable.maintable.wmenu.style.display="none";
        mytable.maintable.wmenu.style.height=0+'px';
        for (i = 0; i < maxwindows; i++) {
            if(pwn[i].name!=null) {
                ty = pwn[i].type;
                if((pwn[i].table_number==tn)&&(ty!=typetab)&&(ty!=typepmt)) {
                    pwn[i].dobj.style.top =(i*15+30)+'px';
                    pwn[i].dobj.style.left=(i*15)+'px';
                    //if(pwn[i].save_t!=null) pwn[i].dobj_t.innerHTML=pwn[i].save_t;
                    //if(pwn[i].save_e!=null) pwn[i].dobj_e.innerHTML=pwn[i].save_e;
                    wobj = d.getElementById('WCS'+i);

                    if(mytable.isHFreezeEnabled) {
                        wobj = pwn[i].dobj_t.querySelector('#WCS' + i);
                    }

                    if(pwn[i].dobj_e) pwn[i].dobj_e.style.display='block';
                    if(pwn[i].dobj_t) pwn[i].dobj_t.style.display='block';
                    if(wobj) wobj.style.display='block';
                    divToWin(i);
                    maxwin(i);
                    pwn[i].obj.style.zIndex = mytable.zIndexCounter++;

                    if(mytable.isHFreezeEnabled) {
                        pwn[i].obj.style.zIndex += 100;
                    }
                }
            }
        }
    } 
}


function createBytocFilter(table_number,col,id)
{
    var obj;
    var mytable = MyTable[table_number];
    mytable.s_col_filter = [];
    mytable.sfilt=[];
    if(mytable.lastTOCid==id) return;
    if(mytable.lastTOCid!=null) {
        obj = d.getElementById(mytable.lastTOCid);
        obj.setAttribute(ibiclassName,"arByTocItem");
    }
    obj = d.getElementById(id);
    obj.setAttribute(ibiclassName,"arByTocItemSelected");
    mytable.lastTOCid = id;
    if(col!=-1) {
        for(var i=0; i<col.length;i++) {
            mytable.s_col_filter[i] = [];
            mytable.s_col_filter[i][0] = col[i][0];
            mytable.s_col_filter[i][1] = 9;
            mytable.s_col_filter[i][3] = [col[i][1]];
            mytable.s_col_filter[i][4] = null;
        }
        mytable.attachForm(false,1);
    } 
    mytable.filterChange = true;
    mytable.redrawCharts = true;
    ibiGrid.show(false,mytable);
    if(mytable.a_cntl.WindowDisplay=='tab')
        displayTab('tab',table_number,mytable.currTab);
}

function createCellFilter(hlgORflt,table_number,col,row)
{
    // All highlighting is done locally, even for cache mode.
    var obj;
    var mytable = getMyTable(table_number);
    var a_body = mytable.a_all_body;
    var a_f_body = mytable.a_f_body;
    var colorg = null;
    var realRow, i, numElem;
    var dataReportIndex;
    var workTable=null;
    var fmtNum, dformat = "", dataType = "";
    var ml = a_body.length;

    if (col != -1) {
        colorg = mytable.a_capt[col].dataField;
        dformat = mytable.a_capt[col].format;
        dataType = mytable.a_capt[col].type;
    }
    mytable.filterChange = true;
    if(mytable.a_cntl.dataReport) {
        //realRow = a_f_body[row][0];
        realRow = row;
        dataReportIndex = getReportByName(mytable.a_cntl.dataReport);
        workTable =    MyTable[dataReportIndex];
    }
    if(hlgORflt==2) {// highlight row
        mytable.filterChange = false;
        if(a_body.length == a_f_body.length)
            a_body[row][1]=3;
        else {
            a_body[a_f_body[row][0]][1]=3;
            a_f_body[row][1] = 3;
        }
        if(mytable.a_cntl.dataReport) {
            workTable.a_all_cont[realRow]["$MarkedForHighLight$"] = true;
        }
    } else
    if(hlgORflt==4) { // unhighlight all
        for (i = 0; i < ml; i++) {
            a_body[i][1]=0;
            if(workTable) workTable.a_all_cont[i]["$MarkedForHighLight$"] = false;
        }
        mytable.ch_col_filter = [];
        mytable.chfilt=[];
    } else
    if(hlgORflt==3) { //unhighlight row
        mytable.filterChange = false;
        if(a_body.length == a_f_body.length)
            a_body[row][1]=2;
        else {
            a_body[a_f_body[row][0]][1]=2;
            a_f_body[row][1] = 2;
        }
        if(mytable.a_cntl.dataReport) {
            workTable.a_all_cont[realRow]["$MarkedForHighLight$"] = false;
        }
    } else
    if(hlgORflt==1) { // highlight value
        mytable.ch_col_filter = [];
        mytable.chfilt=[];
        mytable.filterChange = false;
        if(col!=-1) {
            mytable.ch_col_filter[0] = [];
            mytable.ch_col_filter[0][0] = col;
            mytable.ch_col_filter[0][1] = 9;
            fmtNum = (dataType == IBINUM)
                ? ibiStd.ibiNumberToFormat(mytable.IBs[mytable.a_cont[row][colorg][DARAW]], dformat)*1
                : mytable.IBs[mytable.a_cont[row][colorg][DARAW]];
            if((fmtNum != missingVal) && (dataType != IBINUM))
                fmtNum = fmtNum+'';
            mytable.ch_col_filter[0][3] = [fmtNum];
            mytable.ch_col_filter[0][4] = null;
            mytable.attachForm(false,5);
            mytable.ch_filter_type = 2;
        } 
    } else { //filter cell
        if (ibiStd.globalProps.unifiedFilter) {
            fmtNum = (dataType == IBINUM)
                ? ibiStd.ibiNumberToFormat(mytable.IBs[mytable.a_cont[row][colorg][DARAW]], dformat)
                : mytable.IBs[mytable.a_cont[row][colorg][DARAW]];
            ibiFilterTool.addFilter(mytable.id,col,arConstants.FILTER_IN,[fmtNum],false);
        } else {
            mytable.c_col_filter = [];
            mytable.cfilt=[];
            mytable.calcType = 0;
            mytable.o_paging.c =0;
            if(col!=-1) {
                mytable.c_col_filter[0] = [];
                mytable.c_col_filter[0][0] = col;
                mytable.c_col_filter[0][1] = 9;
                fmtNum = (dataType == IBINUM)
                    ? ibiStd.ibiNumberToFormat(mytable.IBs[mytable.a_cont[row][colorg][DARAW]], dformat)
                    : mytable.IBs[mytable.a_cont[row][colorg][DARAW]];
                if((fmtNum != missingVal) && (dataType != IBINUM))
                    fmtNum = fmtNum+'';
                mytable.c_col_filter[0][3] = [fmtNum];
                mytable.c_col_filter[0][4] = null;
                mytable.attachForm(false,2);
                mytable.calcType = 2;
                mytable.c_filter_type = 1;
            }
        }
        mytable.redrawCharts = true;
    }
    if(Events['onFilterChange'].callback!=null)
        Events['onFilterChange'].callback(table_number);
    ibiGrid.show(false,mytable);
    if(mytable.a_cntl.WindowDisplay=='tab')
        displayTab('tab',table_number,mytable.currTab);
    if(mytable.a_cntl.dataReport) {
        var isRoot = true;
        if(mytable.isRollUp) isRoot=false;
        for (i = 0, numElem = mytable.a_cont.length; i < numElem; i++) {
            var hr1 = mytable.callHigh(isRoot,mytable.a_all_cont[i]);
        }
        if(typeof(ibiActiveVis)!="undefined")
            ibiActiveVis.updateConnectedReports(workTable, mytable);
    }
}

function collapseBytoc(tn,id)
{
    var mytable = MyTable[tn];
    var i=mytable.BytocNode[id];
    var level = mytable.BytocList[i].level;
    var obj;
    var j=i+1;
    obj=d.getElementById('X'+id);
    obj.innerHTML='<span class="arByTocItem" onclick="expandBytoc('+tn+',\''+id+'\')">+<\/span>';
    while((j<mytable.BytocList.length)&&(mytable.BytocList[j].level>level)) {
        obj=d.getElementById(mytable.BytocList[j].id);
        if(obj) obj.style.display='none';
        if(mytable.BytocList[j].haschild) {
            obj=d.getElementById('X'+mytable.BytocList[j].id);
            obj.innerHTML='<span class="arByTocItem" onclick="expandBytoc('+tn+',\''+mytable.BytocList[j].id+'\')">+<\/span>';
        }
        j++;
    }
    if(mytable.a_cntl.WindowDisplay=='tab')
        displayTab('tab',tn,mytable.currTab);
}

function expandBytoc(tn,id)
{
    var mytable = MyTable[tn];
    var i=mytable.BytocNode[id];
    var level = mytable.BytocList[i].level;
    var obj;
    var j=i+1;
    obj=d.getElementById('X'+id);
    obj.innerHTML='<span class="arByTocItem" onclick="collapseBytoc('+tn+',\''+id+'\')">-<\/span>';
    while((j<mytable.BytocList.length)&&(mytable.BytocList[j].level>level)) {
        if(mytable.BytocList[j].level==level+1) {
            obj=d.getElementById(mytable.BytocList[j].id);
            if(obj) obj.style.display='block';
        }
        j++;
    } 
    if(mytable.a_cntl.WindowDisplay=='tab')
        displayTab('tab',tn,mytable.currTab);
}

function MakeByTree(mytable,obj) {
    var tn = mytable.a_cntl.table_number;
    var str = '<table class="arByToc" border=1 style="display:block;" cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing + mytable.o_css.main + ' border='+mytable.n_border+'><tr><td>';
        str+= '<table border=0 cellspacing=0 cellpading=0><tr><td style="white-space:nowrap" class="arByTocTitle">'+ibiMsgStr['toc']+'<\/td><\/tr>';
        str+= '<tr><td id="XFD_'+tn+'"><span class="arByTocItem" onclick="createBytocFilter('+mytable.a_cntl.table_number+',-1,\'XFD_'+tn+'\');">'+ibiMsgStr['all']+'<\/span><\/td><\/tr>';
    var bylist = [],expStr,spaStr,wd;
    var hlevel=-1, col, s_;
    var startRow = 0,found,val;
    var fltarray = [],id, filterCol = [];
    var tocRow = 0, level, acontLength, rowNum, i, numElems, display;
    var bytoc = mytable.a_cntl.bytoc;

    mytable.lastTOCid='XFD_'+tn;
    for (i = 0, numElems = mytable.n_cols; i < numElems; i++) {
        if(mytable.a_capt[i].isby) {
            bylist[bylist.length] = i;
            if(mytable.a_capt[i].level>hlevel) hlevel = mytable.a_capt[i].level;
        }
    }
    mytable.BytocList = [];
    mytable.BytocNode = [];

    for (i = 0, numElems = mytable.acdList.length; i < numElems; i++) {
        level = mytable.acdList[i].split(':').length;
        if (level > bytoc) { continue; }
        col = bylist[level-1];
        for (found = false, rowNum = startRow, acontLength = mytable.a_cont.length;
             rowNum < acontLength; ++rowNum) {
            if (mytable.a_cont[rowNum][col][DAACD]==mytable.acdList[i]) {
                found = true;
                break;
            }
        }
        
        if(found) {
            startRow = rowNum;
            val = mytable.IBs[mytable.a_cont[rowNum][col][DARAW]];
            fltarray[level-1] = [col,val];
            if (i === 0) { filterCol[0] = [col,val]; }
            id = "FD_"+tn+"_"+mytable.acdList[i];
            expStr = ((level <= hlevel) && (bytoc > level)) 
                     ? '<span class="arByTocItem" onclick="expandBytoc('+tn+',\''+id+'\')">+<\/span>'
                     : '<span class="arByTocitem">&nbsp;<\/span>';
            wd = level*8;
            s_ = '[';
            for(var k=0; k<level;k++) {
                s_+= (typeof fltarray[k][1] === 'number') 
                     ? '['+fltarray[k][0]+','+fltarray[k][1]+']'
                     : '['+fltarray[k][0]+',\''+fltarray[k][1]+'\']';
                if(k!=(level-1)) s_+=',';
            }
            s_+= ']';
            display = (level > 1) ? 'none' : 'block';
            mytable.BytocList[tocRow] = {'id':id,'level':level,'haschild':(level<=hlevel)};
            mytable.BytocNode[id] = tocRow;
            str+='<tr id="'+id+'" class="arByTocItem" style="display:'+display+';"><td><table><tr><td><div style="width:'+wd+'px;height:2px;">';
            str+=blankdot+'<\/div><\/td><td id="X'+id+'">'+expStr+'<\/td>';
            str+='<td style="white-space:nowrap"><span class="arByTocItem" onclick="createBytocFilter('+tn+','+s_+',\''+id+'\');">';
            str+=val+'<\/span><\/td><\/tr><\/table><\/td><\/tr>';
            tocRow++;
        }
    }
    str += '<\/table><\/td><\/tr><\/table>';
    obj.innerHTML=str;
    obj.parentNode.style.display = 'block';
    obj.style.display = "block";
    createBytocFilter(tn, filterCol, mytable.BytocList[0].id); //mimic HTML, default: display 1st row
}
