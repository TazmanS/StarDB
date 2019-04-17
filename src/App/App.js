import React, { Component } from 'react';
import Swapi from '../Swapi'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import RandomPlanet from './../RandomPlanet/RandomPlanet'
import Wellcome from '../Wellcome/Wellcome'
import AppBody from '../AppBody/AppBody'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class App extends Component {

  //Обращение к API сервера
  swapi = new Swapi();

  state = {
    loadingWellcome: true,//загрузка главной страницы
    loadingItem: true,//загрузка одиночного элемента
    loadingItemList: true//загрузка списка элементов
  }

  cleanLoading = () => {
    this.setState({
      loadingWellcome: true,
      loadingItemList: false,
      loadingItem: true
    })
  }

  //Получение списка
  displayItems = (url) =>{

    this.setState({loadingItemList: true, loadingWellcome: false})

    if(url === 'PEOPLE'){
      this.swapi.getAllPeople()
        .then((items) => this.displayItemsUpdateState(items, url) )
    }      
        
    else if(url === 'PLANET'){
      this.swapi.getAllPlanet()
        .then((items) => this.displayItemsUpdateState(items, url) )
    }      
        
    else if(url === 'STARSHIP'){
      this.swapi.getAllStarship()
        .then((items) => this.displayItemsUpdateState(items, url) )
    }       
  }
  //функция обновления state для displayItems
  displayItemsUpdateState = (items, url) => {
    this.props.updateItems(items, url)
    this.setState({loadingItemList: false})
  }

  //Получение элемента
  displayItem = (url) =>{

    const reg = /[0-9]/g;

    const index = url.match(reg).join("");

    this.setState({loadingItem: true})

    if(this.props.flag === "PEOPLE"){
      this.swapi.getPeople(index)
      .then((item) => this.displayItemUpdateState(item, index) )
    }

    else if(this.props.flag === "PLANET"){
      this.swapi.getPlanet(index)
      .then((item) => this.displayItemUpdateState(item, index) )
    }
    
    else if(this.props.flag === "STARSHIP"){
      this.swapi.getStarship(index)
        .then((item) => this.displayItemUpdateState(item, index) )
    }
  }
  //функция обновления state для displayItem
  displayItemUpdateState = (item, index) => {
    this.props.updateItem(item, index)
    this.setState({loadingItem: false})
  }

  render() {

    const {items, item, index} = this.props;
    const {loadingItem, loadingItemList, loadingWellcome} = this.state;

    const body = loadingWellcome
    ? 
    <Wellcome displayItems={this.displayItems}/> 
    :
    <AppBody loadingItemList={loadingItemList}
             items={items}
             displayItem={this.displayItem}
             item={item}
             index={index}
             loading={loadingItem}/>

    return (
      <Router>
        <div className="App">
          <Header displayItems={this.displayItems}
                  cleanLoading={this.cleanLoading}/>
          <RandomPlanet />
          {body}
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
  return{
    item: state.appReducer.item,//одиночный элемент(Planet,People,Starship)
    items: state.appReducer.items,//массив элементов(Planet,People,Starship)
    index: state.appReducer.index,//index(id) одиночного элемента
    flag: state.appReducer.flag,//флаг массива элементов
  }
}

App.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  index: PropTypes.string,
  flag: PropTypes.string
}

const mapDispatchToProps = dispatch =>{
  return{
    updateItems: (items, url) => dispatch({type: 'ALL_ITEMS', updateItems:{items, url} }),
    updateItem: (item, index) => dispatch({type: 'ONE_ITEM', updateItem:{item, index} })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

