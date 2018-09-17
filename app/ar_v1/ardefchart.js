/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/ardefchart.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180125 1355 txk 199855 The message that is displayed when the graph display number
* 160610 1256 hms 180534 Remove tab characters from source files
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["ardefchart"]="$Revision: 20180125.1355 $";
//$Revision: 1.10 $
//$Log: ardefchart.js,v $
//Revision 1.10  2013/11/13 14:30:41  William_Forde
//fix cvs warning.
//
// co-ordinates are relative to "containerId" DIV

var chartLook;
var chartData;

var container;

var multiMarker = true;

//pie chart vars
var pctArray;
var startArray;
var stopArray;

// bar/line chart vars
var xScale;
var yScale;
//var y2Scale;

var groupLabels;
var seriesLabels;
var filterFunction=null;
var filterChartOn =false;
var max_val = 1000000000; // ?
var tiny_val = 0.000000001; // ?
var resizeChartTimeoutId, resizeThisChart;

function resizeArdefChart(e) {
    window.clearTimeout(resizeChartTimeoutId);
    resizeChartTimeoutId = window.setTimeout(function(){resizeThisChart();}, 100);
}

/**
 * _resizeMeasurements: resize measurements based on updated browser window size
 *                      update menu width, and remove old chart container element
 */
function _resizeMeasurements(resizeInfo, sizeInfo) {
    var oldChartElem, doc = document,
        winSize = {
           height: window.innerHeight || doc.documentElement.offsetHeight,
           width:  window.innerWidth  || doc.documentElement.offsetWidth
        };

    if (winSize.height > 0 && winSize.width > 0) {
        winSize.height -= (resizeInfo.vMargins + resizeInfo.footingHeight);
        winSize.width  -= resizeInfo.hMargins;

        resizeInfo.size = resizeInfo.size || getSizeObject(sizeInfo);
        resizeInfo.size.height = winSize.height;
        resizeInfo.size.width  = winSize.width;
        resizeInfo.menuDiv.style.width = resizeInfo.size.width + 'px';

        try {
            if (resizeInfo.autoFit === arConstants.AUTOFIT_RESIZE) {
                oldChartElem = doc.getElementById(resizeInfo.containerId);
                oldChartElem.parentNode.removeChild(oldChartElem);
            }
        } catch(e) {} 
    }

    return winSize;
} // end _resizeMeasurements()

function drawLineChart(containerId, parentId, dtaArray, seriesArray, groupsArray, clrArray, font, title, size, groupLabelType, bAlwaysScaleZero, nSubType, bMarkersOnly, xFunction,yFunction,footing,resizeInfo)
{
    var spacerHeight = 5;

    if (resizeInfo) {
        resizeInfo.footingHeight = (footing) ? footing.height + spacerHeight : 0;

        resizeThisChart = function() {
            var winSize = _resizeMeasurements(resizeInfo, size);

            if (winSize.height === 0 || winSize.width === 0) {
                return;
            }

            drawLineChart(containerId, parentId, dtaArray, seriesArray, groupsArray, clrArray, font, title,
                          resizeInfo.size, groupLabelType, bAlwaysScaleZero, nSubType, bMarkersOnly, xFunction, yFunction, footing, resizeInfo);
        }; // end resizeThisChart()

        if (!resizeInfo.setupEvent) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", resizeArdefChart, false);
            } else {
                window.attachEvent("onresize", resizeArdefChart);
            }
            resizeInfo.setupEvent = true;
        }

        if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
            size = _resizeMeasurements(resizeInfo, size);
            resizeInfo.autoFit = arConstants.AUTOFIT_RESIZE;
        }
    }

    pctArray = null;
    chartLook = new ChartLook('line', clrArray, size, groupLabelType, bAlwaysScaleZero, nSubType);
    chartLook.bMarkersOnly = (bMarkersOnly) ? true : false;
    chartLook.initFrame();

    chartData = new ChartData(dtaArray, chartLook.gt, chartLook.nSubType);
    if (chartData.status != 'ok') {
        return;
    }
    // Create the rectangular element in which the chart and legend will be placed.
    makeContainer(containerId, parentId, size, '#ffffff'); // 'efefff'
    var jg = new jsGraphics(containerId);
    jg.xFunction = xFunction;
    jg.yFunction = yFunction;
    if (nSubType == 1) {
        initScalesStacked();
    } else {
        initScales();
    }
    initGroupLabels(groupsArray, font);
    seriesLabels = seriesArray;

    if (footing && (footing.htmlText !== "")) {
        drawFooter(jg, footing, chartLook);
    }

    var legendHeight = drawLegend(jg, seriesArray, chartLook.colorArray, font, chartLook.seriesLabelsFontSize, chartLook.yStart);
    chartLook.yStart -= (legendHeight + spacerHeight);
    
    //jg.drawString("yScale.min = " + yScale.min + "yScale.max = " + yScale.max + " yScale.step = " + yScale.step, chartLook.xStart - 20, 50);
    drawAxes(jg, font);

    // Calculate and draw each series
    for (var i = 0, numSeries = chartData.nSeries; i < numSeries; ++i) {
        drawLineSeries(jg, chartLook.colorArray[i%chartLook.nColors], i);
    }

    if (title != null) {
        drawTitle(jg, title, font, chartLook.titleFontSize, chartLook.xStart, (chartLook.xEnd-chartLook.xStart));
    }
    
    jg.paint();
}

function drawBarChart(containerId, parentId, dtaArray, seriesArray, groupsArray, clrArray, font, title, size, groupLabelType, bAlwaysScaleZero, nSubType, xFunction, yFunction, footing, resizeInfo)
{
    var spacerHeight = 5;

    if (resizeInfo) {
        resizeInfo.footingHeight = (footing) ? footing.height + spacerHeight : 0;

        resizeThisChart = function() {
            var winSize = _resizeMeasurements(resizeInfo, size);

            if (winSize.height === 0 || winSize.width === 0) {
                return;
            }

            drawBarChart(containerId, parentId, dtaArray, seriesArray, groupsArray, clrArray, font, title,
                         resizeInfo.size, groupLabelType, bAlwaysScaleZero, nSubType, xFunction, yFunction, footing, resizeInfo);
        }; // end resizeThisChart()

        if (!resizeInfo.setupEvent) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", resizeArdefChart, false);
            } else {
                window.attachEvent("onresize", resizeArdefChart);
            }
            resizeInfo.setupEvent = true;
        }

        if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
            size = _resizeMeasurements(resizeInfo, size);
            resizeInfo.autoFit = arConstants.AUTOFIT_RESIZE;
        }
    }

    pctArray = null;
    chartLook = new ChartLook('bar', clrArray, size, groupLabelType, bAlwaysScaleZero, nSubType);
    chartLook.initFrame();

    chartData = new ChartData(dtaArray, chartLook.gt, chartLook.nSubType);
    if (chartData.status != 'ok') {
        return;
    }

    // Create the rectangular element in which the chart and legend will be placed.
    makeContainer(containerId, parentId, size, '#ffffff');
    var jg = new jsGraphics(containerId);
    jg.xFunction = xFunction;
    jg.yFunction = yFunction;

    if (nSubType == 1) {
        initScalesStacked();
    } else {
        initScales();
    }
    initGroupLabels(groupsArray, font);
    seriesLabels = seriesArray;

    if (footing && (footing.htmlText !== "")) {
        drawFooter(jg, footing, chartLook);
    }

    var legendHeight = drawLegend(jg, seriesArray, chartLook.colorArray, font, chartLook.seriesLabelsFontSize, chartLook.yStart);
    chartLook.yStart -= (legendHeight + spacerHeight);
    
    // Init and Draw the axes
    //jg.drawString("yScale.min = " + yScale.min + "yScale.max = " + yScale.max + " yScale.step = " + yScale.step, chartLook.xStart - 20, 50);
    drawAxes(jg, font);

    // Calculate and draw each series
    if (chartLook.nSubType == 1) {
        for (var g = 0, numGroups = chartData.nGroups; g < numGroups; ++g) {
            drawStackedBarSeries(jg, g);
        }
    } else {
        for (var i = 0, numSeries = chartData.nSeries; i < numSeries; ++i) {
            drawBarSeries(jg, chartLook.colorArray[i%chartLook.nColors], i);
        }
    }

    if (title != null) {
        drawTitle(jg, title, font, chartLook.titleFontSize, chartLook.xStart, (chartLook.xEnd-chartLook.xStart));
    }
    
    jg.paint();
}

function initGroupLabels(groupsArray, font)
{
    var len = groupsArray.length;
    var trick = false;
    if (chartData.nGroups < len)
        len = chartData.nGroups;
    
    groupLabels = new Array();
    if ( trick && (chartLook.groupLabelType == 2) && (len > 1) )
    {
        var size = chartLook.groupLabelsFontSize;
        var y_spacing = 15;

        var maxHorzSpace = chartLook.xEnd - chartLook.xStart;
        var width0 = getTextWidth(groupsArray[0], font, size);

    /*    if ( (width0*len) < (1.2*maxHorzSpace) )
        {
            // try to fit ALL labels
            
        }   */

        var widthN = getTextWidth(groupsArray[len-1], font, size);
        var widthMid = getTextWidth(groupsArray[len/2], font, size);

        groupLabels[0] = groupsArray[0];
        groupLabels[1] = groupsArray[len-1];
        chartData.nGroups = 2;
    }
    else
    {
        for (var g=0;  g<chartData.nGroups;  g++)
            groupLabels[g] = groupsArray[g];
    }
}


