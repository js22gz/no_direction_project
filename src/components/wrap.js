import React from "react";
import Nav from "./nav";


var Wrap = React.createClass({
    render: function(){
        return (
            <div id="wrap" >
                <h1>Project of no direction</h1>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrap;