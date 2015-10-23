var React = require('react');

var MarkDone = React.createClass({
  handleClick: function() {
    //todo
  },
  render:function(){
    return <button onClick={this.handleClick}>New</button>
  }
});

module.exports = MarkDone;
