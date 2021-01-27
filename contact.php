<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];

$email_from = $visitor_email;

$email_subject = "New Form Submission";

$email_body = "User Name: $firstname $lastname.\n" .
    "User Email: $visitor_email.\n" .
    "User Number: $phone.\n" .
    "User Message: $message.\n";

$to = "adesuyiomowunmi@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");
