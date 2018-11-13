var React = require('react');
var backendApi = require('backendApi');

var NewTrip = React.createClass({
  handleFavourites: function() {
    var {dispatch, username} = this.props;
    console.log('Username:', username);
    backendApi.addTripForUser(username, "2001").then((response) => {
      console.log('Response form antarctica', response);
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  componentDidMount: function() {
    var trip = this.props.location.state.trip;
    console.log(trip);
  },
  render: function() {
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
                        {trip.duration} days, {trip.duration + 1} nights
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="trip-day-nav trip-sidebar-wrap hidden-xs hidden-sm hidden-print">
                <button className="favouriteButton" onClick={this.handleFavourites}>Add to favourites</button>
              </nav>
            </aside>
          </div>
        </div>
      </article>
    );
  }
});

module.exports = NewTrip;
