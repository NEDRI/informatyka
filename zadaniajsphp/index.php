<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Egzamin PAI</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Egzamin PAI</h1>
    <p>Poniżej znajduje się 15 zadań:<br>
        -5 zadań po 5%<br>
        -5 zadań po 15%<br>
        -5 zadań po 20%<br>
        Suma procentów do zrobienia to 200.<br>
        Na samym dole znajdują się podpowiedzi takie same jak dostępne są na faktycznym egzaminie INF03<br>
        Plik z bazą danych należy zaimportować do xamppa pod nazwą 'egzamin'<br>
        Jeśli chodzi o zadania z PHP to w rozwiązaniu należy zarówno utworzyć jak i zamknąć połączenie z bazą
        danych.<br>
        Na całość są dwie lekcje. Powodzenia!
    </p>
    <section>
        <h3>Zadanie 1 - JS</h3>
        Napisz skrypt, który po wciśnięciu przycisku zmieni teskt poniżej z "Kim jesteś?" na "Jesteś zwycięzcą!"
        <br>
        <p id="tak">Kim jesteś?</p>
        <button onclick="zad1()">Guzik motywacji</button>
        <script>
            function zad1(){
            document.getElementById("tak").innerHTML = "Jesteś zwycięzcą!"
            }
        </script>
    </section>
    <section>
        <h3>Zadanie 2 - JS</h3>
        Napisz skrypt, który po wciśnięciu przycisku zmieni kolor czcionki na czerwony
        <br>
        <p id="czer">Pomidorek</p>
        <button onclick="zad2()">Czerwony</button>
        <script>function zad2(){
    document.getElementById("czer").style.color = "red"
}</script>
    </section>

    <section>
        <h3>Zadanie 3 - PHP</h3>
        Napisz skrypt, który wypisze z bazy danych imie, nazwisko i date urodzenia najmłodszego nauczyciela.<br>
        Zapytanie: 'SELECT imie nazwisko data_urodzenia FROM nauczyciel ORDER BY data_urodzenia DESC LIMIT 1;'<br>
        <p>
            Tutaj pojawia się data:
        </p>
    </section>

    <section>
        <h3>Zadanie 4 - PHP</h3>
        Napisz skrypt, który wypisze z bazy danych kategorie ocen, których waga jest równa 3.<br>
        Zapytanie: 'SELECT nazwa FROM `kategorie_ocen` WHERE waga = 3;'<br>
        <p>
            Tutaj pojawią się nazwy ocen:
        </p>
    </section>

    <section>
        <h3>Zadanie 5 - JS</h3>
        Napisz skrypt, który pobierze z pola edycyjnego liczbę, a następnie zwróci informację czy liczba jest dodatnia,
        ujemna czy równa 0.<br>
        <input type="number"><br>
        <button>Określ</button><br>
        <p>Tutaj będzie wynik</p>
    </section>

    <section>
        <h3>Zadnanie 6 - PHP</h3>
        Napisz skrypt, który w postaci listy nienumerowanej wypisze dostępne profile klas.<br>
        Zapytanie: 'SELECT DISTINCT oznaczenie FROM klasa;'<br>
        <p>
            Tutaj pojawią się profile klas:
        </p>
    </section>

    <section id="tlo">
        <h3>Zadanie 7 - JS</h3>
        Napisz skrypt, który wczyta pól edycyjnych wartości składowe RGB i zmieni kolor obecnej sekcji.<br>
        R:<input type="number" id="r"><br>
        G:<input type="number" id="g"><br>
        B:<input type="number" id="b"><br>
        <button onclick="zad7()">TŁO</button>
        <script>function zad7(){
    r = document.getElementById("r").value
    g = document.getElementById("g").value
    b = document.getElementById("b").value
    document.getElementById("tlo").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}</script>
    </section>

    <section>
        <h3>Zadnanie 8 - PHP</h3>
        Napisz skrypt, który wstawi do bazy danych nowego ucznia, dane są pobrane z formularza.<br>
        Zapytanie: 'INSERT INTO uczen VALUES (NULL, `imie`, `nazwisko`, 1);'
        <form>
            Imie <input type="text"><br>
            Nazwisko <input type="text"><br>
            <input type="submit" value="Dodaj">
        </form>
    </section>

    <section>
        <h3>Zadanie 9 - JS</h3>
        Napisz skrypt, obliczy cenę paliwa, pierwsze pole edycyjne to rodzaj, drugie to litry.<br>
        Rodzaj 1 - cena 5.97 | Rodzaj 2 - cena 6.27 | Każdy inny rodzaj - "BŁĄD!"<br>
        Rodzaj: <input type="text" id="rodzaj"><br>
        Litry: <input type="number" id="ile"><br>
        <button onclick="zad9()">Oblicz</button>
        <p id="tuWynik">
            Tutaj pojawi się wynik
        </p>
        <script>
            function zad9(){
    rodzaj = document.getElementById("rodzaj").value
    ile = document.getElementById("ile").value
    txt = document.getElementById("tuWynik")
    if(rodzaj == 1){
        txt.innerHTML = 5.97 * ile
    } else if(rodzaj == 2){
        txt.innerHTML = 6.27 * ile
    }else{
        txt.innerHTML = "blad"
    }
}
        </script>
    </section>

    <section>
        <h3>Zadnie 10 - JS</h3>
        Napisz skrypt, który zmieni styl obramowania elementu przy pomocy listy rozwijanej<br>
        <select onchange="zad10()" id="sel">
            <option value="solid">Solid</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="none">None</option>
        </select><br>
        <p id="obiekt">
            Nasz obramowany obiekt
        </p>
        <script>
            function zad10() {
             sel = document.getElementById("sel").value;
             document.getElementById("obiekt").style.borderStyle = sel;
            }
        </script>
    </section>

    <section>
        <h3>Zadanie 11 - PHP</h3>
        Skrypt wypisze liczbę uczniów w wybranej klasie z listy numerowanej.<br>
        Zapytanie: 'SELECT COUNT(*) AS LICZBA_UCZNIOW FROM uczen
        INNER JOIN klasa ON uczen.id_klasa = klasa.id
        WHERE oznaczenie = 'x' AND numer = y; '<br>
        <form action="" method="post">
            <select name="oz">
                <option>TE</option>
                <option>TI</option>
                <option>TM</option>
                <option>TOR</option>
            </select>
            <select name="num">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <input type="submit" value="Szukaj">
        </form><br>
        <p>
            Tutaj pajawi się liczba danej klasy:
        </p>
        <?php
         #$server = 'localhost';
         #$user = 'root';
         #$password = '';
         #$name = 'egzamin';
         #$conn = mysqli_connect($server, $user, $password, $name);
         
        #$oznaczenie = $_POST['oz'];
        #$numer = $_POST['num'];
         #$sql = "SELECT COUNT(*) AS LICZBA_UCZNIOW FROM uczen 
          #  INNER JOIN klasa ON uczen.id_klasa = klasa.id 
         #   WHERE oznaczenie = '$oznaczenie' AND numer = '$numer'";
        #$wynik = mysqli_query($conn, $sql);


    
        #mysqli_close($conn)
      
        ?>
    </section>

    

    <section>
        <h3>Zadanie 12 - PHP</h3>
        Napisz skrypt, który wypisze w formie tabeli 3 najstarszych nauczycieli.<br>
        Zapytanie: 'SELECT imie, nazwisko FROM nauczyciel ORDER BY data_urodzenia LIMIT 3;'<br>
        <?php

        $server = 'localhost';
        $user = 'root';
        $password = '';
        $name = 'egzamin';
        $conn = mysqli_connect($server, $user, $password, $name);

        $sql = "SELECT imie, nazwisko FROM nauczyciel ORDER BY data_urodzenia LIMIT 3";
        $wynik = mysqli_query($conn, $sql);

        if (mysqli_num_rows($wynik) > 0) {
            echo "<table border='1'><tr><th>Imię</th><th>Nazwisko</th></tr>";
            while ($row = mysqli_fetch_assoc($wynik)) {
                echo "<tr><td>" . $row['imie'] . "</td><td>" . $row['nazwisko'] . "</td></tr>";
            }
            echo "</table>";
        } else {
            echo "Brak wyników.";
        }
    
        mysqli_close($conn);
        ?>
    </section>

    <section>
    <h3>Zadanie 13 - JS</h3>
    Napisz skrypt, który policzy cenę biletów na mecz.<br>
    Zwykły(35zł)<input type="radio" name="bilet" value="35">
    VIP-Silver(60zł)<input type="radio" name="bilet" value="60">
    VIP-Gold(100zł)<input type="radio" name="bilet" value="100"><br>
    Ile osób? <input type="number" id="ileOsob"><br>
    <button onclick="zad13()">Oblicz</button><br>
    <p>
        Tutaj cena za bilety:
    </p>
    <p id="wynik"></p>
    <script>
        function zad13(){
            bilet = document.getElementsByName("bilet");
            for (let i = 0; i < bilet.length; i++) {
                if (bilet[i].checked) {
                    typ = bilet[i].value;
                    break;
                }
            }
            ileOsob = parseInt(document.getElementById("ileOsob").value);
            wynik = typ * ileOsob;
            document.getElementById("wynik").innerHTML = wynik + " zł";
        }
    </script>
</section>


    <section>
        <h3>Zadanie 14 - JS</h3>
        Napisz skrypt, który za pomocą suwaka zmieni wielkość tesktu.<br>
        0px <input type="range" min="0" max="40" id="rozmiar" onchange="zad14()"> 40px<br>
        <p id="txt">TESKT DO ZMIANY</p>
        <script>
            function zad14(){
            rozmiar = document.getElementById("rozmiar").value
            document.getElementById("txt").style.fontSize = rozmiar + "px"; 
            }
        </script>
    </section>

    <section>
        <h3>Zadanie 15 - PHP</h3>
        Napisz skyrpt, który poniżej tej sekcji wypisze w postaci bloków liczebność każdej klasy.<br>
        Fromat: 'id. numer oznaczenie
        klasa liczy: liczba uczniów'. Dodaj również styl dla bloków obramowanie, kolor tła, pełna dowolność.
    </section>

    <h2>Wybrane podpowiedzi z egzaminu</h2>
    <img src="mysqli.png" alt="php">
    <img src="js1.png" alt="js1">
    <img src="js2.png" alt="js2">
</body>

</html>