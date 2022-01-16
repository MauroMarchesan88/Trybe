const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const ifScope = 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !';

const testingScope = (escopo) => escopo ? console.log(ifScope): console.log(elseScope);

testingScope(true);
testingScope(false);

//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const arrayFinal = oddsAndEvens.sort(function(a, b){return a-b}) // https://www.w3schools.com/jsref/jsref_sort.asp

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
