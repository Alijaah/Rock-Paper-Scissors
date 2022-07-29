// Global Variable Declarations

const choices = ['rock','paper','scissors'];
const winners = [];

// Computer randomly selects from array and returns a value

function getComputerChoice () {
  return choices[Math.floor(Math.random() * choices.length)];
} 

// Player inputs choice

function getPlayerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while(input == null){
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  if(check == true) {
    console.log(input); 
  }
  // console.log(input);
  return input;
}

// Function that validates player input is one of the choices

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

// Write a function that plays a single round of Rock Paper Scissors

function playRound () {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log (winner);
  console.log(computerSelection);
}

// Write a function that plays the game and plays 5 rounds

function game() {
  for (let i = 0; i <= 5; i ++) {
    return playRound;
  }
}
game()  

// Function that determines the winner

function checkWinner(choiceP, choiceC) {
  if(choiceP === choiceC){
    return ("Tie!")
  } else if (choiceP === 'rock' && choiceC === 'scissors') {
    return 'Player!';
  } else if (choiceP === 'paper' && choiceC === 'rock') {
    return 'Player!';
  } else if (choiceP === 'scissors' && choiceC === 'paper') {
    return 'Player!';
  } else {
    return 'Computer';
  }
  }

// function that displays the winner

  function logWinner() {
     
  }