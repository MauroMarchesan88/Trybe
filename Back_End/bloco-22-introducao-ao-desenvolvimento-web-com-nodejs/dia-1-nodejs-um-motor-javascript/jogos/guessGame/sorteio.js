const readlineSync = require('readline-sync');

const guess = readlineSync.questionInt('Digite um numero: ');

function randomNumber() {
    const number = Math.floor(Math.random() * 10) + 1;
    if(number === guess) {
        return console.log("Parabéns, número correto!");
    }
    return console.log(`Opa, não foi dessa vez. O número era ${number}`);
};

randomNumber();