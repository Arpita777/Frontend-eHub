import { createContext, useContext, useReducer } from "react";
import { filterReducers } from "../reducers";

const filterInitialState = {
  productList: [],
  bestSellerOnly: false,
  inStockOnly: false,
  rating: null,
  sortBy: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducers, filterInitialState);

  const setProductList = (products) =>
    dispatch({ type: "FETCH_PRODUCT_LIST", payload: { products } });

  const sortBy = (order) => dispatch({ type: "SORT_BY", payload: { order } });

  const filterByRating = (rating) =>
    dispatch({ type: "RATING", payload: { rating } });

  const toggleBestSeller = (value) =>
    dispatch({ type: "BEST_SELLER_ONLY", payload: { value } });

  const toggleInStock = (value) =>
    dispatch({ type: "IN_STOCK_ONLY", payload: { value } });

  const clearFilters = () => dispatch({ type: "CLEAR_FILTERS" });

  return (
    <FilterContext.Provider
      value={{
        productList: state.productList,
        sortByValue: state.sortBy,
        rating: state.rating,
        bestSellerOnly: state.bestSellerOnly,
        inStockOnly: state.inStockOnly,

        setProductList,
        sortBy,
        filterByRating,
        toggleBestSeller,
        toggleInStock,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
