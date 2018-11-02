var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var HomePage = require('HomePage');
var About = require('About');
var Destinations = require('Destinations');
var Questions = require('Questions');
var RegistrationForm = require('RegistrationForm');
var TripDescription = require('TripDescription');
var Profile = require('Profile');
var LoginForm = require('LoginForm');
var SuccessRegistration = require('SuccessRegistration');

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

var Barcelona = require('Barcelona');
var Rome = require('Rome');
var Morocco = require('Morocco');
var Persia = require('Persia');
var Mongolia = require('Mongolia');
var Everest = require('Everest');
var Antarctica = require('Antarctica');
var Brazil = require('Brazil');
var Petra = require('Petra');
var Zambia = require('Zambia');
var Rwanda = require('Rwanda');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('style!css!applicationStyles')
require('style!css!tripStyle')
require('style!css!navigationStyle')
require('style!css!footerStyle')
require('style!css!aboutStyle')
require('style!css!registrationStyle')
require('style!css!questionsStyle')
require('style!css!destinationStyle')
require('style!css!tripDescriptionStyle')
require('style!css!barcelonaStyle')
require('style!css!homePageStyle')
require('style!css!tripsByTagsStyle')
require('style!css!profileStyle')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="destinations" component={Destinations}/>
      <Route path="questions" component={Questions}/>
      <Route path="registration" component={RegistrationForm}/>
      <Route path="description" component={TripDescription}/>
      <Route path="profile" component={Profile}/>
      <Route path="login" component={LoginForm}/>

      <Route path="2000" component={Rome}/>
      <Route path="2001" component={Antarctica}/>
      <Route path="2002" component={Everest}/>
      <Route path="2004" component={Morocco}/>
      <Route path="2005" component={Persia}/>
      <Route path="2006" component={Mongolia}/>
      <Route path="2007" component={Barcelona}/>
      <Route path="2008" component={Brazil}/>
      <Route path="2009" component={Petra}/>
      <Route path="2010" component={Rwanda}/>
      <Route path="2011" component={Zambia}/>

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
      <IndexRoute component={HomePage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
