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
      selectedOption: null
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

    backendApi.registerUser(username,name, age, password, country, email, sex,
      profession).then((response) => {
      console.log(response);
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
          region: ''
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
        <div className="buttonReg">
            <button type="button" className="cancelbtn">
                <IndexLink to="/">Cancel</IndexLink>
            </button>
        </div>
        <div className="buttonReg">
            <button type="submit" className="signupbtn" onClick={this.handleRegistration}>Sign Up</button>
        </div>
      </form>
    );
  }
});

module.exports = RegistrationForm;
