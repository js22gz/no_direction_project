/*utils.js*/
/*
var getMinutes = ()=> {
	return Math.floor((props.timer.timerTime/1000)/60)
	}

let getSeconds = (time)=> {
	return('0' + (time/1000)%60).slice(-2);
    }
	*/


export function convertTime(time) {


	let minutes = Math.floor((time/1000)/60);
	let	seconds = ('0' + (time/1000)%60).slice(-2);
	return minutes+':'+seconds;
}