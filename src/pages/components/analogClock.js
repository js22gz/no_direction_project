/*DigitalClock
From: http://www.w3schools.com/canvas/canvas_clock_start.asp
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

var aClockStyle = {
  backgroundColor:"grey"
};


class AnalogClock extends React.Component {

    componentDidMount(){
         let canvas = React.findDOMNode(this.refs.canvas);
          let ctx = canvas.getContext("2d");
          let radius = canvas.height / 2;
          ctx.translate(radius, radius);
          radius = radius * 0.90;

      let drawClock = ()=> {
          drawFace(ctx,radius);
          drawNumbers(ctx, radius);
          drawTime(ctx, radius);
      };

      let drawTime = (ctx, radius)=> {
       let hour = this.props.time.realTime.hours()
       let minute = this.props.time.realTime.minutes()
       let second = this.props.time.realTime.seconds()
          //hour
          hour=hour%12;
          hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
          drawHand(ctx, hour, radius*0.5, radius*0.07);
          //minute
          minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
          drawHand(ctx, minute, radius*0.8, radius*0.07);
          // second
          second=(second*Math.PI/30);
          drawHand(ctx, second, radius*0.9, radius*0.02);
      }

      let drawHand = (ctx, pos, length, width)=> {
          ctx.beginPath();
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.moveTo(0,0);
          ctx.rotate(pos);
          ctx.lineTo(0, -length);
          ctx.stroke();
          ctx.rotate(-pos);
      }

      let drawNumbers = (ctx,radius)=> {
          let ang;
          let num;
          ctx.font = radius*0.15 + "px arial";
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          for(num= 1; num < 13; num++){
              ang = num * Math.PI / 6;
              ctx.rotate(ang);
              ctx.translate(0, -radius*0.85);
              ctx.rotate(-ang);
              ctx.fillText(num.toString(), 0, 0);
              ctx.rotate(ang);
              ctx.translate(0, radius*0.85);
              ctx.rotate(-ang);
          }
      }

      let drawFace = (ctx, radius)=> {
        let grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();

      };

      setInterval(drawClock,1000);
     // drawClock();

    }



    render() {

        return (
        <canvas ref="canvas" width="300" height="300" style={aClockStyle}></canvas>
        );
    }
}

AnalogClock.propTypes = {
    time: PropTypes.shape({
        realTime:PropTypes.object.isRequired
    })
};


let mapStateToProps = (state) => {
    return { 
        time:state.time,
    };
};

export default connect(mapStateToProps)(AnalogClock);

