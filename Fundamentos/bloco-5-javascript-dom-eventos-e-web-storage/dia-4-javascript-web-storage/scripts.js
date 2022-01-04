// creando elementos
const backgroundColorButton = document.createElement('input');
const textColorButton = document.createElement('input');
const textSizeButton = document.createElement('input');
const lineSpaceButton = document.createElement('input');
const textFontButton = document.createElement('input');
const optionsList = document.createElement('ul');
const body = document.getElementById('body');

//dando valor de text aos inputs. Nao achei forma dinamica de crialos;
backgroundColorButton.setAttribute('type', 'text');
textColorButton.setAttribute('type', 'text');
textSizeButton.setAttribute('type', 'text');
lineSpaceButton.setAttribute('type', 'text');
textFontButton.setAttribute('type', 'text');

//EventListeners
backgroundColorButton.addEventListener('change', changeBackColor);
textColorButton.addEventListener('change', changeTextColor);
textSizeButton.addEventListener('change',changeTextSize);
lineSpaceButton.addEventListener('change',changeLineSpace);
textFontButton.addEventListener('change',changeFont);

//funcoes para Events
function changeBackColor() {
    let input = document.getElementById('input0');
    let color = input.value;
    body.style.backgroundColor = color;
    localStorage.setItem('corDeFundo', color);
}

function changeTextColor() {
    let input1 = document.getElementById('input1');
    let colorText = input1.value;
    body.style.color = colorText;
    localStorage.setItem('corDeTexto', colorText);
}

function changeTextSize() {
    let input2 = document.getElementById('input2');
    let text = document.getElementById('boxed');
    console.log(input2.value);
    let textSize = input2.value;
    text.style.fontSize = textSize;
    localStorage.setItem('tamanhoTexto', textSize);
}

function changeLineSpace() {
    let input3 = document.getElementById('input3');
    let texto = document.getElementById('boxed');
    console.log(input3.value);
    let lineSpace = input3.value;
    texto.style.lineHeight = lineSpace;
    localStorage.setItem('lineSpace', lineSpace);
}

function changeFont() {
    let input4 = document.getElementById('input4');
    let textFont = document.getElementById('boxed');
    console.log(input4.value);
    let font = input4.value;
    textFont.style.fontFamily = font;
    localStorage.setItem('fonte', font);
}

//adicionando lista de opcoes no footer
let options = [backgroundColorButton, textColorButton, textSizeButton, lineSpaceButton, textFontButton];
for(let i = 0; i< options.length; i +=1){
    let li = document.createElement('li');
    li = options[i];
    li.id = 'input' + i;
    optionsList.appendChild(li);
}

let footer = document.getElementById('footer');
footer.appendChild(optionsList);