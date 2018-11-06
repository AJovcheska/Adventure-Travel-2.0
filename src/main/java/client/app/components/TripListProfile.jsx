var React = require('react');
var ProfileTrip = require('ProfileTrip');

var TripListProfile = React.createClass({
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
