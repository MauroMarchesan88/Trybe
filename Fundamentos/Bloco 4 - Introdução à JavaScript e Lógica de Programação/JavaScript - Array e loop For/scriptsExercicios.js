let resultado = 0;

let num = 0;
let a = 0;
let b = 0;

//1-a
function adicao(a,b) {
    resultado = a+b;
    return resultado
}
//1-b
function subtracao(num,num2) {
    resultado = num-num2
    return resultado
}
//1-c
function multiplicacao(num,num2) {
    resultado = num*num2
    return resultado
}
//1-d
function divisao(num,num2) {
    resultado = num/num2
    return resultado
}
//1-d
function modulo(num,num2) {
    resultado = num%num2
    return resultado
}
//2
function maior(num,num2) {
    if (num>num2) {
        resultado = num
    }else {
        resultado = num2
    }
    return resultado
}
//3
function maiorTres(num,num2,num3) {
    if (num>num2 && num>num3) {
        resultado = num
    }else if(num2>num && num2>num3){
        resultado = num2
    }else {
        resultado = num3
    }
    return resultado
}
//4
function posNeg(num) {
    if (num>0) {
        resultado = "positive"
    } else if (num<0){
        resultado = "negative"
    } else {
        resultado = "zero"
    }
    return resultado
}
//5
function booleanFun(num,num2,num3) {
    if (num+num2+num3 == 180) {
        resultado = true
    } else if (num+num2+num3 < 0){
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
//7
function nota(num) {
    if (num >= 90) {
        resultado = "A"
    } else if(num >= 80 && num < 90) {
        resultado = "B"
    } else if(num >= 70 && num < 80) {
        resultado = "C"
    } else if(num >= 60 && num < 70) {
        resultado = "D"
    } else if(num >= 50 && num < 60) {
        resultado = "E"
    } else {
        resultado = "F"
    }

    return resultado
}
//8
function peloMenosUmPar(num,num2,num3) {
    if(num%2 ==0 || num2%2 ==0 || num3%2 == 0){
        return true
    } else {
        return false
    }
}
//9
function peloMenosUmImpar(num,num2,num3) {
    if(num%2 ==1 || num2%2 ==1 || num3%2 ==1){
        return true
    } else {
        return false
    }
}
//10
function lucroMil(valorCusto, valorVenda) {
    if (valorCusto == 0 || valorVenda == 0) {
        resultado = "Valores nao podem ser Zero";
        return resultado
    }
    const impostoSobreOCusto = valorVenda * 0.2;

    let valorCustoTotal = valorCusto + impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;
    
    resultado = lucro *1000;
    console.log(lucro);
    return resultado
}
//11
var inss = 0;
var impostoDeRenda = 0;

function calculoInss(salarioBruto) {
    if (salarioBruto <= 1556.94 ) {
        inss = salarioBruto*0.08;
    } else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94){
        inss = salarioBruto*0.09;
    } else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92){
        inss = salarioBruto*0.11;
    } else {
        inss = 570.88;
    }
    return inss
} 

function calculoIR(salarioBruto) {
    if (salarioBruto <= 1903.98 ) {
        impostoDeRenda = 0;
    } else if (salarioBruto <= 2826.65 && salarioBruto > 1903.98){
        impostoDeRenda = salarioBruto*0.075;
    } else if (salarioBruto <= 3751.05 && salarioBruto > 2826.66){
        impostoDeRenda = salarioBruto*0.15;
    } else if (salarioBruto <= 4664.68 && salarioBruto > 3751.05){
        impostoDeRenda = salarioBruto*0.225; 
    } else {
        impostoDeRenda = (salarioBruto*0.275)+ 869.36;
    }
    return impostoDeRenda
}

function salario(salarioBruto) {
    calculoIR(salarioBruto);
    calculoInss(salarioBruto);
    resultado = salarioBruto - inss - impostoDeRenda;
    console.log("IR = " + impostoDeRenda);
    console.log("INSS = " + inss);
    return resultado;
}
