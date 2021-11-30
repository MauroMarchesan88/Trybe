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
let resultadoFinal = "";
let asterisco = "*";

for (let index = 0; index < n; index+=1) {
    resultadoFinal = resultado.slice(0, ((n-1)-index));
    for(let k = 0; k<= index; k+=1){
        resultadoFinal += asterisco;
    }

    console.log(resultadoFinal);
}
0+4
0+5
