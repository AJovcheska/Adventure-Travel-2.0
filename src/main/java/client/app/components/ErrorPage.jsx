var React = require('react');

var ErrorPage = React.createClass({
  render: function() {
    return (
        <div className="successMessageRegistration">User not logged in.</div>
    );
  }
});

module.exports = ErrorPage;
