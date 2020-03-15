const AddressReducer = (state = 0, action) => {
    switch (action.type) {
      case "SET_ADDRESS":
        return {
          ...state,
          address: action.address
        };
      default:
        return state
    }
  }
  export default AddressReducer;