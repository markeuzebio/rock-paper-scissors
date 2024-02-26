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
/*
    Returns 0 if the player wins the turn.
    Returns 1 if the computer wins the turn.
    Returns 2 if there is a tie.
*/
function playSingleRound(player_selection, computer_selection) {
    // Parse the player's parameter to lowercase and add it in the same parameter
    player_selection = player_selection.toLowerCase();

    // If player chose 'rock'
    if(player_selection == "rock") {
        // and computer chose 'scissors', show "You Win! Rock beats Scissors"
        if(computer_selection == "scissors")
            return 0;

        // and computer chose 'paper', show "You Lose! Paper beats Rock"
        else if(computer_selection == "paper")
            return 1;

        // and computer chose 'rock', show "A Tie Happened! No one Won"
        else if(computer_selection == "rock")
            return 2;

    }

    // If player chose 'paper'
    else if(player_selection == "paper") {
        // and computer chose 'rock', show "You Win! Paper beats Rock"
        if(computer_selection == "rock")
            return 0;

        // and computer chose 'scissors', show "You Lose! Scissors beats Paper"|
        else if(computer_selection == "scissors")
            return 1;

        // and computer chose 'paper', show "A Tie Happened! No one Won"
        else if(computer_selection == "paper")
            return 2;
    }

    // If player chose 'scissors'
    else if(player_selection == "scissors") {
        // and computer chose 'paper', show "You Win! Scissors beats Paper"
        if(computer_selection == "paper")
            return 0;

        // and computer chose 'rock', show "You Lose! Rock beats Scissors"
        else if(computer_selection == "rock")
            return 1;

        // and computer chose 'scissors', show "A Tie Happened! No one Won"
        else if(computer_selection == "scissors")
            return 2;
    }
}

// PLAYGAME
function playGame() {
    // Create a variable player_selection to store the user's choice
    let player_selection;
    // Create a variable computer_selection to store the computer's choice
    let computer_selection;
    // Create a variable player_count to count the player's points
    let player_count;
    // Create a variable computer_count to count the computer's points
    let computer_count;
    // Create a variable result to store the round's result
    let result;
    // Create a variable i to use as a counter.
    
    // Initialize player_count with value 0.
    player_count = 0;
    // Initialize computer_count with value 0.
    computer_count = 0;

    // Initialize i with value 1.
    // While i is less than or equal to 5
    for(let i = 1 ; i <= 5 ; i++) {
        // Assign the value returned by prompt("Rock, Paper or Scissors?") to player_selection
        player_selection = prompt("Rock, Paper or Scissors?");
        // Assign the value returned by getComputerChoice() to computer_selection
        computer_selection = getComputerChoice();
        // Call playSingleRound function passing player_selection and computer_selection as arguments and store its result in 'result' variable
        result = playSingleRound(player_selection, computer_selection);
        // If result variable is 0, add player_count variable by 1 and print ("You Win! " + player_selection + " beats " + computer_selection) on console
        if(result == 0) {
            console.log("You Win! " + player_selection + " beats " + computer_selection);
            player_count++;
        }
        // Else if result variable is 1, add computer_count variable by 1 and print ("You Lose! " + computer_selection + " beats " + player_selection) on console
        else if(result == 1) {
            console.log("You Lose! " + computer_selection + " beats " + player_selection);
            computer_count++;
        }
        // Else if result variable is 2, print ("A Tie happened!")
        else if(result == 2) {
            console.log("A Tie happened!");
        }
    }
        
    // If player_count is higher than computer_count, print ("You won the game!")
    if(player_count > computer_count)
        console.log("You won the game!");
    // Else if player_count is lower than computer_count, print ("You lost the game!")
    else if(player_count < computer_count)
        console.log("You lost the game!");
    // Else, print ("There was a tie!")
    else if(player_count == computer_count)
        console.log("It was a tie!");
}