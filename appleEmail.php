<?php
require_once('ses.php');

$email = $_GET["email"];
##$email = "ramya22222222222222222222222222222222222222222222@lark.com";
file_put_contents("/var/www/Apple/appleEmails.txt", $email."/", FILE_APPEND | LOCK_EX);

$ses = new SimpleEmailService('AKIAJOBQ2QAJ6C4LN73Q','oFpPuqKpJUnawfHb+ILlA9A2uVOt16lz6Cz02qQe');
	
$m = new SimpleEmailServiceMessage();
$m->addTo($email);
$m->addReplyTo("support@lark.com");
$m->setFrom('LARK <noreply@lark.com>');

$emailBody = "Hi there!<br><br>You're almost done. Just click the link, and you'll be on your way to a happier, healthier you.<br><br>https://itunes.apple.com/us/app/id912530754 <br><br>See you soon!<br><br>lark";
$subject = "Download lark on your phone";
			
$m->setSubject($subject);
$m->setMessageFromString(null, $emailBody);
$ses->sendEmail($m);	
?>
<script>location.href="http://lark.com/"</script>

