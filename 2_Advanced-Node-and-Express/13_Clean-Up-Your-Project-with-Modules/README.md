<div class="challenge-instructions"><div><section id="description">
<p>Right now, everything you have is in your <code>server.js</code> file. This can lead to hard to manage code that isn't very expandable. Create 2 new files: <code>routes.js</code> and <code>auth.js</code></p>
<p>Both should start with the following code:</p>
<pre class="language-js" tabindex="0"><code class="language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> myDataBase</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre>
<p>Now, in the top of your server file, require these files like so: <code>const routes = require('./routes.js');</code> Right after you establish a successful connection with the database, instantiate each of them like so: <code>routes(app, myDataBase)</code></p>
<p>Finally, take all of the routes in your server and paste them into your new files, and remove them from your server file. Also take the <code>ensureAuthenticated</code> function, since it was specifically created for routing. Now, you will have to correctly add the dependencies in which are used, such as <code>const passport = require('passport');</code>, at the very top, above the export line in your <code>routes.js</code> file.</p>
<p>Keep adding them until no more errors exist, and your server file no longer has any routing (<strong>except for the route in the catch block</strong>)!</p>
<p>Now do the same thing in your auth.js file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Be sure to add the dependencies in and call <code>auth(app, myDataBase)</code> in the server in the same spot.</p>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92" rel="noopener noreferrer nofollow" target="_blank">check out an example of the completed project</a>.</p>
</section></div><hr/></div>