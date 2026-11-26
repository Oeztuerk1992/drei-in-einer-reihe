let currentPlayer = "x";
let mainBoard = document.getElementById("board");
let statusText = document.getElementById("status");
let board = new Array(16).fill("");
let gameOver = false;

let lines = [
  //horizontal lines
  [0, 1, 2],
  [1, 2, 3],
  [4, 5, 6],
  [5, 6, 7],
  [8, 9, 10],
  [9, 10, 11],
  [12, 13, 14],
  [13, 14, 15],
  //vertical lines
  [0, 4, 8],
  [4, 8, 12],
  [1, 5, 9],
  [5, 9, 13],
  [2, 6, 10],
  [6, 10, 14],
  [3, 7, 11],
  [7, 11, 15],
  //diagonal lines ↘
  [4, 9, 14],
  [0, 5, 10],
  [5, 10, 15],
  [1, 6, 11],
  //diagonal lines ↙
  [7, 10, 13],
  [3, 6, 9],
  [6, 9, 12],
  [2, 5, 8],
];

function renderBoard() {
  mainBoard.innerHTML = "";
  for (let field = 0; field < board.length; field++) {
    mainBoard.innerHTML += `<div class="cell" onclick="handleClick(${field})">${board[field]}</div>`;
  }
}

renderBoard();

function handleClick(index) {
  if (gameOver || board[index] !== "") {
    return;
  }
  board[index] = currentPlayer;
  renderBoard();
  if (hasThreeInARow()) {
    gameOver = true;
    showLoser();
    return;
  }
  if (!board.includes("")) {
    gameOver = true;
    statusText.textContent = "Unentschieden! Alle Felder sind voll.";
    return;
  }
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }

  updateStatus();
}

function updateStatus() {
  if (currentPlayer === "x") {
    statusText.textContent = "Kreuz ist dran";
  } else {
    statusText.textContent = "Kreis ist dran";
  }
}

function hasThreeInARow() {
  for (let indexLine = 0; indexLine < lines.length; indexLine++) {
    let first = lines[indexLine][0];
    let second = lines[indexLine][1];
    let third = lines[indexLine][2];
    if (
      board[first] === currentPlayer &&
      board[second] === currentPlayer &&
      board[third] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function showLoser() {
  if (currentPlayer === "x") {
    statusText.textContent =
      "Kreuz hat drei in einer Reihe - Kreis gewinnt das Spiel!";
  } else {
    statusText.textContent =
      "Kreis hat drei in einer Reihe - Kreuz gewinnt das Spiel!";
  }
}

function restartGame() {
  board = new Array(16).fill("");
  currentPlayer = "x";
  gameOver = false;
  renderBoard();
  updateStatus();
}
