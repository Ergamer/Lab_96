import {CREATE_COCKTAIL, CREATE_COCKTAIL_SUCCESS, FETCH_COCKTAIL_SUCCESS, FETCH_COCKTAILS} from "./actionTypes";


export const fetchCocktailsSuccess = cocktails => {
  return {type: FETCH_COCKTAIL_SUCCESS, cocktails};
};

export const fetchCocktails = () => {
  return {type: FETCH_COCKTAILS};
};

export const createCocktailSuccess = (cocktailData, token) => {
  return {type: CREATE_COCKTAIL_SUCCESS, cocktailData, token};
};

export const  createCocktail = () => {
  return {type: CREATE_COCKTAIL};
};