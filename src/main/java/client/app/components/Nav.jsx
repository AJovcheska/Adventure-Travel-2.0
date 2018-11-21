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
    var {isLogged, username} = this.props;
    var link = '';
    if (isLogged === false) {

      link =
        <div className="top-bar-right">
          <Link to="/registration" className = "registerLink" activeClassName="active" activeStyle={{fontWeight: 'bold', color: '#C1B599'}}>Register</Link>
        </div>;
    } else {
      if (username === 'admin') {
        link =
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/createTrip">Add new trip</Link>
              </li>
              <li>
                <button type="submit" className="signOutBtn" onClick={this.onSignOut}>Sign out</button>
              </li>
            </ul>
          </div>;
      } else {
        link =
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/profile">{username}'s profile </Link>
              </li>
              <li>
                <button type="submit" className="signOutBtn" onClick={this.onSignOut}>Sign out</button>
              </li>
            </ul>
          </div>;
      }

    }
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/">
                Home
              </IndexLink>
            </li>
            <li>
              <Link to="/destinations">
                Destinations
              </Link>
            </li>
          </ul>
        </div>

        {link}

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
