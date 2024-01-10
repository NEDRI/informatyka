/*
function duze(){
  s=document.getElementById("n").value;
  s=s.toUpperCase();
  document.getElementById("d").innerHTML=s;
}

napis="Ala ma kota i kota"
licznik=0
for (i=0; i<napis.length; i++){
  if(napis[i]=="A" || napis[i]=="a"){
    licznik++
  }
}
alert(licznik)
alert(napis.length)
n=napis.replace("kota","psa")
alert(n)

tablica=["adam","ania","maciek"]
element=prompt("podaj imie")
tablica.push(element)
document.write(tablica.join(" - ")+"<br>")
tablica.sort();
document.write(tablica.join(", "))
*/

czas = new Date()
r=czas.getFullYear()
m=czas.getMonth()+1
d=czas.getDate()
s="dzis jest "+d+ "/" +m+ "/" +r
alert(s)

