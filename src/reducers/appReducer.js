import {APP_UPDATE_ITEMS, APP_UPDATE_ITEM, CHANGE_ID} from '../actions/actionTypes'

const initialState = {
    item: {},//одиночный элемент(Planet,People,Starship)
    items: [{}],//массив элементов(Planet,People,Starship)
    index: null,//index(id) одиночного элемента
    flag: "",//флаг массива элементов
    arrIndex: null
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
                index: +actions.updateItem.index,
                arrIndex: +actions.updateItem.arrIndex
            }

        case CHANGE_ID:

            return{
                ...state,
                item: actions.changeId.item,
                index: +actions.changeId.new_index,
                arrIndex: +actions.changeId.new_arrIndex
            }    

        default: 
            return state    
    }
}

export default appReducer