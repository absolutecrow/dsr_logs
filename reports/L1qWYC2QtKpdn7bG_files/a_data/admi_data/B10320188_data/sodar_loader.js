(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function p(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a}; 
function t(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var u=t(this);function v(a,b){if(b)a:{var d=u;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];if(!(h in d))break a;d=d[h]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&r(d,a,{configurable:!0,writable:!0,value:b})}} 
v("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new d(e+(k||"")+"_"+h++,k)}function d(k,c){this.g=k;r(this,"description",{configurable:!0,writable:!0,value:c})}if(a)return a;d.prototype.toString=function(){return this.g};var e="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b}); 
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var e=u[b[d]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&r(e.prototype,a,{configurable:!0,writable:!0,value:function(){return w(p(this))}})}return a});function w(a){a={next:a};a[Symbol.iterator]=function(){return this};return a} 
function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:p(a)}}function y(){this.j=!1;this.h=null;this.m=void 0;this.g=1;this.u=this.l=0;this.i=null}function z(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}y.prototype.s=function(a){this.m=a};function A(a,b){a.i={M:b,N:!0};a.g=a.l||a.u}y.prototype.return=function(a){this.i={return:a};this.g=this.u};function B(a){this.g=new y;this.h=a} 
function F(a,b){z(a.g);var d=a.g.h;if(d)return G(a,"return"in d?d["return"]:function(e){return{value:e,done:!0}},b,a.g.return);a.g.return(b);return H(a)}function G(a,b,d,e){try{var h=b.call(a.g.h,d);if(!(h instanceof Object))throw new TypeError("Iterator result "+h+" is not an object");if(!h.done)return a.g.j=!1,h;var k=h.value}catch(c){return a.g.h=null,A(a.g,c),H(a)}a.g.h=null;e.call(a.g,k);return H(a)} 
function H(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(d){a.g.m=void 0,A(a.g,d)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.N)throw b.M;return{value:b.return,done:!0}}return{value:void 0,done:!0}} 
function I(a){this.next=function(b){z(a.g);a.g.h?b=G(a,a.g.h.next,b,a.g.s):(a.g.s(b),b=H(a));return b};this.throw=function(b){z(a.g);a.g.h?b=G(a,a.g.h["throw"],b,a.g.s):(A(a.g,b),b=H(a));return b};this.return=function(b){return F(a,b)};this[Symbol.iterator]=function(){return this}}function J(a){function b(e){return a.next(e)}function d(e){return a.throw(e)}return new Promise(function(e,h){function k(c){c.done?e(c.value):Promise.resolve(c.value).then(b,d).then(k,h)}k(a.next())})} 
v("Promise",function(a){function b(c){this.h=0;this.i=void 0;this.g=[];this.s=!1;var f=this.j();try{c(f.resolve,f.reject)}catch(g){f.reject(g)}}function d(){this.g=null}function e(c){return c instanceof b?c:new b(function(f){f(c)})}if(a)return a;d.prototype.h=function(c){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(c)};var h=u.setTimeout;d.prototype.i=function(c){h(c,0)};d.prototype.l=function(){for(;this.g&&this.g.length;){var c=this.g;this.g=[];for(var f=0;f<c.length;++f){var g= 
c[f];c[f]=null;try{g()}catch(l){this.j(l)}}}this.g=null};d.prototype.j=function(c){this.i(function(){throw c;})};b.prototype.j=function(){function c(l){return function(m){g||(g=!0,l.call(f,m))}}var f=this,g=!1;return{resolve:c(this.G),reject:c(this.l)}};b.prototype.G=function(c){if(c===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof b)this.I(c);else{a:switch(typeof c){case "object":var f=null!=c;break a;case "function":f=!0;break a;default:f=!1}f?this.F(c):this.m(c)}}; 
b.prototype.F=function(c){var f=void 0;try{f=c.then}catch(g){this.l(g);return}"function"==typeof f?this.J(f,c):this.m(c)};b.prototype.l=function(c){this.u(2,c)};b.prototype.m=function(c){this.u(1,c)};b.prototype.u=function(c,f){if(0!=this.h)throw Error("Cannot settle("+c+", "+f+"): Promise already settled in state"+this.h);this.h=c;this.i=f;2===this.h&&this.H();this.P()};b.prototype.H=function(){var c=this;h(function(){if(c.R()){var f=u.console;"undefined"!==typeof f&&f.error(c.i)}},1)};b.prototype.R= 
function(){if(this.s)return!1;var c=u.CustomEvent,f=u.Event,g=u.dispatchEvent;if("undefined"===typeof g)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):"function"===typeof f?c=new f("unhandledrejection",{cancelable:!0}):(c=u.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.i;return g(c)};b.prototype.P=function(){if(null!=this.g){for(var c=0;c<this.g.length;++c)k.h(this.g[c]);this.g=null}};var k=new d;b.prototype.I= 
function(c){var f=this.j();c.v(f.resolve,f.reject)};b.prototype.J=function(c,f){var g=this.j();try{c.call(f,g.resolve,g.reject)}catch(l){g.reject(l)}};b.prototype.then=function(c,f){function g(n,q){return"function"==typeof n?function(C){try{l(n(C))}catch(D){m(D)}}:q}var l,m,E=new b(function(n,q){l=n;m=q});this.v(g(c,l),g(f,m));return E};b.prototype.catch=function(c){return this.then(void 0,c)};b.prototype.v=function(c,f){function g(){switch(l.h){case 1:c(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?k.h(g):this.g.push(g);this.s=!0};b.resolve=e;b.reject=function(c){return new b(function(f,g){g(c)})};b.race=function(c){return new b(function(f,g){for(var l=x(c),m=l.next();!m.done;m=l.next())e(m.value).v(f,g)})};b.all=function(c){var f=x(c),g=f.next();return g.done?e([]):new b(function(l,m){function E(C){return function(D){n[C]=D;q--;0==q&&l(n)}}var n=[],q=0;do n.push(void 0),q++,e(g.value).v(E(n.length-1),m),g=f.next();while(!g.done)})};return b});var K=this||self; 
function L(a){return a};function M(a,b){this.h=a===N&&b||"";this.g=O}function P(a){return a instanceof M&&a.constructor===M&&a.g===O?a.h:"type_error:Const"}var O={},N={};var Q=new M(N,"https://tpc.googlesyndication.com/sodar/%{basename}.js");/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var R;function S(a,b){this.g=b===T?a:""}S.prototype.toString=function(){return this.g+""};function U(a){var b=P(Q);if(!V.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var d=b.replace(W,function(e,h){if(!Object.prototype.hasOwnProperty.call(a,h))throw Error('Found marker, "'+h+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));e=a[h];return e instanceof M?P(e):encodeURIComponent(String(e))});return X(d)} 
var W=/%{(\w+)}/g,V=RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)","i"),T={};function X(a){if(void 0===R){var b=null;var d=K.trustedTypes;if(d&&d.createPolicy){try{b=d.createPolicy("goog#html",{createHTML:L,createScript:L,createScriptURL:L})}catch(e){K.console&&K.console.error(e.message)}R=b}else R=b}a=(b=R)?b.createScriptURL(a):a;return new S(a,T)};function Y(a){var b,d,e=null==(d=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(b,"script[nonce]");(b=e?e.nonce||e.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};function Z(a,b){a.addEventListener&&a.addEventListener.call(a,"load",b,!1)};function aa(a){var b=window,d=!0;d=void 0===d?!1:d;new Promise(function(e,h){function k(){c.onload=null;c.onerror=null;var f;null==(f=c.parentElement)||f.removeChild(c)}var c=b.document.createElement("script");c.onload=function(){k();e()};c.onerror=function(){k();h(void 0)};c.type="text/javascript";c.src=a instanceof S&&a.constructor===S?a.g:"type_error:TrustedResourceUrl";Y(c);d&&"complete"!==b.document.readyState?Z(b,function(){b.document.body.appendChild(c)}):b.document.body.appendChild(c)})};function ba(a){var b,d,e,h,k,c;return J(new I(new B(function(f){switch(f.g){case 1:b="https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid="+a.g+("&tv="+a.h+"&st=")+a.o;d=void 0;f.l=2;var g=ca(b);f.g=4;return{value:g};case 4:d=f.m;f.g=3;f.l=0;break;case 2:f.l=0,f.i=null;case 3:if(!d)return f.return(void 0);e=a.C||d.sodar_query_id;h=void 0!==d.rc_enable?d.rc_enable:"n";k=void 0===d.bg_snapshot_delay_ms?"0":d.bg_snapshot_delay_ms;c=void 0===d.is_gen_204?"1":d.is_gen_204;return e&&d.bg_hash_basename&& 
d.bg_binary?f.return({context:a.i,L:d.bg_hash_basename,K:d.bg_binary,O:a.g+"_"+a.h,C:e,o:a.o,B:h,D:k,A:c}):f.return(void 0)}})))}function ca(a){return new Promise(function(b,d){var e=new XMLHttpRequest;e.onreadystatechange=function(){e.readyState===e.DONE&&(200<=e.status&&300>e.status?b(JSON.parse(e.responseText)):d())};e.open("GET",a,!0);e.send()})};function da(a){this.g=a.g;this.h=a.h;this.i=a.i;this.C=a.C;this.o=a.o;this.B=a.B;this.D=a.D;this.A=a.A}function ea(){this.g="xfad";this.h="r20100101";this.i="cr";this.o="env";this.B="n";this.D="0";this.A="1"}function fa(){var a=new ea;a.o="int";return new da(a)};(function(){var a=fa(),b;J(new I(new B(function(d){if(1==d.g){var e=ba(a);d.g=2;return{value:e}}if(b=d.m){e="sodar2";e=void 0===e?"sodar2":e;var h=window,k=h.GoogleGcLKhOms;k&&"function"===typeof k.push||(k=h.GoogleGcLKhOms=[]);var c={};k.push((c._ctx_=b.context,c._bgv_=b.L,c._bgp_=b.K,c._li_=b.O,c._jk_=b.C,c._st_=b.o,c._rc_=b.B,c._dl_=b.D,c._g2_=b.A,c));if(k=h.GoogleDX5YKUSk)h.GoogleDX5YKUSk=void 0,k[1]();e=U({basename:e});aa(e)}return d.return(b)})))})();}).call(this);