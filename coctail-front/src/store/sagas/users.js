import {put} from 'redux-saga/effects';

import axios from "../../axios-api";
import {push} from "react-router-redux";
import {NotificationManager} from "react-notifications";
import {loginFacebookSuccess, loginFacebookFailure} from "../actions/users";

export function* loginFacebookSaga(action) {
  try {
    let response = yield axios.post('/users/facebookLogin', action.data);
    yield put(loginFacebookSuccess(response.data.user, action.token));
    yield put(push('/'));
    yield NotificationManager.success('Logged in with Facebook!', 'Success');
  } catch (error) {
    yield put(loginFacebookFailure(error.response.data));
  }
}