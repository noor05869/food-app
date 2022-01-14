import { configureStore } from "@reduxjs/toolkit";
import conterReducers from "./counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: conterReducers,
  },
});
