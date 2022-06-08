const readLineSync = require("readline-sync");

const distancia = readLineSync.questionFloat('Digite a distancia em Metros: ');
const tempo = readLineSync.questionFloat('Digite o tempo em segundos: ');

function speed() {
    console.log(`${(distancia/tempo).toFixed(2)} metros por segundo`);
}

speed();