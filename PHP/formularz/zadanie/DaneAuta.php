<?php
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
?>
