import C from '../constants';
import initialState from '../initialstate';


export default (state,action) => {
    let newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type) {
    case C.TIMER_SET:
        newstate.timerTime=action.timerTime;
        return newstate;
    case C.TIMER_START:
        newstate.timerOn=true;
        return newstate;
    case C.TIMER_STOP:
        newstate.timerOn=false;
        return newstate;
    case C.TIMER_TICK:
        newstate.timerTime-=action.decrement;
        return newstate;
    default: return state || initialState().timer;
    }
};