function initScales(axisAssignArray)
{
    var yMin = max_val;
    var yMax = -max_val;
    if (chartLook.bAlwaysScaleZero)
    {
        yMin = 0;
        yMax = 0;
    }
    var yStep = 20;
    var y2Min = 0;
    var y2Max = 0;
    var y2Step = 20;
    var seriesData, value ;
    for (var s=0;  s<chartData.nSeries;  s++)
    {
        seriesData = chartData.dataArray[s];            
        for (var g=0;  g<chartData.nGroups;  g++)
        {
            value = seriesData[g];
            if (placeOnY2(s))
            {
                if(value == missingVal) {
                    if(y2Max<0) y2Max=0;
                    if(y2Min>0) y2Min=0;
                } else {
                    if (value > y2Max)
                        y2Max = value;
                    if (value < y2Min)
                        y2Min = value;
                }
            }
            else
            { 
                if(value == missingVal) {
                    if(yMax<0) yMax=0;
                    if(yMin>0) yMin=0;
                } else {
                    if (value > yMax) 
                        yMax = value;
                    if (value < yMin) 
                        yMin = value;
                }
            }
        }
    }
    
    // don't want funky values
    var niceValues = calcNiceValues(yMin, yMax);
    yMin = niceValues[0];
    yMax = niceValues[1];
    yStep = niceValues[2];
    yScale = new Scale(yMin, yMax, yStep);
    
    if (chartLook.bWantY2 && chartData.nSeries > 1)
    {
        var niceValues2 = calcNiceValues(y2Min, y2Max);
        y2Min = niceValues2[0];
        y2Max = niceValues2[1];
        y2Step = niceValues2[2];
//        y2Scale = new Scale(y2Min, y2Max, y2Step);
    }
    
    xScale = new Scale(0, chartData.nGroups, 1); // ???
}

function initScalesStacked()
{
    // no dual-y stacked for now
    var yMin = max_val;
    var yMax = -max_val;
    if (chartLook.bAlwaysScaleZero)
    {
        yMin = 0;
        yMax = 0;
    }
    var yStep = 20;
    for (var g=0;  g<chartData.nGroups;  g++)
    {
        var groupData = chartData.summedData[g];
        var value = groupData[0]; // first value is smallest
        if(value == missingVal) {
            if(yMax<0) yMax=0;
            if(yMin>0) yMin=0;
        } else {
            if (value > yMax) 
                yMax = value;
            if (value < yMin) 
                yMin = value;
        }
        var value = groupData[groupData.length-1]; // last value is largest
        if(value == missingVal) {
            if(yMax<0) yMax=0;
            if(yMin>0) yMin=0;
        } else {
            if (value > yMax) 
                yMax = value;
            if (value < yMin) 
                yMin = value;
        }
    }
    
    // don't want funky values
    var niceValues = calcNiceValues(yMin, yMax);
    yMin = niceValues[0];
    yMax = niceValues[1];
    yStep = niceValues[2];
    yScale = new Scale(yMin, yMax, yStep);
    
    xScale = new Scale(0, chartData.nGroups, 1); // ???
}

function placeOnY2(s)
{
    if (!chartLook.bWantY2)
        return false;        // line charts don't do Y2
    
//    if (axisAssignArray != null)
//        do something intelligent

    return (s % 2) == 1;
}

// Both rawMin and rawMax are negative
function calcNiceNegValues(rawMin, rawMax)
{
    var absValues = [];
    if(rawMin==0) {
        absValues[0] = rawMax;
        absValues[1] = rawMin;
    } else {
        // both are neg, so we mult by -1, max will be the smaller
        // so we switch min and max in this call    

        absValues = calcNicePosValues(-rawMax, -rawMin);
        // switch min and max back
        var min = -absValues[1];
        var max = -absValues[0];
        absValues[0] = min;
        absValues[1] = max;
    }
    return absValues;
}

// Both rawMin and rawMax are positive
// All results are rounded to 5 significant digits (sadly necessary)
function calcNicePosValues(rawMin, rawMax)
{
    // Move range down to 0 and scale it.
    var tempValues = calcNiceValues(0, (rawMax - rawMin));
    var step = tempValues[2];
    step = (Math.round(step * 10000)) / 10000;
    // Use the step to scale the values, allowing for some space on either side
    var min = step * (Math.floor(0.95*rawMin / step));
    min = (Math.round(min * 10000)) / 10000;
    var max = step * (Math.ceil(1.05*rawMax / step));
    max = (Math.round(max * 10000)) / 10000;
    tempValues[0] = min;
    tempValues[1] = max;
    return tempValues;
}

function calcNiceValues(rawMin, rawMax)
{
    var minMult,maxMult;
    var absMin = Math.abs(rawMin);
    
    // If both are 0, return arbitrary scale from -1 to 1
    if ( (absMin < tiny_val) && (Math.abs(rawMax) < tiny_val) )
        return new Array(-1, 1, 1);
    
    // If both are the same non-zero value, provide some room on each side
    if ( Math.abs(rawMax - rawMin) < tiny_val )
    {
        minMult = (rawMin < 0) ? 1.05 : 0.95;
        rawMin *= minMult;
        maxMult = (rawMax < 0) ? 0.95 : 1.05;
        rawMax *= maxMult;
        absMin = Math.abs(rawMin);
    }
    
    if (!chartLook.bAlwaysScaleZero)
    {
        if (rawMin > 0)
            return calcNicePosValues(rawMin, rawMax);
        else if (rawMax < 0)
            return calcNiceNegValues(rawMin, rawMax);
    }
    
    // Normal case which includes 0
    var multiplier = 1;
    var step = 20;
    var max, min;
    
    if (rawMax >= absMin)
    {
        while (rawMax < 5)
        {
            rawMax = rawMax * 10;
            multiplier = multiplier / 10;
        }
        while (rawMax > 100)
        {
            rawMax = rawMax / 10;
            multiplier = multiplier * 10;
        }
        if (rawMax <= 100)
            max = 100;

        if (rawMax < 80)
            max = 80;

        if (rawMax < 60)
            max = 60;
        
        if (rawMax < 40)
        {
            max = 40;
            step = 10;
        }
        
        if (rawMax < 20)
        {
            max = 20;
            step = 5;
        }
        if (rawMax < 15)
        {
            max = 15;
            step = 5;
        }
        if (rawMax < 10)
        {
            max = 10;
            step = 2;
        }
        max = max*multiplier;
        step = step*multiplier;
        min = step * (Math.floor(rawMin / step));
    }
    else
    {
        var sign = (rawMin < 0) ? -1 : 1;
        var posmin = 100;
        while (absMin < 5)
        {
            absMin = absMin * 10;
            multiplier = multiplier / 10;
        }
        while (absMin > 100)
        {
            absMin = absMin / 10;
            multiplier = multiplier * 10;
        }
        if (absMin < 100)
            posmin = 100;

        if (absMin < 80)
            posmin = 80;

        if (absMin < 60)
            posmin = 60;
        
        if (absMin < 40)
        {
            posmin = 40;
            step = 10;
        }
        
        if (absMin < 20)
        {
            posmin = 20;
            step = 5;
        }
        if (absMin < 15)
        {
            posmin = 15;
            step = 5;
        }
        if (absMin < 10)
        {
            posmin = 10;
            step = 2;
        }
        step = step*multiplier;
        max = step * Math.ceil(rawMax / step);
        min = sign*posmin*multiplier;
    }
    return new Array(min, max, step);
}

function drawAxes(jg, font)
{
    // First draw the group labels, which may affect the frame (if we need 
    // staggered labels, we shrink the frame)
    drawGroupLabels(jg, font);

    drawY1Axis(jg, font);
    
//    if (chartLook.bWantY2)
//        drawY2Axis(jg, font);
}

function drawAxesXY(jg, font)
{
    // First draw the group labels, which may affect the frame (if we need 
    // staggered labels, we shrink the frame)
    drawXAxis(jg, font);

    drawY1Axis(jg, font);
}

function drawGroupLabels(jg, font)
{
    var size = chartLook.groupLabelsFontSize;
    var y_spacing = 15;

    var len = groupLabels.length;
    if (chartData.nGroups < len)
        len = chartData.nGroups;
    var maxWidth = getMaxWidth(groupLabels, font, size, len) + 5;
    var maxHorzSpace = chartLook.xEnd - chartLook.xStart;
    var nColumns = Math.floor(maxHorzSpace / maxWidth);
    var nRows = Math.ceil((len * maxWidth) / maxHorzSpace);
    if ( nRows > chartLook.maxGroupRows )
        nRows = chartLook.maxGroupRows;
    maxWidth -= 5;
    
    chartLook.yStart -= (y_spacing*(nRows-1));
    
    var bNeedTruncation = false;
    if (Math.ceil(len/nRows) * maxWidth > maxHorzSpace)
    {
        maxWidth = Math.floor(maxHorzSpace / Math.ceil(len/nRows));
        bNeedTruncation = true;
    }
    
    // axis line
    jg.setColor("#000000");
    jg.drawLine(chartLook.xStart, chartLook.yStart, chartLook.xEnd, chartLook.yStart); // x-axis
    
    // ticks and labels
    jg.ftFam = font;
    jg.ftSz = size;
    var x_spacing = (chartLook.xEnd - chartLook.xStart) / chartData.nGroups;
    var yLabels = chartLook.yStart + 3;
    var yLabelsRow2 = chartLook.yStart + 3 + y_spacing;
    for (var g=0;  g<chartData.nGroups;  g++)
    {
        var txt = groupLabels[g];
        var txtWidth = getTextWidth(txt, font, size);
        if (bNeedTruncation)
            txtWidth = Math.min(txtWidth, maxWidth-8);
        var xCtr = chartLook.xStart + (0.5+g)*x_spacing;
        var x = xCtr - (txtWidth/2);
        jg.setStroke(1);
        jg.drawLine(xCtr, chartLook.yStart, xCtr, chartLook.yStart-3);        // tick mark
        var row = (g%nRows);
        var y = chartLook.yStart + 3 + row*y_spacing;
        jg.drawStringClipRect(txt, x, y, txtWidth, 'center', true);
    }
}

