bokA = 20
bokB = 50
function poleProstokata(x,y) {
    return x*y
}
console.log("zad1: " + poleProstokata(bokA,bokB))

UWzrost = 190
UWaga = 80
function BMI(wzrost,waga) {
    wzrost = wzrost / 100
    wzrost = Math.pow(2, waga)

    bmi = waga / wzrost

    if (bmi < 18,5){
        console.log("za mało "+ bmi)
    } else if (bmi > 25) {
        console.log("za dużo " + bmi)
    } else if (18,5 > bmi < 25) {
        console.log("dobrze " + bmi)
    }else{
        console.log("cos nie tak " + bmi)
    }
}
//BMI(UWzrost,UWaga) Nie działa

scianki = 6
function kosc(n) {
    return(Math.floor((Math.random() * n) + 1))
}
console.log(kosc(scianki))

a=3
b=2
c=1
function odcinki(a,b,c) {
    if (b + c >= a && a + b >= c && a + c >= b ){
        return true
    }
    else{
        return false
    }
}
console.log(odcinki(a,b,c))