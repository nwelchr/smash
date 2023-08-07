import { createSlice } from "@reduxjs/toolkit";

import data from "../data.json";

const charSlice = createSlice({
  name: "index",
  initialState: { currCharId: null, charData: Object.values(data) },
  reducers: {
    selectChar: (state, action) => {
      state.currCharId = action.payload;
    },
    saveNotes: (state, action) => {
      console.log(state, action);
      state.charData.find((char) => char.id === state.currCharId).notes =
        action.payload;
    },
  },
});

export const { selectChar, saveNotes } = charSlice.actions;
export default charSlice.reducer;
