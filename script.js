function getComputerChoice(){

    const ROCK = 1; 
    const PAPER = 2;
    const SCISSORS = 3; // rock, paper, and scissors are assigned 1, 2, and 3 respectively

    let randomNumber = Math.floor((Math.random() * 10) + 1);
    // computerChoice is assigned a randomly generated number between 1 and 10
    while (randomNumber != 1 && randomNumber != 2 && randomNumber != 3){
    // this ensures the number generated is between 1 and 3
        randomNumber = Math.floor((Math.random() * 10) + 1);
    }

    if (randomNumber === rock){
        computerChoice = "rock"; // computerChoice is assigned rock 
    } else if (randomNumber === paper){
        computerChoice = "paper"; // computerChoice is assigned paper
    } else if (randomNumber === scissors){
        computerChoice = "scissors"; // computerChoice is assigned scissors
    }

    return computerChoice; // computerChoice's string value is returned
}

console.log(getComputerChoice()); // returns computerChoice into the console
