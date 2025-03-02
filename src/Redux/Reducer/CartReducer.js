
import { ADD_TO_CART } from "../Action/ActionType";

const cartInitialState = [];

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data]; 
    default:
      return state;
  }
};
