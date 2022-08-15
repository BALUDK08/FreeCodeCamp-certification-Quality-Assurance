<div class="challenge-instructions"><div><section id="description">
<p>Build a full stack JavaScript app that is functionally similar to this: <a href="https://sudoku-solver.freecodecamp.rocks/" rel="noopener noreferrer nofollow" target="_blank">https://sudoku-solver.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete your project locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete your project.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field. Optionally, also submit a link to your project's source code in the <code>GitHub Link</code> field.</p>
</section></div><hr/><div><section id="instructions">
<ul>
<li>All puzzle logic can go into <code>/controllers/sudoku-solver.js</code>
<ul>
<li>The <code>validate</code> function should take a given puzzle string and check it to see if it has 81 valid characters for the input.</li>
<li>The <code>check</code> functions should be validating against the <em>current</em> state of the board.</li>
<li>The <code>solve</code> function should handle solving any given valid puzzle string, not just the test inputs and solutions. You are expected to write out the logic to solve this.</li>
</ul>
</li>
<li>All routing logic can go into <code>/routes/api.js</code></li>
<li>See the <code>puzzle-strings.js</code> file in <code>/controllers</code> for some sample puzzles your application should solve</li>
<li>To run the challenge tests on this page, set <code>NODE_ENV</code> to <code>test</code> without quotes in the <code>.env</code> file</li>
<li>To run the tests in the console, use the command <code>npm run test</code>. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
</ul>
<p>Write the following tests in <code>tests/1_unit-tests.js</code>:</p>
<ul>
<li>Logic handles a valid puzzle string of 81 characters</li>
<li>Logic handles a puzzle string with invalid characters (not 1-9 or <code>.</code>)</li>
<li>Logic handles a puzzle string that is not 81 characters in length</li>
<li>Logic handles a valid row placement</li>
<li>Logic handles an invalid row placement</li>
<li>Logic handles a valid column placement</li>
<li>Logic handles an invalid column placement</li>
<li>Logic handles a valid region (3x3 grid) placement</li>
<li>Logic handles an invalid region (3x3 grid) placement</li>
<li>Valid puzzle strings pass the solver</li>
<li>Invalid puzzle strings fail the solver</li>
<li>Solver returns the expected solution for an incomplete puzzle</li>
</ul>
<p>Write the following tests in <code>tests/2_functional-tests.js</code></p>
<ul>
<li>Solve a puzzle with valid puzzle string: POST request to <code>/api/solve</code></li>
<li>Solve a puzzle with missing puzzle string: POST request to <code>/api/solve</code></li>
<li>Solve a puzzle with invalid characters: POST request to <code>/api/solve</code></li>
<li>Solve a puzzle with incorrect length: POST request to <code>/api/solve</code></li>
<li>Solve a puzzle that cannot be solved: POST request to <code>/api/solve</code></li>
<li>Check a puzzle placement with all fields: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with single placement conflict: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with multiple placement conflicts: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with all placement conflicts: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with missing required fields: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with invalid characters: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with incorrect length: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with invalid placement coordinate: POST request to <code>/api/check</code></li>
<li>Check a puzzle placement with invalid placement value: POST request to <code>/api/check</code></li>
</ul>
</section></div><hr/></div>