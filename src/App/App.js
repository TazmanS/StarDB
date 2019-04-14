import React, { Component } from 'react';
import Swapi from '../Swapi'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import ItemList from './../ItemList/ItemList'
import RandomPlanet from './../RandomPlanet/RandomPlanet'
import PersonDetails from "./../PersonDetails/PersonDetails"
import PlanetDetails from '../PlanetDetails/PlanetDetails'
import StarshipDetails from '../StarshipDetails/StarshipDetails'
import Wellcome from '../Wellcome/Wellcome'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import {connect} from 'react-redux'


class App extends Component {

  //Обращение к API сервера
  swapi = new Swapi();

  state = {
    item: {},//одиночный элемент(Planet,People,Starship)
    items: [],//массив элементов(Planet,People,Starship)
    index: null,//index(id) одиночного элемента
    flag: "",//флаг массива элементов
    loadingWellcome: true,//загрузка главной страницы
    loadingItem: true,//загрузка одиночного элемента
    loadingItemList: true//загрузка списка элементов
  }

  cleanState = () => {
    this.setState({
      item: {},
      items: [], 
      index: null,
      loadingWellcome: true,
      flag: ""
    })
  }
  //обновение state после обращения к API
  updateState = (items, url) => {
    this.setState({
      items: items.results,
      flag: url,
      index: null,
      item: {},
      loadingWellcome: false,
      loadingItemList: false
    })
  }
  //Получение списка
  displayAllItems = (url) =>{

    this.setState({loadingItemList: true, items: []})

    if(url === 'PEOPLE'){
      this.swapi.getAllPeople()
        .then((items) => {
          this.updateState(items, url)
        })
    }
    else if(url === 'PLANET'){
      this.swapi.getAllPlanet()
        .then((items) => {
          this.updateState(items, url)
        })
    }
    else if(url === 'STARSHIP'){
      this.swapi.getAllStarship()
        .then((items) => {
          this.updateState(items, url)
        })
    }
    
  }
  //Получение элемента
  displayItem = (url) =>{

    const reg = /[0-9]/g;

    const index = url.match(reg).join("");

    this.setState({loadingItem: true})

    if(this.state.flag === "PEOPLE"){
      this.swapi.getPeople(index)
        .then((item) => {
          this.setState({item, index, loadingItem: false})
        })
    }
    else if(this.state.flag === "PLANET"){
      this.swapi.getPlanet(index)
        .then((item) => {
          this.setState({item, index, loadingItem: false})
        })
    }
    else if(this.state.flag === "STARSHIP"){
      this.swapi.getStarship(index)
        .then((item) => {
          this.setState({item, index, loadingItem: false})
        })
    }
  }

  render() {

    const body = this.state.loadingWellcome
    ? 
    <Wellcome displayAllItems={this.displayAllItems}/> 
    :
    <div className="AppBody">
      {
        this.state.loadingItemList 
        ? <h3>Loading...</h3> 
        : <ItemList items={this.state.items} 
                displayItem={this.displayItem}/>
      }
      
      <div>
        <Route  
          path="/people"
          expect
          render={ () => <PersonDetails item={this.state.item} 
                                        index={this.state.index}
                                        loading={this.state.loadingItem}/> } />
        <Route  
          path="/planet"
          expect
          render={ () => <PlanetDetails item={this.state.item} 
                                        index={this.state.index}
                                        loading={this.state.loadingItem}/> } />
        <Route  
          path="/starship"
          expect
          render={ () => <StarshipDetails item={this.state.item} 
                                          index={this.state.index}
                                          loading={this.state.loadingItem}/> } />
      </div>
    </div>

    return (
      <Router>
        <div className="App">
          <Header displayAllItems={this.displayAllItems}
                  cleanState={this.cleanState}/>
          <RandomPlanet />
          {body}
          <Footer />
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state =>{
//   return{
//     item: state.appReducer.item,//одиночный элемент(Planet,People,Starship)
//     items: state.appReducer.items,//массив элементов(Planet,People,Starship)
//     index: state.appReducer.index,//index(id) одиночного элемента
//     flag: state.appReducer.flag,//флаг массива элементов
//     loadingWellcome: state.appReducer.loadingWellcome,//загрузка главной страницы
//     loadingItem: state.appReducer.loadingItem,//загрузка одиночного элемента
//     loadingItemList: state.appReducer.loadingItemList//загрузка списка элементов
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     cleanState: () => dispatch({type: 'CLEAN'}),
//     updateState: (items, url) => dispatch({type: 'UPDATE_STATE', updateState:{items, url} }),
//     displayAllItems: (url) => dispatch({type: 'ALL_ITEM', displayAllItems:{url} })

//   }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
