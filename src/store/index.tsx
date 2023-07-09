import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/genre";
import search from "./modules/search";
import word from "./modules/word";

export const store = configureStore({
  reducer: {
    genre: reducer,
    search: search,
    word: word
  }
})

export default store;