export const initialState = {
  carts: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, { ...action.payload, quantity: 1 }],
      };
    case "INCREMENT_CART_PRODUCT":
      return {
        carts: state.carts.map((cartProduct) => {
          if (cartProduct.id === action.payload.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          }
          return cartProduct;
        }),
      };

    case "DECREMENT_CART_PRODUCT":
      return {
        carts: state.carts.map((cartProduct) => {
          if (cartProduct.id === action.payload.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};
