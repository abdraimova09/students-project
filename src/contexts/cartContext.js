import React, { useReduce, useReducer } from "react";
import Cart from "../components/Cart/Cart";
import { CASE_GET_CART } from "../helpers/cases";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: {},
  cartLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        cart: action.payload,
        cartLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: CASE_GET_CART,
      payload: cart,
    });
  }

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    cart.products.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLength: state.cartLength,
        getCart,
        addProductToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
