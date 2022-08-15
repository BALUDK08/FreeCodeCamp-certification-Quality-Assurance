<div class="challenge-instructions"><div><section id="description">
<p>Build a full stack JavaScript app that is functionally similar to this: <a href="https://metric-imperial-converter.freecodecamp.rocks/" rel="noopener noreferrer nofollow" target="_blank">https://metric-imperial-converter.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete your project locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete your project.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field. Optionally, also submit a link to your project's source code in the <code>GitHub Link</code> field.</p>
</section></div><hr/><div><section id="instructions">
<ul>
<li>Complete the necessary conversion logic in <code>/controllers/convertHandler.js</code></li>
<li>Complete the necessary routes in <code>/routes/api.js</code></li>
<li>Copy the <code>sample.env</code> file to <code>.env</code> and set the variables appropriately</li>
<li>To run the tests uncomment <code>NODE_ENV=test</code> in your <code>.env</code> file</li>
<li>To run the tests in the console, use the command <code>npm run test</code>. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
</ul>
<p>Write the following tests in <code>tests/1_unit-tests.js</code>:</p>
<ul>
<li><code>convertHandler</code> should correctly read a whole number input.</li>
<li><code>convertHandler</code> should correctly read a decimal number input.</li>
<li><code>convertHandler</code> should correctly read a fractional input.</li>
<li><code>convertHandler</code> should correctly read a fractional input with a decimal.</li>
<li><code>convertHandler</code> should correctly return an error on a double-fraction (i.e. <code>3/2/3</code>).</li>
<li><code>convertHandler</code> should correctly default to a numerical input of <code>1</code> when no numerical input is provided.</li>
<li><code>convertHandler</code> should correctly read each valid input unit.</li>
<li><code>convertHandler</code> should correctly return an error for an invalid input unit.</li>
<li><code>convertHandler</code> should return the correct return unit for each valid input unit.</li>
<li><code>convertHandler</code> should correctly return the spelled-out string unit for each valid input unit.</li>
<li><code>convertHandler</code> should correctly convert <code>gal</code> to <code>L</code>.</li>
<li><code>convertHandler</code> should correctly convert <code>L</code> to <code>gal</code>.</li>
<li><code>convertHandler</code> should correctly convert <code>mi</code> to <code>km</code>.</li>
<li><code>convertHandler</code> should correctly convert <code>km</code> to <code>mi</code>.</li>
<li><code>convertHandler</code> should correctly convert <code>lbs</code> to <code>kg</code>.</li>
<li><code>convertHandler</code> should correctly convert <code>kg</code> to <code>lbs</code>.</li>
</ul>
<p>Write the following tests in <code>tests/2_functional-tests.js</code>:</p>
<ul>
<li>Convert a valid input such as <code>10L</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
<li>Convert an invalid input such as <code>32g</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
<li>Convert an invalid number such as <code>3/7.2/4kg</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
<li>Convert an invalid number AND unit such as <code>3/7.2/4kilomegagram</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
<li>Convert with no number such as <code>kg</code>: <code>GET</code> request to <code>/api/convert</code>.</li>
</ul>
</section></div><hr/></div>