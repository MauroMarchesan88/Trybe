import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliquesB: 0,
      numeroDeCliquesC: 0
    }
    
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick1(event) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    this.state.numeroDeCliques % 2 === 0
    ? event.target.className = 'blue'
    : event.target.className = 'green';
    console.log(event.target.className);
  }
  handleClick2(event) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB: estadoAnterior.numeroDeCliquesB + 1
    }))
    this.state.numeroDeCliquesB % 2 === 0
    ? event.target.className = 'blue'
    : event.target.className = 'green';
    console.log(event.target.className);
  }
  handleClick3(event) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesC: estadoAnterior.numeroDeCliquesC + 1
    }))
    this.state.numeroDeCliquesC % 2 === 0
    ? event.target.className = 'blue'
    : event.target.className = 'green';
    console.log(event.target.className);
  }
  render () {
    return (
    <>
      <label htmlFor='input'>
        <input name='input' type='password' />
        <button className='white' onClick={ this.handleClick1 }>{ this.state.numeroDeCliques }</button>
      </label>
      <label htmlFor='input2'>
        <input name='input2' type='password' />
        <button className='white' onClick={ this.handleClick2 }>{ this.state.numeroDeCliquesB }</button>
      </label>
      <label htmlFor='input3'>
        <input name='input4' type='password' />
        <button className='white' onClick={ this.handleClick3 }>{ this.state.numeroDeCliquesC }</button>
      </label>
    </>
    );
  }
}

export default App;
