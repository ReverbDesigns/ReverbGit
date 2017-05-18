<?php
	
	require dirname(__FILE__)."/php/csrf.php";
	$new_token = new CSRF('contact');

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Contact form</title>

	<!-- Your META here -->
	<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0" name="viewport">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/b-check-demo.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/b-check-style.css">
	<link rel="stylesheet" href="css/colors/blue.css">
	
	<!-- Scripts -->
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/jquery-form.min.js"></script>
	<script src="js/b-check-form-field.js"></script>

	<!--[if lt IE 10]>
			<script src="js/jquery.placeholder.min.js"></script>
		<![endif]-->

</head>
<body class="blue">
	<div class="b-check wrapper-narrow">
		<div class="b-row">
			<header>Contact form</header>
		</div>

		<div class="hr"></div>

		<form action="php/action.php" id="b-check-form" name="b-check-form" method="post" novalidate>

			<!-- start response from server -->
			<div class="b-row">
				<div id="response"></div>
			</div>
			<!-- end response from server -->

			<!-- start token -->
			<div class="b-row">
				<?php echo $new_token->get_token(); ?>
			</div>
			<!-- end token -->

			<!-- start name -->
			<div class="b-row">
				<div class="span12">
					<label class="label">Your name</label>
					<div class="field checking check">
						<i class="fa fa-user icon-right"></i>
						<input type="text" name="name" placeholder="e.g. John Doe">
					</div>
				</div>
			</div>
			<!-- end name -->

			<!-- start email -->
			<div class="b-row">
				<div class="span12">
					<label class="label">Your email</label>
					<div class="field checking check">
						<i class="fa fa-envelope-o icon-right"></i>
						<input type="email" name="email" placeholder="my_email@domain.com">
					</div>
				</div>
			</div>
			<!-- end email -->

			<!-- start phone-->
			<div class="b-row">
				<div class="span12">
					<label class="label">Your phone</label>
					<div class="field checking check">
						<i class="fa fa-phone icon-right"></i>
						<input type="text" name="phone" placeholder="telephone or mobile">
					</div>
				</div>
			</div>
			<!-- end phone-->

			<!-- start message -->
			<div class="b-row">
				<div class="span12">
					<label class="label">Message/Comment</label>
					<div class="field checking check">
						<i class="fa fa-comments-o icon-right"></i>
						<textarea name="message" placeholder="your message or comment" spellcheck="false"></textarea>
					</div>
				</div>
			</div>
			<!-- end message -->

			<!-- start sign up -->
			<div class="b-row">
				<div class="span12">
					<div class="field checkbox">
						<input id="check" type="checkbox" name="newsletter" value="sign me up">
						<label for="check">Sign me to the newsletter</label>
					</div>
				</div>
			</div>
			<!-- end sign up -->

			<!-- start progress bar -->
			<div class="b-row">
				<span class="bar"></span>
			</div>
			<!-- end progress bar -->

			<div class="hr"></div>

			<!-- start buttons -->
			<div class="b-row">
				<div class="offset8 span4">
					<button type="submit" class="button" id="submit">Send</button>
				</div>
			</div>
			<!-- end buttons -->
		</form>
	</div>
</body>
</html>