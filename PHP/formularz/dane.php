<?php
echo "kaczka: ".$_POST["imie"];
echo "<br>";

if(isset($_POST['imie'])){
    echo "czejsc: ".htmlspecialchars($_POST['imie']);
}else{
    echo "Cześć nieznajomy.";
}
echo "<br>";
if(isset($_POST['wiek'])){
    echo "twoj wiek to: ".htmlentities($_POST['wiek']);
}else{
    echo "Ile masz lat?";
}
echo "<br>";
if(isset($_POST['plec'])){
    if($_POST['plec'] == 'm'){
        echo "wybrales m";
    }else{
        echo "wybrales k";
    }
    echo "<br>";
}
if(isset($_POST['kolor'])){
    echo "Wybrany kolor: " . $_POST['kolor'];
	echo "<br>";
}

if(isset($_POST['gry1']) && $_POST['gry1'] == 1) echo 'gta';
else echo "nie wybrano gta";
echo "<br>";

if(isset($_POST['gry2']) && $_POST['gry2'] == 1) echo 'FIFA'; 
else echo "nie wybrano FIFA";
echo "<br>";

if(isset($_POST['gry3']) && $_POST['gry3'] == 1) echo 'Battlefield';
else echo "nie wybrano Battlefield";
echo "<br>";

if(isset($_POST['gry4']) && $_POST['gry4'] == 1) echo 'Settlers';
else echo "nie wybrano Settlers";
echo "<br>";

if(isset($_POST['gry5']) && $_POST['gry5'] == 1) echo 'Call of duty';
else echo "nie wybrano Call of duty";
echo "<br>";

if(isset($_POST['gry6']) && $_POST['gry6'] == 1) echo 'Need For Speed';
else echo "nie wybrano Need For Speed";
echo "<br>";

if(isset($_POST['gry7']) && $_POST['gry7'] == 1) echo 'Tony Hawk`s';
else echo "nie wybrano Tony Hawk`s";
echo "<br>";

if(isset($_POST['opis'])){
    echo htmlspecialchars($_POST['opis']).".";
} else {
    echo "nie ma opisu";
}

?>
