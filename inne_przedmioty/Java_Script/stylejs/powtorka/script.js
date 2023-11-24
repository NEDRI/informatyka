function kolor(){
    el=document.getElementById("a")
    el.style.color="red"
    el.style.fontSize="20px"
    el.style.border = '2px solid white';
}
//inny plik
function change_to_indigo(){
    tlo=document.getElementById("right")
    tlo.style.backgroundColor="indigo"

}
function change_to_steelblue(){
    tlo=document.getElementById("right")
    tlo.style.backgroundColor="steelblue"
}
function change_to_olive(){
    tlo=document.getElementById("right")
    tlo.style.backgroundColor="olive"
}
function change_font_color(){
    w =document.getElementById("list").value;
    tc=document.getElementById("texta")
    tc.style.color=w
}
function change_size(){
    si=document.getElementById("czcionka").value;
    tc=document.getElementById("texta")
    tc.style.fontSize=si
}
function change_border(){
    ob=document.getElementById("box")
    img=document.getElementById("img")
    if (ob == "check"){
        img.style.border = '1px solid white'
    }
    if (ob == "unchecked"){
        img.style.border = "none"
    }
}