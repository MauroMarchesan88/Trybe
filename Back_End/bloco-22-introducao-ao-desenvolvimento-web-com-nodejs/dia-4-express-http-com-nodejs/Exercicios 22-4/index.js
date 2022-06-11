const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function (_req, res) {
    res.json({ message: 'pong' });
});

app.post('/hello', function (req, res) {
    const { name } = req.body;
    res.status(201).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', function (req, res) {
    const { name, age } = req.body;
    if (age < 17) return res.status(401).json({ message: 'Unauthorized' });
    res.status(201).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', function (req, res) {
    const { name, age } = req.params;
    res.status(201).json({ message: `Seu nome é ${name} e vocé tem ${age} anos de idade` });
});

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});