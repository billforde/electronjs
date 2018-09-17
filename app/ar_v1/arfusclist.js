/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arfusclist.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 160610 1256 hms 180534 Remove tab characters from source files
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arfusclist"]="$Revision: 20160610.1256 $";

var fcinfo = new Object();
fcinfo.fcCategory = [                 
                {category:this.ibiMsgStr['crtbar'], //Bar/Column Category
                chartList:[{swfName:'FlexBar', label:'Default Bar'},
                    {swfName:'Column2D', label:'Column 2D', chartParams: 'ssParams'},
                    {swfName:'Column3D', label:'Column 3D', chartParams: 'ssParams'},
                    {swfName:'MSColumn2D', label:'Multi-series Column 2D', chartParams: 'defaultParams'},
                    {swfName:'MSColumn3D', label:'Multi-series Column 3D', chartParams: 'defaultParams'},
                    {swfName:'StackedColumn2D', label:'Stacked Column 2D', chartParams: 'stackParams'},
                    {swfName:'StackedColumn3D', label:'Stacked Column 3D', chartParams: 'stackParams'},
                    {swfName:'ScrollColumn2D', label:'Scroll Multi-Series Column 2D', chartParams: 'defaultParams'},
                    {swfName:'ScrollStackedColumn2D', label:'Scroll Stacked Column 2D', chartParams: 'stackParams'},                               
                    {swfName:'LogMSColumn2D', label:'Logarithmic Multi-series Column 2D', chartParams: 'defaultParams'},
                    {swfName:'InverseMSColumn2D', label:'Inverse y-Axis Multi-series Column 2D', chartParams: 'defaultParams'},                              
                    //{swfName:'MSColumnLine3D', label:'Multi-series Column 3D Line Single Y'},
                    //{swfName:'MSColumn3DLineDY', label:'Multi-series Column 3D Line Dual Y'},                  
                    {swfName:'Bar2D', label:'Bar 2D', chartParams: 'ssParams'},
                    {swfName:'MSBar2D', label:'Multi-series Bar 2D', chartParams: 'defaultParams'},
                    {swfName:'MSBar3D', label:'Multi-series Bar 3D', chartParams: 'defaultParams'},
                    {swfName:'StackedBar2D', label:'Stacked Bar 2D', chartParams: 'stackParams'},
                    {swfName:'StackedBar3D', label:'Stacked Bar 3D', chartParams: 'stackParams'}],
                isCreated:false},  
                        
                {category:this.ibiMsgStr['crtpie'],  //Pie Category
                chartList:[{swfName:'FlexPie', label:'Default Pie'},
                    {swfName:'Pie2D', label:'Pie 2D', chartParams: 'pieParams'},
                    {swfName:'Pie3D', label:'Pie 3D', chartParams: 'pieParams'},
                    {swfName:'Doughnut2D', label:'Doughnut 2D', chartParams: 'pieParams'},
                    {swfName:'Doughnut3D', label:'Doughnut 3D', chartParams: 'pieParams'}],
                isCreated:false},
                        
                {category:this.ibiMsgStr['crtline'], //Line Category
                chartList:[{swfName:'FlexLine', label:'Default Line', chartParams: 'defaultParams'},
                    {swfName:'Line', label:'Line 2D', chartParams: 'lineParams'},
                    {swfName:'MSLine', label:'Multi-series Line 2D', chartParams: 'defaultParams'},
                    {swfName:'ScrollLine2D', label:'Scroll Multi-Series Line 2D', chartParams: 'defaultParams'},
                    {swfName:'LogMSLine', label:'Logarithmic Multi-series Line 2D', chartParams: 'defaultParams'},                               
                    {swfName:'InverseMSLine', label:'Inverse y-Axis Multi-series Line 2D', chartParams: 'defaultParams'},                                
                    {swfName:'Spline', label:'Spline', chartParams: 'lineParams'},
                    {swfName:'MSSpline', label:'Multi-series Spline', chartParams: 'defaultParams'},
                    {swfName:'Area2D', label:'Area 2D', chartParams: 'areaParams'},
                    {swfName:'MSArea', label:'Multi-series Area 2D', chartParams: 'stackParams'},
                    {swfName:'StackedArea2D', label:'Stacked Area 2D', chartParams: 'stackParams'},
                    {swfName:'ScrollArea2D', label:'Scroll Multi-Series Area 2D', chartParams: 'stackParams'},
                    {swfName:'InverseMSArea', label:'Inverse y-Axis Multi-series Area', chartParams: 'stackParams'},                               
                    {swfName:'SplineArea', label:'Spline Area', chartParams: 'areaParams'},                               
                    {swfName:'MSSplineArea', label:'Multi-series Spline Area', chartParams: 'stackParams'}],
                isCreated:false},                       
                    
                {category:this.ibiMsgStr['crtscat'], //Scatter/Bubble category
                chartList:[{swfName:'FlexScatter', label:'Default Scatter', chartParams: 'defaultParams'},
                    {swfName:'Scatter', label:'Scatter(XY Plot)', chartParams: 'scatParams'},                 
                    {swfName:'Bubble', label:'Bubble', chartParams: 'pieParams'}], 
                    isCreated:false}, 
                        
                {category:this.ibiMsgStr['crtother'], //Other category
                    chartList:[{swfName:'Funnel', label:'Funnel', chartParams: 'ssParams'}, 
                    {swfName:'Pyramid', label:'Pyramid', chartParams: 'ssParams'},
                    {swfName:'Radar', label:'Radar', chartParams: 'defaultParams'}],
                    isCreated:false} 
                ];

