function getComputerChoice(){
    
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    // computerChoice is assigned a randomly generated number between 1 and 10
    while (randomNumber != 1 && randomNumber != 2 && randomNumber != 3){
    // this ensures the number generated is between 1 and 3
        randomNumber = Math.floor((Math.random() * 10) + 1);
    }

    if (randomNumber === 1){
        computerChoice = "rock"; // computerChoice is assigned rock 
    } else if (randomNumber === 2){
        computerChoice = "paper"; // computerChoice is assigned paper
    } else if (randomNumber === 3){
        computerChoice = "scissors"; // computerChoice is assigned scissors
    }

    return computerChoice; // computerChoice's string value is returned
}

console.log(getComputerChoice()); // returns computerChoice into the console
