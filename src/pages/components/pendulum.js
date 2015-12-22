import React, {PropTypes} from 'react';
import {connect} from 'react-redux';



var aClockStyle = {
  backgroundColor:"grey"
};


class Pendulum extends React.Component {

    componentDidMount(){
        let canvas = React.findDOMNode(this.refs.canvas);
        let ctx = canvas.getContext("2d");
    }


    render() {
        return (
            <canvas height="200" width="50" ref="canvas"></canvas>
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