function drawY1Axis(jg, font)
{
    // grids
    jg.setColor("#c0c0c0");
    jg.setStroke(1);
    var nIntervals = Math.ceil( (yScale.max - yScale.min) / yScale.step );
    var nScaleLabels = nIntervals + 1;
    var spacing = (chartLook.yEnd - chartLook.yStart) / nIntervals;
    for (var i=0;  i<nScaleLabels;  i++)
    {
        jg.drawLine(chartLook.xStart, chartLook.yStart + i*spacing, chartLook.xEnd, chartLook.yStart + i*spacing);
    }
    
    // ticks
    jg.setColor("#000000");
    for (var i=0;  i<nScaleLabels;  i++)
    {
        jg.drawLine(chartLook.xStart, chartLook.yStart + i*spacing, chartLook.xStart + 3, chartLook.yStart + i*spacing);
    }
    
    // axis line
    jg.setColor("#000000");
    jg.setStroke(2);
    jg.drawLine(chartLook.xStart, chartLook.yStart, chartLook.xStart, chartLook.yEnd); // y-axis;
    
    var divisor = 1;
    var suffix = "";

    if (yScale.step >= 500000000)
    {
        suffix = "B";
        divisor = 1000000000;
    }
    else if (yScale.step >= 500000)
    {
        suffix = "M";
        divisor = 1000000;
    }
    else if (yScale.step >= 500)
    {
        suffix = "K";
        divisor = 1000;
    }
    
    // and the scale labels
    var size = chartLook.scaleLabelsFontSize;
    jg.ftFam = font;
    jg.ftSz = size;
    var places = Math.max(numPlaces(yScale.max, suffix), numPlaces(yScale.min, suffix));

    // project 123209 reset places
    if ( suffix != "" && yScale.step/divisor < 1 ) places = 1;

    for (var i=0;  i<nScaleLabels;  i++)
    {
        var scaleValue = (yScale.min + i*yScale.step) / divisor;
        var txt = format(scaleValue, places, suffix);
        if(typeof(jg.yFunction)=="function") txt = jg.yFunction(yScale.min + i*yScale.step);
        jg.drawStringRect(txt, 5, chartLook.yStart + i*spacing - 7, chartLook.xStart-10, 'right');
    }
}

function drawXAxis(jg, font)
{
    // grids
    jg.setColor("#c0c0c0");
    jg.setStroke(1);
    var nIntervals = Math.ceil( (xScale.max - xScale.min) / xScale.step );
    var nScaleLabels = nIntervals + 1;
    var spacing = (chartLook.xEnd - chartLook.xStart) / nIntervals;
    for (var i=0;  i<nScaleLabels;  i++)
    {
        jg.drawLine(chartLook.xStart + i*spacing, chartLook.yStart, chartLook.xStart + i*spacing, chartLook.yEnd);
    }
    
    // ticks
    jg.setColor("#000000");
    for (var i=0;  i<nScaleLabels;  i++)
    {
        jg.drawLine(chartLook.xStart + i*spacing, chartLook.yStart, chartLook.xStart + i*spacing, chartLook.yStart-3);
    }
    
    // axis line
    jg.setColor("#000000");
    jg.setStroke(2);
    jg.drawLine(chartLook.xStart, chartLook.yStart, chartLook.xEnd, chartLook.yStart); // x-axis
    
    // and the scale labels
    drawXLabels(jg, font, nScaleLabels, spacing);
}

function drawXLabels(jg, font, nScaleLabels, spacing)
{
    if (chartLook.nSubType == 1)
    {
        jg.ftFam = font;
        jg.ftSz = chartLook.scaleLabelsFontSize;
        jg.setColor("#000000");
        for (var i=0;  i<nScaleLabels;  i++)
        {
            var txt = "";
            if ( (i > 0) && (i <= groupLabels.length) )
                txt = groupLabels[i-1];
            if(typeof(jg.xFunction)=="function") txt = jg.xFunction(txt);
            var txtWidth = getTextWidth(txt, font, chartLook.scaleLabelsFontSize);
            jg.drawStringRect(txt, chartLook.xStart + i*spacing - 7, chartLook.yStart+5, txtWidth, 'center');
        }
    }
    else
    {
        var divisor = 1;
        var suffix = "";
        if (xScale.step >= 500000000)
        {
            suffix = "B";
            divisor = 1000000000;
        }
        else if (xScale.step >= 500000)
        {
            suffix = "M";
            divisor = 1000000;
        }
        else if (xScale.step >= 500)
        {
            suffix = "K";
            divisor = 1000;
        }
        
        var size = chartLook.scaleLabelsFontSize;
        jg.ftFam = font;
        jg.ftSz = size;
        jg.setColor("#000000");
        var places = Math.max(numPlaces(xScale.max, suffix), numPlaces(xScale.min, suffix));
        for (var i=0;  i<nScaleLabels;  i++)
        {
            var scaleValue = (xScale.min + i*xScale.step) / divisor;
            var txt = format(scaleValue, places, suffix);
            if(typeof(jg.xFunction)=="function") txt = jg.xFunction(txt);
            var txtWidth = getTextWidth(txt, font, size);
            jg.drawStringRect(txt, chartLook.xStart + i*spacing - 7, chartLook.yStart+5, txtWidth, 'center');
        }
    }
}

function numPlaces(value, suffix)
{
    var absValue = Math.abs(value);
    var places = 0;
    
    if (value == 0)
        places = 0;
    else if (suffix != "")
        places = 0;
    else if (absValue > 10)
        places = 0;
    else if (absValue > 1)
        places = 1;
    else if (absValue > 0.1)
        places = 2;
    else 
        places = 3;        // exp notation?

    return places;
}

function format(value, places, suffix)
{
    var txt;
    var absValue = Math.abs(value);
    
    if (absValue < tiny_val)
        txt = "0";
    else
    {
        txt = value.toFixed(places);

        if (suffix != "")
            txt = txt + " " + suffix;
    }

    return txt;
}

function baseIsZero()
{
    if (chartLook.bAlwaysScaleZero)
        return true;
    
    return ( (yScale.min <= 0) && (yScale.max >= 0) );
}

function drawBarSeries(jg, c, s)
{
    var nIntervals = (chartData.nGroups * chartData.nSeries) + chartData.nGroups + 1;
    var dBarWidth = (chartLook.xEnd - chartLook.xStart) / nIntervals;
    var x_spacing = (chartLook.xEnd - chartLook.xStart) / chartData.nGroups;
    var yBase = (baseIsZero()) ? 0 : yScale.min;
    var yRatioBase = (yBase - yScale.min) / (yScale.max - yScale.min);
    var yCoordBase = Math.round(chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatioBase);
    var str,s_,ln=0;

    var seriesData = chartData.dataArray[s];
    var yCoordPrev = undefined;
    for (var g=0;  g<chartData.nGroups;  g++)
    {
        var xCtr = chartLook.xStart + (0.5+g)*x_spacing;
        var xLeft = xCtr - chartData.nSeries*dBarWidth/2;
        var value = seriesData[g];
        if (value == missingVal) value = 0;
        var yRatio = 0.0 + (value - yScale.min) / (yScale.max - yScale.min);
        var yCoord = chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatio;
        var x = Math.round(xLeft + s*dBarWidth);
        var w = Math.round(dBarWidth);
        var y = Math.round(yCoord);
        var h = Math.round(yCoordBase - yCoord);
        if (h < 0)  // negative value
        {
            h = -h;
            y = yCoordBase;
        }
        
        if (w > 0 && h > 0)
        {
            var cls = 1000*s + g;
            var txt = getToolTipText(cls);
            jg.setColor(c);
            jg.setTitle(txt);
            if(filterChartOn && (filterFunction!=null))
                jg.setClickOn(filterFunction+',\''+txt+'\',['+s+'],'+g+')');
            else
                jg.setClickOn('alert(\''+txt+'\')');
            jg._mkDiv(x, y, w, h);
        }
    }
}

function drawStackedBarSeries(jg, g)
{
    var nIntervals = (chartData.nGroups * 2) + chartData.nGroups + 1; // stacked
    var dBarWidth = (chartLook.xEnd - chartLook.xStart) / nIntervals;
    var x_spacing = (chartLook.xEnd - chartLook.xStart) / chartData.nGroups;
    var yBase = (baseIsZero()) ? 0 : yScale.min;
    var yRatioBase = (yBase - yScale.min) / (yScale.max - yScale.min);
    var yCoordBase = Math.round(chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatioBase);
    var str,s_,ln=0;

    var xCtr = chartLook.xStart + (0.5+g)*x_spacing;
    var xLeft = xCtr - dBarWidth/2;
    var yCoordPrev;
    for (var s=0;  s<chartData.nSeries;  s++)
    {
        var c = chartLook.colorArray[s%chartLook.nColors];
        var value = chartData.summedData[g][s];
        if (value == missingVal) value = 0;
        var yRatio = 0.0 + (value - yScale.min) / (yScale.max - yScale.min);
        var yCoord = chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatio;
        var x = xLeft;
        var w = Math.round(dBarWidth);
        var y = Math.round(yCoord);
        if (yCoordPrev != undefined)
            yCoordBase = yCoordPrev;
        var h = yCoordBase - yCoord;
        if (h < 0)  // negative value
        {
            h = -h;
            y = yCoordBase;
        }
        yCoordPrev = yCoord;
        
        if (w > 0 && h > 0)
        {
            var cls = 1000*s + g;
            var txt = getToolTipText(cls);
            jg.setColor(c);
            jg.setTitle(txt);
            if(filterChartOn && (filterFunction!=null))
                jg.setClickOn(filterFunction+',\''+txt+'\',['+s+'],'+g+')');
            else
                jg.setClickOn('alert(\''+txt+'\')');
            jg._mkDiv(x, y, w, h);
        }
    }
}

function drawLineSeries(jg, c, s)
{
    var seriesData = chartData.dataArray[s];
    var spacing = (chartLook.xEnd - chartLook.xStart) / chartData.nGroups;

    var xArray = new Array();
    var yArray = new Array();
    for (var g=0;  g<chartData.nGroups;  g++)
    {
        xArray[g] = chartLook.xStart + (0.5+g)*spacing;
        var value = seriesData[g];
        if(value == missingVal) value=0;
        var yRatio = 0.0 + (value - yScale.min) / (yScale.max - yScale.min);
        var yCoord = chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatio;
        yArray[g] = yCoord;
        if (chartLook.bWantLineMarkers)
            drawLineMarker(jg, c, s, g, xArray[g], yCoord);
    }
    if (!chartLook.bMarkersOnly) 
        drawLineRisers(jg, c, xArray, yArray);
}

