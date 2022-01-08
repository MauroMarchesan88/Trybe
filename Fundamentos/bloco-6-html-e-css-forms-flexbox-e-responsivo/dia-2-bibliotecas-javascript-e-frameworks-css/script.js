// DatePicjerX call
document.getElementById('input-dataInicio').DatePickerX.init({format:'dd-mm-yyyy'});
// PopupValidation setup

validation.rules["minLength"] = {
    message: "Minimo de 3 letras",
    method: el => {
      return el.value.length > 3
    }    
}
validation.rules["maxLength"] = {
    message: "Maximo de 10 letras",
    method: el => {
      return el.value.length < 10
    }    
}

const estados = document.getElementById('estado');
const arrayEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', 'Goias', 'Maranhao', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Para', 'Paraiba', 'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
for (let i = 0; i < arrayEstados.length; i += 1) {
    let opcion = document.createElement('option');
    opcion.innerText = arrayEstados[i];
    estados.appendChild(opcion);
}
const inputs = document.getElementsByTagName('input');
const footer = document.getElementById('footer');
const botaoLimpar = document.getElementById('limpar');
const botaoSubmit = document.getElementById('submit-btn');

function contadorDeAcer() {
    let contador = 0;
    for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value !== '') {
            contador += 1;
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
    validation.init("#form");
    validation.highlight('#form');
    validation.init('#form2');
    validation.highlight('#form2');
    contadorDeAcer();
}
function limparTudo() {
    validation.hideAll('#form');
    validation.hideAll('#form2');
    footer.innerHTML = '';
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
    }
}

botaoSubmit.addEventListener('click', botaoSubmitFunc);
botaoLimpar.addEventListener('click', limparTudo);