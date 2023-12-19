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
    var dlugosc = document.getElementById('dlugosc').value;
    var szerokosc = document.getElementById('szerokosc').value;
    var pole = dlugosc * szerokosc;
    document.getElementById('wynik').innerHTML = 'Pole prostokata: ' + pole;
}
function zad7(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds)
    document.getElementById('czas').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(zad7, 10)

