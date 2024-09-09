function dodawanie(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    a=parseInt(a)
    b=parseInt(b)
    w = a + b
    document.getElementById("wynik").innerHTML=w;
}
function odejmowanie(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    a=parseInt(a)
    b=parseInt(b)
    w = a - b
    document.getElementById("wynik").innerHTML=w;
}
function mnozenie(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    a=parseInt(a)
    b=parseInt(b)
    w = a * b
    document.getElementById("wynik").innerHTML=w;
}
function dzielenie(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    a=parseInt(a)
    b=parseInt(b)
    w = a / b
    document.getElementById("wynik").innerHTML=w;
}