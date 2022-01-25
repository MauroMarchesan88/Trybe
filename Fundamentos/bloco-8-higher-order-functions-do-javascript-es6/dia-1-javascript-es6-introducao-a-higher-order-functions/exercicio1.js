// const func = (nomeCompleto) => {
//     const nome = nomeCompleto.split(' ');
//     const email = `${nome.join('_')}@Trybe.com`;
//     return {
//         nomeCompleto: nomeCompleto,
//         email: email,
//     };
// };

// const newEmployees = (func) => {
//     const employees = {
//       id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
// };


// console.log(newEmployees(func));

// const sorteio = (num) => {
//     let numeroDaSorte = 0;
//     const randomNum = () => {
//         numeroDaSorte = Math.floor(Math.random() * 50);
//         return numeroDaSorte;
//     };
//     randomNum();
//     console.log(numeroDaSorte);
//     if (num === numeroDaSorte) {
//         return 'Parabéns, vocé ganhou'
//     } else {
//         return 'Tente novamente';
//     }
// };
// console.log(sorteio(5));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const check = (gabarito, respostas) => {
//     let contador = 0;
//     for (let index = 0; index < respostas.length; index += 1 ) {
//         if (respostas[index] === 'N.A') {
//             contador+= 0;
//         } else if (respostas[index] === gabarito[index]) {
//             contador+= 1;
//         } else {
//             contador-= 0.5;
//         };
//     };
//     return contador;
// };
// const prova = (gabarito, respostas, check) => {
//     const resultado = check(gabarito, respostas);
//     return resultado;
    
// };

// console.log(prova(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
