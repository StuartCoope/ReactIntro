var React = require('react');
var Greeting = require('./greeting');

var App = React.createClass({
    render: function() {
      return (
        <div>
          <h3>My App</h3>
          <Greeting name="Andy" />
        </div>
      )
    }
});

module.exports = App;
