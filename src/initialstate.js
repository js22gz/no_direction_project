/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.

It returns a function instead of an object to make sure no one can change the initial state.
*/

import C  from './constants';

export default () => {
    return {
        timer:
        {
        	timerTime:0,
        	timerOn: false
        },
        stopwatch:
        {
        	stopwatchTime:0,
        	stopwatchOn:false
        }
    };
};
