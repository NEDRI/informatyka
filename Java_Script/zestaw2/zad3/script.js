function oblicz(){
    a=document.getElementById("a").value;
    b = document.getElementById("b");
    c = document.getElementById("c");
    if (b.checked) {w = a * 70}
    else if (c.checked){w = a * 80}
    else{w = "wybiesz opcje"}
    document.getElementById("wynik").innerHTML=w;
}
