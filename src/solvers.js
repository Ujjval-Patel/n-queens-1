/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined;
  var board = new Board({'n':n});
  var numPieces = 0;

  var recursiveHelper = function(board, row, col){
    if(!!solution){
      return;
    }

    board.togglePiece(row,col);
    numPieces++;

    if(!board.hasAnyRooksConflicts()){
      if(numPieces === board.get('n')){
        solution = board.rows();
      } else {
        for(var i = 0; i < board.get('n'); i++){
          if(!board.get(i)[numPieces]){
            recursiveHelper(board, i, numPieces);
          }
        }
      }
    } else {
      board.togglePiece(row,col);
      numPieces--;
    }
  }

  for(var i = 0; i < board.get('n'); i++){
    numPieces = 0;
    board = new Board({'n':n});
    recursiveHelper(board, i, 0);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};
// Time complexity: O(n!)


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({'n':n});
  var numPieces = 0;
  var solutions = {};
  var recursiveHelper = function(board, row, col){
    board.togglePiece(row,col);
    numPieces++;
     
    if(!board.hasAnyRooksConflicts()){
      if(numPieces === board.get('n')){
        var temp = JSON.stringify(board.rows());
        if(solutions[temp] === undefined) {
          solutions[temp] = true;
          solutionCount++;
        }
        board.togglePiece(row,col);
        numPieces--;
      } else {
        for(var i = 0; i < board.get('n'); i++){
          if(!board.get(i)[numPieces]){
            recursiveHelper(board, i, numPieces);
          }
        }
        board.togglePiece(row,col);
        numPieces--;
      }
    } else {
      board.togglePiece(row,col);
      numPieces--;
    }
  }

  for(var i = 0; i < board.get('n'); i++){
    numPieces = 0;
    recursiveHelper(board, i, 0);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
// Time complexity: O(n!)


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if(!n){
    return [];
  }

  var solution = undefined;
  var board = new Board({'n':n});
  var numPieces = 0;

  var recursiveHelper = function(board, row, col){
    if(!!solution){
      return;
    }

    board.togglePiece(row,col);
    numPieces++;

    if(!board.hasAnyQueensConflicts()){
      if(numPieces === board.get('n')){
        var newBoard = [];
        for(var k = 0; k < board.get('n'); k++){
          newBoard[k] = board.rows()[k].slice();
        }
        solution = newBoard;
      } else {
        for(var i = 0; i < board.get('n'); i++){
          if(!board.get(i)[numPieces]){
            recursiveHelper(board, i, numPieces);
          }
        }
        board.togglePiece(row,col);
        numPieces--;
      }
    } else {
      board.togglePiece(row,col);
      numPieces--;
    }
  }

  for(var i = 0; i < board.get('n'); i++){
    numPieces = 0;
    recursiveHelper(board, i, 0);
  }
  if(!solution){
    var emptyBoard = new Board({'n':n});
    solution = emptyBoard.rows();
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
// Time complexity: O(n!)


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(!n){
    return 1;
  }

  var solutionCount = 0;
  var solutions = {}; 
  var board = new Board({'n':n});
  var numPieces = 0;

  var recursiveHelper = function(board, row, col){
    board.togglePiece(row,col);
    numPieces++;

    if(!board.hasAnyQueensConflicts()){
      if(numPieces === board.get('n')){
        var temp = JSON.stringify(board.rows());
        if(solutions[temp] === undefined){
          solutions[temp] = true;
          solutionCount++;
        }
        board.togglePiece(row,col);
        numPieces--;
      } else {
        for(var i = 0; i < board.get('n'); i++){
          if(!board.get(i)[numPieces]){
            recursiveHelper(board, i, numPieces);
          }
        }
        board.togglePiece(row,col);
        numPieces--;
      }
    } else {
      board.togglePiece(row,col);
      numPieces--;
    }
  }

  for(var i = 0; i < board.get('n'); i++){
    numPieces = 0;
    recursiveHelper(board, i, 0);
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
// Time complexity: O(n!)
