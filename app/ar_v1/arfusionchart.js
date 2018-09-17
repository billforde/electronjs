/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arfusionchart.js
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
ActiveJSRevision["arfusionchart"]="$Revision: 20160610.1256 $";
(function() {

    if (typeof window.ibiFusionCharts !== 'undefined') {
        return;
    }

    window.ibiFusionCharts = {
        drawChart :drawFusionChart,
        resizeChart: null,
        drawResizeChart: null,
        resizeChartTimeoutId: null
    };


    function getFusionChartInfo(fcName)
    {
        for(var i=0; i< fcinfo.fcCategory.length; i++) {
            for(var j=0; j < fcinfo.fcCategory[i].chartList.length; j++) {
                if(fcinfo.fcCategory[i].chartList[j].swfName == fcName)
                    return(fcinfo.fcCategory[i].chartList[j]);
            }    
        }
        return null;
    }

    var fusionChartCount = 0;
    function drawFusionChart(charttype,containerId, parentId, dtaArray,xnames,ynames, labels, seriesArray, groupsArray, clrArray, font, title, size,graphEngine, focexurl,regression,mytable,footing,resizeInfo)
    {
        var doc = document;
        var re = new RegExp("&nbsp;","g");
        var title2 = title.replace(re,' ');
        var useParms;
        var fcobj = getFusionChartInfo(charttype);
        var offset = 30;
        var dataVJSON;
        var connectedMode = true;
        var chartFootDiv = '', footerHeight = 0;

        if(location.protocol.indexOf("http")<0)
            connectedMode = false;
        re = new RegExp('"',"g");
        title2 = title2.replace(re,'\\"');
        var pid = parentId.getAttribute('id')+'_f';
        var pid2 = parentId.getAttribute('id')+'_ft';

        if (resizeInfo) {
            var _resizeMeasurements = function() {
                var winSize = {
                       height: window.innerHeight || doc.documentElement.offsetHeight,
                       width:  window.innerWidth  || doc.documentElement.offsetWidth
                    };

                if (winSize.height > 0 && winSize.width > 0) {
                    winSize.height -= resizeInfo.vMargins;
                    winSize.width  -= resizeInfo.hMargins;
                    resizeInfo.menuDiv.style.width = winSize.width + 'px';
                }
                return winSize;
            }; // end _resizeMeasurements()

            window.ibiFusionCharts.drawResizeChart = function() {
                var winSize = _resizeMeasurements();

                if (winSize.height === 0 || winSize.width === 0) {
                    return;
                }

                drawFusionChart(charttype, containerId, parentId, dtaArray, xnames, ynames, labels,
                                seriesArray, groupsArray, clrArray, font, title,
                                winSize, graphEngine, focexurl, regression, mytable, footing, resizeInfo);
            }; // end window.ibiFusionCharts.drawResizeChart()

            if (!resizeInfo.setupEvent) {
                window.ibiFusionCharts.resizeChart = function() {
                    window.clearTimeout(window.ibiFusionCharts.resizeChartTimeoutId);
                    window.ibiFusionCharts.resizeChartTimeoutId = 
                       window.setTimeout(function(){window.ibiFusionCharts.drawResizeChart();}, 100);
                }; // end window.ibiFusionCharts.resizeChart()

                if ('addEventListener' in window) {
                    window.addEventListener("resize", window.ibiFusionCharts.resizeChart, false);
                } else {
                    window.attachEvent("onresize", window.ibiFusionCharts.resizeChart);
                }
                resizeInfo.setupEvent = true;
            }

            if (resizeInfo.autoFit === arConstants.AUTOFIT_ON) {
                var winSize = _resizeMeasurements();
                size.height = winSize.height; size.width = winSize.width;
                resizeInfo.autoFit = arConstants.AUTOFIT_RESIZE;
            }
        }

        var h2 = size.height;
        var p3 = null;
        if(mytable) {
            p3 = mytable.maintable.wmenu;
            if(p3) h2 = h2 - p3.offsetHeight;
        }

        if (footing && (footing.htmlText !== "")) {
            var spacerHeight = 5;
            chartFootDiv = '<div id="' + pid + 'Foot" style=\"visibility:hidden;\">' + footing.htmlText + '<\/div>';
            footerHeight = footing.height + spacerHeight;
        }
        
        //parentId.innerHTML='<table border=0 padding=0 margin=0><tr><td align="center"><div id="'+pid2+'" style="font-family:'+font+';">'+title+'<\/div><\/td><\/tr><tr><td align="center"><div id="'+pid+'"><\/div><\/td><\/tr><\/table>';
        parentId.innerHTML = '<div style="width:'+size.width+'px;height:'+h2+'px;overflow:hidden;">'+
            '<div id="'+pid2+'" style="width:'+size.width+'px;"><table style="width:'+size.width+'px;" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td style="text-align:center">'+title+'<\/td><\/tr><\/table><\/div>'+
            '<div style="width:'+size.width+'px" id="'+pid+'"><\/div>'+
            chartFootDiv +
            '<\/div>';
        /*
        offset = document.getElementById(pid2).offsetHeight;
        if(offset==0) offset=30;
        var w=parseInt('0'+parentId.style.width,10)-16;
        if(w<=0) w = size.width+18;
        var h=parseInt('0'+parentId.style.height,10)-offset;
        if(h<=0) h = size.height-24;
        */ 

        var seriesMap = {};

        if(fcobj!=null) useParms = fcinfo[fcobj.chartParams];
        if(typeof(FusionCharts)!="undefined") {
            var dataJSON = '{"chart":';
            var fcName = charttype.toLowerCase();
            
            if ((fcName == 'scatter')|| (fcName == 'bubble')) {
                var maxX=0;
                var minX=0;
                var maxY=0;
                var minY=0;
                var x;
                var y;
                dataJSON += useParms;
                //dataJSON = dataJSON.substr(0,dataJSON.lastIndexOf('}'))+',"labelStep":"%ls%"},';
                dataJSON += '\n"categories":[\n';
                dataJSON +='{"category":[';

                var ga = dtaArray[0][ynames[0]];
                for(var icol=1; icol<ynames.length;icol++) {
                    ga += '/' + dtaArray[0][ynames[icol]];
                }

                if(isNaN(ga)) {
                    var sc = -1;
                    var sv = null;
                    for (var i=0; i<dtaArray.length; i++) {
                        ga = dtaArray[i][ynames[0]];
                        for(var icol=1; icol<ynames.length;icol++) {
                            ga += '/' + dtaArray[i][ynames[icol]];
                        }
                        if(typeof(seriesMap[ga])=="undefined") {
                            sc++;
                            seriesMap[ga]=sc;
                            dataJSON += '\n{"label":"'+ ga+'","x":"'+sc+'"},';
                        }
                    }
                } else {
                    var vmax = 0;
                    var vmin = 0;
                    for(var i=0; i<dtaArray.length; i++) {
                        if(vmax<dtaArray[i][ynames[0]]) vmax = dtaArray[i][ynames[0]];
                        if(vmin>dtaArray[i][ynames[0]]) vmin = dtaArray[i][ynames[0]];
                    }
                    step = Math.round((vmax-vmin)/5);
                    var j = "1";
                    var s = step+'';
                    for(var jj=1; jj < s.length; jj++) j+='0';
                    j = parseInt(j, 10);
                    step = Math.round(step/j)*j;
                    if(step==0) step = 1;
                    for (var i=vmin; i<(vmax+step); i=i+step) {
                        dataJSON += '\n{"label":"'+ i+'","x":"'+ i+'"},';
                    }
                }
                if(dataJSON.substr(dataJSON.length-1,1)==',') dataJSON = dataJSON.substr(0,dataJSON.length-1);
                dataJSON += '\n]}\n';


                dataJSON += "],\n";
                dataJSON += '"dataset":[';
                var sval = null;
                var scount = -1;
                var st = seriesArray.length;
                if(st==0) st = 1;
                  //for (var icol=0; icol<groupsArray.length; icol++) {
                for(scount=0; scount<labels.length; scount++) {
                      //Dump out the "seriesName" tag.
                    //if(sval != groupsArray[icol]) {
                    sval = labels[scount];
                    if(typeof(sval)=="undefined") sval='';
                    var sc = scount*2;
                    dataJSON += '{"anchorradius":"4",';
                    dataJSON += '"seriesname":"'+sval+'",\n';
                    dataJSON += '"showplotborder":"1",\n';
                    dataJSON += '"data":[\n';

                    //Generate more than one set of data for "value" 
                    //for multiple Series chart type.
                        for (var irow=0; irow<dtaArray.length; irow++) {
                            x = dtaArray[irow][ynames[0]];
                            for(var icol=1; icol<ynames.length;icol++) {
                                x += '/' + dtaArray[irow][ynames[icol]];
                            }
                            y = dtaArray[irow][xnames[scount]];
                            if(isNaN(x)) 
                                x = seriesMap[x];
                            if(y<minY) minY=y;
                            if(x<minX) minX=x;
                            if(y>maxY) maxY=y;
                            if(x>maxX) maxX=x;
                            if (fcName == 'bubble') {
                                var z = dtaArray[irow][xnames[scount+1]];
                                if(typeof(z)=="undefined") z = 10;
                                dataJSON += '{"x" :"'+x+'","y":"'+y+'","z":"'+z+'"}';
                            } else
                            dataJSON += '{"x" :"'+x+'","y":"'+y+'"}';
                            if(irow<dtaArray.length-1) dataJSON += ',\n';
                        }
                        dataJSON += ']},';
                    //}
                    if (fcName == 'bubble') scount++;
                }
                if(dataJSON.substr(dataJSON.length-1,1)==',') dataJSON = dataJSON.substr(0,dataJSON.length-1);

                dataJSON += ']';
                var ls = parseInt(maxX/6, 10);
                if(ls<1) ls = 1;
                dataJSON = dataJSON.replace("%ls%",ls);

              //-------------------------------------------------    
              //Do multiple series or Stacked/Scroll/Radar charts
              //-------------------------------------------------
              } else if (fcName.indexOf('ms') != -1 ||
                  fcName.indexOf('stacked') != -1 ||
                  fcName.indexOf('scroll') != -1 ||
                  fcName.indexOf('radar') != -1) {

                dataJSON += useParms;

                dataJSON += '"categories":[{"category":[';
                for (var irow=0; irow<dtaArray.length; irow++) {
                    dataJSON += '{"label":"';
                    for(var icol=0; icol<ynames.length;icol++) {
                        dataJSON +=  dtaArray[irow][ynames[icol]];
                        if(icol<ynames.length-1) dataJSON += '/';
                    }
                    dataJSON += '"}';
                    if(irow<dtaArray.length-1) dataJSON += ',';
                }
                dataJSON += "]}],";
                dataJSON += '"dataset":[';
                  for (var icol=0; icol<labels.length; icol++) {
                      //Dump out the "seriesName" tag.
                    dataJSON += '{';
                    dataJSON += '"seriesname":"'+labels[icol]+'",';
                    dataJSON += '"data":[';

                    //Generate more than one set of data for "value" 
                    //for multiple Series chart type.
                    for (var irow=0; irow<dtaArray.length; irow++) {
                        dataJSON += '{"value" :"'+dtaArray[irow][xnames[icol]]+'"}';
                        if(irow<dtaArray.length-1) dataJSON += ',';
                    }
                    dataJSON += ']}';
                    if(icol<xnames.length-1) dataJSON += ',';
                }
                dataJSON += ']';
            //----------------
            //Do single series    
            //----------------            
              } else  {

                dataJSON += useParms;

                dataJSON += '"data":[';
                for(var i=0;i < dtaArray.length;i++) {
                    var ga = dtaArray[i][ynames[0]];
                    for(var icol=1; icol<ynames.length;icol++) {
                        ga += '/' + dtaArray[i][ynames[icol]];
                    }
                    dataJSON += '{"label":"'+ga+'","value":'+dtaArray[i][xnames[0]]+'}';
                    if(i<(dtaArray.length-1)) dataJSON +=",";
                }
                dataJSON += "]";
            }
            //FusionCharts.debugMode.enabled(function() { console.log(arguments); },'verbose');
            //FusionCharts.debugMode.outputTo( function() { console.log(arguments); } );

            dataJSON += '}';
            //dataJSON = dataJSON.replace("%caption%",title2);
            dataJSON = dataJSON.replace("%caption%","");
            
             if((graphEngine==4)||(!connectedMode))FusionCharts.setCurrentRenderer("javascript");
            //FusionCharts.setSwfURL('/ibi_apps/');
            var alias = "/ibi_apps/fusioncharts322/";
            if(focexurl && (focexurl!='')) {
                var ind = focexurl.indexOf('WFServlet');
                if (ind>0) alias = focexurl.substr(0,ind)+'fusioncharts322/';
            }
            var dj = eval('('+dataJSON+')');
            var fcc = fusionChartCount;

            window.setTimeout(function(){
                var p1 = doc.getElementById(pid);
                var p2 = doc.getElementById(pid2);
                if(p1 && (p1.offsetWidth == 0)) return;
                var w = p1.offsetWidth;
                var h = (parentId.offsetHeight-p2.offsetHeight) - footerHeight;
                if(b_ie) h = h-4;
                var chart = new FusionCharts(alias+charttype+".swf",containerId+'_'+fcc,w+'',h+'','0','1');
                chart.setJSONData(dj);

                window.setTimeout(function(){
                    var p1 = doc.getElementById(pid2);
                    if(p1)chart.render(pid);
                    if (footerHeight > 0) {
                        doc.getElementById(pid+"Foot").style.visibility = 'visible';
                    }
                },0);
            },0);
            fusionChartCount++;
        }
    }

})();
