import {put} from 'redux-saga/effects';
import {push} from "react-router-redux";

import axios from '../../axios-api';
import {createCocktailSuccess, fetchCocktailsSuccess} from "../actions/cocktails";

export function* createCocktailSaga(action) {

    console.log(action.token)
  yield axios.post('/cocktails', action.cocktailData, {headers: {'Token': action.token}});
  yield put(createCocktailSuccess());
  yield put(push('/'));
}

export function* fetchCocktailSaga() {
  const response = yield axios.get('/cocktails');
  yield put(fetchCocktailsSuccess(response.data))
}