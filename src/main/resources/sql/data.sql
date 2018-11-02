insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('aleks', 'jovcheska.aleksandra@yahoo.com', 'b8f57d6d6ec0a60dfe2e20182d4615b12e321cad9e2979e0b9f81e0d6eda78ad9b6dcfe53e4e22d1', true, 'Aleksandra Jovcheska', 23, 'Macedonia', 'F', 'Student', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('verche', 'jovcheska.vera@yahoo.com', 'd6dfa9ff45e03b161e7f680f35d90d5ef51d243c2a8285aa7e11247bc2c92acde0c2bb626b1fac74', true, 'Vera Jovcheska', 25, 'Macedonia', 'F', 'Professor', '', '', '', '');
insert into user (username, email, password, activated, name, age, country, sex, profession, destination, trip_length, trip_companion, entertainment) values ('vale', 'jovcheska.valentina@yahoo.com', 'd6dfa9ff45e03b161e7f680f35d90d5ef51d243c2a8285aa7e11247bc2c92acde0c2bb626b1fac74', true, 'Valentina Jovcheska', 49, 'Macedonia', 'F', 'Manager', '', '', '', '');

insert into authority (name) values ('role_user');
insert into authority (name) values ('role_admin');

insert into user_authority (username,authority) values ('vale', 'role_user');
insert into user_authority (username,authority) values ('verche', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_user');
insert into user_authority (username,authority) values ('aleks', 'role_admin');

insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2000,'HIDDEN_CITIES','EUROPE','ITALY','Rome behind locked doors',3425,'ArchitecturalWonders,HistoryAndMistery,PhotographyBomb',7,4.2,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2001,'CRUISING','ANTARCTICA','ANTARCTICA','Antarctica classic',5471,'IceCold,MotherNature',9,3.9,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2002,'SCIENCE_AND_NATURE','ASIA','NEPAL','Everest base camp trek',4611,'BikingAndHiking,MotherNature,IceCold,InTheMountains',18,4.5,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2003,'CRUISING','EUROPE','NORWAY','Cruise: Norwegian fjords',4331,'MotherNature,IceCold',15,5.0,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2004,'HISTORY_AND_CULTURE','AFRICA','MOROCCO','Morocco’s mountains, medinas, and desert oases',3190,'AncientWonders,PhotographyBomb,FascinatingFauna,ArchitecturalWonders',11,4.7,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2005,'HISTORY_AND_CULTURE','ASIA','IRAN','Ancient Persia, Modern Iran',4685,'PhotographyBomb,AncientWonders',12,4.5,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2006,'HISTORY_AND_CULTURE','ASIA','MONGOLIA','Wander Mongolia: Blue skies and endless steppe',2990,'bikingandhiking,PhotographyBomb,FarFarEast,FascinatingFauna',12,3.7,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2007,'HIDDEN_CITIES','EUROPE','SPAIN','Barcelona behind the scenes',3475,'PhotographyBomb',6,4.2,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2008,'SCIENCE_AND_NATURE','SOUTH AMERICA','BRAZIL','Brazilian wildlife',4098,'PhotographyBomb,FascinatingFauna,MotherNature',9,5.0,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2009,'HIDDEN_CITIES','ASIA','JORDAN','Jordan: Lost city of Arabia',2274,'PhotographyBomb,ArchitecturalWonders,HistoryAndMistery',10,4.1,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2010,'SCIENCE_AND_NATURE','AFRICA','RWANDA','Gorillas in Africa''s midst',6549,'PhotographyBomb,FascinatingFauna,MotherNature',13,3.5,null,null);
insert into trip (id,category,region,country,title,price,tags,duration,rating,departure_date,end_date_to_sign) values (2011,'SCIENCE_AND_NATURE','AFRICA','ZAMBIA','Wild zambian safari',6538,'PhotographyBomb,FascinatingFauna,MotherNature',11,4.8,null,null);


insert into user_trip(id, user_id, trip_id) values (1000, 'aleks', 2001);
insert into user_trip(id, user_id, trip_id) values (1001, 'aleks', 2005);
insert into user_trip(id, user_id, trip_id) values (1002, 'aleks', 2006);
insert into user_trip(id, user_id, trip_id) values (1003, 'aleks', 2009);