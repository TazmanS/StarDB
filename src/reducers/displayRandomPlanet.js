import {UPDATE_RANDOM_PLANET} from '../actions/actionTypes'


const initialState = {
    planet: {},
    id: 3
}

const displayRandomPlanet = function(state = initialState, actions){

    switch(actions.type){
        case UPDATE_RANDOM_PLANET:
            return{
                planet: actions.planet,
                id: actions.id
            }

        default: 
            return state    

    }
}

export default displayRandomPlanet