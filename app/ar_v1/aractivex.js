/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/aractivex.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180327 1248 bjd 200037 AHTML:IE: Sending email second time displays warning messag
* 180305 1222 bjd 167765 AHTML : Export to excel, % is exported as & #x25;
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 171012 0915 bjd 196199 When exporting an Active Report with Null values to Excel,
* 170307 1429 iys 189191 Unable to save charts in a single page doc when using Save
* 170223 0904 iys 188837 IE:If Save Changes with Filtered Only, page never loads
* 170110 1451 iys 186392 Display user friendly message when opening eStatements on i
* 161121 1138 bjd 185696 AHTML:Exporting the report to Excel missing currency symbol
* 161104 1255 bjd 185696 AHTML:Exporting the report to Excel missing currency symbol
* 161103 1053 bjd 185696 AHTML:Exporting the report to Excel missing currency symbol
* 161027 1313 bjd 178662 AHTML: Export to Excel respect number formatting
* 160805 0853 iys 171761 AHTML:IE10:"Selected Grid only option" from SaveAs and Send
* 160610 1256 hms 180534 Remove tab characters from source files
* 160128 1537 iys 171754 AHTML:IE10:Browser error is displayed when opening E-mailed
* 151120 1108 iys 169351 Active Dash tabs not respecting custom styling when saved
* 150915 1339 iys 136916 i5r AHTML Meta tags for MF removed when Save/Send As Email
* 150205 1637 bjd 130409 AHTML:Export XML( Excel) Looses dollar char Formatting
* 150108 1353 bjd 162940 i5r IA AHTML Report incorrectly exports percentage to Excel
* 141104 1209 bjd 146870 AHTML:Export Line chart to Excel\Word\PPT always a Pie
* 141028 1551 bjd 146870 AHTML:Export Line chart to Excel\Word\PPT always a Pie
* 141014 1801 bjd 146870 AHTML:Export Line chart to Excel\Word\PPT always a Pie
* 141010 1456 bjd 146870 AHTML:Export Line chart to Excel\Word\PPT always a Pie
* 140926 1755 bjd 146870 AHTML:Export Line chart to Powerpoint always a Pie
* 140829 1340 bjd 157552 AHTML:Excel Export:ASNAME blank column title shows Column #
* 140703 1251 bjd 159097 i5r: V2R1 Active Report Export 2 Excel date format changes
* 140606 0757 wjf 134795 Active Visualization
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.19 $
//$Log: aractivex.js,v $
//Revision 1.19  2014/05/12 15:00:13  Brian_DCruz
//[p158691] Need to get original dataField in order to display comment so that it can be deleted
//
//Revision 1.18  2013/09/23 14:40:46  William_Forde
//[p152618] call gentables_delay instead of gentables.  Copy all meta tags to save file.
//
//Revision 1.17  2013/07/09 17:35:13  Brian_DCruz
//[p148297] Display popup window with message; hide excel file during its creation; display it once it is completed
//
//Revision 1.16  2012/10/02 21:48:59  Brian_DCruz
//[p141830] value stored in mytable.a_cont[row][j][DASTR] for dates, not necessarily a string
//
//Revision 1.15  2012/09/19 22:07:46  Brian_DCruz
//[p138849] For format %age, use the DASTR value for cell.value.
//
//Revision 1.14  2012/09/11 16:03:27  William_Forde
////[p138307][>branch8001][>branch80_maint] fix unwanted split of JAVASCRIPT keyword.
//
//Revision 1.13  2012/09/05 20:06:20  William_Forde
//[p138307][>branch8001][>branch80_maint] fix pt after newline.
//
//Revision 1.12  2012/08/23 18:04:14  William_Forde
//[p138525][>branch8001][>branch80_maint] Fix missing semicolon
//
//Revision 1.11  2012/08/22 18:52:20  William_Forde
//[p138525][>branch8001][>branch80_maint]  Try to trick compressor by moving string to a function.
//
//Revision 1.10  2012/08/21 15:21:44  William_Forde
//[p138525][>branch8001][>branch80_maint] Fix eye catcher so that we dont break tscq.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["aractivex"]="$Revision: 20180327.1248 $";
(function() {
    var pptApp = null;
    var wdApp = null;
    var exApp = null;
    var MSCPIE = 5, MSCLINE = 4, MSCBAR = 51, MSCSCAT = -4169;
    var ForReading = 1;
    var ForWriting = 2;
    var ForAppending = 8;
    var TriStateFalse = 0;
    var fsObj = null;
    var gds;
    var oute = null;
    var outmsg = null;
    var outMI = null;
    var olMailItem = 0;
    var olAppointmentItem = 1;
    var olContactItem = 2;
    var olTaskItem = 3;
    var olJournalItem = 4;
    var olNoteItem = 5;
    var olPostItem = 6;
    var olDistributionListItem = 7;

    var sverror = null;
    var prompts = { 'win': -1, 'callback': null, 'callargs': null };

    if (typeof (window.ibiActiveX) !== 'undefined') {
        return;
    }
    window.ibiActiveX = {
        WordGraph: wordgraph,
        ExcelGraph: excelgraph,
        ExcelExport: excelexport,
        PptGraph: pptgraph,
        EmailMe: emailme,
        Save_AR: save_AR,
        PromptUser: promptuser,
        Do_SaveAR: do_saveAR,
        Prompts: prompts
    };


    function buildCell(ctitles, dataArray, isExcel, yart) {
        var cell;
        gds.cells.clear();
        for (var i = 1; i <= dataArray[0].length; i++) {
            if (isExcel) cell = gds.cells(i + 1, 1);
            else cell = gds.cells(1, i + 1);
            cell.value = ctitles[i - 1];

        }
        var dl = dataArray.length;
        for (var i = 0; i < dl; i++) {
            if (isExcel) cell = gds.cells(1, i + 2);
            else cell = gds.cells(i + 2, 1);
            cell.value = yart[i];
            for (var j = 0; j < dataArray[i].length; j++) {
                if (isExcel) cell = gds.cells(j + 2, i + 2);
                else cell = gds.cells(i + 2, j + 2);
                if (dataArray[i][j] == missingVal)
                    cell.value = '';
                else
                    cell.value = dataArray[i][j];
            }
        }
    }

    function getOfficeChartType(ctype, pn) {
        var chartType;
        switch (ctype) {
            case chartIsPie:
                chartType = arXlChartType.xlPie;
                break;
            case chartIsLine:
                chartType = arXlChartType.xlLine;
                break;
            case chartIsBar:
                chartType = arXlChartType.xlColumnClustered;
                break;
            case chartIsScat:
                chartType = arXlChartType.xlXYScatter;
                break;
            case chartIsTDG:
                switch (pn.parms.fctype.toUpperCase()) {
                    case "COLUMN":
                    case "VBAR":
                    case "VBRSTK1":
                        chartType = arXlChartType.xlColumnClustered;
                        break;
                    case "COLUMN2":
                        chartType = arXlChartType.xlColumnStacked;
                        break;
                    case "COLUMN3":
                    case "VBRSTKPC":
                        chartType = arXlChartType.xlColumnStacked100;
                        break;
                    case "BAR2":
                        chartType = arXlChartType.xlBarStacked;
                        break;
                    case "BAR3D": case "3D_BAR":
                    case "COLUMN4":
                        chartType = arXlChartType.xl3DColumn;
                        break;
                    case "COLUMN5":
                        chartType = arXlChartType.xl3DColumnStacked;
                        break;
                    case "COLUMN6":
                        chartType = arXlChartType.xl3DColumnStacked100;
                        break;
                    case "BAR3":
                        chartType = arXlChartType.xlBarStacked100;
                        break;
                    case "BAR":
                    case "3DBAR":
                    case "HBAR":
                    case "HBRSTK1":
                        chartType = arXlChartType.xlBarClustered;
                        break;
                    case "PIE":
                        chartType = arXlChartType.xlPie;
                        break;
                    case "PIE2":
                        chartType = arXlChartType.xl3DPie;
                        break;
                    case "LINE": case "LINE3": case "LINE4":
                    case "VLINE":
                        chartType = arXlChartType.xlLine;
                        break;
                    case "VLINSTK": case "VLINSTK2":
                        chartType = arXlChartType.xlLineStacked;
                        break;
                    case "LINE2": 
                        chartType = arXlChartType.xlLineMarkers;
                        break;
                    case "SCATTER": case "SCATTERS":
                    case "BUBBLE":
                        chartType = arXlChartType.xlXYScatter;
                        break;
                    case "AREA":
                    case "VAREA":
                        chartType = arXlChartType.xlArea;
                        break;
                    case "AREA2":
                    case "VAREASTK": 
                        chartType = arXlChartType.xlAreaStacked;
                        break;
                    case "AREA3D": case "3DAREAS":
                        chartType = arXlChartType.xl3DArea;
                        break;
                    case "DONUT": case "DONUT2": case "DONUT3":
                    case "PIERING":
                        chartType = arXlChartType.xlDoughnut;
                        break;
                    case "RADAR": case "RADARL":
                        chartType = arXlChartType.xlRadar;
                        break;
                    case "RADAR2": case "RADARA":
                        chartType = arXlChartType.xlRadarFilled;
                        break;
                    default: 
                        chartType = arXlChartType.xlPie; // original logic, defaults to pie;
                        break;
                }
                break;
            default:
                chartType = arXlChartType.xlPie; // original logic, defaults to pie;
                break;
        }
        return chartType;
    }

    function wordgraph(title, dataArray, ctitles, yart, ctype, win, pn) {
        var wdBlank = 12;
        var cleft = 0, ctop = 0, cwidth = 500, cheight = 400;
        var wobj;
        var wdType = getOfficeChartType(ctype, pn);

        if (wdApp) {
            // if(!wdApp.visible) 
            for (var i = 0; i < maxwindows; i++) {
                pwn[i].chartinfo.newDoc = null;
                pwn[i].chartinfo.wdGraph = null;
            }
            wdApp = null;
        }
        sverror = window.onerror;
        window.onerror = msappError;
        if (wdApp == null) {
            wdApp = new ActiveXObject('Word.Application');
            wdApp.visible = true;
        }
        window.onerror = sverror;
        if (pn.newDoc == null) {
            pn.newDoc = wdApp.Documents.Add();
            pn.wdGraph = null;
        }
        if (pn.wdGraph == null) {
            cleft = pn.newDoc.pageSetup.pageHeight / 4;
            ctop = pn.newDoc.pageSetup.pageHeight / 4;
            cwidth = pn.newDoc.pageSetup.pageWidth / 2;
            cheight = pn.newDoc.pageSetup.pageHeight / 3;
            pn.wdGraph = pn.newDoc.InlineShapes.addOLEObject('MSGraph.Chart');
            pn.wdGraph.width = cwidth;
            pn.wdGraph.height = cheight;
            //  wdGraph.left=cleft;
            //  wdGraph.top=ctop;
            gds = null;
        }
        wobj = pn.wdGraph.OLEFormat.object;
        wobj.ChartType = wdType;
        gds = wobj.application.dataSheet;
        buildCell(ctitles, dataArray, 0, yart);
    }



    function excelgraph(title, dataArray, ctitles, yart, ctype, win, pn) {
        var exBlank = 12;
        var cleft = 0, ctop = 0, cwidth = 500, cheight = 400;
        var exRange;
        var exType = getOfficeChartType(ctype, pn);

        if (exApp)
            if (!exApp.visible) {
            for (var i = 0; i < maxwindows; i++) {
                pwn[i].chartinfo.newEx = null;
                pwn[i].chartinfo.exSheet = null;
                pwn[i].chartinfo.exGraph = null;
            }
            exApp = null;
        }

        sverror = window.onerror;
        window.onerror = msappError;
        if (exApp == null) {
            exApp = new ActiveXObject('Excel.Application');
            exApp.visible = true;
            pn.newEx = null;
        }
        window.onerror = sverror;
        if (pn.newEx == null) {
            pn.newEx = exApp.WorkBooks.Add();
            pn.exSheet = exApp.WorkBooks(1).WorkSheets(1);
            pn.exGraph = null;
        }
        pn.exGraph = exApp.charts.add;

        pn.exGraph.charttype = exType * 1;
        gds = exApp.WorkBooks(1).WorkSheets(1);
        buildCell(ctitles, dataArray, 1, yart);

        pn.exGraph.activate();
        rangelist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        exRange = pn.exSheet.Range('A1:' + rangelist.charAt(dataArray.length) + (dataArray[0].length + 1));
        pn.exGraph.SetSourceData(exRange);
        pn.exGraph.location(2, pn.exSheet.name);
    }

    function cnvSpace(str) {
        var re = new RegExp("&nbsp;", "g");
        str = str.replace(re, ' ');
        return str;
    }

    function excelexport(table_number) {
        var exBlank = 12;
        var cleft = 0, ctop = 0, cwidth = 500, cheight = 400;
        var exRange;
        var cell;
        var val, valStr, exlExportMsgWindow = null;
        var mytable = getMyTable(table_number);

        if (exApp)
            if (!exApp.visible) {
            for (var i = 0; i < maxwindows; i++) {
                pwn[i].chartinfo.newEx = null;
                pwn[i].chartinfo.exSheet = null;
                pwn[i].chartinfo.exGraph = null;
            }
            exApp = null;
        }
        sverror = window.onerror;
        window.onerror = msappError;
        if (exApp == null) {
            exApp = new ActiveXObject('Excel.Application');
            mytable.newEx = null;
            var exlExportMsg = ibiMsgStr['exlExportMsg'];
            exlExportMsgWindow = window.open("", "exlExportMsgWindow", "width=200,height=150");
            if (exlExportMsgWindow != null) { exlExportMsgWindow.document.write(exlExportMsg); }
        }
        window.onerror = sverror;
        if (mytable.newEx == null) {
            mytable.newEx = exApp.WorkBooks.Add();
            mytable.exSheet = exApp.WorkBooks(1).WorkSheets(1);
            mytable.exGraph = null;
        }
        gds = exApp.WorkBooks(1).WorkSheets(1);
        gds.cells.clear();

        var i, j, curCol, numCols, numRows, row, darawVal, dastrVal, x = 0, focNumFmt;
        var exlFormat = {};
        for (i = 0, numCols = mytable.n_cols; i < numCols; i++) {
            curCol = mytable.a_capt[i];
            if (!curCol.noprint) {
                if ((typeof curCol.exlFormat === 'undefined') &&
                    ((curCol.type == IBIDATE) || (curCol.type == IBINUM))) {
                    ISetExlFormat(curCol, exlFormat);
                }
                cell = gds.cells(1, x + 1);
                cell.value = mytable.a_cntl.a_cols[i].dis; //need ASname (.dis) instead of .name;
                x++;
            }
        }
        numCols = mytable.a_capt.length;
        for (i = 0, numRows = mytable.a_f_body.length; i < numRows; i++) {
            row = mytable.a_f_body[i][0];
            x = 0;
            for (j = 0; j < numCols; j++) {
                curCol = mytable.a_capt[j];
                if (!curCol.noprint) {
                    darawVal = mytable.a_cont[row][j][DARAW];
                    cell = gds.cells(i + 2, x + 1);
                    if (darawVal == missingVal) {
                        cell.value = '';
                    } else {
                        dastrVal = mytable.a_cont[row][j][DASTR];
                        if (curCol.type != IBIDATE) {
                            val = (darawVal === arConstants.MISSING_OR_NODATA)
                                  ? mytable.IBs[dastrVal]
                                  : mytable.IBs[darawVal];
                            if (curCol.type == IBINUM) {
                                focNumFmt = curCol.format;
                                if (curCol.isPct) {
                                    val /= 100;
                                }
                                cell.NumberFormat = curCol.exlFormat;
                            } else
                            if (curCol.type == IBISTR) { val = cnvSpace(val + ''); }
                        } else {
                            val = mytable.IBs[dastrVal];
                            if (typeof val == 'string' && val.substr(0, 2).toUpperCase() == "<A") {
                                val = mytable.IBs[darawVal];
                            } else {
                                cell.NumberFormat = curCol.exlFormat;
                                if (curCol.reformatInput === true) {
                                    valStr = mytable.IBs[darawVal] + '';
                                    val = valStr.substr(0, 4) + '/' + valStr.substr(4, 2) + '/' + valStr.substr(6, 2);
                                }
                            }
                        }
                        cell.value = val;
                    }
                    x++;
                }
            }
        }
        if (exApp !== null) {
            exApp.visible = true;
            if (exlExportMsgWindow != null) { exlExportMsgWindow.close(); }
        }
    }

    function pptgraph(title, dataArray, ctitles, yart, ctype, win, pn) {
        var ppBlank = 12;
        var cleft = 0, ctop = 0, cwidth = 500, cheight = 400;
        var pobj;
        var pptType = getOfficeChartType(ctype, pn);

        if (pptApp)
            if (!pptApp.visible) {
            for (var i = 0; i < maxwindows; i++) {
                pwn[i].chartinfo.newpres = null;
                pwn[i].chartinfo.newslide = null;
                pwn[i].chartinfo.pptGraph = null;
            }
            pptApp = null;
        }
        sverror = window.onerror;
        window.onerror = msappError;

        if (pptApp == null) {
            pptApp = new ActiveXObject('PowerPoint.Application');
            pptApp.visible = true;
            pn.newpres = null;
        }
        window.onerror = sverror;
        if (pn.newpres == null) {
            pn.newpres = pptApp.presentations.add(true);
            pn.newslide = null;
        }
        if (pn.newslide == null) {
            pn.newslide = pn.newpres.Slides.Add(1, ppBlank);
            pn.pptGraph = null;
        }
        if (pn.pptGraph == null) {
            cleft = pptApp.activePresentation.pageSetup.slideHeight / 4;
            ctop = pptApp.activePresentation.pageSetup.slideHeight / 4;
            cwidth = pptApp.activePresentation.pageSetup.slideWidth / 1.5;
            cheight = pptApp.activePresentation.pageSetup.slideHeight / 1.5;
            pn.pptGraph = pn.newslide.Shapes.addOLEObject(cleft, ctop, cwidth, cheight, 'MSGraph.Chart');
        }
        pobj = pn.pptGraph.OLEFormat.object;
        pobj.ChartType = pptType * 1;
        gds = pobj.application.dataSheet;
        buildCell(ctitles, dataArray, 0, yart);
    }


    function msappError() {
        window.onerror = sverror;
        sverror = null;
        alert(ibiMsgStr['NeedActiveXMsg']);
        return true;
    }

    function fnError(msg) {
        alert(msg.message);
        return true;
    }

    function emailme(tn) {
        var mytable = getMyTable(tn);
        var tryother = false;

        if (oute == null) {
            try {
                oute = GetActiveOleObject('Outlook.Application');
            }
            catch (err) {
                tryother = true;
            }
        }

        if (tryother) {
            try {
                oute = new ActiveXObject('Outlook.Application');
            }
            catch (err) {
                msappError();
            }
        }
        if (fsObj == null) {
            try {
                fsObj = new ActiveXObject('Scripting.FileSystemObject');
            }
            catch (E) {
                msappError();
            }
        }
        if (!fsObj) return;
        var tempdir = fsObj.GetSpecialFolder(2);
        var filename = tempdir + '\\ActiveReport.htm';
        promptuser(ibiMsgStr['pmsave'], filename, 40, mytable.a_cntl.table_number, save_and_email, ptypeEmail);
    }


    function do_emailme(filename) {
        if (oute != null) {
            do_emailsend(filename);
            oute = null;
        }
    }



    function do_emailsend(filename) {
        try {
            outmsg = oute.CreateItem(olMailItem);
        }
        catch (err) {
            fnError(err);
        }
        if (outmsg) {
            try {
                outmsg.Subject = ibiMsgStr['sesub'];
                outmsg.Body = ibiMsgStr['seatt'];
                outmsg.Attachments.Add(filename);
                outmsg.Display();
            }
            catch (err) {
                fnError(err);
            }
        }
    }


    function promptuser(str, varname, size, tablenumber, callbackfunc, ptype, callargs) {
        var wind = 'promptwin';
        var title = ibiMsgStr['Prompt'];
        if (ptype == ptypePass)
            title = ibiMsgStr['passpmt'];
        else
            if (ptype == ptypeSave)
            title = ibiMsgStr['savepmt'];
        else
            if (ptype == ptypeNote)
            title = ibiMsgStr['addnotes'];

        if (prompts.win == -1)
            prompts.win = getfreewin();
        var line = '';
        var mytable = null;
        var tn = -1;
        if (tablenumber != -1) {
            mytable = getMyTable(tablenumber);
            tn = mytable.a_cntl.table_number;
        }
        prompts.callback = callbackfunc;
        prompts.callargs = callargs;
        if (prompts.win != -1) {
            var nwin = 'win' + prompts.win;
            var nnwin = 'windiv' + prompts.win;
            setwin(prompts.win, wind, tn, typepmt, title);
            var noWinControl = false;
            if (ptype == ptypePass) noWinControl = true;

            buildwin(prompts.win, title, mytable, false, null, null, noWinControl);
            line += '<table id="PromptTable' + prompts.win + '"><tr><td>';
            if (ptype == ptypeNote) {
                var id = callargs;
                var ids = id.split("r");
                if (ids.length == 1)
                    ids = id.split("l");
                var rowcol = ids[1].split("C");
                var col = rowcol[1] * 1;
                if (typeof mytable.a_capt[col].origDataField !== 'undefined') {
                    col = mytable.a_capt[col].origDataField;
                }
                var rows = rowcol[0].split(".");
                var row = rows[0] * 1;
                row = mytable.a_f_body[row][0];
                var notes = mytable.a_cont[row][col][DANOTE];
                line += "<div id='npw_" + tn + "_" + row + "_" + col + "'>";
                if ((typeof (notes) != 'undefined') && (typeof ibiNotes !== 'undefined')) {
                    line += ibiNotes.readNoteArray(notes, 'HTMLDEL', prompts.win, mytable, row, col);
                }
                line += "<\/div>";
            }
            if (ptype == ptypePass) {
                line += "<form name='promptform' action='javascript:nop();' onSubmit='return checkPassword();'>" +
                    "<table>" +
                //"<tr><td colspan=2><span class='arCommentText'>"+ibiMsgStr['passpmt']+"<\/span><\/td><\/tr>"+
                    "<tr><td colspan=2>" + varname + "<\/td><\/tr>" +
                    "<tr><td>" + str + "<\/td>" +
                    "<td><input type=password size=" + size + "  name='password'><\/td><\/tr>";

                line += "<tr><td colspan=2 align=RIGHT><table><tr><td style=\"white-space:nowrap;cursor:pointer\" onclick=\"checkPassword()\">" +
                    "<div width=\"100%\" class=\"arPromptButton\" style=\"cursor:pointer\">&nbsp;" +
                        ibiMsgStr['ok'] + "&nbsp;<\/div><\/td><\/tr><\/table><\/td><\/tr>";
            } else
                if (ptype == ptypeNote) {
                if (typeof ibiNotes !== 'undefined') {
                    line += "<form name='promptform' action='javascript:nop();' onSubmit='return ibiNotes.Do_addNote(" + tablenumber + ");'>" +
                       "<table><tr><td>" + str + "<\/td><\/tr>" +
                       "<tr><td><textarea name='note' rows=4 cols=60><\/textarea><\/td><\/tr>";

                    line += "<tr><td><table><tr><td style=\"white-space:nowrap;cursor:pointer\" onclick=\"ibiNotes.Do_addNote(" + tablenumber + ")\">" +
                       "<div width=\"100%\" class=\"arPromptButton\" style=\"cursor:pointer\">&nbsp;" +
                           ibiMsgStr['addnotes'] + "&nbsp;<\/div><\/td><\/tr><\/table><\/td><\/tr>";
                }
            } else {
                line += "<form name='promptform' action='javascript:nop();' onSubmit='return ibiActiveX.Do_SaveAR(" + tablenumber + ");'>" +
                    "<table><tr><td>" + str + "<\/td><\/tr>" +
                    "<tr><td><input type=text name='pvalue' size=" + size + " value=\"" + varname + "\"><\/td><\/tr>";

                line += "<tr><td><input checked='checked' type='checkbox' name='override'>" + ibiMsgStr['pmov'] + "<\/td><\/tr>";
                if (mytable.a_filter_body != null)
                    line += "<tr><td><input type='checkbox' name='filtered'>" + ibiMsgStr['pmfl'] + "<\/td><\/tr>";
                if (ptype == ptypeEmail)
                    line += "<tr><td><input checked='checked' type='checkbox' name='savechange'>" + ibiMsgStr['pmsac'] + "<\/td><\/tr>";
                if (ibiCompound.ibiLayout.length && MyTable.length > 1)
                    line += "<tr><td><input type='checkbox' name='saveAll'>" + ibiMsgStr['pmsal'] + "<\/td><\/tr>";
                line += "<tr><td><table><tr><td style=\"white-space:nowrap;cursor:pointer\" onclick=\"ibiActiveX.Do_SaveAR(" + tablenumber + ")\">" +
                    "<div width=\"100%\" class=\"arPromptButton\" style=\"cursor:pointer\">&nbsp;" +
                        ibiMsgStr['pmsre'] + "&nbsp;<\/div><\/td><\/tr><\/table><\/td><\/tr>";
            }
            line += '<\/table><\/form><\/td><\/tr><\/table>';
            pwn[prompts.win].dobj_b.innerHTML = line;
            maxwin(prompts.win);
            if (ptype == ptypeNote) d.promptform.note.focus();
        }
    }

    function save_AR(tn) {
        var mytable = getMyTable(tn);
        var filename = 'c:\\ARsave.html';

        if (fsObj == null) {
            try {
                fsObj = new ActiveXObject('Scripting.FileSystemObject');
            }
            catch (err) {
                msappError();
            }
        }
        if (!fsObj) return;
        promptuser(ibiMsgStr['pmsav'], filename, 40, mytable.a_cntl.table_number, save_AR_now, ptypeSave);
    }



    function do_saveAR(tablenumber) {
        var nF = null;
        var filename = d.promptform.pvalue.value;
        var doOverride = false;
        var openBrowser = false;
        var saveState = true;
        var filtonly = false;
        var saveCurOnly = true;

        filename = filename.replace(/\\/g, '\\\\');
        if (d.promptform.override.checked) doOverride = true;
        if (d.promptform.openbrowser)
            if (d.promptform.openbrowser.checked) openBrowser = true;
        if (d.promptform.filtered)
            if (d.promptform.filtered.checked) filtonly = true;
        if (d.promptform.savechange)
            if (!d.promptform.savechange.checked) saveState = false;
        if (d.promptform.saveAll)
            if (!d.promptform.saveAll.checked) saveCurOnly = false;
        if (1) {
            try {
                /* -1, unicode format designator, fixes issue with writing out araesdecode.js */
                var nF = fsObj.CreateTextFile(filename, doOverride, true);
            }
            catch (err) {
                fnError(err);
            }
        }
        if (nF) {
            closewin(prompts.win);
            prompts.win = -1;
            prompts.callback(nF, tablenumber, false, filename, filtonly, openBrowser, saveState, saveCurOnly);
        }
        return false;
    }

    function save_and_email(nF, tablenumber, x, filename, filtonly, openBrowser, saveState, saveCurOnly) {
        save_AR_now(nF, tablenumber, true, filename, filtonly, openBrowser, saveState, saveCurOnly);
    }

    function getExternalJSFile(url) {
        var IRreq = ibiUtil.GetXmlHttpObject();
        if ((IRreq != null) && (url != "")) {
            IRreq.open("GET", url, false);
            IRreq.send(null);
            if ((IRreq.readyState == 4) && (IRreq.status != 404))
                return (IRreq.responseText);
        }
        return ("");
    }

    function dummyfix(str) {
        var reg;
        reg = new RegExp("SPACE", "g");
        str = str.replace(reg, ' ');
        return (str);
    }

    function save_AR_now(nF, tnumber, dosendemail, filename, filtonly, openBrowser, saveState, saveCurOnly, noScript) {
        var x, i;
        var dse = '\/\/-' + '-' + '>';
        var metatag = '';
        var ma = d.getElementsByTagName('META');
        var sty = d.getElementById('ibiArCustomStyle');
        var styUser = d.getElementById('ibiArCustomStyleUser');

        if (ma)
            for (i = 0; i < ma.length; i++) {
            if (ma[i].httpEquiv != "")
                metatag += '<' + 'meta http-Equiv="' + ma[i].httpEquiv + '" content="' + ma[i].content + '">\r\n';
            else
                if (ma[i].name != "")
                metatag += '<' + 'meta name="' + ma[i].name + '" content="' + ma[i].content + '">\r\n';
        }
        var sahb = '<' + '!DOCTYPE html>\r\n' +
            '<' + 'html>\r\n<' + 'head>\r\n' + metatag + '<' + 'title>WebFOCUS Active Report<\/title>\r\n';
        if (sty) {
            sahb += '<' + 'style id="ibiArCustomStyle" type="text/css">\r\n' + sty.innerHTML + '<\/style>\r\n';
        }
        if (styUser) {
            sahb += '<' + 'style id="ibiArCustomStyleUser" type="text/css">\r\n' + styUser.innerHTML + '<\/style>\r\n';
        }
        var sahe = '<\/head>\r\n<' + 'body>\r\n';
        var jsdisabledmsg = document.querySelector('noscript');
        var ttcall = dse + '\r\n<' + '\/script>\r\n' +
            '<' + 'script language="JavaScript">\r\n<' + '!' + '-' + '-\r\n' +
            'genTables_delay();\r\n' +
            dse + '\r\n<' + '\/script>\r\n';
        var vainit = 'T_cont[NumOfTable]=new Array();\r\na_T_cont[NumOfTable]=new Array();\r\nb_T_cont[NumOfTable]=new Array();\r\n';
        var ba = d.getElementsByTagName('BASE');
        var sahi = '';
        if (ba) {
            for (var i = 0; i < ba.length; i++)
                if (ba[i].href) sahi = '<base href="' + ba[i].href + '">\r\n';
        } else sahi = '';

        var sah = sahb + sahi + sahe;
        if(jsdisabledmsg) {
            sah += '<noscript>\r\n' + jsdisabledmsg.innerText + '\r\n<\/noscript>\r\n';
        }
        var dss = "\/\/startSPACEofSPACEjavascript"; // shorten eye catcher so that we dont break tscq.
        dss = dummyfix(dss);
        var pos = d.body.innerHTML.indexOf(dss) + dss.length;
        var a = d.body.innerHTML.substr(pos);
        var dss2 = "\/\/SPACEendSPACEofSPACEinclud"; // shorten eye catcher so that we dont break tscq.
        dss2 = dummyfix(dss2);
        var b = a.substr(0, a.lastIndexOf(dss2));
        var g;
        var mytable = null;
        var end;

        if (saveCurOnly) {
            start = tnumber;
            end = tnumber + 1;
        } else {
            start = 0;
            end = MyTable.length;
        }
        if (!noScript) {
            nF.Write(sah);
            nF.Write('<' + 'script language="JavaScript">\r\n<' + '!--\r\n');
            nF.Write(dss + '\r\n');
            var hasScripts = d.getElementsByTagName("script");
            if (hasScripts) {
                var bb = '';
                for (i = 0; i < hasScripts.length; i++) {
                    //only way to get script is through AJAX call
                    if (hasScripts[i].src != "") {
                        var txt = getExternalJSFile(hasScripts[i].src) + "\r\n";
                        nF.Write(txt);
                    }
                }
            }
            nF.Write(b + '\r\n');

            nF.Write('\r\n' + dss2 + 'es\r\n' + dse + '\r\n<' + '\/SCRIPT>\r\n');
            nF.Write('<' + 'script language="JavaScript">\r\n<' + '!--\r\n');
        }
        for (var tablenumber = start; tablenumber < end; tablenumber++) {
            mytable = getMyTable(tablenumber);
            if(mytable.isRollUp) continue;
            var savt = mytable.ru_a_cntl.table_number;
            mytable.ru_a_cntl.table_number = 0;

            if (saveState) {
                for (var j = 0; j < mytable.n_cols; j++)
                    mytable.a_capt[j].popmenu = '<div id="popid' + (tablenumber - start) + '_' + j + '"><\/div>';
                cstr = writeobjout(mytable.a_capt);
                for (var j = 0; j < mytable.n_cols; j++)
                    mytable.a_capt[j].popmenu = '<div id="popid' + tablenumber + '_' + j + '"><\/div>';
            } else {
                for (var j = 0; j < mytable.ru_a_capt.length; j++)
                    mytable.ru_a_capt[j].popmenu = '<div id="popid' + (tablenumber - start) + '_' + j + '"><\/div>';
                cstr = writeobjout(mytable.ru_a_capt);
            }
            nF.Write('T_capt[NumOfTable]=' + cstr + ';\r\n');

            cstr = writeobjout(mytable.o_look.styles);
            nF.Write('t_T_capt[NumOfTable]=' + cstr + ';\r\n');

            cstr = writeobjout(mytable.ru_o_look);
            nF.Write('T_look[NumOfTable]=' + cstr + ';\r\n');

            var sanr = mytable.ru_a_cntl.NumRecords;
            if (filtonly && mytable.a_filter_cont) mytable.ru_a_cntl.NumRecords = mytable.a_filter_cont.length;
            else mytable.ru_a_cntl.NumRecords = mytable.a_all_cont.length;
            cstr = writeobjout(mytable.ru_a_cntl);
            mytable.ru_a_cntl.NumRecords = sanr;
            nF.Write('T_cntl[NumOfTable]=' + cstr + ';\r\n');

            nF.Write(vainit);

            if (filtonly && mytable.a_filter_cont) cstr = writeobjout(mytable.a_filter_cont);
            else cstr = writeobjout(mytable.a_all_cont);

            nF.Write('T_cont[NumOfTable]= ' + cstr + ';\r\n');

            cstr = writeobjout(mytable.acdLines);
            nF.Write('a_T_cont[NumOfTable]=' + cstr + ';\r\n');

            cstr = writeobjout(mytable.acdList);
            nF.Write('b_T_cont[NumOfTable]=' + cstr + ';\r\n');

            cstr1 = "'n_freeze_column':" + mytable.n_freeze_column + "," +
                "'n_freeze_column_before_hide':" + mytable.n_freeze_column_before_hide + "," +
                "'n_rows':" + mytable.n_rows + "," +
                "'o_paging_n':" + mytable.o_paging.n + "," +
                "'o_paging_c':" + mytable.o_paging.c + "," +
                "'AccordionIsOn':" + mytable.AccordionIsOn + ",\r\n" +
                "'a_sort':" + writeobjout(mytable.a_sort) + ",\r\n" +
                "'top_aggregate':" + mytable.top_aggregate + "," +
                "'bottom_aggregate':" + mytable.bottom_aggregate + "," +
                "'WindowDisplay':'" + mytable.a_cntl.WindowDisplay + "'," +
                "'groupSort':'" + mytable.groupSort + "'," +
                "'calcType':" + mytable.calcType + "," +
                "'sublevel':" + mytable.sublevel + "," +
                "'reportView':" + mytable.a_cntl.reportView + "," +
                "'showsubHF':" + mytable.showsubHF + ",\r\n";
            if (mytable.org_capt) {
                cstr1 += "'a_capt':" + writeobjout(mytable.a_capt) + ",\r\n";
                cstr1 += "'a_capt_org':" + writeobjout(mytable.org_capt) + ",\r\n";
                var sa = [];
                for (var i = 0; i < mytable.bykeys.length; i++) {
                    sa[i] = mytable.bykeys[i].subcalcData;
                    mytable.bykeys[i].subcalcData = null;
                }
                cstr1 += "'bykeys':" + writeobjout(mytable.bykeys) + ",\r\n";
                for (var i = 0; i < mytable.bykeys.length; i++) {
                    mytable.bykeys[i].subcalcData = sa[i];
                }
            }
            cstr1 += "'agg':[";
            for (var i = 0; i < mytable.n_cols; i++) {
                cstr1 += "{";
                cstr1 += "'SUM':" + mytable.a_capt[i].SUM + ",";
                cstr1 += "'MIN':" + mytable.a_capt[i].MIN + ",";
                cstr1 += "'MAX':" + mytable.a_capt[i].MAX + ",";
                cstr1 += "'AVG':" + mytable.a_capt[i].AVG + ",";
                cstr1 += "'COU':" + mytable.a_capt[i].COU + ",";
                cstr1 += "'DIS':" + mytable.a_capt[i].DIS + ",";
                cstr1 += "'vispct':" + mytable.a_capt[i].vispct + ",";
                cstr1 += "'haspro':" + mytable.a_capt[i].haspro + ",";
                cstr1 += "'vis':" + mytable.a_capt[i].vis + ",";
                cstr1 += "'b_hide':" + mytable.a_capt[i].b_hide;
                cstr1 += "}";
                if (i < (mytable.n_cols - 1)) cstr1 += ",";
            }
            cstr1 += "],\r\n";

            cstr1 += "'rowselection':[";
            var ff = 0;
            var obody = mytable.a_all_body;
            if (filtonly && mytable.a_filter_body)
                obody = mytable.a_filter_body;
            var ol = obody.length;
            for (i = 0; i < ol; i++)
                if (obody[i][1] == 1) {
                ff = 1;
                cstr1 += i + ',';
            }
            if (ff) cstr1 = cstr1.substr(0, cstr1.length - 1);
            cstr1 += '],\r\n';
            if (filtonly && mytable.a_filter_cont)
                cstr1 += "'a_col_filter':[],\r\n";
            else
                cstr1 += "'a_col_filter':" + writeobjout(mytable.a_col_filter) + ",\r\n";

            if (saveState)
                if (mytable.acdNode) {
                cstr1 += "'acdNode':[";
                for (i = 0; i < mytable.acdList.length; i++) {
                    cstr1 += mytable.acdNode[mytable.acdList[i]];
                    if (i < mytable.acdList.length - 1) cstr1 += ",";
                }
                cstr1 += "],\r\n";
            }
            cstr1 += "'charts':[";
            var ff = 0;
            for (var i = 0; i < maxwindows; i++)
                if ((pwn[i].table_number == mytable.a_cntl.table_number) &&
                    ((pwn[i].type == typechart) || (pwn[i].type == typepivot))) {
                if (ff == 1) cstr1 += "\r\n";
                ff = 1;
                pwn[i].chartinfo.saveable.saveXpos = pwn[i].xpos;
                pwn[i].chartinfo.saveable.saveYpos = pwn[i].ypos;
                pwn[i].chartinfo.saveable.saveWidth = pwn[i].width;
                pwn[i].chartinfo.saveable.saveHeight = pwn[i].height;
                cstr1 += "{'chartinfo':" + writeobjout(pwn[i].chartinfo.saveable) + "},";
            }
            if (ff) cstr1 = cstr1.substr(0, cstr1.length - 1);
            cstr1 += ']\r\n';

            if (saveState) nF.Write('T_saveARs[NumOfTable]={' + cstr1 + '};\r\n');
            nF.Write('NumOfTable++;\r\n');

            mytable.ru_a_cntl.table_number = savt;
            for (var j = 0; j < mytable.ru_a_capt.length; j++)
                mytable.ru_a_capt[j].popmenu = '<div id="popid' + savt + '_' + j + '"><\/div>';
        }
        
        if(ibiStd.globalProps) {
            nF.Write('ibiStd.globalProps=' + writeobjout(ibiStd.globalProps) + ';\r\n');
        }

        cstr = writeobjout(ARstrings, false);
        nF.Write('ARstrings = ' + cstr + ';\r\n');
        if (isMergeReports) {
            nF.Write('isMergeReports=true;\r\n');
        }
        if (LayoutObjects.length) {
            cstr = writeobjout(LayoutObjects, false);
            nF.Write('LayoutObjects=' + cstr + ';\r\n');
        }
        if (LayoutSection.length) {
            cstr = writeobjout(LayoutSection, false);
            nF.Write('LayoutSection=' + cstr + ';\r\n');
        }
        if ((typeof (ibiSkin.Images) != 'undefined') && (typeof (ibiSkin.IMGARRAY) != 'undefined')) {
            nF.Write('ibiSkin.IMGARRAY=[];\r\n');
            cstr = writeobjout(ibiSkin.ImgGlobalStyle);
            nF.Write('ibiSkin.ImgGlobalStyle = ' + cstr + ';\r\n');
            nF.Write('ibiSkin.Images = [];\r\n');
            for (var j = 0; j < ibiSkin.Images.length; j++) {
                cstr = writeobjout(ibiSkin.Images[j]);
                nF.Write('ibiSkin.Images[' + j + ']=' + cstr + ';\r\n');
            }
            if (ibiSkin.IMGARRAY.length) {
                savehtml = [];
                for (var j = 0; j < ibiSkin.IMGARRAY.length; j++) {
                    savehtml[j] = ibiSkin.IMGARRAY[j].html;
                    ibiSkin.IMGARRAY[j].html = null;
                }
                cstr = writeobjout(ibiSkin.IMGARRAY);
                nF.Write('ibiSkin.IMGARRAY=' + cstr + ';\r\n');
                for (var j = 0; j < ibiSkin.IMGARRAY.length; j++)
                    ibiSkin.IMGARRAY[j].html = savehtml[j];
            }
        }
        if (!noScript) {
            nF.Write(ttcall);
            nF.Write('<\/body>\r\n<\/html>');
        }
        nF.Close();
        if (dosendemail) do_emailme(filename);
        if (openBrowser) {
            var url = 'file:///' + filename.replace(/\\\\/g, '/');
            var nw = d.open(url, '_blank', '');
        }
    }
})();
