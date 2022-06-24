const express = require('express');
const app = express();
const port = 3000;
const Users = require('./Model/Users');
const middlewares = require('./middlewares');
// const Books = require('./models/Books');
// const ByAuthorId = require('./models/ByAuthorId');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
    const users = await Users.getAll();

    res.status(200).json(users);
});

// Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`
app.post('/user', middlewares.createUser);

app.use(middlewares.error);

app.listen(port, () => console.log(`Escutando no porto ${port}`));