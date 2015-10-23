var React = require('react');
var Developers = require('./developers');

var App = React.createClass({
    render: function() {
      return (
        <div className='container'>
          <div className='page-header'>
            <h1>Kaiju <span className='glyphicon glyphicon-globe'/></h1>
          </div>
          <Developers />
        </div>
      )
    }
});

module.exports = App;
