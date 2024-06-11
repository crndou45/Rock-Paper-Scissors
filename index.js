function getComputerChoice() {
    const choices = Math.floor(Math.random() * 3); 
     switch(choices) {                                 //computer choice
              case 0:
                return 'rock';
              case 1:
                return 'paper';
              case 2:
                return 'scissors';
    }
}


//get all the buttons
const options = document.querySelectorAll(".options");

let pInput
// get button id when clicked
options.forEach((option)=>{
  option.addEventListener("click",function (){
     pInput = this.id;
  })
})

// set score initials as zero
let humanScore =0;
let computerScore =0;

//outcomes to html 
 let outcome = document.getElementById("outcome");

//Playing the Game

function playRound() {
  const humanChoice = pInput;
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
      outcome.innerHTML = "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      outcome.innerHTML = "You Won the Round!";
      humanScore++;
  } else {
      outcome.innerHTML = "You lost the Round!";
      computerScore++;
  }
   
}

document.getElementById("playBtn").addEventListener("click", playRound);
