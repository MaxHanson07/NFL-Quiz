// Create variables needed for clock
// var timeEl = document.querySelector(".time");
var secondsLeft = 2;
var gameOver = false;

// Timer that counts down from 30 seconds
function countdownTimer() {
    // Create the countdown timer.

    var timerInterval = setInterval(function () {
        secondsLeft--;
        document.querySelector(".time").textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver = true;
            console.log(gameOver);
        }

    }, 1000);

}

// <!-- Start Button that starts a timer and displays a question when clicked  -->
var startButton = document.getElementById("start");

var header = document.querySelector(".header");
var body = document.querySelector(".body");
var button = document.querySelector("#button");

var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

startButton.addEventListener("click", function () {
    countdownTimer();
    // askQuestion();
})





// Variables that keep track of question number and score
var questionNum = 1;
var element = 0;
var score = 0;
// Variable used for iterating over array


// The array of questions for the NFL quiz
var questions = [
    { q: "The sky is blue.", a: "t", b: "jo", c: "jo", d: "jo", r: "b" },
    { q: "There are 365 days in a year.", a: "t", b: "jo", c: "jo", d: "jo", r: "c" },
    { q: "There are 42 ounces in a pound.", a: "t", b: "jo", c: "jo", d: "jo", r: "b" },
    { q: "The Declaration of Independence was created in 1745.", a: "t", b: "jo", c: "jo", d: "jo", r: "a" },
    { q: "Bananas are vegetables.", a: "t", b: "jo", c: "jo", d: "jo", r: "c" }
];

// Asks user questions until all questions are answered or time runs out
function askQuestion() {
    while ((element < questions.length) && (gameOver != true)) {
        questionDisplay();
    }
}

// Displays questions and answers
function questionDisplay() {

    header.textContent = "Question " + questionNum;
    body.textContent = questions[element].q;
    answer1.textContent = questions[element].a;
    answer2.textContent = questions[element].b;
    answer3.textContent = questions[element].c;
    answer4.textContent = questions[element].d;

    checkAnswer(answer1, a);
    checkAnswer(answer2, b);
    checkAnswer(answer3, c);
    checkAnswer(answer4, d);

    body.appendChild(answer1);
    body.appendChild(answer2);
    body.appendChild(answer3);
    body.appendChild(answer4);

}

console.log(questions[element].a);


function checkAnswer(selectedAnswer, value) {
    selectedAnswer.addEventListener("click", function () {
        if (questions[element].r === value) {
            score++;
        }
        else {
            secondsLeft = secondsLeft - 10;
        }
        questionNum++;
        element++;
    })
}

// Append buttons with additional answers

// Set questions answer equal to a, b, c, or d to match corresponding button

// Add click me's to each button that report true or false and display next question

// Time displayed in top right

// <!-- Question replaced with new question when answered -->

// <!-- Time subtracted when question answered incorrectly -->

// <!-- Game ends when all questions are answered or when timer reaches 0 -->

// <!-- Option to save initials and score when game ends -->

// Create array of questions

// Cycle through array displaying new question

// Need to create highscore js and local storage