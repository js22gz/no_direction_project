import React from 'react';
var ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');


var Timer = React.createClass({

	propTypes: {
       timerSet: ptypes.func.isRequired,
       timerStart: ptypes.func.isRequired
    },

	getSeconds: function() {
		return('0' + (this.props.timerTime/1000)%60).slice(-2);
	},

	getMinutes: function() {
		return Math.floor((this.props.timerTime/1000)/60);
	},

    checkTimer: function() {
       	if(this.props.timerTime===0)
       	{
       		this.stopTimer();
        }
        else {
	    	this.props.timerTick();
        }  	
    },
    startTimer: function() {
    	this.props.timerStart();
    	this.incrementer = setInterval(this.checkTimer, 1000);

    },
    stopTimer: function() {
			clearInterval(this.incrementer);
			this.props.timerStop();
    },
    setTimer: function() {
    	var minutes = document.getElementById("minutes");
    	var milliSeconds = minutes.value*60*1000;
    	this.props.timerSet(milliSeconds);
    },
 
	render: function() 	{	
		return(
			<div>

			

			{(this.props.timerTime===0)
				?<form>
					<input type="number" id="minutes" name="minutes" min="1" max="60" defaultValue="1"/>
					<button type="button" onClick={this.setTimer}>Set timer</button>
				</form>
				:<h1>Timer: {this.getMinutes()}:{this.getSeconds()}</h1>
			}
			{(this.props.timerOn===false && this.props.timerTime!=0)
				?<button type="button" onClick={this.startTimer}>Start</button>
				:''
			}
			{(this.props.timerOn===true && this.props.timerTime!=0)
				?<button type="button" onClick={this.stopTimer}>Stop</button>
				:''
			}
			
			</div>
			);
	}
});

var mapStateToProps = function(state){
    return state.timer;
};

var mapDispatchToProps = function(dispatch){
    return {
        timerSet: function(timerTime){ 
        	dispatch(actions.timerSet(timerTime));
        },
        timerTick: function(){
              dispatch(actions.timerTick());
        },        
        timerStart: function() {
        	dispatch(actions.timerStart());
        },
        timerStop: function() {
        	dispatch(actions.timerStop());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Timer);