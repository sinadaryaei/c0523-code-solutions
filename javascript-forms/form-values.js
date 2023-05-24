const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value,
  };
  console.log('formData:', formData);
  $form.reset();
});
