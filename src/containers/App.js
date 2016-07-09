import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'
import * as reducers from '../reducers';

const combineReducer = combineReducers(reducers);
const store = configureStore(combineReducer);

export default class App extends Component {

  render(){
    return (
        <Provider store={store}>
        </Provider>
    )
  }
}
