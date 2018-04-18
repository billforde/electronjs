/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/activereport.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180222 1518 wjf 200246 AHML: Unify JSON output
* 170526 0924 wjf 191515 Create unified filter component to replace old style filter
* 160610 1256 hms 180534 Remove tab characters from source files
* 140721 1223 iys 160018 AHTML: MOB: Allow slider to function
* 140610 1220 wjf 159335 supports nls translation in js files
* 140603 1341 wjf 158619 AHTML and Flex: manage source code in MedProj
* 140513 1635 law 158619 AHTML: Port active report code back to Med
* 140513 1255 law 158619 AHTML: Port active report code back to Med
*
* END %&$
*-------------------------------------------------------------------*/
/*Copyright 1996-2011 Information Builders, Inc. All rights reserved.*/
//$Revision: 1.10 $
//$Log: activereport.js,v $
//Revision 1.10  2013/12/19 21:06:35  William_Forde
//[p134795] Add slider and vbox/hbox javascript files to loader.
//
//Revision 1.9  2013/05/22 19:36:22  Peter_Kaboolian
//[p87810] when loading active report into a canvas, it couldn't find the path
//to its other files,
//so now if it can't find a script tag with activereport.js
//it looks for a link tag with activereports.css
//
//Revision 1.8  2013/04/29 14:52:26  William_Forde
//[p134795]Add activevis file to loader
//
//Revision 1.7  2013/04/19 15:29:06  William_Forde
//[p137859] If using activereport.js to load the javascript, hide the loading message.
//
//Revision 1.6  2012/09/13 21:09:14  William_Forde
//[p140229] onload function was being fired multiple times.
//
//Revision 1.5  2012/08/22 20:38:46  William_Forde
//[p140229] must load the tdg chart engine before our normal chart engine.
//
//Revision 1.4  2012/08/22 01:08:07  William_Forde
//[p140894] Missing mobile menu file.  If launched from api dont enable fullscreen mode.
//
//Revision 1.3  2012/08/15 15:01:05  William_Forde
//[p140572][>branch8001] add onload property, so that caller will know when the js files are fully loaded.
//
//Revision 1.2  2012/08/15 00:27:41  William_Forde
//[p140572][>branch8001] Wait for each js file to load before loading the next one.
//
//Revision 1.1  2012/08/14 04:10:39  William_Forde
//[p140572][>branch8001] Add activereport.js that will automatically include all the necessary active report js files.  Also added activereport.css that contains the styling for active.
//
if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["activereport"]="$Revision: 1.10 $";

var tdginfo = new Object();
var arHideLoadingMessage = true;

(function() {

    if (typeof window.ibiARLoader !== 'undefined') {
        return;
    }
    
    window.ibiARLoader = {
        loadjsfiles:loadfiles,
        nextfile:Nextfile,
        handlestate:Handlestate,
        count:0,
        jsloaded:false,
        fileref:null,
        relpath:'',
        onload:null
    };
    
    var files=[
            "arstrings.jst",
            "artouchfix.js",
            "arvariables.js",
            "arcache.js",
            "ariconskin.js",
            "argrid.js",
            "ariosmenu.js",
            "ariosgrid.js",
            "arcontrol.js",
            "arbox.js",
            "argenfunctions.js",
            "armenu.js",
			"arfiltop.js",
			"arfiltool.js",
            "arcompound.js",
            "artextinput.js",
            "arcombobox.js",
            "archeckbox.js",
            "arlist.js",
            "arradiobutton.js",
            "arslider.js",
            "arexport.js",
            "arpivot.js",
            "arfilter.js",
            "aractivex.js",
            "ardefchart.js",
            "arwzjsgraphics.js",
            "aredittool.js",
            "araesdecode.js",
            "artdgclist.js",
            "artdgchart.js",
            "archart.js",
            "aractivevis.js",
            "arapi.js"        
        ];
        


    function loadfiles()
    {
        //files already loaded if flag is set.
        if(ibiARLoader.jsloaded) return;
        
        var scripts = document.getElementsByTagName("script");

        for(var i=0; i < scripts.length; i++) {
            if(scripts[i].src.indexOf("activereport.js")>-1)
                ibiARLoader.relpath  = scripts[i].src.substr(0,scripts[i].src.indexOf("activereport.js"));
        }
        
        if(!ibiARLoader.relpath || ibiARLoader.relpath == "")
            {
            var links = document.getElementsByTagName("link");
            for(var i=0; i < links.length; i++) {
                {
                var href = links[i].href;
                if(href.indexOf("activereport.css")>-1)
                    ibiARLoader.relpath  = href.substr(0,href.indexOf("activereport.css"));
                }
            }
        }
    
        ibiARLoader.count = 0; 
        Nextfile();
    }

    function loadandwaitforfile(url)
    {
        var head = document.getElementsByTagName("head")[0];
        ibiARLoader.fileref = document.createElement('script');
        if(ibiARLoader.fileref) {
            ibiARLoader.fileref.setAttribute("type","text/javascript");
            ibiARLoader.fileref.setAttribute("src",url);
            ibiARLoader.fileref.onload = ibiARLoader.nextfile;
            ibiARLoader.fileref.onreadystatechange = ibiARLoader.handlestate;
            head.appendChild(ibiARLoader.fileref);
        }
    }

    function Nextfile()
    {
        if(ibiARLoader.fileref) {
            ibiARLoader.fileref.onload = null;
            ibiARLoader.fileref.onreadystatechange = null;
            ibiARLoader.fileref = null;
        }
        if(ibiARLoader.count < files.length) {
			var filename = files[ibiARLoader.count];
			if((filename == "arstrings.jst") &&
				(ibiARLoader.relpath.substr(0,4)!="http")){
                filename = "arstrings.js";
            }
			loadandwaitforfile(ibiARLoader.relpath+filename);
        } else {
            ibiARLoader.jsloaded = true;
            if(ibiARLoader.onload) ibiARLoader.onload();
        }
        ibiARLoader.count++;
    }

    function Handlestate()
    {    
        if(ibiARLoader.fileref)
            if(ibiARLoader.fileref.readyState == "complete" || ibiARLoader.fileref.readyState == "loaded" ) {
                ibiARLoader.fileref.onload = null;
                ibiARLoader.fileref.onreadystatechange = null;
                ibiARLoader.fileref = null;
                Nextfile();
            }
    }
})();

ibiARLoader.loadjsfiles(); 
