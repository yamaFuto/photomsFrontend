import { createSlice } from "@reduxjs/toolkit"

const word = createSlice({
  name: "word",
  initialState: "",
  reducers: {
    changeWord(state, { type, payload }) {
      state = payload;
      return state;
    },
    resetWord(state) {
      state = "";
      return state;
    }
  },
})

const { changeWord, resetWord } = word.actions;

export { changeWord, resetWord };
export default word.reducer;