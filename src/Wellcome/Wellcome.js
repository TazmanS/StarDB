import React from 'react'
import {Link} from 'react-router-dom'

const Wellcome = (props) => {
    return (
        <div className="Wellcome">
            <h3>Wellcome</h3>
            <div>
                <Link to="/people" onClick={() => props.displayItems("PEOPLE")}>
                    People
                    <img alt="" src="https://starwars-visualguide.com/assets/img/categories/character.jpg"/>
                </Link>
                <Link to="/planet" onClick={() => props.displayItems("PLANET")}>
                    Planet
                    <img alt="" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"/>
                </Link>   
                <Link to="/starship" onClick={() => props.displayItems("STARSHIP")}>
                    Starships
                    <img alt="" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg"/>
                </Link>    
            </div>
        </div>
    )
}

export default Wellcome