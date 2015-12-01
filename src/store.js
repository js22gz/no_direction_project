var Redux = require('redux'),
	timerReducer = require('./reducers/timer'),
	stopwatchReducer = require('./reducers/stopwatch'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    timer: timerReducer,
    stopwatch: stopwatchReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;