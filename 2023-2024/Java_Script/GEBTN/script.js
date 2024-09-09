function liczenieznacznikow(){
    h2e = document.getElementsByTagName("h2");
    a=h2e.length
    p1e = document.getElementsByTagName("p");
    c=p1e.length
    b=document.getElementById("p1")
    b.innerHTML="h2: "+a +"</br>"+"p1: "+c
    for (i = 0; i < h2e.length; i++) {
        h2e[i].style.backgroundColor = "red";}
}
