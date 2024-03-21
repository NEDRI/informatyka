<?php

$tablica = [];
for ($i = 0; $i < 30; $i++) {
    $tablica[] = rand(10, 30);
}

$najmniejszy = min($tablica);

$suma = 0;
$licznik = 0;
foreach ($tablica as $element) {
    if ($suma + $element <= 150) {
        $suma += $element;
        $licznik++;
    } else {
        break;
    }
}

$srednia = array_sum($tablica) / count($tablica);

echo "Tablica: " . implode(", ", $tablica) . "\n";
echo "Najmniejszy element: $najmniejszy\n";
echo "Suma elementów do przekroczenia 150: $licznik\n";
echo "Średnia wszystkich elementów: $srednia\n";

?>
