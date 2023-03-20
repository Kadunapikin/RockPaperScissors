const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');


const choices = ["rock", "paper", "scissors"];
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;


function game() {
    playRound();
}

function playRound() {
    while (roundCount <= 5) {
        console.log(`playerChoice ${playerSelection}`);
        console.log(`computerChoice ${computerSelection}`);    
        console.log(`Round ${roundCount}:`);
        console.log(winner);
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        roundCount ++;
    }
    if (playerScore > computerScore) {
        console.log(`You won the game! Final score: ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost the game! Final score: ${computerScore}-${playerScore}`);
    } else {
        console.log(`It\'s a draw! Final score: ${playerScore}-${computerScore}`);
    }
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice(){
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null){
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
      input = prompt(
       "type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesnt matter"
      );
      while (input == null){
        input = prompt("type Rock, Paper or Scissors");
     }
     input = input.toLowerCase();
     check = validateInput(input);
   } 
   return input; 
  }


function validateInput(choice) {
return choices.includes(choice);
}

function checkWinner(userChoice, computerChoice) {
    let roundWinner;
  if (userChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    roundWinner = "user";
    userScore++;
  } else {
    roundWinner = "computer";
    computerScore++;
  }
}

game();
