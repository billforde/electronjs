/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arexport.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
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
ActiveJSRevision["arexport"]="$Revision: 20180305.1222 $";
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
        xmltab += '<Table ss:ExpandedColumnCount="'+this.n_cols+'" ss:ExpandedRowCount="'+(this.a_f_body.length+1)+'" x:FullColumns="1"\r\n';
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
    var cols = this.n_cols;
    var xmlStyles = "";
    var styles = {};
    var xmlColHeading = '<Row>\r\n';
    for (i = 0; i < cols; i++) {
        curCol = this.a_capt[i];
        if (!curCol.noprint) {
            delete curCol.exlFormat;
        }
    }

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
