var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var count = 0;

var gameOver = false;

var setCellValue = function(row, column, value) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  if(value === "X") {
    cell.querySelector(".X").classList.remove("hiddenX");
  } else if(value === "O") {
    cell.querySelector(".O").classList.remove("hiddenO");
  }
};

var drawBoard = function(board) {
  for(var row = 0; row < board.length; row++) {
    for(var column = 0; column < board[row].length; column++) {
      setCellValue(row, column, board[row][column]);
    }
  }
};

var hasHorizontalWin = function(board, player) {
  for(var row = 0; row < board.length; row++) {
    if(board[row][0] === player && board[row][1] === player && board[row][2] === player){
      return true;
    }
  }
};

var hasVerticalWin = function(board, player) {
  for(var column = 0; column < board.length; column++) {
    if(board[0][column] === player && board[1][column] === player && board[2][column] === player){
      return true;
    }
  }
};

var hasDiagonalWin = function(board, player) {
  if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
};

var hasWin = function(board, player){
  if(hasHorizontalWin(board, player) || hasVerticalWin(board, player) || hasDiagonalWin(board, player)) {
    alert(player + " wins!");
    gameOver = true;
  }
};

var winner = function(board){
  hasWin(board, "X");
  hasWin(board, "O");
};

var attachCellClickHandler = function(row, column, board) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  cell.addEventListener("click", function(){
    if(gameOver === false && board[row][column] === "") {
      if(count % 2 === 0) {
        board[row][column] = "O"
      } else {
        board[row][column] = "X";
      }
      count++;
      drawBoard(board);
      winner(board);
    }
  });
};

var attachBoardClickHandlers = function(board) {
  for(var row = 0; row < board.length; row++) {
    for(var column = 0; column < board[row].length; column++) {
      attachCellClickHandler(row, column, board);
    }
  }
};

window.onload = function() {
  attachBoardClickHandlers(board);
};
