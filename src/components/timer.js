import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';


class Timer extends React.Component 
{
    render() 
    {
        let tOn=this.props.timer.timerOn;
       return(
            <div>
            <p>Tid: {this.props.timer.timerTime}</p>
            <p>TimerOn: {tOn.toString()}</p>

            {(this.props.timer.timerTime===0)
                ?<form>
                    <input type="number" id="minutes" name="minutes" min="1" max="60" defaultValue="1"/>
                    <button type="button" onClick={this.props.setTimer}>Set timer</button>
                </form>
                :<h1>Timer: </h1>
            }
            {(this.props.timer.timerOn===false && this.props.timer.timerTime!=0)
                ?<button type="button" onClick={this.props.startTimer}>Start</button>
                :null
            }
            {(this.props.timer.timerOn===true && this.props.timer.timerTime!=0)
                ?<button type="button" onClick={this.props.stopTimer}>Stop</button>
                :null
            }
          </div>
            );
    }
}

Timer.propTypes = {
    timerTime:PropTypes.number.isRequired
};

let mapStateToProps = (state) => {
    return {
        timer: state.timer
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setTimer() { 
            var minutes = document.getElementById("minutes");
            var milliSeconds = minutes.value*60*1000;
            dispatch(actions.setTimer(milliSeconds)); 
        },
        startTimer() {
            dispatch(actions.startTimer());
        },
        stopTimer() {
            dispatch(actions.stopTimer());
        },

        timerTick() {
            dispatch(actions.timerTick());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);