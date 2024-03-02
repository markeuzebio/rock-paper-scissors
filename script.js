let player_count;
let computer_count;

player_count = 0;
computer_count = 0;

const body = document.querySelector('body');
const div_result = document.createElement('div');
const btn_rock = document.createElement('button');
const btn_paper = document.createElement('button');
const btn_scissors = document.createElement('button');

btn_rock.textContent = 'Rock';
btn_paper.textContent = 'Paper';
btn_scissors.textContent = 'Scissors';

btn_rock.addEventListener('click', () => playSingleRound('rock', getComputerChoice()));
btn_paper.addEventListener('click', () => playSingleRound('paper', getComputerChoice()));
btn_scissors.addEventListener('click', () => playSingleRound('scissors', getComputerChoice()));

body.appendChild(btn_rock);
body.appendChild(btn_paper);
body.appendChild(btn_scissors);
body.appendChild(div_result);

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
    if(player_count == 5 || computer_count == 5)
        return;

    let return_value;

    player_selection = player_selection.toLowerCase();

    if(player_selection == "rock") {
        if(computer_selection == "scissors") {
            document.querySelector('div').innerHTML += "<p>You Win! " + player_selection + " beats " + computer_selection + "</p>";
            player_count++;
            return_value = 0;
        }

        else if(computer_selection == "paper") {
            document.querySelector('div').innerHTML += "<p>You Lose! " + computer_selection + " beats " + player_selection + "</p>";
            computer_count++;
            return_value = 1;
        }

        else {
            document.querySelector('div').innerHTML += "<p>A Tie happened!</p>";
            return_value = 2;
        }

    }

    else if(player_selection == "paper") {
        if(computer_selection == "rock") {
            document.querySelector('div').innerHTML += "<p>You Win! " + player_selection + " beats " + computer_selection + "</p>";
            player_count++;
            return_value = 0;
        }

        else if(computer_selection == "scissors") {
            document.querySelector('div').innerHTML += "<p>You Lose! " + computer_selection + " beats " + player_selection + "</p>";
            computer_count++;
            return_value = 1
        }

        else {
            document.querySelector('div').innerHTML += "<p>A Tie happened!</p>";
            return_value = 2;
        }
    }

    else {
        if(computer_selection == "paper") {
            document.querySelector('div').innerHTML += "<p>You Win! " + player_selection + " beats " + computer_selection + "</p>";
            player_count++;
            return_value = 0;
        }

        else if(computer_selection == "rock") {
            document.querySelector('div').innerHTML += "<p>You Lose! " + computer_selection + " beats " + player_selection + "</p>";
            computer_count++;
            return_value = 1;
        }

        else {
            document.querySelector('div').innerHTML += "<p>A Tie happened!</p>";
            return_value = 2;
        }
    }

    if(player_count == 5 || computer_count == 5) {
        if(player_count > computer_count)
            document.querySelector('div').innerHTML += "<p>You Won!</p>";
        else if(computer_count > player_count)
            document.querySelector('div').innerHTML += "<p>You Lose!</p>";
    }

    return return_value;
}