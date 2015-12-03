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

   	/*
	Som man ser här har vi ju lite issues för att tickTimer får ju ingen dispatch, getState... 
	Så jag.. ja jag vet inte riktigt ;) 
   	*/

   	tickTimer() {
   		return (dispatch, getState) => {
   			alert("Här har vi problemet! \nDispatch: "+dispatch+"\nGetState:"+getState);
   			dispatch({
   				type:constants.TIMER_TICK,
   				decrement:1000
   			});
   		};
   	},


   	startTimer() {
   		return () => {
   			dispatch({
   				type:constants.TIMER_START
   			});

   		setTimeout(this.tickTimer(dispatch,getState),1000);
   		};
   	},

	stopTimer() {
	    return {
	        type: constants.TIMER_STOP
	    };
   	}

};