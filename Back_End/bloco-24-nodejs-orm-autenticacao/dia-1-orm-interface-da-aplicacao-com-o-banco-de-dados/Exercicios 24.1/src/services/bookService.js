const { Books } = require('../../src/database/models');

const bookService = {
    list: async () => {
        const book = await Books.findAll();
        return book;
    },

    create: async ({ title, author, pageQuantity }) => {
        const book = await Books.create({ title, author, pageQuantity });
        return book;
    },

    findById: async (id) => {
        const book = await Books.findByPk(id);

        if (!book) {
            const e = new Error('Book not found');
            e.name = 'NotFoundError';
            throw e;
        }
        return book;
    },

    update: async (id, { title, author, pageQuantity }) => {
        const [book] = await Books.update(
            {
                title,
                author,
                pageQuantity,
            },
            { where: { id } },
        );
        return book;
    },

    delete: async (id) => {
        const book = await Books.destroy(
            { where: { id } },
        );
        return book;
    },
};

module.exports = bookService;