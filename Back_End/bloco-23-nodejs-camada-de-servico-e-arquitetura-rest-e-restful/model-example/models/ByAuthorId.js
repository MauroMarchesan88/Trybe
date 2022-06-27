const connection = require('./connection');

// const getById = (id) => {
//     const books
//     return {
//         authorId,
//         title,
//     };
// }
const serialize = (bookData) => {
    return {
        authorId: bookData.author_id,
        title: bookData.title
    }
}

const getByAuthorId = async (id) => {
    const [books] = await connection.execute('SELECT author_id, title FROM books');

    return books.map(serialize).filter((book) => book.authorId === Number(id))
}


module.exports = {
    getByAuthorId,
};
