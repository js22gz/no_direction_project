import React from 'react';

var Home = React.createClass({
	test: function() {
		var date = new Date();
		date=date.toString();
		return (date);
	},
	componentDidMount: function() {
		this.incrementer = setInterval(this.test, 1000);
	},
    render: function(){
        return (
            <div>
                <h2>Well hello! This is a project!</h2>
                <h3>{this.test()}</h3>
            </div>
        );
    }
});

module.exports = Home;