fcinfo.scatParams = '{'+
    '"caption":"%caption%",'+ 
    '"anchorBorderThickness":"1",'+ 
    '"anchorRadius":"8",'+ 
     '"alternateHGridAlpha":"100",'+ 
     '"alternateVGridAlpha":"100",'+ 
        '"alternateHGridColor":"f9f9fa",'+
        '"alternateVGridColor":"f9f9fa",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",' + 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"canvasBaseColor":"BBCCDD",'+ 
    '"canvasBgColor":"ffffff",'+ 
    '"canvasPadding":"15",'+ 
    '"decimals":"2",'+ 
    '"divLineColor":"818181",'+ 
    '"drawAnchors":"1",'+ 
    '"formatNumberScale":"0",'+ 
    '"legendAllowDrag":"1",'+ 
    '"legendBorderAlpha":"0",'+ 
    '"legendBorderColor":"FFFFFF",'+ 
    '"legendPadding":"10",'+ 
    '"legendScrollBarColor":"FCFCFC",'+ 
    '"legendScrollBgColor":"afabaa",'+ 
    '"legendScrollBtnColor":"4d4d4d",'+ 
    '"legendShadow":"1",'+ 
    '"lineThickness":"2",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"2D66B6, 07C6E2, EDC32C, 3A587D, 8AB595, 83AACB, BFAD87, A0ABBB, 8803a4, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"plotFillRatio":"25",'+
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showAlternateVGridColor":"1",'+ 
    '"showPlotBorder":"0",'+ 
    '"showShadow":"1",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"1",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneShowBorder":"0",'+ 
    '"zeroPlaneThickness":"3"},';

/*  MSColumn2D, MSBar2D, MSLine (mapped  MSColumn3D, MSBar3D, ScrollColumn2D, ScrollLine2D) */
fcinfo.defaultParams = '{'+
    '"caption":"%caption%",'+ 
    '"anchorBorderThickness":"0",'+ 
    '"anchorRadius":"0",'+ 
     '"alternateHGridAlpha":"100",'+ 
     '"alternateVGridAlpha":"100",'+ 
        '"alternateHGridColor":"f9f9fa",'+
        '"alternateVGridColor":"f9f9fa",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",' + 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"canvasBaseColor":"BBCCDD",'+ 
    '"canvasBgColor":"ffffff",'+ 
    '"canvasPadding":"15",'+ 
    '"decimals":"2",'+ 
    '"divLineColor":"818181",'+ 
    '"drawAnchors":"1",'+ 
    '"formatNumberScale":"0",'+ 
    '"legendAllowDrag":"1",'+ 
    '"legendBorderAlpha":"0",'+ 
    '"legendBorderColor":"FFFFFF",'+ 
    '"legendPadding":"10",'+ 
    '"legendScrollBarColor":"FCFCFC",'+ 
    '"legendScrollBgColor":"afabaa",'+ 
    '"legendScrollBtnColor":"4d4d4d",'+ 
    '"legendShadow":"1",'+ 
    '"lineThickness":"2",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"2D66B6, 07C6E2, EDC32C, 3A587D, 8AB595, 83AACB, BFAD87, A0ABBB, 8803a4, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"plotFillRatio":"25",'+
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showAlternateVGridColor":"1",'+ 
    '"showPlotBorder":"0",'+ 
    '"showShadow":"1",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"0",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneShowBorder":"0",'+ 
    '"zeroPlaneThickness":"3"},';

