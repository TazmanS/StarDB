import React from 'react'
import Swapi from './../Swapi'
import {connect} from 'react-redux'

class RandomPanet extends React.Component {

    //Обращение к API сервера 
    swapi = new Swapi();

    //Загрузка страницы
    state = {
        loading: true
    }

    //Отображение начальной случайной планеты
    componentDidMount(){
        this.randomPlanet();
    }

    //Получение данных от API
    randomPlanet = () =>{
        this.setState({loading: true})
        const id = Math.floor(Math.random() * 20) + 2;
        this.swapi
            .getPlanet(id)
            .then((planet) => {
                this.props.updateRandomPlanet(planet, id)
                this.setState({loading: false})
            })
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
                        <div className="RPbody">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
                            <ul>
                                <li>Name - {name} </li>
                                <li>Diameter - {diameter} </li>
                                <li>Rotation Period - {rotation_period} </li>
                                <li>Population - {population} </li>
                                <button onClick={this.randomPlanet} className="btn btn-primary">Change Planet</button>
                            </ul>
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
        id: state.displayRandomPlanet.id //id плагнеты для отображения картинки
    }
}

const mapDispatchToProps = (dispatch) => {
    return{ //обновление планеты
        updateRandomPlanet: (planet, id) => dispatch({ type: "UPDATE", planet, id })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RandomPanet)

