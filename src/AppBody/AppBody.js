import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ItemList from './../ItemList/ItemList'
import PersonDetails from "./../PersonDetails/PersonDetails"
import PlanetDetails from '../PlanetDetails/PlanetDetails'
import StarshipDetails from '../StarshipDetails/StarshipDetails'


class AppBody extends Component{
    render(){

        const {items, displayItem, item, index, loading, loadingItemList} = this.props;
        
        return(
            <div className="AppBody container">
              <div className='row'>
                {
                  loadingItemList 
                  ? <h3>Loading...</h3> 
                  : <ItemList items={items} 
                              displayItem={displayItem} />
                }
            
                <div className='col-12 col-md-6'>
                  <Route  
                    path="/StarDB/people" expect
                    render={ () => <PersonDetails item={item} 
                                                  index={index}
                                                  loading={loading}/> } />
                  <Route  
                    path="/StarDB/planet" expect
                    render={ () => <PlanetDetails item={item} 
                                                  index={index}
                                                  loading={loading}/> } />
                  <Route  
                    path="/StarDB/starship" expect
                    render={ () => <StarshipDetails item={item} 
                                                    index={index}
                                                    loading={loading}/> } />
                </div>
              </div>
          </div> 
        )
    }
}

export default AppBody