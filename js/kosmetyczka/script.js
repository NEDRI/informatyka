function cena() {
    
    zaznaczone = document.querySelectorAll('input[name="serwis"]:checked');
    
    suma = 0;
    for (i = 0; i < zaznaczone.length; i++) {
        suma += parseInt(zaznaczone[i].value);
    }

    wynik = document.getElementById("wynik");
    wynik.textContent = `Cena zabiegów: ${suma}`;
}