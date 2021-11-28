//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

//2
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}
// console.log(soma)

//3
let promedio = (soma / numbers.length)
// console.log(promedio)

//4
if (promedio > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

//5
let numActual = 0;
for (let index = 0; index < numbers.length; index+= 1) {
    if (numActual < numbers [index]) {
        numActual = numbers[index];
    }
}
// console.log(numActual)

//6
let resultado = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index]%2 != 0) {
        resultado +=1;
    } if (resultado == 0) {
        console.log("nenhum valor impar encontrado");
    }  
}
// console.log(resultado)

//7
let numMenor = 200;
for (let index = 0; index < numbers.length; index+=1) {
    if (numMenor > numbers[index]) {
        numMenor = numbers[index]
    }
}
// console.log(numMenor)

//8
let numbers =[]
for (let index = 1; index <= 25; index+=1) {
    numbers.push(index);
}
// console.log(array)

//9
let dividido = 0;
for (let index = 0; index < numbers.length; index+=1) {
    dividido = numbers[index] /2;
    console.log(dividido);    
}