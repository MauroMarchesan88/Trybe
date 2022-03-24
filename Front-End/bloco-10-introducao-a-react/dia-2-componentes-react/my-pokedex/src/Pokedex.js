import React from "react";
import { FaBackward, FaForward } from 'react-icons/fa';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render () {
        const { handleNextClick, handlePrevClick, pokemon, handleType, children } = this.props
        return (
            <div className="pokedex">
                <h2>Pokédex</h2>
                    <div className="pokelist">
                        <button className="prevPoke" onClick={handlePrevClick}><FaBackward /></button>
                        {<Pokemon pokemon={ pokemon } />}
                        <button className="nextPoke" onClick={handleNextClick}><FaForward /></button>
                    </div>
                    <div className="buttons">
                        { children }
                        <button onClick={ handleType } value="All">"All"</button>
                    </div>
            </div>
        )
    }
}

export default Pokedex

// filter + map
// .map(()=> {})

