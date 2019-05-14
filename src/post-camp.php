<?php

  $msg = "";

  require "mailer/PHPMailerAutoload.php";

  $body = json_decode(file_get_contents('php://input'), true);
  
  function sendEmail($mailName, $mailPhone, $mailTheme) {
    $mail = new PHPMailer(true);

    //Server settings
    $mail->Host = "smtp.yandex.ru";
    $mail->isSMTP(); 
    $mail->SMTPAuth = true;
    $mail->Username = 'tech@kort12.ru';
    $mail->Password = 'To98YnT61!';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('tech@kort12.ru', 'Академия Тенниса KORT 12');
    $mail->addAddress('mail@kort12.ru', 'Академия Тенниса KORT 12');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Заявка на консультацию (' . $mailTheme . ') - от ' . $mailName;
    $mail->Body    = "<h2>" . $mailTheme ."</h2>
    <h4>Имя</h4><p>".$mailName."</p>
    <h4>Номер телефона</h4><p>".$mailPhone."</p>
        ";

    return $mail->send();
  }
  $name = $body['name'];
  $phone = $body['phone'];
  $theme = $body['theme'];
  if(!empty($name) && !empty($phone)) {
    sendEmail($name, $phone, $theme);
  } else {
    $msg = "Заполните все поля!";
    $msgClass = "alert-danger";
  }
?>