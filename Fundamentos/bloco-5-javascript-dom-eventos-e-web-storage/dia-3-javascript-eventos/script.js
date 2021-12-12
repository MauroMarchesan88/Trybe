function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDate() {
  const weekDateList = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const date = dezDaysList[index];
    const dateListItem = document.createElement('li');
    dateListItem.innerHTML = date;
    dateListItem.classList.add('day');
    if( date === 24 || date === 25 || date === 31) {
      dateListItem.classList.add('holiday');
    } 
    if ( date === 4 || date === 11 || date === 18|| date === 25) {
      dateListItem.classList.add('friday');
    }

    weekDateList.appendChild(dateListItem);
  };
};
//console.log(document.querySelector('#days'));
createDate();

//2

function holiDay(){
  let botao = document.createElement('button');
  botao.id ='btn-holiday';
  botao.innerHTML ='Feriados';
  let div = document.querySelector('.buttons-container');
  div.appendChild(botao);
}
holiDay();

//3
let botaoId = document.getElementById('btn-holiday');
botaoId.addEventListener('click', clickFeriados);

function clickFeriados() {
  let colorBase = "rgb(238,238,238)";
  let feriados = document.querySelectorAll('.holiday');
  for(let i = 0; i < feriados.length; i += 1){
    if(feriados[i].style.backgroundColor === "green") {
      feriados[i].style.backgroundColor = colorBase;
    } else {
      feriados[i].style.backgroundColor = "green";
    }
  }
}

//4

function sextaF(){
  let sextou = document.createElement('button');
  sextou.id ='btn-friday';
  sextou.innerHTML ='Sexta-feira';
  let divSext = document.querySelector('.buttons-container');
  divSext.appendChild(sextou);
}
sextaF();

//5
let botaoSextaId = document.getElementById('btn-friday');
botaoSextaId.addEventListener('click', clickSexta);
let sextas = document.querySelectorAll('.friday');
  let innerVelho = []
  for(let k = 0; k < sextas.length; k += 1){
    innerVelho.push(sextas[k].innerHTML);
  }

function clickSexta() {
  for(let i = 0; i < sextas.length; i += 1){
    if(sextas[i].innerHTML === "Sextou Mufasa!") {
      sextas[i].innerHTML = innerVelho[i];
    } else {
      sextas[i].innerHTML = "Sextou Mufasa!";
    } 
  }
}

//6
const dias = document.querySelectorAll('.day');
for (let i = 0; i < dias.length; i+=1) {
  dias[i].addEventListener('mouseover', zoom);
  dias[i].addEventListener('mouseleave', zoomOut);
  dias[i].addEventListener('click', taskColor);
}

function zoom(event) {
  event.target.style.fontSize = 'xx-large';
}
function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

//7
function tarefa(string){
  let span = document.createElement('span');
  span.innerHTML = string;
  let div = document.querySelector('.my-tasks');
  div.appendChild(span);
}
tarefa("cozinhar");

//8

function legenda(string) {
  let cor = document.createElement('div');
  cor.classList.add('task');
  cor.style.backgroundColor = string;
  let div = document.querySelector('.my-tasks');
  cor.addEventListener('click', selectTask);
  div.appendChild(cor);
}

//9
let tasks = document.querySelectorAll('.task');

function selectTask(event)  {
  let taskTarget = event.target;
  
  if(taskTarget.className == 'task-selected'){
    taskTarget.classList.replace('task-selected','task');
  } else {
    taskTarget.classList.replace('task','task-selected');
  }
}

//10

function taskColor(event) {
  let selectedTask = document.querySelector('.task-selected');
  let diaTask = event.target;
  if(diaTask.style.color === selectedTask.style.backgroundColor){
    diaTask.style.color = 'rgb(119,119,119)';
  }else {
    diaTask.style.color = selectedTask.style.backgroundColor;
  } 
}

//bonus

let textoCompromisso = document.getElementById('task-input');
let botonCompromisso = document.getElementById('btn-add');
console.log(textoCompromisso);
textoCompromisso.addEventListener('k')
