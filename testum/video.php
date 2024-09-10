<?php

$host ="localhost";
$user ="root";
$pass ="";
$dbname = "dane3";

try {
    $conn = new mysqli($host, $user, $pass, $dbname);
    
    if (!$conn) {
        echo"nie dziala";
    } else {
        echo "dziala";
    }
} catch (aa) {
    echo "baza padla";
}

$sql = "SELECT id, nazwa, opis, zdjecie FROM `produkty` WHERE id in (18, 22, 23, 25);";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"] . " </td><td>" . $row["nazwa"] . "</td><td>" . $row["opis"] . " </td><td><img src='".$row["zdjecie"]."'></td></tr>";
    }
    echo "</table>";
} else {
    echo "nie dziala tabela";
}

?>
<p>tak</p>