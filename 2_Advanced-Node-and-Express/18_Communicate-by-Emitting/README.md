<div class="challenge-instructions"><div><section id="description">
<p><dfn>Emit</dfn> is the most common way of communicating you will use. When you emit something from the server to 'io', you send an event's name and data to all the connected sockets. A good example of this concept would be emitting the current count of connected users each time a new user connects!</p>
<p>Start by adding a variable to keep track of the users, just before where you are currently listening for connections.</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">let</span> currentUsers <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre>
<p>Now, when someone connects, you should increment the count before emitting the count. So, you will want to add the incrementer within the connection listener.</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token operator">++</span>currentUsers<span class="token punctuation">;</span>
</code></pre>
<p>Finally, after incrementing the count, you should emit the event (still within the connection listener). The event should be named 'user count', and the data should just be the <code>currentUsers</code>.</p>
<pre class="language-js" tabindex="0"><code class="language-js">io<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'user count'</span><span class="token punctuation">,</span> currentUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Now, you can implement a way for your client to listen for this event! Similar to listening for a connection on the server, you will use the <code>on</code> keyword.</p>
<pre class="language-js" tabindex="0"><code class="language-js">socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'user count'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Now, try loading up your app, authenticate, and you should see in your client console '1' representing the current user count! Try loading more clients up, and authenticating to see the number go up.</p>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/28ef7f1078f56eb48c7b1aeea35ba1f5" rel="noopener noreferrer nofollow" target="_blank">check out the project completed up to this point</a>.</p>
</section></div><hr/></div>