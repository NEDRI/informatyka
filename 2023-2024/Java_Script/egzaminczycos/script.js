function paleta(){
    d1 = document.getElementById("d1")
    d2 = document.getElementById("d2")
    d3 = document.getElementById("d3")
    d4 = document.getElementById("d4")
    d5 = document.getElementById("d5")
    kolor = document.getElementById("wartoscH").value;
    jas = "100%";
    d1.style.backgroundColor = 'hsl('+ kolor +','+jas+', 50%)';
    jas = "80%"
    a1=d2.style.backgroundColor = 'hsl('+ kolor +','+jas+', 50%)';
    jas = "60%"
    a2=d3.style.backgroundColor = 'hsl('+ kolor +','+jas+', 50%)';
    jas = "40%"
    a3=d4.style.backgroundColor = 'hsl('+ kolor +','+jas+', 50%)';
    jas = "20%"
    a4=d5.style.backgroundColor = 'hsl('+ kolor +','+jas+', 50%)';
}
function k1(kolor){
    strona=document.getElementById("aa")
    strona.style.backgroundColor=kolor;
    if (kolor == "black"){
        strona.style.color="white";
    } else {
        strona.style.color="black";
    }
}