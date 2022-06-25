const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const findByAuthorId = async (id) => {
    const Books = await Book.findByAuthorId(id);

    if (!Books) {
        return {
            error: {
                code: 'notFound',
                message: `Não foi possível encontrar um livro com o id ${id}`,
            },
        };
    }

    return Books;
};

const createBook = async (title, authorId) => {
    const existingBooks = await Book.findByName(title);

    if (existingBooks) {
        return {
            error: {
                code: 'alreadyExists',
                message: 'Um livro já existe com esse nome',
            },
        };
    }

    // Caso a pessoa autora não exista e, portanto, possa ser criado
    return Book.createBook(title, authorId);
};

module.exports = {
    getAll,
    findByAuthorId,
    createBook,
};