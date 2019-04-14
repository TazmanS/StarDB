
const initialState = {
    planet: {},
    id: 3,
    loading: true
}

const displayRandomPlanet = function(state = initialState, actions){
    switch(actions.type){
        case "UPDATE":
            return{
                planet: actions.planet,
                id: actions.id,
                loading: false
            }

        default: 
            return state    

    }
}

export default displayRandomPlanet