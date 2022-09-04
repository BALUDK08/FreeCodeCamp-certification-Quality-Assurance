let N = 9;

class SudokuSolver {

  validate(puzzleString) {
    if(!puzzleString)
    {
      return '{ "error": "Required field missing" }'
    }
    if(puzzleString.length === 81)
    {
      if(!puzzleString.match(/^[1-9.]*$/))
      {
        return '{ "error": "Invalid characters in puzzle" }'
      }
      return ''
    }
    else
    {
      return '{ "error": "Expected puzzle to be 81 characters long" }'
    }
    
  }

  // Check proposed value does not violate the sudoku row rule.
  checkRowPlacement(puzzleGrid, row, column, value) {
      for(let x = 0; x <= 8; x++)
      if (puzzleGrid[row][x] == value && column!=x)
          return false;
    
    return true;
  }

  checkColPlacement(puzzleGrid, row, column, value) {
      for(let x = 0; x <= 8; x++)
      if (puzzleGrid[x][column] == value && x!==row)
          return false;
    return true;
  }

  checkRegionPlacement(puzzleGrid, row, column, value) {
    let startRow = row - row % 3;
    let startCol = column - column % 3;
         
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (puzzleGrid[i + startRow][j + startCol] == value && ((i + startRow) !== row || (j + startCol) !== column))
                return false;
    return true;
  }

  

  solve(puzzleString) {
    let validateMessage = this.validate(puzzleString);
    if(validateMessage!=='')
    {
      return validateMessage;
    }

    let grid = this.transformPuzzleStringToPuzzleGrid(puzzleString);
    let solved = this.solveSudoku(grid, 0, 0);
    if(!solved)
    {
      return JSON.stringify({ "error": "Puzzle cannot be solved" });
    }
    else
    {
      //console.log(solved);
      puzzleString = solved.flat().join("");
      return JSON.stringify({"solution": puzzleString })
    }
    
  }


  //======================================//
  //======================================//
  //======================================//
  transformPuzzleStringToPuzzleGrid(puzzleString) 
  {
    let grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let row = -1;
    let col = 0;
    for(let i = 0; i < puzzleString.length; i++)
    {
      if(i%9 == 0)
      {
        row++;
      }
      if(col%9==0){
        col=0;
      }

      grid[row][col] = puzzleString[i] === "." ? 0 : +puzzleString[i];
      col++;
    }
    return grid
  }
  
  solveSudoku(grid, row, col)
  {
     
    /* If we have reached the 8th
       row and 9th column (0
       indexed matrix) ,
       we are returning true to avoid further
       backtracking       */
    if (row == N - 1 && col == N)
        return grid;
 
    // Check if column value  becomes 9 ,
    // we move to next row
    // and column start from 0
    if (col == N)
    {
        row++;
        col = 0;
    }
 
    // Check if the current position
    // of the grid already
    // contains value >0, we iterate
    // for next column
    if (grid[row][col] != 0)
        return this.solveSudoku(grid, row, col + 1);
 
    for(let num = 1; num < 10; num++)
    {
         
        // Check if it is safe to place
        // the num (1-9)  in the given
        // row ,col ->we move to next column
        if (this.isSafe(grid, row, col, num))
        {
             
            /*  assigning the num in the current
            (row,col)  position of the grid and
            assuming our assigned num in the position
            is correct */
            grid[row][col] = num;
 
            // Checking for next
            // possibility with next column
            if (this.solveSudoku(grid, row, col + 1))
                return grid;
        }
         
        /* removing the assigned num , since our
           assumption was wrong , and we go for next
           assumption with diff num value   */
        grid[row][col] = 0;
    }
    return false;
  }


  isSafe(grid, row, col, num)
  {
     
    // Check if we find the same num
    // in the similar row , we
    // return false
    let resultRow = this.checkRowPlacement(grid, row, col, num);
 
    // Check if we find the same num
    // in the similar column ,
    // we return false
    let resultCol = this.checkColPlacement(grid, row, col, num);
 
    // Check if we find the same num
    // in the particular 3*3
    // matrix, we return false
    let resultReg = this.checkRegionPlacement(grid, row, col, num);

    if(resultRow && resultCol && resultReg)
    {
      return true;
    }
    return false;
  }
  
}

module.exports = SudokuSolver;

