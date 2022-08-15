<div class="challenge-instructions"><div><section id="description">
<p>As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" rel="noopener noreferrer nofollow" target="_blank">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" rel="noopener noreferrer nofollow" target="_blank">GitHub</a>.</p>
<p><code>isOk()</code> will test for a truthy value, and <code>isNotOk()</code> will test for a falsy value.</p>
<p>To learn more about truthy and falsy values, try our <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer" rel="noopener noreferrer nofollow" target="_blank">Falsy Bouncer</a> challenge.</p>
</section></div><hr/><div><section id="instructions">
<p>Within <code>tests/1_unit-tests.js</code> under the test labelled <code>#3</code> in the <code>Basic Assertions</code> suite, change each <code>assert</code> to either <code>assert.isOk()</code> or <code>assert.isNotOk()</code> to make the test pass (should evaluate to <code>true</code>). Do not alter the arguments passed to the asserts.</p>
</section></div><hr/></div>



## Truthy

In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), a **truthy** value is a value that is considered `true` when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. All values are truthy unless they are defined as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). That is, all values are _truthy_ except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) in Boolean contexts.

Examples of _truthy_ values in JavaScript (which will be coerced to `true` in boolean contexts, and thus execute the `if` block):
```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```    


### The logical AND operator, &&

If the first object is truthy, the [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the second operand:
```js
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```    


 ## See also
* [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
* [Type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
* [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

