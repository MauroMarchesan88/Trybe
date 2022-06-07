const operators = require('./operators');
const readLine = require('readline-sync');


console.log('Calculadora Simples');
const num1 = readLine.questionInt('Digite um numero: ');
const oper = readLine.question('Digite um operador: (+, -, *, / ) ');
const num2 = readLine.questionInt('Digite um numero: ');

switch (oper) {
    case '+':
        operators.sum(num1, num2)
        break
    case '-':
        operators.sub(num1, num2)
        break
    case '*':
        operators.mul(num1, num2)
        break
    case '/':
        operators.div(num1, num2)
        break
    default:
        console.log("Opa! operador desconhecido")
}