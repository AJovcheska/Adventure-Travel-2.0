var React = require("react");
var backendApi = require('backendApi');
var TripList = require('TripList');

var Profile = React.createClass({
  getInitialState: function () {
    return {
      trips: []
    };
  },
  componentDidMount: function() {
    backendApi.getTrips([], [], 'price').then((response) => {
      this.setState({
        trips: response.data
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
      var {trips} = this.state;
    return (
      <section className="profileSection">
      <nav className="profileNav">
          <img src = {`../images/person.png`} className="profileImg"/>
          <h3 className="basicInfo">About</h3>
          <h4 className="h3-title-profile">Name</h4>
          <div className="profile-placeholders" id="trip-card-price">name placeholder</div>

          <h4 className="h3-title-profile">Age</h4>
          <div className="profile-placeholders" id="trip-card-price">age placeholder</div>

          <h4 className="h3-title-profile">Country</h4>
          <div className="profile-placeholders" id="trip-card-price">country placeholder</div>

          <h4 className="h3-title-profile">Profession</h4>
          <div className="profile-placeholders" id="trip-card-price">profession placeholder</div>
      </nav>
      <article>
        <div className="card-grid trips-index-cards">
            <TripList trips={trips}/>
        </div>
      </article>
    </section>
    );
  }
});

module.exports = Profile;
