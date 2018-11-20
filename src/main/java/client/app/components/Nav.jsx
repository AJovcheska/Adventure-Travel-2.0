var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');

var Nav = React.createClass({
  onSignOut: function() {
    var {dispatch} = this.props;
    dispatch(actions.setLoggedUser(''));
    dispatch(actions.setAccessToken(''));
    dispatch(actions.setTripsForLoggedUser([]));
    dispatch(actions.setIsUserLogged(false));
    dispatch(actions.setUserObject(''));
  },
  render: function() {
    var {isLogged} = this.props;
    var link = '';
    if (isLogged === false) {
      link = <Link to="/registration" className = "registerLink" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>Register</Link>;
    } else {
      link = <button type="submit" className="signOutBtn" onClick={this.onSignOut}>Sign out</button>;
    }
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
          </ul>
        </div>
        <div className="top-bar-right">
          {link}
        </div>
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      user: state.setUserObject,
      isLogged: state.setIsUserLogged,
      accessToken: state.setAccessToken,
      trips: state.setTripsForLoggedUser,
      username: state.setLoggedUser
    };
  }
)(Nav);
