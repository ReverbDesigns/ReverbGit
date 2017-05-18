window.inAction = 1;
window.isSwipe = 0;
window.doneAfter = 900;
window.stage = 0;
window.stages = 6;
var hashOnLoad = window.location.hash.substring(1);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){ window.isMobile = true; } else { window.isMobile = false; }

//on dom ready
jQuery(function($) {
	//add mobile site on ready
	if (window.isMobile) $('body').addClass('mobile');
	
	//check url for anchors
	if( (hashOnLoad == "what-is-it") || (hashOnLoad == "1") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(1);
		},500);
	}
	if( (hashOnLoad == "what-is-it-for") || (hashOnLoad == "2") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(2);
		},500);
	}
	if( (hashOnLoad == "how-it-is-designed") || (hashOnLoad == "3") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(3);
		},500);
	}
	if( (hashOnLoad == "how-does-it-work") || (hashOnLoad == "4") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(4);
		},500);
	}
	if( (hashOnLoad == "buynow") || (hashOnLoad == "purchase") || (hashOnLoad == "buy") || (hashOnLoad == "5") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(5);
		},500);
	}
	if( (hashOnLoad == "footer") || (hashOnLoad == "6") ){
		setTimeout(function(){
			window.inAction = 0;
			changeSlide(6);
		},500);
	}
	if( hashOnLoad == "demo" ) {
		setTimeout(function(){
			showDemoWindow();
		},500);
	}
	
	//on page load
	$(window).load(function (){
		$('body').addClass('page-loaded');
		window.inAction = 0;
	});
	
	//add if 5000 sec isn't enough
	setTimeout(function(){
		if (!$('body').hasClass('page-loaded')){
			window.inAction = 0;
			$('body').addClass('page-loaded');
		}
	},5000);
	
	//add class on dom ready
	$('body').addClass('visible-content');

	$(window).bind('DOMMouseScroll mousewheel touchmove', function(event){
		
		event.preventDefault();
		
		//direction
		if (event.deltaY > 0){
			direction = "decrease";
		} else {
			direction = "increase";
		}
		
		//size
		window.energy = event.originalEvent.wheelDelta;
		deltaY = event.originalEvent.deltaY;
		window.scrollsize = Math.abs(Math.round(deltaY));
		
		var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
		
		var minimumScroll = 30;	
		if (isWindows){
			var minimumScroll = 3;
		}
		
//		console.log(minimumScroll);
		
		//on medium user scroll
		if (window.scrollsize >= minimumScroll){
			changeSlide(direction);	
		}
	});
	
	function showSlide(n){
		
		$('.card').removeClass('start').removeClass('continue').removeClass('done');
		
		
		if ($('body').hasClass('shownavigation')) {
			$('body').removeClass('shownavigation');
			window.menuTimeout = 850;
		} else {
			window.menuTimeout = 0;
		}
		
		setTimeout(function(){
				
			clearInterval(window.startInterval);
			clearInterval(window.doneInterval);
			clearInterval(window.continueInterval);
			
			if (window.stage != 4){
				if ($("#embed-video").is(":visible")){
					$("#embed-video").hide();
					setTimeout(function(){
						$("#embed-video")[0].src = $("#embed-video")[0].src.replace('&autoplay=1','');
					},800);
				}
			}
						
			for (i = 0; i <= n; i++){ $('body').addClass('stage'+i); }
			for (i = n + 1; i <= window.stages; i++){ $('body').removeClass('stage'+i); }
			
			if (n == 5){
				showThePrices();	
			}
				
			if (window.stage == 1){
						
				window.startInterval = setTimeout(function(){ $('.card.first').addClass('start'); },4000);
				window.doneInterval = setTimeout(function(){ $('.card.first').addClass('done'); },6000);
						
			} else if (window.stage == 2){
						
				window.startInterval = setTimeout(function(){ $('.card.second').addClass('start'); },1500);
				window.continueInterval = setTimeout(function(){ $('.card.second').addClass('continue'); },3000);
				window.doneInterval = setTimeout(function(){ $('.card.second').addClass('done'); },6500);
						
			} else if (window.stage == 4){
				setTimeout(function(){
					$("#embed-video")[0].src += "&autoplay=1";
					$("#embed-video").show().blur();
				},800);
			}
		},window.menuTimeout);
		
		//navigation
		var navStage = n - 1;
		if (navStage > -1 && navStage < 6){
			$('.navigation .selected').removeClass('selected');
			$('.navigation li:eq(' + navStage + ')').addClass('selected');
		}
	}
	
	//change silde
	function changeSlide(n){
		
		if (n == "increase"){
			if ((window.stage + 1) >= window.stages){
				n = window.stages;
			} else {
				n = window.stage + 1;
			}
		} else if (n == "decrease"){
			if ((window.stage - 1) < 0){
				n = 0;
			} else {
				n = window.stage - 1;
			}
		}
		
		if (n != window.stage){
			
			//event action
			if (window.inAction != 1){	
			
				//we are animating
				window.inAction = 1;
				
				//hide layout for animations and show on done
				clearInterval(window.hideContentInterval);
				if (window.stage < 6){
					$('body').removeClass('visible-content');
				}
				window.hideContentInterval = setTimeout(function(){ $('body').addClass('visible-content'); }, 1050);
				
				//show slide and setting a stage
				window.stage = n;
				
				
				showSlide(window.stage);
				
				//we are done
				setTimeout(function(){ window.inAction = 0; }, window.doneAfter);
			}
		}
	}
	
	$('.addme').click(function(){
		$('.card.first').toggleClass('done');
	});
	
	$('.card.second .nav li').click(function(){
		
		$('.card.second li.selected').removeClass('selected');
		$('.card.second').removeClass('start').removeClass('continue').removeClass('done').removeClass('startup').removeClass('photostory').removeClass('promosite').removeClass('blog');
		
		$('.card.second').addClass($(this).data('class'));
		
		clearInterval(window.doneInterval);
		clearInterval(window.doneInterval);
		clearInterval(window.continueInterval);
				
		window.startInterval = setTimeout(function(){ $('.card.second').addClass('start'); },500);
		window.continueInterval = setTimeout(function(){ $('.card.second').addClass('continue'); },2000);
		window.doneInterval = setTimeout(function(){ $('.card.second').addClass('done'); },5500);
			
		$(this).addClass('selected');
	});
	
	
	$('.card.third .nav li').click(function(){
		
		$('.card.third li.selected').removeClass('selected');
		$('.card.third').removeClassLike('feature').addClass('feature-'+ ( $(this).index() + 1 ) );
		$(this).addClass('selected');
		
	});
	
	
	/*
	$('.card.fourth .videos li').click(function(){
		
		//stop other video
		var iframe = $('.card.fourth .video li.visible iframe')[0];
		var player = $f(iframe);
		player.api('unload');
		
		//show video and switch select on click
		$('.card.fourth li.selected').removeClass('selected');
		$('.card.fourth .video li.visible').removeClass('visible');
		$('.card.fourth .video li').eq($(this).index()).addClass('visible');
		$(this).addClass('selected');
		//vimeo autoplay!
		var iframe = $('.card.fourth .video li:eq('+$(this).index()+') iframe')[0];
		var player = $f(iframe);
		player.api('play');
		$(iframe).blur();
	});
	*/
	
	$('.navigation li').click(function(event){
		//remove click delay
		changeSlide($(this).index() + 1);
	});
	
	$('.buynow .prices li').hover(function(){
		$('.buynow .prices li.selected').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('.buynow').click(function(){
		if (window.stage == 5 || 6) {
			changeSlide(5);
		}
	});
	
	$('.menutoggle').on( "click", function(){
		$('body').toggleClass('shownavigation');
	});
	
	function showMenu(){
		$('body').addClass('shownavigation');	
	}
	
	function hideMenu(){
		$('body').removeClass('shownavigation');	
	}
	
	function toggleMenu(){
		$('body').addClass('shownavigation');
	}
	
	$('body').mouseup(function(e){
		var container = $(".navigation li, .menutoggle");
	
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			hideMenu();
		}
	});
	
	$('.shares').sharrre({
			share: {
				googlePlus: true,
				facebook: true
			},
			buttons: {
				twitter: {
				custom: 'Qards: Make a website with the new powerful WordPress tool by Designmodo - https://designmodo.com/qards/',
				//  via: 'Designmodo',
				url: false
			}
		},
		template: '<li class="twitter"><svg><use xlink:href="#twitter-icon"/></svg>Twitter <span class="count">0</span></li>' +
                '<li class="facebook"><svg><use xlink:href="#facebook-icon"/></svg>Facebook <span class="count">0</span></li>' +
                '<li class="google"><svg><use xlink:href="#google-icon"/></svg>Google+ <span class="count">0</span></li>',
		urlCurl: 'https://designmodo.com/wp-content/themes/designmodov2.1/custom-pages/startup/presentation/js/sharrre.php',
		url: 'https://designmodo.com/qards/',
		enableHover: false,
		className: '',
		render: function(api, options) {
			$(api.element).on('click', '.twitter', function() {
				api.openPopup('twitter');
			});
			$(api.element).on('click', '.facebook', function() {
				api.openPopup('facebook');
			});
			$(api.element).on('click', '.google', function() {
				api.openPopup('googlePlus');
			});
			$('.shares .google .count').text(options.count.googlePlus);
			$('.shares .facebook .count').text(options.count.facebook);
			var summ = options.count.googlePlus + options.count.twitter + options.count.facebook;
		}
	});
	
	
	//hot-keys
	$(window).on("keydown",function(e){

		//down key
		if (e.keyCode == 40){
			changeSlide('increase');
		}
		//up key
		if (e.keyCode == 38){
			changeSlide('decrease');
		}
		
		//right key
		if (e.keyCode == 39){
			if (window.stage == "2"){
				if (!$('.card.second .nav li.selected').is(':last-child')){
					$('.card.second .nav li.selected').removeClass('selected').next().click();
				}
			}
			
			//stage three
			if (window.stage == "3"){
				if (!$('.card.third .nav li.selected').is(':last-child')){
					$('.card.third .nav li.selected').removeClass('selected').next().click();
				}
			}
			
			//stage three
			if (window.stage == "4"){
				if (!$('.card.fourth .videos li.selected').is(':last-child')){
					$('.card.fourth .videos li.selected').removeClass('selected').next().click();
				}
			}

		}
		
		//left key
		if (e.keyCode == 37){
			//stage two
			if (window.stage == "2"){
				if (!$('.card.second .nav li.selected').is(':first-child')){
					$('.card.second .nav li.selected').removeClass('selected').prev().click();
				}
			}
			
			//show prev feature
			if (window.stage == "3"){
				if (!$('.card.third .nav li.selected').is(':first-child')){
					$('.card.third .nav li.selected').removeClass('selected').prev().click();
				}
			}
			
			//show prev feature
			if (window.stage == "4"){
				if (!$('.card.fourth .videos li.selected').is(':first-child')){
					$('.card.fourth .videos li.selected').removeClass('selected').prev().click();
				}
			}
		}
		
		/* esc key */
		if (e.keyCode == 27){
			hideMenu();	
			hideDemoWindow();
		}
	})
	
	//swipes
	$(document).swipe( {
        swipeStatus:function(event, phase, direction, distance, duration, fingers){
			  
			//swipes are not only for mobiles, right?
			if (window.isMobile == true){
			 
			 	 //swipe up, down, left and right
				 if (phase == "move" && direction == "up" && distance > 50){
					changeSlide('increase');
				 } else if (phase == "move" && direction == "down" && distance > 50){
					changeSlide('decrease');
				 } else if (phase == "end" && direction == "left" && distance > 25){
					
					/* swipe left */
					hideMenu();	
						
					//show next showcase
					if (window.stage == "2"){
						if (!$('.card.second .nav li.selected').is(':last-child')){
							$('.card.second .nav li.selected').removeClass('selected').next().click();
						}
					}
					
					//show next feature
					if (window.stage == "3"){
						if (!$('.card.third .nav li.selected').is(':last-child')){
							$('.card.third .nav li.selected').removeClass('selected').next().click();
						}
					}
				
					//show next video
					if (window.stage == "4"){
						if (!$('.card.fourth .videos li.selected').is(':last-child')){
							$('.card.fourth .videos li.selected').removeClass('selected').next().click();
						}
					}
					
						
				} else if (phase == "end" && direction == "right" && distance > 25){
					/* swipe right */
						
					if (window.stage == "1"){
						showMenu();	
					}
					
					
					//show prev showcase
					if (window.stage == "2"){
						if (!$('.card.second .nav li.selected').is(':first-child')){
							$('.card.second .nav li.selected').removeClass('selected').prev().click();
						} else {
							showMenu();	
						}
					}
					
					//show prev feature
					if (window.stage == "3"){
						if (!$('.card.third .nav li.selected').is(':first-child')){
							$('.card.third .nav li.selected').removeClass('selected').prev().click();
						} else {
							showMenu();	
						}
					}
					
					//show prev video
					if (window.stage == "4"){
						if (!$('.card.fourth .videos li.selected').is(':first-child')){
							$('.card.fourth .videos li.selected').removeClass('selected').prev().click();
						} else {
							showMenu();	
						}
					}
				}
			//end if mobile
		  	}
        },
        threshold:50,
        maxTimeThreshold:3000,
        fingers:'all'
      });
	
	$('.arrow-down').click(function(){
		changeSlide(1);
	});
	
	$('.button.buy').on( "click", function(){
		changeSlide(5);
	});
	
	$('.demobutton').on( "click", function(){
		showDemoWindow();
	});
	
	function showDemoWindow(){
		$('.demowindow').removeClass('hidden');
		setTimeout(function(){
			$('.demowindow').addClass('animate-show');
			$('.user-email').focus();
		},50);
	}
	
	function hideDemoWindow(){
		$('.demowindow').addClass('animate-hide');
		setTimeout(function(){
			$('.demowindow').addClass('hidden').removeClass('animate-show').removeClass('animate-hide');
		},500);
	}
	
	$(".demowindow").mouseup(function(e){
		var container = $(".demowindow .invite-card");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			hideDemoWindow();
		}
	});
	
	function showThePrices(){
		$('.price.agency .amount').each(function(index, element) {
			if (!$(element).hasClass('done')){
				var priceBefore = $(element).data('before');
				var amount = parseInt($(element).text());
				setTimeout(function(){
					$(element).text(priceBefore).prop('number', priceBefore).delay(1000).animateNumber({number:amount, easing: "easeOutExpo"}, 2500).addClass('done');
				},100);
			}
		});
	}
	
	//request demo on focus and submit
	if ($('.user-email').exists()) {
		
		var email = $('.user-email');
		//Ajax Login 
		if (email) {
			$('.demo-submit-form').ajaxForm({
				type: 'post',
				url: '/wp-admin/admin-ajax.php',
				dataType: 'json',
				success: function(data) {
					if (data.response) {
						if (data.response.search(/Please enter a valid email address/) != -1) {
							alert(data.response);
						} else {
							$('.demo-submit-form').addClass('sent');
							$('.email-submit-button').text('✔ Check your email');
							$('.demo-submit-form').ajaxFormUnbind();
						}
					}
				}
			});
		}
	}
	
	//get browser
	var browser;
	if( navigator.userAgent.indexOf("Chrome") != -1 ){
		browser = "chrome";
	} else if( navigator.userAgent.indexOf("Opera") != -1 ){
		browser = "opera";
	} else if( navigator.userAgent.indexOf("MSIE") != -1 ){
		browser = "ie";
	} else if( navigator.userAgent.indexOf("Firefox") != -1 ){
		browser = "firefox";
	} else {
		browser = "unknown";
	}
	$('body').addClass(browser);
	
});

(function(doc) {
	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}
	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		setTimeout(function(){ fix(); },5000);
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}
});

window.onorientationchange = function() {
	var orientation = window.orientation;
	switch(orientation) {
		case 0:
			location.reload();
			break; 
		case 90:
			location.reload();
			break;
		case -90: 
		  location.reload();
        break;
	}
}

/* external funcs */
//exists
jQuery.fn.exists = function(){return this.length>0;}

//removes class with prefix
jQuery.fn.removeClassLike = function(prefix){ var classes = this.attr("class").split(" ").filter(function(c) { return c.lastIndexOf(prefix, 0) !== 0; }); return this.attr("class", classes.join(" ")); }

/* ! (c) 2013, Brandon Aaron (http://brandon.aaron.sh) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a('body')),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


/* (c) 2013, Alexandr Borisov https://github.com/aishek/jquery-animateNumber */
(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);