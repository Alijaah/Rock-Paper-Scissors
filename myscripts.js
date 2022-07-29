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
  let check = validateInput(input)
  if(check == true) {
    console.log(input);
  }
  // console.log(input);

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
}

// Write a function that plays the game

function game() {
  playRound();
}
game()