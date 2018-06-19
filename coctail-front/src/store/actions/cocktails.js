import axios from '../../axios-api';
import {CREATE_COCKTAIL_SUCCESS, FETCH_COCKTAIL_SUCCESS, FETCH_ONE_COCKTAIL_SUCCESS} from "./actionTypes";
import {push} from "react-router-redux";


export const fetchCocktailsSuccess = cocktails => {
  return {type: FETCH_COCKTAIL_SUCCESS, cocktails};
};

export const fetchCocktails = () => {
  return dispatch => {
      return axios.get('/cocktails').then(
          response => dispatch(fetchCocktailsSuccess(response.data))
      )
  };
};

export const createCocktailSuccess = () => {
  return {type: CREATE_COCKTAIL_SUCCESS};
};

export const  createCocktail = (cocktailData) => {
  return (dispatch, getState) => {
      const token = getState().users.user.token;
      console.log(token)
      const headers = {'Auth-Token': token};
      return axios.post('/cocktails', cocktailData, {headers}).then(
          response => {
              dispatch(createCocktailSuccess());
              dispatch(push('/'));
          }

      )
  }
};

export const fetchOneCocktailSuccess = (cocktail) => {
    return {type: FETCH_ONE_COCKTAIL_SUCCESS, cocktail}
};

export const getOneCocktail = (id) => {
    return dispatch => {
        return axios.get('/cocktails/' + id).then(
            response => {
                dispatch(fetchOneCocktailSuccess(response.data))
            }
        )
    }
};
