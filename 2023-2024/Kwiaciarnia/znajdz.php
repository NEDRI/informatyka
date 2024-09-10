<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Znajdź kwiaciarnię</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <header>
        <h1>Internetowa kwiaciarnia</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Strona główna</a></li>
            <li><a href="znajdz.php">Znajdź kwiaciarnię</a></li>
        </ul>
    </nav>
    <section id="left">
        <h2>Menu</h2>
        <ul>
            <li><a href="index.html">Strona główna</a></li>
            <li><a href="znajdz.php">Znajdź kwiaciarnię</a></li>
        </ul>
    </section>
    <section id="right">
        <h2>Znajdź kwiaciarnię</h2>
        <form method="POST" action="znajdz.php">
            <label for="miasto">Podaj miasto:</label>
            <input type="text" id="miasto" name="miasto" required>
            <input type="submit" value="Szukaj">
        </form>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $host = "localhost";
            $username = "root";
            $password = "";
            $dbname = "kwiaciarnia";
            $conn = mysqli_connect($host, $username, $password, $dbname);

            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $miasto = mysqli_real_escape_string($conn, $_POST['miasto']);

            $sql = "SELECT nazwa, ulica FROM kwiaciarnie WHERE miasto='$miasto'";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    echo "<h3>" . $row["nazwa"] . ", " . $row["ulica"] . "</h3>";
                }
            } else {
                echo "<h3>No results found</h3>";
            }

            mysqli_close($conn);
        }
        ?>
    </section>
    <footer>
        <p>Stronę wykonał: PESEL</p>
    </footer>
</body>
</html>