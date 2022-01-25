// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const wakeUp = () => {
    return `Acordando!!`;
};

const breakFast = () => {
    return 'Bora tomar café!!';
};

const sleep = () => {
    return 'Partiu dormir!!'
};

const doingThings = (action) => {
    return action;
};

// Ao chamar a função doingThings:
console.log(doingThings(wakeUp()));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
