
// Initialise choices array: r, p, s, representingrock, paper, scissor
let choices = ["r", "p", "s"];
// prompt user to enter r, p, s.
let userChoice = prompt("Enter your choice of r for Rock, p for  Paper: p and s for Scissor ");

// computer chooses a random value in the list of r, p, s.
// Returns a random integer from 1 to 3:
let randomIndex = Math.floor(Math.random() * choices.length) + 1;
compChoice = choices[randomIndex]
// assign compChoice to r, p, s depending on the random number
switch(compChoice) {
    case 1:
        compChoice = "r";
        console.log(compChoice);
        break;
    case 2:
        compChoice = "p";
        console.log(compChoice);
        break;
    case 3:
        compChoice = "s";
        console.log(compChoice);
        break;
    default: 
        alert("That was an error, you can only choose r, p, s");
}
// We determine if the user wins or not.
    // initialise wins, losses, ties variables to cero.
    let wins = 0;
    let losses = 0;
    let ties = 0;

    // if user picks rock and if computer picks scissors, then user wins.
    if (userChoice === "r" && compChoice === "s") {
        alert("You win");
        wins = wins + 1; //same as wins++
    }
    // if user picks rock and if computer picks paper, then user loses.
    if (userChoice === "r" && compChoice === "p") {
        alert("You lose");
        losses = losses + 1;
    }
    // if user picks scissor and if computer picks rocks, then user loses.
    if (userChoice === "s" && compChoice === "r") {
        alert("You lose");
        losses = losses + 1;
    }
    // if user picks scissor and if computer picks paper, then user wins.
    if (userChoice === "s" && compChoice === "p") {
        alert("You win");
        wins = wins + 1;
    }
    // if user picks paper and if computer picks rocks, then user wins.
    if (userChoice === "p" && compChoice === "r") {
        alert("You win");
        wins = wins + 1;
    }
    // if user picks paper and if computer picks scissors, then user loses.
    if (userChoice === "p" && compChoice === "s") {
        alert("You lose");
        losses = losses + 1;
    }
    // if user picks the same as computer, then they tie.
    if (userChoice === compChoice) {
        alert("It is a tie");
        ties = ties + 1;
    }
// we then add to their score.
    // if user wins, then we add one to their wins.
    // if user loses, then we add one to their losses.
