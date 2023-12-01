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
    if (p2v === 0) {
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="red"
    } else if (p2v >= 1 && p2v <= 5){
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="yellow"
    } else {
        p2 = document.getElementById("p2")
        p2.style.backgroundColor="Honeydew"   
    }
    if (p3v === 0) {
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="red"
    } else if (p3v >= 1 && p3v <= 5){
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="yellow"
    } else {
        p3 = document.getElementById("p3")
        p3.style.backgroundColor="Honeydew"   
    }
    if (p4v === 0) {
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="red"
    } else if (p4v >= 1 && p4v <= 5){
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="yellow"
    } else {
        p4 = document.getElementById("p4")
        p4.style.backgroundColor="Honeydew"   
    }
}