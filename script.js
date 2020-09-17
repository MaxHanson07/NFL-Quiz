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
    { q: "Who is the oldest coach in the NFL? (As of 2020)", a: "Bill Belichick", b: "Pete Carrol", c: "Bruce Arians", d: "Todd Bowles", r: "b" },
    { q: "How many Super Bowls has Tom Brady won?", a: "4", b: "5", c: "6", d: "7", r: "c" },
    { q: "What year was the NFL formed?", a: "1900", b: "1920", c: "1930", d: "1890", r: "b" },
    { q: "Which team won the Super Bowl in 2020?", a: "Kansas City Chiefs", b: "Baltimore Ravens", c: "San Francisco 49ers", d: "Seattle Seahaks", r: "a" },
    { q: "How many games does an NFL team play in the regular season? (Excludes playoffs and preseason)", a: "10", b: "13", c: "16", d: "17", r: "c" }
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

// Stores user's score so that the highscore page can access it
function handleEndGame() {
    localStorage.setItem('temp-user-score', score)

    window.location.replace("highscore.html")
}