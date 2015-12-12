/*DigitalClock*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


let DigitalClock = (props)=>{
        return <div>
                <h1>Digital Clock</h1>
                {(props.time.realTime!=null)
                ?<table class='dcTable'>

                	<tr>
               			<th class='dcTableHead'>Hour</th>
               			<th class='dcTableHead'>Minute</th>
               			<th class='dcTableHead'>Second</th>
                	</tr>
                	<tr>
               			<td class='dcTableData'>{props.time.realTime.hours()}</td>
               			<td class='dcTableData'>{props.time.realTime.minutes()}</td>
               			<td class='dcTableData'>{props.time.realTime.seconds()}</td>
                	</tr>

                </table>
                :null
            	}
            </div>;
}

DigitalClock.propTypes = {
    time: PropTypes.shape({
        realTime:PropTypes.object.isRequired
    })
};


let mapStateToProps = (state) => {
    return { 
        time:state.time,
    };
};

export default connect(mapStateToProps)(DigitalClock);
