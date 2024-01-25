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

function playRound(playerSelection, computerSelection){

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

let playerScore = 0;
let computerScore = 0;
let computerChoice;
let roundResult;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let display = document.querySelector('.display');
let list = document.querySelector('ul');
let playerCounter = document.querySelector('.player-score');
let computerCounter = document.querySelector('.computer-score');

rockBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    roundResult = playRound(ROCK, computerChoice);

    let resultItem = document.createElement('li');
    resultItem.textContent = roundResult;
    list.appendChild(resultItem);

    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;

    if (playerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Player wins !";
        display.appendChild(resultPara);
    }
    else if (computerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Computer wins !";
        display.appendChild(resultPara);
    }
});

paperBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    roundResult = playRound(PAPER, computerChoice);

    let resultItem = document.createElement('li');
    resultItem.textContent = roundResult;
    list.appendChild(resultItem);

    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;

    if (playerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Player wins !";
        display.appendChild(resultPara);
    }
    else if (computerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Computer wins !";
        display.appendChild(resultPara);
    }
});

scissorsBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    roundResult = playRound(SCISSORS, computerChoice);

    
    let resultItem = document.createElement('li');
    resultItem.textContent = roundResult;
    list.appendChild(resultItem);

    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;

    if (playerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Player wins !";
        display.appendChild(resultPara);
    }
    else if (computerScore === 5) {
        let resultPara = document.createElement('p');
        resultPara.textContent = "Computer wins !";
        display.appendChild(resultPara);
    }
});


