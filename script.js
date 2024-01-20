function getComputerChoice(){
    
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    // computerChoice is assigned a randomly generated number between 1 and 10
    while (randomNumber != 1 && randomNumber != 2 && randomNumber != 3){
    // this ensures the number generated is between 1 and 3
        randomNumber = Math.floor((Math.random() * 10) + 1);
    }

    if (randomNumber === 1){
        computerChoice = "Rock"; // computerChoice is assigned rock 
    } else if (randomNumber === 2){
        computerChoice = "Paper"; // computerChoice is assigned paper
    } else if (randomNumber === 3){
        computerChoice = "Scissors"; // computerChoice is assigned scissors
    }

    return computerChoice; // computerChoice's string value is returned
}

function playRound(computerSelection, playerSelection){

    let result;
    
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        result = "It's a draw!";
    }

    if (playerSelection === "rock"){

        if (computerSelection === "paper"){
            result = "You lose! Paper beats rock.";
            computerScore++;
        }
        if (computerSelection === "scissors"){
            result = "You win! Rock beats scissors.";
            playerScore++;
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            result = "You win! Paper beats rock.";
            playerScore++;
        }
        if (computerSelection === "scissors"){
            result = "You lose! Scissors beats paper.";
            computerScore++;
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            result = "You lose! Rock beats scissors.";
            computerScore++;
        }
        if (computerSelection === "paper"){
            result = "You win! Scissors beats paper.";
            playerScore++;
        }
    }

    return result;
}

function game(){

    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = getComputerChoice();

    console.log("You choose " + playerSelection);
    console.log("Computer chooses " + computerSelection);
    console.log(playRound(computerSelection, playerSelection));

    playAgain = prompt("Would you like to play again?");

}

let playGame = prompt("Would you like to play Rock, Paper, Scissors?");
let playAgain = "";
let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

if (playGame.toLowerCase() === "yes"){

    game();
    
}


