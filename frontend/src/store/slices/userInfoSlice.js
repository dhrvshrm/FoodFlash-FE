import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userArea: "",
    loading: false,
    error: null,
  },
  reducers: {
    setUserArea: (state, action) => {
      state.userArea = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserArea, setLoading, setError } = userInfoSlice.actions;

export default userInfoSlice.reducer;
