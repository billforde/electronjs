/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/ariosgrid.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180131 1430 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 180125 1807 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 180125 1507 iys 168850 NFR:AHTML FREEZING HEADINGS IN ACTIVE REPORT OUTPUT
* 171026 1119 iys 189152 Chart toolbar:Aggregation shows undefined if no measure used
* 170313 1249 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 170303 1341 bjd 189072 AHTML: Report with Across loops when the output should be 0
* 170118 0914 iys 187259 AHTML:MOB:Rollup option is not working in Full Screen View.
* 161206 1502 iys 186738 AHTML:MOB:Active chart toolbar displays additional options
* 161121 1518 iys 185445 AHTML:MOB:Total column is not visible properly in fullscree
* 161031 0844 iys 185241 Mobile: Active chart in a Document loses its Filter icon, w
* 161027 1214 iys 185244 Mobile: Freeze column fails to preserve fixed columns on iP
* 160919 1157 iys 184736 Aggregation title is displayed as "Undefined" in chart tool
* 160914 1552 iys 180538 AHTML:Toggle calculation type is not visible in active repo
* 160906 1552 iys 184126 AHTML:MOB:Pivot table is missing header in fullscreen view
* 160719 1619 iys 181424 AHTML:MOB:Full screen view reverts active chart old toolbar
* 160610 1256 hms 180534 Remove tab characters from source files
* 160301 1018 wjf 177738 Vis:Filter prompt does not work after drilldown.
* 160106 1031 bjd 163933 Subtotals not updated in Active compound Report w/ filters
* 151119 1053 iys 173950 AHTML_CACHE:MOB:Clicking original view, report crashes
* 150210 1612 iys 161706 MOB:User can`t scroll far right to view all unfrozen columns
* 141216 1104 iys 162619 MOB:iOS: Double tap on a report moves report above page bar
* 140926 1100 bjd 161008 Cmpnd AHTML:Grandtotal not refreshing w/ drop down selection
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["ariosgrid"]="$Revision: 20180131.1430 $";
//$Revision: 1.23 $
//$Log: ariosgrid.js,v $
//Revision 1.23  2014/04/10 20:19:58  Israel_Schulman
//[p136132] Only show Advanced Chart icon if ARGRAPHENGINE is JSCHART
//
//Revision 1.22  2013/12/20 16:41:33  Brian_DCruz
//[p148394] send filterType as int instead of string as CONTAINS\OMIT logic was confused in certain cases
//
//Revision 1.21  2013/12/05 21:27:41  Israel_Markhovsky
//[p148384] AHTML:SQUEEZE:Col title misalign w/ `%of Total` calculation
//
//Revision 1.20  2013/12/02 17:56:56  William_Forde
//[p154865] Fix javascript error with noprint by and no measures.
//
//Revision 1.19  2013/11/13 03:31:02  William_Forde
//[p134795] fix issue on mobile menu and 508.
//
(function() {
    var mytable = null;
    var isHead=1;
    var isFoot=2;
    var isGrandTotal=3;
    var isTableHead=4;
    var isAcHead=5;
    var isTableFoot=6;
    var isSubHead=7;
    var isSubFoot=8;
    var isSubTotal=9;
    var isSkipLine=10; 
    var isSubCalc=20;

    if (typeof window.ibiIosGrid !== 'undefined') {
        return;
    }

    window.ibiIosGrid = {
        setMyTable    :SetMyTable,
        removePage    :removePageDiv,
        showPageControl    :showPageCounter,
        showChart    :ShowChart,
        showFilterMenu    :ShowFilterMenu,
        show        :IShow,
        selectTab    :SelectTab,
        closeTab    :CloseTab,
        showPivot    :drawPivotTableMobile,
        cancelDrags    :CancelDrags,
        zoom        :ZoomTab,
        clearTap    :ClearTap,
        fixFreeze    :IFixFreeze,
        DisplayFilterTab :BuildFilterTab,
        DisplayFilterBody:displayFilterWindow,
        build_Filtvals    :build_filtvals,
        timeout_sc    :null,
        gotoPage    :gotoThisPage
    };

    function IMarkSelection() {
        var obj;
        for(var i=0; i<mytable.highRow.length;i++){
            obj = d.getElementById(mytable.highRow[i]);
            if(obj) IExeMark(null,obj);
        }
    }

    function IExeMark(o_cell,o_row){
        if(typeof(o_row)=="undefined") o_row = o_cell.parentNode;
        var id, i, s_add, o_other_row;
        if(!mytable.n_prev_sel_row)mytable.n_prev_sel_row=0;
        var n_id = o_row.id.match(/([0-9,'.']+)$/)[0];

        if(o_row.id == 'I' + mytable.id+ 'r'+n_id){
            o_other_row = d.all ? d.all['I' + mytable.id + 'l'+n_id] : d.getElementById('I' + mytable.id + 'l'+n_id);    
            s_add = 'l';
        }else{
            o_other_row = d.all ? d.all['I' + mytable.id+ 'r'+n_id] : d.getElementById('I' + mytable.id + 'r'+n_id);
            s_add = 'r';
        }

        if (o_row.marked) {
            o_row.style.backgroundColor = o_row.saveback;
            if (o_row.childNodes) {
                for (i = 0; i < o_row.childNodes.length; i++) {
                    o_row.childNodes[i].style.backgroundColor = o_row.childNodes[i].saveback;
                }
            }
            if(o_other_row) {
                o_other_row.marked = false;
                o_other_row.style.backgroundColor = o_other_row.saveback;
                if (o_other_row.childNodes) {
                    for (i = 0; i < o_other_row.childNodes.length; i++) {
                        o_other_row.childNodes[i].style.backgroundColor = o_other_row.childNodes[i].saveback;
                    }
                }
            }
            for(i=0;i<mytable.a_f_body.length;i++)
                if(mytable.a_f_body[i][0] == n_id)
                    mytable.a_f_body[i][1]=0;
            o_row.marked = false;
        } else {
            o_row.marked = true;
            o_row.style.backgroundColor = mytable.o_color.marked;
            o_row.saveMark = mytable.o_color.marked;    
            if (o_row.childNodes) {
                for (i = 0; i < o_row.childNodes.length; i++) {
                    o_row.childNodes[i].style.backgroundColor = mytable.o_color.marked;
                }
            }
            if(o_other_row) {
                o_other_row.marked = true;
                o_other_row.style.backgroundColor = mytable.o_color.marked;
                o_other_row.saveMark = mytable.o_color.marked;
                if (o_other_row.childNodes) {
                    for (i = 0; i < o_other_row.childNodes.length; i++) {
                        o_other_row.childNodes[i].style.backgroundColor = mytable.o_color.marked;
                    }
                }
            }
     
        }
    }


    function SetMyTable(itable)
    {
        mytable = itable;
    }

    function ibi_ios_stopmove_grid(e)
    {
        e.preventDefault();
    }

    var pagingDivs = null;
    var current_paging = 0;
    var topdiv = null;
    var middiv = null;
    var botdiv = null;
    var tabdiv = null;
    var prevPage = [];
    var tabsDivs = null;
    var paging_done = true;
    var numberdiv = null;

    function SelectTab(tab,force)
    {
        if((tab==mytable.tabCurrent)&&(!force)) return;
        if(mytable.tabCurrent!=-1) {
            for(var j in mytable.tabChildren) {
                if(mytable.tabChildren[j].root) 
                    mytable.tabChildren[j].fullDiv.style.display='none';
                else
                if(pwn[mytable.tabChildren[j].window].type == typefilt)
                    mytable.fullDivFilter.style.display = 'none';
                else
                    mytable.tabChildren[j].fullDiv.style.display='none';
            }
        }
        if(tab!=-1) {
            if(mytable.tabChildren[tab].root) {
                mytable.tabChildren[tab].fullDiv.style.display = 'block';
                mytable.tabChildren[tab].fullDiv.style.zIndex = 10;
            } else
            if(pwn[mytable.tabChildren[tab].window].type == typefilt) {
                mytable.fullDivFilter.style.display = "block";
                mytable.fullDivFilter.style.zIndex = 10;
            } else {
                mytable.tabChildren[tab].fullDiv.style.display = 'block';
                mytable.tabChildren[tab].fullDiv.style.zIndex = 10;
            }
        } 
        mytable.tabCurrent = tab;
        tabdiv.innerHTML = IBuildTab();
        if(tab!=-1) {
            if(mytable.tabChildren[tab].root) {
                ShowChartControls(mytable.tabChildren[tab]);
            } else
            if(pwn[mytable.tabChildren[tab].window].type == typefilt) {
                topdiv.innerHTML = IBuildPage(-1);
                BuildFilterTab(mytable.tabChildren[tab].window,0);
            } else {
                ShowChartControls(mytable.tabChildren[tab]);
            }
        }
        else {
            topdiv.innerHTML = IBuildPage(-1);
            botdiv.innerHTML = IBuildPageBot();
        }
    }


    function IBuildTab()
    {
        var dobj,dobj1,mt,i,id,classStr,dwobj,dobj_b,dobj_e;
        var maxwd,maxht,line,win,wobj,ty,tabname;
        var twin;
        mt = 'MAINTABLE'+mytable.id;
        var tn = mytable.id;
        var status_color  = mytable.a_cntl.statbackcolor;
        if(!status_color) status_color="#C8C8C8";

        line = '<table HEIGHT="100%"><tr>';
        if(mytable.tabCurrent==-1)
            classStr="class='arMobileTabSelected'";
        else
            classStr="class='arMobileTab'";

        line+='<td id="tab_'+tn+'"  style="cursor:pointer;white-space:nowrap" ><div style="white-space:nowrap" ';
        line+=' '+classStr+' onclick="ibiIosGrid.selectTab(-1)">';
        line+='<table height="100%"><tr><td valign="middle">';
        line+= '&nbsp;'+ibiMsgStr['Report']+'&nbsp;<\/td><\/tr><\/table><\/div><\/td>';
        for(var j in mytable.tabChildren) {
            var tabSel = j;
            if(mytable.tabChildren[j].root) {
                ty = typechart;
            } else {
                i = mytable.tabChildren[j].window;
                pwn[i].appTab = j;
                ty = pwn[i].type;
            }
            tabname='tab';

            if(mytable.tabChildren[j].root) tabname=ibiMsgStr['Chart'];
            else
            if(ty==typechart) {
                if(mytable.tabChildren[j].parms.cctype==4)tabname=ibiMsgStr['crtroll'];
                else tabname=ibiMsgStr['Chart'];
            } else
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
            if(mytable.tabCurrent == j) {
                classStr="class='arMobileTabSelected'";
                //mytable.currTab=i;
            } else classStr="class='arMobileTab'";
            line+='<td valign="middle" id="tab_'+tn+'_'+i+'" style="white-space:nowrap;cursor:pointer;">';
            line+='<div style="white-space:nowrap" '+classStr+'>';
            line+='<table height="100%" border=0><tr><td valign="middle">';
            line+='<span style="white-space:nowrap" onclick="ibiIosGrid.selectTab(\''+tabSel+'\')">'+tabname+'<\/span>';
            line+='<\/td>';
            if(!mytable.tabChildren[j].root) {
                line+='<td valign="middle">';
                //line+='<span onclick="ibiIosGrid.closeTab(\''+tabSel+'\')">'+ibiSkin.cls20icon+'<\/span>';
                line+='<span onclick="closewin('+i+')">'+ibiSkin.cls20icon+'<\/span>';
                line+='<\/td>';
            }
            line+='<\/tr><\/table>';
            line+='<\/div>';
            line+='<\/td>';
        }
        line+='<\/tr><\/table>';
        return line;
    }

    function getFreeTabDiv()
    {
        for(var i=0; i<10;i++)
            if(tabsDivs[i].innerHTML=="free") return(tabsDivs[i]);
        return null;
    }

    function CloseTab(mytable,tab)
    {
        if(typeof(tab)=='undefined' || !ibiMobileFullscreen) return;
        if(mytable.tabChildren[tab].fullDiv) {
            mytable.tabChildren[tab].fullDiv.innerHTML='free';
            mytable.tabChildren[tab].fullDiv.style.display="none";
        }
        var newChildren = new Object();
        for(var j in mytable.tabChildren) 
            if(j!=tab) newChildren[j] = mytable.tabChildren[j];
        mytable.tabChildren = newChildren;
        tabdiv.innerHTML = IBuildTab();
        SelectTab(-1,true);
    }

    function ShowChart(pn,redraw)
    {
        if(typeof(mytable.tabChildren) == "undefined") mytable.tabChildren = new Object();
        mytable.tabChildren[pn.id] = pn;
        mytable.tabCurrent = pn.id;
        if((typeof(pn.fullDiv) == "undefined")||(redraw)) {
            if(!pn.fullDiv) pn.fullDiv = getFreeTabDiv();
            pn.fullDiv.style.zIndex=10;
            pn.fullDiv.style.display = "block";
            pn.fullDiv.style.backgroundColor="white";
            pn.fullDiv.innerHTML = '';
            ibiChart.showChart(pn,pn.fullDiv,true);
        }
        tabdiv.innerHTML = IBuildTab();
        ShowChartControls(pn);
    }


    function ShowChartControls(pn)
    {
        var ctype = pn.saveable.ctype;
        var pid='cpop_f_'+pn.parms.win;
        var subTable = pn.parms.subTable;
        if(subTable>-1) pid+='_'+subTable;
        var win = pn.parms.win;
        var linked = pn.parms.linked;
        var sid = 'SUMFS_'+win;
        if(subTable>-1) sid+='_'+subTable;
        
        var status_bcolor = "";
        if(pn.tcntl.statbackcolor) status_bcolor= 'background-color:'+pn.tcntl.statbackcolor+';';
        var status_color = "";
        if(pn.tcntl.statcolor) status_color = 'color:'+pn.tcntl.statcolor+';';

        var type_chart  = '<table><tr>';
           type_chart += '<td valign="MIDDLE" style="width:30px;"><div style="cursor:pointer;"  id="'+pid+'">'+ibiSkin.cpopicon+'<\/div><\/td>';
            if(ctype!=5) {
                if(!pn.tcntl.hasBuckets) {
                    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtbar']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',2,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.bar24icon+'<\/div><\/td>';
                    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtpie']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',0,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.pie24icon+'<\/div><\/td>';
                    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtline']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',1,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.line24icon+'<\/div><\/td>';
                    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtscat']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',3,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.scat24icon+'<\/div><\/td>';
                }
                if(win>-1)    
                    type_chart += '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtroll']+'" style="cursor:pointer;"  onclick="ibiChart.makeChartNType('+win+',4,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.roll24icon+'<\/div><\/td>';

                if(b_mobile && arGraphEngine == arGraphEngineJSCHART)
                    type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['crtadm']+'" style="cursor:pointer"  onclick="ibi_iPadMenu.ShowChartPickerTool('+win+','+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.advChartIcon+'<\/div><\/td>';
                type_chart += '<td valign="MIDDLE"><div title="'+ibiMsgStr['OrigChart']+'" style="cursor:pointer"  onclick="ibiChart.makeChartNType('+win+',-1,'+mytable.a_cntl.table_number+','+subTable+')">'+ibiSkin.initchart+'<\/div><\/td>';
            }
            
            if(win>-1) 
                type_chart += '<td valign="MIDDLE"><div id="LINKIMG'+win+'_'+subTable+'" style="cursor:pointer;"  onclick="ibiChart.toggleFiltLink('+win+','+mytable.id+','+subTable+')">'+(linked?ibiSkin.unlinkicon:ibiSkin.linkicon)+'<\/div><\/td>';
            type_chart += '<\/tr><\/table>';
    
        var sum_line  = '<table><tr>';
            sum_line += '<td style="white-space:nowrap" width="90" valign="TOP" class="tabPagingText1"><div style="white-space:nowrap" id="'+sid+'" class="tabPagingText1" style="cursor:pointer;width:90px;"><\/div><\/td>';
            sum_line += '<\/tr><\/table>';

        var line  = '<table style="'+ status_bcolor+status_color +'" border=0 cellspacing=0 cellpadding=0><tr height="28">';
        line += '<td style="white-space:nowrap;border-right:2px solid #F0F0F0;" Valign="MIDDLE">'+type_chart+'<\/td>';
        line += '<td Width="90" style="white-space:nowrap;border-right:2px solid #F0F0F0;" Valign="MIDDLE">'+sum_line+'<\/td>';
        
        if((typeof(ibiCompound.chartFilters) != "undefined") && (ibiCompound.chartFilters.length))
            line += '<td VALIGN="MIDDLE"><div title="'+ibiMsgStr['crtcflt']+'" style="width:90px;cursor:pointer;"  onclick="ibiChart.removeFilter()">'+ibiSkin.cflticon+'<\/div><\/td>';

        line += '<\/tr><\/table>';
        botdiv.innerHTML = line;
        if(pn.parms.cctype!=4) topdiv.innerHTML = IBuildPage(pn.parms.cctype);
        if(ctype!=chartIsPivot) {
            var noAgg = pn.saveable.btypeArray.length === 0;

            ibiChart.buildChartdrop(mytable,pid,win,ibiSkin.cpopicon,sum_line,pn,ctype,subTable);

            if(!noAgg) {
            sumprt='<table width="90" border=0 cellspacing=0><tr><td width="24">'+ibiSkin.sumicon+'<\/td><td width="*" style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+a_calc_all_types_display[pn.saveable.btypeArray[0]]+'<\/td><\/tr><\/table>';
            } else {
                sumprt='<table width="90" border=0 cellspacing=0><tr><td width="24">'+ibiSkin.sumicon+'<\/td><td width="*" style="white-space:nowrap;color:#8494a9;" valign="TOP" class="tabPagingText1">'+ibiMsgStr["none"]+'<\/td><\/tr><\/table>';
            }
            
            ibiChart.buildChartagg(mytable,sid,win,sumprt,pn,ctype,subTable,noAgg);
        } else {
            ibiPivot.buildChartdrop(mytable,pid,win,ibiSkin.cpopicon,sum_line,pn,ctype,subTable);
            sumprt='<table width="90" border=0 cellspacing=0><tr><td width="24">'+ibiSkin.sumicon+'<\/td><td width="*" style="white-space:nowrap" valign="TOP" class="tabPagingText1">'+a_calc_all_types_display[pn.saveable.btypeArray[0]]+'<\/td><\/tr><\/table>';
            ibiPivot.buildChartagg(mytable,sid,win,sumprt,pn,ctype,subTable);
        }
    }

    var tabHeight=30;
    var topHeight=40;
    var botHeight=40;
    
    // Sets global properties such as middiv, pagingDivs, etc. for HFREEZE
    // feature where each grid requires its own custom set of elements
    // since there may be multiple instances of the iosgrid (compound) 
    function setGlobalsForIndividualTable(tableId) {
        topdiv = null;
        middiv = null;
        tabdiv = null;
        botdiv = null;
        pagingDivs = null;
        current_paging = 0;
        
        if(MyTable[tableId]) {
            if(document.getElementById('iosfullscreenmid' + tableId)) {
                topdiv = document.getElementById('iosfullscreentop' + tableId);
                middiv = document.getElementById('iosfullscreenmid' + tableId);
                tabdiv = document.getElementById('iosfullscreentab' + tableId);
                botdiv = document.getElementById('iosfullscreenbot' + tableId);
            }
        }
    }
    
    function IShow (Mytable,myDiv) {
        var tmytable=null;
        var id, s1, s2, i, snode;
        mytable = Mytable;
        var ttcmytable = mytable;
        mytable.iosDiv = myDiv;

        var h = parseInt(mytable.iosDiv.style.height,10);
        ibiIosGrid.timeout_sc = null;
        mytable.showChartFunc = ibiIosGrid.showChart;
        mytable.showFilterFunc = ibiIosGrid.showFilterMenu;
        
        if(mytable.isRollUp) {
            id = "iosFRU_" + mytable.id;
            myDiv.innerHTML = '<div style="position:relative;overflow:hidden;background-color:white;width:'+myDiv.style.width+';height:'+myDiv.style.height+';"><div style="overflow:visible;position:absolute;left:0px;top:0px;" id="'+id+'"><\/div><\/div>';
            var dobj = document.getElementById(id);
            dobj.innerHTML = IBuild();
            s1 = mytable.id+"_"+mytable.o_paging.c;
            fixColumns(s1);
            s2 = mytable.id+"_"+mytable.o_paging.c+"_r";
            fixColumns(s2);
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            topdiv.innerHTML = IBuildPage(-1);
            mytable.rollupDiv = dobj;
            mytable = MyTable[mytable.parent_table];
            return;
        }
        
        if(mytable.isHFreezeEnabled) {
            setGlobalsForIndividualTable(mytable.id);
        }
        
        myDiv.innerHTML = '';
        if(numberdiv == null) {
            numberdiv = document.createElement('div');
            numberdiv.setAttribute(ibiclassName,'pageNumber');
            numberdiv.style.display = 'none';
        }
        myDiv.appendChild(numberdiv);
        if(topdiv == null) {
            topdiv = document.createElement('div');
            topdiv.setAttribute('id','iosfullscreentop'+mytable.id);
            if(!mytable.isHFreezeEnabled) {
                topdiv.setAttribute(ibiclassName,'iosGridTop');   
            }
            topdiv.style.backgroundColor="#C8C8C8";
        }
        myDiv.appendChild(topdiv);
        if(tabdiv == null) {
            tabdiv = document.createElement('div');
            if(!mytable.isHFreezeEnabled) {
                tabdiv.setAttribute(ibiclassName,'iosGridTab arMobileTabBar');    
            }
            tabdiv.setAttribute('id','iosfullscreentab'+mytable.id);
            
            //tabdiv.style.backgroundColor="#C8C8C8";
        }
        myDiv.appendChild(tabdiv);
        
        if(middiv == null) {
            middiv = document.createElement('div');
            middiv.setAttribute('id','iosfullscreenmid'+mytable.id);
            if(!mytable.isHFreezeEnabled) {
                middiv.setAttribute(ibiclassName,'iosGridMid');
            }
            middiv.style.backgroundColor="white";
            snode = mytable.getReportStyle('NODE');
            if(snode.backgroundColor!=null && snode.backgroundColor.toLowerCase() != 'transparent') middiv.style.backgroundColor = snode.backgroundColor;
            middiv.style.zIndex = 10;
        }
        myDiv.appendChild(middiv);

        if(botdiv == null) {
            botdiv = document.createElement('div');
            botdiv.setAttribute('id','iosfullscreenbot'+mytable.id);
            if(!mytable.isHFreezeEnabled) {
                botdiv.setAttribute(ibiclassName,'iosGridBot');
            }
            botdiv.style.backgroundColor="#C8C8C8";
        }
        myDiv.appendChild(botdiv);

        middiv.innerHTML = "";
        
        if(mytable.isHFreezeEnabled) {    
            pagingDivs = [document.createElement('div')];
            pagingDivs[0].classList.add('slide');
            pagingDivs[0].setAttribute('id', 'hfreezeGridPage_' + mytable.id);
            ibiUtil.cssText(pagingDivs[0], {
                left: 0,
                top: 0,
                height: h,
                width: parseInt(myDiv.style.width,10),
                backgroundColor: (mytable.getReportStyle('NODE').backgroundColor) ? mytable.getReportStyle('NODE').backgroundColor : pagingDivs.style.backgroundColor 
            });
            
            middiv.appendChild(pagingDivs[0]);
            
        } else {
            if(pagingDivs == null) {
                pagingDivs = [];
                for (i = 0; i < 10; i++) {
                    pagingDivs[i] = document.createElement('div');
                    pagingDivs[i].setAttribute(ibiclassName,'slide');
                    pagingDivs[i].style.zIndex = 0;
            
                }
            }
            
            for (i = 0; i < 10; i++) {
                pagingDivs[i].style.left = '0px';
                pagingDivs[i].style.top = '0px';
                pagingDivs[i].style.height = h+'px';
                pagingDivs[i].style.width = parseInt(myDiv.style.width,10)+'px';
                pagingDivs[i].style.display = 'none';
                pagingDivs[i].innerHTML='';
                snode = mytable.getReportStyle('NODE');
                if(snode.backgroundColor!=null) pagingDivs[i].style.backgroundColor = snode.backgroundColor;
                middiv.appendChild(pagingDivs[i]);
            }
        }
        
        var mh = h-(tabHeight+topHeight+botHeight);
        var mhp = tabHeight+topHeight;
        if(zoomMid) {
            mh = h;
            mhp = 0;
        }

        current_paging = 0;
        pagingDivs[0].style.display = 'block';
        //middiv.appendChild(pagingDivs[0]);

        if(tabsDivs == null) {
            tabsDivs = [];
            for (i = 0; i < 10; i++) {
                tabsDivs[i] = document.createElement('div');
                tabsDivs[i].setAttribute(ibiclassName,'sliden');
                tabsDivs[i].setAttribute('id','iosTabs'+i);
                tabsDivs[i].style.zIndex = 0;
                tabsDivs[i].style.display = 'none';
            }
        }
        var hastabs = false;
        for(var j in mytable.tabChildren) hastabs = true;

        for (i = 0; i < 10; i++) {
            tabsDivs[i].style.left = '0px';
            tabsDivs[i].style.top = '0px';
            tabsDivs[i].style.height = mh+'px';
            tabsDivs[i].style.width = parseInt(myDiv.style.width,10)+'px';
            if(!hastabs) {
                tabsDivs[i].innerHTML="free";
                //tabsDivs[i].style.display="none";
            }
            tabsDivs[i].style.display="none";
            middiv.appendChild(tabsDivs[i]);
        }

        tabdiv.style.height = tabHeight+'px';
        tabdiv.style.width = parseInt(myDiv.style.width,10)+'px';
        tabdiv.style.top = '0px';
        tabdiv.style.left = '0px';
    
        topdiv.style.height = topHeight+'px';
        topdiv.style.width = parseInt(myDiv.style.width,10)+'px';
        topdiv.style.top = tabHeight+'px';
        topdiv.style.left = '0px';

        middiv.style.height = mh+'px';
        middiv.style.width = parseInt(myDiv.style.width,10)+'px';
        middiv.style.top = mhp+'px';
        middiv.style.left = '0px';

        botdiv.style.height = botHeight+'px';
        botdiv.style.width = parseInt(myDiv.style.width,10)+'px';
        botdiv.style.top = h-botHeight+'px';
        botdiv.style.left = '0px';

        numberdiv.style.top = parseInt((parseInt(myDiv.style.height, 10) / 2), 10)+'px';
        numberdiv.style.left = parseInt((parseInt(myDiv.style.width, 10) / 2), 10)+'px';

        //IMarkSelection();
        //if(!isCompoundCall) ibi_add_images();
         SelectTab(-1,true);
        mytable.tabCurrent = -1;

        topdiv.innerHTML = IBuildPage(-1);
        tabdiv.innerHTML = IBuildTab();
        botdiv.innerHTML = IBuildPageBot();

        pagingDivs[current_paging].style.webkitTransition='';
        if(!mytable.isHFreezeEnabled) {
            pagingDivs[current_paging].style.webkitTransform='translate3d(0,0,0)';
        }
        
        pagingDivs[current_paging].innerHTML = IBuild();
        IMarkSelection();
        s1 = mytable.id+"_"+mytable.o_paging.c;
        fixColumns(s1);
        s2 = mytable.id+"_"+mytable.o_paging.c+"_r";
        fixColumns(s2);
        if(mytable.n_freeze_column) fixrows(s1,s2);
        if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
        
        if(mytable.isHFreezeEnabled) {
            buildHFreezeStatusBar(mytable);
            configureSlideForHFreeze({
                slide: middiv.querySelector('.slide'), 
                container: myDiv, 
                mytable: mytable
            });

            // if single page report, set middiv width to width of page so slides are positioned properly
            if(!middiv.style.width) {
                middiv.style.width = window.innerWidth + 'px';
            }
            topdiv.style.display = 'none';
            tabdiv.style.display = 'none';
            botdiv.style.position = 'absolute';
            botdiv.style.height = 'auto';
            botdiv.style.top = '';
            botdiv.style.bottom = '0';
            botdiv.style.backgroundColor = '#fff';
        }

        var status_color  = mytable.a_cntl.statbackcolor;
        if(!status_color) status_color="#C8C8C8";

        if(!mytable.isHFreezeEnabled) {
            topdiv.style.backgroundColor = status_color;
            botdiv.style.backgroundColor = status_color;

            if('ontouchstart' in topdiv) {
                topdiv.addEventListener("touchstart",ibi_ios_topstart,false);
                topdiv.addEventListener("touchmove",ibi_ios_topmove,false);
                topdiv.addEventListener("touchend",ibi_ios_topstop,false);

                middiv.addEventListener("touchstart",ibi_ios_midstart,false);
                middiv.addEventListener("touchmove",ibi_ios_midmove,false);
                middiv.addEventListener("touchend",ibi_ios_midstop,false);

                botdiv.addEventListener("touchstart",ibi_ios_topstart,false);
                botdiv.addEventListener("touchmove",ibi_ios_topmove,false);
                botdiv.addEventListener("touchend",ibi_ios_topstop,false);
            } else 
            if('addEventListener' in topdiv) {
                topdiv.addEventListener("mousedown",ibi_ios_topstart,false);
                topdiv.addEventListener("mousemove",ibi_ios_topmove,false);
                topdiv.addEventListener("mouseup",ibi_ios_topstop,false);

                middiv.addEventListener("mousedown",ibi_ios_midstart,false);
                middiv.addEventListener("mousemove",ibi_ios_midmove,false);
                middiv.addEventListener("mouseup",ibi_ios_midstop,false);
        
                botdiv.addEventListener("mousedown",ibi_ios_topstart,false);
                botdiv.addEventListener("mousemove",ibi_ios_topmove,false);
                botdiv.addEventListener("mouseup",ibi_ios_topstop,false);
            } else {
                topdiv.attachEvent("onmousedown",ibi_ios_topstart);
                topdiv.attachEvent("onmousemove",ibi_ios_topmove);
                topdiv.attachEvent("onmouseup",ibi_ios_topstop);

                middiv.attachEvent("onmousedown",ibi_ios_midstart);
                middiv.attachEvent("onmousemove",ibi_ios_midmove);
                middiv.attachEvent("onmouseup",ibi_ios_midstop);
        
                botdiv.attachEvent("onmousedown",ibi_ios_topstart);
                botdiv.attachEvent("onmousemove",ibi_ios_topmove);
                botdiv.attachEvent("onmouseup",ibi_ios_topstop);
            }
        }

        if(mytable.a_cntl.reportView!=REPORTGRID) {
            mytable.chartinfo.root = true;
            ShowChart(mytable.chartinfo,true);
        }

    }

    function configureSlideForHFreeze(settings) {
        settings = settings || {};

        var slide = settings.slide;
        var container = settings.container;
        var mytable = settings.mytable;
        var onComplete = settings.onComplete;

        setTimeout(function() {
            var i;
            var virtualScroll;
            var isCompound = ibiCompound.isCompoundReport;
            var IDSuffix = mytable.id + '_' + mytable.o_paging.c;
            var isStatusBarOnBottom = mytable.a_cntl.status;

            var slideHeight;
            var dataTableWidth;
            var containerWidth;
            var containerHeight;
            var bottomBarHeight;
            var statusBarHeight;
            var dataSectionHeight;
            var columnHeadingsWidth;
            var columnHeadingsHeight;
            var columnHeadingsTableWidth;
            var columnHeadingsContainerWidth;
            var dataTableContainerWidth;
            var dataTableContainerWrapperWidth;

            var tableBorderAdjustment;
            var isContainerWiderThanTable;

            // grid elements (regular / frozen section grid)
            var bottomBar;
            var statusBar;
            var dataTable;
            var dataTableContainer;
            var dataTableContainerWrapper;

            var columnHeadings;
            var columnHeadingsTable;
            var columnHeadingsGuideRow;
            var columnHeadingsContainer;
            var bottomGuidanceRow;
            var grandTotalTableContainer;
            var grandTotalRegularOrFrozenRow;
            var grandTotalUnfrozenRow;

            // elements specific to a frozen table
            var virtualScrollUnfrozenSection;
            var frozenSectionContainer;
            var unfrozenColumnHeadings;
            var unfrozenColumnHeadingsTable;
            var unfrozenColumnHeadingsGuideRow;
            var unfrozenColumnHeadingsContainer;
            var unfrozenColumnHeadingsWidth = 0;
            var unfrozenDataTable;
            var unfrozenDataTableContainer;
            var unfrozenDataTableContainerWrapper;
            var unfrozenBottomGuidanceRow;
            var unfrozenTopAvailableScrollIndicator;
            var unfrozenBottomAvailableScrollIndicator;

            // ensure grid elements are available by assigning and testing for columnHeadings which 
            // should be an array of at least one element. Two elements if table is frozen.
            if((columnHeadings = slide.querySelectorAll('.arGridColumnHeading')) && columnHeadings.length) {
                dataTable = slide.querySelector('#IWindowBodyFTB_' + IDSuffix);
                dataTableContainer = slide.querySelector('#IWindowBodyFB_' + IDSuffix);
                columnHeadingsTable = slide.querySelector('#IWindowBodyFTS_' + IDSuffix);
                columnHeadingsGuideRow = columnHeadingsTable.querySelector('tr');
                columnHeadingsContainer = slide.querySelector('#IWindowBodyFSO_' + IDSuffix);
                dataTableContainerWrapper = slide.querySelector('#IWindowBodyFBO_' + IDSuffix);
                
                bottomGuidanceRow = slide.querySelector('.arGrid').querySelector('tbody').children[2];

                iosBottomBar = container.querySelector('#iosfullscreenbot' + mytable.id);
                hfreezeStatusBar = container.querySelector('#hfreezeStatusBarWrapper_' + mytable.id);

                grandTotalTableContainer = container.querySelector('.grandTotalTableDiv');
                grandTotalRegularOrFrozenRow = grandTotalTableContainer.querySelector('.regularOrFrozenGridTotalRow');
                grandTotalUnfrozenRow = grandTotalTableContainer.querySelector('.unfrozenGridTotalRow');

                iosBottomBarHeight = iosBottomBar.getBoundingClientRect().height; 
                hfreezeStatusBarHeight = hfreezeStatusBar.getBoundingClientRect().height;

                // set dimension variables

                columnHeadingsWidth = columnHeadingsTable.getBoundingClientRect().width;
                columnHeadingsHeight = columnHeadingsTable.getBoundingClientRect().height - columnHeadingsGuideRow.getBoundingClientRect().height;

                containerWidth = (isCompound) ? container.getBoundingClientRect().width : window.innerWidth;
                // if single page report, allow for the height to be less than height of page if the data doesn't fill entire page
                containerHeight = (isCompound) ? container.getBoundingClientRect().height : Math.min(
                    dataTable.getBoundingClientRect().height + columnHeadingsHeight + hfreezeStatusBarHeight, 
                    window.innerHeight
                );

                columnHeadingsContainerWidth = containerWidth;

                slideHeight = containerHeight;

                isContainerWiderThanTable = columnHeadingsWidth < containerWidth;

                // when a table has borders, since the column headings and data table are two separate
                // tables, the column heading's bottom border and the data table's top border
                // create double the border expected.
                tableBorderAdjustment = dataTable.border * 2;
                
                dataSectionHeight = containerHeight - columnHeadingsHeight - iosBottomBarHeight;

                dataTableWidth = 
                columnHeadingsTableWidth = 
                dataTableContainerWrapperWidth = (isCompound && isContainerWiderThanTable) ? containerWidth : columnHeadingsWidth;

                dataTableContainerWidth = (isCompound) ? containerWidth : columnHeadingsWidth;

                // if status bar is outside of botdiv then subtract it from dataSection and slide height
                if(!isStatusBarOnBottom) {
                    dataSectionHeight -= hfreezeStatusBarHeight;
                    slideHeight -= hfreezeStatusBarHeight;
                }
                
                // apply widths to column headings
                // columnHeadings[0] should reference the column headings on an unfrozen grid
                // or the frozen section's table when grid is frozen
                for(i=0; i<columnHeadingsGuideRow.children.length; i++) {
                    columnHeadings[0].children[i].style.width = columnHeadingsGuideRow.children[i].style.width;
                }

                // set unfrozen columns' table variables and styles / dimensions
                if(mytable.n_freeze_column) {
                    frozenSectionContainer = slide.querySelector('.slideA');

                    unfrozenColumnHeadings = columnHeadings[1];
                    unfrozenColumnHeadingsTable = slide.querySelector('#IWindowBodyFTS_' + IDSuffix + '_r');
                    unfrozenColumnHeadingsContainer = slide.querySelector('#IWindowBodyFSO_' + IDSuffix + '_r');
                    unfrozenColumnHeadingsGuideRow = unfrozenColumnHeadingsTable.querySelector('tr');

                    unfrozenDataTable = slide.querySelector('#IWindowBodyFTB_' + IDSuffix + '_r');
                    unfrozenDataTableContainer = slide.querySelector('#IWindowBodyFB_' + IDSuffix + '_r');
                    unfrozenDataTableContainerWrapper = slide.querySelector('#IWindowBodyFBO_' + IDSuffix + '_r');

                    unfrozenBottomGuidanceRow = slide.querySelector('#IWindowBodyF_' + IDSuffix + '_r').querySelector('tbody').children[2];

                    // update frozen section's elements to fit in frozen section container.
                    // these properties were set above for a regular grid with no freeze
                    dataTableWidth = 
                    dataTableContainerWidth = 
                    columnHeadingsTableWidth = 
                    columnHeadingsContainerWidth = 
                    dataTableContainerWrapperWidth = parseInt(getComputedStyle(frozenSectionContainer).width, 10);

                    unfrozenColumnHeadingsWidth = unfrozenColumnHeadingsTable.getBoundingClientRect().width;
                    
                    // apply widths to unfrozen section column headings
                    for(i = 0; i<unfrozenColumnHeadingsGuideRow.children.length; i++) {
                        unfrozenColumnHeadings.children[i].style.width = unfrozenColumnHeadingsGuideRow.children[i].style.width;
                    }

                    // set unfrozen section element dimensions / styles
                    unfrozenColumnHeadingsGuideRow.style.display = 'none';
                    
                    unfrozenColumnHeadingsContainer.style.position = 'relative';

                    unfrozenDataTable.style.position = 'absolute';
                    unfrozenDataTable.style.width = unfrozenColumnHeadingsWidth + 'px';

                    grandTotalUnfrozenRow.style.width = 
                    unfrozenDataTableContainer.style.width = containerWidth - dataTableWidth + 'px';

                    unfrozenDataTableContainer.style.height = 
                    unfrozenDataTableContainerWrapper.style.height = dataSectionHeight + 'px';

                    unfrozenBottomGuidanceRow.style.display = 'none';

                    // apply virtual scroll to unfrozen section
                    virtualScrollUnfrozenSection = new ibiUtil.virtualScroll({
                        container: unfrozenDataTableContainer,
                        content: unfrozenDataTable,
                        onScrollHandler: function(positionData) {
                            if(positionData.direction === 'left') {
                                unfrozenColumnHeadingsContainer.style.left = positionData.value;
                                grandTotalUnfrozenRow.querySelector('table').style.left = positionData.value;
                            }

                            if(positionData.direction === 'top') {
                                dataTable.style.top = positionData.value;
                            }
                        }
                    });
                }

                // apply dimensions / styles to grid
                container.style.overflow = 'hidden';
                container.style.height = containerHeight + 'px';
                
                slide.style.top = '';
                slide.style.width = containerWidth + 'px';
                slide.style.height = slideHeight + 'px';
                slide.style.border = 'none';

                columnHeadingsTable.style.width = columnHeadingsTableWidth + 'px';
                columnHeadingsContainer.style.position = 'relative';
                columnHeadingsContainer.style.width = columnHeadingsContainerWidth + 'px';

                dataTable.style.position = 'absolute';
                dataTable.style.width = dataTableWidth + 'px';

                dataTableContainerWrapper.style.width = dataTableContainerWrapperWidth + 'px';
                dataTableContainerWrapper.style.height = dataSectionHeight + 'px';

                dataTableContainer.style.width = dataTableContainerWidth + 'px';
                dataTableContainer.style.height = dataSectionHeight + 'px';
                dataTableContainer.style.top = -tableBorderAdjustment + 'px';

                bottomGuidanceRow.style.display = 'none';
                columnHeadingsGuideRow.style.display = 'none';


                // apply virtual scroll
                virtualScroll = new ibiUtil.virtualScroll({
                    container: dataTableContainer, 
                    content: dataTable, 
                    hideVerticalScrollbar: mytable.n_freeze_column,
                    onScrollHandler: function(positionData) {
                        var grandTotalTable = grandTotalRegularOrFrozenRow.querySelector('table');

                        if(positionData.direction === 'left') {
                            columnHeadingsContainer.style.left = positionData.value;

                            if(grandTotalTable) {
                                grandTotalTable.style.left = positionData.value;
                            }
                        }

                        if(positionData.direction === 'top') {
                            if(mytable.n_freeze_column && unfrozenDataTable) {
                                unfrozenDataTable.style.top = positionData.value;
                                virtualScrollUnfrozenSection.setScrollableIndicatorPosition(positionData);
                            }
                        }
                    }
                });

                if(onComplete) onComplete();

                mytable.freezeAble = ((columnHeadingsWidth + unfrozenColumnHeadingsWidth) > containerWidth);
            }
        }, 0);
    }

    var prev_paging = null;
    var next_paging = null;
    var isMoving = false;
    var isTouchMid = false;
    var isTouchTop = false;

    function CancelDrags() 
    {
        isTouchTop = false;
        isTouchMid = false;
        isMoving = false;
        isMovingMid = false;
    }

    function ibi_ios_topstart(e)
    {
        if(isTouchTop) {
            ibi_ios_topstop(null);
            return;
        }
        isMoving = false;
        isTouchTop = true;
        if(mytable.tabCurrent!=-1) return;
        var maxpag = Math.ceil(mytable.n_rows/mytable.o_paging.n);
        paging_done=false;
        var d = new Date();
        mytable.time_mid = d.getTime();
        mytable.slowdrag=false;
        if(e.touches) {
            mytable.topx = e.touches[0].clientX;
            mytable.topy = e.touches[0].clientY; 
            mytable.topendx = mytable.topx;
            mytable.topendy = mytable.topy;
            mytable.topdivpos = parseInt(pagingDivs[current_paging].style.left,10);
        } else {
            mytable.topx = e.clientX;
            mytable.topy = e.clientY;
            mytable.topendx = mytable.topx;
            mytable.topendy = mytable.topy;
            mytable.topdivpos = parseInt(pagingDivs[current_paging].style.left,10);
        }
        var s1, s2, 
            sv = mytable.o_paging.c;
        next_paging = null;
        prev_paging = null;
        if((sv+1) < (maxpag)) {
            mytable.o_paging.c = sv+1;
            next_paging = current_paging+1;
            if(next_paging>9) next_paging = 0;
            var n = next_paging;
            pagingDivs[n].innerHTML = IBuild();
            pagingDivs[n].style.left = (parseInt(middiv.style.width, 10) + 2) + 'px';
            pagingDivs[n].style.display = 'block';
            mytable.topdivnext = parseInt(middiv.style.width, 10) + 2;
            s1 = mytable.id+"_"+mytable.o_paging.c;
            fixColumns(s1);
            s2 = mytable.id+"_"+mytable.o_paging.c+"_r";
            fixColumns(s2);
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
        }
        if((sv-1) >= 0) {
            mytable.o_paging.c = sv-1;
            prev_paging = current_paging+1;
            if(prev_paging>9) prev_paging = 0;
            if(next_paging != null) prev_paging++;
            if(prev_paging>9) prev_paging = 0;
            pagingDivs[prev_paging].style.left = 0;
            var p = prev_paging;
            pagingDivs[p].innerHTML = IBuild();
            pagingDivs[p].style.display = 'block';
            pagingDivs[p].style.left = (-1*(parseInt(middiv.style.width, 10) + 2)) + 'px';
            mytable.topdivprev = -1*(parseInt(middiv.style.width, 10) + 2);
            s1 = mytable.id+"_"+mytable.o_paging.c;
            fixColumns(s1);
            s2 = mytable.id+"_"+mytable.o_paging.c+"_r";
            fixColumns(s2);
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
        }
        mytable.o_paging.c = sv;

        if(ibiIosGrid.timeout_sc!=null) window.clearTimeout(ibiIosGrid.timeout_sc);
        if(!b_Android) ibiIosGrid.timeout_sc = window.setTimeout("ibiIosGrid.showPageControl()",500);
    }

    function fixColumns(prefix)
    {
        var p = prefix;
        setTimeout(function(){
        var tbobj1 = document.getElementById("IWindowBodyFTS_"+p);
        if(tbobj1==null) return;
        var tbobj2 = document.getElementById("IWindowBodyFTB_"+p);
        var tbobj3 = document.getElementById("IWindowBodyFTE_"+p);
        var dvobj2 = document.getElementById("IWindowBodyFBO_"+p);
        var dvobj1 = document.getElementById("IWindowBodyFSO_"+p);
        var dvobj3 = document.getElementById("IWindowBodyFEO_"+p);

        var ll = tbobj1.children[0].rows[0].cells.length;
        var r1 = tbobj1.children[0].rows[0];
        var r2 = tbobj2.children[0].rows[0];
        var r3 = tbobj3.children[0].rows[0];

        for(var i =0; i < ll; i++) {
            var w = r1.cells[i].offsetWidth;
            if(w < r2.cells[i].offsetWidth) 
                w = r2.cells[i].offsetWidth;
            if(w < r3.cells[i].offsetWidth) 
                w = r3.cells[i].offsetWidth;
            r1.cells[i].style.width = w+'px';
            r2.cells[i].style.width = w+'px';
            r3.cells[i].style.width = w+'px';
        }
        //tbobj1.children[0].rows[0].style.display = 'none';
        //tbobj2.children[0].rows[0].style.display = 'none';
        //tbobj3.children[0].rows[0].style.display = 'none';
        dvobj2.style.height = (parseInt(middiv.style.height, 10) - (dvobj1.offsetHeight+dvobj3.offsetHeight)) + 'px';
        dvobj2.style.width = tbobj2.offsetWidth+'px';
        },0);
    }

    function fixrows(prefix1,prefix2)
    {
        var pl = prefix1;
        var pr = prefix2;

        setTimeout(function(){
            var tobj1;
            var tobj2;
            var dvobj1;
            var dvobj2;
            var ll;
            var r1;
            var r2;
            var h, i;

            tbobj1 = document.getElementById("IWindowBodyFTS_"+pl);
            tbobj2 = document.getElementById("IWindowBodyFTS_"+pr);
            dvobj1 = document.getElementById("IWindowBodyFSO_"+pl);
            dvobj2 = document.getElementById("IWindowBodyFSO_"+pr);
            
            if(tbobj1) {
                ll = tbobj1.children[0].rows.length;
                r1 = tbobj1.children[0].rows;
                r2 = tbobj2.children[0].rows;

                for (i = 0; i < ll; i++) {
                    h = r1[i].offsetHeight;
                    if(r1[i].offsetHeight<r2[i].offsetHeight) h = r2[i].offsetHeight;
                    r1[i].style.height = h+'px';
                }
            }

            tbobj1 = document.getElementById("IWindowBodyFTB_"+pl);
            tbobj2 = document.getElementById("IWindowBodyFTB_"+pr);
            dvobj1 = document.getElementById("IWindowBodyFBO_"+pl);
            dvobj2 = document.getElementById("IWindowBodyFBO_"+pr);
            if(tbobj1) {
                ll = tbobj1.children[0].rows.length;
                r1 = tbobj1.children[0].rows;
                r2 = tbobj2.children[0].rows;

                for (i = 0; i < ll; i++) {
                    h = r1[i].offsetHeight;
                    if(r1[i].offsetHeight<r2[i].offsetHeight) h = r2[i].offsetHeight;
                    r1[i].style.height = h+'px';
                }
            }

            tbobj1 = document.getElementById("IWindowBodyFTE_"+pl);
            tbobj2 = document.getElementById("IWindowBodyFTE_"+pr);
            dvobj1 = document.getElementById("IWindowBodyFEO_"+pl);
            dvobj2 = document.getElementById("IWindowBodyFEO_"+pr);
            if(tbobj1) {
                ll = tbobj1.children[0].rows.length;
                r1 = tbobj1.children[0].rows;
                r2 = tbobj2.children[0].rows;

                for (i = 0; i < ll; i++) {
                    h = r1[i].offsetHeight;
                    if(r1[i].offsetHeight<r2[i].offsetHeight) h = r2[i].offsetHeight;
                    r1[i].style.height = h+'px';
                }
            }

        },0);
    }

    function ibi_ios_topmove(e)
    {
        if(!isTouchTop) return;
        if(mytable.tabCurrent!=-1) return;
        isMoving = true;
        var h = parseInt(middiv.style.width,10);
        var dist = parseInt((h/10), 10);
        dist=16;
        if(e.touches) {
            mytable.topendx = e.touches[0].clientX;
            mytable.topendy = e.touches[0].clientY; 
        } else {
            mytable.topendx = e.clientX;
            mytable.topendy = e.clientY;
        }
        var maxpag = Math.ceil(mytable.n_rows/mytable.o_paging.n);
        var sdiff = Math.abs(mytable.topendx-mytable.topx);
        var p = prev_paging;
        var c = current_paging;
        var n = next_paging;
        var tp = mytable.topdivprev;
        var ts = mytable.topdivpos;
        var tn = mytable.topdivnext;
        //window.setTimeout(function(){
        //if(p!=null) pagingDivs[p].style.left = (tp + diff)+'px';
        //pagingDivs[c].style.left = (ts + diff)+'px';
        //if(n!=null) pagingDivs[n].style.left = (tn + diff)+'px';
        //},0);
        
        if((mytable.slowdrag)&&(sdiff>dist)) {
            if(mytable.topx<mytable.topendx)
            {
                if(mytable.gotopage < (maxpag-1)) {
                    mytable.gotopage = mytable.gotopage+1;
                }
            } else
            if(mytable.topx>mytable.topendx)
            {
                if(mytable.gotopage>0) 
                {
                    mytable.gotopage = mytable.gotopage-1;
                }
            }
            mytable.topx = mytable.topendx;
            mytable.topy = mytable.topendy;
            numberdiv.innerHTML = (mytable.gotopage+1)+'';
        }
    }

    function showPageCounter()
    {
        if(paging_done) return;
        if(!isTouchTop) return;
        mytable.slowdrag = true;
        mytable.gotopage = mytable.o_paging.c;
        //do_next_page();
        numberdiv.innerHTML = (mytable.o_paging.c+1)+'';
        numberdiv.style.display = 'block';
        mytable.topx = mytable.topendx;
        mytable.topy = mytable.topendy;
    }
    
    function buildHFreezeStatusBar(mytable) {
        var unfilteredRecords = mytable.a_cntl.NumRecords;
        var filteredRecords = (mytable.haveFilters) ? mytable.a_filter_body.length : null;
        var displayedRecords = filteredRecords || unfilteredRecords;
        var pages = Math.ceil(displayedRecords / mytable.o_paging.n);
        var pagingTemplate = mytable.o_paging.s_tt;
        var filteredPercentageOfTotalRecords = Math.round((mytable.a_f_body.length / mytable.a_cntl.NumRecords) * 10000) / 100;
        var firstRecordOnCurrentPage = (mytable.n_rows) ? (mytable.o_paging.c * mytable.o_paging.n) + 1 : 0;
        var lastRecordOnCurrentPage = Math.min(firstRecordOnCurrentPage + (mytable.o_paging.n - 1), mytable.n_rows);

        var currentDataTable = document.querySelector('#IWindowBodyFTB_' + mytable.id+'_'+mytable.o_paging.c);
        var currentUnfrozenDataTable = document.querySelector('#IWindowBodyFTB_' + mytable.id+'_'+mytable.o_paging.c + '_r');

        var updateStatusBarIcon;
        var statusBarWrapper = document.querySelector('#hfreezeStatusBarWrapper_' + mytable.id) || document.createElement('div');
        var statusBarIconWrapper = statusBarWrapper.querySelector('.statusBarIcon') || document.createElement('div');
        var statusBarPaging = statusBarWrapper.querySelector('.statusBarPaging') || document.createElement('div');
        var statusBarPagingTemplate = statusBarWrapper.querySelector('.statusBarPagingTemplate') || document.createElement('div');
        var statusBarFirstPageButton = statusBarWrapper.querySelector('.statusBarPagingFirst') || document.createElement('div');
        var statusBarPreviousPageButton = statusBarWrapper.querySelector('.statusBarPagingPrevious') || document.createElement('div');
        var statusBarLastPageButton = statusBarWrapper.querySelector('.statusBarPagingLast') || document.createElement('div');
        var statusBarNextPageButton = statusBarWrapper.querySelector('.statusBarPagingNext') || document.createElement('div');

        var grandTotalTableContainer = botdiv.querySelector('.grandTotalTableDiv') || document.createElement('div');
        var grandTotalRegularOrFrozen = grandTotalTableContainer.querySelector('.regularOrFrozenGridTotalRow') || document.createElement('div');
        var grandTotalUnfrozen = grandTotalTableContainer.querySelector('.unfrozenGridTotalRow') || document.createElement('div');

        var footingTableDiv = botdiv.querySelector('.footingTableDiv') || document.createElement('div');
        var footingTable;

        if(mytable.is_export || mytable.vertical_scroll) return;

        if(!statusBarWrapper.id) {
            botdiv.innerHTML = '';

            statusBarWrapper.id =  'hfreezeStatusBarWrapper_' + mytable.id;

            grandTotalTableContainer.classList.add('grandTotalTableDiv');
            grandTotalRegularOrFrozen.classList.add('regularOrFrozenGridTotalRow');
            grandTotalUnfrozen.classList.add('unfrozenGridTotalRow');
            footingTableDiv.classList.add('footingTableDiv');
            statusBarWrapper.classList.add('arGridBar');
            statusBarIconWrapper.classList.add('statusBarIcon');
            statusBarPaging.classList.add('statusBarPaging');
            statusBarPagingTemplate.classList.add('statusBarPagingTemplate');
            statusBarFirstPageButton.classList.add('statusBarPagingFirst');
            statusBarPreviousPageButton.classList.add('statusBarPagingPrevious');
            statusBarNextPageButton.classList.add('statusBarPagingNext');
            statusBarLastPageButton.classList.add('statusBarPagingLast');

            
            ibiUtil.cssText(statusBarPaging, {
                display: 'flex',
                width: '100%',
                paddingLeft: '10px',
                color: (mytable.a_cntl.statcolor) ? mytable.a_cntl.statcolor : '',
                fontFamily: (mytable.a_cntl.statfonttype) ? mytable.a_cntl.statfonttype : '',
                fontSize: (mytable.a_cntl.statfontsize) ? mytable.a_cntl.statfontsize : '',
                // reference flex-start, center or flex-end based on mytable.a_cntl.statusalign number
                justifyContent: ['flex-start', 'center', 'flex-end'][mytable.a_cntl.statusalign]
            });

            ibiUtil.cssText(statusBarPagingTemplate, {
                padding: '0 4px'
            });

            ibiUtil.cssText(statusBarWrapper, {
                bottom: 0,
                width: '100%',
                boxSizing: 'border-box',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: (mytable.a_cntl.statbackcolor) ? mytable.a_cntl.statbackcolor : '',
                border: mytable.n_border + 'px solid'
            });

            ibiUtil.cssText(statusBarIconWrapper, {
                cursor: 'pointer'
            });

            ibiUtil.cssText(grandTotalTableContainer, {
                display: 'flex'
            });

            if(mytable.a_cntl.footing) {
                footingTable = document.createElement('table');
                footingTable.setAttribute('cellpadding', currentDataTable.getAttribute('cellpadding'));
                footingTable.setAttribute('cellspacing', currentDataTable.getAttribute('cellspacing'));
                footingTable.border = currentDataTable.border;
                footingTable.style.width = '100%';
                footingTable.innerHTML = IBuildHead(isFoot, 0, mytable.n_cols);

                footingTableDiv.appendChild(footingTable);
            }

            statusBarFirstPageButton.innerHTML = mytable.o_paging.s_pf;
            statusBarPreviousPageButton.innerHTML = mytable.o_paging.s_pp;
            statusBarNextPageButton.innerHTML = mytable.o_paging.s_pn;
            statusBarLastPageButton.innerHTML = mytable.o_paging.s_pl;

            statusBarIconWrapper.addEventListener('click', function() {
                mytable.a_cntl.status = !mytable.a_cntl.status;
                updateStatusBarIcon();
            });

            statusBarFirstPageButton.addEventListener('click', function() {
                ibiIosGrid.gotoPage(mytable.id, 0);
            });

            statusBarPreviousPageButton.addEventListener('click', function() {
                ibiIosGrid.gotoPage(mytable.id, (mytable.o_paging.c - 1));
            });

            statusBarNextPageButton.addEventListener('click', function() {
                ibiIosGrid.gotoPage(mytable.id, (mytable.o_paging.c + 1));
            });

            statusBarLastPageButton.addEventListener('click', function() {
                ibiIosGrid.gotoPage(mytable.id, pages - 1);
            });

            statusBarPaging.appendChild(statusBarFirstPageButton);
            statusBarPaging.appendChild(statusBarPreviousPageButton);
            statusBarPaging.appendChild(statusBarPagingTemplate);
            statusBarPaging.appendChild(statusBarNextPageButton);
            statusBarPaging.appendChild(statusBarLastPageButton);

            statusBarWrapper.appendChild(statusBarIconWrapper);
            statusBarWrapper.appendChild(statusBarPaging);

            grandTotalTableContainer.appendChild(grandTotalRegularOrFrozen);
            grandTotalTableContainer.appendChild(grandTotalUnfrozen);

            botdiv.appendChild(grandTotalTableContainer);
            botdiv.appendChild(footingTableDiv);
        }

        if(mytable.a_cntl.grandtotal) {
            buildGrandTotalRow(currentDataTable, grandTotalRegularOrFrozen);
            buildGrandTotalRow(currentUnfrozenDataTable, grandTotalUnfrozen);
        }

        function buildGrandTotalRow(dataTable, container) {
            var i;
            var dataTableGrandTotalRow;
            var grandTotalRowWidths = [];
            var grandTotalTable = document.createElement('table');

            if(dataTable && (dataTableGrandTotalRow = dataTable.querySelector('tr:last-child'))) {
                grandTotalTable.setAttribute('cellpadding', currentDataTable.getAttribute('cellpadding'));
                grandTotalTable.setAttribute('cellspacing', currentDataTable.getAttribute('cellspacing'));
                grandTotalTable.border = dataTable.border;
                grandTotalTable.style.position = 'relative';

                container.innerHTML = '';
                container.style.position = 'relative';
                container.style.overflow = 'hidden';
                container.appendChild(grandTotalTable);

                setTimeout(function() {
                    grandTotalTable.style.width = getComputedStyle(dataTable).width;

                    for(i=0; i<dataTableGrandTotalRow.children.length; i++) {
                        grandTotalRowWidths.push(getComputedStyle(dataTableGrandTotalRow.children[i]).width);
                    }

                    grandTotalTable.appendChild(dataTableGrandTotalRow);

                    for(i=0; i<dataTableGrandTotalRow.children.length; i++) {
                        dataTableGrandTotalRow.children[i].style.width = grandTotalRowWidths[i];
                    }
                }, 0);
            }
        }
 
        updateStatusBarIcon = (function updateStatusBarIcon() {
            var tableRootContainer = mytable.maintable.root;

            setGlobalsForIndividualTable(mytable.id);

            if(mytable.a_cntl.status) {
                botdiv.appendChild(statusBarWrapper);
                statusBarIconWrapper.innerHTML = ibiSkin.ptopicon;
            } else {
                tableRootContainer.insertBefore(statusBarWrapper, tableRootContainer.children[0]);
                statusBarIconWrapper.innerHTML = ibiSkin.pboticon;
            }

            return updateStatusBarIcon;
        })();

        pagingTemplate = pagingTemplate
            .replace('%rcs', displayedRecords)
            .replace('%trcs', unfilteredRecords)
            .replace('%inds', mytable.o_paging.c + 1)
            .replace('%tn', mytable.id)
            .replace('%pgs', pages);

        statusBarPagingTemplate.innerHTML = pagingTemplate;

        statusBarFirstPageButton.style.display = (mytable.o_paging.c > 0) ? 'block' : 'none';
        statusBarPreviousPageButton.style.display = (mytable.o_paging.c > 0) ? 'block' : 'none';
        statusBarNextPageButton.style.display = (mytable.o_paging.c < (pages - 1)) ? 'block' : 'none';
        statusBarLastPageButton.style.display = (mytable.o_paging.c < (pages - 1)) ? 'block' : 'none';
    }

    function gotoThisPageHFreeze(id, page) {
        var mytable = MyTable[id];
        var tableHFreezePage = document.getElementById('hfreezeGridPage_' + id);
        var tempDiv = document.createElement('div');
        var p = mytable.id + '_' + mytable.o_paging.c;
        
        mytable.o_paging.c = page;
        
        setGlobalsForIndividualTable(id);

        if(tableHFreezePage) {
            tableHFreezePage.parentNode.appendChild(tempDiv);
            tempDiv.style.cssText = tableHFreezePage.style.cssText;
            tempDiv.style.left = '-10000px';
            tempDiv.classList.add('slide');
            tempDiv.setAttribute('id', 'hfreezeGridPage_' + id);
            tempDiv.innerHTML = IBuild();
            
            fixColumns(mytable.id + '_' + mytable.o_paging.c);
            fixColumns(mytable.id + '_' + mytable.o_paging.c + '_r');
            if(mytable.n_freeze_column)fixrows(mytable.id+"_"+mytable.o_paging.c,mytable.id+"_"+mytable.o_paging.c+"_r");
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
            buildHFreezeStatusBar(mytable);
            
            setTimeout(function() {    
                configureSlideForHFreeze({
                    slide: tempDiv,
                    container: mytable.iosDiv, 
                    mytable: mytable, 
                    onComplete: function() {
                        tableHFreezePage.parentNode.removeChild(tableHFreezePage);
                        tableHFreezePage.innerHTML = tempDiv.innerHTML;
                        ibi_add_popmenu(mytable);
                        tempDiv.style.left = '0';
                    }
                });
            }, 0);
        }
    }
    
    var speed = 1;

    function gotoThisPage(id,page)
    {
        var po;
        mytable = MyTable[id];
        
        if(mytable.isHFreezeEnabled) {
            gotoThisPageHFreeze(id, page);
            return;
        }

        next_paging = current_paging+1;
        if(next_paging>9) next_paging = 0;
        if(page < mytable.o_paging.c) {
            mytable.o_paging.c=page;
            pagingDivs[next_paging].innerHTML=IBuild();
            fixColumns(mytable.id+"_"+mytable.o_paging.c);
            fixColumns(mytable.id+"_"+mytable.o_paging.c+"_r");
            if(mytable.n_freeze_column)fixrows(mytable.id+"_"+mytable.o_paging.c,mytable.id+"_"+mytable.o_paging.c+"_r");
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
            pagingDivs[next_paging].style.left = (-1*(parseInt(middiv.style.width, 10) + 2))+'px';
            pagingDivs[next_paging].style.display = 'block';
            window.setTimeout(function (){
                po = pagingDivs[next_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),0,0,speed,100,ibiIosGrid.removePage);
                po = pagingDivs[current_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10), (parseInt(middiv.style.width, 10) + 2),0,speed,100,null);
                prev_paging = current_paging;
                current_paging = next_paging;
                next_paging = null;
            },0);
    
        } else 
        if(page > mytable.o_paging.c) {
            mytable.o_paging.c=page;
            pagingDivs[next_paging].innerHTML=IBuild();
            fixColumns(mytable.id+"_"+mytable.o_paging.c);
            fixColumns(mytable.id+"_"+mytable.o_paging.c+"_r");
            if(mytable.n_freeze_column)fixrows(mytable.id+"_"+mytable.o_paging.c,mytable.id+"_"+mytable.o_paging.c+"_r");
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
            pagingDivs[next_paging].style.left = (parseInt(middiv.style.width, 10) + 2) + 'px';
            pagingDivs[next_paging].style.display = 'block';
            window.setTimeout(function (){
                po = pagingDivs[next_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),0,0,speed,100,ibiIosGrid.removePage);
                po = pagingDivs[current_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),-1*(parseInt(middiv.style.width, 10) + 2),0,speed,100,null);
                prev_paging = current_paging;
                current_paging = next_paging;
                next_paging = null;
            },0);
        }
        topdiv.innerHTML = IBuildPage(-1);
        botdiv.innerHTML = IBuildPageBot();
        numberdiv.style.display="none";
        return false;
    }

    function ibi_ios_topstop(e)
    {
        if(ibiIosGrid.timeout_sc!=null)window.clearTimeout(ibiIosGrid.timeout_sc);
        ibiIosGrid.timeout_sc=null;
        if(!isTouchTop) return;
        if(!isMoving) return;
        isTouchTop = false;
        isMoving = false;
        if(mytable.tabCurrent!=-1) return;
        paging_done = true;

        if(!mytable.slowdrag) do_next_page();
        else {
            gotoThisPage(mytable.id,mytable.gotopage);
        }
        mytable.slowdrag = false;
        numberdiv.style.display="none";
        topdiv.innerHTML = IBuildPage(-1);
        botdiv.innerHTML = IBuildPageBot();
    }

    function do_next_page()
    {
        var maxpag = Math.ceil(mytable.n_rows/mytable.o_paging.n);
        var landscape = Math.abs(window.orientation)==90;
        var sv = current_paging;
        var n, po;
        if(mytable.topx>mytable.topendx)
        {
            if(mytable.o_paging.c < (maxpag-1)) {
                mytable.o_paging.c = mytable.o_paging.c+1;
                //pagingDivs[current_paging].style.display='none';
                current_paging = next_paging;
                next_paging = sv;
                po = pagingDivs[current_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),0,0,speed,100,ibiIosGrid.removePage);
                po = pagingDivs[next_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),-1*(parseInt(middiv.style.width, 10) + 2),0,speed,100,null);
            }
        }
        if(mytable.topx<=mytable.topendx)
        {
            if(mytable.o_paging.c>0) 
            {
                mytable.o_paging.c = mytable.o_paging.c-1;
                //pagingDivs[current_paging].style.display='none';
                current_paging = prev_paging;
                prev_paging = sv;
                po = pagingDivs[current_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),0,0,speed,100,ibiIosGrid.removePage);
                po = pagingDivs[prev_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),(parseInt(middiv.style.width, 10) + 2),0,speed,100,null);
            } else {
                po = pagingDivs[current_paging];
                AnimateSlide(po, parseInt(po.style.left, 10), parseInt(po.style.top, 10),0,0,speed,100,ibiIosGrid.removePage);
                //po = pagingDivs[prev_paging];
                //var n = new AnimateSlide(po,parseInt(po.style.left),parseInt(po.style.top),parseInt(middiv.style.width)+2,0,speed,100,null);
            }
        }
        numberdiv.innerHTML = (mytable.o_paging.c+1)+'';
        botdiv.innerHTML = IBuildPageBot();

    }


    function removePageDiv()
    {
        if(next_paging!=null){
            pagingDivs[next_paging].style.display='none';
            pagingDivs[next_paging].style.webkitTransition='';
            pagingDivs[next_paging].style.webkitTransform='translate3d(0,0,0)';
            pagingDivs[next_paging].innerHTML = '';
        }
        if(prev_paging!=null){
            pagingDivs[prev_paging].style.display='none';
            pagingDivs[prev_paging].style.webkitTransition='';
            pagingDivs[prev_paging].style.webkitTransform='translate3d(0,0,0)';
            pagingDivs[prev_paging].innerHTML = '';
        }
    }

    var isMovingMid = false;
    var isMovingMIdTo = null;
    var isMovingMidUpDown = false;
    var isMovingMidLeftRight = false;
    var secondTap = false;
    var secondTapWait = null;

    function ClearTap() {
        secondTap = false;
    }

    function ibi_ios_midstart(e)
    {
        if((secondTap)&&(e.touches.length==1)) {
            secondTap = false;
            if(secondTapWait)window.clearTimeout(secondTapWait);
            secondTapWait = null;    
            ZoomTab();
            return;
        }

        secondTap = true;
        secondTapWait = window.setTimeout("ibiIosGrid.clearTap()",500);

        if(isTouchMid) {
            ibi_ios_midstop(null);
            return;
        }
        if('ontouchstart' in middiv) {
            middiv.addEventListener("touchmove",ibi_ios_midmove,false);
            middiv.addEventListener("touchend",ibi_ios_midstop,false);
        } else 
        if('addEventListener' in middiv)
        {
            middiv.addEventListener("mousemove",ibi_ios_midmove,false);
            middiv.addEventListener("mouseup",ibi_ios_midstop,false);
        } else {
            middiv.attachEvent("onmousemove",ibi_ios_midmove);
            middiv.attachEvent("onmouseup",ibi_ios_midstop);
        }
        
        //isMovingMIdTo = window.setTimeout("ibiIosGrid.zoom()",500);
        isMovingMid = false;
        isMovingMidUpDown = false;
        isMovingMidLeftRight = false;
        isTouchMid = true;
        if(e.touches) {
            mytable.midx = e.touches[0].clientX;
            mytable.midy = e.touches[0].clientY; 
            mytable.midendx = mytable.midx;
            mytable.midendy = mytable.midy;
        } else {
            mytable.midx = e.clientX;
            mytable.midy = e.clientY;
            mytable.midendx = mytable.midx;
            mytable.midendy = mytable.midy;
        }
        var dobj;
        if(mytable.tabCurrent == -1) {
            dobj = document.getElementById('ios_div_'+mytable.id+'_move_'+mytable.o_paging.c);
            if (dobj) { 
                mytable.middivposx = parseInt(dobj.style.left, 10);
            }
            var dobj2 = document.getElementById("IWindowBodyFB_"+mytable.id+"_"+mytable.o_paging.c);
            if (dobj2) {
                mytable.middivposy = parseInt(dobj2.style.top, 10);
            }
        } else {
            var p = mytable.tabChildren[mytable.tabCurrent];
            var i = p.window;
            var ty;
             if(p.root) ty = typechart;
            else ty = pwn[i].type;
            if(ty==typepivot) {
                mytable.middivposx = parseInt(p.pivmytable.pivotDivs.body.style.left,10);
                mytable.middivposy = parseInt(p.pivmytable.pivotDivs.body.style.top,10);
            } else
            if((ty==typechart) && (p.parms.cctype==4)) {
                var pmytable = pwn[p.parms.win].mytable;
                pmytable.middivposx = parseInt(pmytable.rollupDiv.style.left, 10);
                dobj2 = document.getElementById("IWindowBodyFB_"+pmytable.id+"_"+pmytable.o_paging.c);
                if (dobj2) {
                    pmytable.middivposy = parseInt(dobj2.style.top, 10);
                }
            }
        }
    }

    var zoomMid=false;
    function ZoomTab()
    {
        var h = parseInt(mytable.iosDiv.style.height,10);
        var i;
        if(isTouchMid) 
            ibi_ios_midstop(null);
        if(zoomMid) {
            middiv.style.height = (h-(tabHeight+topHeight+botHeight))+'px';
            middiv.style.top = (tabHeight+topHeight)+'px';
            for(i=0;i<10;i++) {
                tabsDivs[i].style.height = (h-(tabHeight+topHeight+botHeight))+'px';
                pagingDivs[i].style.height = (h-(tabHeight+topHeight+botHeight))+'px';
            }
        } else {
            middiv.style.height = h+'px';
            middiv.style.top = '0px';
            for(i=0;i<10;i++) {
                tabsDivs[i].style.height = h+'px';
                pagingDivs[i].style.height = h+'px';
            }
        }
        if(mytable.tabCurrent==-1) {
            pagingDivs[current_paging].innerHTML = IBuild();
            var s1 = mytable.id+"_"+mytable.o_paging.c;
            fixColumns(s1);
            var s2 = mytable.id+"_"+mytable.o_paging.c+"_r";
            fixColumns(s2);
            if(mytable.n_freeze_column) fixrows(s1,s2);
            if(mytable.n_freeze_column) window.setTimeout("ibiIosGrid.fixFreeze()",0);
            IMarkSelection();
        } else {
            var ty;
            var p = mytable.tabChildren[mytable.tabCurrent];
            i = p.window;
             ty = (p.root) ? typechart : pwn[i].type;
            if(p.root) {
                ShowChart(mytable.chartinfo,true);
            } else {
                if(ty != typefilt) {
                    ShowChart(pwn[i].pn,true);
                }
            }
        }
        zoomMid = !zoomMid;
    }

    function ibi_ios_midmove(e)
    {
        if(isMovingMIdTo)window.clearInterval(isMovingMIdTo);
        secondTap = false;
        if(secondTapWait)window.clearTimeout(secondTapWait);
        secondTapWait = null;
        isMovingMIdTo = null;
        if(!isTouchMid) return;

        if(e.touches) {
            mytable.midendx = e.touches[0].clientX;
            mytable.midendy = e.touches[0].clientY; 
        } else {
            mytable.midendx = e.clientX;
            mytable.midendy = e.clientY;
        }
        if(!isMovingMidUpDown && !isMovingMidLeftRight) {
            var diff2 = Math.abs(mytable.midx - mytable.midendx);
            var diff1 = Math.abs(mytable.midy - mytable.midendy);
            if((diff2>20) || (diff1>20)) {
                if(diff1<diff2) 
                    isMovingMidLeftRight = true;
                else 
                    isMovingMidUpDown = true;
            }
        }

        if(!isMovingMidUpDown) 
            mytable.midendy = mytable.midy;
        if(!isMovingMidLeftRight) 
            mytable.midendx = mytable.midx;
            
        var newLeft, lastTDOffsetLeft, y, dobj, dobj2,tdobj;
        var slideA = document.getElementById('ios_div_' + mytable.id + '_move_' + mytable.o_paging.c + '_l');
        var slideAOffset = (slideA) ? slideA.offsetWidth : 0;
        
        if(mytable.tabCurrent == -1) {
            isMovingMid = true;
            dobj = document.getElementById('ios_div_'+mytable.id+'_move_'+mytable.o_paging.c);
            if(dobj) {
                newLeft = (mytable.middivposx + (mytable.midendx-mytable.midx));
                tdobj = document.getElementById("TCOLTD_" + mytable.id + "_C_" + (mytable.n_cols -1) + "_f");
                if(tdobj)
                    lastTDOffsetLeft = tdobj.offsetLeft;
                else
                    lastTDOffsetLeft = newLeft;
        
                if(newLeft <= (0 + slideAOffset) && newLeft >= -1*(lastTDOffsetLeft - slideAOffset)) 
                    dobj.style.left = newLeft + 'px';
                    
                dobj2 = document.getElementById("IWindowBodyFB_"+mytable.id+"_"+mytable.o_paging.c);
                var dobj3 = document.getElementById("IWindowBodyFB_"+mytable.id+"_"+mytable.o_paging.c+'_r');
                y =  mytable.middivposy + (mytable.midendy-mytable.midy);
                if(y>=0) {
                    dobj2.style.top = '0px';
                    if(dobj3) dobj3.style.top = '0px';
                    mytable.midy = mytable.midendy-((mytable.midendy-mytable.midy)-y);
                } else 
                if(Math.abs(y)<=(dobj2.offsetHeight-20)) {
                    dobj2.style.top = y+'px';
                    if(dobj3) dobj3.style.top = y + 'px';
                } else {
                    y = mytable.midendy;
                }
            
            }
        } else {
            var p = mytable.tabChildren[mytable.tabCurrent];
            var i = p.window;
            var ty, pmytable;
             if(p.root) ty = typechart;
            else ty = pwn[i].type;
            if(ty==typepivot) {
                isMovingMid = true;
                var x =  mytable.middivposx + (mytable.midendx-mytable.midx);
                if(x>=0) {
                    x = 0;
                    mytable.midx = mytable.midendx;
                }
                y =  mytable.middivposy + (mytable.midendy-mytable.midy);
                if(y>=0) {
                    y = 0;
                    mytable.midy = mytable.midendy;
                }
                pmytable = p.pivmytable;
                pmytable.pivotDivs.body.style.left = x+'px';
                pmytable.pivotDivs.body.style.top = y+'px';
                if(pmytable.pivotDivs.bys)pmytable.pivotDivs.bys.style.top = y+'px';
                if(pmytable.pivotDivs.across)pmytable.pivotDivs.across.style.left = x+'px';
                if(pmytable.pivotDivs.byTotals)pmytable.pivotDivs.byTotals.style.top = y+'px';
                if(pmytable.pivotDivs.acrossTotals)pmytable.pivotDivs.acrossTotals.style.left = x+'px';
            } else
            if((ty==typechart) && (p.parms.cctype==4)) {
                isMovingMid = true;
                pmytable = pwn[p.parms.win].mytable;
                dobj = document.getElementById('ios_div_'+pmytable.id+'_move_'+pmytable.o_paging.c);
                newLeft = (pmytable.middivposx + (mytable.midendx-mytable.midx));
                lastTDOffsetLeft = document.getElementById("TCOLTD_" + pmytable.id + "_C_" + (pmytable.n_cols -1) + "_f").offsetLeft;
                
                if(newLeft <= 0 && newLeft >= -1*lastTDOffsetLeft)
                    dobj.style.left = newLeft + 'px';

                dobj2 = document.getElementById("IWindowBodyFB_"+pmytable.id+"_"+pmytable.o_paging.c);
                y =  pmytable.middivposy + (mytable.midendy-mytable.midy);
                if(y>=0) {
                    y=0;
                    mytable.midy = mytable.midendy;
                }
                dobj2.style.top = y+'px';
                dobj2.style.left = x+'px';
            }
        }
    }


    function ibi_ios_midstop(e)
    {
        if(isMovingMIdTo)window.clearInterval(isMovingMIdTo);
        //if(secondTapWait)window.clearTimeout(secondTapWait);
        //secondTapWait = null;
        isMovingMIdTo = null;
        if(!isTouchMid) return;
        //if(!isMovingMid) return;
        isMovingMid = false;
        isMovingMidUpDown = false;
        isMovingMidLeftRight = false;
        isTouchMid = false;
        var dobj = document.getElementById('ios_div_'+mytable.id+'_move_'+mytable.o_paging.c);
        var dobj2 = document.getElementById('ios_div_'+mytable.id+'_move_'+mytable.o_paging.c+'_l');
        var pmytable = mytable;
        var i;
        if(mytable.tabCurrent != -1) {
            var ty;
            var p = mytable.tabChildren[mytable.tabCurrent];
            i = p.window;
             ty = (p.root) ? typechart : pwn[i].type;
            if((ty==typechart) && (p.parms.cctype==4)) {
                pmytable = pwn[p.parms.win].mytable;
                dobj = document.getElementById('ios_div_'+pmytable.id+'_move_'+pmytable.o_paging.c);
                dobj2 = document.getElementById('ios_div_'+pmytable.id+'_move_'+pmytable.o_paging.c+'_l');
            }
        }
        var idstr;
        var start = 0;
        var offset = 0;
        if(dobj2) offset=parseInt(dobj2.style.width,10);
        if(mytable.n_freeze_column) start = mytable.n_freeze_column;
        var prevNewX = offset;
        var newX = offset;

        if('ontouchstart' in middiv) 
        {
            middiv.removeEventListener("touchmove",ibi_ios_midmove,false);
            middiv.removeEventListener("touchend",ibi_ios_midstop,false);
        } else 
        if('addEventListener' in middiv)
        {
            middiv.removeEventListener("mousemove",ibi_ios_midmove,false);
            middiv.removeEventListener("mouseup",ibi_ios_midstop,false);
        } else
        {
            middiv.detachEvent("onmousemove",ibi_ios_midmove);
            middiv.detachEvent("onmouseup",ibi_ios_midstop);
        }
        if (parseInt(dobj.style.left, 10) > offset) { newX = offset; }
        else {
            for (i = start; i < pmytable.n_cols; i++) {
                if ((pmytable.a_capt[i].b_hide)||(pmytable.a_capt[i].exp_hide)) continue;
                idstr="TCOLTD_"+pmytable.id+"_C_"+i+"_f";
                tobj = document.getElementById(idstr);
                if(tobj){
                    prevNewX = newX;
                    newX = -1*(tobj.offsetLeft-offset);
                    if((tobj.offsetLeft)>(Math.abs(parseInt(dobj.style.left, 10) - offset))) break;
                }
            }
        }
        if(mytable.midx<=mytable.midendx)
        {
            newX = prevNewX;
        }
        //pagingDivs[current_paging].innerHTML = IBuild();
        //botdiv.innerHTML = "";
        AnimateSlide(dobj, parseInt(dobj.style.left,10), parseInt(dobj.style.top,10),newX,0,1,30,null);
        
    }

    

    function IBuild()
    {
        var s_ = [];
        var startCol = mytable.currentCol;
        var lastCol = mytable.n_cols;
        var idstr;
        var idstr2;
        var leftWidth = 0;
        var tobj;

        idstr = 'ios_div_'+mytable.id+'_move_'+mytable.o_paging.c;
        if(mytable.n_freeze_column) {
            /*for(var i = 0; i<mytable.n_freeze_column;i++) {
                if ((mytable.a_capt[i].b_hide)||(mytable.a_capt[i].exp_hide)) continue;
                idstr2="TCOL_"+mytable.id+"_C_"+i;
                tobj = document.getElementById(idstr2);
                if(tobj)leftWidth += tobj.offsetWidth+30;
            }*/
            s_[s_.length] ='<div id="'+idstr+'_l" class="slideA" style="overflow:hidden;width:'+leftWidth+'px;z-index:10;top:0px;left:0px;">';
            s_[s_.length] = IBuild2(0,mytable.n_freeze_column,"_"+mytable.o_paging.c+'');
            s_[s_.length] = '<\/div>';
            s_[s_.length] ='<div id="'+idstr+'" class="slideB" style="min-width:'+(parseInt(middiv.style.width,10)-leftWidth)+';z-index:9;top:0px;left:'+leftWidth+'px;">';
            s_[s_.length] = IBuild2(mytable.n_freeze_column,lastCol,"_"+mytable.o_paging.c+'_r');
            s_[s_.length] = '<\/div>';
            return(s_.join(''));
        } else {
            s_[s_.length]='<div id="'+idstr+'" class="slideB" style="min-width:'+parseInt(middiv.style.width,10)+';z-index:9;top:0px;left:0px;">';
            s_[s_.length] = IBuild2(0,lastCol,"_"+mytable.o_paging.c+"");
            s_[s_.length] = '<\/div>';
            return(s_.join(''));
        }
    }

    function IFixFreeze() 
    {
        var idstr = 'ios_div_'+mytable.id+'_move_'+mytable.o_paging.c;
        var lobj = document.getElementById(idstr+'_l');
        var robj = document.getElementById(idstr);
        var tbr = document.getElementById('IWindowBodyFTS_'+mytable.id+"_"+mytable.o_paging.c);
        lobj.style.width = tbr.offsetWidth+'px';
        robj.style.left = tbr.offsetWidth+'px';
    
    }

    function IBuild2(startCol,lastCol,prefix) {
        var body_color = "white";
        var snode = mytable.getReportStyle('NODE');
        if(snode.backgroundColor!=null) body_color = snode.backgroundColor;

        if(mytable.n_freeze_column && startCol == 0 && body_color == 'transparent') {
            body_color = middiv.style.backgroundColor;
        }

        var i, s_ =[];
        var status_bcolor = mytable.a_cntl.statbackcolor;
        var cs;
        var status_color  = mytable.a_cntl.statcolor;


        if(!status_bcolor) status_bcolor="#C8C8C8";
        var mbcolor = mytable.a_cntl.menubackcolor;
        if(!mbcolor) mbcolor = "#C8C8C8";
        var widthstr='';
        var maxpag = Math.ceil(mytable.n_rows/mytable.o_paging.n);
        if(maxpag>0) maxpag = maxpag-1;


        //widthstr=' width="100%" ';    
        s_[s_.length]= '<table class="arGrid" style="-webkit-transform: translate3d(0, 0, 0);" '+widthstr;
        if(!mytable.is_export) s_[s_.length]= ' onclick="ibiIosGrid.cancelDrags();cellmenu();" onmouseout="curCell.tablenumber=-1;"';
        s_[s_.length]= ' bgcolor="'+body_color+'" id="IWindowBodyF_'+mytable.id+prefix+'" cellpadding="0" cellspacing="0" border=0>';
        s_[s_.length]= '<tr><td><div id="IWindowBodyFSO_'+mytable.id+prefix+'" style="width:4000px;margin:0px;padding:0px;-webkit-transform: translate3d(0, 0, 0);">';
        s_[s_.length]= '<table id="IWindowBodyFTS_'+mytable.id+prefix+'" '+widthstr+' cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing + mytable.o_css.main + ' border='+mytable.n_border+'>';
        s_[s_.length]= IBuildDummy(startCol,lastCol);
        if((mytable.o_paging.c==0)&&(mytable.a_cntl.tablehead))
            s_[s_.length]=IBuildHead(isTableHead,startCol,lastCol);
        s_[s_.length]= IBuildHead(isHead,startCol,lastCol);
        s_[s_.length]= IBuildHead(isAcHead,startCol,lastCol);
        s_[s_.length]= IBuildCaptTB(startCol,lastCol);
        if(mytable.a_cntl.ibinotvalid) {
            cs = ICalcColSpan(0,mytable.a_capt.length);
            s_[s_.length]='<tr><td class="arAuthorizedMessage" colspan='+cs+'>'+ibiMsgStr['lic']+'<\/td><\/tr>';
        }
        s_[s_.length]= '<\/table>';
        s_[s_.length]= '<\/div><\/td><\/tr>';
        s_[s_.length]='<tr><td><div id="IWindowBodyFBO_'+mytable.id+prefix+'" style="width:4000px;position:relative;overflow:hidden;margin:0px;padding:0px;-webkit-transform: translate3d(0, 0, 0);">';
        s_[s_.length]= '<div style="position:absolute;top:0px;left:0px;width:4000px;margin:0px;padding:0px;" id="IWindowBodyFB_'+mytable.id+prefix+'">';
        s_[s_.length]= '<table id="IWindowBodyFTB_'+mytable.id+prefix+'" '+widthstr+' cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing + mytable.o_css.main + ' border='+mytable.n_border+'>';
//p152564        s_[s_.length]= IBuildDummy(startCol,lastCol);
        s_[s_.length]= IBuildBodyTB(startCol,lastCol);
        s_[s_.length]= '<\/table>';
        s_[s_.length]= '<\/div><\/div><\/td><\/tr>';
        s_[s_.length]='<tr><td><div id="IWindowBodyFEO_'+mytable.id+prefix+'" style="margin:0px;padding:0px">';
        s_[s_.length]= '<table id="IWindowBodyFTE_'+mytable.id+prefix+'" '+widthstr+' cellpadding=' + mytable.n_padding + ' cellspacing=' + mytable.n_spacing + mytable.o_css.main + ' border='+mytable.n_border+'>';
        s_[s_.length]= IBuildDummy(startCol,lastCol);
        s_[s_.length]= IBuildHead(isFoot,startCol,lastCol);
        if(mytable.o_paging.c==maxpag)s_[s_.length]= IBuildHead(isTableFoot,startCol,lastCol);
        s_[s_.length]= '<\/table>';
        s_[s_.length]= '<\/div><\/td><\/tr>';
        s_[s_.length]= '<\/table>';
        var sa = s_.join('');
        return sa;
    }

    function IBuildPageBot() {
        var alignStr,fc,lc;
        var pers;
        var isCache = (typeof(mytable.a_cntl.cacheFex)!='undefined');
        var trcs = mytable.a_cntl.NumRecords;
        var ftrcs = trcs;
        if(mytable.haveFilters) ftrcs = mytable.a_filter_body.length;
        var n_a = Math.ceil(ftrcs / mytable.o_paging.n) - 1;
        if(ftrcs==0) {
            pers = 0;
            n_a= 0;
            } else {
            pers = Math.round((mytable.a_f_body.length/mytable.a_cntl.NumRecords)*10000)/100;
               }

        var tcolor = "black";
        if (mytable.a_cntl.statcolor) tcolor = mytable.a_cntl.statcolor;

        var a_ = ['<table width="100%" border="0" cellspacing=0 cellpadding=0><tr><td><table cellspacing="4" cellpadding="0" width="100%" border="0"><tr>'], n_cnt = a_.length;
        mytable.o_paging.c = mytable.o_paging.c * 1;
        var ss_ = '<span style="cursor:pointer;font-family:arial;font-size:20pt;" onclick="ibiIosGrid.cancelDrags();ibiIosGrid.gotoPage(' + mytable.id +',';
        var s_ = '<td style="white-space:nowrap" width=20>',se = '<\/td>';
        var scb = '', sce = '';    

        var leftpg1='',rightpg1='',leftpg2='',rightpg2='';
        if (mytable.o_paging.c > 0) {
            if (mytable.o_paging.s_pf) leftpg1 = ss_ + '0)"  title="'+ibiMsgStr['fpg']+'">' + mytable.o_paging.s_pf + '<\/span>';
            if (mytable.o_paging.s_pp) leftpg2 = ss_ + (mytable.o_paging.c - 1) + ')"  title="'+ibiMsgStr['ppg']+'">' + mytable.o_paging.s_pp + '<\/span>';
        }

        if (mytable.o_paging.c < n_a) {
            if (mytable.o_paging.s_pn) rightpg1 = ss_ + (mytable.o_paging.c + 1) + ')"  title="'+ibiMsgStr['npg']+'">' + mytable.o_paging.s_pn + '<\/span>';
            if (mytable.o_paging.s_pl) rightpg2 = ss_ + n_a + ')"  title="'+ibiMsgStr['lpg']+'">' + mytable.o_paging.s_pl + '<\/span>';
        }
        scb = leftpg1+leftpg2;
        sce = rightpg1+rightpg2;

        a_[n_cnt++] = '<td width="80">' + scb + '<\/td><td width="*">&nbsp;<\/td><td align="right" width="80">'+sce + '<\/td>';
         a_[n_cnt++] = '<\/tr><\/table><\/td><\/tr><\/table>';
        return a_.join('');
    }


    function IBuildPage(cctype) {
        var alignStr,fc,lc;
        var noinfo = false;
        if(cctype>-1) noinfo = true;
        var imytable = mytable;
        var pers;
        var isCache = (typeof(imytable.a_cntl.cacheFex)!='undefined');
        var trcs = imytable.a_cntl.NumRecords;
        var ftrcs = trcs;
        if(imytable.haveFilters) ftrcs = imytable.a_filter_body.length;
        var n_a = Math.ceil(ftrcs / imytable.o_paging.n) - 1;
        if(ftrcs==0) {
            pers = 0;
            n_a= 0;
            } else {
            pers = Math.round((imytable.a_f_body.length/imytable.a_cntl.NumRecords)*10000)/100;
               }

        var tcolor = "";
        if (imytable.a_cntl.statcolor) tcolor = "color:"+imytable.a_cntl.statcolor+";";
        if (imytable.is_export) return '';
        if (imytable.vertical_scroll) return '';
        var tbstr = ibiMsgStr['pbottext'], tbicon = ibiSkin.pboticon;
        var tcstr = ibiMsgStr['tctext'], tcicon = drawSUM(imytable);
            if(imytable.a_cntl.status) {
            tbstr=ibiMsgStr['ptoptext'];
            tbicon=ibiSkin.ptopicon;
        }
        var status_bcolor ="";
        var status_color = "";
        if(mytable.a_cntl.statbackcolor) status_bcolor= 'background-color:'+mytable.a_cntl.statbackcolor+';';
        if(mytable.a_cntl.statcolor) status_color = 'color:'+mytable.a_cntl.statcolor+';';
        var gc = 'class="arGridBar"';
        if(cctype>-1) { 
            gc = 'class="arChartMenuBar"';
            if(cctype == 5) gc ='class="arPivotMenuBar"';
        }
        
        var a_ = ['<table '+gc+' style="'+status_bcolor+status_color+'"  width="100%" border="0" cellspacing=0 cellpadding=0><tr><td><table cellspacing="4" cellpadding="0" width="100%" border="0"><tr>'], n_cnt = a_.length;
        imytable.o_paging.c = imytable.o_paging.c * 1;
        var ss_ = '<span style="cursor:pointer;" onclick="javascript:ibiIosGrid.cancelDrags();getMyTable(' + mytable.id + ').exePage(';
        var s_ = '<td style="white-space:nowrap" width=20>',se = '<\/td>';
        var scb = '', sce = '';    
        var minstr = '';
        switch(imytable.a_cntl.statusalign) {
            case 0: alignStr=' align="LEFT" ';  break;
            case 1: alignStr=' align="CENTER" ';break;
            case 2: alignStr=' align="RIGHT" '; break;
        }
        var leftpg1='',rightpg1='',leftpg2='',rightpg2='';

        if(imytable.filt.length) {
            var calcs = false;
            if(imytable.top_aggregate || imytable.bottom_aggregate) calcs=true;
            if(calcs) a_[n_cnt++] = '<td width=30 align="LEFT" style="white-space:nowrap" ><span title="'+tcstr+'" style="cursor:pointer;" onclick="ibiIosGrid.cancelDrags();getMyTable(' + mytable.id + ').togglecalc()">'+tcicon+'<\/span><\/td>';
        }
        a_[n_cnt++] = minstr;
     
         var frcs = imytable.o_paging.c*imytable.o_paging.n+1;
        if(imytable.n_rows==0) frcs = 0;
        var lrcs = frcs+imytable.o_paging.n-1;
        if(lrcs>imytable.n_rows) lrcs = imytable.n_rows;
    
        scb = leftpg1+leftpg2;
        sce = rightpg1+rightpg2;
        var tdstart = '<td style="white-space:nowrap;'+tcolor+'" width="*"' + '>';
        var sp = new RegExp('%tn','g');
        var sp2 = new RegExp('%ind','g');
        var indStr = "<span style='cursor:pointer;text-decoration:underline;' title='"+ibiMsgStr["gotopage"]+"' onclick='ibiIosGrid.cancelDrags();showGotoPage("+mytable.a_cntl.table_number+","+( mytable.o_paging.c+1)+")' id='ipgnum"+mytable.a_cntl.table_number+"'>"+( mytable.o_paging.c+1)+"<\/span>";
        var str1 = imytable.o_paging.s_tt;
        if(noinfo) str1='';
        a_[n_cnt++] = '<td '+alignStr+'><table border=0><tr>'+tdstart + scb + '<\/td>' +tdstart +
            str1.replace('%inds',indStr).replace(sp2, imytable.o_paging.c+1).replace('%frcs',frcs).replace('%lrcs',lrcs).replace('%trcs',trcs).replace('%pers',pers).replace('%pgs', n_a+1).replace('%rcs', imytable.n_rows).replace(sp, imytable.a_cntl.table_number) + 
            '<\/td>' + tdstart + sce + '<\/td><\/tr><\/table><\/td>';
         a_[n_cnt++] = '<td width=30><span title="'+ibiMsgStr["ogv"]+'" style="cursor:pointer;" onclick="ibiIosGrid.cancelDrags();ibi_iPadMenu.fullScreen('+mytable.a_cntl.table_number+',true,false)">'+ibiSkin.fullicon2+'<\/span><\/td>';
        a_[n_cnt++] = '<\/tr><\/table><\/td><\/tr><\/table>';
        return a_.join('');
    }
 
    function IBuildCell(value, s_CSS, s_add, s_color,s_valign,s_id) {
        return '<td style="'+s_color+'" ' +  (s_id? ' id="' + s_id + '" ' : '')+(s_valign? ' valign="' + s_valign + '"' : '')+ (s_color? ' bgcolor="' + s_color + '"' : '')+ s_CSS + (s_add ? ' ' + s_add : '') + '>' + value + '<\/td>';
    }

    function IBuildDummy(first,last) {
        var a_ = ['<tr>'], i, n_cnt = 1;
        var tn = mytable.a_cntl.table_number;
        

        if(last==0) 
            a_[n_cnt++]='<td>'+blankdot+'<\/td>';
        else
        for (i=first; i < last; i++) {
            if ((!mytable.a_capt[i].b_hide)&&(!mytable.a_capt[i].exp_hide)) {
                a_[n_cnt++]='<td>'+blankdot+'<\/td>';
                if(mytable.a_capt[i].vispct) a_[n_cnt++]='<td>'+blankdot+'<\/td>';
                if(mytable.a_capt[i].vis) a_[n_cnt++]='<td>'+blankdot+'<\/td>';
                if(mytable.a_capt[i].haspro) a_[n_cnt++]='<td>'+blankdot+'<\/td>';
            }
        }
        a_[n_cnt++] = '<\/tr>';
        return a_.join('');
    }

    function IBuildCaptTB(first,last) {
        var a_ = [], i, n_cnt = 0;
        var tn = mytable.a_cntl.table_number;
        var idstr,mstr,sortstr='',bgcolor;
        var idstr2;
        var tbgcolor = '';
        var tcolor = '';


        a_[n_cnt++] = '<tr class="arGridColumnHeading">';
        if(last==0) 
            a_[n_cnt++]='<td><div id=popid'+tn+'_0><\/div><\/td>';
        else
        for (i=first; i < last; i++) {
            if ((!mytable.a_capt[i].b_hide)&&(!mytable.a_capt[i].exp_hide)) {
                tcolor = "";
                tbgcolor = "";
                if ((typeof(mytable.a_capt[i].name.bcolor)!="undefined")&&
                    (mytable.a_capt[i].name.bcolor!='')) tbgcolor = "background-color:"+mytable.a_capt[i].name.bcolor+";";
                if ((typeof(mytable.a_capt[i].name.color)!="undefined")&&
                    (mytable.a_capt[i].name.color!='')) tcolor = "color:"+mytable.a_capt[i].name.color+";";

            if (mytable.a_capt[i].type) {
                idstr="TCOL_"+tn+"_C_"+i+'_f';
                idstr2="TCOLTD_"+tn+"_C_"+i+'_f';
                
                if(!mytable.isHFreezeEnabled) {
                    sortstr = '<td>&nbsp;<\/td><td onclick="javascript:ibi_add_popmenu(getMyTable('+tn+'),'+i+');" height="20" width="20" style="white-space:nowrap" align="left" valign="bottom">';
                    sortstr += ibiSkin.popicon;
                    sortstr += '<\/td>';
                } else {
                    
                    sortstr =  '<td>&nbsp;<\/td>';
                    sortstr += '<td height="20" width="20" style="white-space:nowrap" align="left" valign="bottom"><div id="popid' + tn + '_' + i + '"></div></td>';
                }
                
                
/*
                sortstr = '<td>&nbsp;<\/td><td height="20" width="20" style="white-space:nowrap" align="left" valign="middle" ';
                if((mytable.a_sort.length == 0)||(mytable.a_sort[0].n_col!=i)) {
                    sortstr += ' onclick="javascript:ibiIosGrid.cancelDrags();doSort('+tn+','+i+',false);">';
                    sortstr += ibiSkin.sorticon3;
                } else {
                    if(mytable.a_sort[0].b_ord) {
                        sortstr += ' onclick="javascript:ibiIosGrid.cancelDrags();doSort('+tn+','+i+',false);">';
                        sortstr += ibiSkin.sorticon1;
                    } else {
                        sortstr += ' onclick="javascript:ibiIosGrid.cancelDrags();doSort('+tn+','+i+',true);">';
                        sortstr += ibiSkin.sorticon2;
                    }
                }
                sortstr += '<\/td>'; */

                mstr = '<td ';
                mstr += ' onclick="javascript:ibiIosGrid.cancelDrags();ibi_add_popmenu(getMyTable('+tn+'),'+i+');" ';
                if(mytable.a_capt[i].name.exClass!='') mstr += " class='"+mytable.a_capt[i].name.exClass+"' ";
                mstr+='onmouseover="setCurCell('+tn+',\''+idstr+'\')" ';
                if(mytable.a_capt[i].name.align!='') mstr += " align='"+mytable.a_capt[i].name.align+"' ";
                switch (mytable.a_capt[i].name.wrap) {
                    case " NOWRAP": case " ":
                        mstr += 'style="white-space:nowrap" ';
                        break;
                    default:
                        mstr += 'style="width:' + mytable.a_capt[i].name.wrap + 'px;" ';
                        break;
                }
                mstr += 'id=\'' + idstr + '\' ';
                a_[n_cnt++] = IBuildCell(['<table style="'+tcolor+tbgcolor+'" cellpadding="0" cellspacing="0" border="0" width="100%"><tr valign="middle">',mstr, mytable.o_css.captText, '>', mytable.a_capt[i].name.name, '<\/td>',sortstr,'<\/tr><\/table>'].join(''),'',null,tbgcolor,"BOTTOM",idstr2);
                if(mytable.a_capt[i].vispct) {
                    var spb='<span style="',spe='<\/SPAN>',va='';
                    if(mytable.a_capt[i].name.font!='') spb+='font-family:'+mytable.a_capt[i].name.font+';';
                    if(mytable.a_capt[i].name.size!='') spb+='font-size:'+mytable.a_capt[i].name.size+'pt;';
                    spb+='position:absolute;">';
                    if(mytable.a_capt[i].name.valign!='') va=' valign='+mytable.a_capt[i].name.valign+' ';
                    a_[n_cnt++]='<td '+mytable.a_capt[i].name.wrap+' '+va+' style="'+tbgcolor+tcolor+'>'+spb+ibiMsgStr['pot']+spe+'<\/td>';
                }
                if(mytable.a_capt[i].vis) a_[n_cnt++]='<td style="'+tbgcolor+tcolor+'">&nbsp;<\/td>';
                if(mytable.a_capt[i].haspro) a_[n_cnt++]='<td style="'+tbgcolor+tcolor+'">&nbsp;<\/td>';
            }
            else a_[n_cnt++] = IBuildCell(['<table cellpadding="0" width="100%" cellspacing="0" border="0"><tr valign="bottom"><td style="white-space:nowrap'+tbgcolor+tcolor+'" width="100%"', mytable.o_css.captText, '>', mytable.a_capt[i].name.name, '<\/td><\/tr><\/table>'].join(''),null,null,tbgcolor,"BOTTOM");
            }
        }
        a_[n_cnt++] = '<\/tr>';
        if(mytable.top_aggregate) a_[n_cnt++]=IBuildBodyAG(first,last,'head');
        return a_.join('');
    }

    function IBuildBodyTB(first,last) {
        var vval;
        var a_ = [], i,n_col_count=0, j, s_color, s_color_str,  n_c = 0;
        var haveSubTop = false;
        var haveSubBot = false;
        var expanded,hr,val;
        var ss_color = 0;
        var current_by = -1,idval;
                var wside = 'r';
        var firstbycol = -1;
        var firstbyacd = -1;
        var breaklevel,classStr,exp_str,idstr;
        var cellstr,lvl;
        var tn=mytable.a_cntl.table_number;
        var tnc, si, sind, sk, sl, ss;
        if(mytable.isRollUp) tnc = mytable.parent_table;
        else tnc = mytable.a_cntl.table_number;
        var lastbylevel=mytable.sublevel+1;
        var doByDisplay=mytable.a_cntl.ByDisplay;
        var showsubtotal=(mytable.a_cntl.subtotal)?true:false;
        var showgrandtotal=(mytable.a_cntl.grandtotal)?true:false;
        var is_export = mytable.is_export;
        var AccordionIsOn = mytable.AccordionIsOn;
        var HierIsOn = false, breakhere=false;
        var _ll=0,needColspan;
        var allowVis,fbl,valr,dline,val2,ao;
        var showsubcalc=false;
        var stnode;

        mytable.NotesToSet=[];
        if(mytable.side == 'l') wside = 'l';
        i = mytable.o_paging.c * mytable.o_paging.n;
        var counter = 0;
        ss_color = 0;
        mytable.highRow = [];

        if((mytable.a_sort[0]) && (mytable.a_sort[0].n_col!=mytable.FirstNoprintColumn)) {
            showsubtotal=false;
            doByDisplay=true;
        }
        if(mytable.groupSort) doByDisplay=false;
        if((mytable.filt.length)&&(mytable.filter_type==1)) {
            showsubtotal=false;
            showgrandtotal=false;
        }
        if(mytable.a_cntl.subhead && mytable.showsubHF) 
            haveSubTop= true;
        if((mytable.a_cntl.subfoot && mytable.showsubHF) || showsubtotal) 
            haveSubBot = true;
                if(( mytable.a_cntl.skipline  && mytable.showsubHF) || showsubtotal) 
            haveSubBot = true;

        if(mytable.bykeys) {
            if(i>0)
                if(typeof(mytable.a_f_body[i-1])=='undefined'){
                    ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'],mytable.a_cntl.table_number);
                    setTimeout("IgetMoreData("+mytable.a_cntl.table_number+","+(i-1)+");hide_wait_sb("+mytable.a_cntl.table_number+");",0);
                    ao = a_.join('');    
                    return ao;
                }
            for(var s=0; s<mytable.bykeys.length; s++) {
                mytable.bykeys[s].value='***';
                if(mytable.bykeys[s].subcalcs) {
                    haveSubBot=true;
                    showsubcalc=true;
                }
            }
        }

        //if(mytable.top_aggregate)    a_[n_c++]=IBuildBodyAG(first,last,'head');
        var lastAcdV = -1, lastAcdJ, printColNum;

        while(counter<mytable.o_paging.n && i<mytable.n_rows){
            /* check if we need to get data from cache */
            if(typeof(mytable.a_f_body[i])=='undefined'){
                ibiStd.ShowWaitSB(ibiMsgStr['getmoredata'],mytable.a_cntl.table_number);
                setTimeout("IgetMoreData("+mytable.a_cntl.table_number+","+i+");ibiStd.HideWait();",0);
                ao = a_.join('');    
                return ao;
            }

            var valar = mytable.a_f_body[i];
            si = valar[0];
//check highlight on display
            var isRoot = true;
            if(mytable.isRollUp) isRoot=false;
            var hr1 = mytable.callHigh(isRoot,mytable.a_cont[si]);
            hr = mytable.a_f_body[i][1];
            if(hr1) hr = hr1;


            expanded = true;
            if(mytable.a_cntl.hierarchy)
                if(mytable.a_cntl.hierarchy.Expand)
                    expanded = mytable.a_cont[si][mytable.n_cols+2]?false:true;

            if(mytable.a_f_body[i] && 
                (i==0 || expanded || is_export)){
                counter++;

                s_color = null;
                s_color_str = '';
                var ky='';
                current_by = -1;
                if(mytable.bykeys) {
                    firstbycol = -1; firstbyacd=-1;
                    lastbylevel=mytable.sublevel;
                    for(s=0; s<mytable.bykeys.length;s++) {
                        var s_=mytable.a_cont[si][mytable.a_capt[mytable.bykeys[s].column].dataField];
                        if(mytable.bykeys[s].value!=mytable.IBs[s_[DARAW]]) {
                            mytable.bykeys[s].value=mytable.IBs[s_[DARAW]];
                            if(firstbycol==-1) {
                                if(s==0) firstbycol = mytable.bykeys[s].column;
                                else {
                                    firstbycol = mytable.bykeys[s-1].column;
                                    lvl = mytable.a_capt[firstbycol].level;
                                    while((firstbycol<mytable.n_cols)&&(mytable.a_capt[firstbycol].level==lvl))
                                        firstbycol++;
                                    if(firstbycol>=mytable.n_cols) firstbycol = mytable.n_cols-1;
                                }
                                current_by = s;
                            }
                            if((firstbyacd==-1)&&(!mytable.a_capt[mytable.bykeys[s].column].noprint)) firstbyacd = mytable.bykeys[s].column;
                        }
                    }
                    if(firstbycol==-1) firstbycol = -2;
                }
                if((haveSubTop)&& (current_by!=-1)){
                    if(firstbycol==-1) sk=mytable.sublevel;
                    else sk=mytable.a_capt[mytable.bykeys[current_by].column].level;
                    if(mytable.sublevel>lastbylevel) sl = lastbylevel+1;
                    else sl = mytable.sublevel+1;
                    if(sk<sl) {
                        for (ss = sk; ss < sl; ss++) {
                            if(haveSubTop) {
                                a_[n_c++]=IBuildHead(isSubHead,first,last-1,ss);
                            }
                        }
                    }
                }
                if(mytable.a_cntl.altcolors) {
                    s_color = mytable.a_cntl.altcolors[ss_color];
                    ss_color++; if(ss_color>=mytable.a_cntl.altcolors.length) ss_color=0;
                    s_color_str = ' bgcolor=' + s_color;
                }

                _ll=0;
                if((hr==1)||(hr==3)) mytable.highRow[mytable.highRow.length]='Im'+mytable.id+wside+si+'.'+_ll;
                if(lastAcdV!=-1) {
                    if(lastAcdV == mytable.a_cont[si][lastAcdJ][DAACD]) {
                        i++;
                        continue;
                    }
                }
                lastAcdV = -1;
                needColspan = 0;

                a_[n_c++] = '<tr id="Im' + mytable.id + wside + si+'.'+_ll + '" ' + s_color_str + mytable.s_light+ '>';
                idval = 'Im'+mytable.id+wside+i+'.'+_ll+'C';
                idstr = ' id="'+idval;
                breakhere = false;
            
                fbl = -1;
                if(mytable.bykeys) {
                    if(firstbycol==-2)
                        fbl = mytable.a_capt[mytable.n_cols-1].level;
                    else
                    if(firstbycol!=-1)
                        fbl = mytable.a_capt[firstbycol].level;
                }
                for (j = first, printColNum = first - 1; j < last; j++) {
                    idval = 'I'+mytable.id+wside+i+'.'+_ll+'C';
                    if (mytable.a_capt[j].b_hide) { // printColNum: avoids noprint cols for across
                        if (mytable.a_capt[j].noprint == false) ++printColNum;
                        continue;
                    } else {
                        ++printColNum;
                    }
                    valr = mytable.a_cont[si][mytable.a_capt[j].dataField];
                    val = mytable.IBs[valr[DASTR]];
                    if(mytable.a_cntl.cacheMode) {
                        var href = null;
                        var ucol = j;
                        if(mytable.a_capt[j].orgCol>-1) ucol = mytable.a_capt[j].orgCol;
                        if(mytable.o_look.styles!=null) href = mytable.getHrefNode(mytable.o_look.styles,ucol,i);
                        if(href !=null) {
                            href = mytable.setHrefValues(href,mytable.a_cont[si]);
                            val = href + val + "<\/a>";
                        }
                    }
                    allowVis = true;

                    if(!doByDisplay) 
                        if(mytable.a_capt[j].level<fbl) {
                            val='&nbsp;';
                            allowVis = false;
                            if(AccordionIsOn) {
                                needColspan = ICalcColSpan(first,j);
                                continue;
                            }
                        }
                    if(needColspan) {
                        a_[n_c++]= '<td colspan='+needColspan+' '+idstr+j+'">&nbsp;<\/td>';
                        needColspan = 0;
                    }
                    if ((!mytable.a_capt[j].b_hide)&&(!mytable.a_capt[j].exp_hide || is_export || !mytable.AccordionIsOn)) {
                        //classStr= ' class="IBIS'+tnc+'_'+valr[DACLS]+'" ';
                        val2=val+'';
                        if(mytable.a_capt[j].name.dataClass) classStr= ' class="'+mytable.a_capt[j].name.dataClass+'" ';
                        else
                        //if(mytable.a_cntl.cacheMode || mytable.isRollUp)
                            classStr = mytable.getColumnStyle(j,si,counter,mytable.a_cont[si],val2,printColNum);
                        //if((val2=='')||(val2==' ')||(val2=='&nbsp;')) classStr=' ';
                        exp_str = "";
                        if(val2.substr(0,2).toUpperCase() == '<A') {
                            val2 = val2.substr(0,2) + ' '+classStr+val2.substr(2);
                        }
                        if(mytable.a_capt[j].ishier) {
                            hlevel=valr[DAHIR];
                            if((!mytable.a_cntl.hierarchy.Expand)||(si+1==mytable.n_rows)||(valr[DAHIR]>=mytable.a_cont[si+1][mytable.a_capt[j].dataField][DAHIR]))
                                exp_str='<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span>';
                            else {
                                if(mytable.a_cont[si+1][mytable.n_cols+2]==0)
                                    exp_str = '<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span><span style="cursor:pointer;text-align:top;" onclick="ibiIosGrid.cancelDrags();javascript:MyTable[' + mytable.id + '].hiercollapse('+si+','+j+',false)">-<\/span>&nbsp;';
                                else
                                    exp_str = '<span style="width:'+mytable.a_cntl.hierarchy.Indent*hlevel+'px;"><\/span><span style="cursor:pointer;text-align:top;" onclick="ibiIosGrid.cancelDrags();javascript:MyTable[' + mytable.id + '].hierexpand('+si+','+j+',true)">+<\/span>&nbsp;';
                            }
                        } else 
                        if(AccordionIsOn) {
                            if((mytable.a_capt[j].level<mytable.highest_level) && mytable.a_capt[j].isby && (val!='&nbsp;') && !is_export){
                                if(isexpanded) exp_str = '<span style="cursor:pointer;text-align:top;" onclick="javascript:ibiIosGrid.cancelDrags();MyTable[' + mytable.id + '].collapse(\''+valr[DAACD]+'\')">'+'-'+'<\/span>&nbsp;';
                                else     exp_str = '<span style="cursor:pointer;text-align:top;" onclick="javascript:ibiIosGrid.cancelDrags();MyTable[' + mytable.id + '].expand(\''+valr[DAACD]+'\')">'+'+'+'<\/span>&nbsp;';
                            }else exp_str="";
                        }
                        idval+=j+'';
                        cellstr="<span title='' id='C"+idval+"'><\/span>";

                        if(typeof(valr[DANOTE])!="undefined") {

// grid tool move the column number, however notes follow the original datafield, so change to this:
                        var dataOrigCol = mytable.a_capt[j].dataField;
                         mytable.NotesToSet[mytable.NotesToSet.length]=[mytable.a_cntl.table_number,i,dataOrigCol,idval];
        }
                        dline = '<td' + classStr + idstr+j+'"';
                        if(!mytable.is_export) dline+=' onmouseover="setCurCell('+tn+',\''+idval+'\')"';
                        //val2=val+'';
                        if((val2=='')||(val2==' ')) val2='&nbsp;';
                        if(mytable.a_capt[j].name.wrap==" NOWRAP") dline += " nowrap ";
                        else
                        if(mytable.a_capt[j].name.wrap!=" ") dline += ' style="width:'+mytable.a_capt[j].name.wrap+'pt;" ';
                        dline += '>'+ exp_str + val2 +cellstr + '<\/td>';
                        a_[n_c++]=dline;
                        if((mytable.a_capt[j].vis) || (mytable.a_capt[j].vispct)|| (mytable.a_capt[j].haspro))  {
                            sind = valr[DARAW];
                            if(sind==-1) vval = missingVal;
                            else vval = mytable.IBs[sind];
                            stnode = mytable.getColumnStyle(j,si,counter,mytable.a_cont[si],val2,printColNum,'NODE');
                            a_[n_c++]=IMakeVis(val,'IBIS'+tnc+'_'+valr[DACLS],vval,mytable.a_cont.length,mytable.a_capt[j],mytable.a_cntl.cdn,allowVis,'',stnode,classStr);
                        }
                    }
                    if((breakhere) && (j<mytable.n_cols-1) && (breakherelevel!=mytable.a_capt[j+1].level)){
                        break;
                    }
                }

                a_[n_c++] = '<\/tr>';
                current_by = -1;
                if((haveSubBot) && ((typeof(mytable.a_f_body[i+1])!="undefined")||(i+1>=mytable.n_rows))){
                    firstbycol = -1;
                    if((i+1)<mytable.n_rows) {
                        for(s =0; s<mytable.bykeys.length;s++) {
                            if(mytable.bykeys[s].value!=mytable.IBs[mytable.a_cont[mytable.a_f_body[i+1][0]][mytable.a_capt[mytable.bykeys[s].column].dataField][DARAW]]) {
                                if(firstbycol==-1) {
                                    if(s==0) firstbycol = mytable.bykeys[s].column;
                                    else firstbycol = mytable.bykeys[s-1].column+1;
                                    current_by = s;
                                }
                            }
                        }
                    } else {
                        current_by=0;
                        firstbycol = 0; 
                    }
                    if(current_by != -1) {
                        if(firstbycol==-1) sk=mytable.sublevel;
                        else sk=mytable.a_capt[mytable.bykeys[current_by].column].level;
                        if(mytable.sublevel>lastbylevel) sl = lastbylevel+1;
                        else sl = mytable.sublevel+1;
                        if(sk<sl) {
                            if (showsubcalc) {
                                for (ss = sl-1; ss >= sk; ss--) {
                                    a_[n_c++]=IBuildHead(isSubCalc,first,last-1,ss);
                                }
                            }
                            if (showsubtotal) {
                                for (ss = sl-1; ss >= sk; ss--) {
                                    a_[n_c++]=IBuildHead(isSubTotal,first,last-1,ss);
                                }
                            }
                            if ((mytable.a_cntl.subfoot)&&(mytable.showsubHF)) {
                                for (ss = sl-1; ss >= sk; ss--) {
                                    a_[n_c++]=IBuildHead(isSubFoot,first,last-1,ss);
                                }
                            }
                            if ((mytable.a_cntl.skipline)&&(mytable.showsubHF)) {
                                for (ss = sl-1; ss >= sk; ss--) { 
                                    a_[n_c++]=IBuildHead(isSkipLine,first,last-1,ss );
                                }
                            }
                        }
                    }
                }
            }
            i++;
        }
        
        if(((i==mytable.n_rows)&&(showgrandtotal)) || mytable.isHFreezeEnabled) 
            a_[n_c++]=IBuildHead(isGrandTotal,first,last-1,ss);
        if(mytable.bottom_aggregate) a_[n_c++]=IBuildBodyAG(first,last,'foot');
        ao = a_.join('');    
        return ao;
    }



    function IBuildHead(istype,first_col,last_col,slevel,noHTML) {
        var heading = null, curHeadRow = null, curHeadColCell = null, aCaptCurHeadCol = null;
        var hstart = 0, numColsInCurHeadRow = 0;
        var s_ ='';
        var fc = (first_col == -1) ? 0 : first_col;
        var lc = (last_col == -1) ? mytable.n_cols : last_col;
        var maxcols = lc-fc;
        var ph = false, doingSubs = false, printheading = true;
        var tn = mytable.a_cntl.table_number;
        var idstr, useLc, useFc, cs;
        var checkVisualize = false;

        // needed because visual data not counted as column; but for colspan it is 
        var _getNextCol = function(startingCol, userDefColspan) {
            var actualColNum = 0, aCaptCurCol;
            for (var col = startingCol, numCols = mytable.n_cols; col < numCols; ++col) {
                aCaptCurCol = mytable.a_capt[col];
                if (!aCaptCurCol.noprint) {
                    ++actualColNum;
                    if (aCaptCurCol.visOrig) ++actualColNum;
                    if (aCaptCurCol.vispct) ++actualColNum;
                    if (aCaptCurCol.haspro) ++actualColNum;
                    if (actualColNum >= userDefColspan) break;
                }
            }
            return col;
        }; // end _getNextCol()

        var _getNumCols = function() {
            var actualNumCols = 0, aCaptCurCol;
            for (var col = 0, numCols = mytable.n_cols; col < numCols; ++col) {
                aCaptCurCol = mytable.a_capt[col];
                if (!aCaptCurCol.noprint) {
                    ++actualNumCols;
                    if (aCaptCurCol.vis) ++actualNumCols;
                    if (aCaptCurCol.vispct) ++actualNumCols;
                    if (aCaptCurCol.haspro) ++actualNumCols;
                }
            }
            return actualNumCols;
        }; // end _getNumCols()

        if((istype>isTableFoot)&&(istype<isSubCalc)) doingSubs = true;
        switch (istype) {
            case isHead: heading=mytable.a_cntl.heading;break;
            case isFoot: heading=mytable.a_cntl.footing;break;
            case isSubHead: heading=mytable.a_cntl.subhead;break;
            case isSubFoot: heading=mytable.a_cntl.subfoot;break;
            case isSkipLine: heading=mytable.a_cntl.skipline;break; 
            case isSubTotal: 
                if (!mytable.haveFilters) {
                    heading = mytable.a_cntl.subtotal;
                }
                break;
            case isGrandTotal: 
                if (!mytable.haveFilters) {
                    heading = mytable.a_cntl.grandtotal;
                }
                break;
            case isTableHead: heading=mytable.a_cntl.tablehead;break;
            case isTableFoot: heading=mytable.a_cntl.tablefoot;break;
            case isAcHead: heading=mytable.a_cntl.acheading;break;
        }

        if((!heading)&&(istype<isSubCalc)) return '';

        if(istype==isSubCalc) {
            var cond=[];
            var data, bgcolor, i;
            for (i = 0; i <= slevel; i++) {
                cond[i]=mytable.bykeys[i].value;
            }
            if ((mytable.bykeys[slevel].subcalcData==null) ||
                (mytable.a_capt[slevel].b_hide)) {
                return '';
            }
            var record = IGetSubCalc(mytable.bykeys[slevel].subcalcData,cond);
            if(record==null) return '';

            s_ += "<tr>";
            for (i = fc; i <= lc; i++) {
                aCaptCurHeadCol = mytable.a_capt[i];
                if (aCaptCurHeadCol.b_hide) continue;
                var tcolor='color:black;', classStr='';
                bgcolor = '';
                if (aCaptCurHeadCol.name.color) { tcolor = 'color:'+aCaptCurHeadCol.name.color+';'; }
                if (mytable.a_cntl.calccolor) { tcolor= 'color:'+mytable.a_cntl.calccolor+';'; }
 
                if (aCaptCurHeadCol.name.bcolor) { bgcolor = 'background-color:'+aCaptCurHeadCol.name.bcolor+';'; }
                if (mytable.a_cntl.calcbackcolor) { bgcolor = 'background-color:'+mytable.a_cntl.calcbackcolor+';'; }
                if (mytable.o_css['head']) { classStr = mytable.o_css['head']; }
                s_ += "<td style='"+tcolor+bgcolor+"font-family:"+aCaptCurHeadCol.name.font+";font-size:"+aCaptCurHeadCol.name.size+"pt;' "+classStr;
                if(i>=mytable.bykeys.length) {
                    data = "&nbsp";
                    for(var j=slevel+1;j<record.length;j++) {
                        if(aCaptCurHeadCol.dataField == mytable.bykeys[slevel].subcalcCol[j])
                            data = mytable.IBs[record[j][DASTR]];
                    }
                    s_ += ' nowrap align="right"><span style="font-weight:bold;'+tcolor+'">'+data+'<\/span>';
                } else if(i==slevel) {
                    s_ += ' nowrap><span style="font-weight:bold;'+tcolor+'">'+ibiMsgStr['ctot']+" "+mytable.bykeys[slevel].value+'<\/span>';
                } else { s_ += ">&nbsp;"; }
                s_ += "<\/td>";
                if (aCaptCurHeadCol.vis) { s_ += '<td style="'+bgcolor+'">&nbsp<\/td>'; }
                if (aCaptCurHeadCol.vispct) { s_ += '<td style="'+bgcolor+'">&nbsp<\/td>'; }
                if (aCaptCurHeadCol.haspro) { s_ += '<td style="'+bgcolor+'">&nbsp<\/td>'; }
            }
            s_ += "<\/tr>";
        } else {
        var numActualCols = _getNumCols();
        checkVisualize = (numActualCols > mytable.n_cols) ? true : false;
        for (var row = 0, numHeadingRows = heading.length; row < numHeadingRows; ++row) {
            curHeadRow = heading[row];
            numColsInCurHeadRow = curHeadRow.length;
            if(doingSubs) {
                printheading = true;
                hstart = (slevel*1)+1;
                if (hstart > numColsInCurHeadRow) { hstart = numColsInCurHeadRow; }
                if (hstart >= numColsInCurHeadRow) {
                    printheading = false;
                } else if (typeof(curHeadRow[hstart].byvalue) != "undefined") {
                    printheading = false;
                } else {
                    for(var ss=0; ss<hstart;ss++) {
                        var curCellByValue = curHeadRow[ss].byvalue;
                        if(typeof(curCellByValue)=="undefined") {
                            printheading=false;
                            break;
                        }
                        if(mytable.a_capt[mytable.bykeys[ss].column].type == IBINUM) {
                            var num1 = mytable.IBs[curCellByValue];
                            var num2 = mytable.bykeys[ss].value;
                            num1 = removeComma(num1);
                            num2 = removeComma(num2);
                            if(parseFloat(num1)!=parseFloat(num2)) {
                                printheading=false;
                                break;
                            }
                        } else if(mytable.IBs[curCellByValue]!=mytable.bykeys[ss].value) {
                            printheading=false;
                            break;
                        }
                    }
                }
            }
            if(printheading) {
                if(!noHTML) s_ += '<tr>';
                for (var col = hstart, curr_col = 0, colspan = 0, adjustedColspan = 0;
                     col < numColsInCurHeadRow;
                     ++col, curr_col += adjustedColspan) {
                    curHeadColCell = curHeadRow[col];
                    if (typeof curHeadColCell === 'undefined') continue;
                    colspan = curHeadColCell.colspan;
                    if (typeof colspan === 'undefined') continue;
                    if(colspan=='') {
                        colspan = ((numColsInCurHeadRow - hstart)>1) ? 1 : mytable.n_cols_print;
                    }
                    colspan = colspan*1;
                    adjustedColspan = (checkVisualize && (colspan > 1)) ? _getNextCol(col, colspan) : colspan;
                    useFc = getRealColumn(mytable, curr_col, checkVisualize);
                    if((useFc > lc) && (mytable.n_cols > 0)) continue;
                    useLc = getRealColumn(mytable, (curr_col + colspan - 1), checkVisualize);
                    if((useLc < fc) && (mytable.n_cols > 0)) continue;
    
                    aCaptCurHeadCol = mytable.a_capt[useFc];
    
                    var align='';
                    bgcolor = '';
                    if(useFc<fc) useFc = fc;
                    if(useLc>lc) useLc = lc;

                    if (checkVisualize && (colspan > 1)) {
                        cs = ICalcColSpan(useFc, useLc, checkVisualize, colspan);
                    } else {
                        cs = ICalcColSpan(useFc,useLc);
                    }

                    if((cs)||(mytable.n_cols==0)){
                        if (curHeadColCell.bcolor) { bgcolor = ' BGCOLOR="'+curHeadColCell.bcolor+'" '; }
                        if (curHeadColCell.align) { align = ' align="'+curHeadColCell.align+'" '; }
                        if((istype==isSubTotal)||(istype==isGrandTotal)) {
                            if (aCaptCurHeadCol.vis) cs--;
                            if (aCaptCurHeadCol.vispct) cs--;
                            if (aCaptCurHeadCol.haspro) cs--;
                        }
                        idstr='THEAD_'+tn+'_'+istype+'_'+col+'_'+curr_col;
                        if (!noHTML) { s_ += '<td '; }
                        if (!mytable.is_export && !noHTML) { s_ += 'onmouseout="curCell.tablenumber=-1;"  onmouseover="setCurCell('+tn+',\''+idstr+'\')" '; }
                        if (!noHTML) { s_ += 'id="'+idstr+'" COLSPAN='+cs+bgcolor+align+'>' + curHeadColCell.name + '<\/td>'; }
                        else { s_ += curHeadColCell.name; }
                        if(((istype==isSubTotal)||(istype==isGrandTotal))&&(!noHTML)) {
                            if (aCaptCurHeadCol.vis) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                            if (aCaptCurHeadCol.vispct) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                            if (aCaptCurHeadCol.haspro) { s_ += '<td COLSPAN=1'+bgcolor+'>&nbsp<\/td>'; }
                        }
                        ph = true;
                    }
                }
                if (!ph && !noHTML) {
                    try {
                        if(curHeadRow[0].bcolor) { bgcolor = ' BGCOLOR="'+curHeadRow[0].bcolor+'" '; }
                    } catch (e) { }
                    s_ += '<td COLSPAN='+maxcols+bgcolor+'>&nbsp;<\/td>';
                }
                if (!noHTML) { s_ += '<\/tr>'; }
            }
        } } // end-else and for
        return s_;
    }

    function IBuildBodyAG(first,last,pwhere) {
        var a_ = [], n_c = 0;
        a_[n_c++]='<tr>';
        for(var j=first; j < last; j++){
            if ((!mytable.a_capt[j].b_hide)&&((!mytable.a_capt[j].exp_hide)||(mytable.isexport)|| !mytable.AccordionIsOn)) {
                var val = '&nbsp;',tcolor='black',bgcolor='';
                if(mytable.a_capt[j].name.color)
                    tcolor = mytable.a_capt[j].name.color;
                if(mytable.a_cntl.calccolor) tcolor=mytable.a_cntl.calccolor;
 
                if(mytable.a_capt[j].name.bcolor)    bgcolor = 'background-color'+mytable.a_capt[j].name.bcolor+';'; 
                if(mytable.a_cntl.calcbackcolor) bgcolor = 'background-color'+mytable.a_cntl.calcbackcolor+';';
 
                if(mytable.a_capt[j].SUM) val = mytable.aggregateFun('SUM',j);
                else if(mytable.a_capt[j].MIN) val = mytable.aggregateFun('MIN',j);
                else if(mytable.a_capt[j].MAX) val = mytable.aggregateFun('MAX',j);
                else if(mytable.a_capt[j].AVG) val = mytable.aggregateFun('AVG',j);
                else if(mytable.a_capt[j].COU) val = mytable.aggregateFun('COU',j);
                else if(mytable.a_capt[j].DIS) val = mytable.aggregateFun('DIS',j);
                var val2 = '<span style="COLOR:'+tcolor+';">'+val+'<\/span>';
                a_[n_c++]=IBuildCell(val2,mytable.o_css[pwhere],"nowrap",bgcolor);
                if(mytable.a_capt[j].vis) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
                if(mytable.a_capt[j].haspro) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
                if(mytable.a_capt[j].vispct) a_[n_c++]=IBuildCell('&nbsp',mytable.o_css[pwhere],null,bgcolor);
            }
        }
        a_[n_c++]='<\/tr>';
        return a_.join('');
    }

    function ICalcColSpan(first, last, checkVisualize, colspan)
    {
        var start = 0, end = mytable.n_cols;
        var col = 0;
         if((first<0) || (last<0)) return 1;
        if(typeof(first)!="undefined") {
            start = first;
            if((typeof(last)=="undefined")||(last+1>end)) end = mytable.n_cols;
            else end = last+1;
        } else
        if(mytable.freeze_column) {
            if(mytable.side=='r') start = mytable.freeze_column;
            else end = mytable.freeze_column;
        }

        var aCaptCurCol, j=start; 
        while((j<end)&&(j<mytable.n_cols)) {
            aCaptCurCol = mytable.a_capt[j];
            if((!aCaptCurCol.b_hide)&&(!aCaptCurCol.exp_hide || !mytable.AccordionIsOn)) {
                col++;
                if (checkVisualize) {
                    if (col == colspan) break;
                    if (aCaptCurCol.visOrig) {
                        col++;
                        if ((j >= end) || (col == colspan)) break;
                    }
                    if (aCaptCurCol.vispct) {
                        col++;
                        if ((j >= end) || (col == colspan)) break;
                    }
                    if (aCaptCurCol.haspro) {
                        col++;
                        if ((j >= end) || (col == colspan)) break;
                    }
                } else {
                    if(aCaptCurCol.vis) col++;
                    if(aCaptCurCol.vispct) col++;
                    if(aCaptCurCol.haspro) col++;
                }
            }
            j++;
        }
        return(col);
    }

function IMakeVis(dval,dclass,rval,rows,capt,cdn,show,s_add,stnode,classStr)
{
    var dv,viscolor;
    var visposcolor = 'blue';
    var visnegcolor = 'red';
    var scale = 1;
    var diff;
    var per;
    if(capt.viscolor) {
        visnegcolor=capt.viscolor[0];
        visposcolor=capt.viscolor[1];
    }
    
        if((typeof(rval)=="undefined")||(rval==missingVal)) {
        line = '';
        if(capt.vis) line +='<td>&nbsp;<\/td>';
        if(capt.vispct) line += '<td>&nbsp;<\/td>';
        if(capt.haspro) line += '<td>&nbsp;<\/td>';
        return line;
    }
    var minper = capt.minval;
    if(minper>0) minper=0;
    var maxper = capt.maxval;
    if(maxper<0) maxper = 0;
    diff = capt.abstotal;
    per= Math.round(rval/diff*10000)/100;
    maxper = Math.round(maxper/diff*10000)/100;
    minper = Math.round(minper/diff*10000)/100;
        var sc = Math.abs(maxper-minper);
    scale = Math.round(100/sc);
    if((scale<1)||(sc==0)) scale = 1;
    var minwidth = Math.round(Math.abs(minper)*scale)+4;
    var maxwidth = Math.round(maxper*scale)+4;
    var line  = '';

    if(rval<0) viscolor = visnegcolor;
    else viscolor = visposcolor;
    if(stnode!=null) {
        if((rval>0) && (stnode.viscolor!=null)) viscolor = stnode.viscolor;
        if((rval<0) && (stnode.viscolorneg!=null)) viscolor = stnode.viscolorneg;
    }

    if(show) {
        //dv = addCdnCommas(per,cdn)+'%';
        dv = FocusFormat(per,"(D3.2)",cdn,'$')+'%';
    } else {
        dv = "&nbsp;";
        per = 0;
    }
    if(capt.vispct) line += '<td class="'+dclass+'" style="color:'+viscolor+';" width="50" ' + s_add + ' align="right">'+dv+'<\/td>';
    if(capt.haspro) line += '<td class="'+dclass+'" style="color:'+viscolor+';" width="50" ' + s_add + ' align="right">'+dv+'<\/td>';
    if(capt.vis) {
        line += '<td '+classStr+' width="'+(minwidth+maxwidth+4)+'"' + s_add + '><table width="'+(minwidth+maxwidth)+'" cellspacing=0 cellpadding=0 border=0><tr>';
        line += '<td align="right" style="width:'+minwidth+'px;">';
        if(per<0) line += '<table border=0 cellspacing=0 cellpadding=0><tr><td style="width:'+Math.round(Math.abs(per)*scale)+'px;height:12px;background-color:'+viscolor+';"><\/td><\/tr><\/table>';
        if(show) line += '<\/td><td style="width:1px;height:15px;background-color:black;"><\/td>';
        else     line += '<\/td><td style="width:1px;height:15px;"><\/td>';
        line += '<td style="width:'+maxwidth+'px;">';
        if(per>0) line += '<table border=0 cellspacing=0 cellpadding=0><tr><td style="width:'+Math.round(per*scale)+'px;height:12px;background-color:'+viscolor+';"><\/td><\/tr><\/table>';
        line += '<\/td><\/tr><\/table><\/td>';
    }
    line += '';
    return(line);


}

    function ShowFilterMenu(Mytable,win)
    {
        mytable = Mytable;
        if(typeof(mytable.tabChildren) == "undefined") mytable.tabChildren = new Object();
        mytable.tabChildren["filter"] = {'window':win};
        mytable.tabCurrent = "filter";
    
        if(!mytable.fullDivFilter) mytable.fullDivFilter = getFreeTabDiv();
        mytable.fullDivFilter.style.zIndex=10;
        mytable.fullDivFilter.style.display = "block";
        mytable.fullDivFilter.style.backgroundColor="white";
        mytable.fullDivFilter.innerHTML = '';
        topdiv.innerHTML = "";
        botdiv.innerHTML = "";
        displayFilterWindow(mytable.fullDivFilter,0);

        tabdiv.innerHTML = IBuildTab();
        //ShowChartControls(pn);
        
    }

    function BuildFilterTab(win,isglobal,usediv)
    {
        //var isglobal = 0;
        if(!isglobal)botdiv.innerHTML = BuildFilterTab2(win,isglobal);
        else usediv.innerHTML = BuildFilterTab2(win,isglobal);
        build_filtmenu(mytable,isglobal);
    }


    function BuildFilterTab2(win,isglobal)
    {
        //var isglobal = 0;
        var tnc;
        if(isglobal) tnc='0';
        else tnc = mytable.id;

        if(isglobal) {
            if(global_filter_andor) 
                filter_dis = ibiMsgStr['ors'];
            else 
                filter_dis = ibiMsgStr['ans'];
        } else {
            if(mytable.filter_andor) 
                filter_dis = ibiMsgStr['ors'];
            else 
                filter_dis = ibiMsgStr['ans'];
        }
        var foid = "ANDOR_FILTERF"+tnc;
        if(isglobal) foid = "ANDOR_FILTERG";
        var filter_op = '<span id="'+foid+'">' + filter_dis+'<\/span>';
        
        var op_frm = '<form action="nop();"><table id="FiltTableF'+win+'" border=0 cellspacing=1 cellpadding=1>';
        
        if(isglobal) addop = 'globalop';
        else var addop = 'filtopF'+mytable.id;
        var txtMeasurement = measureText(ibiMsgStr['add'],"arFilterButton");
        var awidth = txtMeasurement.width;
        if(awidth<120) awidth=120;
        var close_form_html = '<tr>';
                close_form_html+= '<td align="LEFT" style="white-space:nowrap" width="110" style="cursor:pointer" onclick="ibiIosGrid.cancelDrags();ibiFilter.setFilterAndOr('+tnc+',0,'+isglobal+')"><div class="arFilterButton" style="white-space:nowrap;">';
                close_form_html+= filter_op+'<\/div><\/td>';
                close_form_html+= '<td style="white-space:nowrap" width="'+awidth+'"><div id="'+addop+'" class="arFilterButton" style="white-space:nowrap; width:'+awidth+'px;overflow:hidden;"><\/div><\/td>';
                close_form_html+= '<td width="*">&nbsp;<\/td>';
            if(b_smallScreen) {
                close_form_html += '<\/tr><tr>';
            }
                close_form_html+= '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiIosGrid.cancelDrags();ibiFilter.executeFilt('+tnc+',1,'+isglobal+')"><div width="100%" class="arFilterButton">';
                close_form_html+= ibiMsgStr['flt']+'<\/div><\/td>';
                close_form_html+= '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiIosGrid.cancelDrags();ibiFilter.executeFilt('+tnc+',2,'+isglobal+')"><div width="100%" class="arFilterButton">';
                close_form_html+= ibiMsgStr['hlg']+'<\/div><\/td>';
                close_form_html+= '<td width="90" style="white-space:nowrap;cursor:pointer" onclick="ibiIosGrid.cancelDrags();ibiFilter.clearFilter(-1,'+tnc+','+ isglobal +')"><div width="100%" class="arFilterButton">';
                close_form_html+= ibiMsgStr['cla']+'<\/div><\/td>';
                close_form_html+= '<\/tr>';
                close_form_html+= '<\/FORM><\/table>';
        return (op_frm+close_form_html);
    }

    function displayFilterWindow(useDiv,isglobal)
    {
        var i, j, rc, win, a_cols, a_col_filter;
        var filter_dis,addop;
        var update = false;
        //var isglobal = 0;
        var obj;
        var ttform = (isglobal) ? 'TTFORMG' : 'TTFORMF' + mytable.id;
        var tnc;
        if(isglobal) tnc='$';
        else tnc = mytable.id;
        var andorval,vs;

        if(isglobal) {
            if(global_filter_andor) 
                filter_dis = ibiMsgStr['ors'];
            else 
                filter_dis = ibiMsgStr['ans'];
        } else {
            if(mytable.filter_andor) 
                filter_dis = ibiMsgStr['ors'];
            else 
                filter_dis = ibiMsgStr['ans'];
        }


        if(isglobal) {
            a_col_filter = global_a_col_filter;
            a_cols = global_a_cols;
            win = ibiFilter.gfwin;
        } else {
            a_col_filter = mytable.a_col_filter;
            a_cols = mytable.a_cntl.a_cols;
            win = mytable.win;
        }

        var filter_op = '<span id="ANDOR_FILTERF'+win+'">' + filter_dis+'<\/span>';
        var op_frm = '<form action="nop();"><table id="FiltTableF'+win+'" border=0 cellspacing=1 cellpadding=1><tr>';
                op_frm+= '<td style="height:8px;width:20px;"><\/td><td width="*"><\/td>';
                op_frm+= '<td width=120><\/td>';
                op_frm+= '<td width=200><\/td>';
                op_frm+= '<\/tr>';
        //addop = 'filtopF'+tnc;
        var close_form_html = '<\/table><\/td><\/tr>';
                close_form_html+= '<\/FORM><\/table>';
 
        var UnValues = [];
        var attache_html = '';
        for (j = 0; j < a_col_filter.length; j++){
            txtMeasurement = measureText(a_filt_name[a_col_filter[j][1]],"arFilterItem");
            awidth = txtMeasurement.width;
            if(awidth<120) awidth=120;
            attache_html += '<tr class="arFilterItem"><td valign="middle" style="white-space:nowrap" width="17">';
            attache_html += '<div style="text-align:center;cursor:pointer;" ';
            attache_html += 'title="'+ibiMsgStr['del']+'" onclick="ibiIosGrid.cancelDrags();ibiFilter.clearFilter('+j+','+tnc+','+ isglobal + ')">';
            attache_html += ibiSkin.delicon +'<\/div>';
            attache_html += '<\/td><td style="white-space:nowrap" valign="middle">';
            attache_html += '<span title="'+a_cols[a_col_filter[j][0]].dis+'">';
            attache_html += a_cols[a_col_filter[j][0]].name+'<\/span> ';
            attache_html += '<\/td><td style="white-space:nowrap" >';
            attache_html += '<table border=0 width="'+(awidth+16)+'" cellspacing=2 cellpadding=0><tr><td align="right" width="'+(awidth)+'" style="white-space;nowrap">';
            attache_html += '<Div class="arFilterItemDrowpDown" style="white-space:nowrap;text-align:left;width:'+awidth+'px;">'+a_filt_name[a_col_filter[j][1]]+'<\/Div><\/td>';
            attache_html += '<td style="white-space:nowrap" width="16"><div id="ftF'+win+'_'+j+'"><\/div><\/td>';
            attache_html += '<\/tr><\/table><\/td>';
            if(b_smallScreen) {
                attache_html += '<\/tr><tr><td colspan="2"><\/td>';
            }

            if(a_col_filter[j][1] == 8) {
                attache_html += '<td colspan=2><table border=0 cellspacing=0 cellpadding=0><tr>';
                attache_html +='<td valign="MIDDLE" rowspan=2><div style="width:8px">[<\/div><\/td>';
            }
            if(a_col_filter[j][2]){
                if(a_col_filter[j][3].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
                else {
                    vs = a_col_filter[j][5][0];
                    if(a_col_filter[j][3].length>1) vs = '*'+vs;
                }
            
                attache_html += '<td><span id="fboxiF'+j+'"><table border=0 cellspacing=2 cellpadding=0><tr>';
                if(a_col_filter[j][1] != 8) attache_html += '<td><div style="width:8px"><\/div><\/td>';
                attache_html += '<td style="white-space:nowrap" ><div class="arFilterItemDrowpDown" style="width:170px;" id="ftpvF'+win+'_1_'+j+'">'+vs+'<\/div>';
                attache_html += '<\/td><td style="white-space:nowrap" width=22><Div id="ftpF'+win+'_1_'+j+'"><\/Div><\/td>';
                attache_html += '<\/tr><\/table><\/span><\/td>';
            }else{
                if(a_col_filter[j][3].length==0) vs = '';
                else vs = a_col_filter[j][3][0];
                attache_html += '<td><span id="fboxF'+j+'"><table cellspacing=0 cellpadding=0 border=0><tr>';
                attache_html += '<td><div style="width:10px"><\/div><\/td>';
                if(isglobal)
                    attache_html += '<td><input type="text"  name="'+j+'filtPatt1" onchange="global_a_col_filter['+j+'][3][0] = this.value" value="'+vs+'"><\/td>';
                else 
                    attache_html += '<td><input type="text"  name="'+j+'filtPatt1" onchange="MyTable['+tnc+'].a_col_filter['+j+'][3][0] = this.value" value="'+vs+'"><\/td>';
                attache_html += '<\/tr><\/table><\/span><\/td>';
            }
 
            if(a_col_filter[j][1] == 8){
                attache_html += '<\/tr><tr>';
                if(a_col_filter[j][4].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
                else {
                    vs = a_col_filter[j][6][0];
                    if(a_col_filter[j][4].length>1) vs = '*'+vs;
                }
                attache_html += '<td><span id="fbox2iF'+j+'"><table border=0 cellspacing=2 cellpadding=0><tr>';
                attache_html += '<td style="white-space:nowrap" ><div class="arFilterItemDrowpDown" style="width:170px;" id="ftpvF'+win+'_2_'+j+'">'+vs+'<\/div>';
                attache_html += '<\/td><td style="white-space:nowrap" Width=22><Div id="ftpF'+win+'_2_'+j+'"><\/Div><\/td>';
                attache_html += '<\/tr><\/table><\/span><\/td>';
            } 
            if(a_col_filter[j][1] == 8) 
                attache_html += '<\/tr><\/Table><\/td>';
            attache_html += '<\/tr>';
        }

        if(!isglobal)BuildFilterTab(win,isglobal);

        useDiv.innerHTML = op_frm+attache_html+close_form_html;
            if(a_col_filter.length) {
            for (i = 0; i < a_col_filter.length; i++) {
                build_filttype(mytable,i,win,isglobal,a_col_filter);
                if(a_col_filter[i][2]) {
                    rc=build_filtvals(mytable,i,win,isglobal,a_col_filter,1);
                    if(rc==-1) {
                        obj = d.getElementById('fboxiF'+i);
                        if(a_col_filter[i][3].length==0) vs = '';
                        else vs = a_col_filter[i][3][0];
                        if(obj) obj.innerHTML = '<table cellspacing=0 cellpadding=0 border=0><tr>'+
                            '<td><div style="width:10px"><\/div><\/td>'+
                            '<td><input type="text"  name="'+i+'filtPatt1F" onchange="MyTable['+tnc+'].a_col_filter['+i+'][3][0] = this.value" value="'+vs+'"><\/td>'+
                            '<\/tr><\/table>';
                    }
                }
                if(a_col_filter[i][1] == 8)
                    if(a_col_filter[i][2]) {
                        rc=build_filtvals(mytable,i,win,isglobal,a_col_filter,2);
                        if(rc==-1) {
                            obj = d.getElementById('fbox2iF'+i);
                            if(a_col_filter[i][3].length==0) vs = '';
                            else vs = a_col_filter[i][3][0];
                            if(obj) obj.innerHTML = '<table cellspacing=0 cellpadding=0 border=0><tr>'+
                                '<td><div style="width:10px"><\/div><\/td>'+
                                '<td><input type="text" name="'+i+'filtPatt2F" onchange="MyTable['+tnc+'].a_col_filter['+i+'][4][0] = this.value" value="'+vs+'"><\/td>'+
                                '<\/tr><\/table>';
                        }
                    }
            }
        }

    }

    function build_filttype(mytable,id,win,isglobal,acf){
        var n_id = null,fid;
        var MI_FT = [];
        var tn = (isglobal) ? 0 : mytable.a_cntl.table_number;
        MI_FT[0] = [ibiSkin.dropicon,null, null];
        for(var i=0;i<a_filt_types.length;i++)
            MI_FT[0][3+i] = [[a_filt_types[i][0]],null,{'ocv':'addtypetofilter','oc' :'ibiFilter.add_type_to_filter(null,'+acf[id][0]+','+a_filt_types[i][1]+','+tn+','+acf[id][2]+','+false+','+isglobal+')'}];
        fid = 'ftF'+win+'_'+id;
        var toolbr = d.getElementById(fid);
        if(toolbr)
            pwn[win].ftm[id] = ibiMenu.Menu(MI_FT,MP_FT,toolbr,MyTable[tn],null,n_id,fid);
    }

    function build_filtmenu(mytable,isglobal){
        var i, id, a_cols;
        var n_id = null;
        var tn = (isglobal) ? 0 : mytable.a_cntl.table_number;
        var MI_FT = [],win,pp,pp2;
 
        MI_FT[0] = [ibiMsgStr['add'],null, null];
        if(isglobal) {
            id = 'globalop';
            a_cols = global_a_cols;
            win =  ibiFilter.gfwin;
        } else {
            a_cols = mytable.a_cntl.a_cols;
            id = 'filtopF' + mytable.id;
            win = mytable.win;
        }
 
        var _i = 0;
        for(i=0;i<a_cols.length;i++){
            if(!isglobal)
                if(!mytable.a_cntl.menuops.menunoprint && mytable.a_capt[i].noprint) continue;
        
            pp2 =a_cols[i].name;
            pp = [pp2,0,a_cols[i].dis]; 
            MI_FT[0][(3 + _i*1)] = [pp,null,{'ocv':'menufilter','oc' : 'MenuFilter('+tn+','+i+','+arConstants.FILTER_IN+','+isglobal+')'}];
            _i++;
        }
        if(pwn[win].fadd!=null) n_id = pwn[win].fadd;
        var toolbr = d.getElementById(id);
        if(toolbr) 
            pwn[win].fadd = ibiMenu.Menu(MI_FT,MP_ADD,toolbr,MyTable[tn],null,n_id,id);
    }    
 
    function build_filtvals(mytable,id,win,isglobal,acf,part,row,redraw,item){
        var n_id = null,vs,ty;
        var toolbr, toolbrv, mi_ftv, UnValues;
        var multiequal=false;
        var ck=0,line,fid;
        var pp=[];
        var tn = (isglobal) ? 0 : mytable.a_cntl.table_number;

        //mytable.acf[id] = acf;
        var col = acf[id][0];
        if((acf[id][1]==9) || (acf[id][1]==13)) multiequal=true;
        if(isglobal) {
            if(typeof(global_filterValues[col])=='undefined')
                global_filterValues[col] = MyTable[0].getAllUniqValues(global_a_cols[acf[id][0]].name,acf[id][2+part],true);
            UnValues = global_filterValues[col];
            mi_ftv = global_MI_FTV;
        } else {
            if(typeof(mytable.filterValues[col])=='undefined')
                mytable.filterValues[col] = mytable.getUniqValues(acf[id][0],acf[id][2+part],null,true);
            UnValues = mytable.filterValues[col];
            mi_ftv = mytable.MI_FTV;
        }

        if(!redraw) {
            mi_ftv[id]=[];
            mi_ftv[id][part-1]=[];
            mi_ftv[id][part-1][0] = [{'name':ibiSkin.dropicon,'dis':null,'showback':true},null, null];

            var ul = UnValues[0].length;
            for(var i=0;i<ul;i++) {
                ty = typeof(UnValues[1][i]);
                pp=[];
                if((ty!='string')||(UnValues[1][i].charAt(0)!='<'))
                    pp[0] =UnValues[1][i];
                else
                    pp[0] =UnValues[0][i];
                pp[1]=(UnValues[2][i]?1:0);
                mi_ftv[id][part-1][0][3+i]=[pp,null,{'ms':multiequal,'ocv':'addvaltofilter','oc' : 'ibiFilter.add_val_to_filter('+id+','+acf[id][1]+','+tn+','+part+','+i+','+isglobal+')'}];
            }
            fid = 'ftpF'+win+'_'+part+'_'+id;
            toolbr = d.getElementById(fid);
            if(toolbr) 
                if(mi_ftv[id])
                    pwn[win].ftp[part-1][id] = ibiMenu.Menu(mi_ftv[id][part-1],MP_FTV,toolbr,MyTable[tn],null,n_id,fid);
        
        } 
        
        fid = 'ftpvF'+win+'_'+part+'_'+id;
        toolbrv = d.getElementById(fid);
        if(acf[id][part+2].length==0) vs = '&nbsp;&nbsp;&nbsp;&nbsp;';
        else {
            vs = acf[id][part+4][0];
            if(acf[id][part+2].length>1) vs = '*'+vs;
        }
        if(toolbrv) toolbrv.innerHTML = vs;
        return 0;
    }


function drawPivotTableMobile(a,did,cntl,p_num,heading,win,ibs,pvcol,nrcols,btypeArray,y_cols,linked,subTable,hideBar,capt)
{
    // pvcol = number of columns in across
    // nrcols = number
    var dobj,pn,yy,classStr;
    if(typeof(did)=='object') dobj=did;
    else dobj=d.getElementById(did);
    var tnc =  cntl.table_number;
    var i,ii,j,jj,x,y,id;
    var VertTree = [];
    var HorzTree = [];
    var ColPos=[];
    var line = '';
    var s_ = [],s,str,ss;
    var nx=1, ny=1,nxx,nyy;    
    var PAr = [];
    var npv = nrcols-pvcol;
    var xx,xdiv=[],ydiv=[];
    var vny,vnx;
    var show;
    var mytable = getMyTable(tnc);
    MyTable[p_num].tabChildren[MyTable[p_num].tabCurrent].pivmytable = mytable;
    var si;
    var pid = 'cpop'+win;
    if(subTable>-1) pid += '_F'+subTable;
    var sid = 'SUM_'+win;
    if(subTable>-1) sid += '_F'+subTable;

    if(mytable.useMdiv==null)
        dobj.style.overflow = 'auto';

    var nt_num;
    var t_num = MyTable.length;

    nt_num = MyTable.length;
    var useDiv = dobj;

    HorzTree = mytable.HorzTree;
    VertTree = mytable.VertTree;

    nx=nx+npv;
    if(pvcol>0) nx=nx+1;
    if(npv>0) ny++;
    if(pvcol>0) ny+=pvcol*2;
    else ny++;
    if(pvcol>0) yy=pvcol*2;
    else yy=1;
    vnx = nx;
    //if(nx>20) vnx=20+npv;
    vny = ny;
    //if(ny>20) vny=20+pvcol*2;
    PAr = mytable.PivotArray;


    var dwidth = parseInt(useDiv.style.width,10);
    var dheight = parseInt(useDiv.style.height,10);
    var styStr = ' style="width:'+dwidth+'px;height:'+dheight+'px;" ';
    s_[s_.length] = '<table '+styStr+' cellpadding=0 cellspacing=0 border=0 bgcolor="white">';

    s_[s_.length] = '<tr><td colspan="3"><table id="pivTitleBar_' + tnc + '" width="100%" cellpadding="0" cellspacing="0" border="1"><tr><td>';
    s_[s_.length] = heading;
    s_[s_.length] = '</td></tr></table></td></tr>';

    s_[s_.length] = '<tr>';
    s_[s_.length] = '<td valign="bottom" align="right"><div style="overflow:hidden;position:relative;" id="pivFbyHeading_'+tnc+'"><\/div><\/td>';
    s_[s_.length] = '<td valign="bottom" style="width:4000px" width="4000"><div id="pivFoacross_'+tnc+'" style="overflow:hidden;position:relative;"><div style="width:4000px;position:absolute;top:0px;left:0ox;" id="pivFacross_'+tnc+'"><\/div><\/div><\/td>';
    s_[s_.length] = '<td valign="bottom"><div style="overflow:hidden;position:relative;" id="pivFacrossTotal_'+tnc+'"><\/div><\/td>';
    s_[s_.length] = '<\/tr>';
    s_[s_.length] = '<tr>';
    s_[s_.length] = '<td valign="top"><div id="pivFoby_'+tnc+'" style="overflow:hidden;position:relative;"><div style=";position:absolute;;top:0;left:0;" id="pivFby_'+tnc+'"><\/div><\/div><\/td>';
    s_[s_.length] = '<td valign="top" style="width:4000px" width="4000"><div id="pivFobody_'+tnc+'" style="overflow:hidden;position:relative;"><div style="width:4000px;position:absolute;top:0;left:0;" id="pivFbody_'+tnc+'"><\/div><\/div><\/td>';
    s_[s_.length] = '<td valign="top"><div id="pivFoTotals1_'+tnc+'" style="overflow:hidden;position:relative;"><div style="position:absolute;top:0px;left:0px;" id="pivFTotals1_'+tnc+'"><\/div><\/div><\/td>';
    s_[s_.length] = '<\/tr>';
    s_[s_.length] = '<tr>';
    s_[s_.length] = '<td valign="top" align="right"><div style="overflow:hidden;position:relative;" id="pivFbyTotal_'+tnc+'"><\/div><\/td>';
    s_[s_.length] = '<td valign="top" style="width:4000px" width="4000"><div id="pivFoTotals2_'+tnc+'" style="overflow:hidden;position:relative;"><div style="width:4000px;position:absolute;top:0px;left:0px;" id="pivFTotals2_'+tnc+'"><\/div><\/div><\/td>';
    s_[s_.length] = '<td valign="top"><div style="overflow:hidden;position:relative;" id="pivFTotals3_'+tnc+'"><\/div><\/td>';
    s_[s_.length] = '<\/tr>';
    s_[s_.length] = '<\/table>';

    line =s_.join('');
    dobj.innerHTML = line;

    var objAcross = document.getElementById("pivFacross_"+tnc);
    var objAcrosso = document.getElementById("pivFoacross_"+tnc);
    var objBy = document.getElementById("pivFby_"+tnc);
    var objByo = document.getElementById("pivFoby_"+tnc);
    var objBody = document.getElementById("pivFbody_"+tnc);
    var objBodyo = document.getElementById("pivFobody_"+tnc);
    var objTotals1 = document.getElementById("pivFTotals1_"+tnc);
    var objTotals2 = document.getElementById("pivFTotals2_"+tnc);
    var objTotals1o = document.getElementById("pivFoTotals1_"+tnc);
    var objTotals2o = document.getElementById("pivFoTotals2_"+tnc);
    var objByTotal = document.getElementById("pivFbyTotal_"+tnc);
    var objByHead = document.getElementById("pivFbyHeading_"+tnc);
    var objGrandTotal = document.getElementById("pivFTotals3_"+tnc);
    var objAcrossHead = document.getElementById("pivFacrossTotal_"+tnc);

    var he = HorzTree.length+npv;
    var ve = VertTree.length+yy;
    var xoff = 0;
    var yoff = 0;
    if(npv==he) xoff =1;
    if(yy==ve) yoff =1;

    var styling = [], parentTable = MyTable[mytable.parent_table];
    for (i = 0; i < capt.length; ++i) {
        styling[i] = parentTable.getColumnStyle(capt[i].orgCol,0,1,parentTable.a_cont[0],'',capt[i].orgCol);
    }

    if (pvcol > 0) { objAcross.innerHTML = getPivotStr(PAr,ibs,tnc,npv,he,0,yy,styling); }
    if (pvcol > 0) { objAcrossHead.innerHTML = getPivotStr(PAr,ibs,tnc,he,he+1,yy-1,yy,styling); }
    if (npv > 0) { objByTotal.innerHTML = getPivotStr(PAr,ibs,tnc,npv-1,npv,ve,ve+1,styling); }
    if (npv > 0) { objBy.innerHTML = getPivotStr(PAr,ibs,tnc,0,npv,yy,ve,styling); }
    objBody.innerHTML = getPivotStr(PAr,ibs,tnc,npv,he+xoff,yy,ve+yoff,styling);
    if (npv > 0) { objByHead.innerHTML = getPivotStr(PAr,ibs,tnc,0,npv,yy-1,yy,styling); }
    if (npv > 0) { objTotals2.innerHTML = getPivotStr(PAr,ibs,tnc,npv,he+xoff,ve,ve+1,styling); }
    if (pvcol >0) { objTotals1.innerHTML = getPivotStr(PAr,ibs,tnc,he,he+1,yy,ve+yoff,styling); }
    if ((npv > 0) && (pvcol > 0)) { objGrandTotal.innerHTML = getPivotStr(PAr,ibs,tnc,he,he+1,ve,ve+1,styling); }

    mytable.pivotDivs = new Object();
    mytable.pivotDivs.body = objBody;
    mytable.pivotDivs.bys = objBy;
    mytable.pivotDivs.across = objAcross;
    mytable.pivotDivs.byTotals = objTotals1;
    mytable.pivotDivs.acrossTotals = objTotals2;

    var tbobj1 = document.getElementById("pvt_"+tnc+"_0_"+(yy-1));
    var tbobj2 = document.getElementById("pvt_"+tnc+"_0_"+yy);
    if(tbobj1 && tbobj2) {
        var w;
        var ll = tbobj1.children[0].rows[0].cells.length;
        var r1 = tbobj1.children[0].rows[0];
        var r2 = tbobj2.children[0].rows[0];

        for (i = 0; i < ll; i++) {
            w = r1.cells[i].offsetWidth;
            if(w < r2.cells[i].offsetWidth) 
                w = r2.cells[i].offsetWidth;
            r1.cells[i].style.width = w+'px';
            r2.cells[i].style.width = w+'px';
        }
    }

    window.setTimeout(function(){
        var i, w, ll, r1, r2, r3;
        var tbobj1 = document.getElementById("pvt_"+tnc+"_"+npv+"_0");
        var tbobj2 = document.getElementById("pvt_"+tnc+"_"+npv+"_"+yy);
        var tbobj3 = document.getElementById("pvt_"+tnc+"_"+npv+"_"+ve);
        if(tbobj2) {
            ll = tbobj2.children[0].rows[0].cells.length;
            if (tbobj1) { r1 = tbobj1.children[0].rows[0]; }
            r2 = tbobj2.children[0].rows[0];
            if (tbobj3) { r3 = tbobj3.children[0].rows[0]; }

            for (i = 0; i < ll; i++) {
                w = (tbobj1) ? r1.cells[i].offsetWidth : 0;
                if(w < r2.cells[i].offsetWidth) 
                    w = r2.cells[i].offsetWidth;
                if(tbobj3)
                    if(w < r3.cells[i].offsetWidth) 
                        w = r3.cells[i].offsetWidth;
                if(tbobj1)r1.cells[i].style.width = w+'px';
                if(tbobj2)r2.cells[i].style.width = w+'px';
                if(tbobj3)r3.cells[i].style.width = w+'px';
            }
        }

        tbobj1 = document.getElementById("pvt_"+tnc+"_"+he+"_"+(yy-1));
        tbobj2 = document.getElementById("pvt_"+tnc+"_"+he+"_"+yy);
        tbobj3 = document.getElementById("pvt_"+tnc+"_"+he+"_"+ve);
        if(tbobj2) {
            ll = tbobj2.children[0].rows[0].cells.length;
            if (tbobj1) { r1 = tbobj1.children[0].rows[0]; }
            r2 = tbobj2.children[0].rows[0];
            if (tbobj3) { r3 = tbobj3.children[0].rows[0]; }

            for (i = 0; i < ll; i++) {
                w = (tbobj1) ? r1.cells[i].offsetWidth : 0;
                if(w < r2.cells[i].offsetWidth) 
                    w = r2.cells[i].offsetWidth;
                if(tbobj3)
                    if(w < r3.cells[i].offsetWidth) 
                        w = r3.cells[i].offsetWidth;
                if(tbobj1)r1.cells[i].style.width = w+'px';
                if(tbobj2)r2.cells[i].style.width = w+'px';
                if(tbobj3)r3.cells[i].style.width = w+'px';
            }
        }

        var b1,b2,b3,bh;
        for (i = yy; i < ve+yoff; i++) {
            b1 = document.getElementById("pv_"+tnc+"_"+i+"_"+0);
            b2 = document.getElementById("pv_"+tnc+"_"+i+"_"+npv);
            b3 = document.getElementById("pv_"+tnc+"_"+i+"_"+he);
            if(b1) bh = b1.offsetHeight;
            else bh=0;
            if(b2)if(bh<b2.offsetHeight) bh = b2.offsetHeight;
            if(b3)if(bh<b3.offsetHeight) bh = b3.offsetHeight;
            if(b1)b1.style.height = bh+'px';
            if(b2)b2.style.height = bh+'px';
            if(b3)b3.style.height = bh+'px';
        }
        b1 = document.getElementById("pv_"+tnc+"_"+ve+"_"+(npv-1));
        b2 = document.getElementById("pv_"+tnc+"_"+ve+"_"+npv);
        b3 = document.getElementById("pv_"+tnc+"_"+ve+"_"+he);
        bh=0;
        if(b1) if(bh<b1.offsetHeight) bh=b1.offsetHeight;
        if(b2) if(bh<b2.offsetHeight) bh=b2.offsetHeight;
        if(b3) if(bh<b3.offsetHeight) bh=b3.offsetHeight;
        if(b1)b1.style.height = bh+'px';
        if(b2)b2.style.height = bh+'px';
        if(b3)b3.style.height = bh+'px';

        window.setTimeout(function(){
            var tb1=null;
            var tb2=null;
            var tb3=null;
            var tb4=null;
            var tb5=null;
            var tb6=null;
            var tb7=null;
            var tb8=null;
            var tb9=null;

            var col1Width = 0;
            var col2Width = 0;
            var col3Width = 0;
    
            var row1Height = 0;
            var row2Height = 0;
            var row3Height = 0;

            var pivotTitleBar = document.getElementById('pivTitleBar_' + tnc);
            var pivotTitleBarHeight = 0;

            if(npv>0) tb1 = document.getElementById("pvt_"+tnc+"_"+0+"_"+(yy-1));
            if(pvcol>0) tb2 = document.getElementById("pvt_"+tnc+"_"+npv+"_"+0);
            if(pvcol>0) tb3 = document.getElementById("pvt_"+tnc+"_"+he+"_"+(yy-1));

            if(npv>0) tb4 = document.getElementById("pvt_"+tnc+"_"+0+"_"+yy);
            tb5 = document.getElementById("pvt_"+tnc+"_"+npv+"_"+yy);
            if(pvcol>0) tb6 = document.getElementById("pvt_"+tnc+"_"+he+"_"+yy);

            if(npv>0) tb7 = document.getElementById("pvt_"+tnc+"_"+(npv-1)+"_"+ve);
            if(npv>0) tb8 = document.getElementById("pvt_"+tnc+"_"+npv+"_"+ve);
            if((npv>0) && (pvcol>0))tb9 = document.getElementById("pvt_"+tnc+"_"+he+"_"+ve);

            if(tb1) col1Width = tb1.offsetWidth;
            if(tb4) if(col1Width<tb4.offsetWidth) col1Width = tb4.offsetWidth;
            if(tb7) if(col1Width<tb7.offsetWidth) col1Width = tb7.offsetWidth;

            if(tb3) col3Width = tb3.offsetWidth;
            if(tb6) if(col3Width<tb6.offsetWidth) col3Width = tb6.offsetWidth;
            if(tb9) if(col3Width<tb9.offsetWidth) col3Width = tb9.offsetWidth;

            col2Width = useDiv.offsetWidth - (col1Width+col3Width);
            if(col2Width>tb5.offsetWidth) {
                col2Width = tb5.offsetWidth;
                col3Width = useDiv.offsetWidth - (col1Width+col2Width);
            }

            if(tb1) row1Height = tb1.offsetHeight;
            if(tb2) if(row1Height<tb2.offsetHeight) row1Height = tb2.offsetHeight;
            if(tb3) if(row1Height<tb3.offsetHeight) row1Height = tb3.offsetHeight;

            if(tb7) row3Height = tb7.offsetHeight;
            if(tb8) if(row3Height<tb8.offsetHeight) row3Height = tb8.offsetHeight;
            if(tb9) if(row3Height<tb9.offsetHeight) row3Height = tb9.offsetHeight;

            if(pivotTitleBar = pivotTitleBar.querySelector('div')) {
                pivotTitleBarHeight = pivotTitleBar.offsetHeight;
            }

            row2Height = useDiv.offsetHeight - ( row1Height + row3Height + pivotTitleBarHeight);
            if(row2Height>tb5.offsetHeight) {
                row2Height = tb5.offsetHeight;
                row3Height = useDiv.offsetHeight - ( row1Height + row2Height);
            }

            objBodyo.style.height = row2Height+'px';
            objBodyo.style.width = col2Width+'px';
            objAcrosso.style.height = row1Height+'px';
            objAcrosso.style.width = col2Width+'px';
            objByo.style.height = row2Height+'px';
            objByo.style.width = col1Width+'px';
            objTotals1o.style.height = row2Height+'px';
            objTotals1o.style.width = col3Width+'px';
            objTotals2o.style.height = row3Height+'px';
            objTotals2o.style.width = col2Width+'px';
        },0);
    },0);
    
}


function getPivotStr(PAr,ibs,tnc,x1,x2,y1,y2,styling)
{
    var s_ = [];
    var str;
    var classStr;
    var s;

    s_[s_.length] = '<table id="pvt_'+tnc+'_'+x1+'_'+y1+'" cellpadding='+mytable.n_padding+' cellspacing='+mytable.n_spacing+mytable.o_css.main+' border='+mytable.n_border+'>';
    for(var y=y1;y<y2;y++) {
        s_[s_.length] = '<tr>';
        for(var x=x1;x<x2;x++) {
            classStr='';
            s=PAr[y][x];
            if (s==null) {
                if (y > 0) { classStr = styling[styling.length - 1]; }
                str='&nbsp;';
            } else 
            if(typeof(s)=='object') {
                if(typeof(s[DACLS])=='number') classStr =' class="IBIS'+tnc+'_'+s[DACLS]+'" '+styling[styling.length - 1];
                else classStr= ' '+s[DACLS];
                str=ibs[s[DASTR]];
                if(typeof(s[DATYP])!='undefined')
                    if(s[DATYP]==1) str=s[DASTR];
            } else str=s;
            s_[s_.length]='<td'+classStr+' id="pv_'+tnc+'_'+y+'_'+x+'">'+str+'<\/td>';
        }
        s_[s_.length] = '<tr>';
    }
    s_[s_.length] = '<\/table>';
    return s_.join('');
}

    

})();

function AnimateSlide2(event)
{
    var obj = event.currentTarget;
    if(obj.custom_obj.be == "firefox") {
        obj.style.MozTransition='';
        obj.style.MozTransform='translate(0,0)';
    } else 
    if(obj.custom_obj.be == "ie") {
        obj.style.transition='';
        obj.style.msTransform='translate(0,0)';
    } else {
        obj.style.webkitTransition='';
        obj.style.webkitTransform='translate3d(0,0,0)';
    }
    obj.style.left = obj.custom_obj.to_x+'px';
    obj.style.top = obj.custom_obj.to_y+'px';
    window.setTimeout(function(){
        if(obj.custom_obj.be == "firefox") {
            obj.style.MozTransition='';
            obj.style.MozTransform='translate(0,0)';
        } else
        if(obj.custom_obj.be == "ie") {
            obj.style.transition='';
            obj.style.msTransform='translate(0,0)';
        } else {
            obj.style.webkitTransition='';
            obj.style.webkitTransform='translate3d(0,0,0)';
        }
    },500);
    if(obj.custom_obj.func)obj.custom_obj.func();
    obj.removeEventListener(event.type,AnimateSlide2);
}

function AnimateSlide(div,from_x,from_y,to_x,to_y,speed,distance,func)
{
    var obj = div;
    var mx = to_x-from_x;
    var my = to_y-from_y;
    if((mx==0)&&(my==0)) {
        if(func) func();
        return;
    }

    var o = {};
    o.to_x = to_x;
    o.to_y = to_y;
    o.func = func;
    div.custom_obj = o;
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        div.style.MozTransform = "translate(0,0)";
        div.style.MozTransition = speed+"s ease-in-out";
        div.style.MozTransform = "translate("+mx+"px,"+my+"px)";
        o.be = "firefox";
        div.addEventListener('transitionend',AnimateSlide2,false);
    } else
    if(b_ie) {
        div.style.msTransform = "translate(0,0)";
        div.style.transition = speed+"s ease-in-out";
        div.style.msTransform = "translate("+mx+"px,"+my+"px)";
        o.be = "ie";
        div.addEventListener('transitionend',AnimateSlide2,false);
    } else {
        div.style.webkitTransform = "translate3d(0,0,0)";
        div.style.webkitTransition = speed+"s ease-in-out";
        div.style.webkitTransform = "translate3d("+mx+"px,"+my+"px,0)";
        o.be = "webkit";
        div.addEventListener('webkitTransitionEnd',AnimateSlide2,false);
    }
}
    




