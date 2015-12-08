/*
Stopwatch

 start
 stop
 reset
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

let Stopwatch = (props) => 
{
	let swOn = props.stopwatch.stopwatchOn
	let swTime =  props.stopwatch.stopwatchTime
	return 	<div> 
				<p>On: {swOn.toString()}</p>
				<p>Time:{swTime}</p>
				{(!swOn)
					?<button onClick={props.startStopwatch}>Start</button>
					:<button onClick={props.stopStopwatch}>Stop</button>
				}
				{(!swOn&&swTime>0)
					?<button onClick={props.resetStopwatch}>Reset</button>
					:null
				}
			</div>;

}

Stopwatch.propTypes = {
    stopwatch: PropTypes.shape({
        stopwatchTime: PropTypes.number.isRequired,
        stopwatchOn: PropTypes.bool.isRequired
    }),
    stopwatchStart: PropTypes.func.isRequired,
    stopwatchStop: PropTypes.func.isRequired,
    stopwatchReset: PropTypes.func.isRequired
};


let mapStateToProps = (state) => {
    return {
    	stopwatch: state.stopwatch
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        startStopwatch() {
            dispatch(actions.startStopwatch());
        },
        stopStopwatch() {
            dispatch(actions.stopStopwatch());
        },
        resetStopwatch() {
        	dispatch(actions.resetStopwatch());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);