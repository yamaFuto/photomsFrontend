import { createSlice } from "@reduxjs/toolkit"

const genre = createSlice({
  name: "genre",
  initialState: "",
  reducers: {
    changeGenre(state, { type, payload }) {
      state = payload;
      return state;
    },
    resetGenre(state) {
      state = "";
      return state;
    }
  },
})

const { changeGenre, resetGenre } = genre.actions;

export { changeGenre, resetGenre };
export default genre.reducer;