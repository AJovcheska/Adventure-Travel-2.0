var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

const GET_ALL_DESTINATIONS_URL = "http://localhost:8080/api/nonsecured/trips/selected";

const GET_DESTINATION_BY_ID_URL = "http://localhost:8080/api/nonsecured/trips/id";

const REGISTER_USER_URL = "http://localhost:8080/api/nonsecured/users/register";

const LOGIN_USER_URL = "http://localhost:8080/api/secure/trips/";

const GET_DESTINATIONS_BY_TAG_URL = "http://localhost:8080/api/nonsecured/trips/tag?";

const GET_TOKEN_URL = "http://localhost:8080/api/oauth/token";

const GET_TRIPS_USER_URL = "http://localhost:8080/api/secure/trips";

const GET_TRIPS_USER_NONSECURE_URL = "http://localhost:8080/api/nonsecured/trips";

const GET_USER_BY_USERNAME_URL = "http://localhost:8080/api/secure/users/";

const DELETE_TRIP_URL = "http://localhost:8080/api/nonsecured/remove/trip?";

const UPDATE_INFO_URL = "http://localhost:8080/api/nonsecured/update?";

const ADD_TRIP_FOR_USER_URL = "http://localhost:8080/api/nonsecured/add/trip?";

const ADD_TRIP_URL = "http://localhost:8080/api/nonsecured/trip";

const UPDATE_SEATS_URL = "http://localhost:8080/api/nonsecured/update/seats?";

