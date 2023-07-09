import { createSlice } from "@reduxjs/toolkit"

const search = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    changeSearch(state, { type, payload }) {
      state = payload;
      return state;
    },
    resetSearch(state, { type, payload }) {
      state = "";
      return state;
    }
  },
})

const { changeSearch, resetSearch } = search.actions;

export { changeSearch, resetSearch };
export default search.reducer;