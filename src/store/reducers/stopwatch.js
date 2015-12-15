import C from '../../constants';
import initialState from '../initialstate';


export default (state,action) => {
    let newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type) {
    case C.STOPWATCH_RESET:
        newstate.stopwatchTime=0;
        newstate.stopwatchOn=false;
        return newstate;
    case C.STOPWATCH_START:
        newstate.stopwatchOn=true;
        return newstate;
    case C.STOPWATCH_STOP:
        newstate.stopwatchOn=false;
        return newstate;
    case C.TICK:
        if (state.stopwatchOn){
            newstate.stopwatchTime+=1000;
        }
        return newstate;

    default: return state || initialState().stopwatch;
    }
};
