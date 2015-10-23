var React = require('react');
var TaskList = require('./task-list');

var Developer = React.createClass({
  getInitialState: function() {
    return {
      name: this.props.name,
      image: '/assets/person-placeholder1.jpg',
      tasks: []
    }
  },
  render: function() {
    var imageStyle = {
      width: '135px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    return (
      <div className='col-xs-6 col-md-3'>
        <img style={imageStyle} src={ this.state.image } />
        <h3>{ this.state.name }</h3>
        <TaskList tasks={ this.state.tasks } />
      </div>
    )
  }
});

module.exports = Developer;
