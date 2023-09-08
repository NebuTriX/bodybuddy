document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    const isCredentialsValid = await checkCredentials(username, password);

    if (isCredentialsValid) {
       
        alert('Login successful');
        window.location.href = '/secure-page.html';
    } else {
        alert('Login failed. Check your credentials.');
    }
});

async function checkCredentials(username, password) {
    
    const web3 = new Web3(Web3.givenProvider);

    const authorizedUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];

    const user = authorizedUsers.find(u => u.username === username && u.password === password);

    return !!user;
}
