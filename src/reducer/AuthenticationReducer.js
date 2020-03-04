import Cookies from 'js-cookie';

const initialState = Cookies.get('username') ? Cookies.get('username') : "";

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        username: action.username
      };
    default:
      return state
  }
}
export default AuthenticationReducer;