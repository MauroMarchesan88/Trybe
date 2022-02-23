import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
            <fieldset>
                <select name='primeiro' onChange={this.handleChange}>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                </select>
                <select name='segundo' onChange={this.handleChange}>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value='F'>F</option>
                </select>
                <input name='fileInput' type="file" />
            </fieldset>
            <fieldset>
                <input
                    type="number"
                    name="idade"
                    onChange={this.handleChange}
                />
                <input
                    type="checkbox"
                    name="vaiComparecer"
                    onChange={this.handleChange}
                />
            </fieldset>
            <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea 
              name="estadoFavorito" 
              value={this.state.estadoFavorito} 
              onChange={this.handleChange}
              />
            </label>
        </form>
      </div>
    );
  }
}

export default Form;