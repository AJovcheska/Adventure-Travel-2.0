var React = require('react');
var Footer = require('Footer');

var Questions = React.createClass({
  render: function() {
    const Background = "../images/bgd.png";
    var ImgStyle = {
      backgroundImage: `url(${Background})`,
      height: '1300px'
    };
    return (
      <div className="main-questions-div" style={ImgStyle}>
        <h1 className="text-center page-title">Frequently asked questions</h1>
        <hr className="horizontal-line"/>
        <section className="sectionQuestions">
          <nav className="questionNav">
            <h4 className="h3-title-questions">Booking Your Trip</h4>
          </nav>
          <article className="questionArticle">
            <p className="question-title">I’m a local in the place where you’re running a trip. Can I join the trip or get involved somehow?</p>
            <p className="answer">Yes! We provide amazing access to incredible places that we hope surprise even the most knowledgeable insiders. If you live in the area and want to come along for part of a trip, drop us a line and we'll work to make it happen.</p>
            <br/>

            <p className="question-title">The trip I want to take is sold out. What should I do?</p>
            <p className="answer">You can join any sold-out trip's waitlist by clicking the purple “Join the Waitlist” button at the top right of the itinerary page. If any spots open up, we offer them to travelers according to when they joined the waitlist. If a trip is sold out, there’s a very good chance we’ll offer it again in the future. Keep an eye out for new trip announcements via our trips newsletter.</p>
            <br/>

            <p className="question-title">Do you offer private trips?</p>
            <p className="answer">Not yet, but we're happy to recommend places and foods from Atlas Obscura to help you plan your travels.</p>
            <br/>
          </article>
        </section>

        <hr className="horizontal-line"/>

        <section>
        <nav className="questionNav">
            <h4 className="h3-title-questions">Small Group Travel</h4>
        </nav>
        <article>
          <p className="question-title">I’m not sure organized, group trips are for me. Are yours different?</p>
          <p className="answer">Yes! Atlas Obscura is all about exploration and discovery. We create the kinds of travel experiences we'd want for ourselves, based on our database of the world's most unique places and foods. We'll provide you unparalleled access, in-depth storytelling, and of course, some freedom and flexibility to explore on your own. No big tour buses or boring tour guides to be found. As a result, our trips attract what we think are the most open-minded, intellectually curious, and easy-going travelers in the world. And that's the real secret! The company you keep when traveling makes all the difference.</p>
          <br/>

          <p className="question-title">Do you get many solo travelers on your trips?</p>
          <p className="answer">We do—in fact, solo travelers make up about half of our small groups. With curiosity at the center of our experiences, there's a natural camaraderie that develops over the course of a trip. You won't have to worry about finding like-minded companions.</p>
          <br/>

          <p className="question-title">How old are the people who take your trips?</p>
          <p className="answer">Our trips are designed with 20- to 35-year-old travelers in mind, but we encourage and welcome travelers of all ages. If there's a particular trip you're curious about, email us at trips@atlasobscura.com and we'll give you a better sense of the trip.</p>
        </article>
        </section>

        <hr className="horizontal-line"/>

        <section>
        <nav className="questionNav">
            <h4 className="h3-title-questions">The Places We Travel</h4>
        </nav>
        <article>
          <p className="question-title">There’s someplace I want to go, but you’re not offering a trip there. What should I do?</p>
          <p className="answer">Send us an email or give us a call! We're always working on new trips, and some of the best ideas come from the Atlas Obscura community. And who knows, you might get lucky. If we're working on a new trip that might fit your interests, we'll let you know. We'd also recommend signing up for our newsletter, where we'll announce new trips frequently.</p>
          <br/>

          <p className="question-title">Do your trips include the cost of international flights?</p>
          <p className="answer">Alas, no. Our travelers live in many different parts of the world, which means the flights they take to join our trips vary. We do, however, include any regional flights that are part of the itinerary itself. We can also refer you to a third-party air specialist if you'd like assistance with your international flights.</p>
          <br/>
        </article>
        </section>
      </div>
    );
  }
});

module.exports = Questions;
