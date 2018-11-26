var React = require('react');
var backendApi = require('backendApi');
var {connect} = require('react-redux');
var {Link} = require('react-router');

var EditTrip = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false,
      availableSeats: 0
    };
  },
  componentDidMount: function () {
    var trip = this.props.location.state.trip;
    backendApi.getTripById(trip.id).then((response) => {
      this.setState({
        availableSeats: response.data.availableSeats
      });
    });
    var {username} = this.props;
    backendApi.getTripsByUser(username).then((response) => {
      response.map((trip) => {
        if (trip.id === trip.id) {
          this.setState({
            isAddedToFavorites: true
          });
        }
      });
    });
  },
  handleEditTrip: function() {
    var trip = this.props.location.state.trip;

    var id = trip.id;
    var highlights = this.refs.highlights.value;
    var country = this.refs.country.value;
    var title = this.refs.title.value;
    var titleOne = this.refs.titleOne.value;
    var titleTwo = this.refs.titleTwo.value;
    var titleThree = this.refs.titleThree.value;
    var titleFour = this.refs.titleFour.value;
    var titleFive = this.refs.titleFive.value;
    var titleSix = this.refs.titleSix.value;
    var duration = this.refs.duration.value;
    var date = this.refs.departureDate.value;
    var price = this.refs.price.value;
    var dayOne = this.refs.dayOne.value;
    var dayTwo = this.refs.dayTwo.value;
    var dayThree = this.refs.dayThree.value;
    var dayFour = this.refs.dayFour.value;
    var dayFive = this.refs.dayFive.value;
    var daySix = this.refs.daySix.value;
    var dateOne = this.refs.dateOne.value;
    var dateTwo = this.refs.dateTwo.value;
    var dateThree = this.refs.dateThree.value;
    var dateFour = this.refs.dateFour.value;
    var dateFive = this.refs.dateFive.value;
    var dateSix = this.refs.dateSix.value;
    backendApi.editTripById(id, country, title, duration, price, date, highlights, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix,
      dateOne, dateTwo, dateThree, dateFour, dateFive, dateSix,
      titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix).then((response) => {
      var {history} = this.props;
      history.pushState(null, 'destinations');
    });
  },
  render: function () {
    var trip = this.props.location.state.trip;

    return (
      <article className="event-content trip-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <header className="item-header trip-header js-item-header">
                  <div className="col-md-12">
                    <h2 className="detail-sm item-supertitle">
                      <input className="inputFieldsCreateTrip" type="text" placeholder="Enter title" ref="country" defaultValue={trip.country}/>
                    </h2>
                    <h1 className="title-lg item-title trip-title">
                      <input className="inputFieldsCreateTrip" type="text" placeholder="Enter title" ref="title" defaultValue={trip.title}/>
                    </h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li><textarea placeholder="Enter description" ref="highlights" defaultValue={trip.highlights}/></li>
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        <a name="day1"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 1
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleOne" defaultValue={trip.titleOne}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateOne" defaultValue={trip.dateOne}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="dayOne" defaultValue={trip.dayOne}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleTwo" defaultValue={trip.titleTwo}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateTwo" defaultValue={trip.dateTwo}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="dayTwo" defaultValue={trip.dayTwo}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleThree" defaultValue={trip.titleThree}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateThree" defaultValue={trip.dateThree}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="dayThree" defaultValue={trip.dayThree}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleFour" defaultValue={trip.titleFour}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateFour" defaultValue={trip.dateFour}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="dayFour" defaultValue={trip.dayFour}/></li>

                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleFive" defaultValue={trip.titleFive}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateFive" defaultValue={trip.dateFive}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="dayFive" defaultValue={trip.dayFive}/></li>

                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="titleSix" defaultValue={trip.titleSix}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="dateSix" defaultValue={trip.dateSix}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="daySix" defaultValue={trip.daySix}/></li>
                        </ul>
                      </div>
                    </section>
                    <button type="submit" onClick={this.handleEditTrip}>Edit trip</button>
                  </section>
                </div>
              </div>
            </div>
            <aside className="content-siderail">
              <div className="trip-detail-pane-wrap hidden-sm hidden-xs">
                <div className="event-details-pane">
                  <ul className="event-details-top event-details-list">
                    <li>
                      <label className="detail-sm event-details-label">Dates</label>
                      <div className="event-detail">
                        <div><textarea placeholder="Enter description" ref="departureDate" defaultValue={trip.departureDate}/></div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        <textarea placeholder="Enter description" ref="price" defaultValue={trip.price}/>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Number of days</label>
                      <div className="event-detail">
                        <textarea placeholder="Enter description" ref="duration" defaultValue={trip.duration}/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
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
      username: state.setLoggedUser
    };
  }
)(EditTrip);
