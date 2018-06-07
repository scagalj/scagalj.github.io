<?php 
if(isset($_POST['submit'])){
    $to = "stjepan_12@hotmail.com";
    $from = $_POST['mail']; 
    $name = $_POST['name'];
	$date = $_POST['date'];
	$time = $_POST['time'];
	$size = $_POST['psize'];
	$phone = $_POST['phone'];
	$note = $_POST['message'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . "Date: " . $date . " Time: " . $time . "\n" . "Number of people: " . $size . "\nContact: " . $phone . "\n Note: " . $note;
    $message2 = "Here is a copy of your message " . $name . " wrote the following:" . "\n\n" . "Date: " . $date . " Time: " . $time . "\n" . "Number of people: " . $size . "\nContact: " . $phone . "\n Note: " . $note;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>