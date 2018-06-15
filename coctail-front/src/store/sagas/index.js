import {takeEvery} from 'redux-saga/effects';
import {LOGIN_FACEBOOK} from "../actions/actionTypes";
import {loginFacebookSaga} from "./users";

export function* watchLoginFacebook() {
  yield takeEvery(LOGIN_FACEBOOK, loginFacebookSaga);
}