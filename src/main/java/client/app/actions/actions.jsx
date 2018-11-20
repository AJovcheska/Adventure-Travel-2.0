export var setLoggedUser = (username) => {
  return {
    type: 'SET_LOGGED_USER',
    username,
  };
};

export var setIsUserLogged = (isUserLogged) => {
  return {
    type: 'SET_IS_USER_LOGGED',
    isUserLogged
  }
};

export var setAccessToken = (accessToken) => {
  return {
    type: 'SET_ACCESS_TOKEN',
    accessToken
  }
};

export var setTripsForLoggedUser = (trips) => {
  return {
    type: 'SET_TRIPS_FOR_LOGGED_USER',
    trips
  }
};

export var setUserObject = (user) => {
  return {
    type: 'SET_USER_OBJECT',
    user
  }
};

export var addTripForUser = (username, trips, trip) => {
  return {
    type: 'ADD_TRIP_FOR_USER',
    trips,
    username,
    trip
  }
};

export var setAdditionalDataSet = (additionalDataSet) => {
  return {
    type: 'SET_ADDITIONAL_DATA_SET',
    additionalDataSet
  }
};

