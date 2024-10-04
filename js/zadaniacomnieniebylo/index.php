<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body></body>
</html>

<?php
$liczba1 = 4;
$liczba2 = 2;
function zad1($liczba1,$liczba2) {
    if ($liczba1 / $liczba2){
        print($liczba1 / $liczba2);
    };
};
zad1($liczba1,$liczba2);

print("<br>");

$ocena = 82;
function zad2($ocena){
    if($ocena <=29){
        print("ocena niedostateczna");
    }elseif ($ocena == 30 or $ocena <=59 ) {
        print("dopuszczalna");
    }elseif ($ocena == 60 or $ocena <=74){
        print("dostateczna");
    }elseif ($ocena == 75 or $ocena <=89) {
        print("dobra");
    }elseif ($ocena == 90 or $ocena <=99) {
        print("bardzo dobra");
    }elseif ($ocena == 100){
        print("celujaca");
    };
};
zad2($ocena)

?>