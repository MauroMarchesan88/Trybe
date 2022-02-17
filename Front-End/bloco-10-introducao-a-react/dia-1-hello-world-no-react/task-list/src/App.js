import './App.css';
const compromissos = ['terminar exercicios 10.1', 'dar uma lida no 10.2', 'conquistar o mundo Pinky'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return compromissos.map((element) => Task(element));
}

export default App;
