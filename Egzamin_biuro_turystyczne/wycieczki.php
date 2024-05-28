<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wycieczki po Europie</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <header>
        <h1>BIURO TURYSTYCZNE</h1>
    </header>
    <section id="dane">
        <h3>Wycieczki, na które są wolne miejsca</h3>
        <ul>
            <?php
            $conn = mysqli_connect("localhost", "root", "", "biuro");
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $sql = "SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna = TRUE";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<li>{$row['id']}. dnia {$row['dataWyjazdu']} jedziemy do {$row['cel']}, cena: {$row['cena']} zł</li>";
                }
            } else {
                echo "<li>Brak dostępnych wycieczek</li>";
            }

            mysqli_close($conn);
            ?>
        </ul>
    </section>
    <section id="lewy">
        <h2>Bestselery</h2>
        <table>
            <tr><td>Wenecja</td><td>kwiecień</td></tr>
            <tr><td>Londyn</td><td>lipiec</td></tr>
            <tr><td>Rzym</td><td>wrzesień</td></tr>
        </table>
    </section>
    <section id="srodek">
        <h2>Nasze zdjęcia</h2>
        <?php
        $conn = mysqli_connect("localhost", "root", "", "biuro");
        if (!$conn) {
            die("Connection fai[numer zdającego]led: " . mysqli_connect_error());
        }

        $sql = "SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis DESC";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<img src='zad4/{$row['nazwaPliku']}' alt='{$row['podpis']}'>";
            }
        } else {
            echo "Brak zdjęć do wyświetlenia";
        }

        mysqli_close($conn);
        ?>
    </section>
    <section id="prawy">
        <h2>Skontaktuj się</h2>
        <a href="mailto:turysta@wycieczki.pl">napisz do nas</a>
        <p>telefon: 111222333</p>
    </section>
    <footer>
        <p>Stronę wykonał: Andrzej Iwaszkiewicz</p>
    </footer>
</body>
</html>