function drawLineRisers(jg, c, xArray, yArray)
{
    jg.setColor(c);
    jg.setStroke(2);
    if ( (xArray.length == 1) && (yArray.length == 1) )
    {
        // Special case for exactly one point
        var xNewArray = new Array();
        var yNewArray = new Array();
        xNewArray[0] = xArray[0] - 3;
        xNewArray[1] = xArray[0] + 3;
        yNewArray[0] = yArray[0];
        yNewArray[1] = yArray[0];
        jg.drawPolyline(xNewArray, yNewArray);
    }
    else
        jg.drawPolyline(xArray, yArray);
}

function drawLineMarker(jg, c, s, g, xCoord, yCoord)
{
    var mkr = getMarker(s);

    drawMarker(jg, mkr, c, xCoord, yCoord, s, g);
}

function drawPieChart(containerId, parentId, dtaArray, seriesLblArray, clrArray, font, otherPct, title, size, footing, resizeInfo)
{
    var spacerHeight = 5;

    if (resizeInfo) {
        resizeInfo.footingHeight = (footing) ? footing.height + spacerHeight : 0;

        resizeThisChart = function() {
            var winSize = _resizeMeasurements(resizeInfo, size);

            if (winSize.height === 0 || winSize.width === 0) {
                return;
            }

            drawPieChart(containerId, parentId, dtaArray, seriesLblArray, clrArray, font, otherPct, title,
                         resizeInfo.size, footing, resizeInfo);
        }; // end resizeThisChart()

        if (!resizeInfo.setupEvent) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", resizeArdefChart, false);
            } else {
                window.attachEvent("onresize", resizeArdefChart);
            }
            resizeInfo.setupEvent = true;
        }

        if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
            size = _resizeMeasurements(resizeInfo, size);
            resizeInfo.autoFit = arConstants.AUTOFIT_RESIZE;
        }
    }

    chartLook = new ChartLook('pie', clrArray, size, 0);
    chartLook.initFrame(true);
    
    chartData = new ChartData(dtaArray, chartLook.gt);
    if (chartData.status != 'ok') {
        return;
    }

    // Create the rectangular element in which the chart and legend will be placed.
    makeContainer(containerId, parentId, size, '#ffffff');
    var jg = new jsGraphics(containerId);

    // min pct for individual slices (smaller ones go into "Other")
    var minPct = (otherPct != null) ? parseInt(otherPct, 10) : 5;

    var total = preparePieData(dtaArray, seriesLblArray, clrArray, minPct);

    if (footing && (footing.htmlText !== "")) {
        drawFooter(jg, footing, chartLook);
    }

    var legendHeight = drawLegend(jg, seriesLabels, chartLook.colorArray, font, chartLook.seriesLabelsFontSize, chartLook.yStart);

    chartLook.yStart -= (legendHeight + spacerHeight);
    
    var r = getRadius(chartLook.size);    

    var xc = (chartLook.xStart + chartLook.xEnd) / 2;
    var yc = (chartLook.yStart + chartLook.yEnd) / 2 + 10;

    var left = Math.round(xc - r);
    var top = Math.round(yc - r);
    drawUsingFillArc(jg, left, top, r);
    
    if (title != null) {
        drawTitle(jg, title, font, chartLook.titleFontSize, chartLook.xStart, (chartLook.xEnd-chartLook.xStart));
    }
    
    jg.paint();
}

function drawUsingFillArc(jg, iL, iT, r)
{
    // Calculate and draw each slice
    var g = 0,ss; // for now only 1 pie
    for (var s=0;  s<seriesLabels.length;  s++)
    {
        var ai = new ArcInfo(startArray[s], stopArray[s], r);
        var startDeg = ai.startAngle * 180 / Math.PI;
        var stopDeg = ai.stopAngle * 180 / Math.PI;
        var txt = getToolTipText(1000*s); // g == 0
        ss = chartData.dataOrgPos[s];
        if(typeof(ss)=='undefined') {
            ss='';
            for(var i=0; i< chartData.dataOthers.length; i++)
                ss+= chartData.dataOthers[i]+((i<(chartData.dataOthers.length-1))?',':'');
        }
        if (startDeg < 0)
            startDeg += 360;
        if (stopDeg < 0)
            stopDeg += 360;
        if (ai.angle != 0)
        {
            jg.setColor(chartLook.colorArray[s%chartLook.nColors]);
            jg.setTitle(txt);
            if(filterChartOn && (filterFunction!=null))
                jg.setClickOn(filterFunction+',\''+txt+'\',['+ss+'])');
            else
                jg.setClickOn('alert(\''+txt+'\')');
            jg.fillArc(iL, iT, 2*r, 2*r, startDeg, stopDeg);
        }
    }
}

// TODO remove too-small (less than 1 pixel wide) slices even when Other would not be crdinarily
// called for.
function preparePieData(dtaArray, seriesLblArray, clrArray, minPct)
{
    var len = dtaArray.length;
    var total = 0;
    for (var i=0;  i<len;  i++)
        if(dtaArray[i]!=missingVal)
            total += Math.abs(dtaArray[i]);
    pctArray = new Array();
    var otherArray = new Array();
    var nOther = 0;
    var otherTotal = 0;
    for (var i=0;  i<len;  i++)
    {
        var value = 0;
        if(dtaArray[i]!=missingVal)
            value = Math.abs(dtaArray[i]);
        var pct = value / total;
        if (100*pct < minPct)
        {
            otherArray[i] = true; 
            otherTotal += value;
            nOther++;
        }
        else
            otherArray[i] = false;
    }
    
    var nSlices = len;
    var bReplaceSmallSlices = ( (len > 7) && (nOther > 1) );
    if ( bReplaceSmallSlices )
        nSlices = len - nOther + 1;  // replace n small slices with 1 "Other" slice

    chartData.dataArray = new Array();
    seriesLabels = new Array();
    chartLook.colorArray = new Array();
    chartData.dataOrgPos = new Array();
     chartData.dataOthers = new Array();
    var iData = 0;
    for (var i=0;  i<len;  i++)
    {
        if (!bReplaceSmallSlices || !otherArray[i])
        {
            if(dtaArray[i]!=missingVal)
                chartData.dataArray[iData] = [Math.abs(dtaArray[i])];
            else 
                chartData.dataArray[iData] = [0];
            chartData.dataOrgPos[iData]=i;
            seriesLabels[iData] = seriesLblArray[i];
            chartLook.colorArray[iData] = clrArray[iData%chartLook.nColors];
            iData++;
        }
        else chartData.dataOthers[ chartData.dataOthers.length]=i;
    }
    
    if (bReplaceSmallSlices)
//    if (bReplaceSmallSlices && (otherTotal > 0))    // oops, if we don't put otherSlice in there is mismatch in nSlices 01.19.06/SJR
    {
        chartData.dataArray[iData] = [otherTotal];
        seriesLabels[iData] = "Other";
        chartLook.colorArray[iData] = "#736567";
    }
    
    calcAngles(total, nSlices);
    
    return total;
}

function calcAngles(total, nSlices)
{
    startArray = new Array();
    stopArray = new Array();
    stopArray[0] = Math.PI / 2;
    var last = nSlices - 1;
    for (var i=0;  i<nSlices;  i++)
    {
        var seriesData = chartData.dataArray[i];
        var value = seriesData[0];
        if(value == missingVal) value = 0;
        pctArray[i] = (total == 0) ? 0 : value / total;            // 01.21.06/SJR
        startArray[i] = stopArray[i] - (pctArray[i] * 2 * Math.PI);
        if (i != last)
            stopArray[i+1] = startArray[i];
    }
    // Special case when last slice is the entire pie 05.04.07/SJR
    if (pctArray[last] == 1.0) {
        startArray[last] = stopArray[last] - (2 * Math.PI);
    } else if (pctArray[last] != 0) {
        startArray[last] = stopArray[0];
    }
}

function makeContainer(containerId, parentId, size, bgColor)
{
    var where;
    container = document.createElement('DIV');
    container.className = 'chartContainer';
    container.id = containerId;
    container.name = containerId;
    var style = container.style;
    //style.position = 'absolute';
    style.position = 'relative';
//        style.left = getLeft(size);
//        style.top = getTop(size);
    style.width = getWidth(size)+'px';
    style.height = getHeight(size)+'px';
    style.backgroundColor = bgColor;
//    style.border = '1px solid #000000';

    if(typeof(parentId)!='object')
        where = document.getElementById(parentId);
    else
        where = parentId;
    where.appendChild(container);
}

function getLeft(size)
{
    if (size == 'small')
        return 0; // 200
    else if (size == 'large')
        return 0;
    else
        return 0; // 100
}

function getTop(size)
{
    if (size == 'small')
        return 0; // 100
    else if (size == 'large')
        return 0;
    else
        return 0; // 50
}

function getWidth(size)
{
    if(typeof(size)=='object') return size.width;
    if (size == 'small')
        return 240;
    else if (size == 'large')
        return 600;
    else
        return 400;
}

function getHeight(size)
{
    if(typeof(size)=='object') return size.height;
    if (size == 'small')
        return 180;
    else if (size == 'large')
        return 450;
    else
        return 300;
}

function getRadius(size)
{
    if(typeof(size)=='object') {
        var r = size.width;
        if(r>size.height) r = size.height;
        r = Math.floor(r/4);
        if(r<40) r = 40;
        return r;
    } else {
        if (size == 'small')
            return 40;
        else if (size == 'large')
            return 120;
        else
            return 80;
    }
}

function getSizeObject(size)
{
    if (typeof size === 'object') {
        return size;
    }
    var sizeObj = {
        height: getHeight(size),
        width:  getWidth(size)
    };
    
    return sizeObj;
} // end getSizeObject

