function zad1() {
    rozmiar = document.getElementById("rozmiarTxt").value
    txt = document.getElementById("tekst")
    txt.style.fontSize = rozmiar + "px";
}

function zad2() {
    r = document.getElementById("r").value;
    g = document.getElementById("g").value;
    b = document.getElementById("b").value;
    document.getElementById("zad2").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function zad3() {
    opcja = document.getElementById("ramka").value;
    document.getElementById("obramowany").style.borderStyle = opcja;
}

function zad4() {
    paliwo = document.querySelector('input[name="paliwo"]:checked');
    litry = document.getElementById("litry").value;
    wynik = document.getElementById("wynik");
    paliwo = parseFloat(paliwo.value)
    koszt = paliwo*litry
    wynik.textContent = `Płacisz: ${koszt} zł`;
}
