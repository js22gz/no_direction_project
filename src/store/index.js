/*
This file defines the main Redux Store. It will be required by all 'smart' components in the app.
*/

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // allows us to use asynchronous actions
import initialState from './initialstate';
import timerReducer from './reducers/timer';
import stopwatchReducer from './reducers/stopwatch';
import timeReducer from './reducers/time';


let rootReducer = combineReducers({
	time: timeReducer,
	timer: timerReducer,  
	stopwatch: stopwatchReducer
});

export default applyMiddleware(thunk)(createStore)(rootReducer,initialState());
