import {put} from 'redux-saga/effects';
import {push} from "react-router-redux";

import axios from '../../axios-api';
import {createCocktailSuccess, fetchCocktailsSuccess} from "../actions/cocktails";

export function* createCocktailSaga(cocktailData, token) {
  yield axios.post('/cocktails', cocktailData, {headers: {'Token': token}});
  yield put(createCocktailSuccess());
  yield put(push('/'));
}

export function* fetchCocktailSaga() {
  const response = yield axios.get('/cocktails');
  yield put(fetchCocktailsSuccess(response.data))
}