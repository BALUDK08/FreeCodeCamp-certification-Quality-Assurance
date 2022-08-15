<div class="challenge-instructions"><div><section id="description">
<p>As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" rel="noopener noreferrer nofollow" target="_blank">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" rel="noopener noreferrer nofollow" target="_blank">GitHub</a>.</p>
<p>When you test a <code>PUT</code> request, you'll often send data along with it. The data you include with your <code>PUT</code> request is called the body of the request.</p>
<p>To send a <code>PUT</code> request and a JSON object to the <code>'/travellers'</code> endpoint, you can use <code>chai-http</code> plugin's <code>put</code> and <code>send</code> methods:</p>
<pre class="language-js" tabindex="0"><code class="language-js">chai
  <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/travellers'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">"surname"</span><span class="token operator">:</span> <span class="token punctuation">[</span>last name <span class="token keyword">of</span> a traveller <span class="token keyword">of</span> the past<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">...</span>
</code></pre>
<p>And the route responds with:</p>
<pre class="language-json" tabindex="0"><code class="language-json">{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
</code></pre>
<p>See the server code for the different responses to the <code>'/travellers'</code> endpoint.</p>
</section></div><hr/><div><section id="instructions">
<p>Within <code>tests/2_functional-tests.js</code>, alter the <code>'Send {surname: "Colombo"}'</code> test (<code>// #3</code>) and use the <code>put</code> and <code>send</code> methods to test the  <code>'/travellers'</code> endpoint.</p>
<p>Send the following JSON object with your PUT request:</p>
<pre class="language-json" tabindex="0"><code class="language-json">{
  "surname": "Colombo"
}
</code></pre>
<p>Check for the following within the <code>request.end</code> callback:</p>
<ol>
<li>The <code>status</code> should be <code>200</code></li>
<li>The <code>type</code> should be <code>application/json</code></li>
<li>The <code>body.name</code> should be <code>Cristoforo</code></li>
<li>The <code>body.surname</code> should be <code>Colombo</code></li>
</ol>
<p>Follow the assertion order above - we rely on it. Also, be sure to remove <code>assert.fail()</code> once complete.</p>
</section></div><hr/></div>