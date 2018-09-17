/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/armobiledashboard.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180312 1326 iys 200991 Mobile:Adaptive Dashboard:Doc with textbox and image click i
* 180124 1016 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170531 1006 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170209 1206 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 160316 1313 iys 173296 Optimize chart updating for mobile responsive dashboard
* 151030 1250 iys 173296 Optimize chart updating for mobile responsive dashboard
* 150727 1502 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1104 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1041 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
*
* END %&$
*-------------------------------------------------------------------*/

if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["armobiledashboard"]="$Revision: 20180312.1326 $";

function ARMobileDashboard(settings) {
    var _dashboard = this;
    var $window = $(window);

    settings = settings || {};

    // settings
    this.defaultTabIndex = (typeof settings.defaultTabIndex != 'undefined') ? settings.defaultTabIndex : 0;
    this.filtersSectionWidth = settings.filtersSectionWidth || 250;
    this.id = settings.id || 'ARMobileDashboard_' + Math.round(Math.random() * 1000);
    this.layoutSectionsLength = 0;
    this.parent = settings.parent || 'body';
    this.slidesNavigatorSectionHeight = 48;
    this.tabSectionWidth = settings.tabSectionWidth || 35;
    this.themeColor = settings.themeColor || "#005F90";
    this.layoutTabMargin = settings.layoutTabMargin || 4;
    this.layoutTabsOrientation = settings.layoutTabsOrientation || 'horizontal';
    this.topScreenBufferHeight = 15;

    // device-calculated properties
    this.contentSectionWidth = 0;
    this.contentSectionHeight = 0;
    this.deviceWidth = 0;
    this.deviceHeight = 0;

    // content
    this.filterComponents = null;
    this.filterPanelItems = null;
    this.filterPanels = null;
    this.reportComponents = null;
    this.layoutSections = null;
    this.mergeFilterData = null;
    this.currentlyOpenedAccordionFilter = null;

    // flags
    this.inFullScreenMode = false;
    this.isInitialized = false;
    this.isRendered = false;

    // structure
    this.wrapper = null;
    this.contentSection = null;
    this.filtersSection = null;
    this.tabsSection = null;
    this.topScreenBuffer = null;

    // components
    this.filterToggleButton = null;
    this.layoutTabs = null;
    this.layoutSlides = null;
    this.mergeFilterSelect = null;

    // some styles are dynamically set in methods such as this.updateLayout
    this.style = {
        'wrapper': {
            'position': 'absolute'
        },

        'tabsSection': {
            'position': 'absolute',
            'left': '0',
            'box-sizing': 'border-box',
            'background-color': '#ffffff'
        },

        'contentSection': {
            'position': 'absolute',
            'right': '0',
            'z-index': '1',
            'background-color': '#ffffff'
        },

        'topScreenBuffer': {
            top: 0,
            width: '100%',
            height: this.topScreenBufferHeight + 'px',
            backgroundColor: this.themeColor
        }
    };

    this.handleChartUpdate = function(options) {
        var currentComponent = this.getCurrentSlideComponent();
        var chartComponent = this.getComponentByTableNumber(options.tableNumber);

        if(options.isRollUp) {
            chartComponent.rollups['window' + options.pn.window] = {
                isChart: true,
                isGrid: false,
                isRollUp: true,
                pn: options.pn,
                tableNumber: chartComponent.tableNumber,
                callLaterChart: options.drawMethod,
                resizeMethod: options.resizeMethod
            };
        } else {
            chartComponent.resizeMethod = options.resizeMethod; 
            chartComponent.callLaterChart = options.drawMethod;
        }

        if(options.tableNumber === currentComponent.tableNumber) {
            this.updateCurrentChart();
        }
    };

    this.updateCurrentChart = function() {
        var currentComponent = this.getCurrentSlideComponent();
        var chartParameters = this.getTableChartParameters(currentComponent.tableNumber);
        var resetIntroAnimation = false;
        var rollupChartBodyDiv;
        var rollupChartMenuDiv;
        var tableTabsDiv;
        var rollupChartHeight = this.contentSectionHeight;
        var currentComponentResizeContainer = document.getElementById(currentComponent.resizeContainer);

        if(currentComponent.tableNumber < 0) return;

        setTimeout(function() {
            // Change the currentComponent to the appropriate rollup component data if we
            // are processing a rollup chart. Rollup data is stored on the 'root' component
            // within a 'rollups' object. 
            //
            // Ex: dashboard component object for MAINTABLE_* will have a rollups object containing all its associated chart rollups. 
            if(currentComponent.isGrid) {
                if(MyTable[currentComponent.tableNumber].currTab > 0) {
                    // if rollups has the current window, then rollup component is a chart and there shouldn't be scrolling
                    if(currentComponent.rollups["window" + MyTable[currentComponent.tableNumber].currTab]) {
                        currentComponentResizeContainer.style.overflow = 'hidden';
                    } else {
                        // otherwise assume it's grid rollup which requires ability to scroll content
                        currentComponentResizeContainer.style.overflow = 'scroll';
                    }

                    if(currentComponent.div.clientWidth < _dashboard.contentSectionWidth) {
                        currentComponent.div.style.width = '100%';
                    }

                    currentComponent = currentComponent['rollups']['window' + MyTable[currentComponent.tableNumber].currTab];

                    // If the current rollup tab is that of a grid and not a chart, currentComponent will not be resolved
                    // in which case we return out of the update method.

                    if(!currentComponent) return;

                    chartParameters = currentComponent.pn.parms;

                    if(tableTabsDiv = document.getElementById('MAINTABLE_wmenu' + currentComponent.tableNumber)) {
                        rollupChartHeight -= tableTabsDiv.clientHeight;
                    }

                    if (rollupChartMenuDiv = currentComponent.pn.dobj_m) {
                        rollupChartMenuDiv.style.width = this.contentSectionWidth + 'px';

                        rollupChartHeight -= rollupChartMenuDiv.clientHeight;
                    }

                    if (rollupChartBodyDiv = currentComponent.pn.dobj_b) {
                        rollupChartBodyDiv.style.width = this.contentSectionWidth + 'px';
                        rollupChartBodyDiv.style.height = rollupChartHeight + 'px';
                    }
                } else {
                    // if we're tabbing back to the original 'root' component and it's a grid,
                    // re-enable overflow scrolling so that the grid can be scrolled if necessary.
                    currentComponentResizeContainer.style.overflow = 'scroll';
                }
            }

            if(currentComponent.resizeMethod) {
                // only trigger a resize if the chart actually needs to be resized
                // since charts are only resized if currently being displayed
                if(this.getTableChartInstance(currentComponent).width !== this.contentSectionWidth) {

                    if(chartParameters.tdgChart.introAnimation) {
                        // save reference to whether animation should be re-enabled
                        resetIntroAnimation = chartParameters.tdgChart.introAnimation.enabled;
                        // set introAnimation to false so that animation does not occur on resize
                        chartParameters.tdgChart.introAnimation.enabled = false;
                    }

                    currentComponent.resizeMethod();

                    // re-enable introAnimation on both parameters and chart instance itself
                    // so that chart animations such as morph work properly when filter is applied
                    if(resetIntroAnimation) {
                        chartParameters.tdgChart.introAnimation.enabled = true;
                        chartParameters._chart.introAnimation.enabled = true;
                    }
                }
                currentComponent.resizeMethod = null;
            }

            setTimeout(function () {
                // check for callLaterChart inside the timeout since the code, such as on chart
                // filter, will loop through all pn's and make a chart. But since we only process
                // the chart being viewed, currentComponent can be equal to the same (currTab above)
                // and after the first call, callLaterChart will be set to null via below logic causing an error.
                if (currentComponent.callLaterChart) {
                    currentComponent.callLaterChart();
                    currentComponent.callLaterChart = null;
                }
            }, 50);

            // update the chart's saveable properties so that when a filter
            // is applied, there isn't a 'flash' when the chart menu changes
            // from previous to new wider width
            _dashboard.updateChartSaveableSize(currentComponent, _dashboard.contentSectionWidth, _dashboard.deviceHeight);
        }.bind(this), 350);
    };



    this.init = function() {
        if(this.isInitialized) return;

        if(typeof ARMobileDashboards === 'undefined') {
            ARMobileDashboards = [];
        }

        ARMobileDashboards.push(this);

        // set this.parent to an actual HTMLElement.
        this.parent = (this.parent.appendChild) ? this.parent :
            (this.parent === 'body') ? document.getElementsByTagName('body')[0] : document.getElementById(this.parent);

        // setup dashboard internal data
        this.initializeReportComponents();
        this.initializeLayoutSections();
        this.initializeFilterComponents();
        // render dashboard structure
        this.updateDimensions();
        this.render();
        this.updateLayout();
        // create and render layout content
        this.createLayoutSlides();
        this.updateComponentsLayout();
        this.updateFilterPanel();

        this.addEventListeners();

        this.isInitialized = true;
    };

    this.addEventListeners = function() {
        window.addEventListener('resize', function() {
            this.updateDimensions();
            this.updateLayout();
            this.updateComponentsLayout();
            this.updateLayoutSlideDimensions();
            this.updateFilterPanel();
        }.bind(this));

        this.contentSection.addEventListener('touchstart', function() {
            if(!this.filtersSection.isClosed) {
                this.filtersSection.close();
            }

            if(this.mergeFilterSelect) {
                this.mergeFilterSelect.blur();
            }
        }.bind(this));

        this.tabsSection.addEventListener('touchstart', function() {
            if(!this.filtersSection.isClosed && this.layoutTabsOrientation != 'vertical') {
                this.filtersSection.close();
            }

            if(this.mergeFilterSelect) {
                this.mergeFilterSelect.blur();
            }
        }.bind(this));

        document.addEventListener('arFilterChanged', function(e) {
            var values = e.arFilter.values;
            var filterPanel = this.getFilterPanelByDivName(e.arFilter.divName);
            
            if(filterPanel && values) {
                this.updateFilterPanelFilterSelectionText(filterPanel, values.join(', '));

                if(!e.arFilter.children.length) {
                    this.updateFilterPanel();
                }
            }
        }.bind(this));
    };

    this.updateFilterPanelFilterSelectionText = function(filterPanel, selectionText) {
        var filterPanelSelectionSection;

        if(filterPanel && (filterPanelSelectionSection = filterPanel.titleText[0].querySelector('.filterSelections'))) {
            filterPanelSelectionSection.innerHTML = selectionText;
        }
    };

    this.initializeReportComponents = function() {
        var component;
        var componentRootElement;
        var componentTable;
        var dashboardBarComponents = {};
        var i;
        var T_cntlLength = T_cntl.length;
        var layoutNumberT_cntl;
        var layoutNumber;
        var reportView;

        this.reportComponents = [];

        for(i=0; i < T_cntlLength; i++) {
            componentTable = MyTable[i];
            layoutNumberT_cntl = T_cntl[i].table_div.layout;
            componentRootElement = componentTable.maintable.root;
            reportView = componentTable.a_cntl.reportView;

            // layout numbers from T_cntl start at 1
            layoutNumber = layoutNumberT_cntl - 1;

            if(typeof layoutNumber !== 'undefined' && componentRootElement) {
                component = {
                    'div': componentRootElement,
                    'isChart': reportView === REPORTTDG,
                    'isGrid': reportView === REPORTGRID || reportView === REPORTROLL || reportView === REPORTPIVOT,
                    'tableNumber': T_cntl[i].table_number,
                    'rollups': {},
                    // save properties from desktop version of dashboard
                    'desktopProperties': {
                        'parentNode': componentRootElement.parentNode,
                        'height': componentRootElement.style.height,
                        'width': componentRootElement.style.width,
                        'left': componentRootElement.style.left,
                        'top': componentRootElement.style.top
                    }
                };

                if(component.isChart)
                    component.div.style.width = '100%';
                    
                component.div.style.height = '100%';
                // remove border which is mostly not visible and also caused a slight scroll with extra border pixels
                component.div.style.border = 0;

                // if component is part of the dashboardbar, add it to a separate object
                // which will be inserted as the first object in this.reportComponents array
                if(layoutNumberT_cntl === arConstants.LAYOUT_DASHBOARDBAR) {
                    dashboardBarComponents[componentRootElement.id] = component;
                } else {
                    this.reportComponents[layoutNumber] = this.reportComponents[layoutNumber] || {};
                    this.reportComponents[layoutNumber][componentRootElement.id] = component;
                }
            }
        }

        if(ibiCompound.haveDashBoardObjects) {
            this.reportComponents.unshift(dashboardBarComponents);
        }
    };

    this.getMyTableColumnInfo = function(table, column) {
        table = (table instanceof TTable) ? table : MyTable[table];

        if(table) {
            return T_cntl[table.id].a_cols[table.getColumnByName(column)];
        }

        return {};
    };

    this.initializeFilterComponents = function() {
        var allowedControls = ['checkbox','combobox','list','radiobutton','slider'];
        var component;
        var componentObject;
        var dashboardBarFilters = {};
        var i;
        var layoutNumber;
        var layoutObjectNumber;
        var layoutObjectDiv;
        var layoutObjDivsLength = layoutObjDivs.length;
        var LayoutObjectData;
        var filterMyTable;
        var filterDataColumnInfo;

        if(!LayoutObjects || !layoutObjDivs) {
            return;
        }

        this.filterComponents = [];

        for(i=0; i < layoutObjDivsLength; i++) {
            layoutObjectDiv = layoutObjDivs[i];
            layoutObjectNumber = layoutObjectDiv.layout;
            component = layoutObjectDiv.div;
            LayoutObjectData = LayoutObjects[i];

            filterMyTable = ibiCompound.getTable(LayoutObjectData.dataReport);
            filterDataColumnInfo = this.getMyTableColumnInfo(filterMyTable, LayoutObjectData.dataColumn);

            layoutNumber = layoutObjectNumber - 1;

            if(typeof layoutNumber !== "undefined" && component &&
                allowedControls.indexOf(LayoutObjectData.type) !== -1) {

                componentObject = {
                    'div': component,
                    'ibiComponent': this.getActiveFilterComponentById(LayoutObjectData.name),
                    'name': LayoutObjectData.name,
                    'dataColumn': LayoutObjectData.dataColumn,
                    'dataColumnName': filterDataColumnInfo.name,
                    'dataReport': LayoutObjectData.dataReport,
                    'filterTarget': LayoutObjectData.filterTarget,
                    // save properties from desktop version of dashboard
                    'desktopProperties': {
                        'parentNode': component.parentNode,
                        'width': component.style.width,
                        'height': component.style.height,
                        'top': component.style.top,
                        'left': component.style.left
                    }
                };

                componentObject.ibiComponent.width = this.filtersSectionWidth;
                
                // if filter is part of the dashboardbar, add it to a separate object
                // which will be inserted as the first object in this.filterComponents array
                if(layoutObjectNumber === arConstants.LAYOUT_DASHBOARDBAR) {
                    dashboardBarFilters[component.id] = componentObject;
                } else {
                    this.filterComponents[layoutNumber] = this.filterComponents[layoutNumber] || {};
                    this.filterComponents[layoutNumber][component.id] = componentObject;
                }
            }
        }

        if(ibiCompound.haveDashBoardObjects) {
            this.filterComponents.unshift(dashboardBarFilters);
        }

        if(isMergeReports) {
            this.mergeFilterData = ibiCompound.currentMergeFilter[0].data[0];

            this.mergeFilterSelect = document.createElement('select');

            if(this.mergeFilterData && this.mergeFilterData.length) {
                this.mergeFilterData.forEach(function(value) {
                    this.mergeFilterSelect.options.add(new Option(value, value));
                }.bind(this));
            }

            this.mergeFilterSelect.addEventListener('change', function() {
                var dashboard = _dashboard;
                var currentMergePanel;
                var currentLayoutPanels;

                document.mergeform.mergeval.value = this.value;
                ibiCompound.SwitchMerge();

                dashboard.layoutSections.forEach(function(layout, index) {
                    currentLayoutPanels = dashboard.filterPanels[index];
                    
                    if(currentLayoutPanels) {
                        currentMergePanel = currentLayoutPanels[0];
                        dashboard.updateFilterPanelFilterSelectionText(currentMergePanel, this.value);
                    }
                }.bind(this));
            });

            this.layoutSections.forEach(function(layout, i) {
                // force merge filter as first item
                this.filterComponents[i] = this.filterComponents[i] || [];
                this.filterComponents[i][0] = {
                    dataColumnName: ibiCompound.currentMergeFilter[0].column.name,
                    div: this.mergeFilterSelect,
                    ibiComponent: {
                        values: [this.mergeFilterData[0]]
                    }
                };
            }.bind(this));
        }
    };

    this.initializeLayoutSections = function() {
        var i;
        var LayoutSectionLength = LayoutSection.length;

        this.layoutSections = [];

        for(i=0; i < LayoutSectionLength; i++) {
            if(LayoutSection[i] && LayoutSection[i].hasOwnProperty('name')) {
                this.layoutSections.push(LayoutSection[i]);
            }
        }

        // if there is a dashboard bar, add an entry to the layoutSections
        // array as the first layout tab for the dashboard
        if(ibiCompound.haveDashBoardObjects) {
            this.layoutSections.unshift({'name': 'Dashboard Bar'});
        }

        this.layoutSectionsLength = this.layoutSections.length;
    };

    this.render = function() {
        var i;
        var layoutId;
        var layoutDiv;
        var mergeFilter;
        var mergeFilterData;
        var mobileMergeFilter;
        var tabObjects = [];

        if(this.isRendered) return;

        // create structure elements
        this.wrapper = document.createElement('div');
        this.contentSection = document.createElement('div');
        this.tabsSection = document.createElement('div');
        this.topScreenBuffer = document.createElement('div');

        // set their attributes
        this.wrapper.setAttribute('id', this.id);
        this.contentSection.setAttribute('id', this.id + '_content');
        this.tabsSection.setAttribute('id', this.id + '_tabs');

        // assemble dashboard structure
        this.wrapper.appendChild(this.topScreenBuffer);
        this.wrapper.appendChild(this.tabsSection);
        this.wrapper.appendChild(this.contentSection);

        // create filter section (panel)
        this.filtersSection = new ARPanel({
            'title': 'Filter(s)',
            'toggleDirection': 'horizontal',
            'titleBarCollapsesPanel': false,
            'id': this.id + '_filters',
            'parent': this.wrapper,
            'renderClosed': true,
            'transparent': false,
            'style': {
                'titleBar': {
                    'display': 'flex',
                    'height': '35px',
                    'font-weight': 'bold',
                    'margin-left_': (this.layoutTabsOrientation == 'vertical') ? 0 : this.tabSectionWidth,
                    'padding-left': (this.layoutTabsOrientation == 'vertical') ? '4px' : '0',
                    'border-bottom': '1px solid ' + this.themeColor
                },
                'container': {
                    'position': 'absolute',
                    'left': (this.layoutTabsOrientation == 'vertical') ? this.tabSectionWidth : '-1px',
                    'top': this.topScreenBufferHeight + 'px',
                    'width': this.filtersSectionWidth,
                    'height': this.deviceHeight - this.topScreenBufferHeight,
                    'borderColor': this.themeColor,
                    'borderWidth': '0px 1px 0px 0px',
                    'overflow': 'hidden',
                    'z-index': 2
                }
            }
        });

        // If tab orientation is horizontal, add a filters panel toggle button to the filter panel's
        // titleBar so when its opened, it has its own button which toggles itself
        if(this.layoutTabsOrientation == 'horizontal') {
            this.filtersSection.titleBar.prepend(this.createToggleButton({
                style: {
                    padding: (this.tabSectionWidth - 22) / 2
                },
                onSingleTap: _dashboard.filtersSection.toggle.bind(_dashboard.filtersSection)
            }));
        }

        // add dashboard structure to page
        if(this.parent && this.parent.appendChild) {
            this.parent.appendChild(this.wrapper);
        }

        // add filter section toggle button to tab section (separate but identical to the button 
        // within the filter panel itself when opened)
        this.filterToggleButton = this.createToggleButton({
            'style': {
                'background-color': '#fff',
                'display': 'inline-flex',
                'flex-direction': 'column',
                'justify-content': 'center',
                'padding': (this.tabSectionWidth - 22) / 2
            },
            'onSingleTap': function(){_dashboard.filtersSection.toggle();},
            'onDoubleTap': function(){}
        });

        this.tabsSection.appendChild(this.filterToggleButton);

        // - create layout content divs
        // - create tabObjects for use with creating this.layoutTabs
        for(i=0; i < this.layoutSectionsLength; i++) {
            layoutDiv = document.createElement('div');
            layoutId = this.id + '_layout_' + i;

            layoutDiv.setAttribute('id', layoutId);
            ibiUtil.cssText(layoutDiv, {
                'position': 'absolute',
                'left': '0',
                'top': '0',
                'width': '100%',
                'height': '100%',
                'z-index': (i === 0) ? 1 : -1
            });

            // add layout tab configuration to verticalTabObjects
            // array which will be used when creating this.layoutTabs below
            tabObjects.push({
                'title': this.layoutSections[i].name,
                'target': '#' + layoutId,
                'onclick': function() {
                    _dashboard.updateFilterPanel();
                    _dashboard.updateComponentsLayout();
                    _dashboard.updateCurrentChart();
                    _dashboard.updateFilterToggleButtonDisplay();
                    ibiCompound.handleResizeReal();
                },
                'style': {
                    'background-color': '#ffffff'
                }
            });

            this.contentSection.appendChild(layoutDiv);
        }

        this.layoutTabs = new ARTabs({
            parent: '#' + this.id + '_tabs',
            height: (this.layoutTabsOrientation == 'vertical') ? '100%' : this.tabSectionWidth,
            width: (this.layoutTabsOrientation == 'vertical') ? this.tabSectionWidth : '100%',
            tabWrapperMargin: this.layoutTabMargin,
            tabStyle: {
                'marginLeft': this.layoutTabMargin,
                'color': this.themeColor
            },
            tabSelectedStyle: {
                'background-color': this.themeColor,
                'color': '#ffffff'
            },
            tabObjects: tabObjects,
            tabIndex: this.defaultTabIndex,
            orientation: this.layoutTabsOrientation
        }).render();

        this.isRendered = true;
    };

    this.createFilterPanelTitleBar = function(columnName) {
        var column = document.createElement('div');
        var wrapper = document.createElement('div');
        var icon = document.createElement('div');
        var filterSelections = document.createElement('div');
        var columnAndSelectionWrapper = document.createElement('div');

        wrapper.classList.add('wrapper');
        column.classList.add('columnName');
        filterSelections.classList.add('filterSelections');
        icon.classList.add('icon');

        column.innerHTML = columnName;
        columnAndSelectionWrapper.appendChild(column);
        columnAndSelectionWrapper.appendChild(filterSelections);

        wrapper.appendChild(columnAndSelectionWrapper);
        wrapper.appendChild(icon);

        ibiUtil.cssText(wrapper, {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        });

        ibiUtil.cssText(columnAndSelectionWrapper, {
            display: 'flex',
            width: '100%',
            alignItems: 'flex-start',
            flexDirection: 'column'
        });

        ibiUtil.cssText(filterSelections, {
            fontWeight: 'normal',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            marginTop: '4px',
            width: '100%'
        });

        ibiUtil.cssText(icon, {
            fontSize: '26px',
            padding: '6px',
            position: 'absolute',
            right: '0'
        });

        return wrapper;
    };

    this.updateFilterPanelIconState = function(filterPanel) {
        var filterPanelStateIcon = document.createElement('i');
        var filterPanelIconWrapper = filterPanel.titleText[0].querySelector('.icon');

        filterPanelStateIcon.classList.add((filterPanel.isClosed) ? 'icon-angle-right' : 'icon-angle-down');

        filterPanelStateIcon.style.fontWeight = 'bold';
        
        filterPanelIconWrapper.innerHTML = '';
        filterPanelIconWrapper.appendChild(filterPanelStateIcon);
    };

    this.handleAccordionFilterPanelsChange = function(selectedPanel) {
        var currentAccordionPanel = this.currentlyOpenedAccordionFilter[this.getCurrentLayoutIndex()];

        if(currentAccordionPanel instanceof ARPanel && currentAccordionPanel !== selectedPanel) {
            if(!currentAccordionPanel.isClosed) {
                currentAccordionPanel.toggle();
                this.updateFilterPanelIconState(currentAccordionPanel);
            }

            this.currentlyOpenedAccordionFilter[this.getCurrentLayoutIndex()] = selectedPanel;
        }

        ibiCompound.handleResize();
    };

    this.updateFilterToggleButtonDisplay = function() {
        var layoutFilters = this.filterComponents[this.getCurrentLayoutIndex()];
        
        this.filterToggleButton.style.display = (layoutFilters || isMergeReports) ? 'flex' : 'none';
        
        if(!layoutFilters) {
            this.filtersSection.close();
        }

        this.layoutTabs.wrapper.style.height = (this.layoutTabsOrientation == 'vertical') ? 
            (this.deviceHeight - this.filterToggleButton.clientHeight) + 'px' :
            this.tabSectionWidth;
    };

    this.updateDimensions = function() {
        this.contentSectionWidth = this.deviceWidth = $window.width();
        this.contentSectionHeight = this.deviceHeight = window.innerHeight;
        
        this.contentSectionHeight -= this.topScreenBufferHeight;

        if(this.layoutTabsOrientation == 'vertical') {
            this.contentSectionWidth -= this.tabSectionWidth;
        } else {
            this.contentSectionHeight -= this.tabSectionWidth;
        }
    };

    this.updateLayout = function() {
        var wrapperStyle = this.style.wrapper;
        var tabsSectionStyle = this.style.tabsSection;
        var contentSectionStyle = this.style.contentSection;

        wrapperStyle.width = this.deviceWidth;
        wrapperStyle.height = this.deviceHeight;

        contentSectionStyle.top = this.topScreenBufferHeight;

        if(this.layoutTabsOrientation == 'vertical') {
            tabsSectionStyle.width = this.tabSectionWidth;
            tabsSectionStyle.borderRight = '1px solid ' + this.themeColor;
            tabsSectionStyle.height = this.deviceHeight;
            contentSectionStyle.right = 0;
        } else {
            tabsSectionStyle.display = 'flex';
            tabsSectionStyle.width = this.deviceWidth;
            tabsSectionStyle.height = this.tabSectionWidth;
            tabsSectionStyle.borderBottom = '1px solid ' + this.themeColor;
            contentSectionStyle.top += this.tabSectionWidth;
        }

        contentSectionStyle.width = this.contentSectionWidth;
        contentSectionStyle.height = this.contentSectionHeight;

        this.filtersSection.setHeight(this.deviceHeight - this.topScreenBufferHeight);

        ibiUtil.cssText(this.topScreenBuffer, this.style.topScreenBuffer);

        ibiUtil.cssText(this.wrapper, wrapperStyle);
        ibiUtil.cssText(this.tabsSection, tabsSectionStyle);
        ibiUtil.cssText(this.contentSection, contentSectionStyle);
        
        this.updateFilterToggleButtonDisplay();
    };

    this.createLayoutSlides = function() {
        var componentId;
        var i;
        var layoutId;
        var slideElements;
        var slideNumber;

        this.layoutSlides = [];

        for(i=0; i < this.layoutSectionsLength; i++) {
            layoutId = this.id + '_layout_' + i;

            slideElements = [];
            slideNumber = 0;

            // build array of element id's to be passed into new ARSlides for this layout.
            // also assign resizeContainer's to components to be referenced for AUTOFIT functionality.
            for(componentId in this.reportComponents[i]) {
                slideElements.push('#' + componentId);
                this.reportComponents[i][componentId].resizeContainer = layoutId + '_slides' + '_slide_' + slideNumber;
                slideNumber++;
            }

            this.layoutSlides[i] = new ARSlides({
                'id':layoutId + '_slides',
                'parent': '#' + layoutId,
                'height': this.contentSectionHeight,
                'width': this.contentSectionWidth,
                'navigatorColor': this.themeColor,
                'navigatorHeight': this.slidesNavigatorSectionHeight,
                'navigatorOverlaysContent': false,
                'left': '0px',
                'top': '0px',
                'slideElements': slideElements,
                'hasNoSlidesMessage': 'There is no grid or chart available in this tab.',
                'onSlideIndexChanged': function(){
                    _dashboard.updateComponentsLayout();
                    _dashboard.updateCurrentChart();
                }
            }).render();

            if(!this.reportComponents.hasOwnProperty(i)) {
                this.reportComponents[i] = {};
                this.reportComponents[i][this.layoutSlides[i].slideElements[0]] = {
                    div: document.getElementById(this.layoutSlides[i].slideElements[0]),
                    tableNumber: -1
                };
            }
        }
    };

    // get '_chart' instance from a given component.
    // set component.chartInstance to _chart if found and not yet set.
    this.getTableChartInstance = function(component) {
        var chartInstance;
        var parameters;

        if(component && (component.tableNumber >= 0 || component.isRollUp)) {
            if(component.isRollUp) {
                parameters = component.pn.parms;
            } else {
                parameters = this.getTableChartParameters(component.tableNumber);
            }
            
            chartInstance = component.chartInstance;

            if(!chartInstance && parameters._chart) {
                component.chartInstance = chartInstance = parameters._chart;
            }
        }

        return chartInstance;
    };

    this.getTableChartParameters = function(tableNumber) {
        var table = MyTable[tableNumber];
        var parameters = {};

        if(table && table.chartinfo && table.chartinfo.parms) {
            parameters = table.chartinfo.parms;
        }

        return parameters;
    };

    this.updateComponentsLayout = function() {
        var chart;
        var chartWidth = this.contentSectionWidth;
        var chartHeight = this.deviceHeight - this.slidesNavigatorSectionHeight;
        var component = this.getCurrentSlideComponent();

        if(!component.initialized) {
            component.div.style.display = 'block';
            component.div.style.left = component.div.style.top = 0;

            if(component.isGrid) {
                ibiUtil.enableMobileNativeScrolling(component.div.parentNode);
            }

            component.initialized = true;
        }

        if(!this.isInitialized) {
            var layout;
            var _component;
            var reportComponent;
            var reportComponentsInLayout;

            for(layout in this.reportComponents) {
                reportComponentsInLayout = this.reportComponents[layout];

                for(reportComponent in reportComponentsInLayout) {
                    _component = reportComponentsInLayout[reportComponent];

                    // force charts to use AUTOFIT so that they resize when resize event is
                    // triggered using artdgchart's _resizeTDGChart method
                    // Setting it for charts as well as grids so that a chart rollup from 
                    // a grid inherits these settings.
                    if(_component.tableNumber > -1) {
                        MyTable[_component.tableNumber].a_cntl.autoFit = arConstants.AUTOFIT_CONTAINER;
                        MyTable[_component.tableNumber].resizeContainer = document.getElementById(_component.resizeContainer);
                    }
                }
            }
        }
    };

    this.getFilterPanelByDivName = function(divName) {
        var filters = this.filterComponents[this.getCurrentLayoutIndex()];
        var index = 0;

        for(var filter in filters) {
            if(filter == divName) {
                return this.filterPanels[this.getCurrentLayoutIndex()][index];
            }
            index++;
        }
        
        return null;
    };

    this.getActiveFilterComponentById = function(id) {
        var foundFilter = null;

        ibiCompound.drawObjectsList.some(function(filter) {
            if(filter.id.toLowerCase() == id.toLowerCase()) {
                foundFilter = filter;
                return true;
            }
        });

        return foundFilter;
    };

    this.updateFilterPanel = function() {
        var i;
        var component;
        var filterDiv;
        var filterComponent;
        var filterComponents;
        var filterTarget;
        var filterPanel;
        var filterPanels;
        var layoutFilters;
        var layoutIndex = this.getCurrentLayoutIndex();
        var uniqueFilterTargets = [];

        filterComponents = this.filterComponents[layoutIndex];

        // layout may not have filters so return unless there is a merge filter
        if(!filterComponents && !isMergeReports) return;

        // clear all items from filter panel
        this.filtersSection.clearContent();

        // initialize this.filterPanelItems which will contain an
        // array of filter control fragments for each layout
        this.filterPanelItems = this.filterPanelItems || [];
        // array to store created filter panels, organized by layout
        this.filterPanels = this.filterPanels || [];
        // array local to this method for accessing / building the layout's ARPanels 
        filterPanels = this.filterPanels[layoutIndex] || [];
        // array to keep track of the accordion state of the filter panels, organized by layout
        this.currentlyOpenedAccordionFilter = this.currentlyOpenedAccordionFilter || [];

        // create and cache the filter panels fragment for the current layout
        // the first time the layout is displayed
        if(!this.filterPanelItems[layoutIndex]) {
            // create div fragment which will contain all the filter panels belonging to this layout
            layoutFilters = this.filterPanelItems[layoutIndex] = document.createElement('div');
            layoutFilters.classList.add('filterPanelItems');

            // loop through the filter components belonging to the current layout
            for(filterComponent in filterComponents) {
                component = filterComponents[filterComponent];
                filterDiv = component.div;

                if(filterDiv) {
                    // make sure filterDiv is visible, remove absolute positioning
                    // and change fixed width to 100%
                    $(filterDiv).css({
                        display: 'block',
                        position: '',
                        width: '100%'
                    });
                    
                    // create new panel for the current filter component
                    filterPanel = new ARPanel({
                        title: this.createFilterPanelTitleBar(component.dataColumnName),
                        renderClosed: !!filterPanels.length,
                        onToggled: function() {
                            var dashboard = _dashboard; 

                            dashboard.handleAccordionFilterPanelsChange(this);

                            dashboard.updateFilterPanelIconState(this);
                        },
                        style: {
                            titleBar: {
                                color: '#000',
                                height: '50px',
                                fontWeight: 'bold',
                                borderBottom: '1px solid #9E9E9E',
                                backgroundColor: '#e8e8e8'
                            },

                            container: {
                                borderWidth: (filterPanels.length) ? '1px 0 0 0' : '0',
                                borderColor: '#9E9E9E',
                                width: this.filtersSectionWidth,
                                height: 'auto'
                            }
                        },
                        transitionSpeed: '200ms'
                    });

                    this.updateFilterPanelIconState(filterPanel);

                    // add created panel to the layoutFilters div
                    layoutFilters.appendChild(filterPanel.container[0]);

                    // add current filter selection to filterSelectionSection
                    if(isMergeReports && !filterPanels.length) {
                        this.updateFilterPanelFilterSelectionText(filterPanel, this.mergeFilterSelect.value);
                    } else {
                        this.updateFilterPanelFilterSelectionText(filterPanel, component.ibiComponent.values.join(', '));
                    }                    

                    // add filterDiv to its own panel
                    filterPanel.addContent(filterDiv);

                    // add the first filter panel of the layout to the currentlyOpenedAccordionFilter
                    // which will be used to keep track of which filter panel to toggle closed
                    // when another one is opened
                    if(!filterPanels.length) {
                        this.currentlyOpenedAccordionFilter[layoutIndex] = filterPanel;
                    }
                    // push created filter panel into layout's array of filter panels
                    filterPanels.push(filterPanel);
                }
            }
            
            // update dashboard's filterPanels array, organized by layout, with 
            // current layout's array of filter panels.
            this.filterPanels[layoutIndex] = filterPanels;
        }

        setTimeout(function() {
            // For accordion effect, set the height of the filter panels to fit the device height
            filterPanels.forEach(function(panel, index) {
                // subtract the height of the dashboards filter panel title bar height
                var filtersSectionTitleHeight = this.filtersSection.titleBar.outerHeight();
                // subtract the title bar heights of the closed filters
                var closedFiltersTitleHeight = panel.titleBar.outerHeight() * (filterPanels.length - 1);

                var filterPanelMaxHeight = this.deviceHeight - filtersSectionTitleHeight - closedFiltersTitleHeight - this.topScreenBufferHeight; 
                var filterControlMaxHeight = filterPanelMaxHeight - panel.titleBar.outerHeight();
                var filterControlHeight;
                

                if(!isMergeReports || index > 0) {
                    var panelFilterComponent = filterComponents[panel.content[0].querySelector('div').getAttribute('id')];
                    var panel_cs_div = panelFilterComponent.div.querySelector('#' + panelFilterComponent.ibiComponent.id + '_cs');
                

                    // get filter component's full height by setting COMPONENT_ID_cs height to auto.
                    panel_cs_div.style.height = 'auto';
                    // set height of filter panel adjusted to the component height.
                    filterControlHeight = panel_cs_div.getBoundingClientRect().height;

                    // set max-height of panel to filterPanelMaxHeight
                    panel.container[0].style.maxHeight = filterPanelMaxHeight + 'px';
                    // set height and max-height of the active filter control within the panel
                    panelFilterComponent.div.style.height = filterControlHeight + 'px';
                    panelFilterComponent.div.style.maxHeight = filterControlMaxHeight + 'px';
                    // set height property of ar filter control so that MoveDiv properly handles scrolling
                    panelFilterComponent.ibiComponent.height = Math.min(filterControlHeight, filterControlMaxHeight) + 'px';
                } else {
                    filterControlHeight = panel.content[0].querySelector('select').getBoundingClientRect().height;
                }

                panel.setHeight(filterControlHeight + panel.titleBar.outerHeight());
            }.bind(this));
        }.bind(this));

        if(isMergeReports) {
            this.filterPanels[this.getCurrentLayoutIndex()][0].content[0].appendChild(this.mergeFilterSelect);
        }

        this.filtersSection.addContent(this.filterPanelItems[layoutIndex]);
    };

    this.createToggleButton = function(settings) {
        var button = document.createElement('div');
        var lineOne = document.createElement('span');
        var lineTwo = document.createElement('span');
        var lineThree = document.createElement('span');
        var width;

        settings = settings || {};
        settings.style = settings.style || {};

        width = settings.style.width || '22px';

        ibiUtil.cssText(button, settings.style);

        [lineOne, lineTwo, lineThree].forEach(function(buttonLine, index) {
            ibiUtil.cssText(buttonLine, {
                'display': 'block',
                'width': width,
                'height': '2px',
                'border-radius': '1px',
                'margin-top': (index > 0) ? '4px' : '',
                'background-color': this.themeColor,
                '-webkit-user-select': 'none'
            });

            button.appendChild(buttonLine);
        }.bind(this));

        new ARGestures({
            'target': button,
            'onSingleTap': settings.onSingleTap,
            'onDoubleTap': settings.onDoubleTap
        });

        return button;
    };

    // Returns a 'component' object based on its associated table number
    this.getComponentByTableNumber = function(tableNumber) {
        var layout;

        for(layout in this.reportComponents) {
            if(this.reportComponents[layout].hasOwnProperty('MAINTABLE_' + tableNumber)) {
                return this.reportComponents[layout]['MAINTABLE_' + tableNumber];
            }
        }

        return null;
    };

    // Returns the current layout's ARSlide instance
    this.getCurrentLayoutSlide = function() {
        return this.layoutSlides[this.getCurrentLayoutIndex()];
    };

    // Returns component which is currently being displayed
    this.getCurrentSlideComponent = function() {
        var currentLayoutSlide = this.getCurrentLayoutSlide();
        var currentSlideComponentId = currentLayoutSlide.slideElements[currentLayoutSlide.slideIndex];

        return this.reportComponents[this.getCurrentLayoutIndex()][currentSlideComponentId.replace('#','')];
    };

    // Returns the current dashboard layout index
    this.getCurrentLayoutIndex = function() {
        return this.layoutTabs.tabIndex;
    };

    this.getUniqueArrayValues = function(array, sort) {
        var arrayLength;
        var uniqueArray = [];

        if(!array || !(arrayLength = array.length)) return uniqueArray;

        if(sort) array.sort();

        for(var i = 0; i<arrayLength; i++) {
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }

        return uniqueArray;
    };

    this.isComponentInCurrentLayout = function(tableNumber) {
        var component;
        var layoutComponents = this.reportComponents[this.getCurrentLayoutIndex()];

        for(component in layoutComponents) {
            if(tableNumber === layoutComponents[component].tableNumber) {
                return true;
            }
        }

        return false;
    };

    // Resize a TDG chart and its Active containers/structure
    this.resizeActiveTDGChart = function(chart, tableNumber, width, height) {
        if(!chart || typeof tableNumber === 'undefined') return;

        var chartTable = MyTable[tableNumber];
        var chartInfo = chartTable.chartinfo;
        var chartTitleHeight = 0;
        var chartMenuHeight = 0;
        var chartTDGProperties = chartInfo.parms.tdgChart;
        var chartTitleBar = $('#MAINTABLE_wbody' + tableNumber + '_ft');
        var chartMenuControls = $('#MAINTABLE_wmenu' + tableNumber);

        width = width || 350;
        height = height || 350;

        chartMenuHeight = chartMenuControls.height();
        chartTitleHeight = chartTitleBar.height();

        //this.updateChartSaveableSize(tableNumber, width, height);

        // chart's 'root' container
        $('#MAINTABLE_' + tableNumber).css({
            'width' : width,
            'height' : height
        });

        // chart container, excluding the menu section
        $('#MAINTABLE_wbody' + tableNumber + '_fmg').css({
            'width' : width,
            'height' : (height - chartMenuHeight)
        });

        chartTitleBar
            .css('width', width)
            .find('table')// chart title. ex: Policyholders BY Quarter
                .first()
                .css('width', width + 'px')
                .find('table') // Active trial message which appears if using trial version
                    .css('width', width + 'px');

        // menu which contains chart types, Sum, etc.
        chartMenuControls.css('width', width);

        // apply updated width and height to TDG chart properties
        // as well as pfjString, if chart contains it
        if(chartTDGProperties) {
            chartTDGProperties.width = this.contentSectionWidth;
            chartTDGProperties.height = height - (chartMenuHeight + chartTitleHeight);
            chart.set(chartTDGProperties);

            if(chart.pfjString) {
                chart.parsePFJString(chart.pfjString);
            }

            chart.redraw();
        }
    };

    this.updateChartSaveableSize = function(currentComponent, width, height) {
        var saveableSizeObject;

        if(currentComponent.isRollUp) {
            saveableSizeObject = currentComponent.pn.saveable;
        } else {
            saveableSizeObject = MyTable[currentComponent.tableNumber].chartinfo.saveable;
        }
        
        saveableSizeObject.size = {
            'width': width,
            'height': height
        };
    };

    this.updateLayoutSlideDimensions = function() {
        for(var i=0; i < this.layoutSlides.length; i++) {
            this.layoutSlides[i].resize(this.contentSectionWidth, this.contentSectionHeight);
        }
            
    };

    this.enterFullScreenMode = function() {
        this.inFullScreenMode = true;
        this.updateLayout();
    };

    this.exitFullScreenMode = function() {
        this.inFullScreenMode = false;
        this.updateLayout();
    };

    this.init();
}
