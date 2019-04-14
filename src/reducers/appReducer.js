/* eslint-disable no-fallthrough */
import Swapi from '../Swapi'

const initialState = {
    item: {},//одиночный элемент(Planet,People,Starship)
    items: [],//массив элементов(Planet,People,Starship)
    index: null,//index(id) одиночного элемента
    flag: "",//флаг массива элементов
    loadingWellcome: true,//загрузка главной страницы
    loadingItem: true,//загрузка одиночного элемента
    loadingItemList: true//загрузка списка элементов
}

const appReducer = (state = initialState, actions) => {

    

    //Обращение к API сервера
    const swapi = new Swapi();
    
    // const updateState = (items) =>{
    //     return {
    //         items: items.results,
    //         flag: actions.displayAllItems.url,
    //         index: null,
    //         item: {},
    //         loadingWellcome: false,
    //         loadingItemList: false
    //     }
    // }

//console.log(state)

    switch(actions.type){
        case "CLEAN":
            return{
                item: {},
                items: [], 
                index: null,
                loadingWellcome: true,
                flag: ""
            }
            
        case 'ALL_ITEM':

            let new_items = [];
            // return {
            //     ...state,
            //     loadingItemList: false, 
            //     items: []
            // }

            if(actions.displayAllItems.url === 'PEOPLE'){
            swapi.getAllPeople()
                .then((items) =>{
                    //console.log(items.results)
                    //new_items.length = 0
                    // for(let i = 0; i < items.results.length; i++){
                    //     new_items.push(items.results[i])
                    // }
                    let test1 = items.results.concat()
                    console.log(test1);
                    new_items = test1.concat();
                })    
            }

            // else if(actions.displayAllItems.url === 'PLANET'){
            // swapi.getAllPlanet()
            //     .then((items) =>{
            //         test.length = []
            //         test.push(items.results) 
            //     }) 
            // }

            // else if(actions.displayAllItems.url === 'STARSHIP'){
            // swapi.getAllStarship()
            //     .then((items) =>{
            //         test.length = []
            //         test.push(items.results) 
            //     }) 
            // }    

            return{
                items: new_items,
                flag: actions.displayAllItems.url,
                index: null,
                item: {},
                loadingWellcome: false,
                loadingItemList: false
            }


        default: 
            return state    
    }
}

export default appReducer