/*DigitalClock*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

let styleDiv = {
  width:'300px'
};

let styleTable = {
  width:'250px',
  margin:'3px',
  padding:'1em',
  background:'#CCCCCC',
  border: '10px solid #666666',
  padding:'1em',
  borderRadius:'5px',
};

let styleTableHead = {
  fontSize:'1em'
};
 
let styleTableData = {
  fontSize:'3em'
};

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

        return <div style={styleDiv}>
                {(props.time.realTime!=null)
                ?<table className='dcTable' style={styleTable}>

                	<tr style={styleTableHead}>
               			<th className='dcTableHead'>Timme</th>
               			<th className='dcTableHead'>Minut</th>
               			<th className='dcTableHead'>Sekund</th>
                	</tr>
                	<tr style={styleTableData}>
               			<td className='dcTableData'>{hours()}</td>
               			<td className='dcTableData'>{minutes()}</td>
               			<td className='dcTableData'>{seconds()}</td>
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
