<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $password = $_POST['password'];
    $check = isset($_POST['checkbox']);
    $komentarz = $_POST["komentarz"];

    echo "<p>Login: $login</p>";

    $hashedPassword = sha1($password);
    echo "<p>Hasło (hashed): $hashedPassword</p>";

    if ($check) {
        echo "<p>Checkbox: tak</p>";
    } else {
        echo "<p>Checkbox: nie</p>";
    }
    
    echo "<p>Komentarz:</p>";
    echo "<p><strong> $komentarz </strong></p>";

    echo "<p>Komentarz:</p>";
    echo "<p>" . htmlspecialchars($komentarz) . "</p>";
} else {
    echo "<p>nie działa</p>";
}
    $pytanie1 = isset($_POST['pytanie1']) ? $_POST['pytanie1'] : 'nie ma';
    echo "<p>pytanie 1 " . htmlspecialchars($pytanie1) . "</p>";

    $pytanie2 = isset($_POST['pytanie2']) ? $_POST['pytanie2'] : 'nie ma';
    echo "<p>pytanie 2 " . htmlspecialchars($pytanie2) . "</p>";

    $pytanie3 = isset($_POST['pytanie3']) ? $_POST['pytanie3'] : 'nie ma';
    echo "<p>pytanie 3 " . htmlspecialchars($pytanie3) . "</p>";

    


?>