function calcLegendRect(containerWidth, containerHeight, nRows, nColumns, maxItemWidth)
{
    var legendRect = new Object();
    legendRect.h = nRows * chartLook.nLegendRowHeight;
    legendRect.y = (containerHeight - legendRect.h - 10);
    if ( (nRows == 1) && ((nColumns * maxItemWidth) < (chartLook.xEnd - chartLook.xStart)) )
    {
        legendRect.w = chartLook.xEnd - chartLook.xStart;
        legendRect.x = (containerWidth - legendRect.w) / 2;
        legendRect.centered = true;
    }
    else
    {
        legendRect.w = containerWidth - 20;
        if ((nColumns * maxItemWidth) < legendRect.w)
            legendRect.w = nColumns * maxItemWidth;
        legendRect.x = (containerWidth - legendRect.w) / 2;
        legendRect.centered = false;
    }
    
    return legendRect;
}

// special processing - if few labels, center them between xStart and xEnd
function drawSingleRowLegend(jg, seriesLabels, colorArray, font, size, len, containerWidth)
{
    var containerHeight = (container.offsetHeight) ? container.offsetHeight : parseInt(container.style.height,10);
    var maxHorzSpace = containerWidth - 20;        // 10 pixel margin left and right
    var maxWidth = getMaxWidth(seriesLabels, font, size, len) + 30;    // 30 for the marker
    var legendRect = calcLegendRect(containerWidth, containerHeight, 1, len, maxWidth);
    
    jg.ftFam = font;
    jg.ftSz = size;
    var itemTop = legendRect.y + 5;
    for (var i=0;  i<len;  i++)
    {
        var pct = "";
        if ((chartLook.gt == 'pie') && (pctArray != null) && (i<pctArray.length))
            pct = "  " + (Math.round(pctArray[i] * 1000) / 10) + "%";
        var txt = seriesLabels[i] + pct;
        var width = maxWidth;
        var itemLeft = legendRect.x + 5 + maxWidth*(i % len);
        if (legendRect.centered)
        {
            width = getTextWidth(txt, font, size) + 30;
            var centerOffset = (2*i + 1) * (chartLook.xEnd - chartLook.xStart) / (2 * len);
            itemLeft = chartLook.xStart + centerOffset - width/2;
        }
        
        var mkr = 1;
        if (chartLook.gt == 'xy')
            mkr = getMarker(i);
        
        // TODO why the 5 - SHOULD work w msize/2 ???
        drawMarker(jg, mkr, colorArray[i%chartLook.nColors], itemLeft+chartLook.markerSize/2, itemTop+5);
        
        jg.setColor("#000000");
        jg.drawStringClipRect(txt, itemLeft + 15, itemTop-2, width-20, 'left', true); 
    }
    
    return legendRect.h;
}

function drawLegend(jg, seriesLabels, colorArray, font, size, chartYstart)
{
    var len = seriesLabels.length;

    if (chartData.nSeries < len)
        len = chartData.nSeries;
    if (chartLook.gt == 'pie') chartLook.bAlwaysDrawLegend = true;
    if (!chartLook.bAlwaysDrawLegend && len <= 1)
        return 0;

    var containerWidth = (container.offsetWidth) ? container.offsetWidth : parseInt(container.style.width,10);
    var xxx = document.body || null;
    var isIE = xxx && typeof xxx.insertAdjacentHTML != "undefined";
    if (isIE)
        containerWidth += 2;
    var maxHorzSpace = containerWidth - 20;        // 10 pixel margin left and right

    var maxWidth = getMaxWidth(seriesLabels, font, size, len) + 30;    // 30 for the marker

    var nRows = Math.ceil((len * maxWidth) / maxHorzSpace);
    if (nRows == 1)
        return drawSingleRowLegend(jg, seriesLabels, colorArray, font, size, len, containerWidth);
    
    // Here if more than one row
    var containerHeight = (container.offsetHeight) ? container.offsetHeight : parseInt(container.style.height,10);
    var nColumns = Math.floor(maxHorzSpace / maxWidth);

    if ( nRows > chartLook.maxRows )
        nRows = chartLook.maxRows;

    if (nRows*nColumns < len)
    {
        // See if we can make it all fit with truncation
        var truncColumns = Math.ceil(len / nRows);
        var truncWidth = Math.floor(maxHorzSpace / truncColumns);
        if (true) // may need to put a limit on this
        {
        nColumns = truncColumns;
        maxWidth = truncWidth;
        }
    }

    if (containerHeight > chartYstart) { // need to account for footing
        containerHeight = chartYstart;
    }
    var legendRect = calcLegendRect(containerWidth, containerHeight, nRows, nColumns, maxWidth);
    
    jg.ftFam = font;
    jg.ftSz = size;
    for (var i=0;  i<len;  i++)
    {
        var row = Math.floor(i / nColumns);
        if (row >= nRows)
            break;        // we're out of room, just ignore the rest
        
        var itemTop = legendRect.y + 10 + chartLook.nLegendRowHeight*row;
        var itemLeft = legendRect.x + 5 + maxWidth*(i % nColumns);
        var mkr = 1;
        if (chartLook.gt == 'xy')
            mkr = getMarker(i);
        
        // TODO why the 5 - SHOULD work w msize/2 ???
        drawMarker(jg, mkr, colorArray[i%chartLook.nColors], itemLeft+chartLook.markerSize/2, itemTop+5);
        
        var pct = "";
        if ((chartLook.gt == 'pie') && (pctArray != null) && (i<pctArray.length))
            pct = "  " + (Math.round(pctArray[i] * 1000) / 10) + "%";
        var w = getTextWidth(pct,font,size);
        if(pct=="") w = 0;
        jg.setColor("#000000");
        var txt = seriesLabels[i];
        var w1 = getTextWidth(txt,font,size);
        if((w1+w+20)<maxWidth) {
            jg.drawStringClipRect(txt+pct, itemLeft + 15, itemTop-2, maxWidth-20, 'left', true); 
        } else {
            jg.drawStringClipRect(txt, itemLeft + 15, itemTop-2, maxWidth-(20+w+5), 'left', true); 
            jg.drawStringClipRect(pct, itemLeft + 15+(maxWidth-(20+w)), itemTop-2, w, 'left', true); 
        }
    }
    return legendRect.h;
}

function getMaxWidth(labels, font, size, maxlen)
{
    var len = labels.length;
    if (maxlen && (maxlen < len))
        len = maxlen;

    var max = 0;
    for (var i=0;  i<len;  i++)
    {
        var pct = "";
        if ((chartLook.gt == 'pie') && (pctArray != null) && (i<pctArray.length))
            pct = "  " + (Math.round(pctArray[i] * 1000) / 10) + "%";
        var txt = labels[i] + pct;
        var width = getTextWidth(txt, font, size);
        if (width > max)
            max = width;
    }
    return max;
}

function drawTitle(jg, title, font, size, left, width)
{
    jg.ftFam = font;
    jg.ftSz = size;
    jg.setColor("#000000");
    jg.drawStringRect(title, left, chartLook.yTitlePos, width, 'center');
}

function drawFooter(jg, footing, chartLook)
{
    var footerAlignment = 'center',
        spacerHeight = 5;
    jg.drawStringRect(footing.htmlText, chartLook.xStart, (chartLook.yStart + footing.height + spacerHeight),
                      (chartLook.xEnd-chartLook.xStart), footerAlignment);
}

function getElement(objName)
{
    var obj = null;
    
    if (document.getElementById)
    {
        // this is the way the standards work
        obj = document.getElementById(objName);
    }
    else if (document.all)
    {
        // this is the way old msie versions work
        obj = document.all[objName];
    }
    else if (document.layers)
    {
        // this is the way nn4 works
        obj = document.layers[objName];
    }

    return obj;
}

// may want to combine these 2, return an array or a struct
function getTextWidth(html, font, size)
{
    if(html=='') return 0;
    var fontMetric = getElement('fontMetric');
    if (fontMetric == null)
        return null;            // should not happen!
    else
    {
        fontMetric.style.fontFamily = font;
        fontMetric.style.fontSize = size+'pt';
        fontMetric.innerHTML = html;
        var w=fontMetric.offsetWidth;
        if(!w) w=parseInt(fontMetric.style.width,10);
        if(isNaN(w)) w=0;
        return w;
    }
}
function getTextHeight(html, font, size)
{
    if(html=='') return 0;
    var fontMetric = getElement('fontMetric');
    if (fontMetric == null)
        return null;            // should not happen!
    else
    {
        fontMetric.style.fontFamily = font;
        fontMetric.style.fontSize = size+'pt';
        fontMetric.innerHTML = html;
        var h = fontMetric.offsetHeight;
        if(!h) h=parseInt(fontMetric.style.height,10);
        if(isNaN(h)) h=0;
        return h;
    }
}

function getToolTipText(cls)
{
    var txt = "no nonzero data";
    var dvalue;

    if (cls >= 0)
    {
        var series = Math.floor(cls / 1000); // 10000?
        var group = cls % 1000; // 10000?
        
        if (chartData.gt == "xy")
        {
            txt = '';
            if(series < seriesLabels.length) txt += seriesLabels[series] + " ";
            txt += "x= " + chartData.dataArray[2*series][group] + " y= " + chartData.dataArray[2*series+1][group];
        }
        else
        {
            var seriesData = chartData.dataArray[series];
            
            var pct = "";
            if (pctArray != null)
                pct = " (" + (Math.round(1000*pctArray[series]) / 10) + "%)";
            var value = seriesData[group];
            if(value==missingVal) dvalue='.';
            else dvalue = value + pct;
            txt = seriesLabels[series] + " = " + dvalue;
        }
    }
    
    return txt;
}


