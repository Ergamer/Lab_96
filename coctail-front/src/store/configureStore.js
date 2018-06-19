import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import userReducer from "./reducers/users";
import cocktailReducer from "./reducers/cocktails";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
  users: userReducer,
  cocktails: cocktailReducer,
  routing: routerReducer
});

export const history = createHistory();


const middleware = [
    thunkMiddleware,
  routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveState({
    users: store.getState().users
  });
});

export default store;