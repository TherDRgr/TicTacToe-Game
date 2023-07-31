// Initialize variables to keep track of the score for each player
var playerXScore = 0;
var playerOScore = 0;

// Function to update the score
function updateScore(winner) {
  if (winner === "playerX") {
    playerXScore++;
  } else if (winner === "playerO") {
    playerOScore++;
  }
}

// Function to display the score on the page
function displayScore() {
  var scoreDiv = document.getElementById("score");
  scoreDiv.innerHTML = "Player X: " + playerXScore + "  Player O: " + playerOScore;
}

var winner = "playerX";
updateScore(winner);
displayScore();
