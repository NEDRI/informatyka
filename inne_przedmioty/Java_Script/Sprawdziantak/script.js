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