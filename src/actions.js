import constants from './constants';

export default { 

    setTimer(timerTime) {
        return {
            type: constants.TIMER_SET,
            timerTime:timerTime
        };
    },

    startTimer() {
        return (dispatch,getState) => {
            let tick = ()=> {
                if (getState().timer.timerOn){
                    dispatch({
                        type: constants.TIMER_TICK,
                        decrement: 1000
                    });
                    setTimeout(tick,1000);
                }
            };
            dispatch({ type: constants.TIMER_START });
            tick();
        };
    },

    stopTimer() {
        return { type: constants.TIMER_STOP };
    }

};