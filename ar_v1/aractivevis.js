/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/aractivevis.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 160610 1256 hms 180534 Remove tab characters from source files
* 140527 2133 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.32 $
//$Log: aractivevis.js,v $
//Revision 1.32  2014/04/30 22:45:42  William_Forde
//[p134795] fix syntax error.
//
//Revision 1.31  2014/04/30 21:27:48  William_Forde
//[p134795] disable chart selection feature.
//
//Revision 1.30  2014/03/26 20:51:48  William_Forde
//[p134795] dont reuse variable that is aready being used to create menu.
//
//Revision 1.29  2014/03/26 05:14:39  William_Forde
//[p134795] fix issue with some of the objects in selList having a undefined group, causing element count to be wrong.
//
//Revision 1.28  2014/03/17 17:11:39  William_Forde
//[p134795][>branch8100] If bucket syntax, then use that format for showing the menu data.
//
//Revision 1.27  2014/02/04 18:56:25  William_Forde
//[p149883] We need to save parms or AV will break.  Storing object with both chart and parms for future reference.
//
//Revision 1.26  2014/01/27 15:16:30  William_Forde
//[p134795] dont call applypfjdefaults for some chart types.  Fix more styling for cluster.
//
//Revision 1.25  2014/01/24 15:31:43  William_Forde
//[p154865] add basic styling for circle pack
//
//Revision 1.24  2014/01/23 14:20:55  William_Forde
//[p134795] Generate data for the circlepack chart.
//
//Revision 1.23  2014/01/16 16:01:35  William_Forde
//[p134795] Dont apply chart filter if FIlterChangedCallBack is set.
//
//Revision 1.22  2014/01/16 15:09:46  William_Forde
//[p134795] If ibiActiveVis.FilterChangedCallBack is set then call the user function when the chart filter is selected from the menu.
//
//Revision 1.21  2013/11/05 14:46:04  William_Forde
//[p150545] In AV, map only allows "click" at the moment to show menu.  Allows using Map as filter in AV. Also add exclude to AV menu.
//
//Revision 1.20  2013/11/01 03:16:50  William_Forde
//[p134795] fix javascript warnings
//
//Revision 1.19  2013/07/24 20:57:41  William_Forde
//Fix issue with GRMERGE and chart menu not display or functioning.
//
//Revision 1.18  2013/07/10 18:34:06  William_Forde
//[p134795] allow unknown chart types to be treated like bar data.
//
//Revision 1.17  2013/06/05 22:06:04  William_Forde
//[p134795] Fix Javascript waring.
//
//Revision 1.16  2013/05/29 23:32:12  William_Forde
//[p134795] More styling enhancement for menu.
//
//Revision 1.15  2013/05/29 12:18:13  William_Forde
//[p134795] Add selected value to the chart menu.
//
//Revision 1.14  2013/05/28 18:33:55  William_Forde
//[p134795] Fix scatter highlight. Add highlight capabilities to line.
//
//Revision 1.13  2013/05/23 20:22:53  William_Forde
//[p134795] Apply filter if selected from memu. Add remove filter option to the menu.
//
//Revision 1.12  2013/05/23 19:02:24  William_Forde
//[p134795] Dont override tdgchart tooltips, was causing errors.
//
//Revision 1.11  2013/05/23 15:12:35  William_Forde
//[p134795] Apply highlight as soon as user finish selecting, then show menu with filter options, the same way Tablau does.
//
//Revision 1.10  2013/05/22 19:39:58  William_Forde
//[p134795] Wrong method called to hide menu.
//
//Revision 1.9  2013/05/22 19:22:51  William_Forde
//[p134795] Hide menu when clicking outside of chart objects.
//
//Revision 1.8  2013/05/22 15:16:11  William_Forde
//[p134795] Temp workaround for pie.
//
//Revision 1.7  2013/05/22 15:05:39  William_Forde
//[p134795] Add modified tooltip code.
//
//Revision 1.6  2013/05/15 19:21:32  William_Forde
//Allow cached highlighting of charts.
//
//Revision 1.5  2013/05/06 14:51:16  William_Forde
//[p134795] Initial return of using cache to handle linking of components for AV.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["aractivevis"]="$Revision: 20160610.1256 $";

