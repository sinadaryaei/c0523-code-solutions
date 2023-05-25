# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  Whatever the elment was clicked on triggered the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Due to event bubbling.

- What DOM element property tells you what type of element it is?
  `tagName` property tells us what type of element it is.

- What does the `element.closest()` method take as its argument and what does it return?
  Takes a CSS selector and takes the closest relative that matches

- How can you remove an element from the DOM?
  The `remove()` method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Add the event listenere to the parent, and it will catch any click events on its children.

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
