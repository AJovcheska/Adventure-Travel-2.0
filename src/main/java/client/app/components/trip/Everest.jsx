var React = require('react');

var Everest = React.createClass({
  handleFavourites: function() {
    alert("2007");
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
                              Nepal, Asia
                           </h2>
                           <h1 className="title-lg item-title trip-title">Everest Base Camp Trek</h1>
                        </div>
                     </header>
                  </div>
                  <div className="row">
                     <div className="content-body event-content-body col-md-11 trip-content-body">
                        <section id="event-body" className="item-body">
                           <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                           <ul>
                              <li>Discover Nepal’s historic capital and visit the holy temple of Pashupatinath</li>
                              <li>Enjoy the stunning Himalayan scenery, including Everest, Lhotse and Nuptse</li>
                              <li>Trek to Everest Base Camp</li>
                              <li>Savour the hospitality of the local Nepalese people</li>
                           </ul>
                           <section id="event-trip-itinerary">
                              <h5 className="event-body-heading">Itinerary</h5>
                              <div className="trip-day-wrap">
                                 <a name="day1"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 1
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kathmandu
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, March 4
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Arrive in Kathmandu and transfer on to your comfortable boutique hotel.</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day2"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 2
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kathmandu
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, March 5
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Enjoy a full day's guided tour of the Nepalese capital today, taking in the famous historical monuments of Durbar Square including the Kumari Bahal, the old royal palace and the residence of the living goddess. You will also visit the golden-topped stupa of Swayambunath (The Monkey Temple) and the site of Pashupatinath, the holiest Hindu temple in the Kathmandu Valley, situated beside the sacred waters of the Bagmati River.</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day3"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 3
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kathmandu - Lukla (2800m) - Phakding (2610m)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Wednesday, March 6
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Leaving Kathmandu this morning you will take the exhilarating flight on to Lukla. The starting point of the trek takes you down towards the Dudh Khosi River, following a relatively easy trail on towards Phakding. A 3-4 hour hike today, lunch will be provided en route and the distant peak of Mount Kusum Kangaru provides a spectacular backdrop to your first overnight lodge. Overnight in Phakding. (B,L,D)</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day4"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 4
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Kathmandu - Lukla (2800m) - Phakding (2610m)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Thursday, March 7
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Taking around six hours, today's trek sees you heading up towards Namche Bazaar, following a meandering climb with views of Kusum Kangaroo and Thamsherku providing a stunning visual accompaniment. With luck, if weather conditions allow, you may also spot your first sight of Everest this morning. After lunch you'll begin the steep ascent up to the colourful town of Namche, set high amongst the peaks of the Khumbu region. Spending the night here, the town is amply equipped with restaurants, shops and internet cafes. (B,L,D)</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day5"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 5
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Namche Bazaar
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Friday, March 8
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Today provides a chance to start acclimatising to the higher altitude, with a day hike around Namche. It is important to spend this time getting more used to the challenges that often come with trekking in the mountains, so an optional hike to nearby Syangboche is recommended. Roughly an hour's climb from Namche, Syangboche provides some spectacular 360 degrees of the surrounding peaks, with Everest, Nuptse, Lhotse and Thamsherku clearly visible. (B,L,D)</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day6"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 6
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Namche Bazaar - Deboche (3800m)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Saturday, March 9
                                 </div>
                                 <ul className="tripsUl">
                                   <li>The trek up to Deboche today takes around seven hours and provides some stunning views of Thamsherku, Ama Dablan and Mount Everest. Stopping for lunch on the way to Phunge Thanga, you'll then continue on up to the monastery at Thangboche, an ascent that will take some three hours, but presents you with some spectacular panoramic views from the top. From here it is then an easy hour's walk down towards your next lodge in Deboche. (B,L,D)</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day7"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 7
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Deboche - Dingboche (4410m)
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, March 10
                                 </div>
                                 <ul className="tripsUl">
                                   <li>Today's journey takes you on to the Comfort Lodge in Dingboche, a trek of some six hours that takes you across the Pangboche Bridge and over the Budha Koshi. The trail along this stretch of the climb narrows considerably, so take your time. After passing through Pangboche, the trail on to Dingboche takes around another three hours. (B,L,D)</li>
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
                                       <h3 className="event-body-subheading">YOUR EVEREST TRIP INCLUDES</h3>
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
                                          <li>Transportation and flights to and from Nepal.</li>
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
                                 <div>June 04&ndash;June 22, 2019</div>
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Cost</label>
                              <div className="event-detail">
                                 €4,611
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Itinerary</label>
                              <div className="event-detail">
                                 18 Days, 17 nights
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
                           <a className="detail-md trip-day-nav-link" href="#day1">Kathmandu</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                           <a className="detail-md trip-day-nav-link" href="#day2">Kathmandu</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                           <a className="detail-md trip-day-nav-link" href="#day3">Kathmandu - Lukla (2800m) - Phakding (2610m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                           <a className="detail-md trip-day-nav-link" href="#day4">Kathmandu - Lukla (2800m) - Phakding (2610m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                           <a className="detail-md trip-day-nav-link" href="#day5">Namche Bazaar</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                           <a className="detail-md trip-day-nav-link" href="#day6">Namche Bazaar - Deboche (3800m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                           <a className="detail-md trip-day-nav-link" href="#day7">Deboche - Dingboche (4410m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 8</div>
                           <a className="detail-md trip-day-nav-link" href="#day8">Deboche - Dingboche (4410m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 9</div>
                           <a className="detail-md trip-day-nav-link" href="#day9">Dingboche - Dhulga (3800m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 10</div>
                           <a className="detail-md trip-day-nav-link" href="#day10">Dhulga - Lobuche (4910m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 11</div>
                           <a className="detail-md trip-day-nav-link" href="#day11">Lobuche - Gorakshep (5140m) - Everest Base Camp (5346m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 12</div>
                           <a className="detail-md trip-day-nav-link" href="#day12">Everest Base Camp - Kallapatthar - Pheriche (4200m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 13</div>
                           <a className="detail-md trip-day-nav-link" href="#day13">Pheriche - Kenjuma (3500m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 14</div>
                           <a className="detail-md trip-day-nav-link" href="#day14">Kenjuma - Monjo (2850m)</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 15</div>
                           <a className="detail-md trip-day-nav-link" href="#day15">Monjo - Lukla</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 16</div>
                           <a className="detail-md trip-day-nav-link" href="#day16">Lukla - Kathmandu</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 17</div>
                           <a className="detail-md trip-day-nav-link" href="#day17">Lukla - Kathmandu</a>
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

module.exports = Everest;
