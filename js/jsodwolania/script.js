function nie(){
    document.getElementById("txt").style.color = "blue"    
}
function zie(){
    document.getElementById("txt").style.color = "green"    
}
function cze(){
    document.getElementById("txt").style.color = "red"    
}

elements = document.getElementsByClassName("tak")
function tak(elements){
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "purple";
    }
};

function rob(){
    r=document.getElementById("r").value
    g=document.getElementById("b").value
    b=document.getElementById("b").value

    document.body.style.backgroundColor =`rgb(${r}, ${g}, ${b})`;
}