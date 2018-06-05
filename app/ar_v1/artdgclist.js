/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/artdgclist.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180510 1228 wjf 203095 AHTML-Mobile: Chart Default should be Bar instead of VBar
* 180326 1242 wjf 199946 Conversion from "Treemap to Tagcloud" with two BY fields di
* 180321 1055 wjf 199943 Conversion from Any chart type to Tagcloud with two BY fiel
* 180306 1442 wjf 200246 AHML: Unify JSON output
* 180226 1240 wjf 200246 AHML: Unify JSON output
* 180220 0915 wjf 200246 AHML: Unify JSON output
* 171010 1602 iys 196499 Limit for scatter and bubble charts in VIZ mode should be r
* 170907 1002 wjf 194969 AHTML:Invoking charts from chart/rollup tool throws webpage
* 170817 1104 wjf 193973 Make waterfall charts work with bucket syntax
* 170424 1230 wjf 190105 Streamgraph chart with Active Pdf output format shows blank
* 170424 1223 wjf 190105 Streamgraph chart with Active Pdf output format shows blank
* 170321 1413 wjf 189576 Active chart:Hover on Ring pie, Slice is not highlighted an
* 170321 1057 wjf 187411 AHTML:Pack Chart from Extension set of charts does not run
* 161129 2211 wjf 186888 Allow animation to be set from the fex or by the tools.
* 161129 1313 wjf 185957 Graph color "washed out" converting from Ring Pie to Area
* 161107 0856 wjf 185566 AHTML Chart not displaying Pie feeler lines at run-time
* 161006 1423 wjf 166236 AHTML:Newbucket shows one layout for all Area under adv chrt
* 160913 1738 bjd 184373 AHTML:3D area show "Type error" when selected from active a
* 160913 1654 bjd 184305 AHTML:3D column show "Type error" when selected from active
* 160726 1437 wjf 181670 Adv Chart: Switching from Ring Pie chart to other chart typ
* 160719 1412 bjd 179245 AHTML:Waterfall Chart fails in AHTML.
* 160712 1552 bjd 179245 AHTML:Waterfall Chart fails in AHTML.
* 160602 1244 wjf 179842 AHTML:Horizontal bar chart is missing in advance chart from
* 160602 1148 wjf 181567 Active Chart Toolbar: Select "Tagcloud Chart" types in adva
* 160303 1517 ppl 176569 AFLEX\APDF:Chart types are not displayed properly in Chart\
* 160225 1543 bjd 159199 AHTML - Different PIE counts produced for PIE options.
* 141030 1555 ppl 162382 VAL:AFLEX:VBRSTK2 chart type displays other tab by default
* 141022 1637 wjf 162293 AHTML: Graphs are displaying blank/incorrect output.
* 140925 1406 wjf 134795 Active Visualization
* 140807 1837 wjf 160618 AHTML:Pie chart:No percentage of total shows up
* 140607 0941 wjf 134795 Active Visualization
* 140606 1735 wjf 134795 Active Visualization
* 140527 1503 wjf 134795 Active Visualization
* 140515 1116 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
/* Must match irptdc.js file on the server */
//$Revision: 1.11 $
//$Log: artdgclist.js,v $
//Revision 1.11  2014/05/22 14:27:59  William_Forde
//[p134795] Set maxrecors for scatter to 50000
//
//Revision 1.10  2014/05/15 15:13:39  William_Forde
//[p134795] add treemap and marker to table.
//
//Revision 1.9  2014/03/18 18:04:57  William_Forde
//[p134795][>branch8100] create seperate prop section for map and bubblemap
//
//Revision 1.8  2014/03/17 13:08:59  William_Forde
//[p134795][>branch8100]  add bubblemap to chart list.
//
//Revision 1.7  2014/03/11 18:32:24  William_Forde
//[p134795][>branch8100] change default from 100000 to 1000
//
//Revision 1.6  2014/03/03 18:11:07  William_Forde
//[p134795][>branch8100] Add activeProps.maxRecords to default properties.
//
//Revision 1.5  2013/11/12 02:16:34  William_Forde
//[p150545] add entry for tagcloud and maps so they work in preview mode.
//
//Revision 1.4  2013/05/15 19:22:26  William_Forde
//[p134795] fix log/revision message
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["artdgclist"]="$Revision: 20180510.1228 $";


var TDGDefaultLabelColor = "#333333";
var TDGDefaultMarkerSize = 10;
var TDGDefaultTickColor = "#333333";
var TDGDefaultGridlineColor = "#c8c8c8";

var TDGMarkerColor0 = "#2D66B6";
var TDGMarkerColor1 = "#07C6E2";
var TDGMarkerColor2 = "#EDC32C";
var TDGMarkerColor3 = "#3A587D";
var TDGMarkerColor4 = "#8AB595";
var TDGMarkerColor5 = "#83AACB";
var TDGMarkerColor6 = "#BFAD87";
var TDGMarkerColor7 = "#A0ABBB";
var TDGMarkerColor8 = "#8803a4";
var TDGMarkerColor9 = "#DC2F77";
var TDGMarkerColor10 = "#FE7B6B";
var TDGMarkerColor11 = "#37CABA";
var TDGMarkerColor12 = "#A53C3E";
var TDGMarkerColor13 = "#FB3A60";
var TDGMarkerColor14 = "#9DD358";
var TDGMarkerColor15 = "#E6833A";
var TDGMarkerColor16 = "#6C488F";
var TDGMarkerColor17 = "#8B008B";

var TDGMarkerColorDark0 = "#25508E";
var TDGMarkerColorDark1 = "#068599";
var TDGMarkerColorDark2 = "#BC9710";
var TDGMarkerColorDark3 = "#2A415A";
var TDGMarkerColorDark4 = "#7BAD87";
var TDGMarkerColorDark5 = "#4B85B4";
var TDGMarkerColorDark6 = "#A28B57";
var TDGMarkerColorDark7 = "#73829C";

