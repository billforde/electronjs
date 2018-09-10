/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arexport.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180823 1206 bjd 103932 AHTML:Export to Excel:ACROSS column values be in heading
* 180629 1043 bjd 103932 AHTML:Export to Excel/CSV:ACROSS column values be in heading
* 180621 1615 bjd 203630 AHTML: Implement the Save Changes for non-IE browsers
* 180604 1600 bjd 203630 AHTML: Implement the Save Changes for non-IE browsers
* 180305 1222 bjd 167765 AHTML : Export to excel, % is exported as & #x25;
* 171117 1034 bjd 198030 AHTML: Export to XML (Excel) does not respect Scientific No
* 171018 1044 bjd 195755 Export an Active Report to HTML results in page number and
* 171012 0915 bjd 196199 When exporting an Active Report with Null values to Excel,
* 170522 1605 bjd 191414 AHTML: Refactor Excel\XML code generation
* 161223 1135 bjd 187252 AHTML: Export to Excel done a second time fails usibg Chrom
* 161205 1159 bjd 185696 AHTML:Exporting the report to Excel missing currency symbol
* 161121 1138 bjd 185696 AHTML:Exporting the report to Excel missing currency symbol
* 161108 1537 txk 186188 NLS: Unable to export an active report with DBCS data in Fi
* 160909 0941 wjf 183566 AHTML:Export to CSV/EXCEL formates displays wrong outputs
* 160610 1256 hms 180534 Remove tab characters from source files
* 160406 1747 bjd 179417 Extract to Excel generate XLSX not EXL2K
* 160406 1641 bjd 179417 Extract to Excel generate XLSX not EXL2K
* 160329 1547 iys 178966 AHTML:Val:Print dialog not showing up for active report in
* 160106 1842 iys 165502 AHTML Print dialog not showing up with Active Cache ON
* 151229 1113 iys 165502 AHTML Print dialog not showing up with Active Cache ON
* 150914 1523 bjd 136022 AHTML: NFR: Export to PDF Option
* 150824 1222 bjd 170518 AHTML: LAYOUTRTL being lost when printing ahtml files
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arexport"]="$Revision: 20180823.1206 $";
function IExportHTML(dofilter,do_print) {
    if(this.a_cntl.cacheMode) {
        IexportData(this.a_cntl.table_number,'HTML',dofilter);
        cursor_clear();
        return;
    }
    var new_window;
    if(do_print) {
        var pContainer = document.getElementById('printWindow');
        if(!pContainer) {
            pContainer = document.createElement('div');
            if(b_ie)
                pContainer.style.setAttribute('cssText', 'position:absolute;top:100px;width:500px;height:500px;border:0px;z-index:9999;', 0);
            else
                pContainer.setAttribute('style', 'position:absolute;top:100px;width:500px;height:500px;border:0px;z-index:9999;');
            pContainer.setAttribute('id', 'printWindow');
            document.getElementsByTagName('body')[0].appendChild(pContainer);
        }
        pContainer.innerHTML = "<iframe id='new_window'></iframe>";
        new_window = document.getElementById('new_window');
    } else {
        new_window = window.open("", "_blank", "");
    }
    if(typeof(new_window)=="undefined") {
        alert(ibiMsgStr['pop']);
        cursor_clear();
        return;
    }
    if((dofilter)&&(this.haveFilters)) {
        this.a_f_body = this.a_filter_body;
        this.a_cont = this.a_filter_cont;
    } else {
        this.a_f_body = this.a_all_body;
        this.a_cont = this.a_all_cont;
    }
    var savehide=[];

    cursor_wait();
    //if (this.a_sort.length) this.callSort();
    this.n_rows = this.a_f_body.length;
    var s_n  = this.o_paging.n;
    var s_c  = this.o_paging.c;
    var s_l  = this.s_light;
    var s_fr = this.n_freeze_column;
    //this.o_paging.n = this.n_rows;
    //this.o_paging.c = 0;
    this.s_light='';
    this.is_export = true;
    this.n_freeze_column = 0;
/* dont put out noprint
    if(!dofilter)
    for(var i=0;i<this.n_cols;i++) {
        if(this.a_capt[i].b_hide) {
            savehide[savehide.length]=i;
            this.a_capt[i].b_hide=false;
        }
    }
*/
    var exportHTML = [];
    var numPages = Math.ceil(this.n_rows / this.o_paging.n);
    try {
        if (this.ru_o_look.paging.by == 0) { // LINES-PER-PAGE=UNLIMITED
            numPages = 1;
        }
    } catch (e) { }
    for (var j = 0; j < numPages; j++) {
        this.o_paging.c = j;
        exportHTML[exportHTML.length] = ibiGrid.build(this.id).replace("/\'/g","\\'");
    }
    
    this.is_export = false;
    this.o_paging.n = s_n;
    this.o_paging.c = s_c;
    this.s_light = s_l;
    this.n_freeze_column = s_fr;
    var nd = new_window.document;
    if(!nd)
        nd = new_window.contentWindow.document;
    nd.open();  
    nd.write("<html><title>Export<\/title><body>");
    nd.dir = document.dir;
    nd.write(GlobalStyle);
    var s_ = '';
    if(typeof(ImgGlobalStyle)!="undefined") {
        s_ += '\n<STYLE type="text/css">\n';
        var ilen = ImgGlobalStyle.length;
        for(var j=0; j< ilen; j++)
            s_ += ImgGlobalStyle[j]+'\n';
        s_ += '\n<\/STYLE>\n';
    }

    if(this.a_cntl.style) {
        s_ += '\n<STYLE type="text/css">\n';
        for(i=0;i<this.a_cntl.style.length;i++)
            s_ += this.a_cntl.style[i]+'\n';
        s_ += '\n<\/STYLE>\n';
    }
    if(do_print) {
        s_ += '\n<STYLE type="text/css">\n';
        s_ += '@media print {.argrid {page-break-after: always;}}';
        s_ += '\n<\/STYLE>\n';
    }
    nd.write(s_);
    for(var j=0; j<exportHTML.length; j++) {
        nd.write('<header>Page ' + (j+1) + '</header><br>');
        nd.write(exportHTML[j]);
    }
    nd.write("<\/body><\/html>");
    nd.close();
    ibi_add_images(new_window);
    if(do_print) {
        // use execCommand instead of print method so that IE properly prints
        // contents of iframe instead of the original document.
        if(b_ie_version) {
            nd.execCommand('print', false, null);
        } else {
            new_window.contentWindow.print();   
        } 
        
        setTimeout(function() {
            $('#printWindow').hide();
        }, 0);
    } else
    if(b_ie)
        nd.execCommand('SaveAs',null,"export.html");
    if(savehide.length)
        for(var i=0;i<savehide.length;i++) 
            this.a_capt[savehide[i]].b_hide=true;
    cursor_clear();
    
}

