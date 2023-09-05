let keyboard = document.getElementById("keyboardimg");
document.getElementById("scorenum").innerHTML = 0;


var clicks = 0;
var clickSecond = 0;
var final = 0;
var clickClick = 1

/**
 * Incrementally adds number of clicks/keypresses by 1 and adds it to current score
 */
function addClicks() {
     clicks += clickClick; 
	document.getElementById("scorenum").innerText = clicks;  
};


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
		final += 20;
	}
}

/**
 * Takes away 200 from score and makes clicks give twice the amount
 */
function doubleClick (){
    if (clicks >= 200 )
    {
        clicks -= 200;
        document.getElementById("scorenum").innerText = clicks;
        clickClick = clickClick*2;
        final += 200;
    }
}

function x4Click(){
    if (clicks >= 300) {
        clicks -= 300;
        document.getElementById("scorenum").innerText = clicks;
        clickClick = clickClick*3;
        final += 300;
    }
}

var timeleft = 20;
var button = document.getElementById('retry')

/**
 * Enables retry button after 1 seconds
 */
function enable() {
   
    setTimeout(function(){
        button.disabled = false
      }, 1000);
}

/**
 * Disables retry button
 */
function disable(){
    button.disabled = true;
}

let highscore = 0;

localStorage.setItem("highscore", highscore);

/**
 * Timer which counts down from 20, adds the score and resets value after finishing the game
 */
var timer ;
setInterval(function times(){
   
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = timeleft;
    let highscoreValue = localStorage.getItem("highscore");
    let finalScore = clicks + final;
    if (finalScore > highscoreValue) {
        const numberFormatter = Intl.NumberFormat('en-US');
        const formatted = numberFormatter.format(highscoreValue);
        document.getElementById('highscore-end').innerHTML = "You've beaten your previous record of " + formatted;
        localStorage.setItem("highscore", finalScore);
    }
    else if (finalScore < highscoreValue){
        let highscoreValue = localStorage.getItem("highscore");
        const numberFormatter = Intl.NumberFormat('en-US');
        const formatted = numberFormatter.format(highscoreValue);
        document.getElementById('highscore-end').innerHTML = "You have not beaten your previous record of " + formatted;
    }
    
    document.getElementById("final-score-text").innerHTML = finalScore.toLocaleString() + ' clicks';
    let finalScreen = document.getElementById('final-score');
    finalScreen.style.display = "block";
    clickClick = 0;
    clickSecond = 0;
    let buttons = document.getElementsByClassName('allbuttons')[0]
    buttons.style.display = "none";
    enable(button);

  } else  {
    document.getElementById("countdown").innerHTML = timeleft + "s";
     timeleft -= 1;
     disable(button);}
}, 1000);

/**
 * Resets the game back to main screen, hiding final screen and resetting values
 */
function retry(){
    let finalScreen = document.getElementById('final-score');
    finalScreen.style.display = "none";
    let buttons = document.getElementsByClassName('allbuttons')[0]
    buttons.style.display = 'flex';
    clicks = 0;
    clickClick = 1;
    clickSecond = 0;
     timeleft = 20;
     final = 0;
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

/**
 * Zoom button when action is done
 */
function zoomButton(){
    buttonclick0.style.transform = "scale(1.1)"
}

/**
 * Zoom button when action is done
 */
function zoomButton1(){
    buttonclick1.style.transform = "scale(1.1)"
}

/**
 * Zoom button when action is done
 */
function zoomButton2(){
    buttonclick2.style.transform = "scale(1.1)"
}

/**
 * Zoom out button when action is done
 */
function zoomOutButton(){
    buttonclick0.style.transform = "scale(100%)";
}

/**
 * Zoom out button when action is done
 */
function zoomOutButton1(){
    buttonclick1.style.transform = "scale(100%)";
}

/**
 * Zoom out button when action is done
 */
function zoomOutButton2(){
    buttonclick2.style.transform = "scale(100%)";
}
