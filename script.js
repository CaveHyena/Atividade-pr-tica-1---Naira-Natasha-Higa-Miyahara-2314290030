// URL da API {JSON} Placeholder
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

// Mostrar os usuarios
function displayUsers(users) {
  const usersContainer = document.getElementById('users-container');
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    usersContainer.appendChild(userCard);
  });
}

window.onload = fetchUsers;
