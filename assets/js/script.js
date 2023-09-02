
let keyboard = document.getElementById("keyboardimg");



var score = 0;

/**
 * Incrementally adds number of clicks/keypresses by 1 and adds it to current score
 */
function addClicks() {
    score++;
    document.getElementById("scorenum").innerHTML = score;
};

var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
  } else 
    document.getElementById("countdown").innerHTML = timeleft + "s";
     timeleft -= 1;
}, 1000);
