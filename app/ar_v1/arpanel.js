/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arpanel.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180116 1536 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1104 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 141118 1618 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 141118 1610 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
*
* END %&$
*-------------------------------------------------------------------*/

if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arpanel"]="$Revision: 20180116.1536 $";

function ARPanel(settings) {
    this.init = function(settings) {
        settings = settings || {};

        this.container = $('<div class="arpanel"/>');
        this.content = $('<div class="content"/>');
        this.transparentPanel = null;
        this.transparentPanelContent = null;
        this.titleBar = null;
        this.titleText = null;

        this.id = settings.id || '';
        this.isClosed = false;
        this.parent = settings.parent || '';
        this.renderClosed = settings.renderClosed || false;
        this.title = settings.title || '';
        this.toggleDirection = settings.toggleDirection || ((this.title) ? 'vertical' : 'horizontal');
        this.transitionSpeed = settings.transitionSpeed || '300ms';
        this.transparent = settings.transparent || false;
        this.transparentOpacity = settings.transparentOpacity || 0.6;
        this.titleBarCollapsesPanel = (typeof settings.titleBarCollapsesPanel != 'undefined') ? settings.titleBarCollapsesPanel : true;
        this.onToggled = settings.onToggled || null;

        this.style = {
            'container': {
                'width': 0,
                'height': 0,
                'borderColor': '#000000',
                'borderWidth': '1px 1px 1px 1px',
                'borderStyle': 'solid',
                'overflow': 'hidden',
                'backgroundColor': '#ffffff'
            },

            'content': {
                'overflow': 'auto'
            },

            'titleBar': {
                'display': 'flex',
                'align-items': 'center',
                'box-sizing': 'border-box',
                'height': '30px',
                'padding-left': '4px'
            },

            'titleText': {
                width: '100%'
            }
        };

        if(this.id) {
            this.container[0].setAttribute('id', this.id);
        }

        if(this.title) {
            this.titleBar = $('<div class="titleBar"/>');
            this.titleText = $('<div/>');
        }

        if(this.transitionSpeed) {
            this.style.container.webkitTransition = this.getToggleProperty() + ' ' + this.transitionSpeed;
            this.style.container.webkitTransform = 'translate3d(0,0,0)';
        }

        $.extend(true, this.style, settings.style);
    };

    this.setStyle = function(style) {
        if(style) {
            $.extend(true, this.style, style);
        }

        // force width and height of 'content' div to that of the container
        this.style.content.width = this.style.container.width;
        this.style.content.height = this.style.container.height;

        if(this.transparent) {
            this.style.container.backgroundColor = '';
        }

        this.container.css(this.style.container);
        this.content.css(this.style.content);

        if(this.title) {
            this.titleBar.css(this.style.titleBar);
            this.titleText.css(this.style.titleText);
        }
    };

    this.render = function() {
        var _this = this;

        this.container
            .append(this.content)
            .appendTo(this.parent);

        if(this.transparent) {
            this.transparentPanel = $('<div class="transparentPanel"/>');
            this.transparentPanelContent = $('<div class="transparentPanelContent"/>');

            this.transparentPanel.css({
                'width': this.style.container.width,
                'height': '100%',
                'position': 'relative',
                'left': '0',
                'top': '0',
                'opacity': this.transparentOpacity,
                'backgroundColor': '#E8E8E8'
            });

            this.transparentPanelContent.css({
                'position': 'absolute',
                'left': '0',
                'top': '0'
            });

            this.content.append([this.transparentPanel , this.transparentPanelContent]);
        }

        if(this.renderClosed) {
            this.close();
        }

        if(this.title) {
            this.setTitleText(this.title);

            this.titleBar
                .append(this.titleText)
                .prependTo(this.container)
                .click(function() {
                    if(_this.titleBarCollapsesPanel) {
                        _this.toggle();
                        
                        if(_this.onToggled) {
                            _this.onToggled.apply(_this);
                        }
                    }
                });
        }
    };

    this.addContent = function(content) {
        var contentPanel = this.getContentDiv();

        contentPanel.append(content);
    };

    this.clearContent = function() {
        var contentPanel = this.getContentDiv();

        contentPanel[0].innerHTML = '';
    };

    this.getContentDiv = function() {
        return (this.transparent) ? this.transparentPanelContent : this.content;
    };

    this.getToggleProperty = function() {
        return (this.toggleDirection == 'horizontal') ? 'width' : 'height';
    };

    this.open = function() {
        var toggleProperty = this.getToggleProperty();
        var toggleValue = this.style.container[toggleProperty];

        toggleValue += ((isNaN(toggleValue)) ? '' : 'px');

        this.container[0].style[toggleProperty] = toggleValue;

        if(toggleProperty == 'height') {
            this.content[0].style.height = this.style.content.height;
        }

        this.isClosed = false;
    };

    this.close = function() {
        var closeHeight = (this.title && this.toggleDirection != 'horizontal') ? this.titleBar.outerHeight() + 'px' : 0;

        this.container[0].style[this.getToggleProperty()] = closeHeight;
        this.isClosed = true;
    };

    this.setHeight = function(height) {
        this.style.container.height = height + 'px';
        this.style.content.height = height - this.titleBar.height() + 'px';
        // if currently closed and the toggle direction is vertical, don't set height 
        // of actual containers since that will effectively open the panel. 
        if(!this.isClosed || this.toggleDirection == 'horizontal') {
            this.container[0].style.height = height + 'px';
            this.content[0].style.height = height - this.titleBar.height() + 'px';
            if (this.transparentPanel) {
                this.transparentPanel[0].style.height = height + 'px';
            }
        }
    };

    this.setTitleText = function(title) {

        this.titleText.html(title);
    };

    this.toggle = function(callback) {
        var container = this.container[0];
        var _ARPanel = this;

        // if height is set to auto, set it to an actual height now,
        // assuming content has been added at this point and we can get the height
        if(this.style.container.height === 'auto' && this.toggleDirection === 'vertical' && (!this.isClosed)) {
            var height = this.container.height();

            // animation doesn't look right when going from 'auto' to a height,
            // so disable transitions temporarily while height is set
            this.container[0].style.webkitTransition = '';
            this.style.container.height = this.container[0].style.height = height + 'px';
            // trigger a page reflow so that height is applied during this function execution
            this.container[0].offsetHeight;
            // re-enable transition animation
            this.container[0].style.webkitTransition = this.style.container.webkitTransition;
        }

        container.addEventListener('webkitTransitionEnd', transitionEndEvent);

        (this.isClosed) ? this.open() : this.close();

        function transitionEndEvent() {
            container.removeEventListener('webkitTransitionEnd', transitionEndEvent);
            if(callback)
                callback.apply(_ARPanel);
        }
    };

    this.init(settings);
    this.setStyle();
    this.render();
}
