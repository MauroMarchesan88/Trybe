const Book = require('../services/Book');
const Joi = require('joi');

const getAll = async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
};

const findByAuthorId = async (req, res, next) => {
    const { id } = req.params;

    const book = await Book.findByAuthorId(id);

    // Caso o service retorne um erro, interrompemos o processamento
    // e inicializamos o fluxo de erro
    if (book.error) return next(book.error);

    // Caso não haja nenhum erro, retornamos o book encontrado
    return res.status(200).json(book);
};

const createBook = async (req, res, next) => {
    const {
        title,
        author_id: authorId,
    } = req.body;

    // Utilizamos o Joi para descrever o objeto que esperamos
    // receber na requisição. Para isso, chamamos Joi.object()
    // passando um objeto com os campos da requisição e suas descrições
    const { error } = Joi.object({
        title: Joi.string().not().empty().required(),
        authorId: Joi.number().not().empty().required(),
    }).validate({ title, authorId }); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras

    // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
    if (error) {
        return next(error);
    }

    // Caso não haja erro de validação, prosseguimos com a criação da pessoa autora
    const newBook = await Book.createBook(title, authorId);

    // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
    if (newBook.error) return next(newBook.error);

    // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
    // da nova pessoa autora
    return res.status(201).json(newBook);
};

module.exports = {
    getAll,
    findByAuthorId,
    createBook
};