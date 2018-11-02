var React = require('react');

var TripDescription = React.createClass({
  render: function() {
    var {trip} = this.props;
    console.log("This is the trip");
    console.log({trip});
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <header className="item-header">
              <div className="col-md-12">
                <h2 className="detail-sm item-supertitle">Barcelona, Spain</h2>
                <h1 className="title-lg item-title trip-title">Title</h1>
              </div>
            </header>
          </div>

          <div className="row">
            <div className="content-body event-content-body col-md-11"></div>
            <aside className="content-siderail">
              <div className="trip-detail-pane-wrap"></div>
              <nav className="trip-day-nav trip-sidebar-wrap">
                <h6 className="trip-body-title">Trip Schedule</h6>
                <ul>
                  <li>
                    <span className="trip-day-nav-num">Day 1 &emsp;</span>
                    <a className="detail-md trip-day-nav-link">Desc</a>
                  </li>
                  <li>
                    <span className="trip-day-nav-num">Day 2 &emsp;</span>
                    <a className="detail-md trip-day-nav-link">Desc</a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TripDescription;
