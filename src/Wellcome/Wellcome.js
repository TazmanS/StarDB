import React from 'react'
import {Link} from 'react-router-dom'

const Wellcome = (props) => {
    return (
        <div className="Wellcome container">
            <h3>Wellcome</h3>
            <div className='row'>
                <div className='col-12 WellcomeBody'>
                    <Link to="/StarDB/people" onClick={() => props.displayItems("PEOPLE")}>
                        People
                        <img alt="" src="https://starwars-visualguide.com/assets/img/categories/character.jpg"/>
                    </Link>
                    <Link to="/StarDB/planet" onClick={() => props.displayItems("PLANET")}>
                        Planet
                        <img alt="" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"/>
                    </Link>   
                    <Link to="/StarDB/starship" onClick={() => props.displayItems("STARSHIP")}>
                        Starships
                        <img alt="" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg"/>
                    </Link>   
                </div> 
            </div>
        </div>
    )
}

export default Wellcome