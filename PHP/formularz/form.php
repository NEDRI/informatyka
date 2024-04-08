<form action="dane.php" method="post">
    <p>Imię: <input type="text" name="imie" /></p>
    <p>Wiek: <input type="number" name="wiek" /></p>
    <p>Płeć:</p>
    <p><input type="radio" name="plec" value="m" />Mężczyzna</p>
    <p><input type="radio" name="plec" value="k" />Kobieta</p>
    
    <p>Ulubiony kolor:</p>
    <p>
        <select name="kolor">
            <option value="czerwony">Czerwony</option>
            <option value="zielony">Zielony</option>
            <option value="niebieski">Niebieski</option>
        </select>
    </p>
    
    <p>Ulubiona seria gier:</p>
    <p><input type="checkbox" name="gry1" value=1 />GTA</p>
    <p><input type="checkbox" name="gry2" value=1 />FIFA</p>
    <p><input type="checkbox" name="gry3" value=1 />Battlefield</p>
    <p><input type="checkbox" name="gry4" value=1 />Settlers</p>
    <p><input type="checkbox" name="gry5" value=1 />Call of duty</p>
    <p><input type="checkbox" name="gry6" value=1 />Need For Speed</p>
    <p><input type="checkbox" name="gry7" value=1 />Tony Hawk`s</p>
    <textarea name='opis'>Treść <b>pogrubiona</b> i zwykła.</textarea>
    <p><input type="submit" /></p>
    
</form>
