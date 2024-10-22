function zmineNapis(){
    document.getElementById("zad1").innerHTML = "Witaj swiecie"
}

function zmineKolor(){
    document.getElementById("zad2").style.color = "red"
}

function ukryj(){
    document.getElementById("zad3").style.visibility = "hidden"
}

function pokaz(){
    document.getElementById("zad3").style.visibility = "visible"
}

function wyswietl(){
    a = document.getElementById("zad4").value
    document.getElementById("napiszad4").innerHTML = a
}

kl = 0;

document.getElementById("klik").addEventListener("click", function() {
    kl++;
    document.getElementById("num").innerText = kl;
});

document.getElementById("reset").addEventListener("click", function() {
    kl = 0;
    document.getElementById("num").innerText = kl;
});

document.getElementById('stworzTabele').addEventListener('click', function() {
    table = document.getElementById('tabela');
    table.innerHTML = ''; 

    number = 1;
    for (i = 0; i < 3; i++) {
        row = table.insertRow();
        for (j = 0; j < 3; j++) {
            cell = row.insertCell();
            cell.textContent = number++;
        }
    }
});

document.getElementById('obraz1').addEventListener('click', function() {
    document.getElementById('zad7').src = 'szop.jpeg';
});

document.getElementById('obraz2').addEventListener('click', function() {
    document.getElementById('zad7').src = 'kaczka.jpg';
});

document.getElementById('obraz3').addEventListener('click', function() {
    document.getElementById('zad7').src = 'bobr.jpg';
});

function zad8(){
    imie = document.getElementById("imie8").value
    jan = document.getElementById("jan").value
    anna = document.getElementById("anna").value
    piotr = document.getElementById("piotr").value

    jan.style.visibility = "hidden"
    anna.style.visibility = "hidden"
    piotr.style.visibility = "hidden"

    switch (imie) {
        case "jan":
            jan.style.visibility = "visible"
            break;
        case anna:
            anna.style.visibility = "visible"
            break;
        case piotr:
            piotr.style.visibility = "visible"
            break;
    
        default:
            jan.style.visibility = "hidden"
            anna.style.visibility = "hidden"
            piotr.style.visibility = "hidden"
            break;
    }
}

/*
function zad8() {
    imie = document.getElementById("imie8").value;
    jan = document.getElementById("jan");
    anna = document.getElementById("anna");
    piotr = document.getElementById("piotr");

    jan.style.visibility = "hidden";
    anna.style.visibility = "hidden";
    piotr.style.visibility = "hidden";

    switch (imie) {
        case "jan":
            jan.style.visibility = "visible";
            break;
        case "anna":
            anna.style.visibility = "visible";
            break;
        case "piotr":
            piotr.style.visibility = "visible";
            break;
        default:
            
            break;
    }
}
*/