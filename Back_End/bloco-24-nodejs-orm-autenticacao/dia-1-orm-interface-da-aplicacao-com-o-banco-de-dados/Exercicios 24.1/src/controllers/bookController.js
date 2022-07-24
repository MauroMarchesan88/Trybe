const bookService = require('../services/bookService')

// Este endpoint usa o método findAll do Sequelize para retorno todos os Books.
const bookController = {
    list: async (_req, res) => {
        const books = await bookService.list();
        res.status(200).json(books);
    },

    create: async (req, res) => {
        const { title, author, pageQuantity } = req.body;

        const books = await bookService.create({ title, author, pageQuantity });

        res.status(201).json(books);
    },

    findById: async (req, res) => {
        const books = await bookService.findById(req.params.id);

        res.status(200).json(books);
    },

    update: async (req, res) => {
        const { title, author, pageQuantity } = req.body;
        const { id } = req.params;

        const updateBook = await bookService.update(id, { title, author, pageQuantity });
        if (!updateBook) return res.status(404).json(updateBook);

        return res.status(200).json({ message: 'Book updated' });
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const deleteBook = await bookService.delete(id);
        if (!deleteBook) return res.status(404).json({ message: 'Book not found' });

        return res.status(200).json({ message: 'Book deleted' });
    }
};

module.exports = bookController;