//1
const n = 5;

// let resultado = "";

// for (let index = 0; index < n; index+=1) {
//     resultado = "";
//     for (let i = 0; i < n; i+=1) {
//         resultado += "*";
//     }
    
//     console.log(resultado);
// }

//2
// for (let index = 0; index < n; index+=1) {
//     resultado += "*";
//     console.log(resultado)
// }

//3
let resultado = "     ";
let espacio = " ";
let resultadoFinal;
let asterisco = "*";

// for (let index = 0; index < n; index+=1) {
//     resultadoFinal = resultado.slice(0, ((n-1)-index));
//     for(let k = 0; k<= index; k+=1){
//         resultadoFinal += asterisco;
//     }

//     console.log(resultadoFinal);
// }

//4
resultadoFinal = []
resultadoFinal = resultado.split("")

console.log(resultadoFinal);

for (let linha = 0; linha < 3; linha+=1) {
    
    for (let colunaDireita = 0; colunaDireita < linha; colunaDireita++) {
        resultadoFinal.splice(resultadoFinal.length)
        
    }
    for (let colunaEsquerda = 0; colunaEsquerda < linha; colunaEsquerda++) {
        
        
    }
}
console.log(resultadoFinal);

