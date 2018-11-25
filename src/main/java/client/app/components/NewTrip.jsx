var React = require('react');
var backendApi = require('backendApi');
var {connect} = require('react-redux');

var NewTrip = React.createClass({
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
  handleFavourites: function (id) {
    var {username} = this.props;
    backendApi.addTripForUser(username, id).then((response) => {
      console.log(response);
      this.setState({
        isAddedToFavorites: true
      });
      backendApi.getTripById(id).then((response) => {
        console.log(response);
        var {availableSeats} = response.data;
        backendApi.updateSeats(id, availableSeats - 1).then((response) => {
          console.log(response);
        });
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  render: function () {
    var trip = this.props.location.state.trip;

    var {username, isLogged} = this.props;
    var favButtonToShow = '';

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
            favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>No longer available</button>;
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
                      {trip.highlights}
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        {trip.description}
                      </div>
                    </section>
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
                        {trip.duration} days, {trip.duration - 1} nights
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {favButtonToShow}
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
)(NewTrip);
