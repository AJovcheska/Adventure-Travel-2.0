var React = require('react');

var Article = React.createClass({
  render: function() {
    return (
      <div>
        <div>Category</div>
        <div>Title</div>
        <div>Dates</div>
        <div>Price</div>
        <div>Link</div>
      </div>
    );
  }
});

module.exports=Article;
