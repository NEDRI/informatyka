<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'wedkowanie';

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        die("baza padla: " . $conn->connect_errno);
    }

    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $adres = $_POST['adres'];

    $sql = "INSERT INTO karty_wedkarskie (imie, nazwisko, adres, data_zezwolenia, punkty) VALUES (?, ?, ?, NULL, NULL)";
    $stmt = $conn->prepare($sql);

    $stmt->bind_param("sss", $imie, $nazwisko, $adres);

    if ($stmt->execute()) {
        echo "udalo sie";
    } else {
        echo "problem z wykonaniem pytania: " . $stmt->error;
    }

    $conn->close();
}
?>
