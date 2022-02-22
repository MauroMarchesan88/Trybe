import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick1() {
    console.log(this);
    console.log('click 1');
  }
  handleClick2() {
    console.log(this);
    console.log('click 2');
  }
  handleClick3() {
    console.log(this);
    console.log('click 3');
  }
  render () {
    return (
    <>
      <label htmlFor='input'>
        <input name='input' type='password' />
        <button onClick={ this.handleClick1 }>Butao</button>
      </label>
      <label htmlFor='input2'>
        <input name='input2' type='password' />
        <button onClick={ this.handleClick2 }>Botao</button>
      </label>
      <label htmlFor='input3'>
        <input name='input4' type='password' />
        <button onClick={ this.handleClick3 }>Botão</button>
      </label>
    </>
    );
  }
}

export default App;
