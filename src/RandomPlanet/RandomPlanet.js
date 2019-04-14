import React from 'react'
import Swapi from './../Swapi'
import {connect} from 'react-redux'

class RandomPanet extends React.Component {

    swapi = new Swapi();

    componentDidMount(){
        const id = Math.floor(Math.random() * 20) + 2;
        this.swapi
            .getPlanet(id)
            .then((planet) => {
                this.props.updateRandomPlanet(planet, id)
            })
    }

    render(){
        const { planet: { name, diameter, rotation_period, population}, loading, id } = this.props;

        return (
            <div className='RandomPlanet'>
                <div>
                    {
                        loading 
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
        planet: state.displayRandomPlanet.planet,
        id: state.displayRandomPlanet.id,
        loading: state.displayRandomPlanet.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateRandomPlanet: (planet, id) => dispatch({ type: "UPDATE", planet, id })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RandomPanet)

