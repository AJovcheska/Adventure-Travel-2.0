var React = require('react');
var backendApi = require('backendApi');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');

var HomePage = React.createClass({
  getInitialState: function () {
    return {
      accessToken: this.props.accessToken,
      username: this.props.username,
      trips: this.props.trips,
      user: this.props.user,
      isLogged: this.props.isLogged
    }
  },
  handleLogin: function (e) {
    var password = this.refs.password.value;
    var username = this.refs.username.value;
    var {dispatch} = this.props;
    backendApi.getRefreshToken(username, password).then((response) => {
      backendApi.getAccessToken(response).then((res) => {
        backendApi.loginUser(res, username).then((result) => {
          if (result) {
            this.refs.username.value = '';
            this.refs.password.value = '';
            this.setState({
              accessToken: res,
              username: username,
              trips: result
            });
            dispatch(actions.setLoggedUser(username));
            dispatch(actions.setAccessToken(res));
            dispatch(actions.setTripsForLoggedUser(result));
            console.log(username);
            console.log(res);
            backendApi.getUserByUsername(res, username).then((user) => {
              if (user !== 401) {
                this.setState({
                  user: user,
                  isLogged: true
                });
                dispatch(actions.setUserObject(user));
                dispatch(actions.setIsUserLogged(true));
              } else {
                this.setState({
                  isLogged: false
                });
                dispatch(actions.setIsUserLogged(false));
              }
            }, function (errorMessage) {
              console.log(errorMessage);
            });
          } else {
            throw new Error(res.data.message);
          }
        }, function (errorMessage) {
          console.log(errorMessage);
        });
      });
    });
  },
  render: function () {
    const photoboothBackground = "../images/bgd2.jpg";
    var photoBoothStyle = {
      backgroundImage: `url(${photoboothBackground})`
    };

    const masterBackground = "../images/bgd1.jpg";
    var masterImgStyle = {
      backgroundImage: `url(${masterBackground})`,
      height: '555px',
      width: '100%'
    };

    const whereWeTravelBackground = "../images/bgd.jpg";
    var whereWeTravelImgStyle = {
      backgroundImage: `url(${whereWeTravelBackground})`
    };

    var {isLogged} = this.props;
    var styleName = '';
    if (isLogged === true) {
      styleName = "loginFormHidden";
    } else {
      styleName = "";
    }

    return (
      <div>
        <form className={styleName}>
          <div className="loginForm loginButton">
            <button type="submit" onClick={this.handleLogin}>Login</button>
          </div>
          <div className="loginForm">
            <input type="password" placeholder="Enter Password" ref="password" required/>
          </div>
          <div className="loginForm">
            <input type="text" placeholder="Enter Username" ref="username" required/>
          </div>
        </form>

        <div style={masterImgStyle}>
          <h1 className="text-center page-title homepage-transparentTitle">Transparent title</h1>
          <h1 className="text-center page-title homepage-title">Adventure Travel</h1>
          <h5 className="text-center page-title h5-homepage">Unusual trips and unique destinations</h5>
        </div>

        <div>
          <div className="photoDiv" style={whereWeTravelImgStyle}>
            <p className="home-subtitle">Where we travel</p>
            <div className="content-card-text-homepage">
              <img src="../images/Africa.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>Africa</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/antarctica.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>Antarctica</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/Asia.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>Asia</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/Europe.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>Europe</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/MiddleEast.jpg"></img>
              <h3 className="title-md content-card-title-homepage">
                <span>Middle East</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/NorthAmerica.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>North America</span>
              </h3>
            </div>
            <div className="content-card-text-homepage">
              <img src="../images/SouthAmerica.jpg"/>
              <h3 className="title-md content-card-title-homepage">
                <span>South America</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="place-tags-top-content-header" style={whereWeTravelImgStyle}>
          <p className="tags-subtitle">Tags</p>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/architecturalwonders?_k=ym0gl7">Architectural
            wonders</a></button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/mothernature?_k=ym0gl7">Mother nature</a>
          </button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/art?_k=ym0gl7">Inspiring art</a></button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/ice?_k=ym0gl7">Ice & cold</a></button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/fauna?_k=ym0gl7">Fascinating fauna</a>
          </button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/east?_k=ym0gl7">Far far East</a></button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/history?_k=ym0gl7">History and mistery</a>
          </button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/inthemountain?_k=ym0gl7">In the
            mountains</a></button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/biking?_k=ym0gl7">Biking and hiking</a>
          </button>
          <button className="tag-li"><a href="http://localhost:3000/?#/tags/photobomb?_k=ym0gl7">Photography bomb</a>
          </button>
        </div>
      </div>
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
)(HomePage);
