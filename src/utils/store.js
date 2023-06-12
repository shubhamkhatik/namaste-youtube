import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import dataSlice from "./dataSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    data:dataSlice,
    category: categorySlice,
    search: searchSlice,
    chat:chatSlice,
  },
});

export default store;
