function oblicz(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    a=parseInt(a)
    b=parseInt(b)
    a = a * 4000
    b = b * 1000
    suma = a+b
    c = document.getElementById("c");
    if (c.checked) {w = suma + 2000};
    console.log(w)
    document.getElementById("wynik").innerHTML=w;
}
