function arytmetyczny(){
    pierwsza = parseFloat(document.getElementById('arytmetycznypier').value);
    ruz = parseFloat(document.getElementById('arytmetycznyruz').value);
    
    var tab = [];
    for (var i = 0; i < 10; i++) {
        tab.push(pierwsza + i * ruz);
    }
    
    document.getElementById('arytmetycznyOUT').innerHTML = tab.join(', ');
}