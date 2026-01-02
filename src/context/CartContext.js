import { createContext, useContext, useReducer } from "react";
import { cartReducers } from "../reducers";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, cartInitialState);

  const addToCart = (product) => {
    const updatedCartList = [...state.cartList, product];
    const updatedTotal = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedCartList, total: updatedTotal },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (productInCart) => productInCart.id !== product.id,
    );
    const updatedTotal = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedCartList, total: updatedTotal },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
