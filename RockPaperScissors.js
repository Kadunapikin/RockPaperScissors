const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    input = input.toLowerCase();
}