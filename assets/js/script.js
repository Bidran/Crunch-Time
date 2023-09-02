
let keyboard = document.getElementById("keyboardimg");

keyboard.oncontextmenu = "return false;"



document.getElementById("scorenum").innerHTML = 0;

/**
 * Incrementally adds number of clicks/keypresses by 1 and adds it to current score
 */
function addClicks() {
    clicks++; 
	document.getElementById("scorenum").innerText = clicks; 
    
};

var clicks = 0;
var clickSecond = 0;








setInterval(function() {
	clicks += clickSecond; 
	document.getElementById("scorenum").innerText = clicks; 
}, 1000) 


function autoClick() {

	if (clicks >= 10)
	{
		clicks -= 10; 
		document.getElementById("scorenum").innerText = clicks;
		
		clickSecond += 3; 
		
	}
}



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



/**
 * Zoom keyboard when action is done
 */
function zoom(){
    keyboard.style.transform = "scale(1.02)";
   
}

/**
 * Zoom out keyboard when action is done
 */
function zoomOut(){
    keyboard.style.transform = "scale(100%)";
}




var buttonclick0 = document.getElementsByClassName('icon')[0];
var buttonclick1 = document.getElementsByClassName('icon')[1];
var buttonclick2 = document.getElementsByClassName('icon')[2];

function zoomButton(){
    buttonclick0.style.transform = "scale(1.1)"
   
}

function zoomOutButton(){
    buttonclick0.style.transform = "scale(100%)";
}

function zoomButton1(){
    buttonclick1.style.transform = "scale(1.1)"
   
}

function zoomOutButton1(){
    buttonclick1.style.transform = "scale(100%)";
}
function zoomButton2(){
    buttonclick2.style.transform = "scale(1.1)"
   
}

function zoomOutButton2(){
    buttonclick2.style.transform = "scale(100%)";
}
