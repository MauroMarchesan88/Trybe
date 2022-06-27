module.exports = (erro, req, res, next) => {
    if (erro.statusCode) {
        return res.status(erro.statusCode).json({ message: erro.message });
    };
    return res.status(500).end();
};