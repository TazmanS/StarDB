import React from 'react'
import Swapi from './../Swapi'
import {connect} from 'react-redux'
import {updateRandomPlanet} from '../actions/actionRandomPlanet'

class RandomPanet extends React.Component {

    //Обращение к API сервера 
    swapi = new Swapi();

    //Загрузка страницы
    state = {
        loading: false
    }

    //Отображение начальной случайной планеты
    componentDidMount(){
        this.changePlanet();
    }

    componentWillReceiveProps(){
        this.stateLoadingFalse();
    }

    changePlanet(){
        this.setState({loading: true})
        this.props.updateRandomPlanet()
    }

    stateLoadingFalse(){
        this.setState({loading: false})
    }

    
    
    render(){
        
        const { planet: { name, diameter, rotation_period, population}, id } = this.props;

        return (
            <div className='RandomPlanet'>
                <div>
                    {
                        this.state.loading 
                        ? 
                        <h3> Loading...  </h3> 
                        :
                        <div className="RPbody container">
                            <div className='row'>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                                    alt="" className='col-12 col-md-6'/>
                                <ul className='row col-12 col-md-6'>
                                    <li>Name - {name} </li>
                                    <li>Diameter - {diameter} </li>
                                    <li>Rotation Period - {rotation_period} </li>
                                    <li>Population - {population} </li> 
                                    <button onClick={ () => this.changePlanet()} className="btn btn-primary">Change Planet</button>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )  
    }
}

const mapStateToProps = (state) =>{
    return{
        planet: state.displayRandomPlanet.planet, //массив с данными планеты
        id: state.displayRandomPlanet.id //id планеты для отображения картинки
    }
}

const mapDispatchToProps = (dispatch) => {
    return{ //обновление планеты
        updateRandomPlanet: () => dispatch(updateRandomPlanet() )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RandomPanet)