const EDIT_TRIP_URL = "http://localhost:8080/api/nonsecured/edit/trip";

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getTrips: function(categories, regions, sortBy, userDestination) {
    var params = new URLSearchParams();
    for (var i = 0; i < categories.length; i++) {
      params.append("category", categories[i]);
    }

    for (var i = 0; i < regions.length; i++) {
      params.append("region", regions[i]);
    }
    params.append("sortBy", sortBy);
    params.append("ascending", true);
    params.append("destination", userDestination);
    return axios.get(GET_ALL_DESTINATIONS_URL,
      {
        params: params
      }).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res;
      }
    });
  },
  getTripById: function(id) {
    var params = new URLSearchParams();
    params.append("id", id);
    return axios.get(GET_DESTINATION_BY_ID_URL,
      {
        params: params
      }).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res;
      }
    });
  },
  registerUser: function(username,name, age, password, country, email, sex,
    profession) {
    return axios.post(REGISTER_USER_URL,
      {
        username: username,
        name: name,
        age: age,
        password: password,
        country: country,
        email: email,
        sex: sex,
        profession: profession
      },
      { headers: {"Content-Type": "application/json"}
      }) .then(r => console.log(r.status))
    .catch(e => console.log(e));
  },
  getRefreshToken: function(username, password) {
    var encodedEmail = decodeURIComponent(username);
    var encodedPassword = decodeURIComponent(password);
    var refreshTokenUrl = `${GET_TOKEN_URL}?username=${encodedEmail}&password=${encodedPassword}&grant_type=password`;
    return axios.get(refreshTokenUrl, {
      auth: {
        username: 'aleks',
        password: 'secret'
      }
    }).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.refresh_token;
      }
    }).catch(e => console.log(e));
  },
  getAccessToken: function(refreshToken) {
    var encodedRefreshToken = decodeURIComponent(refreshToken);
    var accessTokenUrl = `${GET_TOKEN_URL}?grant_type=refresh_token&refresh_token=${encodedRefreshToken}`;
    return axios.get(accessTokenUrl, {
        auth: {
          username: 'aleks',
          password: 'secret'
        }
      }).then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.access_token;
        }
      }).catch(e => console.log(e));
  },
  loginUser: function(accessToken, username) {
    var encodedAccessToken = decodeURIComponent(accessToken);
    var encodedUsername = decodeURIComponent(username);
    var config = {
          headers: {'Authorization': "bearer " + encodedAccessToken}
        };
    var tripsUserUrl = `${GET_TRIPS_USER_URL}/${encodedUsername}`;
    return axios.get(tripsUserUrl, config).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }).catch(function (error) {
      if (error.response) {
        return error.response.status;
      }
    });
  },
  getTripsByUser: function(username) {
    var encodedUsername = decodeURIComponent(username);
    var tripsUserUrl = `${GET_TRIPS_USER_NONSECURE_URL}/${encodedUsername}`;
    return axios.get(tripsUserUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }).catch(function (error) {
      if (error.response) {
        return error.response.status;
      }
    });
  },
  getTripsByTag: function(tag) {
    var params = new URLSearchParams();
    params.append("tag", tag);
    return axios.get(GET_DESTINATIONS_BY_TAG_URL,
      {
        params: params
      }).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res;
      }
    });
  },
  getUserByUsername: function(accessToken, username) {
    var encodedAccessToken = decodeURIComponent(accessToken);
    var encodedUsername = decodeURIComponent(username);
    var config = {
          headers: {'Authorization': "bearer " + encodedAccessToken}
        };
    var tripsUserUrl = `${GET_USER_BY_USERNAME_URL}${encodedUsername}`;
    return axios.get(tripsUserUrl, config).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }).catch(function (error) {
      if (error.response) {
        return error.response.status;
      }
    });
  },
  removeTripFromUser: function(username, id) {
    var encodedId = decodeURIComponent(id);
    var encodedUsername = decodeURIComponent(username);

    var params = new URLSearchParams();
    params.append("username", encodedUsername);
    params.append("id", encodedId);
    return axios.delete(DELETE_TRIP_URL,
      {
        params: params
      }).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res;
      }
    }).catch(function (error) {
      if (error.response) {
        return error.response.status;
      }
    });
  },
  addTripForUser: function(username, id) {
    var encodedId = decodeURIComponent(id);
    var encodedUsername = decodeURIComponent(username);

    var params = new URLSearchParams();
    params.append("username", encodedUsername);
    params.append("id", encodedId);
    var refreshTokenUrl = `${ADD_TRIP_FOR_USER_URL}username=${encodedUsername}&id=${encodedId}`;
    return axios.put(refreshTokenUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res;
      }
    }).catch(function (error) {
      if (error.response) {
        return error.response.status;
      }
    });
  },
  updateAdditionalInfo: function(username, destination, entertainment, tripLength, tripCompanion) {
    var encodedUsername = decodeURIComponent(username);
    var encodedDestination = decodeURIComponent(destination);
    var encodedEntertainment = decodeURIComponent(entertainment);
    var encodedtripLength = decodeURIComponent(tripLength);
    var encodedtripCompanion = decodeURIComponent(tripCompanion);
    var url = `${UPDATE_INFO_URL}username=${encodedUsername}&entertainment=${encodedEntertainment}&destination=${encodedDestination}&tripLength=${encodedtripLength}&tripCompanion=${encodedtripCompanion}`;
    return axios.put(UPDATE_INFO_URL, {
      username: username,
      destination: destination,
      entertainment: entertainment,
      tripLength: tripLength,
      tripCompanion: tripCompanion
    },
    { headers: {"Content-Type": "application/json"}
    }) .then(r => console.log(r.status))
      .catch(e => console.log(e));
  },
  addTrip: function(category,region,country,title,price,tags,duration,departure_date,end_date_to_sign,destination,description,highlights, image) {
    return axios.post(ADD_TRIP_URL,
      {
        category: category,
        country: country,
        region: region,
        title: title,
        price: price,
        tags: tags,
        duration: duration,
        rating: 0,
        departureDate: departure_date,
        end_date_to_sign: end_date_to_sign,
        destination: destination,
        description: description,
        highlights: highlights,
        image: image
      },
      { headers: {"Content-Type": "application/json"}
      }) .then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res;
        }
      }).catch(e => console.log(e));
  },
  updateSeats: function(tripId, number) {
    var encodedTripId = decodeURIComponent(tripId);
    var encodedNumber = decodeURIComponent(number);
    var url = `${UPDATE_SEATS_URL}tripId=${encodedTripId}&number=${encodedNumber}`;
    return axios.put(url,
      { headers: {"Content-Type": "application/json"}
      }) .then(r => console.log(r.status))
      .catch(e => console.log(e));
  },
  editTripById: function(id, country, title, duration, price, date, highlights, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix,
                         dateOne, dateTwo, dateThree, dateFour, dateFive, dateSix,
                         titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix) {

    return axios.put(EDIT_TRIP_URL,
      {
        id: id,
        country: country,
        duration: duration,
        price: price,
        duration_date: date,
        title: title,
        highlights: highlights,
        dayOne: dayOne,
        dayTwo: dayTwo,
        dayThree: dayThree,
        dayFour: dayFour,
        dayFive: dayFive,
        daySix: daySix,
        dateOne: dateOne,
        dateTwo: dateTwo,
        dateThree: dateThree,
        dateFour: dateFour,
        dateFive: dateFive,
        dateSix: dateSix,
        titleOne: titleOne,
        titleTwo: titleTwo,
        titleThree: titleThree,
        titleFour: titleFour,
        titleFive: titleFive,
        titleSix: titleSix
      },
      { headers: {"Content-Type": "application/json"}
      }) .then(r => console.log(r.status))
      .catch(e => console.log(e));
  }
}
