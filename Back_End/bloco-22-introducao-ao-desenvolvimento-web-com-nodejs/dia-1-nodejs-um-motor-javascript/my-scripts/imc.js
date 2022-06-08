const readLineSync = require("readline-sync");

const peso = readLineSync.questionFloat('Digite seu peso em KG: ');
const altura = readLineSync.questionFloat('Digite sua altura em Metros: ')

const tabelaIMC = {
    'Abaixo do peso (magreza)': {
      imcMinimo: 0,
      imcMaximo: 18.4,
    },
    'Peso normal': {
      imcMinimo: 18.5,
      imcMaximo: 24.9,
    },
    'Acima do peso (sobrepeso)': {
      imcMinimo: 25,
      imcMaximo: 29.9,
    },
    'Obesidade grau I': {
      imcMinimo: 30.0,
      imcMaximo: 34.9,
    },
    'Obesidade grau II': {
      imcMinimo: 35,
      imcMaximo: 39.9,
    },
    'Obesidade graus III e IV': {
      imcMinimo: 40,
      imcMaximo: 100
    },
};

function situacao(total) {
    const situacoes = Object.keys(tabelaIMC);
    const situacaoEncontrada = situacoes.find((situacao) => {
      const { imcMaximo, imcMinimo } = tabelaIMC[situacao];
  
      return total >= imcMinimo && total <= imcMaximo;
    })
    return situacaoEncontrada;
};

function imc() {
    const total = (peso / (altura * altura)).toFixed(2);
    console.log(`Seu IMC seria: ${total}`);
    console.log(situacao(total));
}

imc();

// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV