<div class="challenge-instructions"><div><section id="description">
<p>Build a full stack JavaScript app that is functionally similar to this: <a href="https://issue-tracker.freecodecamp.rocks/" rel="noopener noreferrer nofollow" target="_blank">https://issue-tracker.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete your project locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" rel="noopener noreferrer nofollow" target="_blank">this Replit starter project</a> to complete your project.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field. Optionally, also submit a link to your project's source code in the <code>GitHub Link</code> field.</p>
</section></div><hr/><div><section id="instructions">
<ul>
<li>Complete the necessary routes in <code>/routes/api.js</code></li>
<li>Create all of the functional tests in <code>tests/2_functional-tests.js</code></li>
<li>Copy the <code>sample.env</code> file to <code>.env</code> and set the variables appropriately</li>
<li>To run the tests uncomment <code>NODE_ENV=test</code> in your <code>.env</code> file</li>
<li>To run the tests in the console, use the command <code>npm run test</code>. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
</ul>
<p>Write the following tests in <code>tests/2_functional-tests.js</code>:</p>
<ul>
<li>Create an issue with every field: POST request to <code>/api/issues/{project}</code></li>
<li>Create an issue with only required fields: POST request to <code>/api/issues/{project}</code></li>
<li>Create an issue with missing required fields: POST request to <code>/api/issues/{project}</code></li>
<li>View issues on a project: GET request to <code>/api/issues/{project}</code></li>
<li>View issues on a project with one filter: GET request to <code>/api/issues/{project}</code></li>
<li>View issues on a project with multiple filters: GET request to <code>/api/issues/{project}</code></li>
<li>Update one field on an issue: PUT request to <code>/api/issues/{project}</code></li>
<li>Update multiple fields on an issue: PUT request to <code>/api/issues/{project}</code></li>
<li>Update an issue with missing <code>_id</code>: PUT request to <code>/api/issues/{project}</code></li>
<li>Update an issue with no fields to update: PUT request to <code>/api/issues/{project}</code></li>
<li>Update an issue with an invalid <code>_id</code>: PUT request to <code>/api/issues/{project}</code></li>
<li>Delete an issue: DELETE request to <code>/api/issues/{project}</code></li>
<li>Delete an issue with an invalid <code>_id</code>: DELETE request to <code>/api/issues/{project}</code></li>
<li>Delete an issue with missing <code>_id</code>: DELETE request to <code>/api/issues/{project}</code></li>
</ul>
</section></div><hr/></div>