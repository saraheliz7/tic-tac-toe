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
