const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
});
