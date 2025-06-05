import {SET_FLAVORS} from "../actions/action";
const INIT_FLAVORS = {
  flavors: [],
};
export const flavorReducer = (state = INIT_FLAVORS, action) => {
  switch (action.type) {
    case SET_FLAVORS:
      return {
        ...state,
        flavors: action.payload,
      };
    default:
      return state;
  }
};

const INIT_STATE = {
  carts: [],
};
export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Item exists, increment quantity
        const updatedCarts = state.carts.map((item, idx) =>
          idx === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, carts: updatedCarts };
      } else {
        // New item, set quantity to 1 if not present
        return {
          ...state,
          carts: [
            ...state.carts,
            { ...action.payload, quantity: action.payload.quantity || 1 },
          ],
        };
      }
    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
