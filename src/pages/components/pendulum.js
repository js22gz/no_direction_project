/*DigitalClock
From: http://www.w3schools.com/canvas/canvas_clock_start.asp
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

var aClockStyle = {
  backgroundColor:"grey"
};


class Pendulum extends React.Component {

    componentDidMount(){
    }



    render() {

        return (
        <h1>Pendulum</h1>
        );
    }
}

Pendulum.propTypes = {
    time: PropTypes.shape({
        realTime:PropTypes.object.isRequired
    })
};


let mapStateToProps = (state) => {
    return { 
        time:state.time,
    };
};

export default connect(mapStateToProps)(Pendulum);

