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
  componentDidMount: function() {
    var username = this.props.user.username;

    console.log("Username " + username);
    backendApi.getTripsByUser(username).then((result) => {
      console.log(result);
      if (result) {
        this.setState({
          trips: result,
          user: this.props.user
        });
      } else {
        throw new Error(res.data.message);
      }
    }, function (errorMessage) {
      console.log(errorMessage);
    });
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
