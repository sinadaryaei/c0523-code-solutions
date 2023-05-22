# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to the console to see if the code is without any errors.

- What is the purpose of events and event handling?
  Events are things that occur in the system that is being programmed and the event handling is used to react to the event.

- Are all possible parameters required to use a JavaScript method or function?
  No, but the function might not work properly.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The `addEventListender()` lets you set up a function to be called when a specific type of event occurs.

- What is a callback function?
  A callback function is function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  The objects information is passed into and event listenee callback when the event fires.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` property is a property of the event object that refers to the element that triggers the event.
  Checking the mdn documents provides more information.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first snippet is passing the handClick as callback function while the second snippet is passing the handleClick and calling the function.

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
