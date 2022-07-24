const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
require('dotenv').config();

const Author = require('./controllers/Authors');
const Book = require('./controllers/Books');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.get('/books', rescue(Book.getAll));
app.get('/books/:id', rescue(Book.findByAuthorId));
app.post('/books', rescue(Book.createBook));

app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));