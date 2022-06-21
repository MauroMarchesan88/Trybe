const connection = require('./connection');

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

module.exports = {
    getAllBooks,
};
