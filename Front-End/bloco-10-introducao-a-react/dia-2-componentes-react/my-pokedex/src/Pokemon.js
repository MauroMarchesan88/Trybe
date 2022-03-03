import React from "react";

class Pokemon extends React.Component {
    render() {
        const { pokeName } = this.props
        console.log(pokeName.name)
        return (
            <div className="pokemonDiv">
                <div className="pokeInfo">
                    <div className="divName">{pokeName.name}</div>    
                    <div className="divType">{pokeName.type}</div>
                    <div className="divWeight">{`${pokeName.averageWeight.value} ${pokeName.averageWeight.measurementUnit}`}</div>
                </div>
            <img src={pokeName.image} className="pokePhoto" alt='cade a img?' ></img>
            </div>
        )
    }
}

export default Pokemon
