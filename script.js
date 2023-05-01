function getComputerChoice(){
  return choices[Math.floor(Math.random()*3)];
}


function userChoiceTest(userChoice) {
  while (!choices.includes(userChoice)){
    console.log('not a valid selection')
    userChoice = prompt("pick rock, paper, or scissors");
    userChoice = userChoice.toLowerCase()
  }
  return userChoice;
}

function play(player, computer){
  if((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")){
    return true;
  }
  return false;
}

function game(){
  let score = 0;
  for(let i = 0; i<5; i++){
    let userChoice = prompt("pick rock, paper, or scissors"); // do i need this?
    userChoice = userChoice.toLowerCase();
    userChoiceTest(userChoice);
    let computerChoice = getComputerChoice()
    if(play(userChoice, computerChoice)){
      console.log(`You Win! ${userChoice} beats ${computerChoice}`);
      score ++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    }
  }
  return score;
}



let choices = ['rock', 'paper', 'scissors'];
let scoreFinal = game()
console.log(scoreFinal);
// show on html figure it out later
// document.getElementById("result").innerHTML = userChoice;


;

