const $tabContainer = document.querySelector('.tab-container');
const $allTab = document.querySelectorAll('.tab');
const $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (event) => {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $allTab.length; i++) {
      const loopTab = $allTab[i];

      if (loopTab === event.target) {
        $allTab[i].classList.add('active');
      } else {
        $allTab[i].classList.remove('active');
      }
    }
    const $dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $allView.length; i++) {
      const loopView = $allView[i];
      if (loopView.getAttribute('data-view') === $dataView) {
        $allView[i].classList.remove('hidden');
      } else {
        $allView[i].classList.add('hidden');
      }
    }
  }
});
