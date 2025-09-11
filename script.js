//calling elements
const gameSquares = document.querySelectorAll(".square");

//adding click to squares
for (let i = 0; i < gameSquares.length; i++) {
  let clickSquare = gameSquares[i];
  clickSquare.onclick = playGame;
}

//gameplay
function playGame() {}
