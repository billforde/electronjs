/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/ariconskin.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180226 1206 wjf 200246 AHML: Unify JSON output
* 160610 1256 hms 180534 Remove tab characters from source files
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.14 $
//$Log: ariconskin.js,v $
//Revision 1.14  2014/02/26 23:35:20  William_Forde
//[p155631][>branch8100] Load search icon as one of our standard icons.
//
//Revision 1.13  2014/02/04 21:04:31  Israel_Schulman
//[p155631][>branch8100] Check for styleSheet property on style element for IE instead of b_ie - in case b_ie is forced to false.
//
//Revision 1.12  2014/01/23 15:37:05  Israel_Schulman
//[p155785] Reference correct scatter icon id in ibiSkin array
//
//Revision 1.11  2013/11/12 23:04:04  William_Forde
//[p134795] Add missing image file
//
//Revision 1.10  2013/10/23 18:05:02  William_Forde
//[p153869] fix duplicate var issues.
//
//Revision 1.9  2013/10/22 21:20:42  William_Forde
//[p153869] If IE8, we use real png images, therefore no need to create the css for the pseudo images.
//
//Revision 1.8  2013/09/25 19:33:27  Israel_Schulman
//[p143071] If .arGridComment css class is included in irpcfg.js style section, replace the [*] comment indicator with a comment icon. Added support for setting the grid's row hover and highlighted background colors via irpcfg.js with .arGridHover and .arGridHighlight classes.
//
//Revision 1.7  2013/06/11 19:37:49  Israel_Markhovsky
//Changes for Project 139888 - use smaller Sum icon in advanced tools dialogs
//
//Revision 1.6  2013/03/26 20:42:14  Israel_Schulman
//[p137859] Added loading indicator to tdgchart's. Added a loading message to appear while page loads. Rearranged waitwin and icons creation to occur before genTables for availability during genTables_delay.
//
//Revision 1.5  2012/08/26 19:52:41  William_Forde
//[p96890] Add components to the dashboard bar area.
//
//Revision 1.4  2012/08/14 04:10:39  William_Forde
//[p140572][>branch8001] Add activereport.js that will automatically include all the necessary active report js files.  Also added activereport.css that contains the styling for active.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["ariconskin"]="$Revision: 20180226.1206 $";

