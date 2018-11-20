var React = require('react');
var {connect} = require('react-redux');
var backendApi = require('backendApi');

var Barcelona = React.createClass({
  handleFavourites: function() {
    var {username} = this.props;
    backendApi.addTripForUser(username, "2007").then((response) => {
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
                              Barcelona, Spain
                           </h2>
                           <h1 className="title-lg item-title trip-title">Barcelona Behind the Scenes: Cabaret and Carnival</h1>
                        </div>
                     </header>
                  </div>
                  <div className="row">
                     <div className="content-body event-content-body col-md-11 trip-content-body">
                        <section id="event-body" className="item-body">
                           <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                           <ul>
                              <li><strong>Down the rabbit holes of history:</strong> Each day on this carefully curated tour, you'll be peering into a different corner of Barcelona's fascinating history—from science and medicine to art and religion to sin and vice.</li>
                              <li><strong>Live music and performance:</strong> Experience a classNameical piano concert inside a private library and a cabaret performance at a tango bar.</li>
                              <li><strong>Carnival Gala at a Belle Époque atelier</strong>: On our final night, transform into your most glamorous self and delight yourself in one of the most spectacular private house museums in Europe: the <a href="https://www.atlasobscura.com/places/taller-doleguer-junyent-oleguer-junyents-workshop">Oleguer Junyent Workshop</a>. Our Carnival Gala includes a private dinner as well as opera and mentalist performances.</li>
                           </ul>
                           <section id="event-trip-itinerary">
                              <h5 className="event-body-heading">Itinerary</h5>
                              <div className="trip-day-wrap">
                                 <a name="day1"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 1
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Arrival &amp; Welcome Dinner
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, March 4
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, arrive in Barcelona and make your way our hotel, set in a 19th-century building and located near Plaça Catalunya, the city center. Take the chance to rest from your travels.</li>
                                    <li>If you have time to wander and explore on your own, we’ll happily provide recommendations. If you plan to arrive early, we can also arrange extra nights at the hotel for you.</li>
                                    <li>We’ll meet at 6 p.m. in the hotel for an official welcome, then set out before dinner for a short tour exploring the myths and mysteries of ancient Barcelona. We'll walk into the medieval district towards Santa Maria del Pi Church, receiving into some of Barcelona's most shocking and enigmatic passages of medieval history, from ghost legends and the legacy of the Inquisition to alchemy and occult sciences. Along the way, we'll see Sant Just i Pastor, rumored to be the oldest church in the city.</li>
                                    <li>We’ll end our stroll with dinner at Els Quatre Gats, a local favorite founded in 1897 that once played host to famous artists such as Gaudí and Picasso throughout Catalonia’s modernist period. Here, we’ll raise our glasses to celebrate the beginning of our exciting week in Barcelona.</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day2"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 2
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Montjuic &amp; Museum Vaults
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, March 5
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today after breakfast at the hotel, we'll begin the day with a visit to the Museu Nacional d'Art de Catalunya, housed within the Palau Nacional, a grandiose, hilltop edifice.</li>
                                    <li>Here, we'll have a chance to explore the museum vaults for an opportunity to unveil the secrets of the National Palace itself. These vaults are home to Romanesque paintings, Gothic and Renaissance sculptures, and Baroque and Romantic masterpieces. Among the most impressive private rooms (back above ground), we will visit the Josep Lluís Sert Gallery, with original paintings from Victor Sasson's Art Déco mansion in London.</li>
                                    <li className="li1"><span className="s1">Afterwards, we'll rest and enjoy lunch at the restaurant Oleum, located in the former throne room of Spanish king Alfonso XIII and boasting the best panoramic views of Barcelona. </span></li>
                                    <li className="li1"><span className="s1"> After lunch, we invite you to rediscover Barcelona's great International Exposition of 1929 held atop Montjuïc, a mountain revered as magical since antiquity.</span></li>
                                    <li>This evening, you are free to relax, wander, and dine on your own, though you're also welcome to join your guides at one of their favorite local spots. </li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day3"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 3
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    The Golden Age of Spectacle
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Wednesday, March 6
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we'll venture into the Raval district. Well be devoting our attention to art, science, medicine, and death, and exploring aristocratic palaces and former medical institutions.</li>
                                    <li>Our first stop will be the splendid private club at the Liceu Theater, a treasure of 19th-century art nouveau.</li>
                                    <li>Next, we'll hear about the decadent Belle Époque era in Raval and the frightening story of Enriqueta Martí, a serial killer said to be the “vampire of Raval.” </li>
                                    <li>For lunch, we'll settle in at Fonda Espanya, a restaurant located in a fabulous hotel built by the prominent architect Lluís Domènech i Montaner, who also designed the Palau de la Música Catalana and the Hospital de Sant Pau.</li>
                                    <li>In the afternoon, we'll dive into Barcelona's sin city: “Barri Xino,” the former “Chinese district,” frequented in the 1930s by writers such as Jean Genet and Georges Bataille. Tracing the route of their adventures, we'll pass through a neighborhood defined by its scandalous brothels, cabarets, and clubs.</li>
                                    <li>We'll soon find ourselves on "Avinguda del Paral·lel," a street that was devoted to spectacle between 1894 and 1936, often compared to Broadway in New York or the Montmartre in Paris.</li>
                                    <li>Our day tops off at the tango bar Tinta Roja, a magnificent venue where we'll enjoy a cocktail and a tribute to the golden age of spectacle in Barcelona: a performance by one of Barcelona's best in the contemporary cabaret scene.</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day4"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 4
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Freemasons &amp; Barcelona&#39;s 19th Century
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Thursday, March 7
                                 </div>
                                 <ul className="tripsUl">
                                    <li>This morning, we'll kick off the day with a visit to the beautiful Biblioteca Pública Arús, a former masonic temple that remains incredibly well preserved.</li>
                                    <li>We'll have a light lunch of traditional Catalan cuisine at Can Culleretes. Founded in 1786, it is the oldest active restaurant in the city.</li>
                                    <li>After lunch, we'll continue to Palau Güell, an astonishing aristocratic residence built by Antoni Gaudí for his patron, Eusebi Güell. Güell, one of the richest men in Spain, commissioned the world-famous Park Güell, replete with its iconic mosaics.</li>
                                    <li>Our sit-down meal in a beautifully preserved modernist apartment will feature several courses from Catalan “war menu” recipes that were preserved from this period of history. The Spanish Civil War and the period that followed arrived on the heels of a decadent time in Barcelona. Culinary and cultural developments were at a high just as bombs began raining down on the city, continuing for years. Even while food shortages, rationing, and a black market became part of daily life, the creative spirit of the city’s citizens still shined bright. This dinner celebrates the culinary ingenuity under pressure that came out of the Civil War-era in Barcelona.  </li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day5"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 5
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Occult Treasures &amp; Piano Performance
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Friday, March 8
                                 </div>
                                 <ul className="tripsUl">
                                    <li>This morning, we begin in the former village of Sant Gervasi with an unusual tour through the splendor and decadence of bourgeois Barcelona.</li>
                                    <li>We'll trace the path of aristocratic residences, such as the Villa Hispanoárabe, an incredible private residence inspired by the Alhambra Palace in Granada. After this tour, you'll understand why Barcelona was called “the City of Prodigies” between 1888 and 1936.</li>
                                    <li>For lunch, we'll settle into the restaurant Asador de Aranda. </li>
                                    <li>After lunch, we'll visit the Almirall Library. Notorious for its masonic architecture, it is now a private residence. Here, we'll enjoy a relaxed and romantic evening, with a glass of cava—a traditional Catalan drink very similar to champagne—and a classNameical music concert. The private piano performance will feature the music of famous composers who lived close to Tibidabo, such as Richard Strauss and Enrique Granados. Sit back and soak in the music within this serene historic space.</li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day6"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 6
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Gràcia &amp; Private Atelier Gala
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Saturday, March 9
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we'll explore the history of science and medicine with a visit inside the Sant Pau i la Santa Creu complex. Hospital de la Santa Creu i Sant Pau (Hospital of the Holy Cross and Saint Paul), now a World Heritage Site, is an extraordinary example of Catalan neogothic architecture, home to spectacular sculptures and mosaics.Well be able to visit nearly all of the complex, erected between 1905 and 1930 by Lluís Domenech i Muntaner and his son.</li>
                                    <li>For lunch, we'll drop into the restaurant Da Greco, which has a variety of delicious pastas and seafoods. The restaurant is located in Gràcia, one of Barcelona's most exciting districts. An independent village until 1897, it's well known today for being one of the biggest cultural centers in the city.</li>
                                    <li>This afternoon before our exciting final soirée, take some time to rest or wander on your own. </li>
                                    <li>This evening, we'll enter Oleguer Junyent's workshop, an extraordinary Belle Époque atelier. Venture into the private art studio of a Catalan genius who devoted his life to painting, writing, collecting, and stage design. In addition to Oleguer's paintings, sculptures, models, and various other works, the workshop contains one of the most complete collections of automata in the city. </li>
                                    <li>Here in this unique atelier, we'll pay tribute to Barcelona's most memorable Carnival nights with a private dinner, the best wines, and opera and mentalism performances inspired by the Masquerades from the Belle Époque. </li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day7"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 7
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Barcelona Farewell
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, March 10
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Wake up and enjoy breakfast at your leisure. This morning, we bid farewell to new friends, fellow explorers, and wonderful guides. Depart for flights or trains home, or onto your next destination.</li>
                                    <li>While this is the official end of our time together, we are happy to arrange you extra nights if you'd like to extend your time in Barcelona, and to provide suggestions for other things to do and see.</li>
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
                                       <h3 className="event-body-subheading">YOUR BARCELONA TRIP INCLUDES</h3>
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
                                 $3,475.00 USD
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Itinerary</label>
                              <div className="event-detail">
                                 6 days, 6 nights
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
                           <a className="detail-md trip-day-nav-link" href="#day1">Arrival &amp; Welcome Dinner</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                           <a className="detail-md trip-day-nav-link" href="#day2">Montjuic &amp; Museum Vaults</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                           <a className="detail-md trip-day-nav-link" href="#day3">The Golden Age of Spectacle</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                           <a className="detail-md trip-day-nav-link" href="#day4">Freemasons &amp; Barcelona&#39;s 19th Century</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                           <a className="detail-md trip-day-nav-link" href="#day5">Occult Treasures &amp; Piano Performance</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                           <a className="detail-md trip-day-nav-link" href="#day6">Gràcia &amp; Private Atelier Gala</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                           <a className="detail-md trip-day-nav-link" href="#day7">Barcelona Farewell</a>
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
)(Barcelona);
