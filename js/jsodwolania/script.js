function nie(){
    document.getElementById("txt").style.color = "blue"    
}
function zie(){
    document.getElementById("txt").style.color = "green"    
}
function cze(){
    document.getElementById("txt").style.color = "red"    
}
window.onload = function() {
    document.body.style.backgroundColor = "red";
};

elements = document.getElementsByClassName("tak")
function tak(elements){
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "purple";
    }
};