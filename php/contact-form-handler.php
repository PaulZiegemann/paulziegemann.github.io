<?php
if (isset($_POST['submit'])) {
 $name = $POST['name'];
 $visitor_email = $_POST['email'];
 $subject_email = $_POST['subject'];
 $message = $_POST['message'];

 $email_body = "User Name: $name.\n" .
  "User Email: $visitor_email.\n" .
  "User Message: $message.\n";

 $to = "ziegeman@hm.edu";
 $headers = "From: " . $visitor_email;
 $txt = "You have received an e-mail from " . $name . ".\n\n" . $message;

 mail($to, $subject_email, $txt, $headers);
 header("Location: index.php?mailsend");
}
