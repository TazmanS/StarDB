import React from 'react'
import {connect} from 'react-redux'
import {detailsChangeId} from '../actions/actionApp'

const PlanetDetails = ({item: { name, diameter, population, rotation_period, climate}, 
                        items, arrIndex, index, loading, changeId, flag}) => {
    if(diameter === undefined){
        return false
    }
    return(
        <ul className="PlanetDetails Details">
        {
                loading 
            ? 
                <h3>Loading...</h3> 
            :
                <div className='PlanDetails'>
                    <h3>Planet</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} alt="" />
                    <li>Name - {name}</li>
                    <li>Diameter - {diameter}</li>
                    <li>Population - {population}</li>
                    <li>Rotation Period - {rotation_period}</li>
                    <li>Climate - {climate}</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails)