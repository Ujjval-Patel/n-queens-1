var conflictRookCheck = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== undefined){
      for (var j = i+1; j < array.length; j++) {
        if (array[j] !== undefined) {
          if(array[i] === array[j]){
            return true;
          }
        }
      }
    }
  }
  return false;
}

var conflictQueenCheck = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== undefined){
      for (var j = i+1; j < array.length; j++) {
        if (array[j] !== undefined) {
          if(array[i] === array[j]){
            return true;
          } else if(Math.abs(i - j) === Math.abs(array[i] - array[j])){
            return true;
          }
        }
      }
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