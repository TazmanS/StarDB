import React from 'react'
import {connect} from 'react-redux'
import {detailsChangeId} from '../actions/actionApp'

const StarshipDetails = ({item : {name, passengers, length, cost_in_credits, max_atmosphering_speed},
                         index, loading, flag, arrIndex, changeId, items}) => {
    if( passengers === undefined){
        return false
    }

    return(
        <ul className="StarshipDetails Details">
        {
                loading 
            ?
                <h3>Loading...</h3>
            :
                <div className='StarshDetails'>
                    <h3>Starship</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${index}.jpg`} alt="" />
                    <li>Name - {name}</li>
                    <li>Passengers - {passengers}</li>
                    <li>Length - {length}</li>
                    <li>Cost In Credits - {cost_in_credits}</li>
                    <li>Max Atmosphering Speed - {max_atmosphering_speed}</li>
                    <span>
                        <button className="btn btn-primary"
                            onClick={ () => changeId(-1, items, arrIndex, flag)}
                            >Prev
                        </button>
                        <button className='btn btn-danger'
                            onClick={ () => changeId(1, items, arrIndex, flag)}
                            >Next
                        </button>  
                    </span>
                </div>
                
        }
        
        </ul>
    )
}

const mapStateToProps = (state) =>{
    return{
        item: state.appReducer.item,
        items: state.appReducer.items,
        index: state.appReducer.index,
        arrIndex: state.appReducer.arrIndex,
        flag: state.appReducer.flag
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeId: (num, items, arrIndex, flag) => dispatch( detailsChangeId(num, items, arrIndex, flag) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetails)