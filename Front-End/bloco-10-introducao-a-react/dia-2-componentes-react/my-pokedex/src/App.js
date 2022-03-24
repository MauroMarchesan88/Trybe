import React from 'react';
import './App.css';
import Pokemons from './Data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: Pokemons[0],
      pokeList: Pokemons,
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handlePokeTypes = this.handlePokeTypes.bind(this);
  }
  handleNextClick() {
    const { pokeMapType, pokemon } = this.state;
    const pokeMap = pokeMapType.map((pokemon) => pokemon.name);
    const pokeIndex = pokeMap.indexOf(pokemon.name);
    const nextPoke = pokeMapType[pokeIndex +1];
    if(pokeIndex >= pokeMapType.length -1) {
      this.setState({
        pokemon: pokeMapType[0],
      })
    } else {
      this.setState({
        pokemon: nextPoke,
      })
    }
  }

  handlePrevClick() {
    const { pokeMapType, pokemon } = this.state;
    const pokeMap = pokeMapType.map((pokemon) => pokemon.name);
    const pokeIndex = pokeMap.indexOf(pokemon.name);
    const negativeIndex = pokeIndex -1;
    const prevPoke = pokeMapType.at(negativeIndex);
    if(pokeIndex < pokeMapType.length) {
      this.setState({
        pokemon: prevPoke,
      })
    }
  }

  handleType(event) {
    const { pokeList } = this.state;
    const type = event.target.value;
    let pokeMapType = pokeList.filter((pokemon) => pokemon.type === type);
    if(type === "All") {
      pokeMapType = pokeList;
    }
    this.setState({
      pokeMapType: pokeMapType,
      pokemon: pokeMapType[0]
    })
  }
  
  componentDidMount() {
    console.log("did")
    console.log(this.state.pokeList)
    this.handlePokeTypes();
  }

  handlePokeTypes() {
    const { pokeList } = this.state;
    const pokeTypes = pokeList.map((poke) => poke.type)
    const pokeTypeArray = []
    const callback = (acumulador, curr) => {
      if(!pokeTypeArray.includes(curr)) {
        pokeTypeArray.push(curr)
        return curr
      }
      return acumulador
    };
    const reduceInitValue = [];
    pokeTypes.reduce(callback, reduceInitValue);
    console.log(pokeTypeArray)
    pokeTypeArray.map(
        pokeType => 
         <Pokedex>
          <div>
            <button onClick={ this.handleType } value={ pokeType } key={ pokeType }>{ pokeType }</button>
          </div>
        </Pokedex>
    )
  }

  render() {
    return (
      <div className="app">
        <Pokedex
        handleNextClick={this.handleNextClick}
        handlePrevClick={this.handlePrevClick}
        pokemon={this.state.pokemon}
        handleType={this.handleType}
        />
      </div>
    );
  }
}

export default App;
