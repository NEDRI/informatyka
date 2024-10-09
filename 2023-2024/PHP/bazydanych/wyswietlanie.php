<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "tak";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

$sql = "SELECT MARKA, TYP, KOLOR, PRZEBIEG FROM samochody ORDER BY PRZEBIEG";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    echo "<table><tr><th>MARKA</th><th>TYP</th><th>KOLOR</th><th>PRZEBIEG</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>{$row['MARKA']}</td><td>{$row['TYP']}</td><td>{$row['KOLOR']}</td><td>{$row['PRZEBIEG']}</td></tr>";
    }
    echo "</table>";
} else {
    echo "Brak wyników";
}




$konn = new mysqli($host, $user,$pass,$db);
if($konn->connect_error){
    die($konn->connect_errno);
};

$psql = "SELECT MARKA, TYP, KOLOR, PRZEBIEG FROM samochody ORDER BY PRZEBIEG";
$wynik = $konn->query($psql);

if($wynik && $wynik->num_rows>0){
    echo"<table><tr><th>Te zeczy</th></tr>";
    while ($te = $wynik->fetch_assoc()) {
        echo"<th><tr>{$te['cos']}</tr></th>";
    }
}






















$conn->close();
?>;
