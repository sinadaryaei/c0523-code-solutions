const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const formData = {
  nameValue: $form.event.name.value,
  emailValue: $form.event.email.value,
  messageValue: $form.event.message.value,
};

console.log(formData);
