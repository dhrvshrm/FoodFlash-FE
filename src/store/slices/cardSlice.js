import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: ["Burger", "Pizza", "Coke", "Fries", "Shake", "Salad"],
    loading: false,
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.cards.push(action.payload);
    },
    removeItem: (state, _) => {
      state.cards.pop();
    },
    clearItems: (state) => {
      state.cards = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;
