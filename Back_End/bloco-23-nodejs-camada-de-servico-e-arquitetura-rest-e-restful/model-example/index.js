const express = require('express');
const app = express();
const port = 3000;
const Author = require('./models/Author');
const Books = require('./models/Books');
const ByAuthorId = require('./models/ByAuthorId');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
    const id = req.params.id;
    const books = await ByAuthorId.getByAuthorId(id);

    res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
    const books = await Books.getAllBooks();

    res.status(200).json(books);
});

app.listen(port, () => console.log(`Escutando no porto ${port}`));
