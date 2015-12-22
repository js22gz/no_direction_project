/*
Stopwatch

 start
 stop
 reset
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

let holderStyle = {
textAlign:"center",
};

let btnStyle = {
height:"50px",
width:"50px",
background:"#FFFF99",
borderRadius:"50%",
border:'5px groove #FFCC00',
margin:"0px",
};

let btnClockStyle = {
};

let canvasStyle = {
    margin:"0px",
};

class Stopwatch extends React.Component {

    componentDidMount() {
        
        var canvas = React.findDOMNode(this.refs.swClock);
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        var getMinutes = Math.floor((this.props.stopwatch.stopwatchTime/1000)/60);
        var getSeconds = this.props.stopwatch.stopwatchTime/1000%60;

        ctx.translate(radius, radius);
        radius=radius*0.98;

        var drawClock = ()=> {

            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2*Math.PI);
            ctx.fillStyle = '#FFFF99';
            ctx.fill();
//            let grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
            let grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.02);
            grad.addColorStop(0, '#FFFF99');
            grad.addColorStop(0.5, '#FFFF99');
            grad.addColorStop(1, '#FF9900');
            ctx.strokeStyle = grad;
            ctx.lineWidth = radius*0.03;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, radius*0.05, 0, 2*Math.PI);
            ctx.fillStyle = '#000000';
            ctx.fill();


            let second = this.props.stopwatch.stopwatchTime;
            second= second/1000%60;
            second=(second*Math.PI/30);
            //drawPins(ctx,radius);
            drawNumbers(ctx,radius);
            drawHand(ctx, second, radius*0.8, radius*0.04);
            setTimeout(drawClock);
        }

        let drawPins = (ctx,radius)=> {
            let length=radius*0.1;
            let ang;
            ctx.beginPath();
            ctx.strokeStyle="green";
            ctx.lineWidth = radius*0.02;
            ctx.lineCap = "square";

            for(let i=1 ; i<61 ; i++)
            {
                ang = i * Math.PI / 12;
                ctx.rotate(ang);
                ctx.translate(0, -radius*0.85);
                ctx.rotate(-ang);
                ctx.lineTo(0, -length);
                ctx.stroke();
                ctx.rotate(ang);
                ctx.translate(0, radius*0.85);
                ctx.rotate(-ang);
            }
        }

        let drawNumbers = (ctx, radius)=> {
            let ang;
            let num;
            ctx.font = radius*0.12 + "px arial";
            ctx.fillStyle="#000000";
            ctx.textBaseline="middle";
            ctx.textAlign="center";
            for(num= 1; num < 13; num++){
                ang = num * Math.PI / 6;
                ctx.rotate(ang);
                ctx.translate(0, -radius*0.85);
                ctx.rotate(-ang);
                let txt = num*5;
                ctx.fillText(txt.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius*0.85);
                ctx.rotate(-ang);
            }
            
            let gm = Math.floor((this.props.stopwatch.stopwatchTime/1000)/60);
            let gs = ('0'+this.props.stopwatch.stopwatchTime/1000%60).slice(-2);
            ctx.font = radius*0.3 + "px arial";
            ctx.fillText(gm.toString()+":"+gs.toString(), 0, -radius*0.3);
        }

    let drawHand = (ctx, pos, length, width)=> {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.strokeStyle="#000000";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
      }
      drawClock();
    }


    render() {
        let swOn = this.props.stopwatch.stopwatchOn;
        let swTime =  this.props.stopwatch.stopwatchTime;
        let getMinutes = Math.floor((swTime/1000)/60);
        let getSeconds = ('0'+swTime/1000%60).slice(-2);

        return  <div style={holderStyle}> 
                        <p>Time:{getMinutes}:{getSeconds}</p>
                    <div style={btnClockStyle}>
                        <div>
                        {(!swOn)
                            ?<button style={btnStyle} onClick={this.props.startStopwatch}>Start</button>
                            :<button style={btnStyle} onClick={this.props.stopStopwatch}>Stop</button>
                        }
                        {(!swOn&&swTime>0)
                            ?<button onClick={this.props.resetStopwatch}>Reset</button>
                            :null
                        }
                        </div>
                        <canvas ref="swClock" width="500" height="500" style={canvasStyle}></canvas>
                    </div>
                </div>;
            }

}


Stopwatch.propTypes = {
    stopwatch: PropTypes.shape({
        stopwatchTime: PropTypes.number.isRequired,
        stopwatchOn: PropTypes.bool.isRequired
    }),
    stopwatchStart: PropTypes.func.isRequired,
    stopwatchStop: PropTypes.func.isRequired,
    stopwatchReset: PropTypes.func.isRequired
};


let mapStateToProps = (state) => {
    return {
    	stopwatch: state.stopwatch
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        startStopwatch() {
            dispatch(actions.startStopwatch());
        },
        stopStopwatch() {
            dispatch(actions.stopStopwatch());
        },
        resetStopwatch() {
        	dispatch(actions.resetStopwatch());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);



/**
let Stopwatch = (props) => 
{
    let swOn = props.stopwatch.stopwatchOn;
    let swTime =  props.stopwatch.stopwatchTime;
    let getMinutes = Math.floor((swTime/1000)/60);
    let getSeconds = ('0'+swTime/1000%60).slice(-2);

    return  <div> 
                <canvas ref="swClock" width="300" height="300"></canvas>
                <p>Time:{getMinutes}:{getSeconds}</p>
                {(!swOn)
                    ?<button onClick={props.startStopwatch}>Start</button>
                    :<button onClick={props.stopStopwatch}>Stop</button>
                }
                {(!swOn&&swTime>0)
                    ?<button onClick={props.resetStopwatch}>Reset</button>
                    :null
                }
            </div>;

}
**/
