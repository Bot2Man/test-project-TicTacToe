//calling elements
const squareX = document.querySelector(".box-x");
const squareO = document.querySelector(".box-o");
const modal = document.querySelector(".modal");
const choices = document.querySelector(".choice");
const gameSquares = document.querySelectorAll(".square");
let playerSymbol;
let pcSymbol;

//gameplay
function startGame(symbol) {
  for (let i = 0; i < choices.length; i++) {
    let chosen = choices[i];
  }
}

//adding click to player choice
squareX.addEventListener("click", function () {
  playerSymbol = "x";
  pcSymbol = "o";
  modal.style.display = "none";
});
squareO.addEventListener("click", function () {
  pcSymbol = "x";
  playerSymbol = "o";
  modal.style.display = "none";
});

//adding click to squares
for (let i = 0; i < gameSquares.length; i++) {
  let clickSquare = gameSquares[i];
  clickSquare.onclick = playGame;
}

//gameplay
function playGame() {}
