import { createSlice } from "@reduxjs/toolkit";

import data from "../data.json";

const charSlice = createSlice({
  name: "index",
  initialState: { currCharId: null, charData: Object.values(data) },
  reducers: {
    selectChar: (state, action) => {
      state.currCharId = action.payload;
    },
  },
});

export const { selectChar } = charSlice.actions;
export default charSlice.reducer;
