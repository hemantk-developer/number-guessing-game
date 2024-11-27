let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

//relode the page

const newGameBegin = () => {
  window.location.reload();
};

//start new game

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//main logic of our game
const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("gusses").innerHTML = userGuess;

  // checking the value low or high

  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High &#128517;";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is low &#128535";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "It's Correct &#128536";
      userNumberUpdate.value = "";
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Losse!! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Losse!! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = `It's Correct &#128536`;
      userNumberUpdate.value = "";
      startNewGame();
    }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  maxGuess = 5;
  startGame();
};
