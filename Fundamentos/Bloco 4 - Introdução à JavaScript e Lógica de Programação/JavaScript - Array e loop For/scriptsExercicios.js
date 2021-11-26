let resultado = 0;



//1-a
function adicao(a,b) {
    resultado = a+b;
    return resultado
}
//1-b
function subtracao(a,b) {
    resultado = a-b
    return resultado
}
//1-c
function multiplicacao(a,b) {
    resultado = a*b
    return resultado
}
//1-d
function divisao(a,b) {
    resultado = a/b
    return resultado
}
//1-d
function modulo(a,b) {
    resultado = a%b
    return resultado
}
//2
function maior(c,d) {
    if (c>d) {
        resultado = c
    }else {
        resultado = d
    }
    return resultado
}
//3
function maiorTres(c,d,e) {
    if (c>d && c>e) {
        resultado = c
    }else if(d>c && d>e){
        resultado = d
    }else {
        resultado = e
    }
    return resultado
}
//4
function posNeg(a) {
    if (a>0) {
        resultado = "positive"
    } else if (a<0){
        resultado = "negative"
    } else {
        resultado = "zero"
    }
    return resultado
}
//5
function booleanFun(c,d,e) {
    if (c+d+e == 180) {
        resultado = true
    } else if (c+d+e < 0){
        resultado = "valor negativo"
    } else {
        resultado = false
    }
    return resultado
}
//6
function xadrez(peca) {
    let pecaLC = peca.toLowerCase();
    switch (pecaLC) {
        case "pawn":
            resultado ="1 espaço a frente ou um diagonal a frente";
            break;
        case "tower":
            resultado="linha reta";
            break;
        case "knight":
            resultado="ehrmagehrdh";
            break;
        case "bishop":
            resultado="diagonal";
            break;
        case "queen":
            resultado="a vontade";
            break;
        case "king":
            resultado="1 espaço";
            break;
        default:
            resultado="error"
            break;
    }
    return resultado
}

