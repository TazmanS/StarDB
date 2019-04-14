import {combineReducers} from 'redux'

import displayRandomPlanet from './displayRandomPlanet'
import appReducer from './appReducer'

const reducer = combineReducers({
    displayRandomPlanet,
    appReducer
})

export default reducer