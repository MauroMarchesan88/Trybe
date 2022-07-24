const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora
const getNewBook = (bookData) => {
    const { title, authorID } = bookData;

    return {
        title,
        authorID,
    };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => bookData.map((item) => getNewBook({
    title: item.title,
    authorID: item.author_id
}));

// Busca todos os livros do banco.

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT title, author_id FROM model_example.books;',
    );
    return serialize(books);
};

/*
Busca um livro específico, a partir do seu author_ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findByAuthorId = async (id) => {
    const query = `
    SELECT author_id, title
    FROM model_example.books 
    WHERE author_id = ?
  `;

    const [bookData] = await connection.execute(query, [id]);

    if (bookData.length === 0) return null;

    return serialize(bookData);
};

const createBook = async (title, authorId) => {
    const [Book] = await connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
        [title, authorId],
    );
    return [getNewBook({ id: Book.insertId, title, authorId })];
};

const findByName = async (title) => {
    // Determinamos se devemos buscar com ou sem o nome do meio
    const query = `
      SELECT id, title, author_id
      FROM model_example.books
      WHERE title = ?
    `;

    // Executamos a consulta e retornamos o resultado
    const [bookData] = await connection.execute(query, [title]);

    // Caso nenhum author seja encontrado, devolvemos null
    if (bookData.length === 0) return null;

    // Caso contrário, retornamos o author encontrado
    return serialize(bookData);
};

module.exports = {
    getAll,
    findByAuthorId,
    createBook,
    findByName
};