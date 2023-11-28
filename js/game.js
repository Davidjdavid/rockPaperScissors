
// This function gets a random number, then returns a number in the format of rock, paper, or scissors
function getComputerChoice() {
    let choice = getRandomInt(3);
    let computerPick = "Rock";
    switch(choice) {
        case 0 :
            computerPick = "Rock";
            console.log(computerPick);
            return computerPick;
        case 1 :
            computerPick = "Paper";
            console.log(computerPick);
            return computerPick;
        case 2 :
            computerPick = "Scissors";
            console.log(computerPick);
            return computerPick;
    }
}

// Gets the player choice based on which button the player presses
function getPlayerChoice() {

}

// Function to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }