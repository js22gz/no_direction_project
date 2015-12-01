import React from "react";
import {Link} from "react-router";

var liStyle = { 
                    display:"inline", 
                    margin:'1em'
                };

var Nav = React.createClass({
    render: function(){
        return (
            <div id="nav">
                <ul>
                    <li style={liStyle}><Link to="/">Home</Link></li>
                    <li style={liStyle}><Link to="/stopwatch">Stopwatch</Link></li>
                    <li style={liStyle}><Link to="/timer">Timer</Link></li>
                    <li style={liStyle}><Link to="/test">Test</Link></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
});

module.exports = Nav;