//Making of UI
const body = document.querySelector('body');
const buttonScissors = document.createElement('button');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonRestart = document.createElement('button');

const mainContainer = document.createElement('div');
const buttonContainer = document.createElement('div');
const displayContainer = document.createElement('div');

const roundMessage = document.createElement('h4');

const playerPtsWrapper = document.createElement('div');
const playerPtsHeading = document.createElement('h3');
const playerPtsResult = document.createElement('p');

const computerPtsWrapper = document.createElement('div');
const computerPtsHeading = document.createElement('h3');
const computerPtsResult = document.createElement('p');

const winnerMessage = document.createElement('h3');

body.style = 'display:flex; justify-content: center; margin-top:100px';

//Scissors btn
buttonScissors.textContent = 'Scissors';
buttonScissors.setAttribute('id', 'scissors');

//rock btn
buttonRock.textContent = 'Rock';
buttonRock.setAttribute('id', 'rock');

//paper btn
buttonPaper.textContent = 'Paper';
buttonPaper.setAttribute('id', 'paper');

//Restart btn
buttonRestart.textContent = 'Restart';
buttonRestart.setAttribute('id', 'restart');

//button container
buttonContainer.style =
  'background: pink; border-radius: 10px; width: max-content; height: auto; display: flex; gap: 20px; padding: 20px; flex-direction: column';

//player wraper
playerPtsHeading.textContent = 'Player Pts:';
playerPtsResult.setAttribute('id', 'player_pts');
playerPtsResult.textContent = '0';

playerPtsWrapper.appendChild(playerPtsHeading);
playerPtsWrapper.appendChild(playerPtsResult);

//computer wraper
computerPtsHeading.textContent = 'Computer Pts:';
computerPtsResult.setAttribute('id', 'computer_pts');
computerPtsResult.textContent = '0';

computerPtsWrapper.appendChild(computerPtsHeading);
computerPtsWrapper.appendChild(computerPtsResult);

//display container
displayContainer.style =
  'background:#ccc; color:black; border: 1px dotted black; border-radius: 10px; padding: 10px; display:flex; width: 150px; justify-content:center; align-items: center; text-align: center';

displayContainer.appendChild(playerPtsWrapper);
displayContainer.appendChild(computerPtsWrapper);

//round message
roundMessage.textContent =
  'Welcome player pick one and play! First who gets 5 pts wins!';
roundMessage.setAttribute('id', 'round_message');
roundMessage.style = 'text-align: center';

//Main container
mainContainer.style =
  'border: solid 2px darkBlue; border-radius: 10px; width: 350px; height: auto; display: flex; gap: 20px; padding: 20px; justify-content:center; flex-wrap: wrap';

//Ading elements to DOCUMENT
buttonContainer.appendChild(buttonScissors);
buttonContainer.appendChild(buttonRock);
buttonContainer.appendChild(buttonPaper);

mainContainer.appendChild(buttonContainer);
mainContainer.appendChild(displayContainer);
mainContainer.appendChild(roundMessage);
mainContainer.appendChild(buttonRestart);

body.appendChild(mainContainer);

//LOGIC
const selectionButtons = document.querySelectorAll('button');
const winMessage = document.querySelector('#round_message');
const playerResult = document.getElementById('player_pts');
const computerResult = document.getElementById('computer_pts');
const restartBtn = document.getElementById('restart');

let playerPoints = 0;
let computerPoints = 0;

selectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(computerPlay(), button.id);

    if (playerPoints === 5) {
      alert('Player Wins the match!');
      resetGame();
      winMessage.style.color = 'black';
      winMessage.innerText = 'One more time ? First who gets 5 pts wins!';
    }
    if (computerPoints === 5) {
      alert('Computer Wins the match!');
      resetGame();
      winMessage.style.color = 'black';
      winMessage.innerText = 'One more time ? First who gets 5 pts wins!';
    }
  });
});

restartBtn.addEventListener('click', () => {
  resetGame();
  winMessage.style.color = 'black';
  winMessage.innerText =
    'Welcome player pick one and play! First who gets 5 pts wins!';
});

//reset game handler
function resetGame() {
  computerPoints = 0;
  playerPoints = 0;
  computerResult.innerText = `${computerPoints}`;
  playerResult.innerText = `${playerPoints}`;
}

//Computer decision function
function computerPlay() {
  let sign = '';
  let key = 0;
  key = Math.floor(Math.random() * 3) + 1;

  switch (key) {
    case 1:
      sign = 'rock';
      break;
    case 2:
      sign = 'paper';
      break;

    default:
      sign = 'scissors';
      break;
  }
  return sign;
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    winMessage.style.color = '#8E8A04';
    winMessage.innerText = `Its a tie! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} and ${computerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    winMessage.style.color = 'green';
    winMessage.innerText = `You win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} beats ${computerSelection}`;
    playerPoints++;
    playerResult.innerText = `${playerPoints}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    winMessage.style.color = 'red';
    winMessage.innerText = `You Loose! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} looses to ${computerSelection}`;
    computerPoints++;
    computerResult.innerText = `${computerPoints}`;
  }
}
