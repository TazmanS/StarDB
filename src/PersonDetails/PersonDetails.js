import React from 'react'
import {connect} from 'react-redux'
import {detailsChangeId} from '../actions/actionApp'

const PersonDetails = ({item : {name, gender, height, mass, eye_color}, 
                        arrIndex, items, index, loading, changeId, flag}) =>{
                            
    if( gender === undefined){
        return false
    }

    return (
        <div className="PersonDetails Details">
            {
                loading 
            ? 
                <h3>Loading...</h3>
            :
                <div>
                    <ul className='PersDetails'>
                        <h3>People</h3>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${index}.jpg`} alt="" />
                        <li>Name - {name}</li>
                        <li>Gender - {gender}</li>
                        <li>Height - {height}</li>
                        <li>Mass - {mass}</li>
                        <li>Eye color - {eye_color}</li>
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
                    </ul>
                </div>
            }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails)