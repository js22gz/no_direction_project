module.exports = {
    countIncrease: function(){
        return {type: 'COUNT_INC'};
    },
    countDecrease: function(){
        return {type: 'COUNT_DEC'};
    },
    countdownTimerTick: function() {
    	return {type: 'COUNTDOWN_DECREASE'}
    },
    countdownTimerStart: function() {
    	return {type: 'COUNTDOWN_START'}
    },
    countdownTimerStop: function() {
    	return {type: 'COUNTDOWN_STOP'}
    },
    timerSet: function(timerTime) {
    	return {type: 'TIMER_SET', timerTime}
    },
    timerTick: function() {
    	return {type: 'TIMER_TICK'}
    },
    timerStart: function() {
    	return {type: 'TIMER_START'}
    },
    timerStop: function() {
    	return {type: 'TIMER_STOP'}
    }

};
