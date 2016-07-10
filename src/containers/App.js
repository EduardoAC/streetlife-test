import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'
import * as reducers from '../reducers';
import BlogApp from './BlogApp';

const combineReducer = combineReducers(reducers);
const store = configureStore(combineReducer);

export default class App extends Component {

    render(){
        const BlogDataUrl = 'https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json';
        return (
            <Provider store={store}>
                <BlogApp source={BlogDataUrl}/>
            </Provider>
        )
    }
}
