import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

let Timer = (props)=> {

    let divStyle = {
        backgroundColor: 'silver'
        },
        buttonStyle = {
            width:100,
            height:100,
            borderRadius:'50%',
            border:'10px solid #cfdcec'
       },
        getMinutes = ()=> {
            return Math.floor((props.timer.timerTime/1000)/60);
        },
        getSeconds = ()=> {
            return('0' + (props.timer.timerTime/1000)%60).slice(-2);
        };
    return <div style={divStyle}>
        {(props.timer.timerTime===0 && props.timer.timerOn===false)
            ?null
            :<p>Time: {getMinutes()}:{getSeconds()}</p>
        }
        {(props.timer.timerTime===0)
            ?<form>
                <input type="number" id="hours" name="hours" min="0" max="24" defaultValue="0"/>
                <input type="number" id="minutes" name="minutes" min="0" max="59" defaultValue="0"/>
                <input type="number" id="seconds" name="seconds" min="0" max="59" defaultValue="0"/>
                <br/>
                <button type="button" style={buttonStyle} onClick={props.setTimer}>Set timer</button>
            </form>
            :null
        }
        {(props.timer.timerOn===false && props.timer.timerTime!=0)
            ?<button type="button" onClick={props.startTimer}>Start</button>
            :null
        }
        {(props.timer.timerOn===true && props.timer.timerTime!=0)
            ?<button type="button" onClick={props.stopTimer}>Stop</button>
            :null
        }
    </div>;
}

Timer.propTypes = {
    timer: PropTypes.shape({
        timerTime: PropTypes.number.isRequired,
        timerOn: PropTypes.bool.isRequired
    }),
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    setTimer: PropTypes.func.isRequired
};

let mapStateToProps = (state) => {
    return {
        timer: state.timer
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setTimer() { 
            let minutes = document.getElementById("minutes"),
                milliSeconds = minutes.value*60*1000;
            dispatch(actions.setTimer(milliSeconds)); 
        },
        startTimer() {
            dispatch(actions.startTimer());
        },
        stopTimer() {
            dispatch(actions.stopTimer());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);