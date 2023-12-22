//generate a random number
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`Random Number : ${randomNumber}`);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low_high = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    vailidateGuess(guess);
  });
}

// to validate the input number
function vailidateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over!! Random number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// to check the number with input
function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage('You guessed it right!');
    endGame();
  } else if (randomNumber < guess) {
    displayMessage('Number is too high.');
  } else if (randomNumber > guess) {
    displayMessage('Number is too low.');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesses.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}
function displayMessage(message) {
  low_high.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = "<h2 id='newGame'> Start New Game!</h2>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(`New Random Number is : ${randomNumber}`);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    low_high.innerHTML = '';
    playGame = true;
  });
}
