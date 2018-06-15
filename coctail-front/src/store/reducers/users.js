import {LOGIN_FACEBOOK_FAILURE, LOGIN_FACEBOOK_SUCCESS, LOGOUT_USER} from "../actions/actionTypes";


const initialState = {
  registerError: null,
  loginError: null,
  user: null,
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FACEBOOK_SUCCESS:
      return {...state, user: action.user, token: action.token, loginError: null};
    case LOGIN_FACEBOOK_FAILURE:
      return {...state, loginError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    default:
      return state;
  }
};

export default reducer;