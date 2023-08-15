import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlicer";

const store = configureStore({
  reducer: {
    search: searchSlice
  }
});

export default store;