function computerPlay(){
    computerHand = ["rock", "paper", "scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function round(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection){
        return "That's a draw!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "rock"){
        return "You win! Papper beats rock"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("Player: " + playerSelection + "\nComputer: " + computerSelection);
console.log(round(playerSelection, computerSelection));