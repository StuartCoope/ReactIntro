var React = require('react');
var Developer = require('./developer');

var Developers = React.createClass({
    render: function() {
      return (
        <div>
          <Developer name='Stuart' />
          <Developer name='Tom' />
          <Developer name='Noel' />
          <Developer name='Alice' />
        </div>
      )
    }
});

module.exports = Developers;
