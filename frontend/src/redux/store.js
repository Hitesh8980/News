import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    category: categoryReducer,
  },
});

export default store;
