var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');
var actions = require('actions');

var DetailedTrip = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false,
      availableSeats: 0
    };
  },
  componentDidMount: function () {
    var trip = this.props.location.state.trip;
    var {username} = this.props;
    backendApi.getTripById(trip.id).then((response) => {
      this.setState({
        availableSeats: response.data.availableSeats
      });
    });
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
  handleFavourites: function () {
    var {username} = this.props;
    var trip = this.props.location.state.trip;
    backendApi.addTripForUser(username, trip.id).then((response) => {
      this.setState({
        isAddedToFavorites: true
      });
      backendApi.getTripById(trip.id).then((response) => {
        var {availableSeats} = response.data;
        backendApi.updateSeats(trip.id, availableSeats - 1).then((response) => {
          console.log('Update seats', response);
        });
      });
    }, function (errorMessage) {
      console.log('Error', errorMessage);
    });
  },
  render: function () {
    var {username, isLogged} = this.props;
    var trip = this.props.location.state.trip;
    var favButtonToShow = '';
    console.log(trip);

    if (isLogged) {
      if (username === 'admin') {
        favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>Edit trip</button>;
      } else {
        if (this.state.isAddedToFavorites) {
          favButtonToShow =
            <button className="favouriteButtonAdded" onClick={this.handleFavourites}>Added to favourites</button>;
        } else {
          if (this.state.availableSeats > 0) {
            favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>Add to favourites</button>;
          } else {
            favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>No more available seats</button>;
          }
        }
      }
    }

    return (
      <article className="event-content trip-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <header className="item-header trip-header js-item-header">
                  <div className="col-md-12">
                    <h2 className="detail-sm item-supertitle">
                      {trip.country}
                    </h2>
                    <h1 className="title-lg item-title trip-title">{trip.title}</h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li>{trip.highlights}</li>
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        <a name="day1"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 1
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleOne}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateOne}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.dayOne}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageOne}`}/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleTwo}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateTwo}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.dayTwo}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageTwo}`}/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleThree}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateThree}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.dayThree}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageThree}`}/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleFour}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateFour}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.dayFour}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageFour}`}/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleFive}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateFive}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.dayFive}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageFive}`}/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          {trip.titleSix}
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          {trip.dateSix}
                        </div>
                        <ul className="tripsUl">
                          <li>{trip.daySix}</li>
                        </ul>
                        <img className="detail-image-css" src = {`../images/${trip.imageSix}`}/>
                      </div>
                    </section>
                  </section>
                  <div className="row">
                    <div className="col-xs-12">
                      <section className="event-fine-print">
                        <div className="event-fine-print-body item-body">
                          <div className="title-sm">The Fine Print</div>
                          <div className="event-fine-print-body item-body">
                            <h3 className="event-body-subheading">YOUR ANTARCTICA TRIP INCLUDES</h3>
                            <ul className="tripsUl">
                              <li>All lodging in double-accommodation rooms at a central hotel for the duration of the
                                tour. (Single supplement for a private room is available for $725. Otherwise we'll work
                                to place individuals of the same gender together.)
                              </li>
                              <li>Daily breakfast at the hotel, four lunches, and three dinners.</li>
                              <li>Two expert guides, with a great depth and breadth of knowledge about Rome’s history,
                                arts, and culture.
                              </li>
                              <li>Admission to all proposed activities and events.</li>
                              <li>A full briefing packet for each explorer, including logistical and contact
                                information, recommended reading list, and packing list.
                              </li>
                            </ul>
                            <h3 className="event-body-subheading"><strong>ACTIVITY LEVEL</strong></h3>
                            <p>We recommend you have a medium fitness level to fully participate in this trip. You
                              should be comfortable staying on your feet for long stretches at a time, and walking
                              anywhere between 3 to 6 miles a day. We will be out and about most of each day, with time
                              to rest at lunch and dinner, both of which will take place on the later side.</p>
                            <h3 className="event-body-subheading">PAYMENT</h3>
                            <p>You will be charged a $500 deposit to hold your space. This deposit is non-refundable
                              after three days. <strong>The final payment of $2,975 will be due by December 3,
                                2018</strong>. All reservations will be final after this date, and subject to our
                              cancellation policy. By submitting your deposit, you agree to our <a
                                href="https://docs.google.com/document/d/1VKyOQFEnVBAjrwRw1k8OqCSURFC7a6zrkSvXV7N4BN4/edit"><strong>Terms &amp; Conditions</strong></a>.
                              For those wishing to have a single room and/or extra nights, optional supplements will be
                              included with the final payment. </p>
                            <h3 className="event-body-subheading">TRAVELERS ARE RESPONSIBLE FOR</h3>
                            <ul className="tripsUl">
                              <li>Flights or other transportation to and from Argentina.</li>
                              <li>Transportation from the Rome airport (or other origin) to the group's hotel.</li>
                              <li>Travel insurance (recommended).</li>
                              <li>Baggage charges.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="fine-print-sawtooth-border-sides hidden-print"></div>
                        <div className="fine-print-sawtooth hidden-print"></div>
                        <div className="fine-print-sawtooth-border-bottom hidden-print"></div>
                      </section>
                    </div>
                  </div>
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
                        <div>{trip.departureDate}</div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        ${trip.price},00 USD
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Itinerary</label>
                      <div className="event-detail">
                        {trip.duration} days, {trip.duration -1} nights
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="trip-day-nav trip-sidebar-wrap hidden-xs hidden-sm hidden-print">
                {favButtonToShow}
              </nav>
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
)(DetailedTrip);
