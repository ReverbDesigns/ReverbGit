jQuery.noConflict()(function($){
	$(document).ready(function(){

		// Ajax submit
		$('#b-check-form').submit(function() {

			// Variables
			var
				$form				= $('#b-check-form'),
				$formBar			= $('#b-check-form .bar'),
				$formCheck			= $('#b-check-form .checking'),
				$formResponse		= $('#b-check-form #response'),
				$formSubmit			= $('#b-check-form #submit'),
				backOnTop = function() {
					$('html, body').animate({
						scrollTop: $formResponse.first().offset().top - ($(window).height()/2)
					}, 800);
				},
				i = 0;

			// Response from server
			function showResponse(data) {

				// JSON data
				var response = JSON.parse(data);

				// Clear all fields and properties
				$formResponse.removeClass().html('');
				$formCheck.removeClass('error-view');
				$formSubmit.attr('disabled', false);
				$formBar.css('display', 'none');

				// Scroll up
				backOnTop();

				// if field validation error occurs
				if (response.errorMessage) {

					// Error properties
					$formResponse.addClass('response-error-top');

					// Add error state and message from server
					$formCheck.each( function (){
						if (response.errorMessage[i] !== 'valid') {
							if ( $(this).hasClass('check') ) {
								$(this).addClass('error-view');
							};
							$formResponse.append(response.errorMessage[i]);
						};
						i++;
					});
				}

				// if token error occurs
				if (response.errorToken) {
					$formResponse.append(response.errorToken).addClass('response-error-top');
				}

				// if mail sending error occurs
				if (response.errorMail) {
					$formResponse.append(response.errorMail).addClass('response-error-top');
				}

				// if success
				if (response.successMessage) {

					// Reset form
					$form.resetForm();

					// Add success properties
					$formResponse.append(response.successMessage).addClass('response-success');

					// Buttons disabled
					$formSubmit.attr('disabled', true).text('Thanks !').addClass('complete');

					// Delete success message
					setTimeout(function(){
						$formResponse.removeClass('response-success').html('');
					}, 5000);
				}
			};

			// Options for Ajax submit
			var options = {
				error:function(xhr) {
					$formResponse.html('An error occured: ' + xhr.status + ' - ' + xhr.statusText);
				},
				beforeSubmit:function() {
					$formSubmit.attr('disabled', true);
					$formBar.css('display', 'block');
				},
				success:showResponse
			};

			$(this).ajaxSubmit(options);
			return false;
		});
	});
});