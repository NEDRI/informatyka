<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "tak";


try {
    $conn = new mysqli($host, $user, $pass, $db);
    
    if (!$conn) {
        echo"nie dziala";
    } else {
        echo "dziala";
    }
} catch (Exception) {
    echo "baza padla";
}
echo "<br>";

$sql = "SELECT  * FROM samochody ORDER BY PRZEBIEG;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>";
    echo "<tr><th>MARKA</th><th>TYP</th><th>KOLOR</th><th>PRZEBIEG</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["MARKA"] . "</td><td>" . $row["TYP"] . "</td><td>" . $row["KOLOR"] . "</td><td>".$row["PRZEBIEG"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "brak wyniku";
}

?>
