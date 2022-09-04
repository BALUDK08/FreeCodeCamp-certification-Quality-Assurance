const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

const puzzlesAndSolutions = require("../controllers/puzzle-strings.js").puzzlesAndSolutions

let puzzle = "..9..5.1.85.4....2432.....11...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
let puzzleCannotBeSolved = "..9..5.1.85.4....2432.....11...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
let puzzleInvalidCharacter = "..9..5.1.85.4....2432...l..1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
let puzzleInvalidLength = "..9..5.1.85.4....2432........1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.."

suite('Functional Tests', () => {

  suite("POST request to /api/solve", () => {
    test("Solve a puzzle with valid puzzle string: POST request to /api/solve", function (done) {
      chai
      .request(server)
      .post("/api/solve")
      .send({puzzle: puzzlesAndSolutions[0][0]})
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.solution, puzzlesAndSolutions[0][1])
        done();
      })
    })
  
    test("Solve a puzzle with missing puzzle string: POST request to /api/solve", function (done) {
      chai
      .request(server)
      .post("/api/solve")
      .send({puzzle: ''})
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Required field missing' })
        done();
      })
    })
  
    test("Solve a puzzle with invalid characters: POST request to /api/solve", function (done) {
      chai
      .request(server)
      .post("/api/solve")
      .send({puzzle: puzzleInvalidCharacter})
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Invalid characters in puzzle" })
        done();
      })
    })
  
    test("Solve a puzzle with invalid length: POST request to /api/solve", function (done)   {
      chai
      .request(server)
      .post("/api/solve")
      .send({puzzle: puzzleInvalidLength})
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Expected puzzle to be 81 characters long" })
        done();
      })
    })
  
    test("Solve a puzzle with invalid length: POST request to /api/solve", function (done)   {
      chai
      .request(server)
      .post("/api/solve")
      .send({puzzle: puzzleCannotBeSolved})
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Puzzle cannot be solved" })
        done();
      })
    })
  })

  suite("POST request to /api/check", () => {

    test("Check a puzzle placement with all fields: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "A6",
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { "valid": true })
        done();
      })
    })

    test("Check a puzzle placement with single placement conflict: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "A5",
        value: "9"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { valid: false, "conflict": [ "row" ] })
        done();
      })
    })

    test("Check a puzzle placement with multiple placement conflicts: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "C4",
        value: "3"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { valid: false, conflict: [ "row", "column" ] })
        done();
      })
    })


    test("Check a puzzle placement with all placement conflicts: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "B6",
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { valid: false, conflict: [ "row", "column", "region" ] })
        done();
      })
    })

    test("Check a puzzle placement with missing required fields: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Required field(s) missing" })
        done();
      })
    })


    test("Check a puzzle placement with invalid characters: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzleInvalidCharacter,
        coordinate: "A1",
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Invalid characters in puzzle" })
        done();
      })
    })


    test("Check a puzzle placement with incorrect length: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzleInvalidLength,
        coordinate: "A1",
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Expected puzzle to be 81 characters long" })
        done();
      })
    })


    test("Check a puzzle placement with invalid placement coordinate: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "A10",
        value: "5"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Invalid coordinate" })
        done();
      })
    })

    test("Check a puzzle placement with invalid placement value: POST request to /api/check", function (done)   {
      chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle: puzzle,
        coordinate: "A1",
        value: "10"   
      })
      .end((err,res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Invalid value" })
        done();
      })
    })

    
  })
  

});

