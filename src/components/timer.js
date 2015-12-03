import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';


let Timer = (props)=> {
    let tOn=props.timer.timerOn;
    return <div>
        <p>Tid: {props.timer.timerTime}</p>
        <p>TimerOn: {tOn.toString()}</p>
        {(props.timer.timerTime===0)
            ?<form>
                <input type="number" id="minutes" name="minutes" min="1" max="60" defaultValue="1"/>
                <button type="button" onClick={props.setTimer}>Set timer</button>
            </form>
            :<h1>Timer: </h1>
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