/*  stacked: StackedColumn2D, StackedBar2D, MSArea, StackedArea2D (mapped StackedColumn3D, StackedBar3D, ScrollStackedColumn2D, ScrollArea2D, InverseMSArea, MSSplineArea) */
fcinfo.stackParams = '{'+
    '"caption":"%caption%",'+ 
    '"anchorBorderThickness":"0",'+ 
    '"anchorRadius":"0",'+ 
     '"alternateHGridAlpha":"100",'+ 
     '"alternateVGridAlpha":"100",'+ 
             '"alternateHGridColor":"f9f9fa",'+ 
             '"alternateVGridColor":"f9f9fa",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",' + 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"canvasBaseColor":"BBCCDD",'+ 
    '"canvasBgColor":"ffffff",'+ 
    '"canvasPadding":"15",'+ 
    '"decimals":"2",'+ 
    '"divLineColor":"818181",'+ 
    '"formatNumberScale":"0",'+ 
    '"legendAllowDrag":"1",'+ 
    '"legendBorderAlpha":"0",'+ 
    '"legendBorderColor":"FFFFFF",'+ 
    '"legendPadding":"10",'+ 
    '"legendScrollBarColor":"FCFCFC",'+ 
    '"legendScrollBgColor":"afabaa",'+ 
    '"legendScrollBtnColor":"4d4d4d",'+ 
    '"legendShadow":"1",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"7EBCE0, F79791, DB86D8, D1E1B3, D0D0EC, FFF5CA, B7D3F2, 8A8BD7, C97ED1, 7CE7E9, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"plotBorderAlpha":"50",'+ 
    '"plotBorderColor":"4d4d4d",'+ 
    '"plotBorderThickness":"1",'+ 
    '"plotFillAlpha":"50",'+ 
    '"plotFillRatio":"25",'+ 
    '"plotGradientColor":"ffffff",'+ 
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showAlternateVGridColor":"1",'+ 
    '"showPlotBorder":"1",'+ 
    '"showShadow":"0",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"0",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneShowBorder":"0",'+ 
    '"zeroPlaneThickness":"3"},';

/* single series: Column2D, Bar2D (mapped Column3D, Funnel, Pyramid) */
fcinfo.ssParams = '{'+
    '"caption":"%caption%",'+ 
     '"alternateHGridAlpha":"100",'+ 
     '"alternateVGridAlpha":"100",'+ 
        '"alternateHGridColor":"f9f9fa",'+ 
        '"alternateVGridColor":"f9f9fa",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",' + 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"canvasBaseColor":"BBCCDD",'+ 
    '"canvasBgColor":"ffffff",'+ 
    '"decimals":"2",'+ 
    '"divLineColor":"818181",'+ 
    '"formatNumberScale":"0",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"2D66B6, 07C6E2, EDC32C, 3A587D, 8AB595, 83AACB, BFAD87, A0ABBB, 8803a4, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showAlternateVGridColor":"1",'+ 
    '"showPlotBorder":"0",'+ 
    '"showShadow":"1",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"0",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneShowBorder":"0",'+ 
    '"zeroPlaneThickness":"3"},';

/* Line (mapped Spline) */
fcinfo.lineParams = '{'+
    '"caption":"%caption%",'+ 
    '"alternateHGridAlpha":"100",'+ 
    '"alternateHGridColor":"f9f9fa",'+ 
    '"anchorBgColor":"0079c1",'+ 
    '"anchorBorderColor":"0079c1",'+ 
    '"anchorBorderThickness":"0",'+ 
    '"anchorRadius":"3",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",'+ 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"decimals":"2",'+ 
    '"drawAnchors":"1",'+ 
