import {FETCH_COCKTAIL_SUCCESS, FETCH_ONE_COCKTAIL_SUCCESS} from "../actions/actionTypes";

const initialState = {
  cocktails: [],
  cocktail: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_SUCCESS:
      return {...state, cocktails: action.cocktails};
    case FETCH_ONE_COCKTAIL_SUCCESS:
        return {...state, cocktail: action.cocktail};
    default:
      return state;
  }
};

export default reducer;