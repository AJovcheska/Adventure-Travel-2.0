export var setLoggedUserReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return action.username;
    default:
      return state;
  }
};

export var setIsUserLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_USER_LOGGED':
      return action.isUserLogged;
    default:
      return state;
  }
};

export var setAccessTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return action.accessToken;
    default:
      return state;
  }
};

export var setTripsForLoggedUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRIPS_FOR_LOGGED_USER':
      return action.trips;
    case 'ADD_TRIP_FOR_USER':
      return {
        trips: [
          action.trips
        ]
      };
    default:
      return state;
  }
};

export var setUserObjectReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_OBJECT':
      return action.user;
    default:
      return state;
  }
};

