# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?
  A function is packaged code that can be used later in your program.

- Describe the parts of a function **definition**.
  A `function` keyword, a optional name with, a `,` comma that seperates zero or more
  parameters surrounded by `()` parentheses, followed by a opening curly brace `{` for
  the code block, and a optional return statement, ending with a closing curly brace for
  the code block `}`.

for JS:

```javascript
function sayHello() {
  var greeting = 'Hello, World!';
  console.log(greeting);
}
```

- Describe the parts of a function **call**.
  The funciton **call** is written by placing the name of the function followed by parentheses `()` and a semi colon `;`.

for JS:

```javascript
sayHello(); // logs "Hello, World!" to the console
```

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

The **call** needs to be defined first before it can be called. The function **definition**
has to be created first, it's like a object, but it can be called.

for JS:

```javascript
// defining the sayHello function
function sayHello() {
  var greeting = 'Hello, World!';
  console.log(greeting);
}

// calling the sayHello function
sayHello();
```

- What is the difference between a **parameter** and an **argument**?

A **parameter** is a placeholder, a variable who's value is not known until we call a function,
and we pass its **argument** a `string`.

for JS:

```javascript
// defining the function sayHello with one parameter: nickname
function sayHello(nickname) {
  var greeting = 'Hello, ' + nickname + '!';
  console.log(greeting);
}

// calling the function sayHello with one argument: the string 'friend'
sayHello('friend');
```

- Why are function **parameters** useful?
  Function **parameters** are useful because they are placeholders to pass **arguements**.

- What two effects does a `return` statement have on the behavior of a function?
  The `return` statement causes the function to produce a value to use in our program, or
  prevents any more code in the function's code block from being run.

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
