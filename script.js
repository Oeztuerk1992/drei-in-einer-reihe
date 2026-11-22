let mainBoard = document.getElementById("board");
let board = new Array(16).fill("");
console.log(mainBoard);

function renderBoard() {
  mainBoard.innerHTML = "";
  for (let field = 0; field < board.length; field++) {
    mainBoard.innerHTML += `<div class= "cell" onclick="handleClick(${field})">${board[field]}`;
  }
}

renderBoard();
