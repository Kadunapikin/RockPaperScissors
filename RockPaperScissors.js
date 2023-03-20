<<<<<<< HEAD
const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
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

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "it's a tie";
    } else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")) {
    return "player wins";
    } else {
        return "computer wins"
    }
}

game();
=======
//write a getComputerChoice function that returns either of the choices array

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices [Math.floor(Math.random() * 3)];
}
//console.log(getComputerChoice());

//write a funtion that plays a single round of the game taking two paramaters of playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("USER WINS");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("USER LOSES");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("IT\'S A DRAW");
            break;
      }
  }
  
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playerSelection + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
>>>>>>> c55d55e87670aa53696c6c219393b189fa8b06a8
