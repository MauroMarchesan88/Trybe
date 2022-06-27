module.exports = (req, _res, next) => {
    try {
        const { name } = req.body;
        if (!name || name.length <= 3) {
            const erro = new Error('invalid data');
            erro.statusCode = 400;
            return next(erro);
        }
        return next();
    } catch (erro) {
        next(erro);
    };
};