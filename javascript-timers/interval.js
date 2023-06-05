let counter = 4;

const $h1 = document.querySelector('h1');

const countdown = setInterval(() => {
  if (counter === 4) {
    $h1.textContent = 4;
  } else if (counter === 3) {
    $h1.textContent = 3;
  } else if (counter === 2) {
    $h1.textContent = 2;
  } else if (counter === 1) {
    $h1.textContent = 1;
  } else if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
  counter--;
}, 1000);
