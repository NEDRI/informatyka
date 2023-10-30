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
document.write("losowa liczba od 2 do 12 to: " + tablica1)

//zad3
tablica2= []
while(i=0,i<=25,i++){
  tablica1.push(Math.floor(Math.random() * 11) + 2);
}

