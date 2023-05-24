const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    name: $form.elements.name.value,
    email: $form.elements.name.value,
    message: $form.elements.name.value,
  };
  console.log('formData:', formData);
});
