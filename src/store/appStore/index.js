import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../slices/cardSlice";

const appStore = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default appStore;