var TDGMarkerColorLight0 = "#9AB9E5";
var TDGMarkerColorLight1 = "#6FE9FB";
var TDGMarkerColorLight2 = "#F3D772";
var TDGMarkerColorLight3 = "#658BB8";
var TDGMarkerColorLight4 = "#BAD4C0";
var TDGMarkerColorLight5 = "#B7CEE1";
var TDGMarkerColorLight6 = "#DACFB9";
var TDGMarkerColorLight7 = "#CCD2DB";

var dpdef = {x:["COL2","COL3"],y:["COL1"],data:[
    {"COL1":"A","COL2":453,"COL3":268}
    ,{"COL1":"B","COL2":756,"COL3":953}
    ,{"COL1":"C","COL2":986,"COL3":438}
    ,{"COL1":"D","COL2":235,"COL3":656}
    ,{"COL1":"E","COL2":835,"COL3":767}
    ]};

var dppie = {x:["COL2"],y:["COL1"],data:[
    {"COL1":"A","COL2":453,"COL3":268}
    ,{"COL1":"B","COL2":756,"COL3":953}
    ,{"COL1":"C","COL2":986,"COL3":438}
    ,{"COL1":"D","COL2":235,"COL3":656}
    ,{"COL1":"E","COL2":835,"COL3":767}
    ]};

var dpscat = {x:["COL2"],y:["COL1"],data:[
    {"COL1":67,"COL2":453}
    ,{"COL1":97,"COL2":756}
    ,{"COL1":34,"COL2":986}
    ,{"COL1":23,"COL2":235}
    ,{"COL1":78,"COL2":835}
    ]};

var dpbubble = {x:["COL2","COL3"],y:["COL1"],data:[
    {"COL1":67,"COL2":453,"COL3":10}
    ,{"COL1":97,"COL2":756,"COL3":20}
    ,{"COL1":34,"COL2":986,"COL3":30}
    ,{"COL1":23,"COL2":235,"COL3":40}
    ,{"COL1":78,"COL2":835,"COL3":50}
    ]};

var dpheatmap = {x:["COL2","COL3","COL4","COL5","COL6"],y:["COL1"],data:[
    {"COL1":"A","COL2":453,"COL3":268,"COL4":453,"COL5":68,"COL6":111}
    ,{"COL1":"B","COL2":756,"COL3":953,"COL4":153,"COL5":268,"COL6":295}
    ,{"COL1":"C","COL2":986,"COL3":438,"COL4":253,"COL5":228,"COL6":412}
    ,{"COL1":"D","COL2":235,"COL3":656,"COL4":353,"COL5":468,"COL6":208}
    ,{"COL1":"E","COL2":835,"COL3":767,"COL4":453,"COL5":558,"COL6":612}
    ,{"COL1":"F","COL2":835,"COL3":767,"COL4":223,"COL5":645,"COL6":712}
    ]};
    
var dpwaterfall = {x:["COL2"],y:["COL1"],data:[
    {"COL1":"A","COL2":453}
    ,{"COL1":"B","COL2":656}
    ,{"COL1":"C","COL2":-336}
    ,{"COL1":"D","COL2":375}
    ]};

var dphistogram = {x:["COL2"],y:["COL1"],data:[
    {"COL1":"A","COL2":12}
    ,{"COL1":"B","COL2":23}
    ,{"COL1":"C","COL2":24}
    ,{"COL1":"D","COL2":35}
    ,{"COL1":"E","COL2":35}
    ,{"COL1":"F","COL2":37}
    ,{"COL1":"G","COL2":39}
    ,{"COL1":"H","COL2":46}
    ,{"COL1":"I","COL2":42}
    ,{"COL1":"J","COL2":43}
    ,{"COL1":"K","COL2":55}
    ]};
    

/*
base:	["bar","pie","line", etc] Chart type used to render the chart.

name:	name of the chart. usually the lookgraph name.

alias:	Array of alternate names for the chart (optional).

useChart: Use this chart instead of the "name" one.

label:	title to display in chart tool.

chartProps: ["pieProps","barProps", etc] base properties for the chart.

chartPropsExtra: additional properties that are specific to this chart (optional).

sampleData: [dpdef,dppie,dpscat,dpbubble] Sample data used to render the chart icons.

showInTool: [true/false] Allow chart to be displayed in chart tool picker. 

sampleImg: [null] Do not set to any onther value. It will be filled in later to hold the svg/vrml for the chart icon.
*/

