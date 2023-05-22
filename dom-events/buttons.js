function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
const $clickButton = document.querySelectorAll('.click-button');
const $clickListen = addEventListener('click', handleClick);
console.log(handleClick);
console.dir(handleClick);

console.log($clickButton);
console.log($clickListen);
