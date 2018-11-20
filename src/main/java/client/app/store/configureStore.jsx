var redux = require('redux');
var {setLoggedUserReducer, setIsUserLoggedReducer, setAccessTokenReducer,
  setTripsForLoggedUserReducer, setUserObjectReducer, setIsAdditionalDataSetReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    setLoggedUser: setLoggedUserReducer,
    setIsUserLogged: setIsUserLoggedReducer,
    setAccessToken: setAccessTokenReducer,
    setTripsForLoggedUser: setTripsForLoggedUserReducer,
    setUserObject: setUserObjectReducer,
    setIsAdditionalDataSet: setIsAdditionalDataSetReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
