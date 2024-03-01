/*
    Returns either rock, paper or scissors.
*/
function getComputerChoice() {
    let computer_choice;

    computer_choice = Math.floor(Math.random() * 3 + 1);
    
    if(computer_choice == 1)
        return "rock";
    else if(computer_choice == 2)
        return "paper";
    else
        return "scissors";
}

/*
    Returns 0 if the player wins the turn.
    Returns 1 if the computer wins the turn.
    Returns 2 if there is a tie.
*/
function playSingleRound(player_selection, computer_selection) {
    player_selection = player_selection.toLowerCase();

    if(player_selection == "rock") {
        if(computer_selection == "scissors")
            return 0;

        else if(computer_selection == "paper")
            return 1;

        else if(computer_selection == "rock")
            return 2;

    }

    else if(player_selection == "paper") {
        if(computer_selection == "rock")
            return 0;

        else if(computer_selection == "scissors")
            return 1;

        else if(computer_selection == "paper")
            return 2;
    }

    else if(player_selection == "scissors") {
        if(computer_selection == "paper")
            return 0;

        else if(computer_selection == "rock")
            return 1;

        else if(computer_selection == "scissors")
            return 2;
    }
}

function playGame() {
    let player_selection;
    let computer_selection;
    let player_count;
    let computer_count;
    let result;
    
    player_count = 0;
    computer_count = 0;

    for(let i = 1 ; i <= 5 ; i++) {
        player_selection = prompt("Rock, Paper or Scissors?");
        computer_selection = getComputerChoice();
        result = playSingleRound(player_selection, computer_selection);
        if(result == 0) {
            console.log("You Win! " + player_selection + " beats " + computer_selection);
            player_count++;
        }
        else if(result == 1) {
            console.log("You Lose! " + computer_selection + " beats " + player_selection);
            computer_count++;
        }
        else if(result == 2) {
            console.log("A Tie happened!");
        }
    }
        
    if(player_count > computer_count)
        console.log("You won the game!");
    else if(player_count < computer_count)
        console.log("You lost the game!");
    else if(player_count == computer_count)
        console.log("It was a tie!");
}