// Iteration 2: Generate 2 random number and display it on the screen
const num = document.getElementById("number1")
var a = Math.round(Math.random()*100);
num.innerHTML = a;

const numb = document.getElementById("number2")
var b = Math.round(Math.random()*100);
numb.innerHTML = b;


// Iteration 3: Make the options button functional

const greater = document.getElementById("greater-than");
var score = 0;


greater.onclick = () => {
    
    if( a > b ) {
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html"
    }
    a = Math.round(Math.random()*100);
    num.innerHTML = a;
    b = Math.round(Math.random()*100);
    numb.innerHTML = b;

};

const equal = document.getElementById("equal-to")
equal.onclick = () => {
    
    if( a == b ) {
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html"
    }
    a = Math.round(Math.random()*100);
    num.innerHTML = a;
    b = Math.round(Math.random()*100);
    numb.innerHTML = b;

};

const lesser = document.getElementById("lesser-than")
lesser.onclick = () => {
    
    if( a < b ) {
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html"
    }
    a = Math.round(Math.random()*100);
    num.innerHTML = a;
    b = Math.round(Math.random()*100);
    numb.innerHTML = b;

};




// Iteration 4: Build a timer for the game

var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML= time;
    timerId = setInterval(() => {
        time--;
        if(time == 0) {
            location.href = "./gameover.html";

        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();

}

startTimer();