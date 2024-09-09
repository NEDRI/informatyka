<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "dlaphp";


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

$sql = "INSERT INTO uzytkownik VALUES (3,'tak', 'Malysz', 23); ";
#$sql = "SELECT * FROM `uzytkownik`; ";
echo mysqli_query($conn,$sql);


?>
