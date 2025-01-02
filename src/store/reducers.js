/* eslint-disable no-unused-vars */
import { ADD_TO_CART, CHECKOUT_CART, FILTER_BY_CATEGORY, FILTER_BY_PRICE, GET_CATEGORIES, REMOVE_FROM_CART, SET_PRODUCTS, UPDATE_FROM_CART } from "./actions";

const initialState = {
  products: [],
  filtredProducts: [],
  cart: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filtredProducts: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload)
      };
    case UPDATE_FROM_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CHECKOUT_CART:
      return {
        ...state,
        cart: []
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        products: state.products.slice().sort((a, b) => {
          if (action.payload.type === "") {
            return a.id - b.id;
          }
          if (action.payload === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        })
      };
    case FILTER_BY_CATEGORY:
      if (action.payload === "All") {
        return {
          ...state,
          products: state.filtredProducts,
        };
      } else {
        return {
          ...state,
          products: state.filtredProducts.filter(product => product.category === action.payload)
        };
      }
    default:
      return state;
  }
};

export default productsReducer;