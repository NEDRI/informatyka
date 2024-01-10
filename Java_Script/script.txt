//zad1
function obliczPoleIObwod() {
  var promien = parseFloat(document.getElementById("promien").value);

  if (promien > 0) {
      var poleKola = Math.PI * Math.pow(promien, 2);
      var obwodKola = 2 * Math.PI * promien;

      document.getElementById("wynik").innerHTML = "Pole kola: " + poleKola + "<br>Obwod kola: " + obwodKola;
  } else {
      document.getElementById("wynik").innerHTML = "zly promien.";
  }+ "1:" + r1 + "<br>"
}

//zad2
tablica1 = []
tablica1.push(Math.floor(Math.random() * 11) + 2);
document.write("losowa liczba od 2 do 12 to: " + tablica1 + "<br>")

//zad3
tablica2 = []
let b = 0; 
while (b < 25) {
  tablica2.push(Math.floor(Math.random() * 11));
  console.log(tablica2)      
  b++;
}
document.write("tablica 25 0/10: " + tablica2 + "<br>")

//zad4
let orzel = 0
let reszka = 0
for (let a = 0; a < 100; a++) {
  let s = Math.floor(Math.random() * 2);
  if (s === 0) {
      orzel++;
  } else {
      reszka++;
  }
}
document.write("reszka: "+ reszka + "<br>" + "orzel: " + orzel + "<br>")

//zad5
let r1 = 0
let r2 = 0
let r3 = 0
let r4 = 0
let r5 = 0
let r6 = 0
for (let p = 0; p < 100; p++) {
  let o = Math.floor(Math.random() * 6) + 1;
  if (o === 1) {
      r1++;
  } if (o == 2) {
    r2++;
  } if (o == 3) {
    r3++;
  } if (o == 4) {
    r4++;
  } if (o == 5) {
    r5++;
  } if (o == 6) {
    r6++;
  }  
}
document.write("na kosci wypadlo" + "<br>" + "1:" + r1 + "<br>" + "2:" + r2 + "<br>" + "3:" + r3 + "<br>" + "4:" + r4 + "<br>" + "5:" + r5 + "<br>" + "6:" + r6 + "<br>")