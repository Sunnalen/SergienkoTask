const getUsersButton = document.querySelector('#btn');
const userList = document.querySelector('#app');
userList.textContent = 'Пользователи';
const styleList = userList.style
styleList.fontSize = '25px';
userList.style.fontWeight = 'bold';



const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        const li = document.createElement('li');
        li.className = "user";
        li.innerHTML = `${user.name}<br>${user.username}<br>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
        userList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Ошибка при получении пользователей:', error);
    });
}
getUsersButton.addEventListener('click', getUsers);