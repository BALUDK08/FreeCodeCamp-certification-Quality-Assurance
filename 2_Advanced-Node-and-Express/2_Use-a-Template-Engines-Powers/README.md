<div class="challenge-instructions"><div><section id="description">
<p>One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.</p>
<p>In your Pug file, you're able to use a variable by referencing the variable name as <code>#{variable_name}</code> inline with other text on an element or by using an equal sign on the element without a space such as <code>p=variable_name</code> which assigns the variable's value to the p element's text.</p>
<p>Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site. Read the Pug documentation for more information on usage and syntax.</p>
<p>Here is an example:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--Typing this using Pug--&gt;</span>
head
   script(type='text/javascript').
     if (foo) bar(1 + 5);
 body
   if youAreUsingPug
       p You are amazing
     else
       p Get on it!
   
<span class="token comment">&lt;!--will lead to creating this code--&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
     <span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>You are amazing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Looking at our pug file <code>index.pug</code> included in your project, we used the variables <code>title</code> and <code>message</code>.</p>
<p>To pass those along from our server, you will need to add an object as a second argument to your <code>res.render</code> with the variables and their values. For example, pass this object along setting the variables for your index view: <code>{title: 'Hello', message: 'Please login'}</code></p>
<p>It should look like: <code>res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});</code> Now refresh your page and you should see those values rendered in your view in the correct spot as laid out in your <code>index.pug</code> file!</p>
<p>Submit your page when you think you've got it right. If you're running into errors, you can check out the <a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" rel="noopener noreferrer nofollow" target="_blank">project completed up to this point</a>.</p>
</section></div><hr/></div>