<?php
echo "kaczka: ".$_POST["imie"];
echo "<br>";

if(isset($_POST['imie'])){
    echo "czejsc: ".htmlspecialchars($_POST['imie']);
}else{
    echo "pdaj imie";
}
echo "<br>";
if(isset($_POST['wiek'])){
    echo "twoj wiek to: ".htmlentities($_POST['wiek']);
}
echo "<br>";
if(isset($_POST['plec'])){
    if($_POST['plec'] == 'm'){
        echo "wybrales m";
    }else{
        echo "wybrales k";
    }
}

?>
