var React = require('react');
var {Link} = require('react-router');
var backendApi = require('backendApi');
var TripByTag = require('TripByTag');

var InTheMountainTag = React.createClass({
  getInitialState: function() {
    return {
      trips: []
    };
  },
  componentDidMount: function() {
    backendApi.getTripsByTag('InTheMountains').then((response) => {
      this.setState({
        trips: response.data
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    var {trips} = this.state;
    var renderTrips = () => {
      return trips.map((trip) => {
        return (
          <TripByTag key={trip.ID} {...trip}/>
        );
      });
    };

    return (
      <div card-grid-tag trips-index-cards-tag>
        {renderTrips()}
      </div>
    );
  }
});

module.exports = InTheMountainTag;
