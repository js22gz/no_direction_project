import React from 'react';
import {PropTypes} from 'react';

var ReactRedux = require('react-redux');
var actions = require('../actions');


/*
Stolen from: http://www.sitepoint.com/watch-capturing-time-in-react/
then modified to fit in redux
*/


var Stopwatch = React.createClass({
    render: function(){
        return (
			<div>
			<h1>{this.props.secondsElapsed}</h1>
			</div>
        );
    }
});

var mapStateToProps = function(state){
    return state.stopwatch;
};

var mapDispatchToProps = function(dispatch){
    return {
        stopwatchStart: function(){ 
        	dispatch(actions.stopwatchStart());
        },
        stopwatchStop: function(){
              dispatch(actions.stopwatchStop());
        },        
        stopwatchReset: function() {
        	dispatch(actions.stopwatchReset());
        },
        stopwatchTick: function() {
        	dispatch(actions.stopwatchTick());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Stopwatch);