const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    input = input.toLowerCase();
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "it\'s a tie";
    } else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")) {
    return "plare wins";
    } else {
        return "computer wins"
    }
}