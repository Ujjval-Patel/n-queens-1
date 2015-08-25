var conflictRookCheck = function(array){
  for(var i = 0; i < array.length-1; i++){
    if(array[i] === array[array.length-1]){
      return true;
    }
  }
  return false;
}

var conflictQueenCheck = function(array){
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] === array[array.length-1]){
      return true;
    } else if(Math.abs(i - (array.length-1)) === Math.abs(array[i] - array[array.length-1])){
      return true;
    }
  }
  return false;
}


optCountNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board;

  var recursiveHelper = function(board, col){
    board.push(col);
     
    if(!conflictRookCheck(board)){
      if(board.length === n){
        solutionCount++;
        board.pop();
      } else {
        for(var i = 0; i < n; i++){
          recursiveHelper(board, i);
        }
        board.pop();
      }
    } else {
      board.pop();
    }
  }

  for(var i = 0; i < n; i++){
    board = [];
    recursiveHelper(board, i, 0);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

optCountNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var board;

  var recursiveHelper = function(board, col){
    board.push(col);
     
    if(!conflictQueenCheck(board)){
      if(board.length === n){
        solutionCount++;
        board.pop();
      } else {
        for(var i = 0; i < n; i++){
          recursiveHelper(board, i);
        }
        board.pop();
      }
    } else {
      board.pop();
    }
  }

  for(var i = 0; i < n; i++){
    board = [];
    recursiveHelper(board, i, 0);
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};