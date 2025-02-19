import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './Slices/Counter/Reducer';

const store = configureStore({
  reducer: {
    counter: CounterSlice, 
  },
});

export default store;






