// Variable Declarations

const choices = ['rock','paper','scissors'];

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
  console.log(input);

}

// Write a function that plays a single round of Rock Paper Scissors

function playRound () {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
}

// Write a function that plays the game

function game() {
  playRound();
}
game()