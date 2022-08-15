<div class="challenge-instructions"><div><section id="description">
<p>You may notice that up to now you have only been increasing the user count. Handling a user disconnecting is just as easy as handling the initial connect, except you have to listen for it on each socket instead of on the whole server.</p>
<p>To do this, add another listener inside the existing <code>'connect'</code> listener that listens for <code>'disconnect'</code> on the socket with no data passed through. You can test this functionality by just logging that a user has disconnected to the console.</p>
<pre class="language-js" tabindex="0"><code class="language-js">socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'disconnect'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/*anything you want to do on disconnect*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>To make sure clients continuously have the updated count of current users, you should decrease the currentUsers by 1 when the disconnect happens then emit the 'user count' event with the updated count!</p>
<p><strong>Note:</strong> Just like <code>'disconnect'</code>, all other events that a socket can emit to the server should be handled within the connecting listener where we have 'socket' defined.</p>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa" rel="noopener noreferrer nofollow" target="_blank">check out the project completed up to this point</a>.</p>
</section></div><hr/></div>