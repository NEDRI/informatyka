function braki(){
    console.log("wartosci poczatkowe od p1 do p4:   ")
    p1 = document.getElementById("p1").innerText;
    p1v = parseInt(p1)
    console.log(p1v)
    p2 = document.getElementById("p2").innerText;
    p2v = parseInt(p2)
    console.log(p2v)
    p3 = document.getElementById("p3").innerText;
    p3v = parseInt(p3)
    console.log(p3v)
    p4 = document.getElementById("p4").innerText;
    p4v = parseInt(p4)
    console.log(p4v)
    
    if (p1v === 0) {
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="red"
    } else if (p1v >= 1 && p1v <= 5){
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="yellow"
    } else {
        p1 = document.getElementById("p1")
        p1.style.backgroundColor="Honeydew"   
    }
    
}