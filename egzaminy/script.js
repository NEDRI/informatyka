function red(){
    txt = document.getElementById("txt");
    rozmiar = document.getElementById("rozmiar").value;
    ozdaoba = document.getElementById("lista").value;
    txt.style.color = "red";
    txt.style.fontSize = rozmiar + "px";
    txt.style.fontStyle = ozdaoba;
}