import {
  LOGIN_FACEBOOK,
  LOGIN_FACEBOOK_FAILURE,
  LOGIN_FACEBOOK_SUCCESS, LOGOUT_USER,
} from "./actionTypes";

export const loginFacebookSuccess = (user, token) => {
  return {type: LOGIN_FACEBOOK_SUCCESS, user, token};
};

export const loginFacebookFailure = error => {
  return {type: LOGIN_FACEBOOK_FAILURE, error};
};

export const loginFacebook = (data, token )=> {
  console.log(token)
  return {type: LOGIN_FACEBOOK, data, token};
};

export const logoutUser = () => {
  return {type: LOGOUT_USER}
};

