"use strict";
const Dino = document.getElementById("Dino");
const Block = document.getElementById("Block");
let score = 0;
function jump() {
    if (Dino.classList != "animate") {
        Dino.classList.add("animate");
        score = score + 1;
    }
    setTimeout(function () {
        Dino.classList.remove("animate");
    }, 500);
}
const checkLoss = setInterval(function () {
    const DinoTop = parseInt(window.getComputedStyle(Dino).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && DinoTop >= 130) {
        Block.style.animation = "none";
        alert("WHOOPS!");
        alert("Your score is " + score);
    }
}, 10);
/* var Dino = document.getElementById("Dino");
var Block = document.getElementById("Block");
var score = 0;

function jump(){
    if(Dino.classList != "animate"){
    Dino.classList.add("animate");
    score = score + 1;
    }
    setTimeout(function(){
        Dino.classList.remove("animate");
    },500);
}

var checkLoss = setInterval(function(){
   var DinoTop =
   parseInt(window.getComputedStyle(Dino).getPropertyValue("top"));
   var blockLeft =
   parseInt(window.getComputedStyle(Block).getPropertyValue("left"));
   if (blockLeft < 20 && blockLeft > 0 && DinoTop>=130){
        Block.style.animation = "none"
        alert("WHOOPS!");
        alert("Your score is " +score);
   }
},10); */
