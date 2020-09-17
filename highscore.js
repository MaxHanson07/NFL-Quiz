// Retrieve user's score from local storage
var userScore = localStorage.getItem('temp-user-score')

$("#user-score").text(userScore);

// Get all the highscores from local storage
var highscores = JSON.parse(localStorage.getItem('all-highscores')) || [];

// Appends each highscore onto the webpage
for (let i = 0; i < highscores.length; i++) {
    console.log(highscores[i])
    $("ul").append(highscores[i]);

}

// Click event that adds user's initials and score to the highscores and makes it appear on page
$(".menu-button").on("click", function () {
    var initials = $("#user-initials").val();

    // Removes the temporary variable that brought user's score to highscore page from index.html
    localStorage.removeItem('temp-user-score');
    
    // Pushes the user's score to the array and saves it to local storage
    highscores.push("<br>" + initials + " scored a " + userScore);
    localStorage.setItem('all-highscores', JSON.stringify(highscores))

    $("ul").append("<br>" + initials + " scored a " + userScore);

    console.log(highscores)


    // // Removes lowest score from list once there are more than five
    if (highscores.length > 5) {
        var lowestScore = highscores[0];
        var lowestLocation = 0;

        for (let i = 0; i < highscores.length; i++) {

            if (lowestScore > highscores[i]) {
                lowestScore = highscores[i];
                lowestLocation = i
            }

        }


        highscores.splice(lowestLocation)

    }


})
