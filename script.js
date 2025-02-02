var characater = 
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
        characater.classList.add("animate");
        setTimeout(function(){
            characater.classList.remove("animate");
        },500);
}