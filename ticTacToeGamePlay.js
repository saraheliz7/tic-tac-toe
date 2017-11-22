// winner winner chicken dinner when three are in a row
// if space-0, space-1, and space-2 are all O alert O wins!
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var count = 0;

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

var attachCellClickHandler = function(row, column, board) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  cell.addEventListener("click", function(){
    if(board[row][column] === "") {
      if(count % 2 === 0){
        board[row][column] = "O"
      } else {
        board[row][column] = "X";
      }
      count++;
      drawBoard(board);
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



// window.onload = function() {
//   var spaces = document.querySelectorAll(".spaces td");
//   console.log(spaces);
//
//   var count = 0;
//   var clickedSpace = document.querySelectorAll(".click");
//
//   clickedSpace.forEach(function(space){
//     space.addEventListener("click",function(){
//       count++;
//     })
//   })
//
// var spaceMark = function(event) {
//   console.log(event.currentTarget);
//   var x = event.currentTarget.querySelector(".X");
//   var o = event.currentTarget.querySelector(".O");
//   if(count % 2 === 0) {
//     x.classList.remove("hiddenX");
//   } else {
//     o.classList.remove("hiddenO");
//   }
//   event.currentTarget.classList.add("disable");
// };
//
// spaces.forEach(function(space) {
//   space.addEventListener("click", spaceMark);
// })
// };
