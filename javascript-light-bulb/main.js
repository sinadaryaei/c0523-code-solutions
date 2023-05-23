const $light = document.querySelector('.light');
const $background = document.querySelector('.background');

$light.addEventListener('click', () => {
  $light.className = '.light.on';
  $background.className = '.background.on';
});
