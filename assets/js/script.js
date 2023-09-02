
let keyboard = document.getElementById("keyboardimg");

keyboard.oncontextmenu = "return false;"

var score = 0;

/**
 * Incrementally adds number of clicks/keypresses by 1 and adds it to current score
 */
function addClicks() {
    score++;
    document.getElementById("scorenum").innerHTML = score;
    
};


var timeleft = 30;

/**
 * Timer which counts down from 30
 */
var timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "0";
  } else 
    document.getElementById("countdown").innerHTML = timeleft + "s";
     timeleft -= 1;
}, 1000);


function zoom(){
    keyboard.style.transform = "scale(1.02)";
   
}
function zoomOut(){
    keyboard.style.transform = "scale(100%)";
}

