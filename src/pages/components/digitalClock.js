/*DigitalClock*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


let DigitalClock = (props)=>{
    let seconds = ()=> {
      let sec = props.time.realTime.seconds();
      if(sec<10) {
        return '0' + sec;
      }
      else {
        return sec;
      }
    }
    let minutes = ()=> {
      let min = props.time.realTime.minutes();
      if(min<10) {
        return '0' + min;
      }
      else {
        return min;
      }
    }

    let hours = ()=> {
      let hour = props.time.realTime.hours();
      if(hour<10) {
        return '0' + hour;
      }
      else {
        return hour;
      }
    }

        return <div>
                {(props.time.realTime!=null)
                ?<table className='dcTable'>

                	<tr>
               			<th className='dcTableHead'>Timme</th>
               			<th className='dcTableHead'>Minut</th>
               			<th className='dcTableHead'>Sekund</th>
                	</tr>
                	<tr>
               			<td className='dcTableData'>{hours()}</td>
               			<td className='dcTableData'>:{minutes()}</td>
               			<td className='dcTableData'>:{seconds()}</td>
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
