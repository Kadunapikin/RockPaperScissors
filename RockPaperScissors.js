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