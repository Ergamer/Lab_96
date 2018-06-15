import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga';

import userReducer from "./reducers/users";
import {watchLoginFacebook} from "./sagas";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
  users: userReducer,
  routing: routerReducer
});

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(watchLoginFacebook);

store.subscribe(() => {
  saveState({
    users: store.getState().users
  });
});

export default store;