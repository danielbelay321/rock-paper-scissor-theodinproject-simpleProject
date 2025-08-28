console.log('welcome to The game');
console.log("---------------");

userScore= 0;
computerScore=0;

function play(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }

    else if(humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win!");
        userScore += 1;

    }

    else if(computerChoice == "rock" && humanChoice == "scissor") {
        console.log("You lose!");
        computerScore += 1;
    }

    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        userScore += 1;

    }

    else if(humanChoice == "paper" && computerChoice == "scissor") {
        console.log("You lose!");
        computerScore += 1;

    }

    else if(computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose!");
        computerScore += 1;
    }

}


function humanChoice(){

    let vow = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    console.log("Human choice is: "+ vow);
    return vow;

}

let choice = ["rock", "paper", "scissor"];

function computerChoice(){
    let index = Math.floor(Math.random() * choice.length);
    console.log("computer choice is " +choice[index]);
    return choice[index];
}

humanChoice = humanChoice();
computerChoice = computerChoice();


play(humanChoice, computerChoice);

console.log("User Score: " + userScore);
console.log("Computer Score: " + computerScore);
