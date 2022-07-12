require('express-async-errors');

const app = require('./app');
const PORT = process.env.PORT || 3307;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));