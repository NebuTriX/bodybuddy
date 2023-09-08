const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite3.Database('./db.sqlite');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const { username, password } = req.body;
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not create user.' });
    }
    res.status(201).json({ message: 'User created successfully.' });
  });
});

app.get('/api/users/:username', (req, res) => {
  const { username } = req.params;
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Could not fetch user data.' });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json({ user });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