//var tdginfo = new Object();
function tdginfoInit(ibiMsgStr) {
tdginfo.category = [
        {
            category: ibiMsgStr['crtbar'], //Bar Category
     chartList:[
            {base:'bar',internalType:'bla',name:'vbar', label:ibiMsgStr['VBar'],chartProps: 'barProps',showInTool:false},
            {base:'bar',internalType:'bla',name:'errorbar', label:ibiMsgStr['Errorbar'],chartProps: 'barProps',showInTool:false},
            {base:'bar',internalType:'bla',name:'bar', label:ibiMsgStr['Bar'],chartProps: 'barProps',showInTool:false},
            {base:'bar',internalType:'bla',name:'bar1', label:ibiMsgStr['Bar'],chartProps: 'barProps',chartPropsExtra:'hbarSidebySideProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'bar2', label:ibiMsgStr['Stacked_Bar'],chartProps: 'barProps',chartPropsExtra:'hbarStackedProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'bar3', label:ibiMsgStr['Percent_Bar'],chartProps: 'barProps',chartPropsExtra:'hbarPercentProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'gantt','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockc','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhc','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhcv','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhd','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhb','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhcd','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhcb','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhoc','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhod','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stockhov','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'stocklcv','useChart':'bar',showInTool:false},
            {base:'bar',internalType:'bla',name:'hbar',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbrstk1',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbar2ax',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbrstk2',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbar2axs',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbrstk2s',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'hbrstkpc',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'3d_bar',showInTool:false,chartProps: 'otherProps'}           
     ],
     isCreated:false},  
                
    {category:ibiMsgStr['crtcol'], //Column Category
     chartList:[
            {base:'bar',internalType:'bla',name:'column', label:ibiMsgStr['Column'],chartProps: 'barProps',chartPropsExtra:'vbarSidebySideProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'column2', label:ibiMsgStr['Stacked_Column'],chartProps: 'barProps',chartPropsExtra:'vbarStackedProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'column3', label:ibiMsgStr['Percent_Column'],chartProps: 'barProps',chartPropsExtra:'vbarPercentProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'column4', label:ibiMsgStr['Column_Depth'],chartProps: 'barProps',chartPropsExtra:'vbarSidebySideDepthProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'column5', label:ibiMsgStr['Stacked_Depth'],chartProps: 'barProps',chartPropsExtra:'vbarStackedDepthProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar',internalType:'bla',name:'column6', label:ibiMsgStr['Percent_Depth'],chartProps: 'barProps',chartPropsExtra:'vbarPercentDepthProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'bar3d',internalType:'bla',name:'bar3d', label:ibiMsgStr['3D_Column'],chartProps: 'barProps',chartPropsExtra:'bar3dProps',sampleData:dpdef,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'bar',internalType:'bla',name:'vbrstk1',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'vbar2ax',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'vbrstk2',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'vbar2axs',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'vbrstk2s',showInTool:false,chartProps: 'barProps'},
            {base:'bar',internalType:'bla',name:'vbrstkpc',showInTool:false,chartProps: 'barProps'}
     ],
     isCreated:false},  
                       
    {category:ibiMsgStr['crtpie'],  //Pie Category
     chartList:[
            {base:'pie',internalType:'pie',name:'pie', label:ibiMsgStr['Pie'], chartProps: 'pieProps',sampleData:dppie,showInTool:true,sampleImg:null},
            {base:'pie',internalType:'pie',name:'pie2', label:ibiMsgStr['Pie_with_Depth'], chartProps: 'pieProps',chartPropsExtra:'tdpieDepthProps', sampleData:dppie,showInTool:true,sampleImg:null},
            {base:'pie',internalType:'pie',name:'donut', label:ibiMsgStr['Donut_Cylinder'], chartProps: 'pieProps', chartPropsExtra:'tddonutCylinderProps',sampleData:dppie,showInTool:true,sampleImg:null},
            {base:'pie',internalType:'pie',name:'donut2', label:ibiMsgStr['Donut_with_Depth'], chartProps: 'pieProps', chartPropsExtra:'tddonutDepthProps',sampleData:dppie,showInTool:true,sampleImg:null},
            {base:'pie',internalType:'pie',name:'donut3', label:ibiMsgStr['Donut'], chartProps: 'pieProps', chartPropsExtra:'tddonutProps',sampleData:dppie,showInTool:true,sampleImg:null},
            {base:'pie',internalType:'pie',name:'piemulti',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piering',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piemultr',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piemultp',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piemulpr',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piebar',chartProps:'pieProps',showInTool:false},
            {base:'pie',internalType:'pie',name:'piesingl',chartProps:'pieProps',showInTool:false}
     ],
     isCreated:false},
                        
    {category:ibiMsgStr['crtline'], //Line Category
     chartList:[
            {base:'line',internalType:'bla',name:'line', label:ibiMsgStr['vLine'], chartProps: 'lineProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'line1', label:ibiMsgStr['Curved'], chartProps: 'lineProps',chartPropsExtra:'vlineCurvedProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'line2', label:ibiMsgStr['Straight'], chartProps: 'lineProps',chartPropsExtra:'vlineStraightProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'line3', label:ibiMsgStr['Curved_Markers'], chartProps: 'lineProps',chartPropsExtra:'vlineCurvedMarkersProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'line4', label:ibiMsgStr['Straight_Markers'], chartProps: 'lineProps',chartPropsExtra:'vlineStraightMarkersProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'line5', label:ibiMsgStr['Step'], chartProps: 'lineProps',chartPropsExtra:'vlineStepProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'line',internalType:'bla',name:'vline',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vlinstk',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vline2',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vlinstk2',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vline2s',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vlnstk2s',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'vlnstkpc',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hline',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hlinstk',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hline2',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hlinstk2',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hline2s',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hlnstk2s',showInTool:false,chartProps: 'lineProps'},
            {base:'line',internalType:'bla',name:'hlnstkpc',showInTool:false,chartProps: 'lineProps'}
     ],
     isCreated:false},        
                               
    {category:ibiMsgStr['crtarea'], //Area Category
     chartList:[
            {base:'area',internalType:'bla',name:'area', label:ibiMsgStr['Area'], chartProps: 'areaProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'area',internalType:'bla',name:'area2', label:ibiMsgStr['Stacked_Area'], chartProps: 'areaProps',chartPropsExtra:'vbarStackedProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'area',internalType:'bla',name:'area3', label:ibiMsgStr['Percent_Area'], chartProps: 'areaProps',chartPropsExtra:'vbarPercentProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'area3d',internalType:'bla',name:'area3d', label:ibiMsgStr['3D_Area'], chartProps: 'areaProps',chartPropsExtra:'bar3dProps',sampleData:dpdef,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'area',internalType:'bla',name:'varea',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'vareastk',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'varear2',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'varestk2',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'varestkp',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'harea',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'hareastk',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'harear2',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'harestk2',showInTool:false,chartProps: 'areaProps'},
            {base:'area',internalType:'bla',name:'harestkp',showInTool:false,chartProps: 'areaProps'}
     ],
     isCreated:false},                       
                    
    {category:ibiMsgStr['crtscat'], //Scatter/Bubble category
     chartList:[
            {base:'scatter',internalType:'bubble_scatter',name:'scatter', label:ibiMsgStr['Scatter'], chartProps: 'scatterProps',sampleData:dpscat,showInTool:true,sampleImg:null},
            {base:'scatter',internalType:'bubble_scatter',name:'scatters', label:ibiMsgStr['Scatters'], chartProps: 'scatterProps',sampleData:dpscat,showInTool:false,sampleImg:null},
            {base:'bubble',internalType:'bubble_scatter',name:'bubble', label:ibiMsgStr['Bubble'], chartProps: 'bubbleProps',sampleData:dpbubble,showInTool:true,sampleImg:null},
            {base:'scatter',internalType:'bubble_scatter',name:'scatterd',showInTool:false,chartProps: 'scatterProps'},
            {base:'scatter',internalType:'bubble_scatter',name:'scattrls',showInTool:false,chartProps: 'scatterProps'},
            {base:'scatter',internalType:'bubble_scatter',name:'scattrld',showInTool:false,chartProps: 'scatterProps'}
     ], 
     isCreated:false}, 
                        
    {category:ibiMsgStr['crtother'], //Other category
     chartList:[
            {base:'funnel',internalType:'funnel',name:'funnel', label:ibiMsgStr['Funnel'], chartProps: 'otherProps',chartPropsExtra:'funnelProps',sampleData:dppie,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'funnel',internalType:'funnel',name:'pyramid', label:ibiMsgStr['Pyramid'], chartProps: 'otherProps',chartPropsExtra:'pyramidProps',sampleData:dppie,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'funnel',internalType:'funnel',name:'pyramid1', label:ibiMsgStr['Pyramid 1'], chartProps: 'otherProps',chartPropsExtra:'pyramidProps',sampleData:dppie,showInTool:false,sampleImg:null,notForBucket:true},
            {base:'heatmap',internalType:'heatmap',name:'heatmap', label:ibiMsgStr['Heatmap'], chartProps: 'otherProps',chartPropsExtra:'heatmapProps',sampleData:dpheatmap,showInTool:true,sampleImg:null},
            {base:'waterfall',internalType:'waterfall',name:'hwaterfl', label:ibiMsgStr['Waterfall'], chartProps: 'otherProps',chartPropsExtra:'waterfallProps',sampleData:dpwaterfall,showInTool:false,sampleImg:null,notForBucket:true},
            {base:'waterfall',internalType:'waterfall',name:'vwaterfl', label:ibiMsgStr['Waterfall'], chartProps: 'otherProps',chartPropsExtra:'waterfallProps',sampleData:dpwaterfall,showInTool:false,sampleImg:null,notForBucket:true},
            {base:'waterfall',internalType:'waterfall',name:'waterfall', label:ibiMsgStr['Waterfall'], chartProps: 'otherProps',chartPropsExtra:'waterfallProps',sampleData:dpwaterfall,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'histogram',internalType:'histogram',name:'histogram', label:ibiMsgStr['Histogram'], chartProps: 'barProps',chartPropsExtra:'histogramProps',sampleData:dphistogram,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'polar',name:'polar', label:ibiMsgStr['Polar'], chartProps: 'otherProps',sampleData:dpscat,showInTool:false,sampleImg:null,notForBucket:true},
            {base:'radar',name:'radar', label:ibiMsgStr['Radar_Line'], chartProps: 'otherProps',sampleData:dpdef,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'radar',name:'radar2', label:ibiMsgStr['Radar_Area'], chartProps: 'otherProps',chartPropsExtra:'radarareaProps',sampleData:dpdef,showInTool:true,sampleImg:null,notForBucket:true},
            {base:'tagcloud',internalType:'tagcloud',name:'tagcloud', label:ibiMsgStr['Tag_Cloud'], chartProps: 'otherProps',chartPropsExtra:'radarareaProps',sampleData:dpdef,showInTool:true,sampleImg:null},
            {base:'map',internalType:'choropleth',name:'choropleth', label:ibiMsgStr['Map'], chartProps: 'mapProps',sampleData:dpscat,showInTool:false,sampleImg:null},
            {base:'map',internalType:'bubblemap',name:'bubblemap', label:ibiMsgStr['Map'], chartProps: 'bubblemapProps',sampleData:dpscat,showInTool:false,sampleImg:null},
            {base:'boxplot',internalType:'boxplot',name:'hboxplot', chartProps: 'otherProps',showInTool:false,notForBucket:true},
            {base:'marker',internalType:'marker',name:'marker', chartProps: 'otherProps',showInTool:false},
            {base:'treemap',internalType:'treemap',name:'treemap', chartProps: 'otherProps',showInTool:false},
            {base:'gauge',internalType:'gauge',name:'gauge', chartProps: 'otherProps',showInTool:false},
            {base:'bar',internalType:'bla',name:'3dpyramd',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3doctagn',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dcylder',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dcube',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsphere',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dareas',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dribbns',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dcone',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dareag',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dribbng',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dglobe',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsurfce',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsurfsd',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsurfhc',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsmthns',showInTool:false,chartProps: 'otherProps'},
            {base:'bar',internalType:'bla',name:'3dsmooth',showInTool:false,chartProps: 'otherProps'},
            {base:'area',internalType:'bla',name:'stream',showInTool:false,chartProps: 'areaProps'},
            {base:'extension',internalType:'bla',name:'extension',showInTool:false,chartProps: 'otherProps'},
                    {base:'bar',internalType:'bla',name:'mekko',showInTool:false,chartProps: 'otherProps'},
            {base:'datagrid',internalType:'datagrid',name:'datagrid',showInTool:false,chartProps: 'dataGridProps'}
     ],
     isCreated:false}

];

tdginfo.chartIconsSize = {
    width: 100,
    height: 120
};

tdginfo.knownBuckets = ['LONGITUDE','LATITUDE','SLIDER','LOCATION','GEOMETRY','COLOR','SIZE',
    'COLUMN','DETAIL','LOWER','MAX','MEDIAN','MIN','NULL','PAGE','ROW','SHAPE','SLIDER',
        'TOOLTIP', 'UPPER', 'X-AXIS', 'Y-AXIS', 'MEASURE','EMPTY','ACTIVE_NOTUSED'];

tdginfo.blainfo = {
    "to": {
        "pie": {
            "X-AXIS": "COLOR",
            "Y-AXIS": "MEASURE",
            "SIZE": "SIZE",
            "COLOR": "COLOR",
            "TOOLTIP": "TOOLTIP",
            "COLUMN": "COLUMN",
            "ROW": "ROW"
        },
        "heatmap": {
            "Y-AXIS" :"COLOR",
            "X-AXIS" : "X-AXIS",
            "COLOR" : "COLOR",
            "TOOLTIP" : "TOOLTIP",
            "ROW" : "ROW",
            "COLUMN" : "COLUMN"
        }
    },
    "columns": {
        "COLOR": {
            "allowMultiple": false
        },
        "X-AXIS": {
            "allowMultiple": true
        },
        "Y-AXIS": {
            "allowMultiple": true
        },
        "COLUMN": {
            "allowMultiple": true
        },
        "ROW": {
            "allowMultiple": true
        },
        "SIZE": {
            "allowMultiple": true
        },
        "TOOLTIP": {
            "allowMultiple": true
        }

    }
};

tdginfo.p2bla = {
        "COLOR": "X-AXIS",
        "MEASURE": "Y-AXIS",
        "SIZE": "SIZE",
        "TOOLTIP": "TOOLTIP",
        "COLUMN": "COLUMN",
        "ROW": "ROW"
    };

tdginfo.iaChartMappings = null;

tdginfo.chartMappings = {
    "heatmap": {
        "columns": {
            "COLOR": {
                "allowMultiple": false
            },
            "X-AXIS": {
                "allowMultiple": false
            },
            "Y-AXIS": {
                "allowMultiple": false
            },
            "COLUMN": {
                "allowMultiple": true
            },
            "ROW": {
                "allowMultiple": true
            },
            "SIZE": {
                "allowMultiple": true
            },
            "TOOLTIP": {
                "allowMultiple": true
            }
        }
    },
    "bubble": {
        "columns": {
            "COLOR": {
                "allowMultiple": false
            },
            "X-AXIS": {
                "allowMultiple": false
            },
            "Y-AXIS": {
                "allowMultiple": false
            },
            "COLUMN": {
                "allowMultiple": true
            },
            "ROW": {
                "allowMultiple": true
            },
            "SIZE": {
                "allowMultiple": true
            },
            "TOOLTIP": {
                "allowMultiple": true
            }
        }
    },
    "scatter": {
        "columns": {
            "COLOR": {
                "allowMultiple": false
            },
            "X-AXIS": {
                "allowMultiple": false
            },
            "Y-AXIS": {
                "allowMultiple": false
            },
            "COLUMN": {
                "allowMultiple": true
            },
            "ROW": {
                "allowMultiple": true
            },
            "SIZE": {
                "allowMultiple": true
            },
            "TOOLTIP": {
                "allowMultiple": true
            }
        }
    },
    "bar" : tdginfo.blainfo,
    "line" : tdginfo.blainfo,
    "area" : tdginfo.blainfo,
    "pie" : {
        "columns": {
            "COLOR" : {
                "allowMultiple":false
            },
            "MEASURE" : {
                "allowMultiple": true
            },
            "COLUMN" : {
                "allowMultiple": true
            },
            "ROW" : {
                "allowMultiple": true
            },
            "SIZE" : {
                "allowMultiple": true
            },
            "TOOLTIP" : {
                "allowMultiple": true
            }

        },
        "to" : {
            "bar": tdginfo.p2bla,
            "line": tdginfo.p2bla,
            "area": tdginfo.p2bla,
            "scatter": {
                "COLOR": "COLOR",
                "MEASURE": "Y-AXIS",
                "SIZE": "SIZE",
                "TOOLTIP": "TOOLTIP",
                "COLUMN": "COLUMN",
                "ROW": "ROW"
            },
            "bubble": {
                "COLOR": "COLOR",
                "MEASURE": "Y-AXIS",
                "SIZE": "SIZE",
                "TOOLTIP": "TOOLTIP",
                "COLUMN": "COLUMN",
                "ROW": "ROW"
            },
            "heatmap": {
                "COLOR": "Y-AXIS",
                "MEASURE": "COLOR",
                "SIZE": "X-AXIS",
                "TOOLTIP": "TOOLTIP",
                "COLUMN": "COLUMN",
                "ROW": "ROW"
            }
        }

    }
};

tdginfo.dataGridProps = {
    mouseOverIndicator: {
        color: '9%',
        border: {
            width: 1,
            color: 'rgb(200,200,250)'
        }
    },
    dataSelection: {
        enabled: true,
        selectionMode: ['click', 'ctrlClick','dragRect'],
        selectionRect:{
            fill : ''
        },
        selectedColor : 'rgba(0, 0, 200, 0.1)',
        unselectedColor :undefined
    }

};

tdginfo.dataSelectionDefault = {
    enabled: true,
    selectionMode: ['click', 'ctrlClick', 'dragRect'],
    unselectedColor: '85%',
    selectionRect: {
        fill: 'rgba(120, 120, 180, 0.45)',
        border: {
            width: 1,
            color: 'rgba(120, 120, 205, 0.8)'
        }
    }

    //selectedColor: '30%', 
};


tdginfo.chartIconsProps = {
    title: {
        font: 'bold 9pt Sans-Serif',
        color: "#000000"
    },
    border: {
        width: 0,
        color: 'black'
    },
    legend: {
        visible: false
    },
    introAnimation: {
        enabled: false
    },
    yaxis: {
        labels: {
            visible: false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    xaxis:{
        labels:{
            visible:false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    zaxis:{
        labels:{
            visible:false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    y2axis: {
        labels: {
            visible: false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    xaxisOrdinal: {
        labels: {
            visible: false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    zaxisOrdinal: {
        labels: {
            visible: false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    xaxisNumeric: {
        labels: {
            visible: false
        },
        title: {
            visible:false
        },
        labels: {
            visible: false
        },
        labelLayout:{
            scroll: false
        }
    },
    dataLabels: {
        visible: false
    },
    pieProperties: {
        label: {
            visible: false
        },
        totalLabel: {
            visible: false
        }
    }
};

tdginfo.tdstackProps = {
    blaProperties: {
        seriesLayout: "stacked",
        orientation: "horizontal",
        depth: 20
    }
};

tdginfo.radarareaProps = {
    legend: {
        visible: true
    },
    blaProperties: {
        seriesLayout: "stacked"
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultTickColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: false
            },
            aboveRisers: true
        },
        labels: { color: TDGDefaultLabelColor }
    },

    xaxisOrdinal: {
        majorGrid: {
            visible: true,
            aboveRisers: true,
            lineStyle: {
                width: 1,
                color: TDGDefaultGridlineColor
            },
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            }
        },

        labels: { color: TDGDefaultLabelColor }
    },
    polarProperties: {
        straightGridLines: true,
        extrudeAxisLabels: true,
        drawAsArea: true
    }
};

tdginfo.waterfallProps = {
    legend: {
        visible: false
    },
    blaProperties: {
        orientation: "vertical"
    }
};

tdginfo.histogramProps = {
    riserBevel: 'bevel',
    legend: {
        visible: false
    },
    blaProperties: {
        orientation: "vertical"
    }
};

tdginfo.tdpieDepthProps = {
    riserBevel: '',
    riserShadow: { angle: 345, distance: 8, blur: .2 },
    //    dataSubset:{startGroup:0,stopGroup:1},
    depth: 25,
    pieProperties: {
        feelerLine: { visible: false },
        holeSize: 0,
        skew: 35
    }
};

tdginfo.tddonutDepthProps = {
    riserBevel: '',
    riserShadow: { angle: 345, distance: 8, blur: .2 },
    depth: 25,
    pieProperties: {
        feelerLine: { visible: false },
        holeSize: '40%',
        skew: 35
    }
};

tdginfo.tddonutCylinderProps = {
    riserBevel: 'cylinder',
    //riserShadow:{angle: 345, distance: 8, blur: .2},
    depth: 0,
    pieProperties: {
        holeSize: '40%',
        skew: 35
    }
};

tdginfo.tddonutProps = {
    //riserShadow:{angle: 345, distance: 8, blur: .2},
    depth: 0,
    pieProperties: {
        holeSize: '40%',
        skew: 35
    }
};

tdginfo.defaultProps = {
    blaProperties: {
        seriesLayout: "absolute",
        lineConnection: "curved",
        orientation: "vertical"
    },
    htmlToolTip: { enabled: true, snap: true },
    legend: {
        visible: true,
        position: 'bottom'
    },
    yaxis: {
        majorGrid: {
            lineStyle: {
                color: "#c8c8c8"
            },
            aboveRisers: false
        }
    },
    series: [
        {
            series: 'all',
            marker: {
                visible: true,
                size: 10,
                shape: 'circle'
            }
        }
    ],
    border: { width: 0, color: 'transparent' },
    ibiColorTable: ["#0079C1", "#EE2E23", "#b60CB0", "#A3C366", "#A1a1d9",
                    "#ffeb95", "#7faddc", "#2e2eab", "#8803a4", "#09b8ce", "#107a16",
                    "#6c95c8", "#3c3124", "#bfdaaa", "#a96dcd", "#1317a2", "#4e2b25",
                    "#ffef79", "#f0abc4", "#424649", "#9ed5f3", "#c3da7d", "#d28fff",
                    "#e67958", "#1317a2", "#ffef00", "#009852", "#ce0036", "#f09f61",
                    "#773920"]
};

tdginfo.pieProps = {
    interaction: {
        click: 'otherSliceDrillDown'
    },
    htmlToolTip: { enabled: true, snap: true },
    mouseOverIndicator: {
        enabled: true
    },
    labelPadding: 9,
    riserShadow: false,
    riserBevel: 'bevel',
    pieProperties: {
        holeSize: 0,
        //            		rotation: -270,
        explodeClick: { enabled: true, duration: 501, distance: 30, limitExplodeCount: true },
        skew: 0,
        label: {
            visible: true,
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        },
        totalLabel: {
            visible: false,
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        },
        feelerLine: {
            visible: true,
            width: 1,
            color: TDGDefaultTickColor,
            dash: ''
        },
        otherSlice: {
            threshold: 'top10',
            legendLabel: 'Other',
            color: TDGDefaultGridlineColor,
            marker: {
                border: {
                    width: 1,
                    color: 'black'
                }
            },
            border: {
                width: 1,
                color: 'transparent'
            }
        }
    },

    dataLabels: {
        visible: true,
        position: 'outside',
        font: '9pt Sans-Serif',
        color: TDGDefaultLabelColor,
        displayMode: '%',
        numberFormat: '#%'
    },

    legend: {
        visible: true,
        position: 'right',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    series: [
        {
            color: undefined,
            series: 'all',
            showDataValues: true,
            bevel: 'bevel'
        }
    ],
    border: { width: 0, color: 'transparent' },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor10, TDGMarkerColor11,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor16, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor3, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17],

    ibiOldColorTable: ["linear-gradient(0%,100%,0%,0%, 0% #DB86D8, 100% #b60cb0)",
                       "linear-gradient(0%,100%,0%,0%, 0% #D1E1B3, 100% #a3c366)",
                       "linear-gradient(0%,100%,0%,0%, 0% #7EBCE0, 100% #0079c1)",
                       "linear-gradient(0%,100%,0%,0%, 0% #D0D0EC, 100% #B6B6E1)",
                       "linear-gradient(0%,100%,0%,0%, 0% #FFF5CA, 100% #ffeb95)",
                       "linear-gradient(0%,100%,0%,0%, 0% #B7D3F2, 100% #7faddc)",
                       "linear-gradient(0%,100%,0%,0%, 0% #F79791, 100% #ee2e23)",
                       "linear-gradient(0%,100%,0%,0%, 0% #8A8BD7, 100% #2e2eab)",
                       "linear-gradient(0%,100%,0%,0%, 0% #C97ED1, 100% #8803a4)",
                       "linear-gradient(0%,100%,0%,0%, 0% #7CE7E9, 100% #09b8ce)"]
};

tdginfo.hbarProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "horizontal"
    }
};

tdginfo.vbarProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "vertical"
    }
};
tdginfo.vbarSidebySideProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "vertical"
    }
};
tdginfo.vbarStackedProps = {
    blaProperties: {
        seriesLayout: "stacked",
        orientation: "vertical"
    }
};
tdginfo.vbarPercentProps = {
    blaProperties: {
        seriesLayout: "percent",
        orientation: "vertical"
    }
};
tdginfo.hbarSidebySideProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "horizontal"
    }
};
tdginfo.hbarStackedProps = {
    blaProperties: {
        seriesLayout: "stacked",
        orientation: "horizontal"
    }
};
tdginfo.hbarPercentProps = {
    blaProperties: {
        seriesLayout: "percent",
        orientation: "horizontal"
    }
};

tdginfo.bar3dProps = {
    interaction: {
        mousedrag: 'rotate'
    },
    dataLabels: {
        color: 'transparent'
    },
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },
    riserDepthGap: 0.3,
    blaProperties: {
        barGroupGapWidth: 0.3
    }
};

tdginfo.vbarSidebySideDepthProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "vertical"
    },
    depth: 18,
    riserBevel: 'darken',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.vbarStackedDepthProps = {
    blaProperties: {
        seriesLayout: "stacked",
        orientation: "vertical"
    },
    depth: 18,
    riserBevel: '',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.vbarPercentDepthProps = {
    blaProperties: {
        seriesLayout: "percent",
        orientation: "vertical"
    },
    depth: 18,
    riserBevel: '',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.hbarSideBySideDepthProps = {
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "horizontal"
    },
    depth: 18,
    riserBevel: 'darken',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.hbarStackedDepthProps = {
    blaProperties: {
        seriesLayout: "stacked",
        orientation: "horizontal"
    },
    depth: 18,
    riserBevel: 'darken',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.hbarPercentDepthProps = {
    blaProperties: {
        seriesLayout: "percent",
        orientation: "horizontal"
    },
    depth: 18,
    riserBevel: 'darken',
    chartFrame: { fill: { color: 'linear-gradient(0,0,100%,100%, 20% #CCCCCC, 95% #888888)' } },

    yaxis: {
        baseLineStyle: {
            color: '#888888'
        }
    }
};

tdginfo.vlineStraightProps = {
    blaProperties: {
        lineConnection: "straight"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible:false
    }
        }
    ]
};

tdginfo.vlineCurvedProps = {
    blaProperties:{
        lineConnection: "curved"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible:false
            }
        }
    ]
};

tdginfo.vlineStraightMarkersProps = {
    blaProperties:{
        lineConnection: "straight"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible:true
            }
        }
    ]
};
tdginfo.vlineCurvedMarkersProps = {
    blaProperties:{
        lineConnection: "curved"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible:true
            }
        }
    ]
};

