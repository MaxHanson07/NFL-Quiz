var userScore = localStorage.getItem('temp-user-score')

$("#user-score").text(userScore);

$(".menu-button").on("click", function () {
    var initials = $("#user-initials").val()

    localStorage.removeItem('temp-user-score');
    alert(initials + " scored a " + userScore)
})