function IExportRemote(dofilter,focusFormat) {
    IexportData(this.a_cntl.table_number,focusFormat,dofilter);
    cursor_clear();
    return;
}

function IExportCSV(dofilter) {
    if(this.a_cntl.cacheMode) {
        IexportData(this.a_cntl.table_number,'COMMA',dofilter);
        cursor_clear();
        return;
    }
    var new_window = window.open("","_blank","");
    if(typeof(new_window)=="undefined") {
        alert(ibiMsgStr['pop']);
        cursor_clear();
        return;
    }
    if((dofilter)&&(this.haveFilters)) {
        this.a_f_body = this.a_filter_body;
        this.a_cont = this.a_filter_cont;
    } else {
        this.a_f_body = this.a_all_body;
        this.a_cont = this.a_all_cont;
    }
 
    var line = '',oline,expline;
	//if(b_ie)
		line += "<PRE>";
    cursor_wait(document);
    //if (this.a_sort.length) this.callSort();
    for(var i=0;i<this.n_cols;i++) {
        if(!this.a_capt[i].noprint) {
            line+='"'+this.a_cntl.a_cols[i].name+'"';
            if(i!=this.n_cols-1) line += ',';
        }
    }
    line+='\r\n';
    for(var i=0; i<this.a_f_body.length;i++) {
        expline = true;
        oline = '';
        for(var j=0; j<this.n_cols;j++) {
            if(!this.a_capt[j].noprint) {
                var val;
                if(this.a_cont[this.a_f_body[i][0]][j][DARAW]<0)
                    val = '';
                else 
                if (this.a_capt[j].type != IBIDATE)
                    val = this.IBs[this.a_cont[this.a_f_body[i][0]][j][DARAW]];
                else {
                    val = this.IBs[this.a_cont[this.a_f_body[i][0]][j][DASTR]];
                    if(val.substr(0,2).toUpperCase() == "<A")
                        val = this.IBs[this.a_cont[this.a_f_body[i][0]][j][DARAW]];
                }
                if(typeof(val)=="undefined") expline = false;
                if(this.a_capt[j].type == IBINUM)
                    oline+=val;
                else
                    oline+= '"' + val + '"';
                if(j!=this.n_cols-1) oline+=',';
            }
        }
		if(expline) line += oline + '<br>';
    }
	//if(b_ie)
		line +="</PRE>";
   	var nd = new_window.document.open("text/html");
    //var nd = new_window.document;
    nd.open(); 
    nd.write(line);
    nd.close();
    if(b_ie)
        nd.execCommand('SaveAs',null,"export.txt");
    cursor_clear(document);
}

/**
 * Get Excel Column Number based on numeric colNum
 * colNum: excel 1-based number
 */
