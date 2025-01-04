export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_FROM_CART = 'UPDATE_FROM_CART';
export const CHECKOUT_CART = 'CHECKOUT_CART';
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateFromCart = (id, quantity) => ({
  type: UPDATE_FROM_CART,
  payload: { id, quantity },
});


export const checkoutCart = () => ({
  type: CHECKOUT_CART,
});


export const filterByPrice = (order) => ({
  type: FILTER_BY_PRICE,
  payload: order,
});


export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});

export const getCagetories = () => ({
  type: GET_CATEGORIES,
});