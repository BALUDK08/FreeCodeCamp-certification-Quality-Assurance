<div class="challenge-instructions"><div><section id="description">
<p>Build a full stack JavaScript app that is functionally similar to this: <a href="https://american-british-translator.freecodecamp.rocks/" rel="noopener noreferrer nofollow" target="_blank">https://american-british-translator.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete your project locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete your project.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field. Optionally, also submit a link to your project's source code in the <code>GitHub Link</code> field.</p>
</section></div><hr/><div><section id="instructions">
<ul>
<li>All logic can go into <code>/components/translator.js</code></li>
<li>Complete the <code>/api/translate</code> route in <code>/routes/api.js</code></li>
<li>Create all of the unit/functional tests in <code>tests/1_unit-tests.js</code> and <code>tests/2_functional-tests.js</code></li>
<li>See the JavaScript files in <code>/components</code> for the different spelling and terms your application should translate</li>
<li>To run the tests on Replit, set <code>NODE_ENV</code> to <code>test</code> without quotes in the <code>.env</code> file</li>
<li>To run the tests in the console, use the command <code>npm run test</code>. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
</ul>
<p>Write the following tests in <code>tests/1_unit-tests.js</code>:</p>
<ul>
<li>Translate <code>Mangoes are my favorite fruit.</code> to British English</li>
<li>Translate <code>I ate yogurt for breakfast.</code> to British English</li>
<li>Translate <code>We had a party at my friend's condo.</code> to British English</li>
<li>Translate <code>Can you toss this in the trashcan for me?</code> to British English</li>
<li>Translate <code>The parking lot was full.</code> to British English</li>
<li>Translate <code>Like a high tech Rube Goldberg machine.</code> to British English</li>
<li>Translate <code>To play hooky means to skip class or work.</code> to British English</li>
<li>Translate <code>No Mr. Bond, I expect you to die.</code> to British English</li>
<li>Translate <code>Dr. Grosh will see you now.</code> to British English</li>
<li>Translate <code>Lunch is at 12:15 today.</code> to British English</li>
<li>Translate <code>We watched the footie match for a while.</code> to American English</li>
<li>Translate <code>Paracetamol takes up to an hour to work.</code> to American English</li>
<li>Translate <code>First, caramelise the onions.</code> to American English</li>
<li>Translate <code>I spent the bank holiday at the funfair.</code> to American English</li>
<li>Translate <code>I had a bicky then went to the chippy.</code> to American English</li>
<li>Translate <code>I've just got bits and bobs in my bum bag.</code> to American English</li>
<li>Translate <code>The car boot sale at Boxted Airfield was called off.</code> to American English</li>
<li>Translate <code>Have you met Mrs Kalyani?</code> to American English</li>
<li>Translate <code>Prof Joyner of King's College, London.</code> to American English</li>
<li>Translate <code>Tea time is usually around 4 or 4.30.</code> to American English</li>
<li>Highlight translation in <code>Mangoes are my favorite fruit.</code></li>
<li>Highlight translation in <code>I ate yogurt for breakfast.</code></li>
<li>Highlight translation in <code>We watched the footie match for a while.</code></li>
<li>Highlight translation in <code>Paracetamol takes up to an hour to work.</code></li>
</ul>
<p>Write the following tests in <code>tests/2_functional-tests.js</code>:</p>
<ul>
<li>Translation with text and locale fields: POST request to <code>/api/translate</code></li>
<li>Translation with text and invalid locale field: POST request to <code>/api/translate</code></li>
<li>Translation with missing text field: POST request to <code>/api/translate</code></li>
<li>Translation with missing locale field: POST request to <code>/api/translate</code></li>
<li>Translation with empty text: POST request to <code>/api/translate</code></li>
<li>Translation with text that needs no translation: POST request to <code>/api/translate</code></li>
</ul>
</section></div><hr/></div>