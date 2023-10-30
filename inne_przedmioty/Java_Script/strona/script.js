//zad1
function obliczPoleIObwod() {
  var promien = parseFloat(document.getElementById("promien").value);

  if (promien > 0) {
      var poleKola = Math.PI * Math.pow(promien, 2);
      var obwodKola = 2 * Math.PI * promien;

      document.getElementById("wynik").innerHTML = "Pole kola: " + poleKola + "<br>Obwód kola: " + obwodKola;
  } else {
      document.getElementById("wynik").innerHTML = "zly promien.";
  }
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
document.write("tablica 25 0/10: " + tablica2)

//zad4
let orzel = 0
let reszka = 0
