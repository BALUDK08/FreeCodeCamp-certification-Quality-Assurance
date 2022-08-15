<div class="challenge-instructions"><div><section id="description">
<p>Working on these challenges will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete these challenges locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete these challenges.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field.</p>
<p>A template engine enables you to use static template files (such as those written in <em>Pug</em>) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.</p>
<p><code>pug@~3.0.0</code> has already been installed, and is listed as a dependency in your <code>package.json</code> file.</p>
<p>Express needs to know which template engine you are using. We will use the <code>set</code> method to assign <code>pug</code> as the <code>view engine</code> property's value: <code>app.set('view engine', 'pug')</code></p>
<p>Your page will be blank until you correctly render the index file in the <code>views/pug</code> directory.</p>
<p>To render the <code>pug</code> template, you need to use <code>res.render()</code> in the <code>/</code> route. Pass the file path to the <code>views/pug</code> directory as the argument to the method. The path can be a relative path (relative to views), or an absolute path, and does not require a file extension.</p>
<p>If all went as planned, your app home page will no longer be blank and will display a message indicating you've successfully rendered the Pug template!</p>
<p>Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791" rel="noopener noreferrer nofollow" target="_blank">check out the project completed up to this point</a>.</p>
</section></div><hr/></div>