(function() {

    if (typeof window.ibiSkin !== 'undefined') {
        return;
    }

    window.ibiSkin = {
        GenStyles:genStyles,
        seticons: setIcons,
        icons:{
            sumicon:    {'id':'sumIcon','defimg':'sum.png'},
            sumtoolsicon:    {'id':'sumtoolsIcon','defimg':'sumtools.png'},
            pie1icon:    {'id':'pieIcon','defimg':'pie.png'},
            bar1icon:    {'id':'barIcon','defimg':'bar.png'},
            line1icon:    {'id':'lineIcon','defimg':'line.png'},
            scat1icon:    {'id':'scatterIcon','defimg':'scattr.png'},
            linkicon:    {'id':'lockIcon','defimg':'lock.png'},
            unlinkicon:    {'id':'unlockIcon','defimg':'unlock.png'},

            pboticon:    {'id':'pageBottomIcon','defimg':'pbot.png'},
            ptopicon:    {'id':'pageTopIcon','defimg':'ptop.png'},
            delicon:    {'id':'xIcon','defimg':'delete.png'},
            minicon:    {'id':'minButtonIcon','defimg':'min.png'},
            clsicon:    {'id':'closeButtonIcon','defimg':'close.png'},
            maxicon:    {'id':'maxButtonIcon','defimg':'maxwin.png'},
            roll1icon:    {'id':'rollupIcon','defimg':'roll.png'},
            dropicon:    {'id':'dropArrowIcon','defimg':'drparw.png'},
            popicon:    {'id':'downArrowIcon','defimg':'poparw.png'},
            rszicon:    {'id':'resizeIcon','defimg':'rszwin.png'},

            pvicon1:    {'id':'moveToByIcon','defimg':'pvimg1.png'},
            pvicon2:    {'id':'moveToAcrossIcon','defimg':'pvimg2.png'},
            pvicon3:    {'id':'moveDownIcon','defimg':'pvimg3.png'},
            pvicon4:    {'id':'moveUpIcon','defimg':'pvimg4.png'},
            pvicon5:    {'id':'moveRightIcon','defimg':'pvimg5.png'},
            pvicon6:    {'id':'moveLeftIcon','defimg':'pvimg6.png'},
            pvicon7:    {'id':'deleteIcon','defimg':'pvimg7.png'},

            gpvicon1:    {'id':'moveToByGrayIcon','defimg':'gvimg1.png'},
            gpvicon2:    {'id':'moveToAcrossGrayIcon','defimg':'gvimg2.png'},
            gpvicon3:    {'id':'moveDownGrayIcon','defimg':'gvimg3.png'},
            gpvicon4:    {'id':'moveUpGrayIcon','defimg':'gvimg4.png'},
            gpvicon5:    {'id':'moveRightGrayIcon','defimg':'gvimg5.png'},
            gpvicon6:    {'id':'moveLeftGrayIcon','defimg':'gvimg6.png'},
            gpvicon7:    {'id':'deleteGrayIcon','defimg':'gvimg7.png'},

            hgicon:        {'id':'hourglassIcon','defimg':'hrglss.png'},
            cpopicon:    {'id':'menuIcon','defimg':'cpop.png'},
            cflticon:    {'id':'addFilterIcon','defimg':'cflta.png'},
            scdicon:    {'id':'sortDIcon','defimg':'scd.png'},
            scaicon:    {'id':'sortAIcon','defimg':'sca.png'},
            sclicon:    {'id':'showColumnIcon','defimg':'pscl.png'},
            hclicon:    {'id':'hideColumnIcon','defimg':'phcl.png'},
            chkicon:    {'id':'checkIcon','defimg':'pchk.png'},
            gflticon:    {'id':'globalFilterIcon','defimg':'fltg.png'},

            fullicon1:    {'id':'goFullscreenIcon','defimg':'full1.png'},
            fullicon2:    {'id':'leaveFullscreenIcon','defimg':'full2.png'},

            sum24icon:    {'id':'sumIcon','defimg':null},
            pie24icon:    {'id':'pieIcon','defimg':null},
            bar24icon:    {'id':'barIcon','defimg':null},
            line24icon:    {'id':'lineIcon','defimg':null},
            scat24icon:    {'id':'scatterIcon','defimg':null},
            link24icon:    {'id':'lockIcon','defimg':null},
            unlink24icon:{'id':'unlockIcon','defimg':null},
            roll24icon:    {'id':'rollupIcon','defimg':null},
            cpop24icon:    {'id':'menuIcon','defimg':null},
            cls20icon:    {'id':'closeButtonIcon','defimg':null},
            advChartIcon:{'id':'advancedChartIcon','defimg':'adchart.png'},
            initchart:    {'id':'restoreChartIcon','defimg':'initchart.png'},
            loadingImg: {'id':'loadingImg','defimg':'irloading.gif'},
            commentImg:  {'id':'commentImg','defimg':'irdcomment.png'},
            searchicon:  {'id':'searchIcon','defimg':'search.png'}
        },
        IMGARRAY:[],
        ImgGlobalStyle:[],
        Images :[],
        iconsRemote:false,
        imgLookup : {},
        iconsUrl:null
    };


    function setIcons()
    {
        var ic;
		for(ic in ibiSkin.icons) {
			var obj = document.getElementById(ibiSkin.icons[ic].id);
			if(obj)
	            ibiSkin[ic] = obj.innerHTML;
        }
    }

function genStyles(isImg)
{
    var start=MyTable.length,p1,p2;
    var numt = T_capt.length;
    var snode = 0;
    var i;
    var j;
    var newStyle;
    var cssNode;
    var headRef;
    
    if(typeof(d.createElement)!="undefined") {
        cssNode = d.createElement('style');
        cssNode.setAttribute('type','text/css');
        headRef = d.getElementsByTagName('head')[0];
        headRef.appendChild(cssNode); 

        //var gsA = GlobalStr.split('\n');
        if(isImg) {
            if(b_ie && (b_ie_version < 8)) 
            for(i=0;i< ibiSkin.ImgGlobalStyle.length; i++) {
                p1 = ibiSkin.ImgGlobalStyle[i].split('{');
                p2 = p1[1].split('}');
                if(b_ie && (b_ie_version<8))d.styleSheets[0].addRule(p1[0],p2[0]);
                else if(cssNode.styleSheet) cssNode.styleSheet.cssText = cssNode.styleSheet.cssText+ibiSkin.ImgGlobalStyle[i];
                else {
                    newStyle = d.createTextNode(ibiSkin.ImgGlobalStyle[i]); 
                    cssNode.appendChild(newStyle);
                }
            }
        } else {
            for(i=start;i<numt;i++) {
				if(typeof T_cntl[i] == "undefined")
					continue;
                if(typeof(genStyleDone[i])!='undefined')
                    if(genStyleDone[i]==true) continue;
        
                if(T_cntl[i].style)
                    for(j=0; j<T_cntl[i].style.length; j++) {
                        p1 = T_cntl[i].style[j].split('{');
                        p2 = p1[1].split('}');
                        if(b_ie && (b_ie_version<8))d.styleSheets[0].addRule(p1[0],p2[0]);
                        else if(cssNode.styleSheet) cssNode.styleSheet.cssText = cssNode.styleSheet.cssText + T_cntl[i].style[j];
                        else {
                            newStyle = d.createTextNode(T_cntl[i].style[j]); 
                            cssNode.appendChild(newStyle);
                        }
                    }
                genStyleDone[i] = true;
            }
        }
        headRef.appendChild(cssNode); 
        return;
    }

    if(b_pda) d.write("<style type='text/css'>\n");

    if(d.styleSheets[0].insertRule) {
        for(j=0; j < d.styleSheets.length;j++)
            if(d.styleSheets[j].ownerNode)
                if(d.styleSheets[j].ownerNode.id == "MainStyleId") snode = j;
    }
    if(isImg) {
        if(b_ie && (b_ie_version < 8)) 
        for(j=0; j<ibiSkin.ImgGlobalStyle.length; j++) {
            p1 = ibiSkin.ImgGlobalStyle[j].split('{');
            p2 = p1[1].split('}');
            if(b_ie) d.styleSheets["MainStyleId"].addRule(p1[0],p2[0]);
            else 
            if(b_pda) d.write(ibiSkin.ImgGlobalStyle[j]+'\n');
            else {
                d.styleSheets[snode].insertRule(ibiSkin.ImgGlobalStyle[j],0);
            }
        }
    } else
    for(i=start;i<numt;i++) {
        if(typeof(genStyleDone[i])!='undefined')
            if(genStyleDone[i]==true) continue;
        
        if(T_cntl[i].style)
            for(j=0; j<T_cntl[i].style.length; j++) {
                p1 = T_cntl[i].style[j].split('{');
                p2 = p1[1].split('}');
                if(b_ie) d.styleSheets["MainStyleId"].addRule(p1[0],p2[0]);
                else 
                if(b_pda) d.write(T_cntl[i].style[j]+'\n');
                else d.styleSheets[snode].insertRule(T_cntl[i].style[j],0);
            }
        genStyleDone[i] = true;
    }
    if(b_pda) d.write("<\/style>\n");

}
})();
