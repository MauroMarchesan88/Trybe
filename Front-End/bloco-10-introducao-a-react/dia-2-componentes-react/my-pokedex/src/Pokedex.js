import React from "react";
import pokemons from "./Data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render (){
        const list = pokemons.map((pokemon) => <Pokemon className='pokemondiv' pokeName={pokemon} key={pokemon.name}/>);
        return (
            <>
            <h2>Pokédex</h2>
            { list }
            </>
        )
    }
}

export default Pokedex
