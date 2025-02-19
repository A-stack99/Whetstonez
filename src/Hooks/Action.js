import Store from '../Redux/Store';
import { increment, decrement } from './counterReducer';

Store.dispatch(increment()); 
Store.dispatch(decrement());

console.log(Store.getState()); 
