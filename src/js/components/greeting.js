var React = require('react');

var Greeting = React.createClass({
    render: function() {
      return <span>Hello {this.props.name}</span>
    }
});

module.exports = Greeting;
