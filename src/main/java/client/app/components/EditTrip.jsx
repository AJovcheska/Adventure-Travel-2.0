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
                      <input className="inputFieldsCreateTrip" type="text" placeholder="Enter title" ref="title" value={trip.country}/>
                    </h2>
                    <h1 className="title-lg item-title trip-title"><input className="inputFieldsCreateTrip" type="text" placeholder="Enter title" ref="title" value={trip.title}/></h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li><textarea placeholder="Enter description" ref="description" value={trip.highlights}/></li>
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        <a name="day1"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 1
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleOne}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateOne}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.dayOne}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleTwo}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateTwo}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.dayTwo}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleThree}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateThree}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.dayThree}/></li>
                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleFour}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateFour}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.dayFour}/></li>

                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleFive}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateFive}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.dayFive}/></li>

                        </ul>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          <textarea placeholder="Enter description" ref="description" value={trip.titleSix}/>
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          <textarea placeholder="Enter description" ref="description" value={trip.dateSix}/>
                        </div>
                        <ul className="tripsUl">
                          <li><textarea placeholder="Enter description" ref="description" value={trip.daySix}/></li>
                        </ul>
                      </div>
                    </section>
                    <button onClick={this.handleEditTrip}>Submit changes</button>
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
                        <div><textarea placeholder="Enter description" ref="description" value={trip.departureDate}/></div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        <textarea placeholder="Enter description" ref="description" value={trip.price}/>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Number of days</label>
                      <div className="event-detail">
                        <textarea placeholder="Enter description" ref="description" value={trip.duration}/>
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