tdginfo.vlineStraightNoMarkersProps = {
    blaProperties: {
        lineConnection: "straight"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible: false
            }
        }
    ]
};

tdginfo.vlineCurvedNoMarkersProps = {
    blaProperties: {
        lineConnection: "curved"
    },
    series: [
        {
            series: 'all',
            marker: {
                visible: false
            }
        }
    ]
};

tdginfo.vlineStepProps = {
    blaProperties: {
        lineConnection: "stepAfter"
    }
};

tdginfo.funnelProps = {
    dataSubset: { startGroup: 0, stopGroup: 1 },
    riserBevel: 'cylinder',
    legend: {
        visible: true,
        position: 'right'
    },
    funnelProperties: {
        topWidth: '90%',
        baseWidth: '12%',
        riserGap: '5%'
    }
};

tdginfo.pyramidProps = {
    dataSubset: { startGroup: 0, stopGroup: 1 },
    riserBevel: 'lighten',
    legend: {
        visible: true,
        position: 'right'
    },
    funnelProperties: {
        topWidth: '1%',
        baseWidth: '90%',
        riserGap: '5%'
    }
};

tdginfo.heatmapProps = {
    legend: {
        visible: true,
        position: 'right',
        lineStyle: {
            color: 'transparent'
        }
    }
};

