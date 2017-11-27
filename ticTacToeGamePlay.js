var count = 0;

var gameOver = false;

var Board = function(){
  var grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  this.getGrid = function(){
    return grid;
  };

  var hasHorizontalWin = function(player) {
    for(var row = 0; row < grid.length; row++) {
      if(grid[row][0] === player && grid[row][1] === player && grid[row][2] === player){
        return true;
      }
    }
  };

  var hasVerticalWin = function(player) {
    for(var column = 0; column < grid.length; column++) {
      if(grid[0][column] === player && grid[1][column] === player && grid[2][column] === player){
        return true;
      }
    }
  };

  var hasDiagonalWin = function(player) {
    if(grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
      return true;
    } else if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
      return true;
    }
  };

  var hasWin = function(player){
    return hasHorizontalWin(player) || hasVerticalWin(player) || hasDiagonalWin(player);
  };

  this.winner = function() {
    if(hasWin("X")) {
      return "X";
    } else if(hasWin("O")) {
      return "O";
    } else {
      return false;
    }
  };

  this.setCellValue = function(row, column) {
    if(count % 2 === 0) {
      grid[row][column] = "O"
    } else {
      grid[row][column] = "X";
    }
    count++
  };
};


var showCellValue = function(row, column, value) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  if(value === "X") {
    cell.querySelector(".X").classList.remove("hiddenX");
  } else if(value === "O") {
    cell.querySelector(".O").classList.remove("hiddenO");
  }
};

var drawBoard = function(board) {
  for(var row = 0; row < board.getGrid().length; row++) {
    for(var column = 0; column < board.getGrid()[row].length; column++) {
      showCellValue(row, column, board.getGrid()[row][column]);
    }
  }
};

var showWinner = function(player){
  var winnerMessage = document.querySelector(".winner-message");
  winnerMessage.textContent = player + " WINS!";
  winnerMessage.classList.remove("hidden");
};

var attachCellClickHandler = function(row, column, board, callback) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  cell.addEventListener("click", function() {
    callback(row, column, board);
  });
};

var attachBoardClickHandlers = function(board, callback) {
  for(var row = 0; row < board.getGrid().length; row++) {
    for(var column = 0; column < board.getGrid()[row].length; column++) {
      attachCellClickHandler(row, column, board, callback);
    }
  }
};



var checkForWinner = function(board) {
  var player = board.winner();
  if(player) {
    showWinner(player);
    gameOver = true;
  }
};




var makeMove = function(row, column, board) {
  if(gameOver === false && board.getGrid()[row][column] === "") {
    board.setCellValue(row, column);
    drawBoard(board);
    checkForWinner(board);
  }
};

var board = new Board();

window.onload = function() {
  attachBoardClickHandlers(board, makeMove);
};
