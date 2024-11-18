<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <p>napis</p>
    <?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "dane3";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("nie dziala: " . $conn->connect_error);
    }
    
    $sql = "SELECT id, nazwa, opis, zdjecie FROM produkty WHERE id IN (18, 22, 23, 25);";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        echo "<table border=1px><tr><th><h4>ID</h4></th><th><h4>Nazwa</h4></th><th><h4>Opis</h4></th><th><h4>Zdjecie</h4></th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['id']}</td>
                    <td>{$row['nazwa']}</td>
                    <td><img src='filmy/{$row['zdjecie']}' width='100' alt='filmy'></td>
                    <td><p>{$row['opis']}</p></td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "Brak wyników";
    }

    echo "<br>";

    $sql = "SELECT id, nazwa, opis, zdjecie FROM produkty WHERE Rodzaje_id = 12;";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        echo "<table border=1px><tr><th><h4>ID</h4></th><th><h4>Nazwa</h4></th><th><h4>Opis</h4></th><th><h4>Zdjecie</h4></th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['id']}</td>
                    <td>{$row['nazwa']}</td>
                    <td><img src='filmy/{$row['zdjecie']}' width='100' alt='filmy'></td>
                    <td><p>{$row['opis']}</p></td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "Brak wyników";
    }

    ?>
    <p>napis2</p>
    <form action="index.php" method="POST">
        <input type="text" id="ID" name="ID"><br>
        <input type="submit" name="submit" value="send">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_POST['ID'])){
            $usuwanieZBazy = "DELETE FROM produkty WHERE id = {$_POST['ID']}";
            mysqli_query($conn,$usuwanieZBazy);
        }else{
            echo "Cos nie tak";
        }
    }
    $conn -> close()
    ?>
</body>
</html>
