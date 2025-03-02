
import { SET_SERVICES , SELECT_SERVICE } from "../Action/ActionType";

const initialState = {
  services: [],
  selectedServiceId: null,
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        services: action.data,
      };
    case SELECT_SERVICE:
      return {
        ...state,
        selectedServiceId: action.data,
      };
    default:
      return state;
  }
};






