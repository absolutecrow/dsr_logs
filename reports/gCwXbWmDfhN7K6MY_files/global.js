/*! For license information please see global.2d79abae8a25f6f4.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}var sidebarOpen=!1,searchInit=!1,bossesSidebarLoaded=!1,userSidebarLoaded=!1,reportSidebarLoaded=!1;function closeAllSidebars(){sidebarOpen&&($(".sidebar-opener").removeClass("open"),$(".sidebar").removeClass("open"),$("#content-and-footer").removeClass("open"),$(".sidebar").scrollLock("disable"))}function lazyLoadSidebar(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return bossesSidebarLoaded||"#zr-sidebar"!=e?userSidebarLoaded||"#acc-sidebar"!=e?reportSidebarLoaded||"#guild-reports-sidebar"!=e?void 0:($("#guild-reports-sidebar").load("/guild-reports-sidebar/"+s,(function(){$("#guild-reports-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),void(reportSidebarLoaded=!0)):($("#acc-sidebar").load("/user-sidebar/",(function(){$("#acc-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),void(userSidebarLoaded=!0)):($("#zr-sidebar").load("/zone-sidebar/",(function(){$("#zr-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),void(bossesSidebarLoaded=!0))}function sidebarTogglerClicked(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=$(t).hasClass("open");closeAllSidebars(),i||($(t).addClass("open"),$(e).addClass("open"),$("#content-and-footer").addClass("open"),sidebarOpen=!0,$(".sidebar").scrollLock("enable"),"#zr-sidebar"==e?bossesSidebarLoaded||($("#zr-sidebar").load("/zone-sidebar/",(function(){$("#zr-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),bossesSidebarLoaded=!0):"#acc-sidebar"==e?userSidebarLoaded||($("#acc-sidebar").load("/user-sidebar/",(function(){$("#acc-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),userSidebarLoaded=!0):"#guild-reports-sidebar"==e?reportSidebarLoaded||($("#guild-reports-sidebar").load("/guild-reports-sidebar/"+s,(function(){$("#guild-reports-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),reportSidebarLoaded=!0):"#user-reports-sidebar"==e?reportSidebarLoaded||($("#user-reports-sidebar").load("/user-reports-sidebar/"+s,(function(){$("#user-reports-sidebar").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0})})),reportSidebarLoaded=!0):"#searchfield-mobile-wrapper"!=e&&$(e).mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:!0},scrollInertia:60,normalizeWheelDelta:!0}))}function toggleSidebarItem(t){$(t).hasClass("open")?$(t).removeClass("open"):$(t).addClass("open")}function toggleMobileSearch(t){$("#searchfield-mobile-wrapper").hasClass("open")?$("#searchfield-mobile-wrapper").removeClass("open"):$("#searchfield-mobile-wrapper").addClass("open")}$((function(){$("#main-menu").smartmenus({showOnClick:!0,mainMenuSubOffsetX:-1,subMenusSubOffsetX:10,subMenusSubOffsetY:0,subMenusMaxWidth:"400px"}),$(document).on("keyup",(function(t){27==t.keyCode&&closeAllSidebars()})),$(document).click((function(t){if(sidebarOpen){for(var e=t.target;e;){if($(e).hasClass("sidebar-opener")||$(e).hasClass("sidebar"))return;e=e.parentNode}closeAllSidebars()}}))})),function(t){var e=[],s=!!window.createPopup,i=s&&!document.defaultView,o=s&&!document.querySelector,r=s&&void 0===document.documentElement.currentStyle.minWidth,a=!1,n=!1;function h(s){if(n||s)n&&s&&(t(document).unbind(".smartmenus_mouse"),n=!1);else{var i=!0,o=null;t(document).bind({"mousemove.smartmenus_mouse":function(s){var r={x:s.pageX,y:s.pageY,timeStamp:(new Date).getTime()};if(o){var n=Math.abs(o.x-r.x),h=Math.abs(o.y-r.y);if((n>0||h>0)&&n<=2&&h<=2&&r.timeStamp-o.timeStamp<=300&&(a=!0,i)){var l=t(s.target).closest("a");l.is("a")&&t.each(e,(function(){if(t.contains(this.$root[0],l[0]))return this.itemEnter({currentTarget:l[0]}),!1})),i=!1}}o=r},"touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse":function(t){/^(4|mouse)$/.test(t.originalEvent.pointerType)||(a=!1)}}),n=!0}}t.SmartMenus=function(e,s){this.$root=t(e),this.opts=s,this.rootId="",this.$subArrow=null,this.subMenus=[],this.activatedItems=[],this.visibleSubMenus=[],this.showTimeout=0,this.hideTimeout=0,this.scrollTimeout=0,this.clickActivated=!1,this.zIndexInc=0,this.$firstLink=null,this.$firstSub=null,this.disabled=!1,this.$disableOverlay=null,this.init()},t.extend(t.SmartMenus,{hideAll:function(){t.each(e,(function(){this.menuHideAll()}))},destroy:function(){for(;e.length;)e[0].destroy();h(!0)},prototype:{init:function(s){var i=this;if(!s){e.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=!0),this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind({"mouseover.smartmenus focusin.smartmenus":t.proxy(this.rootOver,this),"mouseout.smartmenus focusout.smartmenus":t.proxy(this.rootOut,this)}).delegate("a",{"mouseenter.smartmenus":t.proxy(this.itemEnter,this),"mouseleave.smartmenus":t.proxy(this.itemLeave,this),"mousedown.smartmenus":t.proxy(this.itemDown,this),"focus.smartmenus":t.proxy(this.itemFocus,this),"blur.smartmenus":t.proxy(this.itemBlur,this),"click.smartmenus":t.proxy(this.itemClick,this),"touchend.smartmenus":t.proxy(this.itemTouchEnd,this)});var o=".smartmenus"+this.rootId;this.opts.hideOnClick&&t(document).bind("touchstart"+o,t.proxy(this.docTouchStart,this)).bind("touchmove"+o,t.proxy(this.docTouchMove,this)).bind("touchend"+o,t.proxy(this.docTouchEnd,this)).bind("click"+o,t.proxy(this.docClick,this)),t(window).bind("resize"+o+" orientationchange"+o,t.proxy(this.winResize,this)),this.opts.subIndicators&&(this.$subArrow=t("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),h()}if(this.$firstSub=this.$root.find("ul").each((function(){i.menuInit(t(this))})).eq(0),this.$firstLink=this.$root.find("a").eq(0),this.opts.markCurrentItem){var r=/(index|default)\.[^#\?\/]*/i,a=window.location.href.replace(r,""),n=a.replace(/#.*/,"");this.$root.find("a").each((function(){var e=this.href.replace(r,""),s=t(this);e!=a&&e!=n||(s.addClass("current"),i.opts.markCurrentTree&&s.parents("li").each((function(){var e=t(this);e.dataSM("sub")&&e.children("a").addClass("current")})))}))}},destroy:function(){this.menuHideAll(),this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(".smartmenus").undelegate(".smartmenus");var s=".smartmenus"+this.rootId;t(document).unbind(s),t(window).unbind(s),this.opts.subIndicators&&(this.$subArrow=null);var i=this;t.each(this.subMenus,(function(){this.hasClass("mega-menu")&&this.find("ul").removeDataSM("in-mega"),this.dataSM("shown-before")&&(o&&this.children().css({styleFloat:"",width:""}),(i.opts.subMenusMinWidth||i.opts.subMenusMaxWidth)&&(r?this.css({width:"",overflowX:"",overflowY:""}).children().children("a").css("white-space",""):this.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap")),this.dataSM("scroll-arrows")&&this.dataSM("scroll-arrows").remove(),this.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})),i.opts.subIndicators&&this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove(),this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")})),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),this.$root=null,this.$firstLink=null,this.$firstSub=null,this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),e.splice(t.inArray(this,e),1)},disable:function(e){if(!this.disabled){if(this.menuHideAll(),!e&&!this.opts.isPopup&&this.$root.is(":visible")){var s=this.$root.offset();this.$disableOverlay=t('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:s.top,left:s.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex()+1,opacity:0}).appendTo(document.body)}this.disabled=!0}},docClick:function(e){(this.visibleSubMenus.length&&!t.contains(this.$root[0],e.target)||t(e.target).is("a"))&&this.menuHideAll()},docTouchEnd:function(e){if(this.lastTouch){if(this.visibleSubMenus.length&&(void 0===this.lastTouch.x2||this.lastTouch.x1==this.lastTouch.x2)&&(void 0===this.lastTouch.y2||this.lastTouch.y1==this.lastTouch.y2)&&(!this.lastTouch.target||!t.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var s=this;this.hideTimeout=setTimeout((function(){s.menuHideAll()}),350)}this.lastTouch=null}},docTouchMove:function(t){if(this.lastTouch){var e=t.originalEvent.touches[0];this.lastTouch.x2=e.pageX,this.lastTouch.y2=e.pageY}},docTouchStart:function(t){var e=t.originalEvent.touches[0];this.lastTouch={x1:e.pageX,y1:e.pageY,target:e.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getHeight:function(t){return this.getOffset(t,!0)},getOffset:function(t,e){var s;"none"==t.css("display")&&(s={position:t[0].style.position,visibility:t[0].style.visibility},t.css({position:"absolute",visibility:"hidden"}).show());var i=t[0].ownerDocument.defaultView,o=i&&i.getComputedStyle&&i.getComputedStyle(t[0],null),r=o&&parseFloat(o[e?"height":"width"]);return r?r+=parseFloat(o[e?"paddingTop":"paddingLeft"])+parseFloat(o[e?"paddingBottom":"paddingRight"])+parseInt(o[e?"borderTopWidth":"borderLeftWidth"])+parseInt(o[e?"borderBottomWidth":"borderRightWidth"]):r=e?t[0].offsetHeight:t[0].offsetWidth,s&&t.hide().css(s),r},getWidth:function(t){return this.getOffset(t)},getStartZIndex:function(){var t=parseInt(this.$root.css("z-index"));return isNaN(t)?1:t},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(t){return this.handleEvents()&&!this.isLinkInMegaMenu(t)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){return"fixed"==this.$root.css("position")},isLinkInMegaMenu:function(t){return!t.parent().closest("ul").dataSM("level")},isTouchMode:function(){return!a||this.isCollapsible()},itemActivate:function(e){var s=e.parent(),i=s.closest("ul"),o=i.dataSM("level");if(o>1&&(!this.activatedItems[o-2]||this.activatedItems[o-2][0]!=i.dataSM("parent-a")[0])){var r=this;t(i.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(i).each((function(){r.itemActivate(t(this).dataSM("parent-a"))}))}if(this.visibleSubMenus.length>o)for(var a=this.visibleSubMenus.length-1,n=this.activatedItems[o-1]&&this.activatedItems[o-1][0]==e[0]?o:o-1;a>n;a--)this.menuHide(this.visibleSubMenus[a]);if(this.activatedItems[o-1]=e,this.visibleSubMenus[o-1]=i,!1!==this.$root.triggerHandler("activate.smapi",e[0])){var h=s.dataSM("sub");h&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(h)}},itemBlur:function(e){var s=t(e.currentTarget);this.handleItemEvents(s)&&this.$root.triggerHandler("blur.smapi",s[0])},itemClick:function(e){var s=t(e.currentTarget);if(this.handleItemEvents(s)){if(s.removeDataSM("mousedown"),!1===this.$root.triggerHandler("click.smapi",s[0]))return!1;var i=s.parent().dataSM("sub");if(this.isTouchMode()){if(s.dataSM("href")&&s.attr("href",s.dataSM("href")).removeDataSM("href"),i&&(!i.dataSM("shown-before")||!i.is(":visible"))&&(this.itemActivate(s),i.is(":visible")))return!1}else if(this.opts.showOnClick&&1==s.parent().closest("ul").dataSM("level")&&i)return this.clickActivated=!0,this.menuShow(i),!1;return!s.hasClass("disabled")&&!1!==this.$root.triggerHandler("select.smapi",s[0])&&void 0}},itemDown:function(e){var s=t(e.currentTarget);this.handleItemEvents(s)&&s.dataSM("mousedown",!0)},itemEnter:function(e){var s=t(e.currentTarget);if(this.handleItemEvents(s)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var i=this;this.showTimeout=setTimeout((function(){i.itemActivate(s)}),this.opts.showOnClick&&1==s.parent().closest("ul").dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",s[0])}},itemFocus:function(e){var s=t(e.currentTarget);this.handleItemEvents(s)&&(this.isTouchMode()&&s.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==s[0]||this.itemActivate(s),this.$root.triggerHandler("focus.smapi",s[0]))},itemLeave:function(e){var s=t(e.currentTarget);this.handleItemEvents(s)&&(this.isTouchMode()||(s[0].blur&&s[0].blur(),this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0)),s.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",s[0]))},itemTouchEnd:function(e){var s=t(e.currentTarget);if(this.handleItemEvents(s)){var i=s.parent().dataSM("sub");!s.attr("href")||"#"===s.attr("href").charAt(0)||!i||i.dataSM("shown-before")&&i.is(":visible")||(s.dataSM("href",s.attr("href")),s.attr("href","#"))}},menuFixLayout:function(t){t.dataSM("shown-before")||(t.hide().dataSM("shown-before",!0),o&&t.children().css({styleFloat:"left",width:"100%"}))},menuHide:function(t){if(!1!==this.$root.triggerHandler("beforehide.smapi",t[0])&&(t.stop(!0,!0),t.is(":visible"))){var e=function(){i?t.parent().css("z-index",""):t.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?this.opts.collapsibleHideFunction.call(this,t,e):t.hide(this.opts.collapsibleHideDuration,e):this.opts.hideFunction?this.opts.hideFunction.call(this,t,e):t.hide(this.opts.hideDuration,e),t.dataSM("ie-shim")&&t.dataSM("ie-shim").remove(),t.dataSM("scroll")&&t.unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide(),t.dataSM("parent-a").removeClass("highlighted");var s=t.dataSM("level");this.activatedItems.splice(s-1,1),this.visibleSubMenus.splice(s-1,1),this.$root.triggerHandler("hide.smapi",t[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);for(var t=this.visibleSubMenus.length-1;t>0;t--)this.menuHide(this.visibleSubMenus[t]);this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove())),this.activatedItems=[],this.visibleSubMenus=[],this.clickActivated=!1,this.zIndexInc=0},menuIframeShim:function(e){s&&this.opts.overlapControlsInIE&&!e.dataSM("ie-shim")&&e.dataSM("ie-shim",t("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(t){if(!t.dataSM("in-mega")){this.subMenus.push(t),t.hasClass("mega-menu")&&t.find("ul").dataSM("in-mega",!0);for(var e=2,s=t[0];(s=s.parentNode)!=this.$root[0];)"UL"==s.tagName&&e++;t.dataSM("parent-a",t.prevAll("a")).dataSM("level",e).parent().dataSM("sub",t),this.opts.subIndicators&&t.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(e){var s,i,o=e.dataSM("parent-a"),r=e.parent().closest("ul"),n=e.dataSM("level"),h=this.getWidth(e),l=this.getHeight(e),u=o.offset(),d=u.left,c=u.top,m=this.getWidth(o),p=this.getHeight(o),f=t(window),b=f.scrollLeft(),v=f.scrollTop(),S=f.width(),M=f.height(),g=r.hasClass("sm")&&!r.hasClass("sm-vertical"),w=2==n?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,T=2==n?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;if(g?(s=this.opts.rightToLeftSubMenus?m-h-w:w,i=this.opts.bottomToTopSubMenus?-l-w:p+T):(s=this.opts.rightToLeftSubMenus?w-h:m-w,i=this.opts.bottomToTopSubMenus?p-T-l:T),this.opts.keepInViewport&&!this.isCollapsible()){this.isFixed()&&(d-=b,c-=v,b=v=0);var $=d+s,y=c+i;if(this.opts.rightToLeftSubMenus&&$<b?s=g?b-$+s:m-w:!this.opts.rightToLeftSubMenus&&$+h>b+S&&(s=g?b+S-h-$+s:w-h),g||(l<M&&y+l>v+M?i+=v+M-l-y:(l>=M||y<v)&&(i+=v-y)),a&&(g&&(y+l>v+M+.49||y<v)||!g&&l>M+.49)){var C=this;e.dataSM("scroll-arrows")||e.dataSM("scroll-arrows",t([t('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],t('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){C.menuScroll(e,t(this).hasClass("scroll-up"))},mouseleave:function(t){C.menuScrollStop(e),C.menuScrollOut(e,t)},"mousewheel DOMMouseScroll":function(t){t.preventDefault()}}).insertAfter(e));var I=v-(c+p);e.dataSM("scroll",{vportY:I,subH:l,winH:M,step:1}).bind({"mouseover.smartmenus_scroll":function(t){C.menuScrollOver(e,t)},"mouseout.smartmenus_scroll":function(t){C.menuScrollOut(e,t)},"mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll":function(t){C.menuScrollMousewheel(e,t)}}).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:s+(parseInt(e.css("border-left-width"))||0),width:this.getWidth(e)-(parseInt(e.css("border-left-width"))||0)-(parseInt(e.css("border-right-width"))||0),zIndex:this.getStartZIndex()+this.zIndexInc}).eq(0).css("margin-top",I).end().eq(1).css("margin-top",I+M-this.getHeight(e.dataSM("scroll-arrows").eq(1))).end().eq(g&&this.opts.bottomToTopSubMenus?0:1).show()}}e.css({top:"auto",left:"0",marginLeft:s,marginTop:i-p}),this.menuIframeShim(e),e.dataSM("ie-shim")&&e.dataSM("ie-shim").css({zIndex:e.css("z-index"),width:h,height:l,marginLeft:s,marginTop:i-p})},menuScroll:function(t,e,s){var i=parseFloat(t.css("margin-top")),o=t.dataSM("scroll"),r=o.vportY+(e?0:o.winH-o.subH),a=s||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(t.dataSM("scroll").step);if(t.add(t.dataSM("ie-shim")).css("margin-top",Math.abs(r-i)>a?i+(e?a:-a):r),i=parseFloat(t.css("margin-top")),(e&&i+o.subH>o.vportY+o.winH||!e&&i<o.vportY)&&t.dataSM("scroll-arrows").eq(e?1:0).show(),!s&&this.opts.scrollAccelerate&&t.dataSM("scroll").step<this.opts.scrollStep&&(t.dataSM("scroll").step+=.5),Math.abs(i-r)<1)t.dataSM("scroll-arrows").eq(e?0:1).hide(),t.dataSM("scroll").step=1;else if(!s){var n=this;this.scrollTimeout=setTimeout((function(){n.menuScroll(t,e)}),this.opts.scrollInterval)}},menuScrollMousewheel:function(e,s){for(var i=t(s.target).closest("ul");i.dataSM("in-mega");)i=i.parent().closest("ul");if(i[0]==e[0]){var o=(s.originalEvent.wheelDelta||-s.originalEvent.detail)>0;e.dataSM("scroll-arrows").eq(o?0:1).is(":visible")&&this.menuScroll(e,o,!0)}s.preventDefault()},menuScrollOut:function(e,s){for(var i=t(s.relatedTarget).closest("ul");i.dataSM("in-mega");)i=i.parent().closest("ul");/^scroll-(up|down)/.test((s.relatedTarget||"").className)||(e[0]==s.relatedTarget||t.contains(e[0],s.relatedTarget))&&i[0]==e[0]||e.dataSM("scroll-arrows").css("visibility","hidden")},menuScrollOver:function(e,s){for(var i=t(s.target).closest("ul");i.dataSM("in-mega");)i=i.parent().closest("ul");/^scroll-(up|down)/.test(s.target.className)||i[0]!=e[0]||e.dataSM("scroll-arrows").css("visibility","visible")},menuScrollStop:function(t){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=0,t.dataSM("scroll").step=1)},menuShow:function(t){if((t.dataSM("beforefirstshowfired")||(t.dataSM("beforefirstshowfired",!0),!1!==this.$root.triggerHandler("beforefirstshow.smapi",t[0])))&&!1!==this.$root.triggerHandler("beforeshow.smapi",t[0])&&(this.menuFixLayout(t),t.stop(!0,!0),!t.is(":visible"))){var e=this.getStartZIndex()+ ++this.zIndexInc;if(i?t.parent().css("z-index",e):t.css("z-index",e),(this.opts.keepHighlighted||this.isCollapsible())&&t.dataSM("parent-a").addClass("highlighted"),this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)if(o){if(t.children().css("styleFloat","none"),r?t.width(this.opts.subMenusMinWidth?this.opts.subMenusMinWidth:1).children().children("a").css("white-space","nowrap"):(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth)),this.opts.subMenusMaxWidth)if(a=t.width(),r){var s=t.css({width:this.opts.subMenusMaxWidth,overflowX:"hidden",overflowY:"hidden"}).width();a>s?t.css({width:s,overflowX:"visible",overflowY:"visible"}).children().children("a").css("white-space",""):t.css({width:a,overflowX:"visible",overflowY:"visible"})}else t.css("max-width",this.opts.subMenusMaxWidth),a>t.width()?t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth):t.width(a);else t.width(t.width());t.children().css("styleFloat","left")}else if(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth){var a=this.getWidth(t);t.css("max-width",this.opts.subMenusMaxWidth),a>this.getWidth(t)&&t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").insertBefore(t);var n=function(){t.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,t,n):t.show(this.opts.collapsibleShowDuration,n):this.opts.showFunction?this.opts.showFunction.call(this,t,n):t.show(this.opts.showDuration,n),this.visibleSubMenus[t.dataSM("level")-1]=t,this.$root.triggerHandler("show.smapi",t[0])}},popupHide:function(t){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var e=this;this.hideTimeout=setTimeout((function(){e.menuHideAll()}),t?1:this.opts.hideTimeout)},popupShow:function(t,e){this.opts.isPopup?(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.menuFixLayout(this.$root),this.$root.stop(!0,!0),this.$root.is(":visible")||(this.$root.css({left:t,top:e}),this.menuIframeShim(this.$root),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:t,top:e}).insertBefore(this.$root),this.opts.showFunction?this.opts.showFunction.call(this,this.$root):this.$root.show(this.opts.showDuration),this.visibleSubMenus[0]=this.$root)):alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.')},refresh:function(){this.menuHideAll(),this.$root.find("ul").each((function(){var e=t(this);e.dataSM("scroll-arrows")&&e.dataSM("scroll-arrows").remove()})).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired"),this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub"),this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove(),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),this.subMenus=[],this.init(!0)},rootOut:function(t){if(this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var e=this;this.hideTimeout=setTimeout((function(){e.menuHideAll()}),this.opts.hideTimeout)}},rootOver:function(t){this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(t){if(this.handleEvents())this.isCollapsible()||"onorientationchange"in window&&"orientationchange"!=t.type||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll());else if(this.$disableOverlay){var e=this.$root.offset();this.$disableOverlay.css({top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}}}}),t.fn.dataSM=function(t,e){return e?this.data(t+"_smartmenus",e):this.data(t+"_smartmenus")},t.fn.removeDataSM=function(t){return this.removeData(t+"_smartmenus")},t.fn.smartmenus=function(e){if("string"==typeof e){var s=arguments,i=e;return Array.prototype.shift.call(s),this.each((function(){var e=t(this).data("smartmenus");e&&e[i]&&e[i].apply(e,s)}))}var o=t.extend({},t.fn.smartmenus.defaults,e);return this.each((function(){new t.SmartMenus(this,o)}))},t.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollInterval:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(t,e){t.fadeOut(200,e)},collapsibleShowDuration:0,collapsibleShowFunction:function(t,e){t.slideDown(200,e)},collapsibleHideDuration:0,collapsibleHideFunction:function(t,e){t.slideUp(200,e)},showOnClick:!1,hideOnClick:!0,keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){"use strict";var e,s=function(e,s){var i,o,r=s.scrollTop(),a=s.prop("scrollHeight"),n=s.prop("clientHeight"),h=e.originalEvent.wheelDelta||-1*e.originalEvent.detail||-1*e.originalEvent.deltaY,l=0;return"wheel"===e.type?(i=s.height()/t(window).height(),l=e.originalEvent.deltaY*i):this.options.touch&&"touchmove"===e.type&&(h=e.originalEvent.changedTouches[0].clientY-this.startClientY),{prevent:(o=h>0&&r+l<=0)||h<0&&r+l>=a-n,top:o,scrollTop:r,deltaY:l}},i=function(t,e){var s,i,o=e.scrollTop(),r={top:!1,bottom:!1};return r.top=0===o&&(33===t.keyCode||36===t.keyCode||38===t.keyCode),r.top||(s=e.prop("scrollHeight"),i=e.prop("clientHeight"),r.bottom=s===o+i&&(32===t.keyCode||34===t.keyCode||35===t.keyCode||40===t.keyCode)),r},o=function e(s,i){this.$element=s,this.options=t.extend({},e.DEFAULTS,this.$element.data(),i),this.enabled=!0,this.startClientY=0,this.options.unblock&&this.$element.on(e.CORE.wheelEventName+e.NAMESPACE,this.options.unblock,t.proxy(e.CORE.unblockHandler,this)),this.$element.on(e.CORE.wheelEventName+e.NAMESPACE,this.options.selector,t.proxy(e.CORE.handler,this)),this.options.touch&&(this.$element.on("touchstart"+e.NAMESPACE,this.options.selector,t.proxy(e.CORE.touchHandler,this)),this.$element.on("touchmove"+e.NAMESPACE,this.options.selector,t.proxy(e.CORE.handler,this))),this.options.keyboard&&(this.$element.attr("tabindex",this.options.keyboard.tabindex||0),this.$element.on("keydown"+e.NAMESPACE,this.options.selector,t.proxy(e.CORE.keyboardHandler,this)),this.options.unblock&&this.$element.on("keydown"+e.NAMESPACE,this.options.unblock,t.proxy(e.CORE.unblockHandler,this)))};o.NAME="ScrollLock",o.VERSION="3.1.2",o.ANIMATION_NAMESPACE=(o.NAMESPACE=".scrollLock")+".effect",o.DEFAULTS={strict:!1,strictFn:function(t){return t.prop("scrollHeight")>t.prop("clientHeight")},selector:!1,animation:!1,touch:"ontouchstart"in window,keyboard:!1,unblock:!1},o.CORE={wheelEventName:"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",animationEventName:["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(o.ANIMATION_NAMESPACE+" ")+o.ANIMATION_NAMESPACE,unblockHandler:function(t){t.__currentTarget=t.currentTarget},handler:function(e){var i,r,a;this.enabled&&!e.ctrlKey&&(i=t(e.currentTarget),(!0!==this.options.strict||this.options.strictFn(i))&&(e.stopPropagation(),r=t.proxy(s,this)(e,i),e.__currentTarget&&(r.prevent&=t.proxy(s,this)(e,t(e.__currentTarget)).prevent),r.prevent&&(e.preventDefault(),r.deltaY&&i.scrollTop(r.scrollTop+r.deltaY),a=r.top?"top":"bottom",this.options.animation&&setTimeout(o.CORE.animationHandler.bind(this,i,a),0),i.trigger(t.Event(a+o.NAMESPACE)))))},touchHandler:function(t){this.startClientY=t.originalEvent.touches[0].clientY},animationHandler:function(t,e){var s=this.options.animation[e],i=this.options.animation.top+" "+this.options.animation.bottom;t.off(o.ANIMATION_NAMESPACE).removeClass(i).addClass(s).one(o.CORE.animationEventName,(function(){t.removeClass(s)}))},keyboardHandler:function(e){var s,r=t(e.currentTarget),a=(r.scrollTop(),i(e,r));return e.__currentTarget&&(s=i(e,t(e.__currentTarget)),a.top&=s.top,a.bottom&=s.bottom),a.top?(r.trigger(t.Event("top"+o.NAMESPACE)),this.options.animation&&setTimeout(o.CORE.animationHandler.bind(this,r,"top"),0),!1):a.bottom?(r.trigger(t.Event("bottom"+o.NAMESPACE)),this.options.animation&&setTimeout(o.CORE.animationHandler.bind(this,r,"bottom"),0),!1):void 0}},o.prototype.toggleStrict=function(){this.options.strict=!this.options.strict},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.destroy=function(){this.disable(),this.$element.off(o.NAMESPACE),this.$element=null,this.options=null},e=t.fn.scrollLock,t.fn.scrollLock=function(e){return this.each((function(){var s=t(this),i="object"==_typeof(e)&&e,r=s.data(o.NAME);(r||"destroy"!==e)&&(r||s.data(o.NAME,r=new o(s,i)),"string"==typeof e&&r[e]())}))},t.fn.scrollLock.defaults=o.DEFAULTS,t.fn.scrollLock.noConflict=function(){return t.fn.scrollLock=e,this}}));