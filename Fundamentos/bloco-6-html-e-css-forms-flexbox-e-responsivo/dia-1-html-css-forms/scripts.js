const estados = document.getElementById('estado');
const arrayEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goias', 'Maranhao', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Para', 'Paraiba', 'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
for (let i = 0; i < arrayEstados.length; i += 1) {
    let opcion = document.createElement('option');
    opcion.innerText = arrayEstados[i];
    estados.appendChild(opcion);
}
const dataInicio = document.getElementById('input-dataInicio');
console.log(dataInicio);

const botaoSubmit = document.getElementById('botao');
const inputs = document.getElementsByTagName('input');
const footer = document.getElementById('footer');
const botaoLimpar = document.getElementById('limpar');
function contadorDeAcer(event) {
    let contador = 0;
    for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value !== '') {
            contador += 1;
            console.log(contador);
            const divAcertou = document.createElement('div');
            divAcertou.classList.add('acertou' + i);
            divAcertou.innerHTML = inputs[i].value
            footer.appendChild(divAcertou);
        }
    }
    if (contador < 10) {
        footer.innerHTML = '';
    }
}
function botaoSubmitFunc(event) {
    event.preventDefault();
    console.log('test');
    contadorDeAcer(event);
}
function limparTudo() {
    footer.innerHTML = '';
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
    }
}

botaoSubmit.addEventListener('click', botaoSubmitFunc);
botaoLimpar.addEventListener('click', limparTudo);