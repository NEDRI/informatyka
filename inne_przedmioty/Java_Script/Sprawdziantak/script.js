function arytmetyczny(){
    pierwsza = (document.getElementById('arytmetycznypier').value);
    ruz = (document.getElementById('arytmetycznyruz').value);
    
    tab = [];
    for (i = 0; i < 5; i++) {
        tab.push(pierwsza + i * ruz);
    }
    
    document.getElementById('arytmetycznyOUT').innerHTML = tab.join(', ');
}
function geometryczny(){
    var geometrycznypier = (document.getElementById('geometrycznypier').value);
    var pierwszailoraz = (document.getElementById('pierwszailoraz').value);

    tab = [];
    for (var i = 0; i < 5; i++) {
        tab.push(geometrycznypier * Math.pow(pierwszailoraz, i));
    }
    document.getElementById('geometrycznyOUT').innerText = "Wyniki: " + tab.join(', ');
}
