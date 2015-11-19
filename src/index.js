var React = require('react');
var	ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello World! 
        <br/>
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);