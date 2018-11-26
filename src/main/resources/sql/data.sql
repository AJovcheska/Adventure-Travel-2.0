insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('aleks', 'jovcheska.aleksandra@yahoo.com', 'b8f57d6d6ec0a60dfe2e20182d4615b12e321cad9e2979e0b9f81e0d6eda78ad9b6dcfe53e4e22d1', true, 'Aleksandra Jovcheska', 23, 'Macedonia', 'F', 'Student', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('verche', 'jovcheska.vera@yahoo.com', 'd6dfa9ff45e03b161e7f680f35d90d5ef51d243c2a8285aa7e11247bc2c92acde0c2bb626b1fac74', true, 'Vera Jovcheska', 25, 'Macedonia', 'F', 'Professor', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('admin', 'jovcheska.valentina@yahoo.com', 'b8f57d6d6ec0a60dfe2e20182d4615b12e321cad9e2979e0b9f81e0d6eda78ad9b6dcfe53e4e22d1', true, 'Valentina Jovcheska', 49, 'Macedonia', 'F', 'Manager', '', '', '', '');

insert into authority (name) values ('role_user');
insert into authority (name) values ('role_admin');

insert into user_authority (username,authority) values ('admin', 'role_user');
insert into user_authority (username,authority) values ('admin', 'role_admin');
insert into user_authority (username,authority) values ('verche', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_admin');

insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HIDDEN_CITIES','Europe','Italy','Rome behind locked doors',3425,'ArchitecturalWonders,HistoryAndMistery,PhotographyBomb',6,4.2,'Sep 30–Oct 05, 2019',null,'City','','Be transported to the past with insider tours of historic churches, parks, and palaces--including the fortified priory of the Knights Templar--and discover their secret symbols and signs.','2000.jpg', 3,'Today, arrive and settle into our centrally located hotel. Our lodging is near Largo di Torre Argentina, a square full of ancient ruins that is said to be the site where Julius Caesar was assassinated.', 'rome1.jpg', 'Monday, September 30', 'Arrival & Dinner Inside a Vault', 'Today, we’ll explore the lesser known corners of the papal city. We’ll begin our day in St. Peter’s Square, where we’ll learn about the symbols hiding throughout the monumental complex, before descending to the Vatican Necropolis, a burial ground deep below the lavish St. Peter’s Basilica.', 'rome2.jpg', 'Tuesday, October 1', 'Secrets of the Vatican','Today, we’ll step inside the opulent, ornate structures that 17th-century Popes constructed to exalt what they perceived to be the power and perfection of the Catholic church. We’ll see the era through the eyes of the scholar and occultist Athanasius Kircher.', 'rome3.jpg', 'Wednesday, October 2', 'The Baroque & Esoteric','Today, we’ll journey to the funerary and supernatural worlds. As we wind through the the Ghetto di Roma—the historic Jewish ghetto, founded in the mid-1500s—we’ll hear ghost stories, including one about Beatrice Cenci, a noblewoman who murdered her powerful father and threw him off a balcony.', 'rome4.jpg', 'Thursday, October 3', 'The Funerary & Supernatural','As we make our way down the hill toward the Circus Maximus—the ancient stadium famous for chariot races, next to a secret, sunken temple to the god Mithras—we’ll recall its historical spectacles and ceremonies.', 'rome5.jpg', 'Friday, October 4', 'Sacred Hill', 'On our last day, we’ll spend the morning exploring the Domus Aurea, the vast (and unfinished) imperial mansion built by the emperor Nero. Once encrusted with jewels, ivory, marble, gold leaf, and frescoes, it is now being excavated and conserved. An archaeologist will guide us through its grand rooms.', 'rome5.jpg', 'Saturday, October 5', 'Gilded Mansions & Masquerades');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('CRUISING','Antarctica','Antarctica','Antarctica classic',5471,'IceCold,MotherNature',6,3.9,'Apr 21-Apr 27, 2019',null,'Cold place','','A dazzling landscape of vivid emeralds and violets, intense crimson light and sweeping panoramas of blue ice. Seabirds, whales, penguins and more...','2001.jpg', 2,'Arrive in Ushuaia today and be transferred to your hotel. Enjoy the sights and sounds of the world''s most southerly city.', 'Ushuaia.jpg', 'Sunday, April 21', 'Welcome to Ushuaia!', 'Enjoy a free morning in Ushuaia where you can explore the town or the surrounding countryside. Embarkation on the Expedition begins in the afternoon at the port in Ushuaia, after which you''ll depart the southernmost tip of the South American continent and sail through the Beagle Channel.Running through the Tierra del Fuego Archipelago, the channel forms part of the border between Chile and neighbouring Argentina and this evening''s sailing takes you south, towards the open waters of Drake Passage and the vast Southern Ocean.', 'Drake-Passage.jpg', 'Monday, April 22', 'Ushuaia - Drake Passage', 'There will be daily lectures on board from resident polar experts and keep an eye out for the first sightings of icebergs.', 'drakePassage2.jpg', 'Tuesday, April 23', 'Ushuaia - Drake Passage', 'Over the coming days you''ll discover some of the most unique wildlife and experience some of the most inspiring scenery on the planet, as you head for the vast white wilderness of antarctica.', 'drakePassage3.jpg', 'Wednesday, April 24', 'South Shetland Islands', 'A further day to encounter the unique wildlife and spectacular landscapes of the Great White Continent.', 'Antarctic-Peninsula.jpg', 'Thursday, April 25', 'Antarctic Peninsula', 'Keep an eye out from the observation deck for some last-minute whale sightings as you head back towards the port of Ushuaia and the end of this incredible adventure.', 'drakePassage4.jpg', 'Friday, April 26', 'Antarctic Peninsula');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('SCIENCE_AND_NATURE','Asia','Nepal','Everest base camp trek',4611,'BikingAndHiking,MotherNature,IceCold,InTheMountains',6,4.5,'June 04-June 10, 2019',null,'Mountain','','Discover Nepal’s historic capital and visit the holy temple of Pashupatinath. Enjoy the stunning Himalayan scenery, including Everest, Lhotse and Nuptse. Trek to Everest Base Camp.','2002.jpg', 1,'Arrive in Kathmandu and transfer on to your comfortable boutique hotel.', 'everest1.jpg', 'Monday, March 4', 'Kathmandu', 'Enjoy a full day''s guided tour of the Nepalese capital today, taking in the famous historical monuments of Durbar Square including the Kumari Bahal, the old royal palace and the residence of the living goddess.', 'everest2.jpg', 'Tuesday, March 5', 'Kathmandu','Leaving Kathmandu this morning you will take the exhilarating flight on to Lukla. The starting point of the trek takes you down towards the Dudh Khosi River, following a relatively easy trail on towards Phakding', 'everest3.jpg', 'Wednesday, March 6', 'Kathmandu - Lukla (2800m) - Phakding (2610m)','Taking around six hours, today''s trek sees you heading up towards Namche Bazaar, following a meandering climb with views of Kusum Kangaroo and Thamsherku providing a stunning visual accompaniment.', 'everest4.jpg', 'Thursday, March 7', 'Kathmandu - Lukla (2800m) - Phakding (2610m)','Today provides a chance to start acclimatising to the higher altitude, with a day hike around Namche.', 'everest5.jpg', 'Friday, March 8', 'Namche Bazaar','The trek up to Deboche today takes around seven hours and provides some stunning views of Thamsherku, Ama Dablan and Mount Everest.', 'everest6.jpg', 'Saturday, March 9', 'Namche Bazaar - Deboche (3800m)');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('CRUISING','Europe','Norway','Cruise: Norwegian fjords',4331,'MotherNature,IceCold',6,5.0,null,null,'Cold place','','','2003.jpg', 3,'', '', '', '', '', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HISTORY_AND_CULTURE','Africa','Morocco','Morocco’s mountains and medinas',3190,'AncientWonders,PhotographyBomb,FascinatingFauna,ArchitecturalWonders',6,4.7,'Oct 16–Oct 22, 2019',null,'Historical place','','Wander the maze-like streets of some of the oldest medinas in the world. From the dramatic coastline to the edge of the Sahara and into the High Atlas Mountains, see Morocco’s vast and varied landscapes.','2004.jpg', 2, 'Arrive in Casablanca, where you''ll be met at the airport and transferred to the group''s hotel.Late this afternoon, we''ll gather for a brief welcome orientation and pre-dinner cocktails, followed by a festive first meal to kick off the trip.', 'morocoo1.jpg', 'Wednesday, October 16', 'Arrival in Casablanca', 'We''ll begin the day with a visit to Hassan II Mosque. A stunning architectural marvel built on the edge of the Atlantic, the mosque features the world’s most massive minaret.To get some perspective, we''ll head to the Merenid Tombs, the ruins of an ancient necropolis overlooking the city.', 'morocoo2.jpg', 'Thursday, October 17', 'From Casablanca to Fez','After breakfast at our riad, we''ll begin to explore one of the most magical medinas on earth, wandering through a maze of narrow alleyways with our local guide', 'morocoo3.jpg', 'Friday, October 18', 'Wandering the Medina','About an hour from Fez, we''ll make our way to the old imperial city of Meknes. Accompanied by a local expert, we''ll visit the mausoleum of Sultan Moulay Ismail. This tranquil, elaborately detailed structure is the final resting place of Morocco''s "warrior king," who ruled from 1672 to 1727. We''ll then continue to the striking Dar El Makhzen palace, and the royal stables that once housed 12,000 horses.', 'morocoo4.jpg', 'Saturday, October 19', 'Ancient Cities & Roman Ruins','This day’s drive from Meknes to the Middle Atlas mountain range is a long one—approximately four hours—but it''s spectacular. The northern slopes of these mountains are beautifully mottled with forests, fields, and lakes.', 'morocoo5.jpg', 'Sunday, October 20', 'The Middle Atlas Mountains','Continuing south through the Middle Atlas, we''ll make our way to Ouzoud Falls. At 360 feet, the falls are the highest in the country.', 'morocoo6.jpg', 'Monday, October 21', 'Ouzoud & Onward to Marrakesh');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HISTORY_AND_CULTURE','Asia','Iran','Ancient Persia, Modern Iran',4685,'PhotographyBomb,AncientWonders',6,4.5,'Apr 21–Apr 27, 2019',null,'Historical place','','From the magnificent columns of ancient Persepolis to Tehran’s sleek and modern Azadi Tower, and from the Pink Mosque in Shiraz to the soaring windcatchers of Yazd, witness an awe-inspiring array of man-made structures.','2005.jpg', 1,'Arrive in Tehran by midday and check into our hotel, in the center of the bustling capital and conveniently close to most of the sights we’ll be exploring.', 'iran1.jpg', 'Sunday, April 21', 'Welcome to Iran!', 'We’ll begin the day at Golestan Palace, in the middle of old Tehran. The palace is a complex of buildings and gardens of varying styles, and highlights include the extraordinary cut-mirror ceiling of Talar e Brelian, and a covered terrace with a marble throne designed for the relaxation of the former kings.', 'iran2.jpg', 'Monday, April 22', 'Getting to Know Tehran','We’ll be guided through the spectacular Fatimah Musemeh Shrine, an exquisite, centuries-old monument and pilgrimage site. It’s also where Ayatollah Khomeini led his opposition to the Shah of Iran, so it is often considered the birthplace of the revolution.', 'iran3.jpg', 'Tuesday, April 23', 'From Tehran to Kashan','Kashan boasts an array of lavish historical buildings and homes, and we’ll visit the bewitching Tabatabaei House and nearby Sultan Amir Ahmad Bathhouse. Both built in the 1880s, these buildings illustrate the plush Persian lifestyle for which Kashan was once famous.', 'iran4.jpg', 'Wednesday, April 24', 'Into the Mountains to Abyaneh','After lunch at a traditional Persian restaurant, we’ll take a walking tour through the Isfahan Grand Bazaar, and discover some of the tea houses, ancient structures, and secrets deep within.', 'iran5.jpg', 'Thursday, April 25', 'Isfahan, Half the World','Before leaving, we’ll make one last stop for a final view of Isfahan from “Pigeon Tower,” one of hundreds of beautifully symmetrical structures that dot the landscape of central Iran and are key to its farming communities.', 'iran6.jpg', 'Friday, April 26', 'Through the Desert');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HISTORY_AND_CULTURE','Asia','Mongolia','Wander Mongolia: Blue skies and endless steppe',2990,'bikingandhiking,PhotographyBomb,FarFarEast,FascinatingFauna',6,3.7,'Jul 07–Jul 13, 2019',null,'City','','We''ll take in a vast variety of scenery, from the Mongol Els sand dune to the famous steppe, from the Orkhon River to lush meadowland and dramatic rock formations.','2006.jpg', 3,'Once you land, you’ll be met and transferred from the airport to the group hotel.', 'mongo1.jpg', 'Sunday, July 7', 'Welcome to Ulaanbaatar!', 'We''ll visit the restored Gandan Monastery, a Tibetan-style Buddhist monastery home to
                            several hundred monks. We''ll also visit the National Museum of Mongolia, which covers over a
                            millennia of local history, and Sükhbaatar Square. This central square is named for Damdiny
                            Sükhbaatar, the "Father of Mongolia''s Revolution in 1921 that brought independence from
                            China.', 'mongo2.jpg', 'Monday, July 8', 'Ulaanbaatar Explorations','Today, we set out for the town of Zuunmod for the opening ceremony of the Naadam Festival!
                            It''ll be an early start to the day for the drive to the center of Töv province. Zuunmod,
                            which means "Hundred Trees," has a population of just under 15,000, and is a quiet place
                            outside of the festival season.', 'mongo3.jpg"', 'Tuesday, July 9', ' To Zuunmod for the Naadam Festival!','This morning, we head back into Ulaanbaatar. Our first stop is the city''s central stadium,
                            where we''ll see an archery competition and hopefully the ankle-bone shooting game.', 'mongo4.jpg', 'Wednesday, July 10', 'Archery & The Last Wild Horses','This morning we continue our journey by road to Karakorum (also Qara Qorum), capital of
                            the Mongol Empire between 1235 and 1260. You can still see ruins of the 13th-century
                            metropolis, from statues and roof tiles to crumbling kilns. When Kublai Khan took the throne
                            of the empire in 1260, the city lost its key status and was reduced to an administrative
                            center.', 'mongo5.jpg', 'Thursday, July 11', 'The Ancient Capital of Karakorum','After breakfast, we depart the ancient capital and continue toward Ögii Lake, a freshwater
                            expanse known for its fish and birdlife.', 'mongo6.jpg', 'Friday, July 12', 'Birdwatching by Ögii Lake');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HIDDEN_CITIES','Europe','Spain','Barcelona behind the scenes',3475,'PhotographyBomb',6,4.2,'Mar 04-Mar 10, 2019',null,'City','','Each day on this carefully curated tour, you''ll be peering into a different corner of Barcelona''s fascinating history—from science and medicine to art and religion to sin and vice. Experience a classNameical piano concert inside a private library and a cabaret performance at a tango bar.','2007.jpg', 2,'Today, arrive in Barcelona and make your way our hotel, set in a 19th-century building and
                            located near Plaça Catalunya, the city center. Take the chance to rest from your travels.', 'barcelona1.jpg', 'Monday, March 4', 'Arrival. Welcome Dinner', 'Here, we''ll have a chance to explore the museum vaults for an opportunity to unveil the
                            secrets of the National Palace itself. These vaults are home to Romanesque paintings, Gothic
                            and Renaissance sculptures, and Baroque and Romantic masterpieces. Among the most impressive
                            private rooms (back above ground), we will visit the Josep Lluís Sert Gallery, with original
                            paintings from Victor Sasson''s Art Déco mansion in London.', 'barcelona2.jpg', 'Tuesday, March 5', 'Museum Vaults','Today, we''ll venture into the Raval district. Well be devoting our attention to art,
                            science, medicine, and death, and exploring aristocratic palaces and former medical
                            institutions.', 'barcelona3.jpg', 'Wednesday, March 6', 'The Golden Age of Spectacle','This morning, we''ll kick off the day with a visit to the beautiful Biblioteca Pública
                            Arús, a former masonic temple that remains incredibly well preserved.', 'barcelona4.jpg', 'Thursday, March 7', 'Freemasons &amp; Barcelona&#39;s 19th Century','This morning, we begin in the former village of Sant Gervasi with an unusual tour through
                            the splendor and decadence of bourgeois Barcelona.', 'barcelona5.jpg', 'Friday, March 8', 'Occult Treasures &amp; Piano Performance','Today, we''ll explore the history of science and medicine with a visit inside the Sant Pau
                            i la Santa Creu complex. Hospital de la Santa Creu i Sant Pau (Hospital of the Holy Cross
                            and Saint Paul), now a World Heritage Site, is an extraordinary example of Catalan neogothic
                            architecture, home to spectacular sculptures and mosaics.Well be able to visit nearly all of
                            the complex, erected between 1905 and 1930 by Lluís Domenech i Muntaner and his son.', 'barcelona6.jpg', 'Saturday, March 9', 'Gràcia &amp; Private Atelier Gala');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('SCIENCE_AND_NATURE','South America','Brazil','Brazilian wildlife',4098,'PhotographyBomb,FascinatingFauna,MotherNature',6,5.0,'Mar 04-Mar 10, 2019',null,'Tropical place','','Brazil is home to 60% of the Amazon Rainforest. On our final night, transform into your most glamorous self and delight yourself in one of the most spectacular private house museums in South America. Our Carnival Gala includes a private dinner as well as opera and mentalist performances.','2008.jpg', 0,'When you arrive in Rio your local guide will be waiting to meet you and will take you to
                            your hotel which is located on the end of Copacabana Beach.', 'brazil1.jpg', 'Monday, March 4', 'Welcome to Rio de Janeiro!', 'This morning''s excursion will take you to visit Sugar Loaf Mountain, one of the most
                            famous landmarks of the city. You will take two cable cars with your guide to reach the top
                            of Sugar Loaf Mountain to appreciate some of the best views across the city.', 'brazil2.jpg', 'Tuesday, March 5', 'Rio de Janeiro','Transfer to the airport for your flights to Campo Grande. When you arrive you at Campo
                            Grande you will be met and driven to the airstrip at Aquidauana, a journey of approximately
                            3 hours, where you will board your light aircraft to Fazenda Barranco Alto.', 'brazil3.jpg', 'Wednesday, March 6', 'Rio de Janeiro - Fazenda Barranco Alto','The Fazenda Barranco Alto offers a number of activities to its guests, such as walking
                            safaris with biologists to observe the flora and fauna, photo safaris, boat and kayak trips,
                            horse riding and night safaris. Guests can also observe the working farmers and visit the
                            traditional workshops.', 'brazil4.jpg', 'Thursday, March 7', 'Rio de Janeiro - Fazenda Barranco Alto','This morning you will be flown back to Aquiduana and then driven the rest of the way to
                            Campo Grande to board your flight to Florianopolis, via Sao Paulo.', 'brazil3.jpg', 'Saturday, March 9', 'Fazenda Barranco Alto - Florianopolis','Every year between July and November Southern Right whales come to give birth and care for
                            their young.', 'brazil2.jpg', 'Sunday, March 10', 'Fazenda Barranco Alto - Florianopolis');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('HIDDEN_CITIES','Asia','Jordan','Petra: Lost city of Arabia',2274,'PhotographyBomb,ArchitecturalWonders,HistoryAndMistery',6,4.1,'Sept 06-Sept 12, 2019',null,'Historical place','','Exploring the ruins of Roman Jerash. Staying with local villagers in the north of the country. Camping in the deserts of Wadi Rum.','2009.jpg', 3,'The tour starts in the the town of Madaba, home to some of the most extraordinary mosaics
                            in the Middle East.', 'petra1.jpg', 'Monday, March 4', 'Tour starts in Madaba', 'A busy day ahead of us, we will first visit Madaba’s famous Byzantine Church, before
                            heading across to Mt Nebo, after which we will head north to the Roman city of Jerash.', 'petra2.jpg', 'Tuesday, March 5', 'Madaba to Jerash','This morning we will head to Ajloun’s crusader-era castle before heading to the village of
                            Rasun for lunch before walking through the hills to Orjan village, where we’ll overnight
                            with our village host families.', 'petra3.jpg', 'Wednesday, March 6', 'Jerash – Ajloun - Orjan','This morning we''ll take a walk through the surrounding area, before joining up with our
                            vehicle and head towards the Dana Nature Reserve, stopping off at the stunning Crusader
                            castle of Kerak on the way.', 'petra4.jpg', 'Thursday, March 7', 'Orjan – Kerak - Dana Nature Reserve','Today will be on foot as we follow the Wadi Dana Trail, walking from Dana to Feynan,
                            covering approximately 14km.', 'petra5.jpg', 'Friday, March 8', 'Orjan – Kerak - Dana Nature Reserve','We’ll head straight to Petra this morning and take a guided tour of the ancient Nabataean
                            city of Petra.', 'petra6.jpg', 'Saturday, March 9', 'Dana Nature Reserve');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('SCIENCE_AND_NATURE','Africa','Rwanda','Gorillas in Africa''s midst',6549,'PhotographyBomb,FascinatingFauna,MotherNature',6,3.5,'Apr 21–Apr 30, 2019',null,'Tropical place','','Explore Kahuzi-Biega National Park, home to rare Eastern Lowland Gorillas. Cross stunning Lake Kivu between the towns of Goma and Bukavu. Witness the famous karyenda drummers of Burundi in action.','2010.jpg', 2,'Arrive in Ushuaia today and be transferred to your hotel. Enjoy the sights and sounds of
                            the world''s most southerly city.', 'rwanda1.jpg', 'Sunday, April 21', 'Tour Starts in Kigali (Rwanda)', 'Enjoy a free morning in Ushuaia where you can explore the town or the surrounding
                            countryside. Embarkation on the Expedition begins in the afternoon at the port in Ushuaia,
                            after which you''ll depart the southernmost tip of the South American continent and sail
                            through the Beagle Channel.', 'rwanda2.jpg', 'Monday, April 22', 'Kigali - Kirundo (Burundi)','There will be daily lectures on board from resident polar experts and keep an eye out for
                            the first sightings of icebergs.', 'rwanda3.jpg', 'Tuesday, April 23', 'Kirundo - Gitega','Attempting two shore landings a day, there will be opportunities to encounter Gentoo,
                            chinstrap and Adélie penguin rookeries, see Weddell and leopard seals and hopefully come
                            across orcas and humpbacks in the cold Antarctic waters. During the voyage you''ll also have
                            a chance to learn about the peninsula''s remarkable history.', 'rwanda4.jpg', ' Wednesday, April 24', 'Gitega - Kibuye (Rwanda)','A further day to encounter the unique wildlife and spectacular landscapes of the Great
                            White Continent.', 'rwanda5.jpg', 'Thursday, April 25', 'Kibuye - Gisenyi','A further day to encounter the unique wildlife and spectacular landscapes of the Great
                            White Continent.', 'rwanda6.jpg', 'Friday, April 26', 'Climb Mt Nyiragongo');
insert into trip (category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign,destination,description,highlights,image,availableSeats,dayOne, imageOne, dateOne, titleOne, dayTwo, imageTwo, dateTwo, titleTwo, dayThree, imageThree, dateThree, titleThree, dayFour, imageFour, dateFour, titleFour, dayFive, imageFive, dateFive, titleFive, daySix, imageSix, dateSix, titleSix) values ('SCIENCE_AND_NATURE','Africa','Zambia','Wild zambian safari',6538,'PhotographyBomb,FascinatingFauna,MotherNature',6,4.8,'Apr 21–Apr 27, 2019',null,'Tropical place','','Stay on a remote island in the middle of the Zambezi River. Enjoy a unique walking safari and get up close and personal with big game. Spot cheetah on the open plains of Kafue.','2011.jpg', 1,'Arrive in Ushuaia today and be transferred to your hotel. Enjoy the sights and sounds of the world''s most southerly city.', 'zambia1.jpg', 'Sunday, April 21', 'Welcome to Zambia!', 'Enjoy a free morning in Ushuaia where you can explore the town or the surrounding
                            countryside. Embarkation on the Expedition begins in the afternoon at the port in Ushuaia,
                            after which you''ll depart the southernmost tip of the South American continent and sail
                            through the Beagle Channel.', 'zambia2.jpg', 'Monday, April 22', 'Lower Zambezi National Park','There will be daily lectures on board from resident polar experts and keep an eye out for the first sightings of icebergs.', 'zambia3.jpg', 'Tuesday, April 23', 'Kafue National Park','Over the coming days you''ll discover some of the most unique wildlife and experience some
                            of the most inspiring scenery on the planet, as you head for the vast white wilderness of
                            Antarctica.', 'zambia4.jpg', 'Wednesday, April 24', 'Kafue National Park','A further day to encounter the unique wildlife and spectacular landscapes of the Great
                            White Continent.', 'zambia5.jpg', 'Thursday, April 25', 'Livingstone','A further day to encounter the unique wildlife and spectacular landscapes of the Great
                            White Continent.', 'zambia6.jpg', 'Friday, April 26', 'Antarctic Peninsula');


insert into user_trip(user_id, trip_id) values ('aleks', 2005);
insert into user_trip(user_id, trip_id) values ('aleks', 2006);
insert into user_trip(user_id, trip_id) values ('aleks', 2009);