import React from 'react';

class currentDate extends React.Component {

	getDate() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();

		if(dd<10) {
		    dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 

		today = 'Today is: '+dd+'/'+mm+'/'+yyyy;
		return today;
	}

	render() {
		return <div> 
			{this.getDate()}
		</div>;
	}
}

export default currentDate;