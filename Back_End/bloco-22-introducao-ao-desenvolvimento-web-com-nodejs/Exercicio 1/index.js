// sala 17 Dayane Barbosa, Carlos Afonso Flach, Rafael Oliveira

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('./token');
const { checkMail, checkPwd } = require('./loginUtils');
const nameMiddleware = require('./nameMiddleware');
const error = require('./error');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', nameMiddleware, async (req, res) => {
    const { email, password } = req.body;
    const checkedEmail = checkMail(email);
    if (email !== checkedEmail) return res.status(400).json({ message: checkedEmail });
    const checkedPwd = checkPwd(password);
    if (password !== checkedPwd) return res.status(400).json({ message: checkedPwd });
    res.status(201).json({ message: 'user created' });
});

app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    const checkedEmail = checkMail(email);
    if (email !== checkedEmail) return res.status(400).json({ message: checkedEmail });
    const checkedPwd = checkPwd(password);
    if (password !== checkedPwd) return res.status(400).json({ message: checkedPwd });
    const token = generateToken();
    res.status(200).json({ token });
});

app.use(error);

app.listen(3001, () => console.log('escutando'));