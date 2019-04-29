import {APP_UPDATE_ITEMS, APP_UPDATE_ITEM} from './actionTypes'

export function appUpdateItems(items, url){
    return {
        type: APP_UPDATE_ITEMS, 
        updateItems:
            {items, url}
    }
}

export function appUpdateItem(item, index){
    return {
        type: APP_UPDATE_ITEM, 
        updateItem:
            {item, index} 
    }
}