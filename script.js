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

// PLAYSINGLEROUND
function playSingleRound(player_selection, computer_selection) {
    // Parse the player's parameter to lowercase and add it in the same parameter
    player_selection = player_selection.toLowerCase();

    // If player chose 'rock'
    if(player_selection == "rock") {
        // and computer chose 'scissors', show "You Win! Rock beats Scissors"
        if(computer_selection == "scissors")
            console.log("You Win! Rock beats Scissors");

        // and computer chose 'paper', show "You Lose! Paper beats Rock"
        else if(computer_selection == "paper")
            console.log("You Lose! Paper beats Rock");

        // and computer chose 'rock', show "A Tie Happened! No one Won"
        else if(computer_selection == "rock")
            console.log("A Tie Happened! No one Won");

    }

    // If player chose 'paper'
    else if(player_selection == "paper") {
        // and computer chose 'rock', show "You Win! Paper beats Rock"
        if(computer_selection == "rock")
            console.log("You Win! Paper beats Rock");

        // and computer chose 'scissors', show "You Lose! Scissors beats Paper"|
        else if(computer_selection == "scissors")
            console.log("You Lose! Scissors beats Paper");

        // and computer chose 'paper', show "A Tie Happened! No one Won"
        else if(computer_selection == "paper")
            console.log("A Tie Happened! No one Won");
    }

    // If player chose 'scissors'
    else if(player_selection == "scissors") {
        // and computer chose 'rock', show "You Lose! Rock beats Scissors"
        if(computer_selection == "rock")
            console.log("You Lose! Rock beats Scissors");

        // and computer chose 'paper', show "You Win! Scissors beats Paper"
        else if(computer_selection == "paper")
            console.log("You Win! Scissors beats Paper");

        // and computer chose 'scissors', show "A Tie Happened! No one Won"
        else if(computer_selection == "scissors")
            console.log("A Tie Happened! No one Won");
    }
}