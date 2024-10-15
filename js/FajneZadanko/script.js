
function kolortla(){
    r=document.getElementById("r").value
    g=document.getElementById("b").value
    b=document.getElementById("b").value
    document.getElementById('d2').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

function wielkosc() {
    w = document.getElementById("w").value;
    h = document.getElementById("h").value;
    obraz = document.getElementById("obraz");
    
    obraz.style.width = w + "px";
    obraz.style.height = h + "px";
}

function nie(){
    document.getElementById("txt").style.color = "blue"    
}
function zie(){
    document.getElementById("txt").style.color = "green"    
}
function cze(){
    document.getElementById("txt").style.color = "red"    
}

function rozmiar(){
    rozmiar = document.getElementById("rozmiar").value
    document.getElementById("txt").style.fontSize = rozmiar + "px";
}

function txt(typ){
    strong = document.getElementById("strong");
    subtle = document.getElementById("subtle");
    txt = document.getElementById("txt")

    if (strong.checked) {txt.document.strong};
    if (subtle.checked) {txt.document.su};
}


function st(){
    strong = document.getElementById("strong");
    txt = document.getElementById("txt");
    if (strong.checked){
        txt.style.fontWeight = 'bold';
    } else {
        txt.style.fontWeight = 'normal';  
    }
}

function su(){
    subtle = document.getElementById("subtle");
    txt = document.getElementById("txt");
    if (subtle.checked){
        txt.style.fontWeight = 'lighter'; 
    } else {
        txt.style.fontWeight = 'normal';
    }
}

function podk(){
    podk = document.getElementById("podk");
    txt = document.getElementById("txt");
    if (subtle.checked){
        txt.style.textDecoration = 'underline'; 
    } else {
        txt.style.textDecoration = 'none';
    }
}