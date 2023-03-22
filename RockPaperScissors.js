const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const choices = ["rock", "paper", "scissors"];
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');
const roundDisplay = document.getElementById('round');
const finalResult = document.getElementById("winner");
let userChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;

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
        win();
        break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
        lose();
        break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
        draw();
        break;
    }
 }

 function win() {
    round++;
    roundDisplay.innerHTML = round;
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    resultDisplay.innerHTML = `YOU WIN! score: Player Score ${playerScore}-${computerScore} Computer Score`;
 }

 function lose() {
    round++;
    roundDisplay.innerHTML = round;
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `YOU LOSE! score: Player Score ${playerScore}-${computerScore} Computer Score`;
 }

 function draw() {
    round++;
    roundDisplay.innerHTML = round;
    resultDisplay.innerHTML = `IT'S A DRAW! score: Player Score ${playerScore}-${computerScore} Computer Score`;
 }