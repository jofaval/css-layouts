<?php

$name = "";
if (isset($_REQUEST["name"])) {
    $name = $_REQUEST["name"];
}

$phone = "";
if (isset($_REQUEST["phone"])) {
    $phone = $_REQUEST["phone"];
}

$email = "";
if (isset($_REQUEST["email"])) {
    $email = $_REQUEST["email"];
}

$message = "";
if (isset($_REQUEST["message"])) {
    $message = $_REQUEST["message"];
}

?>