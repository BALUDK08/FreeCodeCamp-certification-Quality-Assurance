<div class="challenge-instructions"><div><section id="description">
<p>Now that we can ensure the user accessing the <code>/profile</code> is authenticated, we can use the information contained in <code>req.user</code> on our page!</p>
<p>Pass an object containing the property <code>username</code> and value of <code>req.user.username</code> as the second argument for the render method of the profile view. Then, go to your <code>profile.pug</code> view, and add the following line below the existing <code>h1</code> element, and at the same level of indentation:</p>
<pre class="language-pug" tabindex="0"><code class="language-pug">h2.center#welcome Welcome, #{username}!
</code></pre>
<p>This creates an <code>h2</code> element with the class '<code>center</code>' and id '<code>welcome</code>' containing the text '<code>Welcome,</code>' followed by the username.</p>
<p>Also, in <code>profile.pug</code>, add a link referring to the <code>/logout</code> route, which will host the logic to unauthenticate a user.</p>
<pre class="language-pug" tabindex="0"><code class="language-pug">a(href='/logout') Logout
</code></pre>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a" rel="noopener noreferrer nofollow" target="_blank">check out the project completed up to this point</a>.</p>
</section></div><hr/></div>