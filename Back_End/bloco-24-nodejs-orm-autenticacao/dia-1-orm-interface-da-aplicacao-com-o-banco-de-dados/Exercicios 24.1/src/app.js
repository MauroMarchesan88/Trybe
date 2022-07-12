// concentra Router + middleware de erros

const express = require('express');
const booksRouter = require('./routers/booksRouter');

const app = express();

app.use(express.json());
app.use('/books', booksRouter);
app.use((err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message });
            break;
        case 'NotFoundError':
            res.status(400).json({ message });
            break;
        case 'ConflictError':
            res.status(409).json({ message });
            break;
        case 'UnauthorizedError':
            res.status(401).json({ message });
            break;
        default:
            res.status(500).json({ message });
            break;
    }
});

module.exports = app;