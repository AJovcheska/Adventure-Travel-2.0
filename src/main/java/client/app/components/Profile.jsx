var React = require("react");
var backendApi = require('backendApi');
var TripListProfile = require('TripListProfile');
var {connect} = require('react-redux');
var actions = require('actions');

var Profile = React.createClass({
  getInitialState: function () {
    var addDataSet = false;
    var {user} = this.props;
    if (user.destination !== '' && user.entertainment !== '' && user.tripCompanion !== '' && user.tripLength !=='') {
      addDataSet = true;
    }
    return {
      accessToken: this.props.accessToken,
      username: this.props.username,
      trips: this.props.trips,
      user: this.props.user,
      isLogged: this.props.isLogged,
      tripCompanion: this.props.user.tripCompanion,
      entertainment: this.props.user.entertainment,
      tripLength: this.props.user.tripLength,
      destination: this.props.user.destination,
      additionalDataSet: addDataSet
    };
  },
  componentDidMount: function() {
    var {username, dispatch} = this.props;
    backendApi.getTripsByUser(username).then((res) => {
      dispatch(actions.setTripsForLoggedUser(res));
      this.setState({
        trips: res
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  handleChangeData: function() {
    var {tripCompanion, entertainment, tripLength, destination} = this.state;
    var {username, accessToken, dispatch} = this.props;

    backendApi.updateAdditionalInfo(username, destination, entertainment, tripLength, tripCompanion).then((response) => {
      backendApi.getUserByUsername(accessToken, username).then((response) =>{
        dispatch(actions.setUserObject(response));
        if (response.destination !== '' && response.entertainment !== '' && response.tripCompanion !== '' && response.tripLength !=='') {
          dispatch(actions.setAdditionalDataSet(true));
          this.setState({
            additionalDataSet: true
          });
        }
      });
    }, function(errorMessage) {
      console.log(errorMessage);
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
  handleTripDelete: function(tripId) {
    var {dispatch, username} = this.props;
    backendApi.removeTripFromUser(username, tripId);
    backendApi.getTripById(tripId).then((response) => {
      console.log(response);
      var {availableSeats} = response.data;
      backendApi.updateSeats(tripId, availableSeats + 1).then((response) => {
        console.log(response);
      });
    });
    backendApi.getTripsByUser(username).then((res) => {
      dispatch(actions.setTripsForLoggedUser(res));
      this.setState({
        trips: res
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  toggleAdditionalInfo: function() {
    var {dispatch} = this.props;
    dispatch(actions.setAdditionalDataSet(!this.state.additionalDataSet));
    this.setState({
      additionalDataSet: !this.state.additionalDataSet
    });
  },
  render: function() {
    var {name, age, country, profession, email, destination, entertainment, tripLength, tripCompanion} = this.props.user;
    var tripLengthToShow = tripLength === '' ? '/' : tripLength;
    var entertainmentToShow = entertainment === '' ? '/' : entertainment;
    var tripCompanionToShow = tripCompanion === '' ? '/' : tripCompanion;
    var destinationToShow = destination === '' ? '/' : destination;
    var {trips, user} = this.props;
    var {additionalDataSet} = this.state;

    var styleName;
    if (additionalDataSet === false) {
      styleName = "profileContainer rightProfile";
    } else {
      styleName = "profileContainer rightProfileHidden";
    }

    return (
      <div>
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

            <p className="h3-title-profile">Travel companion</p>
            <div className="profile-placeholders" id="trip-card-price">{tripCompanionToShow}</div>

            <p className="h3-title-profile">Entertainment</p>
            <div className="profile-placeholders" id="trip-card-price">{entertainmentToShow}</div>

            <p className="h3-title-profile">Desirable trip duration</p>
            <div className="profile-placeholders" id="trip-card-price">{tripLengthToShow}</div>

            <p className="h3-title-profile">Favourite destination</p>
            <div className="profile-placeholders" id="trip-card-price">{destinationToShow}</div>

            <div className="editInfoButton">
              <button type="submit" className="signupbtn" onClick={this.toggleAdditionalInfo}>Edit additional info</button>
            </div>
          </div>

          <div>
            <div className={styleName}>
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
                <input type="radio" value="Tropical place" checked={this.state.destination === 'Tropical place'} onChange={this.onDestinationChange}>Tropical place</input>
                <input type="radio" value="Mountain" checked={this.state.destination === 'Mountain'} onChange={this.onDestinationChange}>Mountains</input>
                <input type="radio" value="City" checked={this.state.destination === 'City'} onChange={this.onDestinationChange}>City</input>
                <input type="radio" value="Historical place" checked={this.state.destination === 'Historical place'} onChange={this.onDestinationChange}>Historical place</input>
                <input type="radio" value="Cold place" checked={this.state.destination === 'Cold place'} onChange={this.onDestinationChange}>Cold place</input>
              </div>

              <div className="submitInfoButton">
                <button type="submit" className="signupbtn" onClick={this.handleChangeData}>Submit additional information</button>
              </div>
            </div>
          </div>

          <div className="editInfoButton profileContainer favDestLabel">
            <h3 className="basicInfo">Favourite destinations</h3>
          </div>
        </div>
        <div>
          <div className="card-grid-profile trips-index-cards">
            <TripListProfile trips={trips} user={user} onTripDelete={this.handleTripDelete}/>
          </div>
        </div>
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
)(Profile);