function drawScatChart(containerId, parentId, dtaArray, seriesArray, clrArray, font, title, size, bAlwaysScaleZero, nSubType, nRegressionSeries,xFunction,yFunction, footing, resizeInfo)
{
    var spacerHeight = 5;

    if (resizeInfo) {
        var dtaArrayOrig = CopyArray(dtaArray);

        resizeInfo.footingHeight = (footing) ? footing.height + spacerHeight : 0;

        resizeThisChart = function() {
            var winSize = _resizeMeasurements(resizeInfo, size);

            if (winSize.height === 0 || winSize.width === 0) {
                return;
            }

            drawScatChart(containerId, parentId, dtaArrayOrig, seriesArray, clrArray, font, title,
                          resizeInfo.size, bAlwaysScaleZero, nSubType, nRegressionSeries, xFunction, yFunction, footing, resizeInfo);
        }; // end resizeThisChart()

        if (!resizeInfo.setupEvent) {
            if ('addEventListener' in window) {
                window.addEventListener("resize", resizeArdefChart, false);
            } else {
                window.attachEvent("onresize", resizeArdefChart);
            }
            resizeInfo.setupEvent = true;
        }

        if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
            size = _resizeMeasurements(resizeInfo, size);
            resizeInfo.autoFit = arConstants.AUTOFIT_RESIZE;
        }
    }

    pctArray = null;

    maybeAdjustXValues(dtaArray, nSubType);
    
    chartLook = new ChartLook('xy', clrArray, size, 0, bAlwaysScaleZero, nSubType, nRegressionSeries);
    chartLook.initFrame();

    chartData = new ChartData(dtaArray, 'xy');
    if (chartData.status != 'ok') {
        return;
    }
    var coeffs = maybeFitData(nRegressionSeries);

    // Create the rectangular element in which the chart and legend will be placed.
    makeContainer(containerId, parentId, size, '#ffffff'); // 'efefff'
    var jg = new jsGraphics(containerId);
    jg.xFunction = xFunction;
    jg.yFunction = yFunction;

    var yValues = initAxesXY(dtaArray, coeffs);
    var y0 = yValues[0];
    var y1 = yValues[1];
    seriesLabels = seriesArray;

    if (footing && (footing.htmlText !== "")) {
        drawFooter(jg, footing, chartLook);
    }

    var legendHeight = drawLegend(jg, seriesArray, chartLook.colorArray, font, chartLook.seriesLabelsFontSize, chartLook.yStart);
    chartLook.yStart -= (legendHeight + spacerHeight);
    
    //jg.drawString("yScale.min = " + yScale.min + "yScale.max = " + yScale.max + " yScale.step = " + yScale.step, chartLook.xStart - 20, 50);
    drawAxesXY(jg, font);

    // Calculate and draw each series
    for (var i = 0, numSeries = dtaArray.length/2; i < numSeries; ++i) {
        drawXYSeries(jg, chartLook.colorArray[i%chartLook.nColors], i, chartData.dataArray[2*i], chartData.dataArray[2*i+1]);
        if (nRegressionSeries == i) {
            drawFitLine(jg, chartLook.colorArray[i%chartLook.nColors], y0, y1);
        }
    }
    
    if (nRegressionSeries == -1) {
        drawFitLine(jg, "black", y0, y1);
    }

    if (title != null) {
        drawTitle(jg, title, font, chartLook.titleFontSize, chartLook.xStart, (chartLook.xEnd-chartLook.xStart));
    }
    
    jg.paint();
}

//Ie Arrays dont have .indexOf support
function AindexOf(Ar,obj) {
    for(var i=0; i<Ar.length; i++)
        if(Ar[i]==obj)    return i;
        return -1;
}

function maybeAdjustXValues(dtaArray, nSubType)
{
    if (nSubType == 1) // non-numeric X
    {
        // Store the actual "X values" as group labels
        groupLabels = new Array();
        var nGroups = 0;
        
        // Iterate over data (i is rows, j is columns).
        for (var i=0; i<dtaArray.length;  i++)
        {
            if (1 == (i % 2))
                continue; // Y-values, leave alone

            for (var j=0; j<dtaArray[i].length;  j++)
            {
                var group = dtaArray[i][j];
                var g = AindexOf(groupLabels,group);
                if (g == -1)
                {
                    groupLabels[nGroups] = group;
                    g = nGroups;
                    nGroups++;
                }
                
                // add 1 since ordinal groups are 1-based
                dtaArray[i][j] = g+1;
            }
        }
    }
    else
        groupLabels = undefined;
}

function maybeFitData(nRegressionSeries)
{
    if (nRegressionSeries == -1)
        return fitAllData();
    else if ((nRegressionSeries >= 0) && (nRegressionSeries < chartData.nSeries))
        return fitSeriesData(nRegressionSeries);
    else
        return new Array(undefined, undefined, undefined);
}

function fitAllData()
{
    var xarray = new Array();
    var yarray = new Array();
    var idx = 1;

    for (var i=0;  i<chartData.dataArray.length/2;  i++)
    {
        var xtemp = chartData.dataArray[2*i];
        var ytemp = chartData.dataArray[2*i+1];
        var len = Math.min(xtemp.length, ytemp.length);
        for (var j=0; j<len; j++)
        {
            xarray[idx] = xtemp[j];
            yarray[idx] = ytemp[j];
            idx++;
        }
    }
    
    var a = fit(xarray, yarray);
    if (a == undefined)
        return new Array(undefined, undefined, undefined);
    else
        return a;
}

function fitSeriesData(s)
{
    var xtemp = chartData.dataArray[2*s];
    var ytemp = chartData.dataArray[2*s+1];
    var xarray = new Array();
    var yarray = new Array();
    
    var len = Math.min(xtemp.length, ytemp.length);
    for (var i=0; i<len; i++)
    {
        xarray[i+1] = xtemp[i];
        yarray[i+1] = ytemp[i];
    }
    
    var a = fit(xarray, yarray);
    if (a == undefined)
        return new Array(undefined, undefined, undefined);
    else
        return a;
}

function initAxesXY(dtaArray, coeffs)
{
    var yMin = 0;
    var yMax = 0;
    var yStep = 20;
    var xMin = 0;
    var xMax = 0;
    var xStep = 20;
    for (var s=0;  s<dtaArray.length;  s++)
    {
        var seriesData = dtaArray[s];
        for (var g=0;  g<seriesData.length;  g++)
        {
            var value = seriesData[g];
            if ((s % 2) == 0)
            {
                if ((value > xMax) && (value != missingVal)) 
                    xMax = value;
                if ((value < xMin) && (value != missingVal))
                    xMin = value;
            }
            else
            {
                if ((value > yMax) && (value != missingVal))
                    yMax = value;
                if ((value < yMin) && (value != missingVal))
                    yMin = value;
            }
        }
    }
    
    // don't want funky values, but if we have non-numeric X, we already know what to do
    if (chartLook.nSubType == 1)
    {
        xMin = 0;
        xMax += 1;
        xStep = 1;
    }
    else
    {
        var niceValuesX = calcNiceValues(xMin, xMax);
        xMin = niceValuesX[0];
        xMax = niceValuesX[1];
        xStep = niceValuesX[2];
    }
    xScale = new Scale(xMin, xMax, xStep);
    
    var y0 = undefined;
    var y1 = undefined;
    var yValues = new Array(undefined, undefined);
    
    // try to ensure the regression line, if any, fits on the scale
    // save and return the values, if any, for later drawing
    if (coeffs[1] != undefined && coeffs[2] != undefined)
    {
        y0 = compute(xScale.min, coeffs);
        y1 = compute(xScale.max, coeffs);
        yValues = new Array(y0, y1);
    }

    if (y0 != undefined)
    {
        if (y0 > yMax)
            yMax = y0;
        if (y0 < yMin)
            yMin = y0;
    }
    if (y1 != undefined)
    {
        if (y1 > yMax)
            yMax = y1;
        if (y1 < yMin)
            yMin = y1;
    }
    var niceValuesY = calcNiceValues(yMin, yMax);
    yMin = niceValuesY[0];
    yMax = niceValuesY[1];
    yStep = niceValuesY[2];
    yScale = new Scale(yMin, yMax, yStep);
    
    return yValues;
}

function drawFitLine(jg, c, y0, y1)
{
    if (y0 != undefined && y1 != undefined)
    {
        var coords0 = getCoords(xScale.min, y0);
        var coords1 = getCoords(xScale.max, y1);
        jg.setColor(c);
        jg.drawLine(coords0[0], coords0[1], coords1[0], coords1[1]);
    }
}

function drawXYSeries(jg, c, s, xarray, yarray)
{
    var mkr = getMarker(s);
    var nGroups = Math.min(xarray.length, yarray.length);
    for (var g=0;  g<nGroups;  g++)
    {
        var xValue = xarray[g];
        var yValue = yarray[g];
        if(xValue==missingVal) xValue = 0;
        if(yValue==missingVal) yValue = 0;
        var coords = getCoords(xValue, yValue);
        drawMarker(jg, mkr, c, coords[0], coords[1], s, g);
    }
}

function getCoords(xValue, yValue)
{
    var xRatio = 0.0 + (xValue - xScale.min) / (xScale.max - xScale.min);
    var yRatio = 0.0 + (yValue - yScale.min) / (yScale.max - yScale.min);

    var xCoord = chartLook.xStart + (chartLook.xEnd - chartLook.xStart) * xRatio;
    var yCoord = chartLook.yStart + (chartLook.yEnd - chartLook.yStart) * yRatio;
    
    return new Array(xCoord, yCoord);
}

function getMarker(s)
{
    if(!multiMarker) return 1;
    return 1 + (s % 6);
    // 1 = square, 2 = circle; 3 = triangle; 4 = plus; 5 = inverted triangle; 6 = cross
}

