export const filterReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_PRODUCT_LIST":
      return {
        ...state,
        productList: payload.products,
      };

    case "SORT_BY":
      return {
        ...state,
        sortBy: payload.order,
      };

    case "RATING":
      return {
        ...state,
        rating: payload.rating,
      };

    case "BEST_SELLER_ONLY":
      return {
        ...state,
        bestSellerOnly: payload.value,
      };

    case "IN_STOCK_ONLY":
      return {
        ...state,
        inStockOnly: payload.value,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: null,
        rating: null,
        bestSellerOnly: false,
        inStockOnly: false,
      };

    default:
      throw new Error(`Invalid action type: ${type}`);
  }
};
