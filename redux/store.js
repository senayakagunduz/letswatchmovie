import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from './movieSlice';

export const store = configureStore({
  reducer:{
    moviesStore:moviesSlice
  }
});
