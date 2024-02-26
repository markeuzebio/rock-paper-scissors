// GETCOMPUTERCHOICE
function getComputerChoice() {
    // Create a variable
    let computer_choice;

    // Generate a random value between 1 and 3 to be inserted in the variable
    computer_choice = Math.floor(Math.random() * 3 + 1);
    
    // If the variable has value 1, return 'rock'.
    if(computer_choice == 1)
        return "rock";
    // If the variable has value 2, return 'rock'.
    else if(computer_choice == 2)
        return "paper";
    // Otherwise, return 'scissors'
    else
        return "scissors";
}