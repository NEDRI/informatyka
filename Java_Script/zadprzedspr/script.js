c=1
function przel(a){
    obraz = document.getElementById("glowne")
    if(a <= 5 ){
        c = a
    }
    if (a == 9){
        c=c+1
    } else if (a == 8){
        c=c-1
    }
    if (a == 1){
        obraz.src = '1.jpg'
    } else if (a == 2 || c == 2){
        obraz.src = '2.jpg';
    } else if (a == 3 || c == 3){
        obraz.src = '3.jpg';
    } else if (a == 4 || c == 4){
        obraz.src = '4.jpg';
    } else if (a == 5){
        obraz.src = '5.jpg';
    }
    if (c == 0){
        c = 5
    }else if (c == 6){
        c = 1
    }
    console.log(c)
    if(c == 1){
        obraz.src = '1.jpg'
    }
    if(c == 5){
        obraz.src = '5.jpg';
    }
}