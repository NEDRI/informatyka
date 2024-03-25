<?php
#loswanie tablicy
$tablica = [];
for ($i=0; $i < 30; $i++){
    $tablica[$i] = rand(10,30);
}
echo "tablica: ".implode(",", $tablica);
echo "<br>";
#wieksze od 18
$liczbaW=0;
$dlugosc = count($tablica);
for ($i=0; $i < $dlugosc; $i++){
if ($tablica[$i] >= 18){
    $WiekszeOd18[$i] = $tablica[$i];
    $liczbaW++;
}
}
echo "wieksze od 18: $liczbaW <br>";
#echo "wieksze od 18: ".implode(",", $WiekszeOd18);

#najmnieszy element
$najmniejszy = min($tablica);
echo "najmniesza: $najmniejszy";
echo "<br>";
$najwieszka = max($tablica);
echo "najwieksza: $najwieszka";
echo "<br>";

#ile do 150
$suma = 0;
$licznik = 0;
foreach ($tablica as $liczba) {
    if ($suma + $liczba <= 150) {
        $suma += $liczba;
        $licznik++;
    } else {
        break;
    }
}
echo "mozna sumowac $licznik";
echo "<br>";

#ponizej sredniej
$srednia = array_sum($tablica) / count($tablica);
echo "sredna: $srednia";
echo "<br";
echo "<hr>"; #znowu blad servera
echo "<br>";
$MnieszeElementy = 0;
foreach ($tablica as $liczbaM){
    if ($liczbaM <= $srednia){
        $MnieszeElementy++;
    }
}
echo "elementow mnieszych od sredniej jest: $MnieszeElementy";

?>
