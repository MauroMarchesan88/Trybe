// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  // Adicionar lógica aqui!
  const body = document.querySelector('body');
    const jokeContainer = document.getElementById('jokeContainer');
    const p = document.createElement('p');
    jokeContainer.appendChild(p);
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => p.innerHTML = (data.joke))
};

window.onload = () => fetchJoke();
