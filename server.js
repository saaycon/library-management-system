const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Comrader@zv@n2211',
    database: 'exercise'
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    con.query('SELECT * FROM members WHERE username = ? AND user_password = ?', [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        if (results.length > 0) {
            res.sendFile(path.join(__dirname, 'homepage.html'));
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});