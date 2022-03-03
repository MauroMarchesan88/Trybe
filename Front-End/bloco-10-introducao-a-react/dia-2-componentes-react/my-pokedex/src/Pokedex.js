import React from "react";
import pokemons from "./Data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render (){
        const list = pokemons.map(
            (pokemon) => <Pokemon pokeName={pokemon} key={pokemon.name}/>);
        return (
            <div className="pokedex">
            <h2>Pokédex</h2>
                <div className="pokelist">
                { list }
                </div>
            </div>
        )
    }
}

export default Pokedex
