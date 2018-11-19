var React = require('react');
var {Link} = require('react-router');
var backendApi = require('backendApi');

var ProfileTrip = React.createClass({
  getInitialState: function () {
    return {
      trip: {}
    };
  },
  handleRemoveFromFavorites: function() {
    var {id} = this.props;
    var {username} = this.props;
    console.log("delete");
    backendApi.removeTripFromUser(username, id);
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

    var {price} = this.props;
    var {title} = this.props;
    var {rating} = this.props;
    var {departure_date} = this.props;
    var {id} = this.props;
    var {username} = this.props;
    return (
      <div className="content-card-v2 content-card-item trip-card">
        <figure className="content-card-figure js-content-card-figure">
          <img src = {`../images/${this.props.id}.jpg`}  className="img-responsive content-card-img lazyloaded trip-img"></img>
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
            <Link to={`/${this.props.id}`} className="detail-sm cta-text" onClick={this.handleDescription}>Learn more</Link>
          </div>
        </div>
        <div className="clearfix">
          <button type="submit" class="deleteBtn" onClick={() => {
            this.props.onTripDelete(id);
          }}>Remove from favorites</button>
        </div>
      </div>
    );
  }
});

module.exports = ProfileTrip;
