// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
    
        res.json({ authenticated: true, username: user.username });
    } else {
        res.json({ authenticated: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
