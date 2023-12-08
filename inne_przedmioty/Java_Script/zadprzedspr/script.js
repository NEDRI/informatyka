function przel(a){
    obraz = document.getElementById("glowne")
    if (a == 1){
        obraz.src = '1.jpg';
    } else if (a == 2){
        obraz.src = '2.jpg';
    } else if (a == 3){
        obraz.src = '3.jpg';
    } else if (a == 4){
        obraz.src = '4.jpg';
    } else if (a == 5){
        obraz.src = '5.jpg';
    }
}
function prz(){
    obraz = document.getElementById("glowne")
    obrazv = document.getElementById("glowne").value
    console.log(obrazv)
}