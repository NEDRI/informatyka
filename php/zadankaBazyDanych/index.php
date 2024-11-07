<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "dziennik";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

echo "zadanie 1 <br>";

$sql =
    "SELECT imie, nazwisko FROM `uczen` INNER JOIN klasa on klasa.id = uczen.id_klasa WHERE klasa.numer = 3 ORDER by nazwisko; ";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    echo "<ol>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>{$row["imie"]} {$row["nazwisko"]}</li>";
    }
    echo "</ol>";
} else {
    echo "Brak wyników";
}
echo "<br>";
/*
echo "zadanie 2";

$sql = "SELECT imie, nazwisko, data_urodzenia FROM `nauczyciel` ORDER BY data_urodzenia DESC;";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0){
    echo "<table><tr><th>Imie</th><th>Nazwisko</th><th>Data urodzenia</th>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>{$row['imie']}</td><td>{$row['nazwisko']}</td><td>{$row['data_urodzenia']}</td>";
    }
    echo "</tabela";
}
*/

echo "<br> zadanie 3 <br>";

$queryNunLudzi = "SELECT COUNT(*) FROM (
    SELECT imie FROM uczen WHERE imie LIke '%a'
    UNION
    SELECT imie FROM nauczyciel WHERE imie LIke '%a'
    ) as liczba;";
$stmtLudzie = $conn->query($queryNunLudzi);

if ($stmtLudzie && $stmtLudzie->num_rows > 0) {
    while ($row = $stmtLudzie->fetch_assoc()) {
        echo "{$row["COUNT(*)"]}";
    }
} else {
    echo "Brak wyników";
}

echo "<br> zadanie 4 <br>";

$queryDodanieOceny = "UPDATE ocena SET ocena = ocena + 1";
echo mysqli_query($conn, $queryDodanieOceny);

echo "<br> zadanie 5 <br>";
$queryUsuwanieNauczyciela =
    "DELETE FROM nauczyciel WHERE data_urodzenia <= '1950-00-00';";
echo mysqli_query($conn, $queryUsuwanieNauczyciela);

$conn->close();
?>
