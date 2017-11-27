var count = 0;
var gameOver = false;

var checkForWinner = function(board, view) {
  var player = board.winner();
  if(player) {
    view.showWinner(player);
    gameOver = true;
  }
};

var makeMove = function(row, column, board, view) {
  if(gameOver === false && board.getGrid()[row][column] === "") {
    board.setCellValue(row, column);
    view.drawBoard(board);
    checkForWinner(board, view);
  }
};

window.onload = function() {
  var board = new Board();
  var boardView = new BoardView();
  boardView.attachBoardClickHandlers(board, makeMove);
};
