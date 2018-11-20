var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Rwanda = React.createClass({
  handleFavourites: function() {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2011").then((response) => {
      console.log('Response form antarctica', response);
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
                              Rwanda
                           </h2>
                           <h1 className="title-lg item-title trip-title">Gorillas in Africa's Midst</h1>
                        </div>
                     </header>
                  </div>
                  <div className="row">
                     <div className="content-body event-content-body col-md-11 trip-content-body">
                        <section id="event-body" className="item-body">
                           <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                           <ul>
                              <li>Explore Kahuzi-Biega National Park, home to rare Eastern Lowland Gorillas.</li>
                              <li>Cross stunning Lake Kivu between the towns of Goma and Bukavu.</li>
                              <li>Witness the famous karyenda drummers of Burundi in action.</li>
                         </ul>
                           <section id="event-trip-itinerary">
                              <h5 className="event-body-heading">Itinerary</h5>
                              <div className="trip-day-wrap">
                                 <a name="day1"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 1
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Tour Starts in Kigali (Rwanda)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, April 21
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Arrive in Ushuaia today and be transferred to your hotel. Enjoy the sights and sounds of the world's most southerly city.</li>
                               </ul>
                               <img className="detail-image-css" src="../images/rwanda1.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day2"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 2
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kigali - Kirundo (Burundi)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, April 22
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Enjoy a free morning in Ushuaia where you can explore the town or the surrounding countryside. Embarkation on the Expedition begins in the afternoon at the port in Ushuaia, after which you'll depart the southernmost tip of the South American continent and sail through the Beagle Channel.</li>
                                   <li>Running through the Tierra del Fuego Archipelago, the channel forms part of the border between Chile and neighbouring Argentina and this evening's sailing takes you south, towards the open waters of Drake Passage and the vast Southern Ocean.</li>
                                </ul>
                                 <img className="detail-image-css" src="../images/rwanda2.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day3"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 3
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kirundo - Gitega
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, April 23
                                 </div>
                                 <ul className="tripsUl">
                                   <li>There will be daily lectures on board from resident polar experts and keep an eye out for the first sightings of icebergs.</li>
                                 </ul>
                                 <img className="detail-image-css" src="../images/rwanda3.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day4"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 4
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Gitega - Kibuye (Rwanda)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Wednesday, April 24
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Over the coming days you'll discover some of the most unique wildlife and experience some of the most inspiring scenery on the planet, as you head for the vast white wilderness of Antarctica. </li>
                                   <li>Attempting two shore landings a day, there will be opportunities to encounter Gentoo, chinstrap and Adélie penguin rookeries, see Weddell and leopard seals and hopefully come across orcas and humpbacks in the cold Antarctic waters. During the voyage you'll also have a chance to learn about the peninsula's remarkable history. </li>
                               </ul>
                                 <img className="detail-image-css" src="../images/rwanda4.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day5"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 5
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kibuye - Gisenyi
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Thursday, April 25
                                 </div>
                                 <ul className="tripsUl">
                                   <li>A further day to encounter the unique wildlife and spectacular landscapes of the Great White Continent.</li>
                                 </ul>
                               <img className="detail-image-css" src="../images/rwanda5.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day6"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 6
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Climb Mt Nyiragongo
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Friday, April 26
                                 </div>
                                 <ul className="tripsUl">
                                   <li>A further day to encounter the unique wildlife and spectacular landscapes of the Great White Continent.</li>
                                 </ul>
                                 <img className="detail-image-css" src="../images/rwanda6.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day7"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 7
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Virunga National Park - Goma
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Saturday, April 27
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Keep an eye out from the observation deck for some last-minute whale sightings as you head back towards the port of Ushuaia and the end of this incredible adventure. </li>
                                 </ul>
                                 <img className="detail-image-css" src="../images/rwanda7.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day8"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 8
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Goma – Bukavu
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, April 28
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Keep an eye out from the observation deck for some last-minute whale sightings as you head back towards the port of Ushuaia and the end of this incredible adventure.</li>
                                 </ul>
                                 <img className="detail-image-css" src="../images/rwanda8.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day9"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 9
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Gorilla Tracking In Kahuzi
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, April 29
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Disembark in Ushuaia early this morning, where your journey ends. Wild Frontiers can arrange departure transfers and further travel in Argentina.</li>
                                   <li>Until the next adventure!</li>
                                 </ul>
                                 <img className="detail-image-css" src="../images/rwanda9.jpg"/>
                              </div>
                           </section>
                        </section>
                        <div className="row">
                           <div className="col-xs-12">
                              <section className="event-fine-print">
                                 <div className="event-fine-print-body item-body">
                                    <div className="title-sm">The Fine Print</div>
                                    <div className="event-fine-print-body item-body">
                                       <h3 className="event-body-subheading">YOUR ZAMBIA TRIP INCLUDES</h3>
                                       <ul className="tripsUl">
                                          <li>All lodging in double-accommodation rooms at a central hotel for the duration of the tour. (Single supplement for a private room is available for $725. Otherwise we'll work to place individuals of the same gender together.)</li>
                                          <li>Daily breakfast at the hotel, four lunches, and three dinners.</li>
                                          <li>Two expert guides, with a great depth and breadth of knowledge about Rome’s history, arts, and culture.</li>
                                          <li>Admission to all proposed activities and events.</li>
                                          <li>A full briefing packet for each explorer, including logistical and contact information, recommended reading list, and packing list.</li>
                                     </ul>
                                       <h3 className="event-body-subheading"><strong>ACTIVITY LEVEL</strong></h3>
                                         <p>We recommend you have a medium fitness level to fully participate in this trip. You should be comfortable staying on your feet for long stretches at a time, and walking anywhere between 3 to 6 miles a day. We will be out and about most of each day, with time to rest at lunch and dinner, both of which will take place on the later side.</p>
                                       <h3 className="event-body-subheading">PAYMENT</h3>
                                         <p>You will be charged a $500 deposit to hold your space. This deposit is non-refundable after three days. <strong>The final payment of $2,975 will be due by December 3, 2018</strong>. All reservations will be final after this date, and subject to our cancellation policy. By submitting your deposit, you agree to our <a href="https://docs.google.com/document/d/1VKyOQFEnVBAjrwRw1k8OqCSURFC7a6zrkSvXV7N4BN4/edit"><strong>Terms &amp; Conditions</strong></a>. For those wishing to have a single room and/or extra nights, optional supplements will be included with the final payment. </p>
                                       <h3 className="event-body-subheading">TRAVELERS ARE RESPONSIBLE FOR</h3>
                                       <ul className="tripsUl">
                                          <li>Flights or other transportation to and from Argentina.</li>
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
                                 $6,549.00 USD
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
                           <a className="detail-md trip-day-nav-link" href="#day1">Tour Starts in Kigali (Rwanda)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                           <a className="detail-md trip-day-nav-link" href="#day2">Kigali - Kirundo (Burundi)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                           <a className="detail-md trip-day-nav-link" href="#day3">Kirundo - Gitega</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                           <a className="detail-md trip-day-nav-link" href="#day4">Gitega - Kibuye (Rwanda)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                           <a className="detail-md trip-day-nav-link" href="#day5">Kibuye - Gisenyi</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                           <a className="detail-md trip-day-nav-link" href="#day6">Climb Mt Nyiragongo</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                           <a className="detail-md trip-day-nav-link" href="#day7">Virunga National Park - Goma</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                           <a className="detail-md trip-day-nav-link" href="#day8">Goma – Bukavu</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                           <a className="detail-md trip-day-nav-link" href="#day9">Gorilla Tracking In Kahuzi</a>
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
)(Rwanda);
