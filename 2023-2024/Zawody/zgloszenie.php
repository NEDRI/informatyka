<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "wedkarstwo";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$lowisko = $_POST['lowisko'];
$data = $_POST['data'];
$sedzia = $_POST['sedzia'];

$sql = "INSERT INTO zawody_wedkarskie (Karty_wedkarskie_id, Lowisko_id, data_zawodow, sedzia)
VALUES (0, '$lowisko', '$data', '$sedzia')";

if (mysqli_query($conn, $sql)) {
    echo "Nowy rekord został dodany pomyślnie";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>