// DatePicjerX call
document.getElementById('input-dataInicio').DatePickerX.init({format:'dd-mm-yyyy'});
// PopupValidation setup


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
validation.init()
