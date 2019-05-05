import {UPDATE_RANDOM_PLANET} from './actionTypes'
import Swapi from '../Swapi'

const swapi = new Swapi();

export function updateRandomPlanet(){
    return (dispatch) => {
        const id = Math.floor(Math.random() * 20) + 2;
        swapi
            .getPlanet(id)
            .then((planet) => {
                    dispatch({ type: UPDATE_RANDOM_PLANET, planet, id })
            })
       
    }
} 

