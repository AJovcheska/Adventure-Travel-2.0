var React = require('react');
var {Link} = require('react-router');
var backendApi = require('backendApi');

var Trip = React.createClass({
  getInitialState: function () {
    return {
      trip: {},
      id: this.props.id
    };
  },
  componentDidMount: function() {
    var {id} = this.state;

    backendApi.getTripById(id).then((response) => {
      this.setState({
        trip: response.data
      })
    }).catch((error)=>{
      console.log(error);
    });
  },
  handleDescription: function(event) {
    var {id} = this.props;

    backendApi.getTripById(id).then((response) => {
      this.setState({
        trip: response.data
      })
    }).catch((error)=>{
       console.log(error);
    });
  },
  render: function() {
    var {price,title,rating,departure_date,id,image} = this.props;

    var pageToOpen = '';
    if (id > 2011) {
      pageToOpen = <Link to={{ pathname: '/trip', state: { trip: this.state.trip} }} className="detail-sm cta-text" onClick={this.handleDescription}>Learn more</Link>;
    } else {
      pageToOpen = <Link to={{pathname: `/detailedTrip`, state: {trip: this.state.trip}}} className="detail-sm cta-text" onClick={this.handleDescription}>Learn more</Link>;
    }
    return (
      <div className="content-card-v2 content-card-item trip-card">
        <figure className="content-card-figure js-content-card-figure">
          <img src = {`../images/${image}`}  className="img-responsive content-card-img lazyloaded trip-img"/>
        </figure>
        <div className="content-card-text">
          <h3 className="content-card-v2-title" id="trip-card-title"><span><strong>{title}</strong></span></h3>
          <div className="trip-info content-card-info">
            <div className="trip-dates" id="trip-card-dates">
              <div>{departure_date}</div>
            </div>
            <div className="trip-fees" id="trip-card-price">${price},00</div>
            <div className="trip-rating" id="trip-card-rating">{rating} stars</div>
          </div>
          <div className="content-card-footer">
            {pageToOpen}
          </div>
        </div>
        <div className="clearfix">
          <button className="tmpBtn" onClick={this.handleRemoveFromFavorites}>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Trip;
