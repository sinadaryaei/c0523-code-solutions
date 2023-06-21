# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The `event.target` is a property of an event object that refers to the element that
  triggered the event.

- What is the affect of setting an element to `display: none`?
  The `display:none` removes from the flow, `visibilty: hidden` doesn't show the content but takes up the space.

- What does the `element.matches()` method take as an argument and what does it return?
  The `element.matches()` is used to check if an element matches a specified CSS selector.

- How can you retrieve the value of an element's attribute?
  Using `get.Attribute()`.

- At what steps of the solution would it be helpful to log things to the console?
  Throughout each step.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  It would require to manually create a `event` handler and `event` listener for each `.tab` and `.view`.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  By individually handling each view to be visible based on the click you control it wihout needing to
  loop through with a conditional to check the visibility.

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