function getExlColNum(colNum) {
    var AAA_COLUMN = 702; //(0-based) col with 3 letters
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z'];
    var alphabetLen = alphabet.length;
    var exlColStr = "";

    --colNum;

    if (colNum >= AAA_COLUMN) {
        var aCol = colNum - alphabetLen;
        var rem = AAA_COLUMN - alphabetLen;
        exlColStr += alphabet[((aCol / rem) | 0) - 1];
        exlColStr += alphabet[(((aCol % rem) / alphabetLen) | 0)];
        exlColStr += alphabet[(((aCol % rem) % alphabetLen) | 0)];
    } else if (colNum >= alphabetLen) {
        exlColStr += alphabet[((colNum / alphabetLen) | 0) - 1];
        exlColStr += alphabet[((colNum % alphabetLen) | 0)];
    } else {
        exlColStr = alphabet[colNum];
    }

    return exlColStr;
} // end getExlColNum()

/**
 * Get Excel Number and Currency format for type IBINUM which includes currency
 */
function getExlNumFormat(focNumFmt) {
    var focusToExcelCurrencyFormat = {
        "M" : "\$",
        "!D": "\$",
        "!L": "[$\u00a3-452]",
        "!Y": "[$\u00a5-478]",
        "!E": "[$\u20ac-42E]",
        "!F": "[$\u20ac-42E]"
    };

    var MAXFMTLEN = 8, DECPOINT = ".", COMMA = ",";
    var k, mantissa, exlNumFmt;
    var integral = "", fractional = "", trailingNeg = false;
    var decPlace = focNumFmt.indexOf(".");
    var focCurrency = focNumFmt.replace(/\D+\d+((\.)?(\d+)?)?/, "")
                            .replace(/\s*\)$/, "");
    var isExp = (focCurrency === "!E") ? false : /E/.test(focNumFmt);
    focCurrency = focCurrency.replace(/^C/, "");
    if (focCurrency[0] === "-") {
        trailingNeg = true;
        focCurrency = focCurrency.replace(/^-/, "");
    }
    var currencySymbol = focusToExcelCurrencyFormat[focCurrency] || "";
    var isPct = (focCurrency[0] == "%");

    if (decPlace !== -1) {
        mantissa = focNumFmt.substr(decPlace + 1, MAXFMTLEN - decPlace)
                         .replace(/\D/g, "") * 1;
        if (mantissa > 0) {
            fractional += DECPOINT;
            for (k = 0; k < mantissa; ++k) {
                fractional += "0";
            }
        }
    }
    if ((focCurrency !== "") && !isExp && !isPct) {
        integral = "#" + COMMA + "##";
        integral += ((fractional !== "") &&
                     (focCurrency === "M" || focCurrency === "!D"))
                    ? "#" : "0";
        switch (focCurrency) {
            case "!F":
                exlNumFmt = integral + fractional + currencySymbol;
                break;
            default:
                exlNumFmt = currencySymbol + integral + fractional;
                break;
        }
    } else {
        if (isExp) {
            exlNumFmt = "0" + ((fractional === "") ? "." : fractional) + "E+00";
        } else {
            switch (focNumFmt[0]) {
                case 'D':
                    integral = "#" + COMMA + ((fractional === "") ? "##0" : "###");
                    break;
                case 'F':
                case 'I':
                case 'P':
                    integral = (fractional === "") ? "0" : "#";
                    break;
                default:
                    integral = "0";
                    break;
            }
            exlNumFmt = integral + fractional;
            if (isPct) {
                exlNumFmt += "%_)";
            }
        }
    }

    if (trailingNeg) {
        exlNumFmt += ";" + exlNumFmt + "-";
    }

    return exlNumFmt;
} // end getExlNumFormat()

/**
 * get Excel format given a FOCUS format and type: IBISTR, IBIDATE, IBINUM
 */
function getExlFormat(focFmt, focType) {
    switch (focType) {
        case IBINUM:
            return getExlNumFormat(focFmt);
        case IBIDATE:
            return arFocXlDateFormats[focFmt] || "@";
        default:
            return "General";
    }
} // end getExlFormat()

function ISetExlFormat(col, xmlFormatObj, isXml) {
    if ((col.type != IBINUM) && (col.type != IBIDATE)) {
        return;
    }

    var MAXFMTLEN = 8;
    var focFmt = col.format.substr(1, MAXFMTLEN).trim();

    if (typeof xmlFormatObj[focFmt] !== "undefined") {
        col.exlFormat = xmlFormatObj[focFmt];
    } else {
        var exlFmt = getExlFormat(focFmt, col.type);
        if (col.type == IBIDATE) {
            switch (focFmt) {
                case "DMYY":
                    col.reformatInput = true;
                    break;
                default:
                    col.reformatInput = false;
                    break;
            }
            xmlFormatObj[focFmt] = col.exlFormat = exlFmt;
        } else if (col.type == IBINUM) {
            col.isPct = (exlFmt.match(/%+/g));
            xmlFormatObj[focFmt] = col.exlFormat = (isXml === true)
                ? '<Style ss:ID="' + focFmt + '"><NumberFormat ss:Format="' + exlFmt + '"/></Style>\r\n'
                : exlFmt;
        }
    }

    if (isXml === true) {
        col.exlStyleID = focFmt;
    }
} // end ISetExlFormat()

