import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../slices/cardSlice";
import userReducer from "../slices/userInfoSlice";

const appStore = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
  },
});

export default appStore;
