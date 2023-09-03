


let keyboard = document.getElementById("keyboardimg");

keyboard.oncontextmenu = "return false;"



document.getElementById("scorenum").innerHTML = 0;

/**
 * Incrementally adds number of clicks/keypresses by 1 and adds it to current score
 */
function addClicks() {
     clicks += clickClick; 
	document.getElementById("scorenum").innerText = clicks;  
};

var clicks = 0;
var clickSecond = 0;






setInterval(function() {
	clicks += clickSecond; 
	document.getElementById("scorenum").innerText = clicks; 
}, 1000) 

/**
 * Item that auto clicks 10 times in one second
 */
function autoClick() {

	if (clicks >= 20)
	{
		clicks -= 20; 
		document.getElementById("scorenum").innerText = clicks;
		
		clickSecond += 10; 
		
	}
}

var clickClick = 1

/**
 * Takes away 200 from score and makes clicks give twice the amount
 */
function doubleClick (){
    if (clicks >= 200 )
    {
        clicks -= 200;
        document.getElementById("scorenum").innerText = clicks;
        clickClick = clickClick*2;

       
    }
}

function x4Click(){
    if (clicks >= 300) {
        clicks -= 300;
        document.getElementById("scorenum").innerText = clicks;
        clickClick = clickClick*3;
    }
}






var timeleft = 3;
var button = document.getElementById('retry')

function enable() {
   
    setTimeout(function(){
        button.disabled = false
      }, 1000);
}





/**
 * Timer which counts down from 20
 */
var timer ;
setInterval(function times(){
   
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = timeleft;
    document.getElementById("final-score-text").innerHTML = clicks.toLocaleString() + ' clicks';
    let finalScreen = document.getElementById('final-score');
    finalScreen.style.display = "block";
    clickClick = 0;
    clickSecond = 0;
    let buttons = document.getElementsByClassName('allbuttons')[0]
    buttons.style.display = "none";
    enable(button);
  
    
   
    
    
    
  } else  {
    document.getElementById("countdown").innerHTML = timeleft + "s";
     timeleft -= 1;}
}, 1000);

function retry(){
    
    let finalScreen = document.getElementById('final-score');
    finalScreen.style.display = "none";
    let buttons = document.getElementsByClassName('allbuttons')[0]
    buttons.style.display = 'flex';
    
    clicks = 0;
    clickClick = 1;
    clickSecond = 0;
    
     timeleft = 20;

}



function outOfTime (){
    if ( document.getElementById("countdown").innerHTML = "0") {
        document.getElementById("final-score-text").innerHTML = clicks;
    }
}

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
