var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Petra = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false
    };
  },
  componentDidMount: function () {
    var {username} = this.props;
    backendApi.getTripsByUser(username).then((response) => {
      response.map((trip) => {
        if (trip.id === 2009) {
          this.setState({
            isAddedToFavorites: true
          });
        }
      });
    });
  },
  handleFavourites: function () {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2009").then((response) => {
      console.log(response);
      this.setState({
        isAddedToFavorites: true
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  render: function () {
    var favButtonToShow = '';

    if (this.state.isAddedToFavorites) {
      favButtonToShow =
        <button className="favouriteButtonAdded" onClick={this.handleFavourites}>Added to favourites</button>;
    } else {
      favButtonToShow = <button className="favouriteButton" onClick={this.handleFavourites}>Add to favourites</button>;
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
                      Jordan
                    </h2>
                    <h1 className="title-lg item-title trip-title">Jordan: Lost City Of Arabia</h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li>Exploring the ruins of Roman Jerash</li>
                      <li>Staying with local villagers in the north of the country</li>
                      <li>Camping in the deserts of Wadi Rum</li>
                    </ul>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Itinerary</h5>
                      <div className="trip-day-wrap">
                        <a name="day1"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 1
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Tour starts in Madaba
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, March 4
                        </div>
                        <ul className="tripsUl">
                          <li>The tour starts in the the town of Madaba, home to some of the most extraordinary mosaics
                            in the Middle East.
                          </li>
                        </ul>
                        <img src="../images/petra1.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Madaba to Jerash
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, March 5
                        </div>
                        <ul className="tripsUl">
                          <li>A busy day ahead of us, we will first visit Madaba’s famous Byzantine Church, before
                            heading across to Mt Nebo, after which we will head north to the Roman city of Jerash.
                          </li>
                        </ul>
                        <img src="../images/petra2.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Jerash – Ajloun - Orjan
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, March 6
                        </div>
                        <ul className="tripsUl">
                          <li>This morning we will head to Ajloun’s crusader-era castle before heading to the village of
                            Rasun for lunch before walking through the hills to Orjan village, where we’ll overnight
                            with our village host families.
                          </li>
                        </ul>
                        <img src="../images/petra3.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Orjan – Kerak - Dana Nature Reserve
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, March 7
                        </div>
                        <ul className="tripsUl">
                          <li>This morning we'll take a walk through the surrounding area, before joining up with our
                            vehicle and head towards the Dana Nature Reserve, stopping off at the stunning Crusader
                            castle of Kerak on the way.
                          </li>
                        </ul>
                        <img src="../images/petra4.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Orjan – Kerak - Dana Nature Reserve
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Friday, March 8
                        </div>
                        <ul className="tripsUl">
                          <li>Today will be on foot as we follow the Wadi Dana Trail, walking from Dana to Feynan,
                            covering approximately 14km.
                          </li>
                        </ul>
                        <img src="../images/petra5.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Dana Nature Reserve
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Saturday, March 9
                        </div>
                        <ul className="tripsUl">
                          <li>We’ll head straight to Petra this morning and take a guided tour of the ancient Nabataean
                            city of Petra.
                          </li>
                        </ul>
                        <img src="../images/petra6.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day7"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 7
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Petra
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, March 10
                        </div>
                        <ul className="tripsUl">
                          <li>Today we’ll return to Petra via the “secret road” of al-Madras, and visit the High Place
                            of Sacrifice, and Royal Tombs.
                          </li>
                        </ul>
                        <img src="../images/petra7.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day8"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 8
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Petra – Wadi Rum
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, March 11
                        </div>
                        <ul className="tripsUl">
                          <li>Leaving Petra behind us we strike into the desert of Wadi Rum in 4WD jeeps for a full day
                            of exploration.
                          </li>
                        </ul>
                        <img src="../images/petra8.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day9"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 9
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Dead Sea
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, March 12
                        </div>
                        <ul className="tripsUl">
                          <li>We head towards the saline waters of the Dead Sea, the lowest place on earth, where there
                            will be time to have a float before heading to Amman for our final night.
                          </li>
                          <li>Until next time!</li>
                        </ul>
                        <img src="../images/petra9.jpg"/>
                      </div>
                    </section>
                  </section>
                  <div className="row">
                    <div className="col-xs-12">
                      <section className="event-fine-print">
                        <div className="event-fine-print-body item-body">
                          <div className="title-sm">The Fine Print</div>
                          <div className="event-fine-print-body item-body">
                            <h3 className="event-body-subheading">YOUR JORDAN TRIP INCLUDES</h3>
                            <ul className="tripsUl">
                              <li>All lodging in double-accommodation rooms at the Hotel Oriente for the duration of the
                                tour. (Single supplement for a private room is available for $530. Otherwise we'll work
                                to place individuals of the same gender together.)
                              </li>
                              <li>Daily breakfast at the hotel, five lunches, and two dinners.</li>
                              <li>Two expert guides, with a great depth and breadth of knowledge about Barcelona, its
                                elaborate history, and its vibrant arts and culture.
                              </li>
                              <li>Admission to all proposed activities and events.</li>
                              <li>A full briefing packet for each explorer, including logistical and contact
                                information, recommended reading list, and packing list.
                              </li>
                              <li>A curious group of fellow Atlas Obscura explorers, excited to discover all that
                                Barcelona has to offer!
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
                              <li>Transportation and flights to and from Barcelona.</li>
                              <li>Transportation from the Barcelona airport (or other origin) to the group's hotel.</li>
                              <li>Individual travel insurance (optional).</li>
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
                        <div>Sept 06&ndash;Sept 15, 2019</div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        $2,274.00 USD
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Itinerary</label>
                      <div className="event-detail">
                        9 days, 8 nights
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
                    <a className="detail-md trip-day-nav-link" href="#day1">Tour starts in Madaba</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                    <a className="detail-md trip-day-nav-link" href="#day2">Madaba to Jerash</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                    <a className="detail-md trip-day-nav-link" href="#day3">Jerash – Ajloun - Orjan</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                    <a className="detail-md trip-day-nav-link" href="#day4">Orjan – Kerak - Dana Nature Reserve</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                    <a className="detail-md trip-day-nav-link" href="#day5">Orjan – Kerak - Dana Nature Reserve</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                    <a className="detail-md trip-day-nav-link" href="#day6">Dana Nature Reserve</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                    <a className="detail-md trip-day-nav-link" href="#day7">Petra</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                    <a className="detail-md trip-day-nav-link" href="#day8">Petra – Wadi Rum</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                    <a className="detail-md trip-day-nav-link" href="#day9">Dead Sea</a>
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
)(Petra);
