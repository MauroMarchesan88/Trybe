import React from "react";

class Pokemon extends React.Component {
    render() {
        const { pokeName } = this.props
        console.log(pokeName.name)
        return (
            <div>
                <div className="divName">{pokeName.name}</div>    
                <div className="divType">{pokeName.type}</div>
                <div className="divWeight">{`${pokeName.averageWeight.value} ${pokeName.averageWeight.measurementUnit}`}</div>
            <img src={pokeName.image} alt='cade a img?' ></img>
            </div>
        )
    }
}

export default Pokemon
