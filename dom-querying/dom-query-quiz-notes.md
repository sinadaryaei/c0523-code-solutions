# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To see if there is any errors.

- What is a "model"?
  The "model" represents the HTML document as a tree structure which is used by the JavaScript to access andd manipulate the document.

- Which "document" is being referred to in the phrase Document Object Model?
  Its referring to all page contents that can be modified.

- What is the word "object" referring to in the phrase Document Object Model?
  The object is referring to the HTML tag is an object.

- What is a DOM Tree?
  The DOM Tree is the backbone of an HTML document tags.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  The `document.getElementById(id)`, retrieves the `id` attribute.
  The `document.querySelector(css)` returns all elements matching a single CSS selector.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  The `document.querySelectorAll(css)` method retreives multiple elements from the DOM at once.

- Why might you want to assign the return value of a DOM query to a variable?
  To modify the elements returend by the query.

- What `console` method allows you to inspect the properties of a DOM element object?
  The `console.log` metthod.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all the elements in the HTML page before JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  The `document.querySelector()` takes the first element for the given CSS selector as a arguement and returns it.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  The `document.querySelectorAll()` takes CSS selector as argument and returns object containing the NodeList of all matching selectors.

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
