/*
This file defines the main Redux Store. It will be required by all 'smart' components in the app,
in our case Home and Hero.
*/

import {createStore, combineReducers, applyMiddleware} from 'redux';
import initialState from './initialstate';
import thunk from 'redux-thunk'; // allows us to use asynchronous actions
import timerReducer from './reducers/timer';



let rootReducer = combineReducers({
	timer: timerReducer,   // this means heroReducer will operate on appState.heroes
});

export default applyMiddleware(thunk)(createStore)(rootReducer,initialState());
