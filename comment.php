<?php
  $recepient = "sergey.denisyuk@gmail.com";
  $sitename = "Название сайта";

  $email = trim($_GET["email"]);
  $name = trim($_GET["name"]);
  $title = trim($_GET["title"]);
  $message = trim($_GET["message"]);


  if ($name!='' and $email!='' and $message!='') {
      $message = "$email, $name, $title, $message";
      $res = mail($recepient, 'Subject', $message);
      if ($res) {
          echo 1;
      } else {
          echo 0;
      }
  }
  else {
      echo 0;
  }

  ?>