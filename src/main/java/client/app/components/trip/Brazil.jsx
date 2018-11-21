var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Brazil = React.createClass({
  handleFavourites: function() {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2008").then((response) => {
      console.log(response);
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  },
  render: function() {
    return (
      <article className="event-content trip-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <div className="row">
                     <header className="item-header trip-header js-item-header">
                        <div className="col-md-12">
                           <h2 className="detail-sm item-supertitle">
                              Brazil
                           </h2>
                           <h1 className="title-lg item-title trip-title">Brazilian Wildlife</h1>
                        </div>
                     </header>
                  </div>
                  <div className="row">
                     <div className="content-body event-content-body col-md-11 trip-content-body">
                        <section id="event-body" className="item-body">
                           <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                           <ul>
                              <li><strong>Greatest diversity of wildlife of any country on the planet:</strong> Brazil is home to 60% of the Amazon Rainforest</li>
                              <li><strong>Carnival Gala at a Belle Époque atelier</strong>: On our final night, transform into your most glamorous self and delight yourself in one of the most spectacular private house museums in South America: the <a href="https://www.atlasobscura.com/places/taller-doleguer-junyent-oleguer-junyents-workshop">Oleguer Junyent Workshop</a>. Our Carnival Gala includes a private dinner as well as opera and mentalist performances.</li>
                           </ul>
                           <section id="event-trip-itinerary">
                              <h5 className="event-body-heading">Itinerary</h5>
                              <div className="trip-day-wrap">
                                 <a name="day1"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 1
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Welcome to Rio de Janeiro!
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, March 4
                                 </div>
                                 <ul className="tripsUl">
                                   <li>When you arrive in Rio your local guide will be waiting to meet you and will take you to your hotel which is located on the end of Copacabana Beach.</li>
                                 </ul>
                                 <img src="../images/brazil1.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day2"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 2
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Rio de Janeiro
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, March 5
                                 </div>
                                 <ul className="tripsUl">
                                   <li>This morning's excursion will take you to visit Sugar Loaf Mountain, one of the most famous landmarks of the city. You will take two cable cars with your guide to reach the top of Sugar Loaf Mountain to appreciate some of the best views across the city. </li>
                                   <li>This afternoon you will be picked up from your hotel in an open top jeep and taken into the Tijuca Atlantic Forest, the largest urban forest in the World. During the afternoon you may come across monkeys, sloths and exotic birds. </li>
                                 </ul>
                                 <img src="../images/brazil2.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day3"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 3
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Rio de Janeiro - Fazenda Barranco Alto
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Wednesday, March 6
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Transfer to the airport for your flights to Campo Grande. When you arrive you at Campo Grande you will be met and driven to the airstrip at Aquidauana, a journey of approximately 3 hours, where you will board your light aircraft to Fazenda Barranco Alto.</li>
                                 </ul>
                                 <img src="../images/brazil3.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day4"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 4
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Rio de Janeiro - Fazenda Barranco Alto
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Thursday, March 7
                                 </div>
                                 <ul className="tripsUl">
                                   <li>The Fazenda Barranco Alto offers a number of activities to its guests, such as walking safaris with biologists to observe the flora and fauna, photo safaris, boat and kayak trips, horse riding and night safaris. Guests can also observe the working farmers and visit the traditional workshops.</li>
                                 </ul>
                                 <img src="../images/brazil4.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day5"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 5
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Fazenda Barranco Alto
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Friday, March 8
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Day of activities on the fazenda. </li>
                                 </ul>
                                 <img src="../images/brazil5.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day6"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 6
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Fazenda Barranco Alto - Florianopolis
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Saturday, March 9
                                 </div>
                                 <ul className="tripsUl">
                                   <li>This morning you will be flown back to Aquiduana and then driven the rest of the way to Campo Grande to board your flight to Florianopolis, via Sao Paulo. </li>
                                   <li>On arrival you will be taken to your beach front accommodation. </li>
                                 </ul>
                                 <img src="../images/brazil3.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day7"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 7
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Fazenda Barranco Alto - Florianopolis
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, March 10
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Every year between July and November Southern Right whales come to give birth and care for their young.</li>
                                   <li> Today you will be taken out on a boat to get up close to the whales. You then have the afternoon free to enjoy your hotel.</li>
                                 </ul>
                                 <img src="../images/brazil2.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day8"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 8
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Florianopolis
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, March 11
                                 </div>
                                 <ul className="tripsUl">
                                   <li>This morning you will be picked up from your hotel and taken to Praia do Rosa, where you will embark on a morning of horse riding along the dunes to Praia da Barra. </li>
                                   <li>The return journey takes a different route through the forest. At the end of the excursion you will be taken back to your hotel where you will have the rest of the day at leisure. </li>
                                 </ul>
                                 <img src="../images/brazil1.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day9"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 9
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Florianopolis - Sao Paulo
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, March 12
                                 </div>
                                 <ul className="tripsUl">
                                   <li>You will be transferred to the airport in plenty of time for your flight to Sao Paulo and connect with your international flight. </li>
                                 </ul>
                                 <img src="../images/brazil6.jpg"/>
                              </div>
                           </section>
                        </section>
                        <div className="row">
                           <div className="col-xs-12">
                              <section className="event-fine-print">
                                 <div className="event-fine-print-body item-body">
                                    <div className="title-sm">The Fine Print</div>
                                    <div className="event-fine-print-body item-body">
                                       <h3 className="event-body-subheading">YOUR BRAZIL TRIP INCLUDES</h3>
                                       <ul className="tripsUl">
                                          <li>All lodging in double-accommodation rooms at the Hotel Oriente for the duration of the tour. (Single supplement for a private room is available for $530. Otherwise we'll work to place individuals of the same gender together.)</li>
                                          <li>Daily breakfast at the hotel, five lunches, and two dinners.</li>
                                          <li>Two expert guides, with a great depth and breadth of knowledge about Barcelona, its elaborate history, and its vibrant arts and culture.</li>
                                          <li>Admission to all proposed activities and events.</li>
                                          <li>A full briefing packet for each explorer, including logistical and contact information, recommended reading list, and packing list.</li>
                                          <li>A curious group of fellow Atlas Obscura explorers, excited to discover all that Barcelona  has to offer!</li>
                                       </ul>
                                       <h3 className="event-body-subheading"><strong>ACTIVITY LEVEL</strong></h3>
                                       <p>We recommend you have a medium fitness level to fully participate in this trip. You should be comfortable staying on your feet for long stretches at a time, and walking anywhere between 3 to 6 miles a day. We will be out and about most of each day, with time to rest at lunch and dinner, both of which will take place on the later side.</p>
                                       <h3 className="event-body-subheading">PAYMENT</h3>
                                       <p>You will be charged a $500 deposit to hold your space. This deposit is non-refundable after three days. <strong>The final payment of $2,975 will be due by December 3, 2018</strong>. All reservations will be final after this date, and subject to our cancellation policy. By submitting your deposit, you agree to our <a href="https://docs.google.com/document/d/1VKyOQFEnVBAjrwRw1k8OqCSURFC7a6zrkSvXV7N4BN4/edit"><strong>Terms &amp; Conditions</strong></a>. For those wishing to have a single room and/or extra nights, optional supplements will be included with the final payment. </p>
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
                                 <div>Mar 04&ndash;Mar 10, 2019</div>
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Cost</label>
                              <div className="event-detail">
                                 $4,098.00 USD
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
                           <a className="detail-md trip-day-nav-link" href="#day1">Welcome to Rio de Janeiro!</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                           <a className="detail-md trip-day-nav-link" href="#day2">Rio de Janeiro</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                           <a className="detail-md trip-day-nav-link" href="#day3">Rio de Janeiro - Fazenda Barranco Alto</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                           <a className="detail-md trip-day-nav-link" href="#day4">Rio de Janeiro - Fazenda Barranco Alto</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                           <a className="detail-md trip-day-nav-link" href="#day5">Fazenda Barranco Alto</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                           <a className="detail-md trip-day-nav-link" href="#day6">Fazenda Barranco Alto - Florianopolis</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                           <a className="detail-md trip-day-nav-link" href="#day7">Fazenda Barranco Alto - Florianopolis</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                           <a className="detail-md trip-day-nav-link" href="#day8">Florianopolis</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                           <a className="detail-md trip-day-nav-link" href="#day9">Florianopolis - Sao Paulo</a>
                        </li>
                     </ul>
                  </nav>
                  <nav className="trip-day-nav trip-sidebar-wrap hidden-xs hidden-sm hidden-print">
                    <button className="favouriteButton" onClick={this.handleFavourites}>Add to favourites</button>
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
)(Brazil);
