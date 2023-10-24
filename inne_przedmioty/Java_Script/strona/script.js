
/*
1. Ile jest liczb podzielnych przez 3?
2. Wyświetl liczby, które maja parzyste indeksy.
3. Ile jest liczb wiekszych od 15?
4. Znajdź najmniejszy element tablicy i podaj jego indeks.
5. Ile jest liczb dwucyfrowych?
6. Ile liczb ma parzystą sumę cyfr w zapisie?
7. Wyświetl liczby, których wszystkie cyfry są parzyste
*/

function losujLiczbe() {
    return Math.floor(Math.random() * 100) + 1;
}

for (var i = 0; i < 50; i++) {
    var liczba = losujLiczbe();
    tablica.push(liczba);
}

document.write(tablica)