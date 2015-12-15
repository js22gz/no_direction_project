import constants from './constants';
import moment from 'moment';

export default { 

    /**************
        TIME
    **************/

    startTime() {
        return (dispatch,getState) => {
            let newTime = ()=> {
                let time = moment();

                dispatch({
                    type: constants.TICK,
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
        return {type: constants.TIMER_START};
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
        return { type: constants.STOPWATCH_START };
    },

    stopStopwatch() {
    	return { type: constants.STOPWATCH_STOP};
    }

};