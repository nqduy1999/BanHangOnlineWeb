
const initialState = {};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        user: action.user
      };
    case "DELETE":
      return {
        ...state,
        user: null
      };
    default:
      return state
  }
}
export default AuthenticationReducer;