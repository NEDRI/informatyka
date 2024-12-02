function red() {
    document.getElementById("txt").style.color = "red";
}
function green() {
    document.getElementById("txt").style.color = "green";
}
function blue() {
    document.getElementById("txt").style.color = "blue";
}

function select(){
    select = document.getElementById("select").value
    document.getElementById("wyglad").style.backgroundColor = select
}

function rozmiar(){
    rozmiar = document.getElementById("rozmiar").value;
    document.getElementById("txt").style.fontSize = rozmiar + "px";
}

function obramuwka(){
    boxobr = document.getElementById("boxobr")
    if (boxobr.checked) {
        document.getElementById("obraz").style.border = "none"
    } else {
        document.getElementById("obraz").style.border = "solid"
    }
}

function punkty(){
    a = document.querySelector('input[name="tak"]:checked').value
    document.getElementById("tablica").style.listStyleType = a
}