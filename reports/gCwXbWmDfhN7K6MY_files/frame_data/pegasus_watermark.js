(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(15),o=n(3),i=n(6);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(l,e);var t,n,r,c=f(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),y(p(t=c.call(this)),"player",void 0),y(p(t),"_container",void 0),y(p(t),"isOpen",!1),p(t).player=e,window.PlayerView.addEventListener(o.a.UI.Event.APPEARANCE_SETTINGS_CHANGED,(function(){t.updateAppearance()}),p(t)),t}return t=l,(n=[{key:"init",value:function(){}},{key:"invalidate",value:function(){}},{key:"updateAppearance",value:function(){}},{key:"open",value:function(e){this.isOpen||(this._container&&Object(i.f)(this._container),this.isOpen=!0,"function"==typeof e&&e.call())}},{key:"close",value:function(e){!1!==this.isOpen&&(this._container&&Object(i.b)(this._container),this.isOpen=!1,"function"==typeof e&&e.call())}}])&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.a)},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(16),o=(n(1),n(3)),i=n(0),c=n(6),a=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(s,e);var t,n,r,u=p(s);function s(e){var t,n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=u.call(this,e),n=y(t),i=void 0,(r="_imageEl")in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,t._container=Object(c.a)(o.a.UI.WATERMARK),t._imageEl=Object(c.a)(o.a.UI.WATERMARK_IMG),t.playerView=window.PlayerView,t}return t=s,(n=[{key:"init",value:function(){this.create();var e=this;window.client.isMobile?window.document.body.addEventListener("click",(function(){e.playerView.currentPlayer.isAd()||e.open()})):(window.document.body.addEventListener("mouseenter",(function(){var t=e.playerView.currentPlayer;e.mouseEnter=!0,!t.isAd()&&t.hasStarted&&e.open()})),window.document.body.addEventListener("mouseleave",(function(){e.close()}))),e.playerView.addEventListener(o.a.UI.Event.PLAYER_CHANGED,(function(){e.playerView.currentPlayer.isAd()&&e.close()}))}},{key:"open",value:function(){var e=this;e.isOpen||(e.isOpen=!0,Object(a.d)(e._container,"faded-out"),Object(a.a)(e._container,"faded-in"))}},{key:"close",value:function(){var e=this;e.isOpen&&(e.isOpen=!1,Object(a.d)(e._container,"faded-in"),Object(a.a)(e._container,"faded-out"))}},{key:"create",value:function(){var e=this,t=window.PlayerSettings;try{for(;e._container.firstChild;)e._container.removeChild(e._container.firstChild)}catch(e){}var n=t.watermark?t.watermark.image:null,r=t.watermark?t.watermark.text:null;!n&&r&&/.gif|.png|.jpg|.jpeg/i.test(r)&&(n=r);var o=t.watermark?t.watermark.href:null;if(n||r)if(window.ContentPlayer.watermark={image:n,href:o,text:r},n?(e._imageEl||(e._imageEl=document.createElement("img")),e._imageEl.setAttribute("src",Object(i.y)(n)),e._container.appendChild(e._imageEl)):Object(c.b)(e._imageEl),o){var a=document.createElement("a");a.href=Object(i.y)(o),a.target="_blank",e._container.appendChild(a),n&&e._imageEl?a.appendChild(e._imageEl):a.textContent=r,a.title=r}else if(!n&&r){var u=document.createElement("p");u.id="bolt-watermark-text",u.textContent=r,e._container.appendChild(u)}}},{key:"updateAppearance",value:function(){}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.a)}}]);