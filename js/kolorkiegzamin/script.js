function paleta(){
    d1 = document.getElementById("d1")
    d2 = document.getElementById("d2")
    d3 = document.getElementById("d3")
    d4 = document.getElementById("d4")
    d5 = document.getElementById("d5")
    jas = document.getElementById("jas").value

    d1.style.backgroundColor = 'hsl('+jas+',100%,50%)';
    d2.style.backgroundColor = 'hsl('+jas+',80%, 50%)';
    d3.style.backgroundColor = 'hsl('+jas+',60%, 50%)';
    d4.style.backgroundColor = 'hsl('+jas+',40%, 50%)';
    d5.style.backgroundColor = 'hsl('+jas+',20%, 50%)';
}