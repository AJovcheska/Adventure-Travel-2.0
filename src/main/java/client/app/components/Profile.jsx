var React = require("react");
var backendApi = require('backendApi');
var TripListProfile = require('TripListProfile');

var Profile = React.createClass({
  getInitialState: function () {
    return {
      trips: [],
      user: '',
      tripCompanion: null,
      entertainment: null,
      tripLength: null,
      destination: null
    };
  },
  handleChangeData: function() {
    var tripCompanion = this.state.tripCompanion;
    var entertainment = this.state.entertainment;
    var tripLength = this.state.tripLength;
    var destination = this.state.destination;
    var username = this.props.location.state.user.username;
    var accessToken = this.props.location.state.accessToken;

    console.log(username);

    backendApi.updateAdditionalInfo(username, destination, entertainment, tripLength, tripCompanion).then((response) => {
      backendApi.getUserByUsername(accessToken, username).then((response) =>{
        console.log('Response from getting user ' + response.status);
        this.setState({
          user: response
        });
      });
    }, function(errorMessage) {
      console.log(errorMessage);
    });
  },
  componentDidMount: function() {
    this.setState({
      trips: this.props.location.state.trips,
      user: this.props.location.state.user
    });

  },
  onCompanionChange: function(e) {
    this.setState({
      tripCompanion: e.currentTarget.value
    });
  },
  onTripLengthChange: function(e) {
    this.setState({
      tripLength: e.currentTarget.value
    });
  },
  onEntertainmentChange: function(e) {
    this.setState({
      entertainment: e.currentTarget.value
    });
  },
  onDestinationChange: function(e) {
    this.setState({
      destination: e.currentTarget.value
    });
  },
  render: function() {
    var name = this.state.user.name;
    var age = this.state.user.age;
    var country = this.state.user.country;
    var profession = this.state.user.profession;
    var email = this.state.user.email;
    var trips = this.state.trips;
    var user = this.state.user;

    var destination = this.state.user.destination;
    var entertainment = this.state.user.entertainment;
    var tripLength = this.state.user.tripLength;
    var tripCompanion = this.state.user.tripCompanion;

    var show;
    if (destination === '') {
      show = '';
    }  else {
      show =
        <span>
            <p className="h3-title-profile">Trip companion</p>
            <div className="profile-placeholders" id="trip-card-price">{tripCompanion}</div>

            <p className="h3-title-profile">Entertainment</p>
            <div className="profile-placeholders" id="trip-card-price">{entertainment}</div>

            <p className="h3-title-profile">Trip length</p>
            <div className="profile-placeholders" id="trip-card-price">{tripLength}</div>

            <p className="h3-title-profile">Destination</p>
            <div className="profile-placeholders" id="trip-card-price">{destination}</div>
        </span>;
    }
    return (
        <div className="profileSection">
          <div className="profileNav">
            <img src = {`../images/person.png`} className="profileImg"/>
            <h3 className="basicInfo">About</h3>
            <p className="h3-title-profile">Name</p>
            <div className="profile-placeholders" id="trip-card-price">{name}</div>

            <p className="h3-title-profile">Age</p>
            <div className="profile-placeholders" id="trip-card-price">{age}</div>

            <p className="h3-title-profile">Email</p>
            <div className="profile-placeholders" id="trip-card-price">{email}</div>

            <p className="h3-title-profile">Country</p>
            <div className="profile-placeholders" id="trip-card-price">{country}</div>

            <p className="h3-title-profile">Profession</p>
            <div className="profile-placeholders" id="trip-card-price">{profession}</div>

            {show}
          </div>


          <div>
            <div className="profileContainer rightProfile">
              <p>Personalize your experience.</p>

              <div className="additionalInfo">
                <p className="additionalQuestionLabel"><b>What do you enjoy doing most on your trips?</b></p>
                <input type="radio" value="Extreme Sports" checked={this.state.entertainment === 'Extreme Sports'} onChange={this.onEntertainmentChange}>Extreme sports</input>
                <input type="radio" value="Sightseeing" checked={this.state.entertainment === 'Sightseeing'} onChange={this.onEntertainmentChange}>Sightseeing</input>
                <input type="radio" value="Food Tasting" checked={this.state.entertainment === 'Food Tasting'} onChange={this.onEntertainmentChange}>Food tasting</input>
                <input type="radio" value="Wildlife encounters" checked={this.state.entertainment === 'Wildlife encounters'} onChange={this.onEntertainmentChange}>Wildlife encounters</input>
                <input type="radio" value="Exploring history" checked={this.state.entertainment === 'Exploring history'} onChange={this.onEntertainmentChange}>Exploring history</input>
              </div>

              <div className="additionalInfo">
                <p className="additionalQuestionLabel"><b>Who do you usually travel with?</b></p>
                <input type="radio" value="Alone" checked={this.state.tripCompanion === 'Alone'} onChange={this.onCompanionChange}>Alone</input>
                <input type="radio" value="Partner" checked={this.state.tripCompanion === 'Partner'} onChange={this.onCompanionChange}>Partner</input>
                <input type="radio" value="Family" checked={this.state.tripCompanion === 'Family'} onChange={this.onCompanionChange}>Family</input>
                <input type="radio" value="Friends" checked={this.state.tripCompanion === 'Friends'} onChange={this.onCompanionChange}>Friends</input>
              </div>

              <div className="additionalInfo">
                <p className="additionalQuestionLabel"><b>How long do you consider your trip should last?</b></p>
                <input type="radio" value="1 Week" checked={this.state.tripLength === '1 Week'} onChange={this.onTripLengthChange}>1 week</input>
                <input type="radio" value="2 - 4 Weeks" checked={this.state.tripLength === '2 - 4 Weeks'} onChange={this.onTripLengthChange}>2-4 weeks</input>
                <input type="radio" value="1 Month or more" checked={this.state.tripLength === '1 Month or more'} onChange={this.onTripLengthChange}>1 month or more</input>
              </div>

              <div className="additionalInfo">
                <p className="additionalQuestionLabel"><b>Which of these places you prefer to travel to?</b></p>
                <input type="radio" value="Beach" checked={this.state.destination === 'Beach'} onChange={this.onDestinationChange}>Beach</input>
                <input type="radio" value="Mountain" checked={this.state.destination === 'Mountain'} onChange={this.onDestinationChange}>Mountains</input>
                <input type="radio" value="City" checked={this.state.destination === 'City'} onChange={this.onDestinationChange}>City</input>
              </div>

              <div className="editInfoButton">
                <button type="submit" className="signupbtn" onClick={this.handleChangeData}>Edit info</button>
              </div>
            </div>
            <div className="editInfoButton profileContainer favDestLabel">
              <h3 className="basicInfo">Favourite destinations</h3>
            </div>
          </div>

            <div>
              <div className="card-grid-profile trips-index-cards">
                  <TripListProfile trips={trips} user={user}/>
              </div>
            </div>
        </div>
    );
  }
});

module.exports = Profile;
