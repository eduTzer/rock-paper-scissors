function computerPlay(){
    computerHand = ["rock", "paper", "scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function round(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection){
        return ["That's a draw!", 3]
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "paper"){
        return ["You lose! Paper beats rock", 0]
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "scissors"){
        return ["You lose! Scissors beats paper", 0]
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "rock"){
        return ["You lose! Rock beats scissors", 0]
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "rock"){
        return ["You win! Papper beats rock", 1]
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "paper"){
        return ["You win! Scissors beats paper", 1]
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "scissors"){
        return ["You win! Rock beats scissors", 1]
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose a hand between rock, paper or scissors!");
        let computerSelection = computerPlay();
        result = round(playerSelection, computerSelection);
        if (result[1] == 1){
            scorePlayer += 1;
            console.log(result[0]);
        } else if (result[1] == 0) {
            scoreComputer += 1;
            console.log(result[0]);
        } else if (result[1] == 3){
            console.log(result[0]);
        }
    }
    if (scorePlayer > scoreComputer){
        return "Player won!"
    } else if (scorePlayer < scoreComputer){
        return "Computer won!"
    } else if (scorePlayer == scoreComputer){
        return "That's a draw!"
    }
}

console.log(game());