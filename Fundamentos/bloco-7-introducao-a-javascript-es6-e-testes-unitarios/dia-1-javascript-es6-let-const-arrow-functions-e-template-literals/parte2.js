function retornaFatorial(numer) {
    let resultado = 0;
    if (numer < 0){
        return -1
    } else if (numer == 0) {
        return 1
    } else {
        resultado = (numer * retornaFatorial(numer -1));
        console.log(resultado);
        return resultado;
    }
}
retornaFatorial(5)

//2
function longestWord(string) {
    const resultado = string.split(' ');
    console.log(resultado);
    let palavra = '';
    for (let index = 0; index < resultado.length; index += 1) {
        if (resultado[index].length > palavra.length) {
            palavra = resultado[index]
        }
    }
    console.log(palavra);
    return palavra;
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

//3
