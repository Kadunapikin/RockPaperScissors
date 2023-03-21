const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult();
}));

function getComputerChoice() {
    const randomNumber = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomNumber
    computerChoiceDisplay.innerHTML = computerChoice
}

 const getResult = () => {
switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        resultDisplay.innerHTML = "YOU WIN!"
        break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
        resultDisplay.innerHTML = "YOU LOSE!"
        break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
        resultDisplay.innerHTML = "IT'S A DRAW!"
        break;
    }
 }


// const playerSelection = playerChoice();
// const computerSelection = computerChoice();
// const winner = checkWinner(playerSelection, computerSelection);
// let playerScore = 0;
// let computerScore = 0;
// let roundCount = 1;


// // function game() {
// //     playRound();
// // }

// function playRound() {
//     while (roundCount <= 5) {
//         console.log(`playerChoice ${playerSelection}`);
//         console.log(`computerChoice ${computerSelection}`);    
//         console.log(`Round ${roundCount}:`);
//         console.log(winner);
//         console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
//         roundCount ++;
//     }
//     if (playerScore > computerScore) {
//         console.log(`You won the game! Final score: ${playerScore}-${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`You lost the game! Final score: ${computerScore}-${playerScore}`);
//     } else {
//         console.log(`It\'s a draw! Final score: ${playerScore}-${computerScore}`);
//     }
// }


