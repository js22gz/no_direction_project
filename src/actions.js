import constants from './constants';

export default { 

    /**************
        TIME
    **************/

    startTime() {
        return (dispatch,getState) => {
            let newTime = ()=> {
                let time = new Date();
                    dispatch({
                        type: constants.TIME_SET,
                        realTime: time
                    });
                    setTimeout(newTime,1000);
            };
            newTime();
       };
    },

    /**************
        TIMER
    ***************/

    setTimer(timerTime) {
        return {
            type: constants.TIMER_SET,
            timerTime:timerTime
        };
    },

    startTimer() {
        return (dispatch,getState) => {
            let tick = ()=> {
                if (getState().timer.timerOn && getState().timer.timerTime>0){
                    dispatch({
                        type: constants.TIMER_TICK,
                        decrement: 1000
                    });
                    setTimeout(tick,1000);
                }
                else {
		            dispatch({ type: constants.TIMER_STOP });                	
                }
            };
            dispatch({ type: constants.TIMER_START });
            setTimeout(tick,1000);
       };
    },

    stopTimer() {
        return { type: constants.TIMER_STOP };
    },

    /**************
        STOPWATCH
    **************/


    resetStopwatch() {
    	return { type: constants.STOPWATCH_RESET};
    },

    startStopwatch() {
        return (dispatch,getState) => {
            let tick = ()=> {
                if (getState().stopwatch.stopwatchOn)
                {
	                dispatch({
                        type: constants.STOPWATCH_TICK,
                        increment: 1000
                    });
                        setTimeout(tick,1000);
                }
            };
            dispatch({ type: constants.STOPWATCH_START });
            setTimeout(tick,1000);
  
        };
    },
    stopStopwatch() {
    	return { type: constants.STOPWATCH_STOP};
    }

};