var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Morocco = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false
    };
  },
  componentDidMount: function () {
    var {username} = this.props;
    backendApi.getTripsByUser(username).then((response) => {
      response.map((trip) => {
        if (trip.id === 2004) {
          this.setState({
            isAddedToFavorites: true
          });
        }
      });
    });
  },
  handleFavourites: function () {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2004").then((response) => {
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
                      Morocco
                    </h2>
                    <h1 className="title-lg item-title trip-title">Morocco’s Mountains, Medinas, and Desert Oases</h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li><strong>Ancient markets:</strong> Wander the maze-like streets of some of the oldest medinas
                        in the world.
                      </li>
                      <li><strong>Expansive landscapes: </strong> From the dramatic coastline to the edge of the Sahara
                        and into the High Atlas Mountains, see Morocco’s vast and varied landscapes.
                      </li>
                      <li><strong>Riads and oases: </strong> Stay in intimate, beautifully decorated riads in Marrakesh
                        and Fez, and kick back at a Berber castle–style guesthouse surrounded by gardens and palm groves
                        in Ksar El Kabbaba.
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
                          Arrival in Casablanca
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, October 16
                        </div>
                        <ul className="tripsUl">
                          <li>Arrive in Casablanca, where you'll be met at the airport and transferred to the group's
                            hotel.
                          </li>
                          <li>Late this afternoon, we'll gather for a brief welcome orientation and pre-dinner
                            cocktails, followed by a festive first meal to kick off the trip.
                          </li>
                        </ul>
                        <img src="../images/morocoo1.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          From Casablanca to Fez
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, October 17
                        </div>
                        <ul className="tripsUl">
                          <li>We'll begin the day with a visit to Hassan II Mosque. A stunning architectural marvel
                            built on the edge of the Atlantic, the mosque features the world’s most massive minaret.
                          </li>
                          <li>From Casablanca, we'll drive approximately three hours to Fez. Founded in the eighth
                            century, this is the oldest city in Morocco. The original medina, Fes el Bali, is made up of
                            thousands of narrow alleyways. Its believed to be the largest car-free urban area in the
                            world.
                          </li>
                          <li>To get some perspective, we'll head to the Merenid Tombs, the ruins of an ancient
                            necropolis overlooking the city.
                          </li>
                          <li>After enjoying some time to relax in our rooms at Riad Salam, we'll head back out to
                            dinner together.
                          </li>
                        </ul>
                        <img src="../images/morocoo2.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Wandering the Medina
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Friday, October 18
                        </div>
                        <ul className="tripsUl">
                          <li>After breakfast at our riad, we'll begin to explore one of the most magical medinas on
                            earth, wandering through a maze of narrow alleyways with our local guide.
                          </li>
                          <li>In addition to strolling the souks and seeing traditional tanneries (many of them in
                            operation since the 11th century), we'll stop at University of Al-Karaouine. This is the
                            oldest university in the world. It also has the world’s oldest working library, and is home
                            to Africa's largest mosque, with enough room for some 22,000 worshippers.
                          </li>
                          <li>Our time in the medina will also give us an opportunity to purchase unique Moroccan
                            handicrafts and sample some local cuisine.
                          </li>
                          <li>After lunch at a restaurant in the medina, you can continue exploring on your own, or
                            return to the riad for an afternoon at leisure.
                          </li>
                          <li>In the evening, we’ll visit a local art gallery, where we'll meet an artist who can
                            provide some context on the pieces we'll see, and talk with us about the creative life of
                            the city.
                          </li>
                        </ul>
                        <img src="../images/morocoo3.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Ancient Cities & Roman Ruins
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Saturday, October 19
                        </div>
                        <ul className="tripsUl">
                          <li>About an hour from Fez, we'll make our way to the old imperial city of Meknes. Accompanied
                            by a local expert, we'll visit the mausoleum of Sultan Moulay Ismail. This tranquil,
                            elaborately detailed structure is the final resting place of Morocco's "warrior king," who
                            ruled from 1672 to 1727. We'll then continue to the striking Dar El Makhzen palace, and the
                            royal stables that once housed 12,000 horses.
                          </li>
                          <li>From Meknes we will travel approximately 40 minutes to Moulay Idriss, a town of narrow,
                            winding walkways that was founded in 789. For centuries, pilgrims have gone there to pay
                            their respects at the tomb of the city's founder, Moulay Idriss el Akhbar, a descendant of
                            the prophet Mohammed.
                          </li>
                          <li>We'll then make the short drive to Volubilis, an ancient Roman town that has been occupied
                            since the third century B.C. Accompanied by an expert in the site's history, we'll wander
                            the abandoned ruins, still dotted with colorful mosaics, and get glimpses into neighborhood
                            life as it existed centuries ago.
                          </li>
                          <li>Later this afternoon, we'll visit a nearby vineyard to do some wine-tasting.</li>
                          <li>Dinner is back in Meknes, where we will spend the night.</li>
                        </ul>
                        <img src="../images/morocoo4.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          The Middle Atlas Mountains
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, October 20
                        </div>
                        <ul className="tripsUl">
                          <li>This day’s drive from Meknes to the Middle Atlas mountain range is a long
                            one—approximately four hours—but it's spectacular. The northern slopes of these mountains
                            are beautifully mottled with forests, fields, and lakes.
                          </li>
                          <li>To stretch our legs, we'll stop along the way in Azrou, for a short walk among the cedars.
                            With luck, we might see some of the Barbary macaques that live in the forest.
                          </li>
                          <li>Passing Berber villages along the way, we'll continue through the mountains to Beni
                            Mellal, where we will spend the night.
                          </li>
                        </ul>
                        <img src="../images/morocoo5.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Ouzoud & Onward to Marrakesh
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, October 21
                        </div>
                        <ul className="tripsUl">
                          <li>Continuing south through the Middle Atlas, we'll make our way to Ouzoud Falls. At 360
                            feet, the falls are the highest in the country.
                          </li>
                          <li>After a short walk to take in views of the falls, we'll enjoy a traditional tagine lunch,
                            using ingredients we'll find at the local market, before continuing on to Marrakech.
                          </li>
                          <li>The remainder of the evening is free for relaxing at our tranquil 18th-century riad.</li>
                        </ul>
                        <img src="../images/morocoo6.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day7"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 7
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Palaces, Gardens & Souks in Marrakesh
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, October 22
                        </div>
                        <ul className="tripsUl">
                          <li>Today we will get to explore the thrumming, ancient, wildly colorful city of Marrakesh,
                            beginning at the Majorelle Garden. Designed by the French artist Jacques Majorelle in the
                            1930s, the 12-acre botanical garden took nearly 40 years to complete.
                          </li>
                          <li>We'll also visit the 16th-century Saadian Tombs, Bahia Palace (one of the masterpieces of
                            Moroccan architecture), and the souks of the old medina before reaching the city's stunning
                            central square: Jemma el Fna. Frequented by snake charmers, magicians, vendors, artisans,
                            locals, and travelers alike, it's the stage for a public spectacle that has been playing out
                            daily for centuries.
                          </li>
                          <li>The remainder of the afternoon and evening will be free for relaxing at the riad or
                            exploring on your own.
                          </li>
                        </ul>
                        <img src="../images/morocoo7.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day8"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 8
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Crossing the High Atlas Mountains
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, October 23
                        </div>
                        <ul className="tripsUl">
                          <li>From Marrakesh, we will drive southeast into the High Atlas mountains. As we travel across
                            Tizi n'Tichka—a pass at 7,415 feet, the highest point on our route—toward the edge of the
                            Sahara, we'll see the environment transform.
                          </li>
                          <li>Along the way, we'll stop at Aït Benhaddou. A UNESCO World Heritage site, this majestic
                            and mostly abandoned ancient city is a striking example of southern Moroccan architecture.
                            The city summit offers a 360-degree panorama of the surrounding landscape.
                          </li>
                          <li>Our destination and home for the next two nights will be Skoura, an oasis and ancient
                            trading outpost at the edge of the Sahara. There, Tuareg traders who controlled
                            trans-Saharan routes would sell their wares, which would then be taken across the mountains
                            to Marrakesh, Fez, and beyond.
                          </li>
                          <li>The evening will be free to relax in our Berber castle–style accommodations at Ksar El
                            Kabbaba, surrounded by lush gardens and towering palms.
                          </li>
                        </ul>
                        <img src="../images/morocoo8.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day9"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 9
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Morocco Farewell
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, October 24
                        </div>
                        <ul className="tripsUl">
                          <li>After a final breakfast at the hotel, you'll be transferred to the airport for your flight
                            home.
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
                            <h3 className="event-body-subheading">YOUR MOROCCO TRIP INCLUDES</h3>
                            <ul className="tripsUl">
                              <li>All lodging in double-accommodation rooms in well-equipped hotels and comfortable,
                                small guesthouses throughout the trip. (Single supplement for a private room is
                                available for $690. Otherwise we'll work to place singles together.)
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
                        <div>Oct 16–Oct 24, 2019</div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        $3,190.00 USD
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
                    <a className="detail-md trip-day-nav-link" href="#day1">Arrival in Casablanca </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                    <a className="detail-md trip-day-nav-link" href="#day2">From Casablanca to Fez </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                    <a className="detail-md trip-day-nav-link" href="#day3">Wandering the Medina </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                    <a className="detail-md trip-day-nav-link" href="#day4">Ancient Cities & Roman Ruins </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                    <a className="detail-md trip-day-nav-link" href="#day5">The Middle Atlas Mountains </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                    <a className="detail-md trip-day-nav-link" href="#day6">Ouzoud & Onward to Marrakesh </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                    <a className="detail-md trip-day-nav-link" href="#day7">Palaces, Gardens & Souks in Marrakesh </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                    <a className="detail-md trip-day-nav-link" href="#day8">Crossing the High Atlas Mountains</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                    <a className="detail-md trip-day-nav-link" href="#day9">Morocco Farewell </a>
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
)(Morocco);
