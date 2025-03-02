
import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer';
import { servicesReducer } from './ServiceReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  services: servicesReducer, 
});

export default rootReducer;
