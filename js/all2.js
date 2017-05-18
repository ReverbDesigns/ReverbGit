jQuery(function($) {

    $(window).load(function() {
        $('body').addClass('page-loaded');
    });

    //DEMO BUTTON
    $('.demobutton').on("click", function() {
        showDemoWindow();
    });

    //SHOW FUNC
    function showDemoWindow() {
        $('body, html').addClass('noscroll');
        $('.demowindow').removeClass('hidden');
        setTimeout(function() {
            $('.demowindow').addClass('animate-show');
            $('.user-email').focus();
        }, 50);
    }

    //HIDE FUNC
    function hideDemoWindow() {
        $('body, html').removeClass('noscroll');
        $('.demowindow').addClass('animate-hide');
        setTimeout(function() {
            $('.demowindow').addClass('hidden').removeClass('animate-show').removeClass('animate-hide');
        }, 500);
    }

    //HIDE ON CLICK OUT
    $(".demowindow").mouseup(function(e) {
        var container = $(".demowindow .invite-card");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            hideDemoWindow();
        }
    });

    $(window).on("keydown", function(e) {
        /* ESC */
        if (e.keyCode == 27) {
            hideDemoWindow();
        }
    });

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

    //SHOW DEMO ON #DEMO
    var hashOnLoad = window.location.hash.substring(1);
    if (hashOnLoad == "demo") {
        setTimeout(function() {
            showDemoWindow();
        }, 500);
    }


    //FOR CONTACTS PAGE ONLY
    if ($('#contact-form').length > 0) {
        var subject_value = $('#subject').val();

        //CUSTOM SELECT BOX
        $('.custom-select li').mouseup(function(e) {
            $('.custom-select').addClass('defined').removeClass('error-field')
            if ($('.custom-select').hasClass('reveal')) {
                $('.custom-select li.selected').removeClass('selected');

                var element = $(this).addClass('selected');
                $('.custom-select').removeClass('reveal');

                //scroll to selected element
                var selectPosition = $(element).position().top,
                        select_class = $(this).attr('class').split(' ')[0];
                $('.custom-select ul').attr('style', 'transform:translateY(-' + selectPosition + 'px); -webkit-transform:translateY(-' + selectPosition + 'px); -moz-transform:translateY(-' + selectPosition + 'px);-ms-transform:translateY(-' + selectPosition + 'px);-o-transform:translateY(-' + selectPosition + 'px)');

                if (select_class == 'other') {
                    $('#subject').attr('value', $(this).find('input').val());
                    $('.order_number_container').hide();
                } else {
                    $('#subject').attr('value', select_class);

                    if (select_class == 'technical-question' || select_class == 'submit-a-bug') {
                        $('.order_number_container').show();
                    } else {
                        $('.order_number_container').hide();
                    }
                }
            } else {
                $('.custom-select').addClass('reveal');
            }
        });

        //OTHER SUBJECT
        $('.custom-select .other input').on('keydown', function() {
            $('.custom-select').removeClass('reveal');
        }).focus(function() {
            $('.custom-select').addClass('focused');
        }).blur(function() {
            $('.custom-select').removeClass('focused');
        });

        $('.custom-select .other input').on('keyup', function() {
            $('.custom-select').removeClass('reveal');
            $('#subject').attr('value', $(this).val());
        });

        //HUMAN APPROACH
        $('.error-field').live('keydown', function() {
            $(this).removeClass('error-field');
        });

        //HIDE ON FOCUS OUT
        $(document).mouseup(function(e) {
            var container = $(".custom-select li");
            if ($(".custom-select.reveal li.selected").length > 0 && (!container.is(e.target)) && container.has(e.target).length === 0) {
                $('.custom-select').removeClass('reveal');
            }
        });

        //AUTOSELECT .custom-select > li AND SHOW ORDER_NUMBER IF NECESSARY
        if (subject_value && $('.custom-select li.' + subject_value).length > 0) {
            $('.custom-select li.' + subject_value).mouseup();
            if (subject_value == 'technical-question') {
                $('.order_number_container').show();
            }
        } else if (subject_value && $('.custom-select li.' + subject_value).length == 0) {
            $('.custom-select li.other input').val(subject_value);
            $('.custom-select li.other').mouseup();
        }

        //SEND DATA
        $('#contact-form').ajaxForm({
            type: 'post',
            url: '/wp-admin/admin-ajax.php',
            dataType: 'json',
            beforeSubmit: function() {

                var isValdid = true;

                //CHECK SUBJECT
                if ((!$('.custom-select .selected').length > 0)) {
                    $('.custom-select').addClass('error-field');
                    isValdid = false;
                }

                //CHECK SUBJECT OTHER
                if (($('.custom-select .selected.other').length > 0) && (!$.trim($('.custom-select .selected.other input').attr('value')))) {
                    $('.custom-select').addClass('error-field');
                    isValdid = false;
                }

                //CHECK ORDER NUMBER
                if (($('#subject').val() == 'technical-question' || $('#subject').val() == 'submit-a-bug') && !$.trim($('.order_number_container input').val())) {
                    $('.order_number_container input').addClass('error-field');
                    isValdid = false;
                }

                //CHECK OTHER FIELDS
                isValdid = $('#contact-form').valid();

                //SHOW LOADING
                if (isValdid == true) {
                    $('#contact-form').addClass('loading');
                }

                return isValdid;
            },
            success: function(data) {
                if (data.success == 1) {
                    $('.form_msg').hide();
                    $('#contact-form').removeClass('loading').addClass('done');
                    $('#submit').attr("disabled", "disabled").find('span').text('Done!');
                    $('#contact-form').ajaxFormUnbind();
                } else {
                    $('#contact-form').removeClass('loading');
                    $('.form_msg').html(data.output);
                }

            }
        });

        //VALIDATE DATA
        $('#contact-form').validate({
            onkeyup: false,
            onfocusout: false,
            errorClass: "error-field",
            rules: {
                name: "required",
                comments: "required",
                subject: "required",
                email: {
                    required: true,
                    validEmail: true
                }
            },
            messages: {name: "", comments: "", email: ""}
        });

        //VALIDATE EMAIL CORRECTLY
        $.validator.addMethod("validEmail", function(value, element) {
            if (value == '')
                return true;
            var temp1;
            temp1 = true;
            var ind = value.indexOf('@');
            var str2 = value.substr(ind + 1);
            var str3 = str2.substr(0, str2.indexOf('.'));
            if (str3.lastIndexOf('-') == (str3.length - 1) || (str3.indexOf('-') != str3.lastIndexOf('-')))
                return false;
            var str1 = value.substr(0, ind);
            if ((str1.lastIndexOf('_') == (str1.length - 1)) || (str1.lastIndexOf('.') == (str1.length - 1)) || (str1.lastIndexOf('-') == (str1.length - 1)))
                return false;
            str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
            temp1 = str.test(value);
            return temp1;
        }, "Please enter valid email.");

    } //END OF CONTACTS PAGE ONLY
	 
	 if ( $('.updates').length > 0) {
		 
		$('dt').each(function(index, element) {
			if ($(this).hasClass('f')){
				$(this).text("F");
			} else if ($(this).hasClass('e')){
				$(this).text("E");
			} else if ($(this).hasClass('n')){
				$(this).text("N");
			} else if ($(this).hasClass('r')){
				$(this).text("R");
			}
		});

		$('li').hover(function(){
			if ($(this).children('dt').hasClass('f')){

				$('dt:not(.f)').parent().addClass('fade');

			} else if ($(this).children('dt').hasClass('e')){

				$('dt:not(.e)').parent().addClass('fade');

			} else if ($(this).children('dt').hasClass('n')){

				$('dt:not(.n)').parent().addClass('fade');

			} else if ($(this).children('dt').hasClass('r')){

				$('dt:not(.r)').parent().addClass('fade');

			}
		},function(){
			$('.fade').removeClass('fade');
			$('.pop').removeClass('pop');
		});
	 }
});