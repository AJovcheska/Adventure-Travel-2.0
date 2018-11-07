var React = require('react');
var Trip = require('Trip');

var TripList = React.createClass({
  render: function() {
    var {trips} = this.props;
    var renderTrips = () => {
      return trips.map((trip) => {
        return (
          <Trip key={trip.ID} {...trip}/>
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

module.exports = TripList;
