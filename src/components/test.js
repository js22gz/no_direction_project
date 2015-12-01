import React from 'react';

var Test = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Creating a canvas!</h2>
                <canvas height={this.props.size} width={this.props.size}></canvas>
            </div>
        );
    }
});

module.exports = Test;