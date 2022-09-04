const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

const puzzlesAndSolutions = require("../controllers/puzzle-strings.js").puzzlesAndSolutions

let puzzle = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
let puzzleGrid = solver.transformPuzzleStringToPuzzleGrid(puzzle);
let puzzleGrid1 = solver.transformPuzzleStringToPuzzleGrid(puzzlesAndSolutions[0][0]);
let invalidPuzzle = "..9..5.1.85.4....2432......11..69.83.9.....6.62.71...9......1945....4.37.4.3..6..";

suite('Unit Tests', () => {

    test("Logic handles a valid puzzle string of 81 characters", function (done) {
      assert.equal(solver.solve(puzzlesAndSolutions[0][0]), JSON.stringify({"solution": puzzlesAndSolutions[0][1] }));
      done();
    })

   test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", function (done) {
     let puzzleString = "..9..5.1.85.4....2432...l..1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
      assert.equal(solver.solve(puzzleString), '{ "error": "Invalid characters in puzzle" }');
      done();
   })

    test("Logic handles a puzzle string that is not 81 characters in length", function (done) {
      let puzzleString = "568...56";
      assert.equal(solver.solve(puzzleString), '{ "error": "Expected puzzle to be 81 characters long" }');
      done();
    })

    test("Logic handles a valid row placement", function (done) {
      let A2 = "01";
      assert.equal(solver.checkRowPlacement(puzzleGrid1, A2[0], A2[1], 3), true);
      done();
    })

    test("Logic handles a valid column placement", function (done) {
      let A2 = "01";
      assert.equal(solver.checkColPlacement(puzzleGrid1, A2[0], A2[1], 3), true);
      done();
    })

    test("Logic handles a valid region placement", function (done) {
      let A2 = "01";
      assert.equal(solver.checkRegionPlacement(puzzleGrid1, A2[0], A2[1], 3), true);
      done();
    })

    test("Logic handles an invalid row placement", function (done) {
      let row = "A";
      let column = 4;
      let puzzleGrid = solver.transformPuzzleStringToPuzzleGrid(puzzle)
      let rowInt = parseInt(row.toUpperCase().charCodeAt(0) - 64 - 1);
      assert.equal(solver.checkRowPlacement(puzzleGrid, rowInt, column - 1, 9), false);
      done();
    })

    test("Logic handles an invalid column placement", function (done) {
      let B3 = "12"
      assert.equal(solver.checkColPlacement(puzzleGrid, B3[0], B3[1], 9), false);
      done();
    })

    test("Logic handles an invalid region placement", function (done) {
      let C5 = "24";
      assert.equal(solver.checkRegionPlacement(puzzleGrid, C5[0], parseInt(C5[1]), 4), false);
      done();
    })


    test("Valid puzzle strings pass the solver", function (done) {
      assert.equal(solver.solve(puzzlesAndSolutions[0][0]), JSON.stringify({"solution": puzzlesAndSolutions[0][1] }));
      done();
    })


    test("Valid puzzle strings pass the solver", function (done) {
      assert.equal(solver.solve(invalidPuzzle), JSON.stringify({ "error": "Puzzle cannot be solved" }));
      done();
    })


    test("Solver returns the expected solution for an incomplete puzzle", function (done) {
      assert.equal(solver.solve(puzzlesAndSolutions[0][0]), JSON.stringify({"solution": puzzlesAndSolutions[0][1] }));
      done();
    })



});
