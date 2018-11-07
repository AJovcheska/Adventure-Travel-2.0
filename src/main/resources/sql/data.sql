insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('aleks', 'jovcheska.aleksandra@yahoo.com', 'b8f57d6d6ec0a60dfe2e20182d4615b12e321cad9e2979e0b9f81e0d6eda78ad9b6dcfe53e4e22d1', true, 'Aleksandra Jovcheska', 23, 'Macedonia', 'F', 'Student', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('verche', 'jovcheska.vera@yahoo.com', 'd6dfa9ff45e03b161e7f680f35d90d5ef51d243c2a8285aa7e11247bc2c92acde0c2bb626b1fac74', true, 'Vera Jovcheska', 25, 'Macedonia', 'F', 'Professor', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('vale', 'jovcheska.valentina@yahoo.com', 'b8f57d6d6ec0a60dfe2e20182d4615b12e321cad9e2979e0b9f81e0d6eda78ad9b6dcfe53e4e22d1', true, 'Valentina Jovcheska', 49, 'Macedonia', 'F', 'Manager', '', '', '', '');

insert into authority (name) values ('role_user');
insert into authority (name) values ('role_admin');

insert into user_authority (username,authority) values ('vale', 'role_user');
insert into user_authority (username,authority) values ('verche', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_admin');

insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2000,'HIDDEN_CITIES','Europe','Italy','Rome behind locked doors',3425,'ArchitecturalWonders,HistoryAndMistery,PhotographyBomb',7,4.2,null,null,'City');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2001,'CRUISING','Antarctica','Antarctica','Antarctica classic',5471,'IceCold,MotherNature',9,3.9,null,null,'Cold place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2002,'SCIENCE_AND_NATURE','Asia','Nepal','Everest base camp trek',4611,'BikingAndHiking,MotherNature,IceCold,InTheMountains',18,4.5,null,null,'Mountain');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2003,'CRUISING','Europe','Norway','Cruise: Norwegian fjords',4331,'MotherNature,IceCold',15,5.0,null,null,'Cold place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2004,'HISTORY_AND_CULTURE','Africa','Morocco','Morocco’s mountains and medinas',3190,'AncientWonders,PhotographyBomb,FascinatingFauna,ArchitecturalWonders',11,4.7,null,null,'Historical place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2005,'HISTORY_AND_CULTURE','Asia','Iran','Ancient Persia, Modern Iran',4685,'PhotographyBomb,AncientWonders',12,4.5,null,null,'Historical place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2006,'HISTORY_AND_CULTURE','Asia','Mongolia','Wander Mongolia: Blue skies and endless steppe',2990,'bikingandhiking,PhotographyBomb,FarFarEast,FascinatingFauna',12,3.7,null,null,'City');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2007,'HIDDEN_CITIES','Europe','Spain','Barcelona behind the scenes',3475,'PhotographyBomb',6,4.2,null,null,'City');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2008,'SCIENCE_AND_NATURE','South America','Brazil','Brazilian wildlife',4098,'PhotographyBomb,FascinatingFauna,MotherNature',9,5.0,null,null,'Tropical place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2009,'HIDDEN_CITIES','Asia','Jordan','Petra: Lost city of Arabia',2274,'PhotographyBomb,ArchitecturalWonders,HistoryAndMistery',10,4.1,null,null,'Historical place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2010,'SCIENCE_AND_NATURE','Africa','Rwanda','Gorillas in Africa''s midst',6549,'PhotographyBomb,FascinatingFauna,MotherNature',13,3.5,null,null,'Tropical place');
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign, destination) values (2011,'SCIENCE_AND_NATURE','Africa','Zambia','Wild zambian safari',6538,'PhotographyBomb,FascinatingFauna,MotherNature',11,4.8,null,null,'Tropical place');


insert into user_trip(id, user_id, trip_id) values (1000, 'aleks', 2001);
insert into user_trip(id, user_id, trip_id) values (1001, 'aleks', 2005);
insert into user_trip(id, user_id, trip_id) values (1002, 'aleks', 2006);
insert into user_trip(id, user_id, trip_id) values (1003, 'aleks', 2009);