import {takeEvery} from 'redux-saga/effects';
import {CREATE_COCKTAIL, FETCH_COCKTAILS, LOGIN_FACEBOOK} from "../actions/actionTypes";
import {loginFacebookSaga} from "./users";
import {createCocktailSaga, fetchCocktailSaga} from "./cocktails";

export function* watchLoginFacebook() {
  yield takeEvery(LOGIN_FACEBOOK, loginFacebookSaga);
  yield takeEvery(CREATE_COCKTAIL, createCocktailSaga);
  yield takeEvery(FETCH_COCKTAILS, fetchCocktailSaga)
}