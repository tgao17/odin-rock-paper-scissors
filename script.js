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

function play(player, computer){``
  if((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")){
    currentScore.textContent ++;
    yourScore++;
    return `You Win! ${player} beats ${computer}`;
  } else if (player === computer){
    return `Tie!`
  }
  pcScore ++;
  currentComputerScore.textContent ++;
  return `You Lose! ${computer} beats ${player}`;;
}

// event listeners for ui
const choiceButtons = document.querySelectorAll('.btnBlocks button');
choiceButtons.forEach((item) =>{
  item.addEventListener('mouseover', () =>{
    item.classList.add();
  });
  item.addEventListener('mouseout', () =>{
    item.classList.remove();
  })
})

function clickedRound(input){
  let computerChoice = getComputerChoice()
  let results = play(input, computerChoice);
  roundResultContent.textContent = results;
  roundResult.appendChild(roundResultContent);
  checkScore(); // sees how scores are doing
}

function checkScore(){
  if (yourScore === 5 || pcScore ===5){
    if (yourScore === 5){
      winnerContext.textContent = 'you WIN!';
    } else {
      winnerContext.textContent = 'you LOSE :(';
    }
    winner.appendChild(winnerContext);
  }
}

// choices event listeners
const rock = document.getElementById('rock');
rock.addEventListener('click', ()=>{
  clickedRound('rock')   //cannot invoke the callback right away need to do it after evenlistener is invoked, else the function will run right away
});

const paper = document.getElementById('paper');
paper.addEventListener('click', ()=>{
  clickedRound('paper')
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', ()=>{
  clickedRound('scissors')
});
// can write a function to make this not verbose


// MAIN SPACE
let choices = ['rock', 'paper', 'scissors'];

//scores
const currentScore = document.querySelector('#currentScore');
const currentComputerScore = document.querySelector('#currentComputerScore');

//results
const roundResult = document.querySelector('#result');
const roundResultContent = document.createElement('h3');

//winner
const winner = document.querySelector('#winner');
const winnerContext = document.createElement('h1');
// const currentScoreContent = document.createElement('h3');
let yourScore = 0;
let pcScore = 0;
currentScore.textContent = 0;
currentComputerScore.textContent = 0;