/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/artabs.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180124 1016 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1820 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
*
* END %&$
*-------------------------------------------------------------------*/

if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["artabs"]="$Revision: 20180124.1016 $";

function ARTabs(settings) {
    settings = settings || {};
    this.tabs = null;
    this.parent = document.querySelector(settings.parent || 'body');
    this.wrapper = null;
    this.tabIndex = (settings.tabIndex != null) ? settings.tabIndex : 0;
    this.tabStyle = settings.tabStyle || {};
    this.tabObjects = settings.tabObjects || [];
    this.tabPadding = settings.tabPadding || 4;
    this.orientation = (settings.orientation) ? settings.orientation.toLowerCase() : 'horizontal';
    this.selectedTab = null;
    this.tabContainer = null;
    this.tabSelectedStyle = settings.tabSelectedStyle || {};
    this.tabWrapperMargin = settings.tabWrapperMargin || 4;
    
    this.width = settings.width || ((this.orientation == 'horizontal') ? this.parent.offsetWidth : '35px');
    this.height = settings.height || ((this.orientation == 'horizontal') ? '35px' : this.parent.offsetHeight);

    this.createTabs = function() {
        this.tabs = [];
        this.tabContainer.innerHTML = '';

        this.tabObjects.forEach(function(tabObject) {
            var tab = this.createTab(tabObject);

            this.tabs.push(tab);
            
            this.tabContainer.appendChild(tab.wrapper);

            tab.updateDisplay();
        }.bind(this));

        this.selectTab(this.tabIndex || this.tabs[0]);
    };

    this.createTab = function(tabObject) {
        return new (function ARTab(tabCollection) {
            var isVertical = tabCollection.orientation == 'vertical';
            var touchStartX = 0;
            var touchStartY = 0;
            var tabWrapperWidth = parseInt(tabCollection.width, 10);
            var tabWrapperHeight = parseInt(tabCollection.height, 10);
            
            var tabWrapperMargin = tabCollection.tabWrapperMargin;
            var tabWrapperStyle = {
                width: (isVertical) ? (tabWrapperWidth - tabWrapperMargin) + 'px' : '',
                height: (isVertical) ? '' : (tabWrapperHeight - tabWrapperMargin) + 'px',
                border: '1px solid #2d66b6',
                position: (isVertical) ? 'relative' : '',
                boxSizing: 'border-box',
                marginTop: (isVertical) ? '2px' : tabWrapperMargin + 'px',
                marginLeft: (isVertical) ? tabWrapperMargin + 'px' : '2px',
                marginRight: (isVertical) ? '2px' : '',
                marginBottom: (isVertical) ? '2px' : '',
                borderRightWidth: (isVertical) ? '0' : '',
                borderBottomWidth: (isVertical) ? '' : '0',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: (isVertical) ? '' : '5px',
                borderBottomLeftRadius: (isVertical) ? '5px' : ''
            };

            var tabDeselectedStyle = $.extend($.extend({}, tabWrapperStyle), {
                color: '#005f90',
                backgroundColor: '#ffffff'
            }, tabCollection.tabStyle);

            var tabSelectedStyle = $.extend($.extend({}, tabWrapperStyle), {
                backgroundColor: '#005f90',
                color: '#ffffff'
            }, tabCollection.tabStyle, tabCollection.tabSelectedStyle);

            this._ARTabs = tabCollection;

            this.target = document.querySelector(tabObject.target);
            this.title = tabObject.title;

            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('ARTab_wrapper');

            ibiUtil.cssText(this.wrapper, tabDeselectedStyle);

            this.tabText = document.createElement('div');
            this.tabText.classList.add('ARTab_text');

            ibiUtil.cssText(this.tabText, {
                top: '50%',
                padding: tabCollection.tabPadding + 'px',
                position: (isVertical) ? 'absolute' : 'relative',
                transform: (isVertical) ? 'rotate(-90deg)' : '',
                whiteSpace: 'nowrap'
            });

            this.tabText.innerHTML = this.title;

            this.wrapper.appendChild(this.tabText);

            this.wrapper.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            });

            this.wrapper.addEventListener('touchend', function(e) {
                var scrollValueToCheck = (isVertical) ? 
                        Math.abs(e.changedTouches[0].clientY - touchStartY) :
                        Math.abs(e.changedTouches[0].clientX - touchStartX);

                if(scrollValueToCheck > 20 || this === this._ARTabs.selectedTab) return;

                this._ARTabs.selectTab(this);

                if(tabObject.onclick && typeof tabObject.onclick == 'function') {
                    tabObject.onclick.apply(this);
                }
            }.bind(this));

            this.select = function() {
                ibiUtil.cssText(this.wrapper, tabSelectedStyle);
                this.updateDisplay();
                this.showTarget();
            };

            this.deselect = function() {
                ibiUtil.cssText(this.wrapper, tabDeselectedStyle);
                this.updateDisplay();
                this.hideTarget();
            };

            this.showTarget = function() {
                if(this.target) {
                    this.target.style.zIndex = 1;
                }
            };

            this.hideTarget = function() {
                if(this.target) {
                    this.target.style.zIndex = -1;
                }
            };

            this.updateDisplay = function() {
                this.tabText.style.marginTop = -(this.tabText.offsetHeight / 2) + 'px';
                
                if(isVertical) {
                    this.wrapper.style.height = this.tabText.offsetWidth + 'px';
                    this.tabText.style.left = -((this.tabText.offsetWidth - (tabWrapperWidth - tabWrapperMargin)) / 2) + 'px';
                }
            };
        })(this);
    };

    this.render = function() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('ARTabs_wrapper');
        
        ibiUtil.cssText(this.wrapper, {
            width: (this.orientation == 'horizontal') ? this.width : 'auto',
            height: (this.orientation == 'horizontal') ? 'auto' : this.height,
            overflowX: (this.orientation == 'horizontal') ? 'auto' : 'hidden',
            overflowY: (this.orientation == 'horizontal') ? 'hidden' : 'auto'
        });
      
        this.tabContainer = document.createElement('div');
        this.tabContainer.classList.add('ARTabs_tabContainer');
        
        ibiUtil.cssText(this.tabContainer, {
            display: (this.orientation == 'horizontal') ? 'flex' : 'block',
            height: this.height,
            boxSizing: 'border-box'
        });

        this.wrapper.appendChild(this.tabContainer);

        ibiUtil.enableMobileNativeScrolling(this.tabContainer, (this.orientation == 'horizontal') ? 'xaxis' : 'yaxis');

        if(this.parent) {
            this.parent.appendChild(this.wrapper);
        }

        this.createTabs();

        return this;
    };

    this.getTabIndex = function(tab) {
        return this.tabs.indexOf(tab);
    };

    this.selectTab = function(tab) {
        if(!tab.hasOwnProperty('_ARTabs') && !isNaN(tab)) {
            tab = this.tabs[tab];
        }

        if(tab) {
            if(this.selectedTab) {
                this.selectedTab.deselect();
            }

            this.selectedTab = tab;
            
            this.tabIndex = this.getTabIndex(tab);

            tab.select();
        }
    };
}
