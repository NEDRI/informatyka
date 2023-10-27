
/*
1. Ile jest liczb podzielnych przez 3?
2. Wyświetl liczby, które maja parzyste indeksy.
3. Ile jest liczb wiekszych od 15?
4. Znajdź najmniejszy element tablicy i podaj jego indeks.
5. Ile jest liczb dwucyfrowych?
6. Ile liczb ma parzystą sumę cyfr w zapisie?
7. Wyświetl liczby, których wszystkie cyfry są parzyste
*/

let liczby = [];
for (let i = 0; i < 50; i++) {
  liczby.push(Math.floor(Math.random() * 100) + 1);
  //document.write(i + ": " + liczby + "<br>")
}
//zad1

let podzielnePrzez3 = 0;
for (let i = 0; i < liczby.length; i++) {
  if (liczby[i] % 3 === 0) {
    podzielnePrzez3++;
  }
}
document.write("Liczb podzielnych przez 3 jest " + podzielnePrzez3);

/*

//zad2

for (let i = 0; i < liczby.length; i++) {
  if (i % 2 === 0) {
    document.write("Liczba o parzystym indeksie: " + liczby[i] + "<br>");
  }
}


//zad3

let wiekszeOd15 = 0;
for (let i = 0; i < liczby.length; i++) {
  if (liczby[i] > 15) {
    wiekszeOd15++;
  }
}
document.write("Liczb większych od 15 jest " + wiekszeOd15);
document.write("<br>")


//zad4

let najmniejszaLiczba = liczby[0];
let indeksNajmniejszej = 0;
for (let i = 1; i < liczby.length; i++) {
  if (liczby[i] < najmniejszaLiczba) {
    najmniejszaLiczba = liczby[i];
    indeksNajmniejszej = i;
  }
}
document.write("Najmniejsza liczba to " + najmniejszaLiczba + " o indeksie " + indeksNajmniejszej);
document.write("<br>")


//zad5

let dwucyfroweLiczby = 0;
for (let i = 0; i < liczby.length; i++) {
  if (liczby[i] >= 10 && liczby[i] <= 99) {
    dwucyfroweLiczby++;
  }
}
document.write("Liczb dwucyfrowych jest " + dwucyfroweLiczby);

//zad6

function sumaCyfr(liczba) {
    let suma = 0;
    while (liczba > 0) {
      suma += liczba % 10;
      liczba = Math.floor(liczba / 10);
    }
    return suma;
  }
  let parzystaSumaCyfr = 0;
  for (let i = 0; i < liczby.length; i++) {
    if (sumaCyfr(liczby[i]) % 2 === 0) {
      parzystaSumaCyfr++;
    }
  }
  document.write("Liczb z parzystą sumą cyfr jest " + parzystaSumaCyfr);
  
  
  //zad7
  
  function wszystkieCyfryParzyste(liczba) {
    while (liczba > 0) {
      if ((liczba % 10) % 2 !== 0) {
        return false;
      }
      liczba = Math.floor(liczba / 10);
    }
    return true;
  }
  for (let i = 0; i < liczby.length; i++) {
    if (wszystkieCyfryParzyste(liczby[i])) {
      document.write("Liczba, której wszystkie cyfry są parzyste: " + liczby[i] + "<br>");
    }
  }
*/