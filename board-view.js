var BoardView = function(){
  var self = this;
  
  var showCellValue = function(row, column, value) {
    var cell = document.querySelector(".cell-" + row + "-" + column);
    if(value === "X") {
      cell.querySelector(".X").classList.remove("hiddenX");
    } else if(value === "O") {
      cell.querySelector(".O").classList.remove("hiddenO");
    }
  };

  this.drawBoard = function(board) {
    for(var row = 0; row < board.getGrid().length; row++) {
      for(var column = 0; column < board.getGrid()[row].length; column++) {
        showCellValue(row, column, board.getGrid()[row][column]);
      }
    }
  };

  this.showWinner = function(player){
    var winnerMessage = document.querySelector(".winner-message");
    winnerMessage.textContent = player + " WINS!";
    winnerMessage.classList.remove("hidden");
  };

  var attachCellClickHandler = function(row, column, board, callback) {
    var cell = document.querySelector(".cell-" + row + "-" + column);
    cell.addEventListener("click", function() {
      callback(row, column, board, self);
    });
  };

  this.attachBoardClickHandlers = function(board, callback) {
    for(var row = 0; row < board.getGrid().length; row++) {
      for(var column = 0; column < board.getGrid()[row].length; column++) {
        attachCellClickHandler(row, column, board, callback);
      }
    }
  };
};
