function getComputerChoice(){
    
    let computerChoice;
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    // computerChoice is assigned a randomly generated number between 1 and 3

    switch (randomNumber) {
        case 1:
                computerChoice = "Rock";
                break;
        case 2:
                computerChoice = "Paper";
                break;
        case 3:
                computerChoice = "Scissors";
                break;
    }

    return computerChoice; // computerChoice's string value is returned
}

function playRound(computerSelection, playerSelection){

    let result;
    
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {

        case "rock":
                    switch (computerSelection) {

                        case "rock":
                                    result = "It's a draw!";
                                    break;
                        case "paper":
                                    result = "You lose. Paper beats rock.";
                                    computerScore++;
                                    break;
                        case "scissors":
                                    result = "You win! Rock beats scissors.";
                                    playerScore++;
                                    break;
                    }
                    break;
        case "paper":
                    switch (computerSelection) {

                        case "rock":
                                    result = "You win! Paper beats rock.";
                                    playerScore++;
                                    break;
                        case "paper":
                                    result = "It's a draw!";
                                    break;
                        case "scissors":
                                    result = "You lose. Scissors beats paper.";
                                    computerScore++;
                                    break;
                    }
                    break;
        case "scissors":
                    switch (computerSelection) {

                        case "rock":
                                    result = "You lose. Rock beats scissors.";
                                    computerScore++;
                                    break;
                        case "paper":
                                    result = "You win! Scissors beats paper.";
                                    playerScore++;
                                    break;
                        case "scissors":
                                    result = "It's a draw!";
                                    break;
                    }
                    break;
    }

    return result;
}

function game(){

    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerChoice();

    console.log("You chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    console.log(playRound(computerSelection, playerSelection));
    console.log("Computer " + computerScore + ": Player " + playerScore);

}

let computerScore = 0;
let playerScore = 0;

let playGame = prompt("Would you like to play Rock, Paper, Scissors?");

if (playGame.toLowerCase() === "yes"){

        game();

    if (computerScore > playerScore){
        console.log("Computer wins " + computerScore + "-" + playerScore);
    }
    else if (playerScore > computerScore){
        console.log("Player wins " + playerScore + "-" + computerScore);
    }
}


