var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var HomePage = require('HomePage');
var Destinations = require('Destinations');
var Questions = require('Questions');
var RegistrationForm = require('RegistrationForm');
var TripDescription = require('TripDescription');
var Profile = require('Profile');
var LoginForm = require('LoginForm');
var SuccessRegistration = require('SuccessRegistration');
var ErrorPage = require('ErrorPage');
var CreateTrip = require('CreateTrip');

var MotherNatureTag = require('MotherNatureTag');
var InTheMountainTag = require('InTheMountainTag');
var ArchitecturalWondersTag = require('ArchitecturalWondersTag');
var BikingAndHikingTag = require('BikingAndHikingTag');
var HistoryAndMisteryTag = require('HistoryAndMisteryTag');
var InspiringArtTag = require('InspiringArtTag');
var IcecoldTag = require('IcecoldTag');
var PhotographyBombTag = require('PhotographyBombTag');
var FascinatingFaunaTag = require('FascinatingFaunaTag');
var FarFarEastTag = require('FarFarEastTag');

var DetailedTrip = require('DetailedTrip');
var NewTrip = require('NewTrip');

var actions = require('actions');
var store = require('configureStore').configure();
var {Provider} = require('react-redux');

store.subscribe(() => {
  console.log('New state', store.getState());
});

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!applicationStyles');
require('style!css!tripStyle');
require('style!css!navigationStyle');
require('style!css!footerStyle');
require('style!css!aboutStyle');
require('style!css!registrationStyle');
require('style!css!questionsStyle');
require('style!css!destinationStyle');
require('style!css!tripDescriptionStyle');
require('style!css!barcelonaStyle');
require('style!css!homePageStyle');
require('style!css!tripsByTagsStyle');
require('style!css!profileStyle');
require('style!css!createTripStyle');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="destinations" component={Destinations}/>
        <Route path="questions" component={Questions}/>
        <Route path="registration" component={RegistrationForm}/>
        <Route path="description" component={TripDescription}/>
        <Route path="profile" component={Profile}/>
        <Route path="login" component={LoginForm}/>
        <Route path="createTrip" component={CreateTrip}/>

        <Route path="detailedTrip" component={DetailedTrip}/>
        <Route path="trip" component={NewTrip}/>

        <Route path="tags/mothernature" component={MotherNatureTag}/>
        <Route path="tags/inthemountain" component={InTheMountainTag}/>
        <Route path="tags/architecturalwonders" component={ArchitecturalWondersTag}/>
        <Route path="tags/biking" component={BikingAndHikingTag}/>
        <Route path="tags/east" component={FarFarEastTag}/>
        <Route path="tags/ice" component={IcecoldTag}/>
        <Route path="tags/photobomb" component={PhotographyBombTag}/>
        <Route path="tags/art" component={InspiringArtTag}/>
        <Route path="tags/history" component={HistoryAndMisteryTag}/>
        <Route path="tags/fauna" component={FascinatingFaunaTag}/>

        <Route path="successRegistration" component={SuccessRegistration}/>
        <Route path="errorPage" component={ErrorPage}/>
        <IndexRoute component={HomePage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
