import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

let Home = (props)=>{

        return <div>
                This is home
                {(props.time.realTime!=null)
                    ?<h3>Time: {props.time.realTime}</h3>
                    :null
                }
                <h1>Time:{props.time.realTime}</h1>
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
