!function(t){function e(e,a,n,o,l){function c(){g.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),a&&i(a,n,o,l),l.startOrder=[],l.newOrder=[],l.origSort=[],l.checkSort=[],h.removeStyle(l.prefix+"filter, filter, "+l.prefix+"transform, transform, opacity, display").css(l.clean).removeAttr("data-checksum"),window.atob||h.css({display:"none",opacity:"0"}),g.removeStyle(l.prefix+"transition, transition, "+l.prefix+"perspective, perspective, "+l.prefix+"perspective-origin, perspective-origin, "+(l.resizeContainer?"height":"")),"list"==l.layoutMode?(v.css({display:l.targetDisplayList,opacity:"1"}),l.origDisplay=l.targetDisplayList):(v.css({display:l.targetDisplayGrid,opacity:"1"}),l.origDisplay=l.targetDisplayGrid),l.origLayout=l.layoutMode,setTimeout(function(){if(h.removeStyle(l.prefix+"transition, transition"),l.mixing=!1,"function"==typeof l.onMixEnd){var t=l.onMixEnd.call(this,l);l=t?t:l}})}if(clearInterval(l.failsafe),l.mixing=!0,l.filter=e,"function"==typeof l.onMixStart){var d=l.onMixStart.call(this,l);l=d?d:l}for(var f=l.transitionSpeed,d=0;2>d;d++){var p=0==d?p=l.prefix:"";l.transition[p+"transition"]="all "+f+"ms linear",l.transition[p+"transform"]=p+"translate3d(0,0,0)",l.perspective[p+"perspective"]=l.perspectiveDistance+"px",l.perspective[p+"perspective-origin"]=l.perspectiveOrigin}var u=l.targetSelector,h=o.find(u);h.each(function(){this.data={}});var g=h.parent();g.css(l.perspective),l.easingFallback="ease-in-out","smooth"==l.easing&&(l.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==l.easing&&(l.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==l.easing&&(l.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",l.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==l.easing&&(l.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",l.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)"),d="list"==l.layoutMode&&null!=l.listEffects?l.listEffects:l.effects,Array.prototype.indexOf&&(l.fade=-1<d.indexOf("fade")?"0":"",l.scale=-1<d.indexOf("scale")?"scale(.01)":"",l.rotateZ=-1<d.indexOf("rotateZ")?"rotate(180deg)":"",l.rotateY=-1<d.indexOf("rotateY")?"rotateY(90deg)":"",l.rotateX=-1<d.indexOf("rotateX")?"rotateX(90deg)":"",l.blur=-1<d.indexOf("blur")?"blur(8px)":"",l.grayscale=-1<d.indexOf("grayscale")?"grayscale(100%)":"");var v=t(),y=t(),m=[],C=!1;"string"==typeof e?m=s(e):(C=!0,t.each(e,function(t){m[t]=s(this)})),"or"==l.filterLogic?(""==m[0]&&m.shift(),1>m.length?y=y.add(o.find(u+":visible")):h.each(function(){var e=t(this);if(C){var i=0;t.each(m,function(t){this.length?e.is("."+this.join(", ."))&&i++:i>0&&i++}),i==m.length?v=v.add(e):y=y.add(e)}else e.is("."+m.join(", ."))?v=v.add(e):y=y.add(e)})):(v=v.add(g.find(u+"."+m.join("."))),y=y.add(g.find(u+":not(."+m.join(".")+"):visible"))),e=v.length;var x=t(),O=t(),S=t();if(y.each(function(){var e=t(this);"none"!=e.css("display")&&(x=x.add(e),S=S.add(e))}),v.filter(":visible").length==e&&!x.length&&!a){if(l.origLayout==l.layoutMode)return c(),!1;if(1==v.length)return"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),S.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),S.css("display",l.targetDisplayGrid)),c(),!1}if(l.origHeight=g.height(),v.length){if(o.removeClass(l.failClass),v.each(function(){var e=t(this);"none"==e.css("display")?O=O.add(e):S=S.add(e)}),l.origLayout!=l.layoutMode&&0==l.animateGridList)return"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),S.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),S.css("display",l.targetDisplayGrid)),c(),!1;if(!window.atob)return c(),!1;if(h.css(l.clean),S.each(function(){this.data.origPos=t(this).offset()}),"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),O.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),O.css("display",l.targetDisplayGrid)),O.each(function(){this.data.showInterPos=t(this).offset()}),x.each(function(){this.data.hideInterPos=t(this).offset()}),S.each(function(){this.data.preInterPos=t(this).offset()}),"list"==l.layoutMode?S.css("display",l.targetDisplayList):S.css("display",l.targetDisplayGrid),a&&i(a,n,o,l),a&&r(l.origSort,l.checkSort))return c(),!1;for(x.hide(),O.each(function(e){this.data.finalPos=t(this).offset()}),S.each(function(){this.data.finalPrePos=t(this).offset()}),l.newHeight=g.height(),a&&i("reset",null,o,l),O.hide(),S.css("display",l.origDisplay),"block"==l.origDisplay?(o.addClass(l.listClass),O.css("display",l.targetDisplayList)):(o.removeClass(l.listClass),O.css("display",l.targetDisplayGrid)),l.resizeContainer&&g.css("height",l.origHeight+"px"),e={},d=0;2>d;d++)p=0==d?p=l.prefix:"",e[p+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,e[p+"filter"]=l.blur+" "+l.grayscale;O.css(e),S.each(function(){var e=this.data,i=t(this);i.hasClass("mix_tohide")?(e.preTX=e.origPos.left-e.hideInterPos.left,e.preTY=e.origPos.top-e.hideInterPos.top):(e.preTX=e.origPos.left-e.preInterPos.left,e.preTY=e.origPos.top-e.preInterPos.top);for(var a={},r=0;2>r;r++){var s=0==r?s=l.prefix:"";a[s+"transform"]="translate("+e.preTX+"px,"+e.preTY+"px)"}i.css(a)}),"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass)):(o.addClass(l.gridClass),o.removeClass(l.listClass)),setTimeout(function(){if(l.resizeContainer){for(var e={},i=0;2>i;i++){var a=0==i?a=l.prefix:"";e[a+"transition"]="all "+f+"ms ease-in-out",e.height=l.newHeight+"px"}g.css(e)}for(x.css("opacity",l.fade),O.css("opacity",1),O.each(function(){var e=this.data;e.tX=e.finalPos.left-e.showInterPos.left,e.tY=e.finalPos.top-e.showInterPos.top;for(var i={},a=0;2>a;a++){var r=0==a?r=l.prefix:"";i[r+"transition-property"]=r+"transform, "+r+"filter, opacity",i[r+"transition-timing-function"]=l.easing+", linear, linear",i[r+"transition-duration"]=f+"ms",i[r+"transition-delay"]="0",i[r+"transform"]="translate("+e.tX+"px,"+e.tY+"px)",i[r+"filter"]="none"}t(this).css("-webkit-transition","all "+f+"ms "+l.easingFallback).css(i)}),S.each(function(){var e=this.data;e.tX=0!=e.finalPrePos.left?e.finalPrePos.left-e.preInterPos.left:0,e.tY=0!=e.finalPrePos.left?e.finalPrePos.top-e.preInterPos.top:0;for(var i={},a=0;2>a;a++){var r=0==a?r=l.prefix:"";i[r+"transition"]="all "+f+"ms "+l.easing,i[r+"transform"]="translate("+e.tX+"px,"+e.tY+"px)"}t(this).css("-webkit-transition","all "+f+"ms "+l.easingFallback).css(i)}),e={},i=0;2>i;i++)a=0==i?a=l.prefix:"",e[a+"transition"]="all "+f+"ms "+l.easing+", "+a+"filter "+f+"ms linear, opacity "+f+"ms linear",e[a+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,e[a+"filter"]=l.blur+" "+l.grayscale,e.opacity=l.fade;x.css(e),g.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){(-1<e.originalEvent.propertyName.indexOf("transform")||-1<e.originalEvent.propertyName.indexOf("opacity"))&&(-1<u.indexOf(".")?t(e.target).hasClass(u.replace(".",""))&&c():t(e.target).is(u)&&c())})},10),l.failsafe=setTimeout(function(){l.mixing&&c()},f+400)}else{if(l.resizeContainer&&g.css("height",l.origHeight+"px"),!window.atob)return c(),!1;x=y,setTimeout(function(){if(g.css(l.perspective),l.resizeContainer){for(var t={},e=0;2>e;e++){var i=0==e?i=l.prefix:"";t[i+"transition"]="height "+f+"ms ease-in-out",t.height=l.minHeight+"px"}g.css(t)}if(h.css(l.transition),y.length){for(t={},e=0;2>e;e++)i=0==e?i=l.prefix:"",t[i+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,t[i+"filter"]=l.blur+" "+l.grayscale,t.opacity=l.fade;x.css(t),g.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){(-1<t.originalEvent.propertyName.indexOf("transform")||-1<t.originalEvent.propertyName.indexOf("opacity"))&&(o.addClass(l.failClass),c())})}else l.mixing=!1},10)}}function i(e,i,a,r){function s(t,i){var a=isNaN(1*t.attr(e))?t.attr(e).toLowerCase():1*t.attr(e),r=isNaN(1*i.attr(e))?i.attr(e).toLowerCase():1*i.attr(e);return r>a?-1:a>r?1:0}function n(t){"asc"==i?l.prepend(t).prepend(" "):l.append(t).append(" ")}function o(t){t=t.slice();for(var e=t.length,i=e;i--;){var a=parseInt(Math.random()*e),r=t[i];t[i]=t[a],t[a]=r}return t}a.find(r.targetSelector).wrapAll('<div class="mix_sorter"/>');var l=a.find(".mix_sorter");if(r.origSort.length||l.find(r.targetSelector+":visible").each(function(){t(this).wrap("<s/>"),r.origSort.push(t(this).parent().html().replace(/\s+/g,"")),t(this).unwrap()}),l.empty(),"reset"==e)t.each(r.startOrder,function(){l.append(this).append(" ")});else if("default"==e)t.each(r.origOrder,function(){n(this)});else if("random"==e)r.newOrder.length||(r.newOrder=o(r.startOrder)),t.each(r.newOrder,function(){l.append(this).append(" ")});else if("custom"==e)t.each(i,function(){n(this)});else{if("undefined"==typeof r.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;r.newOrder.length||(t.each(r.origOrder,function(){r.newOrder.push(t(this))}),r.newOrder.sort(s)),t.each(r.newOrder,function(){n(this)})}r.checkSort=[],l.find(r.targetSelector+":visible").each(function(e){var i=t(this);0==e&&i.attr("data-checksum","1"),i.wrap("<s/>"),r.checkSort.push(i.parent().html().replace(/\s+/g,"")),i.unwrap()}),a.find(r.targetSelector).unwrap()}function a(t){for(var e=["Webkit","Moz","O","ms"],i=0;i<e.length;i++)if(e[i]+"Transition"in t.style)return e[i];return"transition"in t.style?"":!1}function r(t,e){if(t.length!=e.length)return!1;for(var i=0;i<e.length;i++)if(t[i].compare&&!t[i].compare(e[i])||t[i]!==e[i])return!1;return!0}function s(e){e=e.replace(/\s{2,}/g," ");var i=e.split(" ");return t.each(i,function(t){"all"==this&&(i[t]="mix_all")}),""==i[0]&&i.shift(),i}var n={init:function(r){return this.each(function(){var s=window.navigator.appVersion.match(/Chrome\/(\d+)\./),s=s?parseInt(s[1],10):!1,n=function(t){t=document.getElementById(t);var e=t.parentElement,i=document.createElement("div"),a=document.createDocumentFragment();e.insertBefore(i,t),a.appendChild(t),e.replaceChild(t,i)};(s&&31==s||32==s)&&n(this.id);var o={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onWarLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};r&&t.extend(o,r),this.config=o,t.support.touch="ontouchend"in document,t.support.touch&&(o.isTouch=!0,o.resetDelay=350),o.container=t(this);var l=o.container;if(o.prefix=a(l[0]),o.prefix=o.prefix?"-"+o.prefix.toLowerCase()+"-":"",l.find(o.targetSelector).each(function(){o.origOrder.push(t(this))}),o.sortOnLoad){var c;t.isArray(o.sortOnLoad)?(s=o.sortOnLoad[0],c=o.sortOnLoad[1],t(o.sortSelector+"[data-sort="+o.sortOnLoad[0]+"][data-order="+o.sortOnLoad[1]+"]").addClass("active")):(t(o.sortSelector+"[data-sort="+o.sortOnLoad+"]").addClass("active"),s=o.sortOnLoad,o.sortOnLoad="desc"),i(s,c,l,o)}for(c=0;2>c;c++)s=0==c?s=o.prefix:"",o.transition[s+"transition"]="all "+o.transitionSpeed+"ms ease-in-out",o.perspective[s+"perspective"]=o.perspectiveDistance+"px",o.perspective[s+"perspective-origin"]=o.perspectiveOrigin;for(c=0;2>c;c++)s=0==c?s=o.prefix:"",o.clean[s+"transition"]="none";"list"==o.layoutMode?(l.addClass(o.listClass),o.origDisplay=o.targetDisplayList):(l.addClass(o.gridClass),o.origDisplay=o.targetDisplayGrid),o.origLayout=o.layoutMode,c=o.showOnLoad.split(" "),t.each(c,function(){t(o.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),l.find(o.targetSelector).addClass("mix_all"),"all"==c[0]&&(c[0]="mix_all",o.showOnLoad="mix_all");var d=t();t.each(c,function(){d=d.add(t("."+this))}),d.each(function(){var e=t(this);"list"==o.layoutMode?e.css("display",o.targetDisplayList):e.css("display",o.targetDisplayGrid),e.css(o.transition)}),setTimeout(function(){o.mixing=!0,d.css("opacity","1"),setTimeout(function(){if("list"==o.layoutMode?d.removeStyle(o.prefix+"transition, transition").css({display:o.targetDisplayList,opacity:1}):d.removeStyle(o.prefix+"transition, transition").css({display:o.targetDisplayGrid,opacity:1}),o.mixing=!1,"function"==typeof o.onWarLoad){var t=o.onWarLoad.call(this,o);o=t?t:o}},o.transitionSpeed)},10),o.filter=o.showOnLoad,t(o.sortSelector).bind(o.buttonEvent,function(){if(!o.mixing){var i=t(this),a=i.attr("data-sort"),r=i.attr("data-order");if(i.hasClass("active")){if("random"!=a)return!1}else t(o.sortSelector).removeClass("active"),i.addClass("active");l.find(o.targetSelector).each(function(){o.startOrder.push(t(this))}),e(o.filter,a,r,l,o)}}),t(o.filterSelector).bind(o.buttonEvent,function(){if(!o.mixing){var i=t(this);if(0==o.multiFilter)t(o.filterSelector).removeClass("active"),i.addClass("active"),o.filter=i.attr("data-filter"),t(o.filterSelector+'[data-filter="'+o.filter+'"]').addClass("active");else{var a=i.attr("data-filter");i.hasClass("active")?(i.removeClass("active"),o.filter=o.filter.replace(RegExp("(\\s|^)"+a),"")):(i.addClass("active"),o.filter=o.filter+" "+a)}e(o.filter,null,null,l,o)}})})},toGrid:function(){return this.each(function(){var i=this.config;"grid"!=i.layoutMode&&(i.layoutMode="grid",e(i.filter,null,null,t(this),i))})},toList:function(){return this.each(function(){var i=this.config;"list"!=i.layoutMode&&(i.layoutMode="list",e(i.filter,null,null,t(this),i))})},filter:function(i){return this.each(function(){var a=this.config;a.mixing||(t(a.filterSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+i+'"]').addClass("active"),e(i,null,null,t(this),a))})},sort:function(i){return this.each(function(){var a=this.config,r=t(this);if(!a.mixing){if(t(a.sortSelector).removeClass("active"),t.isArray(i)){var s=i[0],n=i[1];t(a.sortSelector+'[data-sort="'+i[0]+'"][data-order="'+i[1]+'"]').addClass("active")}else t(a.sortSelector+'[data-sort="'+i+'"]').addClass("active"),s=i,n="desc";r.find(a.targetSelector).each(function(){a.startOrder.push(t(this))}),e(a.filter,s,n,r,a)}})},multimix:function(i){return this.each(function(){var a=this.config,r=t(this);multiOut={filter:a.filter,sort:null,order:"desc",layoutMode:a.layoutMode},t.extend(multiOut,i),a.mixing||(t(a.filterSelector).add(a.sortSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!=typeof multiOut.sort&&(t(a.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),r.find(a.targetSelector).each(function(){a.startOrder.push(t(this))})),a.layoutMode=multiOut.layoutMode,e(multiOut.filter,multiOut.sort,multiOut.order,r,a))})},remix:function(i){return this.each(function(){var a=this.config,r=t(this);a.origOrder=[],r.find(a.targetSelector).each(function(){var e=t(this);e.addClass("mix_all"),a.origOrder.push(e)}),a.mixing||"undefined"==typeof i||(t(a.filterSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+i+'"]').addClass("active"),e(i,null,null,r,a))})}};t.fn.themeWar=function(t,e){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:n.init.apply(this,arguments)},t.fn.removeStyle=function(e){return this.each(function(){var i=t(this);e=e.replace(/\s+/g,"");var a=e.split(",");t.each(a,function(){var t=RegExp(this.toString()+"[^;]+;?","g");i.attr("style",function(e,i){return i?i.replace(t,""):void 0})})})}}(jQuery);