var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Mongolia = React.createClass({
  getInitialState: function () {
    return {
      isAddedToFavorites: false,
      availableSeats: 0
    };
  },
  componentDidMount: function () {
    backendApi.getTripById("2006").then((response) => {
      this.setState({
        availableSeats: response.data.availableSeats
      });
    });
    var {username} = this.props;
    backendApi.getTripsByUser(username).then((response) => {
      response.map((trip) => {
        if (trip.id === 2006) {
          this.setState({
            isAddedToFavorites: true
          });
        }
      });
    });
  },
  handleFavourites: function () {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2006").then((response) => {
      console.log(response);
      this.setState({
        isAddedToFavorites: true
      });
      backendApi.getTripById("2006").then((response) => {
        console.log(response);
        var {availableSeats} = response.data;
        backendApi.updateSeats("2006", availableSeats - 1).then((response) => {
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
                      Mongolia
                    </h2>
                    <h1 className="title-lg item-title trip-title">Wander Mongolia: Blue Skies and Endless Steppe</h1>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                    <ul>
                      <li><strong>Dramatic natural landscapes:</strong> We'll take in a vast variety of scenery, from
                        the Mongol Els sand dune to the famous steppe, from the Orkhon River to lush meadowland and
                        dramatic rock formations.
                      </li>
                      <li><strong>The Naadam Festival:</strong> Our adventure includes the celebratory competitions of
                        "the three games of men"—archery, horseback riding, and wrestling—that pay tribute to Mongolia's
                        warrior history.
                      </li>
                      <li><strong>Hiking, horseback riding, and home cooking:</strong> You'll have many opportunities to
                        roam beneath Mongolia's big blue skies—on foot, on horseback, and on camels—in addition to
                        trying your hand at a few local dishes.
                      </li>
                      <li><strong>Overnights in traditional ger camps:</strong> A ger is a traditional nomadic dwelling
                        similar to a yurt and has served as home to generations of Mongolians. Throughout the trip,
                        we'll be spending our nights in a range of remote settings, from the banks of Ögii Lake to
                        multiple national parks.
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
                          Welcome to Ulaanbaatar!
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, July 7
                        </div>
                        <ul className="tripsUl">
                          <li>Once you land, you’ll be met and transferred from the airport to the group hotel.</li>
                          <li>Our group will meet in the evening for a welcome dinner and trip briefing before spending
                            our first night in Mongolia.
                          </li>
                        </ul>
                        <img src="../images/mongo1.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day2"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 2
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Ulaanbaatar Explorations
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, July 8
                        </div>
                        <ul className="tripsUl">
                          <li>After breakfast, we'll spend our day exploring the capital city.</li>
                          <li>We'll visit the restored Gandan Monastery, a Tibetan-style Buddhist monastery home to
                            several hundred monks. We'll also visit the National Museum of Mongolia, which covers over a
                            millennia of local history, and Sükhbaatar Square. This central square is named for Damdiny
                            Sükhbaatar, the "Father of Mongolia's Revolution in 1921 that brought independence from
                            China.
                          </li>
                          <li>After lunch, we'll test our brain power at the International Intellectual and Puzzle
                            Museum, also known as the IQ Museum. Created by puzzle master Tumen Ulzii, it is a place
                            dedicated to curiosity, logic, and riddles.
                          </li>
                          <li>This evening, we'll enjoy a dinner and a traditional folklore concert, including a
                            performance by Mongolia's national orchestra.
                          </li>
                        </ul>
                        <img src="../images/mongo2.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day3"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 3
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          To Zuunmod for the Naadam Festival!
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, July 9
                        </div>
                        <ul className="tripsUl">
                          <li>Today, we set out for the town of Zuunmod for the opening ceremony of the Naadam Festival!
                            It'll be an early start to the day for the drive to the center of Töv province. Zuunmod,
                            which means "Hundred Trees," has a population of just under 15,000, and is a quiet place
                            outside of the festival season.
                          </li>
                          <li>When we arrive, we'll head first to our ger camp to drop off our luggage and shake our
                            legs after the drive. We will then hop back into the vehicle for the shorter drive to the
                            festival itself.
                          </li>
                          <li>We'll spend the rest of the day viewing the "three games" in Zuunmod's local stadium.</li>
                          <li>After dinner, we'll return to our ger camp.</li>
                        </ul>
                        <img src="../images/mongo3.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day4"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 4
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Archery & The Last Wild Horses
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, July 10
                        </div>
                        <ul className="tripsUl">
                          <li>This morning, we head back into Ulaanbaatar. Our first stop is the city's central stadium,
                            where we'll see an archery competition and hopefully the ankle-bone shooting game.
                          </li>
                          <li>After lunch in the city, we'll depart for Khustain Nuruu National Park. Declared a
                            Specially Protected Area in 1993, the park—whose name means Birch Mountains—is home to 44
                            species of mammals and 217 species of birds, including Mongolia marmots, Eurasian Lynx, and
                            lammergeier (bearded vulture). The last wild horses, or Takhi, were reintroduced here in
                            1992 and the population has slowly been stabilized.
                          </li>
                          <li>Our group will settle into a ger camp. Then, in the late afternoon, we'll drive to the
                            mountains for the best chance to see the Takhi as they gather close to sunset. Along the
                            way, we might also see red deer, gazelles, ibex, foxes, badgers, and any one of 29 species
                            of local grasshoppers.
                          </li>
                          <li>We'll have dinner at the camp and then settle in for the night under a blanket of stars.
                          </li>
                        </ul>
                        <img src="../images/mongo4.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day5"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 5
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          The Ancient Capital of Karakorum
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, July 11
                        </div>
                        <ul className="tripsUl">
                          <li>This morning we continue our journey by road to Karakorum (also Qara Qorum), capital of
                            the Mongol Empire between 1235 and 1260. You can still see ruins of the 13th-century
                            metropolis, from statues and roof tiles to crumbling kilns. When Kublai Khan took the throne
                            of the empire in 1260, the city lost its key status and was reduced to an administrative
                            center.
                          </li>
                          <li>We'll also stop by the Karakorum Museum, located in the modern-day town of Kharkhorin, to
                            learn about the history of the town and the artifacts found in various nearby archaeological
                            sites. While small, this museum is perhaps the best in the country outside of Ulaanbaatar.
                          </li>
                          <li>This afternoon, we'll take some time to relax and absorb the views along the Orkhon River,
                            the longest river in Mongolia.
                          </li>
                          <li>We'll spend tonight at a ger camp, which by now will feel just like home.</li>
                        </ul>
                        <img src="../images/mongo5.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day6"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 6
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Birdwatching by Ögii Lake
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Friday, July 12
                        </div>
                        <ul className="tripsUl">
                          <li>After breakfast, we depart the ancient capital and continue toward Ögii Lake, a freshwater
                            expanse known for its fish and birdlife.
                          </li>
                          <li>We’ll stop along the way to discover more about the country’s history, zooming in on
                            Turkish influences during the 7th to 8th centuries. Much of the territory of the original
                            Turkish Empire encompassed major parts of modern-day Mongolia, and one of their main
                            successors were the Uighurs, an ethnic group now concentrated in western China's Xinjiang
                            Province that speaks a Turkic language and follows Islam.
                          </li>
                          <li>As we arrive at Ögii, any birdwatchers among you will not be disappointed. As the main
                            source of fresh water in this region of the steppe, Ögii lake attracts many birds, including
                            the beautiful Oriental Plover and the Bar-headed Goose.
                          </li>
                          <li>Tonight we'll stay in a ger camp on the shore of the tranquil Ögii.</li>
                        </ul>
                        <img src="../images/mongo6.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day7"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 7
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Khogno Khan National Park
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Saturday, July 13
                        </div>
                        <ul className="tripsUl">
                          <li>Today, we drive to Khögnö Khan National Park. This natural reserve is home to two
                            ecosystems: the steppe (shrub and grasslands) and the taiga (also known as boreal forest or
                            snow forest).
                          </li>
                          <li>Here, we'll visit the Mongol Els sand dune, nearly 50 miles long and set in the park's
                            dramatic desert landscape.
                          </li>
                          <li>We'll then ride two-humped (bactrian) camels for one to two hours to explore the local
                            Buddhist monastery. While these camels are bred and domesticated, their wild brethren living
                            in the Gobi Desert are now highly endangered.
                          </li>
                          <li>We’ll visit with the camel-breeding family and learn more about their nomadic life.</li>
                          <li>In the evening we will take a leisurely walk in the sand dunes before spending the night
                            in a ger camp.
                          </li>
                        </ul>
                        <img src="../images/mongo7.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day8"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 8
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Visit with a Nomadic Family
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Sunday, July 14
                        </div>
                        <ul className="tripsUl">
                          <li>After breakfast at the ger camp, we'll drive to visit a local nomadic family, who will be
                            our hosts for the rest of the day. Today, we'll have a glimpse into the daily life of
                            Mongolia's nomadic people.
                          </li>
                          <li>For lunch, we’ll have a cooking class and make buuz, a traditional Mongolian meal.</li>
                          <li>During the day, you have several different options. You can horseback ride, or hike in the
                            surrounding mountains and meadows. There will be ample opportunity to taste Airag. Made from
                            fermented mare's milk, it's a favorite drink of Mongolians.
                          </li>
                        </ul>
                        <img src="../images/mongo8.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day9"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 9
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Mountain Walk & Turtle Rock
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Monday, July 15
                        </div>
                        <ul className="tripsUl">
                          <li>Today after breakfast, we'll bid farewell to our nomadic hosts and continue our journey.
                            Tonight, we'll be setting up our ger camp in Gorkhi-Terelj National Park. On the drive to
                            Gorkhi-Terelj, we'll stop just outside the park to see the impressive mounted statue of
                            Genghis Khan.
                          </li>
                        </ul>
                        <img src="../images/mongo9.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day10"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 10
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Full Day in Terelj National Park
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Tuesday, July 16
                        </div>
                        <ul className="tripsUl">
                          <li>Today is one entirely dedicated to exploring the park. Depending on what you're feeling,
                            you can visit the monastery and meditation center, set out for a hike, or go for a horseback
                            ride.
                          </li>
                          <li>We'll come together over dinner and spend another night at the same location.</li>
                        </ul>
                        <img src="../images/mongo10.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day11"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 11
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Zaisan Memorial & the Winter Palace
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Wednesday, July 17
                        </div>
                        <ul className="tripsUl">
                          <li>This morning, we head back into Ulaanbaatar.</li>
                          <li>We'll celebrate our last night together with a farewell dinner, and raise our glasses to a
                            trip packed with adventures. Tonight, back in a hotel, you might already begin missing our
                            ger camp.
                          </li>
                        </ul>
                        <img src="../images/mongo11.jpg"/>
                      </div>
                      <div className="trip-day-wrap">
                        <a name="day12"></a>
                        <div className="trip-day-nav-num trip-day-body-num">
                          Day 12
                        </div>
                        <h6 className="trip-body-title trip-day-title">
                          Farewell & Departure
                        </h6>
                        <div className="event-body-subheading trip-day-dateline">
                          Thursday, July 18
                        </div>
                        <ul className="tripsUl">
                          <li>Our trip concludes this morning. After one final breakfast together, we'll transfer you to
                            the airport to depart home or onto your next destination.
                          </li>
                          <li>We'll celebrate our last night together with a farewell dinner, and raise our glasses to a
                            trip packed with adventures. Tonight, back in a hotel, you might already begin missing our
                            ger camp.
                          </li>
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
                            <h3 className="event-body-subheading">YOUR EXPEDITION TO MONGOLIA INCLUDES</h3>
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
                              <li>A curious group of fellow Atlas Obscura explorers, excited to discover all that Rome
                                has to offer!
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
                              <li>International airfare to/from Ulaanbaatar, Mongolia</li>
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
                        <div>Jul 07–Jul 18, 2019</div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        $2,990.00 USD
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Itinerary</label>
                      <div className="event-detail">
                        12 days, 11 nights
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
                    <a className="detail-md trip-day-nav-link" href="#day1">Welcome to Ulaanbaatar! </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                    <a className="detail-md trip-day-nav-link" href="#day2">Ulaanbaatar Explorations </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                    <a className="detail-md trip-day-nav-link" href="#day3">To Zuunmod for the Naadam Festival! </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                    <a className="detail-md trip-day-nav-link" href="#day4">Archery & The Last Wild Horses</a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                    <a className="detail-md trip-day-nav-link" href="#day5">The Ancient Capital of Karakorum </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                    <a className="detail-md trip-day-nav-link" href="#day6">Birdwatching by Ögii Lake </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                    <a className="detail-md trip-day-nav-link" href="#day7">Khogno Khan National Park </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                    <a className="detail-md trip-day-nav-link" href="#day8">Visit with a Nomadic Family </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                    <a className="detail-md trip-day-nav-link" href="#day9">Mountain Walk & Turtle Rock </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 10</div>
                    <a className="detail-md trip-day-nav-link" href="#day10">Full Day in Terelj National Park </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 11</div>
                    <a className="detail-md trip-day-nav-link" href="#day11">Zaisan Memorial & the Winter Palace </a>
                  </li>
                  <li className="trip-day-nav-li">
                    <div className="trip-day-nav-num detail-sm-non-uppercase">Day 12</div>
                    <a className="detail-md trip-day-nav-link" href="#day12">Farewell & Departure </a>
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
)(Mongolia);
