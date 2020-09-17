// Create variables needed for clock
// var timeEl = document.querySelector(".time");
var secondsLeft = 30;
var gameOver = false;

console.log(secondsLeft)

// Timer that counts down from 30 seconds
function countdownTimer() {
    // Create the countdown timer.

    var timerInterval = setInterval(function () {
        secondsLeft--;

        document.querySelector("#time").textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver = true;
            handleEndGame()
        }

    }, 1000);

}

// Start Button that starts a timer and displays a question when clicked
var startButton = document.getElementById("start");

var header = document.querySelector(".header");
var body = document.querySelector(".paragraph-body");
var button = document.querySelector("#button");

startButton.addEventListener("click", function () {
    countdownTimer();
    // Create new div to hold created buttons
    var newDiv = $("<div>")
    newDiv.attr("id", "answer-buttons")
    newDiv.attr("")
    $(".box").append(newDiv);
    askQuestion();
})

// Variables that keep track of question number and score
var questionNum = 1;
// Variable used for iterating over array
var element = 0;
var score = 0;



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

    // Give each answer values to compare to array objects to determine which is correct
    var answer1Val = "a";
    var answer2Val = "b";
    var answer3Val = "c";
    var answer4Val = "d";

    // Create buttons to display answer choices to user
    var answer1 = $("<button>")
    var answer2 = $("<button>")
    var answer3 = $("<button>")
    var answer4 = $("<button>")

    // Changes header to display question number and the paragraph body to display question
    header.textContent = "Question " + questionNum;
    body.textContent = questions[element].q;

    // Displays the possible answer texts within the buttons
    answer1.html(questions[element].a)
    answer2.html(questions[element].b)
    answer3.html(questions[element].c)
    answer4.html(questions[element].d)

    // Appends the buttons to the created div to make them appear on webpage
    $("#answer-buttons").empty()
    $("#answer-buttons").append(answer1);
    $("#answer-buttons").append(answer2);
    $("#answer-buttons").append(answer3);
    $("#answer-buttons").append(answer4);

    console.log(answer1);

    // Calls the function that determines if selected answer is correct or not
    checkAnswer(answer1, answer1Val);
    checkAnswer(answer2, answer2Val);
    checkAnswer(answer3, answer3Val);
    checkAnswer(answer4, answer4Val);

}

// Determines if selected answer is correct. Adds one point to score if correct, subtracts 10 seconds if incorrect
// Swaps out previous question and answers with next set in array
function checkAnswer(selectedAnswer, value) {
    // Adds a click function to each created answer button
    selectedAnswer.on("click", function () {
        if (questions[element].r === value) {
            score++;
        }
        else {
            secondsLeft = secondsLeft - 10;
        }
        questionNum++;
        element++;

        //TODO - Handle last question and show the high score screen
        if (element >= questions.length) {
            handleEndGame() 
            
        }
        else askQuestion()
    })
}

function handleEndGame() {
    localStorage.setItem('temp-user-score', score)

    window.location.replace("highscore.html")
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