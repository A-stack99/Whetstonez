import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer'; 
import { servicesReducer } from './ServiceReducer';  
import searchReducer from './SearchReducer';  

const rootReducer = combineReducers({
  cart: cartReducer,
  services: servicesReducer,
  search: searchReducer,
});

export default rootReducer;
