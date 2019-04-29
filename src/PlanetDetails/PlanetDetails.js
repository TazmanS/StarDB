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
                <div className='PlanDetails'>
                    <h3>Planet</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} alt="" />
                    <li>Name - {name}</li>
                    <li>Diameter - {diameter}</li>
                    <li>Population - {population}</li>
                    <li>Rotation Period - {rotation_period}</li>
                    <li>Climate - {climate}</li>
                </div>
                
        }
            
        </ul>
    )
}

export default PlanetDetails