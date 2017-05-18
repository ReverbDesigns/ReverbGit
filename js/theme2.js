/*
 Agency: Reverb Designs
 Author: Jordan Bell, Reverb Designs
 Author URI: https://facebook.com/jordy.bell
 Description: Reverb Designs Creative Agency
 Version: 1.3
 */
(function ($) {
    'use strict';
    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($(".loaderArea").length > 0)
        {
            $(".loaderArea").delay(500).fadeOut("slow");
        }
    });
    //========================
    // Home Slider
    //========================
    if ($("#homeSlider").length > 0) {
        var sudoSlider = $("#homeSlider").sudoSlider({
            responsive: true,
            auto: true,
            touch: true,
            continuous: true,
            resumePause: 2000,
            customLink: '.customLink',
            prevNext: false
        });
    }
    //========================
    // Pretty Photo
    //========================
    if ($("a[data-rel^='prettyPhoto']").length > 0) {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    }
    //=======================================================
    // Gallery Mixing
    //=======================================================
    if ($('#mixIt').length > 0)
    {
        $('#mixIt').themeWar();
        $('.mixiBtn li a').click(function (e) {
            e.preventDefault();
        });
    }
/*-----------------------------------------------------------------------------------*/
	/*	06. INSTAGRAM
	/*-----------------------------------------------------------------------------------*/

	$('.instagram').on('didLoadInstagram', function(event, response) {
		var instagram = {};
		var $url = 'https://api.instagram.com/v1/users/self/?access_token=' + window.accessToken;

		$.ajax({
			method : "GET",
			url : $url,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(dataSuccess) {
				instagram.authorPhoto = dataSuccess.data.profile_picture;
				instagram.followers = dataSuccess.data.counts.followed_by;
				instagram.photos = dataSuccess.data.counts.media;
				instagram.username = dataSuccess.data.username;
				instagram.full_name = dataSuccess.data.full_name;

				var data = response.data;
				var tagNames = [];
				var tagNums = [];
				var tags = [];
				instagram.target = event.currentTarget.id;
				instagram.likes = 0;

				for(var i=0; i<data.length; i++) {
					instagram.likes += data[i].likes.count;

					/* Get tag names and how many are there */
					for(var j=0; j<data[i].tags.length; j++) {
						if(tagNames.indexOf(data[i].tags[j]) === -1) {
							tagNames.push(data[i].tags[j]);
							tagNums.push(1);
						} else {
							tagNums[tagNames.indexOf(data[i].tags[j])]++;
						}
					}
				};

				/* Sort tags array */
				for (var i = 0; i < tagNames.length; i++) { tags.push({ 'name': tagNames[i], 'value': tagNums[i] }); }
				tags.sort(function(a, b) { return b.value - a.value; });

				/* Add instagram photos */

				for(var i=0; i<12; i++) {
					if( i === data.length ) {
						break;
					}
					$("#" + instagram.target + ' .instagram-images').append('<li style="background-image: url(' + data[i].images.low_resolution.url + ')"></li>');
				}

				/* Add Instagram User Information */
				$("#" + instagram.target + ' .instagram-author-photo').append('<img src="' + instagram.authorPhoto + '" alt="' + instagram.full_name + '" />');
				for(var i=0; i<4; i++) {
					if( i === tags.length ) {
						break;
					}
					$("#" + instagram.target + ' .instagram-tags').append('<a href="http://www.enjoygram.com/tag/' + tags[i].name + '" target="_blank">#' + tags[i].name + '</a> ');
				}
				$("#" + instagram.target + ' .instagram-author-tag').append('<a href="http://instagram.com/' + instagram.username + '" target="_blank">#' + instagram.username + '</a>');
				$("#" + instagram.target + ' .num-photos span').html(instagram.photos);
				$("#" + instagram.target + ' .num-followers span').html(instagram.followers);
				$("#" + instagram.target + ' .num-likes span').html(instagram.likes);
				$("#" + instagram.target + ' .instagram-follow').attr('href', 'http://instagram.com/' + instagram.username);
			}
		});
	});
    //=======================================================
    // Pie Chart
    //=======================================================
    if ($('.chartContent').length > 0) {
        $('.chartContent').appear(function () {
            $('.chartBar').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#61e4b7',
                trackColor: '#6572d1',
                size: 300,
                lineWidth: 12,
                lineCap: 'square',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.chartNumber').text(Math.round(percent * 4.03));
                }
            });
        });
        $('.newChart').appear(function () {
            $('.chartBarClient').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#6572d1',
                trackColor: '#ffffff',
                size: 300,
                lineWidth: 12,
                lineCap: 'square',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.chartNumber').text(Math.round(percent * 2.54));
                }
            });
            $('.photoChart').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#6572d1',
                trackColor: '#e7e7e7',
                size: 300,
                lineWidth: 12,
                lineCap: 'square',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.chartNumber').text(Math.round(percent));
                }
            });

        });
    }
    //=======================================================
    // Subscribe Counter
    //=======================================================
    if ($('.subscribeArea').length > 0)
    {
        $('.subscribeArea').appear(function () {
            $('.subCount').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span>' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
        });
    }
    //=======================================================
    // Contact Map
    //=======================================================
    if ($("#map").length > 0)
    {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 37.4892372,
            lng: -122.2439311,
            scrollwheel: false,
            zoom: 13,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = '';
        map.addMarker({
            lat: 37.4892372,
            lng: -122.2439311,
            icon: 'images/marker.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'center',
            horizontalAlign: 'center'
        });
    }
    //========================
    // One page menu
    //========================
    $(window).on('scroll', function () {
        if ($(window).width() > 991)
        {
            if ($(window).scrollTop() > 550)
            {
                $(".mainMenu").addClass('headerFix').fadeIn('slow');
            }
            else
            {
                $(".mainMenu").removeClass('headerFix').fadeOut('slow');
            }
        }
        else
        {
            if ($(window).scrollTop() > 50)
            {
                $("#header").addClass('fixHeader');
            }
            else
            {
                $("#header").removeClass('fixHeader');
            }
        }
        Scroll();

    });

    $(".menuBtn").on('click', function (e) {
        e.preventDefault();
        $(".mainMenu").slideToggle(500);
        $(this).toggleClass('active');
    });

    $('.menus li.scroll a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 65}, 1000);
        return false;
    });

    $('.downArrow').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 65}, 1000);
        return false;
    });

    // User define function
    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 75;

        $('.menus').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function (i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.menus li.scroll')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }
    //========================
    // Mobile Menu
    //========================
    if ($(window).width() < 991) {
        $(".hasChild > a").on('click', function (e) {
            e.preventDefault();
            $(".dropDown").slideToggle(500);
            $(this).parent().toggleClass('active');
        });
    }

    //========================
    // Back To Top
    //========================
    $("body, html").on("click", "#backTo", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 490)
    {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
    //========================
    // Background Video
    //========================
    if ($(".videoBgArea").length > 0)
    {
        $("#videoPlayer").YTPlayer({
            quality: 'highres'
        });
        $(".playBtn").on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('alreadyPlay'))
            {
                $(this).removeClass('alreadyPlay').html('<i class="fa fa-play"></i>');
                $('#videoPlayer').YTPPause();
            }
            else
            {
                $(this).addClass('alreadyPlay').html('<i class="fa fa-pause"></i>');
                $('#videoPlayer').YTPPlay();
            }
        });
    }
    if ($(".bigDreamArea").length > 0)
    {
        $("#bigDream").YTPlayer({
            quality: 'highres'
        });
        $(".dreamBtn").on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('alreadyPlay'))
            {
                $(this).removeClass('alreadyPlay').html('<i class="ion-ios-play"></i><span>Watch</span>');
                $('#bigDream').YTPPause();
            }
            else
            {
                $(this).addClass('alreadyPlay').html('<i class="ion-ios-pause"></i><span>Pause</span>');
                $('#bigDream').YTPPlay();
            }
            $(".bigDreamArea").toggleClass("videoPlaying");
        });
    }
    if ($(".socialShare").length > 0) {
        $(".socialShare").jsSocials({
            showLabel: true,
            showCount: false,
            shares: ["facebook", "twitter", "googleplus", "linkedin", "pinterest"]
        });
    }
    //========================================================
    // Subscribe Form
    //========================================================
    if ($("#subscribeForm").length > 0)
    {
        $("#subscribeForm").submit(function (e) {
            e.preventDefault();
            $("#subSubmit", this).val("Submitting..");
            var email = $("#subEmail").val();
            if (email !== '')
            {
                $("#subEmail").removeClass('errorInput');
                $.ajax({
                    type: "POST",
                    url: 'subscribe.php',
                    data: {email: email},
                    success: function (data)
                    {
                        $("#subEmail").val('');
                        $("#subEmail").attr('placeholder', 'Successfully Done!');
                        $("#subSubmit").val("Subscribe");

                    }
                });
            }
            else
            {
                $("#subEmail").addClass('errorInput');
                $("#subSubmit", this).val("Subscribe");
            }
            return false;
        });

    }
    //========================================================
    // Footer Subscribe
    //========================================================
    if ($(".footerSubScribe").length > 0)
    {
        $(".footerSubScribe").submit(function (e) {
            e.preventDefault();
            $("#footSubmit i", this).removeClass('ion-ios-arrow-thin-right').addClass('fa fa-spinner fa-spin');
            var email = $("#footEmail").val();
            if (email !== '')
            {
                $("#footEmail").removeClass('errorInput');
                $.ajax({
                    type: "POST",
                    url: 'subscribe.php',
                    data: {email: email},
                    success: function (data)
                    {
                        $("#footEmail").val('');
                        $("#footEmail").attr('placeholder', 'Successfully Done!');
                        $("#footSubmit i").removeClass('fa fa-spinner fa-spin').addClass('ion-ios-arrow-thin-right');
                    }
                });
            }
            else
            {
                $("#footEmail").addClass('errorInput');
                $("#footSubmit i", this).removeClass('fa fa-spinner fa-spin').addClass('ion-ios-arrow-thin-right');
            }
            return false;
        });
    }
    //========================================================
    // Contact
    //========================================================
    if ($(".contactForm").length > 0)
    {
        $(".contactForm").on('submit', function (e) {
            e.preventDefault();
            var allData = $(this).serialize();
            var required = 0;
            $("#conSubmit").val('Sending...');
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('errorInput');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('errorInput'))
                    {
                        $(this).removeClass('errorInput');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            //alert(required);
            if (required === 0)
            {
                $("#conSubmit").val('Sending...');
                $.ajax({
                    type: "POST",
                    url: 'contact_mail.php',
                    data: {allData: allData},
                    success: function (data)
                    {
                        $(".contactForm input[type='text'], .contactForm input[type='email'], .contactForm textarea").val('');
                        $("#conSubmit").val('Done!');
                    }
                });
            }
            else
            {
                $("#conSubmit").val('Submit');
            }
        });
    }

})(jQuery);
