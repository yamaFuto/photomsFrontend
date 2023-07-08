import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/genre";

export const store = configureStore({
  reducer: {
    genre: reducer
  }
})

export default store;