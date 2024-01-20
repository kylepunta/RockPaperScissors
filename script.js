function getComputerChoice(){

    const ROCK = 1; 
    const PAPER = 2;
    const SCISSORS = 3; // rock, paper, and scissors are assigned 1, 2, and 3 respectively

    let computerChoice = Math.floor((Math.random() * 10) + 1);
    // computerChoice is assigned a randomly generated number between 1 and 10
    while (computerChoice != 1 && computerChoice != 2 && computerChoice != 3){
    // this ensures the number generated is between 1 and 3
        computerChoice = Math.floor((Math.random() * 10) + 1);
    }

    if (computerChoice === rock){
        computerChoice = "rock"; // computerChoice is assigned rock 
    } else if (computerChoice === paper){
        computerChoice = "paper"; // computerChoice is assigned paper
    } else if (computerChoice === scissors){
        computerChoice = "scissors"; // computerChoice is assigned scissors
    }

    return computerChoice; // computerChoice's string value is returned
}

console.log(getComputerChoice()); // returns computerChoice into the console
