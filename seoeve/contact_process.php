<?php

    $to = "nasir.rubel99@gmail.com";
    $from = $_REQUEST['contact_email'];
    $name = $_REQUEST['contact_name'];
    $headers = "From: $from";
    $subject = "You have a message from your Estate Pro.";

    $fields = array();
    $fields{"name"} = "contact_name";
    $fields{"email"} = "contact_email";
    $fields{"url"} = "contact_url";
    $fields{"phone"} = "contact_phone";
    $fields{"Monthly Budget"} = "monthly_badget";
    $fields{"How know about SEOWAVE"} = "learn_seowave";
    $fields{"Interested In"} = "interested_in";
    $fields{"Additional Information"} = "addInfos";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
