var React = require('react');
var Footer = require('Footer');

var About = React.createClass({
  render: function() {
    const masterBackground = "../images/beautiful_rice_terraces_landscape-wallpaper-2880x1800.jpg";
    var masterImgStyle = {
      backgroundImage: `url(${masterBackground})`
    };
    return (
      <form style={masterImgStyle}>
        <div className="main-about-div">
          <h1 className="text-center page-title">Learn more about Us</h1>
          <div className="rowAbout">
            <div className="column-about text-center">
              <p className="about-subtitle">Who We Are.</p>
            </div>
            <div className="column-about">
              <p className="about-subtitle">We share discoveries.</p>
              <p>We are a global community of explorers, who have together created a comprehensive database of the world’s most wondrous places and foods —15,486 of them contributed by our community so far, and more every day, from a secret apartment atop the Eiffel Tower to bridges built out of living roots, from a temple shaped like a chicken to an island ruled by cats, from a fruit that tastes like chocolate pudding to a spicy chutney made out of red ants. </p>
            </div>
          </div>
          <div className="rowAbout">
            <div className="column-about">
              <p className="about-subtitle">We host unique events.</p>
              <p>We hold extraordinary events all over the country, every week. In nine U.S. cities, Atlas Obscura Societies create intimate, wondrous experiences for our community. From back-room tours to workshops with the world’s most remarkable people, we give our community access to the rarest experiences.</p>
            </div>
            <div className="column-about">
              <p className="about-subtitle">We lead amazing trips.</p>
              <p>We lead the world’s most unusual trips to the world’s most remarkable places. Atlas Obscura takes small groups of travelers on adventures, from Bhutan’s mountaintop temples, to Chernobyl’s Forbidden Zone, to scientific research stations in the Peruvian Amazon.</p>
            </div>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = About;
