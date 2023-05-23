const $light = document.querySelector('.light');
const $background = document.querySelector('.background');
let $lightOn = true;

$light.addEventListener('click', () => {
  if ($lightOn) {
    $light.className = 'light on';
    $background.className = 'background on';
    $lightOn = false;
  } else {
    $light.className = 'light';
    $background.className = 'background';
    $lightOn = true;
  }
});
