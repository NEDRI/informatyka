//zad 1
function arytmetyczny(){
    pierwsza =parseFloat(document.getElementById('arytmetycznypier').value);
    ruz =parseFloat(document.getElementById('arytmetycznyruz').value);
    
    tab = [];
    for (i = 0; i < 5; i++) {
        tab.push(pierwsza + i * ruz);
    }
    
    document.getElementById('arytmetycznyOUT').innerHTML = tab.join(', ');
}
function geometryczny(){
    geometrycznypier =parseFloat(document.getElementById('geometrycznypier').value);
    pierwszailoraz =parseFloat(document.getElementById('pierwszailoraz').value);

    tab = [];
    for (i = 0; i < 5; i++) {
        tab.push(geometrycznypier * Math.pow(pierwszailoraz, i));
    }
    document.getElementById('geometrycznyOUT').innerText = "Wyniki: " + tab.join(', ');
}
// zad 3
function wyswietljezyk(){
    jezyk =document.getElementById("lista").value
    alert("ulubiony jezyk to: "+jezyk)
}
//zad2
function funkcja2(){
    l1 = document.getElementById("l1");
    l2 = document.getElementById("l2");
    l3 = document.getElementById("l3");
    l4 = document.getElementById("l4");
    if (l1.checked) {liczba2 = l1};
    if (l2.checked) {liczba2 = l2};
    if (l3.checked) {liczba2 = l3};
    if (l4.checked) {liczba2 = l4}
    wynik = Math.pow(parseInt(liczba2.value), 2);
    document.getElementById("wynik2").innerHTML=wynik

    c1 = document.getElementById("color1");
    c2 = document.getElementById("color2");
    c3 = document.getElementById("color3");
    c4 = document.getElementById("color4");

    if (c1.checked) {kolor2 = c1};
    if (c2.checked) {kolor2 = c2};
    if (c3.checked) {kolor2 = c3};
    if (c4.checked) {kolor2 = c4};
    document.getElementById("a").style.backgroundColor=kolor2

  }
      
  

