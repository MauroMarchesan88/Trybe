const connection = require('./connection');
const authorIds = [1, 2, 3, 4, 5];

const getNewBook = ({ authorId, title }) => {
    return {
        authorId,
        title,
    };
}
const serialize = (bookData) => {
    return {
        authorId: bookData.author_id,
        title: bookData.title
    }
}
const getAllBooks = async () => {
    const [books] = await connection.execute('SELECT author_id, title FROM books');

    return books.map(serialize).map(getNewBook);
}

const isValidBoook = (title, author_id) => {
    if (!title || typeof title !== 'string') return false;
    if (!author_id || typeof author_id !== 'string') return false;
    if (author_id < 1 || author_id > 5) return false;

    return true;
};

const createBook = async (title, author_id) => connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, author_id],
);

module.exports = {
    getAllBooks,
    isValidBoook,
    createBook
};
