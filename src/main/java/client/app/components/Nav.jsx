var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>
                Home
              </IndexLink>
            </li>
            <li>
              <Link to="/destinations" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <Link to="/registration" className = "registerLink" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>Register</Link>
            <Link to="/profile" className="profileLink" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>My Profile</Link>
      </div>
      </div>
    );
  }
});

module.exports = Nav;
