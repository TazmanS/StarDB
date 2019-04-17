
const initialState = {
    planet: {},
    id: 3
}

const displayRandomPlanet = function(state = initialState, actions){
    switch(actions.type){
        case "UPDATE":
            return{
                planet: actions.planet,
                id: actions.id
            }

        default: 
            return state    

    }
}

export default displayRandomPlanet