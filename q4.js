$(document).ready(function() {
    var userScore = 0;
    var computerScore = 0;

    $('.choice').click(function() {
        var userChoice = $(this).attr('id');
        var computerChoice = computerChoose();

        var result = getResult(userChoice, computerChoice);
        updateScore(result);

        $('#result').text(result);
    });

    function computerChoose() {
        var choices = ['rock', 'paper', 'scissors'];
        var randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getResult(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function updateScore(result) {
        if (result === "You win!") {
            userScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
        $('#user-score').text(userScore);
        $('#computer-score').text(computerScore);
    }
});
