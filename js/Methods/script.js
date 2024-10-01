function obltemp() {
    C = 22
    f = 71.6
    jak = "c"
    switch (jak){
        case "c":
            konwerttemp=9/5*C+32
            console.log(konwerttemp)
        break;
        case "f":
            konwerttemp=(f-32)*5/9
            console.log(konwerttemp)
        break;
        default:
            break;
    }
}
obltemp()

function pole() {
    bok = 5;
    console.log(Math.pow(bok, 2) * Math.sqrt(3)) / 4;
}  
pole()  

function delta() {
    a = 2
    b = -3
    c = -3
    console.log(Math.pow(b, 2) - 4 * (a) * (c))
}
delta()

function numgen() {
    console.log(Math.floor((Math.random() * 37) + 5))
}
numgen()