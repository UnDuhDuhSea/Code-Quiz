var questionCard = document.querySelectorAll(".question-card")
var startBtn = document.querySelector(".start-btn")
var quizStartCard = document.getElementById("quiz-start-card")
var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")
var q6 = document.getElementById("q6")
var highScore = document.getElementById("highscore")
var highScorePage = document.getElementById("takeToHighScore")
// this establishes gloabl scope for timer so i can subtract from this
// var timer;

var questions = [quizStartCard, q1, q2, q3, q4, q5, q6]
var score = ""

startBtn.addEventListener('click', function () {
    // If button is clicked hide .quiz-start-card by adding "hidden" class
    quizStartCard.classList.add('hidden')
    oneMinuteTimer()
    // take off hidden class from q1
    q1.classList.remove('hidden')
})


highScorePage.addEventListener('click', function () {
    for (let i = 0; i < questions.length; i++) {
        this.classList.add('hidden')
    }
    highscore.classList.remove('hidden')

})
//function for correct or incorrect answer using data attributes

document.querySelectorAll('.q1-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q1.classList.add('hidden')
            q2.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q1.classList.add('hidden')
            q2.classList.remove('hidden')
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});

document.querySelectorAll('.q2-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q2.classList.add('hidden')
            q3.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q2.classList.add('hidden')
            q3.classList.remove('hidden')
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});

document.querySelectorAll('.q3-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q3.classList.add('hidden')
            q4.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q3.classList.add('hidden')
            q4.classList.remove('hidden')
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});

document.querySelectorAll('.q4-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q4.classList.add('hidden')
            q5.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q4.classList.add('hidden')
            q5.classList.remove('hidden')
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});

document.querySelectorAll('.q5-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q5.classList.add('hidden')
            q6.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q5.classList.add('hidden')
            q6.classList.remove('hidden')
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});

document.querySelectorAll('.q6-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            q6.classList.add('hidden')
            highscore.classList.remove('hidden')
            // store this answer in local storage
        } else {
            q6.classList.add('hidden')
            highscore.classList.remove('hidden')
            alert("quiz OVER!")
            // seconds get taken away 
            // check if timer is less than 0. Do not show next
            // store this answer in local storage
        }
    })
});



// create a function for highScore 




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        // timer needs to be in global scope for this to work
        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}

var oneMinuteTimer = function () {
    var minuteTimer = 60,
        display = document.querySelector('#time');
    startTimer(minuteTimer, display);
};

// view highscore - using local storage

// timer settimeout every second re-display number
// last thing to work on 

// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Pseudo-Code
// - Create github repo and link to desktop
// - Touch index.html and css files
// - Create html skeleton
//      - start div with folling things
//          - "Coding Quiz Challenge" h1
//          - directions above button
//          - start button
//      - view highscores button top left of screen
//      - timer on top right of screen counting down
//      - include 1 question with 4 buttons
//      - create start button
// - Start JS page
//      - create variables for referencing 
//          - start div
//          - high scores link
//          - time
//          - start btn
//  Vars to create:
//      - time remaining
//      - highScores
//      - questions: Array of questions
//
// Question
//      - question - string
//      - options - array of strings []
//      - answer - string (one of the options)
//
//
// Maybe use data attributes to tackle this assignment. 



