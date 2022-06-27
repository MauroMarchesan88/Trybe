const Cep = require('../model/CepModel');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
    if (!CEP_REGEX.test(searchedCep)) {
        return {
            error: {
                code: 'invalidData',
                message: 'CEP inválido',
            },
        };
    }
    const cep = await Cep.findAddressByCep(searchedCep);
    if (!cep) {
        return {
            error: {
                code: 'notFound',
                message: 'CEP não encontrado',
            },
        };
    }
    return cep;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
    // Começamos buscando o cep que estamos tentando cadastrar
    const existingCep = await Cep.findAddressByCep(cep);

    // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
    if (existingCep) {
        return {
            error: {
                code: 'alreadyExists',
                message: 'CEP já existente',
            },
        };
    }

    // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
    return Cep.createCep({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
    findAddressByCep,
    createCep,
};