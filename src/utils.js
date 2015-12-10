/*utils.js*/
/*
var getMinutes = ()=> {
	return Math.floor((props.timer.timerTime/1000)/60)
	}

let getSeconds = (time)=> {
	return('0' + (time/1000)%60).slice(-2);
    }
	*/


export default function convertTime(time) {
	alert("Made it here!");
	let minutes = Math.floor((props.timer.timerTime/1000)/60)
		seconds = ('0' + (time/1000)%60).slice(-2)
	return minutes+':'+seconds
}