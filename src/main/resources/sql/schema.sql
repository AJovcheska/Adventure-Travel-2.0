create table user (
  username varchar(50) not null primary key,
  email varchar(100),
  password varchar(500),
  name varchar2 (20),
  age number(19,0),
  country varchar2 (40),
  sex varchar2 (10),
  profession varchar2 (40),
  trip_companion varchar2 (40),
  entertainment varchar2 (40),
  trip_length varchar2 (40),
  destination varchar2 (40),
  activated boolean default false,
  activationkey varchar(50) default null,
  resetpasswordkey varchar(50) default null
);

create table authority (
  name varchar(50) not null primary key
);

create table user_authority (
    username varchar(50) not null,
    authority varchar(50) not null,
    foreign key (username) references user (username),
    foreign key (authority) references authority (name),
    unique index user_authority_idx_1 (username, authority)
);

create table oauth_access_token (
  token_id varchar(256) default null,
  token blob,
  authentication_id varchar(256) default null,
  user_name varchar(256) default null,
  client_id varchar(256) default null,
  authentication blob,
  refresh_token varchar(256) default null
);

create table oauth_refresh_token (
  token_id varchar(256) default null,
  token blob,
  authentication blob
);

create sequence trip_seq
 start with     2000
 increment by   1
 nocache
 nocycle;

create table trip (

  id number(19,0) not null default nextval('trip_seq'),

  category varchar2 (90),
  region varchar2 (90),
  country varchar2 (90),
  title varchar2(70),
  price number (19,0),
  tags varchar2 (400),
  duration number (5, 0),
  rating decimal (3, 0),
  departure_date varchar2(50),
  end_date_to_sign date,
  destination varchar2(40),
  description varchar2(2000),
  highlights varchar2(1000),
  image varchar2(200),
  availableSeats number (19, 0),
  dayOne varchar2(1000),
  imageOne varchar2(200),
  titleOne varchar2(100),
  dateOne varchar2(100),
  dayTwo varchar2(1000),
  imageTwo varchar2(200),
  titleTwo varchar2(100),
  dateTwo varchar2(100),
  dayThree varchar2(1000),
  imageThree varchar2(200),
  titleThree varchar2(100),
  dateThree varchar2(100),
  dayFour varchar2(1000),
  imageFour varchar2(200),
  titleFour varchar2(100),
  dateFour varchar2(100),
  dayFive varchar2(1000),
  imageFive varchar2(200),
  titleFive varchar2(100),
  dateFive varchar2(100),
  daySix varchar2(1000),
  imageSix varchar2(200),
  titleSix varchar2(100),
  dateSix varchar2(100),

  primary key (id)
);

create sequence user_trip_seq
 start with     1000
 increment by   1
 nocache
 nocycle;

create table user_trip (
  id number(19,0) not null default nextval('user_trip_seq'),
  user_id varchar2(30),
  trip_id number(19,0),

  primary key (id),
  foreign key (user_id) references user(username),
  foreign key (trip_id) references trip(id)
);