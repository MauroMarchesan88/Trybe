import React from 'react'
import './App.css';

function handleClick1() {
  console.log('click 1');
}
function handleClick2() {
  console.log('click 2');
}
function handleClick3() {
  console.log('click 3');
}
class App extends React.Component {
  render () {
    return (
    <>
      <label htmlFor='input'>
        <input name='input' type='password' />
        <button onClick={ handleClick1 }>Butao</button>
      </label>
      <label htmlFor='input2'>
        <input name='input2' type='password' />
        <button onClick={ handleClick2 }>Botao</button>
      </label>
      <label htmlFor='input3'>
        <input name='input4' type='password' />
        <button onClick={ handleClick3 }>Botão</button>
      </label>
    </>
    );
  }
}

export default App;
