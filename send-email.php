<?php
  // Set your email address
  $to = "ojehonmonisrael008@gmail.com";

  // Set the subject of the email
  $subject = "Contact Form Submission";

  // Get the form data
  $name = $_POST["name"];
  $surname = $_POST["surname"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Create the email body
  $body = "Name: $name\nSurname: $surname\nEmail: $email\nMessage: $message";

  // Send the email
  mail($to, $subject, $body);

  // Redirect the user to a thank you page
  header("Location: thank-you.html");
  exit;
?>