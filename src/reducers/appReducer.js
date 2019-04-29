import {APP_UPDATE_ITEMS, APP_UPDATE_ITEM} from '../actions/actionTypes'

const initialState = {
    item: {},//одиночный элемент(Planet,People,Starship)
    items: [{}],//массив элементов(Planet,People,Starship)
    index: null,//index(id) одиночного элемента
    flag: "",//флаг массива элементов
}

const appReducer = (state = initialState, actions) => {

    switch(actions.type){
            
        case APP_UPDATE_ITEMS:
            return{
                ...state,
                items: actions.updateItems.items.results,
                flag: actions.updateItems.url
            }

        case APP_UPDATE_ITEM:
            return{
                ...state,
                item: actions.updateItem.item,
                index: actions.updateItem.index
            }

        default: 
            return state    
    }
}

export default appReducer