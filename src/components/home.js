import React from 'react';

var homeStyle= {color:'blue'};

var Home = React.createClass({
    render: function(){
        return (
            <div style={homeStyle}>
                <h2>Well hello! This is a project!</h2>
            </div>
        );
    }
});

module.exports = Home;