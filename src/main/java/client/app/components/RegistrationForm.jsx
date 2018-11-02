var React = require('react');
var {IndexLink} = require('react-router');
var backendApi = require('backendApi');
var {CountryDropdown, RegionDropdown} = require('react-country-region-selector');

var RegistrationForm = React.createClass({
  getInitialState: function() {
    return {
      country: '',
      region: '',
      sex: 'male',
      selectedOption: null,
      travelCompanion: null,
      entertainment: null,
      tripLength: null,
      destination: null
    };
  },
  handleRegistration: function(e) {
    var username = this.refs.username.value;
    var name = this.refs.name.value;
    var age = this.refs.age.value;
    var password = this.refs.password.value;
    var country = this.state.country;
    var sex = this.state.sex;
    var profession = this.refs.profession.value;
    var email = this.refs.email.value;
    var tripCompanion = this.state.tripCompanion;
    var entertainment = this.state.entertainment;
    var tripLength = this.state.tripLength;
    var destination = this.state.destination;

    backendApi.registerUser(username, name, age, password, country, email, sex, profession,
      tripCompanion, entertainment, tripLength, destination).then((response) => {
      if (response.data) {
        this.refs.username.value='';
        this.refs.email.value = '';
        this.refs.name.value = '';
        this.refs.age.value = '';
        this.refs.password.value = '';
        this.refs.country.value = '';
        this.refs.profession.value = '';
        this.setState({
          sex: 'male',
          region: '',
          travelCompanion: null,
          tripLength: null,
          entertainment: null,
          destination: null
        });
        window.open('http://localhost:3000/#/successRegistration?_k=se8ue5', "_self");
      } else {
        alert('Error during registration. Try again.');
      }
    }, function(errorMessage) {
      console.log(errorMessage);
      alert("There was an error registering. Try again later.");
    });
  },
  selectCountry: function(val) {
    this.setState({
      country: val
    });
  },
  selectRegion: function(val) {
    this.setState({
      region: val
    });
  },
  onSiteChanged: function(e) {
   this.setState({
     sex: e.currentTarget.value
   });
  },
  onCompanionChange: function(e) {
    this.setState({
      travelCompanion: e.currentTarget.value
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
  handleChange: function(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  },
  render: function() {
    const masterBackground = "../images/travel_the_world_hot_air_balloons-wallpaper-2560x1600_1.jpg";
    var masterImgStyle = {
      backgroundImage: `url(${masterBackground})`
    };

    const {country, region} = this.state;
    let colors = ['orange', 'red', 'blue', 'purple']
    return (
      <form style={masterImgStyle} className="registrationForm">
        <div>
           <div className="loginContainer">
             <h1>Sign Up</h1>

             <label for="username"><b>Username *</b></label>
             <input type="text" placeholder="Enter Username" ref="username" required/>

             <label for="email"><b>Email *</b></label>
             <input type="text" placeholder="Enter Email" ref="email" required/>

             <label for="password"><b>Password *</b></label>
             <input type="password" placeholder="Enter Password" ref="password" required/>

             <label for="name"><b>Name *</b></label>
             <input type="text" placeholder="Enter Name" ref="name" required/>

             <label for="age"><b>Age *</b></label>
             <input type="text" placeholder="Enter Age" ref="age" required/>

             <label for="country"><b>Country *</b></label>
             <CountryDropdown value={country} ref= "country" onChange={(val) => this.selectCountry(val)} required/>

             <div>
               <label for="sex"><b>Sex</b></label>
               <input type="radio" value="male" checked={this.state.sex=== 'male'} onChange={this.onSiteChanged} required>Male</input>
               <input type="radio" value="female" checked={this.state.sex === 'female'} onChange={this.onSiteChanged} required>Female</input>
             </div>

             <label for="profession"><b>Profession *</b></label>
             <input type="text" placeholder="Enter Profession" ref="profession" required/>
           </div>
         </div>
         <div className="loginContainer right">
           <p>Answer these questions to help us make your experience here better.</p>
           <div className="additionalInfo">
             <label for="travelCompanion"><b>Who do you usually travel with?</b></label>
             <input type="radio" value="alone" checked={this.state.travelCompanion=== 'alone'} onChange={this.onCompanionChange}>Alone</input>
             <input type="radio" value="partner" checked={this.state.travelCompanion === 'partner'} onChange={this.onCompanionChange}>Partner</input>
             <input type="radio" value="family" checked={this.state.travelCompanion === 'family'} onChange={this.onCompanionChange}>Family</input>
             <input type="radio" value="friends" checked={this.state.travelCompanion === 'friends'} onChange={this.onCompanionChange}>Friends</input>
           </div>

           <div className="additionalInfo">
             <label for="travelCompanion"><b>What do you enjoy doing most on your trips?</b></label>
             <input type="radio" value="extremeSports" checked={this.state.entertainment=== 'extremeSports'} onChange={this.onEntertainmentChange}>Extreme sports</input>
             <input type="radio" value="sightseeing" checked={this.state.entertainment === 'sightseeing'} onChange={this.onEntertainmentChange}>Sightseeing</input>
             <input type="radio" value="foodTasting" checked={this.state.entertainment === 'foodTasting'} onChange={this.onEntertainmentChange}>Food tasting</input>
             <input type="radio" value="wildlife" checked={this.state.entertainment === 'wildlife'} onChange={this.onEntertainmentChange}>Wildlife encounters</input>
           </div>

           <div className="additionalInfo">
             <label for="travelCompanion"><b>How long do you consider your trip should last?</b></label>
             <input type="radio" value="oneWeek" checked={this.state.tripLength=== 'oneWeek'} onChange={this.onTripLengthChange}>1 week</input>
             <input type="radio" value="twoWeeks" checked={this.state.tripLength === 'twoWeeks'} onChange={this.onTripLengthChange}>2-4 weeks</input>
             <input type="radio" value="oneMonth" checked={this.state.tripLength === 'oneMonth'} onChange={this.onTripLengthChange}>1 month or more</input>
           </div>

           <div className="additionalInfo">
             <label for="idealTrip"><b>Which of these places you prefer to travel to?</b></label>
             <input type="radio" value="beach" checked={this.state.destination=== 'beach'} onChange={this.onDestinationChange}>Beach</input>
             <input type="radio" value="mountain" checked={this.state.destination === 'mountain'} onChange={this.onDestinationChange}>Mountains</input>
             <input type="radio" value="city" checked={this.state.destination === 'city'} onChange={this.onDestinationChange}>City</input>
           </div>
         </div>
         <div className="clearfix buttonLogin">
           <button type="button" class="cancelbtn">
              <IndexLink to="/">Cancel</IndexLink>
           </button>
           <button type="submit" class="signupbtn" onClick={this.handleRegistration}>Sign Up</button>
         </div>
      </form>
    );
  }
});

module.exports = RegistrationForm;
