
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
        case "CLICK_CUSTOMER_1":
          return {
            ...state,
            customer: action.customer
          }
      case "GET_ID_ORDER":
          return {
            ...state,
            order: action.order
          }
      case "CANCEL":
            return {};
    default:
      return state
  }
}
export default AdminReducer;