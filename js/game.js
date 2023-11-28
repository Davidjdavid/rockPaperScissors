let tally = 0;

// This function gets a random number, then returns a number in the format of rock, paper, or scissors
function getComputerChoice() {
    let choice = getRandomInt(3);
    let computerPick = "Rock";
    switch(choice) {
        case 0 :
            computerPick = "Rock";
            return computerPick;
        case 1 :
            computerPick = "Paper";
            return computerPick;
        case 2 :
            computerPick = "Scissors";
            return computerPick;
    }
}

// Gets the player choice based on which button the player presses
function getPlayerChoice(playerPick) {
    let computerPick = getComputerChoice();
    findWinner(computerPick, playerPick);
}

function findWinner(computerPick, playerPick) {
    document.getElementById("playPick").innerHTML = ("The player picked: " + playerPick);
    document.getElementById("computerPick").innerHTML = ("The computer picked: " + computerPick);
    if(computerPick === playerPick) {
        document.getElementById("outcome").innerHTML = ("Tie!");
    }
    if (
        (computerPick === "Rock" && playerPick === "Paper") || 
        (computerPick === "Paper" && playerPick === "Scissors") ||
        (computerPick === "Scissors" && playerPick === "Rock")  
        ) {
            document.getElementById("outcome").innerHTML = ("You won!");
            tally = tally +1;
            document.getElementById("tally").innerHTML = ("Wins: " + tally);


    }
    if (
        (computerPick === "Rock" && playerPick === "Scissors") || 
        (computerPick === "Paper" && playerPick === "Rock") ||
        (computerPick === "Scissors" && playerPick === "Paper")  
        ) {
            document.getElementById("outcome").innerHTML = ("You lost!");
        }
}

// Function to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }