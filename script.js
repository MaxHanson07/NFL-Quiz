
// <!-- Start Button that starts a timer and displays a question when clicked  -->

var startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
    countdownTimer();
    questionTime();
})

// Replaces original content with header = question number, body = question, button = answered AND * 4

var header = document.querySelector(".header");
var body = document.querySelector(".body");
var button = document.querySelector("#button");

var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");



// Variables that keep track of question number and score
var questionNum = 1;
var score = 0;
// Variable used for iterating over array
var element = questionNum - 1;

// The array of questions for the NFL quiz
var questions = [
    { q: "The sky is blue.", a: "t", b: "jo", c: "jo", d: "jo", r: "b" },
    { q: "There are 365 days in a year.", a: "t", b: "jo", c: "jo", d: "jo" },
    { q: "There are 42 ounces in a pound.", a: "t", b: "jo", c: "jo", d: "jo" },
    { q: "The Declaration of Independence was created in 1745.", a: "t", b: "jo", c: "jo", d: "jo" },
    { q: "Bananas are vegetables.", a: "t", b: "jo", c: "jo", d: "jo" }
];

// Displays questions and answers
function questionTime(element) {

    // header.textContent = "Question " + questionNum;
    // body.textContent = questions[element].q;
    // answer1.textContent = questions[element].a;
    // answer2.textContent = questions[element].b;
    // answer3.textContent = questions[element].c;
    // answer4.textContent = questions[element].d;

    answer1.addEventListener("click", function() {
        if (questions[element].r === "1")
        {
            score++;
        }
        else {
            secondsLeft = secondsLeft - 10;
        }
        questionNum++;
    })

    // body.appendChild(answer1);
    // body.appendChild(answer2);
    // body.appendChild(answer3);
    // body.appendChild(answer4);


    // Give on click values to buttons


    // Check if correct
    if ()



    




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






// Create variables needed for clock
var timeEl = document.querySelector(".time");
var secondsLeft = 2;
var gameOver = false;

// Timer that counts down from 30 seconds
function countdownTimer() {
    // Create the countdown timer.
    gameOver = false;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        //   timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver = true;
        }

    }, 1000);


}

//   function speedRead() {
//     // Print words to the screen one at a time.
//     timeEl.textContent = " ";



//     var reader = document.createElement("h2");

//     var i = 0;

//     var timerInterval2 = setInterval(function() {



//       reader.textContent = peomArr[i];

//       i++;

//       mainEl.appendChild(reader);

//     }, 500)};

countdownTimer();

console.log(gameOver);