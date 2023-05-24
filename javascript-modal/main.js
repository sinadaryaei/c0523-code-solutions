const $openModal = document.querySelector('#open-btn');
const $noButton = document.querySelector('#no-btn');
const $modal = document.getElementById('box-modal');
const $backdrop = document.querySelector('.background-gray');

$openModal.addEventListener('click', () => {
  $modal.classList.remove('hidden');
  $backdrop.classList.remove('hidden');
});

$noButton.addEventListener('click', () => {
  $modal.classList.add('hidden');
  $backdrop.classList.add('hidden');
});
