var React = require('react');
var {Link} = require('react-router');
var Trip = require('Trip');
var backendApi = require('backendApi');
var TripList = require('TripList');
var {connect} = require('react-redux');

var Destinations = React.createClass({
  getInitialState: function () {
    return {
      selectedOption: 'rating',
      trips: []
    };
  },
  componentDidMount: function() {
    var {username} = this.props;
    console.log('Username', username);
    backendApi.getTrips([], [], 'price', "Tropical place").then((response) => {
      this.setState({
        trips: response.data
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  handleBoth: function(event) {
    this.handleChangeSelectedOption(event);
    this.handleChange(event);
  },
  handleChangeSelectedOption: function(event) {
    this.setState({
      selectedOption: event.target.value
    });
  },
  handleChange: function(event) {
    var hidden_cities = this.refs.hidden_cities.checked;
    var cruising = this.refs.cruising.checked;
    var science_and_nature = this.refs.science_and_nature.checked;
    var history_and_culture = this.refs.history_and_culture.checked;

    var Africa = this.refs.Africa.checked;
    var Antartica = this.refs.Antartica.checked;
    var Asia = this.refs.Asia.checked;
    var Europe = this.refs.Europe.checked;
    var North_America = this.refs.North_America.checked;
    var South_America = this.refs.South_America.checked;

    var sortBy = this.state.selectedOption;

    var categories = [];
    if (hidden_cities) {
      categories.push('HIDDEN_CITIES');
    }
    if (cruising) {
      categories.push('CRUISING');
    }
    if (science_and_nature) {
      categories.push('SCIENCE_AND_NATURE');
    }
    if (history_and_culture) {
      categories.push('HISTORY_AND_CULTURE');
    }

    var regions = [];
    if (Africa) {
      regions.push('Africa');
    }
    if (Antartica) {
      regions.push('Antarctica');
    }
    if (Asia) {
      regions.push('Asia');
    }
    if (Europe) {
      regions.push('Europe');
    }
    if (North_America) {
      regions.push('North America');
    }
    if (South_America) {
      regions.push('South America');
    }

    backendApi.getTrips(categories, regions, sortBy, "Mountain").then((response) => {
      this.setState({
        trips: response.data
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    const Background = "../images/a_hobbit_house-wallpaper-2560x1600.jpg";
    var ImgStyle = {
      backgroundImage: `url(${Background})`,
      height: `2100px`
    };
    var {trips} = this.state;
    return (
      <div className="main-about-div" style={ImgStyle}>
          <section>
          <nav>
            <ul>
              <h3 className="h3-title-destinations">Find a trip</h3>
              <h4 className="h4-title-destinations">Category</h4>
              <div>
                <input type="checkbox" ref="hidden_cities" onChange={this.handleChange}>
                Hidden cities
                </input>
              </div>
              <div><input type="checkbox" ref="cruising" onChange={this.handleChange}>Cruising</input></div>
              <div><input type="checkbox" ref="science_and_nature" onChange={this.handleChange}>Science and nature</input></div>
              <div><input type="checkbox" ref="history_and_culture" onChange={this.handleChange}>History and culture</input></div>

              <h4 className="h4-title-destinations">Region</h4>
              <div><input type="checkbox" ref="Africa" onChange={this.handleChange}>Africa</input></div>
              <div><input type="checkbox" ref="Antartica" onChange={this.handleChange}>Antarctica</input></div>
              <div><input type="checkbox" ref="Asia" onChange={this.handleChange}>Asia</input></div>
              <div><input type="checkbox" ref="Europe" onChange={this.handleChange}>Europe</input></div>
              <div><input type="checkbox" ref="North_America" onChange={this.handleChange}>North America</input></div>
              <div><input type="checkbox" ref="South_America" onChange={this.handleChange}>South America</input></div>
            </ul>
          </nav>

          <div className="sort-div">
            <span className="sort-title">Arrange by: &emsp;&emsp;</span>

            <span className="sort-form">
              <span className="sort-type">
                  <input type="radio" value="rating" checked={this.state.selectedOption === 'rating'}
                    onChange={this.handleBoth}>Price &emsp;&emsp;</input>
              </span>
              <span className="sort-type">
                  <input type="radio" value="price" checked={this.state.selectedOption === 'price'}
                    onChange={this.handleBoth}>Rating</input>
              </span>
            </span>
          </div>

          <div className="card-grid trips-index-cards">
            <TripList trips={trips}/>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      username: state.username
    };
  }
)(Destinations);
