var React = require('react');
var ProfileTrip = require('ProfileTrip');
var {connect} = require('react-redux');

var TripListProfile = React.createClass({
  render: function() {
    var {trips, user} = this.props;
    var renderTrips = () => {
      return trips.map((trip) => {
        return (
          <ProfileTrip key={trip.ID} {...trip} {...user} onTripDelete={this.props.onTripDelete}/>
        );
      });
    };

    return (
      <div>
        {renderTrips()}
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
      username: state.setLoggedUser,
      additionalDataSet: state.setIsAdditionalDataSet
    };
  }
)(TripListProfile);
