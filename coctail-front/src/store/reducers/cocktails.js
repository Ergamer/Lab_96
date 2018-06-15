import {FETCH_COCKTAIL_SUCCESS} from "../actions/actionTypes";

const initialState = {
  cocktails: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_SUCCESS:
      return {...state, cocktails: action.cocktails};
    default:
      return state;
  }
};

export default reducer;