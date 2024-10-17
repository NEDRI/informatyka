function kolortla() {
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;
    document.getElementById('d2').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function wielkosc() {
    const w = document.getElementById("w").value;
    const h = document.getElementById("h").value;
    const obraz = document.getElementById("obraz");

    obraz.style.width = w + "px";
    obraz.style.height = h + "px";
}

function nie() {
    document.getElementById("txt").style.color = "blue";
}

function zie() {
    document.getElementById("txt").style.color = "green";
}

function cze() {
    document.getElementById("txt").style.color = "red";
}

function rozmiar() {
    const rozmiar = document.getElementById("rozmiar").value;
    document.getElementById("txt").style.fontSize = rozmiar + "px";
}

function reset(txt) {
    txt.style.fontWeight = 'normal';
    txt.style.fontStyle = 'normal';
    txt.style.textDecoration = 'none';
}

function st() {
    const txt = document.getElementById("txt");
    reset(txt);

    const strong = document.getElementById("strong");
    if (strong.checked) {
        txt.style.fontWeight = 'bold';
    }
}

function it() {
    const txt = document.getElementById("txt");
    reset(txt);

    const italic = document.getElementById("italic");
    if (italic.checked) {
        txt.style.fontStyle = 'italic';
    }
}

function podk() {
    const txt = document.getElementById("txt");
    reset(txt);

    const podk = document.getElementById("podk");
    if (podk.checked) {
        txt.style.textDecoration = 'underline';
    }
}

function liststyle(style) {
    const list = document.getElementById("tablica");
    list.style.listStyleType = style;
}
