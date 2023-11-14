function myFunction(){
    var checkBox  = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if(checkBox.checked){
        //text.style.display = "block";
        text.style.color ="red"
        text.style.background = "black"
    }else{
        //text.style,display = "none";
        text.style.color = "green"
        text.style.background = "white"
    }
}
function f(){
    z = "zamowiono kawe z: "

    c1 = document.getElementById("ch1");
    c2 = document.getElementById("ch2");
    c3 = document.getElementById("ch3");
    c4 = document.getElementById("ch4");

    if (c1.checked) {z=z+"napis1, "};
    if (c2.checked) {z=z+"napis2, "};
    if (c3.checked) {z=z+"napis3, "};
    if (c4.checked) {z=z+"napis4 "};
    el = document.getElementById("w");
    el.innerHTML= z; 

}
function pk(){
    w =document.getElementById("kU").value;
    el = document.getElementById("p");
    el.style.background = w;
}
