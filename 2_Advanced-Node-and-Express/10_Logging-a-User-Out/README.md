<div class="challenge-instructions"><div><section id="description">
<p>Creating the logout logic is easy. The route should just unauthenticate the user and redirect to the home page instead of rendering any view.</p>
<p>In passport, unauthenticating a user is as easy as just calling <code>req.logout();</code> before redirecting.</p>
<pre class="language-js" tabindex="0"><code class="language-js">app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>You may have noticed that we're not handling missing pages (404). The common way to handle this in Node is with the following middleware. Go ahead and add this in after all your other routes:</p>
<pre class="language-js" tabindex="0"><code class="language-js">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Not Found'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b" rel="noopener noreferrer nofollow" target="_blank">check out the project completed up to this point</a>.</p>
</section></div><hr/></div>