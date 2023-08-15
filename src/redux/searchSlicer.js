import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: ""
  },
  reducers: {
    searchimg: (state, action) => {
      state.query = action.payload;
    }
  }
});

export const { searchimg } = searchSlice.actions;

export default searchSlice;
