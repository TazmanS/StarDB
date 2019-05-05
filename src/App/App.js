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
import {appUpdateItem, appUpdateItems} from '../actions/actionApp'


class App extends Component {
  
  //Обращение к API сервера
  swapi = new Swapi();

  state = {
    loadingWellcome: true,//загрузка главной страницы
    loadingItem: true,//загрузка одиночного элемента
    loadingItemList: false//загрузка списка элементов
  }

  cleanLoading = () => {
    this.setState({
      loadingWellcome: true,
      loadingItemList: false,
      loadingItem: true
    })
  }

  componentWillReceiveProps(){
    this.setState({
      loadingItemList: false,
      loadingItem: false})
  }

  //Получение списка
  displayItems = (flag) =>{
    this.setState({loadingWellcome: false, loadingItemList: true})
    this.props.updateItems(flag);
  }

  //Получение элемента
  displayItem = (url_ID, arrIndex) =>{
    const flag = this.props.flag;
    this.setState({loadingItem: true})
    this.props.updateItem(url_ID, flag, arrIndex)
  }

  render() {
    
    const {items} = this.props;
    const {loadingItem, loadingItemList, loadingWellcome} = this.state;
    
    const body = 
      loadingWellcome
    ? 
      <Wellcome displayItems={this.displayItems}/> 
    :
      <AppBody loadingItemList={loadingItemList}
              items={items}
              displayItem={this.displayItem}
              loading={loadingItem}
      />

    return (
      <Router>
        <div className="App container">
          <div className="row">
            <div className='col-lg-12
                            col-md-12
                            col-sm-12
                            col-12'>
              <Header displayItems={this.displayItems}
                      cleanLoading={this.cleanLoading}/>
              <RandomPlanet />
              {body}
              <Footer />
            </div>
          </div>
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
    arrIndex: state.appReducer.arrIndex //номер индекса в массиве
  }
}

App.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  index: PropTypes.number,
  flag: PropTypes.string,
  arrIndex: PropTypes.number
}

const mapDispatchToProps = dispatch =>{
  return{
    updateItems: (items, url) => dispatch( appUpdateItems(items, url) ),
    updateItem: (item, index, arrIndex) => dispatch( appUpdateItem(item, index, arrIndex) )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

