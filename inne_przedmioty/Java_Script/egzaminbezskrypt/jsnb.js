function braki(){
    console.log("wartosci poczatkowe od p1 do p4:   ")
    p1 = document.getElementById("p1").innerText;
    p1v = parseInt(p1)
    console.log(p1v)
    p2 = document.getElementById("p2").innerText;
    p2v = parseInt(p2)
    console.log(p2v)
    p3 = document.getElementById("p3").innerText;
    p3v = parseInt(p3)
    console.log(p3v)
    p4 = document.getElementById("p4").innerText;
    p4v = parseInt(p4)
    console.log(p4v)
    
    if (p1v === 0) {
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="red"
    } else if (p1v >= 1 && p1v <= 5){
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="yellow"
    } else {
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="Honeydew"   
    }
    if (p2v === 0) {
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="red"
    } else if (p2v >= 1 && p2v <= 5){
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="yellow"
    } else {
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="Honeydew"   
    }
    if (p3v === 0) {
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="red"
    } else if (p3v >= 1 && p3v <= 5){
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="yellow"
    } else {
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="Honeydew"   
    }
    if (p4v === 0) {
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="red"
    } else if (p4v >= 1 && p4v <= 5){
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="yellow"
    } else {
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="Honeydew"   
    }
}
function aktualizujp1(p1f){
    p1i = prompt("podaj wartosc dla p1:");
    console.log(p1i)
    p1p = parseInt(p1i)
    p1 = document.getElementById("p1")
    p1.innerHTML=p1p
    braki()
}
function aktualizujp2(p1f){
    p2i = prompt("podaj wartosc dla p2:");
    console.log(p2i)
    p2p = parseInt(p2i)
    p2 = document.getElementById("p2")
    p2.innerHTML=p2p
    braki()
}
function aktualizujp3(p1f){
    p3i = prompt("podaj wartosc dla p3:");
    console.log(p3i)
    p3p = parseInt(p3i)
    p3 = document.getElementById("p3")
    p3.innerHTML=p3p
    braki()
}
function aktualizujp4(p1f){
    p4i = prompt("podaj wartosc dla p4:");
    console.log(p4i)
    p4p = parseInt(p4i)
    p4 = document.getElementById("p4")
    p4.innerHTML=p4p
    braki()
}
i = 0
function zamow(prod){
    console.log(prod)
    i = i +1
    console.log(i)
    idz = document.getElementById("idz")
    document.write("Zamówienie nr: " + i + " Produkt: " + prod)
    //idz.innerHTML= "Zamówienie nr: " + i + " Produkt: " + prod
    pordid = document.getElementById("pordid")
    pordid.innerHTML=prod
}