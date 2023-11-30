const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

        if (user) {
            alert("Login successful!");
           
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
