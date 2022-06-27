const connection = require('./connection');

const serialize = (userData) => {
    return {
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email
    }
};

const getAll = async () => {
    const [user] = await connection.execute('SELECT * FROM users');

    return user;
};

const findById = async (id) => {
    const query = 'SELECT first_name, last_name, email FROM users_crud.users WHERE id = ?'
    const [userData] = await connection.execute(query, [id]);

    if (userData.length === 0) return null;

    const { firstName, lastName, email } = userData.map(serialize)[0];

    return getNewAuthor({
        id,
        firstName,
        lastName,
        email
    });
};

const isValid = (firstName, email, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (email && typeof email !== 'string') return false;

    return true;
};

// const create = async (firstName, email, lastName, password) => connection.execute(
//     'INSERT INTO users_crud.users (first_name, email, last_name, password) VALUES (?,?,?,?)',
//     [firstName, email, lastName],
// );

function create({ firstName, lastName, email, password }) {
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
    // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
    return connection.execute(query, [firstName, lastName, email, password])
        // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
        .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

module.exports = {
    getAll,
    findById,
    isValid,
    create
};