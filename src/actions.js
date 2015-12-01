module.exports = {
	stopwatchStart: function() {
		return {type: 'STOPWATCH_START'}
	},
	stopwatchStop: function() {
		return {type: 'STOPWATCH_STOP'}
	},
	stopwatchReset: function() {
		return {type: 'STOPWATCH_RESET'}
	},
	stopwatchTick: function() {
		return {type: 'STOPWATCH_TICK'}
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