function drawMarker(jg, mkr, c, xCoord, yCoord, s, g)
{
    var bWantTooltips = ((s >= 0) && (g >= 0));
    var cls = (bWantTooltips) ? (s*1000 + g) : -1;
    var xLeft = xCoord - chartLook.markerSize/2;
    var yTop = yCoord - chartLook.markerSize/2;
    
    jg.setColor(c);
    if (bWantTooltips)
    {
        var txt = getToolTipText(cls);
        jg.setTitle(txt);
        if(filterChartOn && (filterFunction!=null))
            jg.setClickOn(filterFunction+',\''+txt+'\',['+s+'],'+g+')');
        else
            jg.setClickOn('alert(\''+txt+'\')');
    }
    if (mkr == 1)
    {
        jg.fillRect(xLeft, yTop, chartLook.markerSize, chartLook.markerSize);
    }
    else if (mkr == 2)
    {
        jg.fillOval(xLeft, yTop, chartLook.markerSize, chartLook.markerSize);
    }
    else if ((mkr == 3) || (mkr == 5))
    {
        var xRight = xCoord + chartLook.markerSize/2;
        var xArray = new Array();
        var yArray = new Array();
        var i = 0;
        var sign = (mkr == 3) ? 1 : -1;
        xArray[i] = xCoord;
        yArray[i++] = yCoord - sign*chartLook.markerSize/2;
        xArray[i] = xRight;
        yArray[i++] = yCoord + sign*chartLook.markerSize/2;
        xArray[i] = xLeft;
        yArray[i++] = yCoord + sign*chartLook.markerSize/2;
        jg.fillPolygon(xArray, yArray);
    }
    else if ( (mkr == 4) || (mkr == 6) )
    {
        var xRight = xCoord + chartLook.markerSize/2;
        var yBottom = yCoord + chartLook.markerSize/2;
        jg.setStroke(2);
        if (mkr == 4)        // plus
        {
            jg.drawLine(xLeft, yCoord, xRight, yCoord);
            jg.drawLine(xCoord, yTop, xCoord, yBottom);
        }
        else if (mkr == 6)    // cross
        {
            jg.drawLine(xLeft, yTop, xRight, yBottom);
            jg.drawLine(xRight, yTop, xLeft, yBottom);
        }
    }
    if (bWantTooltips)
    {
        jg.setTitle('');
        jg.setClickOn('');
    }
//    if (bWantTooltips)
//        addToolTipDiv(jg, xLeft, yTop, chartLook.markerSize, chartLook.markerSize, cls);
}



// ScanLine is basically a thin rect (for horizontal lines, h = 1; for verticals, w = 1)
// the name may be useful for debugging or for associations.
function ScanLine(x, y, w, h, name)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.name = name;
}


// ArcInfo object holds lots of useful geometric info for clipping to 
// part of a circle.
function ArcInfo(startAngle, stopAngle, r)
{
    this.startAngle = startAngle;
    this.stopAngle = stopAngle;
    this.r = r;
    this.xp1 = Math.round(1000*Math.cos(startAngle));
    this.yp1 = Math.round(1000*Math.sin(startAngle));
    this.xp2 = Math.round(1000*Math.cos(stopAngle));
    this.yp2 = Math.round(1000*Math.sin(stopAngle));
    
    var angle = stopAngle - startAngle;
    if (angle < 0)
        angle += 2*Math.PI;
    if (angle > 2*Math.PI)
        angle -= 2*Math.PI;
    
    this.jumbo = (angle > Math.PI);
    this.angle = angle;
}

function debugAI(jg, ai)
{
    jg.drawString("ai.r = " + ai.r, 600, 20);
    jg.drawString("ai.startAngle = " + ai.startAngle, 600, 40);
    jg.drawString("ai.stopAngle = " + ai.stopAngle, 600, 60);
    jg.drawString("ai.xp1 = " + ai.xp1, 600, 80);
    jg.drawString("ai.yp1 = " + ai.yp1, 600, 100);
    jg.drawString("ai.xp1 = " + ai.xp2, 600, 120);
    jg.drawString("ai.yp1 = " + ai.yp2, 600, 140);
}

function ChartLook(gt, clrArray, size, groupLabelType, bAlwaysScaleZero, nSubType, nRegressionSeries, bLegendAtRight, bWantY2, bAlwaysDrawLegend)
{
    this.gt = gt || 'bar';
    this.groupLabelType = groupLabelType || 0;
    this.nColors = clrArray.length;
    this.colorArray = clrArray;
    
    this.titleFontSize = 14;
    this.seriesLabelsFontSize = (size == 'small' || size.width<241) ? 10 : 12;
    this.groupLabelsFontSize = 10; // (size == 'small') ? 10 : 12;
    this.scaleLabelsFontSize = (size == 'small' || size.width<241) ? 10 : 12;
    this.bLegendAtRight = bLegendAtRight;
    this.bWantY2 = bWantY2;
    if (nSubType == 1)            // no dual-Y stacked for now
        this.bWantY2 = false;
    this.bAlwaysDrawLegend = bAlwaysDrawLegend;
    this.nLegendRowHeight = (size == 'small' || size.width<241) ? 15 : 18;
    this.nBarWidth = 20;
    this.size = size || 'medium';
    this.maxGroupRows = 2;
    this.bAlwaysScaleZero = bAlwaysScaleZero;
    this.bWantLineMarkers = true;
    this.nRegressionSeries = nRegressionSeries;
    if (nSubType == undefined)
        nSubType = 0; // absolute by default
    this.nSubType = nSubType;
    
    this.initFrame = function(bIsPie)
    {
        if (typeof(this.size)=='object')
        {
            this.xStart = (bIsPie) ? 0 : 40;
            this.xEnd = this.size.width-10;
            this.yStart = this.size.height-20;
            this.yEnd = 30;
            this.yTitlePos = 2;
            this.markerSize = 8;
            this.maxRows = 4;
        }
        else if (this.size == 'small')
        {
            this.xStart = (bIsPie) ? 0 : 40;
            this.xEnd = (bIsPie) ? 240 : 210;
            this.yStart = 155;
            this.yEnd = 30;
            this.yTitlePos = 2;
            this.markerSize = 6;
            this.maxRows = 3;
        }
        else if (this.size == 'large')
        {
            this.xStart = 90;
            this.xEnd = 540;
            this.yStart = 375;
            this.yEnd = 75;
            this.yTitlePos = 20;
            this.markerSize = 10;
            this.maxRows = 6;
        }
        else // medium
        {
            this.xStart = 60;
            this.xEnd = 360;
            this.yStart = 260;
            this.yEnd = 50;
            this.yTitlePos = 10;
            this.markerSize = 8;
            this.maxRows = 4;
        }
    };
}

function ChartData(dtaArray, gt, nSubType)
{
    // TODO are these all the insufficient or null data cases?
    this.status = (dtaArray) ? 'ok' : 'null data array';
    if (this.status == 'ok')
    {
        if ((dtaArray.length == 0) || ((gt!='pie')&&(dtaArray[0].length == 0)))
            this.status = 'null data array';
    }
    
    if (this.status != 'ok')
    {
        alert(this.status);
        return;
    }
    
    this.dataArray = dtaArray;
    this.nSeries = dtaArray.length;
    this.nGroups = dtaArray[0].length;
    this.gt = gt;
    if (isStacked(gt, nSubType))
        this.summedData = processStackedData(dtaArray);
    
    if (gt == 'xy')
    {
        this.nSeries = dtaArray.length / 2;    // [0] is X, [1] is Y etc
    }
    else if (gt == 'pie')
    {
        this.nGroups = 1;  // for now...
    }
    
    // Also check for too much data
    if (gt == 'bar')
    {
        if ((this.nSeries * this.nGroups) > 100)
            this.status = ibiMsgStr['too_many_bars'];
    }
    else if ((gt == 'line') || (gt == 'xy'))
    {
        if (this.nSeries > 100)
            this.status = ibiMsgStr['too_many_series'];
//        if (this.nGroups > 200)
//            this.status = 'too many groups';
        if (this.nSeries * this.nGroups > 2000)
            this.status = ibiMsgStr['too_many_points'];
    }
    else if (gt == 'pie')
    {
        if (this.nSeries > 60)
            this.status = ibiMsgStr['too_many_series'];
    }

    if (this.status != 'ok')
    {
        alert(this.status);
    }
    
}

function Scale(min, max, step)
{
    this.min = min;
    this.max = max;
    this.step = step;
}

function correctNegStackedValue(value)
{
    return 0; // Math.abs(value) ???
}

function isStacked(gt, nSubType)
{
    var bIsStacked = false;
    if (gt == "bar" || gt == "line")
    {
        if (nSubType == 1)
             bIsStacked = true;
    }
    return bIsStacked;
}
    
function processStackedData(dataArray)
{
    var nSeries = dataArray.length;
    var nGroups = dataArray[0].length;
    // summedData is an array of group stacks, each of which is
    // an array of sums (value + previous sum).
    var summedData = new Array();
    for (var g=0;  g<nGroups;  g++)
    {
        summedData[g] = new Array();
        var sum = 0;
        for (var s=0;  s<nSeries;  s++)
        {
            var value = dataArray[s][g];
            if (value == missingVal) value = 0;
            if (value < 0)
                value = correctNegStackedValue(value);
            sum += value;
            summedData[g][s] = sum;
        }
    }

    return summedData;
}

// returns 1-based array of coefficients or undefined if something went wrong
function fit(x, y)
{
    var nCoeffs = 2;
    var nValid = Math.min(x.length, y.length) - 1;
    var afunc = new Array();
    var TOL = 1.0e-5;
    var tmp;

    // Make sure we have enough points to do a fit
    if ( nValid < nCoeffs )
        return undefined;        // better way?

    var b = new Array();
    var u = new Array();            // the column-orth. matrix from decomp
    for (var i=1; i<=nValid; i++)
    {
        u[i] = new Array();
    }
    var v = new Array();            // the orth. matrix from decomp
    for (var j=1; j<=nCoeffs; j++)
    {
        v[j] = new Array();        
    }
    var w = new Array();            // the diagonal matrix from decomp

    for (var i=1; i<=nValid; i++)
    {
        evaluate(x[i], afunc);
        tmp = 1.0;
        for (var j=1; j<=nCoeffs; j++)
            u[i][j] = afunc[j] * tmp;
        b[i] = y[i] * tmp;
    }

    var errcode = decomp(u, nValid, nCoeffs, w, v);
    if (errcode != 0)
        return undefined;

    var wMax = 0.0;
    for (var j=1; j<=nCoeffs; j++)
    {
        if (w[j] > wMax)
            wMax = w[j];
    }
    
    // Zero out the "too-small" w[j] values
    var thresh = TOL * wMax;
    for (var j=1; j<=nCoeffs; j++)
    {
        if (w[j] < thresh)
            w[j] = 0.0;
    }
    
    var a = backsub(u, w, v, nValid, nCoeffs, b);
    return a;
}
    
// assigns a[1], a[2] for linear
function evaluate(x, a)
{
    a[1] = 1.0;
    a[2] = x;
}

