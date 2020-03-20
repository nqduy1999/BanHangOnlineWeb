
const initialState = {};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        product: action.product
      };
    default:
      return state
  }
}
export default AdminReducer;