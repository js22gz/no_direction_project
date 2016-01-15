import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import DigitalClock from './components/digitalClock';
import TextClock from './components/textClock';
import AnalogClock from './components/analogClock';
import CurrentDate from './components/currentDate';

let holderStyle = {
    alignSelf:'center'
}

let timeStyle = {
    display: 'flex',
}

let dateStyle = {
    fontWeight: "bold",
    marginBottom: "10px"
}

let Home = (props)=>{
        return <div>
            <div style={dateStyle}>
                <CurrentDate />
            </div> 
            <div style={timeStyle}>     
                <div style={holderStyle}>
                    <AnalogClock/>
                </div>
                <div style={holderStyle}>
                    <DigitalClock/>
                </div>
                <div style={holderStyle}>
                    <TextClock />
            </div>
            </div>
            </div>;
}

Home.propTypes = {
    time: PropTypes.shape({
        realTime:PropTypes.object.isRequired
    }),

    stopwatch: PropTypes.shape({
        stopwatchTime: PropTypes.number.isRequired,
        stopwatchOn: PropTypes.bool.isRequired
    }),
    timer: PropTypes.shape({
        timerTime: PropTypes.number.isRequired,
        timerOn: PropTypes.bool.isRequired
    }),

};


let mapStateToProps = (state) => {
    return { 
        time:state.time,
        timer:state.timer,
        stopwatch:state.stopwatch
    };
};

export default connect(mapStateToProps)(Home);
