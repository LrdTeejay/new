var my_body = document.getElementById("my-body");
var button = document.getElementById("click-me");

var colors = ["red", "blue", "green"]
button.addEventListener("click", function(){
    var random_index = Math.floor(Math.random()*2)
    document.getElementId("color").innerHTML=colors[random_index];
    body.style.backgroundColor=colors[random_index];
});
