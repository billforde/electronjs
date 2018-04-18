/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arverticaltabs.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 150723 1104 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1041 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
*
* END %&$
*-------------------------------------------------------------------*/

if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arverticaltabs"]="$Revision: 20150723.1104 $";

function ARVerticalTabs(settings) {
    var _ARVerticalTabs = this;

    settings = settings || {};

    this.parent = settings.parent || 'body';
    this.selectedTab = null;
    this.tabIndex = settings.tabIndex || 0;
    this.height = settings.height || '100%';
    this.tabObjects = settings.tabObjects;
    this.tabs = null;
    this.tabsContainer = null;
    // tabPadding affects the height set for each tab 
    // and is necessary to add space to the top and bottom of tab text
    this.tabPadding = settings.tabPadding || 20;
    // style for tabs when they are selected
    this.tabSelectedStyle = settings.tabSelectedStyle || {'background-color': '#E8E8E8'};
    // style applied to all tabs globally
    this.tabStyle = settings.tabStyle;
    this.tabWidth = settings.tabWidth || 35;

    this.render = function() {
        var tab;

        if(!this.tabs && this.tabObjects) {
            this.tabs = [];
            this.tabsContainer = $('<div>');
            this.tabsSlide = $('<div>');

            this.tabsContainer
                .css({
                    'overflow-y':'scroll',
                    '-webkit-overflow-scrolling':'touch', 
                    'height':this.height
                })
                .append(this.tabsSlide);

            for(var i = 0; i < this.tabObjects.length; i++) {
                tab = new VerticalTab(this.tabObjects[i]);
                this.tabs.push(tab);
                this.tabsSlide.append(tab.tabContainer);
            }

            $(this.parent).append(this.tabsContainer);

            ibiUtil.enableMobileNativeScrolling(this.tabsContainer[0], 'yaxis');

            // ensure tabIndex isn't set to a non-existent tab.
            // if it is, then reset tabIndex to the first tab.
            if(this.tabIndex >= this.tabObjects.length || this.tabIndex < 0) {
                this.tabIndex = 0;
            }

            this.selectTab(this.tabs[this.tabIndex]);
        }

        return this;
    };

    this.getIndexOfTab = function(tab) {
        return this.tabs.indexOf(tab);
    };

    this.removeTab = function(tab) {
        var index = this.getTabIndex(tab);

        if(index > -1) {
            this.tabs.splice(index, 1);
            tab.tabContainer.remove();
        }
    };

    this.selectTab = function(tab) {
        if(this.selectedTab) {
            // reset style for the tab which is currently selected
            this.selectedTab.setStyle();

            this.hideTabTarget(this.selectedTab);
        }

        // style the new selected tab without calling setStyle on tab
        // to avoid merging with default 'deselected' tab styles.
        tab.tabContainer.css(this.tabSelectedStyle);

        this.selectedTab = tab;
        this.tabIndex = this.getIndexOfTab(tab);

        this.showTabTarget(this.selectedTab);
    };

    this.hideTabTarget = function(tab) {
        var id = tab.target.replace('#','');
        var element = document.getElementById(id);
        
        if(element)
            element.style.zIndex = -1;
    };

    this.showTabTarget = function(tab) {
        var id = tab.target.replace('#','');
        var element = document.getElementById(id);

        if(element)
            element.style.zIndex = 1;
    };

    function VerticalTab(tabObject) {
        this.target = tabObject.target;
        this.title = tabObject.title;

        this.tabContainer = $('<div>');
        this.tabText = $('<span>');
        this.style = tabObject.style;

        var _this = this;
        var touchStartY;
        var textMeasure = measureText(this.title);
        var tabStyle = {
            'border-width': '1px 0px 1px 1px',
            'border-style': 'solid',
            'border-color': "#2D66B6",
            'margin-bottom': '3px',
            'padding': '4px',
            'text-align': 'center',
            'width': _ARVerticalTabs.tabWidth,
            'height': (textMeasure.width + _ARVerticalTabs.tabPadding),
            'position': 'relative',
            'overflow': 'hidden',
            'border-bottom-left-radius': '5px',
            'border-top-left-radius': '5px',
            'box-sizing': 'border-box'
        };

        // set or update the style of this individual VerticalTab
        this.setStyle = function(style) {
            // keep this.style updated by merging with style object
            $.extend(this.style, style);
            // merge any custom styles with default styles, including global styles
            $.extend(tabStyle, _ARVerticalTabs.tabStyle, this.style);
            // apply merged styles to the tabContainer
            this.tabContainer.css(tabStyle);
        };

        this.tabText
            .html(this.title)
            .css({
                '-webkit-transform':'rotate(-90deg)',
                'display':'block',
                'white-space':'nowrap',         
                'position': 'absolute',
                'top': '50%',
                // center text horizontally
                'left': -(textMeasure.width - _ARVerticalTabs.tabWidth) / 2, 
                // move text up towards top of tab, half height of text, to center vertically
                'margin-top': -(textMeasure.height / 2) 
            });

        this.tabContainer.append(this.tabText);

        this.tabContainer[0].addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        });

        this.tabContainer[0].addEventListener('touchend', function(e) {
            var clientY = Math.abs(e.changedTouches[0].clientY - touchStartY);

            // make sure user isn't scrolling the tabs, in which case we do not
            // want to inadvertently select a tab
            if(clientY > 20) return;
            // do not re-select tab if the tab is already selected
            if(_ARVerticalTabs.selectedTab === _this) return;

            _ARVerticalTabs.selectTab(_this);

            if(tabObject.onClick) {
                tabObject.onClick.apply(_this);
            }
        });

        this.setStyle(this.style);
    }
}
