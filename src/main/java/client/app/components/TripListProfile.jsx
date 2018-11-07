var React = require('react');
var ProfileTrip = require('ProfileTrip');
var backendApi = require('backendApi');

var TripListProfile = React.createClass({
  getInitialState: function () {
    return {
      trips: this.props.trips,
      user: this.props.user
    };
  },
  render: function() {
    var {trips, user} = this.props;
    var renderTrips = () => {
      return trips.map((trip) => {
        return (
          <ProfileTrip key={trip.ID} {...trip} {...user}/>
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

module.exports = TripListProfile;
