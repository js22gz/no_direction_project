/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

import constants from './constants';

export default 
{ 
	setTimer(timerTime) {
	    return {
	        type: constants.TIMER_SET,
	        timerTime:timerTime
	    };
   	},

   	tickTimer() {
   		return (dispatch, getState) => {
   			alert("Här är den ju! \nDispatch: "+dispatch+"\nGetState:"+getState);
   			dispatch({
   				type:constants.TIMER_TICK,
   				decrement:1000
   			});
   		};
   	},


   	startTimer() {
   		return (dispatch, getState) => {
   			dispatch({
   				type:constants.TIMER_START
   			});

   		setTimeout(this.tickTimer(),1000);
   		};
   	},

	stopTimer() {
	    return {
	        type: constants.TIMER_STOP
	    };
   	}

};