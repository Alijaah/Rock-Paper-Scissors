// create choices for game

const choices = ["rock", "paper", "scissors"];
let winners = [];

// create function that plays until 5 rounds

function game() {
    playRound(i);
  setWins();  
}

// functin that plays a round

function playRound(round) {
  const computerChoice = computerSelection();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
}

// function that returns a random computer choice

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
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

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}