function IExportXML(dofilter) {
    if(this.a_cntl.cacheMode) {
        var format;
        var arExpExcel = ['EXL2K', 'XLSX'];
        var formatExcel = (typeof this.a_cntl.hfx !== 'undefined')
                          ? this.a_cntl.hfx : 1;
        switch (formatExcel) {
            case arConstants.SS_VALUE_EXL2K:
            case arConstants.SS_VALUE_XLSX:
                format = arExpExcel[formatExcel];
                break;
            default:
                format = 'XLSX';
                break;
        }
        IexportData(this.a_cntl.table_number,format,dofilter);
        cursor_clear();
        return;
    }

    if((dofilter)&&(this.haveFilters)) {
        this.a_f_body = this.a_filter_body;
        this.a_cont = this.a_filter_cont;
    } else {
        this.a_f_body = this.a_all_body;
        this.a_cont = this.a_all_cont;
    }
    //if (this.a_sort.length) this.callSort();
    if(b_hasActiveX) {
        ibiActiveX.ExcelExport(this.a_cntl.table_number);
        return;
    }
    var line = [], val1, val;
    var xmltop  = '<?xml version="1.0"?>\r\n<?mso-application progid="Excel.Sheet"?>\r\n';
        xmltop += '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"\r\n';
        xmltop += 'xmlns:o="urn:schemas-microsoft-com:office:office"\r\n';
        xmltop += 'xmlns:x="urn:schemas-microsoft-com:office:excel"\r\n';
        xmltop += 'xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\r\n';
        xmltop += 'xmlns:html="http://www.w3.org/tr/REC-html40">\r\n';
        xmltop += '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">\r\n';
        xmltop += '<LastAuthor>AHTML<\/LastAuthor>\r\n';
        xmltop += '<Created>2005-09-16T14:17:47Z<\/Created>\r\n';
        xmltop += '<Version>11.6360<\/Version>\r\n';
        xmltop += '<\/DocumentProperties>\r\n';
        xmltop += '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">\r\n';
        xmltop += '<ProtectStructure>False<\/ProtectStructure>\r\n';
        xmltop += '<ProtectWindows>False<\/ProtectWindows>\r\n';
        xmltop += '<\/ExcelWorkbook>\r\n';

    var xmlStyDef  = '<Style ss:ID="Default" ss:Name="Normal">\r\n';
        xmlStyDef += '<Alignment ss:Vertical="Bottom"/>\r\n';
        xmlStyDef += '<Borders/>\r\n<Font/>\r\n<Interior/>\r\n<NumberFormat/>\r\n<Protection/>\r\n';
        xmlStyDef += '<\/Style>\r\n';

    var xmltab  = '<Worksheet ss:Name="AHTML">\r\n';
//        xmltab += '<Table ss:ExpandedColumnCount="'+this.n_cols+'" ss:ExpandedRowCount="'+(this.a_f_body.length+1)+'" x:FullColumns="1"\r\n';
        xmltab += '<Table x:FullColumns="1"\r\n';
        xmltab += 'x:FullRows="1">\r\n';

    var xmlend  = '<\/Table>\r\n';
        xmlend += '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">\r\n';
        xmlend += '<Selected/>\r\n';
        xmlend += '<ProtectObjects>False<\/ProtectObjects>\r\n';
        xmlend += '<ProtectScenarios>False<\/ProtectScenarios>\r\n';
        xmlend += '<\/WorksheetOptions>\r\n';
        xmlend += '<\/Worksheet>\r\n';
        xmlend += '<\/Workbook>\r\n';
 
    cursor_wait();

    var etype, i, curCol, darawVal, dastrVal;
    var cols = this.n_cols, actualNumCols = 0;
    var xmlStyles = "";
    var styles = {};
    var xmlColHeading = '';
    for (i = 0; i < cols; i++) {
        curCol = this.a_capt[i];
        if (!curCol.noprint) {
            delete curCol.exlFormat;
            ++actualNumCols;
        }
    }

    var _getHeadFootString = function(headFoot, spanZero) {
        var r, c, numRows, numCols, colSpan, cellValue;
        var headFootStr = '';
        for (r = 0, numRows = headFoot.length; r < numRows; ++r) {
            headFootStr += '<Row>\r\n';
            for (c = 0, numCols = headFoot[r].length; c < numCols; ++c) {
                cellValue = headFoot[r][c].name
                            .replace(/^\<tt\>/, "")
                            .replace(/\<\/tt\>$/, "");

                colSpan = headFoot[r][c].colspan * 1;

                cellColSpan = '';
                if (colSpan > 1) {
                    cellColSpan = ' ss:MergeAcross="' + (colSpan - 1) + '"';
                } else if (spanZero && (colSpan == 0)) {
                    cellColSpan = ' ss:MergeAcross="' + (actualNumCols - 1) + '"';
                }

                headFootStr += '<Cell' + cellColSpan + '><Data ss:Type="String">'
                                 + cellValue
                                 + '<\/Data><\/Cell>\r\n';
            }
            headFootStr += '<\/Row>\r\n';
        }
        return headFootStr;
    }; // end _getHeadFootString()

    if (this.a_cntl.heading) {
        xmlColHeading += _getHeadFootString(this.a_cntl.heading, true);
    }

    if (this.a_cntl.acheading) {
        xmlColHeading += _getHeadFootString(this.a_cntl.acheading, false);
    }

    xmlColHeading += '<Row>\r\n'
    for (i = 0; i < cols; i++) {
        curCol = this.a_capt[i];
        if (!curCol.noprint) {
            if ((typeof curCol.exlFormat === 'undefined') &&
                (curCol.type == IBINUM)) {
                ISetExlFormat(curCol, styles, true);
            }
            //p157552: need ASname (.dis) instead of .name;
            xmlColHeading += '<Cell><Data ss:Type="String">' + this.a_cntl.a_cols[i].dis + '<\/Data><\/Cell>\r\n';
        }
    }
    xmlColHeading += '<\/Row>\r\n';

    line[line.length] = xmltop;
    line[line.length] = '<Styles>\r\n';
    line[line.length] = xmlStyDef;
    for (var key in styles) {
        xmlStyles += styles[key];
    }
    line[line.length] = xmlStyles;
    line[line.length] = '<\/Styles>\r\n';
    line[line.length] = xmltab;
    line[line.length] = xmlColHeading;

	for(i=0;i<this.a_f_body.length;i++) {
		var linex = '<Row>\r\n';
		var expline = true;
        var row = this.a_f_body[i][0];
        for(var j=0; j < cols; j++) {
            curCol = this.a_capt[j];
            if (!curCol.noprint) {
                darawVal = this.a_cont[row][j][DARAW];
                if (darawVal == -1) {
                    val = '<Data ss:Type="String"> <\/Data>';
                } else {
                    etype = (curCol.type == IBINUM) ? "Number" : "String";
                    dastrVal = this.a_cont[row][j][DASTR];
                    if (curCol.type != IBIDATE) {
                        val1 = (darawVal === arConstants.MISSING_OR_NODATA)
                               ? this.IBs[dastrVal]
                               : this.IBs[darawVal];
                        if (curCol.isPct) {
                            val1 /= 100;
                        }
                    } else {
                        val1 = this.IBs[dastrVal];
                        if(val1.substr(0,2).toUpperCase() == "<A")
                            val1 = this.IBs[darawVal];
                    }
                    val = '<Data ss:Type="'+etype+'">'+val1+'<\/Data>';
                }
                linex += '<Cell'
                    + ((typeof curCol.exlStyleID === "undefined") ? '>' : (' ss:StyleID="' + curCol.exlStyleID + '">'))
                    + val + '<\/Cell>\r\n';
                if(typeof(val)=='undefined') expline = false;
            }
        }
        linex+= '<\/Row>\r\n';
        if(expline) line[line.length] = linex;
    }

    if (this.a_cntl.footing) {
        line[line.length] = _getHeadFootString(this.a_cntl.footing, true);
    }

    line[line.length]= xmlend;
	var l = line.join();
	var l64 = window.btoa(unescape(encodeURIComponent(l)));
	var nw = "";
	if(!b_edge)
		nw = 'data:application/vnd.ms-excel;base64,'+l64;
	var new_window = window.open(nw,"_blank","");
	if((typeof(new_window)=="undefined") || (new_window == null)) {
		alert(ibiMsgStr['pop']);
		cursor_clear();
		return;
	}
	if(b_edge) {
    var nd = new_window.document.open("text/plain");
        nd.open();
		nd.write(l);
        nd.close();
	}
    if(b_ie)
        nd.execCommand('SaveAs',null,'export.xml');
    cursor_clear();
}

