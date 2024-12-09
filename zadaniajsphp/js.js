function zad10(){
    sel = document.getElementById("sel").value
    document.getElementById("obiekt").style.borderStyle = sel
}

function zad13(){
    typ = document.getElementsByName("bilet").value
    for (let i = 0; i < typ.length; i++) {
        if (typ[i].checked) {
            typ = parseFloat(typ[i].value);
            break;
        }
    }
    ileOsob = document.getElementById("ileOsob").value
    wynik = typ * ileOsob
    document.getElementById("wynik").innerHTML = wynik
}

function zad14(){
    rozmiar = document.getElementById("rozmiar").value
    document.getElementById("txt").style.fontSize = rozmiar + "px";
}

function zad1(){
    document.getElementById("tak").innerHTML = "Jesteś zwycięzcą!"
}

function zad7(){
    r = document.getElementById("r").value
    g = document.getElementById("g").value
    b = document.getElementById("b").value
    document.getElementById("tlo").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function zad9(){
    rodzaj = document.getElementById("rodzaj").value
    ile = document.getElementById("ile").value
    txt = document.getElementById("tuWynik")
    if(rodzaj == 1){
        txt.innerHTML = 5.97 * ile
    } else if(rodzaj == 2){
        txt.innerHTML = 6.27 * ile
    }else{
        txt.innerHTML = "blad"
    }
}

function zad2(){
    document.getElementById("czer").style.color = "red"
}