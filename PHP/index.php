<?php
#komentarz

#zmiene i pisanie
$a = "Hello";
$b = "world";
echo $a;
echo "<br>";
echo $b;
echo "<br>"; echo "<br>";

#tablice
$tablice = array(array('1','2', '3'),
array('4', '5', '6'),
array('7', '8', '9'));
echo $tablice[1][2];
echo "<br>";echo "<br>";

#matma
$lb1 = 10;
$lb2 = 20;
echo "+: ";
echo $lb1 + $lb2;
echo "<br>";
echo "-: ";
echo $lb1 - $lb2;
echo "<br>";
echo "*: ";
echo $lb1 * $lb2;
echo "<br>";
echo "/: ";
echo $lb1 / $lb2;
echo "<br>";
echo "%: ";
echo $lb1 % $lb2;
echo "<br>";
echo "+1: ";
echo ++$lb2;
echo "<br>";
echo "-1: ";
echo --$lb1;
echo "<br>";echo "<br>";

#cudzyslowie
$imie="Ala";
echo "imei: $imie";
echo "<br>";
echo 'imie: $imie';
echo "<br>";echo "<br>";

#poruwanie
echo $lb1 == $lb2;
echo "<br>";
echo $lb1 != $lb2;
echo "<br>";
echo $lb1 > $lb2;
echo "<br>";
echo $lb1 < $lb2;
echo "<br>";
echo $lb1 >= $lb2;
echo "<br>";
echo $lb1 <= $lb2;
echo "<br>";echo "<br>";

#if i operatory
echo "wiekszy: ";
if ($lb1 > $lb2)
    echo "true";
else
    echo "false";

echo "<br>";

echo "mnieszy: ";
if ($lb1 < $lb2)
    echo "true";
else
    echo "false";
echo "<br>";echo "<br>";

$lb3 = 3;
$lb4 = 4;
$lb5 = 3;
$lb6 = 5;

if ($lb3 == 3 && $lb4 == 4)
    echo "1true";

if ($lb3 == 3 and $lb5 == 5)
    echo "2true";
    echo "<br>";

if ($lb6 == 6 || $lb5 == 3)
    echo "3true";
    echo "<br>";

if ($lb3 == 3 or $lb4== 4)
    echo "4true";
echo "<br>";echo "<br>";

//alt if
$a = 13;
$b = $a < 10 ? "Hello" : "Good Bye";

echo $b;
echo "<br>";echo "<br>";

//liczenie liter
echo strlen($b);
echo "<br>";echo "<br>";

//swich
$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
echo "<br>";echo "<br>";

//liczenie dni
$DzienTygodnia = date("D");
echo $DzienTygodnia;
echo "<br>";

switch ($DzienTygodnia){
    case "Thu":
        echo "jest czwartek";
        break;
    case "Fri":
        echo "jest piatek";
        break;
}
echo "<br>";echo "<br>";

//funkcje tablic
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
echo "<br>";
$cars[3] ="Honda";
echo count($cars);
echo "<br>";
echo $cars[1];
echo "<br>";
echo $cars[3];
echo "<br>";

array_push($cars,"Fiat"); //dodawanie do tablic na na koniec

var_dump($cars); //Wyswietli Associative arrays 
echo "<br>";



echo "<br>";echo "<br>";


?>