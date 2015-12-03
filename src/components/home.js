import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

class Home extends React.Component {
    render() {
        return (
            <div>
                This is home
            </div>
        );
    }
}

Home.propTypes = {

};


let mapStateToProps = (state) => {
    return {
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
