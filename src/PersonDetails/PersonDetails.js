import React from 'react'

const PersonDetails = ({item : {name, gender, height, mass, eye_color}, index, loading}) =>{
    if( gender === undefined){
        return false
    }
    return (
        <ul className="PersonDetails Details">
            {
                    loading 
                ? 
                    <h3>Loading...</h3>
                :
                    <React.Fragment>
                        <h3>People</h3>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${index}.jpg`} alt="" />
                        <li>Name - {name}</li>
                        <li>Gender - {gender}</li>
                        <li>Height - {height}</li>
                        <li>Mass - {mass}</li>
                        <li>Eye color - {eye_color}</li>
                    </React.Fragment>
            }
        </ul>
    )
}

export default PersonDetails