// computes y as linear function of x
function compute(x, a)
{
    var y = a[1] + a[2] * x;
    return y;
}

// Computes SQRT(a**2 + b**2) without destructive overflow or underflow.
function pythag(a, b)
{
    var at = Math.abs(a);
    var bt = Math.abs(b);
    var ct;
    var result;
    
    if (at > bt)
    {
        ct = bt / at;
        result = at * Math.sqrt(1.0 + ct*ct);
    }
    else
    {
        if (bt != 0)
        {
            ct = at / bt;
            result = bt * Math.sqrt(1.0 + ct*ct);
        }
        else
            result = 0.0;
    }
    
    return result;
}

// equality test for double precision values a and b that avoids
// false negatives which can occur if you test using == due to 
// inexact representation of decimals and/or rounding
//
// AFAIK javascript never uses single precision floats, so e-24 is enough slack
//
function equal(a, b)
{
    return (Math.abs(a - b) <= Math.exp(-24));
}

/**
 * <code>backsub< /code> Singular Value Back Substitution
 * Solves A*X = B for a vector X, where A is specified by the arrays
 * u[1..m][1..n], w[1..n], v[1..n][1..n] as returned by svdcmp.  No input
 * quantities are destroyed, so the routine may be called sequentially
 * with different values of b.
 */
function backsub(
    u,    // u[1..m][1..n], the column-orth. matrix from decomp
    w,    // w[1..n], the diagonal matrix from decomp
    v,    // v[1..n][1..n], the orth. matrix from decomp
    m,    // number of rows
    n,    // number of columns
    b    // b[1..m] is the right hand side (B)
)
{
    var s;
    var tmp = new Array();
    var x = new Array();
    
    // Calculate UT * B
    for (var j=1; j<=n; j++)
    {
        s = 0.0;
        
        // Nonzero result only if w[j] is nonzero
        if (w[j] != 0.0)
        {
            for (var i=1; i<=m; i++)
                s += u[i][j]*b[i];
            s /= w[j];
        }
        tmp[j] = s;
    }
    
    // Matrix multiply by V to get answer.
    for (var j=1; j<=n; j++)
    {
        s = 0.0;
        for (var jj=1; jj<=n; jj++)
            s += v[j][jj]*tmp[jj];
        x[j] = s;
    }
    
    return x;
}

/**
 * <code>decomp< /code> Singular Value Decomposition
 * Given a matrix a[1..m][1..n], this routine computes its singular value
 * decomposition A = U * W * VT.  The matrix U replaces a on output.  The 
 * diagonal matrix of singular values W is output as a vector w[1..n].
 * The matrix V (NOT its transpose VT) is output as v[1..n][1..n].  Note: we 
 * must have m >= n; if m < n, then a should be filled up to square with zero
 * rows.  Returns status (0 is success, anything else means results are invalid).
 */
function decomp(
    a,    // a[1..m][1..n], input matrix to be decomposed
    m,    // number of rows
    n,    // number of columns
    w,    // w[1..n], output diagonal matrix
    v    // v[1..n][1..n], output orthogonal matrix
)
{
    if ( n < 1 )
        return -1;

    var i,its,j,jj,k,l;
    var c,f,h,s,x,y,z, temp;
    var nm = 0;
    var anorm = 0.0;
    var g = 0.0;
    var s;
    var scale = 0.0;
    var l = 0;
    var rv1 = new Array();
    var bFlag;

    // Householder reduction to bidiagonal form.
    for (i=1; i<=n; i++)
    {
        l = i + 1;
        rv1[i] = scale * g;
        g = s = scale = 0.0;
        if (i <= m)
        {
            for (k=i; k<=m; k++)
                scale += Math.abs(a[k][i]);
            if (scale != 0.0)
            {
                for (k=i; k<=m; k++)
                {
                    a[k][i] /= scale;            // ok in js?
                    s += a[k][i] * a[k][i];
                }
                
                f = a[i][i];
//                g = -SIGN(sqrt(s),f);
                g = Math.sqrt(s);
                if (f >= 0)
                    g *= -1;
                h = f*g - s;
                a[i][i] = f - g;
                if (i != n)
                {
                    for (j=l; j<=n; j++)
                    {
                        s = 0.0;
                        for (k=i; k<=m; k++)
                            s += a[k][i] * a[k][j];
                        f = s/h;
                        for (k=i; k<=m; k++)
                            a[k][j] += f*a[k][i];
                    }
                }
                for (k=i; k<=m; k++)
                    a[k][i] *= scale;
            }
        }
        w[i] = scale * g;
        g = 0.0;
        s = 0.0;
        scale = 0.0;
        if (i <= m && i != n)
        {
            for (k=l; k<=n; k++)
                scale += Math.abs(a[i][k]);
            if (scale != 0.0)
            {
                for (k=l; k<=n; k++)
                {
                    a[i][k] /= scale;
                    s += a[i][k] * a[i][k];
                }
                f = a[i][l];
//                g = -SIGN(sqrt(s),f);
                g = Math.sqrt(s);
                if (f >= 0)
                    g *= -1;
                h = f*g - s;
                a[i][l] = f - g;
                for (k=l; k<=n; k++)
                    rv1[k]=a[i][k]/h;
                if (i != m)
                {
                    for (j=l;j<=m;j++)
                    {
                        s = 0.0;
                        for (k=l; k<=n; k++)
                            s += a[j][k] * a[i][k];
                        for (k=l; k<=n; k++)
                            a[j][k] += s * rv1[k];
                    }
                }
                for (k=l; k<=n; k++)
                    a[i][k] *= scale;
            }
        }
        anorm = Math.max(anorm, (Math.abs(w[i])+Math.abs(rv1[i])));
    }
    
    // Accumulation of right hand transformations.
    for (i=n; i>=1; i--)
    {
        if (i < n)
        {
            if (g != 0.0)
            {
                for (j=l; j<=n; j++)
                    v[j][i] = (a[i][j]/a[i][l])/g;
                for (j=l;j<=n;j++)
                {
                    s = 0.0;
                    for (k=l; k<=n; k++)
                        s += a[i][k]*v[k][j];
                    for (k=l; k<=n; k++)
                        v[k][j] += s*v[k][i];
                }
            }
            for (j=l; j<=n; j++)
                v[i][j]=v[j][i]=0.0;
        }
        v[i][i] = 1.0;
        g = rv1[i];
        l = i;
    }
    
    // Accumulation of left hand transformations.
    for (i=n;i>=1;i--)
    {
        l = i + 1;
        g = w[i];
        if (i < n)
            for (j=l; j<=n; j++)
                a[i][j]=0.0;
        if (g != 0.0)
        {
            g = 1.0/g;
            if (i != n)
            {
                for (j=l; j<=n; j++)
                {
                    s = 0.0;
                    for (k=l; k<=m; k++)
                        s += a[k][i]*a[k][j];
                    f = (s/a[i][i])*g;
                    for (k=i; k<=m; k++)
                        a[k][j] += f*a[k][i];
                }
            }
            for (j=i; j<=m; j++)
                a[j][i] *= g;
        }
        else
        {
            for (j=i; j<=m; j++)
                a[j][i]=0.0;
        }
        ++a[i][i];
    }
    
    // Diagonalization of the bidiagonal form.
    for (k=n; k>=1; k--)
    {
        for (its=1; its<=30; its++)
        {
            bFlag = true;
            for (l=k; l>=1; l--)
            {
                nm = l - 1;
                
                if (equal(rv1[l], 0.0))
                {
                    bFlag = false;
                    break;
                }
                if (equal(w[nm], 0.0))
                    break;
            }
            
            if (bFlag)
            {
                c = 0.0;
                s = 1.0;
                for (i=l; i<=k; i++)
                {
                    f = s * rv1[i];
                    rv1[i] = c * rv1[i];
                    if (equal(f, 0.0))
                        break;
                    g = w[i];
                    h = pythag(f,g);
                    w[i] = h;
                    h = 1.0 / h;
                    c = g * h;
                    s = (-f * h);
                    for (j=1; j<=m; j++)
                    {
                        y = a[j][nm];
                        z = a[j][i];
                        a[j][nm] = y*c + z*s;
                        a[j][i] = z*c - y*s;
                    }
                }
            }
            z = w[k];
            if (l == k)
            {
                if (z < 0.0)
                {
                    w[k] = -z;
                    for (j=1; j<=n; j++)
                        v[j][k] = (-v[j][k]);
                }
                break;
            }
            
            if (its == 30)
                return -2; // SVD did not converge

            x = w[l];
            nm = k - 1;
            y = w[nm];
            g = rv1[nm];
            h = rv1[k];
            f = ((y-z)*(y+z)+(g-h)*(g+h))/(2.0*h*y);
            g = pythag(f, 1.0);
//            temp = SIGN(g,f);
            temp = (f >= 0) ? g : -g;
            f = ((x-z)*(x+z) + h*((y/(f+temp))-h)) / x;
            c = s = 1.0;
            for (j=l; j<=nm; j++)
            {
                i = j + 1;
                g = rv1[i];
                y = w[i];
                h = s*g;
                g = c*g;
                z = pythag(f,h);
                rv1[j] = z;
                c = f / z;
                s = h / z;
                f = x*c + g*s;
                g = g*c - x*s;
                h = y*s;
                y = y*c;
                for (jj=1; jj<=n; jj++)
                {
                    x = v[jj][j];
                    z = v[jj][i];
                    v[jj][j] = x*c + z*s;
                    v[jj][i] = z*c - x*s;
                }
                z = pythag(f,h);
                w[j] = z;
                if (z != 0.0)
                {
                    z = 1.0 / z;
                    c = f*z;
                    s = h*z;
                }
                f = (c*g) + (s*y);
                x = (c*y) - (s*g);
                for (jj=1; jj<=m; jj++)
                {
                    y = a[jj][j];
                    z = a[jj][i];
                    a[jj][j] = y*c+z*s;
                    a[jj][i] = z*c-y*s;
                }
            }
            rv1[l] = 0.0;
            rv1[k] = f;
            w[k] = x;
        }
    }
    
    return 0; // success
}

