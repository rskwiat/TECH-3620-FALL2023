import { configureStore } from '@reduxjs/toolkit';
import reciepeReducer from './reducers/reciepeReducer';

export const store = configureStore({
  reducer: {
    recipes: reciepeReducer,
  },
})