function IExportPDF(dofilter) {
    if (this.a_cntl.cacheMode) {
        IexportData(this.a_cntl.table_number, 'PDF', dofilter);
        cursor_clear();
    }
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


function ISave_AR(tn) {
    var mytable = getMyTable(tn);
    var filename = 'ARsave.html';

    if (b_hasActiveX &&
        (typeof mytable.tableJson !== 'undefined' && mytable.tableJson.useActiveX)) {
        filename = 'c:\\' + filename;
        if (window.ibiActiveX.fsObj == null) {
            try {
                window.ibiActiveX.fsObj = new ActiveXObject('Scripting.FileSystemObject');
            }
            catch (err) {
                window.ibiActiveX.MsAppError();
                return;
            }
        }
    }

    window.ibiActiveX.PromptUser(ibiMsgStr['pmsav'], filename, 40, mytable.a_cntl.table_number, ISave_AR_now, ptypeSave);
}


function IDo_SaveAR(tablenumber, ptype) {
    var nF = null, useActiveX = false;
    var mytable = getMyTable(tablenumber);
    var doOverride  = (d.promptform.override &&
                       d.promptform.override.checked) ? true : false;
    var openBrowser = (d.promptform.openbrowser &&
                       d.promptform.openbrowser.checked) ? true : false;
    var filtonly    = (d.promptform.filtered &&
                       d.promptform.filtered.checked) ? true : false;
    var saveState   = (d.promptform.savechange &&
                      !d.promptform.savechange.checked) ? false : true;
    var saveCurOnly = (d.promptform.saveAll &&
                      !d.promptform.saveAll.checked) ? false : true;
    var filename = d.promptform.pvalue.value;

    filename = filename.replace(/\\/g, '\\\\');

    if (ptype == ptypeEmail) {
        useActiveX = true;
    } else {
        try {
            if (b_hasActiveX && window.ibiActiveX.fsObj &&
                mytable.tableJson.useActiveX) {
                useActiveX = true;
            }
        } catch (e) { }
    }

    if (useActiveX) {
        try {
            /* -1, unicode format designator, fixes issue with writing out araesdecode.js */
            nF = window.ibiActiveX.fsObj.CreateTextFile(filename, doOverride, true);
        }
        catch (err) {
            alert(err.message); //fnError(err);
        }
    }

    closewin(window.ibiActiveX.Prompts.win);
    window.ibiActiveX.Prompts.win = -1;
    if ((useActiveX && nF) || !useActiveX) {
        window.ibiActiveX.Prompts.callback(nF, tablenumber, false, filename, filtonly, openBrowser, saveState, saveCurOnly);
    }

    return false;
}


function ISave_AR_now(nF, tnumber, dosendemail, filename, filtonly, openBrowser, saveState, saveCurOnly, noScript) {
    var htmlLines = "";
    var x, i, j, ff, numElem, saveTableNum, saveNumRec, saveElems;
    var dse = '\/\/-' + '-' + '>';
    var metatag = '';
    var ma = d.getElementsByTagName('META');
    if (ma) {
        for (i = 0, numElem = ma.length; i < numElem; i++) {
            if (ma[i].httpEquiv != "") {
                metatag += '<' + 'meta http-Equiv="' + ma[i].httpEquiv + '" content="' + ma[i].content + '">\r\n';
            } else if (ma[i].name != "") {
                metatag += '<' + 'meta name="' + ma[i].name + '" content="' + ma[i].content + '">\r\n';
            }
        }
    }

    var sahb = '<' + '!DOCTYPE html>\r\n' +
        '<' + 'html>\r\n<' + 'head>\r\n' + metatag + '<' + 'title>WebFOCUS Active Report<\/title>\r\n';

    var sty = d.getElementById('ibiArCustomStyle');
    if (sty) {
        sahb += '<' + 'style id="ibiArCustomStyle" type="text/css">\r\n' + sty.innerHTML + '<\/style>\r\n';
    }

    var styUser = d.getElementById('ibiArCustomStyleUser');
    if (styUser) {
        sahb += '<' + 'style id="ibiArCustomStyleUser" type="text/css">\r\n' + styUser.innerHTML + '<\/style>\r\n';
    }

    var sahe = '<\/head>\r\n<' + 'body>\r\n';
    var ttcall = dse + '\r\n<' + '\/script>\r\n' +
        '<' + 'script language="JavaScript">\r\n<' + '!' + '-' + '-\r\n' +
        'genTables_delay();\r\n' +
        dse + '\r\n<' + '\/script>\r\n';
    var vainit = 'T_cont[NumOfTable]=new Array();\r\na_T_cont[NumOfTable]=new Array();\r\nb_T_cont[NumOfTable]=new Array();\r\n';

    var ba = d.getElementsByTagName('BASE');
    var sahi = '';
    if (ba) {
        for (i = 0, numElem = ba.length; i < numElem; i++) {
            if (ba[i].href) {
                sahi = '<base href="' + ba[i].href + '">\r\n';
            }
        }
    }

    var sah = sahb + sahi + sahe;
    var jsdisabledmsg = document.querySelector('noscript');
    if (jsdisabledmsg) {
        sah += '<noscript>\r\n' + jsdisabledmsg.innerText + '\r\n<\/noscript>\r\n';
    }
    var dss = "\/\/startSPACEofSPACEjavascript"; // shorten eye catcher so that we dont break tscq.
    dss = dss.replace(/SPACE/g, ' ');  // dummyfix(dss);
    var pos = d.body.innerHTML.indexOf(dss) + dss.length;
    var a = d.body.innerHTML.substr(pos);
    var dss2 = "\/\/SPACEendSPACEofSPACEinclud"; // shorten eye catcher so that we dont break tscq.
    dss2 = dss2.replace(/SPACE/g, ' '); // dummyfix(dss2);
    var b = a.substr(0, a.lastIndexOf(dss2));
    var g;
    var mytable = null;
    var start, end;

    if (saveCurOnly) {
        start = tnumber;
        end = tnumber + 1;
    } else {
        start = 0;
        end = MyTable.length;
    }

    if (!noScript) {
        htmlLines += sah;
        htmlLines += ('<' + 'script language="JavaScript">\r\n<' + '!--\r\n');
        htmlLines += (dss + '\r\n');
        var hasScripts = d.getElementsByTagName("script");
        if (hasScripts) {
            var txt, bb = '';
            for (i = 0, numElem = hasScripts.length; i < numElem; i++) {
                //only way to get script is through AJAX call
                if (hasScripts[i].src != "") {
                    txt = getExternalJSFile(hasScripts[i].src) + "\r\n";
                    htmlLines += txt;
                }
            }
        }
        htmlLines += (b + '\r\n');

        htmlLines += ('\r\n' + dss2 + 'es\r\n' + dse + '\r\n<' + '\/SCRIPT>\r\n');
        htmlLines += ('<' + 'script language="JavaScript">\r\n<' + '!--\r\n');
    }

    for (var tablenumber = start; tablenumber < end; tablenumber++) {
        mytable = getMyTable(tablenumber);
        if (mytable.isRollUp) continue;

        saveTableNum = mytable.ru_a_cntl.table_number;
        mytable.ru_a_cntl.table_number = 0;

        if (saveState) {
            numElem = mytable.a_capt.length;
            for (j = 0; j < numElem; j++) {
                mytable.a_capt[j].popmenu = '<div id="popid' + (tablenumber - start) + '_' + j + '"><\/div>';
            }
            cstr = writeobjout(mytable.a_capt);
            for (j = 0; j < numElem; j++) {
                mytable.a_capt[j].popmenu = '<div id="popid' + tablenumber + '_' + j + '"><\/div>';
            }
        } else {
            for (j = 0, numElem = mytable.ru_a_capt.length; j < numElem; j++) {
                mytable.ru_a_capt[j].popmenu = '<div id="popid' + (tablenumber - start) + '_' + j + '"><\/div>';
            }
            cstr = writeobjout(mytable.ru_a_capt);
        }
        htmlLines += ('T_capt[NumOfTable]=' + cstr + ';\r\n');

        cstr = writeobjout(mytable.o_look.styles);
        htmlLines += ('t_T_capt[NumOfTable]=' + cstr + ';\r\n');

        cstr = writeobjout(mytable.ru_o_look);
        htmlLines += ('T_look[NumOfTable]=' + cstr + ';\r\n');

        saveNumRec = mytable.ru_a_cntl.NumRecords;
        mytable.ru_a_cntl.NumRecords = (filtonly && mytable.a_filter_cont)
            ? mytable.a_filter_cont.length
            : mytable.a_all_cont.length;
        cstr = writeobjout(mytable.ru_a_cntl);
        htmlLines += ('T_cntl[NumOfTable]=' + cstr + ';\r\n');
        mytable.ru_a_cntl.NumRecords = saveNumRec;

        htmlLines += vainit;

        cstr = (filtonly && mytable.a_filter_cont)
            ? writeobjout(mytable.a_filter_cont)
            : writeobjout(mytable.a_all_cont);
        htmlLines += ('T_cont[NumOfTable]= ' + cstr + ';\r\n');

        cstr = writeobjout(mytable.acdLines);
        htmlLines += ('a_T_cont[NumOfTable]=' + cstr + ';\r\n');

        cstr = writeobjout(mytable.acdList);
        htmlLines += ('b_T_cont[NumOfTable]=' + cstr + ';\r\n');

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
            saveElems = [];
            numElem = mytable.bykeys.length;
            for (i = 0; i < numElem; i++) {
                saveElems[i] = mytable.bykeys[i].subcalcData;
                mytable.bykeys[i].subcalcData = null;
            }
            cstr1 += "'bykeys':" + writeobjout(mytable.bykeys) + ",\r\n";
            for (i = 0; i < numElem; i++) {
                mytable.bykeys[i].subcalcData = saveElems[i];
            }
        }
        cstr1 += "'agg':[";
        for (i = 0, numElem = mytable.a_capt.length; i < numElem; i++) {
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
        ff = 0;
        var obody = (filtonly && mytable.a_filter_body)
            ? mytable.a_filter_body
            : mytable.a_all_body;
        var ol = obody.length;
        for (i = 0; i < ol; i++) {
            if (obody[i][1] == 1) {
                ff = 1;
                cstr1 += i + ',';
            }
        }
        if (ff) {
            cstr1 = cstr1.substr(0, cstr1.length - 1);
        }
        cstr1 += '],\r\n';
        if (filtonly && mytable.a_filter_cont)
            cstr1 += "'a_col_filter':[],\r\n";
        else
            cstr1 += "'a_col_filter':" + writeobjout(mytable.a_col_filter) + ",\r\n";

        if (saveState && mytable.acdNode) {
            cstr1 += "'acdNode':[";
            for (i = 0, numElem = mytable.acdList.length; i < numElem; i++) {
                cstr1 += mytable.acdNode[mytable.acdList[i]];
                if (i < mytable.acdList.length - 1) cstr1 += ",";
            }
            cstr1 += "],\r\n";
        }
        cstr1 += "'charts':[";
        ff = 0;
        for (var i = 0; i < maxwindows; i++) {
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
        }
        if (ff) {
            cstr1 = cstr1.substr(0, cstr1.length - 1);
        }
        cstr1 += ']\r\n';

        if (saveState) {
            htmlLines += ('T_saveARs[NumOfTable]={' + cstr1 + '};\r\n');
        }
        htmlLines += 'NumOfTable++;\r\n';

        mytable.ru_a_cntl.table_number = saveTableNum;
        for (j = 0, numElem = mytable.ru_a_capt.length; j < numElem; j++) {
            mytable.ru_a_capt[j].popmenu = '<div id="popid' + saveTableNum + '_' + j + '"><\/div>';
        }
    }

    if (ibiStd.globalProps) {
        htmlLines += ('ibiStd.globalProps=' + writeobjout(ibiStd.globalProps) + ';\r\n');
    }

    cstr = writeobjout(ARstrings, false);
    htmlLines += ('ARstrings = ' + cstr + ';\r\n');
    if (isMergeReports) {
        htmlLines += 'isMergeReports=true;\r\n';
    }
    if (LayoutObjects.length) {
        cstr = writeobjout(LayoutObjects, false);
        htmlLines += ('LayoutObjects=' + cstr + ';\r\n');
    }
    if (LayoutSection.length) {
        cstr = writeobjout(LayoutSection, false);
        htmlLines += ('LayoutSection=' + cstr + ';\r\n');
    }
    if ((typeof (ibiSkin.Images) != 'undefined') &&
        (typeof (ibiSkin.IMGARRAY) != 'undefined')) {
        htmlLines += 'ibiSkin.IMGARRAY=[];\r\n';
        cstr = writeobjout(ibiSkin.ImgGlobalStyle);
        htmlLines += ('ibiSkin.ImgGlobalStyle = ' + cstr + ';\r\n');
        htmlLines += 'ibiSkin.Images = [];\r\n';
        for (j = 0, numElem = ibiSkin.Images.length; j < numElem; j++) {
            cstr = writeobjout(ibiSkin.Images[j]);
            htmlLines += ('ibiSkin.Images[' + j + ']=' + cstr + ';\r\n');
        }
        if (ibiSkin.IMGARRAY.length) {
            saveElems = [];
            numElem = ibiSkin.IMGARRAY.length;
            for (j = 0; j < numElem; j++) {
                saveElems[j] = ibiSkin.IMGARRAY[j].html;
                ibiSkin.IMGARRAY[j].html = null;
            }
            cstr = writeobjout(ibiSkin.IMGARRAY);
            htmlLines += ('ibiSkin.IMGARRAY=' + cstr + ';\r\n');
            for (j = 0; j < numElem; j++) {
                ibiSkin.IMGARRAY[j].html = saveElems[j];
            }
        }
    }
    if (!noScript) {
        htmlLines += ttcall;
        htmlLines += '<\/body>\r\n<\/html>';
    }

    if (nF) {
        nF.Write(htmlLines);
        nF.Close();
    } else {
        var blob = new Blob([htmlLines],
            { type: "text/plain;charset=" + document.characterSet });

        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            var downloadLink = document.createElement("a");
            if (downloadLink.download !== 'undefined') {
                var url = URL.createObjectURL(blob);
                downloadLink.setAttribute("href", url);
                downloadLink.setAttribute("download", filename);
                downloadLink.style.visibility = "hidden";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }
        }
    }

    if (b_hasActiveX && dosendemail) {
        window.ibiActiveX.DoEmailMe(filename);
    }

    if (openBrowser) {
        var url = 'file:///' + filename.replace(/\\\\/g, '/');
        var nw = d.open(url, '_blank', '');
    }
}
