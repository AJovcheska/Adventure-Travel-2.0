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

create table trip (

  id number(19,0) not null,

  category varchar2 (40),
  region varchar2 (40),
  country varchar2 (40),
  title varchar2(70),
  price number (19,0),
  tags varchar2 (150),
  duration number (5, 0),
  rating decimal (3, 0),
  departure_date date,
  end_date_to_sign date,
  destination varchar2(40),

  primary key (id)
);

create table user_trip (
  id number(19,0) not null,
  user_id varchar2(30),
  trip_id number(19,0),

  primary key (id),
  foreign key (user_id) references user(username),
  foreign key (trip_id) references trip(id)
);