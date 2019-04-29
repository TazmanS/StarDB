import {UPDATE_RANDOM_PLANET} from './actionTypes'

export function updateRandomPlanet(planet, id){
    return{
        type: UPDATE_RANDOM_PLANET, planet, id 
    }
}