(function() {

    if (typeof window.ibiActiveVis !== 'undefined') {
        return;
    }
    
var MP_CFT = [
{'height':2,'width':60,'top':-16,'left':20,'hide_delay':hide_delay,'expd_delay':200,'css':{}},
{'spacing':2,'width':200,'top':8,'left':0,'css':{'outer':['arMenu'],'inner' : ['arMenu','arMenuHover']}},
{'width':100,'left':50}
];

    window.ibiActiveVis = {
        chartSelectionChanged: ChartSelectionChanged,
        chartSelectionChangedMap: ChartSelectionChangedMap,
        chartHighLightSelection: ChartHighLightSelection,
        updateConnectedReports: UpdateConnectedReports,
        doChartSelection: DoChartSelection,
        FilterChangedCallBack: null,
        showChartMenu: ShowChartMenu
    };
    
    var defaultBackgroundColor = 'rgba(250, 241, 179, 0.93)';
    var defaultBorderColor = 'rgba(243, 219, 63, 0.93)';

    function ShowChartMenu(selList,parms,obj) {
        var mytable=parms.mytable;
        var MI_CF = [];
        var i = 3;
        var dataReportIndex = getReportByName(parms.mytable.a_cntl.dataReport);
        var workTable =    MyTable[dataReportIndex];
        var roottxt="";
        var val;
        var fieldname;
        var fieldname2;
        var count = 0;
        
        if(selList.length>1) {
            for(var j=0;j<selList.length;j++)
                if(typeof(selList[j].group)!="undefined")
                    count++;
            roottxt = count + " points";
        }
        else {
            if(parms.chart.chartType == "pie") {
                if(parms.dataProvider.type=="buckets")
                    val = "";
                else
                if(parms.dataProvider.type=="advanced")
                    val = "";
                else
                    val = parms.dataProvider[selList[0].series][parms.y[selList[0].group]];
                fieldname = parms.y[0];
                roottxt = fieldname + " = " + val;
            } else
            if(parms.chart.chartType == "map") {
                if(parms.dataProvider.type=="buckets") {
                    val = parms.dataProvider.groupLabels[selList[0].group];
                } else
                if(parms.dataProvider.type=="advanced") {
                    val = parms.dataProvider.groupLabels[selList[0].group];
                } else
                    val = parms.dataProvider[selList[0].group][parms.y[0]];
                fieldname = parms.y[0];
                roottxt = fieldname + " = " + val;
            } else
            if(parms.chart.chartType == "bar") {
                if(parms.dataProvider.type=="buckets") {
                    val = parms.dataProvider.groupLabels[selList[0].group];
                } else
                if(parms.dataProvider.type=="advanced") {
                    val = parms.dataProvider.groupLabels[selList[0].group];
                } else
                    val = parms.dataProvider[selList[0].group][parms.y[0]];
                fieldname = parms.y[0];
                roottxt = fieldname + " = " + val;
            } else
            if(parms.chart.chartType == "line") {
                if(parms.dataProvider.type=="buckets")
                    val = "";
                else
                if(parms.dataProvider.type=="advanced")
                    val = "";
                else
                    val = parms.dataProvider[selList[0].group][parms.y[0]];
                fieldname = parms.y[0];
                roottxt = fieldname + " = " + val;
            } else
            if(parms.chart.chartType == "scatter") {
                if(parms.dataProvider.type=="buckets") {
                    val1 = "";
                    val2 = "";
                } else 
                if(parms.dataProvider.type=="advanced") {
                    val1 = "";
                    val2 = "";
                } else {
                    val = parms.dataProvider[selList[0].group][parms.y[0]];
                    val2 = parms.dataProvider[selList[0].group][parms.x[0]];
                }
                fieldname = parms.y[0];
                fieldname = parms.x[0];
                roottxt = val + " = " + val2;
            }
        }
        MI_CF[0]=[[''],null,null];
        MI_CF[0][i++]=[[roottxt],'SKIP',null];
        MI_CF[0][i++]=[[drawline(mytable.a_cntl.menubordercolor),null,null,true],'SKIP',null];
        //MI_CF[0][i++] = [[ibiMsgStr['hlg']],null,{'ocv':'highlightfilter','oc':function(){ibiActiveVis.doChartSelection(selList,parms,obj,"highlight");}}];
        MI_CF[0][i++] = [[ibiMsgStr['ecfilt']],null,{'ocv':'addcolorfilter','oc':function(){ibiActiveVis.doChartSelection(selList,parms,obj,"filter");}}];
        MI_CF[0][i++] = [[ibiMsgStr['exfilt']],null,{'ocv':'addcolorfilter','oc':function(){ibiActiveVis.doChartSelection(selList,parms,obj,"exclude");}}];
        if(workTable.tdg_filt.length) 
            MI_CF[0][i] = [[ibiMsgStr['crtcflt']],null,{'ocv':'removecolorfilter','oc':function(){ibiActiveVis.doChartSelection(selList,parms,obj,"clear");}}];
        if(typeof(mytable.CFmenu)=='undefined') mytable.CFmenu=null;
        
        mytable.CFmenu = ibiMenu.Menu(MI_CF,MP_CFT,null,mytable,null,mytable.CFmenu,null);
        var x = obj.event.clientX;
        var y = obj.event.clientY;
        
        var thismenu = ibiMenu.ALL_MENUS[mytable.CFmenu].thismenu;
        var menu_id = thismenu.root_id;
        var m_root = d.getElementById('d'+menu_id);
        if(m_root) {
            m_root.style.font = '10pt Sans-Serif';
            m_root.style.background = defaultBackgroundColor;
            m_root.style.color = 'black';
            m_root.style.border =  '1px solid ' + defaultBorderColor;
            m_root.style.borderWidth = '2px';
            m_root.style.borderRadius = '6px';
            m_root.style.padding = '3px 5px';
        }
        
        ibiMenu.Showmenu(null,mytable.id,mytable.CFmenu,mytable.CFmenu,true,0,x,y);
    }


    function ChartSelectionChangedMap(object)
    {
        var parms = object.userInfo;
        var series = object.series;
        var group = object.group;
        var svgElement = object.svgElement;
        var objName = object.chartObjName;
        var misc = object.misc;
        var i;
        var obj = object;
        var selList;
        parms.mytable = MyTable[parms.id];
        parms.chart = object.chart;
        parms.dataProvider = parms.dataProvider;
        if(this.chartType == 'map')
        {
            for(i=0; i < parms.groupLabels.length; i++)
                if(group.toUpperCase() == parms.groupLabels[i].toUpperCase()) {
                    group = i;
                    break;
                }
        }
        if(typeof(parms.groupLabels[group])=="undefined") return;
        
        selList = [{'series':0,'group':group}];
        
        ChartSelectionChanged(selList,parms,obj,true);
    }


    function ChartSelectionChanged(selList,parms,obj,force)
    {
//        if(typeof(parms.groupLabels[selList[0].group])=="undefined") return;
        //ibiStd.ShowWait("");
        if((obj.event.type != "mouseup")&&(!force)) return;
        if(selList.length) {
            ShowChartMenu(selList,parms,obj);
            DoChartSelection(selList,parms,obj,"highlight");
        } else {
            ibiMenu.Hidemenu();
            DoChartSelection(selList,parms,obj);
        }
    }
    
    function ChartHighLightSelection(parms)
    {
        if(parms.mytable.haveHighlight) {
            var selArray = [];
            for(var i=0; i < parms.dataProvider.length; i++) {
                if(parms.dataProvider[i].ibiHighLightChartRecord) {
                    var selObject = new Object();
                    if(parms.chart.chartType=="line") {
                        selObject.group = i;
                        selObject.object = "marker";
                        selObject.series = 0;
                    } else
                    if(parms.chart.chartType=="pie") {
                        selObject.group = 0;
                        selObject.object = "riser";
                        selObject.series = i;
                    } else {
                         selObject.group = i;
                        selObject.object = "riser";
                        selObject.series = 0;
                    }
                    selArray[selArray.length] = selObject;
                }
            }
            parms.chart.selectData(selArray,true);
        }
    }
    
    function DoChartSelection(selList,parms,obj,what)
    {
        var valx,valy,target,rval1,rval2;
        var dataReportIndex = getReportByName(parms.mytable.a_cntl.dataReport);
        var workTable =    MyTable[dataReportIndex];
        var i;
        var j;
        var col1;
        var col2;
        var IBs;
        var ftype = 9;
        var field;
        var cond;
        if(what == "exclude") ftype = 13;
        
        workTable.tdg_filt = [];
        
        if(selList.length && what != "clear") {
            if(parms.chart.chartType == "pie") {
                valy=[];
                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        if(parms.dataProvider.type == 'buckets')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                        if(parms.dataProvider.type == 'advanced')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                            valy[valy.length] = parms.dataProvider[selList[j].series][parms.y[selList[j].group]];
                    }
                }

                IBs = workTable.IBs;
                col1 = parms.mytable.a_capt[0].dataField;
                workTable.tdg_filt[0] = new addfilt(col1,ftype,valy);
            } else
            if(parms.chart.chartType == "line") {
                valy=[];
                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        if(parms.dataProvider.type == 'buckets')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group]
                        if(parms.dataProvider.type == 'advanced')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                            valy[valy.length] = parms.dataProvider[selList[j].group][parms.y[0]];
                        }
                }
                IBs = workTable.IBs;
                col1 = parms.mytable.a_capt[0].dataField;
                workTable.tdg_filt[0] = new addfilt(col1,ftype,valy);
            } else
            if(parms.chart.chartType == "scatter") {
                IBs = workTable.IBs;
                col1 = parms.mytable.a_capt[1].dataField;
                col2 = parms.mytable.a_capt[0].dataField;
                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        if(parms.dataProvider.type == 'buckets') {
                            valx = parms.dataProvider.groupLabels[selList[j].group];
                            valy = parms.dataProvider.groupLabels[selList[j].group];
                        } else
                        if(parms.dataProvider.type == 'advanced') {
                            valx = parms.dataProvider.groupLabels[selList[j].group];
                            valy = parms.dataProvider.groupLabels[selList[j].group];
                        } else {
                            valx = parms.dataProvider[selList[j].group][parms.x[0]];
                            valy = parms.dataProvider[selList[j].group][parms.y[0]];
                        }
                    }
                    workTable.tdg_filt[workTable.tdg_filt.length] = new addfilt([col1,col2],ftype,[[valx],[valy]]);
                }
            } else {
            //if(parms.chart.chartType == "bar") {
                valy=[];
                for(j=0; j < selList.length; j++) {
                    if(typeof(selList[j].group)!="undefined") {
                        if(parms.dataProvider.type == 'buckets')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                        if(parms.dataProvider.type == 'advanced')
                            valy[valy.length] = parms.dataProvider.groupLabels[selList[j].group];
                        else
                            valy[valy.length] = parms.dataProvider[selList[j].group][parms.y[0]];
                    }
                }
                IBs = workTable.IBs;
                col1 = parms.mytable.a_capt[0].dataField;
                workTable.tdg_filt[0] = new addfilt(col1,ftype,valy);
            }
        }
        var isRoot = true;
        if(workTable.isRollUp) isRoot=false;
        workTable.callFilt(isRoot);
        if(selList.length==0) what = "clear";

        if(ibiActiveVis.FilterChangedCallBack) {
            cond = 'EQ';
            if(ftype==13) cond = 'NE';
            if(selList.length && what != "clear") {
                field =  parms.mytable.a_cntl.a_cols[0].field;
                ibiActiveVis.FilterChangedCallBack(field,ftype,workTable.tdg_filt[0].as_fpat1);
            } else {
                field =  parms.mytable.a_cntl.a_cols[0].field;
                ibiActiveVis.FilterChangedCallBack(field,ftype,null);
            }
        } else
            UpdateConnectedReports(workTable,parms.mytable,parms,what);

        //ibiStd.HideWait();
    }
    
    function UpdateConnectedReports(workTable,caller,parms,what)
    {
        var target;
        var valy;
        var doRedraw;
        var fieldname;
        var fieldname2;
        var j;
        var i;
        var dpdata;
        var tn;
        
        if((what == "filter") || (what == "clear") || (what == "exclude")) {
            for(tn in workTable.dataReportList) {
                target = workTable.dataReportList[tn];
                target.filterChange = true;
                target.redrawCharts = true;
                ibiGrid.show(false,target);
            }
        } else {
        for(tn in workTable.dataReportList) {
            doRedraw=false;
            target = workTable.dataReportList[tn];
            //if((target.id == caller.id) && (workTable.tdg_filt.length!=0))continue;
            //if(target.id == caller.id) continue;
            if(target.a_cntl.reportView==REPORTGRID) {
                target.sortneeded = true;
                if(target.a_sort.length==0) {
                    target.a_sort = [];
                    target.a_sort[0]={'n_col' : 0,'b_ord' : 0};
                }
                ibiGrid.show(false,target);
            } else
            if(target.a_cntl.reportView==REPORTPIVOT) {
                target.sortneeded = true;
                if(target.a_sort.length==0) {
                    target.a_sort = [];
                    target.a_sort[0]={'n_col' : 0,'b_ord' : 0};
                }
                ibiPivot.show(false,target);
            } else {
                var chart = workTable.connectedReports[target.id].chart;
                var cparms = workTable.connectedReports[target.id].parms;
                var selobj = [];
                var mark = {};
                var cc;
                var dp = cparms.dataProvider;
                dpdata = dp;
                if(typeof(dp.flatData)!="undefined")
                    dpdata = dp.flatData;
                var records;
                var col1;
                var col2;
                var addRec,rec;
                var noneSelected = true;
                var sum = 0;
                {
                    var save_fcont = target.a_filter_cont;
                    var save_fbody = target.a_filter_body;
                    var save_cont = target.a_cont;
                    var save_body = target.a_f_body;
                    var tcont_object = ibiChart.makeChartData(cparms);
                    workTable.IBs = target.IBs;
                    target.a_filter_cont = save_fcont;
                    target.a_filter_body = save_fbody;
                    target.a_f_body = save_body;
                    target.a_cont = save_cont;
                }
 
                 if(chart.colorMode.mode == "bySeriesSelection" || chart.colorMode.mode == "byGroupSelection") {
                    if(chart.chartType=="line") {
                        cc = 0;
                        fieldname = parms.y[0];
                        col1 = cparms.y_col[0];
                        col2 = cparms.x_col[0];
                        for(j=0; j < dpdata.length; j++) {
                            sum = 0;
                            addRec  = false;
                                
                            if((cc<tcont_object.newcont.length )&&(dpdata[j][fieldname] == workTable.IBs[tcont_object.newcont[cc][col1][DARAW]])) {
                                sum = workTable.IBs[tcont_object.newcont[cc][col2][DARAW]];
                                addRec = true;
                                cc++;
                                noneSelected = false;
                            } 
                            if(addRec) {
                                selobj[selobj.length] = {"group":j,'object':"riser","series":0};
                                if(chart.colorMode.data) 
                                    chart.colorMode.data[0][j] = sum;
                                doRedraw = true;
                            } else {
                                if(chart.colorMode.data)
                                    chart.colorMode.data[0][j] = 0;
                            }
                        }
                        if(noneSelected) {
                            doRedraw = true;
                            for(j=0; j <dpdata.length; j++)
                                chart.colorMode.data[0][j] = "100%";
                        }
                    } else 
                    if(chart.chartType=="scatter") {
                        cc =0;
                        fieldname = cparms.y[0];
                        fieldname2 = cparms.x[0];
                        col1 = cparms.y_col[0];
                        col2 = cparms.x_col[0];
                        var lookup = new Object();
                        for(j=0; j < tcont_object.newcont.length; j++)
                            lookup[workTable.IBs[tcont_object.newcont[j][col1][DARAW]]+'/'+workTable.IBs[tcont_object.newcont[j][col2][DARAW]]] = true;
                        for(j=0; j < dpdata.length; j++) {
                            addRec = false;
                            if(lookup[dpdata[j][fieldname]+'/'+dpdata[j][fieldname2]]) {
                                addRec = true;
                                noneSelected = false;
                            }
                            if(addRec) {
                                doRedraw = false;
                                selobj[selobj.length] = {"group":j,"object":"riser","series":0,"misc":"marker"};
                            }
                        }
                    } else 
                    if(chart.chartType=="pie") {
                        cc = 0;
                        fieldname = cparms.y[0];
                        col1 = cparms.y_col[0];
                        col2 = cparms.x_col[0];
                        for(j=0; j < dpdata.length; j++) {
                            sum = 0;
                            addRec  = false;
                                
                            if((cc<tcont_object.newcont.length )&&(dpdata[j][fieldname] == workTable.IBs[tcont_object.newcont[cc][col1][DARAW]])) {
                                sum = workTable.IBs[tcont_object.newcont[cc][col2][DARAW]];
                                addRec = true;
                                cc++;
                                noneSelected = false;
                            } 
                            if(addRec) {
                                selobj[selobj.length] = {"group":0,'object':"riser","series":j};
                                chart.colorMode.data[0][j] = sum-1;
                                doRedraw = true;
                            } else {
                                chart.colorMode.data[0][j] = 0;
                            }
                        }
                        if(noneSelected) {
                            doRedraw = true;
                            for(j=0; j <dpdata.length; j++)
                                chart.colorMode.data[0][j] = "100%";
                        }
                    } else {
                    //if(chart.chartType=="bar") {
                        cc = 0;
                        fieldname = parms.y[0];
                        col1 = cparms.y_col[0];
                        col2 = cparms.x_col[0];
                        for(j=0; j < dpdata.length; j++) {
                            sum = 0;
                            addRec  = false;
                                
                            if((cc<tcont_object.newcont.length )&&(dpdata[j][fieldname] == workTable.IBs[tcont_object.newcont[cc][col1][DARAW]])) {
                                sum = workTable.IBs[tcont_object.newcont[cc][col2][DARAW]];
                                addRec = true;
                                cc++;
                                noneSelected = false;
                            } 
                            if(addRec) {
                                selobj[selobj.length] = {"group":j,'object':"riser","series":0};
                                chart.colorMode.data[0][j] = sum-1;
                                doRedraw = true;
                            } else {
                                chart.colorMode.data[0][j] = 0;
                            }
                        }
                        if(noneSelected) {
                            doRedraw = true;
                            for(j=0; j <dpdata.length; j++)
                                chart.colorMode.data[0][j] = "100%";
                        }
                    }
                } 
                else doRedraw = true;
                //window.setTimeout(function(){
                    if(doRedraw) chart.redraw();
                    else chart.selectData(selobj,true);
                //},0);
            } 
        }
        workTable.tdg_filt = [];
        }
    }
    
})();


