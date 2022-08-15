<div class="challenge-instructions"><div><section id="description">
<p>As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" rel="noopener noreferrer nofollow" target="_blank">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" rel="noopener noreferrer nofollow" target="_blank">GitHub</a>.</p>
<p>This exercise is similar to the previous one.</p>
<p>Now that you know how to test a <code>PUT</code> request, it's your turn to do it from scratch.</p>
</section></div><hr/><div><section id="instructions">
<p>Within <code>tests/2_functional-tests.js</code>, alter the <code>'Send {surname: "da Verrazzano"}'</code> test (<code>// #4</code>) and use the <code>put</code> and <code>send</code> methods to test the  <code>'/travellers'</code> endpoint.</p>
<p>Send the following JSON object with your PUT request:</p>
<pre class="language-json" tabindex="0"><code class="language-json">{
  "surname": "da Verrazzano"
}
</code></pre>
<p>Check for the following within the <code>request.end</code> callback:</p>
<ol>
<li>The <code>status</code> should be <code>200</code></li>
<li>The <code>type</code> should be <code>application/json</code></li>
<li>The <code>body.name</code> should be <code>Giovanni</code></li>
<li>The <code>body.surname</code> should be <code>da Verrazzano</code></li>
</ol>
<p>Follow the assertion order above - we rely on it. Also, be sure to remove <code>assert.fail()</code> once complete.</p>
</section></div><hr/></div>