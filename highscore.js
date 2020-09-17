// Retrieve user's score from local storage
var userScore = localStorage.getItem('temp-user-score')

$("#user-score").text(userScore);

var savedScores = window.localStorage;

var highscores = []

localStorage.setItem('all-highscores', JSON.stringify(highscores))
var data = JSON.parse(localStorage.getItem('all-highscores'))

// localStorage.setItem('all-highscores', JSON.stringify(highscores))
// const data = JSON.parse(localStorage.getItem('items'))

$(".menu-button").on("click", function () {
    var initials = $("#user-initials").val();

    localStorage.removeItem('temp-user-score');

    highscores.push("<br>" + initials + " scored a " + userScore);
    localStorage.setItem('all-highscores', JSON.stringify(highscores))

    // var data = JSON.parse(localStorage.getItem('all-highscores'))
    $("ul").append("<br>" + initials + " scored a " + userScore);
    

    for (let i = 0; i < data.length; i++) {
        $("ul").append(data[i]);

    }


    console.log(data)


    // // Removes lowest score from list once there are more than five
    // if (highscores.length > 5) {
    //     var lowestScore = highscores[0];
    //     var lowestLocation = 0;

    //     for (let i = 0; i < highscores.length; i++) {

    //         if (lowestScore > highscores[i]) {
    //             lowestScore = highscores[i];
    //             lowestLocation = i
    //         }

    //     }


    //     highscores.splice(lowestLocation)

    // }

    // console.log(savedScores)
    // console.log(highscores)





})