/*    '"formatNumberScale":"0",'+ */
    '"lineColor":"0079c1",'+ 
    '"lineThickness":"2",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"2D66B6, 07C6E2, EDC32C, 3A587D, 8AB595, 83AACB, BFAD87, A0ABBB, 8803a4, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showShadow":"1",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"0",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneThickness":"3"},';

/* Area (mapped SplineArea) */
fcinfo.areaParams = '{'+
    '"caption":"%caption%",'+ 
    '"alternateHGridAlpha":"100",'+ 
    '"alternateHGridColor":"f9f9fa",'+ 
    '"anchorBorderThickness":"0",'+ 
    '"anchorRadius":"0",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",'+ 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"decimals":"2",'+ 
    '"drawAnchors":"1",'+ 
/*    '"formatNumberScale":"0",'+ */
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"7EBCE0, F79791, DB86D8, D1E1B3, D0D0EC, FFF5CA, B7D3F2, 8A8BD7, C97ED1, 7CE7E9, DC2F77, FE7B6B, 37CABA, A53C3E, FB3A60, 9DD358, E6833A, 6C488F, 8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    '"plotBorderAlpha":"100",'+ 
    '"plotBorderColor":"0079c1",'+ 
    '"plotBorderThickness":"2",'+ 
    '"plotFillAlpha":"100",'+ 
    '"plotFillColor":"0079c1",'+ 
    '"plotGradientColor":"ffffff",'+ 
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showShadow":"0",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"0",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"zeroPlaneThickness":"3"},';

/* Pie2D, Doughnut2D, Bubble (mapped Pie3D, Doughnut3D) */
fcinfo.pieParams = '{'+
    '"caption":"%caption%",'+ 
    '"alternateHGridAlpha":"100",'+ 
    '"alternateHGridColor":"f9f9fa",'+ 
    '"baseFont":"Arial",'+ 
    '"baseFontColor":"000000",'+ 
    '"baseFontSize":"10",'+ 
    '"bgColor":"e5e5e5,ffffff",'+ 
    '"clipBubbles":"1",'+ 
    '"decimals":"2",'+ 
    //'"doughnutRadius":"50",'+ 
    '"enableSmartLabels":"0",'+ 
    '"formatNumberScale":"0",'+ 
    '"labelDistance":"10",'+ 
    '"legendAllowDrag":"1",'+ 
    '"legendBorderAlpha":"0",'+ 
    '"legendBorderColor":"FFFFFF",'+ 
    '"legendPadding":"10",'+ 
    '"legendScrollBarColor":"FCFCFC",'+ 
    '"legendScrollBgColor":"afabaa",'+ 
    '"legendScrollBtnColor":"4d4d4d",'+ 
    '"legendShadow":"1",'+ 
    '"outCnvBaseFont":"Arial",'+ 
    '"outCnvBaseFontSize":"11",'+ 
    '"paletteColors":"2D66B6,07C6E2,EDC32C,FE7B6B,37CABA,83AACB,BFAD87,6C488F,8803a4,DC2F77,3A587D,37CABA,A53C3E,FB3A60,9DD358,E6833A,6C488F,8B008B, f0abc4, 424649, 9ed5f3, c3da7d, d28fff, e67958, 1317a2, ffef00, 009852, ce0036, f09f61, 773920",'+ 
    //'"pieRadius":"30",'+ 
    '"pieSliceDepth":"20",'+ 
    '"pieYScale":"45",'+ 
    '"showAboutMenuItem":"0",'+ 
    '"showAlternateHGridColor":"1",'+ 
    '"showLabels":"0",'+ 
    '"showLegend":"1",'+
    '"showPercentInToolTip":"0",'+ 
    '"showPercentValues":"1",'+ 
    '"showPlotBorder":"0",'+ 
    '"showShadow":"1",'+ 
    '"showToolTipShadow":"1",'+ 
    '"showValues":"1",'+ 
    '"showZeroPies":"1",'+ 
    '"slicingDistance":"25",'+ 
    '"toolTipBgColor":"FFFFE1",'+ 
    '"toolTipBorderColor":"000000",'+ 
    '"toolTipSepChar":" = ",'+ 
    '"use3DLighting":"1",'+ 
    '"zeroPlaneThickness":"3"},';