tdginfo.bubbleProps = {
    riserBevel: 'lighten',
    dataLabels: {
        visible: false
    },
    legend: {
        visible: false,
        position: 'bottom',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    xaxisNumeric: {
        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },

        labels: { color: TDGDefaultLabelColor }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultLabelColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: true,
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
        {
            series: 'all',
            marker: { size: 25, border: { color: 'transparent' }, shape: "circle" }
        }
    ],
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 5000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor10, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17]
};

tdginfo.barProps = {
    riserBevel: 'bevel',
    blaProperties: {
        seriesLayout: "sideBySide",
        orientation: "vertical"
    },
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'bottom',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    xaxisOrdinal: {
        majorGrid: {
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            }
        },

        labels: { color: TDGDefaultLabelColor }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultTickColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: false
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
    {
        series: 'all', marker: { shape: "square" },
        bevel: 'bevel'
    }
    ],
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 1000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor10, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17]
};

tdginfo.lineProps = {
    riserShadow: false,
    //   {
    //       angle: 315,
    //       distance: 12,
    //       blur: 0.12
    //   },

    blaProperties: {
        seriesLayout: "absolute",
        lineConnection: "curved",
        orientation: "vertical"
    },
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'bottom',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    xaxisOrdinal: {
        majorGrid: {
            aboveRisers: false,
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            }
        },

        labels: { color: TDGDefaultLabelColor }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultTickColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: false
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
         {
             series: "all",
             border: { width: 3 },
             marker: {
                 fillMode: "seriesWhite",
                 visible: true,
                 size: TDGDefaultMarkerSize + 1,
                 border: { width: 3 },
                 shape: 'circle'
             }
         }
    ],

    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 1000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor10, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17]
};

