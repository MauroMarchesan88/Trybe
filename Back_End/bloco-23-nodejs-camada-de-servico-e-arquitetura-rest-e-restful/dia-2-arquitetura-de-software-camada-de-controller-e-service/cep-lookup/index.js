const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const Ping = require('./controllers/Ping');
const Cep = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', Ping.ping);
app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.createCep);

// app.get('/books', rescue(Book.getAll));
// app.get('/books/:id', rescue(Book.findByAuthorId));
// app.post('/books', rescue(Book.createBook));

app.use(errorMiddleware);

const { env: { PORT } } = process;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));