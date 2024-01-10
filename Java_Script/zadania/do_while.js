//zad1
console.log("1");
let liczba = 5;
let i1 = 0;
do {
    console.log(liczba);
    liczba = liczba + 1;
    i1++;
} while (i1 <= 10);

//zad2
console.log("");
console.log("2");
let z = 5;
let x = 10;
let c2 = z;
do {
    console.log(c2);
    c2++;
} while (c2 <= x);

//zad3
console.log("");
console.log("3");
let q3 = 0;
do {
    console.log("andrzej");
    q3++;
} while (q3 < 5);

//zad4
console.log("");
console.log("4");
let w4 = 0;
do {
    console.log(w4 + "linia");
    w4++;
} while (w4 <= 10);

//zad5
console.log("");
console.log("5");
let wysokosc5 = 5;
let szerokosc5 = 10;
let bok10 = 0;
do {
    let wiersz = '';
    let bok5 = 0;
    do {
        wiersz += '*';
        bok5++;
    } while (bok5 < szerokosc5);
    console.log(wiersz);
    bok10++;
} while (bok10 < wysokosc5);

//zad6
/*
console.log("");
console.log("6");
let wysokosc6 = prompt("podaj wyskosc: ");
let szerokosc6 = prompt("podaj szerokosc: ");
let bok106 = 0;
do {
    let wiersz6 = '';
    let bok56 = 0;
    do {
        wiersz6 += '*';
        bok56++;
    } while (bok56 < szerokosc6);
    console.log(wiersz6);
    bok106++;
} while (bok106 < wysokosc6);
*/

//zad7
console.log("");
console.log("7");
let m7 = 1;
do {
    let n7 = 1;
    do {
        const wynik = m7 * n7;
        console.log(`${m7} * ${n7} = ${wynik}`);
        n7++;
    } while (n7 <= 10);
    m7++;
} while (m7 <= 10);

//zad8
console.log("");
console.log("8");
let wysokoscTrojkata8 = 5;
let p8 = 1;
do {
    let gwiazdki = '';
    let o8 = 1;
    do {
        gwiazdki += '*';
        o8++;
    } while (o8 <= p8);
    console.log(gwiazdki);
    p8++;
} while (p8 <= wysokoscTrojkata8);
