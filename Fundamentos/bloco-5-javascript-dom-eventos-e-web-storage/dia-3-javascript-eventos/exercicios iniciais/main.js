const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// O primeiro item 'li' tem uma modificaçao sobre a clase tech que muda a posicao. Deveria mudar, porem esta fixa;

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener('click', click);
secondLi.addEventListener('click', click);
thirdLi.addEventListener('click', click);



function click(eventoDeOrigem) {
  firstLi.removeAttribute('class');
  secondLi.removeAttribute('class');
  thirdLi.removeAttribute('class');
  input.removeAttribute('class');

  if(firstLi === eventoDeOrigem.target) {
    firstLi.classList.add('tech');
  } else if (secondLi === eventoDeOrigem.target) {
    secondLi.classList.add('tech');
  } else if (thirdLi === eventoDeOrigem.target) {
    thirdLi.classList.add('tech');
  }
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keydown', escrita);

function escrita() {
  firstLi.removeAttribute('class');
  secondLi.removeAttribute('class');
  thirdLi.removeAttribute('class');
  
  input.classList.add('tech');
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('click', tripleClick);

/////////////////////////////////////////////////////  usei ajuda do StackOverflow para entender como funciona event.detail
function tripleClick(event) {
  if (event.detail === 3) {
    alert('triple click');
    window.location.href = "https://MauroMarchesan88.github.io";
  }
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

myWebpage.addEventListener('mouseover', mudaCor);
myWebpage.addEventListener('mouseleave', resetaCor);

function mudaCor(event) {
  let objetivo = event.target;
  objetivo.style.backgroundColor = 'red';
}

function resetaCor(event) {
  let objetivo = event.target;
  objetivo.style.backgroundColor = '';
}
