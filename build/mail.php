<?php

$frm_name  = "Youname";
$recepient = " nb@mbastrategy.ru";
$sitename  = "Fastforward Company";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$company = trim($_POST["company"]);


$message = "
Имя: $name <br>
Телефон: $phone <br>
Email: $email <br>
Компания: $company
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
