function zad1(){
    window.open("https://www.wp.pl/", '_blank')
}
function zad2(){
    alert('Szerokosc: ' + window.innerWidth + ', Wysokosc: ' + window.innerHeight)
}
function zad3(){
    alert('Adres strony: ' + window.location.href)
}
function zad4(){
    alert('Tytul strony: ' + document.title);
}
function zad5(){
    alert('Data ostatniej modyfikacji: ' + document.lastModified);
}
function zad6(){
    dlugosc = document.getElementById('dlugosc').value;
    szerokosc = document.getElementById('szerokosc').value;
    pole = dlugosc * szerokosc;
    document.getElementById('wynik').innerHTML = 'Pole prostokata: ' + pole;
}
function zad7(){
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds)
    document.getElementById('czas').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(zad7, 10)
//zad8
function wstecz(){
    window.history.back();
}
function dalej(){
    window.history.forward();
}
//zad9
function host(){
    hostz = window.location.hostname;
    console.log(hostz)
    alert(hostz)
}
//zad10
function protokul(){
    alert('Nazwa protokolu: ' + window.location.protocol);
}
//zad11
function numport(){
    alert('Numer portu: ' + window.location.port);
}
