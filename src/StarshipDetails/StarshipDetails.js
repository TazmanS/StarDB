import React from 'react'

const StarshipDetails = ({item : {name, passengers, length, cost_in_credits, max_atmosphering_speed}, index, loading}) => {
    if( passengers === undefined){
        return false
    }
    return(
        <ul className="StarshipDetails Details">
        {
                loading 
            ?
                <h3>Loading...</h3>
            :
                <div className='StarshDetails'>
                    <h3>Starship</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${index}.jpg`} alt="" />
                    <li>Name - {name}</li>
                    <li>Passengers - {passengers}</li>
                    <li>Length - {length}</li>
                    <li>Cost In Credits - {cost_in_credits}</li>
                    <li>Max Atmosphering Speed - {max_atmosphering_speed}</li>
                </div>
                
        }
        
        </ul>
    )
}

export default StarshipDetails