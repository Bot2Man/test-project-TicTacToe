//calling elements
const squareX = document.querySelector(".box-x");
const squareO = document.querySelector(".box-o");
const modal = document.querySelector(".modal");
const choices = document.querySelector(".choice");
const gameSquares = document.querySelectorAll(".square");
let currentTurn;
let gameOver = false;
let boardStatus = ["", "", "", "", "", "", "", "", ""];
let playerSymbol;
let pcSymbol;
let isProcessing = false;
let svgX = ` <svg width="100" height="100" viewBox="0 0 100 100">
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke="black"
                stroke-width="10"
              />
              <line
                x1="90"
                y1="10"
                x2="10"
                y2="90"
                stroke="black"
                stroke-width="10"
              />
            </svg>`;

let svgO = ` <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                stroke-width="10"
                fill="none"
              />
            </svg>`;

//gameplay
function startGame() {
  for (let i = 0; i < gameSquares.length; i++) {
    let clickSquare = gameSquares[i];
    clickSquare.onclick = function () {
      playGame(i);
    };
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
function playGame(i) {
  if (isProcessing === false) {
    if (currentTurn === playerSymbol) {
      if (gameSquares[i].innerHTML === "") {
        boardStatus[i] = playerSymbol;
        if (playerSymbol === "x") {
          gameSquares[i].innerHTML = svgX;
        } else {
          gameSquares[i].innerHTML = svgO;
        }
      } else {
        console.log("there is already a symbol");
      }
      currentTurn = pcSymbol;
      isProcessing = true;
      pcMove();
    } else {
      return;
    }
  } else {
    return;
  }
}

//pc player actions
function pcMove() {
  if (gameOver === false) {
    for (let i = 0; i < boardStatus.length; i++) {}
    isProcessing = false;
  } else {
    return;
  }
}
