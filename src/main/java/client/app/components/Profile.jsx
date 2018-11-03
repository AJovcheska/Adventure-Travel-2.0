var React = require("react");
var backendApi = require('backendApi');
var TripList = require('TripList');

var Profile = React.createClass({
  getInitialState: function () {
    return {
      trips: [],
      user: []
    };
  },
  componentDidMount: function() {
    // console.log("Trips profile: " + this.props.location.state.trips);
    this.setState({
      trips: this.props.location.state.trips,
      user: this.props.location.state.user
    });
  },
  render: function() {
    var name = this.state.user.name;
    var age = this.state.user.age;
    var country = this.state.user.country;
    var profession = this.state.user.profession;
    var email = this.state.user.email;
    var trips = this.state.trips;
    return (
      <section className="profileSection">
      <nav className="profileNav">
          <img src = {`../images/person.png`} className="profileImg"/>
          <h3 className="basicInfo">About</h3>
          <h4 className="h3-title-profile">Name</h4>
          <div className="profile-placeholders" id="trip-card-price">{name}</div>

          <h4 className="h3-title-profile">Age</h4>
          <div className="profile-placeholders" id="trip-card-price">{age}</div>

          <h4 className="h3-title-profile">Email</h4>
          <div className="profile-placeholders" id="trip-card-price">{email}</div>

          <h4 className="h3-title-profile">Country</h4>
          <div className="profile-placeholders" id="trip-card-price">{country}</div>

          <h4 className="h3-title-profile">Profession</h4>
          <div className="profile-placeholders" id="trip-card-price">{profession}</div>
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
