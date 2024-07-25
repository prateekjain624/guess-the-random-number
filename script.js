let randomNumber = Math.floor(Math.random() * 100 + 1);

const guessInput = document.getElementById("guessField");
const submitBtn = document.getElementById("subt");
const prevGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultParas");

const p = document.createElement("p");

let userGuess = 1;
let lastGuess = [];

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guessedNumber = parseInt(guessInput.value);
    validateGuess(guessedNumber);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess == "") {
    alert("please enter a valid number");
    guessInput.value = "";
  } else if (guess < 1) {
    alert("please enter a number more than 1.");
    guessInput.value = "";
  } else if (guess > 100) {
    alert("please enter a number less than 100.");
    guessInput.value = "";
  } else {
    lastGuess.push(guess);
    if (userGuess === 11) {
      displayMessage(`Game over the Random Number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("you guessed a correct number");
  } else if (guess < randomNumber) {
    displayMessage("guessed Number is TOOO low");
  } else if (guess > randomNumber) {
    displayMessage("guessed Number is TOOO High");
  }
}

function displayMessage(message) {
  guessInput.value = "";
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
  prevGuess.innerHTML = `${lastGuess}`;
  userGuess++;
  remainingGuess.innerHTML = `${10 - userGuess}`;
}

function endGame() {
  guessInput.value = "";
  guessInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<span id="newGame">Start new Game</span>`;
  result.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const newgame = document.querySelector("#newGame");
  newgame.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    lastGuess = [];
    prevGuess.innerHTML = "";
    userGuess = 1;
    remainingGuess.innerHTML = `${10 - userGuess}`;
    guessInput.removeAttribute("disabled");
    result.removeChild(p);
    playGame = true;
  });
}
