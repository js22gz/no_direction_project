import React from 'react';
import {Link} from "react-router";

let liStyle = { 
                    display:"inline", 
                    margin:'1em'
                };


class Nav extends React.Component {
    render() {
        return (
             <div id="nav">
                <ul>
                    <li style={liStyle}><Link to="/">Home</Link></li>
                    <li style={liStyle}><Link to="/timer">Timer</Link></li>
                    <li style={liStyle}><Link to="/stopwatch">Stopwatch</Link></li>
                </ul>
                <div className="clear"/>
            </div>
       );
    }
}

export default Nav;
