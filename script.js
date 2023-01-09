//global variables
var countFlag = 0;
var time = 29;
var soundFlag = 0;
var displayCount = 0;

const countDownEl = document.getElementById('countdown');
const countDisplayEl = document.getElementById('count');

//function to display time
function displayTime(time){
    if (time < 10) {
        time = '0' + time;
    }
    countDownEl.innerHTML = `${time}`;
}

//funtion thats called when timer starts
function startTimer(thisButton) {
    //play audio when start
    var startSound = new Audio('sounds/nothingStart.mp3'); 
    startSound.play();
    
    //disabling once function starts
    thisButton.disabled = true; 

    updateCountdown();
    
    var refreshId = setInterval(updateCountdown, 1000);
    
    //setInterval() calls the function every 1 second
    // setInterval() returns an interval ID, which you can pass to clearInterval()

    function updateCountdown() {
        countFlag++;
        if(countFlag == 31){
            clearInterval(refreshId);
            startSound.play();
            countFlag = 0;
            time = 30;
            displayCount++;
            countDisplayEl.innerHTML = `${"Count - " + displayCount}`;
            startTimer(thisButton);
            soundFlag = 0;
        }
        
        if(time <= 3 && soundFlag == 0)
        {
            soundFlag = 1;
            var endingSound = new Audio('sounds/timerEnding.mp3'); //play ending sound
            endingSound.play();
        }

        //calling display function
        displayTime(time);
        time--;
    }
}


