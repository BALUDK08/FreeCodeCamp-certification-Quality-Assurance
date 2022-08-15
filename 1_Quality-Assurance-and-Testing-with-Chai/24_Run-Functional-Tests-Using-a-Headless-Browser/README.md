<div class="challenge-instructions"><div><section id="description">
<p>As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" rel="noopener noreferrer nofollow" target="_blank">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" rel="noopener noreferrer nofollow" target="_blank">GitHub</a>.</p>
<p>On the page there's an input form. It sends data to the <code>PUT /travellers</code> endpoint as an AJAX request.</p>
<p>When the request successfully completes, the client code appends a <code>&lt;div&gt;</code> containing the information in the response to the DOM.</p>
<p>Here's an example of how to use Zombie.js to interact with the form:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'Submit the surname "Polo" in the HTML form'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  browser<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'surname'</span><span class="token punctuation">,</span> <span class="token string">'Polo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    browser<span class="token punctuation">.</span><span class="token function">pressButton</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      browser<span class="token punctuation">.</span>assert<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      browser<span class="token punctuation">.</span>assert<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">'span#name'</span><span class="token punctuation">,</span> <span class="token string">'Marco'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      browser<span class="token punctuation">.</span>assert<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">'span#surname'</span><span class="token punctuation">,</span> <span class="token string">'Polo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      browser<span class="token punctuation">.</span>assert<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token string">'span#dates'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>First, the <code>fill</code> method of the <code>browser</code> object fills the <code>surname</code> field of the form with the value <code>'Polo'</code>. <code>fill</code> returns a promise, so <code>then</code> is chained off of it.</p>
<p>Within the <code>then</code> callback, the <code>pressButton</code> method of the <code>browser</code> object is used to invoke the form's <code>submit</code> event listener. The <code>pressButton</code> method is asynchronous.</p>
<p>Then, once a response is received from the AJAX request, a few assertions are made confirming:</p>
<ol>
<li>The status of the response is <code>200</code></li>
<li>The text within the <code>&lt;span id='name'&gt;&lt;/span&gt;</code> element matches <code>'Marco'</code></li>
<li>The text within the <code>&lt;span id='surname'&gt;&lt;/span&gt;</code> element matches <code>'Polo'</code></li>
<li>There is <code>1</code> <code>&lt;span id='dates'&gt;&lt;/span&gt;</code> element.</li>
</ol>
<p>Finally, the <code>done</code> callback is invoked, which is needed due to the asynchronous test.</p>
</section></div><hr/><div><section id="instructions">
<p>Within <code>tests/2_functional-tests.js</code>, in the <code>'Submit the surname "Colombo" in the HTML form'</code> test (<code>// #5</code>), automate the following:</p>
<ol>
<li>Fill in the form with the surname <code>Colombo</code></li>
<li>Press the submit button</li>
</ol>
<p>And within the <code>pressButton</code> callback:</p>
<ol>
<li>Assert that status is OK <code>200</code></li>
<li>Assert that the text inside the element <code>span#name</code> is <code>'Cristoforo'</code></li>
<li>Assert that the text inside the element <code>span#surname</code> is <code>'Colombo'</code></li>
<li>Assert that the element(s) <code>span#dates</code> exist and their count is <code>1</code></li>
</ol>
<p>Do not forget to remove the <code>assert.fail()</code> call.</p>
</section></div><hr/></div>