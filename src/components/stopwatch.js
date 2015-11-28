import React from 'react';

/*
Stolen from: http://www.sitepoint.com/watch-capturing-time-in-react/
*/

var stopwatchStyle= {color:'blue'};

var Stopwatch = React.createClass({
	getInitialState: function() {
		return {secondsElapsed: 0};
	},

	getSeconds: function() {
		return('0' + this.state.secondsElapsed%60).slice(-2);
	},

	getMinutes: function() {
		return Math.floor(this.state.secondsElapsed/60);
	},
	handleStartClick: function() {
		var _this = this;

		this.incrementer = setInterval(function() {
			_this.setState({
				secondsElapsed:
				(_this.state.secondsElapsed + 1)
			});
		}, 1000)
	},
	handleStopClick: function() {
		clearInterval(this.incrementer);
		this.setState({lastClearedIncrementer: this.incrementer});
	},
	handleResetClick: function() {
		this.setState({secondsElapsed:0});
	},

    render: function(){
        return (
        	<div>
        	<h1>{this.getMinutes()}:{this.getSeconds()}</h1>
        	{(this.props.timerOn==false)
        		? <button type="button" onClick={this.handleStartClick}>Start</button>
        		: <button type="button" onClick={this.handleStopClick}>Stop</button>
        	}
        	{(this.state.secondsElapsed!==0)
        		? <button type="button" onClick={this.handleResetClick}>Reset</button>
        		: null
        	}
        	</div>
        );
    }
});

module.exports = Stopwatch;