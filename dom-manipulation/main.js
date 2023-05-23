let numberOfClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', (event) => {
  numberOfClicks++;
  console.log(event);
  console.log(event.target);
  $clickCount.textContent = numberOfClicks;
});
