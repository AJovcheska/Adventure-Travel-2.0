var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Persia = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false,
      availableSeats: 0
    };
  },
  componentDidMount: function () {
    backendApi.getTripById("2005").then((response) => {
      this.setState({
        availableSeats: response.data.availableSeats
      });
    });
    var {username} = this.props;
    backendApi.getTripsByUser(username).then((response) => {
      response.map((trip) => {
        if (trip.id === 2005) {
          this.setState({
            isAddedToFavorites: true
          });
        }
      });
    });
  },
  handleFavourites: function () {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2005").then((response) => {
      console.log(response);
      this.setState({
        isAddedToFavorites: true
      });
      backendApi.getTripById("2005").then((response) => {
        console.log(response);
        var {availableSeats} = response.data;
        backendApi.updateSeats("2005", availableSeats - 1).then((response) => {
          console.log(response);
        });
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  render: function () {
    var {username, isLogged} = this.props;
    var favButtonToShow = '';

    if (isLogged) {
      if (username === 'admin') {
        favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>Edit trip</button>;
      } else {
        if (this.state.isAddedToFavorites) {
          favButtonToShow =
            <button className="favouriteButtonAdded" onClick={this.handleFavourites}>Added to favourites</button>;
        } else {
          if (this.state.availableSeats > 0) {
            favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>Add to favourites</button>;
          } else {
            favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>No more available seats</button>;
          }
        }
      }
    }

    return (
      <article className="event-content trip-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <header className="item-header trip-header js-item-header">
                  <div className="col-md-12">
                    <h2 className="detail-sm item-supertitle">
                      Iran
                    </h2>
                    <h1 className="title-lg item-title trip-title">Ancient Persia, Modern Iran: Civilizations Old and
                      New</h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li><strong>Architectural marvels, past and present: </strong> From the magnificent columns of
                        ancient Persepolis to Tehran’s sleek and modern Azadi Tower, and from the Pink Mosque in Shiraz
                        to the soaring windcatchers of Yazd, witness an awe-inspiring array of man-made structures.
                      </li>
                      <li><strong>Caravanserai of the old Silk Road: </strong> Spend the night in a centuries-old hotel,
                        stargazing in the same courtyard where Silk Road traders once plied their wares.
                      </li>
                      <li><strong>Grand bazaars and remote villages:</strong> Experience the hustle and bustle of the
                        country’s busiest marketplace, as well as the quiet traditions of its oldest village.
                      </li>
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        <a name="day1"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 1
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Welcome to Iran!
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, April 21
                        </div>
                        <ul className="tripsUl">
                          <li>Arrive in Tehran by midday and check into our hotel, in the center of the bustling capital
                            and conveniently close to most of the sights we’ll be exploring.
                          </li>
                          <li>After our welcome and orientation, we’ll spend the afternoon visiting Azadi Tower
                            (“Freedom Tower”). Curvaceous and clad in cut marble, this epitome of Iranian modernist
                            architecture served as the gathering place for the 1979 revolution.
                          </li>
                          <li>Later, we’ll stroll over Tabiat Bridge, an elegant, hypermodern, multilevel connection,
                            designed by a young Iranian female architect, between two parks in the city. The surrounding
                            area is full of picnickers and diners from nearby eateries, and we’ll begin to understand
                            why Iranians are so known for being friendly. We’ll settle in for dinner at a traditional
                            restaurant and begin getting to know each other.
                          </li>
                        </ul>
                        <img src="../images/iran1.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Getting to Know Tehran
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, April 22
                        </div>
                        <ul className="tripsUl">
                          <li>We’ll begin the day at Golestan Palace, in the middle of old Tehran. The palace is a
                            complex of buildings and gardens of varying styles, and highlights include the extraordinary
                            cut-mirror ceiling of Talar e Brelian, and a covered terrace with a marble throne designed
                            for the relaxation of the former kings.
                          </li>
                          <li>Next we’ll head to a location steeped in history and controversy: the former U.S. Embassy,
                            known today as the “Nest of Spies.” We’ll tour the site of the the longest hostage crisis in
                            history, when Iranian students took over the embassy for 444 days.
                          </li>
                          <li>We’ll grab lunch in the Grand Bazaar, the heart of Tehran's commerce. The largest in Iran,
                            the sprawling city-within-a-city can get hectic, but we’ll duck into a restaurant that
                            serves thousands of enormous portions of homestyle Persian food each day.
                          </li>
                          <li>Afterward, we’ll walk off the hearty food in Tajrish, one of Tehran’s oldest and most
                            famous neighborhoods.
                          </li>
                          <li>We’ll end our first full day in Darband, the “Door of the Mountain,” a neighborhood that
                            leads right into the foothills. We’ll wrap up our lively day with a casual dinner beside the
                            babbling stream flowing from the towering Alborz Mountains.
                          </li>
                        </ul>
                        <img src="../images/iran2.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          From Tehran to Kashan
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, April 23
                        </div>
                        <ul className="tripsUl">
                          <li>Upon leaving our Tehran hotel, we’ll head to Qom, one of the holiest cities in Iran, and a
                            perfect stop on the way to Kashan. We’ll be guided through the spectacular Fatimah Musemeh
                            Shrine, an exquisite, centuries-old monument and pilgrimage site. It’s also where Ayatollah
                            Khomeini led his opposition to the Shah of Iran, so it is often considered the birthplace of
                            the revolution.
                          </li>
                          <li>We’ll then continue to the ancient city of Kashan, where the tilework of the Aminoddole
                            Caravanserai, a Silk Road outpost, glitters like a kaleidoscopic movie set. The mesmerizing
                            bazaar is still active in the carpet trade.
                          </li>
                          <li>Our evening in Kashan will be spent in a beautiful, traditional Persian hotel in the
                            city's quiet, winding backstreets, the building’s plain exterior gives no hint to the
                            serenity and comfort within.
                          </li>
                        </ul>
                        <img src="../images/iran3.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Into the Mountains to Abyaneh
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, April 24
                        </div>
                        <ul className="tripsUl">
                          <li>Kashan boasts an array of lavish historical buildings and homes, and we’ll visit the
                            bewitching Tabatabaei House and nearby Sultan Amir Ahmad Bathhouse. Both built in the 1880s,
                            these buildings illustrate the plush Persian lifestyle for which Kashan was once famous.
                          </li>
                          <li>We’ll then leave the city for the mountains for lunch, and a stroll through Abyaneh, one
                            of the oldest villages in the country. Today, its inhabitants are predominately elderly, and
                            the door knockers on homes are still gender-specific. Those up for a short hike, will ascend
                            to a decaying fortress from the Sassanid era (A.D. 224–651) that offers an amazing panoramic
                            view.
                          </li>
                          <li>After leaving the mountains, we’ll drive past the gates of the Natanz Uranium Enrichment
                            Facility, the source of a number of rumors and tales (no photos, in case you were
                            wondering).
                          </li>
                          <li>By early evening we’ll arrive in Isfahan, widely considered the most beautiful city in
                            Iran. We’ll have dinner and settle into our hotel for the night.
                          </li>
                        </ul>
                        <img src="../images/iran4.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Isfahan, Half the World
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, April 25
                        </div>
                        <ul className="tripsUl">
                          <li>After lunch at a traditional Persian restaurant, we’ll take a walking tour through the
                            Isfahan Grand Bazaar, and discover some of the tea houses, ancient structures, and secrets
                            deep within.
                          </li>
                          <li>At sunset we’ll head to Khaju Bridge and Si-o-se Pol, majestic stone bridges built in the
                            1600s that stretch across the now-often-dry Zayandeh River. Today they are the most popular
                            meeting spot in the city. You are likely to hear both laughter and old songs of love and
                            sadness.
                          </li>
                        </ul>
                        <img src="../images/iran5.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Through the Desert
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Friday, April 26
                        </div>
                        <ul className="tripsUl">
                          <li>Before leaving, we’ll make one last stop for a final view of Isfahan from “Pigeon Tower,”
                            one of hundreds of beautifully symmetrical structures that dot the landscape of central Iran
                            and are key to its farming communities.
                          </li>
                          <li>The drive will take us through dramatic desert and stunning mountains. For lunch we’ll
                            stop in Kharanaq, a millennia-old village that has since been mostly abandoned due to lack
                            of water. There are no restaurants, but we’ll have food specially prepared and will eat
                            inside a restored caravanserai: a 500-year-old hotel for Silk Road traders—the world’s
                            original motel.
                          </li>
                          <li>By evening we’ll arrive in Yazd, a true desert city. In a neighborhood recently listed as
                            a UNESCO World Heritage Site, we’ll get a brief overview of the city and stop for a bite in
                            a rooftop restaurant. Then we’ll settle into our accommodation, a traditional “museum” hotel
                            with a spacious and beautifully restored courtyard that will transport us to the days of old
                            Persia.
                          </li>
                        </ul>
                        <img src="../images/iran6.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day7"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 7
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          The Only Way Is Up
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Saturday, April 27
                        </div>
                        <ul className="tripsUl">
                          <li>We’ll explore the sights, sounds, and textures of Yazd. In the city's fascinating urban
                            labyrinth, unchanged for centuries, you’ll find shops, schools, artisan workshops, and
                            restaurants.
                          </li>
                          <li>On the outskirts of Yazd stand the Zoroastrian Towers of Silence, two otherworldly hilltop
                            complexes. Until recently, the towers were used by practitioners of the Zoroastrian religion
                            to offer the bodies of the dead to the birds so they could be returned to nature. We will
                            get an overview of their history before we hike to the top of one (or both) of them.
                          </li>
                          <li>How does a desert city survive and thrive for thousands of years with little rainfall?
                            We’ll visit a “Water Museum” to understand of the techniques that have kept Yazd alive.
                          </li>
                        </ul>
                        <img src="../images/iran7.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day8"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 8
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Yazd and Caravanserai
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, April 28
                        </div>
                        <ul className="tripsUl">
                          <li>This morning is yours to sleep in, relax, or go for a gentle stroll through the
                            surrounding historic neighborhood.
                          </li>
                          <li>We’ll reconvene for our last lunch in Yazd and then, head out to explore Sar Yazd, the
                            tiniest village we’ll encounter. The highlight of this visit will be the remains of the
                            largest treasury of ancient Persia, a multilevel fortified structure. We will also enjoying
                            wood-fired tea in this incredibly historic and largely overlooked town.
                          </li>
                          <li>In the evening, we’ll tuck into one of the oldest caravanserai on the Silk Road, preserved
                            in its original state. We invite you to lounge and stargaze in the same courtyard where
                            traders and their camels once rested before traveling on.
                          </li>
                        </ul>
                        <img src="../images/iran8.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day9"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 9
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Shiraz City
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, April 29
                        </div>
                        <ul className="tripsUl">
                          <li>A ceremonial city, Persepolis dates back two-and-a-half millennia. An incredible
                            collection of the ancient city’s columns, walls, tombs, reliefs, and other structures have
                            survived mostly intact. This morning we will wander through this awe-inspiring site,
                            accompanied by an expert guide to help us put history in perspective.
                          </li>
                          <li>Persepolis holds a vast number of stories—from its destruction at the hands of Alexander
                            the Great around 300 B.C. to the 1970s, when it hosted Persia’s 2,500th birthday party. If
                            you look closely, you might spot some 19th-century graffiti.
                          </li>
                          <li>After absorbing a few thousand years of history in a few hours, take the rest of the
                            afternoon to explore at your own pace. Our accommodation for the evening is just a short
                            walk from the ancient Gates of All Nations, right in the shadow of history.
                          </li>
                        </ul>
                        <img src="../images/iran9.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day10"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 10
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Shiraz Departure and Farewell
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, April 30
                        </div>
                        <ul className="tripsUl">
                          <li>After a final group breakfast, we’ll head to the airport for our flights home, and bid
                            farewell (or "see you soon!") to Iran and the new friends we've made. If you choose to
                            extend your time in Iran, our guides will be happy to offer additional tips and
                            recommendations.
                          </li>
                          <li>Until the next adventure!</li>
                        </ul>
                      </div>
                    </section>
                  </section>
                  <div className="row">
                    <div className="col-xs-12">
                      <section className="event-fine-print">
                        <div className="event-fine-print-body item-body">
                          <div className="title-sm">The Fine Print</div>
                          <div className="event-fine-print-body item-body">
                            <h3 className="event-body-subheading">YOUR IRAN TRIP INCLUDES</h3>
                            <ul className="tripsUl">
                              <li>All lodging in double-accommodation rooms at a central hotel for the duration of the
                                tour. (Single supplement for a private room is available for $725. Otherwise we'll work
                                to place individuals of the same gender together.)
                              </li>
                              <li>Daily breakfast at the hotel, four lunches, and three dinners.</li>
                              <li>Two expert guides, with a great depth and breadth of knowledge about Rome’s history,
                                arts, and culture.
                              </li>
                              <li>Admission to all proposed activities and events.</li>
                              <li>A full briefing packet for each explorer, including logistical and contact
                                information, recommended reading list, and packing list.
                              </li>
                            </ul>
                            <h3 className="event-body-subheading"><strong>ACTIVITY LEVEL</strong></h3>
                            <p>We recommend you have a medium fitness level to fully participate in this trip. You
                              should be comfortable staying on your feet for long stretches at a time, and walking
                              anywhere between 3 to 6 miles a day. We will be out and about most of each day, with time
                              to rest at lunch and dinner, both of which will take place on the later side.</p>
                            <h3 className="event-body-subheading">PAYMENT</h3>
                            <p>You will be charged a $500 deposit to hold your space. This deposit is non-refundable
                              after three days. <strong>The final payment of $2,975 will be due by December 3,
                                2018</strong>. All reservations will be final after this date, and subject to our
                              cancellation policy. By submitting your deposit, you agree to our <a
                                href="https://docs.google.com/document/d/1VKyOQFEnVBAjrwRw1k8OqCSURFC7a6zrkSvXV7N4BN4/edit"><strong>Terms &amp; Conditions</strong></a>.
                              For those wishing to have a single room and/or extra nights, optional supplements will be
                              included with the final payment. </p>
                            <h3 className="event-body-subheading">TRAVELERS ARE RESPONSIBLE FOR</h3>
                            <ul className="tripsUl">
                              <li>Flights or other transportation to and from Iran.</li>
                              <li>Transportation from the Rome airport (or other origin) to the group's hotel.</li>
                              <li>Travel insurance (recommended).</li>
                              <li>Baggage charges.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="fine-print-sawtooth-border-sides hidden-print"></div>
                        <div className="fine-print-sawtooth hidden-print"></div>
                        <div className="fine-print-sawtooth-border-bottom hidden-print"></div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="content-siderail">
              <div className="trip-detail-pane-wrap hidden-sm hidden-xs">
                <div className="event-details-pane">
                  <ul className="event-details-top event-details-list">
                    <li>
                      <label className="detail-sm event-details-label">Dates</label>
                      <div className="event-detail">
                        <div>Apr 21–Apr 30, 2019</div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        $4,685.00 USD
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Itinerary</label>
                      <div className="event-detail">
                        10 days, 9 nights
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="trip-day-nav trip-sidebar-wrap hidden-xs hidden-sm hidden-print">
                <h6 className="trip-body-title">Trip Schedule</h6>
                <ul>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 1</div>
                    <a className="detail-md trip-day-nav-link" href="#day1">Welcome to Iran!</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                    <a className="detail-md trip-day-nav-link" href="#day2">Getting to Know Tehran</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                    <a className="detail-md trip-day-nav-link" href="#day3">From Tehran to Kashan </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                    <a className="detail-md trip-day-nav-link" href="#day4">Into the Mountains to Abyaneh</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                    <a className="detail-md trip-day-nav-link" href="#day5">Isfahan, Half the World </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                    <a className="detail-md trip-day-nav-link" href="#day6">Through the Desert </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                    <a className="detail-md trip-day-nav-link" href="#day7">The Only Way Is Up </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                    <a className="detail-md trip-day-nav-link" href="#day8">Yazd and Caravanserai</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                    <a className="detail-md trip-day-nav-link" href="#day9">Shiraz City </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 10</div>
                    <a className="detail-md trip-day-nav-link" href="#day10">Shiraz Departure and Farewell</a>
                  </li>
                </ul>
              </nav>
              <nav className="trip-day-nav trip-sidebar-wrap hidden-xs hidden-sm hidden-print">
                {favButtonToShow}
              </nav>
            </aside>
          </div>
        </div>
      </article>
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
)(Persia);
