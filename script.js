let choices = ["rock", "paper", "scissors"];
let result;
let computerScore = 0;
let playerScore = 0;
let battles = 0;
let computerSelection;
let playerSelection;


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice(choices);

    playRound(computerSelection, playerSelection);

    check();
  });
});


function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    result = "Tie."
  }

  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    result = computerSelection + " beats " + playerSelection + "! You lose!";
    computerScore++;
  }

  else {
    result = playerSelection + " beats " + computerSelection + "! You win!";
    playerScore++;
  }

  battles++;

  const round = document.querySelector('#container');
  round.innerHTML = result;

  const cScore = document.querySelector('#computerScore');
  cScore.innerHTML = "Computer: " + computerScore;

  const pScore = document.querySelector('#playerScore');
  pScore.innerHTML = "You: " + playerScore;

  const battleNum = document.querySelector('#battles');
  battleNum.innerHTML = "Battles: " + battles;

}


function check() {

  let msg = " ";

  if (playerScore === 5) {
    msg = "You Win!";
    computerScore = 0;
    playerScore = 0;
    battles = 0;
  }

  else if (computerScore === 5) {
    msg = "You Lose!";
    computerScore = 0;
    playerScore = 0;
    battles = 0;

  }

  else {
    msg = "Pick one";
  }

  const winLose = document.querySelector('#winLose');
  winLose.innerHTML = msg;

};

