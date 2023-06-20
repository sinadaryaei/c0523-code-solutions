# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  Paranthesis `()` fat arrow function `=>` and then curly braces `{}`.

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  Would not require return operator.

- When using _concise body syntax_, how do you return an object literal?
  Wrap the object in paranthesis to return it.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    Opening and closing paranthesis the fat arrow and the number 42.

  - How many arguments does the arrow function take?
    Zero arguments.

  - What value does it return?

42.

- How many arguments are passed to the function `foo`?
  1 arguement, anonymous arrow function.

- What type of argument is passed to the function `foo`?
  Arrow funtion into our foo function.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    The paranthesis with y the fat arrow and the curly brace with console.log.

  - How many arguments does the arrow function take?
    One argument.

  - What value does it return?
    Undefined because there is no precise body syntax.

  - How many arguments are passed to the function `bar`?
    One argument, the arrow function.

  - What type of argument is passed to the function `bar`?
    Passing arrow function into bar function.

  - When does the arrow function's code get executed?
    When ever bar is called, that is when the arrow function is called.

- How does the value of `this` differ between standard functions and arrow functions?
  Arrow functions don't have a this binding.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
