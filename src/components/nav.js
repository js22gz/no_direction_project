import React from "react";
import {Link} from "react-router";

var Nav = React.createClass({
    render: function(){
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/count">Count</Link></li>
                    <li><Link to="/timeteller">Timeteller</Link></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
});

module.exports = Nav;