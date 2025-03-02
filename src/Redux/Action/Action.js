
import { ADD_TO_CART, SET_SERVICES, SELECT_SERVICE , SET_ACTIVE_TAB , TOGGLE_SERVICE } from './actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  data: item,  
});

export const setServices = (services) => ({
  type: SET_SERVICES,
  data: services,
});

export const selectService = (serviceId) => ({
  type: SELECT_SERVICE,
  data: serviceId,
});

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  data: tab,
});

export const toggleService = (serviceName) => ({
  type: TOGGLE_SERVICE,
  data: serviceName,
});

