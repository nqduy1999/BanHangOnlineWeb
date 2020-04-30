const initialState = {
  product: null
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      state.product = action.product;
      return {
        ...state,
      };
    case "CLICK_CUSTOMER":
      return {
        ...state,
        customer: action.customer,
      };
    case "CLICK_CUSTOMER_1":
      return {
        ...state,
        customer: action.customer,
      };
    case "GET_ID_ORDER":
      return {
        ...state,
        order: action.order,
      };
    case "CANCEL":
      state.product = action.product;
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default AdminReducer;