function arClusterChart(container,mytable,width,height)
{
    var fill = 'rgba(31, 119, 180, 0.25)';
    this.chart = null;
    this.container = container;
    this.data = {};
    this.prop = {};
    this.mytable = mytable;
    this.width=width;
    this.height=height;

    this.refresh = function() {
        var i;
        var j;
        var c;
        var cc;
        var a;
        var tname;
        var cmytable = [];
        var cdata = null;
        var c = 0;
        var field = [];
        var currentClName = [];
        var currentPos = [];
        var clNames = [];
        var fieldname;
        var vname;
        var vdata;
        var vstyle;
        
        if(this.mytable) {
            cdata =    {
                name: 'Outermost ClusterX',
                value: 1,
                style: {
                    color: fill,
                    border: {
                        color: 'black',
                        width: 1,
                        dash: ''
                    },
                    nameLabel: {
                        visible: true,
                        font: '12pt Sans-Serif',
                        color: 'black'
                    },
                    valueLabel: {
                        visible: true,
                        font: '12pt Sans-Serif',
                        color: 'white',
                        numberFormat: 'auto'
                    }
                },
                children: []
            };
            for(i=0; i < this.mytable.a_capt.length; i++) {
                tname = this.mytable.IBs[this.mytable.a_cont[0][i][DASTR]];
                j = getReportByName(tname);
                if(j!=-1) {
                    field[c] = MyTable[j].a_cntl.a_cols[1].field;
                    currentPos[c] = 0;
                    cmytable[c++] = MyTable[j];
                }
            }
            cl = cmytable[0].IBs[cmytable[0].a_cont[0][0][DASTR]];
            clNames[clNames.length] = cl;
            for(j=1; j < cmytable[0].a_cont.length; j++) {
                cl = cmytable[0].IBs[cmytable[0].a_cont[j][0][DASTR]];
                if(clNames[clNames.length-1]!=cl) 
                    clNames[clNames.length] = cl;
            }
            
            for(j=0; j < clNames.length; j++) {
                cdata.children[j] = {};
                c = cdata.children[j];
                cluster = clNames[j];
                c.name="cluster "+cluster;
                c.value=10;
                c.children = [];
                c.style = {color: fill,    border: {color: 'black',width: 1,dash: ''},
                    nameLabel: {visible: true,font: '12pt Sans-Serif',color: 'black'},
                    valueLabel: {visible: true,    font: '12pt Sans-Serif',color: 'white',    numberFormat: 'auto'}};
                for(i=0; i < cmytable.length; i++) {
                    c.children[i] = {};
                    cc = c.children[i];
                    fieldname = field[i];
                    cc.name = fieldname;
                    cc.value=20;
                    cc.children = [];
                    k=currentPos[i];
                    while((k<cmytable[i].a_cont.length) && (cmytable[i].IBs[cmytable[i].a_cont[k][0][DASTR]]==cluster)) {
                        vname = cmytable[i].IBs[cmytable[i].a_cont[k][1][DASTR]]+'';
                        vstyle = null;
                        if(cmytable[i].a_capt.length>2) {
                            vdata = cmytable[i].IBs[cmytable[i].a_cont[k][2][DASTR]]*1;
                            vstyle = cmytable[i].getColumnStyle(2,k,k,vdata,'',0,'NODE');
                        }
                        a = {'name':vname,'value':vdata};
                        if(vstyle) {
                            a.style={};
                            if(vstyle.color!=null) 
                                a.style.color = vstyle.color;
                            if(vstyle.fontFamily) {
                                a.style.valueLabel = {
                                    visible: true,
                                    color: 'white',
                                    numberFormat: 'auto'
                                };
                                if(vstyle.fontFamily!=null)
                                    a.style.valueLabel.font = vstyle.fontFamily;
                            }
                        }
                        cc.children[cc.children.length]=a;
                        
                        k++;
                    }
                    currentPos[i] = k;
                }
            }
        }
        if(this.chart == null) 
            //this.chart = new tdgchart({backend:'js', allowBackendFallback:false,tdgPath:null});
            this.chart = new tdgchart();
        chart = this.chart;
        this.chart.data = cdata;
        this.chart.height = this.height;
        this.chart.width = this.width;
        this.chart.htmlToolTip.enabled = true;
        this.chart.htmlToolTip.snap = true;
        this.chart.title.visible = true;
        this.chart.chartType = 'circlepack2';
        this.chart.catchErrors = false;
        this.chart.dataSelection.enabled = true;
        this.chart.dataSelection.eventCallback = function(selList){
            console.log(selList.map(function(el){return el.series;}));
            };
        this.chart.draw(this.container.id);
    }
    
}

var chart;
