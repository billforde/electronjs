/*------------------------------------------------------------------
* Copyright (c) Information Builders, Inc.  All rights reserved.
*
* _Name_        ===> ar_v1/argestures.js
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
ActiveJSRevision["argestures"]="$Revision: 20150723.1104 $";

function ARGestures(settings) {
    settings = settings || {};

    this.startX = null;
    this.startY = null;
    this.startTime = 0;

    this.isDoubleTapped = false;
    this.isMultiTouch = false;

    this.id = 'ARGestures_' + Math.round(Math.random() * 10000);
    this.target = settings.target;
    this.maximumSwipeDuration = settings.maximumSwipeDuration || 400;
    this.minimumSwipeDistance = settings.minimumSwipeDistance || 50;

    this.onSwipeLeft = settings.onSwipeLeft;
    this.onSwipeRight = settings.onSwipeRight;
    this.onSwipeUp = settings.onSwipeUp;
    this.onSwipeDown = settings.onSwipeDown;
    this.onSingleTap = settings.onSingleTap || function(){};
    this.onDoubleTap = settings.onDoubleTap;

    this.init = function() {
        if(this.target) {
            this.target.addEventListener('touchstart', this.touchStartHandler.bind(this));
            this.target.addEventListener('touchend', this.touchEndHandler.bind(this));
        }
    };

    this.touchStartHandler = function(e) {
        // if the time between last tap and this one is less than 300ms, assume this tap is a double tap
        if(this.onDoubleTap && this.startTime && ((e.timeStamp - this.startTime) < 300 ) && !this.isDoubleTapped) {
            this.isDoubleTapped = true;
        }

        this.startTime = e.timeStamp;
        this.isMultiTouch = false;

        if(e.touches.length) {
            if(e.touches.length > 1) {
                this.isMultiTouch = true;
            }
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        }
    };

    this.touchEndHandler = function(e) {
        // if a double tap has already been registered, return so that
        // an extra end handler isn't processed
        if(this.isDoubleTapped) return;

        var duration = e.timeStamp - this.startTime;
        var horizontalDistance = e.changedTouches[0].clientX - this.startX;
        var verticalDistance = e.changedTouches[0].clientY - this.startY;
        var horizontalDistanceAbs = Math.abs(horizontalDistance);
        var verticalDistanceAbs = Math.abs(verticalDistance);

        // assume this is single tap - might need to fine tune how long a single tap should take
        // also make sure not to apply single/double tap logic if there is swiping. Otherwise multiple
        // methods might be called (both tap and a swipe gesture).
        if(duration < 250 && horizontalDistanceAbs < 5 && verticalDistanceAbs < 5) {
            // check to see if a double tap callback is registered, in which case we
            // need to wait 300ms to see if a second tap occured and handle the double
            // tap method only

            if(this.onDoubleTap) {
               setTimeout(function() {
                   // if a second tap did occur, then this.isDoubleTapped will
                   // be set to true in the touchStartHandler
                   if(this.isDoubleTapped) {
                       // apply the double tap callback only and then reset isDoubleTapped
                       this.onDoubleTap.apply(this);
                       this.isDoubleTapped = false;
                   } else {
                       // otherwise, there was only one tap and so onSingleTap is applied
                       this.onSingleTap.apply(this);
                   }
               }.bind(this), 300);
            } else {
                this.onSingleTap.apply(this);
            }
        }

        if(duration <= this.maximumSwipeDuration) {
            // swipe was most likely on too much of an angle to determine its direction
            if(horizontalDistanceAbs > this.minimumSwipeDistance && verticalDistanceAbs > this.minimumSwipeDistance)             {
                return;
            }

            // only expecting one finger touch for swipe events
            if(!this.isMultiTouch) {
                // left swipe
                if(horizontalDistance < 0 && horizontalDistanceAbs >= this.minimumSwipeDistance) {
                    if(this.onSwipeLeft && typeof this.onSwipeLeft === 'function') {
                        this.onSwipeLeft.apply(this);
                    }
                }

                // right swipe
                if(horizontalDistance > 0 && horizontalDistanceAbs >= this.minimumSwipeDistance) {
                    if(this.onSwipeRight && typeof this.onSwipeRight === 'function') {
                        this.onSwipeRight.apply(this);
                    }
                }

                // down swipe
                if(verticalDistance > 0 && verticalDistanceAbs >= this.minimumSwipeDistance) {
                    if(this.onSwipeDown && typeof this.onSwipeDown === 'function') {
                        this.onSwipeDown.apply(this);
                    }
                }

                // up swipe
                if(verticalDistance < 0 && verticalDistanceAbs >= this.minimumSwipeDistance) {
                    if(this.onSwipeUp && typeof this.onSwipeUp === 'function') {
                        this.onSwipeUp.apply(this);
                    }
                }
            }
        }
    };

    this.init();
}
