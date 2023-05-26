# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  Yes it creates a new element in the page.

- How do you add an element as a child to another element?
  Using the `appendChild()` method.

- What do you pass as the arguments to the `element.setAttribute()` method?
  You pass two arguments first set the attribute and the second argument what value is going
  to be.

- What steps do you need to take in order to insert a new element into the page?
  Step 1. `createElement()` method and assign it to a variable.
  Step 2. `setAttribute()` the variable and pass two arguements.
  Step 3. `.textContent` the object property
  Step 4. `appendChild()` it to the outer `div`.

- What is the `textContent` property of an element object for?
  Its text content that sits between elements that dispaly on the page.

- Name two ways to set the `class` attribute of a DOM element.
  First way to set the `class` attribute is to use the `setAttribute()` and pass two arguments the `class`,
  and the property object. The second way is to do the same thing and to pass the second argument as a
  string for the class attribute in the element.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  First advantage is the function can be used over and over again. The second is that you don't have to
  hardcode anything it is recreating the the HTML structure in JavaScript.

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
