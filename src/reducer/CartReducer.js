
const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_INVENTORY":
      return {
        ...state,
        inventory: action.inventory
      };
    default:
      return state
  }
}
export default CartReducer;