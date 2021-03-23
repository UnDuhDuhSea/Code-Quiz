// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

var questionCard = document.querySelectorAll(".question-card")
var startBtn = document.querySelector(".start-btn")
var quizStartCard = document.getElementById("quiz-start-card")
var q1 = document.getElementById("q1")

startBtn.addEventListener('click', function () {
    // If button it clicked hide .quiz-start-card by adding "hidden" class
    quizStartCard.classList.add('hidden')
    // take off hidden class from q1
    q1.classList.remove('hidden')
})

//function for correct or incorrect answer using data attributes

document.querySelectorAll('.q1-ol > [data-correct]').forEach(el => {
    el.addEventListener('click', function () {
        if (this.dataset.correct === "correct") {
            alert('correct')
        } else {
            //if question is wrong deduct time from timer
            alert('incorrect')
        }
    })
});

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



