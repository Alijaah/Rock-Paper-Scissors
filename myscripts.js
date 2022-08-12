// create choices for game

const choices = ["rock", "paper", "scissors"];
let winners = [];

// create function that resets the game

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

// function that plays the game until someone wins 5 times

function startGame() {
  let imgs = document.querySelectorAll('img')
  imgs.forEach((img) => 
  img.addEventListener(('click'), () => {
    if (img.id){
      playRound(img.id);
  }})) 
}

// function that plays a round

function playRound(playerChoice) {
  let wins = checkWins();
    if (wins >= 5) {
      return;
    }

  const computerChoice = computerSelection();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
      displayEnd()
    }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector('winner').textContent = 'You won 5 games! Congratulations!';
  } else {
    document.querySelector('winner').textContent = 'Sorry, the computer won 5 times.';
  }
  document.querySelector('reset').style.display = 'flex';
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector('.playerChoice').textContent = `You chose ${playerChoice.charAt(0).toUpperCase().slice(1)}`;
  document.querySelector('.computerChoice').textContent = `The Computer chose ${playerChoice.charAt(0).toUpperCase().slice(1)}`;
  document.querySelector('winner').textContent = `Round Winner: ${winner}`;
}

// function that tallys wins  

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector('.playerScore').textContent = `Score ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Score ${cWinCount}`;
  document.querySelector('.ties').textContent = `Score ${ties}`;

}

// function that returns a random computer choice

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

// function that checks who won

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// function that logs the amount of wins

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

startGame();  