(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{83:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return g}));var n=i(16),r=i(49),a=i.n(r),o=i(3),l=i(6),c=(i(1),i(0)),d=i(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=y(e);if(t){var r=y(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return f(this,i)}}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,i){return t&&h(e.prototype,t),i&&h(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var E=function(){function e(){_(this,e),w(this,"_timer",void 0)}return b(e,[{key:"init",value:function(){var e=this;window.Skin.addEventListener("click",(function(){e.start()}))}},{key:"stop",value:function(){clearTimeout(this._timer)}},{key:"start",value:function(){var e=this;e._timer&&clearTimeout(e._timer),Object(d.a)(window.document.body,"tap-on"),e._timer=setTimeout((function(){Object(d.d)(window.document.body,"tap-on")}),3e3)}}]),e}(),m=function(){function e(t){_(this,e),w(this,"element",void 0),w(this,"pointer",void 0),w(this,"label",void 0),w(this,"borderRadius",void 0),w(this,"pointerWidth",void 0),w(this,"scrubber",void 0),this.playerView=window.PlayerView,this.scrubber=t,this._container=t._container}return b(e,[{key:"initTooltip",value:function(){var e=this;e.element=document.getElementById("scrubber-tooltip"),e.label=e.element.lastElementChild,e.pointer=e.element.firstElementChild,e.borderRadius=parseFloat(getComputedStyle(e.element).borderRadius),e.pointerWidth=2*parseFloat(getComputedStyle(e.pointer).borderWidth),e._container.addEventListener("mousemove",(function(t){e.playerView.currentPlayer.isAd()||e.scrubber._isDragging||(e.show(),e.showTooltipAtCursor(t))})),e._container.addEventListener("mouseleave",(function(t){e.hide()}))}},{key:"showTooltipAtCursor",value:function(e){var t=this,i=t.playerView.currentPlayer;if(0!==i.duration&&!0!==i.isAd()){var n=t._container.clientWidth,r=i.fullscreen?e.pageX:e.pageX-Object(c.n)(t._container).x,a=r/n*i.duration;t.label.textContent=Object(c.H)(a),t.move(r)}}},{key:"move",value:function(e){var t=this,i=t._container.clientWidth,n=t.element.clientWidth,r=0;r=e+n/2>i?i-n:e-n/2<0?0:e-n/2,t.element.style.left="".concat(r,"px");var a=e-r-t.pointerWidth/2;a+t.pointerWidth+t.borderRadius>n?a=n-t.pointerWidth-t.borderRadius:a<t.borderRadius&&(a=t.borderRadius),t.pointer.style.left="".concat(a,"px")}},{key:"showTooltipAtValue",value:function(e){var t=this,i=t.playerView.currentPlayer,n=e*t._container.clientWidth,r=e*i.duration;t.label.textContent=Object(c.H)(r),t.show(),t.move(n)}},{key:"show",value:function(){this.element.style.display="block"}},{key:"hide",value:function(){this.element.style.display="none"}}]),e}(),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(i,e);var t=p(i);function i(e){var n;return _(this,i),w(v(n=t.call(this,e)),"_slider",void 0),w(v(n),"_max",void 0),w(v(n),"_current",0),w(v(n),"_videoStartTime",0),w(v(n),"_pixelTimeFactor",1),w(v(n),"_progressEl",void 0),w(v(n),"_bufferEl",void 0),w(v(n),"_container",void 0),w(v(n),"_tooltip",void 0),w(v(n),"handleMediaEvent",(function(e){var t=v(n);switch(e.type){case o.a.Media.Event.DURATION_CHANGE:t._max=e.data,t._current=0,t.playerView.currentPlayer.sourceChanged&&t.invalidate();break;case o.a.Media.Event.CONFIG_CHANGED:case o.a.Media.Event.START_TIME_CHANGED:t.setVideoStartTime(0);break;case o.a.Media.Event.LOAD_PROGRESS:case o.a.Media.Event.LOAD_START:t.updateBuffer();break;case o.a.Media.Event.TIME_UPDATE:t._isDragging||(t._current=e.data,t._slider.setValue(t._current/t._max,0,!1,!0)),t.updateProgress();break;case o.a.Media.Event.STOPPED:t.updateProgress()}})),w(v(n),"handleTimebarClick",(function(e){e.stopPropagation();var t=v(n),i=t._container;if(!(!Object(l.c)(e.target)||t.playerView.currentPlayer.isAd()||null===t.playerView.currentPlayer.duration||t.playerView.currentPlayer.duration<=0)){var r=(t.playerView.fullscreen?window.client.isMobile?e.touches[0].pageX:e.pageX:(window.client.isMobile?e.touches[0].pageX:e.pageX)-Object(c.n)(i).x)/i.clientWidth*t.playerView.currentPlayer.duration;t._dispatchEvent(o.a.UI.Event.SEEK,r)}})),n.playerView=window.PlayerView,n._container=Object(l.a)(o.a.UI.SCRUBBER),n._bufferEl=Object(l.a)(o.a.UI.SCRUBBER_BUFFER),n._progressEl=Object(l.a)(o.a.UI.SCRUBBER_PROGRESS),n}return b(i,[{key:"init",value:function(){var e=this;e.updateAppearance(),e._slider=new a.a("scrubber",{handleClass:"scrubber-handle",vertical:!1,horizontal:!0,loose:!0,speed:1,animationCallback:e._onSliderUpdate.bind(e),dragStartCallback:e._onSliderDragStart.bind(e),dragStopCallback:e._onSliderDragStop.bind(e)}),e._slider.reflow(),window.client.isMobile?e._container.addEventListener("touchstart",e.handleTimebarClick):e._container.addEventListener("click",e.handleTimebarClick),e.playerView.addEventListener(o.a.Media.Event.DURATION_CHANGE,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.CONFIG_CHANGED,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.START_TIME_CHANGED,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.LOAD_PROGRESS,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.LOAD_START,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.TIME_UPDATE,e.handleMediaEvent),e.playerView.addEventListener(o.a.Media.Event.STOPPED,e.handleMediaEvent),e.playerView.addEventListener(o.a.UI.Event.PLAYER_CHANGED,(function(){var t=e.playerView.currentPlayer;e._max=t.duration,e._current=t.currentTime,e.invalidate()})),e._tooltip=new m(e),e._tooltip.initTooltip(),window.client.isMobile&&(e._mobileDisplayTimer=new E,e._mobileDisplayTimer.init())}},{key:"_onSliderUpdate",value:function(e){this._isDragging&&(this._tooltip.showTooltipAtValue(e),this.updateProgress())}},{key:"_onSliderDragStart",value:function(){var e=this;e._slider&&(e._isDragging=!0,Object(d.a)(e._container,"scrubber-drag"))}},{key:"_onSliderDragStop",value:function(){var e=this;e._slider&&(e._isDragging=!1,e._tooltip.hide(),window.ContentPlayer.seek(e._slider.getValue()[0]*window.ContentPlayer.duration),Object(d.d)(e._container,"scrubber-drag"))}},{key:"updateBuffer",value:function(){var e=this,t=e.playerView.currentPlayer;if(!e._fixedValues){var i=t.buffered*t.duration/100/e._pixelTimeFactor;e._bufferEl.style.width="".concat(100*i/e._container.clientWidth,"%")}}},{key:"updateProgress",value:function(){var e=this,t=e.playerView.currentPlayer;if(!e._fixedValues)if(!t.isAd()||!isNaN(t.duration)&&t.duration){var i=e._isDragging?e._slider.offset.current[0]:t.currentTime/e._pixelTimeFactor;e._progressEl.style.width="".concat(i,"px")}else e._progressEl.style.width="100%"}},{key:"setVideoStartTime",value:function(e){this._videoStartTime=e,this.invalidate()}},{key:"resetWidths",value:function(){var e=this;if(!e._fixedValues){var t=e.videoStartTime&&e._pixelTimeFactor!==1/0?"".concat(e.videoStartTime/e._pixelTimeFactor*100/e._container.clientWidth,"%"):0;e._progressEl.style.width=t,e._bufferEl.style.width=t,e.updateBuffer(),e.updateProgress(),e._slider.reflow()}}},{key:"invalidate",value:function(){var e=this,t=e.playerView.currentPlayer;t&&(e._pixelTimeFactor=t.duration/e._container.clientWidth),e.resetWidths(),e.playerView.currentPlayer.isAd()?e._slider.disable():e._slider.enable()}},{key:"open",value:function(e){this._isOpen||(this._isOpen=!0,this.invalidate())}},{key:"close",value:function(e){this._isOpen&&(this._isOpen=!1)}}]),i}(n.a)}}]);