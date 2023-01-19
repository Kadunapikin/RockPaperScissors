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