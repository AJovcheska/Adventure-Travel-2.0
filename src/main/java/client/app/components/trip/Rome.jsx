var React = require('react');

var Rome = React.createClass({
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
                              Rome, Italy
                           </h2>
                           <h1 className="title-lg item-title trip-title">Rome Behind Locked Doors: Music, Magic, & Secret Crypts</h1>
                        </div>
                     </header>
                  </div>
                  <div className="row">
                     <div className="content-body event-content-body col-md-11 trip-content-body">
                        <section id="event-body" className="item-body">
                           <h3 className="event-body-subheading">HIGHLIGHTS</h3>
                           <ul>
                              <li><strong>Beautiful Baroque: </strong> Be transported to the past with insider tours of historic churches, parks, and palaces--including the fortified priory of the Knights Templar--and discover their secret symbols and signs.</li>
                              <li><strong>Underground wonders:</strong> Explore crypts, dungeons, and restaurants in subterranean vaults.</li>
                              <li><strong>Myth, music, magic, and medicine:</strong> Visit ancient pharmacies, experience a performance of Renaissance magic, and enjoy a private concert with an Italian Marquis in his palace.</li>
                           </ul>
                           <section id="event-trip-itinerary">
                              <h5 className="event-body-heading">Itinerary</h5>
                              <div className="trip-day-wrap">
                                 <a name="day1"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 1
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Arrival & Dinner Inside a Vault
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Monday, September 30
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, arrive and settle into our centrally located hotel. Our lodging is near Largo di Torre Argentina, a square full of ancient ruins that is said to be the site where Julius Caesar was assassinated. </li>
                                    <li>In the late afternoon, we’ll set off together on a guided stroll, quickly jumping back in time to three periods in Rome’s history—the Empire, the Renaissance, and the Baroque period—to uncover some of the city’s enduring mysteries. We’ll discover the local history of occultism, learn about the Renaissance mathematician and magician Giordano Bruno, and discuss more modern Freemason lodges—all just on the way to dinner.</li>
                                    <li>For dinner, we’ll descend to the subterranean Da Pancrazio, deep inside the vaults of the Theatre of Pompey, a structure dating back to 55 BC. Here, we’ll raise our glasses to celebrate the beginning of our exciting week together.</li>
                                 </ul>
                                 <img src="../images/rome1.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day2"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 2
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Secrets of the Vatican
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Tuesday, October 1
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we’ll explore the lesser known corners of the papal city. We’ll begin our day in St. Peter’s Square, where we’ll learn about the symbols hiding throughout the monumental complex, before descending to the Vatican Necropolis, a burial ground deep below the lavish St. Peter’s Basilica. </li>
                                    <li>We’ll come up for air and gather for lunch at Da Romolo, a restaurant below the Passetto di Borgo, a passageway that served as an escape route for Popes fleeing invading armies.</li>
                                    <li>Afterward, we’ll enjoy a private tour of the towering Castel Sant'Angelo, the mausoleum of the ancient Roman emperor Hadrian. We’ll explore hidden corridors, dark dungeons, and the ornate bathroom of Pope Clement VII, who used the building as a fortress.</li>
                                    <li>This evening is yours to relax, wander, and take dinner at your leisure.</li>
                                 </ul>
                                 <img src="../images/rome2.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day3"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 3
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    The Baroque & Esoteric
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Wednesday, October 2
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we’ll step inside the opulent, ornate structures that 17th-century Popes constructed to exalt what they perceived to be the power and perfection of the Catholic church. We’ll see the era through the eyes of the scholar and occultist Athanasius Kircher: We’ll retrace his steps and explore the Jesuit church of Sant’Ignazio and its educational campus, the Collegio Romano, as well as the magnificent Biblioteca Casanatense, a library that contains more than 400,000 volumes and manuscripts.</li>
                                    <li>Afterwards, we’ll relax and enjoy lunch at the elegant Case Bleve. </li>
                                    <li>In the afternoon, we’ll visit the Piazza Navona. The square is built atop the site of an ancient Roman stadium, and features an obelisk and stunning fountains designed by the sculptor Gian Lorenzo Bernini. We’ll unpack the influence of magic and Egyptian symbols on the design before continuing on to the nearby Palazzo Pamphilj, a palace built in the mid 1600s by Cardinal Giambattista Pamphilj, who would become Pope Innocent X. We’ll also remember Christina, the Swedish queen who abdicated the throne and moved to Rome, where she lived in the Palazzo Farnese and became a fixture in the alchemical and artistic circles of the age.</li>
                                    <li>Take this evening to catch your breath and explore more on your own.</li>
                                 </ul>
                                  <img src="../images/rome3.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day4"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 4
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    The Funerary & Supernatural
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Thursday, October 3
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we’ll journey to the funerary and supernatural worlds. As we wind through the the Ghetto di Roma—the historic Jewish ghetto, founded in the mid-1500s—we’ll hear ghost stories, including one about Beatrice Cenci, a noblewoman who murdered her powerful father and threw him off a balcony. </li>
                                    <li>Next, we’ll head to Isola Tiberina, an island in the Tiber river that was once home to the Temple of Asclepius, the Greek god of medicine. Beneath the island’s Fatebenefratelli hospital—which sheltered Jews during the Holocaust by diagnosing them with a made-up disease that kept Nazi investigators away—we’ll visit the Confraternita dei Sacconi Rossi crypt. Time permitting, we’ll head next door, to San Giovanni Calibita, a church thought to be built atop a former shrine. We’ll enjoy lunch on the island at Sora Lella, a handsome eatery beloved by locals.</li>
                                    <li>Next, we’ll meander through the streets of Trastevere, a district on the western shore of the Tiber river, until we arrive at the historic pharmacy at the monastery of Santa Maria della Scala. For centuries, the pharmacy doled out remedies and antidotes to poisons, including some treatments derived from herbs grown on the premises. </li>
                                    <li>This evening, we’ll enjoy dinner together at a lovely spot nearby the hotel. </li>
                                 </ul> <img src="../images/rome4.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day5"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 5
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Sacred Hill
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Friday, October 4
                                 </div>
                                 <ul className="tripsUl">
                                    <li>Today, we’ll continue our adventure outside urban Rome by ascending Aventine Hill, which was variously home to temples to Juno and Minerva, before passing into the self-governing hands of the Knights Templar and Knights of Malta. Through a keyhole in their garden, you’ll catch a glimpse of the Vatican City. Then, we’ll continue to Santa Maria del Priorato, a church designed by the artist Giovanni Battista Piranesi.</li>
                                    <li>We’ll enjoy lunch at Apuleius, a restaurant decorated in the imperial Roman style.</li>
                                    <li>As we make our way down the hill toward the Circus Maximus—the ancient stadium famous for chariot races, next to a secret, sunken temple to the god Mithras—we’ll recall its historical spectacles and ceremonies. We’ll pay a visit to the Bocca della Verità, or “mouth of truth,” a slack-jawed marble mask with an uncertain past.</li>
                                    <li>The evening culminates in a special private tour and performance at the Mirabilia Gallery of Giano Del Bufalo, a contemporary cabinet of curiosities stocked with natural treasures and rarities. Ferdinando Buscema, a world-class magician and magic experience designer, will join us from Milan to enchant us with a show inspired by Renaissance magic. We’ll sip wine, sit back, and lose ourselves in the magic.</li>
                               </ul>
                                <img src="../images/rome5.jpg"/>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day6"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 6
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Gilded Mansions & Masquerades
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Saturday, October 5
                                 </div>
                                 <ul className="tripsUl">
                                    <li>On our last day, we’ll spend the morning exploring the Domus Aurea, the vast (and unfinished) imperial mansion built by the emperor Nero. Once encrusted with jewels, ivory, marble, gold leaf, and frescoes, it is now being excavated and conserved. An archaeologist will guide us through its grand rooms.</li>
                                    <li>Afterward, we’ll spend a bit of time outside of the Colosseum before breaking for lunch. The afternoon is free; you can take the time to explore the Colosseum, Roman Forum, or Palatine Hill on your own, and grab a bite in one of the nearby restaurants, or simply rest before our final evening.</li>
                                    <li>For our last evening together, we’ll channel 18th-century masquerades as we attend a private concert with the Marquis Corso Patrizi Montoro in his family’s elegant residence, the Palazzo Patrizi Montoro.</li>
                                    <li>We’ll enjoy a delicious final meal and glasses of wine together at the Hostaria dell'Orso, an elegant restaurant inside a 15th-century palazzo, where we’ll raise one last toast to our Roman adventures. </li>
                                 </ul>
                              </div>
                              <div className="trip-day-wrap">
                                 <a name="day7"></a>
                                 <div className="trip-day-nav-num trip-day-body-num">
                                    Day 7
                                 </div>
                                 <h6 className="trip-body-title trip-day-title">
                                    Farewell & Departure
                                 </h6>
                                 <div className="event-body-subheading trip-day-dateline">
                                    Sunday, October 6
                                 </div>
                                 <ul className="tripsUl">
                                   <li>This morning, take breakfast at your leisure and depart for flights or trains home, or onto your next destination.</li>
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
                                       <h3 className="event-body-subheading">YOUR ROME TRIP INCLUDES</h3>
                                       <ul className="tripsUl">
                                          <li>All lodging in double-accommodation rooms at a central hotel for the duration of the tour. (Single supplement for a private room is available for $725. Otherwise we'll work to place individuals of the same gender together.)</li>
                                          <li>Daily breakfast at the hotel, four lunches, and three dinners.</li>
                                          <li>Two expert guides, with a great depth and breadth of knowledge about Rome’s history, arts, and culture.</li>
                                          <li>Admission to all proposed activities and events.</li>
                                          <li>A full briefing packet for each explorer, including logistical and contact information, recommended reading list, and packing list.</li>
                                          <li>A curious group of fellow Atlas Obscura explorers, excited to discover all that Rome has to offer!</li>
                                     </ul>
                                       <h3 className="event-body-subheading"><strong>ACTIVITY LEVEL</strong></h3>
                                         <p>We recommend you have a medium fitness level to fully participate in this trip. You should be comfortable staying on your feet for long stretches at a time, and walking anywhere between 3 to 6 miles a day. We will be out and about most of each day, with time to rest at lunch and dinner, both of which will take place on the later side.</p>
                                       <h3 className="event-body-subheading">PAYMENT</h3>
                                         <p>You will be charged a $500 deposit to hold your space. This deposit is non-refundable after three days. <strong>The final payment of $2,975 will be due by December 3, 2018</strong>. All reservations will be final after this date, and subject to our cancellation policy. By submitting your deposit, you agree to our <a href="https://docs.google.com/document/d/1VKyOQFEnVBAjrwRw1k8OqCSURFC7a6zrkSvXV7N4BN4/edit"><strong>Terms &amp; Conditions</strong></a>. For those wishing to have a single room and/or extra nights, optional supplements will be included with the final payment. </p>
                                       <h3 className="event-body-subheading">TRAVELERS ARE RESPONSIBLE FOR</h3>
                                       <ul className="tripsUl">
                                          <li>Transportation and flights to and from Rome.</li>
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
                                 <div>Sep 30–Oct 06, 2019</div>
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Cost</label>
                              <div className="event-detail">
                                 $3,425.00 USD
                              </div>
                           </li>
                           <li>
                              <label className="detail-sm event-details-label">Itinerary</label>
                              <div className="event-detail">
                                 7 days, 6 nights
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
                           <a className="detail-md trip-day-nav-link" href="#day1">Arrival & Dinner Inside a Vault</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 2</div>
                           <a className="detail-md trip-day-nav-link" href="#day2">Secrets of the Vatican </a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 3</div>
                           <a className="detail-md trip-day-nav-link" href="#day3">The Baroque & Esoteric </a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 4</div>
                           <a className="detail-md trip-day-nav-link" href="#day4">The Funerary & Supernatural</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 5</div>
                           <a className="detail-md trip-day-nav-link" href="#day5">Sacred Hill</a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 6</div>
                           <a className="detail-md trip-day-nav-link" href="#day6">Gilded Mansions & Masquerades </a>
                        </li>
                        <li className="trip-day-nav-li">
                           <div className="trip-day-nav-num detail-sm-non-uppercase">Day 7</div>
                           <a className="detail-md trip-day-nav-link" href="#day7">Farewell & Departure </a>
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

module.exports = Rome;
