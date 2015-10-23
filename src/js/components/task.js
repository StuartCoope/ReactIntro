var React = require('react');

var Task = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title,
      done: false
    };
  },
  markDone: function() {
    this.setState({ done: true});
  },
  render:function(){
    var titleStyle = {};
    if(this.state.done === true){
      titleStyle.textDecoration = 'line-through';
    }

    var buttonStyle

    return (
      <div className='list-group-item'>
        <span style={titleStyle}>{ this.state.title }</span>
        <button style={{ float: 'right' }}
                className='btn btn-default btn-xs'
                onClick={this.markDone}>
            Done
        </button>
      </div>
    )
  }
});

module.exports = Task;
