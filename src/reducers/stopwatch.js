import initialState from "./../initial-state";

var StopwatchReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'STOPWATCH_START':
                newState.stopwatchOn=true;
                return newState;
        case 'STOPWATCH_STOP':
            newState.timerOn=false;
            return newState;
        case 'STOPWATCH_RESET':
            newState.stopwatchOn=false;
            newState.secondsElapsed=0;
            return newState;
        case 'STOPWATCH_TICK':
            newState.secondsElapsed+=1000;
            return newState;
        default:
            return state || initialState().timer;
    }
};

module.exports = StopwatchReducer;