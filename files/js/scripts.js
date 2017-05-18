(function($){ "use strict";

$(document).ready(function(){



/* -----------------------------------------------------------------------------



	1.) GENERAL



----------------------------------------------------------------------------- */



	/* -------------------------------------------------------------------------

		AJAX FORMS

	------------------------------------------------------------------------- */



	if ( $.fn.lvAjaxForm ) {

		$( 'form.m-ajax-form' ).each(function(){

			$(this).lvAjaxForm();

		});

	}



	/* -------------------------------------------------------------------------

		AJAX MODALS

	------------------------------------------------------------------------- */



	if ( $.fn.lvOpenAjaxModal ) {

		$( 'a.m-open-ajax-modal' ).each(function(){

			$(this).lvOpenAjaxModal();

		});

	}



	/* -------------------------------------------------------------------------

		FLUID VIDEOS

	------------------------------------------------------------------------- */



	$( 'body' ).lvFluidEmbedVideo();



	/* -------------------------------------------------------------------------

		FORMS

	------------------------------------------------------------------------- */



	// DATEPICKER INPUTS

	if ( $.fn.lvDatepickerInput ) {

		$( '.datepicker-input' ).each(function(){

			$(this).lvDatepickerInput();

		});

		$( document ).on( 'modalOpened', function(){

			$( '.c-modal' ).find( '.datepicker-input' ).each(function(){

				$(this).lvDatepickerInput();

			});

		});

	}



	// CHECKBOX INPUTS

	if ( $.fn.lvCheckboxInput ) {

		$( '.checkbox-input' ).each(function(){

			$(this).lvCheckboxInput();

		});

		$( document ).on( 'modalOpened', function(){

			$( '.c-modal' ).find( '.checkbox-input' ).each(function(){

				$(this).lvCheckboxInput();

			});

		});

	}



	// QUANTITY INPUTS

	if ( $.fn.lvQuantityInput ) {

		$( '.quantity-input' ).each(function(){

			$(this).lvQuantityInput();

		});

		$( document ).on( 'modalOpened', function(){

			$( '.c-modal' ).find( '.quantity-input' ).each(function(){

				$(this).lvQuantityInput();

			});

		});

	}



	// SELECTBOX INPUTS

	if ( $.fn.lvSelectboxInput ) {

		$( '.selectbox-input' ).each(function(){

			$(this).lvSelectboxInput();

		});

		$( document ).on( 'modalOpened', function(){

			$( '.c-modal' ).find( '.selectbox-input' ).each(function(){

				$(this).lvSelectboxInput();

			});

		});

	}



	// VALIDATE FORMS

	if ( $.fn.lvIsFormValid ) {

		$( 'form.m-validate' ).each(function(){

			var $this = $(this);

			$this.submit(function(){

				if ( ! $this.lvIsFormValid() ) {

					$this.find( '.m-validation-error' ).slideDown( 300 );

					return false;

				}

			});

		});

		$( document ).on( 'modalOpened', function(){

			$( '.c-modal' ).find( 'form.m-validate' ).each(function(){

				var $this = $(this);

				$this.submit(function(){

					if ( ! $this.lvIsFormValid() ) {

						$this.find( '.m-validation-error' ).slideDown( 300 );

						return false;

					}

				});

			});

		});

	}



	/* -------------------------------------------------------------------------

		INPUT PLACEHOLDERS

	------------------------------------------------------------------------- */



	$( '*[data-placeholder]' ).each(function(){



		var $this = $(this),

		placeholder = $this.data( 'placeholder' );



		// RESET

		if ( $this.val() === '' ) {

			$this.val( placeholder );

		}

		// FOCUS

		$this.focus(function(){

			if ( $this.val() === placeholder ) {

				$this.val( '' );

			}

		});

		// BLUR

		$this.blur(function(){

			if ( $this.val() === '' ) {

				$this.val( placeholder );

			}

		});



	});



	/* -------------------------------------------------------------------------

		LIGHTBOXES

	------------------------------------------------------------------------- */



	if ( $.fn.lvInitLightboxes ) {

		$( 'body' ).lvInitLightboxes();

	}



	/* -------------------------------------------------------------------------

		LOAD HIRES IMAGES FOR HiDPI SCREENS

	------------------------------------------------------------------------- */



	if ( $.fn.lvLoadHiresImages ) {

		$( 'body' ).lvLoadHiresImages();

	}



	/* -------------------------------------------------------------------------

		MEDIA QUERY BREAKPOINT

	------------------------------------------------------------------------- */



	var mediaQueryBreakpoint;

	if ( $.fn.lvGetMediaQueryBreakpoint ) {

		mediaQueryBreakpoint = $.fn.lvGetMediaQueryBreakpoint();

		$( document ).on( 'screenTransition', function(){

			mediaQueryBreakpoint = $.fn.lvGetMediaQueryBreakpoint();

		});

	}

	else {

		mediaQueryBreakpoint = $(window).width();

	}




	
		if( jQuery('#contact-formular').length > 0 ){
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
				$('#message').hide();
				$('#submit').attr('disabled','disabled');		
				$.post(action, {
					name: $('#name').val(),
					email: $('#email').val(),
					phone: $('#phone').val(),
					comments: $('#comments').val()
				},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#contactform').slideUp('slow');
					});