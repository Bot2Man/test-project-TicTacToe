// =========================
// 1. Selezione degli elementi HTML
// =========================
const squareX = document.querySelector(".box-x"); // Bottone per scegliere X
const squareO = document.querySelector(".box-o"); // Bottone per scegliere O
const modal = document.querySelector(".modal"); // Finestra modale di scelta simbolo
const choices = document.querySelector(".choice"); // (non usata al momento)
const gameSquares = document.querySelectorAll(".square"); // Tutte le celle del board

// =========================
// 2. Variabili di gioco
// =========================
let currentTurn; // Tiene traccia di chi deve giocare ora (player o PC)
let gameOver = false; // Flag per indicare se la partita è finita
let boardStatus = ["", "", "", "", "", "", "", "", ""]; // Stato attuale delle celle del board
let playerSymbol; // Simbolo scelto dal giocatore ("x" o "o")
let pcSymbol; // Simbolo del PC
let isProcessing = false; // Flag per bloccare il click del giocatore mentre il PC gioca

// =========================
// 3. SVG dei simboli
// =========================
let svgX = ` <svg width="100" height="100" viewBox="0 0 100 100">
              <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10"/>
              <line x1="90" y1="10" x2="10" y2="90" stroke="black" stroke-width="10"/>
            </svg>`;

let svgO = ` <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="10" fill="none"/>
            </svg>`;

// =========================
// 4. Funzione per iniziare il gioco
// =========================
function startGame() {
  // Aggiunge l'onclick a tutte le celle del board
  for (let i = 0; i < gameSquares.length; i++) {
    let clickSquare = gameSquares[i];
    clickSquare.onclick = function () {
      playGame(i); // Passa l'indice della cella cliccata
    };
  }
}

// =========================
// 5. Eventi di scelta del simbolo
// =========================
squareX.addEventListener("click", function () {
  playerSymbol = "x"; // Imposta simbolo giocatore
  pcSymbol = "o"; // Imposta simbolo PC
  modal.style.display = "none"; // Chiude la modale
  startGame(); // Abilita click sul board
});

squareO.addEventListener("click", function () {
  pcSymbol = "x"; // Imposta simbolo PC
  playerSymbol = "o"; // Imposta simbolo giocatore
  modal.style.display = "none"; // Chiude la modale
  startGame(); // Abilita click sul board
});

// =========================
// 6. Funzione per la mossa del giocatore
// =========================
function playGame(i) {
  if (isProcessing === false) {
    // Controlla se il giocatore può giocare
    if (currentTurn === playerSymbol) {
      // Verifica se è il turno del giocatore
      if (gameSquares[i].innerHTML === "") {
        // Controlla che la cella sia vuota
        boardStatus[i] = playerSymbol; // Aggiorna lo stato del board
        // Mostra il simbolo SVG nella cella
        if (playerSymbol === "x") {
          gameSquares[i].innerHTML = svgX;
        } else {
          gameSquares[i].innerHTML = svgO;
        }
      } else {
        console.log("there is already a symbol"); // Cell già occupata
      }
      currentTurn = pcSymbol; // Passa il turno al PC
      isProcessing = true; // Blocca ulteriori click del giocatore
      pcMove(); // Chiama la funzione del PC
    } else {
      return; // Se non è il turno del giocatore, non fare nulla
    }
  } else {
    return; // Se il PC sta processando, blocca il click
  }
}

// =========================
// 7. Funzione per la mossa del PC
// =========================
function pcMove() {
  let emptySquares = []; // Array per salvare le celle vuote
  if (gameOver === false) {
    // Se il gioco non è finito
    for (let i = 0; i < boardStatus.length; i++) {
      if (boardStatus[i] === "") {
        emptySquares.push(i); // Salva l'indice delle celle vuote
      }
    }
    let random = Math.floor(Math.random() * emptySquares.length); // Sceglie una cella casuale
    let randomIndex = emptySquares[random];
    // Inserisce l'SVG del PC nella cella scelta
    if (pcSymbol === "x") {
      gameSquares[randomIndex].innerHTML = svgX;
    } else {
      gameSquares[randomIndex].innerHTML = svgO;
    }
    boardStatus[randomIndex] = pcSymbol; // Aggiorna lo stato del board
    isProcessing = false; // Sblocca il click del giocatore
  } else {
    return; // Se il gioco è finito, non fare nulla
  }
}
