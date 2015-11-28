var Redux = require('redux'),
	countReducer = require('./reducers/count'),
	timerReducer = require('./reducers/timer'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    count: countReducer,
    timer: timerReducer,
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;