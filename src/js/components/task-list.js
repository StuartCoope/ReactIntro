var React = require('react');
var Task = require('./task');

var TaskList = React.createClass({

  getInitialState: function() {
    return {
      tasks: [],
      text: ''
    }
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if(this.state.text.length > 0){
      var newTasks = this.state.tasks.concat([this.state.text]);
      this.setState({tasks: newTasks, text: ''});
    }
  },

  render: function() {
    var createTask = function(itemText) {
      return <Task title={itemText} />;
    };

    return (
      <div className='list-group'>
        {this.state.tasks.map(createTask)}
        <form onSubmit={this.handleSubmit} className='list-group-item'>
          <div className='input-group'>
            <input placeholder='New Task' className='form-control' onChange={this.onChange} value={this.state.text} />
            <span className='input-group-btn'>
              <button className='btn btn-default'>+</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = TaskList;
