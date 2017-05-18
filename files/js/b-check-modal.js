jQuery.noConflict()(function($){
	$(document).ready(function(){

		// Demo modal forms
		$('.modal-link .link').on('click', function() {

			// Set background
			if( !$('.modal-fill').length ) {
				$('body').append('<div class="modal-fill"></div>');
			}

			// Show modal form and background
			$modalForm = $($(this).attr('href'));
			$('.modal-fill').fadeIn();
			$modalForm.css('display', 'block').css('top', '50%').css('left', '50%').css('margin-top', -$modalForm.outerHeight()/2)
				.css('margin-left', -$modalForm.outerWidth()/2).fadeIn();

			// Hide background and form using click
			$('.modal-fill').on('click', function() {
				$('.modal-fill').fadeOut();
				$('.modal-form').fadeOut();
			});
			return false;
		});

		// Demo for enabled button
		$('#check-terms').on('change', function() {
			if ($('#check-terms').is(':checked')) {
				$('#reg-button').attr('disabled', false).removeClass('disable-view');
			} else {
				$('#reg-button').attr('disabled', true).addClass('disable-view');
			};
		});
	});
});