function getComputerChoice() {
    const choices = Math.floor(Math.random() * 3); 
     switch(choices) {
              case 0:
                return 'rock';
              case 1:
                return 'paper';
              case 2:
                return 'scissors';
    }
}

function getHumanChoice(){
  let humanChoice = prompt("Enter your choice: ").toLowerCase();
  return humanChoice;
}


let humanScore =0;
let computerScore =0;


function playRound(humanChoice,computerChoice){
   
    if(humanChoice === computerChoice){
        console.log("it's a tie!")
        console.log(`Computer Score: ${computerScore}`)
        console.log(`Human Score: ${humanScore}`)
        
    }
    
    else if((humanChoice==="rock" &&  computerChoice==="scissors")|| (humanChoice ==="paper" && computerChoice==="rock") || (humanChoice ==="scissors" && computerChoice==="paper")){
        console.log("You Won the Round!!")
        humanScore++;
        console.log(`Computer Score: ${computerScore}`)
        console.log(`Human Score: ${humanScore}`)
        
    }
    else{
        console.log("You lost the Round!!");
        computerScore++;
        console.log(`Computer Score: ${computerScore}`)
        console.log(`Human Score: ${humanScore}`)
        
    }
}


function playGame(){

    
    for(let i =1; i<=5;i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);

        
   }

   
   if(humanScore>computerScore){
    console.log("You won the game!!") ;
    
  }
  
  else if(humanScore==computerScore){
    console.log("You tied!");
  }
   else{
    console.log("you lost the game!!");
}
   

}
console.log(`Computer Score: ${computerScore}`)
console.log(`Human Score: ${computerScore}`)
