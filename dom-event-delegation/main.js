const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log('event.target.tagName', event.target.tagName);
    const $taskListItem = document.querySelector('.task-list-item');
    $taskListItem.closest('.task-list-item');
    $taskListItem.remove();
  }
});
