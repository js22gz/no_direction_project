import C from '../constants';
import initialState from '../initialstate';


export default (state,action) => {
    let newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type) 
    {
    case C.TIME_SET:
        newstate.realTime=action.realTime;
        return newstate;

    default: return state || initialState().time;
    }
};
