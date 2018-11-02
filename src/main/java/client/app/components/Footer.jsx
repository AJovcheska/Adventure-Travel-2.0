var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="sticky">
        <div>
          <div className="row">
            <div className="column">
              <h4>Quick Links</h4>
              <hr/>
              <ul className="s-footer__linklist">
                <li><a href="http://localhost:3000/#/?_k=8ok4s4">Home</a></li>
                <li><a href="http://localhost:3000/#/about?_k=kiv3lo">About</a></li>
                <li><a href="http://localhost:3000/#/destinations?_k=yjt9ng">Destinations</a></li>
                <li><a href="#0">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="column">
              <h4>Archive</h4>
              <hr/>
              <ul className="s-footer__linklist">
                <li><a href="#0">January 2018</a></li>
                <li><a href="#0">December 2017</a></li>
                <li><a href="#0">November 2017</a></li>
                <li><a href="#0">October 2017</a></li>
                <li><a href="#0">September 2017</a></li>
                <li><a href="#0">August 2017</a></li>
              </ul>
            </div>
            <div className="column">
              <h4>Follow us</h4>
              <hr/>
              <ul className="s-footer__linklist">
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://www.instagram.com/?hl=en">Instagram</a></li>
                <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
  }
});

module.exports = Footer;
