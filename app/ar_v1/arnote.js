/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arnote.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 160610 1256 hms 180534 Remove tab characters from source files
* 160111 1243 iys 164189 AHTML:Different Date formats are displayed on IE (9, 10, 11)
* 140520 1546 iys 156992 AHTML:Data highlighted in grid after delete a comment
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arnote"]="$Revision: 20160610.1256 $";
(function() {
    var mytable = null;

    if (typeof window.ibiNotes!== 'undefined') {
        return;
    }

    window.ibiNotes= {
        AddNotetoCol:addNotetoCol,
        AddNotesArray:addNotesArray,
        readNoteArray:ReadNoteArray,
        DelNoteEntry:delNoteEntry,
        Do_addNote:do_addNote,
        InsertNote:insertNote,
        NotesWindows:[]
    };

function getReadableDate(dateObj) {
    var date;
    var time;
    var hour;
    var minutes;
    var seconds;
    var amPm;
    var dateTimeString = '';

    if(dateObj instanceof Date) {
        hour = dateObj.getHours();
        minutes = dateObj.getMinutes();
        seconds = dateObj.getSeconds();

        amPm = (hour < 12) ? 'AM' : 'PM';
        if(hour > 12) hour -= 12;
        if(hour === 0) hour = 12;
        if(minutes < 10) minutes = '0' + minutes;
        if(seconds < 10) seconds = '0' + seconds;

        date = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
        time = hour + ':' + minutes + ':' + seconds;
        dateTimeString = date + ' ' + time + ' ' + amPm;
    }

    return dateTimeString;
}

function ReadNoteArray(notes,ntype,win,mytable,row,col) {
    var notesStr='',dt,txt,mm,yy,dd,td,hh,mn,ss,dts,
        writeTable = ((ntype=='HTML') || (ntype=='HTMLDEL'));

    if (notes.length==0) return notesStr;

    if (writeTable) { notesStr += '<table id="PromptTable'+win+'">'; }
    for (var i=0, numNotes = notes.length; i < numNotes; i++) {
        if (writeTable) { notesStr += '<tr>'; }
        dt = new Date(notes[i].date70);
        dts = getReadableDate(dt);
        
        if(ntype=='HTMLDEL') {
            notesStr += '<td><div style="text-align:center;cursor:pointer;" ';
            notesStr += 'title="'+ibiMsgStr['del']+'" onclick="ibiNotes.DelNoteEntry('+mytable.a_cntl.table_number+','+ win+','+row+','+col+','+i+ ')">';
            notesStr += ibiSkin.delicon +'<\/div><\/td>';
        }
        notesStr += (writeTable) 
            ? '<td class="arCommentDate" style="white-spacE:nowrap" >'+dts+'<\/td>' 
            : '['+dts+']';
        txt = notes[i].value;
        if (writeTable) { 
            notesStr += '<td style="white-space:nowrap" class="arCommentText">';
            txt = HTMLencode(txt);
        }
        notesStr += txt;
        if (i != (numNotes-1)) {
            notesStr += (ntype=='TEXT') ? '\n' : '<br>';
        }
        if (writeTable) { notesStr += '<\/td><\/tr>'; }
    }
    if (writeTable) { notesStr += '<\/table>'; }
    return notesStr;
}

    var addnotesmode = false;

    function insertNote(tablenumber,col) {
        ibiActiveX.PromptUser(ibiMsgStr['addnmsg'],null,40,tablenumber,addNotetoCol,ptypeNote,col);
    }

    function do_addNote(tablenumber) {
//split id into row and col
        var mytable = getMyTable(tablenumber);
        var id = ibiActiveX.Prompts.callargs;
        var ids= id.split("r");
        if(ids.length==1)
            ids = id.split("l");
        var rowcol = ids[1].split("C");
        var col = rowcol[1]*1;
        var rows = rowcol[0].split(".");
        var row = rows[0]*1;
        
// allow for Grid tool moved the column to the col postion has to use dataField
        var dataOrigCol = IGetOriginalDataField(mytable.a_capt[col]);
       
        ibiActiveX.Prompts.callback(tablenumber,row,dataOrigCol,id);
        closewin(ibiActiveX.Prompts.win);
        ibiActiveX.Prompts.win = -1;
    }

    function delNoteEntry(tablenumber,win,row,col,entry)
    {
        var mytable = getMyTable(tablenumber);
        var notes = mytable.a_cont[row][col][DANOTE];
        var newnotes = [];
        var j = 0;
        for(var i=0;i<notes.length;i++) {
            if(i!=entry) newnotes[j++] = notes[i];
        }
        mytable.a_cont[row][col][DANOTE] = newnotes;
        if(newnotes.length==0) ibiNotes.AddNotesArray(mytable.id);
        var obj = d.getElementById("npw_"+tablenumber+"_"+row+"_"+col);
        if(obj) {
            var line = '';
            if(newnotes.length)line = ReadNoteArray(newnotes,'HTMLDEL',win,mytable,row,col);
            obj.innerHTML = line;
        }
    
    }

function ShowNotes(tablenumber,row,col) {
    var mytable = getMyTable(tablenumber);
    var title = ibiMsgStr['comments']+': '+mytable.IBs[mytable.a_cont[row][col][DASTR]];
    var nnwin = 'Notesdiv_'+tablenumber+'_'+row+'_'+col;
    var obj = null,notes_Win,nwin;
    var notes = mytable.a_cont[row][col][DANOTE];

    if((typeof(ibiNotes.NotesWindows[nnwin])=='undefined')||(ibiNotes.NotesWindows[nnwin])==null){
        notes_win = getfreewin();
        nwin = 'win'+notes_win;
        setwin(notes_win,nnwin,tablenumber,typenotes,title);
        buildwin(notes_win,title,null,true);
        ibiNotes.NotesWindows[nnwin] = notes_win;
    } else notes_win = ibiNotes.NotesWindows[nnwin];
    if(notes_win != -1) {
        pwn[notes_win].dobj_b.innerHTML=ReadNoteArray(notes,'HTML',notes_win);
        maxwin(notes_win);
        if(mytable.a_cntl.WindowDisplay!='cascade')
            displayTab(mytable.a_cntl.WindowDisplay,mytable.a_cntl.table_number,notes_win);
    }
}

function addNotetoCol(tablenumber,row,col,id,skip){
//map from grid to array
    var td = new Date();
    var rrow,mytable,notes,ntype,obj,objCell,ntext,i;

    mytable=getMyTable(tablenumber);
    rrow = mytable.a_f_body[row][0];
    if(skip!=true) {
        if(typeof(mytable.a_cont[rrow][col][DANOTE])=="undefined")
            mytable.a_cont[rrow][col][DANOTE]=[];
        mytable.a_cont[rrow][col][DANOTE][mytable.a_cont[rrow][col][DANOTE].length]=
            {'value':d.promptform.note.value,
             'date70' :td.getTime()
            };
        mytable.NotesToSet[mytable.NotesToSet.length]=[mytable.a_cntl.table_number,row,col,id];
    } 

    obj = d.getElementById('C'+id);
    objCell = d.getElementById(id);

    if(obj) {
        notes=mytable.a_cont[rrow][col][DANOTE];
        if(notes.length==0) {
            obj.innerHTML='';
            // remove the arGridComment class from the cell and any of its children
            // when removing all comments from a cell. 
            if(objCell) {
                objCell.className = objCell.className.replace(/(?:^|\s)arGridComment(?!\S)/, '');
                // restore the cell's background color to its original, before a comment was added
                // in case a background color was specified for arGridComment class
                if(objCell.saveorigback) {
                    objCell.style.backgroundColor = objCell.saveorigback;
                }
                
                if(objCell.childNodes) {
                    for(i=0; i<objCell.childNodes.length; i++) {
                        objCell.childNodes[i].className = objCell.childNodes[i].className.replace(/(?:^|\s)arGridComment(?!\S)/, '');
                    }
                }
            }
            return;
        }
        ntype='TEXT';
        if(mytable.showNotes) ntype='HTML';
        ntext=ReadNoteArray(notes,ntype);
        var bcolor = "";
        //bcolor = "background-color:"+mytable.o_color.hovered+";";

        if(mytable.showNotes) obj.innerHTML='<div class="arCommentCell" style="'+bcolor+';">'+ntext+'<\/div>';
        else 
        if(!mytable.hideNotesInd) { 
            var agcc = getStyle(".arGridComment");

            if(agcc) {
                obj.innerHTML = "<div style='padding-left:3px;vertical-align:middle;display:inline-block;'>" + ibiSkin.commentImg + "</div>";
            } else {
                obj.innerHTML='[*]';
            }

            obj.title = ntext;

            if(objCell) {
                if(agcc) {
                    if(agcc.style) {
                        // the first time adding a comment to a cell, save the row's background color
                        // so that if comments are removed it can be restored
                        if(!objCell.saveorigback) {
                            objCell.saveorigback = objCell.style.backgroundColor || "#FFFFFF";
                        }

                        objCell.className = "arGridComment";
                        
                        if(agcc.style.backgroundColor) {
                            objCell.style.backgroundColor = agcc.style.backgroundColor;
                        }
                        
                        if(objCell.childNodes) {
                            for(i=0; i<objCell.childNodes.length; i++) {
                                objCell.childNodes[i].className = "arGridComment";
                            }
                        }
                    }
                }
            }
        }
    }
}


function addNotesArray(tablenumber) {
    mytable=getMyTable(tablenumber);
    for(var i=0; i<mytable.NotesToSet.length; i++) 
        addNotetoCol(mytable.NotesToSet[i][0],mytable.NotesToSet[i][1],mytable.NotesToSet[i][2],mytable.NotesToSet[i][3],true);
}

})();
