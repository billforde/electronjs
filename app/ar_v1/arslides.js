/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/arslides.js
* _Description_ ===>
*
* _History_:
*  Date  Time Who Proj       Project Title
* ====== ==== === ====== ===========================================
* 180312 1326 iys 200991 Mobile:Adaptive Dashboard:Doc with textbox and image click i
* 170531 1006 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 170530 1601 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 151030 1250 iys 173296 Optimize chart updating for mobile responsive dashboard
* 150723 1104 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
* 150723 1041 iys 162870 AHTML/MOB:New dashboard layout option / mobile small screens
*
* END %&$
*-------------------------------------------------------------------*/

if(typeof(ActiveJSRevision)=="undefined") var ActiveJSRevision=new Object();
ActiveJSRevision["arslides"]="$Revision: 20180312.1326 $";

function ARSlides(settings) {
    var _this = this;

    settings = settings || {};

    this.id = settings.id || 'ARSlides_' + Math.floor(Math.random() * 100000);
    this.parent = settings.parent || 'body';
    this.width = settings.width || '100px';
    this.height = settings.height || '100px';
    this.navigatorColor = settings.navigatorColor || "#000";
    this.navigatorHeight = settings.navigatorHeight || 0;
    this.navigatorOverlaysContent = settings.navigatorOverlaysContent || false;
    this.onSlideIndexChanged = settings.onSlideIndexChanged;
    this.slideElements = settings.slideElements || [];
    this.slideIndex = settings.slideIndex || 0;
    this.transitionSpeed = settings.transitionSpeed || '350ms';
    this.hasNoSlidesMessage = settings.hasNoSlidesMessage || 'No slide elements added to this ARSlides component';

    this.container = $('<div/>').prop('id', this.id);
    this.navigator = null;
    this.navigatorIndicators = null;
    this.navigatorIndicatorsContainer = null;
    this.navigatorLeftControl = null;
    this.navigatorRightControl = null;
    this.slides = [];

    this.render = function() {
        if(!this.slideElements.length) {
            var blankSlide = document.createElement('div');
            var blankSlideContent = document.createElement('div');
            var blankSlideMessage = document.createElement('p');

            blankSlide.setAttribute('id', this.id + '_blank');
            blankSlideMessage.innerHTML = this.hasNoSlidesMessage;

            blankSlideContent.appendChild(blankSlideMessage);
            blankSlide.appendChild(blankSlideContent);

            this.addSlide(blankSlide);

            ibiUtil.cssText(blankSlideContent, {
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'font-size': '14px',
                'color': this.navigatorColor,
                'height': this.height,
                'width': this.width,
                'padding': '15px',
                'box-sizing': 'border-box'
            });

            this.slideElements[0] = this.id + '_blank';
            this.navigatorHeight = 0;
        } else {
            for(var i = 0; i < this.slideElements.length; i++) {
                this.addSlide(this.slideElements[i]);
            }
        }

        if(this.navigatorHeight) {
            this.navigator = document.createElement('div');
            this.navigatorLeftControl = document.createElement('div');
            this.navigatorRightControl = document.createElement('div');
            this.navigatorIndicatorsContainer = document.createElement('ul');

            // apply css common to both left and right controls
            $([this.navigatorLeftControl, this.navigatorRightControl]).css({
                'display': (this.slideElements.length > 1) ? 'block' : 'none',
                'width': '25px',
                'height': '25px',
                'position': 'absolute',
                'top': '50%',
                'margin-top': '-12.50px',
                'border-bottom': '3px solid ' + this.navigatorColor,
                'border-right': '3px solid ' + this.navigatorColor
            });

            // apply css to the indicators' container
            $(this.navigatorIndicatorsContainer)
                .css({
                    'height': '18px',
                    'width': '100%',
                    'padding': '0',
                    'text-align': 'center',
                    'list-style': 'none',
                    'position': 'absolute',
                    'top': '50%',
                    'margin-top': '-9px'
                })
                .addClass('indicators');

            // apply css specific to the left control and link animate method
            $(this.navigatorLeftControl)
                .css({
                    '-webkit-transform': 'rotate(135deg)',
                    'left': '10px'
                })
                .addClass('left-control');

            new ARGestures({
                'target': this.navigatorLeftControl,
                'onSingleTap': this.animateSlideRight
            });

            // apply css specific to the right control and link animate method
            $(this.navigatorRightControl)
                .css({
                    '-webkit-transform': 'rotate(-45deg)',
                    'right': '10px'
                })
                .addClass('right-control');

            new ARGestures({
                'target': this.navigatorRightControl,
                'onSingleTap': this.animateSlideLeft
            });

            // apply css to the navigator container and append navigation controls
            $(this.navigator)
                .css({
                    'width': '100%',
                    'height': this.navigatorHeight,
                    'position': 'absolute',
                    'bottom': '0',
                    'left': '0'
                })
                .append([this.navigatorIndicatorsContainer, this.navigatorLeftControl, this.navigatorRightControl])
                .addClass('ARSlides_navigator');

            new ARGestures({
                'target': this.navigator,
                'onSwipeLeft': this.animateSlideLeft,
                'onSwipeRight': this.animateSlideRight
            });

            this.renderNavigatorIndicators();
        }

        this.container
            .css({
                'width': this.width,
                'height': this.height,
                'overflow': 'hidden',
                'position': 'relative',
                'background-color': '#ffffff'
            })
            .append(this.navigator)
            .appendTo(this.parent);

        this.slides[this.slideIndex].css('left', 0);

        return this;
    };

    this.getAnimationParameters = function(direction) {
        switch(direction) {
            case 'left' :
                return {
                    'currentSlide': {
                        'from_x': 0,
                        'from_y': 0,
                        'to_x': -(this.width),
                        'to_y': 0
                    },

                    'nextSlide': {
                        'from_x': this.width,
                        'from_y': 0,
                        'to_x': -(this.width),
                        'to_y': 0
                    },

                    'changeIndexMethod': this.incrementSlideIndex
                };

            case 'right' :
                return {
                    'currentSlide': {
                        'from_x': 0,
                        'from_y': 0,
                        'to_x': this.width,
                        'to_y': 0
                    },

                    'nextSlide': {
                        'from_x': -(this.width),
                        'from_y': 0,
                        'to_x': this.width,
                        'to_y': 0
                    },

                    'changeIndexMethod': this.decrementSlideIndex
                };

            case 'up' :
                return {
                    'currentSlide': {
                        'from_x': 0,
                        'from_y': 0,
                        'to_x': 0,
                        'to_y': -(this.height)
                    },

                    'nextSlide': {
                        'from_x': 0,
                        'from_y': this.height,
                        'to_x': 0,
                        'to_y': -(this.height)
                    },

                    'changeIndexMethod': this.incrementSlideIndex
                };

            case 'down' :
                return {
                    'currentSlide': {
                        'from_x': 0,
                        'from_y': 0,
                        'to_x': 0,
                        'to_y': this.height
                    },

                    'nextSlide': {
                        'from_x': 0,
                        'from_y': -(this.height),
                        'to_x': 0,
                        'to_y': this.height
                    },

                    'changeIndexMethod': this.decrementSlideIndex
                };
        }

        return null;
    };

    this.animateSlides = function(direction) {
        var animationParameters = _this.getAnimationParameters(direction);
        _this.executeAnimation(animationParameters);
    };

    this.executeAnimation = function(animationParameters) {
        var currentSlide = animationParameters.currentSlide;
        var nextSlide = animationParameters.nextSlide;

        if(this.slides.length <= 1 || !animationParameters) return;
        
        this.animateSlide(this.slides[this.slideIndex], currentSlide.from_x, currentSlide.from_y, currentSlide.to_x, currentSlide.to_y);
        animationParameters.changeIndexMethod.call(this); // increment or decrement index depending on animation direction
        this.animateSlide(this.slides[this.slideIndex], nextSlide.from_x, nextSlide.from_y, nextSlide.to_x, nextSlide.to_y);
    };

    this.animateSlide = function(element, from_x, from_y, to_x, to_y) {
        element.css({
            'webkitTransition': '',
            'webkitTransform': 'translate3d(0, 0, 0)',
            'left': from_x + 'px',
            'top': from_y + 'px'
        });

        setTimeout(function() {
            element.css({
                'webkitTransition': _this.transitionSpeed + ' ease-in-out',
                'webkitTransform': 'translate3d(' + to_x + 'px,' + to_y + 'px,0)'
            });
        }, 0);
    };

    this.animateSlideUp = function() {
        _this.animateSlides('up');
    };

    this.animateSlideDown = function() {
        _this.animateSlides('down');
    };

    this.animateSlideLeft = function() {
        _this.animateSlides('left');
    };

    this.animateSlideRight = function() {
        _this.animateSlides('right');
    };

    this.addSlide = function(element) {
        // individual slide div 'container'
        var slide = $('<div/>');

        // the element to be added to the slide container
        var slideElement = $(element);
        var slideHeight = (this.navigatorOverlaysContent) ? this.height : this.height - this.navigatorHeight;

        // style and add the slideElement to the slide container.
        // then add the slide container to the overall ARSlides container
        slide.prop('id', this.id + '_slide_' + this.slides.length)
             .css({
                'position': 'absolute',
                'left': -(this.width),
                'width': '100%',
                'height': slideHeight + 'px',
                'background-color': 'white',
                'overflow': 'scroll'
             })
             .append(slideElement)
             .appendTo(this.container);

        this.slides.push(slide);
    };

    this.getNextSlideIndex = function() {
        return (this.isIndexOutOfBounds(this.slideIndex + 1)) ? 0 : this.slideIndex + 1;
    };

    this.getPreviousSlideIndex = function() {
        return (this.isIndexOutOfBounds(this.slideIndex - 1)) ? this.slides.length -1 : this.slideIndex -1;
    };

    this.isIndexOutOfBounds = function(index) {
        return ((index < 0) || (index >= this.slides.length));
    };

    this.decrementSlideIndex = function() {
        this.deselectCurrentNavigatorIndicator();
        this.slideIndex = this.getPreviousSlideIndex();
        this.slideIndexHasChanged();
    };

    this.incrementSlideIndex = function() {
        this.deselectCurrentNavigatorIndicator();
        this.slideIndex = this.getNextSlideIndex();
        this.slideIndexHasChanged();
    };

    this.slideIndexHasChanged = function() {
        this.selectCurrentNavigatorIndicator();

        if(this.onSlideIndexChanged) {
            this.onSlideIndexChanged.apply(this);
        }
    };

    this.getCurrentNavigatorIndicator = function() {
        if(this.navigatorIndicators && this.navigatorIndicators[this.slideIndex]) {
            return this.navigatorIndicators[this.slideIndex];
        }

        return null;
    };

    this.selectCurrentNavigatorIndicator = function() {
        var indicator = this.getCurrentNavigatorIndicator();

        if(indicator) {
            indicator.select();
        }
    };

    this.deselectCurrentNavigatorIndicator = function() {
        var indicator = this.getCurrentNavigatorIndicator();

        if(indicator)
            indicator.deselect();
    };

    this.createNavigatorIndicator = function() {
        var indicator = $('<li/>').css({
            'display': 'inline-block',
            'width': '16px',
            'height': '16px',
            'margin': '5px',
            'background-color': '#fff',
            'border': '1px solid ' + this.navigatorColor,
            'border-radius': '10px'
        });

        var indicatorIndex = this.navigatorIndicators.length;

        var select = function() {
            indicator[0].style.backgroundColor = _this.navigatorColor;
        };

        var deselect = function() {
            indicator[0].style.backgroundColor = '#fff';
        };

        return {
            'node': indicator[0],
            'select': select,
            'deselect': deselect,
            'index': indicatorIndex
        };
    };

    this.renderNavigatorIndicators = function() {
        var indicator;
        var i;

        this.navigatorIndicators = [];
        this.navigatorIndicatorsContainer.innerHTML = '';

        for(i=0; i < this.slides.length; i++) {
            indicator = this.createNavigatorIndicator();

            this.navigatorIndicators.push(indicator);
            this.navigatorIndicatorsContainer.appendChild(indicator.node);
        }

        this.selectCurrentNavigatorIndicator();
    };

    this.resize = function(width, height) {
        var containerStyle = this.container[0].style;
        var slideStyle;
        var slideHeight;

        // update the width and height variables which affect animations
        this.width = width;
        this.height = height;
        // resize the slides container
        containerStyle.width = width + 'px';
        containerStyle.height = height + 'px';

        for(var i=0, l=this.slides.length; i<l; i++) {
            slideHeight = height;
            slideStyle = this.slides[i][0].style;

            if(this.navigator && !this.navigatorOverlaysContent) {
                slideHeight -= this.navigatorHeight;
            }

            // resize each slide
            slideStyle.width = width + 'px';
            slideStyle.height = slideHeight + 'px';

            // adjust the 'left' style as well as remove transitions for slides that are not
            // currently in view so that they're a proper distance from the slide currently
            // in view. Otherwise the 'hidden' slides would overlap with the visible one.
            if(i !== this.slideIndex) {
                slideStyle.left = -(width) + 'px';
                slideStyle.webkitTransition = '';
                slideStyle.webkitTransform = 'translate3d(0, 0, 0)';
            }
        }
    };
}
