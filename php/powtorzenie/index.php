<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
</head>
<body>
    <form action="dane.php" method="post">
        <label for="login">Login:</label>
        <input type="text" id="login" name="login" required><br><br>

        <label for="password">Hasło:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label>
            <input type="checkbox" name="checkbox">
        </label><br><br>

        <label for="komentarz">Komentarz:</label><br>
        <textarea id="komentarz" name="komentarz" rows="5" cols="40" required></textarea><br><br>

        <label for="pytanie1">1</label><br>
        <select name="pytanie1" id="pytanie1">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
        </select>
        <br><br>

        <p>2</p>
        <input type="radio" name="pytanie2" value="a" id="a">
        <label for="a">a</label><br>
        
        <input type="radio" name="pytanie2" value="b" id="b">
        <label for="b">b</label><br>
        
        <input type="radio" name="pytanie2" value="c" id="c">
        <label for="c">c</label><br><br>

        <p>3</p>
        <input type="checkbox" name="pytanie3" value="a" id="a">
        <label for="a">a</label><br>
        
        <input type="checkbox" name="pytanie3" value="b" id="b">
        <label for="b">b</label><br>
        
        <input type="checkbox" name="pytanie3" value="c" id="c">
        <label for="c">c</label><br><br>

        <label for="kolortla">
        <p>Podaj kolor tła </p>
        <input type="text" id="kolortla" name="kolortla">
        </label><br>

        <label for="kolornapis">
        <p>Podaj kolor napisu </p>
        <input type="text" id="kolornapis" name="kolornapis">
        </label><br>



        <button type="submit">Działaj</button>
    </form>
</body>
</html>
