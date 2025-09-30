//calling elements
const squareX = document.querySelector(".box-x");
const squareO = document.querySelector(".box-o");
const modal = document.querySelector(".modal");
const choices = document.querySelector(".choice");
const gameSquares = document.querySelectorAll(".square");
let currentTurn = squareX;
let gameOver = false;
let boardStatus = ["", "", "", "", "", "", "", "", ""];
let playerSymbol;
let pcSymbol;

//gameplay
function startGame() {
  for (let i = 0; i < gameSquares.length; i++) {
    let clickSquare = gameSquares[i];
    clickSquare.onclick = playGame;
  }
}

//adding click to player choice
squareX.addEventListener("click", function () {
  playerSymbol = "x";
  pcSymbol = "o";
  modal.style.display = "none";
  startGame();
});
squareO.addEventListener("click", function () {
  pcSymbol = "x";
  playerSymbol = "o";
  modal.style.display = "none";
  startGame();
});

//gameplay
function playGame() {}
