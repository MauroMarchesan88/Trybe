import React from "react";

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div className="pokemonDiv">
                <div className="pokeInfo">
                    <div className="divName">{pokemon.name}</div>    
                    <div className="divType">{pokemon.type}</div>
                    <div className="divWeight">{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</div>
                </div>
            <img src={pokemon.image} className="pokePhoto" alt='cade a img?' ></img>
            </div>
        )
    }
}

export default Pokemon
