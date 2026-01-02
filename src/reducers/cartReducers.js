export const cartReducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: payload.products,
        total: payload.total,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: payload.products,
        total: payload.total,
      };
    case "CLEAR_CART":
      return {
        cartList: [],
        total: 0,
      };
    case "UPDATE_TOTAL":
      return;
    default:
      throw new Error(`Unhandled action type: ${type} in cartReducers`);
  }
};
