import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import DigitalClock from './clocks/digitalClock';

let Home = (props)=>{

        let date = props.time.realTime;
        let show = ()=> {
            alert(date.seconds());
        }

        return <div>
                This is home
                <DigitalClock/>
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
