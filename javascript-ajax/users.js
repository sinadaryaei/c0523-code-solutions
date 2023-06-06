const $userList = document.querySelector('#user-list');

function UserList() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.status);
    console.log(xhr.response);
    const xhrResponse = xhr.response;
    for (let i = 0; i < xhrResponse.length; i++) {
      const listElem = document.createElement('li');
      listElem.textContent = xhrResponse[i].name;
      $userList.appendChild(listElem);
    }
  });
  xhr.send();
}
UserList();
