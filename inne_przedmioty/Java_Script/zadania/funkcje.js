//zad1
/*
function mojaFunkcja() {
    console.log("Hello World!");
}

mojaFunkcja();

function mojaFunkcja1(a) {
    return 2 * a + 4;
}

var wynik = mojaFunkcja1(5);
console.log(wynik);
*/

//zad2
/*
function mojaFunkcja(imie) {
    return "Hello " + imie;
}

var imie = "Jacek";
var wynik = mojaFunkcja(imie);
console.log(wynik);
*/

//zad3
/*
function poleKola(promien) {
    if (promien <= 0) {
      return "Promień musi być liczbą dodatnią.";
    } else {
      const pole = Math.PI * Math.pow(promien, 2);
      return pole;
    }
  }
  
  const promienKola = 5;
  const wynik = poleKola(promienKola);
  console.log(`Pole koła o promieniu ${promienKola} wynosi: ${wynik}`);
*/

//zad4
/*
function silniaIteracyjnie(n) {
    if (n < 0) {
      return "Silnia nie jest zdefiniowana dla liczb ujemnych.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let wynik = 1;
      for (let i = 2; i <= n; i++) {
        wynik *= i;
      }
      return wynik;
    }
  }
  
  const liczba = 5;
  const wynikSilnii = silniaIteracyjnie(liczba);
  console.log(`Silnia z ${liczba} wynosi: ${wynikSilnii}`);
*/

//zad5
/*
function silniaRekurencyjnie(n) {
    if (n < 0) {
      return "Silnia nie jest zdefiniowana dla liczb ujemnych.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * silniaRekurencyjnie(n - 1);
    }
  }
  
  const liczba = 5;
  const wynikSilnii = silniaRekurencyjnie(liczba);
  console.log(`Silnia z ${liczba} wynosi: ${wynikSilnii}`);
*/

//zad6
/*
function numerNaDzien(numer) {
    switch (numer) {
      case 1:
        return "Poniedziałek";
      case 2:
        return "Wtorek";
      case 3:
        return "Środa";
      case 4:
        return "Czwartek";
      case 5:
        return "Piątek";
      case 6:
        return "Sobota";
      case 7:
        return "Niedziela";
      default:
        return "Nieprawidłowy numer dnia";
    }
  }
  
  const numerDnia = 3;
  const nazwaDnia = numerNaDzien(numerDnia);
  console.log(`Numer ${numerDnia} odpowiada dniu tygodnia: ${nazwaDnia}`);
*/

//zad7
/*
function czyPelnoletni(dataUrodzenia) {
    // Przekształć podaną datę urodzenia na obiekt typu Date
    const dataUrodzeniaObj = new Date(dataUrodzenia);
  
    // Oblicz bieżący rok i rok urodzenia
    const rokBiezacy = new Date().getFullYear();
    const rokUrodzenia = dataUrodzeniaObj.getFullYear();
  
    // Oblicz wiek
    const wiek = rokBiezacy - rokUrodzenia;
  
    // Sprawdź, czy osoba jest pełnoletnia (np. 18 lat lub więcej)
    if (wiek >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  const dataUrodzenia = "2005-06-15"; // Podaj datę urodzenia w formacie "YYYY-MM-DD"
  const czyPelnoletnia = czyPelnoletni(dataUrodzenia);
  
  if (czyPelnoletnia) {
    console.log("Osoba jest pełnoletnia.");
  } else {
    console.log("Osoba nie jest pełnoletnia.");
  }
*/

//zad8

function prostokat(x, y) {
    for (let i = 0; i < y; i++) {
      let row = '';
      for (let j = 0; j < x; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  function prostokat_zmodyfikowany(x, y, znak) {
    for (let i = 0; i < y; i++) {
      let row = '';
      for (let j = 0; j < x; j++) {
        row += znak;
      }
      console.log(row);
    }
  }
  
  prostokat(12, 6);
  prostokat(5, 7);
  
  //const znakUzytkownika = prompt('Podaj znak do narysowania prostokąta:');
  //const kolumny = parseInt(prompt('Podaj liczbę kolumn:'));
  //const wiersze = parseInt(prompt('Podaj liczbę wierszy:'));
  const znakUzytkownika = "/"
  const kolumny = 5
  const wiersze = 5
  prostokat_zmodyfikowany(kolumny, wiersze, znakUzytkownika);
  