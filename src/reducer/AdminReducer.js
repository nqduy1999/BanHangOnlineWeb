
const initialState = {};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        product: action.product
      };
      case "CLICK_CUSTOMER":
        return {
          ...state,
          customer: action.customer
        }
    default:
      return state
  }
}
export default AdminReducer;