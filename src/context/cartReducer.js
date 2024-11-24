import { produce } from "immer";

export const initialState = {
  carts: [],
};

//

export const cartReducer = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const findProduct = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (findProduct) {
          findProduct.quantity += action.payload.quantity;
        } else {
          draft.carts.push(action.payload);
        }
        break;
      }

      case "INCREMENT_CART_PRODUCT": {
        const findProduct = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );

        findProduct.quantity += 1;

        break;
      }

      case "DECREMENT_CART_PRODUCT": {
        const findProduct = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        findProduct.quantity -= 1;
        break;
      }

      case "REMOVE_FROM_CART": {
        draft.carts = draft.carts.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        break;
      }

      case "CLEAR_CART": {
        draft.carts = [];
        break;
      }
    }
  });
  // switch (action.type) {
  //   case "ADD_TO_CART":
  //     const findProduct = state.carts.find(
  //       (cartItem) => cartItem.id === action.payload.id
  //     );
  //     if (findProduct) {
  //       return {
  //         ...state,
  //         carts: state.carts.map((cartProduct) =>
  //           cartProduct.id === action.payload.id
  //             ? {
  //                 ...cartProduct,
  //                 quantity: cartProduct.quantity + action.payload.quantity,
  //               }
  //             : cartProduct
  //         ),
  //       };
  //     }
  //     return {
  //       ...state,
  //       carts: [...state.carts, { ...action.payload }],
  //     };
  //   case "INCREMENT_CART_PRODUCT":
  //     return {
  //       carts: state.carts.map((cartProduct) => {
  //         if (cartProduct.id === action.payload.id) {
  //           return {
  //             ...cartProduct,
  //             quantity: cartProduct.quantity + 1,
  //           };
  //         }
  //         return cartProduct;
  //       }),
  //     };

  //   case "DECREMENT_CART_PRODUCT":
  //     return {
  //       carts: state.carts.map((cartProduct) => {
  //         if (cartProduct.id === action.payload.id) {
  //           return {
  //             ...cartProduct,
  //             quantity: cartProduct.quantity - 1,
  //           };
  //         }
  //         return cartProduct;
  //       }),
  //     };

  //   case "REMOVE_FROM_CART":
  //     return {
  //       ...state,
  //       carts: state.carts.filter((cartItem) => cartItem.id !== action.payload),
  //     };
  //   case "CLEAR_CART":
  //     return {
  //       ...state,
  //       carts: [],
  //     };
  //   default:
  //     return state;
  // }
};

/*
export const initialState = {
  carts: [],
};

export const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  INCREMENT_CART_PRODUCT: "INCREMENT_CART_PRODUCT",
  DECREMENT_CART_PRODUCT: "DECREMENT_CART_PRODUCT",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// Helper function to update product quantity
const updateProductQuantity = (carts, id, change) => {
  return carts.map((cartProduct) =>
    cartProduct.id === id
      ? { ...cartProduct, quantity: Math.max(1, cartProduct.quantity + change) }
      : cartProduct
  );
};

// Cart reducer function
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const existingProduct = state.carts.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          carts: state.carts.map((cartProduct) =>
            cartProduct.id === action.payload.id
              ? {
                  ...cartProduct,
                  quantity: cartProduct.quantity + action.payload.quantity,
                }
              : cartProduct
          ),
        };
      }

      return {
        ...state,
        carts: [...state.carts, { ...action.payload }],
      };
    }

    case ActionTypes.INCREMENT_CART_PRODUCT: {
      return {
        ...state,
        carts: updateProductQuantity(state.carts, action.payload.id, 1),
      };
    }

    case ActionTypes.DECREMENT_CART_PRODUCT: {
      return {
        ...state,
        carts: updateProductQuantity(state.carts, action.payload.id, -1),
      };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        carts: state.carts.filter((cartItem) => cartItem.id !== action.payload),
      };
    }

    case ActionTypes.CLEAR_CART: {
      return {
        ...state,
        carts: [],
      };
    }

    default: {
      return state;
    }
  }
};


*/

/**
import { produce } from "immer";
import { ActionTypes } from "./actionTypes"; // Assuming action types are stored in a separate file

export const initialState = {
  carts: [],
};

export const cartReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_TO_CART: {
        const existingProduct = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          draft.carts.push({ ...action.payload });
        }
        break;
      }

      case ActionTypes.INCREMENT_CART_PRODUCT: {
        const product = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (product) {
          product.quantity += 1;
        }
        break;
      }

      case ActionTypes.DECREMENT_CART_PRODUCT: {
        const product = draft.carts.find(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (product) {
          product.quantity = Math.max(1, product.quantity - 1);
        }
        break;
      }

      case ActionTypes.REMOVE_FROM_CART: {
        const index = draft.carts.findIndex(
          (cartItem) => cartItem.id === action.payload
        );
        if (index !== -1) {
          draft.carts.splice(index, 1);
        }
        break;
      }

      case ActionTypes.CLEAR_CART: {
        draft.carts = [];
        break;
      }

      default:
        break;
    }
  });


  dispatch({
  type: ActionTypes.ADD_TO_CART,
  payload: { id: 1, name: "Product A", quantity: 2 },
});

dispatch({
  type: ActionTypes.INCREMENT_CART_PRODUCT,
  payload: { id: 1 },
});


 */
