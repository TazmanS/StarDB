import React from 'react'

const PlanetDetails = ({item: { name, diameter, population, rotation_period, climate}, index, loading}) => {
    if(diameter === undefined){
        return false
    }
    return(
        <ul className="PlanetDetails Details">
        {
                loading 
            ? 
                <h3>Loading...</h3> 
            :
                <React.Fragment>
                    <h3>Planet</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} alt="" />
                    <li>Name - {name}</li>
                    <li>Diameter - {diameter}</li>
                    <li>Population - {population}</li>
                    <li>Rotation_period - {rotation_period}</li>
                    <li>Climate - {climate}</li>
                </React.Fragment>
        }
            
        </ul>
    )
}

export default PlanetDetails