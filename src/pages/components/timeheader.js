import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {convertTime} from '../../utils';
import moment from 'moment';

let inlineStyle = { 
                    display:"inline", 
                    margin:'1em'
                }


let TimeHeader =(props)=> 
{
    let swTime = props.stopwatch.stopwatchTime,
        swOn = props.stopwatch.stopwatchOn,
        tOn = props.timer.timerOn,
        tTime = props.timer.timerTime

    let test = ()=> {
        alert("Test");
        alert("Tid: "+convertTime(swTime));
    }

    return <div>
            <h1 style={inlineStyle}>Vad är tid?</h1>
            {(swOn || swTime>0)
            ?<h2 style={inlineStyle}>Stopwatch: {convertTime(swTime)}</h2>
            :null }
            {(tOn || tTime>0)                
            ?<h2 style={inlineStyle}>Timer: {convertTime(tTime)}</h2>
            :null }
            </div>
}


TimeHeader.propTypes = {
    stopwatch: PropTypes.shape({
        stopwatchTime: PropTypes.number.isRequired,
        stopwatchOn: PropTypes.bool.isRequired
    }),
    timer: PropTypes.shape({
        timerTime: PropTypes.number.isRequired,
        timerOn: PropTypes.bool.isRequired
    }),
    getSeconds: PropTypes.number.isRequired
}


let mapStateToProps = (state) => {
    return { 
        timer:state.timer,
        stopwatch:state.stopwatch
    }
}

export default connect(mapStateToProps)(TimeHeader)
