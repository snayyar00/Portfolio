<?php

$user = "itisbpgk_user";
$password = "Qn8yJBaO7Nxo";
$host = "localhost";
$dbase = "itisbpgk_contact";
$table = "Contact";
/* Validate the form on the server side */
    $conn = new mysqli($host, $user, $password, $dbase);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{

$yourName = $conn->real_escape_string($_POST['name']);
$yourEmail = $conn->real_escape_string($_POST['email']);
$comments = $conn->real_escape_string($_POST['text']);
$sql="INSERT INTO Contact (name, email, text) VALUES ('$yourName', '$yourEmail', '$comments')";
}
if ($conn->query($sql) === TRUE) {
   
} else {
   
}

$conn->close();
// header( "refresh:5; url=index.html" )







?>
