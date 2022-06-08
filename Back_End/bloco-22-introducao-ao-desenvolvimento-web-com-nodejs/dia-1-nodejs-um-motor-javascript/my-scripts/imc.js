const readLineSync = require("readline-sync");

const peso = readLineSync.questionFloat('Digite seu peso em KG: ');
const altura = readLineSync.questionFloat('Digite sua altura em Metros: ')

function imc() {
    const total = peso / (altura * altura);
    console.log(total.toFixed(2));
}

imc();

// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV