describe('Optimized solvers', function() {
  window.displayBoard = function() {};

  describe('conflictQueenCheck()', function() {

    it('Checks if queen check works', function() {
        expect(conflictQueenCheck([0,1,2])).to.equal(true);
        expect(conflictQueenCheck([0,1])).to.equal(true);
        expect(conflictQueenCheck([0,0,0,0])).to.equal(true);
        expect(conflictQueenCheck([1,3,0,2])).to.equal(false);
    });

  });

  describe('conflictRookCheck()', function() {

    it('Checks if rook check works', function() {
        expect(conflictRookCheck([0,0,0])).to.equal(true);
        expect(conflictRookCheck([0,1,2])).to.equal(false);
    });

  });

  describe('optCountNRooksSolutions()', function() {

    it('finds the number of valid solutions for n of 1-8 with optimized implementation', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = optCountNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });
  });

  describe('optCountNQueensSolutions()', function() {

    it('finds the number of valid solutions for n of 0-8 with optimized implementation', function() {
      _.range(0, 9).map(function(n) {
        var solutionCount = optCountNQueensSolutions(n);
        var expectedSolutionCount = [0, 1, 0, 0, 2, 10, 4, 40, 92][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });
  });

});
