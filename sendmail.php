<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Bitte füllen Sie alle erforderlichen Felder korrekt aus.";
        exit;
    }

    $recipient = "kontakt@kulagin-vermietung.de"; // Empfänger-Adresse ändern
    $subject = "Neue Nachricht von $name";
    $email_content = "Name: $name\n";
    $email_content .= "E-Mail: $email\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Nachricht:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Danke! Ihre Nachricht wurde gesendet.";
    } else {
        http_response_code(500);
        echo "Fehler beim Versenden der Nachricht.";
    }
} else {
    http_response_code(403);
    echo "Direkter Zugriff nicht erlaubt.";
}
?>