tdginfo.areaProps = {
    blaProperties: {
        seriesLayout: "absolute",
        orientation: "vertical",
        areaFillEffect: "70%"
    },
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'bottom'
    },
    mouseOverIndicator: {
        enabled: true
    },
    yaxis: {
        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            aboveRisers: false
        }
    },
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 1000
    },
    ibiColorTable: ["linear-gradient(0%,0%,0%,100%, 0% rgba(126,188,224,0.7), 100% rgba(0,121,193,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(247,151,145,0.7), 100% rgba(238,46,35,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(219,134,216,0.7), 100% rgba(182,12,176,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(209,225,179,0.7), 100% rgba(163,195,102,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(208,208,236,0.7), 100% rgba(182,182,225,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(255,245,202,0.7), 100% rgba(255,235,149,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(183,211,242,0.7), 100% rgba(127,173,220,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(138,139,215,0.7), 100% rgba(46,46,171,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(201,126,209,0.7), 100% rgba(136,3,164,0.7))",
                    "linear-gradient(0%,0%,0%,100%, 0% rgba(124,231,233,0.7), 100% rgba(9,184,206,0.7))"]
};

tdginfo.otherProps = {
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'bottom'
    },
    mouseOverIndicator: {
        enabled: true
    },
    xaxisOrdinal: {
        majorGrid: {
            aboveRisers: false,
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            }
        },

        labels: { color: TDGDefaultLabelColor }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultTickColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: false
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },

    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 1000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor10, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17]
};

