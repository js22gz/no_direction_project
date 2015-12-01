import initialState from "./../initial-state";

var TimerReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'TIMER_SET':
                newState.timerTime=action.timerTime;
                return newState;
        case 'TIMER_START':
            newState.timerOn=true;
            return newState;
        case 'TIMER_STOP':
            newState.timerOn=false;
            return newState;
        case 'TIMER_TICK':
            newState.timerTime-=1000;
            return newState;
        default:
            return state || initialState().timer;
    }
};

module.exports = TimerReducer;