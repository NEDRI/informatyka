<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz informacji o samochodzie</title>
</head>
<body>
    <h2>Formularz informacji o samochodzie</h2>
    <img src="auto.jpg">
    <form action="" method="post">
        <label>Marka:</label><br>
        <input type="radio" id="toyota" name="Marka" value="Toyota">
        <label for="toyota">Toyota</label><br>
        <input type="radio" id="honda" name="Marka" value="Honda">
        <label for="honda">Honda</label><br>
        <input type="radio" id="ford" name="Marka" value="Ford">
        <label for="ford">Ford</label><br><br>

        <label for="Rok">Rok produkcji:</label><br>
        <input type="number" id="Rok" name="Rok"><br><br>

        <label for="color">Kolor:</label><br>
        <select id="color" name="color">
            <option value="" disabled selected>Wybierz kolor</option>
            <option value="Czarny">Czarny</option>
            <option value="Biały">Biały</option>
            <option value="Czerwony">Czerwony</option>
            <option value="Niebieski">Niebieski</option>
            <option value="Srebrny">Srebrny</option>
        </select><br><br>

        <label for="Przebieg">Przebieg:</label><br>
        <input type="number" id="Przebieg" name="Przebieg"><br><br>

        <label for="Cena">Cena:</label><br>
        <input type="number" id="Cena" name="Cena"><br><br>

        <label for="Opis">Opis:</label><br>
        <textarea id="Opis" name="Opis" rows="4" cols="50"></textarea><br><br>

        <input type="submit" name="submit" value="Wyślij">
        <br>
    </form>
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_POST['Marka'])){
            echo "Marka: ".htmlspecialchars($_POST['Marka']);
        }else{
            echo "Nie podano marki";
        }
        echo "<br>";
        if(isset($_POST['Rok'])){
            echo "Rok: ".htmlspecialchars($_POST['Rok']);
        }else{
            echo "Nie podano roku";
        }
        echo "<br>";
        if(isset($_POST['color'])){
            echo "color: ".htmlspecialchars($_POST['color']);
        }else{
            echo "Nie podano coloru";
        }
        echo "<br>";
        if(isset($_POST['Przebieg'])){
            echo "Przebieg: ".htmlspecialchars($_POST['Przebieg']);
        }else{
            echo "Nie podano przebiegu";
        }
        echo "<br>";
        if(isset($_POST['Cena'])){
            echo "Cena: ".htmlspecialchars($_POST['Cena']);
        }else{
            echo "Nie podano ceny";
        }
        echo "<br>";
        if(isset($_POST['Opis'])){
            echo "Opis: ".htmlspecialchars($_POST['Opis']);
        }else{
            echo "Nie podano opisu";
        }
        echo "<br>";
    }
    ?>
</body>
</html>
