import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import dataSlice from "./dataSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    data:dataSlice,
    category: categorySlice,
    search: searchSlice,
  },
});

export default store;
