
const initialState = {};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGEPRODUCT":
      return {
        ...state,
        pageProduct: action.pageProduct
      };
    case "DELETE_PAGEPRODUCT":
      return {};
    default:
      return state
  }
}
export default ProductReducer;