tdginfo.scatterProps = {
    trendline: {
        enabled: false,
        line: {
            color: TDGMarkerColorDark0
        }
    },
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'right',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultLabelColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: true,
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    xaxisNumeric: {
        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },

        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
        {
            series: "all", marker: { fillMode: "seriesHollow", size: TDGDefaultMarkerSize, border: { width: 2 } }
        },
        { series: 0, marker: { shape: "circle" } },
        { series: 1, marker: { shape: "triangle" } },
        { series: 2, marker: { shape: "diamond", size: TDGDefaultMarkerSize + 2 } },
        { series: 3, marker: { shape: "square", size: TDGDefaultMarkerSize } },
        { series: 4, marker: { shape: "fiveStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 5, marker: { shape: "hexagon", size: TDGDefaultMarkerSize + 2 } },
        { series: 6, marker: { shape: "triangle", rotation: 180 } },
        { series: 7, marker: { shape: "sixStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 8, color: TDGMarkerColor0, marker: { shape: "circle" } },
        { series: 9, color: TDGMarkerColor1, marker: { shape: "triangle" } },
        { series: 10, color: TDGMarkerColor2, marker: { shape: "diamond", size: TDGDefaultMarkerSize + 2 } },
        { series: 11, color: TDGMarkerColor3, marker: { shape: "square", size: TDGDefaultMarkerSize - 0 } },
        { series: 12, color: TDGMarkerColor4, marker: { shape: "fiveStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 13, color: TDGMarkerColor5, marker: { shape: "hexagon", size: TDGDefaultMarkerSize + 2 } },
        { series: 14, color: TDGMarkerColor6, marker: { shape: "triangle", rotation: 180 } },
        { series: 15, color: TDGMarkerColor7, marker: { shape: "sixStar", size: TDGDefaultMarkerSize + 2 } }
    ],
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 50000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4, TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7,
        TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4, TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7]
};

tdginfo.mapProps = {
    trendline: {
        enabled: false,
        line: {
            color: TDGMarkerColorDark0
        }
    },
    dataLabels: {
        visible: false
    },
    legend: {
        visible: true,
        position: 'right',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultLabelColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: true,
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    xaxisNumeric: {
        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },

        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
        {
            series: "all", marker: { fillMode: "seriesHollow", size: TDGDefaultMarkerSize, border: { width: 2 } }
        },
        { series: 0, marker: { shape: "circle" } },
        { series: 1, marker: { shape: "triangle" } },
        { series: 2, marker: { shape: "diamond", size: TDGDefaultMarkerSize + 2 } },
        { series: 3, marker: { shape: "square", size: TDGDefaultMarkerSize } },
        { series: 4, marker: { shape: "fiveStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 5, marker: { shape: "hexagon", size: TDGDefaultMarkerSize + 2 } },
        { series: 6, marker: { shape: "triangle", rotation: 180 } },
        { series: 7, marker: { shape: "sixStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 8, color: TDGMarkerColor0, marker: { shape: "circle" } },
        { series: 9, color: TDGMarkerColor1, marker: { shape: "triangle" } },
        { series: 10, color: TDGMarkerColor2, marker: { shape: "diamond", size: TDGDefaultMarkerSize + 2 } },
        { series: 11, color: TDGMarkerColor3, marker: { shape: "square", size: TDGDefaultMarkerSize - 0 } },
        { series: 12, color: TDGMarkerColor4, marker: { shape: "fiveStar", size: TDGDefaultMarkerSize + 2 } },
        { series: 13, color: TDGMarkerColor5, marker: { shape: "hexagon", size: TDGDefaultMarkerSize + 2 } },
        { series: 14, color: TDGMarkerColor6, marker: { shape: "triangle", rotation: 180 } },
        { series: 15, color: TDGMarkerColor7, marker: { shape: "sixStar", size: TDGDefaultMarkerSize + 2 } }
    ],
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 5000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4, TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7,
                    TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4, TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7]
};

tdginfo.bubblemapProps = {
    riserBevel: 'lighten',
    dataLabels: {
        visible: false
    },
    legend: {
        visible: false,
        position: 'bottom',
        markerSize: TDGDefaultMarkerSize,
        labels: {
            font: '8pt Sans-Serif',
            color: TDGDefaultLabelColor
        }
    },
    xaxisNumeric: {
        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },

        labels: { color: TDGDefaultLabelColor }
    },
    yaxis: {
        baseLineStyle: {
            width: 1,
            color: TDGDefaultLabelColor,
            dash: ''
        },

        majorGrid: {
            lineStyle: {
                color: TDGDefaultGridlineColor
            },
            ticks: {
                visible: true,
                lineStyle: {
                    color: TDGDefaultTickColor
                }
            },
            aboveRisers: false
        },
        labels: { color: TDGDefaultLabelColor }
    },
    mouseOverIndicator: {
        enabled: true
    },
    series: [
        {
            series: 'all',
            marker: { size: 25, border: { color: 'transparent' }, shape: "circle" }
        }
    ],
    border: { width: 0, color: 'transparent' },
    activeProps: {
        maxRecords: 5000
    },
    ibiColorTable: [TDGMarkerColor0, TDGMarkerColor1, TDGMarkerColor2, TDGMarkerColor3, TDGMarkerColor4,
                    TDGMarkerColor5, TDGMarkerColor6, TDGMarkerColor7, TDGMarkerColor8, TDGMarkerColor9,
                    TDGMarkerColor10, TDGMarkerColor11, TDGMarkerColor12, TDGMarkerColor13, TDGMarkerColor14,
                    TDGMarkerColor15, TDGMarkerColor16, TDGMarkerColor17]
};
}

if((this.ibiMsgStr !== null)&&(typeof this.ibiMsgStr !== "undefined"))
    tdginfoInit(this.ibiMsgStr);
