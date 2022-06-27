const rescue = require('express-rescue');
const Joi = require('joi');
const service = require('../services/CepService');

const findAddressByCep = rescue(async (req, res, next) => {
    const { cep } = req.params;

    const address = await service.findAddressByCep(cep);

    // Caso o service retorne um erro, interrompemos o processamento
    // e inicializamos o fluxo de erro
    if (address.error) return next(address.error);
    // Caso não haja nenhum erro, retornamos o address encontrado
    return res.status(200).json(address);
});

const createCep = rescue(async (req, res, next) => {
    const { error } = Joi.object({
        cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
        logradouro: Joi.string().not().empty().required(),
        bairro: Joi.string().not().empty().required(),
        localidade: Joi.string().not().empty().required(),
        uf: Joi.string().not().empty().required()
            .length(2),
    }).validate(req.body); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras

    // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
    if (error) {
        return next(error);
    }

    // Caso não haja erro de validação, prosseguimos com a criação da pessoa autora
    const newCep = await service.createCep(req.body);

    // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
    if (newCep.error) return next(newCep.error);

    // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
    // da nova pessoa autora
    return res.status(201).json(newCep);
});

module.exports = {
    findAddressByCep,
    createCep,
};