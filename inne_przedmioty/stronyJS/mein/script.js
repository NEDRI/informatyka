//zad1
let liczba = 5
for (let i=0; i <= 10; i++) {
    console.log(liczba)
    liczba = liczba + 1
}

//zad2
//let a = prompt("podaj a: ")
//let b = prompt("podaj b: ")
//console.log(a,b)

//zad3
for (let q=0; q < 5; q++) {
    console.log("andrzej")
}

//zad4
for(let w=0; w <= 10; w++){
    console.log(w + "linia")
}

//zad5
let wysokosc = 5
let szerokosc = 10
for (let bok10 = 0; bok10 < wysokosc; bok10++) {
    let wiersz = '';
    for (let bok5 = 0; bok5 < szerokosc; bok5++) {
      wiersz += '*';
    }
    console.log(wiersz);
  }

//zad6
/*
let wysokosc6 = prompt("podaj wyskosc: ")
let szerokosc6 = prompt("podaj szerokosc: ")
for (let bok106 = 0; bok106 < wysokosc6; bok106++) {
    let wiersz6 = '';
    for (let bok56 = 0; bok56 < szerokosc6; bok56++) {
      wiersz6 += '*';
    }
    console.log(wiersz6);
  }
*/

//zad7
for (let m = 1; m <= 10; m++) {
    for (let n = 1; n <= 10; n++) {
      const wynik = m * n;
      console.log(`${m} * ${n} = ${wynik}`);
    }
  }

//zad8
let wysokoscTrojkata = 5;

for (let p = 1; p <= wysokoscTrojkata; p++) {
  let gwiazdki = '';
  for (let o = 1; o <=p; o++) {
    gwiazdki += '*';
  }
  console.log(gwiazdki);
}
