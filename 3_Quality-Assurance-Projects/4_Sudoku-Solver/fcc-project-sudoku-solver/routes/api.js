'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      //console.log(req.body)
      const {puzzle, coordinate, value} = req.body;
      if(!puzzle || !coordinate || !value)
      {
        return res.json({ error: "Required field(s) missing" });
      }
      const row = coordinate.split("")[0];
      const column = coordinate.split("")[1];

      let message = solver.validate(puzzle);
      if(message!=='')
      {
        return res.json(JSON.parse(message));
      }

      if(coordinate.length !== 2 || !row.match(/^[a-i]$/i) || !column.match(/^[1-9]$/))
      {
        return res.json({error: "Invalid coordinate"});
      }

      if(!value.match(/^[1-9]$/))
      {
        return res.json({error: "Invalid value"});
      }

      let puzzleGrid = solver.transformPuzzleStringToPuzzleGrid(puzzle)
      let rowInt = parseInt(row.toUpperCase().charCodeAt(0) - 64 - 1);
      
      let validCol = solver.checkColPlacement(puzzleGrid, rowInt, column - 1, value);
      let validRow = solver.checkRowPlacement(puzzleGrid, rowInt, column - 1, value);
      let validReg = solver.checkRegionPlacement(puzzleGrid, rowInt, column - 1, value);
      let conflicts = [];
      if(validCol && validRow && validReg)
      {
        return res.json({valid: true});
      }
      else
      {
        if(!validRow)
        {
          conflicts.push("row")
        }
        if(!validCol)
        {
          conflicts.push("column")
        }
        if(!validReg)
        {
          conflicts.push("region")
        }
        return res.json({ valid: false, conflict: conflicts})
      }


    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      let message = solver.solve(puzzle)
      return res.json(JSON.parse(message))
    });
};
