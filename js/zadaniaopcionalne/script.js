iloczyn = 4
iloczyn2 = 2
function zad1(iloczyn,iloczyn2){
    wynikr = iloczyn - iloczyn2
    console.log("roznica: "+wynikr)
    if (iloczyn, iloczyn2 != 0){
        wynikdziel = iloczyn/iloczyn2
        console.log("dzielenie: "+wynikdziel)
    }
}
zad1(iloczyn,iloczyn2)

a=5
b=7
c=10
function zad2(a,b,c){
    if ((a+b > c) && (a+c > c) && (b+c > a)){
        console.log("da sie")
    }
}
zad2(a,b,c)

q = 1
w = 5
e = 1 
function zad3(q,w,e){
    kwadrat = Math.pow(w, 2) - 4 * (q) * (e)
    if (kwadrat >= 0){
        console.log("fun kwa: "+kwadrat)
    }
}
zad3(q,w,e)

brutto = 500
netto = 385
function zad4(brutto,netto){
    vat = brutto * 0.23
    console.log("vat "+vat)

    netoob = brutto - vat
    console.log("netto z brutto "+netoob)

    brunet = netto + 0.23 * netto
    console.log("brutto z neto "+brunet)

}
zad4(brutto,netto)