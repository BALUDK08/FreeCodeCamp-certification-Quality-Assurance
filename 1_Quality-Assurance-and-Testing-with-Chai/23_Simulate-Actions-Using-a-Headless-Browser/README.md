<div class="challenge-instructions"><div><section id="description">
<p>As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" rel="noopener noreferrer nofollow" target="_blank">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" rel="noopener noreferrer nofollow" target="_blank">GitHub</a>.</p>
<p>In the next challenges, you'll simulate human interaction with a page by using a headless browser.</p>
<p>Headless browsers are web browsers without a GUI. They are able to render and interpret HTML, CSS, and JavaScript the same way a regular browser would, making them particularly useful for testing web pages.</p>
<p>For the following challenges you'll use Zombie.js, which is a lightweight headless browser that doesn't rely on additional binaries to be installed. This feature makes it usable in limited environments like Replit. But there are many other, more powerful headless browser options.</p>
<p>Mocha allows you to run some code before any of the actual tests run. This can be useful to do things like add entries to a database which will be used in the rest of the tests.</p>
<p>With a headless browser, before running tests, you need to <strong>visit</strong> the page you'll test.</p>
<p>The <code>suiteSetup</code> hook is executed only once at the beginning of a test suite.</p>
<p>There are several other hook types that can execute code before each test, after each test, or at the end of a test suite. See the Mocha docs for more information.</p>
</section></div><hr/><div><section id="instructions">
<p>Within <code>tests/2_functional-tests.js</code>, immediately after the <code>Browser</code> declaration, add your project URL to the <code>site</code> property of the variable:</p>
<pre class="language-js" tabindex="0"><code class="language-js">Browser<span class="token punctuation">.</span>site <span class="token operator">=</span> <span class="token string">'https://boilerplate-mochachai.your-username.repl.co'</span><span class="token punctuation">;</span> <span class="token comment">// Your URL here</span>
</code></pre>
<p>Then at the root level of the <code>'Functional Tests with Zombie.js'</code> suite, instantiate a new instance of the <code>Browser</code> object with the following code:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Browser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>And use the <code>suiteSetup</code> hook to direct the <code>browser</code> to the <code>/</code> route with the following code:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token function">suiteSetup</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> browser<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/></div>