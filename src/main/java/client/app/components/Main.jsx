var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>,
        <div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
