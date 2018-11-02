var React = require('react');
var {Link} = require('react-router');
var backendApi = require('backendApi');

var TripByTag = React.createClass({
  getInitialState: function () {
    return {
      trip: {}
    };
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
    return (
      <div className="content-card-v2-tags content-card-item-tags trip-card">
        <figure className="content-card-figure js-content-card-figure">
          <img src = {`../images/${this.props.id}.jpg`}  className="img-responsive content-card-img lazyloaded trip-img"></img>
        </figure>
        <div className="content-card-text">
          <h3 className="content-card-v2-title" id="trip-card-title"><span><strong>{title}</strong></span></h3>
          <div className="trip-info content-card-info">
          </div>
          <div className="content-card-footer">
            <Link to={`/${this.props.id}`} className="detail-sm cta-text" onClick={this.handleDescription}>Learn more</Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TripByTag;
