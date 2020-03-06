
const CartReducer = (state = 0, action) => {
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