import {APP_UPDATE_ITEMS, APP_UPDATE_ITEM, CHANGE_ID} from './actionTypes'
import Swapi from '../Swapi'

const swapi = new Swapi();

export function appUpdateItems(url){
    return (dispatch) => {
        if(url === 'PEOPLE'){
            swapi.getAllPeople()
            .then((items) => displayItemsUpdateState(items, url) )
        }   
        else if(url === 'PLANET'){
            swapi.getAllPlanet()
            .then((items) => displayItemsUpdateState(items, url) )
        }   
        else if(url === 'STARSHIP'){
            swapi.getAllStarship()
            .then((items) => displayItemsUpdateState(items, url) )
        }
        
        const displayItemsUpdateState = (items, url) => {
            dispatch({type: APP_UPDATE_ITEMS, updateItems: {items, url} })
            return true
        }
    }      
}

export function appUpdateItem(url_ID, flag, arrIndex){

    return (dispatch) => {
        const reg = /[0-9]/g;

        const index = url_ID.match(reg).join("");
    
        if(flag === "PEOPLE"){
          swapi.getPeople(index)
            .then((item) => displayItemUpdateState(item, index) )
        }
    
        else if(flag === "PLANET"){
          swapi.getPlanet(index)
            .then((item) => displayItemUpdateState(item, index) )
        }
        
        else if(flag === "STARSHIP"){
          swapi.getStarship(index)
            .then((item) => displayItemUpdateState(item, index) )
        }

        const displayItemUpdateState = (item, index) => {
            dispatch({type: APP_UPDATE_ITEM, 
                      updateItem: {item, index, arrIndex} })
        }
    }
}

export function detailsChangeId(num, items, arrIndex, flag){
    return (dispatch) => {

        if(arrIndex + num >= items.length){
            arrIndex = -1
        }
        else if(arrIndex + num < 0 ){
            arrIndex = items.length
        }

        const reg = /[0-9]/g;

        const new_index = items[arrIndex + num].url.match(reg).join("");

        let new_arrIndex = arrIndex + num;

        if( flag === "PEOPLE"){
           swapi.getPeople(new_index)
            .then((item) => {
                dispatch({ type: CHANGE_ID, changeId: {item, new_index, new_arrIndex} })
            }) 
        }
        else if(flag === "PLANET"){
            swapi.getPlanet(new_index)
            .then((item) => {
                dispatch({ type: CHANGE_ID, changeId: {item, new_index, new_arrIndex} })
            }) 
        }
        else if(flag === "STARSHIP"){
            swapi.getStarship(new_index)
            .then((item) => {
                dispatch({ type: CHANGE_ID, changeId: {item, new_index, new_arrIndex} })
            }) 
          }

        
    }
}
