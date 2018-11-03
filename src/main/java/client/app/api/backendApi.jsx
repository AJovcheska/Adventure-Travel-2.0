var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

const GET_ALL_DESTINATIONS_URL = "http://localhost:8080/api/nonsecured/trips/selected";

const GET_DESTINATION_BY_ID_URL = "http://localhost:8080/api/nonsecured/trips/id";

const REGISTER_USER_URL = "http://localhost:8080/api/nonsecured/users/register";

const LOGIN_USER_URL = "http://localhost:8080/api/secure/trips/";

const GET_DESTINATIONS_BY_TAG_URL = "http://localhost:8080/api/nonsecured/trips/tag?";

const GET_TOKEN_URL = "http://localhost:8080/api/oauth/token";

const GET_TRIPS_USER_URL = "http://localhost:8080/api/secure/trips";

const GET_USER_BY_USERNAME_URL = "http://localhost:8080/api/secure/users/";

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
  getTrips: function(categories, regions, sortBy) {
    var params = new URLSearchParams();
    for (var i = 0; i < categories.length; i++) {
      params.append("category", categories[i]);
    }

    for (var i = 0; i < regions.length; i++) {
      params.append("region", regions[i]);
    }
    params.append("sortBy", sortBy);
    params.append("ascending", true);
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
    profession, tripCompanion, entertainment, tripLength, destination) {
    return axios.post(REGISTER_USER_URL,
      {
        username: username,
        name: name,
        age: age,
        password: password,
        country: country,
        email: email,
        sex: sex,
        profession: profession,
        tripCompanion: tripCompanion,
        entertainment: entertainment,
        tripLength: tripLength,
        destination:destination
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
  }
}
